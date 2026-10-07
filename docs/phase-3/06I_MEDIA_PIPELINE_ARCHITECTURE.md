# 06I — Media Pipeline Architecture

## Media Architecture Overview (section 64)

Separate three tiers:

- **SOURCE ARCHIVE** — Immutable raw originals. Never overwritten.
- **MIGRATION MASTER** — Archival reference. Not directly served to production.
- **CMS / DELIVERY MEDIA** — Optimized derivatives for production use.

Never overwrite source archive. Migration master remains archival. Production media consists of: optimized derivatives, approved originals where suitable, CMS-managed images, approved optimized videos.

## Image Pipeline (section 65)

Future pipeline: migration master → review → upload/import → Sanity image asset → hotspot/focal point → responsive delivery → Next image integration.

Preferred delivery formats automatically negotiated where platform supports them.

Do not manually make dozens of arbitrary image sizes in source directories.

## Image Metadata (section 66)

`mediaImage` object fields:

- `asset` — reference to the image asset
- `alt` — descriptive alt text
- `decorative` — boolean, true if the image is purely decorative
- `caption` — visible caption text
- `credit` — optional attribution
- `sourceAssetId` — optional, links back to source archive
- `displayReadiness` — internal, optional, tracks whether the asset is ready for production display
- `approvalState` — editorial approval status
- `hotspot` — focal point coordinates for cropping
- `crop` — crop rectangle

No public image lacking an alt decision. Either: meaningful alt, or: `decorative = true`.

## Alt Text Governance (section 67)

Do not:

- Copy filenames into alt text
- Keyword stuff
- Repeat nearby caption mechanically

Alt describes useful visual content.

Technical imagery may describe: device, prototype, process, material — without inventing project facts.

## Video Delivery (section 68)

Homepage reel must eventually use a SMALL optimized set.

Do not ship 44 original videos to homepage visitors.

Production target: one edited reel OR a deliberately controlled set of approximately 3–6 short optimized clips.

- **Desktop**: autoplay muted where permitted.
- **Mobile**: lighter delivery.
- **Reduced motion**: poster/static image.

## Video Encoding (section 69)

Phase 3 documents production targets only.

Plan for:

- MP4 H.264
- Optionally WebM where useful
- Muted hero assets
- Poster image
- Optimized bitrate
- Resolution appropriate to usage

Do not transcode during Phase 3.

## Video Storage (section 70)

For launch: Sanity file/CDN delivery is acceptable for short optimized website video assets.

Do not commit large original video archives into the production repository.

Only optimized delivery assets enter production systems.

## Low-Resolution Media Strategy

Preserve the locked Phase 2 low-resolution media strategy: all media must be optimized for web delivery with appropriate resolution, format, and filesize for its context. Hero imagery and video must be performance-budgeted.

---

## Document Status

**PHASE 3 — SECTION 06I: LOCKED**
