# PORTFOLIO SOURCE REGISTER

**Document ID:** 01D_PORTFOLIO_SOURCE_REGISTER
**Phase:** 0A — Discovery Documentation Only
**Status:** PATCH 001 APPLIED
**Date:** 2026-09-26
**Patch 001 Date:** 2026-09-26

---

## PURPOSE

This register records every portfolio/gallery label observed in the Source Fact Pack. Each item is recorded as a source entry without assuming it represents a complete project, a video, a category, a duplicate, a placeholder, a pitch, a concept, an internal project, or a public case study candidate.

No migration decision should be made from this register alone. Each item requires owner verification.

---

## EVIDENCE DISCIPLINE

A project name is NOT evidence of its industry, function, capabilities, development stage, client, result, or project type. All structured fields (Industry Known?, Capabilities Known?, Lifecycle Stages Known?, Public Case Study Candidate?) contain only source-verified facts or explicit UNKNOWN. The Evidence Basis column documents what supports each record's existence.

**Evidence Basis values:**

| Value             | Meaning                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| SOURCE_FACT_PACK  | Record derived from Source Fact Pack gallery observation                                         |
| LEGACY_ROUTE      | Legacy WordPress URL path provides structural evidence                                           |
| NAME_ONLY         | Only evidence is the project name itself — no industry, capability, or stage inference permitted |
| UNKNOWN           | No evidence available                                                                            |
| OWNER_VERIFIED    | Owner has confirmed the facts in this record                                                     |
| EXTERNAL_VERIFIED | Externally verified against authoritative source                                                 |

---

## REGISTER

| #   | Source Name                    | Normalized Candidate Name      | Potential Duplicate Of                   | Potential Category (Not Project) | Known Source Location | Dedicated Page Known?                   | Media Known? | Industry Known? | Capabilities Known? | Lifecycle Stages Known? | Public Case Study Candidate? | Verification Status | Evidence Basis                 | Notes                                                                                                                                 |
| --- | ------------------------------ | ------------------------------ | ---------------------------------------- | -------------------------------- | --------------------- | --------------------------------------- | ------------ | --------------- | ------------------- | ----------------------- | ---------------------------- | ------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Shopping Cart                  | Shopping Cart                  | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 2   | Multiple                       | —                              | —                                        | YES — POSSIBLE_CATEGORY_LABEL    | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | SOURCE_FACT_PACK               | Gallery label. Structural observation: label reads as a category/tag, not a project name.                                             |
| 3   | Regain Medical                 | Regain Medical                 | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 4   | Vehicular DVR Camera           | Vehicular DVR Camera           | MG-NINE — POSSIBLE_DUPLICATE             | NO                               | `/visual-gallery/`    | POSSIBLY `/mg-nine-vehicle-dvr-camera/` | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. Possible relationship with MG-NINE based on URL proximity; not source-verified.                                   |
| 5   | Koffti                         | Koffti                         | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 6   | Consumer                       | —                              | —                                        | YES — POSSIBLE_CATEGORY_LABEL    | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | SOURCE_FACT_PACK               | Gallery label. Structural observation: label reads as a category/tag, not a project name.                                             |
| 7   | RegalPress.AI                  | RegalPress.AI                  | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 8   | RegalBrand.AI                  | RegalBrand.AI                  | RegalPress.AI — POSSIBLE_DUPLICATE       | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. Name similarity to RegalPress.AI noted; relationship not source-verified.                                         |
| 9   | Promo                          | Promo                          | —                                        | YES — POSSIBLE_CATEGORY_LABEL    | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | SOURCE_FACT_PACK               | Gallery label. First occurrence. Label reads as a category/tag.                                                                       |
| 10  | Medical Multiple               | —                              | —                                        | YES — POSSIBLE_CATEGORY_LABEL    | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | SOURCE_FACT_PACK               | Gallery label. Structural observation: label reads as a category/tag, not a project name.                                             |
| 11  | BlackRock.AI                   | BlackRock.AI                   | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 12  | HoverBoard                     | HoverBoard                     | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 13  | EVtols                         | EVtols                         | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 14  | Fishing Lures                  | Fishing Lures                  | Fishing Lure (#21) — POSSIBLE_DUPLICATE  | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. Possible duplicate with #21.                                                                                      |
| 15  | Promo                          | Promo                          | —                                        | YES — POSSIBLE_CATEGORY_LABEL    | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | SOURCE_FACT_PACK               | Gallery label. Second occurrence of "Promo".                                                                                          |
| 16  | Oral4 Dental Kit               | ORAL4                          | —                                        | NO                               | `/visual-gallery/`    | YES — `/portfolio/home-goods/oral4/`    | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | LEGACY_ROUTE, SOURCE_FACT_PACK | Featured on homepage. Legacy WordPress URL places the project under /home-goods/, but future industry taxonomy has not been verified. |
| 17  | Bucket                         | Bucket                         | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 18  | Halevai Electric Boat          | Halevai Electric Boat          | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 19  | Villa Subdivision              | Villa Subdivision              | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 20  | Star Guard                     | Star Guard                     | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 21  | Fishing Lure                   | Fishing Lure                   | Fishing Lures (#14) — POSSIBLE_DUPLICATE | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. Possible duplicate with #14.                                                                                      |
| 22  | Timeset App                    | Timeset App                    | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 23  | Marker Locker                  | Marker Locker                  | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 24  | Pain chronic                   | Pain Chronic                   | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. Capitalization may need normalization.                                                                            |
| 25  | FairBridge Presentation        | FairBridge Presentation        | —                                        | YES — POSSIBLE_CATEGORY_LABEL    | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. "Presentation" may indicate pitch material rather than a product; not source-verified.                            |
| 26  | PreLynx Portal                 | PreLynx                        | —                                        | NO                               | `/visual-gallery/`    | YES — `/prelynx-portal/`                | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | LEGACY_ROUTE, SOURCE_FACT_PACK | Featured on homepage. Dedicated page exists. No source-verified classification.                                                       |
| 27  | Remittance Processor           | Remittance Processor           | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 28  | Falcon+ Prep Reducing Scanners | Falcon+ Prep Reducing Scanners | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |
| 29  | Recovery System                | Recovery System                | —                                        | NO                               | `/visual-gallery/`    | UNKNOWN                                 | UNKNOWN      | UNKNOWN         | UNKNOWN             | UNKNOWN                 | UNKNOWN                      | OWNER_VERIFY        | NAME_ONLY                      | Gallery label only. No source-verified classification.                                                                                |

---

## ADDITIONAL FEATURED PROJECTS (FROM HOMEPAGE)

| #   | Source Name                                     | Normalized Candidate Name      | Known Source Location     | Dedicated Page Known?                               | Verification Status                        | Evidence Basis                 | Notes                                                                                                                                                                                                   |
| --- | ----------------------------------------------- | ------------------------------ | ------------------------- | --------------------------------------------------- | ------------------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30  | MG-NINE (armored PTZ patrol camera description) | MG-NINE (identity unconfirmed) | Homepage (second mention) | POSSIBLY — same `/mg-nine-vehicle-dvr-camera/` URL? | OWNER_VERIFY — POTENTIAL_PROJECT_COLLISION | LEGACY_ROUTE, SOURCE_FACT_PACK | Two different product descriptions observed for the name MG-NINE. One references a vehicle DVR camera; the other references an armored PTZ patrol camera. Identity collision requires owner resolution. |

---

## POTENTIAL CATEGORIES (NOT PROJECTS)

The following gallery labels are structural observations — they read as category labels rather than project names. Classification as confirmed categories requires owner verification.

| Label            | Observation                                                     | Verification Status |
| ---------------- | --------------------------------------------------------------- | ------------------- |
| Multiple         | Label reads as a general category for multi-project display     | OWNER_VERIFY        |
| Consumer         | Label reads as an industry or category label                    | OWNER_VERIFY        |
| Promo (x2)       | Label appears twice; reads as a promotional products category   | OWNER_VERIFY        |
| Medical Multiple | Label reads as a category for multiple medical-related projects | OWNER_VERIFY        |

---

## POTENTIAL DUPLICATES

| Item A                    | Item B                     | Relationship                                                                   | Verification Status     |
| ------------------------- | -------------------------- | ------------------------------------------------------------------------------ | ----------------------- |
| Fishing Lures (#14)       | Fishing Lure (#21)         | POSSIBLE_DUPLICATE — singular vs plural variation                              | OWNER_VERIFY            |
| Promo (#9)                | Promo (#15)                | POSSIBLE_DUPLICATE — same label appears twice                                  | OWNER_VERIFY            |
| Vehicular DVR Camera (#4) | MG-NINE Vehicle DVR Camera | POSSIBLE_DUPLICATE — may be same product under different label                 | OWNER_VERIFY            |
| MG-NINE (vehicle DVR)     | MG-NINE (armored PTZ)      | POTENTIAL_PROJECT_COLLISION — two different product descriptions for same name | OWNER_VERIFY — CRITICAL |

---

## ITEMS WITH KNOWN DEDICATED PAGES

| Project                    | Known URL                      | Featured on Homepage?       | Verification Status     |
| -------------------------- | ------------------------------ | --------------------------- | ----------------------- |
| ORAL4 Dental Kit           | `/portfolio/home-goods/oral4/` | YES                         | OWNER_VERIFY            |
| PreLynx Portal             | `/prelynx-portal/`             | YES                         | OWNER_VERIFY            |
| MG-NINE Vehicle DVR Camera | `/mg-nine-vehicle-dvr-camera/` | YES (but identity conflict) | OWNER_VERIFY — CRITICAL |

---

## SUMMARY STATISTICS

| Metric                                          | Count                       |
| ----------------------------------------------- | --------------------------- |
| Total gallery labels observed                   | 29                          |
| Additional homepage entries (MG-NINE collision) | 1                           |
| **Total source records**                        | **30**                      |
| Possible categories (not projects)              | 4                           |
| Possible duplicates identified                  | 4 pairs                     |
| Items with known dedicated pages                | 3                           |
| Items with confirmed industry                   | **0** (all UNKNOWN)         |
| Items with confirmed media assets               | 0 (all UNKNOWN)             |
| Items with confirmed capabilities               | 0 (all UNKNOWN)             |
| Items with confirmed lifecycle stages           | 0 (all UNKNOWN)             |
| Public case study candidates (unverified)       | 3 (ORAL4, PreLynx, MG-NINE) |
| All items verification status                   | OWNER_VERIFY                |

### Evidence Basis Distribution

| Evidence Basis                     | Count                       |
| ---------------------------------- | --------------------------- |
| NAME_ONLY                          | 23                          |
| SOURCE_FACT_PACK (category labels) | 4                           |
| LEGACY_ROUTE + SOURCE_FACT_PACK    | 3 (ORAL4, PreLynx, MG-NINE) |

---

## PATCH 001 CHANGE LOG

**Patch ID:** EVIDENCE_DISCIPLINE_001
**Date:** 2026-09-26
**Trigger:** Design/Product Lead review found name-based interpretations in structured fields (Industry Known?, Capabilities Known?, Notes) that violated the evidence discipline rule: a project name is NOT evidence of its industry, function, capabilities, development stage, client, result, or project type.

**Changes applied:**

1. All name-based inferences removed from Industry Known?, Capabilities Known?, Lifecycle Stages Known?, and Public Case Study Candidate? fields. All replaced with UNKNOWN.
2. Notes fields rewritten to state only literal observations (gallery label presence, URL paths, label occurrences). All language implying classification ("suggests", "inferred", "possibly [industry]", "name indicates") removed.
3. Potential Category column values changed from "YES — likely category" to "YES — POSSIBLE_CATEGORY_LABEL".
4. Potential Duplicate column values changed to use "POSSIBLE_DUPLICATE" flag.
5. MG-NINE collision maintained as POTENTIAL_PROJECT_COLLISION (originated from Source Fact Pack, not name inference).
6. ORAL4: legacy URL `/portfolio/home-goods/oral4/` retained as structural observation; Industry Known? set to UNKNOWN (not Home Goods).
7. PreLynx: no industry or capability inferred from name.
8. Evidence Basis column added to all records.
9. Summary statistics recalculated.

---

## NOTES

- This register records source observations ONLY. No migration decisions should be made from it.
- Every item requires owner verification before it can be classified as a project, category, duplicate, or concept.
- The high number of UNKNOWN fields reflects the limitation of the Source Fact Pack — gallery labels were observed without detailed project metadata.
- Phase 0C (Content Inventory) may provide additional detail for items with dedicated pages.
- The MG-NINE collision is the highest-priority portfolio issue to resolve.
- Patch 001 enforced strict evidence discipline: no project name has been used to infer industry, capability, lifecycle stage, or any other classification.
