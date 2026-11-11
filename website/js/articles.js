const DEFAULT_ARTICLE_PATH = "content/articles/first-article.md";

const ARTICLE_ARCHIVE = [
  {
    path: "content/articles/first-article.md",
    href: "article-zichtbaarheid-controle.html"
  },
  {
    path: "content/articles/second-article.md",
    href: "article-van-motie-tot-uitvoering.html"
  },
  {
    path: "content/articles/belastingplan-2027-minderheidskabinet.md",
    href: "article-belastingplan-2027-minderheidskabinet.html"
  },
  {
    path: "content/articles/moties-stemmingen-politieke-verantwoordelijkheid.md",
    href: "article-moties-stemmingen-politieke-verantwoordelijkheid.html"
  },
  {
    path: "content/articles/klimaatbegroting-2027.md",
    href: "article-klimaatbegroting-2027.html"
  }
];

const EDITORIAL_FORMAT_LABELS = {
  NEWS: "NEWS",
  POLITICAL_ANALYSIS: "POLITICAL ANALYSIS",
  BACKGROUND: "BACKGROUND",
  POLITICAL_ESSAY: "POLITICAL ESSAY / POLITIEKE BESCHOUWING"
};

function normalizeEditorialFormat(frontMatter = {}) {
  const raw = String(frontMatter.editorial_format || "").trim().toUpperCase();

  if (raw === "NEWS") {
    return "NEWS";
  }
  if (raw === "POLITICAL_ANALYSIS" || raw === "POLITICAL ANALYSIS") {
    return "POLITICAL_ANALYSIS";
  }
  if (raw === "BACKGROUND") {
    return "BACKGROUND";
  }
  if (
    raw === "POLITICAL_ESSAY" ||
    raw === "POLITICAL ESSAY" ||
    raw === "POLITIEKE_BESCHOUWING" ||
    raw === "POLITIEKE BESCHOUWING"
  ) {
    return "POLITICAL_ESSAY";
  }

  const category = String(frontMatter.category || "").toLowerCase();
  if (category.includes("nieuws") || category.includes("news")) {
    return "NEWS";
  }
  if (category.includes("achtergrond") || category.includes("background")) {
    return "BACKGROUND";
  }
  if (category.includes("beschouwing") || category.includes("essay")) {
    return "POLITICAL_ESSAY";
  }

  return "POLITICAL_ANALYSIS";
}

function formatEditorialFormatLabel(format) {
  return EDITORIAL_FORMAT_LABELS[format] || EDITORIAL_FORMAT_LABELS.POLITICAL_ANALYSIS;
}

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

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushQuote();
      const level = heading[1].length;
      const headingText = heading[2].trim();
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
  summarySelector = "#article-summary",
  articleSelector = ".analysis-article"
} = {}) {
  const article = await loadArticle(articlePath);
  const { frontMatter, htmlBody, markdownBody, readTimeMinutes } = article;
  const editorialFormat = normalizeEditorialFormat(frontMatter);
  const editorialFormatLabel = formatEditorialFormatLabel(editorialFormat);

  const titleNode = document.querySelector(titleSelector);
  const metaNode = document.querySelector(metaSelector);
  const summaryNode = document.querySelector(summarySelector);
  const contentNode = document.querySelector(contentSelector);
  const articleNode = document.querySelector(articleSelector);

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
    metaNode.textContent = `${editorialFormatLabel} · ${category}${date ? ` · ${date}` : ""} · ${readTimeMinutes} min leestijd`;
  }

  if (summaryNode) {
    summaryNode.textContent = frontMatter.summary || "";
  }

  if (contentNode) {
    contentNode.innerHTML = htmlBody;
  }

  if (articleNode) {
    articleNode.setAttribute("data-editorial-format", editorialFormat);
    articleNode.classList.toggle("analysis-article--essay", editorialFormat === "POLITICAL_ESSAY");
  }

  return { ...article, markdownBody };
}

export async function renderArchivePage({
  articles = ARTICLE_ARCHIVE,
  listSelector = "#archive-list",
  filterSelector = "#archive-format-filter"
} = {}) {
  const listNode = document.querySelector(listSelector);
  const filterNode = document.querySelector(filterSelector);

  if (!listNode) {
    return [];
  }

  const loaded = await Promise.all(
    articles.map(async ({ path, href }) => {
      const article = await loadArticle(path);
      return {
        ...article,
        href,
        editorialFormat: normalizeEditorialFormat(article.frontMatter)
      };
    })
  );

  // Most recent publication first for archive readability.
  loaded.sort((a, b) => {
    const aDate = new Date(a.frontMatter.published_at || 0).getTime();
    const bDate = new Date(b.frontMatter.published_at || 0).getTime();
    return bDate - aDate;
  });

  function renderList(items) {
    listNode.innerHTML = items
      .map(({ frontMatter, readTimeMinutes, href, editorialFormat }) => {
        const formatLabel = formatEditorialFormatLabel(editorialFormat);
        const category = frontMatter.category || "Publicatie";
        const combinedMeta = `${formatLabel} · ${category}`;
        const readLabel =
          editorialFormat === "BACKGROUND"
            ? "Lees achtergrond"
            : editorialFormat === "POLITICAL_ESSAY"
              ? "Lees politieke beschouwing"
              : "Lees volledige publicatie";
        const date = formatDutchDate(frontMatter.published_at);
        return `
        <article class="archive-card" data-editorial-format="${escapeHtml(editorialFormat)}">
          <p class="archive-format-chip">${escapeHtml(formatLabel)}</p>
          <p class="meta">${escapeHtml(combinedMeta)}</p>
          <h3>${escapeHtml(frontMatter.title || "Ongetitelde publicatie")}</h3>
          <p class="archive-summary">${escapeHtml(frontMatter.summary || "")}</p>
          <p class="archive-meta">${escapeHtml(date)} · ${readTimeMinutes} min leestijd</p>
          <a class="archive-link" href="${escapeHtml(href)}">${readLabel}</a>
        </article>
      `;
      })
      .join("");
  }

  renderList(loaded);

  if (filterNode) {
    const filterOptions = [
      { value: "ALL", label: "Alles" },
      { value: "NEWS", label: "NEWS" },
      { value: "POLITICAL_ANALYSIS", label: "POLITICAL ANALYSIS" },
      { value: "BACKGROUND", label: "BACKGROUND" },
      { value: "POLITICAL_ESSAY", label: "POLITICAL ESSAY" }
    ];

    filterNode.innerHTML = filterOptions
      .map(
        ({ value, label }) =>
          `<button type="button" class="archive-filter-button" data-format-filter="${value}"${value === "ALL" ? ' aria-pressed="true"' : ' aria-pressed="false"'}>${label}</button>`
      )
      .join("");

    for (const button of filterNode.querySelectorAll(".archive-filter-button")) {
      button.addEventListener("click", () => {
        const format = button.getAttribute("data-format-filter") || "ALL";
        for (const candidate of filterNode.querySelectorAll(".archive-filter-button")) {
          candidate.setAttribute("aria-pressed", candidate === button ? "true" : "false");
        }

        const filtered = format === "ALL" ? loaded : loaded.filter((item) => item.editorialFormat === format);
        renderList(filtered);
      });
    }
  }

  return loaded;
}
