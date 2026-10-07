# 03L — Homepage Reel Shortlist

## Overview

**Total video assets:** 45 (all from PRJ-LOCAL-0110 Video Archive)  
**Primary candidates (>= 1900px):** 14 → 10 selected (1 duplicate excluded)  
**Alternate candidates (1280px):** 30 → 10 selected  
**Total reel capacity:** 20 clips (10 primary + 10 alternate)  
**Total reel duration:** ~120 seconds (20 clips x 5-8s each)

---

## Primary Reel — 10 Clips (1920x1080+)

Selected for hero homepage placement. Prioritizes PRODUCT_BEAUTY over PRODUCT_ROTATION, higher resolution, and visual variety.

| #   | asset_id   | filename | width | height | duration | type             | bitrate    | sha256 (first 16)  | selection_rationale                  |
| --- | ---------- | -------- | ----- | ------ | -------- | ---------------- | ---------- | ------------------ | ------------------------------------ |
| 1   | AST-000976 | 42.mp4   | 2592  | 1080   | 5.2s     | PRODUCT_BEAUTY   | 17959 kbps | 41f68bf1a310c96e   | Highest resolution clip; beauty shot |
| 2   | AST-000959 | 28.mp4   | 2492  | 1080   | 5.2s     | PRODUCT_BEAUTY   | 40185 kbps | d6080e46aadea3fba5 | Second-highest res; beauty shot      |
| 3   | AST-000960 | 28a.mp4  | 2492  | 1080   | 5.2s     | PRODUCT_BEAUTY   | 41078 kbps | 9f693d25e335f8f8   | Variant of 28; different hash        |
| 4   | AST-000971 | 38.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_BEAUTY   | 28643 kbps | 9c6ece697019926c   | Beauty shot at 1080p                 |
| 5   | AST-000961 | 29.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_ROTATION | 14062 kbps | 7561935703354c78   | Rotation at 1080p                    |
| 6   | AST-000963 | 30.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_ROTATION | 5300 kbps  | d15c72a63c0ad0e0   | Rotation at 1080p                    |
| 7   | AST-000964 | 31.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_ROTATION | 7000 kbps  | 821f99ea79db1f5a   | Rotation at 1080p                    |
| 8   | AST-000965 | 32.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_ROTATION | 11812 kbps | 1fce0247a8113d12   | Rotation at 1080p                    |
| 9   | AST-000966 | 33.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_ROTATION | 14985 kbps | 2e3105ee7fdc447a   | Rotation at 1080p                    |
| 10  | AST-000967 | 34.mp4   | 1936  | 1080   | 5.2s     | PRODUCT_ROTATION | 9809 kbps  | 16fc968c7ca07420   | Rotation at 1080p                    |

**Excluded from primary:**

- AST-000977 (42A.mp4) — exact duplicate of 42.mp4 (identical SHA-256)
- AST-000968 (35.mp4), AST-000969 (36.mp4), AST-000970 (37.mp4) — 1080p rotations, lower priority than beauty shots and first selections

---

## Alternate Reel — 10 Clips (1280x720)

Selected for secondary homepage placement or fallback. All are 8-second product rotation clips at 1280x720.

| #   | asset_id   | filename | width | height | duration | type             | bitrate   | sha256 (first 16) |
| --- | ---------- | -------- | ----- | ------ | -------- | ---------------- | --------- | ----------------- |
| 1   | AST-000939 | 1.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 3355 kbps | 58e38dbc0005110f  |
| 2   | AST-000950 | 2.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 3402 kbps | decd0bd23d1e4597  |
| 3   | AST-000962 | 3.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 5231 kbps | f57f6761c2b44455  |
| 4   | AST-000973 | 4.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 3581 kbps | 070ce1b4245003af  |
| 5   | AST-000979 | 5.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 3234 kbps | c46504b1dcc15fb9  |
| 6   | AST-000980 | 6.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 5549 kbps | d9bcd22dd14aa741  |
| 7   | AST-000981 | 7.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 3568 kbps | 90ae9b7690640aff  |
| 8   | AST-000982 | 8.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 1606 kbps | 73fd8542fd0bddd7  |
| 9   | AST-000983 | 9.mp4    | 1280  | 720    | 8s       | PRODUCT_ROTATION | 4375 kbps | abf90814b8b5451f  |
| 10  | AST-000940 | 10.mp4   | 1280  | 720    | 8s       | PRODUCT_ROTATION | 1588 kbps | 84a02909ef9f79b2  |

---

## Duplicate/Variant Analysis

| Pair             | Relationship                             | Action                                                        |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------- |
| 42.mp4 / 42A.mp4 | Exact duplicate (identical SHA-256)      | Exclude 42A from reel; migrate only 42.mp4                    |
| 28.mp4 / 28a.mp4 | Same resolution/duration, different hash | Both included — likely different encoding or slight variation |

---

## Technical Notes

**All videos:**

- Codec: H.264
- Audio: NONE (silent clips)
- Duration: 5.2s (primary) or 8s (alternate)
- Frame rate: Not analyzed (mdls does not reliably report)
- Loop-friendly: Short duration + product rotation = seamless loop potential

**Bitrate variance:**

- Primary: 5,300 – 41,078 kbps (wide range)
- Alternate: 1,588 – 5,549 kbps (consistent)
- Higher bitrate = better quality but larger file size

**Aspect ratios:**

- Primary: Mix of 242:135, 623:270, 12:5 (all ultra-wide/panoramic)
- Alternate: 16:9 (standard widescreen)

---

## Migration Recommendation

**Primary reel:** 10 clips, ~150 MB total  
**Alternate reel:** 10 clips, ~35 MB total  
**Combined:** 20 clips, ~185 MB

**SHA-256 verification required** for all 20 clips during migration.

**Destination structure:**

```
/media-migration/
  /video/
    /homepage-reel-primary/
      01-42.mp4
      02-28.mp4
      ...
    /homepage-reel-alternate/
      01-1.mp4
      02-2.mp4
      ...
```

---

## Owner Review Question

**Video reel sequencing:** Should the homepage reel auto-play in a fixed sequence, or should it be randomized on each page load? This affects whether the numbered ordering above is meaningful.
