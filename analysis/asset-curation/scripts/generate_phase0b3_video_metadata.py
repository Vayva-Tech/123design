#!/usr/bin/env python3
"""
Phase 0B.3 — Video Metadata Collector
Runs mdls on all 45 videos, updates 02D_VIDEO_MASTER_REGISTER with actual metadata,
and outputs 03K_VIDEO_VISUAL_REVIEW.csv with content_type suggestions.
"""

import csv
import os
import subprocess
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
ARCHIVE = os.path.join(REPO_ROOT, "Images & Videos")
VIDEO_DIR = os.path.join(ARCHIVE, "VIDEO")
DOCS = os.path.join(REPO_ROOT, "docs")
PHASE0B = os.path.join(DOCS, "phase-0b")
PHASE0B3 = os.path.join(PHASE0B, "phase-0b3")

VIDEO_MASTER = os.path.join(PHASE0B, "02D_VIDEO_MASTER_REGISTER.csv")


def run_mdls(filepath):
    """Run mdls on a file and parse key metadata fields."""
    try:
        result = subprocess.run(
            ["mdls", "-name", "kMDItemDurationSeconds",
             "-name", "kMDItemPixelWidth",
             "-name", "kMDItemPixelHeight",
             "-name", "kMDItemVideoBitRate",
             "-name", "kMDItemTotalBitRate",
             "-name", "kMDItemAudioBitRate",
             "-name", "kMDItemVideoEncoder",
             "-name", "kMDItemTotalDuration",
             filepath],
            capture_output=True, text=True, timeout=10
        )
        output = result.stdout
        meta = {}
        for line in output.strip().split("\n"):
            if "=" not in line:
                continue
            key, val = line.split("=", 1)
            key = key.strip()
            val = val.strip()
            if val == "(null)":
                meta[key] = None
            else:
                try:
                    if "." in val:
                        meta[key] = float(val)
                    else:
                        meta[key] = int(val)
                except ValueError:
                    meta[key] = val
        return meta
    except Exception:
        return {}


def infer_content_type(filename, duration, width, height, filesize):
    """Suggest content_type based on filename, duration, resolution, and size."""
    stem = filename.lower().replace(".mp4", "")

    if re.search(r'anim|motion|render|3d', stem):
        return "ANIMATION"
    if re.search(r'cad|solid|step', stem):
        return "CAD_ANIMATION"
    if re.search(r'proto|test|validat', stem):
        return "PROTOTYPE"
    if re.search(r'manufactur|cnc|inject|cast|tool', stem):
        return "MANUFACTURING"
    if re.search(r'assembl', stem):
        return "ASSEMBLY"
    if re.search(r'lifestyle|context|scene', stem):
        return "LIFESTYLE"
    if re.search(r'present|pitch|demo', stem):
        return "PRESENTATION"

    if duration is not None:
        if duration < 15:
            if filesize and filesize > 10_000_000:
                return "PRODUCT_BEAUTY"
            return "PRODUCT_ROTATION"
        if duration < 60:
            return "PRODUCT_BEAUTY"
        if duration < 300:
            return "PRESENTATION"
        return "PRESENTATION"

    return "UNKNOWN"


def main():
    print("Loading video master...")
    with open(VIDEO_MASTER, encoding="utf-8") as f:
        videos = list(csv.DictReader(f))
    print(f"  {len(videos)} videos loaded")

    results = []
    for v in videos:
        filename = v["filename"]
        filepath = os.path.join(VIDEO_DIR, filename)

        if not os.path.exists(filepath):
            print(f"  WARNING: {filepath} not found, skipping mdls")
            meta = {}
        else:
            meta = run_mdls(filepath)

        duration = meta.get("kMDItemDurationSeconds")
        width = meta.get("kMDItemPixelWidth")
        height = meta.get("kMDItemPixelHeight")
        total_bitrate = meta.get("kMDItemTotalBitRate")
        video_bitrate = meta.get("kMDItemVideoBitRate")
        audio_bitrate = meta.get("kMDItemAudioBitRate")
        video_encoder = meta.get("kMDItemVideoEncoder")

        size_bytes = int(v["size_bytes"]) if v.get("size_bytes") else 0
        content_type = infer_content_type(filename, duration, width, height, size_bytes)

        aspect_ratio = ""
        orientation = ""
        if width and height:
            from math import gcd
            g = gcd(int(width), int(height))
            aspect_ratio = f"{int(width)//g}:{int(height)//g}"
            orientation = "LANDSCAPE" if int(width) > int(height) else "PORTRAIT" if int(height) > int(width) else "SQUARE"

        has_audio = "YES" if audio_bitrate and audio_bitrate > 0 else "NO"

        row = {
            "asset_id": v["asset_id"],
            "filename": filename,
            "relative_path": v["relative_path"],
            "size_bytes": v["size_bytes"],
            "size_mb": v.get("size_mb", ""),
            "width": width or "",
            "height": height or "",
            "aspect_ratio": aspect_ratio,
            "orientation": orientation,
            "duration_seconds": round(duration, 1) if duration else "",
            "video_codec": video_encoder or "h264",
            "video_bitrate_kbps": video_bitrate or total_bitrate or "",
            "total_bitrate_kbps": total_bitrate or "",
            "audio_present": has_audio,
            "content_type_suggestion": content_type,
            "homepage_reel_candidate": "",
            "notes": "",
            "sha256": v.get("sha256", ""),
        }

        if duration and duration < 10:
            row["notes"] = "Short clip — possible product rotation or loop"
        elif duration and duration > 300:
            row["notes"] = "Long-form — likely presentation or demo"

        results.append(row)

    outfile = os.path.join(PHASE0B3, "03K_VIDEO_VISUAL_REVIEW.csv")
    fieldnames = list(results[0].keys())
    with open(outfile, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    print(f"\nWritten: {outfile} ({len(results)} rows)")

    # Summary stats
    from collections import Counter
    durations = [r["duration_seconds"] for r in results if r["duration_seconds"]]
    resolutions = Counter(f'{r["width"]}x{r["height"]}' for r in results if r["width"])
    content_types = Counter(r["content_type_suggestion"] for r in results)

    print(f"\nDuration range: {min(durations):.1f}s - {max(durations):.1f}s")
    print(f"Total duration: {sum(durations):.1f}s ({sum(durations)/60:.1f} min)")
    print(f"\nResolution distribution:")
    for res, count in resolutions.most_common():
        print(f"  {res}: {count}")
    print(f"\nContent type suggestions:")
    for ct, count in content_types.most_common():
        print(f"  {ct}: {count}")


if __name__ == "__main__":
    main()
