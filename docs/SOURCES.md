# SOURCES — Het Kamerdebat

## 1. Doel

Dit document beschrijft de officiële en aanvullende informatiebronnen die HetKamerdebat.nl gebruikt voor journalistiek onderzoek, politieke analyse, parlementaire informatie en dataverzameling.

Kernprincipe:

- Primaire en officiële bronnen krijgen voorrang.

## 2. Gebruik van dit register

Elke bron wordt vastgelegd met een vaste set velden:

- Naam
- Officiële website
- Categorie
- Onderwerpen
- Brontype
- API of machineleesbare toegang
- Updatefrequentie
- Licentie en hergebruik
- Beoogd gebruik
- Verificatievereisten
- Status (`approved`, `under review`, `research only`)

Regel voor onbekende gegevens:

- Als informatie over API, licentie of updatefrequentie nog niet formeel geverifieerd is, wordt dat expliciet gemarkeerd als `verificatie vereist`.

## 3. Broncategorieën

### 3.1 Dutch Parliament and official parliamentary documents

#### Tweede Kamer Open Data Portaal
- Naam: Tweede Kamer Open Data Portaal
- Officiële website: https://opendata.tweedekamer.nl/
- Categorie: Dutch Parliament and official parliamentary documents
- Onderwerpen: moties, amendementen, stemmingen, Kamerleden, fracties, commissies, Kamerstukken, zaken en dossiers
- Brontype: officiële parlementaire databron
- API of machineleesbare toegang: OData API, SyncFeed API (actuele technische details verificatie vereist)
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: primaire bron voor parlementaire feiten en documentkoppelingen
- Verificatievereisten: API-versie, documentatie, disclaimer en gebruiksvoorwaarden per importcontrole valideren
- Status: approved

#### Tweede Kamer OData API
- Naam: Tweede Kamer OData API
- Officiële website: https://opendata.tweedekamer.nl/
- Categorie: Dutch Parliament and official parliamentary documents
- Onderwerpen: gericht opvragen van parlementaire datasets
- Brontype: API-interface
- API of machineleesbare toegang: OData (machineleesbaar)
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: query's, filters en gerichte onderzoeksopdrachten
- Verificatievereisten: endpoint- en velddefinities per implementatiefase controleren
- Status: approved

#### Tweede Kamer SyncFeed API
- Naam: Tweede Kamer SyncFeed API
- Officiële website: https://opendata.tweedekamer.nl/
- Categorie: Dutch Parliament and official parliamentary documents
- Onderwerpen: incrementele parlementaire updates
- Brontype: synchronisatie-interface
- API of machineleesbare toegang: SyncFeed (technische specificaties verificatie vereist)
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: periodieke synchronisatie met eigen kennislaag
- Verificatievereisten: feed-structuur, deduplicatie en wijzigingslogica valideren
- Status: approved

#### Eerste Kamer
- Naam: Eerste Kamer
- Officiële website: https://www.eerstekamer.nl/
- Categorie: Dutch Parliament and official parliamentary documents
- Onderwerpen: wetsbehandeling, stemmingen, leden, fracties, parlementaire activiteiten
- Brontype: officieel parlementair publicatieplatform
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: context en verificatie van senaatsbehandeling
- Verificatievereisten: bronhiërarchie t.o.v. andere officiële publicaties vastleggen
- Status: approved

#### Officiële Bekendmakingen
- Naam: Officiële Bekendmakingen
- Officiële website: https://www.officielebekendmakingen.nl/
- Categorie: Dutch Parliament and official parliamentary documents
- Onderwerpen: Staatsblad, Staatscourant, officiële besluiten, regelgeving, Kamerstukken-publicaties
- Brontype: officiële publicatiebron
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: controle van formele, originele publicaties
- Verificatievereisten: documentversie en juridische status per verwijzing controleren
- Status: approved

### 3.2 Government publications and legislation

#### Rijksoverheid
- Naam: Rijksoverheid
- Officiële website: https://www.rijksoverheid.nl/
- Categorie: Government publications and legislation
- Onderwerpen: kabinetsbeleid, beleidsdocumenten, persberichten, Kamerbrieven
- Brontype: officiële overheidscommunicatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: beleidscontext en formele beleidsreacties
- Verificatievereisten: beleidsdocumenten toetsen aan formele parlementaire status
- Status: approved

#### Overheid.nl
- Naam: Overheid.nl
- Officiële website: https://www.overheid.nl/
- Categorie: Government publications and legislation
- Onderwerpen: wet- en regelgeving, officiële overheidsinformatie
- Brontype: overheidsportaal
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: navigatie naar formele overheidspublicaties
- Verificatievereisten: vaststellen welke bron juridisch leidend is per type document
- Status: under review

#### Data.overheid.nl
- Naam: Data.overheid.nl
- Officiële website: https://data.overheid.nl/
- Categorie: Government publications and legislation
- Onderwerpen: overheidsdatasets, datasetmetadata, hergebruikinformatie
- Brontype: dataregister van de overheid
- API of machineleesbare toegang: https://data.overheid.nl/data/api/ (actuele endpointdetails verificatie vereist)
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: discovery van datasets, metadata-validatie, licentiecontrole
- Verificatievereisten: licentieveld en bronherkomst per dataset vastleggen
- Status: approved

#### Kiesraad
- Naam: Kiesraad
- Officiële website: https://www.kiesraad.nl/
- Categorie: Government publications and legislation
- Onderwerpen: verkiezingsuitslagen, kiesstelsel, verkiezingsprocedures
- Brontype: onafhankelijke verkiezingsautoriteit
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: verkiezingsdata en procedurele context
- Verificatievereisten: uitslagen koppelen aan officiële publicatie en peildatum
- Status: approved

#### Wetgevingskalender (Eerste/Tweede Kamer gerelateerd)
- Naam: Wetgevingsinformatie (verzameld via parlementaire bronnen)
- Officiële website: verificatie vereist
- Categorie: Government publications and legislation
- Onderwerpen: wetsvoorstellen, behandelingstrajecten
- Brontype: afgeleide wetgevingsinformatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: tijdlijn- en dossiercontext
- Verificatievereisten: elk datapunt koppelen aan primaire parlementaire bron
- Status: research only

### 3.3 Statistics and economics

#### CBS
- Naam: Centraal Bureau voor de Statistiek (CBS)
- Officiële website: https://www.cbs.nl/
- Categorie: Statistics and economics
- Onderwerpen: bevolkingsdata, economie, arbeidsmarkt, migratie, wonen, onderwijs
- Brontype: nationaal statistiekbureau
- API of machineleesbare toegang: machineleesbare toegang beschikbaar; actuele endpoints verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: statistische onderbouwing en trendanalyses
- Verificatievereisten: tabelversie, peildatum en definities vastleggen bij citaat
- Status: approved

#### CPB
- Naam: Centraal Planbureau (CPB)
- Officiële website: https://www.cpb.nl/
- Categorie: Statistics and economics
- Onderwerpen: macro-economie, begrotingseffecten, beleidsdoorrekeningen
- Brontype: economisch onderzoeksinstituut
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: beleidsimpact en economische context
- Verificatievereisten: modelaannames en scenario's expliciet meenemen
- Status: approved

#### DNB
- Naam: De Nederlandsche Bank (DNB)
- Officiële website: https://www.dnb.nl/
- Categorie: Statistics and economics
- Onderwerpen: financiële stabiliteit, monetair-financiële statistieken, toezichtcontext
- Brontype: centrale bank / toezichthoudende instelling
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: macrofinanciële context en risicoduiding
- Verificatievereisten: definities en publicatiemomenten documenteren
- Status: approved

#### Eurostat
- Naam: Eurostat
- Officiële website: https://ec.europa.eu/eurostat
- Categorie: Statistics and economics
- Onderwerpen: EU-statistieken, vergelijkende landenindicatoren
- Brontype: Europees statistiekbureau
- API of machineleesbare toegang: machineleesbare toegang beschikbaar; details verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: internationale vergelijking en EU-context
- Verificatievereisten: definities en harmonisatieverschillen expliciteren
- Status: approved

#### OECD Data
- Naam: OECD
- Officiële website: https://www.oecd.org/
- Categorie: Statistics and economics
- Onderwerpen: internationale economische indicatoren, beleidsonderzoek
- Brontype: internationale organisatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: vergelijkende internationale context
- Verificatievereisten: bronmethodologie en revisies monitoren
- Status: under review

#### IMF Data
- Naam: International Monetary Fund (IMF)
- Officiële website: https://www.imf.org/
- Categorie: Statistics and economics
- Onderwerpen: mondiale macro-economie, schuld, groei, inflatie
- Brontype: internationale financiële instelling
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: macro-economische scenario's en vergelijkingen
- Verificatievereisten: scenarioherkomst en herzieningen vastleggen
- Status: under review

### 3.4 Public finances and government expenditure

#### Algemene Rekenkamer
- Naam: Algemene Rekenkamer
- Officiële website: https://www.rekenkamer.nl/
- Categorie: Public finances and government expenditure
- Onderwerpen: overheidsuitgaven, doelmatigheid, rechtmatigheid, verantwoording
- Brontype: onafhankelijk controle-instituut
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: controle op overheidsuitgaven en beleidsuitvoering
- Verificatievereisten: rapportstatus (definitief/onderzoek) expliciet maken
- Status: approved

#### Ministerie van Financiën
- Naam: Ministerie van Financiën
- Officiële website: https://www.rijksoverheid.nl/ministeries/ministerie-van-financien
- Categorie: Public finances and government expenditure
- Onderwerpen: begroting, belastingbeleid, rijksfinanciën
- Brontype: ministeriepublicaties
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: officiële beleids- en begrotingsinformatie
- Verificatievereisten: koppeling naar officiële Kamerstukken verplicht
- Status: approved

### 3.5 Migration, asylum and integration

#### IND
- Naam: Immigratie- en Naturalisatiedienst (IND)
- Officiële website: https://ind.nl/
- Categorie: Migration, asylum and integration
- Onderwerpen: asiel, migratieprocedures, toelatingsbeleid
- Brontype: uitvoeringsorganisatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: procedurecontext en officiële uitvoeringsinformatie
- Verificatievereisten: beleidsuitspraken onderscheiden van uitvoeringsdata
- Status: approved

#### COA
- Naam: Centraal Orgaan opvang asielzoekers (COA)
- Officiële website: https://www.coa.nl/
- Categorie: Migration, asylum and integration
- Onderwerpen: opvangcapaciteit, opvanglocaties, uitvoeringsontwikkelingen
- Brontype: uitvoeringsorganisatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: operationele context rond opvang en capaciteit
- Verificatievereisten: cijfers valideren met primaire overheidsrapportages
- Status: approved

#### Dienst Terugkeer en Vertrek
- Naam: Dienst Terugkeer en Vertrek (DT&V)
- Officiële website: https://www.dienstterugkeerenvertrek.nl/
- Categorie: Migration, asylum and integration
- Onderwerpen: terugkeerbeleid en uitvoering
- Brontype: uitvoeringsorganisatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: context voor terugkeerketen
- Verificatievereisten: definities en telmethoden per publicatie documenteren
- Status: under review

### 3.6 Climate, energy, agriculture and environment

#### PBL
- Naam: Planbureau voor de Leefomgeving (PBL)
- Officiële website: https://www.pbl.nl/
- Categorie: Climate, energy, agriculture and environment
- Onderwerpen: klimaatbeleid, stikstof, leefomgeving, energie
- Brontype: planbureau
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: beleidsanalyse en scenario-inzichten
- Verificatievereisten: methodologische aannames expliciet citeren
- Status: approved

#### RIVM
- Naam: Rijksinstituut voor Volksgezondheid en Milieu (RIVM)
- Officiële website: https://www.rivm.nl/
- Categorie: Climate, energy, agriculture and environment
- Onderwerpen: milieu, volksgezondheid, meetgegevens
- Brontype: kennisinstituut overheid
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: milieugegevens en gezondheidscontext
- Verificatievereisten: meetmethoden en onzekerheidsmarges meenemen
- Status: approved

#### KNMI
- Naam: Koninklijk Nederlands Meteorologisch Instituut (KNMI)
- Officiële website: https://www.knmi.nl/
- Categorie: Climate, energy, agriculture and environment
- Onderwerpen: klimaat, weerdata, scenario's
- Brontype: nationaal meteorologisch instituut
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: klimaat- en weercontext bij dossiers
- Verificatievereisten: datasetversies en meetperioden documenteren
- Status: under review

### 3.7 Security, policing and justice

#### Rechtspraak
- Naam: Rechtspraak
- Officiële website: https://www.rechtspraak.nl/
- Categorie: Security, policing and justice
- Onderwerpen: jurisprudentie, gerechtelijke uitspraken
- Brontype: officiële rechtspraakpublicaties
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: juridische context en toetsing van beleidsimpact
- Verificatievereisten: uitspraakstatus en rechtsgebied expliciteren
- Status: approved

#### Raad van State
- Naam: Raad van State
- Officiële website: https://www.raadvanstate.nl/
- Categorie: Security, policing and justice
- Onderwerpen: advisering wetgeving, bestuursrechtspraak
- Brontype: constitutionele instelling
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: juridische beoordeling van wetsvoorstellen en beleid
- Verificatievereisten: onderscheid advies vs uitspraak strikt hanteren
- Status: approved

#### Politie
- Naam: Politie
- Officiële website: https://www.politie.nl/
- Categorie: Security, policing and justice
- Onderwerpen: veiligheidsontwikkelingen, operationele berichtgeving
- Brontype: publieke veiligheidsorganisatie
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: feitelijke veiligheidscontext
- Verificatievereisten: claims altijd kruisverifiëren met aanvullende bronnen
- Status: research only

### 3.8 European Union and international institutions

#### EUR-Lex
- Naam: EUR-Lex
- Officiële website: https://eur-lex.europa.eu/
- Categorie: European Union and international institutions
- Onderwerpen: EU-wetgeving, verdragen, jurisprudentie
- Brontype: officiële EU-rechtsbron
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: primaire juridische EU-bronnen
- Verificatievereisten: consolideerde versie versus originele publicatie expliciteren
- Status: approved

#### Europees Parlement
- Naam: Europees Parlement
- Officiële website: https://www.europarl.europa.eu/
- Categorie: European Union and international institutions
- Onderwerpen: stemmingen, resoluties, commissies, parlementaire dossiers
- Brontype: EU-instelling
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: politieke context en besluitvorming op EU-niveau
- Verificatievereisten: documenttype en procedurestap per verwijzing vastleggen
- Status: approved

#### Europese Raad / Raad van de EU
- Naam: Raad van de Europese Unie en Europese Raad
- Officiële website: https://www.consilium.europa.eu/
- Categorie: European Union and international institutions
- Onderwerpen: besluitvorming lidstaten, conclusies, onderhandelingskaders
- Brontype: EU-instelling
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: context voor Nederlandse positie in EU-onderhandelingen
- Verificatievereisten: onderscheid informele vs formele besluiten aanhouden
- Status: under review

#### Frontex
- Naam: Frontex
- Officiële website: https://www.frontex.europa.eu/
- Categorie: European Union and international institutions
- Onderwerpen: grensbeheer, migratie, operationele updates
- Brontype: EU-agentschap
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: grens- en migratiecontext op EU-niveau
- Verificatievereisten: operationele claims toetsen aan meerdere primaire bronnen
- Status: under review

### 3.9 Research institutes and independent knowledge organizations

#### SCP
- Naam: Sociaal en Cultureel Planbureau (SCP)
- Officiële website: https://www.scp.nl/
- Categorie: Research institutes and independent knowledge organizations
- Onderwerpen: sociaal-maatschappelijke trends, integratie, vertrouwen, participatie
- Brontype: planbureau
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: maatschappelijke context en trendduiding
- Verificatievereisten: methodologie en begripsafbakening expliciet opnemen
- Status: approved

#### Rathenau Instituut
- Naam: Rathenau Instituut
- Officiële website: https://www.rathenau.nl/
- Categorie: Research institutes and independent knowledge organizations
- Onderwerpen: technologie, wetenschap, innovatie, AI-maatschappelijke impact
- Brontype: onafhankelijk kennisinstituut
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: achtergrond en beleidscontext voor technologie- en AI-dossiers
- Verificatievereisten: onderscheid tussen onderzoeksbevindingen en opinie-interpretaties bewaken
- Status: approved

#### WRR
- Naam: Wetenschappelijke Raad voor het Regeringsbeleid (WRR)
- Officiële website: https://www.wrr.nl/
- Categorie: Research institutes and independent knowledge organizations
- Onderwerpen: strategische beleidsanalyses
- Brontype: onafhankelijke adviesraad
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: lange-termijn beleidscontext
- Verificatievereisten: aanbeveling vs feitelijk datapunt strikt onderscheiden
- Status: under review

### 3.10 Political parties and primary political statements

#### Politieke partijwebsites (verzamelcategorie)
- Naam: Officiële websites van Nederlandse politieke partijen
- Officiële website: n.v.t. (meerdere officiële bronnen)
- Categorie: Political parties and primary political statements
- Onderwerpen: partijprogramma's, persberichten, stemverklaringen, standpunten
- Brontype: primaire politieke communicatie
- API of machineleesbare toegang: doorgaans beperkt; verificatie vereist per partij
- Updatefrequentie: verificatie vereist per partij
- Licentie en hergebruik: verificatie vereist per partij
- Beoogd gebruik: correcte weergave van partijstandpunten
- Verificatievereisten: uitspraken koppelen aan datum, context en originele publicatie
- Status: approved

#### Forum voor Democratie (FVD)
- Naam: Forum voor Democratie
- Officiële website: https://fvd.nl/
- Categorie: Political parties and primary political statements
- Onderwerpen: partijstandpunten, officiële verklaringen, partijpublicaties
- Brontype: partijbron
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: primaire bron voor FVD-posities
- Verificatievereisten: redactionele scheiding tussen bronweergave en eigen analyse
- Status: approved

### 3.11 News and media sources

#### 1848.nl (discovery and monitoring)
- Naam: 1848.nl
- Officiële website: https://1848.nl/
- Categorie: News and media sources
- Onderwerpen: politieke nieuwsstromen, signalering van documenten en gebeurtenissen
- Brontype: journalistieke monitoringsbron
- API of machineleesbare toegang: verificatie vereist
- Updatefrequentie: verificatie vereist
- Licentie en hergebruik: verificatie vereist
- Beoogd gebruik: discovery en monitoring; startpunt voor onderzoek
- Verificatievereisten: nooit gebruiken als vervanging van officiële brondocumenten
- Status: under review

#### ANP / landelijke nieuwsmedia (verzamelcategorie)
- Naam: Nederlandse nieuwsmedia (verzamelcategorie)
- Officiële website: n.v.t. (meerdere bronnen)
- Categorie: News and media sources
- Onderwerpen: actuele berichtgeving, interviews, context
- Brontype: secundaire journalistieke bronnen
- API of machineleesbare toegang: verificatie vereist per bron
- Updatefrequentie: verificatie vereist per bron
- Licentie en hergebruik: verificatie vereist per bron
- Beoogd gebruik: signalering, context en brontriangulatie
- Verificatievereisten: belangrijke claims altijd toetsen aan primaire bronnen
- Status: research only

## 4. Bronverwerking en datakwaliteit

Voor iedere geïmporteerde dataset of documentbron registreren we waar mogelijk:

- naam van de bron
- oorspronkelijke URL
- datum van ophalen
- datum van publicatie of wijziging
- identificatie van het oorspronkelijke document
- licentie en hergebruikvoorwaarden
- synchronisatiestatus
- validatie- of kwaliteitsproblemen

Kwaliteitsregel:

- Originele brongegevens blijven strikt gescheiden van AI-samenvattingen, analyses en interpretaties.

## 5. Redactioneel bronbeleid

- Primaire bronnen krijgen voorrang.
- Politieke uitspraken worden waar mogelijk gekoppeld aan de oorspronkelijke bron.
- Stemmingen worden niet geïnterpreteerd zonder context van voorstel, amendement of motie.
- Feiten, analyse, mening en partijstandpunten blijven expliciet gescheiden.
- AI-gegenereerde informatie wordt gecontroleerd vóór publicatie.
- Onzekerheden of ontbrekende gegevens worden nooit als feit gepresenteerd.

## 6. Licenties en auteursrecht

- Per bron en dataset worden actuele licentie en gebruiksvoorwaarden gecontroleerd.
- Open data betekent niet automatisch dat bijbehorende documenten, afbeeldingen of externe teksten vrij overgenomen mogen worden.
- Bronvermelding, auteursrecht en beperkingen op commercieel hergebruik worden gerespecteerd.

## 7. Scopeafbakening huidige fase

Confirmed:

- Deze fase is documentatie plus initiële website-prototype.
- API-integraties worden nog niet geïmplementeerd.

Provisional:

- Technische implementatievolgorde en connectorarchitectuur worden later bepaald.

## 8. Uitbreidbaarheid

Dit register is expliciet uitbreidbaar. Nieuwe bronnen worden toegevoegd met dezelfde veldstructuur en een verplichte status (`approved`, `under review`, `research only`).
