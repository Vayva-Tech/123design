#!/usr/bin/env python3
"""
Phase 0B.2 — Migration Master Map
Reads 02Q curation register → generates 02V_MIGRATION_MASTER_MAP.csv
Maps curated assets to clean migration paths with standardized filenames.
"""

import csv
import os
import re
from collections import defaultdict

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")
OUTPUT = os.path.join(DOCS, "phase-0b")

CURATION_REGISTER = os.path.join(PHASE0B, "02Q_ASSET_CURATION_REGISTER.csv")
PROJECT_REGISTER = os.path.join(PHASE0B, "02N_LOCAL_PROJECT_REGISTER.csv")

CURATED_CLASSES = {"HERO", "FEATURE", "GALLERY", "PROCESS", "TECHNICAL"}


def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = text.strip('-')
    return text[:40] if text else "unnamed"


def build_migration_filename(asset, project_slug, seq_counters):
    visual_type = asset.get("visual_asset_type", "UNKNOWN")
    type_slug = slugify(visual_type.replace("_", " "))
    if not type_slug:
        type_slug = "asset"

    quality = asset.get("quality_tier", "")
    asset_id = asset.get("asset_id", "")

    key = (project_slug, type_slug)
    seq_counters[key] = seq_counters.get(key, 0) + 1
    seq = seq_counters[key]

    ext = os.path.splitext(asset.get("filename", ""))[1].lower()
    if not ext:
        ext = ".jpg"

    filename = f"{project_slug}_{type_slug}_{seq:03d}{ext}"
    return filename


def main():
    print("Loading project register...")
    projects = {}
    with open(PROJECT_REGISTER) as f:
        for row in csv.DictReader(f):
            projects[row["local_project_id"]] = row

    print(f"  {len(projects)} projects loaded")

    print("Loading curation register...")
    with open(CURATION_REGISTER) as f:
        assets = list(csv.DictReader(f))
    print(f"  {len(assets)} assets loaded")

    curated = [a for a in assets if a.get("curation_class") in CURATED_CLASSES]
    print(f"  {len(curated)} curated assets to migrate")

    print("\nBuilding migration map...")
    seq_counters = {}
    results = []

    project_groups = defaultdict(list)
    for a in curated:
        pid = a.get("local_project_id", "")
        if pid:
            project_groups[pid].append(a)

    for pid in sorted(project_groups.keys()):
        proj = projects.get(pid, {})
        project_name = proj.get("project_name", "Unknown Project")
        project_slug = slugify(f"{pid}-{project_name}")

        group_assets = project_groups[pid]
        group_assets.sort(key=lambda x: (x.get("curation_class", ""), x.get("visual_asset_type", "")))

        for asset in group_assets:
            migration_filename = build_migration_filename(asset, project_slug, seq_counters)
            migration_path = f"media-migration/{project_slug}/{migration_filename}"

            is_dup = asset.get("is_canonical_copy", "YES") == "NO"
            dup_note = "DUPLICATE_SKIP" if is_dup else ""

            row = {
                "asset_id": asset.get("asset_id", ""),
                "source_folder": asset.get("source_folder", ""),
                "source_filename": asset.get("filename", ""),
                "curation_class": asset.get("curation_class", ""),
                "visual_asset_type": asset.get("visual_asset_type", ""),
                "quality_tier": asset.get("quality_tier", ""),
                "website_readiness": asset.get("website_readiness", ""),
                "local_project_id": pid,
                "project_name": project_name,
                "migration_path": migration_path,
                "migration_filename": migration_filename,
                "is_canonical_copy": asset.get("is_canonical_copy", ""),
                "duplicate_action": dup_note,
                "priority": "P0" if asset.get("curation_class") in ("HERO", "FEATURE") else "P1",
            }
            results.append(row)

    fieldnames = [
        "asset_id", "source_folder", "source_filename",
        "curation_class", "visual_asset_type", "quality_tier", "website_readiness",
        "local_project_id", "project_name",
        "migration_path", "migration_filename",
        "is_canonical_copy", "duplicate_action", "priority",
    ]

    outpath = os.path.join(OUTPUT, "02V_MIGRATION_MASTER_MAP.csv")
    with open(outpath, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"\nWritten: {outpath}")

    print(f"\n=== Migration Summary ===")
    print(f"Total curated assets: {len(curated)}")
    print(f"Migration entries: {len(results)}")

    class_counts = defaultdict(int)
    for r in results:
        class_counts[r["curation_class"]] += 1
    print(f"\nBy curation class:")
    for c in ["HERO", "FEATURE", "GALLERY", "PROCESS", "TECHNICAL"]:
        print(f"  {c}: {class_counts.get(c, 0)}")

    project_count = len(set(r["local_project_id"] for r in results))
    print(f"\nProjects with curated assets: {project_count}")

    dup_skip = sum(1 for r in results if r["duplicate_action"] == "DUPLICATE_SKIP")
    print(f"Duplicate non-canonical (skip): {dup_skip}")

    p0 = sum(1 for r in results if r["priority"] == "P0")
    p1 = sum(1 for r in results if r["priority"] == "P1")
    print(f"\nPriority: P0={p0}, P1={p1}")


if __name__ == "__main__":
    main()
