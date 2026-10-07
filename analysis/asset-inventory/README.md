# Asset Inventory — Phase 0B.1 Local Asset Forensics

**Phase:** 0B.1
**Status:** COMPLETE
**Generated:** 2026-09-26
**Source Archive:** `/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design/Images & Videos`

---

## Purpose

Comprehensive forensic inventory of the historical media archive. Inventory first, organize second, curate third. Source archive is READ-ONLY — no modifications.

## Directory Structure

```
analysis/asset-inventory/
├── README.md                    ← this file
├── scripts/
│   ├── inventory_assets.py      ← core inventory script (993 files)
│   └── generate_contact_sheets.py ← contact sheet generator (28 sheets)
├── logs/
│   └── inventory-run.log        ← execution log from inventory run
├── contact-sheets/
│   └── CS-*.jpg                 ← 28 contact sheet images (240px thumbnails)
├── reports/                     ← (reserved for future analysis reports)
└── thumbnails/                  ← (reserved for future use)
```

## Output Documents

All deliverable documents are in `docs/phase-0b/`:

| Document                            | Description                                |
| ----------------------------------- | ------------------------------------------ |
| `02_PHASE_0B1_LOCAL_ASSET_AUDIT.md` | Executive report (22 sections)             |
| `02A_LOCAL_ASSET_MASTER.csv`        | Master inventory (993 records, 40+ fields) |
| `02A_LOCAL_ASSET_MASTER.json`       | JSON version of master inventory           |
| `02B_EXACT_DUPLICATE_REGISTER.csv`  | 358 duplicate groups (738 files)           |
| `02C_DERIVATIVE_CANDIDATES.csv`     | Derivative candidates (1 found)            |
| `02D_VIDEO_MASTER_REGISTER.csv`     | Video register (45 files)                  |
| `02E_LARGE_FILE_REGISTER.csv`       | Files >100MB (none found)                  |
| `02F_SOURCE_FOLDER_TAXONOMY.md`     | 2-level folder taxonomy (22 categories)    |
| `02G_PROJECT_CANDIDATE_FOLDERS.csv` | 138 project candidate folders              |
| `02H_CONTACT_SHEET_INDEX.md`        | Index of 28 contact sheets                 |
| `02I_STORAGE_ANALYSIS.md`           | Storage analysis (top files/folders)       |
| `02J_FORMAT_DISTRIBUTION.csv`       | Format distribution by count and size      |
| `02K_ASSET_ERROR_REGISTER.csv`      | Processing errors (0 errors)               |
| `02L_PHASE_0B1_HANDOFF.md`          | Phase handoff document                     |

## Scripts

### inventory_assets.py

Core forensic inventory script. Walks all files recursively in the source archive and produces:

- SHA-256 hashes for every file
- Image dimensions via `sips` (macOS native)
- EXIF/metadata via `mdls` (macOS native)
- Media classification (IMAGE, VIDEO, PDF, DOCUMENT, etc.)
- Resolution class (VERY_HIGH through VERY_LOW)
- Exact duplicate detection via SHA-256 grouping
- Derivative candidate detection (same stem, different extension)
- Phase 0A project name matching (literal match only)
- Review priority assignment (P0-P3)
- Evidence basis tracking (ROOT_FOLDER, FOLDER_NAME, FILENAME, etc.)

**Usage:**

```bash
python3 analysis/asset-inventory/scripts/inventory_assets.py
```

**Dependencies:** Python 3.10+, macOS `sips` and `mdls` (built-in)

### generate_contact_sheets.py

Generates visual contact sheets for review. Creates thumbnail grids for:

- All folder groups with >= 3 image assets
- Top-level category overviews for major categories

**Settings:** 240px thumbnails, 5 columns, dark theme, JPEG output

**Usage:**

```bash
python3 analysis/asset-inventory/scripts/generate_contact_sheets.py
```

**Dependencies:** Python 3.10+, Pillow (PIL)

## Key Findings

| Metric                    | Value                |
| ------------------------- | -------------------- |
| Total files               | 993                  |
| Total archive size        | 765.4 MB             |
| Images                    | 945 (93.4% JPG)      |
| Videos                    | 45 (all MP4)         |
| Exact duplicate groups    | 358                  |
| Duplicate files           | 738                  |
| Redundant storage         | ~135.4 MB            |
| Project candidate folders | 138                  |
| Phase 0A matches          | 0 (verified correct) |
| Processing errors         | 0                    |

## Known Limitations

1. **Video metadata**: ffprobe not available in environment. Video register has empty codec/fps/dimension fields. Tool: NOT_AVAILABLE_IN_ENVIRONMENT.
2. **EXIF data**: Limited to macOS `mdls` output. No exiftool available. Some camera/render metadata may be incomplete.
3. **Phase 0A matching**: Literal string match only. No fuzzy matching. Archive uses descriptive product names organized by industry category, not Phase 0A project names.
4. **Visual review**: Not performed. All classifications are based on folder names, file names, and metadata — not visual inspection.

## Evidence Discipline

- No project name was treated as evidence of industry, function, or capability
- Source archive was not modified in any way
- No external research was conducted
- No packages were installed
- All classifications carry explicit evidence_basis and confidence levels
