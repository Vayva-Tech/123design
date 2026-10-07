#!/usr/bin/env python3
"""
Phase 0B.2 — Asset Curation Register Generator
Reads 02A asset master + 02B duplicate register → generates 02Q_ASSET_CURATION_REGISTER.csv

Assigns each asset:
- local_project_id (from folder-based classification)
- curation_class (HERO, FEATURE, GALLERY, PROCESS, TECHNICAL, ARCHIVE, REJECT_CANDIDATE)
- visual_asset_type (SKETCH, CONCEPT_RENDER, CAD, ENGINEERING, etc.)
- quality_tier (TIER_1 through TIER_4 based on resolution)
- website_placement (hero_section, project_page, gallery, process_page, archive, none)
"""

import csv
import os
import re
from collections import defaultdict

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")

ASSET_MASTER = os.path.join(PHASE0B, "02A_LOCAL_ASSET_MASTER.csv")
DUP_REGISTER = os.path.join(PHASE0B, "02B_EXACT_DUPLICATE_REGISTER.csv")

# ─── Folder → Project Mapping (mirrors identify_projects.py PROJECT_GROUPS) ───
FOLDER_TO_PROJECT = {
    # Architecture
    "ARCHITECTURE/Tamarack Country Club": "PRJ-LOCAL-0001",
    "ARCHITECTURE/Tamarack Pool House": "PRJ-LOCAL-0001",
    "ARCHITECTURE/Misquamicut Beach Club": "PRJ-LOCAL-0002",
    "ARCHITECTURE/Charlotte Office Interior": "PRJ-LOCAL-0003",
    "ARCHITECTURE/Convent of the Sacred Heart": "PRJ-LOCAL-0004",
    "ARCHITECTURE/Hayderabad Phase II Project": "PRJ-LOCAL-0005",
    "ARCHITECTURE/520 Madison Avenue NY": "PRJ-LOCAL-0006",
    # Transportation
    "TRANSPORTATION/Diamond": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Hydra": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Luxury Yacht": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Mega Yacht": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Super Yacht": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Catamaran": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Boat Profile": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Yacht Interior": "PRJ-LOCAL-0010",
    "TRANSPORTATION/Aircraft Interior": "PRJ-LOCAL-0011",
    "MISCELLANEOUS/Dubai International Boat Show": "PRJ-LOCAL-0012",
    # SPEC products
    "SPEC/SPON": "PRJ-LOCAL-0020",
    "SPEC/DBLL": "PRJ-LOCAL-0021",
    "SPEC/RACK": "PRJ-LOCAL-0022",
    "SPEC/VIRT": "PRJ-LOCAL-0023",
    # Consumer Electronics
    "OLD/ADAGIO": "PRJ-LOCAL-0030",
    "HOME GOODS/Adagio": "PRJ-LOCAL-0030",
    "MISCELLANEOUS/iPad Cover": "PRJ-LOCAL-0031",
    "PROTOTYPING/ABS + RTV Tooling": "PRJ-LOCAL-0031",
    # Medical
    "MEDICAL/Aesthetic Treatment Machine": "PRJ-LOCAL-0040",
    "MEDICAL/Blood Pressure Monitor": "PRJ-LOCAL-0040",
    "MEDICAL/Dental Jet": "PRJ-LOCAL-0040",
    "MEDICAL/Defibrillator": "PRJ-LOCAL-0040",
    "MEDICAL/Dynamometer": "PRJ-LOCAL-0040",
    "MEDICAL/Medical Hospital Scale": "PRJ-LOCAL-0040",
    "MEDICAL/Portable Scanner": "PRJ-LOCAL-0040",
    "MEDICAL/Spine Board": "PRJ-LOCAL-0040",
    "MEDICAL/Therapy System": "PRJ-LOCAL-0040",
    "MEDICAL/Thermometer": "PRJ-LOCAL-0040",
    # Military
    "MILITARY/Armored Vehicle Camera": "PRJ-LOCAL-0050",
    "MILITARY/Binoculars": "PRJ-LOCAL-0050",
    "MILITARY/Bomb Squad Remote": "PRJ-LOCAL-0050",
    "MILITARY/Bomb Squad Robot": "PRJ-LOCAL-0050",
    "MILITARY/Emergency Beacon": "PRJ-LOCAL-0050",
    "MILITARY/Flight Box": "PRJ-LOCAL-0050",
    "MILITARY/Gyrocam": "PRJ-LOCAL-0050",
    "MILITARY/Manpack": "PRJ-LOCAL-0050",
    "MILITARY/Military Phone": "PRJ-LOCAL-0050",
    "MILITARY/POD for UAV": "PRJ-LOCAL-0050",
    "MILITARY/Rackmount Enclosure": "PRJ-LOCAL-0050",
    "MILITARY/Rifle Scope": "PRJ-LOCAL-0050",
    "MILITARY/Rugged Computer": "PRJ-LOCAL-0050",
    "MILITARY/Security Wand": "PRJ-LOCAL-0050",
    "MILITARY/Suitcase": "PRJ-LOCAL-0050",
    "MILITARY/Tac-Eye Binocular": "PRJ-LOCAL-0050",
    # Dual-category projects
    "COMMERCIAL/iaMedium": "PRJ-LOCAL-0051",
    "MILITARY/iaMedium": "PRJ-LOCAL-0051",
    "COMMERCIAL/Finger-Print Scanner": "PRJ-LOCAL-0052",
    "MILITARY/Finger-Print Scanner": "PRJ-LOCAL-0052",
    "COMMERCIAL/Flight Planner": "PRJ-LOCAL-0053",
    "MILITARY/Flight Planner": "PRJ-LOCAL-0053",
    "COMMERCIAL/Security Scanner": "PRJ-LOCAL-0054",
    "MILITARY/Security Scanner": "PRJ-LOCAL-0054",
    # Web Design
    "WEB DESIGN/GKV Law Firm": "PRJ-LOCAL-0060",
    "WEB DESIGN/MBA Air": "PRJ-LOCAL-0060",
    "WEB DESIGN/Suna Salon": "PRJ-LOCAL-0060",
    "WEB DESIGN/Tutor My Kid": "PRJ-LOCAL-0060",
    "WEB DESIGN/Your Lucky Eye": "PRJ-LOCAL-0060",
    # Graphic Design
    "GRAPHIC/Cleanser": "PRJ-LOCAL-0070",
    "GRAPHIC/Da Benito": "PRJ-LOCAL-0070",
    "GRAPHIC/Heavenly": "PRJ-LOCAL-0070",
    "GRAPHIC/Jewelry": "PRJ-LOCAL-0070",
    "GRAPHIC/MCL Cafeteria": "PRJ-LOCAL-0070",
    "GRAPHIC/Mastique": "PRJ-LOCAL-0070",
    "GRAPHIC/Medical Advertising": "PRJ-LOCAL-0070",
    "GRAPHIC/Naples Lumber": "PRJ-LOCAL-0070",
    "GRAPHIC/Sioux City Sarsaparilla": "PRJ-LOCAL-0070",
    # Prototyping
    "PROTOTYPING/Acrylic FormingBending": "PRJ-LOCAL-0080",
    "PROTOTYPING/Carbon Fiber Molding": "PRJ-LOCAL-0080",
    "PROTOTYPING/FDM Printing": "PRJ-LOCAL-0080",
    "PROTOTYPING/Multi Level Prototyping": "PRJ-LOCAL-0080",
    "PROTOTYPING/Rubber Coating, Silkscreening": "PRJ-LOCAL-0080",
    "PROTOTYPING/Sheet Metal + RTV Tooling": "PRJ-LOCAL-0080",
    "PROTOTYPING/SLA  SLS": "PRJ-LOCAL-0080",
    # Commercial (remaining)
    "COMMERCIAL/Barcode Scanner": "PRJ-LOCAL-0085",
    "COMMERCIAL/Dictaphone": "PRJ-LOCAL-0085",
    "COMMERCIAL/Hand Dryer": "PRJ-LOCAL-0085",
    "COMMERCIAL/Soup Server": "PRJ-LOCAL-0085",
    "COMMERCIAL/Staircase": "PRJ-LOCAL-0085",
    # Consumer Electronics Portfolio
    "CONSUMER ELECTRONICS/CD Player": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Cam Corder (Portable Camera)": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/DVD Player": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Handheld Massager": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Hard Drive Tower": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Portable Shredder": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Submersible Tablet": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Tablet": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Universal Remote Control": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Video Player": "PRJ-LOCAL-0090",
    "CONSUMER ELECTRONICS/Wireless Tower": "PRJ-LOCAL-0090",
    # Communication
    "COMMUNICATION/Business Phone": "PRJ-LOCAL-0091",
    "COMMUNICATION/GPS Navigator": "PRJ-LOCAL-0091",
    "COMMUNICATION/PDA": "PRJ-LOCAL-0091",
    "COMMUNICATION/Payphone": "PRJ-LOCAL-0091",
    "COMMUNICATION/Walkie Talkie": "PRJ-LOCAL-0091",
    "COMMUNICATION/iPhone Case": "PRJ-LOCAL-0091",
    # Appliances
    "APPLIANCES/Air Conditioning Fan": "PRJ-LOCAL-0092",
    "APPLIANCES/Coffee Maker": "PRJ-LOCAL-0092",
    "APPLIANCES/Refrigerator 1": "PRJ-LOCAL-0092",
    "APPLIANCES/Refrigerator 2": "PRJ-LOCAL-0092",
    "APPLIANCES/Vacuum Cleaner": "PRJ-LOCAL-0092",
    # Home Goods
    "HOME GOODS/Dehumidifier": "PRJ-LOCAL-0093",
    "HOME GOODS/Fan Tower": "PRJ-LOCAL-0093",
    "HOME GOODS/Ionizer": "PRJ-LOCAL-0093",
    "HOME GOODS/Speaker Tower": "PRJ-LOCAL-0093",
    # Outdoor & Sports
    "OUTDOORS/All-in-One Grill": "PRJ-LOCAL-0094",
    "OUTDOORS/Diving Goggle (with Camera)": "PRJ-LOCAL-0094",
    "OUTDOORS/LED Street Light": "PRJ-LOCAL-0094",
    "OUTDOORS/Mosquito Deleto": "PRJ-LOCAL-0094",
    "OUTDOORS/Waterproof Case": "PRJ-LOCAL-0094",
    "SPORT/Dumbbells": "PRJ-LOCAL-0094",
    "SPORT/Golf Caddy": "PRJ-LOCAL-0094",
    "SPORT/Knee Board": "PRJ-LOCAL-0094",
    "SPORT/Pedometer": "PRJ-LOCAL-0094",
    "SPORT/Putter": "PRJ-LOCAL-0094",
    "SPORT/Roller Blades": "PRJ-LOCAL-0094",
    "SPORT/Sports Bottle": "PRJ-LOCAL-0094",
    "SPORT/Tennis Ball Machine": "PRJ-LOCAL-0094",
    # Industrial
    "INDUSTRIAL/Hydraulic Cross-section": "PRJ-LOCAL-0095",
    "INDUSTRIAL/Infrared Window": "PRJ-LOCAL-0095",
    "INDUSTRIAL/Labeler": "PRJ-LOCAL-0095",
    "INDUSTRIAL/Mail Extraction Machine": "PRJ-LOCAL-0095",
    "INDUSTRIAL/Synergix": "PRJ-LOCAL-0095",
    # Kitchenware
    "KITCHENWARE/Kitchen Knife": "PRJ-LOCAL-0096",
    "KITCHENWARE/Paper HolderDispenser": "PRJ-LOCAL-0096",
    "KITCHENWARE/Recycle Bin": "PRJ-LOCAL-0096",
    "KITCHENWARE/Salt and Pepper Shaker": "PRJ-LOCAL-0096",
    "KITCHENWARE/Scale": "PRJ-LOCAL-0096",
    # Toys
    "TOYS GAMES JUVENILE/Massaging Vibrating Teether": "PRJ-LOCAL-0097",
    "TOYS GAMES JUVENILE/Wild Peas": "PRJ-LOCAL-0097",
    # Miscellaneous
    "MISCELLANEOUS/Ladder Rack": "PRJ-LOCAL-0098",
    # OUTSOURCE 60
    "OLD/OUTSOURCE 60": "PRJ-LOCAL-0100",
    # Catch-all
    "OLD": "PRJ-LOCAL-0900",
    "ALL": "PRJ-LOCAL-0901",
}

# Project priority lookup (from 02N definitions)
PROJECT_PRIORITY = {
    "PRJ-LOCAL-0001": "P0", "PRJ-LOCAL-0002": "P0", "PRJ-LOCAL-0020": "P0",
    "PRJ-LOCAL-0021": "P0", "PRJ-LOCAL-0022": "P0", "PRJ-LOCAL-0023": "P0",
    "PRJ-LOCAL-0030": "P0",
}

PROJECT_CASE_STUDY = {
    "PRJ-LOCAL-0001": "HIGH", "PRJ-LOCAL-0002": "MEDIUM_HIGH",
    "PRJ-LOCAL-0010": "MEDIUM_HIGH", "PRJ-LOCAL-0020": "HIGH",
    "PRJ-LOCAL-0021": "MEDIUM_HIGH",
}

# ─── Visual Asset Type Heuristics ───
FILENAME_TYPE_PATTERNS = [
    (r'sketch|draw|pencil|pencil_sketch', 'SKETCH'),
    (r'render|3d|vray|keyshot', 'CONCEPT_RENDER'),
    (r'\bcad\b|\.dwg|\.step|\.iges|\.stp', 'CAD'),
    (r'pcb|circuit|schematic|board', 'PCB'),
    (r'proto|mockup|maquette|foam', 'EARLY_PROTOTYPE'),
    (r'test|validat', 'TESTING'),
    (r'tool|mold|jig|fixture|rtv', 'TOOLING'),
    (r'manufactur|cnc|inject|cast', 'MANUFACTURING'),
    (r'assembl', 'ASSEMBLY'),
    (r'packag|box|retail|unbox', 'PACKAGING'),
    (r'lifestyle|in.use|context|scene|environment', 'IN_USE'),
    (r'market|ad\b|campaign|web\b|banner', 'MARKETING'),
    (r'explod|cross.?sect|cutaway|intern', 'ENGINEERING'),
]

FOLDER_TYPE_DEFAULTS = {
    "ARCHITECTURE": "FINAL_PRODUCT",
    "SPEC": "FINAL_PRODUCT",
    "TRANSPORTATION": "CONCEPT_RENDER",
    "PROTOTYPING": "PROCESS",
    "WEB DESIGN": "MARKETING",
    "GRAPHIC": "MARKETING",
    "INDUSTRIAL": "TECHNICAL",
    "VIDEO": "VIDEO",
}

# Category → default visual type for product photography categories
PRODUCT_PHOTO_CATEGORIES = {
    "MEDICAL", "MILITARY", "COMMERCIAL", "CONSUMER ELECTRONICS",
    "COMMUNICATION", "APPLIANCES", "HOME GOODS", "OUTDOORS", "SPORT",
    "KITCHENWARE", "TOYS GAMES JUVENILE", "MISCELLANEOUS",
}


def classify_project(asset):
    """Classify asset into project using folder matching with path-prefix fallback."""
    cat = asset.get("source_category", "")
    parent = asset.get("parent_folder", "")
    gp = asset.get("grandparent_folder", "")
    rel_path = asset.get("relative_path", "")

    if cat in ("OLD", "ALL"):
        full_folder = f"{cat}/{parent}" if parent != cat else cat
    else:
        full_folder = f"{cat}/{parent}"

    if full_folder in FOLDER_TO_PROJECT:
        return FOLDER_TO_PROJECT[full_folder]

    for folder_key, proj_id in FOLDER_TO_PROJECT.items():
        if rel_path.startswith(folder_key + "/") and len(folder_key) > 5:
            return proj_id

    if cat in FOLDER_TO_PROJECT:
        return FOLDER_TO_PROJECT[cat]

    return None


def infer_visual_type(asset):
    """Infer visual asset type from filename patterns and folder context."""
    filename = asset.get("filename", "").lower()
    stem = asset.get("filename_stem", "").lower()
    cat = asset.get("source_category", "")
    parent = asset.get("parent_folder", "")

    for pattern, vtype in FILENAME_TYPE_PATTERNS:
        if re.search(pattern, stem) or re.search(pattern, filename):
            return vtype

    if cat == "PROTOTYPING":
        if "fdm" in parent.lower() or "sla" in parent.lower() or "sls" in parent.lower():
            return "EARLY_PROTOTYPE"
        if "carbon fiber" in parent.lower():
            return "FUNCTIONAL_PROTOTYPE"
        if "sheet metal" in parent.lower():
            return "TOOLING"
        if "acrylic" in parent.lower():
            return "FUNCTIONAL_PROTOTYPE"
        if "rubber" in parent.lower() or "silkscreen" in parent.lower():
            return "MANUFACTURING"
        if "multi level" in parent.lower():
            return "ASSEMBLY"
        return "PROCESS"

    if cat == "ARCHITECTURE":
        if "elevation" in stem or "drawing" in stem or "plan" in stem:
            return "TECHNICAL"
        return "FINAL_PRODUCT"

    if cat == "TRANSPORTATION":
        return "CONCEPT_RENDER"

    if cat == "WEB DESIGN":
        return "MARKETING"

    if cat == "GRAPHIC":
        return "MARKETING"

    if cat == "INDUSTRIAL":
        if "cross-section" in parent.lower() or "hydraulic" in parent.lower():
            return "ENGINEERING"
        return "TECHNICAL"

    if cat in PRODUCT_PHOTO_CATEGORIES:
        return "FINAL_PRODUCT"

    if cat == "SPEC":
        return "FINAL_PRODUCT"

    if cat == "OLD":
        return "UNKNOWN"

    if cat == "ALL":
        return "UNKNOWN"

    return "UNKNOWN"


def assign_quality_tier(asset):
    """Assign quality tier based on resolution class."""
    res = asset.get("resolution_class", "")
    tier_map = {
        "VERY_HIGH": "TIER_1",
        "HIGH": "TIER_1",
        "MEDIUM": "TIER_2",
        "LOW": "TIER_3",
        "VERY_LOW": "TIER_4",
    }
    return tier_map.get(res, "TIER_4")


def is_stock_photo(asset):
    """Detect stock photos (AdobeStock, Shutterstock, etc.) — not original work."""
    stem = asset.get("filename_stem", "").lower()
    filename = asset.get("filename", "").lower()
    stock_patterns = [
        r'adobestock', r'shutterstock', r'istock', r'getty',
        r'stock_', r'_stock', r'\bistockphoto\b',
    ]
    for pat in stock_patterns:
        if re.search(pat, stem) or re.search(pat, filename):
            return True
    return False


def assign_curation_class(asset, project_id, visual_type, quality_tier):
    """Assign curation class based on curatorial importance (independent of technical quality)."""
    priority = PROJECT_PRIORITY.get(project_id, "P1")
    case_study = PROJECT_CASE_STUDY.get(project_id, "")

    if asset.get("media_class") == "VIDEO":
        return "ARCHIVE"

    if is_stock_photo(asset):
        return "ARCHIVE"

    if not project_id or project_id in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
        return "ARCHIVE"

    if project_id == "PRJ-LOCAL-0100":
        return "ARCHIVE"

    if visual_type in ("PROCESS", "TOOLING", "MANUFACTURING", "ASSEMBLY"):
        return "PROCESS"

    if visual_type in ("ENGINEERING", "PCB", "CAD"):
        return "TECHNICAL"

    if visual_type == "TESTING":
        return "PROCESS"

    if priority == "P0":
        if visual_type in ("FINAL_PRODUCT", "CONCEPT_RENDER", "IN_USE"):
            if quality_tier in ("TIER_1", "TIER_2"):
                return "HERO"
            return "FEATURE"
        if visual_type in ("MARKETING", "SKETCH", "EARLY_PROTOTYPE"):
            return "GALLERY"
        return "GALLERY"

    if case_study in ("HIGH", "MEDIUM_HIGH"):
        if visual_type in ("FINAL_PRODUCT", "CONCEPT_RENDER", "IN_USE"):
            if quality_tier in ("TIER_1", "TIER_2"):
                return "FEATURE"
            return "GALLERY"
        return "GALLERY"

    if visual_type in ("FINAL_PRODUCT", "CONCEPT_RENDER", "IN_USE"):
        if quality_tier in ("TIER_1", "TIER_2"):
            return "FEATURE"
        return "GALLERY"

    if visual_type in ("MARKETING", "SKETCH"):
        return "GALLERY"

    if quality_tier in ("TIER_1", "TIER_2"):
        return "GALLERY"

    return "ARCHIVE"


def assign_website_readiness(quality_tier, curation_class):
    """Combine curatorial importance with technical quality."""
    if curation_class in ("REJECT_CANDIDATE", "ARCHIVE"):
        return "NOT_USABLE"
    if quality_tier in ("TIER_1", "TIER_2"):
        return "READY"
    if quality_tier == "TIER_3":
        return "NEEDS_UPSCALE"
    if quality_tier == "TIER_4":
        return "NEEDS_RESTORE"
    return "NEEDS_UPSCALE"


def assign_website_placement(curation_class, project_id, visual_type):
    """Assign suggested website placement."""
    if curation_class == "HERO":
        return "hero_section"
    if curation_class == "FEATURE":
        return "project_page"
    if curation_class == "GALLERY":
        return "gallery"
    if curation_class == "PROCESS":
        return "process_page"
    if curation_class == "TECHNICAL":
        return "process_page"
    if curation_class == "ARCHIVE":
        return "archive"
    if curation_class == "REJECT_CANDIDATE":
        return "none"
    return "none"


def main():
    print("Loading asset master...")
    with open(ASSET_MASTER, encoding="utf-8") as f:
        assets = list(csv.DictReader(f))
    print(f"  {len(assets)} assets loaded")

    print("Loading duplicate register...")
    dup_groups = {}
    with open(DUP_REGISTER, encoding="utf-8") as f:
        for row in csv.DictReader(f):
            dup_groups[row["duplicate_group"]] = row
    print(f"  {len(dup_groups)} duplicate groups loaded")

    dup_asset_canonical = {}
    for dgid, dg in dup_groups.items():
        asset_ids = [a.strip() for a in dg["asset_ids"].split(";")]
        paths = [p.strip() for p in dg["source_paths"].split(";")]
        assets_with_paths = list(zip(asset_ids, paths))

        def score(path):
            s = 0
            if "/ALL/" not in path:
                s += 100
            cat = path.split("/")[0] if "/" in path else ""
            if cat not in ("OLD", "ALL", "VIDEO"):
                s += 50
            if "OUTSOURCE" not in path:
                s += 20
            fname = os.path.basename(path)
            if fname and not fname.startswith("."):
                s += 5
            return s

        assets_with_paths.sort(key=lambda x: score(x[1]), reverse=True)
        canonical_id = assets_with_paths[0][0]
        for aid, _ in assets_with_paths:
            dup_asset_canonical[aid] = (aid == canonical_id, dgid)

    print("\nClassifying assets...")
    results = []
    stats = defaultdict(int)

    for asset in assets:
        aid = asset["asset_id"]
        project_id = classify_project(asset)
        visual_type = infer_visual_type(asset)
        quality_tier = assign_quality_tier(asset)
        curation_class = assign_curation_class(asset, project_id, visual_type, quality_tier)
        website_placement = assign_website_placement(curation_class, project_id, visual_type)
        website_readiness = assign_website_readiness(quality_tier, curation_class)

        is_dup = aid in dup_asset_canonical
        if is_dup:
            is_canonical, dgid = dup_asset_canonical[aid]
        else:
            is_canonical = True
            dgid = ""

        stock = is_stock_photo(asset)

        row = {
            "asset_id": aid,
            "local_project_id": project_id or "",
            "curation_class": curation_class,
            "visual_asset_type": visual_type,
            "quality_tier": quality_tier,
            "website_readiness": website_readiness,
            "website_placement": website_placement,
            "is_canonical_copy": "YES" if is_canonical else "NO",
            "is_stock_photo": "YES" if stock else "NO",
            "duplicate_group": dgid,
            "source_category": asset.get("source_category", ""),
            "source_folder": asset.get("parent_folder", ""),
            "filename": asset.get("filename", ""),
            "media_class": asset.get("media_class", ""),
            "resolution_class": asset.get("resolution_class", ""),
            "width": asset.get("width", ""),
            "height": asset.get("height", ""),
            "size_bytes": asset.get("size_bytes", ""),
            "notes": "",
        }

        if stock:
            row["notes"] = "Stock photo — not original work"
        elif not project_id:
            row["notes"] = "No project assignment — VIDEO category or unclassified"
        elif project_id in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
            row["notes"] = "Archive catch-all — needs manual review"

        results.append(row)
        stats[curation_class] += 1

    print(f"  Total: {len(results)}")
    print(f"  With project: {sum(1 for r in results if r['local_project_id'])}")
    print(f"  Without project: {sum(1 for r in results if not r['local_project_id'])}")

    print("\nCuration class distribution:")
    for cls in ["HERO", "FEATURE", "GALLERY", "PROCESS", "TECHNICAL", "ARCHIVE", "REJECT_CANDIDATE"]:
        print(f"  {cls}: {stats[cls]}")

    stock_count = sum(1 for r in results if r["is_stock_photo"] == "YES")
    print(f"\nStock photos detected: {stock_count}")

    print("\nVisual type distribution:")
    vtype_counts = defaultdict(int)
    for r in results:
        vtype_counts[r["visual_asset_type"]] += 1
    for vt, cnt in sorted(vtype_counts.items(), key=lambda x: -x[1]):
        print(f"  {vt}: {cnt}")

    output_path = os.path.join(PHASE0B, "02Q_ASSET_CURATION_REGISTER.csv")
    fieldnames = [
        "asset_id", "local_project_id", "curation_class", "visual_asset_type",
        "quality_tier", "website_readiness", "website_placement",
        "is_canonical_copy", "is_stock_photo",
        "duplicate_group", "source_category", "source_folder", "filename",
        "media_class", "resolution_class", "width", "height", "size_bytes", "notes",
    ]
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"\nWritten: {output_path}")
    print(f"  {len(results)} rows")


if __name__ == "__main__":
    main()
