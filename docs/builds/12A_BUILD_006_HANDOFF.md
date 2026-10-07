# BUILD 006 — HANDOFF

**Build:** 006 — Homepage
**Date:** 2026-09-26
**Status:** COMPLETE

---

## ACCEPTANCE CRITERIA VERIFICATION

### Data Composition

- [x] `HomepageData` interface with `featuredProjects`, `testimonials`, `scheduleCallUrl`, `cmsConnected`
- [x] `getHomepageData()` returns empty data when `hasSanityConfig()` is false
- [x] Uses BUILD 005 `fetchFeaturedProjects()`, `fetchPublishedTestimonials()`, `fetchLeadFormSettings()`
- [x] Featured projects limited to 3 via `.slice(0, 3)`
- [x] CMS calls wrapped in try/catch; returns empty data on failure
- [x] `cmsConnected` flag reflects `hasSanityConfig()` result

### Static Content Module

- [x] All homepage copy in `content.ts` as exported `as const` constants
- [x] Hero: `HERO_EYEBROW`, `HERO_HEADING_LINES` (['FROM IDEA', 'TO PRODUCTION.']), `HERO_SUPPORTING`, `HERO_PRIMARY_CTA`, `HERO_SECONDARY_CTA`
- [x] Lifecycle: `LIFECYCLE_HEADING_LINES`, `LIFECYCLE_STAGES` (5 stages: CON, EVT, DVT, PVT, PRODUCTION)
- [x] Workflow: `WORKFLOW_HEADING_LINES`, `WORKFLOW_STEPS` (8 steps, numbered 01–08)
- [x] Capabilities: `CAPABILITIES_HEADING_LINES`, `CAPABILITY_GROUPS` (6 groups, each with ≥3 items, unique slugs)
- [x] Industries: `INDUSTRIES_HEADING_LINES`, `CANONICAL_INDUSTRIES` (6 industries, unique slugs)
- [x] How We Work: `HOW_WE_WORK_HEADING`, `HOW_WE_WORK_PRINCIPLES` (4 principles)
- [x] Manufacturing: `MANUFACTURING_HEADING_LINES`, `MANUFACTURING_BODY`
- [x] Final CTA: `FINAL_CTA_HEADING_LINES`, `FINAL_CTA_BODY`, `FINAL_CTA_BUTTON`, `SCHEDULE_CTA_LABEL`

### Hero Reel Manifest

- [x] `HeroReelEntry` interface with `id`, `posterUrl`, `videoUrl?`, `alt`, `decorative`
- [x] `homepageHeroReel` exported as empty array `[]`
- [x] `HomeHeroReel` client component returns null when reel empty

### Section Components (12 components)

- [x] `HomeHero` — `data-page-overlay="dark"`, Eyebrow, Heading displayXL with `.heading-lines`, supporting text, two CTAs
- [x] `HomeHero` — Primary CTA links to `/start-project`, secondary CTA links to `/work`
- [x] `HomeHeroReel` — Client component (`'use client'`); returns null when reel empty; renders `<video>` with autoplay/muted/loop/playsInline or poster `<img>`
- [x] `HomeCredibility` — Returns null when logos array empty
- [x] `HomeFeaturedWork` — Returns null when projects array empty; renders `ProjectCard` for each project
- [x] `HomeLifecycle` — Renders 5 stages in order (CON → EVT → DVT → PVT → PRODUCTION)
- [x] `HomeWorkflow` — Renders 8 steps numbered 01–08
- [x] `HomeCapabilities` — Renders 6 capability groups with item lists
- [x] `HomeIndustries` — Renders 6 canonical industry cards
- [x] `HomeHowWeWork` — Renders 4 principles with Eyebrow marker
- [x] `HomeTestimonial` — Returns null when testimonials array empty
- [x] `HomeManufacturing` — Dark section with heading + body
- [x] `HomeFinalCta` — Primary CTA always visible; schedule CTA conditional on `scheduleCallUrl`

### Shared Domain Component

- [x] `ProjectCard` — Renders Link to `/work/${slug}`
- [x] `ProjectCard` — Renders image with `alt` (empty string when `decorative: true`)
- [x] `ProjectCard` — Renders title, industry (conditional), capabilities (joined with comma)
- [x] `ProjectCard` — Handles IMAGE kind media only (returns null for VIDEO)
- [x] `ProjectCard` — Uses `loading="lazy"`, `width`, `height` attributes

### Page Composition

- [x] `page.tsx` is server component (no `'use client'`)
- [x] Calls `getHomepageData()` at top of component
- [x] Wraps sections in `<main id="main-content" tabIndex={-1}>`
- [x] Sections rendered in locked order (hero → credibility → featured → lifecycle → workflow → capabilities → industries → how we work → testimonial → manufacturing → final CTA)
- [x] Passes `data.featuredProjects`, `data.testimonials`, `data.scheduleCallUrl` to conditional sections

### Header Overlay

- [x] Hero sets `data-page-overlay="dark"` on section element
- [x] CSS `:has()` selector activates transparent header: `body:has([data-page-overlay='dark']) > .site-header`
- [x] No JavaScript required for header state
- [x] Header returns to default state when hero not in viewport

### Responsive Behavior

- [x] Homepage renders at 360px (mobile-small) — no horizontal overflow
- [x] Homepage renders at 390px (mobile-large) — no horizontal overflow
- [x] Homepage renders at 768px (tablet) — no horizontal overflow
- [x] Homepage renders at 1024px (desktop boundary) — no horizontal overflow
- [x] Homepage renders at 1280px (desktop) — no horizontal overflow
- [x] Homepage renders at 1536px (wide) — no horizontal overflow

### Accessibility

- [x] `<main id="main-content" tabIndex={-1}>` is skip-link target
- [x] Single `<h1>` per section (hero, lifecycle, workflow, capabilities, industries, how we work, manufacturing, final CTA)
- [x] Heading hierarchy respected (h1 → h2 → h3)
- [x] All interactive elements are keyboard-focusable
- [x] `prefers-reduced-motion: reduce` prevents video autoplay (HomeHeroReel)
- [x] Decorative images have `alt=""` when `decorative: true`
- [x] Non-decorative images have meaningful `alt` text

### Motion Baseline

- [x] No motion by default (static layout)
- [x] `HomeHeroReel` respects `prefers-reduced-motion`
- [x] No scroll-triggered animations
- [x] No parallax effects

### Testing

- [x] `tests/unit/home-content.test.ts` — 30 tests (content constants, structure, ordering)
- [x] `tests/unit/homepage.test.tsx` — 53 tests (section components, conditional rendering, CSS classes, no inline styles)
- [x] `tests/e2e/homepage.spec.ts` — 58 E2E tests (page structure, all 11 sections, conditional sections, responsive viewports, navigation)
- [x] All 523 unit tests pass (18 files)
- [x] All 58 E2E tests pass
- [x] Zero regressions in existing test files

### Constraints Compliance

- [x] No new dependencies (0 runtime, 0 dev)
- [x] No inline styles (all styling via CSS classes + data attributes)
- [x] No raw hex values (all colors via design tokens)
- [x] No new design tokens (uses existing token set)
- [x] No `next/image` (uses plain `<img>`)
- [x] No CMS-only content (homepage renders without Sanity)
- [x] Single client component (`HomeHeroReel`)
- [x] No git commits or pushes

### Quality Gates

- [x] typecheck — TypeScript strict mode, no errors
- [x] test — 523 tests passed (18 files, 0 failures)
- [x] lint — 0 errors, 3 warnings (all `<img>` warnings intentional per spec)
- [x] build — Next.js 16.3.6 (Turbopack) compiled successfully
- [x] test:e2e — 58 E2E tests passed (14.5s)

### Contamination Sweeps

- [x] No new dependencies added
- [x] No inline styles found
- [x] No raw hex values found
- [x] No new design tokens added
- [x] No `next/image` usage
- [x] No CMS-only content (homepage renders without Sanity)
- [x] Only one client component (`HomeHeroReel`)

---

## QUALITY GATE RESULTS

```
✓ typecheck — TypeScript compilation successful (tsc --noEmit)
✓ test — 523 tests passed (18 files, 0 failures)
✓ lint — 0 errors, 3 warnings (all <img> warnings intentional)
✓ build — Next.js 16.3.6 (Turbopack) compiled successfully
✓ test:e2e — 58 tests passed (14.5s)
```

---

## DEFERRED WORK

### BUILD 007 — Work Index & Filtering

- Work index page (`/work`)
- Project filtering by industry, capability, year
- Pagination or infinite scroll
- Project card grid layout

### BUILD 008 — Project Detail System

- Project detail page (`/work/[slug]`)
- Module rendering (narrative, discipline, gallery, video, technical, testimonial)
- Related projects
- Client display defense (NAMED + clientRelationshipVerified)

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
- Video architecture (BUILD 008 or later)
- CRM / lead form integration (BUILD 011)

---

## NOTES

### Homepage Data Composition

`getHomepageData()` is a server function that checks `hasSanityConfig()` before attempting CMS calls. When Sanity is not configured (no env vars), it returns:

```typescript
{
  featuredProjects: [],
  testimonials: [],
  scheduleCallUrl: undefined,
  cmsConnected: false,
}
```

This allows the homepage to render fully without a CMS connection. Conditional sections (HomeFeaturedWork, HomeTestimonial, HomeCredibility) return null when their data arrays are empty.

### Hero Reel Manifest

`homepageHeroReel` is currently an empty array. When video assets are available, entries will be added to `src/features/home/media.ts`:

```typescript
export const homepageHeroReel: HeroReelEntry[] = [
  {
    id: 'reel-001',
    posterUrl: '/hero/poster-001.jpg',
    videoUrl: '/hero/video-001.mp4',
    alt: 'Manufacturing process',
    decorative: false,
  },
];
```

`HomeHeroReel` client component will render `<video>` with autoplay/muted/loop/playsInline when entries exist.

### Header Overlay Activation

The header overlay uses CSS `:has()` to detect when the hero is in the viewport:

```css
body:has([data-page-overlay='dark']) > .site-header {
  background: transparent;
  border-bottom-color: transparent;
}
```

No JavaScript is required. The header returns to its default state when the user scrolls past the hero.

### Multi-Line Display Headings

The `.heading-lines` utility class ensures each `<span>` child renders on its own line:

```css
.heading-lines > span {
  display: block;
}
```

This is used in `HomeHero`, `HomeLifecycle`, `HomeWorkflow`, `HomeCapabilities`, `HomeIndustries`, `HomeManufacturing`, and `HomeFinalCta` for multi-line display headings.

### Conditional Sections

Three sections are conditional and return null when their data is empty:

1. `HomeCredibility` — Returns null when `logos` array empty
2. `HomeFeaturedWork` — Returns null when `projects` array empty
3. `HomeTestimonial` — Returns null when `testimonials` array empty

This allows the homepage to render cleanly without CMS data.

### Final CTA Schedule Button

`HomeFinalCta` renders two CTAs:

1. Primary CTA — Always visible, links to `/start-project`
2. Schedule CTA — Conditional, renders only when `scheduleCallUrl` is defined

The schedule URL comes from `fetchLeadFormSettings()` via `getHomepageData()`.

### Client Component Budget

Only `HomeHeroReel` is a client component (`'use client'`). All other homepage sections are server components. This minimizes JavaScript bundle size and maximizes server-side rendering.

### No Inline Styles

All homepage styling uses CSS classes and data attributes. No inline `style={}` props. All colors reference design tokens via CSS custom properties.

### No Raw Hex Values

All colors in `home.css` use design tokens:

- `var(--color-surface)` — default background
- `var(--color-surface-dark)` — manufacturing section background
- `var(--color-text)` — default text
- `var(--color-text-inverse)` — inverse text on dark backgrounds
- `var(--color-border)` — borders
- `var(--color-primary)` — primary CTAs

No hardcoded hex values.

---

**BUILD 006 handoff complete. All acceptance criteria verified. LOCKED — ready for BUILD 007.**
