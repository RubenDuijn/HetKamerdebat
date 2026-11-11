# Editorial Template System

This document defines the reusable editorial template system for HetKamerdebat.

## 1) Editorial formats

- NEWS: reports what happened, who did what, when, and where.
- POLITICAL ANALYSIS: explains political relationships, decisions, and consequences.
- BACKGROUND: explains institutional, historical, or policy context.
- POLITICAL ESSAY / POLITIEKE BESCHOUWING: links earlier political choices and warnings to current developments through evidence-based long-term analysis.

Template files:
- website/content/templates/NEWS_TEMPLATE.md
- website/content/templates/POLITICAL_ANALYSIS_TEMPLATE.md
- website/content/templates/BACKGROUND_TEMPLATE.md
- website/content/templates/POLITICAL_ESSAY_TEMPLATE.md

## 2) Proposed article metadata structure

Required front matter keys for all new articles:

- title: string
- slug: string
- published_at: YYYY-MM-DD
- updated_at: YYYY-MM-DD
- language: string
- status: string
- editorial_format: NEWS | POLITICAL_ANALYSIS | BACKGROUND | POLITICAL_ESSAY
- category: string
- tags: list[string]
- authors: list[string]
- summary: string
- fact_check_status: string
- human_editorial_approval: required | approved

Notes:
- editorial_format is the canonical format label used for archive filtering.
- Existing articles without editorial_format are preserved; archive rendering applies fallback format inference from category when needed.

## 3) Proposed source register structure

Every factual claim must map to at least one source register entry.

Each source entry includes:
- Source title
- Publishing institution
- Original URL
- Publication date
- Date accessed
- Specific claim supported
- Source type: primary | secondary | stakeholder
- Verification status: verified | partially verified | unverified

Source priority order:
1. Original parliamentary documents and official records
2. Legislation and formal government publications
3. Independently verifiable public datasets
4. Stakeholder documents (only with explicit attribution)

## 4) Mandatory uncertainty block

Use this section whenever relevant:

- Missing or temporarily unavailable documents
- Incomplete voting or debate information
- Ongoing negotiations
- Unconfirmed statements
- Conflicting source information
- Data limitations

Rule:
- Never present an incomplete record as a complete picture.

## 5) Editorial safeguards

- Separate facts, attributed statements, and interpretation.
- Never invent quotes, statistics, positions, or motives.
- Include relevant counterarguments and alternative explanations.
- Distinguish stated party position from actual voting behavior.
- Distinguish parliamentary approval from government implementation.
- Require human editorial approval before publication.

## 6) Website workflow integration

Current markdown workflow remains unchanged:
- Articles are markdown files in website/content/articles.
- Front matter is parsed by website/js/articles.js.
- Archive is rendered by website/articles.html + website/js/articles.js.

Integration additions:
- New editorial_format metadata is parsed from front matter.
- Archive cards show a clear format label.
- Archive filter allows selecting: ALL, NEWS, POLITICAL ANALYSIS, BACKGROUND, POLITICAL ESSAY.
- POLITICAL ESSAY articles get a dedicated archive label and a more editorial reading layout with stronger typography and quote emphasis.
- Existing visual identity and static workflow are preserved.
- No CMS or additional infrastructure introduced.
