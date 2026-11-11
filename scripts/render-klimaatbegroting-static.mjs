import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const articlePath = path.join(repoRoot, "website/content/articles/klimaatbegroting-2027.md");
const pagePath = path.join(repoRoot, "website/article-klimaatbegroting-2027.html");

function parseFrontMatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontMatter: {}, markdownBody: raw };
  }

  const frontMatterText = match[1];
  const markdownBody = match[2];
  const lines = frontMatterText.split("\n");
  const frontMatter = {};
  let currentListKey = null;

  for (const line of lines) {
    const keyMatch = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (keyMatch) {
      const [, key, value] = keyMatch;
      const trimmedValue = value.trim();
      if (trimmedValue === "") {
        frontMatter[key] = [];
        currentListKey = key;
      } else {
        currentListKey = null;
        frontMatter[key] = trimmedValue.replace(/^"|"$/g, "");
      }
      continue;
    }

    const listMatch = line.match(/^\s*-\s*(.*)$/);
    if (listMatch && currentListKey) {
      frontMatter[currentListKey].push(listMatch[1].replace(/^"|"$/g, ""));
    }
  }

  return { frontMatter, markdownBody };
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatInline(text) {
  const tokenized = [];
  let working = text;

  working = working.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
    const idx = tokenized.push({ label, href }) - 1;
    return `@@LINK_${idx}@@`;
  });

  let html = escapeHtml(working);

  // Bold before italic to avoid partial matches.
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  html = html.replace(/@@LINK_(\d+)@@/g, (_, indexText) => {
    const entry = tokenized[Number(indexText)];
    if (!entry) {
      return "";
    }
    const isExternal = /^https?:\/\//i.test(entry.href);
    const rel = isExternal ? ' rel="noopener noreferrer" target="_blank"' : "";
    return `<a href="${escapeHtml(entry.href)}"${rel}>${escapeHtml(entry.label)}</a>`;
  });

  return html;
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function markdownToHtml(markdown) {
  const lines = markdown.split("\n");
  const chunks = [];

  let paragraphLines = [];
  let listType = null;
  let listItems = [];
  let quoteLines = [];
  let lastHeadingLevel = 1;

  function flushParagraph() {
    if (!paragraphLines.length) {
      return;
    }
    const text = paragraphLines.join(" ").trim();
    if (text) {
      chunks.push(`<p>${formatInline(text)}</p>`);
    }
    paragraphLines = [];
  }

  function flushQuote() {
    if (!quoteLines.length) {
      return;
    }

    const quoteHtml = quoteLines
      .map((line) => `<p>${formatInline(line)}</p>`)
      .join("");
    chunks.push(`<blockquote>${quoteHtml}</blockquote>`);
    quoteLines = [];
  }

  function flushList() {
    if (!listType || !listItems.length) {
      listType = null;
      listItems = [];
      return;
    }

    const itemHtml = listItems.map((item) => `<li>${formatInline(item)}</li>`).join("");
    chunks.push(`<${listType}>${itemHtml}</${listType}>`);
    listType = null;
    listItems = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();

      const level = heading[1].length;
      const headingText = heading[2].trim();

      if (level - lastHeadingLevel > 1) {
        throw new Error(
          `Kopniveau slaat een niveau over: van h${lastHeadingLevel} naar h${level} bij "${headingText}"`
        );
      }

      lastHeadingLevel = level;
      const headingId = slugifyHeading(headingText);
      const idAttr = headingId ? ` id="${escapeHtml(headingId)}"` : "";
      chunks.push(`<h${level}${idAttr}>${formatInline(headingText)}</h${level}>`);
      continue;
    }

    const blockquoteLine = line.match(/^>\s?(.*)$/);
    if (blockquoteLine) {
      flushParagraph();
      flushList();
      quoteLines.push(blockquoteLine[1]);
      continue;
    }

    flushQuote();

    const orderedItem = line.match(/^\d+\.\s+(.+)$/);
    if (orderedItem) {
      flushParagraph();
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listItems.push(orderedItem[1]);
      continue;
    }

    const unorderedItem = line.match(/^-\s+(.+)$/);
    if (unorderedItem) {
      flushParagraph();
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listItems.push(unorderedItem[1]);
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();
  flushQuote();

  return chunks.join("\n");
}

function removeDuplicateMarkdownTitle(markdownBody, frontMatterTitle) {
  const lines = markdownBody.split("\n");
  if (!lines.length) {
    return markdownBody;
  }

  let firstContentIndex = 0;
  while (firstContentIndex < lines.length && lines[firstContentIndex].trim() === "") {
    firstContentIndex += 1;
  }

  if (firstContentIndex >= lines.length) {
    return markdownBody;
  }

  const firstHeading = lines[firstContentIndex].match(/^#\s+(.+)$/);
  if (!firstHeading) {
    return markdownBody;
  }

  const normalizedFirst = firstHeading[1].trim();
  const normalizedTitle = String(frontMatterTitle || "").trim();
  if (normalizedFirst && normalizedFirst === normalizedTitle) {
    return lines.slice(firstContentIndex + 1).join("\n").replace(/^\n+/, "");
  }

  return markdownBody;
}

function renderMeta(frontMatter) {
  const format = String(frontMatter.editorial_format || "POLITICAL_ANALYSIS").toUpperCase();
  const category = frontMatter.category || "Publicatie";
  const date = frontMatter.published_at || "";
  return `${format} · ${category}${date ? ` · ${date}` : ""}`;
}

function main() {
  const markdownRaw = fs.readFileSync(articlePath, "utf8");
  const htmlRaw = fs.readFileSync(pagePath, "utf8");

  const { frontMatter, markdownBody } = parseFrontMatter(markdownRaw);
  const bodyWithoutDuplicateTitle = removeDuplicateMarkdownTitle(markdownBody, frontMatter.title);
  const articleHtml = markdownToHtml(bodyWithoutDuplicateTitle);

  let out = htmlRaw;

  // Ensure the site brand is no longer an h1, leaving one page h1 for article title.
  out = out
    .replace('<h1><a class="brand-link" href="index.html">Het Kamerdebat</a></h1>', '<p class="brand-title"><a class="brand-link" href="index.html">Het Kamerdebat</a></p>')
    .replace(/<h[12] id="article-title">[\s\S]*?<\/h[12]>/, `<h1 id="article-title">${escapeHtml(frontMatter.title || "Ongetitelde publicatie")}</h1>`)
    .replace(/<p id="article-meta" class="section-label">[\s\S]*?<\/p>/, `<p id="article-meta" class="section-label">${escapeHtml(renderMeta(frontMatter))}</p>`)
    .replace(/<p id="article-summary" class="article-intro">[\s\S]*?<\/p>/, `<p id="article-summary" class="article-intro">${escapeHtml(frontMatter.summary || "")}</p>`)
    .replace(/<div id="article-content">[\s\S]*?<\/div>/, `<div id="article-content">\n${articleHtml}\n</div>`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>Analyse | ${escapeHtml(frontMatter.title || "Ongetitelde publicatie")} | Het Kamerdebat</title>`)
    .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/, `<meta\n      name="description"\n      content="${escapeHtml(frontMatter.summary || "Analyse van Het Kamerdebat")}"\n    />`)
    .replace(/\s*<script type="module">[\s\S]*?<\/script>\s*/m, "\n");

  fs.writeFileSync(pagePath, out, "utf8");
  console.log("Static render complete:", pagePath);
}

main();
