# BUILD 010 — INDUSTRIES & PROCESS SYSTEMS

**Build:** 010 — Industries Index/Detail + Process Page
**Date:** 2026-09-28
**Status:** LOCKED
**PATCH 001:** Applied — corrections to process, industries, and capabilities data layer

---

## SCOPE

Implementation of `/industries` index page, `/industries/[slug]` detail pages with canonical registry-controlled routing, `/process` page with lifecycle mosaic, detailed stage sections, 8-step workflow, principles, CMS-absent static fallback, CMS-active published-only enforcement, preview mode with noindex/nofollow/noarchive, and comprehensive testing.

### Industries Feature (`src/features/industries/`)

#### Registry (`registry.ts`)

- `CANONICAL_INDUSTRIES` — 6 industries: consumer-products, medical, defense-security, electronics, industrial, emerging-technology
- `isCanonicalIndustrySlug()` — Set-based O(1) lookup
- `getCanonicalIndustry()` — find by slug
- `getCanonicalSlugsForStaticParams()` — returns `{ slug: string }[]` for `generateStaticParams()`

#### Types (`types.ts`)

- `StaticIndustryDefinition` — full industry definition (slug, title, shortDescription, userNeed, relatedCapabilitySlugs)
- `IndustryIndexEntry` — lightweight entry for index cards (slug, title, shortDescription)
- `IndustryPageData` — full page data (slug, title, shortDescription, intro, typicalChallenges, developmentConsiderations, relatedCapabilities, relatedProjects, heroMedia, isPreview, cmsAvailable)

#### Content (`content.ts`)

- `INDEX_EYEBROW` — 'INDUSTRIES'
- `INDEX_HEADING` — 'BUILT FOR PRODUCTS\nTHAT HAVE TO WORK.'
- `INDEX_SUPPORTING` — supporting text
- `INDUSTRY_EYEBROW` — 'INDUSTRY'
- `FINAL_CTA_*` — uniform CTA content (HAVE A PRODUCT TO BUILD? / START YOUR PROJECT / /start-project)
- `RELATED_CAPABILITIES_HEADING` — related capabilities section heading
- `CHALLENGES_EYEBROW` / `CONSIDERATIONS_EYEBROW` — section eyebrows

#### Data Composition Layer (`data.ts`)

- `getIndustriesIndexData()` — CMS-absent: static entries from registry; CMS-active: fetches published, filters nulls, merges with canonical order. Errors propagate.
- `getIndustryPageData(slug)` — validates canonical slug (notFound if not), checks draftMode, fetches CMS or falls back to static. CMS-active missing → notFound().
- `buildStaticPageData(slug)` — uses `getCanonicalIndustry()`, returns full page data
- `resolveRelatedCapabilities()` — max 4, resolves from registry
- `resolveRelatedProjects()` — max 3, errors propagate (no try/catch)

### Process Feature (`src/features/process/`)

#### Content (`content.ts`)

- `PAGE_EYEBROW` — 'PROCESS'
- `PAGE_HEADING` — 'FROM IDEA TO PRODUCTION.'
- `PAGE_SUPPORTING` — supporting text
- `LIFECYCLE_HEADING_LINES` — ['ONE TEAM.', 'EVERY DEVELOPMENT STAGE.']
- `PROCESS_STAGE_DETAILS` — 5 stages (CON, EVT, DVT, PVT, PRODUCTION) with code, label, activities[]
- `WORKFLOW_HEADING_LINES` — ['YOUR PROCESS', 'OR OURS.']
- `WORKFLOW_INTRO` — workflow intro text
- `WORKFLOW_STEPS` — 8 ordered steps (Requirements, Jira, Design Reviews, CAD/EE, BOM, Prototype, Validation, Release)
- `PROCESS_PRINCIPLES` — 4 principles (TRANSPARENT, INTEGRATED, ITERATIVE, PRODUCTION-MINDED)
- `FINAL_CTA_*` — CTA content

### Components (12 components — ALL server components, zero client components)

#### Industry Components (7)

All in `src/features/industries/components/`:

1. `IndustryCard.tsx` — Link card with title, shortDescription; links to `/industries/[slug]`
2. `IndustryHero.tsx` — Media (image/video), INDUSTRY eyebrow, title, shortDescription
3. `IndustryBody.tsx` — Intro text with reading container; null when no intro
4. `IndustryChallenges.tsx` — Bulleted list of challenges; eyebrow + heading; null when empty
5. `IndustryConsiderations.tsx` — Bulleted list of considerations; eyebrow + heading; null when empty
6. `IndustryRelatedCapabilities.tsx` — Links to related capabilities; null when empty
7. `IndustryRelatedProjects.tsx` — Project cards; null when empty (no projects)
8. `IndustryCta.tsx` — Uniform CTA: HAVE A PRODUCT TO BUILD? / START YOUR PROJECT → /start-project

#### Process Components (5)

All in `src/features/process/components/`:

1. `ProcessHero.tsx` — PROCESS eyebrow, heading, supporting text, shell container
2. `ProcessMosaic.tsx` — 5 lifecycle stage cards with codes and labels, LIFECYCLE eyebrow
3. `ProcessStageSection.tsx` — Detailed stage section: code badge, label, activities list, data-stage attribute
4. `ProcessWorkflow.tsx` — "YOUR PROCESS OR OURS." heading, intro, 8 ordered steps
5. `ProcessPrinciples.tsx` — 4 principles grid, HOW WE WORK heading
6. `ProcessCta.tsx` — End-of-page CTA with button to /start-project

### Page Routes

- `src/app/industries/page.tsx` — Index page; server component; hero + grid of IndustryCards + IndustryCta
- `src/app/industries/[slug]/page.tsx` — Detail page; `generateStaticParams()` from canonical registry; `generateMetadata()` with preview noindex + noarchive; composes all detail components; uniform CTA
- `src/app/process/page.tsx` — Process page; server component; hero + mosaic + 5 stage sections + workflow + principles + CTA

### Styling

- `src/styles/industries.css` — BEM naming, design tokens:
  - Index hero: editorial intro with eyebrow, heading, supporting text
  - Industries grid: responsive 1→2→3 columns
  - Industry card: link card with hover border transition, focus-visible outline
  - Detail hero: full-width media, overlaid content
  - Challenges/considerations: bulleted lists with accent dots
  - Related capabilities/projects: bordered link lists
  - CTA: uniform call to action
  - Mobile adjustments: reduced padding at < 768px

- `src/styles/process.css` — BEM naming, design tokens:
  - Process hero: editorial intro
  - Mosaic: 5 stage cards in grid (code + label only)
  - Stage sections: code badge, label, activities list
  - Workflow: ordered steps with step numbers
  - Principles: grid of principle cards
  - CTA: end-of-page call to action
  - Mobile adjustments: reduced padding at < 768px

### Constraints

- Zero client components (all 12 components are server components)
- No new dependencies (0 runtime, 0 dev)
- No inline styles (all styling via CSS classes + data attributes)
- No raw hex values (all colors via design tokens)
- No new design tokens (uses existing token set)
- Canonical registry controls route eligibility (exactly 6 industry routes)
- CMS-absent static fallback (deliberate locked Phase 1 content)
- CMS-active published-only enforcement (null filter, no static fill)
- Uniform CTA across all industries (no variant system)
- No git commits or pushes

---

## PATCH 001 CHANGES

### BUILD 009 Prerequisite Fixes (capabilities/data.ts)

- `resolveRelatedProjects()` — errors now propagate (removed try/catch)
- `getCapabilitiesIndexData()` — CMS-active path is published-only (null filter + filter out nulls), removed outer catch
- `getCapabilityPageData()` — CMS-active missing → `notFound()` instead of `buildStaticPageData(slug)`

### Process Corrections

- Replaced 3-item WORKFLOW_ITEMS with 8-step WORKFLOW_STEPS
- Added 4 PROCESS_PRINCIPLES (TRANSPARENT, INTEGRATED, ITERATIVE, PRODUCTION-MINDED)
- Replaced PROCESS_STAGES (with descriptions/questions/outputs/tags) with PROCESS_STAGE_DETAILS (code, label, activities[])
- Added LIFECYCLE_HEADING_LINES for mosaic section
- Added ProcessStageSection component (5 detailed stage sections)
- Added ProcessPrinciples component
- Deleted ProcessDisclaimer component and DISCLAIMER_TEXT
- ProcessMosaic simplified to code + label only per card
- Process page now has 10 sections: hero + mosaic + 5 stages + workflow + principles + CTA

### Industries Corrections

- INDEX_HEADING changed to 'BUILT FOR PRODUCTS\nTHAT HAVE TO WORK.'
- Removed HIGH_RESTRICTION_SLUGS and isHighRestrictionIndustry from registry
- Removed IndustryCtaVariant type and ctaVariant from all interfaces
- Removed SCHEDULE_CTA content constants and conversation CTA variant
- Removed static related project slugs from registry definitions
- MAX_RELATED_CAPABILITIES changed from 3 to 4
- resolveRelatedProjects errors propagate (no try/catch)
- getIndustriesIndexData CMS-active filters nulls, errors propagate
- getIndustryPageData CMS-active missing → notFound()
- IndustryRelatedProjects returns null when projects.length === 0
- IndustryCta simplified to no-prop uniform CTA
- Preview metadata includes `robots: 'noarchive'`

### Test Updates

- `tests/unit/process.test.tsx` — 61 tests (content constants, all 6 components)
- `tests/unit/industries.test.tsx` — 65 tests (registry, all 8 components)
- `tests/e2e/process.spec.ts` — structure, responsive, accessibility
- `tests/e2e/industries.spec.ts` — index, detail, 404s, responsive, accessibility

---

## ACCEPTANCE CRITERIA VERIFICATION

### Foundation Layer — Industries Registry

- [x] `CANONICAL_INDUSTRIES` contains exactly 6 industries
- [x] Each industry has: slug, title, shortDescription, userNeed, relatedCapabilitySlugs
- [x] All slugs are unique
- [x] `isCanonicalIndustrySlug()` uses Set for O(1) lookup
- [x] `getCanonicalIndustry()` returns undefined for unknown slugs
- [x] `getCanonicalSlugsForStaticParams()` returns 6 `{ slug: string }` entries

### Foundation Layer — Industries Types

- [x] `StaticIndustryDefinition` — full definition
- [x] `IndustryIndexEntry` — lightweight index card data
- [x] `IndustryPageData` — full page data with related capabilities/projects

### Foundation Layer — Industries Content

- [x] `INDEX_EYEBROW` — 'INDUSTRIES'
- [x] `INDEX_HEADING` — 'BUILT FOR PRODUCTS\nTHAT HAVE TO WORK.'
- [x] `INDUSTRY_EYEBROW` — 'INDUSTRY'
- [x] `FINAL_CTA_*` — uniform CTA content

### Foundation Layer — Process Content

- [x] `PAGE_EYEBROW` — 'PROCESS'
- [x] `PAGE_HEADING` — 'FROM IDEA TO PRODUCTION.'
- [x] `PAGE_SUPPORTING` — supporting text
- [x] `LIFECYCLE_HEADING_LINES` — 2 lines
- [x] `PROCESS_STAGE_DETAILS` — 5 stages in order: CON, EVT, DVT, PVT, PRODUCTION
- [x] `WORKFLOW_HEADING_LINES` — 2 lines
- [x] `WORKFLOW_STEPS` — 8 steps numbered 1-8
- [x] `PROCESS_PRINCIPLES` — 4 principles
- [x] `FINAL_CTA_*` — CTA content

### Data Composition Layer — Industries

- [x] `getIndustriesIndexData()` returns static entries when `hasSanityConfig()` is false
- [x] `getIndustriesIndexData()` fetches published, filters nulls when CMS available
- [x] `getIndustriesIndexData()` errors propagate (no swallowed errors)
- [x] `getIndustryPageData()` calls `notFound()` for non-canonical slugs
- [x] `getIndustryPageData()` detects draft mode via `draftMode()`
- [x] `getIndustryPageData()` uses preview fetch in draft mode
- [x] `getIndustryPageData()` calls `notFound()` when CMS record not found (CMS-active)
- [x] `getIndustryPageData()` falls back to static when CMS absent
- [x] `buildStaticPageData()` returns full page data from canonical definition
- [x] `resolveRelatedCapabilities()` returns max 4, skips current slug
- [x] `resolveRelatedProjects()` returns max 3, errors propagate

### Components — Industry Components

- [x] `IndustryCard` — renders link card with title, description, href
- [x] `IndustryHero` — renders media, INDUSTRY eyebrow, title, shortDescription
- [x] `IndustryBody` — renders intro text, null when empty
- [x] `IndustryChallenges` — renders challenges list, null when empty
- [x] `IndustryConsiderations` — renders considerations list, null when empty
- [x] `IndustryRelatedCapabilities` — renders related links, null when empty
- [x] `IndustryRelatedProjects` — renders project cards, null when empty
- [x] `IndustryCta` — renders uniform CTA (no variant prop)

### Components — Process Components

- [x] `ProcessHero` — renders PROCESS eyebrow, heading, supporting text
- [x] `ProcessMosaic` — renders 5 stage cards with codes and labels
- [x] `ProcessStageSection` — renders code badge, label, activities list, data-stage
- [x] `ProcessWorkflow` — renders heading, intro, 8 ordered steps
- [x] `ProcessPrinciples` — renders HOW WE WORK heading, 4 principles
- [x] `ProcessCta` — renders CTA heading, body, button

### Page Routes — Industries

- [x] Index — server component, hero + grid + CTA, skip-link target
- [x] Detail — `generateStaticParams()` from registry, async params, preview noindex + noarchive, all 6 routes SSG
- [x] Uniform CTA across all 6 industries

### Page Routes — Process

- [x] Process — server component, hero + mosaic + 5 stage sections + workflow + principles + CTA, skip-link target

### Preview Mode — Industries

- [x] Draft mode via `draftMode()` from `next/headers`
- [x] Preview query includes draft content
- [x] Preview shows PreviewIndicator badge
- [x] Preview metadata: `robots: { index: false, follow: false }` + `noarchive`
- [x] Preview title prefixed with "Preview:"
- [x] Only canonical slugs previewable

### Canonical Registry Routing — Industries

- [x] Exactly 6 static params generated from canonical registry
- [x] Non-canonical slugs trigger `notFound()` before any CMS query
- [x] `generateStaticParams()` does not require Sanity connection
- [x] All 6 routes pre-rendered as SSG in build output

### CMS-Absent Static Fallback

- [x] Industries index renders all 6 industries without CMS
- [x] Industry detail pages render static content from canonical definitions
- [x] Process page renders static content (no CMS dependency)
- [x] `cmsAvailable: false` flag set in static mode

### CMS-Active Published-Only Enforcement

- [x] Industries index filters out null/unpublished entries
- [x] Industry detail CMS-active missing → notFound()
- [x] Capabilities index filters out null/unpublished entries
- [x] Capability detail CMS-active missing → notFound()
- [x] Errors propagate from data layer (no swallowed errors)

### Responsive Behavior

- [x] Industry card grid: 1→2→3 columns at 768px/1024px
- [x] Process mosaic: responsive grid
- [x] All sections: reduced padding at < 768px
- [x] No horizontal overflow at 360px, 390px, 1280px

### Accessibility

- [x] Skip-link target (`<main id="main-content" tabIndex={-1}>`)
- [x] Section `aria-label` attributes on mosaic, workflow, principles, stage sections, challenges, considerations
- [x] Focus-visible outlines on cards and links
- [x] PreviewIndicator `role="status"` + `aria-live="polite"`
- [x] `prefers-reduced-motion` support

### Testing

- [x] `tests/unit/industries.test.tsx` — 65 tests (registry, all 8 components)
- [x] `tests/unit/process.test.tsx` — 61 tests (content, all 6 components)
- [x] `tests/e2e/industries.spec.ts` — index, detail, 404s, responsive, accessibility
- [x] `tests/e2e/process.spec.ts` — structure, responsive, accessibility
- [x] All 902 unit tests pass (27 files)
- [x] Zero regressions

### Constraints Compliance

- [x] Zero client components
- [x] No new dependencies
- [x] No inline styles
- [x] No raw hex values
- [x] No new design tokens
- [x] Canonical registry controls routing (exactly 6 routes)
- [x] CMS-absent static fallback
- [x] No git commits or pushes

### Quality Gates

- [x] format:check — PASS
- [x] lint — 0 errors, 3 warnings (pre-existing `<img>` warnings)
- [x] typecheck — PASS
- [x] test — 902 tests passed (27 files)
- [x] build — Next.js 16.3.6 (Turbopack) compiled, 27 static pages
- [x] check — Combined gate passed

### Contamination Sweeps

- [x] No `"use client"` in industries or process features
- [x] No TODO/FIXME/HACK comments
- [x] No console statements
- [x] No hardcoded/placeholder/mock/fake content
- [x] No inline styles
- [x] No raw hex values

---

## QUALITY GATE RESULTS

```
✓ format:check — All matched files use Prettier code style
✓ lint — 0 errors, 3 warnings (all <img> warnings intentional, pre-existing)
✓ typecheck — TypeScript compilation successful (tsc --noEmit)
✓ test — 902 tests passed (27 files, 0 failures)
✓ build — Next.js 16.3.6 (Turbopack) compiled successfully
✓ check — Combined gate passed
```

---

## DEFERRED WORK

### BUILD 011 — About, Insights, FAQ & Content Pages

- About page (`/about`)
- Insights index (`/insights`)
- Article detail (`/insights/[article-slug]`) — includes Portable Text rendering
- FAQ page (`/faq`)
- Privacy page (`/privacy`)
- Terms page (`/terms`)
- Accessibility page (`/accessibility`)

Includes: article/content rendering, general content-page templates, FAQ presentation, legal/accessibility content pages.

### BUILD 012 — Start Project + Contact

- Start Project page (`/start-project`)
- Contact page (`/contact`)

Responsibilities: lead qualification funnel, lead form UI, lead validation, lead submission, attachment handling, NDA request, source URL / UTM capture, lead-destination abstraction, future CRM/email adapter boundary.

### Later Builds

- BUILD 013 — SEO, Redirects & Structured Data
- BUILD 014 — Analytics, Security & Observability
- BUILD 015 — Accessibility, Performance & Browser QA
- BUILD 016 — Content Migration & Media Optimization
- BUILD 017 — Staging Acceptance
- BUILD 018 — Production Launch

### Deferred Components

- Portable Text article rendering (BUILD 011)
- Hover video preview wiring (ProjectCardPreviewMedia → ProjectCard)

---

## NOTES

### Uniform Industry CTA

All 6 industries use the same CTA: "HAVE A PRODUCT TO BUILD?" with "START YOUR PROJECT" → /start-project. The previous variant system (standard vs conversation for high-restriction industries) was removed in PATCH 001.

### Canonical Registry Architecture

The canonical registry is the single source of truth for:

- **Route eligibility** — only 6 slugs generate static params
- **Static fallback content** — locked Phase 1 content when CMS is absent
- **Related capabilities** — explicit slugs, max 4, resolved from registry
- **Related projects** — CMS-driven, max 3

Non-canonical slugs are rejected before any CMS query. This prevents phantom routes and ensures the site structure is deterministic.

### Server-First, Zero Client Components

All 12 components (7 industry + 5 process) are server components. No interactive state, no client-side data fetching, no URL manipulation. The simplest possible architecture for content display.

### Process Lifecycle Stages

The 5 process stages (CON → EVT → DVT → PVT → PRODUCTION) represent the standard product development lifecycle. Each stage section includes:

- Code badge (CON, EVT, DVT, PVT, PRODUCTION)
- Label (Concept, Engineering Validation, Design Validation, Production Validation, Production)
- Activities list (specific tasks performed at each stage)

### 8-Step Workflow

The workflow section shows 8 ordered steps that represent the development process:

1. Requirements
2. Jira
3. Design Reviews
4. CAD / EE
5. BOM
6. Prototype
7. Validation
8. Release

### Process Principles

4 principles guide how the team works:

- TRANSPARENT — open process, visible decisions
- INTEGRATED — cross-functional collaboration
- ITERATIVE — continuous refinement
- PRODUCTION-MINDED — focused on real manufacturing

### Homepage Industry Slug Migration

BUILD 010 included fixing the homepage industry section to use the new canonical slugs and labels. The old labels were replaced with the new canonical labels (Consumer Products, Medical, Defense & Security, Electronics, Industrial, Emerging Technology). This ensures consistency across the site.

---

**BUILD 010 complete with PATCH 001. All acceptance criteria verified. LOCKED — ready for BUILD 011.**
