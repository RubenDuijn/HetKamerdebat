# MVP SPECIFICATION v1.0 — Het Kamerdebat

## 1. Product objective

Het Kamerdebat MVP v1.0 delivers the first working public product component: a practical Tweede Kamer Monitor.

Goal:

- ingest and present official parliamentary records
- show recent documents, motions/amendments, and voting outcomes where available
- link every visible record to official source context
- detect new and updated records reliably

This specification defines product behavior and acceptance criteria only. It does not implement the MVP.

## 2. Target users

- politically engaged readers who want direct, source-linked parliamentary updates
- journalists/researchers who need quick access to recent records and vote data
- editors at Het Kamerdebat who need a reliable source layer for later analysis and publications

## 3. MVP scope (in)

Version 1 includes only the minimum demonstrable functionality below.

### 3.1 Official data ingestion

- Ingest official Tweede Kamer Open Data from:
  - OData API
  - SyncFeed API
- Use source-supported incremental update behavior for change tracking.

### 3.2 Parliamentary records covered

- Recent documents
- Motions and amendments (as case types in parliamentary records)
- Voting outcomes where available
- Politicians and political parties needed to interpret records

### 3.3 Source traceability

- Each shown record includes:
  - source entity type
  - official entity identifier
  - source URL or canonical lookup path
  - last known source update timestamp

### 3.4 Change detection

- Detect new records
- Detect changed records
- Track deletions/placeholders when source marks records as deleted

### 3.5 User-facing monitor

- Usable web interface for:
  - latest records overview
  - filtering by type (document, motion/amendment, vote)
  - opening record detail with source metadata
  - navigating related actor information (party/politician)

## 4. Official data source verification snapshot (review date: 2026-11-05)

This section records what is currently documented in official Tweede Kamer Open Data documentation. Any unknown or stale detail is marked as verification required.

### 4.1 API and feed availability

Confirmed in official documentation:

- OData API (query/search access)
- SyncFeed API (synchronization/change feed)
- Informatiemodel documentation describing entity relationships

Documented base URLs:

- OData (current, per official news update):
  - https://gegevensmagazijn.tweedekamer.nl/OData/v5
- OData (legacy, kept here only as migration context):
  - https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0
- SyncFeed:
  - https://gegevensmagazijn.tweedekamer.nl/SyncFeed/2.0

Important note from official documentation:

- OData documentation pages still contain old attribute names in places; official news indicates migration to v5 naming.

### 4.2 Relevant entities for MVP

Selected MVP-relevant entities from official model/documentation:

- Document
- Zaak
- ZaakActor
- Besluit
- Stemming
- Persoon
- Fractie

### 4.3 Identifiers and record identity

Documented:

- Core entities expose GUID-based Id fields.
- Related links are represented with reference fields such as *_Id (for example Zaak_Id, Besluit_Id, Persoon_Id, Fractie_Id).

MVP identity rule:

- source identity key = (entity_type, source_guid_id)

### 4.4 Relationships used in MVP

Documented relations needed for v1:

- Zaak -> ZaakActor (who is involved; e.g., indiener/medeindiener role)
- Besluit -> Stemming
- Stemming -> Fractie and/or Persoon
- Document <-> Zaak (many-to-many relation in model)

### 4.5 Query capabilities, pagination, and filtering

Documented OData capabilities:

- filtering: $filter
- field selection: $select
- relation expansion: $expand
- pagination controls: $skip, $top
- sorting: $orderby
- count: $count

Documented page-size behavior:

- OData returns max 250 results per response page by default
- SyncFeed feed page also references a max of 250 entries per page with link rel next behavior

### 4.6 Update mechanisms

Documented:

- SyncFeed is intended for synchronization over time.
- Re-query from link rel next of last processed entry to continue updates.
- Updated entities can reappear in feed.
- Entity attributes include change markers such as GewijzigdOp and ApiGewijzigdOp (entity dependent).
- Placeholder behavior exists for deleted entities (Verwijderd).

Verification required:

- exact operational semantics when feed entries reappear for updates across all entity types
- production-safe restart/backfill strategy after downtime

### 4.7 Rate limits and bandwidth controls

Documented:

- FAQ states no fixed limit on number of OData queries per session.
- Disclaimer states bandwidth can be limited at IP level to keep service stable.

MVP implication:

- ingestion must support retries, backoff, and resumable processing.

### 4.8 Licensing and reuse conditions

Documented:

- unless otherwise stated, data/content is under CC0 1.0 (public domain declaration)
- Tweede Kamer disclaims liability and can change/remove content and terms

MVP requirement:

- persist source provenance and retrieval timestamps for traceability despite potential source changes.

## 5. User-facing functionality

The MVP monitor UI must provide:

- latest updates list
- record type badges (document, motion/amendment-related case, vote)
- detail view with:
  - official identifiers
  - core metadata (title/type/date/status where available)
  - linked related entities (party/politician/vote)
  - official source references
- a "new or updated" marker for recent deltas since previous successful sync

The UI is informative, not editorial. It shows official records and minimal derived metadata only.

## 6. Acceptance criteria

Each criterion is testable and must pass before MVP release.

### 6.1 Data retrieval and integrity

- AC-01: System successfully retrieves records from official Tweede Kamer APIs using documented endpoints.
- AC-02: For each supported entity type, records are stored with stable source identity key (entity type + GUID).
- AC-03: Ingestion excludes source placeholders from default public listing when Verwijderd=true, while preserving internal history.

### 6.2 Duplicate prevention and change detection

- AC-04: Reprocessing the same feed segment does not create duplicate current records.
- AC-05: When a known source record is updated, system updates existing record state rather than inserting a duplicate identity.
- AC-06: System can produce a deterministic "new/updated since last successful sync" result set.

### 6.3 Traceability and source separation

- AC-07: Every public record detail page shows source entity type, source GUID, and source reference URL/path.
- AC-08: Every public record detail page shows last source update timestamp and last local sync timestamp.
- AC-09: Any derived fields are explicitly labeled as derived; official source fields remain separately identifiable.

### 6.4 Feature-specific criteria

- AC-10: Recent parliamentary documents are visible and sortable by recency.
- AC-11: Motions and amendments are discoverable through parliamentary case/document classification and visible in dedicated filter views.
- AC-12: Voting outcomes are shown for records that have linked vote data; missing outcomes are explicitly marked as unavailable.
- AC-13: Politician and party references are navigable from relevant records where linked entities exist.

### 6.5 Usability and operational reliability

- AC-14: A user can navigate from list to detail to related actor within three interactions.
- AC-15: If source API temporarily fails, ingestion retries with backoff and resumes without data corruption.
- AC-16: A complete sync run generates an auditable run log (start, end, processed entities, failures, retry count).

## 7. Out of scope (explicit)

The following are excluded from MVP v1.0:

- full CMS implementation
- automated article publication
- autonomous AI editorial decisions
- newsletter subscriptions and paywalls
- complex user accounts and personalization
- microservice sprawl, Kubernetes, and non-essential infrastructure complexity

## 8. Dependencies

- access to official Tweede Kamer OData and SyncFeed endpoints
- stable data storage layer for normalized source records and sync state
- basic web frontend capable of list/detail/filter interactions
- scheduled or repeatable ingestion execution environment

## 9. Unresolved decisions requiring approval

1. Primary ingestion pattern for v1:
- SyncFeed-first (incremental backbone) with OData for selective read/query
- or OData-only initial implementation with later SyncFeed upgrade

2. Final field mapping baseline:
- confirm all attribute names against OData v5 and latest metadata before implementation

3. Canonical motion/amendment classification rule:
- define exact rule using Soort/related fields to prevent classification ambiguity

4. Storage/runtime choice for first production-like environment:
- PostgreSQL now vs short local prototype stage in SQLite before migration

5. Official source-link rendering standard:
- direct API record URLs only, or API + public parliamentary web references where available

## 10. Non-functional constraints for v1

- no source code implementation in this phase
- no deployment changes in this phase
- no changes to DNS/hosting/GitHub settings in this phase
- maintain architectural principle: official records remain distinct from interpretation layers

## 11. Approval checklist

This MVP specification is ready for approval when stakeholders confirm:

- scope is minimal but demonstrably valuable
- acceptance criteria are sufficient for release decisions
- unresolved decisions have assigned owners and deadlines
