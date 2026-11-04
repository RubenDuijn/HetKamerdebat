# DOSSIER SYSTEM — Volg het dossier

## 1. Doel van de functie

"Volg het dossier" maakt van HetKamerdebat.nl meer dan een traditioneel nieuwsplatform: per politiek onderwerp ontstaat een doorlopende informatiehub met context, actualiteit en bronnen.

## 2. Dossierconcept

Voorbeelden van dossieronderwerpen:

- Immigration and asylum
- Nitrogen and agriculture
- European Union
- Dutch sovereignty
- Housing
- Climate and energy
- Taxes and public finances
- Democracy and referendums

Elk dossier wordt opgezet als een continu geactualiseerde themapagina.

## 3. Wat een dossierpagina bevat

Een dossier combineert uiteindelijk:

- introductie en achtergrond
- nieuwste relevante nieuwsartikelen
- analyses en opiniestukken
- relevante parlementaire documenten
- moties en amendementen
- stemmingsresultaten
- partijstandpunten en politieke verklaringen
- relevante politici en commissies
- statistieken en onderzoek
- chronologische tijdlijn
- links naar oorspronkelijke bronnen

## 4. Bezoekerservaring (toekomst)

Bezoekers moeten op termijn kunnen:

- een dossier volgen
- updates zien bij relevante nieuwe ontwikkelingen
- nieuwe artikelen per dossier ontdekken
- nieuwe documenten en stemmingen volgen
- historische ontwikkelingen teruglezen
- mogelijk een wekelijkse dossierbriefing ontvangen

Niet in scope in deze fase:

- user accounts
- notificaties
- e-mailabonnementen

## 5. Relatie met kennisbasis

Het dossier-systeem steunt op relaties tussen:

- `PoliticalDossier`
- `PoliticalTopic`
- `Article`
- `ParliamentaryDocument`
- `ParliamentaryMotion`
- `VotingRecord`
- `PoliticalParty`
- `Politician`
- `Source`

Hierdoor ontstaat een thematisch verbonden netwerk i.p.v. losse artikelen.

## 6. Relatie met AI Editorial Engine

De toekomstige AI-engine ondersteunt dossierbeheer door:

- detectie van nieuwe dossierrelevante ontwikkelingen
- classificatie van documenten en artikelen naar dossier
- voorstel voor tijdlijnupdates
- signalering van items die een nieuw artikel verdienen
- reductie van dubbele of irrelevante updates

Alle belangrijke inhoudelijke interpretaties blijven onder redactionele review.

## 7. Technische richting (provisional)

Mogelijke bouwstenen op termijn:

- gestructureerde politieke database
- semantische koppellaag tussen entiteiten
- WordPress-pagina's/categorieen als publicatielaag
- toekomstige accounts en abonnementssystemen
- notificatie- en nieuwsbriefcomponent

Deze onderdelen zijn nog niet definitief gekozen of geïmplementeerd.

## 8. Prototypepositie

In de huidige statische website-prototype wordt "Dossiers" al visueel getoond met voorbeeldinhoud.

Volgende prototype-uitbreiding kan zijn:

- expliciete call-to-action "Volg dit dossier" als niet-functionele demonstratie
- duidelijke label dat dit een toekomstige functionaliteit is

## 9. Implementatiestatus

Confirmed:

- Dossiers zijn een kernonderdeel van de langetermijnpropositie.
- "Volg het dossier" is een strategische toekomstige feature.

Provisional:

- Datamodeldetail, abonnementsmechaniek, notificatiekanalen en operationele workflow.
