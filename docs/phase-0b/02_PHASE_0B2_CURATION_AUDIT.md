# Phase 0B.2 — Curation Audit

> Generated: 2026-09-26 05:44

---

## 1. Asset Inventory Summary

| Metric                    | Count |
| ------------------------- | ----- |
| Total assets              | 993   |
| Images                    | 945   |
| Videos                    | 45    |
| Exact duplicate groups    | 358   |
| Files in duplicate groups | 738   |
| Unique candidate folders  | 138   |

## 2. Project Identification

| Metric                        | Count |
| ----------------------------- | ----- |
| Defined projects              | 37    |
| Assets classified to projects | 323   |
| Assets in catch-all (OLD/ALL) | 544   |
| Assets in personal/brand      | 81    |

**Evidence levels:**

- LEVEL_1: 19 projects
- LEVEL_2: 16 projects
- LEVEL_3: 0 projects
- LEVEL_4: 2 projects

## 3. Curation Classification

**By curation class:**

| Class            | Count | %     |
| ---------------- | ----- | ----- |
| HERO             | 0     | 0.0%  |
| FEATURE          | 47    | 4.7%  |
| GALLERY          | 234   | 23.6% |
| PROCESS          | 8     | 0.8%  |
| TECHNICAL        | 4     | 0.4%  |
| ARCHIVE          | 700   | 70.5% |
| REJECT_CANDIDATE | 0     | 0.0%  |

**By visual asset type (top 10):**

| Type            | Count |
| --------------- | ----- |
| UNKNOWN         | 631   |
| FINAL_PRODUCT   | 236   |
| CONCEPT_RENDER  | 27    |
| EARLY_PROTOTYPE | 26    |
| MARKETING       | 26    |
| SKETCH          | 21    |
| TECHNICAL       | 8     |
| TOOLING         | 6     |
| PACKAGING       | 4     |
| PCB             | 4     |

**By quality tier:**

| Tier   | Count | %     |
| ------ | ----- | ----- |
| TIER_1 | 82    | 8.3%  |
| TIER_2 | 134   | 13.5% |
| TIER_3 | 172   | 17.3% |
| TIER_4 | 605   | 60.9% |

## 4. Key Findings

- **Stock photos detected**: 7 (excluded from HERO/FEATURE)
- **Website-ready assets**: 0 (all others need upscaling or restoration)
- **HERO assets**: 0 (requires TIER_1/TIER_2 originals)
- **FEATURE assets**: 47 (P0 projects, low-res originals)
- **Capability media**: 40 assets across prototyping, engineering, manufacturing
- **Brand/logo assets**: 2 identified
- **Video assets**: 45 (all require visual review)

## 5. Project Readiness

| Readiness State      | Count |
| -------------------- | ----- |
| CASE_STUDY_READY     | 0     |
| CASE_STUDY_POSSIBLE  | 0     |
| PORTFOLIO_CARD_ONLY  | 34    |
| OWNER_INPUT_REQUIRED | 2     |
| ARCHIVE_ONLY         | 1     |

| Featured Status     | Count |
| ------------------- | ----- |
| FEATURE_CANDIDATE_A | 0     |
| FEATURE_CANDIDATE_B | 29    |
| SUPPORTING_PROJECT  | 5     |
| ARCHIVE             | 3     |

## 6. Migration Readiness

- **Assets mapped for migration**: 293
- **P0 priority (HERO/FEATURE)**: 47
- **P1 priority (GALLERY/PROCESS/TECHNICAL)**: 246
- **Duplicate non-canonical (skip)**: 10

## 7. Gaps & Risks

1. **No HERO assets** — All P0 project originals are TIER_3/TIER_4. HERO requires finding or recovering high-resolution source files.
2. **Zero website-ready assets** — Every curated asset needs upscaling or restoration before web deployment.
3. **277 OLD archive assets unidentified** — May contain valuable project material.
4. **45 videos unreviewed** — Content unknown without visual inspection or ffprobe.
5. **Single-dimension coverage** — Most projects only have FINAL_PRODUCT media. No project has process + engineering + prototype coverage simultaneously.
6. **No case-study-ready projects** — Requires broader media coverage per project.

## 8. Documents Generated

| Document                                 | Description                           |
| ---------------------------------------- | ------------------------------------- |
| 02A_LOCAL_ASSET_MASTER.csv               | Asset inventory (993 records)         |
| 02B_EXACT_DUPLICATE_REGISTER.csv         | Duplicate groups (358 groups)         |
| 02G_PROJECT_CANDIDATE_FOLDERS.csv        | Candidate folder listing              |
| 02M_PROJECT_GROUPING_EVIDENCE.csv        | Project grouping evidence             |
| 02N_LOCAL_PROJECT_REGISTER.csv           | Project register (37 projects)        |
| 02O_UNGROUPED_FOLDER_REPORT.csv          | Ungrouped folder report               |
| 02P_PROJECT_IDENTITY_SUMMARY.md          | Project identity summary              |
| 02Q_ASSET_CURATION_REGISTER.csv          | Asset curation register (993 records) |
| 02R_PROJECT_MEDIA_READINESS.csv          | Project media readiness (37 projects) |
| 02S_FEATURED_PROJECT_MEDIA_CANDIDATES.md | Featured project candidates           |
| 02T_VIDEO_CURATION_REGISTER.csv          | Video curation register (45 videos)   |
| 02U_HOMEPAGE_REEL_SOURCE_PLAN.md         | Homepage reel source plan             |
| 02V_MIGRATION_MASTER_MAP.csv             | Migration master map (293 entries)    |
| 02W_BRAND_AND_LOGO_REGISTER.csv          | Brand & logo register                 |
| 02X_CAPABILITY_MEDIA_REGISTER.csv        | Capability media register             |
| 02Y_OWNER_IDENTIFICATION_BACKLOG.md      | Owner identification backlog          |
