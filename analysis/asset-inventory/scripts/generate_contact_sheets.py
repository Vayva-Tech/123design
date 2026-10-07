#!/usr/bin/env python3
"""Generate contact sheets for Phase 0B.1 asset review."""

import os
import sys
import csv
import json
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

WORKSPACE = Path("/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design")
SOURCE_ROOT = WORKSPACE / "Images & Videos"
CS_DIR = WORKSPACE / "analysis" / "asset-inventory" / "contact-sheets"
DOCS_DIR = WORKSPACE / "docs" / "phase-0b"
MASTER_CSV = DOCS_DIR / "02A_LOCAL_ASSET_MASTER.csv"
THUMB_SIZE = 240
COLS = 5
LABEL_H = 32
PADDING = 8

def sanitize(name):
    return "".join(c if c.isalnum() or c in " -_" else "_" for c in name).strip().replace(" ", "_")

def load_assets():
    assets = []
    with open(MASTER_CSV, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            assets.append(row)
    return assets

def get_folder_groups(assets):
    groups = {}
    for a in assets:
        if a["media_class"] not in ("IMAGE",):
            continue
        rel = a["relative_path"]
        parts = Path(rel).parts
        if len(parts) >= 2:
            cat = parts[0]
            subfolder = parts[1] if len(parts) > 2 else cat
            if len(parts) > 2:
                key = f"{cat}/{subfolder}"
            else:
                key = cat
            if key not in groups:
                groups[key] = []
            groups[key].append(a)
    return groups

def make_contact_sheet(folder_key, assets, output_path):
    if not assets:
        return None

    n = len(assets)
    rows = math.ceil(n / COLS)
    sheet_w = COLS * (THUMB_SIZE + PADDING) + PADDING
    sheet_h = rows * (THUMB_SIZE + LABEL_H + PADDING) + PADDING + 40

    sheet = Image.new("RGB", (sheet_w, sheet_h), (24, 24, 24))
    draw = ImageDraw.Draw(sheet)

    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 11)
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 14)
    except (IOError, OSError):
        font = ImageFont.load_default()
        title_font = font

    draw.text((PADDING, 8), f"{folder_key} ({n} assets)", fill=(255, 255, 255), font=title_font)

    for idx, asset in enumerate(assets):
        col = idx % COLS
        row = idx // COLS
        x = PADDING + col * (THUMB_SIZE + PADDING)
        y = 40 + PADDING + row * (THUMB_SIZE + LABEL_H + PADDING)

        src_path = SOURCE_ROOT / asset["relative_path"]
        try:
            img = Image.open(src_path)
            img.thumbnail((THUMB_SIZE, THUMB_SIZE), Image.LANCZOS)
            if img.mode != "RGB":
                img = img.convert("RGB")
            iw, ih = img.size
            ox = x + (THUMB_SIZE - iw) // 2
            oy = y + (THUMB_SIZE - ih) // 2
            sheet.paste(img, (ox, oy))
        except Exception as e:
            draw.rectangle([x, y, x + THUMB_SIZE, y + THUMB_SIZE], outline=(80, 80, 80))
            draw.text((x + 10, y + THUMB_SIZE // 2), "ERROR", fill=(200, 60, 60), font=font)

        draw.rectangle([x, y + THUMB_SIZE, x + THUMB_SIZE, y + THUMB_SIZE + LABEL_H], fill=(40, 40, 40))
        aid = asset["asset_id"]
        fname = asset["filename_stem"][:28]
        draw.text((x + 4, y + THUMB_SIZE + 4), aid, fill=(120, 200, 120), font=font)
        draw.text((x + 4, y + THUMB_SIZE + 17), fname, fill=(200, 200, 200), font=font)

    sheet.save(output_path, "JPEG", quality=85)
    return output_path

def main():
    CS_DIR.mkdir(parents=True, exist_ok=True)
    print("Loading asset inventory...")
    assets = load_assets()
    groups = get_folder_groups(assets)

    priority_folders = []

    for key, group_assets in sorted(groups.items()):
        if len(group_assets) >= 3:
            priority_folders.append((key, group_assets))

    top_categories = ["MILITARY", "MEDICAL", "TRANSPORTATION", "PROTOTYPING",
                      "ARCHITECTURE", "COMMERCIAL", "SPEC", "VIDEO"]
    for cat in top_categories:
        cat_assets = [a for a in assets if a["source_category"] == cat and a["media_class"] == "IMAGE"]
        if cat_assets and cat not in [k for k, _ in priority_folders]:
            priority_folders.append((cat, cat_assets))

    contact_sheet_index = []
    generated = 0

    for folder_key, folder_assets in priority_folders:
        safe_name = sanitize(folder_key)
        output_file = CS_DIR / f"CS-{safe_name}-001.jpg"

        print(f"  Generating: {folder_key} ({len(folder_assets)} assets)...")
        result = make_contact_sheet(folder_key, folder_assets, output_file)
        if result:
            generated += 1
            asset_ids = [a["asset_id"] for a in folder_assets]
            project_candidate = folder_key.split("/")[-1] if "/" in folder_key else folder_key

            has_phase0a = any(a.get("phase0a_match", "") not in ("", "UNKNOWN", None) for a in folder_assets)

            contact_sheet_index.append({
                "contact_sheet": output_file.name,
                "source_folder": folder_key,
                "asset_count": len(folder_assets),
                "asset_id_range": f"{asset_ids[0]} - {asset_ids[-1]}",
                "review_purpose": "Project review" if len(folder_assets) >= 3 else "Category overview",
                "project_candidate": project_candidate,
                "status": "PENDING_REVIEW"
            })

    index_path = DOCS_DIR / "02H_CONTACT_SHEET_INDEX.md"
    with open(index_path, "w") as f:
        f.write("# CONTACT SHEET INDEX\n\n")
        f.write(f"**Generated:** 2026-09-26\n")
        f.write(f"**Total contact sheets:** {generated}\n\n")
        f.write("| Contact Sheet | Source Folder | Assets | ID Range | Purpose | Project Candidate | Status |\n")
        f.write("|--------------|---------------|--------|----------|---------|------------------|--------|\n")
        for entry in contact_sheet_index:
            f.write(f"| {entry['contact_sheet']} | {entry['source_folder']} | {entry['asset_count']} | {entry['asset_id_range']} | {entry['review_purpose']} | {entry['project_candidate']} | {entry['status']} |\n")

    print(f"\nContact sheets generated: {generated}")
    print(f"Index written: {index_path}")

if __name__ == "__main__":
    main()
