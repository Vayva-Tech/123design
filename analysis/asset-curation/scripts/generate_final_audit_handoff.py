#!/usr/bin/env python3
"""
Phase 0B.2 — Final Audit & Handoff Documents
Reads all Phase 0B.2 outputs → generates audit + handoff markdown.
"""

import csv
import os
from collections import defaultdict
from datetime import datetime

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")

ASSET_MASTER = os.path.join(PHASE0B, "02A_LOCAL_ASSET_MASTER.csv")
DUP_REGISTER = os.path.join(PHASE0B, "02B_EXACT_DUPLICATE_REGISTER.csv")
PROJECT_REGISTER = os.path.join(PHASE0B, "02N_LOCAL_PROJECT_REGISTER.csv")
CURATION_REGISTER = os.path.join(PHASE0B, "02Q_ASSET_CURATION_REGISTER.csv")
READINESS_CSV = os.path.join(PHASE0B, "02R_PROJECT_MEDIA_READINESS.csv")
MIGRATION_MAP = os.path.join(PHASE0B, "02V_MIGRATION_MASTER_MAP.csv")
VIDEO_REGISTER = os.path.join(PHASE0B, "02T_VIDEO_CURATION_REGISTER.csv")
CAPABILITY_REGISTER = os.path.join(PHASE0B, "02X_CAPABILITY_MEDIA_REGISTER.csv")
BRAND_REGISTER = os.path.join(PHASE0B, "02W_BRAND_AND_LOGO_REGISTER.csv")


def load_csv(path):
    with open(path) as f:
        return list(csv.DictReader(f))


def generate_audit():
    assets = load_csv(ASSET_MASTER)
    dupes = load_csv(DUP_REGISTER)
    projects = load_csv(PROJECT_REGISTER)
    curation = load_csv(CURATION_REGISTER)
    readiness = load_csv(READINESS_CSV)
    migration = load_csv(MIGRATION_MAP)
    videos = load_csv(VIDEO_REGISTER)
    capability = load_csv(CAPABILITY_REGISTER)
    brand = load_csv(BRAND_REGISTER)

    cur_by_class = defaultdict(int)
    for c in curation:
        cur_by_class[c["curation_class"]] += 1

    cur_by_type = defaultdict(int)
    for c in curation:
        cur_by_type[c["visual_asset_type"]] += 1

    cur_by_tier = defaultdict(int)
    for c in curation:
        cur_by_tier[c["quality_tier"]] += 1

    ready_by_state = defaultdict(int)
    for r in readiness:
        ready_by_state[r["case_study_readiness"]] += 1

    ready_by_featured = defaultdict(int)
    for r in readiness:
        ready_by_featured[r["featured_candidate"]] += 1

    stock_count = sum(1 for c in curation if c.get("is_stock_photo") == "YES")
    website_ready = sum(1 for c in curation if c.get("website_readiness") == "READY")

    lines = []
    lines.append("# Phase 0B.2 — Curation Audit")
    lines.append("")
    lines.append(f"> Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 1. Asset Inventory Summary")
    lines.append("")
    lines.append(f"| Metric | Count |")
    lines.append(f"|--------|-------|")
    lines.append(f"| Total assets | {len(assets)} |")
    lines.append(f"| Images | {sum(1 for a in assets if a.get('media_class')=='IMAGE')} |")
    lines.append(f"| Videos | {sum(1 for a in assets if a.get('media_class')=='VIDEO')} |")
    lines.append(f"| Exact duplicate groups | {len(dupes)} |")
    lines.append(f"| Files in duplicate groups | {sum(len(d['asset_ids'].split(';')) for d in dupes)} |")
    lines.append(f"| Unique candidate folders | {len(set(a.get('parent_folder','') for a in assets))} |")
    lines.append("")
    lines.append("## 2. Project Identification")
    lines.append("")
    lines.append(f"| Metric | Count |")
    lines.append(f"|--------|-------|")
    lines.append(f"| Defined projects | {len(projects)} |")
    lines.append(f"| Assets classified to projects | {sum(1 for c in curation if c.get('local_project_id','') not in ('','PRJ-LOCAL-0900','PRJ-LOCAL-0901','PRJ-LOCAL-0100'))} |")
    lines.append(f"| Assets in catch-all (OLD/ALL) | {sum(1 for c in curation if c.get('local_project_id','') in ('PRJ-LOCAL-0900','PRJ-LOCAL-0901'))} |")
    lines.append(f"| Assets in personal/brand | {sum(1 for c in curation if c.get('local_project_id','') == 'PRJ-LOCAL-0100')} |")
    lines.append("")
    ev_counts = defaultdict(int)
    for p in projects:
        ev_counts[p.get("evidence_level", "UNKNOWN")] += 1
    lines.append("**Evidence levels:**")
    lines.append("")
    for level in ["LEVEL_1", "LEVEL_2", "LEVEL_3", "LEVEL_4"]:
        lines.append(f"- {level}: {ev_counts.get(level, 0)} projects")
    lines.append("")
    lines.append("## 3. Curation Classification")
    lines.append("")
    lines.append("**By curation class:**")
    lines.append("")
    lines.append("| Class | Count | % |")
    lines.append("|-------|-------|---|")
    for cls in ["HERO", "FEATURE", "GALLERY", "PROCESS", "TECHNICAL", "ARCHIVE", "REJECT_CANDIDATE"]:
        count = cur_by_class.get(cls, 0)
        pct = f"{count/len(curation)*100:.1f}%" if curation else "0%"
        lines.append(f"| {cls} | {count} | {pct} |")
    lines.append("")
    lines.append("**By visual asset type (top 10):**")
    lines.append("")
    lines.append("| Type | Count |")
    lines.append("|------|-------|")
    for vtype, count in sorted(cur_by_type.items(), key=lambda x: -x[1])[:10]:
        lines.append(f"| {vtype} | {count} |")
    lines.append("")
    lines.append("**By quality tier:**")
    lines.append("")
    lines.append("| Tier | Count | % |")
    lines.append("|------|-------|---|")
    for tier in ["TIER_1", "TIER_2", "TIER_3", "TIER_4"]:
        count = cur_by_tier.get(tier, 0)
        pct = f"{count/len(curation)*100:.1f}%"
        lines.append(f"| {tier} | {count} | {pct} |")
    lines.append("")
    lines.append("## 4. Key Findings")
    lines.append("")
    lines.append(f"- **Stock photos detected**: {stock_count} (excluded from HERO/FEATURE)")
    lines.append(f"- **Website-ready assets**: {website_ready} (all others need upscaling or restoration)")
    lines.append(f"- **HERO assets**: {cur_by_class.get('HERO', 0)} (requires TIER_1/TIER_2 originals)")
    lines.append(f"- **FEATURE assets**: {cur_by_class.get('FEATURE', 0)} (P0 projects, low-res originals)")
    lines.append(f"- **Capability media**: {len(capability)} assets across prototyping, engineering, manufacturing")
    lines.append(f"- **Brand/logo assets**: {len(brand)} identified")
    lines.append(f"- **Video assets**: {len(videos)} (all require visual review)")
    lines.append("")
    lines.append("## 5. Project Readiness")
    lines.append("")
    lines.append("| Readiness State | Count |")
    lines.append("|----------------|-------|")
    for state in ["CASE_STUDY_READY", "CASE_STUDY_POSSIBLE", "PORTFOLIO_CARD_ONLY", "OWNER_INPUT_REQUIRED", "ARCHIVE_ONLY"]:
        lines.append(f"| {state} | {ready_by_state.get(state, 0)} |")
    lines.append("")
    lines.append("| Featured Status | Count |")
    lines.append("|----------------|-------|")
    for status in ["FEATURE_CANDIDATE_A", "FEATURE_CANDIDATE_B", "SUPPORTING_PROJECT", "ARCHIVE"]:
        lines.append(f"| {status} | {ready_by_featured.get(status, 0)} |")
    lines.append("")
    lines.append("## 6. Migration Readiness")
    lines.append("")
    lines.append(f"- **Assets mapped for migration**: {len(migration)}")
    lines.append(f"- **P0 priority (HERO/FEATURE)**: {sum(1 for m in migration if m.get('priority')=='P0')}")
    lines.append(f"- **P1 priority (GALLERY/PROCESS/TECHNICAL)**: {sum(1 for m in migration if m.get('priority')=='P1')}")
    lines.append(f"- **Duplicate non-canonical (skip)**: {sum(1 for m in migration if m.get('duplicate_action')=='DUPLICATE_SKIP')}")
    lines.append("")
    lines.append("## 7. Gaps & Risks")
    lines.append("")
    lines.append("1. **No HERO assets** — All P0 project originals are TIER_3/TIER_4. HERO requires finding or recovering high-resolution source files.")
    lines.append("2. **Zero website-ready assets** — Every curated asset needs upscaling or restoration before web deployment.")
    lines.append("3. **277 OLD archive assets unidentified** — May contain valuable project material.")
    lines.append("4. **45 videos unreviewed** — Content unknown without visual inspection or ffprobe.")
    lines.append("5. **Single-dimension coverage** — Most projects only have FINAL_PRODUCT media. No project has process + engineering + prototype coverage simultaneously.")
    lines.append("6. **No case-study-ready projects** — Requires broader media coverage per project.")
    lines.append("")
    lines.append("## 8. Documents Generated")
    lines.append("")
    docs = [
        ("02A_LOCAL_ASSET_MASTER.csv", "Asset inventory (993 records)"),
        ("02B_EXACT_DUPLICATE_REGISTER.csv", "Duplicate groups (358 groups)"),
        ("02G_PROJECT_CANDIDATE_FOLDERS.csv", "Candidate folder listing"),
        ("02M_PROJECT_GROUPING_EVIDENCE.csv", "Project grouping evidence"),
        ("02N_LOCAL_PROJECT_REGISTER.csv", "Project register (37 projects)"),
        ("02O_UNGROUPED_FOLDER_REPORT.csv", "Ungrouped folder report"),
        ("02P_PROJECT_IDENTITY_SUMMARY.md", "Project identity summary"),
        ("02Q_ASSET_CURATION_REGISTER.csv", "Asset curation register (993 records)"),
        ("02R_PROJECT_MEDIA_READINESS.csv", "Project media readiness (37 projects)"),
        ("02S_FEATURED_PROJECT_MEDIA_CANDIDATES.md", "Featured project candidates"),
        ("02T_VIDEO_CURATION_REGISTER.csv", "Video curation register (45 videos)"),
        ("02U_HOMEPAGE_REEL_SOURCE_PLAN.md", "Homepage reel source plan"),
        ("02V_MIGRATION_MASTER_MAP.csv", "Migration master map (293 entries)"),
        ("02W_BRAND_AND_LOGO_REGISTER.csv", "Brand & logo register"),
        ("02X_CAPABILITY_MEDIA_REGISTER.csv", "Capability media register"),
        ("02Y_OWNER_IDENTIFICATION_BACKLOG.md", "Owner identification backlog"),
    ]
    lines.append("| Document | Description |")
    lines.append("|----------|-------------|")
    for doc, desc in docs:
        lines.append(f"| {doc} | {desc} |")

    outpath = os.path.join(PHASE0B, "02_PHASE_0B2_CURATION_AUDIT.md")
    with open(outpath, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Written: {outpath}")


def generate_handoff():
    lines = []
    lines.append("# Phase 0B.2 → Phase 0B.3 Handoff")
    lines.append("")
    lines.append(f"> Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## What Phase 0B.2 Delivered")
    lines.append("")
    lines.append("1. **Complete asset inventory** — 993 assets catalogued with metadata")
    lines.append("2. **37 projects identified** — From 138 candidate folders, with evidence levels")
    lines.append("3. **Every asset curated** — Classified by type, quality, project, and website readiness")
    lines.append("4. **Migration map built** — 293 curated assets mapped to clean paths")
    lines.append("5. **Video register created** — 45 videos flagged for visual review")
    lines.append("6. **Owner backlog generated** — 277+ assets needing Fredrick's identification")
    lines.append("")
    lines.append("## What Phase 0B.3 Needs to Do")
    lines.append("")
    lines.append("### Immediate (before any website work)")
    lines.append("")
    lines.append("1. **Owner review of 02Y backlog** — Identify OLD archive, ALL root, and video content")
    lines.append("2. **Run ffprobe on all 45 videos** — Get resolution, duration, codec data")
    lines.append("3. **Visual review of videos** — Classify content, assign to projects")
    lines.append("4. **Re-run curation with owner input** — Update 02Q, 02R, 02V")
    lines.append("")
    lines.append("### Migration Execution")
    lines.append("")
    lines.append("5. **Copy curated assets to /media-migration/** — Using 02V map")
    lines.append("6. **Upscale P0 FEATURE assets** — TIER_3/TIER_4 → TIER_1/TIER_2 using AI upscaling")
    lines.append("7. **Restore damaged assets** — Address NEEDS_RESTORE items")
    lines.append("8. **Verify all migrated assets** — Confirm quality post-processing")
    lines.append("")
    lines.append("### Website Preparation")
    lines.append("")
    lines.append("9. **Select HERO assets** — After upscaling, promote best to HERO")
    lines.append("10. **Build homepage reel** — From video selection (02U criteria)")
    lines.append("11. **Finalize featured projects** — Confirm FEATURE_CANDIDATE_A list")
    lines.append("12. **Generate delivery assets** — Web-optimized versions (WebP, responsive sizes)")
    lines.append("")
    lines.append("## Key Constraints for Phase 0B.3")
    lines.append("")
    lines.append("- **No asset is website-ready yet** — All need upscaling or restoration")
    lines.append("- **No HERO assets exist** — Must recover or generate high-res originals")
    lines.append("- **277 assets still unidentified** — Owner input required before final curation")
    lines.append("- **Videos are a black box** — Cannot select reel material without viewing")
    lines.append("")
    lines.append("## File Locations")
    lines.append("")
    lines.append("| Path | Contents |")
    lines.append("|------|----------|")
    lines.append("| `docs/phase-0b/` | All Phase 0B.2 output documents |")
    lines.append("| `analysis/asset-curation/scripts/` | All generation scripts |")
    lines.append("| `Images & Videos/` | Source archive (READ-ONLY) |")
    lines.append("| `media-migration/` | Target for curated asset copies (Phase 0B.3) |")
    lines.append("")
    lines.append("## Decision Log")
    lines.append("")
    lines.append("| Decision | Rationale |")
    lines.append("|----------|-----------|")
    lines.append("| Stock photos → ARCHIVE | Not original work, cannot use as portfolio |")
    lines.append("| Videos → ARCHIVE (for now) | Cannot classify without visual review |")
    lines.append("| P0 + low-res → FEATURE (not HERO) | Curatorial importance separated from technical quality |")
    lines.append("| No visual review → no REJECT | Nothing rejected without human eyes on it |")
    lines.append("| OLD/ALL → OWNER_INPUT_REQUIRED | Cannot auto-classify without content knowledge |")

    outpath = os.path.join(PHASE0B, "02Z_PHASE_0B2_HANDOFF.md")
    with open(outpath, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"Written: {outpath}")


if __name__ == "__main__":
    generate_audit()
    generate_handoff()
    print("\nDone.")
