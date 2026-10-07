#!/usr/bin/env python3
"""
Phase 0B.3 — Normalized Media Entity Register Generator
Decomposes Medical/Defense portfolios, corrects RACK, assigns entity_type,
applies updated readiness logic, generates 03A.
"""

import csv
import os
import re
from collections import defaultdict

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")
OUTPUT_DIR = os.path.join(PHASE0B, "phase-0b3")
os.makedirs(OUTPUT_DIR, exist_ok=True)

ASSET_MASTER = os.path.join(PHASE0B, "02A_LOCAL_ASSET_MASTER.csv")
DUP_REGISTER = os.path.join(PHASE0B, "02B_EXACT_DUPLICATE_REGISTER.csv")
CURATION_REGISTER = os.path.join(PHASE0B, "02Q_ASSET_CURATION_REGISTER.csv")
PROJECT_REGISTER = os.path.join(PHASE0B, "02N_LOCAL_PROJECT_REGISTER.csv")
ALL_UNIQUE = os.path.join(PHASE0B, "02P_ALL_FOLDER_UNIQUE_ASSETS.csv")
VIDEO_REGISTER = os.path.join(PHASE0B, "02D_VIDEO_MASTER_REGISTER.csv")
PHASE0A_REGISTER = os.path.join(DOCS, "01D_PORTFOLIO_SOURCE_REGISTER.md")

# ═══════════════════════════════════════════════════════════════════════════════
# ENTITY DEFINITIONS — Decomposed Medical + Defense + Corrected RACK
# ═══════════════════════════════════════════════════════════════════════════════

# Medical: 10 individual projects (decomposed from PRJ-LOCAL-0040)
MEDICAL_DECOMPOSITION = {
    "PRJ-LOCAL-0041": {
        "name": "Aesthetic Treatment Machine",
        "folder": "MEDICAL/Aesthetic Treatment Machine",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0042": {
        "name": "Blood Pressure Monitor",
        "folder": "MEDICAL/Blood Pressure Monitor",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0043": {
        "name": "Dental Jet",
        "folder": "MEDICAL/Dental Jet",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0044": {
        "name": "Defibrillator",
        "folder": "MEDICAL/Defibrillator",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0045": {
        "name": "Dynamometer",
        "folder": "MEDICAL/Dynamometer",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0046": {
        "name": "Medical Hospital Scale",
        "folder": "MEDICAL/Medical Hospital Scale",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0047": {
        "name": "Portable Scanner",
        "folder": "MEDICAL/Portable Scanner",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0048": {
        "name": "Spine Board",
        "folder": "MEDICAL/Spine Board",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-0049": {
        "name": "Therapy System",
        "folder": "MEDICAL/Therapy System",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
    "PRJ-LOCAL-004A": {
        "name": "Thermometer",
        "folder": "MEDICAL/Thermometer",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "MEDICAL",
    },
}

# Defense: 16 individual projects (decomposed from PRJ-LOCAL-0050)
DEFENSE_DECOMPOSITION = {
    "PRJ-LOCAL-005A": {
        "name": "Armored Vehicle Camera",
        "folder": "MILITARY/Armored Vehicle Camera",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005B": {
        "name": "Binoculars",
        "folder": "MILITARY/Binoculars",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005C": {
        "name": "Bomb Squad Remote",
        "folder": "MILITARY/Bomb Squad Remote",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005D": {
        "name": "Bomb Squad Robot",
        "folder": "MILITARY/Bomb Squad Robot",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005E": {
        "name": "Emergency Beacon",
        "folder": "MILITARY/Emergency Beacon",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005F": {
        "name": "Flight Box",
        "folder": "MILITARY/Flight Box",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005G": {
        "name": "Gyrocam",
        "folder": "MILITARY/Gyrocam",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005H": {
        "name": "Manpack",
        "folder": "MILITARY/Manpack",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005I": {
        "name": "Military Phone",
        "folder": "MILITARY/Military Phone",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005J": {
        "name": "POD for UAV",
        "folder": "MILITARY/POD for UAV",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005K": {
        "name": "Rackmount Enclosure (Military)",
        "folder": "MILITARY/Rackmount Enclosure",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005L": {
        "name": "Rifle Scope",
        "folder": "MILITARY/Rifle Scope",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005M": {
        "name": "Rugged Computer",
        "folder": "MILITARY/Rugged Computer",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005N": {
        "name": "Security Wand",
        "folder": "MILITARY/Security Wand",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005O": {
        "name": "Suitcase (Military)",
        "folder": "MILITARY/Suitcase",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
    "PRJ-LOCAL-005P": {
        "name": "Tac-Eye Binocular",
        "folder": "MILITARY/Tac-Eye Binocular",
        "entity_type": "INDIVIDUAL_PROJECT",
        "category": "DEFENSE",
    },
}

# ═══════════════════════════════════════════════════════════════════════════════
# FOLDER → ENTITY MAPPING (updated: Medical/Defense decomposed, RACK corrected)
# ═══════════════════════════════════════════════════════════════════════════════

FOLDER_TO_ENTITY = {
    # Architecture (6 individual projects)
    "ARCHITECTURE/Tamarack Country Club": ("PRJ-LOCAL-0001", "INDIVIDUAL_PROJECT"),
    "ARCHITECTURE/Tamarack Pool House": ("PRJ-LOCAL-0001", "INDIVIDUAL_PROJECT"),
    "ARCHITECTURE/Misquamicut Beach Club": ("PRJ-LOCAL-0002", "INDIVIDUAL_PROJECT"),
    "ARCHITECTURE/Charlotte Office Interior": ("PRJ-LOCAL-0003", "INDIVIDUAL_PROJECT"),
    "ARCHITECTURE/Convent of the Sacred Heart": ("PRJ-LOCAL-0004", "INDIVIDUAL_PROJECT"),
    "ARCHITECTURE/Hayderabad Phase II Project": ("PRJ-LOCAL-0005", "INDIVIDUAL_PROJECT"),
    "ARCHITECTURE/520 Madison Avenue NY": ("PRJ-LOCAL-0006", "INDIVIDUAL_PROJECT"),
    # Transportation
    "TRANSPORTATION/Diamond": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Hydra": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Luxury Yacht": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Mega Yacht": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Super Yacht": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Catamaran": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Boat Profile": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Yacht Interior": ("PRJ-LOCAL-0010", "PROJECT_FAMILY"),
    "TRANSPORTATION/Aircraft Interior": ("PRJ-LOCAL-0011", "INDIVIDUAL_PROJECT"),
    "MISCELLANEOUS/Dubai International Boat Show": ("PRJ-LOCAL-0012", "INDIVIDUAL_PROJECT"),
    # SPEC products (RACK corrected)
    "SPEC/SPON": ("PRJ-LOCAL-0020", "INDIVIDUAL_PROJECT"),
    "SPEC/DBLL": ("PRJ-LOCAL-0021", "INDIVIDUAL_PROJECT"),
    "SPEC/RACK": ("PRJ-LOCAL-0022", "INDIVIDUAL_PROJECT"),
    "SPEC/VIRT": ("PRJ-LOCAL-0023", "INDIVIDUAL_PROJECT"),
    # Consumer Electronics
    "OLD/ADAGIO": ("PRJ-LOCAL-0030", "INDIVIDUAL_PROJECT"),
    "HOME GOODS/Adagio": ("PRJ-LOCAL-0030", "INDIVIDUAL_PROJECT"),
    "MISCELLANEOUS/iPad Cover": ("PRJ-LOCAL-0031", "INDIVIDUAL_PROJECT"),
    "PROTOTYPING/ABS + RTV Tooling": ("PRJ-LOCAL-0031", "INDIVIDUAL_PROJECT"),
    # Medical (DECOMPOSED into 10 individual projects)
    "MEDICAL/Aesthetic Treatment Machine": ("PRJ-LOCAL-0041", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Blood Pressure Monitor": ("PRJ-LOCAL-0042", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Dental Jet": ("PRJ-LOCAL-0043", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Defibrillator": ("PRJ-LOCAL-0044", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Dynamometer": ("PRJ-LOCAL-0045", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Medical Hospital Scale": ("PRJ-LOCAL-0046", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Portable Scanner": ("PRJ-LOCAL-0047", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Spine Board": ("PRJ-LOCAL-0048", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Therapy System": ("PRJ-LOCAL-0049", "INDIVIDUAL_PROJECT"),
    "MEDICAL/Thermometer": ("PRJ-LOCAL-004A", "INDIVIDUAL_PROJECT"),
    # Defense (DECOMPOSED into 16 individual projects)
    "MILITARY/Armored Vehicle Camera": ("PRJ-LOCAL-005A", "INDIVIDUAL_PROJECT"),
    "MILITARY/Binoculars": ("PRJ-LOCAL-005B", "INDIVIDUAL_PROJECT"),
    "MILITARY/Bomb Squad Remote": ("PRJ-LOCAL-005C", "INDIVIDUAL_PROJECT"),
    "MILITARY/Bomb Squad Robot": ("PRJ-LOCAL-005D", "INDIVIDUAL_PROJECT"),
    "MILITARY/Emergency Beacon": ("PRJ-LOCAL-005E", "INDIVIDUAL_PROJECT"),
    "MILITARY/Flight Box": ("PRJ-LOCAL-005F", "INDIVIDUAL_PROJECT"),
    "MILITARY/Gyrocam": ("PRJ-LOCAL-005G", "INDIVIDUAL_PROJECT"),
    "MILITARY/Manpack": ("PRJ-LOCAL-005H", "INDIVIDUAL_PROJECT"),
    "MILITARY/Military Phone": ("PRJ-LOCAL-005I", "INDIVIDUAL_PROJECT"),
    "MILITARY/POD for UAV": ("PRJ-LOCAL-005J", "INDIVIDUAL_PROJECT"),
    "MILITARY/Rackmount Enclosure": ("PRJ-LOCAL-005K", "INDIVIDUAL_PROJECT"),
    "MILITARY/Rifle Scope": ("PRJ-LOCAL-005L", "INDIVIDUAL_PROJECT"),
    "MILITARY/Rugged Computer": ("PRJ-LOCAL-005M", "INDIVIDUAL_PROJECT"),
    "MILITARY/Security Wand": ("PRJ-LOCAL-005N", "INDIVIDUAL_PROJECT"),
    "MILITARY/Suitcase": ("PRJ-LOCAL-005O", "INDIVIDUAL_PROJECT"),
    "MILITARY/Tac-Eye Binocular": ("PRJ-LOCAL-005P", "INDIVIDUAL_PROJECT"),
    # Dual-category projects
    "COMMERCIAL/iaMedium": ("PRJ-LOCAL-0051", "INDIVIDUAL_PROJECT"),
    "MILITARY/iaMedium": ("PRJ-LOCAL-0051", "INDIVIDUAL_PROJECT"),
    "COMMERCIAL/Finger-Print Scanner": ("PRJ-LOCAL-0052", "INDIVIDUAL_PROJECT"),
    "MILITARY/Finger-Print Scanner": ("PRJ-LOCAL-0052", "INDIVIDUAL_PROJECT"),
    "COMMERCIAL/Flight Planner": ("PRJ-LOCAL-0053", "INDIVIDUAL_PROJECT"),
    "MILITARY/Flight Planner": ("PRJ-LOCAL-0053", "INDIVIDUAL_PROJECT"),
    "COMMERCIAL/Security Scanner": ("PRJ-LOCAL-0054", "INDIVIDUAL_PROJECT"),
    "MILITARY/Security Scanner": ("PRJ-LOCAL-0054", "INDIVIDUAL_PROJECT"),
    # Web Design
    "WEB DESIGN/GKV Law Firm": ("PRJ-LOCAL-0060", "PORTFOLIO_COLLECTION"),
    "WEB DESIGN/MBA Air": ("PRJ-LOCAL-0060", "PORTFOLIO_COLLECTION"),
    "WEB DESIGN/Suna Salon": ("PRJ-LOCAL-0060", "PORTFOLIO_COLLECTION"),
    "WEB DESIGN/Tutor My Kid": ("PRJ-LOCAL-0060", "PORTFOLIO_COLLECTION"),
    "WEB DESIGN/Your Lucky Eye": ("PRJ-LOCAL-0060", "PORTFOLIO_COLLECTION"),
    # Graphic Design
    "GRAPHIC/Cleanser": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Da Benito": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Heavenly": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Jewelry": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/MCL Cafeteria": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Mastique": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Medical Advertising": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Naples Lumber": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    "GRAPHIC/Sioux City Sarsaparilla": ("PRJ-LOCAL-0070", "PORTFOLIO_COLLECTION"),
    # Prototyping → CAPABILITY_COLLECTION
    "PROTOTYPING/Acrylic FormingBending": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    "PROTOTYPING/Carbon Fiber Molding": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    "PROTOTYPING/FDM Printing": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    "PROTOTYPING/Multi Level Prototyping": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    "PROTOTYPING/Rubber Coating, Silkscreening": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    "PROTOTYPING/Sheet Metal + RTV Tooling": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    "PROTOTYPING/SLA  SLS": ("PRJ-LOCAL-0080", "CAPABILITY_COLLECTION"),
    # Commercial
    "COMMERCIAL/Barcode Scanner": ("PRJ-LOCAL-0085", "PORTFOLIO_COLLECTION"),
    "COMMERCIAL/Dictaphone": ("PRJ-LOCAL-0085", "PORTFOLIO_COLLECTION"),
    "COMMERCIAL/Hand Dryer": ("PRJ-LOCAL-0085", "PORTFOLIO_COLLECTION"),
    "COMMERCIAL/Soup Server": ("PRJ-LOCAL-0085", "PORTFOLIO_COLLECTION"),
    "COMMERCIAL/Staircase": ("PRJ-LOCAL-0085", "PORTFOLIO_COLLECTION"),
    # Consumer Electronics Portfolio
    "CONSUMER ELECTRONICS/CD Player": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Cam Corder (Portable Camera)": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/DVD Player": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Handheld Massager": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Hard Drive Tower": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Portable Shredder": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Submersible Tablet": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Tablet": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Universal Remote Control": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Video Player": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    "CONSUMER ELECTRONICS/Wireless Tower": ("PRJ-LOCAL-0090", "PORTFOLIO_COLLECTION"),
    # Communication
    "COMMUNICATION/Business Phone": ("PRJ-LOCAL-0091", "PORTFOLIO_COLLECTION"),
    "COMMUNICATION/GPS Navigator": ("PRJ-LOCAL-0091", "PORTFOLIO_COLLECTION"),
    "COMMUNICATION/PDA": ("PRJ-LOCAL-0091", "PORTFOLIO_COLLECTION"),
    "COMMUNICATION/Payphone": ("PRJ-LOCAL-0091", "PORTFOLIO_COLLECTION"),
    "COMMUNICATION/Walkie Talkie": ("PRJ-LOCAL-0091", "PORTFOLIO_COLLECTION"),
    "COMMUNICATION/iPhone Case": ("PRJ-LOCAL-0091", "PORTFOLIO_COLLECTION"),
    # Appliances
    "APPLIANCES/Air Conditioning Fan": ("PRJ-LOCAL-0092", "PORTFOLIO_COLLECTION"),
    "APPLIANCES/Coffee Maker": ("PRJ-LOCAL-0092", "PORTFOLIO_COLLECTION"),
    "APPLIANCES/Refrigerator 1": ("PRJ-LOCAL-0092", "PORTFOLIO_COLLECTION"),
    "APPLIANCES/Refrigerator 2": ("PRJ-LOCAL-0092", "PORTFOLIO_COLLECTION"),
    "APPLIANCES/Vacuum Cleaner": ("PRJ-LOCAL-0092", "PORTFOLIO_COLLECTION"),
    # Home Goods (excluding Adagio)
    "HOME GOODS/Dehumidifier": ("PRJ-LOCAL-0093", "PORTFOLIO_COLLECTION"),
    "HOME GOODS/Fan Tower": ("PRJ-LOCAL-0093", "PORTFOLIO_COLLECTION"),
    "HOME GOODS/Ionizer": ("PRJ-LOCAL-0093", "PORTFOLIO_COLLECTION"),
    "HOME GOODS/Speaker Tower": ("PRJ-LOCAL-0093", "PORTFOLIO_COLLECTION"),
    # Outdoor & Sports
    "OUTDOORS/All-in-One Grill": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "OUTDOORS/Diving Goggle (with Camera)": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "OUTDOORS/LED Street Light": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "OUTDOORS/Mosquito Deleto": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "OUTDOORS/Waterproof Case": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Dumbbells": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Golf Caddy": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Knee Board": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Pedometer": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Putter": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Roller Blades": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Sports Bottle": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    "SPORT/Tennis Ball Machine": ("PRJ-LOCAL-0094", "PORTFOLIO_COLLECTION"),
    # Industrial
    "INDUSTRIAL/Hydraulic Cross-section": ("PRJ-LOCAL-0095", "PORTFOLIO_COLLECTION"),
    "INDUSTRIAL/Infrared Window": ("PRJ-LOCAL-0095", "PORTFOLIO_COLLECTION"),
    "INDUSTRIAL/Labeler": ("PRJ-LOCAL-0095", "PORTFOLIO_COLLECTION"),
    "INDUSTRIAL/Mail Extraction Machine": ("PRJ-LOCAL-0095", "PORTFOLIO_COLLECTION"),
    "INDUSTRIAL/Synergix": ("PRJ-LOCAL-0095", "PORTFOLIO_COLLECTION"),
    # Kitchenware
    "KITCHENWARE/Kitchen Knife": ("PRJ-LOCAL-0096", "PORTFOLIO_COLLECTION"),
    "KITCHENWARE/Paper HolderDispenser": ("PRJ-LOCAL-0096", "PORTFOLIO_COLLECTION"),
    "KITCHENWARE/Recycle Bin": ("PRJ-LOCAL-0096", "PORTFOLIO_COLLECTION"),
    "KITCHENWARE/Salt and Pepper Shaker": ("PRJ-LOCAL-0096", "PORTFOLIO_COLLECTION"),
    "KITCHENWARE/Scale": ("PRJ-LOCAL-0096", "PORTFOLIO_COLLECTION"),
    # Toys
    "TOYS GAMES JUVENILE/Massaging Vibrating Teether": ("PRJ-LOCAL-0097", "PORTFOLIO_COLLECTION"),
    "TOYS GAMES JUVENILE/Wild Peas": ("PRJ-LOCAL-0097", "PORTFOLIO_COLLECTION"),
    # Miscellaneous
    "MISCELLANEOUS/Ladder Rack": ("PRJ-LOCAL-0098", "INDIVIDUAL_PROJECT"),
    # OUTSOURCE 60 → MULTI_CLIENT_ARCHIVE
    "OLD/OUTSOURCE 60": ("PRJ-LOCAL-0100", "MULTI_CLIENT_ARCHIVE"),
    # Catch-all
    "OLD": ("PRJ-LOCAL-0900", "ARCHIVE_BUCKET"),
    "ALL": ("PRJ-LOCAL-0901", "AGGREGATE_DUPLICATE_BUCKET"),
    # VIDEO
    "VIDEO": ("PRJ-LOCAL-0110", "CAPABILITY_COLLECTION"),
}

# ═══════════════════════════════════════════════════════════════════════════════
# ENTITY DISPLAY NAMES (corrected)
# ═══════════════════════════════════════════════════════════════════════════════

ENTITY_DISPLAY_NAMES = {
    "PRJ-LOCAL-0001": "Tamarack Country Club",
    "PRJ-LOCAL-0002": "Misquamicut Beach Club",
    "PRJ-LOCAL-0003": "Charlotte Office Interior",
    "PRJ-LOCAL-0004": "Convent of the Sacred Heart",
    "PRJ-LOCAL-0005": "Hayderabad Phase II Project",
    "PRJ-LOCAL-0006": "520 Madison Avenue NY",
    "PRJ-LOCAL-0010": "Yacht Design Portfolio",
    "PRJ-LOCAL-0011": "Aircraft Interior",
    "PRJ-LOCAL-0012": "Dubai International Boat Show",
    "PRJ-LOCAL-0020": "SPOONY Smart Spoon",
    "PRJ-LOCAL-0021": "DBLL — Adjustable Dumbbell",
    "PRJ-LOCAL-0022": "RACK — Bath Tray / Caddy",  # CORRECTED
    "PRJ-LOCAL-0023": "VIRT",
    "PRJ-LOCAL-0030": "Crestron Adagio",
    "PRJ-LOCAL-0031": "iPad Cover (IPM)",
    "PRJ-LOCAL-0041": "Aesthetic Treatment Machine",
    "PRJ-LOCAL-0042": "Blood Pressure Monitor",
    "PRJ-LOCAL-0043": "Dental Jet",
    "PRJ-LOCAL-0044": "Defibrillator",
    "PRJ-LOCAL-0045": "Dynamometer",
    "PRJ-LOCAL-0046": "Medical Hospital Scale",
    "PRJ-LOCAL-0047": "Portable Scanner",
    "PRJ-LOCAL-0048": "Spine Board",
    "PRJ-LOCAL-0049": "Therapy System",
    "PRJ-LOCAL-004A": "Thermometer",
    "PRJ-LOCAL-005A": "Armored Vehicle Camera",
    "PRJ-LOCAL-005B": "Binoculars (Military)",
    "PRJ-LOCAL-005C": "Bomb Squad Remote",
    "PRJ-LOCAL-005D": "Bomb Squad Robot",
    "PRJ-LOCAL-005E": "Emergency Beacon",
    "PRJ-LOCAL-005F": "Flight Box",
    "PRJ-LOCAL-005G": "Gyrocam",
    "PRJ-LOCAL-005H": "Manpack",
    "PRJ-LOCAL-005I": "Military Phone",
    "PRJ-LOCAL-005J": "POD for UAV",
    "PRJ-LOCAL-005K": "Rackmount Enclosure (Military)",
    "PRJ-LOCAL-005L": "Rifle Scope",
    "PRJ-LOCAL-005M": "Rugged Computer",
    "PRJ-LOCAL-005N": "Security Wand",
    "PRJ-LOCAL-005O": "Suitcase (Military)",
    "PRJ-LOCAL-005P": "Tac-Eye Binocular",
    "PRJ-LOCAL-0051": "iaMedium",
    "PRJ-LOCAL-0052": "Finger-Print Scanner",
    "PRJ-LOCAL-0053": "Flight Planner",
    "PRJ-LOCAL-0054": "Security Scanner",
    "PRJ-LOCAL-0060": "Web Design Portfolio",
    "PRJ-LOCAL-0070": "Graphic Design Portfolio",
    "PRJ-LOCAL-0080": "Prototyping Capabilities",
    "PRJ-LOCAL-0085": "Commercial Products Portfolio",
    "PRJ-LOCAL-0090": "Consumer Electronics Portfolio",
    "PRJ-LOCAL-0091": "Communication Devices Portfolio",
    "PRJ-LOCAL-0092": "Appliances Portfolio",
    "PRJ-LOCAL-0093": "Home Goods Portfolio",
    "PRJ-LOCAL-0094": "Outdoor & Sports Portfolio",
    "PRJ-LOCAL-0095": "Industrial Equipment Portfolio",
    "PRJ-LOCAL-0096": "Kitchenware Portfolio",
    "PRJ-LOCAL-0097": "Toys & Juvenile Portfolio",
    "PRJ-LOCAL-0098": "Ladder Rack",
    "PRJ-LOCAL-0100": "OUTSOURCE 60",
    "PRJ-LOCAL-0110": "Video Archive",
    "PRJ-LOCAL-0900": "OLD Archive (Unclassified)",
    "PRJ-LOCAL-0901": "ALL Root (Unique Residue)",
}

# Design Lead priority tiers
ENTITY_PRIORITY_TIER = {}
# TIER A
for pid in ["PRJ-LOCAL-0020", "PRJ-LOCAL-0021", "PRJ-LOCAL-0022", "PRJ-LOCAL-0023",
            "PRJ-LOCAL-0030", "PRJ-LOCAL-0031", "PRJ-LOCAL-0001", "PRJ-LOCAL-0002"]:
    ENTITY_PRIORITY_TIER[pid] = "TIER_A"
# Medical/Defense individual projects → TIER B (decomposed from portfolio)
for pid in list(MEDICAL_DECOMPOSITION.keys()) + list(DEFENSE_DECOMPOSITION.keys()):
    ENTITY_PRIORITY_TIER[pid] = "TIER_B"
# Best medical/industrial/defense dual-category
for pid in ["PRJ-LOCAL-0051", "PRJ-LOCAL-0052", "PRJ-LOCAL-0053", "PRJ-LOCAL-0054"]:
    ENTITY_PRIORITY_TIER[pid] = "TIER_B"
# TIER B — transportation, consumer electronics, commercial, outdoor, kitchenware
for pid in ["PRJ-LOCAL-0010", "PRJ-LOCAL-0011", "PRJ-LOCAL-0012",
            "PRJ-LOCAL-0085", "PRJ-LOCAL-0090", "PRJ-LOCAL-0091", "PRJ-LOCAL-0092",
            "PRJ-LOCAL-0094", "PRJ-LOCAL-0095", "PRJ-LOCAL-0096"]:
    ENTITY_PRIORITY_TIER[pid] = "TIER_B"
# TIER C — architecture (remaining), graphic design, web design
for pid in ["PRJ-LOCAL-0003", "PRJ-LOCAL-0004", "PRJ-LOCAL-0005", "PRJ-LOCAL-0006",
            "PRJ-LOCAL-0060", "PRJ-LOCAL-0070"]:
    ENTITY_PRIORITY_TIER[pid] = "TIER_C"
# TIER D — archive, capability, misc
for pid in ["PRJ-LOCAL-0080", "PRJ-LOCAL-0093", "PRJ-LOCAL-0097", "PRJ-LOCAL-0098",
            "PRJ-LOCAL-0100", "PRJ-LOCAL-0110", "PRJ-LOCAL-0900", "PRJ-LOCAL-0901"]:
    ENTITY_PRIORITY_TIER[pid] = "TIER_D"


def classify_entity(asset):
    """Classify asset into entity using folder matching with path-prefix fallback."""
    cat = asset.get("source_category", "")
    parent = asset.get("parent_folder", "")
    rel_path = asset.get("relative_path", "")

    if cat in ("OLD", "ALL"):
        full_folder = f"{cat}/{parent}" if parent != cat else cat
    elif cat == "VIDEO":
        full_folder = "VIDEO"
    else:
        full_folder = f"{cat}/{parent}"

    if full_folder in FOLDER_TO_ENTITY:
        return FOLDER_TO_ENTITY[full_folder]

    for folder_key, entity_info in FOLDER_TO_ENTITY.items():
        if rel_path.startswith(folder_key + "/") and len(folder_key) > 5:
            return entity_info

    if cat in FOLDER_TO_ENTITY:
        return FOLDER_TO_ENTITY[cat]

    return (None, None)


def is_stock_photo(asset):
    """Detect stock photos."""
    stem = asset.get("filename_stem", "").lower()
    filename = asset.get("filename", "").lower()
    stock_patterns = [r'adobestock', r'shutterstock', r'istock', r'getty', r'stock_', r'_stock']
    for pat in stock_patterns:
        if re.search(pat, stem) or re.search(pat, filename):
            return True
    return False


def compute_display_readiness(asset, entity_id):
    """
    Updated readiness logic — no blanket upscaling assumption.
    TIER_3 at 1280px+ can be CARD_READY or GALLERY_READY.
    """
    if asset.get("media_class") == "VIDEO":
        return "UNREVIEWED"

    if is_stock_photo(asset):
        return "NOT_FOR_PUBLICATION"

    if not entity_id or entity_id in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
        return "THUMBNAIL_ONLY"

    if entity_id == "PRJ-LOCAL-0100":
        return "THUMBNAIL_ONLY"

    res = asset.get("resolution_class", "")
    w = 0
    h = 0
    try:
        w = int(asset.get("width", 0) or 0)
    except (ValueError, TypeError):
        pass
    try:
        h = int(asset.get("height", 0) or 0)
    except (ValueError, TypeError):
        pass
    max_dim = max(w, h)

    if res in ("VERY_HIGH", "HIGH"):
        if max_dim >= 2400:
            return "FULL_BLEED_READY"
        return "LARGE_CONTAINED_READY"

    if res == "MEDIUM":
        if max_dim >= 1600:
            return "LARGE_CONTAINED_READY"
        return "CARD_READY"

    if res == "LOW":
        if max_dim >= 1280:
            return "CARD_READY"
        return "GALLERY_READY"

    # VERY_LOW
    if max_dim >= 800:
        return "THUMBNAIL_ONLY"
    return "RESTORATION_CANDIDATE"


def compute_publication_status(asset, entity_id):
    """Determine publication status based on visual review evidence."""
    if is_stock_photo(asset):
        return "DO_NOT_USE"

    if not entity_id or entity_id in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
        return "ARCHIVE"

    if entity_id == "PRJ-LOCAL-0100":
        return "USE_FOR_CAPABILITY_ONLY"

    # Crestron Adagio — client brand visible, needs owner verification
    if entity_id == "PRJ-LOCAL-0030":
        return "USE_AFTER_CLIENT_APPROVAL"

    # Medical/Defense — publication may be restricted
    med_ids = set(MEDICAL_DECOMPOSITION.keys())
    def_ids = set(DEFENSE_DECOMPOSITION.keys())
    if entity_id in med_ids or entity_id in def_ids:
        return "HOLD_OWNER_REVIEW"

    # Dual-category military projects
    if entity_id in ("PRJ-LOCAL-0051", "PRJ-LOCAL-0052", "PRJ-LOCAL-0053", "PRJ-LOCAL-0054"):
        return "HOLD_OWNER_REVIEW"

    return "USE_AFTER_CONTENT_APPROVAL"


def compute_case_study_state(entity_id, asset_count, has_process, has_lifestyle):
    """Determine case study candidacy."""
    if entity_id in ("PRJ-LOCAL-0020",):  # SPOONY
        return "CASE_STUDY_CANDIDATE"
    if entity_id in ("PRJ-LOCAL-0021",):  # DBLL
        return "LIGHT_CASE_STUDY_CANDIDATE"
    if entity_id in ("PRJ-LOCAL-0022", "PRJ-LOCAL-0030", "PRJ-LOCAL-0031"):
        return "LIGHT_CASE_STUDY_CANDIDATE"
    if entity_id in ("PRJ-LOCAL-0001", "PRJ-LOCAL-0002"):
        return "LIGHT_CASE_STUDY_CANDIDATE"
    if asset_count >= 3 and entity_id not in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901", "PRJ-LOCAL-0100"):
        return "PORTFOLIO_CARD_CANDIDATE"
    if entity_id in ("PRJ-LOCAL-0080",):
        return "CAPABILITY_MEDIA_ONLY"
    if entity_id in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
        return "ARCHIVE_ONLY"
    if entity_id == "PRJ-LOCAL-0100":
        return "ARCHIVE_ONLY"
    return "PORTFOLIO_CARD_CANDIDATE"


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

    # Build canonical copy lookup
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

    print("\nClassifying entities...")
    results = []
    entity_asset_counts = defaultdict(int)
    entity_stats = defaultdict(lambda: defaultdict(int))

    for asset in assets:
        aid = asset["asset_id"]
        entity_id, entity_type = classify_entity(asset)
        display_readiness = compute_display_readiness(asset, entity_id)
        publication_status = compute_publication_status(asset, entity_id)
        stock = is_stock_photo(asset)

        is_dup = aid in dup_asset_canonical
        if is_dup:
            is_canonical, dgid = dup_asset_canonical[aid]
        else:
            is_canonical = True
            dgid = ""

        # Skip non-canonical duplicates from entity counts
        if not is_canonical:
            continue

        if entity_id:
            entity_asset_counts[entity_id] += 1

        w = asset.get("width", "")
        h = asset.get("height", "")
        res = asset.get("resolution_class", "")

        # Quality tier
        tier_map = {"VERY_HIGH": "TIER_1", "HIGH": "TIER_1", "MEDIUM": "TIER_2", "LOW": "TIER_3", "VERY_LOW": "TIER_4"}
        quality_tier = tier_map.get(res, "TIER_4")

        row = {
            "asset_id": aid,
            "entity_id": entity_id or "",
            "entity_type": entity_type or "",
            "entity_display_name": ENTITY_DISPLAY_NAMES.get(entity_id, ""),
            "priority_tier": ENTITY_PRIORITY_TIER.get(entity_id, "TIER_D"),
            "display_readiness": display_readiness,
            "publication_status": publication_status,
            "quality_tier": quality_tier,
            "is_canonical_copy": "YES" if is_canonical else "NO",
            "is_stock_photo": "YES" if stock else "NO",
            "duplicate_group": dgid,
            "source_category": asset.get("source_category", ""),
            "source_folder": asset.get("parent_folder", ""),
            "filename": asset.get("filename", ""),
            "media_class": asset.get("media_class", ""),
            "resolution_class": res,
            "width": w,
            "height": h,
            "size_bytes": asset.get("size_bytes", ""),
            "sha256": asset.get("sha256", ""),
            "notes": "",
        }

        if stock:
            row["notes"] = "Stock photo — not original work"
        elif not entity_id:
            row["notes"] = "No entity assignment — unclassified"
        elif entity_id in ("PRJ-LOCAL-0900", "PRJ-LOCAL-0901"):
            row["notes"] = "Archive catch-all"

        results.append(row)

    # Compute case study state per entity
    entity_case_study = {}
    for eid, count in entity_asset_counts.items():
        entity_case_study[eid] = compute_case_study_state(eid, count, False, False)

    print(f"  Total canonical rows: {len(results)}")
    print(f"  Entities with assets: {len(entity_asset_counts)}")

    print("\nEntity type distribution:")
    etype_counts = defaultdict(int)
    for r in results:
        if r["is_canonical_copy"] == "YES":
            etype_counts[r["entity_type"]] += 1
    for et, cnt in sorted(etype_counts.items(), key=lambda x: -x[1]):
        print(f"  {et}: {cnt}")

    print("\nDisplay readiness distribution:")
    dr_counts = defaultdict(int)
    for r in results:
        if r["is_canonical_copy"] == "YES":
            dr_counts[r["display_readiness"]] += 1
    for dr, cnt in sorted(dr_counts.items(), key=lambda x: -x[1]):
        print(f"  {dr}: {cnt}")

    print("\nCase study state distribution:")
    cs_counts = defaultdict(int)
    for eid, cs in entity_case_study.items():
        cs_counts[cs] += 1
    for cs, cnt in sorted(cs_counts.items(), key=lambda x: -x[1]):
        print(f"  {cs}: {cnt}")

    # Write 03A
    output_path = os.path.join(OUTPUT_DIR, "03A_NORMALIZED_MEDIA_ENTITY_REGISTER.csv")
    fieldnames = [
        "asset_id", "entity_id", "entity_type", "entity_display_name", "priority_tier",
        "display_readiness", "publication_status", "quality_tier",
        "is_canonical_copy", "is_stock_photo", "duplicate_group",
        "source_category", "source_folder", "filename",
        "media_class", "resolution_class", "width", "height", "size_bytes", "sha256", "notes",
    ]
    with open(output_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"\nWritten: {output_path} ({len(results)} rows)")

    # Write entity summary as separate file
    summary_path = os.path.join(OUTPUT_DIR, "03A_ENTITY_SUMMARY.csv")
    summary_fields = [
        "entity_id", "entity_display_name", "entity_type", "category",
        "priority_tier", "asset_count", "case_study_state",
    ]
    summary_rows = []
    for eid in sorted(entity_asset_counts.keys()):
        cat = ""
        etype = ""
        for folder_key, (e_id, e_type) in FOLDER_TO_ENTITY.items():
            if e_id == eid:
                etype = e_type
                parts = folder_key.split("/")
                if len(parts) > 1:
                    cat = parts[0]
                else:
                    cat = parts[0]
                break
        summary_rows.append({
            "entity_id": eid,
            "entity_display_name": ENTITY_DISPLAY_NAMES.get(eid, ""),
            "entity_type": etype,
            "category": cat,
            "priority_tier": ENTITY_PRIORITY_TIER.get(eid, "TIER_D"),
            "asset_count": entity_asset_counts[eid],
            "case_study_state": entity_case_study.get(eid, "HOLD"),
        })

    with open(summary_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=summary_fields)
        writer.writeheader()
        writer.writerows(summary_rows)
    print(f"Written: {summary_path} ({len(summary_rows)} entities)")


if __name__ == "__main__":
    main()
