#!/usr/bin/env python3
"""
Phase 0B.3 — Phase 0A Alias Investigation
Searches local archive filenames/folders for all 30 Phase 0A portfolio source names.
Outputs 03I_PHASE0A_ALIAS_INVESTIGATION.csv with relationship_state for each.
"""

import csv
import os
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# Handle both 123Design and parent repo structures
if not os.path.exists(os.path.join(REPO_ROOT, "docs")):
    REPO_ROOT = os.path.dirname(REPO_ROOT)

DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")
PHASE0B3 = os.path.join(PHASE0B, "phase-0b3")
ASSET_MASTER = os.path.join(PHASE0B, "02A_LOCAL_ASSET_MASTER.csv")

# All 30 Phase 0A source names from 01D_PORTFOLIO_SOURCE_REGISTER
PHASE0A_NAMES = [
    ("Shopping Cart", "shopping cart"),
    ("Multiple", "multiple"),
    ("Regain Medical", "regain medical"),
    ("Vehicular DVR Camera", "vehicular dvr camera"),
    ("Koffti", "koffti"),
    ("Consumer", "consumer"),
    ("RegalPress.AI", "regalpress"),
    ("RegalBrand.AI", "regalbrand"),
    ("Promo", "promo"),
    ("Medical Multiple", "medical multiple"),
    ("BlackRock.AI", "blackrock"),
    ("HoverBoard", "hoverboard"),
    ("EVtols", "evtols"),
    ("Fishing Lures", "fishing lure"),
    ("Oral4 Dental Kit", "oral4"),
    ("Bucket", "bucket"),
    ("Halevai Electric Boat", "halevai"),
    ("Villa Subdivision", "villa subdivision"),
    ("Star Guard", "star guard"),
    ("Fishing Lure", "fishing lure"),
    ("Timeset App", "timeset"),
    ("Marker Locker", "marker locker"),
    ("Pain chronic", "pain chronic"),
    ("FairBridge Presentation", "fairbridge"),
    ("PreLynx Portal", "prelynx"),
    ("Remittance Processor", "remittance"),
    ("Falcon+ Prep Reducing Scanners", "falcon"),
    ("Recovery System", "recovery system"),
    ("MG-NINE", "mg-nine"),
    ("MG-NINE (armored PTZ)", "mg-nine"),
]

# Known Phase 0A URLs for cross-reference
KNOWN_URLS = {
    "Oral4 Dental Kit": "/portfolio/home-goods/oral4/",
    "PreLynx Portal": "/prelynx-portal/",
    "MG-NINE": "/mg-nine-vehicle-dvr-camera/",
}


def search_archive(assets, search_terms):
    """Search all asset filenames, parent folders, and paths for search terms."""
    matches = []
    for asset in assets:
        filename = asset.get("filename", "").lower()
        filename_stem = asset.get("filename_stem", "").lower()
        parent = asset.get("parent_folder", "").lower()
        cat = asset.get("source_category", "").lower()
        rel_path = asset.get("relative_path", "").lower()

        searchable = f"{filename} {filename_stem} {parent} {cat} {rel_path}"

        for term in search_terms:
            if term in searchable:
                matches.append({
                    "asset_id": asset["asset_id"],
                    "filename": asset["filename"],
                    "source_category": asset["source_category"],
                    "parent_folder": asset["parent_folder"],
                    "relative_path": asset["relative_path"],
                    "matched_term": term,
                })
                break
    return matches


def classify_relationship(matches, search_name, search_terms):
    """Classify the relationship_state based on match quality."""
    if not matches:
        return "NO_LOCAL_EVIDENCE", [], ""

    categories = set(m["source_category"] for m in matches)
    parents = set(m["parent_folder"].lower() for m in matches)
    filenames = [m["filename"].lower() for m in matches]

    # Check for exact folder name match
    for term in search_terms:
        for parent in parents:
            if term == parent:
                return "EXACT_LOCAL_MATCH", matches, f"Folder '{parent}' matches"

    # Check for strong filename match
    for term in search_terms:
        for fn in filenames:
            if term.replace(" ", "") in fn.replace(" ", "").replace("_", "").replace("-", ""):
                return "STRONG_LOCAL_CANDIDATE", matches, f"Filename contains '{term}'"

    # Partial match in path
    if len(matches) <= 3:
        return "POSSIBLE_LOCAL_CANDIDATE", matches, f"{len(matches)} partial matches"

    return "POSSIBLE_LOCAL_CANDIDATE", matches, f"{len(matches)} matches across {categories}"


def main():
    print("Loading asset master...")
    with open(ASSET_MASTER, encoding="utf-8") as f:
        assets = list(csv.DictReader(f))
    print(f"  {len(assets)} assets loaded")

    results = []
    for source_name, primary_term in PHASE0A_NAMES:
        # Build search terms: primary + variations
        search_terms = [primary_term]
        if " " in primary_term:
            search_terms.append(primary_term.replace(" ", ""))
            search_terms.append(primary_term.replace(" ", "_"))
            search_terms.append(primary_term.replace(" ", "-"))

        # Add specific variations
        if "ai" in primary_term:
            search_terms.append(primary_term.replace(".ai", ""))
        if "+" in source_name.lower():
            search_terms.append(source_name.lower().replace("+", "").strip())

        matches = search_archive(assets, search_terms)
        relationship, match_details, notes = classify_relationship(matches, source_name, search_terms)

        known_url = KNOWN_URLS.get(source_name, "")

        row = {
            "phase0a_source_name": source_name,
            "search_terms_used": "|".join(search_terms[:3]),
            "relationship_state": relationship,
            "match_count": len(matches),
            "matched_categories": ";".join(sorted(set(m["source_category"] for m in matches))) if matches else "",
            "matched_folders": ";".join(sorted(set(m["parent_folder"] for m in matches))) if matches else "",
            "sample_matched_filenames": ";".join(m["filename"] for m in matches[:3]) if matches else "",
            "known_phase0a_url": known_url,
            "notes": notes,
        }
        results.append(row)

    outfile = os.path.join(PHASE0B3, "03I_PHASE0A_ALIAS_INVESTIGATION.csv")
    fieldnames = list(results[0].keys())
    with open(outfile, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"\nWritten: {outfile} ({len(results)} rows)")

    # Summary
    from collections import Counter
    states = Counter(r["relationship_state"] for r in results)
    print(f"\nRelationship state distribution:")
    for state, count in states.most_common():
        print(f"  {state}: {count}")

    print(f"\nDetailed results:")
    for r in results:
        if r["relationship_state"] != "NO_LOCAL_EVIDENCE":
            print(f"  {r['phase0a_source_name']:35s} | {r['relationship_state']:25s} | {r['match_count']:3d} matches | {r['notes']}")


if __name__ == "__main__":
    main()
