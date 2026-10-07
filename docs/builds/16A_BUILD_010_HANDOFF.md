# BUILD 010 — HANDOFF

**Build:** 010 — Industries & Process Systems
**Date:** 2026-09-28
**Status:** COMPLETE
**PATCH 001:** Applied

---

## ACCEPTANCE CRITERIA VERIFICATION

### Industries Foundation Layer

- [x] `registry.ts` — 6 canonical industries (no HIGH_RESTRICTION_SLUGS, no ctaVariant)
- [x] `types.ts` — StaticIndustryDefinition, IndustryIndexEntry, IndustryPageData
- [x] `content.ts` — INDEX_HEADING = 'BUILT FOR PRODUCTS\nTHAT HAVE TO WORK.', uniform CTA

### Process Foundation Layer

- [x] `content.ts` — PAGE_EYEBROW, PAGE_HEADING, PAGE_SUPPORTING, LIFECYCLE_HEADING_LINES, PROCESS_STAGE_DETAILS (5 stages with activities), WORKFLOW_HEADING_LINES, WORKFLOW_INTRO, WORKFLOW_STEPS (8 steps), PROCESS_PRINCIPLES (4), FINAL_CTA_*

### Data Composition Layer

- [x] `getIndustriesIndexData()` — CMS-absent static entries, CMS-active published-only (null filter), errors propagate
- [x] `getIndustryPageData()` — canonical slug validation, draft detection, preview/published fetch, CMS-active missing → notFound()
- [x] `resolveRelatedCapabilities()` — max 4, skip current
- [x] `resolveRelatedProjects()` — max 3, errors propagate

### Components (12 server components, 0 client components)

- [x] `IndustryCard` — Link card with title, description
- [x] `IndustryHero` — Media, INDUSTRY eyebrow, title, shortDescription
- [x] `IndustryBody` — Intro text, null when empty
- [x] `IndustryChallenges` — Challenges list, null when empty
- [x] `IndustryConsiderations` — Considerations list, null when empty
- [x] `IndustryRelatedCapabilities` — Related links, null when empty
- [x] `IndustryRelatedProjects` — Project cards, null when empty
- [x] `IndustryCta` — Uniform CTA (no variant prop)
- [x] `ProcessHero` — PROCESS eyebrow, heading, supporting
- [x] `ProcessMosaic` — 5 stage cards with codes and labels
- [x] `ProcessStageSection` — Code badge, label, activities list, data-stage
- [x] `ProcessWorkflow` — Heading, intro, 8 ordered steps
- [x] `ProcessPrinciples` — HOW WE WORK heading, 4 principles
- [x] `ProcessCta` — CTA heading, body, button

### Page Routes

- [x] Industries Index — server component, hero + grid + CTA, skip-link target
- [x] Industries Detail — `generateStaticParams()` from registry, async params, preview noindex + noarchive, all 6 routes SSG
- [x] Process — server component, hero + mosaic + 5 stage sections + workflow + principles + CTA

### Preview Mode

- [x] Draft mode via `draftMode()` from `next/headers`
- [x] Preview query includes draft content
- [x] Preview shows PreviewIndicator badge
- [x] Preview metadata: `robots: { index: false, follow: false }` + `noarchive`
- [x] Preview title prefixed with "Preview:"
- [x] Only canonical slugs previewable

### Canonical Registry Routing

- [x] Exactly 6 static params from registry (no CMS needed)
- [x] Non-canonical slugs → 404 before CMS query
- [x] All 6 routes pre-rendered as SSG

### CMS-Absent Static Fallback

- [x] Industries index renders all 6 industries without CMS
- [x] Industry detail pages render static content from canonical definitions
- [x] Process page renders static content (no CMS dependency)
- [x] `cmsAvailable: false` flag set in static mode

### CMS-Active Published-Only Enforcement

- [x] Industries index filters nulls, errors propagate
- [x] Industry detail CMS-active missing → notFound()
- [x] Capabilities index filters nulls, errors propagate
- [x] Capability detail CMS-active missing → notFound()

### Responsive Behavior

- [x] Industry card grid: 1→2→3 columns at 768px/1024px
- [x] Process mosaic: responsive grid
- [x] All sections: reduced padding at < 768px
- [x] No horizontal overflow at 360px, 390px, 1280px

### Accessibility

- [x] Skip-link target (`<main id="main-content" tabIndex={-1}>`)
- [x] Section `aria-label` attributes
- [x] Focus-visible outlines on cards and links
- [x] PreviewIndicator `role="status"` + `aria-live="polite"`
- [x] `prefers-reduced-motion` support

### Testing

- [x] `tests/unit/industries.test.tsx` — 65 tests
- [x] `tests/unit/process.test.tsx` — 61 tests
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
✓ lint — 0 errors, 3 warnings (all <img> warnings intentional)
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
- Article detail (`/insights/[slug]`) — includes Portable Text rendering
- FAQ page (`/faq`)
- Start Project funnel (`/start-project`)

### Later Builds

- Portable Text article rendering (BUILD 011)
- Hover video preview wiring (ProjectCardPreviewMedia → ProjectCard)
- CRM / lead form integration (BUILD 011)

---

## NOTES

### Uniform Industry CTA

All 6 industries use the same CTA. The variant system (standard vs conversation) was removed in PATCH 001.

### Server-First, Zero Client Components

All 12 components are server components. No interactive state, no client-side data fetching.

### Homepage Industry Slug Migration

Fixed homepage to use new canonical slugs and labels for consistency.

---

**BUILD 010 handoff complete with PATCH 001. All acceptance criteria verified. LOCKED — ready for BUILD 011.**
