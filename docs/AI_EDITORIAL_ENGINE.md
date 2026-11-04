# AI EDITORIAL ENGINE — Het Kamerdebat

## 1. Doel

Dit document beschrijft de beoogde AI-ondersteunde redactionele workflow.

Belangrijk:

- Dit is een architectuur- en planningsdocument.
- Er wordt in deze fase niets geïmplementeerd.

## 2. Doelworkflow

News Monitor → Research Agent → Political Analyst → Editorial Writer → Factchecker → Human Approval → Publisher

## 3. Functie per stap

### News Monitor

- monitort officiële en aanvullende bronnen
- detecteert nieuwe publicaties, debatten, stemmingen en beleidsontwikkelingen
- signaleert relevante updates per politiek thema

### Research Agent

- verzamelt primaire documenten en contextbronnen
- bundelt historische referenties en eerdere dossierontwikkelingen
- structureert bronmateriaal voor redactionele verwerking

### Political Analyst

- analyseert politieke context, machtsverhoudingen en beleidsimpact
- onderscheidt feitelijke observaties van interpretatieve duiding
- signaleert ontbrekende context en verificatierisico's

### Editorial Writer

- genereert concepten voor nieuws, analyse, opinie, dossiersamenvattingen of factchecks
- houdt rekening met redactionele stijl en brontransparantie
- produceert tekstvoorstellen met duidelijke bronkoppelingen

### Factchecker

- verifieert belangrijke claims tegen primaire bronnen
- markeert onzekerheden en ontbrekende verificatie
- blokkeert publicatievoorstel bij kritieke verificatieproblemen

### Human Approval

- redactie controleert inhoud, framing, feitelijke juistheid en brongebruik
- redactie beslist definitief over publicatie

### Publisher

- zet goedgekeurde content klaar als concept voor publicatie
- beoogde richting: WordPress draft workflow (nog niet geïmplementeerd)

## 4. Systeemdoelen

De toekomstige engine moet ondersteunen:

- monitoring van officiële bronnen
- detectie van relevante ontwikkelingen
- verzameling van primaire documenten
- koppeling met historische context
- verificatie van feitelijke claims
- generatie van artikelen en samenvattingen
- koppeling van content aan dossiers, politici, partijen en onderwerpen
- voorbereiding van WordPress-drafts

## 5. Integratie met "Volg het dossier"

De AI-engine moet later:

- nieuwe ontwikkelingen koppelen aan bestaande dossiers
- per nieuw item bepalen welk dossier relevant is
- dossier-tijdlijnen voorstellen voor update
- duplicaten of irrelevante signalen filteren

Alle belangrijke feitelijke interpretaties blijven onder redactionele controle.

## 6. Governance en kwaliteitsgrenzen

- AI-output is geen bewijs van juistheid.
- Publicatie zonder menselijke goedkeuring is uitgesloten.
- Brondata en AI-interpretatie blijven gescheiden lagen.
- Verificatiestatus is verplicht onderdeel van workflowmetadata.

## 7. Implementatiestatus

Confirmed:

- Menselijke publicatiegoedkeuring is verplicht.
- De workflow hierboven is het beoogde doelmodel.

Provisional:

- Concrete tooling, orkestratie, modelkeuzes, hosting en integratievolgorde.
