# DECISIONS — Het Kamerdebat

Dit document houdt technische en productbeslissingen bij, met motivatie en status.

## Statuslegenda

- Confirmed: actief vastgesteld en direct van toepassing.
- Provisional: aanbevolen richting, nog te valideren.
- Rejected: expliciet afgewezen.

## Besluiten

### D-001 — Foundation start met documentatie + statische prototype
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Eerst documentatie en een kleine HTML/CSS homepage bouwen, zonder extra infrastructuur.
- Rationale: Laag risico, snelle validatie van merk en structuur, voorkomt premature technische lock-in.

### D-002 — Geen framework in eerste frontendprototype
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Eerste versie gebruikt alleen HTML en CSS.
- Rationale: Focus op layout, informatiearchitectuur en visuele identiteit.

### D-003 — Geen API/database/CMS-implementatie in fase 1
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Geen integraties of backend in foundationfase.
- Rationale: Eerst inhoudelijke en architecturale basis scherpstellen.

### D-004 — WordPress als initiële CMS-kandidaat
- Status: Provisional
- Datum: 2026-11-04
- Besluit: WordPress wordt als voorkeursoptie gedocumenteerd, maar nog niet definitief gekozen.
- Rationale: Sterk ecosysteem en publicatieworkflow, maar nog te valideren op beheer, schaalbaarheid en security.
- Alternatieven: Headless CMS of custom Python publishing backend.

### D-005 — AI-first redactiestrategie met human approval
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: AI ondersteunt research en schrijfworkflow, maar publicatie vereist menselijke redactionele goedkeuring.
- Rationale: Kwaliteit, betrouwbaarheid en aansprakelijkheid.

### D-006 — Data-first politieke kennislaag
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Eigen gestructureerde politieke database opbouwen als kerncapaciteit.
- Rationale: Onafhankelijkheid, herbruikbaarheid en diepere analyse dan nieuwsherpublicatie.

### D-007 — PostgreSQL als voorkeursdatabase voor productie
- Status: Provisional
- Datum: 2026-11-04
- Besluit: PostgreSQL als primaire kandidaat; SQLite toegestaan voor lokale vroege prototypes.
- Rationale: PostgreSQL biedt robuuste query- en schaalopties; SQLite versnelt vroege iteratie.

### D-008 — Redactionele positionering en transparantie
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Pro-FVD orientation mag zichtbaar zijn, maar zonder impliciete formele affiliatie met FVD.
- Rationale: Juridische en redactionele helderheid.

### D-009 — Definitieve visuele richting: Design A
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Het beoogde eindontwerp is een custom premium editorial news design; geen generieke WordPress-nieuwstheme als eindidentiteit.
- Rationale: Een onderscheidende newsroom-uitstraling is nodig voor geloofwaardigheid, merkherkenning en heldere redactionele hiërarchie.
- Uitwerking: Donker marineblauw, wit, subtiele rode accenten, sterke typografie en schaalbaarheid naar nieuws, analyse, dossiers, partijprofielen, politici-profielen en parlementaire data.

### D-010 — Officieel bronnenregister invoeren
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Het project beheert een expliciet bronnenregister in `docs/SOURCES.md` met primaire en aanvullende overheids- en parlementaire bronnen.
- Rationale: Traceerbaarheid, journalistieke controleerbaarheid en consistente datakwaliteit vereisen centrale bronregistratie.

### D-011 — Strategische feature: "Volg het dossier"
- Status: Confirmed
- Datum: 2026-11-04
- Besluit: Het platform ontwikkelt op termijn een dossiervolgfunctie waarmee bezoekers onderwerpgerichte updates kunnen volgen.
- Rationale: HetKamerdebat positioneert zich als doorlopende kennis- en onderzoeksomgeving, niet alleen als losse nieuwsfeed.
- Scopegrens: in deze fase alleen documentatie en prototypeweergave; geen accounts, notificaties of e-mailabonnementen.

## Besluitregels

Bij elke nieuwe belangrijke keuze:

1. Voeg datum, status en rationale toe.
2. Noteer ten minste één alternatief.
3. Koppel impact aan architectuur en roadmap.
4. Werk gerelateerde documenten direct bij (`ARCHITECTURE.md`, `ROADMAP.md`, `README.md` indien relevant).
