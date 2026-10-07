# BUILD 007 — WORK INDEX & FILTERING

**Build:** 007 — Work Index Page
**Date:** 2026-09-27
**Status:** COMPLETE

---

## SCOPE

Implementation of the `/work` portfolio index page with server-rendered filtering, URL-addressable filter state, available-facet derivation, responsive grid layout, desktop inline filter controls, mobile filter bottom sheet, desktop hover video preview architecture, empty states, result counts, and clear/reset behavior.

### Work Feature Module (`src/features/work/`)

- `types.ts` — `WorkFilterState`, `WorkFacetOption`, `WorkFacets`, `WorkIndexData` interfaces; canonical constants (`CANONICAL_INDUSTRIES` [7], `CANONICAL_CAPABILITIES` [7], `STAGE_ORDER` [5], `STAGE_URL_MAP`, `STAGE_TO_URL`, `CANONICAL_INDUSTRY_SLUGS`, `PUBLIC_INDUSTRY_SLUGS`, `CANONICAL_CAPABILITY_SLUGS`)
- `filters.ts` — `parseWorkFilters()` (Zod-validated URL param parsing), `isOtherIndustryProject()`, `filterProjects()`, `deriveWorkFacets()` (available-facet derivation — only shows options with >= 1 published project), `countActiveFilters()`
- `data.ts` — `getWorkIndexData()` server function; returns empty data when `hasSanityConfig()` is false; uses BUILD 005 data access (`fetchPublishedProjects`, `mapProjectCard`) when CMS connected

### Components (5 components)

All in `src/features/work/components/`:

1. `WorkHero.tsx` — Editorial hero with Eyebrow (marker), Heading displayL, Text lead; section class `work-hero`
2. `WorkIndexView.tsx` — Server composition root; composes WorkHero, WorkFilters, MobileFilterSheet, ProjectGrid; filter bar with `aria-live="polite"` result count
3. `WorkFilters.tsx` — **Client component** (`'use client'`); desktop inline native `<select>` controls; `router.replace()` with `scroll: false` for URL updates; preserves non-filter query params; clear filters button
4. `MobileFilterSheet.tsx` — **Client component** (`'use client'`); native `<dialog>` bottom sheet; draft state pattern (changes don't apply until "Apply" clicked); close via button, Escape key, or backdrop click; focus management; result count with `aria-live="polite"`
5. `ProjectGrid.tsx` — Shared grid component; renders `.project-grid` with `role="list"` when projects exist; renders `.project-grid-empty` empty state when 0 projects
6. `ProjectCardPreviewMedia.tsx` — **Client component** (`'use client'`); hover video preview architecture; 250ms delay; muted, playsInline, no controls; only activates on `(hover: hover) and (pointer: fine)`; respects `prefers-reduced-motion`

### Page Route

- `src/app/work/page.tsx` — Server component; resolves `searchParams` Promise (Next.js 16 async searchParams); calls `getWorkIndexData()`; wraps `WorkIndexView` in `<Suspense>`; `<main id="main-content" tabIndex={-1}>` for skip-link target

### Styling

- `src/styles/work.css` — Work page styles:
  - Hero: editorial layout with reading-width max-width
  - Filter bar: horizontal bar with border-block separators
  - Desktop filters: `display: none` by default, `display: flex` at >= 768px
  - Mobile filter trigger: visible by default, `display: none` at >= 768px
  - Mobile filter sheet: `position: fixed`, bottom sheet, `max-height: 85svh`, border-radius top corners, backdrop
  - Filter field: label + native `<select>` with custom dropdown arrow (SVG data URI)
  - Project grid: 1fr -> `repeat(2, 1fr)` at 768px -> `repeat(3, 1fr)` at 1024px
  - Hover preview: positioned overlay, only visible on `(hover: hover) and (pointer: fine)`, hidden at < 1280px
  - Reduced motion: disables preview video
  - Responsive hero: reduced padding at < 768px

### Constraints

- No new dependencies (0 runtime, 0 dev)
- No inline styles (all styling via CSS classes + data attributes)
- No raw hex values (all colors via design tokens)
- No new design tokens (uses existing token set)
- No `next/image` (uses plain `<img>` per project convention)
- No CMS-only content (work page renders fully without Sanity connected)
- Three client components (`WorkFilters`, `MobileFilterSheet`, `ProjectCardPreviewMedia`); all others are server components
- Native `<select>` for desktop filters (no custom dropdown library)
- Native `<dialog>` for mobile filter sheet (no custom modal library)
- No git commits or pushes

---

## ACCEPTANCE CRITERIA VERIFICATION

### Data Layer

- [x] `WorkFilterState` interface with `industry`, `capability`, `stage` (all nullable)
- [x] `WorkFacets` interface with `industries`, `capabilities`, `stages` arrays
- [x] `WorkIndexData` interface with `cmsAvailable`, `allProjects`, `filteredProjects`, `facets`, `activeFilters`, `totalResultCount`, `filteredResultCount`
- [x] `getWorkIndexData()` returns empty data when `hasSanityConfig()` is false
- [x] Uses BUILD 005 `fetchPublishedProjects()` and `mapProjectCard()`
- [x] CMS calls wrapped in try/catch; returns empty data on failure
- [x] `parseWorkFilters()` validates URL params with Zod schema

### Canonical Constants

- [x] 7 canonical industries (consumer-products, medical, defense-security, electronics, industrial, emerging-technology, other)
- [x] 7 canonical capabilities (industrial-design, mechanical-engineering, electrical-engineering, prototyping, tooling, manufacturing, program-management)
- [x] 5 lifecycle stages in order (CON, EVT, DVT, PVT, PRODUCTION)
- [x] `STAGE_URL_MAP` maps lowercase URL values to uppercase domain values
- [x] `STAGE_TO_URL` maps uppercase domain values to lowercase URL values
- [x] `PUBLIC_INDUSTRY_SLUGS` excludes 'other' from public-facing facets

### Filter Logic

- [x] `parseWorkFilters()` ignores invalid industry slugs (returns null)
- [x] `parseWorkFilters()` ignores invalid capability slugs (returns null)
- [x] `parseWorkFilters()` ignores invalid stage URL values (returns null)
- [x] `parseWorkFilters()` handles array values (takes first element via Zod)
- [x] `filterProjects()` filters by industry (including 'other' industry special case)
- [x] `filterProjects()` filters by capability
- [x] `filterProjects()` filters by lifecycle stage
- [x] `filterProjects()` combines multiple filters (AND logic)
- [x] `filterProjects()` returns all projects when no filters active
- [x] `isOtherIndustryProject()` returns true for projects with non-public industry slugs
- [x] `isOtherIndustryProject()` returns false for projects with no industries

### Facet Derivation

- [x] `deriveWorkFacets()` only includes options with >= 1 published project
- [x] `deriveWorkFacets()` preserves canonical ordering
- [x] `deriveWorkFacets()` counts each project once per facet (deduplication)
- [x] `deriveWorkFacets()` handles 'other' industry special case
- [x] `deriveWorkFacets()` returns empty arrays when no projects

### Components

- [x] `WorkHero` — Eyebrow with marker, Heading displayL, Text lead
- [x] `WorkHero` — Section class `work-hero`, content class `work-hero__content`
- [x] `WorkIndexView` — Composes WorkHero, WorkFilters, MobileFilterSheet, ProjectGrid
- [x] `WorkIndexView` — Filter bar with `aria-live="polite"` result count
- [x] `WorkIndexView` — Shows "X of Y projects" when filters active, "Y projects" when no filters
- [x] `WorkFilters` — Native `<select>` elements with `label[for]` associations
- [x] `WorkFilters` — `router.replace()` with `scroll: false` for URL updates
- [x] `WorkFilters` — Preserves non-filter query params (utm_source, etc.)
- [x] `WorkFilters` — Clear filters button visible only when filters active
- [x] `WorkFilters` — Result count with `aria-live="polite"`
- [x] `MobileFilterSheet` — Native `<dialog>` element
- [x] `MobileFilterSheet` — Draft state pattern (changes don't apply until "Apply")
- [x] `MobileFilterSheet` — Close via button, Escape key, or backdrop click
- [x] `MobileFilterSheet` — `aria-haspopup="dialog"` on trigger button
- [x] `MobileFilterSheet` — Focus returns to trigger on close
- [x] `MobileFilterSheet` — Active filter count badge on trigger
- [x] `MobileFilterSheet` — Result count with `aria-live="polite"` in footer
- [x] `ProjectGrid` — Renders `.project-grid` with `role="list"` when projects exist
- [x] `ProjectGrid` — Renders `.project-grid-empty` when 0 projects
- [x] `ProjectGrid` — Uses `ProjectCard` for each project item

### Hover Video Preview Architecture

- [x] `ProjectCardPreviewMedia` — Client component for hover video preview
- [x] 250ms delay before preview starts
- [x] Video is muted, playsInline, loop, no controls
- [x] Only activates on `(hover: hover) and (pointer: fine)` devices
- [x] Respects `prefers-reduced-motion: reduce`
- [x] `preload="none"` to avoid loading videos until hover
- [x] `aria-hidden="true"` on preview container
- [x] Graceful handling of play() promise rejection

### Page Route

- [x] `page.tsx` is server component (no `'use client'`)
- [x] Resolves `searchParams` Promise (Next.js 16 async pattern)
- [x] Calls `getWorkIndexData()` at top of component
- [x] Wraps `WorkIndexView` in `<Suspense>`
- [x] Wraps in `<main id="main-content" tabIndex={-1}>` for skip-link target
- [x] `/work` route is dynamic (server-rendered on demand)

### Responsive Behavior

- [x] Grid is 1 column at mobile (< 768px)
- [x] Grid is 2 columns at tablet (>= 768px)
- [x] Grid is 3 columns at desktop (>= 1024px)
- [x] Desktop filters visible at >= 768px
- [x] Desktop filters hidden at < 768px
- [x] Mobile filter trigger visible at < 768px
- [x] Mobile filter trigger hidden at >= 768px
- [x] Filter bar count visible at mobile, hidden at desktop
- [x] No horizontal overflow at 360px, 390px, 1280px
- [x] Hero padding reduced at < 768px

### Accessibility

- [x] `<main id="main-content" tabIndex={-1}>` is skip-link target
- [x] Result count has `aria-live="polite"` for screen reader announcements
- [x] Mobile filter trigger has `aria-haspopup="dialog"`
- [x] Mobile filter dialog has `aria-label="Filter projects"`
- [x] Close button has `aria-label="Close filters"`
- [x] Filter selects have associated `<label>` elements with `htmlFor`/`id` pairing
- [x] Hover preview container has `aria-hidden="true"`
- [x] `prefers-reduced-motion` disables video preview
- [x] Dialog supports Escape key to close (native `<dialog>` behavior)
- [x] Focus returns to trigger button on dialog close

### Testing

- [x] `tests/unit/work-filters.test.ts` — 43 tests (parseWorkFilters, isOtherIndustryProject, filterProjects, deriveWorkFacets, countActiveFilters)
- [x] `tests/unit/work-data.test.ts` — 10 tests (getWorkIndexData with mocked Sanity modules)
- [x] `tests/unit/work-page.test.tsx` — 19 tests (WorkHero, ProjectGrid, WorkIndexView SSR rendering)
- [x] `tests/e2e/work-page.spec.ts` — 40 E2E tests (page structure, desktop filters, mobile filters, responsive grid, accessibility, URL filter state, viewport overflow, filter boundary)
- [x] All 595 unit tests pass (21 files)
- [x] All 98 E2E tests pass
- [x] Zero regressions in existing test files

### Constraints Compliance

- [x] No new dependencies (0 runtime, 0 dev)
- [x] No inline styles (all styling via CSS classes + data attributes)
- [x] No raw hex values (all colors via design tokens)
- [x] No new design tokens (uses existing token set)
- [x] No `next/image` (uses plain `<img>`)
- [x] No CMS-only content (work page renders without Sanity)
- [x] Three client components (WorkFilters, MobileFilterSheet, ProjectCardPreviewMedia)
- [x] No git commits or pushes

### Quality Gates

- [x] typecheck — TypeScript strict mode, no errors
- [x] test — 595 tests passed (21 files, 0 failures)
- [x] lint — 0 errors, 3 warnings (all `<img>` warnings intentional per spec)
- [x] build — Next.js 16.3.6 (Turbopack) compiled successfully
- [x] test:e2e — 98 E2E tests passed (54.5s)

---

## QUALITY GATE RESULTS

```
✓ typecheck — TypeScript compilation successful (tsc --noEmit)
✓ test — 595 tests passed (21 files, 0 failures)
✓ lint — 0 errors, 3 warnings (all <img> warnings intentional)
✓ build — Next.js 16.3.6 (Turbopack) compiled successfully
✓ test:e2e — 98 tests passed (54.5s)
```

### Lint Warnings (Intentional)

```
src/features/home/components/HomeCredibility.tsx
  17:13  warning  Using `<img>` could result in slower LCP and higher bandwidth.

src/features/home/components/HomeHeroReel.tsx
  27:9  warning  Using `<img>` could result in slower LCP and higher bandwidth.

src/features/home/components/ProjectCard.tsx
  18:11  warning  Using `<img>` could result in slower LCP and higher bandwidth.
```

**Rationale:** Project convention is to use plain `<img>` tags, not `next/image`. Optimization will be addressed in a future build if needed.

---

## DEFERRED WORK

### BUILD 008 — Project Detail System

- Project detail page (`/work/[slug]`)
- Module rendering (narrative, discipline, gallery, video, technical, testimonial)
- Related projects
- Client display defense (NAMED + clientRelationshipVerified)
- Hover video preview wiring (ProjectCardPreviewMedia integration into ProjectCard)

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

### Server-First Filtering Architecture

The work page uses server-first filtering. URL search params are parsed on the server in `getWorkIndexData()`, which fetches all published projects, derives available facets, and filters the project list — all before sending HTML to the client. This means:

1. The initial page load shows already-filtered results
2. Filter state is fully URL-addressable (shareable, bookmarkable)
3. No client-side data fetching for filter changes

When a user changes a filter via desktop `<select>` or mobile sheet, `WorkFilters` / `MobileFilterSheet` use `router.replace()` to update the URL, which triggers a server re-render with the new filter state.

### Available-Facet Derivation

`deriveWorkFacets()` examines all published projects and only includes filter options that have at least 1 matching project. This prevents users from selecting filters that would return 0 results. Facets maintain canonical ordering regardless of which options are available.

### Mobile Filter Draft State

`MobileFilterSheet` uses a draft state pattern: changes to `<select>` values update local state but don't navigate. The user must click "Apply" to commit changes to the URL. This prevents excessive navigation during filter exploration and allows "Clear all" + new selections in a single interaction.

### Hover Video Preview Architecture

`ProjectCardPreviewMedia` implements the hover video preview pattern:

- Only activates on devices with fine pointer + hover capability (desktop/laptop)
- 250ms delay prevents flicker during quick cursor movement
- `preload="none"` avoids loading video assets until hover
- `prefers-reduced-motion` check respects user accessibility preferences
- `play()` promise rejection is caught gracefully (some browsers block autoplay)
- Video is muted, looped, plays inline with no controls

The component is architecturally ready but not yet wired into `ProjectCard` — that integration is deferred to BUILD 008 when project detail data includes preview video references.

### Native Dialog Element

`MobileFilterSheet` uses the native HTML `<dialog>` element, which provides:

- Built-in backdrop (`::backdrop` pseudo-element)
- Built-in Escape key handling (`cancel` event)
- Built-in focus trapping (when using `showModal()`)
- No JavaScript modal library needed

The component adds custom backdrop-click-to-close behavior via `getBoundingClientRect()` hit testing, since native `<dialog>` only closes on Escape by default.

### Client Component Budget

Three client components in the work feature:

1. `WorkFilters` — Needs `useRouter()`, `useSearchParams()` for URL updates
2. `MobileFilterSheet` — Needs `useState`, `useRef`, `useCallback` for dialog state management
3. `ProjectCardPreviewMedia` — Needs `useState`, `useRef`, `useCallback` for hover video control

All other work components (`WorkHero`, `WorkIndexView`, `ProjectGrid`) are server components.

### No Inline Styles

All work page styling uses CSS classes and data attributes. No inline `style={}` props. All colors reference design tokens via CSS custom properties.

---

**BUILD 007 complete. All acceptance criteria verified. LOCKED — ready for BUILD 008.**
