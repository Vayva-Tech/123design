# Portfolio Taxonomy — Controlled Vocabulary

> **Document role:** Defines every controlled term used in the 123.design portfolio system. This is the single source of truth for industry names, capability names, lifecycle stages, media types, project statuses, entity types, display readiness states, and seed data. No tag, category, or status may be used without appearing in this document.

---

## 1. Industries (6)

These are the only valid industry classifications. No additional industries may be added without Design/Product Lead approval.

| Slug                  | Display Name        | Approval Required | Notes                                                      |
| --------------------- | ------------------- | ----------------- | ---------------------------------------------------------- |
| `consumer-products`   | Consumer Products   | No                | Broad: physical goods for personal/household use           |
| `medical`             | Medical             | Yes               | Projects HOLD until owner approval. Careful language only. |
| `defense-security`    | Defense & Security  | Yes               | Projects HOLD until owner approval. Careful language only. |
| `electronics`         | Electronics         | No                | Consumer, commercial, and industrial electronics           |
| `industrial`          | Industrial          | No                | Equipment, machinery, industrial products                  |
| `emerging-technology` | Emerging Technology | No                | Robotics, AI hardware, novel form factors                  |

### Industry Rules

- **No arbitrary new industries.** Every industry must appear in the table above. Adding a new industry requires explicit Design/Product Lead approval.
- **No plural/singular variants.** Each industry has exactly one canonical display name. Never display "Consumer Product" on one page and "Consumer Products" on another.
- **Each industry must have verified project association.** An industry page should not exist without at least some verified connection to real project work in that industry.
- Every project must have exactly one primary industry. A project may have zero or more secondary industry tags.
- Industry pages display only PUBLISHED projects tagged with that industry.
- Medical and Defense industry pages use careful, capability-focused language. No inferred clients, approvals, contracts, or deployments.
- Architecture-adjacent projects do not receive an industry tag unless they clearly belong to one.

---

## 2. Capabilities (10)

These are the only valid capability classifications. They map to capability detail pages and mega menu items.

| Slug                     | Display Name           | Mega Menu Group        | Notes                                                            |
| ------------------------ | ---------------------- | ---------------------- | ---------------------------------------------------------------- |
| `product-development`    | Product Development    | STRATEGY & DEVELOPMENT | Primary brand capability. End-to-end concept-through-production. |
| `industrial-design`      | Industrial Design      | DESIGN                 | Form, experience, aesthetics, usability                          |
| `product-animation`      | Product Animation      | DESIGN                 | 3D visualization, animation                                      |
| `mechanical-engineering` | Mechanical Engineering | ENGINEERING            | Mechanisms, structures, thermal, materials                       |
| `electrical-engineering` | Electrical Engineering | ENGINEERING            | PCB, firmware, power, connectivity                               |
| `prototyping`            | Prototyping            | PROTOTYPE & PRODUCTION | Rapid iteration, functional prototypes, form validation          |
| `testing-validation`     | Testing & Validation   | PROTOTYPE & PRODUCTION | Verification, compliance support                                 |
| `tooling`                | Tooling                | PROTOTYPE & PRODUCTION | Mold design, fixture, tooling development                        |
| `manufacturing`          | Manufacturing          | PROTOTYPE & PRODUCTION | DFM, production, supplier coordination                           |
| `program-management`     | Program Management     | PROTOTYPE & PRODUCTION | Stage-gate, timeline, cross-functional coordination              |

### Mega Menu Group Mapping

The four mega menu groups and their members:

```
STRATEGY & DEVELOPMENT
  └── Product Development

DESIGN
  ├── Industrial Design
  └── Product Animation

ENGINEERING
  ├── Mechanical Engineering
  └── Electrical Engineering

PROTOTYPE & PRODUCTION
  ├── Prototyping
  ├── Testing & Validation
  ├── Tooling
  ├── Manufacturing
  └── Program Management
```

### Capability Rules

- **No arbitrary new capabilities.** Every capability must appear in the table above. Adding a new capability requires explicit Design/Product Lead approval.
- **Map to mega menu groups.** Every capability belongs to exactly one mega menu group. The group assignment determines navigation placement.
- A project may be tagged with one or more capabilities.
- Capability pages show only PUBLISHED projects tagged with that capability.
- The homepage displays six grouped capability cards matching the mega menu groups.
- No capability may be renamed without Design/Product Lead approval.

---

## 3. Lifecycle Stages (5)

These are the only valid lifecycle stage classifications. They represent the hardware development lifecycle framework.

| Code         | Display Name                | Description                                                          |
| ------------ | --------------------------- | -------------------------------------------------------------------- |
| `CON`        | Concept                     | Ideation, research, form exploration, feasibility                    |
| `EVT`        | Engineering Validation Test | Functional prototypes, engineering verification, fit/form validation |
| `DVT`        | Design Validation Test      | Design freeze verification, regulatory pre-testing, user validation  |
| `PVT`        | Production Validation Test  | Pilot production, process validation, quality system verification    |
| `PRODUCTION` | Production                  | Volume manufacturing, ongoing production support                     |

### Lifecycle Rules

- **These describe the development FRAMEWORK only.** The five stages define the hardware development lifecycle model. They do not auto-apply to any project.
- **No project can claim a stage without explicit verification.** A lifecycle stage badge appears on a project page ONLY when there is verified evidence that the project reached that stage. No inferred stages. No "probably went through DVT."
- **No unverified stage badges.** If no stage evidence exists for a project, do not show any stage badge. The absence of a badge is correct behavior — not a missing feature.
- A project may span one or more lifecycle stages.
- The lifecycle section on the homepage displays all five stages as a capability narrative (not project-specific). This is a framework description, not a claim about any specific project.

---

## 4. Media Types

| Type                  | Description                                           | Usage                                                             |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| Photography           | Original photograph of physical object or environment | Project hero, gallery items, capability thumbnails, facility/team |
| Video                 | Video file (product reel, process clip)               | Homepage reel, project detail video, process documentation        |
| Rendering             | 3D render or visualization                            | Project hero, gallery, capability showcase                        |
| Drawing               | 2D sketch, technical drawing, illustration            | Process documentation, concept exploration                        |
| Animation             | Animated 3D visualization or motion graphic           | Product animation showcase, feature highlights                    |
| Process Documentation | Photography or video of development/build process     | Process section, making proof mosaic, prototyping showcase        |

### Media Rules

- **Must be locally hosted.** All media assets must be stored and served from the site's own infrastructure. No external embeds (YouTube, Vimeo, Instagram, etc.).
- **Every asset must have verified context.** Each media asset must be associated with a verified project, capability, or facility context. No orphaned assets without provenance.
- All media must be verified assets — original photographs, original renders, or approved client-provided assets.
- **Stock imagery (AdobeStock, Shutterstock, etc.) is never acceptable as proof of work.**
- Generative upscaling of images is not assumed. Use assets at their verified resolution.
- Video on homepage: muted, autoplay, loop, editorially ordered. Small curated reel.
- Video elsewhere: user-initiated playback preferred. Autoplay only with mute.

---

## 5. Project Status (Publication States)

These are the only valid publication states for a project entity.

| Status             | Meaning                                             | Visible on Site? |
| ------------------ | --------------------------------------------------- | ---------------- |
| `DRAFT`            | In progress, not ready for review                   | No               |
| `CONTENT_REVIEW`   | Content complete, awaiting internal review          | No               |
| `CLIENT_REVIEW`    | Shared with client for approval before publication  | No               |
| `READY`            | Approved, ready to publish but not yet live         | No               |
| `PUBLISHED`        | Live and visible on the site                        | **Yes**          |
| `ARCHIVED`         | Previously published, now removed from public view  | No               |
| `RECOVERY_PENDING` | Legacy project awaiting content/media recovery      | No               |
| `HOLD`             | Medical/defense project held pending owner approval | No               |

### Status Rules

- **Only PUBLISHED appears in public filters.** The work grid, work index, industry filters, capability filters, and search results display only PUBLISHED projects.
- **RECOVERY_PENDING and HOLD never appear publicly.** These statuses are completely invisible to site visitors. They exist only in the back-end content management system.
- Status transitions require explicit action: DRAFT → CONTENT_REVIEW → CLIENT_REVIEW → READY → PUBLISHED.
- PUBLISHED → ARCHIVED is a deliberate removal. ARCHIVED → PUBLISHED is a restoration.
- No project may skip CLIENT_REVIEW if client attribution or branded content is involved.
- RECOVERY_PENDING projects retain their known legacy URL (for future redirect mapping) and source name (for content recovery tracking).
- HOLD projects are completely invisible until status changes to PUBLISHED.

---

## 6. Project Entity Types

These define what kind of portfolio entity a record is. Only certain types are eligible for public display.

| Entity Type          | Publishes as Work Card? | Description                                                                                                                  |
| -------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INDIVIDUAL_PROJECT` | **Yes**                 | Primary entity. A single product/project with its own detail page.                                                           |
| `PROJECT_FAMILY`     | **Yes** (if approved)   | A related group of projects that may publish as a single card. Requires explicit Design/Product Lead approval.               |
| `COLLECTION`         | **Never**               | Internal organizational grouping (e.g., "Medical Device Portfolio", "Consumer Electronics Portfolio"). Never a project card. |
| `PROCESS_DEMO`       | **Never**               | Internal reference only. Demonstrates a process or technique. Not a project. Never a work card.                              |

### Entity Type Rules

- **Only INDIVIDUAL_PROJECT and PROJECT_FAMILY publish as work cards.** No other entity type may appear in the work grid, work index, or any public project listing.
- **COLLECTION does NOT publish as a work card.** This prevents accidental case studies. Collections are organizational tools, not presentational entities. If a collection has a detail view, it is a filtered project list — not a narrative page.
- **PROCESS_DEMO is internal reference only.** Process demonstrations exist for internal documentation and capability mapping. They do not appear in any public-facing view.
- A PROJECT_FAMILY may publish as a work card only with explicit Design/Product Lead approval.
- The work grid displays INDIVIDUAL_PROJECT and approved PROJECT_FAMILY only.

---

## 7. Display Readiness

Display readiness indicates whether a project has sufficient assets for a specific display context.

| State                   | Meaning                                                          | Where It Applies                                               |
| ----------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------- |
| `FULL_BLEED_READY`      | Has hero-quality image/video for full-width display              | Homepage hero, feature project section, full-bleed layouts     |
| `CARD_READY`            | Has thumbnail-quality image for card display                     | Work grid, related work modules, capability page project lists |
| `GALLERY_READY`         | Has multiple images suitable for gallery display                 | Project detail gallery, process mosaic, multi-image layouts    |
| `PROCESS_READY`         | Has process/prototyping imagery                                  | Process section, making proof mosaic, prototyping showcase     |
| `RESTORATION_CANDIDATE` | Has some assets but needs additional content before full display | RECOVERY_PENDING projects being prepared for publication       |

### Display Readiness Rules

- A project must be `CARD_READY` minimum to appear in the work grid.
- A project must be `FULL_BLEED_READY` to be considered for homepage feature positions.
- `RESTORATION_CANDIDATE` is a working state — not user-facing. It indicates a project is being prepared but is not yet publishable.
- Display readiness is independent of publication status. A project can be PUBLISHED and CARD_READY but not FULL_BLEED_READY (it appears in grids but not in hero positions).
- A project can be PUBLISHED-CANDIDATE (status track) while being evaluated for display readiness (asset track). These are separate concerns.

---

## 8. Portfolio Seed States

Initial project data for launch. Each project's current expected state:

| Project                    | Status                 | Display Readiness     | Entity Type        | Notes                                                                                                          |
| -------------------------- | ---------------------- | --------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Spuny Smart Spoon          | PUBLISHED-CANDIDATE    | FULL_BLEED_READY      | INDIVIDUAL_PROJECT | Consumer product. Flagship case study. Rich narrative format. Content gaps marked [CONTENT REQUIRED].          |
| DBLL Adjustable Dumbbell   | PUBLISHED-CANDIDATE    | CARD_READY            | INDIVIDUAL_PROJECT | Electronic device. Light project detail. Original design/render assets only. Never use AdobeStock assets.      |
| Bath Tray / Caddy          | PUBLISHED-CANDIDATE    | CARD_READY            | INDIVIDUAL_PROJECT | Consumer product. Internal: PRJ-LOCAL-0022. Public name: Bath Tray / Caddy. Do not expose "RACK" archive code. |
| IPM Tablet Protective Case | DRAFT / CONTENT_REVIEW | —                     | INDIVIDUAL_PROJECT | Needs owner verification. Potential development-story project. Not homepage media.                             |
| Adagio Audio System        | CLIENT_REVIEW          | —                     | INDIVIDUAL_PROJECT | Needs client approval. No public Crestron attribution until approved.                                          |
| Tamarack Country Club      | LEGACY / SECONDARY     | —                     | INDIVIDUAL_PROJECT | Architecture-adjacent. Secondary positioning.                                                                  |
| VIRT                       | DRAFT                  | —                     | INDIVIDUAL_PROJECT | Insufficient content for publication.                                                                          |
| Medical projects (various) | HOLD                   | —                     | INDIVIDUAL_PROJECT | Owner approval required. Never infer details.                                                                  |
| Defense projects (various) | HOLD                   | —                     | INDIVIDUAL_PROJECT | Owner approval required. Never infer details.                                                                  |
| Legacy Phase 0A projects   | RECOVERY_PENDING       | RESTORATION_CANDIDATE | INDIVIDUAL_PROJECT | Awaiting content/media recovery. Retain known URL and name.                                                    |

### Future Recovery Candidates

Known projects that must be structurally accommodated but are not yet in the system:

- ORAL4
- PreLynx
- MG-NINE
- HoverBoard
- Halevai
- Regain Medical
- Koffti
- Star Guard
- Falcon+

These projects require no current content. The data model, routing, and taxonomy must support their future addition without schema changes.

---

## 9. Anti-Duplication Rules (Enforced)

These rules are absolute. No exceptions without Design/Product Lead amendment.

### Rule 1: No Tag Duplication

Every tag exists in exactly one canonical form. No synonyms, no variants.

- Correct: `consumer-products`
- Wrong: `consumer-products` AND `consumer` AND `consumer-product`

### Rule 2: No Plural/Singular Variants

Pick one form. Enforce it everywhere.

- Industry names: singular canonical form as defined in Section 1 (e.g., "Consumer Products", not "Consumer Product").
- Capability names: singular canonical form as defined in Section 2 (e.g., "Mechanical Engineering", not "Mechanical Eng.").
- Never display different forms on different pages.

### Rule 3: No Arbitrary New Taxonomy

Adding a new industry, capability, lifecycle stage, or status requires **explicit Design/Product Lead approval**. No developer, designer, or content author may invent new taxonomy terms.

### Rule 4: No Unverified Lifecycle Stages

A lifecycle stage badge appears on a project page ONLY when there is verified evidence that the project reached that stage. No inferred stages. No "probably went through DVT."

### Rule 5: No Populating Tags Without Evidence

Project tags (industry, capability, lifecycle stage) must be backed by evidence. Do not tag a project as `medical` because it "looks medical." Do not tag as `mechanical-engineering` because it has a mechanism. Tags require verified attribution.

### Rule 6: Collections Cannot Become Accidental Case Studies

A `COLLECTION` entity may have a filtered project list view. It may NOT have a narrative case-study layout. Collections are organizational, not presentational. If a collection page starts looking like a project detail page, it has crossed a boundary — redesign it as a filtered list.

---

## 10. Amendment Log

| Date       | Amendment | Description                                                                                                                                                                                                        |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2026-03-15 | Initial   | Taxonomy established with 6 industries, 10 capabilities, 5 lifecycle stages, 8 statuses, 4 entity types, 5 display readiness states                                                                                |
| 2026-09-17 | Rewrite   | Aligned mega menu groups to updated specification (Strategy & Development, Design, Engineering, Prototype & Production). Added PROCESS_DEMO entity type. Clarified collection rules. Added media type granularity. |
