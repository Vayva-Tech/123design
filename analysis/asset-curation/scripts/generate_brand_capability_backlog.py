#!/usr/bin/env python3
"""
Phase 0B.2 — Brand, Capability & Owner Backlog Registers
Reads 02A asset master + 02Q curation register + 02N project register
Generates: 02W, 02X, 02Y
"""

import csv
import os
import re
from collections import defaultdict

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")
OUTPUT = os.path.join(DOCS, "phase-0b")

ASSET_MASTER = os.path.join(PHASE0B, "02A_LOCAL_ASSET_MASTER.csv")
CURATION_REGISTER = os.path.join(PHASE0B, "02Q_ASSET_CURATION_REGISTER.csv")
PROJECT_REGISTER = os.path.join(PHASE0B, "02N_LOCAL_PROJECT_REGISTER.csv")

BRAND_PATTERNS = [
    r'logo', r'brand', r'identity', r'mark\b', r'wordmark', r'lettermark',
    r'business.card', r'business_card', r'stationery', r'letterhead',
    r'favicon', r'icon\b', r'badge\b',
]

CAPABILITY_TYPES = {
    "PROCESS", "TOOLING", "MANUFACTURING", "ASSEMBLY", "TESTING",
    "EARLY_PROTOTYPE", "FUNCTIONAL_PROTOTYPE", "ENGINEERING", "PCB", "CAD",
}


def is_brand_asset(asset):
    stem = asset.get("filename_stem", "").lower()
    folder = asset.get("parent_folder", "").lower()
    for pat in BRAND_PATTERNS:
        if re.search(pat, stem) or re.search(pat, folder):
            return True
    return False


def main():
    print("Loading data...")
    with open(ASSET_MASTER) as f:
        assets = list(csv.DictReader(f))
    with open(CURATION_REGISTER) as f:
        curation = {r["asset_id"]: r for r in csv.DictReader(f)}
    with open(PROJECT_REGISTER) as f:
        projects = {r["local_project_id"]: r for r in csv.DictReader(f)}

    print(f"  {len(assets)} assets, {len(curation)} curated, {len(projects)} projects")

    generate_brand_register(assets, curation)
    generate_capability_register(assets, curation)
    generate_owner_backlog(assets, curation, projects)


def generate_brand_register(assets, curation):
    print("\n--- Brand & Logo Register ---")
    results = []
    for a in assets:
        if is_brand_asset(a):
            cur = curation.get(a["asset_id"], {})
            results.append({
                "asset_id": a["asset_id"],
                "filename": a.get("filename", ""),
                "source_folder": a.get("parent_folder", ""),
                "media_class": a.get("media_class", ""),
                "curation_class": cur.get("curation_class", ""),
                "quality_tier": cur.get("quality_tier", ""),
                "visual_asset_type": cur.get("visual_asset_type", ""),
                "local_project_id": cur.get("local_project_id", ""),
                "notes": "",
            })

    fieldnames = [
        "asset_id", "filename", "source_folder", "media_class",
        "curation_class", "quality_tier", "visual_asset_type",
        "local_project_id", "notes",
    ]
    outpath = os.path.join(OUTPUT, "02W_BRAND_AND_LOGO_REGISTER.csv")
    with open(outpath, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"  Brand assets found: {len(results)}")
    print(f"  Written: {outpath}")


def generate_capability_register(assets, curation):
    print("\n--- Capability Media Register ---")
    results = []
    for a in assets:
        cur = curation.get(a["asset_id"], {})
        visual_type = cur.get("visual_asset_type", "")
        if visual_type in CAPABILITY_TYPES:
            results.append({
                "asset_id": a["asset_id"],
                "filename": a.get("filename", ""),
                "source_folder": a.get("parent_folder", ""),
                "visual_asset_type": visual_type,
                "curation_class": cur.get("curation_class", ""),
                "quality_tier": cur.get("quality_tier", ""),
                "local_project_id": cur.get("local_project_id", ""),
                "capability_category": categorize_capability(visual_type),
            })

    fieldnames = [
        "asset_id", "filename", "source_folder", "visual_asset_type",
        "curation_class", "quality_tier", "local_project_id",
        "capability_category",
    ]
    outpath = os.path.join(OUTPUT, "02X_CAPABILITY_MEDIA_REGISTER.csv")
    with open(outpath, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"  Capability assets found: {len(results)}")
    cats = defaultdict(int)
    for r in results:
        cats[r["capability_category"]] += 1
    for c, n in sorted(cats.items()):
        print(f"    {c}: {n}")
    print(f"  Written: {outpath}")


def categorize_capability(visual_type):
    if visual_type in ("MANUFACTURING", "TOOLING", "ASSEMBLY"):
        return "MANUFACTURING_PROCESS"
    if visual_type in ("EARLY_PROTOTYPE", "FUNCTIONAL_PROTOTYPE"):
        return "PROTOTYPING"
    if visual_type in ("ENGINEERING", "PCB", "CAD"):
        return "ENGINEERING"
    if visual_type in ("PROCESS", "TESTING"):
        return "PROCESS_TESTING"
    return "OTHER"


def generate_owner_backlog(assets, curation, projects):
    print("\n--- Owner Identification Backlog ---")

    unclassified = [a for a in assets if curation.get(a["asset_id"], {}).get("local_project_id") in ("", "PRJ-LOCAL-0100")]
    old_archive = [a for a in assets if a.get("parent_folder", "").startswith("OLD")]
    all_root = [a for a in assets if a.get("parent_folder") in ("ALL", "")]
    video_all = [a for a in assets if a.get("media_class") == "VIDEO"]

    no_project = [a for a in assets if curation.get(a["asset_id"], {}).get("local_project_id", "") not in projects]
    no_project_by_folder = defaultdict(list)
    for a in no_project:
        cur = curation.get(a["asset_id"], {})
        pid = cur.get("local_project_id", "")
        if pid in ("", "PRJ-LOCAL-0100", "PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
            folder = a.get("parent_folder", "UNKNOWN")
            no_project_by_folder[folder].append(a)

    lines = []
    lines.append("# Owner Identification Backlog")
    lines.append("")
    lines.append("> Phase 0B.2 — Auto-generated by generate_brand_capability_backlog.py")
    lines.append("> **Action required**: Fredrick to review and identify")
    lines.append("")
    lines.append("## Summary")
    lines.append("")
    lines.append(f"- **Total assets**: {len(assets)}")
    lines.append(f"- **Classified to projects**: {len(assets) - len(no_project)}")
    lines.append(f"- **Unclassified / personal brand**: {len(no_project)}")
    lines.append(f"- **Video assets (unreviewed)**: {len(video_all)}")
    lines.append(f"- **OLD archive folders**: {len(old_archive)}")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 1. OLD Archive — Unidentified Assets")
    lines.append("")
    lines.append(f"**Count**: {len(old_archive)} assets")
    lines.append("")
    lines.append("These are in OLD/ subfolders. Content has not been matched to any project.")
    lines.append("Each needs identification: which project does this belong to, or is it personal/archive?")
    lines.append("")

    old_by_folder = defaultdict(list)
    for a in old_archive:
        old_by_folder[a.get("parent_folder", "UNKNOWN")].append(a)

    lines.append("| Folder | Asset Count | Sample Filenames |")
    lines.append("|--------|-------------|-----------------|")
    for folder in sorted(old_by_folder.keys()):
        folder_assets = old_by_folder[folder]
        samples = ", ".join(a["filename"] for a in folder_assets[:3])
        if len(folder_assets) > 3:
            samples += f" (+{len(folder_assets)-3} more)"
        lines.append(f"| {folder} | {len(folder_assets)} | {samples} |")

    lines.append("")
    lines.append("## 2. ALL Root — Unidentified Assets")
    lines.append("")
    lines.append(f"**Count**: {len(all_root)} assets")
    lines.append("")
    lines.append("These sit at the root ALL/ folder with no subfolder context.")
    lines.append("")

    if all_root:
        lines.append("| Sample Filename | Size | Notes |")
        lines.append("|----------------|------|-------|")
        for a in all_root[:15]:
            size_mb = round(int(a.get("size_bytes", 0)) / 1024 / 1024, 1)
            lines.append(f"| {a['filename']} | {size_mb}MB | |")
        if len(all_root) > 15:
            lines.append(f"| ... and {len(all_root)-15} more | | |")

    lines.append("")
    lines.append("## 3. Video Assets — Content Unknown")
    lines.append("")
    lines.append(f"**Count**: {len(video_all)} videos")
    lines.append("")
    lines.append("All 45 videos are in VIDEO/ with generic numeric filenames (1.mp4, 2.mp4, etc.).")
    lines.append("Content cannot be determined without visual review.")
    lines.append("")
    lines.append("**Priority review** (largest files first):")
    lines.append("")
    video_sorted = sorted(video_all, key=lambda x: int(x.get("size_bytes", 0)), reverse=True)
    lines.append("| Filename | Size |")
    lines.append("|----------|------|")
    for v in video_sorted[:10]:
        size_mb = round(int(v.get("size_bytes", 0)) / 1024 / 1024, 1)
        lines.append(f"| {v['filename']} | {size_mb}MB |")
    lines.append(f"| ... and {len(video_sorted)-10} more | |")

    lines.append("")
    lines.append("## 4. Unclassified Folders")
    lines.append("")
    lines.append("Folders not matched to any project group:")
    lines.append("")
    lines.append("| Folder | Asset Count | Sample Filenames |")
    lines.append("|--------|-------------|-----------------|")
    for folder in sorted(no_project_by_folder.keys()):
        if folder in ("OLD", "") or folder.startswith("OLD/"):
            continue
        folder_assets = no_project_by_folder[folder]
        if len(folder_assets) < 2:
            continue
        samples = ", ".join(a["filename"] for a in folder_assets[:3])
        if len(folder_assets) > 3:
            samples += f" (+{len(folder_assets)-3} more)"
        lines.append(f"| {folder} | {len(folder_assets)} | {samples} |")

    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## How to Use This Document")
    lines.append("")
    lines.append("1. **OLD Archive**: Review each folder, identify project or mark as personal/archive")
    lines.append("2. **ALL Root**: Identify which project each asset belongs to")
    lines.append("3. **Videos**: Watch each clip, note content and project association")
    lines.append("4. **Unclassified Folders**: Confirm project identity or reclassify")
    lines.append("")
    lines.append("Return this document with identifications filled in.")
    lines.append("The curation pipeline will be re-run with owner-provided classifications.")

    outpath = os.path.join(OUTPUT, "02Y_OWNER_IDENTIFICATION_BACKLOG.md")
    with open(outpath, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"  Written: {outpath}")


if __name__ == "__main__":
    main()
