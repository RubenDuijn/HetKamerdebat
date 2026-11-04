# ROADMAP — Het Kamerdebat

## Roadmapdoel

Een gefaseerde route van foundation naar een schaalbaar AI-first politiek publicatieplatform.

## Foundationstatus (huidig)

Status: In uitvoering

Doelen:

- [x] Basismappen en documentatie aanmaken
- [x] Projectbrief en architectuurkader vastleggen
- [x] Besluitlog met confirmed/provisional status introduceren
- [x] Kleine responsive homepage-prototype bouwen (HTML/CSS)
- [x] Officieel bronnenregister documenteren (`docs/SOURCES.md`)
- [x] Bevestigde designrichting (Design A) expliciet vastleggen
- [x] Scopegrens bevestigen: geen API-integraties in foundationfase
- [ ] Contentmodel en publicatiestandaarden formaliseren

Resultaat:

- Werkende basis voor ontwerp-, content- en techniekbesluiten

## Gefaseerde roadmap

### Phase 1: Brand, visual identity and website prototype

Status: In uitvoering

Doelen:

- merkidentiteit en designrichting borgen
- statische homepage valideren en itereren
- dossierpresentatie als prototypecomponent zichtbaar maken

### Phase 2: CMS and initial website

Status: Gepland

Doelen:

- CMS-opties evalueren en voorlopige keuze toetsen
- initiële publicatiewebsite opzetten
- redactionele publicatiestromen inrichten

Randvoorwaarde:

- WordPress en hosting blijven provisional totdat expliciet bevestigd.

### Phase 3: Source register and research infrastructure

Status: Gepland

Doelen:

- bronnenregister uitbreiden en onderhouden
- bronkwaliteitsregels en verificatieprotocollen standaardiseren
- research-werkstroom en bronmetadata structureren

### Phase 4: Tweede Kamer data integration

Status: Gepland

Doelen:

- gecontroleerde integratie van Tweede Kamer Open Data
- OData- en SyncFeed-koppelingen voorbereiden en valideren
- document-, motie- en stemmingsdata aan kennislaag koppelen

Randvoorwaarde:

- integraties pas na expliciete implementatiebeslissing.

### Phase 5: Political knowledge base

Status: Gepland

Doelen:

- entiteitsmodel implementeren (partijen, politici, moties, documenten, stemmingen, dossiers, claims)
- relationele koppelingen opzetten tussen content en bronobjecten
- scheiding tussen brondata en AI-interpretaties afdwingen

### Phase 6: AI editorial engine

Status: Gepland

Doelen:

- workflow realiseren: News Monitor → Research Agent → Political Analyst → Editorial Writer → Factchecker → Human Approval → Publisher
- verificatiestatus en kwaliteitscontroles verankeren
- conceptpublicaties voorbereiden voor CMS-workflow

### Phase 7: Dossiers, profiles, timelines and voting explorer

Status: Gepland

Doelen:

- dossierpagina's als centrale kennis-hubs uitrollen
- partij- en politici-profielen publiceren
- tijdlijnen en stemgedragverkenner toevoegen
- "Volg het dossier" voorbereiden op gebruikersniveau

### Phase 8: Automation, newsletter and audience development

Status: Gepland

Doelen:

- redactionele automatisering gecontroleerd opschalen
- nieuwsbriefprocessen en distributieroutines opzetten
- publieksgroei en engagement meten en verbeteren

Niet in scope voor huidige fase:

- productie-API's
- database-implementatie
- accountsystemen, notificaties en abonnementen
- AI-agentimplementatie

## Updateprotocol

Bij elke afgeronde taak of prioriteitswijziging:

1. Pas status en checklist aan.
2. Voeg impact op vervolgfases toe.
3. Synchroniseer met `DECISIONS.md` en `ARCHITECTURE.md`.
