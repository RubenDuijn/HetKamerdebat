# KNOWLEDGE BASE — Het Kamerdebat

## 1. Doel

Het Kamerdebat bouwt op termijn een gestructureerde politieke knowledge base die:

- dossiers en artikelen inhoudelijk koppelt
- feiten en bronverwijzingen traceerbaar houdt
- redactioneel onderzoek versnelt
- AI-workflows ondersteunt zonder bronintegriteit te verliezen

## 2. Kernprincipe

Originele broninformatie blijft strikt gescheiden van AI-gegenereerde samenvattingen, analyses en interpretaties.

Dit betekent:

- bronobjecten worden opgeslagen met herkomstmetadata
- AI-output wordt apart gelabeld en versioneerbaar gemaakt
- publicatiebeslissingen blijven redactioneel

## 3. Voorgestelde entiteiten

### PoliticalParty
Partijgegevens, ideologische positionering, programma's, officiële verklaringen, parlementaire vertegenwoordiging.

### Politician
Persoonsprofiel met functies, partijhistorie, relevante uitspraken en parlementaire activiteit.

### ParliamentaryMotion
Moties en amendementen inclusief indieners, onderwerp, status en stemresultaten.

### ParliamentaryDocument
Kamerstukken, wetsdocumenten, brieven en andere parlementaire of officiële documenten.

### VotingRecord
Stemmingsuitslagen gekoppeld aan moties, amendementen, wetsvoorstellen en stemgedrag per partij/politicus.

### PoliticalTopic
Thematische labels (bijvoorbeeld immigratie, energie, EU, democratie) voor clustering en analyse.

### PoliticalDossier
Doorlopende themapagina die gebeurtenissen, documenten, analyses en tijdlijnitems bundelt.

### Source
Bronregisterobject met bronmetadata, licentie-informatie, verificatiestatus en herkomst-URL's.

### Claim
Concrete feitelijke claim met status (geverifieerd, onzeker, weerlegd), bewijslinks en context.

### Article
Publicatieobject (news, analysis, opinion, investigation, factcheck) met relaties naar claims, bronnen en dossiers.

### ResearchSession
Onderzoekscontext waarin bronselectie, verificatiestappen, open vragen en conceptbevindingen worden vastgelegd.

## 4. Relaties tussen entiteiten

Belangrijkste relaties:

- `PoliticalParty` ↔ `Politician`
  - een partij heeft meerdere politici
  - een politicus heeft actuele en historische partijkoppelingen

- `ParliamentaryMotion` ↔ `ParliamentaryDocument`
  - een motie verwijst naar bijbehorende documenten

- `ParliamentaryMotion` ↔ `VotingRecord`
  - een motie heeft één of meer stemmomenten

- `VotingRecord` ↔ `PoliticalParty` en `Politician`
  - stemgedrag per partij en, waar relevant, per lid

- `PoliticalTopic` ↔ `PoliticalDossier`
  - een dossier is gekoppeld aan één hoofdtopic en meerdere subtopics

- `PoliticalDossier` ↔ `Article`
  - artikelen worden thematisch aan dossiers gekoppeld

- `PoliticalDossier` ↔ `ParliamentaryDocument` / `ParliamentaryMotion` / `VotingRecord`
  - dossierpagina's tonen primaire politieke ontwikkeling en context

- `Source` ↔ alle inhoudelijke entiteiten
  - claims, documenten en artikelen verwijzen naar bronrecords

- `Claim` ↔ `Article`
  - artikelen bestaan uit of verwijzen naar verifieerbare claims

- `ResearchSession` ↔ `Source` / `Claim` / `Article`
  - traceert onderzoeksproces en redactionele beslissingen

## 5. Dossierfunctie "Volg het dossier"

De knowledge base maakt een toekomstige volgfunctie mogelijk:

- detecteren welke nieuwe items relevant zijn voor een dossier
- tonen van nieuwe artikelen, documenten en stemmingen per dossier
- opbouwen van een tijdlijn met historisch overzicht
- voorbereiden van dossierupdates en latere notificaties

Deze fase implementeert nog geen accounts, notificaties of abonnementen.

## 6. Datakwaliteit en governance

- Elke entiteit krijgt een unieke identifier en bronverwijzing.
- Elke automatische koppeling krijgt een verificatiestatus.
- Conflicterende data blijft zichtbaar met redactionele notitie.
- Audittrail blijft verplicht voor belangrijke claimwijzigingen.

## 7. Implementatiestatus

Confirmed:

- Knowledge-base concept en entiteiten zijn onderdeel van de langetermijnarchitectuur.

Provisional:

- Definitieve database-engineering, schemaontwerp en synchronisatiepatronen.
