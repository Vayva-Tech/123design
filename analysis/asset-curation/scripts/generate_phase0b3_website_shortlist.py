#!/usr/bin/env python3
"""Generate 03M_WEBSITE_ASSET_SHORTLIST.csv — the most important Phase 0B.3 output."""

import csv
import os

BASE = "/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design"
REGISTER = os.path.join(BASE, "docs/phase-0b/phase-0b3/03A_NORMALIZED_MEDIA_ENTITY_REGISTER.csv")
VIDEO = os.path.join(BASE, "docs/phase-0b/phase-0b3/03K_VIDEO_VISUAL_REVIEW.csv")
OUT = os.path.join(BASE, "docs/phase-0b/phase-0b3/03M_WEBSITE_ASSET_SHORTLIST.csv")

SHORTLIST_ROLES = [
    "HERO_IMAGE",
    "CASE_STUDY_LEAD",
    "CASE_STUDY_SUPPORT",
    "PORTFOLIO_CARD",
    "CAPABILITY_DEMO",
    "HOMEPAGE_REEL_PRIMARY",
    "HOMEPAGE_REEL_ALTERNATE",
    "PROCESS_GALLERY",
    "ABOUT_PAGE",
]

def assign_website_role(row):
    readiness = row["display_readiness"]
    entity_type = row["entity_type"]
    entity_id = row["entity_id"]
    pub_status = row["publication_status"]
    media_class = row["media_class"]
    is_stock = row["is_stock_photo"] == "YES"

    if is_stock or pub_status == "DO_NOT_USE":
        return None
    if pub_status == "ARCHIVE":
        return None

    if media_class == "VIDEO":
        return None

    case_study_entities = {"PRJ-LOCAL-0020"}

    if readiness in ("FULL_BLEED_READY", "LARGE_CONTAINED_READY"):
        if entity_id in case_study_entities:
            return "CASE_STUDY_LEAD"
        return "HERO_IMAGE"
    if readiness == "GALLERY_READY":
        if entity_id in case_study_entities:
            return "CASE_STUDY_LEAD"
        return "CASE_STUDY_SUPPORT"
    if readiness == "CARD_READY":
        if entity_id in case_study_entities:
            return "CASE_STUDY_SUPPORT"
        return "PORTFOLIO_CARD"
    if readiness == "PROCESS_READY":
        return "PROCESS_GALLERY"
    if readiness == "THUMBNAIL_ONLY" and entity_type in ("CAPABILITY_COLLECTION",):
        return "CAPABILITY_DEMO"

    return None


def main():
    with open(REGISTER) as f:
        register = list(csv.DictReader(f))

    with open(VIDEO) as f:
        videos = list(csv.DictReader(f))

    shortlist = []

    for row in register:
        role = assign_website_role(row)
        if role is None:
            continue
        shortlist.append({
            "asset_id": row["asset_id"],
            "entity_id": row["entity_id"],
            "entity_display_name": row["entity_display_name"],
            "entity_type": row["entity_type"],
            "priority_tier": row["priority_tier"],
            "website_role": role,
            "display_readiness": row["display_readiness"],
            "publication_status": row["publication_status"],
            "quality_tier": row["quality_tier"],
            "media_class": row["media_class"],
            "width": row["width"],
            "height": row["height"],
            "source_folder": row["source_folder"],
            "filename": row["filename"],
            "sha256": row["sha256"],
            "notes": "",
        })

    for v in videos:
        is_beauty = v.get("content_type_suggestion") == "PRODUCT_BEAUTY"
        width = int(v.get("width", 0) or 0)
        if width >= 1900:
            role = "HOMEPAGE_REEL_PRIMARY"
        elif width >= 1280:
            role = "HOMEPAGE_REEL_ALTERNATE"
        else:
            continue
        shortlist.append({
            "asset_id": v["asset_id"],
            "entity_id": "PRJ-LOCAL-0110",
            "entity_display_name": "Video Archive",
            "entity_type": "CAPABILITY_COLLECTION",
            "priority_tier": "TIER_D",
            "website_role": role,
            "display_readiness": "FULL_BLEED_READY",
            "publication_status": "USE_AFTER_CONTENT_APPROVAL",
            "quality_tier": "TIER_2",
            "media_class": "VIDEO",
            "width": v["width"],
            "height": v["height"],
            "source_folder": "VIDEO",
            "filename": v["filename"],
            "sha256": v["sha256"],
            "notes": f'{v.get("duration_seconds","")}s {v.get("content_type_suggestion","")}',
        })

    fieldnames = [
        "asset_id", "entity_id", "entity_display_name", "entity_type",
        "priority_tier", "website_role", "display_readiness", "publication_status",
        "quality_tier", "media_class", "width", "height",
        "source_folder", "filename", "sha256", "notes",
    ]

    with open(OUT, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in sorted(shortlist, key=lambda r: (
            {"HOMEPAGE_REEL_PRIMARY": 0, "HERO_IMAGE": 1, "CASE_STUDY_LEAD": 2,
             "CASE_STUDY_SUPPORT": 3, "PORTFOLIO_CARD": 4, "HOMEPAGE_REEL_ALTERNATE": 5,
             "PROCESS_GALLERY": 6, "CAPABILITY_DEMO": 7, "ABOUT_PAGE": 8}.get(r["website_role"], 9),
            r["entity_id"], r["asset_id"]
        )):
            writer.writerow(row)

    from collections import Counter
    role_counts = Counter(r["website_role"] for r in shortlist)
    print(f"Total shortlisted: {len(shortlist)}")
    for role, count in sorted(role_counts.items()):
        print(f"  {role}: {count}")

    primary_reel = [r for r in shortlist if r["website_role"] == "HOMEPAGE_REEL_PRIMARY"]
    print(f"\nHomepage reel primary candidates ({len(primary_reel)}):")
    for r in primary_reel[:10]:
        print(f"  {r['asset_id']} | {r['filename']} | {r['width']}x{r['height']} | {r['notes']}")


if __name__ == "__main__":
    main()
