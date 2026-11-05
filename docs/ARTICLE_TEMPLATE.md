# ARTICLE_TEMPLATE.md

Doel: herbruikbaar redactioneel sjabloon voor bronverifieerbare politieke analyses op Het Kamerdebat.

## 1. Front matter (verplicht)
Gebruik YAML bovenaan elk artikelbestand.

```yaml
---
title: "<Titel>"
slug: "<kebab-case-slug>"
published_at: "YYYY-MM-DD"
language: "nl"
status: "draft-for-editorial-review"
authors:
  - "Redactie Het Kamerdebat"
category: "Analyse"
tags:
  - "Tweede Kamer"
fact_check_status: "source-verified"
summary: "<1-2 zinnen samenvatting>"
---
```

## 2. Artikelstructuur (verplicht)
Gebruik deze secties in deze volgorde:

1. Kop + korte samenvatting
2. Feitenbasis (alleen bronverifieerbare claims)
3. Analyse (interpretatie, expliciet als interpretatie)
4. Wat deze analyse niet claimt
5. Redactionele conclusie
6. Bronnenregister
7. Claim-to-source mapping
8. Publicatiestatus

## 3. Scheiding feit en interpretatie (hard rule)
- Feiten: controleerbaar, herleidbaar naar primaire bron.
- Analyse: argumentatie op basis van feiten, zonder presenteren als hard feit.
- Vermijd vermenging van normatief oordeel met feitelijke claim in dezelfde zin.

## 4. Bronstandaard (hard rule)
- Gebruik primaire institutionele bronnen waar mogelijk (wet, Tweede Kamer, officiële open data, ministeries).
- Noteer per claim minimaal 1 bron in mapping.
- Geen anonieme of niet-herleidbare claims.
- Als bronstatus onzeker is: markeer als "verificatie nodig" en niet publiceren.

## 5. Stijlrichtlijnen
- Zakelijk, precies, geen retorische overdrijving.
- Definieer procedurele termen kort bij eerste gebruik (motie, amendement, etc.).
- Vermijd absolute conclusies als data dat niet dragen.
- Schrijf voor lezers die inhoudelijk geïnteresseerd zijn maar niet per se specialist zijn.

## 6. Eindredactie-checklist
- [ ] Alle feitclaims staan in claim-to-source mapping.
- [ ] Alle links in bronnenregister zijn klikbaar en actueel.
- [ ] Duidelijke scheiding tussen feiten en analyse.
- [ ] Titel en samenvatting dekken de feitelijke inhoud.
- [ ] Geen onbevestigde cijfers of personenclaims.
- [ ] Publicatiestatus ingevuld met expliciet advies.

## 7. Korte skeleton
```markdown
---
<front matter>
---

# <Titel>

## Korte samenvatting
...

## Feitenbasis (bronverifieerbaar)
...

## Analyse (interpretatie, geen feitclaim)
...

## Wat deze analyse niet claimt
...

## Redactionele conclusie
...

## Bronnenregister
1. ...

## Claim-to-source mapping
- Claim: ... -> Bron X

## Publicatiestatus
Advies: ...
```
