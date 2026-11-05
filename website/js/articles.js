const DEFAULT_ARTICLE_PATH = "../content/articles/first-article.md";

const ARTICLE_ARCHIVE = [
  {
    path: "../content/articles/first-article.md",
    href: "article-zichtbaarheid-controle.html"
  },
  {
    path: "../content/articles/second-article.md",
    href: "article-van-motie-tot-uitvoering.html"
  }
];

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
  const linkRegex = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let cursor = 0;
  let html = "";

  for (const match of text.matchAll(linkRegex)) {
    const index = match.index ?? 0;
    const [fullMatch, label, href] = match;
    html += escapeHtml(text.slice(cursor, index));

    const isExternal = /^https?:\/\//i.test(href);
    const rel = isExternal ? ' rel="noopener noreferrer" target="_blank"' : "";
    html += `<a href="${escapeHtml(href)}"${rel}>${escapeHtml(label)}</a>`;

    cursor = index + fullMatch.length;
  }

  html += escapeHtml(text.slice(cursor));
  return html;
}

function markdownToHtml(markdown) {
  const lines = markdown.split("\n");
  const chunks = [];

  let paragraphLines = [];
  let listType = null;
  let listItems = [];

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
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const headingText = heading[2].trim();
      chunks.push(`<h${level}>${formatInline(headingText)}</h${level}>`);
      continue;
    }

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

  return chunks.join("\n");
}

function formatDutchDate(isoDate) {
  if (!isoDate) {
    return "";
  }

  const value = new Date(isoDate);
  if (Number.isNaN(value.getTime())) {
    return isoDate;
  }

  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(value);
}

function estimateReadTime(markdownBody) {
  const words = markdownBody
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[[^\]]+\]\([^)]*\)/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}

export async function loadArticle(path = DEFAULT_ARTICLE_PATH) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Kon artikel niet laden: ${path}`);
  }

  const raw = await response.text();
  const { frontMatter, markdownBody } = parseFrontMatter(raw);

  return {
    frontMatter,
    markdownBody,
    htmlBody: markdownToHtml(markdownBody),
    readTimeMinutes: estimateReadTime(markdownBody),
    sourcePath: path
  };
}

export async function renderArticlePage({
  articlePath = DEFAULT_ARTICLE_PATH,
  titleSelector = "#article-title",
  metaSelector = "#article-meta",
  contentSelector = "#article-content",
  summarySelector = "#article-summary"
} = {}) {
  const article = await loadArticle(articlePath);
  const { frontMatter, htmlBody, markdownBody, readTimeMinutes } = article;

  const titleNode = document.querySelector(titleSelector);
  const metaNode = document.querySelector(metaSelector);
  const summaryNode = document.querySelector(summarySelector);
  const contentNode = document.querySelector(contentSelector);

  if (titleNode) {
    titleNode.textContent = frontMatter.title || "Ongetitelde publicatie";
  }

  if (frontMatter.title) {
    document.title = `Analyse | ${frontMatter.title} | Het Kamerdebat`;
  }

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta && frontMatter.summary) {
    descriptionMeta.setAttribute("content", frontMatter.summary);
  }

  if (metaNode) {
    const category = frontMatter.category || "Publicatie";
    const date = formatDutchDate(frontMatter.published_at);
    metaNode.textContent = `${category}${date ? ` · ${date}` : ""} · ${readTimeMinutes} min leestijd`;
  }

  if (summaryNode) {
    summaryNode.textContent = frontMatter.summary || "";
  }

  if (contentNode) {
    contentNode.innerHTML = htmlBody;
  }

  return { ...article, markdownBody };
}

export async function renderArchivePage({
  articles = ARTICLE_ARCHIVE,
  listSelector = "#archive-list"
} = {}) {
  const listNode = document.querySelector(listSelector);

  if (!listNode) {
    return [];
  }

  const loaded = await Promise.all(
    articles.map(async ({ path, href }) => {
      const article = await loadArticle(path);
      return { ...article, href };
    })
  );

  // Most recent publication first for archive readability.
  loaded.sort((a, b) => {
    const aDate = new Date(a.frontMatter.published_at || 0).getTime();
    const bDate = new Date(b.frontMatter.published_at || 0).getTime();
    return bDate - aDate;
  });

  listNode.innerHTML = loaded
    .map(({ frontMatter, readTimeMinutes, href }) => {
      const date = formatDutchDate(frontMatter.published_at);
      return `
        <article class="archive-card">
          <p class="meta">${escapeHtml(frontMatter.category || "Publicatie")}</p>
          <h3>${escapeHtml(frontMatter.title || "Ongetitelde publicatie")}</h3>
          <p class="archive-summary">${escapeHtml(frontMatter.summary || "")}</p>
          <p class="archive-meta">${escapeHtml(date)} · ${readTimeMinutes} min leestijd</p>
          <a class="archive-link" href="${escapeHtml(href)}">Lees volledige analyse</a>
        </article>
      `;
    })
    .join("");

  return loaded;
}
