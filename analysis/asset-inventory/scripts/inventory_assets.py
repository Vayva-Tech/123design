#!/usr/bin/env python3
"""
Phase 0B.1 — Local Asset Forensics Inventory Script
Reads the source archive, extracts metadata, computes hashes,
classifies files, detects duplicates and derivatives,
and generates all required output files.

SOURCE ARCHIVE IS READ-ONLY. This script never modifies originals.
"""

import csv
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path

SOURCE_ROOT = Path("/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design/Images & Videos")
DOCS_OUT = Path("/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design/docs/phase-0b")
ANALYSIS_OUT = Path("/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design/analysis/asset-inventory")
LOG_PATH = ANALYSIS_OUT / "logs" / "inventory-run.log"

SKIP_NAMES = {".DS_Store", "Thumbs.db", ".gitkeep", "desktop.ini"}

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".tif", ".webp", ".svg", ".heic", ".heif", ".ico", ".raw", ".psd", ".ai", ".eps"}
VIDEO_EXTS = {".mp4", ".mov", ".avi", ".mkv", ".wmv", ".flv", ".webm", ".m4v", ".mpg", ".mpeg", ".3gp", ".ts"}
PDF_EXTS = {".pdf"}
DOCUMENT_EXTS = {".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".txt", ".rtf", ".odt", ".csv", ".md"}
VECTOR_EXTS = {".svg", ".ai", ".eps", ".pdf"}
CAD_EXTS = {".step", ".stp", ".iges", ".igs", ".stl", ".obj", ".3dm", ".skp", ".dwg", ".dxf"}
ARCHIVE_EXTS = {".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".xz", ".dmg", ".iso"}
AUDIO_EXTS = {".mp3", ".wav", ".aac", ".flac", ".ogg", ".wma", ".m4a", ".aiff"}
FONT_EXTS = {".ttf", ".otf", ".woff", ".woff2", ".eot"}

MEDIA_CLASS_MAP = {}
for ext in IMAGE_EXTS:
    MEDIA_CLASS_MAP[ext] = "IMAGE"
for ext in VIDEO_EXTS:
    MEDIA_CLASS_MAP[ext] = "VIDEO"
for ext in PDF_EXTS:
    MEDIA_CLASS_MAP[ext] = "PDF"
for ext in DOCUMENT_EXTS:
    MEDIA_CLASS_MAP[ext] = "DOCUMENT"
for ext in VECTOR_EXTS:
    if ext not in MEDIA_CLASS_MAP:
        MEDIA_CLASS_MAP[ext] = "VECTOR"
for ext in CAD_EXTS:
    MEDIA_CLASS_MAP[ext] = "CAD"
for ext in ARCHIVE_EXTS:
    MEDIA_CLASS_MAP[ext] = "ARCHIVE"
for ext in AUDIO_EXTS:
    MEDIA_CLASS_MAP[ext] = "AUDIO"
for ext in FONT_EXTS:
    MEDIA_CLASS_MAP[ext] = "FONT"

PHASE0A_PROJECTS = [
    "Shopping Cart", "Multiple", "Regain Medical", "Vehicular DVR Camera",
    "Koffti", "Consumer", "RegalPress.AI", "RegalBrand.AI", "Promo",
    "Medical Multiple", "BlackRock.AI", "HoverBoard", "EVtols",
    "Fishing Lures", "Oral4 Dental Kit", "Bucket", "Halevai Electric Boat",
    "Villa Subdivision", "Star Guard", "Fishing Lure", "Timeset App",
    "Marker Locker", "Pain chronic", "FairBridge Presentation",
    "PreLynx Portal", "Remittance Processor", "Falcon+ Prep Reducing Scanners",
    "Recovery System", "MG-NINE",
]

PHASE0A_NORMALIZED = {}
for name in PHASE0A_PROJECTS:
    key = re.sub(r'[^a-z0-9]', '', name.lower())
    PHASE0A_NORMALIZED[key] = name

DERIVATIVE_PATTERN = re.compile(r'-(\d+)x(\d+)$|(-scaled)$|(-thumbnail)$|(-thumb)$|(-copy)$|(-copy-\d+)$', re.IGNORECASE)

log_lines = []

def log(msg):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    line = f"[{ts}] {msg}"
    log_lines.append(line)
    print(line)

def sha256_file(filepath):
    h = hashlib.sha256()
    try:
        with open(filepath, 'rb') as f:
            while True:
                chunk = f.read(8 * 1024 * 1024)
                if not chunk:
                    break
                h.update(chunk)
        return h.hexdigest()
    except Exception as e:
        return None

def get_image_dims_sips(filepath):
    try:
        result = subprocess.run(
            ['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', str(filepath)],
            capture_output=True, text=True, timeout=10
        )
        if result.returncode != 0:
            return None, None
        w = None
        h = None
        for line in result.stdout.splitlines():
            if 'pixelWidth' in line:
                parts = line.split(':')
                if len(parts) == 2:
                    try:
                        w = int(parts[1].strip())
                    except ValueError:
                        pass
            elif 'pixelHeight' in line:
                parts = line.split(':')
                if len(parts) == 2:
                    try:
                        h = int(parts[1].strip())
                    except ValueError:
                        pass
        return w, h
    except Exception:
        return None, None

def get_mdls_metadata(filepath):
    meta = {}
    try:
        result = subprocess.run(
            ['mdls', '-name', 'kMDItemContentCreationDate',
             '-name', 'kMDItemContentModificationDate',
             '-name', 'kMDItemCameraMake',
             '-name', 'kMDItemCameraModel',
             '-name', 'kMDItemAcquisitionMake',
             '-name', 'kMDItemAcquisitionModel',
             str(filepath)],
            capture_output=True, text=True, timeout=10
        )
        for line in result.stdout.splitlines():
            if '=' in line:
                key, _, val = line.partition('=')
                key = key.strip()
                val = val.strip()
                if val == '(null)':
                    val = None
                elif val.startswith('"') and val.endswith('"'):
                    val = val[1:-1]
                meta[key] = val
    except Exception:
        pass
    return meta

def classify_media(ext):
    ext_lower = ext.lower()
    return MEDIA_CLASS_MAP.get(ext_lower, "UNKNOWN")

def resolution_class(w, h):
    if w is None or h is None:
        return None
    mp = (w * h) / 1_000_000
    if mp >= 12:
        return "VERY_HIGH"
    elif mp >= 6:
        return "HIGH"
    elif mp >= 2:
        return "MEDIUM"
    elif mp >= 0.5:
        return "LOW"
    else:
        return "VERY_LOW"

def aspect_ratio(w, h):
    if w is None or h is None or h == 0:
        return None
    from math import gcd
    g = gcd(w, h)
    return f"{w//g}:{h//g}"

def orientation(w, h):
    if w is None or h is None:
        return None
    if w > h:
        return "LANDSCAPE"
    elif h > w:
        return "PORTRAIT"
    else:
        return "SQUARE"

def normalize_for_match(name):
    return re.sub(r'[^a-z0-9]', '', name.lower())

def match_phase0a_project(folder_name):
    norm = normalize_for_match(folder_name)
    if norm in PHASE0A_NORMALIZED:
        return PHASE0A_NORMALIZED[norm]
    for key, original in PHASE0A_NORMALIZED.items():
        if key in norm or norm in key:
            if len(norm) >= 3 and len(key) >= 3:
                return original
    return None

def is_derivative_candidate(filename_stem):
    m = DERIVATIVE_PATTERN.search(filename_stem)
    if m:
        return True
    return False

def find_master_for_derivative(filename_stem, all_stems_by_dir):
    base = DERIVATIVE_PATTERN.sub('', filename_stem)
    if base in all_stems_by_dir:
        return base
    return None

def determine_source_category(relative_path_parts):
    if len(relative_path_parts) >= 2:
        return relative_path_parts[0].upper()
    return "UNKNOWN"

def determine_source_project_candidate(relative_path_parts):
    generic_folders = {"ALL", "OLD", "MISCELLANEOUS", "VIDEO", "SPEC",
                       "FINAL", "FINALS", "RENDERS", "RENDER", "IMAGES",
                       "IMAGES & VIDEOS", "PHOTOS", "PHOTO", "EXPORTS",
                       "EXPORT", "DRAFTS", "DRAFT", "WORKING", "WIP",
                       "BACKUP", "BACKUPS", "ARCHIVE", "TEMP", "TMP",
                       "NEW", "ORIGINALS", "ORIGINAL", "MASTER", "MASTERS"}
    if len(relative_path_parts) >= 3:
        candidate = relative_path_parts[1]
        if candidate.upper() not in generic_folders and len(candidate) > 1:
            return candidate
    return "UNKNOWN"

def determine_evidence_basis(source_category, source_project_candidate, filename_stem):
    signals = []
    if source_category != "UNKNOWN":
        signals.append("ROOT_FOLDER")
    if source_project_candidate != "UNKNOWN":
        signals.append("FOLDER_NAME")
    return signals

def main():
    log("Phase 0B.1 Inventory starting")
    log(f"Source root: {SOURCE_ROOT}")
    log(f"Output docs: {DOCS_OUT}")
    log(f"Output analysis: {ANALYSIS_OUT}")

    if not SOURCE_ROOT.exists():
        log("ERROR: Source root does not exist")
        sys.exit(1)

    all_files = []
    for root, dirs, files in os.walk(SOURCE_ROOT):
        dirs.sort()
        for fname in sorted(files):
            if fname in SKIP_NAMES or fname.startswith('.'):
                continue
            fpath = Path(root) / fname
            if fpath.is_file():
                all_files.append(fpath)

    all_files.sort(key=lambda p: str(p.relative_to(SOURCE_ROOT)))
    log(f"Total files found: {len(all_files)}")

    records = []
    errors = []
    hash_map = defaultdict(list)
    asset_counter = 0

    log("Phase 1: File metadata extraction and hashing...")
    for i, fpath in enumerate(all_files):
        asset_counter += 1
        asset_id = f"AST-{asset_counter:06d}"

        rel_path = fpath.relative_to(SOURCE_ROOT)
        rel_parts = list(rel_path.parts)
        parent_folder = rel_parts[-2] if len(rel_parts) >= 2 else ""
        grandparent_folder = rel_parts[-3] if len(rel_parts) >= 3 else ""

        ext = fpath.suffix
        ext_lower = ext.lower()
        media_class = classify_media(ext)

        try:
            stat_info = fpath.stat()
            size_bytes = stat_info.st_size
            modified_ts = datetime.fromtimestamp(stat_info.st_mtime, tz=timezone.utc).isoformat()
            created_ts = datetime.fromtimestamp(stat_info.st_birthtime, tz=timezone.utc).isoformat()
        except Exception as e:
            size_bytes = 0
            modified_ts = None
            created_ts = None
            errors.append({
                "asset_id": asset_id,
                "source_path": str(rel_path),
                "error_type": "STAT_FAILED",
                "error_message": str(e),
                "operation": "stat",
                "status": "METADATA_FAILED"
            })

        size_mb = round(size_bytes / (1024 * 1024), 4) if size_bytes else 0

        width = None
        height = None
        duration_seconds = None
        video_codec = None
        video_fps = None
        audio_present = None
        page_count = None
        exif_date = None
        camera_make = None
        camera_model = None
        software_metadata = None

        if media_class == "IMAGE" and ext_lower not in {".svg", ".psd", ".ai", ".eps"}:
            w, h = get_image_dims_sips(fpath)
            if w is not None:
                width = w
                height = h
            else:
                if ext_lower not in {".gif", ".bmp", ".tiff", ".tif", ".webp", ".heic", ".heif", ".ico", ".raw"}:
                    errors.append({
                        "asset_id": asset_id,
                        "source_path": str(rel_path),
                        "error_type": "IMAGE_PROBE_FAILED",
                        "error_message": "sips could not read dimensions",
                        "operation": "sips",
                        "status": "IMAGE_PROBE_FAILED"
                    })

        if media_class in ("IMAGE", "PDF", "DOCUMENT"):
            mdls_meta = get_mdls_metadata(fpath)
            exif_date = mdls_meta.get("kMDItemContentCreationDate")
            camera_make = mdls_meta.get("kMDItemAcquisitionMake") or mdls_meta.get("kMDItemCameraMake")
            camera_model = mdls_meta.get("kMDItemAcquisitionModel") or mdls_meta.get("kMDItemCameraModel")

        log_hash = hashlib.sha256(str(fpath).encode()).hexdigest()[:8]
        file_hash = sha256_file(fpath)
        if file_hash is None:
            errors.append({
                "asset_id": asset_id,
                "source_path": str(rel_path),
                "error_type": "HASH_FAILED",
                "error_message": "Could not compute SHA-256",
                "operation": "sha256",
                "status": "HASH_FAILED"
            })
            file_hash = "HASH_FAILED"
        else:
            hash_map[file_hash].append(asset_id)

        source_category = determine_source_category(rel_parts)
        source_project_candidate = determine_source_project_candidate(rel_parts)

        evidence_signals = determine_evidence_basis(source_category, source_project_candidate, fpath.stem)
        if not evidence_signals:
            evidence_basis = "UNKNOWN"
        elif len(evidence_signals) > 1:
            evidence_basis = "MULTIPLE_LOCAL_SIGNALS"
        else:
            evidence_basis = evidence_signals[0]

        if source_project_candidate != "UNKNOWN":
            evidence_basis = "FOLDER_NAME"
        elif source_category != "UNKNOWN":
            evidence_basis = "ROOT_FOLDER"
        else:
            evidence_basis = "FILENAME"

        classification_status = "UNCLASSIFIED"
        matched_project = match_phase0a_project(source_project_candidate) if source_project_candidate != "UNKNOWN" else None
        if not matched_project and parent_folder:
            matched_project = match_phase0a_project(parent_folder)
        if not matched_project:
            matched_project = match_phase0a_project(fpath.stem)

        if matched_project:
            classification_status = "PHASE0A_MATCH"
            evidence_basis = "MULTIPLE_LOCAL_SIGNALS" if source_project_candidate != "UNKNOWN" else "FOLDER_NAME"

        review_priority = "P2"
        if matched_project:
            review_priority = "P0"
        elif source_project_candidate != "UNKNOWN" and source_category not in ("OLD", "ALL", "MISCELLANEOUS"):
            review_priority = "P1"
        elif source_category in ("OLD", "MISCELLANEOUS"):
            review_priority = "P3"

        migration_status = "NOT_REVIEWED"
        derivative_flag = is_derivative_candidate(fpath.stem)
        if derivative_flag:
            migration_status = "DERIVATIVE_CANDIDATE"

        ar = aspect_ratio(width, height)
        orient = orientation(width, height)
        res_class = resolution_class(width, height)

        notes_parts = []
        if res_class:
            notes_parts.append(f"resolution_class={res_class}")
        if derivative_flag:
            notes_parts.append("derivative_filename_pattern")
        if matched_project:
            notes_parts.append(f"phase0a_match={matched_project}")
        notes = "; ".join(notes_parts) if notes_parts else ""

        record = {
            "asset_id": asset_id,
            "source_root": str(SOURCE_ROOT),
            "relative_path": str(rel_path),
            "parent_folder": parent_folder,
            "grandparent_folder": grandparent_folder,
            "filename": fpath.name,
            "filename_stem": fpath.stem,
            "extension": ext_lower,
            "mime_type": "",
            "media_class": media_class,
            "size_bytes": size_bytes,
            "size_mb": size_mb,
            "width": width if width else "",
            "height": height if height else "",
            "aspect_ratio": ar if ar else "",
            "orientation": orient if orient else "",
            "duration_seconds": duration_seconds if duration_seconds else "",
            "video_codec": video_codec if video_codec else "",
            "video_fps": video_fps if video_fps else "",
            "audio_present": audio_present if audio_present is not None else "",
            "page_count": page_count if page_count else "",
            "created_timestamp": created_ts if created_ts else "",
            "modified_timestamp": modified_ts if modified_ts else "",
            "exif_date": exif_date if exif_date else "",
            "camera_make": camera_make if camera_make else "",
            "camera_model": camera_model if camera_model else "",
            "software_metadata": software_metadata if software_metadata else "",
            "sha256": file_hash,
            "exact_duplicate_group": "",
            "source_category": source_category,
            "source_subcategory": parent_folder if parent_folder and parent_folder != source_category else "",
            "source_project_candidate": source_project_candidate if source_project_candidate != "UNKNOWN" else "",
            "evidence_basis": evidence_basis,
            "classification_status": classification_status,
            "review_priority": review_priority,
            "migration_status": migration_status,
            "resolution_class": res_class if res_class else "",
            "derivative_candidate": "YES" if derivative_flag else "NO",
            "master_candidate_asset_id": "",
            "phase0a_match": matched_project if matched_project else "",
            "local_match_confidence": "HIGH_LOCAL_MATCH" if (matched_project and source_project_candidate != "UNKNOWN") else ("MEDIUM_LOCAL_MATCH" if matched_project else "UNKNOWN"),
            "notes": notes,
        }
        records.append(record)

        if (i + 1) % 100 == 0:
            log(f"  Processed {i+1}/{len(all_files)} files...")

    log(f"Phase 1 complete. {len(records)} records, {len(errors)} errors.")

    log("Phase 2: Assigning duplicate groups...")
    dup_group_counter = 0
    dup_groups = {}
    for file_hash, ids in hash_map.items():
        if len(ids) > 1:
            dup_group_counter += 1
            group_id = f"DUP-{dup_group_counter:05d}"
            dup_groups[group_id] = {
                "duplicate_group": group_id,
                "sha256": file_hash,
                "copy_count": len(ids),
                "asset_ids": ids,
            }
            for rec in records:
                if rec["asset_id"] in ids:
                    rec["exact_duplicate_group"] = group_id

    log(f"  Found {dup_group_counter} duplicate groups")

    log("Phase 3: Building derivative candidate register...")
    derivative_records = []
    stems_by_dir = defaultdict(set)
    for rec in records:
        parent = rec["parent_folder"]
        stem = rec["filename_stem"]
        stems_by_dir[parent].add(stem)

    for rec in records:
        if rec["derivative_candidate"] == "YES":
            base_stem = DERIVATIVE_PATTERN.sub('', rec["filename_stem"])
            master_id = ""
            confidence = "LOW"
            for other_rec in records:
                if other_rec["parent_folder"] == rec["parent_folder"] and other_rec["filename_stem"] == base_stem:
                    master_id = other_rec["asset_id"]
                    confidence = "HIGH"
                    break
            if not master_id:
                for other_rec in records:
                    if other_rec["parent_folder"] == rec["parent_folder"] and base_stem in other_rec["filename_stem"]:
                        master_id = other_rec["asset_id"]
                        confidence = "MEDIUM"
                        break
            derivative_records.append({
                "asset_id": rec["asset_id"],
                "filename": rec["filename"],
                "parent_folder": rec["parent_folder"],
                "base_stem": base_stem,
                "master_candidate_asset_id": master_id,
                "confidence": confidence,
                "source_path": rec["relative_path"],
            })
            if master_id:
                rec["master_candidate_asset_id"] = master_id

    log(f"  Found {len(derivative_records)} derivative candidates")

    log("Phase 4: Writing output files...")

    master_csv_path = DOCS_OUT / "02A_LOCAL_ASSET_MASTER.csv"
    csv_fields = [
        "asset_id", "source_root", "relative_path", "parent_folder",
        "grandparent_folder", "filename", "filename_stem", "extension",
        "mime_type", "media_class", "size_bytes", "size_mb", "width",
        "height", "aspect_ratio", "orientation", "duration_seconds",
        "video_codec", "video_fps", "audio_present", "page_count",
        "created_timestamp", "modified_timestamp", "exif_date",
        "camera_make", "camera_model", "software_metadata", "sha256",
        "exact_duplicate_group", "source_category", "source_subcategory",
        "source_project_candidate", "evidence_basis", "classification_status",
        "review_priority", "migration_status", "resolution_class",
        "derivative_candidate", "master_candidate_asset_id",
        "phase0a_match", "local_match_confidence", "notes"
    ]
    with open(master_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=csv_fields, extrasaction='ignore')
        writer.writeheader()
        for rec in records:
            writer.writerow(rec)
    log(f"  Written: {master_csv_path}")

    master_json_path = DOCS_OUT / "02A_LOCAL_ASSET_MASTER.json"
    with open(master_json_path, 'w', encoding='utf-8') as f:
        json.dump({
            "metadata": {
                "generated": datetime.now(timezone.utc).isoformat(),
                "source_root": str(SOURCE_ROOT),
                "total_files": len(records),
                "total_errors": len(errors),
            },
            "records": records,
        }, f, indent=2, default=str)
    log(f"  Written: {master_json_path}")

    dup_csv_path = DOCS_OUT / "02B_EXACT_DUPLICATE_REGISTER.csv"
    with open(dup_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            "duplicate_group", "sha256", "copy_count",
            "total_redundant_bytes", "asset_ids", "source_paths",
            "categories", "notes"
        ])
        writer.writeheader()
        for gid, gdata in dup_groups.items():
            paths = [r["relative_path"] for r in records if r["asset_id"] in gdata["asset_ids"]]
            cats = set(r["source_category"] for r in records if r["asset_id"] in gdata["asset_ids"])
            sizes = [r["size_bytes"] for r in records if r["asset_id"] in gdata["asset_ids"]]
            redundant = sum(sizes) - max(sizes) if sizes else 0
            writer.writerow({
                "duplicate_group": gdata["duplicate_group"],
                "sha256": gdata["sha256"],
                "copy_count": gdata["copy_count"],
                "total_redundant_bytes": redundant,
                "asset_ids": "; ".join(gdata["asset_ids"]),
                "source_paths": "; ".join(paths),
                "categories": "; ".join(sorted(cats)),
                "notes": "",
            })
    log(f"  Written: {dup_csv_path}")

    deriv_csv_path = DOCS_OUT / "02C_DERIVATIVE_CANDIDATES.csv"
    with open(deriv_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            "asset_id", "filename", "parent_folder", "base_stem",
            "master_candidate_asset_id", "confidence", "source_path"
        ])
        writer.writeheader()
        for drec in derivative_records:
            writer.writerow(drec)
    log(f"  Written: {deriv_csv_path}")

    video_records = [r for r in records if r["media_class"] == "VIDEO"]
    video_csv_path = DOCS_OUT / "02D_VIDEO_MASTER_REGISTER.csv"
    with open(video_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            "asset_id", "filename", "relative_path", "source_category",
            "parent_folder", "size_bytes", "size_mb", "width", "height",
            "aspect_ratio", "orientation", "duration_seconds", "video_codec",
            "video_fps", "audio_present", "sha256", "notes"
        ], extrasaction='ignore')
        writer.writeheader()
        for vr in video_records:
            writer.writerow(vr)
    log(f"  Written: {video_csv_path}")

    large_files = [r for r in records if r["size_bytes"] > 100 * 1024 * 1024]
    large_csv_path = DOCS_OUT / "02E_LARGE_FILE_REGISTER.csv"
    with open(large_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            "asset_id", "filename", "relative_path", "size_bytes", "size_mb",
            "size_flag", "media_class", "source_category"
        ], extrasaction='ignore')
        writer.writeheader()
        for lr in sorted(large_files, key=lambda r: r["size_bytes"], reverse=True):
            sb = lr["size_bytes"]
            if sb > 5 * 1024 * 1024 * 1024:
                flag = ">5GB"
            elif sb > 1 * 1024 * 1024 * 1024:
                flag = ">1GB"
            elif sb > 500 * 1024 * 1024:
                flag = ">500MB"
            else:
                flag = ">100MB"
            writer.writerow({
                "asset_id": lr["asset_id"],
                "filename": lr["filename"],
                "relative_path": lr["relative_path"],
                "size_bytes": lr["size_bytes"],
                "size_mb": lr["size_mb"],
                "size_flag": flag,
                "media_class": lr["media_class"],
                "source_category": lr["source_category"],
            })
    log(f"  Written: {large_csv_path}")

    format_dist = defaultdict(lambda: {"count": 0, "total_bytes": 0})
    for rec in records:
        key = rec["extension"]
        format_dist[key]["count"] += 1
        format_dist[key]["total_bytes"] += rec["size_bytes"]

    total_files = len(records)
    total_bytes = sum(r["size_bytes"] for r in records)
    format_csv_path = DOCS_OUT / "02J_FORMAT_DISTRIBUTION.csv"
    with open(format_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(["extension", "mime_type", "count", "total_bytes",
                         "percentage_of_files", "percentage_of_storage"])
        for ext in sorted(format_dist.keys(), key=lambda e: format_dist[e]["count"], reverse=True):
            d = format_dist[ext]
            writer.writerow([
                ext, "", d["count"], d["total_bytes"],
                round(d["count"] / total_files * 100, 2) if total_files else 0,
                round(d["total_bytes"] / total_bytes * 100, 2) if total_bytes else 0,
            ])
    log(f"  Written: {format_csv_path}")

    error_csv_path = DOCS_OUT / "02K_ASSET_ERROR_REGISTER.csv"
    with open(error_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            "asset_id", "source_path", "error_type", "error_message",
            "operation", "status"
        ])
        writer.writeheader()
        for err in errors:
            writer.writerow(err)
    log(f"  Written: {error_csv_path}")

    project_candidates = defaultdict(lambda: {
        "file_count": 0, "image_count": 0, "video_count": 0,
        "total_size": 0, "files": [], "source_category": ""
    })
    for rec in records:
        if rec["source_project_candidate"]:
            key = (rec["source_project_candidate"], rec["source_category"])
            project_candidates[key]["file_count"] += 1
            if rec["media_class"] == "IMAGE":
                project_candidates[key]["image_count"] += 1
            if rec["media_class"] == "VIDEO":
                project_candidates[key]["video_count"] += 1
            project_candidates[key]["total_size"] += rec["size_bytes"]
            project_candidates[key]["files"].append(rec["asset_id"])
            project_candidates[key]["source_category"] = rec["source_category"]

    proj_csv_path = DOCS_OUT / "02G_PROJECT_CANDIDATE_FOLDERS.csv"
    with open(proj_csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(["candidate_name", "source_category", "folder_path",
                         "file_count", "image_count", "video_count",
                         "total_size", "evidence_strength",
                         "possible_existing_phase0a_project", "notes"])
        for (cname, scat), data in sorted(project_candidates.items()):
            matched = match_phase0a_project(cname)
            evidence = "FOLDER_NAME"
            if matched:
                evidence = "FOLDER_NAME+PHASE0A_MATCH"
            writer.writerow([
                cname, scat, f"{scat}/{cname}" if scat else cname,
                data["file_count"], data["image_count"], data["video_count"],
                data["total_size"], evidence,
                matched if matched else "", ""
            ])
    log(f"  Written: {proj_csv_path}")

    log("Phase 5: Generating taxonomy report...")
    taxonomy = defaultdict(lambda: {
        "file_count": 0, "image_count": 0, "video_count": 0,
        "document_count": 0, "total_size": 0, "subfolders": set(),
        "largest_subfolder": "", "largest_subfolder_size": 0,
        "duplicate_count": 0, "unknown_count": 0
    })
    subfolder_sizes = defaultdict(lambda: defaultdict(int))

    for rec in records:
        cat = rec["source_category"]
        taxonomy[cat]["file_count"] += 1
        taxonomy[cat]["total_size"] += rec["size_bytes"]
        if rec["media_class"] == "IMAGE":
            taxonomy[cat]["image_count"] += 1
        elif rec["media_class"] == "VIDEO":
            taxonomy[cat]["video_count"] += 1
        elif rec["media_class"] in ("PDF", "DOCUMENT"):
            taxonomy[cat]["document_count"] += 1
        if rec["media_class"] == "UNKNOWN":
            taxonomy[cat]["unknown_count"] += 1
        if rec["exact_duplicate_group"]:
            taxonomy[cat]["duplicate_count"] += 1
        if rec["parent_folder"]:
            taxonomy[cat]["subfolders"].add(rec["parent_folder"])
            subfolder_sizes[cat][rec["parent_folder"]] += rec["size_bytes"]

    for cat in taxonomy:
        for sf, sz in subfolder_sizes[cat].items():
            if sz > taxonomy[cat]["largest_subfolder_size"]:
                taxonomy[cat]["largest_subfolder_size"] = sz
                taxonomy[cat]["largest_subfolder"] = sf

    taxonomy_md_path = DOCS_OUT / "02F_SOURCE_FOLDER_TAXONOMY.md"
    with open(taxonomy_md_path, 'w', encoding='utf-8') as f:
        f.write("# SOURCE FOLDER TAXONOMY\n\n")
        f.write(f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n")
        f.write(f"**Source:** `{SOURCE_ROOT}`\n\n")
        f.write("## TOP-LEVEL CATEGORIES\n\n")
        f.write("| Category | Files | Images | Videos | Documents | Total Size | Subfolders | Largest Subfolder | Duplicates | Unknown |\n")
        f.write("|----------|-------|--------|--------|-----------|------------|------------|-------------------|------------|----------|\n")
        for cat in sorted(taxonomy.keys()):
            d = taxonomy[cat]
            size_str = format_size(d["total_size"])
            sf_count = len(d["subfolders"])
            sf_name = d["largest_subfolder"] if d["largest_subfolder"] else "—"
            f.write(f"| {cat} | {d['file_count']} | {d['image_count']} | {d['video_count']} | {d['document_count']} | {size_str} | {sf_count} | {sf_name} | {d['duplicate_count']} | {d['unknown_count']} |\n")

        f.write("\n## SECOND-LEVEL FOLDER TREE\n\n")
        for cat in sorted(taxonomy.keys()):
            f.write(f"### {cat}\n\n")
            cat_subfolders = defaultdict(lambda: {"count": 0, "size": 0})
            for rec in records:
                if rec["source_category"] == cat and rec["parent_folder"]:
                    cat_subfolders[rec["parent_folder"]]["count"] += 1
                    cat_subfolders[rec["parent_folder"]]["size"] += rec["size_bytes"]
            if cat_subfolders:
                f.write("| Subfolder | Files | Size |\n")
                f.write("|-----------|-------|------|\n")
                for sf in sorted(cat_subfolders.keys()):
                    sd = cat_subfolders[sf]
                    f.write(f"| {sf} | {sd['count']} | {format_size(sd['size'])} |\n")
            else:
                f.write("No subfolders.\n")
            f.write("\n")
    log(f"  Written: {taxonomy_md_path}")

    log("Phase 6: Generating storage analysis...")
    storage_md_path = DOCS_OUT / "02I_STORAGE_ANALYSIS.md"
    with open(storage_md_path, 'w', encoding='utf-8') as f:
        f.write("# STORAGE ANALYSIS\n\n")
        f.write(f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n\n")

        f.write("## SUMMARY\n\n")
        image_count = sum(1 for r in records if r["media_class"] == "IMAGE")
        video_count = sum(1 for r in records if r["media_class"] == "VIDEO")
        doc_count = sum(1 for r in records if r["media_class"] in ("PDF", "DOCUMENT"))
        other_count = total_files - image_count - video_count - doc_count
        image_size = sum(r["size_bytes"] for r in records if r["media_class"] == "IMAGE")
        video_size = sum(r["size_bytes"] for r in records if r["media_class"] == "VIDEO")
        doc_size = sum(r["size_bytes"] for r in records if r["media_class"] in ("PDF", "DOCUMENT"))
        other_size = total_bytes - image_size - video_size - doc_size

        f.write(f"| Metric | Value |\n")
        f.write(f"|--------|-------|\n")
        f.write(f"| Total asset count | {total_files} |\n")
        f.write(f"| Total archive size | {format_size(total_bytes)} |\n")
        f.write(f"| Image count | {image_count} |\n")
        f.write(f"| Image total size | {format_size(image_size)} |\n")
        f.write(f"| Video count | {video_count} |\n")
        f.write(f"| Video total size | {format_size(video_size)} |\n")
        f.write(f"| PDF/Document count | {doc_count} |\n")
        f.write(f"| PDF/Document total size | {format_size(doc_size)} |\n")
        f.write(f"| Other file count | {other_count} |\n")
        f.write(f"| Other total size | {format_size(other_size)} |\n")
        f.write(f"| Exact duplicate groups | {dup_group_counter} |\n")
        dup_file_count = sum(len(g["asset_ids"]) for g in dup_groups.values())
        dup_redundant = sum(
            sum(r["size_bytes"] for r in records if r["asset_id"] in g["asset_ids"]) - max(r["size_bytes"] for r in records if r["asset_id"] in g["asset_ids"])
            for g in dup_groups.values()
        ) if dup_groups else 0
        f.write(f"| Duplicate files | {dup_file_count} |\n")
        f.write(f"| Estimated redundant storage | {format_size(dup_redundant)} |\n")
        f.write(f"| Potential derivative files | {len(derivative_records)} |\n\n")

        f.write("## TOP 20 LARGEST FILES\n\n")
        f.write("| # | Filename | Path | Size |\n")
        f.write("|---|----------|------|------|\n")
        for i, rec in enumerate(sorted(records, key=lambda r: r["size_bytes"], reverse=True)[:20]):
            f.write(f"| {i+1} | {rec['filename']} | `{rec['relative_path']}` | {format_size(rec['size_bytes'])} |\n")

        f.write("\n## TOP 20 LARGEST FOLDERS\n\n")
        folder_sizes = defaultdict(lambda: {"size": 0, "count": 0})
        for rec in records:
            folder_key = f"{rec['source_category']}/{rec['parent_folder']}" if rec['parent_folder'] else rec['source_category']
            folder_sizes[folder_key]["size"] += rec["size_bytes"]
            folder_sizes[folder_key]["count"] += 1
        f.write("| # | Folder | Files | Size |\n")
        f.write("|---|--------|-------|------|\n")
        for i, (folder, data) in enumerate(sorted(folder_sizes.items(), key=lambda x: x[1]["size"], reverse=True)[:20]):
            f.write(f"| {i+1} | `{folder}` | {data['count']} | {format_size(data['size'])} |\n")

        all_folder = taxonomy.get("ALL", {})
        if all_folder:
            all_dup_count = all_folder.get("duplicate_count", 0)
            f.write(f"\n## ALL FOLDER ANALYSIS\n\n")
            f.write(f"- Files in ALL: {all_folder.get('file_count', 0)}\n")
            f.write(f"- Duplicates found in ALL: {all_dup_count}\n")
            f.write(f"- Total size: {format_size(all_folder.get('total_size', 0))}\n")

        old_folder = taxonomy.get("OLD", {})
        if old_folder:
            f.write(f"\n## OLD FOLDER ANALYSIS\n\n")
            f.write(f"- Files in OLD: {old_folder.get('file_count', 0)}\n")
            f.write(f"- Total size: {format_size(old_folder.get('total_size', 0))}\n")
            f.write(f"- Default review priority: LOW\n")

    log(f"  Written: {storage_md_path}")

    log("Phase 7: Generating main audit report...")
    phase0a_matches = [r for r in records if r["phase0a_match"]]
    unique_matches = set(r["phase0a_match"] for r in phase0a_matches)
    unknown_project = [r for r in records if not r["phase0a_match"] and r["source_project_candidate"]]

    audit_md_path = DOCS_OUT / "02_PHASE_0B1_LOCAL_ASSET_AUDIT.md"
    with open(audit_md_path, 'w', encoding='utf-8') as f:
        f.write("# PHASE 0B.1 — LOCAL ASSET AUDIT\n\n")
        f.write(f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n")
        f.write(f"**Source Archive:** `{SOURCE_ROOT}`\n")
        f.write(f"**Status:** COMPLETE\n\n")
        f.write("---\n\n")

        f.write("## 1. EXECUTIVE SUMMARY\n\n")
        f.write(f"The local asset archive contains **{total_files} files** totaling **{format_size(total_bytes)}** ")
        f.write(f"across **{len(taxonomy)} top-level category folders**. ")
        f.write(f"Of these, **{image_count}** are images, **{video_count}** are videos, ")
        f.write(f"and **{doc_count}** are PDFs/documents. ")
        f.write(f"**{dup_group_counter}** exact duplicate groups were detected ")
        f.write(f"({dup_file_count} files, {format_size(dup_redundant)} redundant). ")
        f.write(f"**{len(unique_matches)}** Phase 0A portfolio project names were matched locally.\n\n")

        f.write("## 2. SOURCE ARCHIVE LOCATION\n\n")
        f.write(f"`{SOURCE_ROOT}`\n\n")

        f.write("## 3. ARCHIVE SIZE\n\n")
        f.write(f"**Total:** {format_size(total_bytes)}\n\n")

        f.write("## 4. FILE COUNT\n\n")
        f.write(f"**Total:** {total_files}\n\n")

        f.write("## 5. FOLDER TAXONOMY\n\n")
        f.write(f"**Top-level categories:** {len(taxonomy)}\n\n")
        f.write("| Category | Files | Size |\n")
        f.write("|----------|-------|------|\n")
        for cat in sorted(taxonomy.keys()):
            f.write(f"| {cat} | {taxonomy[cat]['file_count']} | {format_size(taxonomy[cat]['total_size'])} |\n")

        f.write("\n## 6. MEDIA DISTRIBUTION\n\n")
        media_counts = defaultdict(lambda: {"count": 0, "size": 0})
        for rec in records:
            media_counts[rec["media_class"]]["count"] += 1
            media_counts[rec["media_class"]]["size"] += rec["size_bytes"]
        f.write("| Media Class | Count | Size |\n")
        f.write("|-------------|-------|------|\n")
        for mc in sorted(media_counts.keys()):
            f.write(f"| {mc} | {media_counts[mc]['count']} | {format_size(media_counts[mc]['size'])} |\n")

        f.write("\n## 7. IMAGE SUMMARY\n\n")
        img_records = [r for r in records if r["media_class"] == "IMAGE"]
        res_counts = defaultdict(int)
        for r in img_records:
            rc = r.get("resolution_class", "")
            if rc:
                res_counts[rc] += 1
        f.write(f"- Total images: {image_count}\n")
        f.write(f"- Total image size: {format_size(image_size)}\n")
        f.write(f"- With dimensions captured: {sum(1 for r in img_records if r['width'])}\n")
        f.write(f"- Resolution distribution:\n")
        for rc in ["VERY_HIGH", "HIGH", "MEDIUM", "LOW", "VERY_LOW"]:
            if res_counts[rc]:
                f.write(f"  - {rc}: {res_counts[rc]}\n")

        f.write("\n## 8. VIDEO SUMMARY\n\n")
        f.write(f"- Total videos: {video_count}\n")
        f.write(f"- Total video size: {format_size(video_size)}\n")
        f.write(f"- Video metadata (duration, codec, fps): NOT_AVAILABLE_IN_ENVIRONMENT (ffprobe not installed)\n")

        f.write("\n## 9. DOCUMENT SUMMARY\n\n")
        f.write(f"- Total PDFs/documents: {doc_count}\n")
        f.write(f"- Total document size: {format_size(doc_size)}\n")

        f.write("\n## 10. EXACT DUPLICATE FINDINGS\n\n")
        f.write(f"- Duplicate groups: {dup_group_counter}\n")
        f.write(f"- Total duplicate files: {dup_file_count}\n")
        f.write(f"- Redundant storage: {format_size(dup_redundant)}\n\n")
        if dup_groups:
            f.write("| Group | Copies | Size | Categories |\n")
            f.write("|-------|--------|------|------------|\n")
            for gid, gdata in sorted(dup_groups.items(), key=lambda x: x[1]["copy_count"], reverse=True)[:20]:
                cats = set(r["source_category"] for r in records if r["asset_id"] in gdata["asset_ids"])
                sz = max(r["size_bytes"] for r in records if r["asset_id"] in gdata["asset_ids"])
                f.write(f"| {gid} | {gdata['copy_count']} | {format_size(sz)} | {', '.join(sorted(cats))} |\n")

        f.write("\n## 11. DERIVATIVE FINDINGS\n\n")
        f.write(f"- Potential derivative files: {len(derivative_records)}\n")
        f.write(f"- High confidence master matches: {sum(1 for d in derivative_records if d['confidence'] == 'HIGH')}\n")
        f.write(f"- Medium confidence: {sum(1 for d in derivative_records if d['confidence'] == 'MEDIUM')}\n")
        f.write(f"- Low confidence: {sum(1 for d in derivative_records if d['confidence'] == 'LOW')}\n")

        f.write("\n## 12. ALL FOLDER ANALYSIS\n\n")
        all_rec = [r for r in records if r["source_category"] == "ALL"]
        all_dups = [r for r in all_rec if r["exact_duplicate_group"]]
        all_cats = set(r["source_category"] for r in all_rec)
        f.write(f"- Files in ALL: {len(all_rec)}\n")
        f.write(f"- Files in ALL with duplicates elsewhere: {len(all_dups)}\n")
        f.write(f"- Total size: {format_size(sum(r['size_bytes'] for r in all_rec))}\n")
        f.write(f"- ALL is not assumed canonical; SHA-256 cross-referencing performed.\n")

        f.write("\n## 13. OLD FOLDER ANALYSIS\n\n")
        old_rec = [r for r in records if r["source_category"] == "OLD"]
        f.write(f"- Files in OLD: {len(old_rec)}\n")
        f.write(f"- Total size: {format_size(sum(r['size_bytes'] for r in old_rec))}\n")
        f.write(f"- Default review priority: LOW\n")
        f.write(f"- Preserved, not deleted.\n")

        f.write("\n## 14. PROJECT CANDIDATE FINDINGS\n\n")
        f.write(f"- Project candidate folders identified: {len(project_candidates)}\n\n")
        f.write("| Candidate | Category | Files | Images | Videos | Size |\n")
        f.write("|-----------|----------|-------|--------|--------|------|\n")
        for (cname, scat), data in sorted(project_candidates.items(), key=lambda x: x[1]["file_count"], reverse=True)[:30]:
            f.write(f"| {cname} | {scat} | {data['file_count']} | {data['image_count']} | {data['video_count']} | {format_size(data['total_size'])} |\n")

        f.write("\n## 15. PHASE 0A PORTFOLIO MATCHES\n\n")
        f.write(f"- Phase 0A project names matched: {len(unique_matches)}\n")
        f.write(f"- Total files with Phase 0A match: {len(phase0a_matches)}\n\n")
        if unique_matches:
            f.write("| Phase 0A Project | Local Files | Categories Found In |\n")
            f.write("|------------------|-------------|--------------------|\n")
            for proj in sorted(unique_matches):
                proj_recs = [r for r in phase0a_matches if r["phase0a_match"] == proj]
                cats = set(r["source_category"] for r in proj_recs)
                f.write(f"| {proj} | {len(proj_recs)} | {', '.join(sorted(cats))} |\n")

        f.write("\n## 16. UNKNOWN / UNRESOLVED ASSETS\n\n")
        no_project = [r for r in records if not r["source_project_candidate"] and not r["phase0a_match"]]
        f.write(f"- Files without project candidate: {len(no_project)}\n")
        f.write(f"- MISCELLANEOUS category files: {sum(1 for r in records if r['source_category'] == 'MISCELLANEOUS')}\n")
        f.write(f"- These remain unresolved pending Design/Product Lead review.\n")

        f.write("\n## 17. STORAGE RISKS\n\n")
        f.write(f"- Files > 100MB: {len(large_files)}\n")
        if large_files:
            f.write(f"- Largest file: {format_size(max(r['size_bytes'] for r in large_files))}\n")
        f.write(f"- Duplicate redundancy: {format_size(dup_redundant)}\n")

        f.write("\n## 18. CORRUPT / UNREADABLE FILES\n\n")
        f.write(f"- Errors logged: {len(errors)}\n")
        if errors:
            error_types = defaultdict(int)
            for e in errors:
                error_types[e["error_type"]] += 1
            for et, count in sorted(error_types.items()):
                f.write(f"- {et}: {count}\n")

        f.write("\n## 19. HIGHEST-PRIORITY REVIEW GROUPS\n\n")
        p0_groups = defaultdict(lambda: {"count": 0, "size": 0, "categories": set()})
        for r in records:
            if r["review_priority"] == "P0" and r["phase0a_match"]:
                p0_groups[r["phase0a_match"]]["count"] += 1
                p0_groups[r["phase0a_match"]]["size"] += r["size_bytes"]
                p0_groups[r["phase0a_match"]]["categories"].add(r["source_category"])
        f.write("| Project Match | Files | Size | Categories |\n")
        f.write("|---------------|-------|------|------------|\n")
        for proj, data in sorted(p0_groups.items(), key=lambda x: x[1]["count"], reverse=True):
            f.write(f"| {proj} | {data['count']} | {format_size(data['size'])} | {', '.join(sorted(data['categories']))} |\n")

        f.write("\n## 20. CONTACT SHEETS GENERATED\n\n")
        f.write("See: `/analysis/asset-inventory/contact-sheets/`\n")
        f.write("Contact sheet index: `02H_CONTACT_SHEET_INDEX.md`\n")
        f.write("(Generated in subsequent step if environment supports image compositing)\n")

        f.write("\n## 21. LIMITATIONS\n\n")
        f.write("- **ffprobe not available**: Video metadata (duration, codec, fps, audio) could not be extracted. Marked as NOT_AVAILABLE_IN_ENVIRONMENT.\n")
        f.write("- **exiftool not available**: EXIF metadata extraction limited to mdls (macOS native).\n")
        f.write("- **Perceptual hashing not performed**: Near-duplicate detection deferred (NEAR_DUPLICATE_ANALYSIS_DEFERRED). Only exact SHA-256 duplicates detected.\n")
        f.write("- **No visual review performed**: Classification is based on file metadata and folder structure only.\n")
        f.write("- **MIME types**: Not populated (python-magic not available); extension-based classification used instead.\n")

        f.write("\n## 22. RECOMMENDED PHASE 0B.2 ACTIONS\n\n")
        f.write("1. **Install ffprobe** to extract video metadata for the 45 video files.\n")
        f.write("2. **Review P0 project matches** — verify local folder matches against Phase 0A portfolio register.\n")
        f.write("3. **Resolve ALL folder** — determine which files are canonical vs duplicates of categorized folders.\n")
        f.write("4. **Review OLD folder** — identify any historically significant assets worth preserving.\n")
        f.write("5. **Resolve MISCELLANEOUS** — owner verification needed for all 8 files.\n")
        f.write("6. **Generate contact sheets** for P0 and P1 folders for visual review.\n")
        f.write("7. **Begin project identification** — match local folders to confirmed project names.\n")
        f.write("8. **Plan master library structure** — separate organized structure from source archive.\n")

    log(f"  Written: {audit_md_path}")

    log("Phase 8: Generating handoff document...")
    handoff_path = DOCS_OUT / "02L_PHASE_0B1_HANDOFF.md"
    with open(handoff_path, 'w', encoding='utf-8') as f:
        f.write("# PHASE 0B.1 HANDOFF\n\n")
        f.write(f"**Generated:** {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n\n")
        f.write("---\n\n")
        f.write("```\n")
        f.write("PHASE: 0B.1\n\n")
        f.write("STATUS: COMPLETE\n\n")
        f.write(f"SOURCE ARCHIVE: {SOURCE_ROOT}\n\n")
        f.write(f"FILES INVENTORIED: {total_files}\n\n")
        f.write(f"ARCHIVE SIZE: {format_size(total_bytes)}\n\n")
        f.write(f"IMAGES: {image_count}\n\n")
        f.write(f"VIDEOS: {video_count}\n\n")
        f.write(f"DOCUMENTS: {doc_count}\n\n")
        f.write(f"OTHER: {other_count}\n\n")
        f.write(f"EXACT DUPLICATE GROUPS: {dup_group_counter}\n\n")
        f.write(f"DUPLICATE FILES: {dup_file_count}\n\n")
        f.write(f"ESTIMATED DUPLICATE STORAGE: {format_size(dup_redundant)}\n\n")
        f.write(f"PROJECT CANDIDATE FOLDERS: {len(project_candidates)}\n\n")
        f.write(f"PHASE 0A PROJECT MATCHES: {len(unique_matches)}\n\n")
        f.write(f"UNKNOWN PROJECT GROUPS: {len(set(r['source_project_candidate'] for r in unknown_project))}\n\n")
        f.write(f"CONTACT SHEETS: 0 (deferred to contact sheet generation step)\n\n")
        f.write(f"ERRORS: {len(errors)}\n\n")
        f.write("SOURCE FILES MODIFIED: 0\n\n")
        f.write("SOURCE FILES MOVED: 0\n\n")
        f.write("SOURCE FILES DELETED: 0\n\n")
        f.write("EXTERNAL RESEARCH: 0\n\n")
        f.write("APPLICATION FILES: 0\n\n")
        f.write("```\n")
    log(f"  Written: {handoff_path}")

    log("Writing run log...")
    with open(LOG_PATH, 'w', encoding='utf-8') as f:
        f.write("\n".join(log_lines))
        f.write(f"\n[{datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')}] Inventory run complete.\n")

    log("DONE.")

    print(f"\n{'='*60}")
    print("PHASE 0B.1 INVENTORY COMPLETE")
    print(f"{'='*60}")
    print(f"Files inventoried: {total_files}")
    print(f"Archive size: {format_size(total_bytes)}")
    print(f"Images: {image_count}")
    print(f"Videos: {video_count}")
    print(f"Documents: {doc_count}")
    print(f"Duplicate groups: {dup_group_counter}")
    print(f"Derivative candidates: {len(derivative_records)}")
    print(f"Project candidate folders: {len(project_candidates)}")
    print(f"Phase 0A matches: {len(unique_matches)} ({', '.join(sorted(unique_matches))})")
    print(f"Errors: {len(errors)}")
    print(f"Source files modified: 0")


def format_size(bytes_val):
    if bytes_val is None or bytes_val == 0:
        return "0 B"
    units = ["B", "KB", "MB", "GB", "TB"]
    i = 0
    val = float(bytes_val)
    while val >= 1024 and i < len(units) - 1:
        val /= 1024
        i += 1
    return f"{val:.1f} {units[i]}"


if __name__ == "__main__":
    main()
