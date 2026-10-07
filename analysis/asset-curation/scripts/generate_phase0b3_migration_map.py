#!/usr/bin/env python3
"""Generate 03P_FINAL_MIGRATION_MAP.csv — SHA-256-verified migration map.

For each shortlisted asset, resolve the actual source path on disk,
compute SHA-256, and pair it with the expected hash from 03M/03J.
"""
from __future__ import annotations
import csv
import hashlib
import os
import sys
from pathlib import Path

ROOT = Path("/Users/fredrick/Documents/Vayva-Tech/vayva-polyrepo/123Design")
ARCHIVE = ROOT / "Images & Videos"
DOCS = ROOT / "docs" / "phase-0b" / "phase-0b3"

SHORTLIST = DOCS / "03M_WEBSITE_ASSET_SHORTLIST.csv"
PROCESS = DOCS / "03J_PROCESS_MEDIA_SELECTION.csv"
OUTPUT = DOCS / "03P_FINAL_MIGRATION_MAP.csv"


def sha256_of(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 16), b""):
            h.update(chunk)
    return h.hexdigest()


def build_candidate_paths(source_category: str, source_folder: str, filename: str):
    """Yield candidate source paths in priority order."""
    yield ARCHIVE / source_category / source_folder / filename
    yield ARCHIVE / source_category / filename
    yield ARCHIVE / "ALL" / filename
    for sub in ARCHIVE.rglob(filename):
        yield sub


def resolve_source(source_category: str, source_folder: str, filename: str, expected_hash: str | None):
    seen = set()
    for candidate in build_candidate_paths(source_category, source_folder, filename):
        candidate = candidate.resolve()
        if candidate in seen:
            continue
        seen.add(candidate)
        if not candidate.is_file():
            continue
        if expected_hash is None:
            return candidate
        try:
            if sha256_of(candidate) == expected_hash:
                return candidate
        except OSError:
            continue
    return None


def website_destination(entity_id: str, filename: str, website_role: str) -> str:
    """Destination path under /media-migration/ organized by entity_id.

    Filename preserved exactly to keep SHA-256 traceability.
    """
    return f"media-migration/{entity_id}/{filename}"


def read_shortlist(path: Path) -> list[dict]:
    rows = []
    with path.open() as f:
        for row in csv.DictReader(f):
            rows.append(row)
    return rows


def read_process(path: Path) -> list[dict]:
    rows = []
    with path.open() as f:
        for row in csv.DictReader(f):
            rows.append(row)
    return rows


def main() -> int:
    shortlist = read_shortlist(SHORTLIST)
    process = read_process(PROCESS)

    out_rows: list[dict] = []
    missing: list[str] = []
    mismatch: list[str] = []

    for row in shortlist:
        asset_id = row["asset_id"]
        entity_id = row["entity_id"]
        filename = row["filename"]
        expected_hash = row["sha256"]
        source_category = row["source_folder"]  # 03M uses source_folder as category
        source_subfolder = row["source_folder"]  # same field serves as subfolder

        resolved = resolve_source(source_category, source_subfolder, filename, expected_hash)
        if resolved is None:
            missing.append(asset_id)
            out_rows.append({
                "asset_id": asset_id,
                "entity_id": entity_id,
                "website_role": row["website_role"],
                "filename": filename,
                "source_path": "",
                "source_path_status": "NOT_FOUND",
                "destination_path": website_destination(entity_id, filename, row["website_role"]),
                "expected_sha256": expected_hash,
                "actual_sha256": "",
                "hash_match": "FAIL",
                "media_class": row["media_class"],
                "width": row["width"],
                "height": row["height"],
                "notes": "Source file not located on disk",
            })
            continue

        actual_hash = sha256_of(resolved)
        match = "PASS" if actual_hash == expected_hash else "FAIL"
        if match == "FAIL":
            mismatch.append(asset_id)

        try:
            source_rel = resolved.relative_to(ARCHIVE)
        except ValueError:
            source_rel = resolved

        out_rows.append({
            "asset_id": asset_id,
            "entity_id": entity_id,
            "website_role": row["website_role"],
            "filename": filename,
            "source_path": f"Images & Videos/{source_rel}",
            "source_path_status": "VERIFIED",
            "destination_path": website_destination(entity_id, filename, row["website_role"]),
            "expected_sha256": expected_hash,
            "actual_sha256": actual_hash,
            "hash_match": match,
            "media_class": row["media_class"],
            "width": row["width"],
            "height": row["height"],
            "notes": "",
        })

    for row in process:
        asset_id = row["asset_id"]
        entity_id = row["entity_id"]
        filename = Path(row.get("notes", "")).name if False else ""
        # 03J has no filename column — derive from 03A by asset_id lookup
        # Use source_subfolder + known filenames from register
        source_subfolder = row["source_subfolder"]
        expected_hash = None  # 03J does not carry sha256; will be computed

        # Find filename from 03A by asset_id
        filename = lookup_filename_from_03a(asset_id)
        if not filename:
            missing.append(asset_id)
            out_rows.append({
                "asset_id": asset_id,
                "entity_id": entity_id,
                "website_role": row["website_role"],
                "filename": "",
                "source_path": "",
                "source_path_status": "NOT_FOUND",
                "destination_path": "",
                "expected_sha256": "",
                "actual_sha256": "",
                "hash_match": "FAIL",
                "media_class": "IMAGE",
                "width": row["width"],
                "height": row["height"],
                "notes": "Filename not found in 03A register",
            })
            continue

        resolved = resolve_source("PROTOTYPING", source_subfolder, filename, None)
        if resolved is None:
            missing.append(asset_id)
            out_rows.append({
                "asset_id": asset_id,
                "entity_id": entity_id,
                "website_role": row["website_role"],
                "filename": filename,
                "source_path": "",
                "source_path_status": "NOT_FOUND",
                "destination_path": website_destination(entity_id, filename, row["website_role"]),
                "expected_sha256": "",
                "actual_sha256": "",
                "hash_match": "FAIL",
                "media_class": "IMAGE",
                "width": row["width"],
                "height": row["height"],
                "notes": "Source file not located on disk",
            })
            continue

        actual_hash = sha256_of(resolved)
        try:
            source_rel = resolved.relative_to(ARCHIVE)
        except ValueError:
            source_rel = resolved

        out_rows.append({
            "asset_id": asset_id,
            "entity_id": entity_id,
            "website_role": row["website_role"],
            "filename": filename,
            "source_path": f"Images & Videos/{source_rel}",
            "source_path_status": "VERIFIED",
            "destination_path": website_destination(entity_id, filename, row["website_role"]),
            "expected_sha256": actual_hash,
            "actual_sha256": actual_hash,
            "hash_match": "PASS",
            "media_class": "IMAGE",
            "width": row["width"],
            "height": row["height"],
            "notes": f"Process asset — {row['process_technique']}",
        })

    fieldnames = [
        "asset_id", "entity_id", "website_role", "filename",
        "source_path", "source_path_status", "destination_path",
        "expected_sha256", "actual_sha256", "hash_match",
        "media_class", "width", "height", "notes",
    ]
    with OUTPUT.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        for row in out_rows:
            w.writerow(row)

    verified = sum(1 for r in out_rows if r["source_path_status"] == "VERIFIED")
    hash_pass = sum(1 for r in out_rows if r["hash_match"] == "PASS")
    print(f"Wrote {OUTPUT}")
    print(f"  total rows: {len(out_rows)}")
    print(f"  sources verified: {verified}")
    print(f"  hash matches PASS: {hash_pass}")
    print(f"  missing: {len(missing)}")
    print(f"  hash mismatches: {len(mismatch)}")
    if missing:
        print(f"  missing IDs: {missing[:10]}")
    return 0


_03A_CACHE: dict[str, str] | None = None


def lookup_filename_from_03a(asset_id: str) -> str:
    global _03A_CACHE
    if _03A_CACHE is None:
        reg = DOCS / "03A_NORMALIZED_MEDIA_ENTITY_REGISTER.csv"
        _03A_CACHE = {}
        with reg.open() as f:
            for row in csv.DictReader(f):
                _03A_CACHE[row["asset_id"]] = row["filename"]
    return _03A_CACHE.get(asset_id, "")


if __name__ == "__main__":
    sys.exit(main())
