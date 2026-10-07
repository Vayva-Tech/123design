# PHASE 0A HANDOFF

**Document ID:** 01F_PHASE_0A_HANDOFF
**Phase:** 0A — Discovery Documentation Only
**Status:** LOCKED — READY FOR PHASE 0B
**Date:** 2026-09-26
**Locked:** 2026-09-26 (after Evidence Discipline Patch 001)

---

## PHASE 0A STATUS

**LOCKED — READY FOR PHASE 0B**

Phase 0A has successfully converted the supplied Source Fact Pack into a disciplined internal project record. All documentation is confined to `/docs/`. No implementation files were created. No external research was performed.

Phase 0A was locked after applying Evidence Discipline Patch 001, which corrected name-based inferences in the Portfolio Source Register.

---

## EVIDENCE DISCIPLINE PATCH 001

**Patch ID:** EVIDENCE_DISCIPLINE_001
**Status:** COMPLETE
**Date:** 2026-09-26
**Applied to:** `01D_PORTFOLIO_SOURCE_REGISTER.md`

**Problem:** The Design/Product Lead review found that the Portfolio Source Register contained interpretations inferred from project names (e.g., "Regain Medical = Medical industry", "HoverBoard = Consumer", "EVtols = Emerging Tech / Transportation"). A project name is NOT evidence of its industry, function, capabilities, development stage, client, result, or project type.

**Correction applied:**

1. All name-based inferences removed from structured fields (Industry Known?, Capabilities Known?, Lifecycle Stages Known?). All replaced with UNKNOWN.
2. Notes fields rewritten to state only literal observations. All language implying classification removed.
3. Category labels retained as POSSIBLE_CATEGORY_LABEL (not CONFIRMED_CATEGORY).
4. Duplicate flags retained as POSSIBLE_DUPLICATE.
5. MG-NINE collision maintained as POTENTIAL_PROJECT_COLLISION (originated from Source Fact Pack).
6. ORAL4: legacy URL `/portfolio/home-goods/oral4/` retained as structural observation; Industry Known? set to UNKNOWN.
7. PreLynx: no industry or capability inferred from name.
8. Evidence Basis column added to all 30 records (23 NAME_ONLY, 4 SOURCE_FACT_PACK, 3 LEGACY_ROUTE + SOURCE_FACT_PACK).
9. Summary statistics recalculated.

**Result:** Zero confirmed industries across all 30 records. All classification deferred to owner verification.

---

## COMPLETED DOCUMENTS

| Document                  | File                               | Purpose                                                                                             |
| ------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| Source Audit              | `01_PHASE_0A_SOURCE_AUDIT.md`      | Executive audit of current site state, strengths, weaknesses, and migration outlook                 |
| Route Register            | `01A_SOURCE_ROUTE_REGISTER.md`     | 20 legacy URLs recorded with purpose, concern, and likely future destination                        |
| Content Decision Register | `01B_CONTENT_DECISION_REGISTER.md` | 30 content groups classified with disposition (REWRITE, VERIFY_FIRST, KEEP_AND_EDIT, MERGE, DELETE) |
| Verification Register     | `01C_VERIFICATION_REGISTER.md`     | 67 verification items across 14 categories requiring owner confirmation                             |
| Portfolio Source Register | `01D_PORTFOLIO_SOURCE_REGISTER.md` | 30 portfolio source records (29 gallery labels + 1 MG-NINE collision entry) — Patch 001 applied     |
| Legacy Risk Register      | `01E_LEGACY_RISK_REGISTER.md`      | 20 risks identified (3 CRITICAL, 7 HIGH, 7 MEDIUM, 3 LOW)                                           |
| Phase 0A Handoff          | `01F_PHASE_0A_HANDOFF.md`          | This document                                                                                       |

---

## KEY FINDINGS

### What Has Migration Value

1. **Manufacturing content foundation** — Substantial technical knowledge about tooling, sheet metal, extrusion, and assembly processes exists and can be rebuilt into clean capability pages.
2. **Prototyping capability breadth** — CNC, FDM, SLS, SLA, RTV, thermoforming, overmolding, fiberglass, carbon-fiber represents genuine breadth.
3. **Portfolio depth** — 29+ gallery labels suggest significant project history, though each requires verification.
4. **Transparency as brand value** — Current emphasis on client involvement aligns with new "Your Process or Ours" positioning.
5. **Lead qualification intent** — Current form structure (industry, development stage, lead source) shows thinking that informs the new Start Project funnel.
6. **Client roster potential** — Named clients (Boeing, Coca-Cola, etc.) would be strong social proof IF verified and permissioned.

### What Must Not Survive

1. **Zero/placeholder metrics** — Projects completed, client satisfaction, global clients, awards all render as zero.
2. **Template email** — `contact@mysite.com` is a default address.
3. **Potentially copied content** — "Dawson Shanahan" name in tooling page indicates scraped content.
4. **SEO keyword-stuffed URLs and copy** — Service page structure is SEO-driven, not IA-driven.
5. **Unverified client names and logos** — Legal/reputational risk.
6. **Unverified regulatory claims** — UL, FDA, FCC, ISO, EMC, CE, Six Sigma acronyms do not prove certification.
7. **Conflicting contact information** — Two phone numbers; four offices unverified.
8. **Over-simplified 3-step process** — Does not reflect actual development capability.

### What Requires Resolution Before Migration

1. MG-NINE project identity collision (vehicle DVR vs. armored PTZ)
2. All 67 verification register items
3. All 20 legacy risk register items (3 CRITICAL priority)
4. Network entity status (Nespa, tru Dimension, Innovators Plus)
5. Digital services scope (web dev, app dev, SEO — include or exclude?)
6. Patent services scope (legal services vs. development support vs. remove)

---

## CRITICAL BLOCKERS

The following items BLOCK content migration and must be resolved before implementation begins:

| Blocker                                                        | Risk If Ignored                                | Resolution Required From |
| -------------------------------------------------------------- | ---------------------------------------------- | ------------------------ |
| Client names unverified (7 companies)                          | Legal liability; reputational damage           | Owner                    |
| Metrics unverified (4 metric groups)                           | Credibility damage; misleading claims          | Owner                    |
| Regulatory claims unverified (7 standards)                     | Regulatory misrepresentation; legal liability  | Owner                    |
| Contact information conflicts (2 phones, 4 offices)            | Lost business; client confusion                | Owner                    |
| MG-NINE project collision                                      | Incorrect case study; client confusion         | Owner                    |
| Copied content in service pages                                | Copyright infringement; SEO penalty            | Owner + Content audit    |
| Commercial claims unverified (pricing, timelines, geographies) | Financial/legal exposure                       | Owner                    |
| Patent services scope unclear                                  | Legal liability (unauthorized practice of law) | Owner                    |

---

## OWNER VERIFICATION REQUIRED

**Total verification items: 67**

| Category         | Count | Priority |
| ---------------- | ----- | -------- |
| Clients          | 8     | CRITICAL |
| Regulatory       | 7     | CRITICAL |
| Contact          | 8     | HIGH     |
| Commercial       | 8     | HIGH     |
| Metrics          | 6     | HIGH     |
| Locations        | 4     | HIGH     |
| Portfolio        | 5     | HIGH     |
| Capabilities     | 6     | MEDIUM   |
| Network          | 3     | MEDIUM   |
| Company Identity | 3     | MEDIUM   |
| Team             | 2     | MEDIUM   |
| Manufacturing    | 3     | MEDIUM   |
| Press/Awards     | 2     | LOW      |
| Legal/Patent     | 2     | HIGH     |

---

## INPUTS EXPECTED NEXT

| Phase  | Input                  | Purpose                                                                     |
| ------ | ---------------------- | --------------------------------------------------------------------------- |
| **0B** | Asset & Media Manifest | Catalog of all images, videos, documents, and media files from current site |
| **0C** | Content Inventory      | Full page-by-page content extraction from current site                      |
| **0D** | Redirect Inventory     | Complete legacy URL list for redirect mapping                               |
| **1+** | Implementation phases  | Begin after all Phase 0 inputs are complete                                 |

**Additionally required (not phase-gated):**

- Owner verification responses to all 67 verification register items
- Scope decisions on digital services, patent services, network entities

---

## NUMERIC SUMMARY

| Metric                        | Count                       |
| ----------------------------- | --------------------------- |
| Legacy source routes recorded | 20                          |
| Content decision entries      | 30                          |
| Verification items            | 67                          |
| Portfolio source records      | 30                          |
| Legacy risk items             | 20                          |
| Critical risks                | 3                           |
| High risks                    | 7                           |
| Patches applied               | 1 (Evidence Discipline 001) |
| Implementation files created  | **0**                       |
| External research performed   | **0**                       |

---

## PHASE 0A LOCKED

All seven Phase 0A documents have been created in `/docs/`. Evidence Discipline Patch 001 has been applied and the portfolio register corrected. Phase 0A is now locked.

The project record is ready for Phase 0B (Asset & Media Manifest), Phase 0C (Content Inventory), and Phase 0D (Redirect Inventory).

No content from the current 123.design website should be migrated to the new website until verification register items are resolved by the Design/Product Lead and business owner.
