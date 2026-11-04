# ARCHITECTURE — Het Kamerdebat

## 1. Doel van dit document

Dit document beschrijft de technische architectuurvisie, inclusief:

- confirmed decisions (vastgesteld)
- provisional recommendations (nog te valideren)
- rationale en alternatieven

## 2. Architectuurprincipes

- AI-first ontwikkelaanpak, menselijk redactioneel toezicht blijft verplicht.
- Modulariteit: componenten moeten los te ontwikkelen en te vervangen zijn.
- Traceerbaarheid: elke inhoudelijke claim moet herleidbaar zijn naar bronnen.
- Simpele start, schaalbare richting.
- Vermijd lock-in zolang kernkeuzes niet gevalideerd zijn.

## 3. Systeemoverzicht (target state)

1. Presentation layer
   - publiek platform met artikelen, dossiers en datavisualisaties
2. Editorial and research layer
   - pipeline voor nieuwsmonitoring, analyse, writing en verificatie
3. Data layer
   - gestructureerde politieke data + content metadata
4. Publishing layer
   - concepten naar CMS/workflow met menselijke goedkeuring

## 4. Foundationfase (huidige implementatie)

Confirmed:

- Start met statische frontendprototype in HTML/CSS.
- Geen JavaScript-framework in fase 1.
- Geen database of API-integratie in fase 1.
- Geen WordPress-installatie in fase 1.

Resultaat:

- snelle visuele validatie
- lage technische overhead
- heldere basis voor vervolgstappen

## 5. CMS-strategie

Provisional recommendation:

- WordPress als initiële CMS-kandidaat met custom thema en REST API.

Waarom voorlopig:

- moet nog getoetst worden op redactionele workflow-fit, performance, security en beheerlast

Alternatieven om te evalueren:

- Headless CMS (bijv. Strapi)
- Custom publishing backend (Python + admin interface)

## 6. AI backend-strategie

Provisional recommendation:

- Python-services voor research, analyse, generatie en validatie
- OpenAI API voor LLM-capaciteiten

Beoogde modulaire componenten (niet geïmplementeerd in fase 1):

- News Monitor
- Topic Detector
- Research Agent
- Political Analyst
- Editorial Writer
- Fact Checker
- SEO Generator
- WordPress Publisher

## 7. Data-architectuur

Provisional recommendation:

- PostgreSQL als primaire datastore voor politieke data en onderzoeksobjecten
- SQLite toegestaan voor vroege lokale prototypes

Data domeinen (toekomstig):

- partijen
- politici
- moties en stemmingen
- parlementaire documenten
- dossiers
- artikelmetadata
- bronverificatie

## 8. Bronintegratie (toekomst)

Prioritaire primaire bronnen:

- Tweede Kamer Open Data
- Tweede Kamer OData API
- Tweede Kamer SyncFeed API
- officiële parlementaire documenten
- officiële overheidspublicaties
- partijprogramma's
- aanvullende reputabele nieuwsbronnen

Bronnenregister:

- Zie `SOURCES.md` voor officiële en aanvullende bronnen, inclusief gebruiksdoel, interfaces, verificatie en licentieaandachtspunten.

Principe:

- bouw een eigen gestructureerde kennislaag, niet alleen nieuwsaggregatie

## 9. Navigatie en information architecture (v1)

Beoogde hoofdnavigatie:

1. Home
2. Politiek Nieuws
3. Tweede Kamer
4. Partijen
5. Politici
6. Dossiers
7. Analyse & Opinie
8. Over ons

## 10. Visual system (bevestigde richting)

Confirmed:

- Design direction A: custom premium editorial news design.
- Professionele en onderscheidende digitale newsroom-uitstraling.
- Donker marineblauw + wit + subtiele rode accenten.
- Sterke typografie en duidelijke redactionele hiërarchie.
- Responsief desktop en mobiel.
- Geen generieke WordPress-nieuwstheme als beoogde eindidentiteit.

Ontwerpvereisten voor toekomstige uitbreidingen:

- nieuws
- analyse
- politieke dossiers
- partijprofielen
- politici-profielen
- parlementaire dataweergave

## 11. Security and governance uitgangspunten

- Publicatie blijft human-in-the-loop.
- Bronnen en citaten moeten verifieerbaar zijn.
- Duidelijke labeling van sample- en conceptcontent.
- Geen impliciete organisatorische affiliatie met FVD.

## 12. Open architectuurvragen

- Definitieve CMS-keuze na proof-of-concept vergelijking
- Hostingmodel (managed vs self-hosted)
- Identity/permissions voor redactioneel team
- Monitoring en quality gates voor AI-output
- Herbruikbare componentlaag met SwissCapital zonder merkvermenging
