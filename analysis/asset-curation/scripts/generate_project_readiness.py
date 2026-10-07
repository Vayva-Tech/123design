#!/usr/bin/env python3
"""
Phase 0B.2 — Project Media Readiness & Featured Candidates Generator
Reads 02N project register + 02Q curation register → generates:
  02R_PROJECT_MEDIA_READINESS.csv
  02S_FEATURED_PROJECT_MEDIA_CANDIDATES.md
"""

import csv
import os
from collections import defaultdict

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")

PROJECT_REGISTER = os.path.join(PHASE0B, "02N_LOCAL_PROJECT_REGISTER.csv")
CURATION_REGISTER = os.path.join(PHASE0B, "02Q_ASSET_CURATION_REGISTER.csv")

VISUAL_TYPE_DIMENSION = {
    "FINAL_PRODUCT": "FINAL_PRODUCT_MEDIA",
    "CONCEPT_RENDER": "FINAL_PRODUCT_MEDIA",
    "IN_USE": "FINAL_PRODUCT_MEDIA",
    "MARKETING": "FINAL_PRODUCT_MEDIA",
    "PROCESS": "PROCESS_MEDIA",
    "TOOLING": "PROCESS_MEDIA",
    "MANUFACTURING": "MANUFACTURING_MEDIA",
    "ASSEMBLY": "PROCESS_MEDIA",
    "EARLY_PROTOTYPE": "PROTOTYPE_MEDIA",
    "FUNCTIONAL_PROTOTYPE": "PROTOTYPE_MEDIA",
    "APPEARANCE_MODEL": "PROTOTYPE_MEDIA",
    "ENGINEERING": "ENGINEERING_MEDIA",
    "PCB": "ENGINEERING_MEDIA",
    "CAD": "ENGINEERING_MEDIA",
    "TECHNICAL": "ENGINEERING_MEDIA",
    "SKETCH": "ENGINEERING_MEDIA",
    "TESTING": "PROCESS_MEDIA",
    "PACKAGING": "MANUFACTURING_MEDIA",
    "VIDEO": "VIDEO_MEDIA",
    "UNKNOWN": None,
}

DIMENSIONS = [
    "FINAL_PRODUCT_MEDIA", "PROCESS_MEDIA", "ENGINEERING_MEDIA",
    "PROTOTYPE_MEDIA", "MANUFACTURING_MEDIA", "VIDEO_MEDIA",
]


def assess_dimension(count, best_tier):
    """Assess a dimension as STRONG/ADEQUATE/WEAK/NONE based on asset count and quality."""
    if count == 0:
        return "NONE"
    if count >= 5 and best_tier in ("TIER_1", "TIER_2"):
        return "STRONG"
    if count >= 3:
        return "ADEQUATE"
    if count >= 1:
        return "WEAK"
    return "NONE"


def assess_visual_quality(assets_for_project):
    """Assess overall visual quality of project assets."""
    if not assets_for_project:
        return "NONE"
    tiers = [a["quality_tier"] for a in assets_for_project]
    tier_counts = defaultdict(int)
    for t in tiers:
        tier_counts[t] += 1

    if tier_counts.get("TIER_1", 0) >= 3:
        return "STRONG"
    if tier_counts.get("TIER_1", 0) + tier_counts.get("TIER_2", 0) >= 2:
        return "ADEQUATE"
    if tier_counts.get("TIER_3", 0) >= 1:
        return "WEAK"
    return "WEAK"


def assess_identity(evidence_level):
    """Assess identity confidence from evidence level."""
    mapping = {
        "LEVEL_1": "STRONG",
        "LEVEL_2": "ADEQUATE",
        "LEVEL_3": "WEAK",
        "LEVEL_4": "WEAK",
    }
    return mapping.get(evidence_level, "WEAK")


def determine_readiness(dim_assessments, visual_quality, identity):
    """Determine overall case-study readiness."""
    strong_count = sum(1 for d in dim_assessments.values() if d == "STRONG")
    adequate_count = sum(1 for d in dim_assessments.values() if d == "ADEQUATE")
    weak_count = sum(1 for d in dim_assessments.values() if d == "WEAK")
    none_count = sum(1 for d in dim_assessments.values() if d == "NONE")

    dimension_coverage = sum(1 for d in dim_assessments.values() if d != "NONE")

    if identity == "WEAK" and dimension_coverage <= 1:
        return "OWNER_INPUT_REQUIRED"

    if strong_count >= 2 and dimension_coverage >= 3:
        return "CASE_STUDY_READY"
    if strong_count >= 1 and adequate_count >= 1 and dimension_coverage >= 2:
        return "CASE_STUDY_POSSIBLE"
    if adequate_count >= 2 or (strong_count >= 1 and dimension_coverage >= 2):
        return "CASE_STUDY_POSSIBLE"
    if dimension_coverage >= 1 and weak_count + adequate_count + strong_count >= 1:
        return "PORTFOLIO_CARD_ONLY"
    if none_count >= 5:
        return "ARCHIVE_ONLY"
    return "PORTFOLIO_CARD_ONLY"


def determine_featured(curation_class_counts, readiness, case_study_potential, total_curated):
    """Determine featured candidate status."""
    hero_feat = curation_class_counts.get("HERO", 0) + curation_class_counts.get("FEATURE", 0)

    if readiness == "CASE_STUDY_READY" and hero_feat >= 3:
        return "FEATURE_CANDIDATE_A"
    if readiness in ("CASE_STUDY_READY", "CASE_STUDY_POSSIBLE") and total_curated >= 5:
        return "FEATURE_CANDIDATE_A"
    if readiness == "CASE_STUDY_POSSIBLE" and total_curated >= 3:
        return "FEATURE_CANDIDATE_B"
    if readiness == "PORTFOLIO_CARD_ONLY" and total_curated >= 3:
        return "FEATURE_CANDIDATE_B"
    if total_curated >= 1:
        return "SUPPORTING_PROJECT"
    return "ARCHIVE"


def main():
    print("Loading project register...")
    with open(PROJECT_REGISTER, encoding="utf-8") as f:
        projects = {r["local_project_id"]: r for r in csv.DictReader(f)}
    print(f"  {len(projects)} projects loaded")

    print("Loading curation register...")
    with open(CURATION_REGISTER, encoding="utf-8") as f:
        curation = list(csv.DictReader(f))
    print(f"  {len(curation)} assets loaded")

    project_assets = defaultdict(list)
    for asset in curation:
        pid = asset.get("local_project_id", "")
        if pid:
            project_assets[pid].append(asset)

    print("\nAssessing project readiness...")
    readiness_results = []

    for pid, proj in sorted(projects.items()):
        assets = project_assets.get(pid, [])
        curated = [a for a in assets if a["curation_class"] in ("HERO", "FEATURE", "GALLERY", "PROCESS", "TECHNICAL")]

        dim_counts = defaultdict(int)
        dim_best_tier = {}
        for a in curated:
            vtype = a["visual_asset_type"]
            dim = VISUAL_TYPE_DIMENSION.get(vtype)
            if dim:
                dim_counts[dim] += 1
                tier = a["quality_tier"]
                if dim not in dim_best_tier or tier < dim_best_tier[dim]:
                    dim_best_tier[dim] = tier

        has_video = any(a["media_class"] == "VIDEO" for a in assets)
        if has_video:
            dim_counts["VIDEO_MEDIA"] = max(dim_counts.get("VIDEO_MEDIA", 0), 1)

        dim_assessments = {}
        for dim in DIMENSIONS:
            dim_assessments[dim] = assess_dimension(
                dim_counts.get(dim, 0),
                dim_best_tier.get(dim, "TIER_4")
            )

        visual_quality = assess_visual_quality(curated)
        identity = assess_identity(proj.get("evidence_level", "LEVEL_2"))
        readiness = determine_readiness(dim_assessments, visual_quality, identity)

        curation_class_counts = defaultdict(int)
        for a in curated:
            curation_class_counts[a["curation_class"]] += 1

        featured = determine_featured(
            curation_class_counts, readiness,
            proj.get("case_study_potential", ""),
            len(curated)
        )

        row = {
            "local_project_id": pid,
            "project_name": proj.get("project_name", ""),
            "category": proj.get("category", ""),
            "evidence_level": proj.get("evidence_level", ""),
            "total_assets": len(assets),
            "curated_assets": len(curated),
            "hero_count": curation_class_counts.get("HERO", 0),
            "feature_count": curation_class_counts.get("FEATURE", 0),
            "gallery_count": curation_class_counts.get("GALLERY", 0),
            "process_count": curation_class_counts.get("PROCESS", 0),
            "technical_count": curation_class_counts.get("TECHNICAL", 0),
            "final_product_media": dim_assessments["FINAL_PRODUCT_MEDIA"],
            "process_media": dim_assessments["PROCESS_MEDIA"],
            "engineering_media": dim_assessments["ENGINEERING_MEDIA"],
            "prototype_media": dim_assessments["PROTOTYPE_MEDIA"],
            "manufacturing_media": dim_assessments["MANUFACTURING_MEDIA"],
            "video_media": dim_assessments["VIDEO_MEDIA"],
            "visual_quality": visual_quality,
            "identity_confidence": identity,
            "case_study_readiness": readiness,
            "featured_candidate": featured,
        }
        readiness_results.append(row)

    output_r = os.path.join(PHASE0B, "02R_PROJECT_MEDIA_READINESS.csv")
    fieldnames_r = [
        "local_project_id", "project_name", "category", "evidence_level",
        "total_assets", "curated_assets", "hero_count", "feature_count",
        "gallery_count", "process_count", "technical_count",
        "final_product_media", "process_media", "engineering_media",
        "prototype_media", "manufacturing_media", "video_media",
        "visual_quality", "identity_confidence", "case_study_readiness",
        "featured_candidate",
    ]
    with open(output_r, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames_r)
        writer.writeheader()
        writer.writerows(readiness_results)
    print(f"Written: {output_r}")

    print("\n=== Readiness Distribution ===")
    readiness_counts = defaultdict(int)
    for r in readiness_results:
        readiness_counts[r["case_study_readiness"]] += 1
    for k, v in sorted(readiness_counts.items()):
        print(f"  {k}: {v}")

    print("\n=== Featured Candidates ===")
    featured_counts = defaultdict(int)
    for r in readiness_results:
        featured_counts[r["featured_candidate"]] += 1
    for k, v in sorted(featured_counts.items()):
        print(f"  {k}: {v}")

    print("\nGenerating featured candidates markdown...")
    output_s = os.path.join(PHASE0B, "02S_FEATURED_PROJECT_MEDIA_CANDIDATES.md")
    with open(output_s, "w", encoding="utf-8") as f:
        f.write("# Featured Project Media Candidates\n\n")
        f.write("> Phase 0B.2 — Auto-generated by generate_project_readiness.py\n")
        f.write("> Source: 02N_LOCAL_PROJECT_REGISTER.csv + 02Q_ASSET_CURATION_REGISTER.csv\n\n")

        f.write("## Summary\n\n")
        f.write(f"- **Total projects**: {len(readiness_results)}\n")
        f.write(f"- **Case Study Ready**: {readiness_counts.get('CASE_STUDY_READY', 0)}\n")
        f.write(f"- **Case Study Possible**: {readiness_counts.get('CASE_STUDY_POSSIBLE', 0)}\n")
        f.write(f"- **Portfolio Card Only**: {readiness_counts.get('PORTFOLIO_CARD_ONLY', 0)}\n")
        f.write(f"- **Archive Only**: {readiness_counts.get('ARCHIVE_ONLY', 0)}\n")
        f.write(f"- **Owner Input Required**: {readiness_counts.get('OWNER_INPUT_REQUIRED', 0)}\n\n")

        f.write("---\n\n")

        f.write("## FEATURE_CANDIDATE_A — Primary featured projects\n\n")
        f.write("These projects have enough curated material for prominent website placement.\n\n")
        candidates_a = [r for r in readiness_results if r["featured_candidate"] == "FEATURE_CANDIDATE_A"]
        if candidates_a:
            f.write("| Project | Category | Curated | Readiness | Strengths |\n")
            f.write("|---------|----------|---------|-----------|----------|\n")
            for r in candidates_a:
                strengths = []
                for dim in DIMENSIONS:
                    if r[dim.lower() + "_media" if dim != "VIDEO_MEDIA" else "video_media"] in ("STRONG", "ADEQUATE"):
                        strengths.append(dim.replace("_MEDIA", ""))
                f.write(f"| {r['project_name']} | {r['category']} | {r['curated_assets']} | {r['case_study_readiness']} | {', '.join(strengths) if strengths else 'Product photos'} |\n")
        else:
            f.write("_None identified yet._\n")
        f.write("\n")

        f.write("## FEATURE_CANDIDATE_B — Secondary featured projects\n\n")
        f.write("These projects can support featured placement with additional material or owner input.\n\n")
        candidates_b = [r for r in readiness_results if r["featured_candidate"] == "FEATURE_CANDIDATE_B"]
        if candidates_b:
            f.write("| Project | Category | Curated | Readiness | Notes |\n")
            f.write("|---------|----------|---------|-----------|-------|\n")
            for r in candidates_b:
                f.write(f"| {r['project_name']} | {r['category']} | {r['curated_assets']} | {r['case_study_readiness']} | {r['evidence_level']} |\n")
        else:
            f.write("_None identified yet._\n")
        f.write("\n")

        f.write("## SUPPORTING_PROJECT — Gallery and archive projects\n\n")
        f.write("These projects have curated assets suitable for gallery pages or supporting content.\n\n")
        supporting = [r for r in readiness_results if r["featured_candidate"] == "SUPPORTING_PROJECT"]
        if supporting:
            f.write("| Project | Category | Curated | Readiness |\n")
            f.write("|---------|----------|---------|----------|\n")
            for r in supporting:
                f.write(f"| {r['project_name']} | {r['category']} | {r['curated_assets']} | {r['case_study_readiness']} |\n")
        f.write("\n")

        f.write("## OWNER_INPUT_REQUIRED — Needs Fredrick's identification\n\n")
        owner_input = [r for r in readiness_results if r["case_study_readiness"] == "OWNER_INPUT_REQUIRED"]
        if owner_input:
            for r in owner_input:
                f.write(f"- **{r['project_name']}** ({r['category']}) — {r['total_assets']} assets, evidence: {r['evidence_level']}\n")
        else:
            f.write("_None — all projects have sufficient evidence level._\n")
        f.write("\n")

        f.write("---\n\n")
        f.write("## Dimension Assessment Detail\n\n")
        f.write("Each project assessed across 6 media dimensions + visual quality + identity confidence.\n\n")
        f.write("| Project | Final Product | Process | Engineering | Prototype | Manufacturing | Video | Visual Quality | Identity |\n")
        f.write("|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n")
        for r in sorted(readiness_results, key=lambda x: x["local_project_id"]):
            if r["curated_assets"] > 0:
                f.write(f"| {r['project_name']} ")
                for dim in DIMENSIONS:
                    key = dim.lower()
                    if dim == "VIDEO_MEDIA":
                        key = "video_media"
                    else:
                        key = dim.lower()
                    val = r.get(key, "NONE")
                    icon = {"STRONG": "S", "ADEQUATE": "A", "WEAK": "W", "NONE": "—"}.get(val, "?")
                    f.write(f"| {icon} ")
                f.write(f"| {r['visual_quality']} | {r['identity_confidence']} |\n")

    print(f"Written: {output_s}")
    print("\nDone.")


if __name__ == "__main__":
    main()
