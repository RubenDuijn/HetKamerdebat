# Het Kamerdebat

Politiek. Macht. Democratie.

Een nieuw, onafhankelijk Nederlands platform voor politiek nieuws, onderzoek en analyse.

## Doel

Het project legt een solide basis voor een professioneel, schaalbaar en AI-first publicatieplatform rond de Nederlandse politiek. De eerste fase focust op:

- documentatie en governance
- een duidelijke technische richting
- een kleine, werkende homepage-prototype zonder onnodige complexiteit

## Projectstatus

Fase: Foundation (documentatie + statische prototype)

Wat nu aanwezig is:

- projectdocumentatie in `docs/`
- eerste statische homepage in `website/`
- basis `.gitignore`

Laatste UI-update (2026-11-04):

- mobiele navigatie verfijnd naar compact hamburger-menu
- taal op homepage geharmoniseerd naar consequent Nederlands
- spacing en typografische hiërarchie aangescherpt voor 375/390/430 mobiel en desktop

## Structuur

- `docs/PROJECT_BRIEF.md`: missie, redactionele identiteit, scope en uitgangspunten
- `docs/ARCHITECTURE.md`: technische architectuur, componenten, opties en beperkingen
- `docs/DECISIONS.md`: besluitlog met onderscheid tussen bevestigd en voorlopig
- `docs/ROADMAP.md`: gefaseerde roadmap met prioriteiten en updates
- `docs/SOURCES.md`: officieel bronnenregister met primaire en aanvullende bronnen
- `docs/EDITORIAL_POLICY.md`: redactionele normen, correctiebeleid en publicatiecontrole
- `docs/CONTENT_STRATEGY.md`: publicatievormen, themaprioriteiten en dossierstrategie
- `docs/KNOWLEDGE_BASE.md`: toekomstig datamodel en relaties voor politieke kennisopbouw
- `docs/AI_EDITORIAL_ENGINE.md`: beoogde AI-workflow en kwaliteitswaarborgen
- `docs/DOSSIER_SYSTEM.md`: concept en architectuur van de toekomstige functie "Volg het dossier"
- `website/index.html`: eerste homepage-prototype
- `website/css/style.css`: styling voor de prototype

## Bevestigde ontwerprichting

- Design direction A is bevestigd: custom premium editorial news design.
- Het beoogde eindbeeld is geen generieke WordPress-nieuwssjabloon.
- De visuele identiteit blijft gericht op donker marineblauw, wit, subtiele rode accenten, sterke typografie en duidelijke redactionele hiërarchie.
- Het ontwerp moet schaalbaar zijn naar nieuws, analyse, dossiers, partijprofielen, politici-profielen en parlementaire dataweergave.

## Eerste lokale run

Omdat dit een statische start is, zijn er geen dependencies nodig.

Optie 1 (snel):

1. Open `website/index.html` direct in de browser.

Optie 2 (aanbevolen met lokale server):

1. Ga naar de projectmap.
2. Start een simpele server, bijvoorbeeld:
   - `python3 -m http.server 8080`
3. Open `http://localhost:8080/website/`.

## Belangrijke principes

- Documenteer alle belangrijke keuzes.
- Maak expliciet onderscheid tussen:
  - confirmed decisions
  - provisional recommendations
- Vermijd premature infrastructuurkeuzes.
- Houd ontwerp modulair en uitbreidbaar.
- Implementeer geen API-integraties in de foundationfase; documenteer eerst bronbeleid en datakwaliteit.

## Volgende stap (aanbevolen)

Uitwerken van contentmodel, datacontracten en dossierkoppelingen voor:

- artikeltypen (nieuws, analyse, opinie, dossier)
- bronverwijzing en bewijsvoering
- onderscheid tussen feit, analyse, opinie en partijstandpunt
- relaties tussen dossiers, politici, partijen, moties en stemmingen

Dit kan eerst in documentatie (schema + voorbeelden), vóór implementatie van backend of CMS-koppelingen.
