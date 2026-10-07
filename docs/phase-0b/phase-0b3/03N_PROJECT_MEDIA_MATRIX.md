# 03N — Project Media Matrix

## Overview

**Total entities:** 62  
**Total assets:** 613 (568 images + 44 videos + 1 archive)  
**Data source:** 03A_NORMALIZED_MEDIA_ENTITY_REGISTER.csv

This document provides an entity-organized view of all assets grouped by display readiness, publication status, and media type. The companion CSV (03N_PROJECT_MEDIA_MATRIX.csv) contains the full tabular data.

---

## Display Readiness Distribution

| Readiness Level       | Count | Percentage | Website Suitability                      |
| --------------------- | ----- | ---------- | ---------------------------------------- |
| FULL_BLEED_READY      | 0     | 0%         | Hero images, full-bleed backgrounds      |
| LARGE_CONTAINED_READY | 0     | 0%         | Large contained hero placements          |
| GALLERY_READY         | 4     | 0.7%       | Case study galleries, prominent cards    |
| CARD_READY            | 30    | 4.9%       | Portfolio cards, case study support      |
| THUMBNAIL_ONLY        | 261   | 42.6%      | Thumbnail grids, icon-level use          |
| RESTORATION_CANDIDATE | 269   | 43.9%      | Below website threshold; needs upscaling |
| NOT_FOR_PUBLICATION   | 5     | 0.8%       | Stock photos; excluded from website      |
| UNREVIEWED            | 44    | 7.2%       | Videos (reviewed separately in 03K)      |

**Key insight:** Only 34 images (0.6%) are at CARD_READY or above. The archive is predominantly low-resolution (P50 width = 800px). This is not over-conservatism — it reflects the actual state of the source archive.

---

## Priority Tier Distribution

### TIER_A — Design Lead Projects (8 entities, 63 assets)

| entity_id      | display_name               | entity_type        | total_assets | best_readiness        | case_study_state           |
| -------------- | -------------------------- | ------------------ | ------------ | --------------------- | -------------------------- |
| PRJ-LOCAL-0020 | SPOONY Smart Spoon         | INDIVIDUAL_PROJECT | 15           | CARD_READY            | CASE_STUDY_CANDIDATE       |
| PRJ-LOCAL-0021 | DBLL — Adjustable Dumbbell | INDIVIDUAL_PROJECT | 13           | GALLERY_READY         | LIGHT_CASE_STUDY_CANDIDATE |
| PRJ-LOCAL-0022 | RACK — Bath Tray / Caddy   | INDIVIDUAL_PROJECT | 7            | GALLERY_READY         | LIGHT_CASE_STUDY_CANDIDATE |
| PRJ-LOCAL-0030 | Crestron Adagio            | INDIVIDUAL_PROJECT | 7            | GALLERY_READY         | LIGHT_CASE_STUDY_CANDIDATE |
| PRJ-LOCAL-0031 | iPad Cover (IPM)           | INDIVIDUAL_PROJECT | 6            | RESTORATION_CANDIDATE | LIGHT_CASE_STUDY_CANDIDATE |
| PRJ-LOCAL-0051 | iaMedium                   | INDIVIDUAL_PROJECT | 3            | THUMBNAIL_ONLY        | PORTFOLIO_CARD_CANDIDATE   |
| PRJ-LOCAL-0001 | Tamarack Country Club      | INDIVIDUAL_PROJECT | 10           | CARD_READY            | LIGHT_CASE_STUDY_CANDIDATE |
| PRJ-LOCAL-0002 | Misquamicut Beach Club     | INDIVIDUAL_PROJECT | 4            | RESTORATION_CANDIDATE | LIGHT_CASE_STUDY_CANDIDATE |

**TIER_A summary:** 63 assets total. 2 at GALLERY_READY, 17 at CARD_READY, 14 at RESTORATION_CANDIDATE or below. SPOONY is the strongest case study candidate (15 assets, all CARD_READY+).

### TIER_B — Secondary Projects (40 entities, 184 assets)

Includes:

- **Medical decomposed:** PRJ-LOCAL-0041 through PRJ-LOCAL-004A (10 entities, 20 assets)
- **Defense decomposed:** PRJ-LOCAL-005A through PRJ-LOCAL-005P (16 entities, 32 assets)
- **Portfolio collections:** Appliances, Commercial, Consumer Electronics, Communication, Industrial, Kitchenware, Outdoor & Sports, Home Goods, Toys & Juvenile (9 entities, 111 assets)
- **Transportation:** Yacht Design Portfolio, Aircraft Interior, Dubai Boat Show (3 entities, 21 assets)

**TIER_B summary:** 184 assets total. Most are THUMBNAIL_ONLY or RESTORATION_CANDIDATE. Medical and defense projects are 2 assets each (minimal case study potential). Portfolio collections are 5-27 assets each but mostly low resolution.

### TIER_C — Tertiary Projects (6 entities, 36 assets)

| entity_id      | display_name                | entity_type          | total_assets | best_readiness        |
| -------------- | --------------------------- | -------------------- | ------------ | --------------------- |
| PRJ-LOCAL-0003 | Charlotte Office Interior   | INDIVIDUAL_PROJECT   | 3            | THUMBNAIL_ONLY        |
| PRJ-LOCAL-0004 | Convent of the Sacred Heart | INDIVIDUAL_PROJECT   | 3            | RESTORATION_CANDIDATE |
| PRJ-LOCAL-0005 | Hyderabad Phase II Project  | INDIVIDUAL_PROJECT   | 3            | RESTORATION_CANDIDATE |
| PRJ-LOCAL-0006 | 520 Madison Avenue NY       | INDIVIDUAL_PROJECT   | 1            | RESTORATION_CANDIDATE |
| PRJ-LOCAL-0060 | Web Design Portfolio        | PORTFOLIO_COLLECTION | 10           | THUMBNAIL_ONLY        |
| PRJ-LOCAL-0070 | Graphic Design Portfolio    | PORTFOLIO_COLLECTION | 16           | THUMBNAIL_ONLY        |

**TIER_C summary:** 36 assets total. All THUMBNAIL_ONLY or RESTORATION_CANDIDATE. Architecture projects are 1-3 assets each. Web/graphic design portfolios are screenshot-level quality.

### TIER_D — Archive & Capability (8 entities, 330 assets)

| entity_id      | display_name                   | entity_type                | total_assets | best_readiness        |
| -------------- | ------------------------------ | -------------------------- | ------------ | --------------------- |
| PRJ-LOCAL-0900 | OLD Archive (Unclassified)     | ARCHIVE_BUCKET             | 256          | THUMBNAIL_ONLY        |
| PRJ-LOCAL-0110 | Video Archive                  | CAPABILITY_COLLECTION      | 44           | UNREVIEWED            |
| PRJ-LOCAL-0080 | Prototyping Capabilities       | CAPABILITY_COLLECTION      | 18           | RESTORATION_CANDIDATE |
| PRJ-LOCAL-0090 | Consumer Electronics Portfolio | PORTFOLIO_COLLECTION       | 22           | THUMBNAIL_ONLY        |
| PRJ-LOCAL-0901 | ALL Root (Unique Residue)      | AGGREGATE_DUPLICATE_BUCKET | 1            | THUMBNAIL_ONLY        |
| PRJ-LOCAL-0100 | OUTSOURCE 60                   | MULTI_CLIENT_ARCHIVE       | 1            | ARCHIVE               |
| PRJ-LOCAL-0098 | Ladder Rack                    | INDIVIDUAL_PROJECT         | 2            | THUMBNAIL_ONLY        |
| PRJ-LOCAL-0093 | Home Goods Portfolio           | PORTFOLIO_COLLECTION       | 5            | THUMBNAIL_ONLY        |

**TIER_D summary:** 330 assets total. Dominated by OLD Archive (256 assets) and Video Archive (44 assets). Prototyping capabilities (18 assets) are all RESTORATION_CANDIDATE. Most TIER_D assets are not website-suitable in current state.

---

## Publication Status Distribution

| Status                     | Count | Percentage | Meaning                                         |
| -------------------------- | ----- | ---------- | ----------------------------------------------- |
| USE_AFTER_CONTENT_APPROVAL | 489   | 79.8%      | No client branding; content approval sufficient |
| USE_AFTER_CLIENT_APPROVAL  | 82    | 13.4%      | Client branding visible; needs client sign-off  |
| HOLD_OWNER_REVIEW          | 37    | 6.0%       | Owner must review before publication            |
| ARCHIVE                    | 4     | 0.7%       | Archive only; not for website                   |
| DO_NOT_USE                 | 5     | 0.8%       | Stock photos; excluded from website             |

**Client approval required:** 82 assets (13.4%) — primarily Crestron Adagio (7), Apple iPad Cover (6), and architecture projects with visible branding.

---

## Media Type Distribution

| Media Class | Count | Percentage |
| ----------- | ----- | ---------- |
| IMAGE       | 568   | 92.7%      |
| VIDEO       | 44    | 7.2%       |
| ARCHIVE     | 1     | 0.2%       |

**Video assets:** All 44 videos are from PRJ-LOCAL-0110 (Video Archive). All are 5-8 second product rotation clips. 20 shortlisted for homepage reel (see 03L).

---

## Case Study Potential by Entity

### CASE_STUDY_CANDIDATE (1 entity)

- **PRJ-LOCAL-0020 SPOONY Smart Spoon** — 15 assets, all CARD_READY, no client branding

### LIGHT_CASE_STUDY_CANDIDATE (7 entities)

- **PRJ-LOCAL-0021 DBLL** — 13 assets, 1 GALLERY_READY + 7 CARD_READY
- **PRJ-LOCAL-0022 RACK** — 7 assets, 1 GALLERY_READY + 6 CARD_READY
- **PRJ-LOCAL-0030 Adagio** — 7 assets, 1 GALLERY_READY + client branding (Crestron)
- **PRJ-LOCAL-0031 IPM** — 6 assets, all RESTORATION_CANDIDATE (660px)
- **PRJ-LOCAL-0001 Tamarack** — 10 assets, 2 CARD_READY + architecture
- **PRJ-LOCAL-0002 Misquamicut** — 4 assets, all RESTORATION_CANDIDATE
- **PRJ-LOCAL-0023 VIRT** — 1 asset, THUMBNAIL_ONLY (minimal)

### PORTFOLIO_CARD_CANDIDATE (44 entities)

- All TIER_B medical/defense individual projects (2-3 assets each)
- All portfolio collections (5-27 assets each)
- Remaining architecture projects (1-3 assets each)

### CAPABILITY_MEDIA_ONLY (2 entities)

- **PRJ-LOCAL-0080 Prototyping** — 18 assets, all RESTORATION_CANDIDATE
- **PRJ-LOCAL-0110 Video Archive** — 44 videos, homepage reel candidates

### ARCHIVE_ONLY (3 entities)

- **PRJ-LOCAL-0900 OLD Archive** — 256 assets, unclassified
- **PRJ-LOCAL-0100 OUTSOURCE 60** — 1 asset (ZIP file)
- **PRJ-LOCAL-0901 ALL Root** — 1 asset (unique residue)

---

## Website Shortlist Summary

**Total shortlisted:** 78 assets (from 03M_WEBSITE_ASSET_SHORTLIST.csv)

- 34 images (all CARD_READY or above)
- 44 videos (all FULL_BLEED_READY)

**By website role:**

- CASE_STUDY_LEAD: 1 (SPOONY thumbnail)
- CASE_STUDY_SUPPORT: 17 (SPOONY gallery + RACK/DBLL/Adagio support)
- PORTFOLIO_CARD: 16 (TIER_A and select TIER_B images)
- HOMEPAGE_REEL_PRIMARY: 14 (videos >= 1900px)
- HOMEPAGE_REEL_ALTERNATE: 30 (videos >= 1280px)

**Migration priority:** 78 assets = ~12% of total archive (613 assets) but represents 100% of website-ready content.

---

## Key Findings

1. **Archive is predominantly low-resolution.** Only 34 images (5.5%) are CARD_READY or above. This is not a curation failure — it reflects the source archive state.

2. **SPOONY is the strongest case study.** 15 assets, all CARD_READY, no client branding, speculative product (no client approval needed).

3. **Medical/defense decomposition reveals minimal assets.** Each of the 26 decomposed projects has only 2-3 assets, all THUMBNAIL_ONLY or RESTORATION_CANDIDATE. Portfolio cards only, not case studies.

4. **Video archive is website-ready.** All 44 videos are FULL_BLEED_READY. 20 shortlisted for homepage reel. Silent, short-duration product rotations — ideal for web.

5. **Client approval required for 82 assets (13.4%).** Primarily Crestron Adagio, Apple iPad Cover, and architecture projects. Owner review questions in 03O address this.

6. **OLD Archive (256 assets) is unclassified.** These are not website candidates. They represent historical working files, not curated portfolio pieces.
