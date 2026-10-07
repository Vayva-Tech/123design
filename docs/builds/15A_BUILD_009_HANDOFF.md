# BUILD 009 — HANDOFF

**Build:** 009 — Capabilities System
**Date:** 2026-09-28
**Status:** COMPLETE

---

## ACCEPTANCE CRITERIA VERIFICATION

### Foundation Layer

- [x] `registry.ts` — 10 canonical capabilities, 4 groups, sequential orders 1-10
- [x] `types.ts` — CapabilityGroup, StaticCapabilityDefinition, CapabilityIndexEntry, CapabilityGroupData, CapabilitiesIndexData, CapabilityPageData
- [x] `content.ts` — Index + CTA content constants, group labels, capability eyebrow

### Data Composition Layer

- [x] `getCapabilitiesIndexData()` — CMS-absent static groups, CMS-active published-only (null filter), errors propagate
- [x] `getCapabilityPageData()` — canonical slug validation, draft detection, preview/published fetch, CMS-active missing → notFound()
- [x] `resolveRelatedCapabilities()` — max 3, skip current, skip non-canonical
- [x] `resolveRelatedProjects()` — max 3, errors propagate (no try/catch)

### Components (10 server components, 0 client components)

- [x] `CapabilityHero` — Media (image/video), CAPABILITY eyebrow, title, summary, priority prop
- [x] `CapabilityLifecycle` — Stage tags, aria-label, code-to-label mapping
- [x] `CapabilityDeliverables` — Bulleted list, heading, null when empty
- [x] `CapabilityMethods` — Bulleted list, heading, null when empty
- [x] `CapabilityBody` — Intro + body text, conditional rendering
- [x] `CapabilitySupportMedia` — Responsive image grid, null when empty
- [x] `CapabilityRelatedCapabilities` — Bordered list, group labels, null when empty
- [x] `CapabilityCta` — CTA heading, body, primary button
- [x] `CapabilityCard` — Link card, title, description, lifecycle tags
- [x] `CapabilityGroupSection` — Group heading + card grid

### Page Routes

- [x] Index — server component, hero + groups + CTA, skip-link target
- [x] Detail — `generateStaticParams()` from registry, async params, preview noindex, all 10 routes SSG

### Preview Mode

- [x] Draft mode via `draftMode()` from `next/headers`
- [x] Preview query includes draft content
- [x] Preview shows PreviewIndicator badge
- [x] Preview metadata: `robots: { index: false, follow: false }`
- [x] Preview title prefixed with "Preview:"
- [x] Only canonical slugs previewable

### Canonical Registry Routing

- [x] Exactly 10 static params from registry (no CMS needed)
- [x] Non-canonical slugs → 404 before CMS query
- [x] All 10 routes pre-rendered as SSG

### CMS-Absent Static Fallback

- [x] Index renders all 10 capabilities in 4 groups without CMS
- [x] Detail pages render static content from canonical definitions
- [x] `cmsAvailable: false` flag set in static mode

### Responsive Behavior

- [x] Card grid: 1→2→3 columns at 768px/1024px
- [x] Hero media: 16:9 → 21:9 at >= 768px
- [x] Support media: 1→2 columns at 768px
- [x] All sections: reduced padding at < 768px

### Accessibility

- [x] Skip-link target (`<main id="main-content" tabIndex={-1}>`)
- [x] CapabilityLifecycle `aria-label`
- [x] Focus-visible outlines on cards and links
- [x] PreviewIndicator `role="status"` + `aria-live="polite"`
- [x] `prefers-reduced-motion` support

### Testing

- [x] `tests/unit/capabilities.test.tsx` — 75 tests
- [x] `tests/e2e/capabilities.spec.ts` — 42 E2E tests
- [x] All 776 unit tests pass (25 files)
- [x] All 147 E2E tests pass
- [x] Zero regressions

### Constraints Compliance

- [x] Zero client components
- [x] No new dependencies
- [x] No inline styles
- [x] No raw hex values
- [x] No new design tokens
- [x] Canonical registry controls routing (exactly 10 routes)
- [x] CMS-absent static fallback
- [x] No git commits or pushes

### Quality Gates

- [x] format:check — PASS
- [x] lint — 0 errors, 3 warnings (pre-existing `<img>` warnings)
- [x] typecheck — PASS
- [x] test — 776 tests passed (25 files)
- [x] build — Next.js 16.3.6 (Turbopack) compiled, 19 static pages
- [x] test:e2e — 147 tests passed (31.2s)
- [x] check — Combined gate passed

### Contamination Sweeps

- [x] No `"use client"` in capabilities feature
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
✓ test — 776 tests passed (25 files, 0 failures)
✓ build — Next.js 16.3.6 (Turbopack) compiled successfully
✓ test:e2e — 147 tests passed (31.2s)
✓ check — Combined gate passed
```

---

## DEFERRED WORK

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

### Canonical Registry Is the Source of Truth

The registry controls route eligibility, static fallback content, group ordering, related capabilities, and lifecycle stages. Non-canonical slugs are rejected before any CMS query. Build does not require Sanity environment variables.

### CMS-Absent ≠ Broken

When Sanity is not configured, the capabilities system renders deliberate static content from the canonical registry. This is not a degradation — it is the designed behavior for Phase 1 locked content.

### Server-First, Zero Client Components

All 10 capability components are server components. No interactive state, no client-side data fetching, no URL manipulation. The simplest possible architecture for content display.

---

**BUILD 009 handoff complete. All acceptance criteria verified. LOCKED — ready for BUILD 010.**
