#!/usr/bin/env python3
"""
Phase 0B.2 — Project Identification & Grouping Script
Reads 02A asset master + 02B duplicate register → generates 02M, 02N, 02O, 02P
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
DUP_REGISTER = os.path.join(PHASE0B, "02B_EXACT_DUPLICATE_REGISTER.csv")
FOLDER_CANDIDATES = os.path.join(PHASE0B, "02G_PROJECT_CANDIDATE_FOLDERS.csv")

# ─── Project Grouping Definitions ───
# Each group: (local_project_id, project_name, display_name, category, evidence_level,
#              source_folders_list, notes, phase0a_match)
# evidence_level: LEVEL_1 (explicit name), LEVEL_2 (consistent signals), LEVEL_3 (visual), LEVEL_4 (resemblance only)

PROJECT_GROUPS = [
    # ═══ ARCHITECTURE ═══
    ("PRJ-LOCAL-0001", "Tamarack Country Club", "Tamarack Country Club", "ARCHITECTURE", "LEVEL_1",
     ["ARCHITECTURE/Tamarack Country Club", "ARCHITECTURE/Tamarack Pool House"],
     "8+2 assets. Exteriors, interiors, details, elevation drawings. Strongest architecture set.", ""),

    ("PRJ-LOCAL-0002", "Misquamicut Beach Club", "Misquamicut Beach Club", "ARCHITECTURE", "LEVEL_1",
     ["ARCHITECTURE/Misquamicut Beach Club"],
     "4 assets. Coastal architecture, wood-and-white palette.", ""),

    ("PRJ-LOCAL-0003", "Charlotte Office Interior", "Charlotte Office Interior", "ARCHITECTURE", "LEVEL_1",
     ["ARCHITECTURE/Charlotte Office Interior"],
     "3 assets. Office interior photography.", ""),

    ("PRJ-LOCAL-0004", "Convent of the Sacred Heart", "Convent of the Sacred Heart", "ARCHITECTURE", "LEVEL_1",
     ["ARCHITECTURE/Convent of the Sacred Heart"],
     "3 assets. Architectural photography.", ""),

    ("PRJ-LOCAL-0005", "Hayderabad Phase II Project", "Hayderabad Phase II Project", "ARCHITECTURE", "LEVEL_1",
     ["ARCHITECTURE/Hayderabad Phase II Project"],
     "3 assets. Architectural photography.", ""),

    ("PRJ-LOCAL-0006", "520 Madison Avenue NY", "520 Madison Avenue NY", "ARCHITECTURE", "LEVEL_1",
     ["ARCHITECTURE/520 Madison Avenue NY"],
     "1 asset. Single architectural photo.", ""),

    # ═══ MARINE / TRANSPORTATION ═══
    ("PRJ-LOCAL-0010", "Yacht Design Portfolio", "Yacht Design Portfolio", "TRANSPORTATION", "LEVEL_2",
     ["TRANSPORTATION/Diamond", "TRANSPORTATION/Hydra", "TRANSPORTATION/Luxury Yacht",
      "TRANSPORTATION/Mega Yacht", "TRANSPORTATION/Super Yacht", "TRANSPORTATION/Catamaran",
      "TRANSPORTATION/Boat Profile", "TRANSPORTATION/Yacht Interior"],
     "Multiple yacht/marine vessels. Consistent naval architecture rendering style. Grouped as portfolio.", ""),

    ("PRJ-LOCAL-0011", "Aircraft Interior", "Aircraft Interior", "TRANSPORTATION", "LEVEL_1",
     ["TRANSPORTATION/Aircraft Interior"],
     "2 assets. Aircraft cabin interior design.", ""),

    ("PRJ-LOCAL-0012", "Dubai International Boat Show", "Dubai International Boat Show", "TRANSPORTATION", "LEVEL_1",
     ["MISCELLANEOUS/Dubai International Boat Show"],
     "3 assets. Boat show photography/composites.", ""),

    # ═══ SPEC PRODUCTS (branded/identified) ═══
    ("PRJ-LOCAL-0020", "SPON - SPOONY Smart Spoon", "SPON - SPOONY Smart Spoon", "PRODUCT_DESIGN", "LEVEL_1",
     ["SPEC/SPON"],
     "15 assets. 'SPOONY' branding on handle. Multiple color variants, USB charging, food photography.", ""),

    ("PRJ-LOCAL-0021", "DBLL - Adjustable Dumbbell", "DBLL - Adjustable Dumbbell", "PRODUCT_DESIGN", "LEVEL_1",
     ["SPEC/DBLL"],
     "13 assets (incl. some AdobeStock). Product renders + app mockup. Stock photos need separation.", ""),

    ("PRJ-LOCAL-0022", "RACK - Rackmount System", "RACK - Rackmount System", "PRODUCT_DESIGN", "LEVEL_1",
     ["SPEC/RACK"],
     "7 assets. Rackmount enclosure product documentation.", ""),

    ("PRJ-LOCAL-0023", "VIRT", "VIRT", "PRODUCT_DESIGN", "LEVEL_1",
     ["SPEC/VIRT"],
     "1 asset. Single large image.", ""),

    # ═══ CRESTRON ADAGIO ═══
    ("PRJ-LOCAL-0030", "Crestron Adagio", "Crestron Adagio", "CONSUMER_ELECTRONICS", "LEVEL_1",
     ["OLD/ADAGIO", "HOME GOODS/Adagio"],
     "5+2=7 assets. High-end audio equipment. Clear 'ADAGIO' branding. Cross-folder project.", ""),

    # ═══ iPad COVER / IPM ═══
    ("PRJ-LOCAL-0031", "iPad Cover (IPM)", "iPad Cover (IPM)", "CONSUMER_ELECTRONICS", "LEVEL_2",
     ["MISCELLANEOUS/iPad Cover", "PROTOTYPING/ABS + RTV Tooling"],
     "3+3=6 assets. Lifestyle photography in MISCELLANEOUS + prototype docs in PROTOTYPING. IPM branding.", ""),

    # ═══ MEDICAL DEVICES ═══
    ("PRJ-LOCAL-0040", "Medical Device Portfolio", "Medical Device Portfolio", "MEDICAL", "LEVEL_2",
     ["MEDICAL/Aesthetic Treatment Machine", "MEDICAL/Blood Pressure Monitor", "MEDICAL/Dental Jet",
      "MEDICAL/Defibrillator", "MEDICAL/Dynamometer", "MEDICAL/Medical Hospital Scale",
      "MEDICAL/Portable Scanner", "MEDICAL/Spine Board", "MEDICAL/Therapy System",
      "MEDICAL/Thermometer"],
     "10 subfolders, ~20 assets. Diverse medical products. Consistent product photography style.", ""),

    # ═══ MILITARY / DEFENSE ═══
    ("PRJ-LOCAL-0050", "Military/Defense Portfolio", "Military/Defense Portfolio", "MILITARY", "LEVEL_2",
     ["MILITARY/Armored Vehicle Camera", "MILITARY/Binoculars", "MILITARY/Bomb Squad Remote",
      "MILITARY/Bomb Squad Robot", "MILITARY/Emergency Beacon", "MILITARY/Flight Box",
      "MILITARY/Gyrocam", "MILITARY/Manpack", "MILITARY/Military Phone", "MILITARY/POD for UAV",
      "MILITARY/Rackmount Enclosure", "MILITARY/Rifle Scope", "MILITARY/Rugged Computer",
      "MILITARY/Security Wand", "MILITARY/Suitcase", "MILITARY/Tac-Eye Binocular"],
     "16 subfolders, ~32 assets. Diverse defense products. Consistent industrial design style.", ""),

    ("PRJ-LOCAL-0051", "iaMedium (Dual Category)", "iaMedium", "MILITARY", "LEVEL_1",
     ["COMMERCIAL/iaMedium", "MILITARY/iaMedium"],
     "3+2=5 assets. Appears in both COMMERCIAL and MILITARY. Cross-category project.", ""),

    # ═══ SHARED FOLDERS (appear in multiple categories) ═══
    ("PRJ-LOCAL-0052", "Finger-Print Scanner (Dual)", "Finger-Print Scanner", "COMMERCIAL", "LEVEL_1",
     ["COMMERCIAL/Finger-Print Scanner", "MILITARY/Finger-Print Scanner"],
     "Same 2 assets in both COMMERCIAL and MILITARY. Exact duplicate across categories.", ""),

    ("PRJ-LOCAL-0053", "Flight Planner (Dual)", "Flight Planner", "MILITARY", "LEVEL_1",
     ["COMMERCIAL/Flight Planner", "MILITARY/Flight Planner"],
     "Same 2 assets in both COMMERCIAL and MILITARY. Exact duplicate across categories.", ""),

    ("PRJ-LOCAL-0054", "Security Scanner (Dual)", "Security Scanner", "COMMERCIAL", "LEVEL_1",
     ["COMMERCIAL/Security Scanner", "MILITARY/Security Scanner"],
     "Same 2 assets in both COMMERCIAL and MILITARY. Exact duplicate across categories.", ""),

    # ═══ WEB DESIGN ═══
    ("PRJ-LOCAL-0060", "Web Design Portfolio", "Web Design Portfolio", "WEB_DESIGN", "LEVEL_2",
     ["WEB DESIGN/GKV Law Firm", "WEB DESIGN/MBA Air", "WEB DESIGN/Suna Salon",
      "WEB DESIGN/Tutor My Kid", "WEB DESIGN/Your Lucky Eye"],
     "5 projects, ~10 assets. Website screenshots and mockups.", ""),

    # ═══ GRAPHIC DESIGN ═══
    ("PRJ-LOCAL-0070", "Graphic Design Portfolio", "Graphic Design Portfolio", "GRAPHIC", "LEVEL_2",
     ["GRAPHIC/Cleanser", "GRAPHIC/Da Benito", "GRAPHIC/Heavenly", "GRAPHIC/Jewelry",
      "GRAPHIC/MCL Cafeteria", "GRAPHIC/Mastique", "GRAPHIC/Medical Advertising",
      "GRAPHIC/Naples Lumber", "GRAPHIC/Sioux City Sarsaparilla"],
     "9 projects, ~17 assets. Branding, packaging, print design.", ""),

    # ═══ PROTOTYPING CAPABILITIES ═══
    ("PRJ-LOCAL-0080", "Prototyping Capabilities", "Prototyping Capabilities", "PROTOTYPING", "LEVEL_2",
     ["PROTOTYPING/Acrylic FormingBending", "PROTOTYPING/Carbon Fiber Molding",
      "PROTOTYPING/FDM Printing", "PROTOTYPING/Multi Level Prototyping",
      "PROTOTYPING/Rubber Coating, Silkscreening", "PROTOTYPING/Sheet Metal + RTV Tooling",
      "PROTOTYPING/SLA  SLS"],
     "7 process folders, ~18 assets. Manufacturing/process documentation.", ""),

    # ═══ COMMERCIAL PRODUCTS (remaining) ═══
    ("PRJ-LOCAL-0085", "Commercial Products Portfolio", "Commercial Products Portfolio", "COMMERCIAL", "LEVEL_2",
     ["COMMERCIAL/Barcode Scanner", "COMMERCIAL/Dictaphone", "COMMERCIAL/Hand Dryer",
      "COMMERCIAL/Soup Server", "COMMERCIAL/Staircase"],
     "5 remaining COMMERCIAL folders, ~10 assets. Diverse commercial products.", ""),

    # ═══ CONSUMER ELECTRONICS ═══
    ("PRJ-LOCAL-0090", "Consumer Electronics Portfolio", "Consumer Electronics Portfolio", "CONSUMER_ELECTRONICS", "LEVEL_2",
     ["CONSUMER ELECTRONICS/CD Player", "CONSUMER ELECTRONICS/Cam Corder (Portable Camera)",
      "CONSUMER ELECTRONICS/DVD Player", "CONSUMER ELECTRONICS/Handheld Massager",
      "CONSUMER ELECTRONICS/Hard Drive Tower", "CONSUMER ELECTRONICS/Portable Shredder",
      "CONSUMER ELECTRONICS/Submersible Tablet", "CONSUMER ELECTRONICS/Tablet",
      "CONSUMER ELECTRONICS/Universal Remote Control", "CONSUMER ELECTRONICS/Video Player",
      "CONSUMER ELECTRONICS/Wireless Tower"],
     "11 subfolders, ~22 assets. Diverse consumer electronics.", ""),

    # ═══ COMMUNICATION DEVICES ═══
    ("PRJ-LOCAL-0091", "Communication Devices Portfolio", "Communication Devices Portfolio", "COMMUNICATION", "LEVEL_2",
     ["COMMUNICATION/Business Phone", "COMMUNICATION/GPS Navigator", "COMMUNICATION/PDA",
      "COMMUNICATION/Payphone", "COMMUNICATION/Walkie Talkie", "COMMUNICATION/iPhone Case"],
     "6 subfolders, ~12 assets. Communication products.", ""),

    # ═══ APPLIANCES ═══
    ("PRJ-LOCAL-0092", "Appliances Portfolio", "Appliances Portfolio", "APPLIANCES", "LEVEL_2",
     ["APPLIANCES/Air Conditioning Fan", "APPLIANCES/Coffee Maker",
      "APPLIANCES/Refrigerator 1", "APPLIANCES/Refrigerator 2", "APPLIANCES/Vacuum Cleaner"],
     "5 subfolders, ~11 assets. Home/commercial appliances.", ""),

    # ═══ HOME GOODS ═══
    ("PRJ-LOCAL-0093", "Home Goods Portfolio", "Home Goods Portfolio", "HOME_GOODS", "LEVEL_2",
     ["HOME GOODS/Dehumidifier", "HOME GOODS/Fan Tower", "HOME GOODS/Ionizer",
      "HOME GOODS/Speaker Tower"],
     "4 subfolders, ~7 assets. Home products (excluding Adagio which is separate).", ""),

    # ═══ OUTDOOR / SPORTS ═══
    ("PRJ-LOCAL-0094", "Outdoor & Sports Portfolio", "Outdoor & Sports Portfolio", "OUTDOORS_SPORTS", "LEVEL_2",
     ["OUTDOORS/All-in-One Grill", "OUTDOORS/Diving Goggle (with Camera)",
      "OUTDOORS/LED Street Light", "OUTDOORS/Mosquito Deleto", "OUTDOORS/Waterproof Case",
      "SPORT/Dumbbells", "SPORT/Golf Caddy", "SPORT/Knee Board",
      "SPORT/Pedometer", "SPORT/Putter", "SPORT/Roller Blades",
      "SPORT/Sports Bottle", "SPORT/Tennis Ball Machine"],
     "13 subfolders, ~26 assets. Outdoor and sports products.", ""),

    # ═══ INDUSTRIAL ═══
    ("PRJ-LOCAL-0095", "Industrial Equipment Portfolio", "Industrial Equipment Portfolio", "INDUSTRIAL", "LEVEL_2",
     ["INDUSTRIAL/Hydraulic Cross-section", "INDUSTRIAL/Infrared Window",
      "INDUSTRIAL/Labeler", "INDUSTRIAL/Mail Extraction Machine", "INDUSTRIAL/Synergix"],
     "5 subfolders, ~10 assets. Industrial equipment.", ""),

    # ═══ KITCHENWARE ═══
    ("PRJ-LOCAL-0096", "Kitchenware Portfolio", "Kitchenware Portfolio", "KITCHENWARE", "LEVEL_2",
     ["KITCHENWARE/Kitchen Knife", "KITCHENWARE/Paper HolderDispenser",
      "KITCHENWARE/Recycle Bin", "KITCHENWARE/Salt and Pepper Shaker", "KITCHENWARE/Scale"],
     "5 subfolders, ~10 assets. Kitchen products.", ""),

    # ═══ TOYS ═══
    ("PRJ-LOCAL-0097", "Toys & Juvenile Portfolio", "Toys & Juvenile Portfolio", "TOYS_JUVENILE", "LEVEL_2",
     ["TOYS GAMES JUVENILE/Massaging Vibrating Teether", "TOYS GAMES JUVENILE/Wild Peas"],
     "2 subfolders, ~3 assets. Children's products.", ""),

    # ═══ MISCELLANEOUS ═══
    ("PRJ-LOCAL-0098", "Ladder Rack", "Ladder Rack", "MISCELLANEOUS", "LEVEL_1",
     ["MISCELLANEOUS/Ladder Rack"],
     "2 assets. Ladder rack product.", ""),

    # ═══ OUTSOURCE 60 ═══
    ("PRJ-LOCAL-0100", "OUTSOURCE 60", "OUTSOURCE 60", "MULTI_CLIENT", "LEVEL_1",
     ["OLD/OUTSOURCE 60"],
     "80 assets. Multi-client outsourced contract work. Project codes: BLD, BRH, CAT, etc. Needs per-project decomposition.", ""),

    # ═══ OLD / UNCLASSIFIED REMAINDER ═══
    ("PRJ-LOCAL-0900", "OLD Archive (Unclassified)", "OLD Archive (Unclassified)", "ARCHIVE", "LEVEL_4",
     ["OLD"],
     "Remaining OLD assets not assigned to ADAGIO or OUTSOURCE 60. Heterogeneous dump.", ""),

    # ═══ ALL / ROOT UNIQUE ═══
    ("PRJ-LOCAL-0901", "ALL Root (Unique Only)", "ALL Root (Unique Only)", "AGGREGATE", "LEVEL_4",
     ["ALL"],
     "Assets in ALL/ that have no duplicate in a category folder. Very few expected.", ""),
]


def load_csv(path):
    rows = []
    with open(path, "r", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(row)
    return rows


def build_folder_to_project():
    """Map source folder paths to local project IDs."""
    mapping = {}
    for proj_id, proj_name, display_name, category, evidence, folders, notes, p0a in PROJECT_GROUPS:
        for folder in folders:
            mapping[folder] = proj_id
    return mapping


def classify_asset(asset, folder_to_proj):
    """Determine which project an asset belongs to."""
    grandparent = asset.get("grandparent_folder", "").strip()
    parent = asset.get("parent_folder", "").strip()
    source_cat = asset.get("source_category", "").strip()
    rel_path = asset.get("relative_path", "").strip()

    # Build the folder path that matches our grouping definitions
    if grandparent and parent and grandparent != parent:
        full_folder = f"{grandparent}/{parent}"
    elif parent:
        full_folder = parent
    elif source_cat:
        full_folder = source_cat
    else:
        full_folder = ""

    # Direct folder match
    if full_folder in folder_to_proj:
        return folder_to_proj[full_folder]

    # Path-prefix match: handles subfolders (e.g. SPEC/SPON/A/ → SPEC/SPON)
    best_prefix = ""
    best_proj = None
    for folder_key, proj_id in folder_to_proj.items():
        if rel_path.startswith(folder_key + "/") and len(folder_key) > len(best_prefix):
            best_prefix = folder_key
            best_proj = proj_id
    if best_proj:
        return best_proj

    # Try just the category for top-level assets
    if source_cat in folder_to_proj:
        return folder_to_proj[source_cat]

    # OLD folder: check if it's ADAGIO or OUTSOURCE 60 specifically
    if source_cat == "OLD":
        if "ADAGIO" in full_folder.upper() or "ADAGIO" in parent.upper():
            return "PRJ-LOCAL-0030"
        if "OUTSOURCE" in full_folder.upper() or "OUTSOURCE" in parent.upper():
            return "PRJ-LOCAL-0100"
        return "PRJ-LOCAL-0900"

    # ALL folder
    if source_cat == "ALL":
        return "PRJ-LOCAL-0901"

    return None


def select_canonical(asset_ids_for_dup, assets_by_id):
    """Select canonical asset from a duplicate group.
    Priority: project folder > category folder > useful filename > non-ALL > oldest path > lowest AST number.
    """
    if len(asset_ids_for_dup) == 1:
        return asset_ids_for_dup[0], "ONLY_COPY"

    candidates = []
    for aid in asset_ids_for_dup:
        a = assets_by_id.get(aid)
        if not a:
            continue
        cat = a.get("source_category", "")
        path = a.get("relative_path", "")
        parent = a.get("parent_folder", "")
        fname = a.get("filename", "")

        score = 0
        reason_parts = []

        # Prefer non-ALL
        if cat != "ALL":
            score += 100
            reason_parts.append("non-ALL")

        # Prefer named project folders (not generic category)
        if cat not in ("ALL", "OLD") and cat:
            score += 50
            reason_parts.append(f"category={cat}")

        # Prefer filenames that match the folder name
        stem = a.get("filename_stem", "")
        if parent and stem and parent.lower().replace(" ", "") in stem.lower().replace(" ", ""):
            score += 20
            reason_parts.append("name-matches-folder")

        # Prefer higher resolution
        w = int(a.get("width", 0) or 0)
        h = int(a.get("height", 0) or 0)
        if w > 0 and h > 0:
            score += min(w * h / 10000, 10)

        # Lowest AST number as tiebreaker
        ast_num = int(aid.replace("AST-", ""))
        score -= ast_num * 0.001

        candidates.append((score, aid, cat, path, "; ".join(reason_parts)))

    candidates.sort(key=lambda x: -x[0])
    best = candidates[0]
    return best[1], f"CANONICAL_SELECT({best[4]})"


def main():
    print("Loading asset master...")
    assets = load_csv(ASSET_MASTER)
    print(f"  {len(assets)} assets loaded")

    print("Loading duplicate register...")
    dups = load_csv(DUP_REGISTER)
    print(f"  {len(dups)} duplicate groups loaded")

    print("Loading folder candidates...")
    folders = load_csv(FOLDER_CANDIDATES)
    print(f"  {len(folders)} folder candidates loaded")

    # Build lookup maps
    assets_by_id = {a["asset_id"]: a for a in assets}
    folder_to_proj = build_folder_to_project()

    # ─── Step 1: Classify every asset into a project ───
    print("\nClassifying assets into projects...")
    project_assets = defaultdict(list)
    unclassified = []

    for asset in assets:
        proj_id = classify_asset(asset, folder_to_proj)
        if proj_id:
            project_assets[proj_id].append(asset["asset_id"])
            asset["_local_project_id"] = proj_id
        else:
            unclassified.append(asset)
            asset["_local_project_id"] = "UNCLASSIFIED"

    print(f"  Classified: {len(assets) - len(unclassified)}")
    print(f"  Unclassified: {len(unclassified)}")

    # ─── Step 2: Generate 02M — Phase 0A to Local Project Map ───
    print("\nGenerating 02M_PHASE0A_TO_LOCAL_PROJECT_MAP.csv...")
    phase0a_map_path = os.path.join(OUTPUT, "02M_PHASE0A_TO_LOCAL_PROJECT_MAP.csv")
    with open(phase0a_map_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "local_project_id", "local_project_name", "display_name",
            "category", "evidence_level", "source_folders",
            "phase0a_match", "phase0a_confidence", "mapping_notes"
        ])
        for proj_id, proj_name, display_name, category, evidence, src_folders, notes, p0a in PROJECT_GROUPS:
            phase0a_match = p0a if p0a else "UNKNOWN"
            confidence = "HIGH" if evidence in ("LEVEL_1", "LEVEL_2") else "LOW"
            folder_str = "; ".join(src_folders)
            w.writerow([
                proj_id, proj_name, display_name, category, evidence,
                folder_str, phase0a_match, confidence, notes
            ])
    print(f"  Written: {phase0a_map_path}")

    # ─── Step 3: Generate 02N — Local Project Register ───
    print("\nGenerating 02N_LOCAL_PROJECT_REGISTER.csv...")
    register_path = os.path.join(OUTPUT, "02N_LOCAL_PROJECT_REGISTER.csv")
    with open(register_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "local_project_id", "project_name", "display_name", "category",
            "evidence_level", "total_assets", "unique_assets", "image_count",
            "video_count", "total_size_bytes", "source_folders",
            "identification_status", "curation_priority", "case_study_potential",
            "website_featured_candidate", "owner_review_needed", "notes"
        ])
        for proj_id, proj_name, display_name, category, evidence, src_folders, notes, p0a in PROJECT_GROUPS:
            asset_ids = project_assets.get(proj_id, [])
            unique_count = 0
            img_count = 0
            vid_count = 0
            total_size = 0
            seen_sha = set()

            for aid in asset_ids:
                a = assets_by_id.get(aid)
                if not a:
                    continue
                total_size += int(a.get("size_bytes", 0) or 0)
                if a.get("media_class") == "VIDEO":
                    vid_count += 1
                else:
                    img_count += 1
                sha = a.get("sha256", "")
                if sha and sha not in seen_sha:
                    seen_sha.add(sha)
                    unique_count += 1

            # Determine identification status
            if evidence == "LEVEL_1":
                id_status = "LOCAL_VERIFIED"
            elif evidence == "LEVEL_2":
                id_status = "LOCAL_STRONG_MATCH"
            elif evidence == "LEVEL_3":
                id_status = "LOCAL_CANDIDATE"
            else:
                id_status = "UNIDENTIFIED"

            # Curation priority
            if proj_id.startswith("PRJ-LOCAL-002") and proj_id <= "PRJ-LOCAL-0023":
                priority = "P0"  # SPEC products — branded, high value
            elif proj_id in ("PRJ-LOCAL-0001", "PRJ-LOCAL-0002", "PRJ-LOCAL-0030"):
                priority = "P0"  # Tamarack, Misquamicut, Adagio — strong case studies
            elif proj_id in ("PRJ-LOCAL-0010", "PRJ-LOCAL-0100"):
                priority = "P1"  # Yacht portfolio, Outsource 60 — large sets
            elif evidence in ("LEVEL_1", "LEVEL_2"):
                priority = "P1"
            else:
                priority = "P2"

            # Case study potential
            if proj_id in ("PRJ-LOCAL-0001", "PRJ-LOCAL-0020", "PRJ-LOCAL-0030"):
                cs_potential = "HIGH"
            elif proj_id in ("PRJ-LOCAL-0002", "PRJ-LOCAL-0010", "PRJ-LOCAL-0021"):
                cs_potential = "MEDIUM_HIGH"
            elif unique_count >= 5:
                cs_potential = "MEDIUM"
            elif unique_count >= 2:
                cs_potential = "LOW"
            else:
                cs_potential = "MINIMAL"

            # Website featured candidate
            if proj_id in ("PRJ-LOCAL-0001", "PRJ-LOCAL-0020", "PRJ-LOCAL-0030", "PRJ-LOCAL-0010"):
                featured = "FEATURE_CANDIDATE_A"
            elif proj_id in ("PRJ-LOCAL-0002", "PRJ-LOCAL-0021", "PRJ-LOCAL-0022"):
                featured = "FEATURE_CANDIDATE_B"
            elif evidence in ("LEVEL_1", "LEVEL_2") and unique_count >= 2:
                featured = "SUPPORTING_PROJECT"
            else:
                featured = "ARCHIVE"

            # Owner review needed?
            owner_review = "NO" if evidence == "LEVEL_1" else "YES"

            folder_str = "; ".join(src_folders)
            w.writerow([
                proj_id, proj_name, display_name, category, evidence,
                len(asset_ids), unique_count, img_count, vid_count, total_size,
                folder_str, id_status, priority, cs_potential,
                featured, owner_review, notes
            ])
    print(f"  Written: {register_path}")

    # ─── Step 4: Generate 02O — Canonical Duplicate Selection ───
    print("\nGenerating 02O_CANONICAL_DUPLICATE_SELECTION.csv...")
    canonical_path = os.path.join(OUTPUT, "02O_CANONICAL_DUPLICATE_SELECTION.csv")
    with open(canonical_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "duplicate_group", "sha256", "copy_count",
            "canonical_asset_id", "canonical_path", "canonical_category",
            "redundant_asset_ids", "redundant_paths",
            "selection_reason", "redundant_bytes_recoverable"
        ])
        for dup in dups:
            group_id = dup["duplicate_group"]
            sha = dup["sha256"]
            copy_count = int(dup["copy_count"])
            asset_ids = [x.strip() for x in dup["asset_ids"].split(";")]

            canonical_id, reason = select_canonical(asset_ids, assets_by_id)
            canonical_asset = assets_by_id.get(canonical_id, {})

            redundant_ids = [a for a in asset_ids if a != canonical_id]
            redundant_paths = []
            for rid in redundant_ids:
                ra = assets_by_id.get(rid, {})
                redundant_paths.append(ra.get("relative_path", ""))

            redundant_bytes = int(dup["total_redundant_bytes"])

            w.writerow([
                group_id, sha, copy_count,
                canonical_id,
                canonical_asset.get("relative_path", ""),
                canonical_asset.get("source_category", ""),
                "; ".join(redundant_ids),
                "; ".join(redundant_paths),
                reason,
                redundant_bytes
            ])
    print(f"  Written: {canonical_path}")

    # ─── Step 5: Generate 02P — ALL Folder Unique Assets ───
    print("\nGenerating 02P_ALL_FOLDER_UNIQUE_ASSETS.csv...")
    all_unique_path = os.path.join(OUTPUT, "02P_ALL_FOLDER_UNIQUE_ASSETS.csv")

    # Find assets in ALL/ that are NOT duplicated elsewhere
    dup_shas = {}
    for dup in dups:
        sha = dup["sha256"]
        ids = [x.strip() for x in dup["asset_ids"].split(";")]
        dup_shas[sha] = ids

    all_unique = []
    for asset in assets:
        if asset.get("source_category", "").strip() != "ALL":
            continue
        sha = asset.get("sha256", "")
        aid = asset["asset_id"]

        # Check if this SHA appears in other categories too
        if sha in dup_shas:
            other_copies = [x for x in dup_shas[sha] if x != aid]
            has_non_all = False
            for oid in other_copies:
                oa = assets_by_id.get(oid, {})
                if oa.get("source_category", "").strip() != "ALL":
                    has_non_all = True
                    break
            if has_non_all:
                continue  # This is a duplicate — not unique to ALL

        all_unique.append(asset)

    with open(all_unique_path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "asset_id", "relative_path", "filename", "extension",
            "media_class", "size_bytes", "width", "height",
            "sha256", "resolution_class", "source_project_candidate",
            "uniqueness_status", "notes"
        ])
        for asset in all_unique:
            w.writerow([
                asset["asset_id"],
                asset["relative_path"],
                asset["filename"],
                asset["extension"],
                asset["media_class"],
                asset["size_bytes"],
                asset["width"],
                asset["height"],
                asset["sha256"],
                asset["resolution_class"],
                asset.get("source_project_candidate", ""),
                "UNIQUE_TO_ALL",
                "No copy found in any category folder"
            ])
    print(f"  Written: {all_unique_path}")
    print(f"  Unique-to-ALL assets: {len(all_unique)}")

    # ─── Summary ───
    print("\n" + "=" * 60)
    print("PROJECT IDENTIFICATION SUMMARY")
    print("=" * 60)
    print(f"Total assets: {len(assets)}")
    print(f"Total duplicate groups: {len(dups)}")
    print(f"Total project groups defined: {len(PROJECT_GROUPS)}")
    print(f"Unique-to-ALL assets: {len(all_unique)}")
    print(f"Unclassified assets: {len(unclassified)}")
    print()
    print("Projects by identification status:")
    status_counts = defaultdict(int)
    for proj_id, proj_name, display_name, category, evidence, *_ in PROJECT_GROUPS:
        if evidence == "LEVEL_1":
            status_counts["LOCAL_VERIFIED"] += 1
        elif evidence == "LEVEL_2":
            status_counts["LOCAL_STRONG_MATCH"] += 1
        elif evidence == "LEVEL_3":
            status_counts["LOCAL_CANDIDATE"] += 1
        else:
            status_counts["UNIDENTIFIED"] += 1
    for status, count in sorted(status_counts.items()):
        print(f"  {status}: {count}")

    print()
    print("Projects by case study potential:")
    cs_counts = defaultdict(int)
    for proj_id, proj_name, display_name, category, evidence, src_folders, notes, p0a in PROJECT_GROUPS:
        asset_ids = project_assets.get(proj_id, [])
        unique = len(set(assets_by_id.get(a, {}).get("sha256", "") for a in asset_ids))
        if proj_id in ("PRJ-LOCAL-0001", "PRJ-LOCAL-0020", "PRJ-LOCAL-0030"):
            cs_counts["HIGH"] += 1
        elif proj_id in ("PRJ-LOCAL-0002", "PRJ-LOCAL-0010", "PRJ-LOCAL-0021"):
            cs_counts["MEDIUM_HIGH"] += 1
        elif unique >= 5:
            cs_counts["MEDIUM"] += 1
        elif unique >= 2:
            cs_counts["LOW"] += 1
        else:
            cs_counts["MINIMAL"] += 1
    for pot, count in sorted(cs_counts.items()):
        print(f"  {pot}: {count}")

    print("\nDone. All outputs in:", OUTPUT)


if __name__ == "__main__":
    main()
