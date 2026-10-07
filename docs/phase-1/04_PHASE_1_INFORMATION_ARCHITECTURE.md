# Phase 1 — Information Architecture

> **Document role:** This is the master information architecture for 123.design. No production code. Architecture only. Every subsequent phase — visual design, component architecture, content authoring, development, SEO implementation — derives from decisions made here. Nothing in later phases should contradict this document without an explicit amendment.

---

## 1. Document Purpose

This document defines the complete UX architecture for 123.design:

- What pages exist and why
- Who each page serves
- What each page must accomplish
- How visitors move from entry to conversion
- What content is required vs. conditional
- What is explicitly excluded

Phase 1 answers the structural questions. Later phases answer the visual and implementation questions. This document contains no framework choices, no component libraries, no code — architecture only.

---

## 2. Design Principles

These nine principles govern all information architecture decisions. When principles conflict, the earlier principle wins.

| #   | Principle                                        | Meaning                                                                                                                                      |
| --- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Proof before promises**                        | Show real work before describing capabilities. Evidence before claims. A visitor should see a product before reading a slogan.               |
| 2   | **Specificity before slogans**                   | "We engineered a Class II medical device enclosure" beats "We deliver excellence." Concrete language builds more trust than abstract claims. |
| 3   | **Projects before corporate history**            | What we have built matters more than when we were founded. Portfolio leads the narrative.                                                    |
| 4   | **Technical depth without jargon dumping**       | Use correct technical language. Do not stack buzzwords to sound impressive. Depth should feel natural, not performative.                     |
| 5   | **Progressive disclosure**                       | Summary first, detail on request. Do not overwhelm visitors with everything at once. Let the narrative unfold.                               |
| 6   | **Conditional content rather than placeholders** | If content does not exist, hide the section. Never fill space with filler, "coming soon," or fabricated material.                            |
| 7   | **Mobile parity**                                | Mobile users get the same content and capability as desktop users. No hidden sections, no degraded experience.                               |
| 8   | **SEO pages must still be good UX pages**        | A page optimized for search must also be genuinely useful to a human reader. SEO serves UX, not the reverse.                                 |
| 9   | **One clear primary conversion**                 | START A PROJECT is the single primary conversion action. Everything else is secondary.                                                       |

---

## 3. Design Lead Decisions (Authoritative)

These 14 decisions are non-negotiable constraints. All architecture, content, and design work must comply.

### DLD-01: Portfolio Strategy — HYBRID

The portfolio supports **two separate evidence pools**:

1. **Local archive** — projects verified with existing local assets (renders, photographs, documentation already in hand).
2. **Phase 0A public portfolio** — projects recovered from the legacy/public site at a later date.

These pools are distinct. They do not merge automatically. Future recovered projects must be structurally easy to add without re-architecting the portfolio system.

**Known future recovery candidates:** ORAL4, PreLynx, MG-NINE, HoverBoard, Halevai, Regain Medical, Koffti, Star Guard, Falcon+. The taxonomy and data model must accommodate these without schema changes.

### DLD-02: Product Development Leads the Brand

**Primary message:** FROM IDEA TO PRODUCTION.

**Core capabilities (in priority order):**

1. Industrial design
2. Engineering (mechanical, electrical)
3. Prototyping
4. Tooling
5. Manufacturing
6. Program management

**Architecture is secondary/legacy.** It does not lead the homepage, main capabilities narrative, default portfolio view, or primary conversion path.

**Web design and graphic design are NOT launch-primary.** They may appear as historical context or secondary capabilities but must not compete with product development messaging.

### DLD-03: Medical + Defense — Build Support Only

Projects in medical and defense industries remain **DRAFT or HOLD** until explicit owner approval for publication.

**Never infer:**

- Customers or client names
- Regulatory approvals (FDA, CE, etc.)
- Government contracts or relationships
- Certifications (ISO 13485, ITAR, etc.)
- Deployment or field use
- Confidential work details
- Results or outcomes

Language on medical and industry pages must be careful, factual, and limited to verified capability statements.

### DLD-04: Client-Branded Projects

**Visible branding does not equal a confirmed client relationship.**

- **Adagio Audio System** — HOLD. No public publication until client review complete.
- **Crestron** — No public Crestron attribution until explicitly approved.
- **IPM Tablet Protective Case** — Internal reference only. Use "Tablet Protective Case / IPM" if needed. Do not elaborate beyond verified content.
- **Apple** — Do not describe Apple as a client. Do not infer a relationship from branded assets.

### DLD-05: Spuny — Flagship Media Candidate

Spuny Smart Spoon is the strongest candidate for a rich, narrative case-study format. However:

**Do not invent:**

- The design challenge
- Engineering process details
- Prototype outcomes
- Launch story
- Commercial results

Use a rich case-study layout structure. Where content is unknown, mark `[CONTENT REQUIRED]` — do not fill with plausible-sounding fabrications.

### DLD-06: DBLL — Light Project Detail

DBLL Adjustable Dumbbell is a **light project detail** candidate.

- Use original design and render assets only.
- **Never use AdobeStock assets as proof of work.** Stock imagery is not evidence of capability.

### DLD-07: Bath Tray

- **Internal reference:** PRJ-LOCAL-0022
- **Public name:** Bath Tray / Caddy
- **Do not expose** the "RACK" archive code or internal project numbering in any user-facing context.

### DLD-08: IPM

IPM is a potential future **development-story** project. It may demonstrate engineering process, protective design, or manufacturing problem-solving once content is verified.

**Do not** use IPM as primary homepage media. It is not the strongest visual proof available.

### DLD-09: Architecture

Architecture work **does not lead** any of the following:

- Homepage hero or featured sections
- Main capabilities narrative
- Default portfolio view
- Primary conversion path

Architecture **may** exist as:

- A legacy category (historical context)
- Secondary work display (filtered/sorted behind product development)
- A future archive section (if and when content is organized)

### DLD-10: Prototyping

Process media for prototyping is **strategically important** — it demonstrates hands-on making capability that differentiates 123.design from render-only studios.

- Use contained visual modules (grid/mosaic layouts) for process documentation.
- **Do not assume generative upscaling** of images. Work with verified-resolution assets only.

### DLD-11: Video

Homepage video behavior:

- Muted autoplay, looping.
- Editorially ordered product-development reel — not randomized.
- **Small selected reel**, not all 44 available videos preloaded.
- Curated for narrative flow: concept, design, prototype, build, product.

### DLD-12: Portfolio Collections

Internal collections are **organizational tools, not public content**:

- Medical Device Portfolio — internal
- Military/Defense Portfolio — internal
- Consumer Electronics Portfolio — internal

**The work grid displays INDIVIDUAL_PROJECT or approved PROJECT_FAMILY only.** Collections never publish as individual project cards.

### DLD-13: Archive Categories

The following are **never user-facing portfolio categories**:

- OLD
- OUTSOURCE 60
- ALL

These are internal archive management labels. They must never appear in navigation, filters, or public-facing taxonomy.

### DLD-14: Legacy Recovery

The architecture must **leave space** for legacy projects — data structures, routes, and content models should not prevent old projects from being added later.

**Do not research legacy projects.** The Design/Product Lead provides recovered content separately. Phase 1 builds the container; content fills it later.

---

## 4. Business Objectives

The site must accomplish all 10 objectives. They are ordered by priority but not mutually exclusive.

| #   | Objective                                                        | What success looks like                                                                                |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1   | **Establish trust quickly**                                      | A first-time visitor believes within 10 seconds that this is a real, capable product development firm. |
| 2   | **Demonstrate real product-development capability**              | Portfolio shows actual products, not concepts or student work. Process pages show real stages.         |
| 3   | **Make portfolio/work highly visible**                           | Work is one click from any page. Featured on homepage. Filterable by industry and capability.          |
| 4   | **Communicate depth beyond industrial design**                   | A visitor who only expects "design firm" discovers engineering, prototyping, tooling, manufacturing.   |
| 5   | **Demonstrate engineering and manufacturing competence**         | Technical pages show real engineering language, real process knowledge, real manufacturing awareness.  |
| 6   | **Show concept-through-production ability**                      | The lifecycle narrative (CON → EVT → DVT → PVT → Production) is visible and credible.                  |
| 7   | **Speak credibly to founders AND established engineering teams** | Tone and content work for both "I have an idea" and "I need a development partner for our team."       |
| 8   | **Generate qualified project inquiries**                         | The Start Project flow attracts serious inquiries with enough context to begin scoping.                |
| 9   | **Reduce low-quality/inappropriate leads**                       | Clear positioning, honest capability statements, and qualifying questions filter mismatched inquiries. |
| 10  | **Create extensible platform for future content**                | Architecture supports future projects, articles, capability expansions without rework.                 |

---

## 5. Primary Audiences

Five audience segments. Each has distinct questions the site must answer.

### Audience A: Founder / Inventor

**Mindset:** "I have an idea. Can these people make it real?"

**Key questions:**

- Can you make my idea real?
- Where do I start?
- How much can you handle — do I need to manage other vendors?
- Will you protect my idea?
- Can you manufacture it, or just design it?

**Content implications:** Clear process explanation, approachable language, Start Project as low-friction entry, IP protection mentioned, manufacturing capability visible.

### Audience B: Product / Engineering Director

**Mindset:** "Can these people plug into our development process?"

**Key questions:**

- Can you augment our team, not replace it?
- Do you understand structured development (stage gates, reviews)?
- Can you work within our Jira / review process?
- Can you handle ME, EE, prototyping, validation?
- Do you support EVT / DVT / PVT?

**Content implications:** Technical depth on capability pages, process page with real stage language, engineering-specific terminology used correctly, case studies showing integration with client teams.

### Audience C: Established Company / Innovation Team

**Mindset:** "Can you own a subsystem or a complete program?"

**Key questions:**

- Can you handle complex, multi-discipline work?
- Can you move quickly without cutting corners?
- Can you own a subsystem or run a complete program?
- Can you bridge design and production (not just one)?

**Content implications:** Program management capability, cross-discipline case studies, manufacturing proof, scale-appropriate language.

### Audience D: Operations / Sourcing / Manufacturing

**Mindset:** "Can you take a design all the way to volume production?"

**Key questions:**

- Do you design for manufacturing, or just for prototypes?
- Do you understand tooling, suppliers, quality?
- Can you take a design into pilot and production?

**Content implications:** Manufacturing and tooling capability pages, DFM content, supplier coordination evidence, production validation language.

### Audience E: Referral / Returning Client

**Mindset:** "I know these people. How do I re-engage?"

**Key questions:**

- How do I reach the right person?
- Can I start another project easily?
- What new capabilities have you added?

**Content implications:** Clear contact paths, about page with team/firm updates, insights showing current activity, easy re-engagement flow.

---

## 6. Primary Navigation (Locked)

### Desktop Primary Navigation

```
[Logo]  WORK  CAPABILITIES  PROCESS  INDUSTRIES  ABOUT  INSIGHTS  [START A PROJECT]
```

- **Logo** = HOME (links to `/`)
- **START A PROJECT** = primary CTA button in header, visually distinguished

### CAPABILITIES — Grouped Mega Menu

CAPABILITIES uses a grouped mega menu with four categories:

```
CAPABILITIES
  STRATEGY & DEVELOPMENT
    Product Development

  DESIGN
    Industrial Design
    Product Animation

  ENGINEERING
    Mechanical Engineering
    Electrical Engineering

  PROTOTYPE & PRODUCTION
    Prototyping
    Testing & Validation
    Tooling
    Manufacturing
    Program Management
```

Each mega menu item includes a short one-line description. "View All Capabilities" link at the bottom routes to `/capabilities`.

### INDUSTRIES — Simple Dropdown

INDUSTRIES uses a simple dropdown (no grouped layout):

```
INDUSTRIES
  Consumer Products
  Medical
  Defense & Security
  Electronics
  Industrial
  Emerging Technology

  View All Industries →
```

### Explicitly Excluded from Primary Navigation

Do NOT add any of the following to the primary navigation bar:

- Services (capabilities covers this)
- Gallery (work covers this)
- Network (not a concept for this site)
- FAQ (utility page, accessible from footer)
- Contact (secondary to Start Project)

These items may exist as pages but do not earn primary nav real estate.

---

## 7. Homepage Narrative — 16 Sections

The homepage follows a deliberate narrative arc across 16 sections. Each section answers the question the previous section raises.

### Section 01 — HEADER

Global navigation component (see Section 6). On homepage: initial state overlays hero with transparent background. Transitions to solid on scroll.

### Section 02 — HERO: FROM IDEA TO PRODUCTION

| Field           | Value                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Eyebrow         | PRODUCT DEVELOPMENT · ENGINEERING · MANUFACTURING                                                                |
| Primary message | FROM IDEA TO PRODUCTION                                                                                          |
| Support text    | "We design, engineer, prototype and manufacture products for startups, established companies and global brands." |
| Primary CTA     | START A PROJECT                                                                                                  |
| Secondary CTA   | VIEW OUR WORK                                                                                                    |
| Media           | Short muted autoplay looping product-development reel. Fallback: poster still image.                             |

**Constraints:** No fake metrics. No stock imagery. Video: muted, autoplay, loop, editorially ordered. Poster image must be a real product photograph or verified render.

### Section 03 — WHAT WE DO

Concise capability statement. What 123.design does, for whom, and what makes the firm different. This is the verbal pitch — the elevator statement that follows the visual hero.

Sets up the proof that follows in Section 04.

### Section 04 — FEATURED WORK (2–3 Projects)

**Section heading:** "PRODUCTS WE'VE HELPED BRING TO LIFE"

- Displays **individual projects only** (INDIVIDUAL_PROJECT or approved PROJECT_FAMILY).
- No portfolio collections displayed as project cards.
- Initial projects: Spuny Smart Spoon, DBLL Adjustable Dumbbell, Bath Tray / Caddy.
- Each card links to `/work/[project-slug]`.
- Cards show: hero image, project name, industry tag, capability tags.

### Section 05 — CAPABILITY OVERVIEW

Six homepage group cards summarizing the capability range:

1. **Product Development** — End-to-end concept-through-production
2. **Industrial Design** — Form, experience, aesthetics, usability
3. **Engineering** — Mechanical, electrical, systems
4. **Prototyping** — Rapid iteration, functional prototypes, form validation
5. **Tooling & Manufacturing** — DFM, tooling, supplier coordination, production
6. **Program Management** — Stage-gate, timeline, cross-functional coordination

Each card links to `/capabilities` or directly to the relevant capability detail page.

### Section 06 — LIFECYCLE / PROCESS TEASER

**Section heading:** "ONE TEAM. EVERY DEVELOPMENT STAGE."

Displays the five lifecycle stages as a teaser:

1. **CON** — Concept
2. **EVT** — Engineering Validation Test
3. **DVT** — Design Validation Test
4. **PVT** — Production Validation Test
5. **PRODUCTION** — Volume Manufacturing

Each stage: short description of what happens, what 123.design delivers, visual indicator. Links to `/process` for full detail.

### Section 07 — INDUSTRY REACH

Six industry categories demonstrating breadth of experience:

1. Consumer Products
2. Medical
3. Defense & Security
4. Electronics
5. Industrial
6. Emerging Technology

**Constraint:** Projects in Medical and Defense that require approval are NOT auto-exposed. These industry pages show capability statements and approved work only.

### Section 08 — PHILOSOPHY / APPROACH

Four working-principle cards:

1. **Transparent** — Open communication, shared tools, visible progress
2. **Integrated** — Plug into your team, your process, your tools
3. **Iterative** — Prototype, test, learn, refine — not waterfall handoffs
4. **Production-minded** — Every design decision considers manufacturing reality

### Section 09 — TEAM / FACILITY TEASER

Brief introduction to the people and the place. Human credibility. A glimpse of the team, the shop, the tools — enough to establish that real people in a real facility do this work.

Links to `/about` for full detail.

### Section 10 — INSIGHTS TEASER

Preview of recent technical content. Shows the firm is active and thinking. Links to `/insights` for the full index.

**Conditional:** If no published insights exist, this section does not render.

### Section 11 — FEATURE PROJECT / STORY

One large narrative block. Spuny may occupy this position visually.

- Rich case-study format: large imagery, narrative text, process highlights.
- **No invented facts.** Where content is unknown: `[CONTENT REQUIRED]`.
- Replaceable with a stronger case study when one becomes available.

### Section 12 — PROCESS / MAKING PROOF

Local prototyping assets displayed in a grid or mosaic layout.

**Techniques shown:** FDM, SLA/SLS, RTV tooling, sheet metal, carbon fiber, finishing, prototype builds.

- Contained visual modules.
- Real process photography and verified renders only.
- No generative upscaling assumed.

### Section 13 — YOUR PROCESS OR OURS

Demonstrates flexibility in engagement models.

**Their process:** Requirements intake, Jira integration, design reviews, alignment with existing workflows.

**Our process:** CAD/EE development, BOM management, prototype iteration, validation testing, release management.

Shows that 123.design can plug into an existing team's workflow or run an independent development program.

### Section 14 — MANUFACTURING

**Section heading:** "DESIGN DOESN'T END AT THE RENDER"

Content areas:

- DFM (Design for Manufacturing)
- Tooling development
- Supplier coordination
- Pilot build
- Quality processes
- Production ramp

Demonstrates that 123.design follows the product past design into real manufacturing.

### Section 15 — CLIENT / TRUST + TESTIMONIALS

**Both conditional.**

- **Client logos:** Display only when approved client logos exist. No placeholder, no "coming soon."
- **Testimonials:** Display only when real, approved testimonials exist (1-3 with attribution). **Never fabricate testimonials.**
- If neither exists: section does not render.

### Section 16 — FINAL CTA

**Primary:** "HAVE A PRODUCT TO BUILD? START YOUR PROJECT"
**Secondary:** "Schedule a conversation"

Clear, single conversion point. Not aggressive — confident.

### FOOTER

Standard footer with:

- START A PROJECT CTA
- Primary navigation links (Work, Capabilities, Process, Industries, About, Insights)
- Utility links (Contact, FAQ, Privacy, Terms)
- Contact info (verified only)
- Social links (verified only)
- Copyright notice

---

## 8. Portfolio Strategy

### Hybrid Model

The portfolio supports two separate evidence pools:

1. **Local archive** — projects verified with existing local assets (renders, photographs, documentation already in hand).
2. **Legacy/public-site recovery** — projects recovered from the legacy/public site at a later date (Phase 0A output).

These pools are distinct. They do not merge automatically. Future recovered projects must be structurally easy to add without re-architecting the portfolio system.

### Entity Type Restriction

Only **INDIVIDUAL_PROJECT** and **PROJECT_FAMILY** entity types publish as work cards. No other entity type — collections, archive buckets, aggregate containers — may appear as a project card in any public view.

### Project Publication States

| Status             | Meaning                                             | Visible on Site? |
| ------------------ | --------------------------------------------------- | ---------------- |
| `DRAFT`            | In progress, not ready for review                   | No               |
| `CONTENT_REVIEW`   | Content complete, awaiting internal review          | No               |
| `CLIENT_REVIEW`    | Shared with client for approval                     | No               |
| `READY`            | Approved, ready to publish but not yet live         | No               |
| `PUBLISHED`        | Live and visible on the site                        | **Yes**          |
| `ARCHIVED`         | Previously published, now removed from public view  | No               |
| `RECOVERY_PENDING` | Legacy project awaiting content/media recovery      | No               |
| `HOLD`             | Medical/defense project held pending owner approval | No               |

Only `PUBLISHED` projects appear in the work grid, work index, filters, and search.

### Display Readiness

| State                   | Meaning                                                          |
| ----------------------- | ---------------------------------------------------------------- |
| `FULL_BLEED_READY`      | Has hero-quality image/video for full-width display              |
| `CARD_READY`            | Has thumbnail-quality image for card display                     |
| `GALLERY_READY`         | Has multiple images suitable for gallery display                 |
| `PROCESS_READY`         | Has process/prototyping imagery                                  |
| `RESTORATION_CANDIDATE` | Has some assets but needs additional content before full display |

A project must be `CARD_READY` minimum to appear in the work grid. `FULL_BLEED_READY` is required for homepage feature positions. `RESTORATION_CANDIDATE` is a working state — never user-facing.

### Medical / Defense Restriction

Medical and defense projects remain `HOLD` until explicit owner approval for publication. No inference of clients, regulatory approvals, government contracts, certifications, deployments, or results.

### Client-Branded Project Restriction

Client-branded projects (Adagio, IPM) need explicit approval before publication. Visible branding does not equal a confirmed client relationship. No public attribution until the client review is complete.

---

## 9. Portfolio Seed States

Initial project data for launch. Each project's expected state:

| Project                    | Status                 | Display Readiness | Notes                                                                                                          |
| -------------------------- | ---------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------- |
| Spuny Smart Spoon          | PUBLISHED-CANDIDATE    | FULL_BLEED_READY  | Flagship case study. Consumer product. Rich narrative format. Content gaps marked [CONTENT REQUIRED].          |
| DBLL Adjustable Dumbbell   | PUBLISHED-CANDIDATE    | CARD_READY        | Electronic device. Light project detail. Original design/render assets only. Never use AdobeStock assets.      |
| Bath Tray / Caddy          | PUBLISHED-CANDIDATE    | CARD_READY        | Consumer product. Internal: PRJ-LOCAL-0022. Public name: Bath Tray / Caddy. Do not expose "RACK" archive code. |
| IPM Tablet Protective Case | DRAFT / CONTENT_REVIEW | —                 | Needs owner verification. Potential development-story project. Not homepage media.                             |
| Adagio Audio System        | CLIENT_REVIEW          | —                 | Needs client approval. No public Crestron attribution until approved.                                          |
| Tamarack Country Club      | LEGACY / SECONDARY     | —                 | Architecture-adjacent. Secondary positioning.                                                                  |
| VIRT                       | DRAFT                  | —                 | Insufficient content for publication.                                                                          |
| Medical projects (various) | HOLD                   | —                 | Owner approval required. Never infer details.                                                                  |
| Defense projects (various) | HOLD                   | —                 | Owner approval required. Never infer details.                                                                  |
| Legacy Phase 0A projects   | RECOVERY_PENDING       | —                 | Awaiting content/media recovery. Retain known URL and name.                                                    |

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

## 10. Content Gating — Conditional Rendering Rules

Sections and modules render only when their content requirements are met. No placeholders. No filler. No "coming soon."

| Content Element             | Renders When                     | Hides When                                           |
| --------------------------- | -------------------------------- | ---------------------------------------------------- |
| Metrics block               | Verified metrics exist           | No verified metrics → hide metrics block             |
| Testimonial block           | Real approved testimonials exist | No testimonials → hide testimonial block             |
| Client logo block           | Approved client logos exist      | No approved client logos → hide client-logo block    |
| Related work module         | Published related work exists    | No published related work → hide related-work module |
| Manufacturing result module | Manufacturing result documented  | No manufacturing result → don't show result module   |
| Project stage badge         | Stage evidence verified          | No project stage evidence → don't show stage badge   |
| Project card in work grid   | Project status = PUBLISHED       | Any other status → exclude from grid                 |
| Industry project filter     | Industry has PUBLISHED projects  | No published projects → hide filter option           |
| Insights teaser             | Published insights exist         | No published insights → hide teaser section          |

---

## 11. CTA Hierarchy

Three tiers of call-to-action across the entire site.

### PRIMARY: START A PROJECT

The single primary conversion action. Appears in: global header, homepage hero, after featured work, after lifecycle/process sections, capability page endings, industry page endings, case study endings, about ending, footer.

Visually distinguished: filled button, prominent placement.

### SECONDARY: VIEW OUR WORK

Secondary action for visitors not ready to start a project. Appears in: homepage hero, capability pages, industry pages, project detail pages.

Visually subordinate to primary: outlined or text button.

### TERTIARY

Lower-commitment actions for visitors exploring:

- **Explore Capability** — Links to a specific capability detail page from related context.
- **See Process** — Links to `/process` from capability or project context.
- **Schedule Conversation** — Lower-commitment alternative to Start Project. Used on medical, defense, and about pages where visitors may want a discussion before a project inquiry.

---

## 12. Key Constraints

These constraints are absolute. No exceptions without Design/Product Lead amendment.

1. **No inventing metrics.** Do not fabricate "500+ products," "50+ clients," or any quantitative claim without verified source.
2. **No inventing testimonials.** Do not write fake client quotes or attribute statements that were not explicitly provided.
3. **No inventing client logos.** Do not use logos that have not been explicitly approved for public display.
4. **No inventing certifications.** Do not claim ISO, FDA, ITAR, or any other certification without verified evidence.
5. **No automatic migration of legacy content.** Legacy projects require manual review and status assignment. No bulk publishing.
6. **Medical/defense projects remain HOLD** until owner approval. No exceptions.
7. **Architecture does not lead.** Product development leads the brand. Architecture is secondary/historical.
8. **Stock imagery is never proof of work.** AdobeStock, Shutterstock, and similar assets cannot represent capability.
9. **Collections never publish as work cards.** Only INDIVIDUAL_PROJECT and PROJECT_FAMILY appear in public grids.
10. **Internal archive labels never surface.** OLD, OUTSOURCE 60, ALL, and similar archive management tags are invisible to users.

---

## 13. Accessibility Requirements

WCAG 2.2 AA intent. All pages must comply.

### Structural

- Skip link to main content
- Proper landmark regions (header, nav, main, footer)
- Single H1 per page
- Logical heading hierarchy (H1 → H2 → H3, no skipping)

### Interaction

- Full keyboard navigation
- Visible focus indicators on all interactive elements
- Minimum 44px touch/click targets
- Form fields have associated labels
- Inline field error messages
- Error summary at top of form on submission failure
- Modal/dialog focus trapping and return

### Media

- Video captions where meaningful audio exists
- Transcripts for audio content where meaningful
- `prefers-reduced-motion` respected — no forced animation

### State Communication

- No hover-only information (all hover content also reachable by focus/click)
- No color-only state communication (always pair with text, icon, or pattern)
- Active/current page indicated in navigation

---

## 14. Data Requirements Summary

### Project Entity

Each project requires:

- Unique slug
- Public display name
- Short description (1-2 sentences)
- Long description / narrative
- Industry tag(s) — from controlled vocabulary
- Capability tag(s) — from controlled vocabulary
- Lifecycle stage(s) — from controlled vocabulary, evidence-backed
- Hero image (verified asset)
- Gallery images (verified assets)
- Video assets (optional, verified)
- Publication status — from controlled vocabulary
- Display readiness — from controlled vocabulary
- Client attribution rules (branded, anonymous, internal only)

### Capability Entity

Each capability requires:

- Unique slug
- Display name
- Mega menu group assignment
- Short description
- Long description
- Related projects (slugs)
- Related capabilities (slugs)
- Hero image

### Industry Entity

Each industry requires:

- Unique slug
- Display name
- Short description
- Long description
- Related projects (slugs)
- Hero image
- Approval requirements flag (medical, defense)

### Article Entity (Insights)

Each article requires:

- Unique slug
- Title
- Author
- Publish date
- Body content
- Hero image
- Related capabilities (slugs)
- Related industries (slugs)

---

## 15. Amendment Log

This document is authoritative. Changes require explicit Design/Product Lead approval.

| Date       | Amendment | Description                                                                                                                                                                                               |
| ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-03-15 | Initial   | Phase 1 IA established                                                                                                                                                                                    |
| 2026-09-17 | Rewrite   | Aligned to updated specification: 16-section homepage, mega menu groups (Strategy & Development, Design, Engineering, Prototype & Production), content gating rules, CTA hierarchy, portfolio seed states |
