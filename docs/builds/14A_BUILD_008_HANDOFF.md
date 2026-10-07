# BUILD 008 — HANDOFF

**Build:** 008 — Project Detail System
**Date:** 2026-09-27
**Status:** COMPLETE

---

## ACCEPTANCE CRITERIA VERIFICATION

### Foundation Layer

- [x] `ResponsiveImage` wraps `next/image` with priority, sizes, fill support
- [x] `VideoPlayer` uses native `<video>` with captions, aria-label, playsInline
- [x] Both system components compose CSS class names (no inline styles)

### Feature Module

- [x] `PresentationMode` type: 'LIGHT' | 'FULL'
- [x] `ProjectPageData` interface with project, presentationMode, isPreview, nextProject
- [x] `isRenderableProjectModule()` — 6 module types with per-type content checks
- [x] `getProjectPresentationMode()` — FULL when >= 1 renderable, LIGHT otherwise
- [x] `NARRATIVE_DEFAULT_HEADINGS` — 4 section types
- [x] `DISCIPLINE_DEFAULT_HEADINGS` — 7 section types
- [x] `resolveNarrativeHeading()` / `resolveDisciplineHeading()` — custom or default
- [x] `isValidProjectSlug()` — regex + length validation
- [x] `getProjectPageData()` — draft detection, CMS guard, preview/published fetch, next project

### Components (13 server components, 0 client components)

- [x] `ProjectHero` — Media (image/video), Case Study eyebrow, title, summary, priority prop
- [x] `ProjectMeta` — Definition list, aria-label, stage labels, tags, conditional fields
- [x] `NarrativeSection` — data-section attribute, default/custom heading, optional media
- [x] `DisciplineSection` — data-section attribute, default/custom heading, optional media
- [x] `ProjectGallery` — Responsive grid, MediaFrame items, image/video support, captions
- [x] `ProjectVideoBlock` — VideoPlayer in fullBleed MediaFrame, null for non-video
- [x] `ProjectTechnicalDetails` — Optional heading, details, media; conditional rendering
- [x] `TestimonialBlock` — blockquote, cite, curly quotes, role/company
- [x] `ProjectCaseStudyBody` — Exhaustive switch, isRenderableProjectModule filter
- [x] `RelatedWork` — Null when empty, ProjectCard grid, eyebrow + heading
- [x] `NextProject` — Link to next project, eyebrow, displayL title, focus-visible
- [x] `PreviewIndicator` — Fixed badge, role="status", aria-live="polite"
- [x] `ProjectFinalCta` — Heading, body, primary button, custom scheduleCallUrl

### Page Route

- [x] Server component (no `'use client'`)
- [x] Async params (Next.js 16 pattern)
- [x] `generateMetadata()` with preview noindex
- [x] `<main id="main-content" tabIndex={-1}>` skip-link target
- [x] Conditional PreviewIndicator, ProjectCaseStudyBody (FULL mode), NextProject

### Preview Mode

- [x] Draft mode via `draftMode()` from `next/headers`
- [x] Preview query includes draft content
- [x] Preview skips next project resolution
- [x] Preview shows PreviewIndicator badge
- [x] Preview metadata: `robots: { index: false, follow: false }`
- [x] Preview title prefixed with "Preview:"

### Slug Validation

- [x] Valid: lowercase alphanumeric with hyphens
- [x] Invalid: uppercase, spaces, special chars, empty, > 200 chars
- [x] Invalid slugs → `notFound()` without CMS call

### Presentation Modes

- [x] LIGHT: 0 renderable modules → no case study body
- [x] FULL: >= 1 renderable module → full case study body

### Responsive Behavior

- [x] Hero: 16:9 → 21:9 at >= 768px
- [x] Meta: column → row at >= 768px
- [x] Gallery: 1→2→3 columns at 768px/1024px
- [x] Related work: 1→2→3 columns at 768px/1024px
- [x] All sections: reduced padding at < 768px

### Accessibility

- [x] Skip-link target (`<main id="main-content" tabIndex={-1}>`)
- [x] ProjectMeta `aria-label="Project details"`
- [x] PreviewIndicator `role="status"` + `aria-live="polite"`
- [x] VideoPlayer `aria-label` from caption
- [x] NextProject focus-visible outline
- [x] Semantic HTML (blockquote, cite, dl/dt/dd)
- [x] `prefers-reduced-motion` support

### Testing

- [x] `tests/unit/project-presentation.test.ts` — 24 tests
- [x] `tests/unit/project-data.test.ts` — 21 tests
- [x] `tests/unit/project-page.test.tsx` — 61 tests
- [x] `tests/e2e/project-detail.spec.ts` — 7 E2E tests
- [x] All 701 unit tests pass (24 files)
- [x] All 105 E2E tests pass
- [x] Zero regressions

### Constraints Compliance

- [x] Zero client components
- [x] No new dependencies
- [x] No inline styles
- [x] No raw hex values
- [x] No new design tokens
- [x] No CMS-only content (404 without Sanity)
- [x] No git commits or pushes

### Quality Gates

- [x] format:check — PASS
- [x] lint — 0 errors, 3 warnings (pre-existing `<img>` warnings)
- [x] typecheck — PASS
- [x] test — 701 tests passed (24 files)
- [x] build — Next.js 16.3.6 (Turbopack) compiled
- [x] test:e2e — 105 tests passed (56.8s)

### Contamination Sweeps

- [x] No `"use client"` in project feature
- [x] No TODO/FIXME/HACK comments
- [x] No hardcoded secrets
- [x] No stale imports
- [x] No inline styles
- [x] No raw hex values

---

## QUALITY GATE RESULTS

```
✓ format:check — All matched files use Prettier code style
✓ lint — 0 errors, 3 warnings (all <img> warnings intentional)
✓ typecheck — TypeScript compilation successful (tsc --noEmit)
✓ test — 701 tests passed (24 files, 0 failures)
✓ build — Next.js 16.3.6 (Turbopack) compiled successfully
✓ test:e2e — 105 tests passed (56.8s)
```

---

## DEFERRED WORK

### BUILD 009 — Capabilities

- Capability index page (`/capabilities`)
- Capability detail page (`/capabilities/[slug]`)
- Related projects, related capabilities

### BUILD 010 — Process & Industries

- Process page (`/process`)
- Industry index page (`/industries`)
- Industry detail page (`/industries/[slug]`)

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

### Server-First, Zero Client Components

All 13 project detail components are server components. No interactive state, no client-side data fetching, no URL manipulation. Video playback uses native HTML controls. This is the simplest possible architecture for content display.

### Preview Architecture

Preview mode uses `draftMode()` from `next/headers` to switch between published and preview queries. Preview pages are noindexed to prevent search engine crawling. The PreviewIndicator badge provides clear visual feedback.

### Slug Validation Before CMS

`isValidProjectSlug()` rejects malformed slugs before any CMS call. This prevents unnecessary API requests for obviously invalid URLs and provides fast 404 responses.

### Exhaustive Module Rendering

The `ProjectCaseStudyBody` switch on `module.kind` is exhaustive — TypeScript enforces that all 6 module types are handled. Adding a new module type requires updating the switch.

### No CMS Fallback

Unlike the work index (which shows an empty grid), project detail returns 404 for ALL slugs when Sanity is not configured. A project page without its specific content has no meaningful fallback.

---

**BUILD 008 handoff complete. All acceptance criteria verified. LOCKED — ready for BUILD 009.**
