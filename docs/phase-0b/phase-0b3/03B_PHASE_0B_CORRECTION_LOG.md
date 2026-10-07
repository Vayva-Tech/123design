# PHASE 0B CORRECTION LOG

**Document ID:** 03B_PHASE_0B_CORRECTION_LOG
**Phase:** 0B.3 — Final Media Cleanup Pass
**Date:** 2026-09-26
**Supersedes:** 02N_LOCAL_PROJECT_REGISTER (Phase 0B.2)

---

## PURPOSE

This log records every correction, reclassification, and logic change made during Phase 0B.3 relative to Phase 0B.2 output. It provides an auditable trail of what changed and why.

---

## 1. ENTITY IDENTITY CORRECTIONS

### 1.1 RACK Misidentification

| Field                            | 0B.2 Value              | 0B.3 Value               | Evidence                                                                                                                          |
| -------------------------------- | ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| PRJ-LOCAL-0022 display name      | RACK - Rackmount System | RACK — Bath Tray / Caddy | Visual review of 3 images: wooden slatted tray with recessed compartments, towel visible. Bathroom product, not server equipment. |
| PRJ-LOCAL-0022 category          | PRODUCT_DESIGN          | PRODUCT_DESIGN           | Unchanged — still product design, just wrong product name                                                                         |
| PRJ-LOCAL-0022 visual_asset_type | FINAL_PRODUCT           | FINAL_PRODUCT            | Unchanged                                                                                                                         |

**Root cause:** Filename "123_design_blog_new_products_1 (N).jpg" contains no product identifier. The folder name "RACK" was auto-interpreted as rackmount. Visual review corrected this.

### 1.2 Medical Portfolio Decomposition

PRJ-LOCAL-0040 (Medical Device Portfolio) decomposed into 10 individual projects:

| New ID         | Name                        | Folder                              | Assets |
| -------------- | --------------------------- | ----------------------------------- | ------ |
| PRJ-LOCAL-0041 | Aesthetic Treatment Machine | MEDICAL/Aesthetic Treatment Machine | 2      |
| PRJ-LOCAL-0042 | Blood Pressure Monitor      | MEDICAL/Blood Pressure Monitor      | 2      |
| PRJ-LOCAL-0043 | Dental Jet                  | MEDICAL/Dental Jet                  | 2      |
| PRJ-LOCAL-0044 | Defibrillator               | MEDICAL/Defibrillator               | 2      |
| PRJ-LOCAL-0045 | Dynamometer                 | MEDICAL/Dynamometer                 | 2      |
| PRJ-LOCAL-0046 | Medical Hospital Scale      | MEDICAL/Medical Hospital Scale      | 2      |
| PRJ-LOCAL-0047 | Portable Scanner            | MEDICAL/Portable Scanner            | 2      |
| PRJ-LOCAL-0048 | Spine Board                 | MEDICAL/Spine Board                 | 3      |
| PRJ-LOCAL-0049 | Therapy System              | MEDICAL/Therapy System              | 2      |
| PRJ-LOCAL-004A | Thermometer                 | MEDICAL/Thermometer                 | 2      |

**Rationale:** Each medical subfolder is a distinct product with its own photography set. Treating them as a single "portfolio" obscures individual project identity. Owner must confirm whether these are individual client projects or a single medical design capability.

### 1.3 Defense Portfolio Decomposition

PRJ-LOCAL-0050 (Military/Defense Portfolio) decomposed into 16 individual projects:

| New ID         | Name                           | Assets |
| -------------- | ------------------------------ | ------ |
| PRJ-LOCAL-005A | Armored Vehicle Camera         | 2      |
| PRJ-LOCAL-005B | Binoculars (Military)          | 2      |
| PRJ-LOCAL-005C | Bomb Squad Remote              | 2      |
| PRJ-LOCAL-005D | Bomb Squad Robot               | 2      |
| PRJ-LOCAL-005E | Emergency Beacon               | 2      |
| PRJ-LOCAL-005F | Flight Box                     | 2      |
| PRJ-LOCAL-005G | Gyrocam                        | 2      |
| PRJ-LOCAL-005H | Manpack                        | 2      |
| PRJ-LOCAL-005I | Military Phone                 | 2      |
| PRJ-LOCAL-005J | POD for UAV                    | 2      |
| PRJ-LOCAL-005K | Rackmount Enclosure (Military) | 2      |
| PRJ-LOCAL-005L | Rifle Scope                    | 2      |
| PRJ-LOCAL-005M | Rugged Computer                | 2      |
| PRJ-LOCAL-005N | Security Wand                  | 2      |
| PRJ-LOCAL-005O | Suitcase (Military)            | 2      |
| PRJ-LOCAL-005P | Tac-Eye Binocular              | 2      |

**Rationale:** Same as medical — each subfolder is a distinct defense product. Publication requires owner confirmation of client relationship and export control considerations.

### 1.4 Dual-Category Projects Retained

Four projects appear in both COMMERCIAL/ and MILITARY/ with identical files:

- PRJ-LOCAL-0051: iaMedium (5 assets)
- PRJ-LOCAL-0052: Finger-Print Scanner (2 assets)
- PRJ-LOCAL-0053: Flight Planner (2 assets)
- PRJ-LOCAL-0054: Security Scanner (2 assets)

These are retained as individual projects. The duplicate cross-category files are handled by the duplicate register (canonical copy assigned to MILITARY/).

---

## 2. ENTITY TYPE CLASSIFICATION

Every entity now has an explicit entity_type:

| entity_type                | Count  | Description                                                 |
| -------------------------- | ------ | ----------------------------------------------------------- |
| INDIVIDUAL_PROJECT         | 42     | Single product/project with own identity                    |
| PROJECT_FAMILY             | 1      | Yacht Design Portfolio (multiple related vessels)           |
| PORTFOLIO_COLLECTION       | 13     | Grouped portfolios (Consumer Electronics, Appliances, etc.) |
| CAPABILITY_COLLECTION      | 2      | Prototyping Capabilities, Video Archive                     |
| MULTI_CLIENT_ARCHIVE       | 1      | OUTSOURCE 60                                                |
| ARCHIVE_BUCKET             | 1      | OLD Archive (Unclassified)                                  |
| AGGREGATE_DUPLICATE_BUCKET | 1      | ALL Root (Unique Residue)                                   |
| **Total**                  | **62** |                                                             |

---

## 3. DISPLAY READINESS LOGIC CHANGE

### 0B.2 Logic (Over-Conservative)

- Blanket "all assets need upscaling" assumption
- website_readiness = NOT_USABLE for ARCHIVE, READY only for TIER_1/TIER_2
- Result: 0 website-ready assets despite 82 TIER_1 + 134 TIER_2

### 0B.3 Logic (Evidence-Based)

| Resolution Class    | Width  | display_readiness     |
| ------------------- | ------ | --------------------- |
| VERY_HIGH (5000px+) | Any    | FULL_BLEED_READY      |
| HIGH (2400px+)      | >=2400 | FULL_BLEED_READY      |
| HIGH                | <2400  | LARGE_CONTAINED_READY |
| MEDIUM              | >=1600 | LARGE_CONTAINED_READY |
| MEDIUM              | <1600  | CARD_READY            |
| LOW                 | >=1280 | CARD_READY            |
| LOW                 | <1280  | GALLERY_READY         |
| VERY_LOW            | >=800  | THUMBNAIL_ONLY        |
| VERY_LOW            | <800   | RESTORATION_CANDIDATE |

### 0B.3 Distribution

| display_readiness     | Count |
| --------------------- | ----- |
| FULL_BLEED_READY      | 0     |
| LARGE_CONTAINED_READY | 0     |
| CARD_READY            | 30    |
| GALLERY_READY         | 4     |
| THUMBNAIL_ONLY        | 261   |
| RESTORATION_CANDIDATE | 269   |
| NOT_FOR_PUBLICATION   | 5     |
| UNREVIEWED            | 44    |

**Key insight:** The archive genuinely contains mostly low-resolution images. P50 width = 800px. Architecture photos are 636x515 WordPress thumbnails. Only SPOONY (1280-1600px), DBLL (1600px), RACK (1280px), and VIRT (1600px) have consistently CARD_READY or better assets.

No auto-upscaling applied. Readiness reflects actual pixel dimensions.

---

## 4. CASE STUDY STATE LOGIC CHANGE

### 0B.2 Logic

- All 34 usable groups reduced to "portfolio card only"
- No differentiation between case-study-worthy and card-only projects

### 0B.3 Logic

| State                      | Criteria                                         | Entities                                                                        |
| -------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------- |
| CASE_STUDY_CANDIDATE       | 10+ assets, consistent branding, multiple angles | SPOONY (15 assets)                                                              |
| LIGHT_CASE_STUDY_CANDIDATE | 4+ assets, clear product identity                | Tamarack (10), Misquamicut (4), DBLL (13), RACK (7), Adagio (7), iPad Cover (6) |
| PORTFOLIO_CARD_CANDIDATE   | 1+ assets, presentable                           | 52 entities                                                                     |
| COLLECTION_PAGE_CANDIDATE  | Grouped portfolio with 10+ assets                | (future — not yet assigned)                                                     |
| CAPABILITY_MEDIA_ONLY      | Process/capability documentation                 | (prototyping — future)                                                          |
| ARCHIVE_ONLY               | Not for publication                              | OLD Archive, ALL Residue, OUTSOURCE 60                                          |

---

## 5. CLIENT BRAND DISCIPLINE

### Rule Established

Visible branding (Crestron on Adagio, Apple on iPad Cover, Mares on diving goggle) does NOT constitute evidence of a client relationship. Publication status must reflect this:

| Entity           | Brand Visible | publication_status         | Rationale                                                                                 |
| ---------------- | ------------- | -------------------------- | ----------------------------------------------------------------------------------------- |
| Crestron Adagio  | Crestron      | USE_AFTER_CLIENT_APPROVAL  | Crestron is a real company. Cannot publish without confirming this was commissioned work. |
| iPad Cover (IPM) | Apple         | USE_AFTER_CONTENT_APPROVAL | iPad cover is an accessory, not Apple-commissioned. But Apple trademark requires care.    |
| All others       | None          | USE_AFTER_CONTENT_APPROVAL | No third-party brand concerns                                                             |

---

## 6. PHASE 0A ALIAS SEARCH RESULTS

29 of 30 Phase 0A portfolio source names have NO match in the local archive:

| relationship_state       | Count                                                               |
| ------------------------ | ------------------------------------------------------------------- |
| NO_LOCAL_EVIDENCE        | 29                                                                  |
| POSSIBLE_LOCAL_CANDIDATE | 1 ("Consumer" → CONSUMER ELECTRONICS category, not a project match) |

**Critical finding:** The Phase 0A portfolio (30 items observed on the original website) and the local file archive (993 assets across category folders) are largely different collections. The local archive contains working files, product renders, and photography — but not the specific projects shown on the original website gallery (ORAL4, PreLynx, MG-NINE, HoverBoard, etc.).

**Implication:** Website rebuild cannot rely on the local archive alone to reconstruct the Phase 0A portfolio. Owner must provide original portfolio assets or confirm which Phase 0A items map to local archive entities.

---

## 7. ALL FOLDER RESIDUE

02P_ALL_FOLDER_UNIQUE_ASSETS confirmed: of 267 files in ALL/, 266 are exact duplicates of files in category folders. Only 1 genuinely unique file:

| asset_id   | filename            | resolution         | Notes                                                    |
| ---------- | ------------------- | ------------------ | -------------------------------------------------------- |
| AST-000174 | iaMedium-1 copy.jpg | 660x495 (VERY_LOW) | iaMedium project — already represented in PRJ-LOCAL-0051 |

ALL/ folder provides zero unique content for the website.

---

## 8. OUTSOURCE 60 RECLASSIFICATION

PRJ-LOCAL-0100 (OUTSOURCE 60) contained 81 files, but 80 are exact duplicates of files in OLD/. The canonical copies were assigned to OLD Archive (PRJ-LOCAL-0900). Only 1 unique file remains: OUTSOURCE 60.zip.

OUTSOURCE 60 is reclassified as MULTI_CLIENT_ARCHIVE with publication_status = USE_FOR_CAPABILITY_ONLY. Owner must confirm which sub-projects (by code: BLD, BRH, CAT, etc.) are releasable.

---

## 9. VIDEO METADATA POPULATED

All 45 videos now have actual metadata from mdls:

| Metric                         | Value                                      |
| ------------------------------ | ------------------------------------------ |
| Total videos                   | 45                                         |
| Duration range                 | 5.2s - 8.0s                                |
| Total duration                 | 318s (5.3 min)                             |
| Resolution: 1280x720           | 30 videos                                  |
| Resolution: 1936x1080          | 10 videos                                  |
| Resolution: other              | 5 videos (2492x1080, 2592x1080, 1080x1936) |
| Audio present                  | 0 (none)                                   |
| Content type: PRODUCT_ROTATION | 40                                         |
| Content type: PRODUCT_BEAUTY   | 5                                          |

All videos are short, silent product rotation clips — ideal for homepage reel.

---

## 10. DESIGN LEAD PRIORITY TIERS

| Tier   | Entities                                                                                                                                                               | Rationale                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| TIER A | SPOONY, DBLL, RACK, Adagio, iPad Cover, Tamarack CC, Misquamicut Beach Club                                                                                            | Strongest assets, case study candidates, visually reviewed   |
| TIER B | Medical (10 individual), Defense (16 individual), Transportation, Consumer Electronics, Commercial, Outdoor/Sports, Communication, Appliances, Industrial, Kitchenware | Presentable product photography, individual project identity |
| TIER C | Architecture (remaining), Web Design, Graphic Design                                                                                                                   | Lower resolution or portfolio-collection nature              |
| TIER D | Prototyping, Home Goods, Toys, Ladder Rack, OUTSOURCE 60, OLD Archive, ALL Residue, Video Archive                                                                      | Capability documentation, archive, or low priority           |

---

## NOTES

- All corrections are evidence-based (visual review, file metadata, duplicate hash verification)
- No source archive files were modified (READ-ONLY constraint maintained)
- No external research performed (no browsing, no Google, no client websites)
- No software installed (mdls is native macOS)
