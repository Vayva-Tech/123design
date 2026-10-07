# BUILD 008 — PROJECT DETAIL SYSTEM

**Build:** 008 — Project Detail Pages
**Date:** 2026-09-27
**Status:** COMPLETE

---

## SCOPE

Implementation of `/work/[slug]` project detail pages with server-rendered content, public/preview data split, slug validation, light/full presentation modes, exhaustive modular case study rendering (6 module types), project hero with responsive image/video, project meta definition list, related work grid, next project navigation, preview mode indicator with noindex, final CTA, and comprehensive testing.

### Foundation Layer

#### System Components (`src/components/system/`)

1. `ResponsiveImage.tsx` — Wraps `next/image` `Image` component; accepts `ImageMediaModel`; supports `priority`, `sizes`, `fill` mode; defaults to explicit width/height with fallback dimensions (1200x800)
2. `VideoPlayer.tsx` — Native `<video>` element; accepts `VideoMediaModel`; supports `autoPlay`, `muted`, `loop`, `controls`, `poster`; includes `<track>` for captions/transcripts when available; `preload="metadata"`; `playsInline`; `aria-label` from caption or default

### Feature Module (`src/features/project/`)

- `types.ts` — `PresentationMode` ('LIGHT' | 'FULL'), `ProjectPageData` interface (project, presentationMode, isPreview, nextProject)
- `presentation.ts` — `isRenderableProjectModule()` (per-module-type content checks), `getProjectPresentationMode()` (FULL if >= 1 renderable module, LIGHT otherwise)
- `module-labels.ts` — `NARRATIVE_DEFAULT_HEADINGS` (4 section types), `DISCIPLINE_DEFAULT_HEADINGS` (7 section types), `resolveNarrativeHeading()`, `resolveDisciplineHeading()`
- `data.ts` — `isValidProjectSlug()` (regex + length validation), `getProjectPageData()` (draft mode detection, CMS config guard, preview vs published fetch, next project resolution), `resolveNextProject()`

### Components (13 components — ALL server components, zero client components)

All in `src/features/project/components/`:

1. `ProjectHero.tsx` — Full-width media (image via ResponsiveImage or video via VideoPlayer) with overlaid content; Eyebrow "Case Study", Heading displayXL, Text lead summary; `priority` prop for LCP image
2. `ProjectMeta.tsx` — Definition list (`<dl>`) with client, year, lifecycle stage, industries, capabilities; uses `<Tag>` for multi-value fields; `aria-label="Project details"`; stage labels mapped from codes (CON → Concept, etc.)
3. `NarrativeSection.tsx` — Overview/challenge/insight/result blocks; `data-section` attribute; optional media (image via ResponsiveImage+MediaFrame or video); `resolveNarrativeHeading()` for default/custom heading
4. `DisciplineSection.tsx` — Industrial design, mechanical/electrical engineering, etc.; `data-section` attribute; optional media; `resolveDisciplineHeading()` for default/custom heading
5. `ProjectGallery.tsx` — Grid of images/videos in `wideMedia` container; responsive grid (1→2→3 columns); optional gallery caption; each item in `MediaFrame` with individual captions
6. `ProjectVideoBlock.tsx` — Full-width video in `wideMedia` container with `fullBleed` MediaFrame; returns null for non-video media
7. `ProjectTechnicalDetails.tsx` — Technical specifications with optional heading, details text, and media; reading container
8. `TestimonialBlock.tsx` — `<blockquote>` with quote (curly quotes via HTML entities), `<cite>` for name, optional role/company; reading container
9. `ProjectCaseStudyBody.tsx` — Module composition root; filters modules through `isRenderableProjectModule()`; exhaustive `switch` on `module.kind` discriminated union
10. `RelatedWork.tsx` — Returns null when no projects; Eyebrow "Related Work", h2 "More case studies"; grid of `ProjectCard` components (reuses BUILD 006 card)
11. `NextProject.tsx` — Large `<Link>` to next project; Eyebrow "Next Project", Heading displayL; focus-visible outline
12. `PreviewIndicator.tsx` — Fixed badge (top-right); `role="status"` + `aria-live="polite"`; "Preview Mode" text
13. `ProjectFinalCta.tsx` — "Have a project in mind?" heading, body text, primary Button linking to `/contact` or custom `scheduleCallUrl`

### Page Route

- `src/app/work/[slug]/page.tsx` — Server component; resolves `params: Promise<{ slug: string }>` (Next.js 16 async pattern); `generateMetadata()` with preview noindex (`robots: { index: false, follow: false }`); composes all 13 components; `<main id="main-content" tabIndex={-1}>` for skip-link target; conditionally renders `PreviewIndicator` and `ProjectCaseStudyBody` (FULL mode only)

### Styling

- `src/styles/project.css` — Project detail styles (486 lines):
  - Hero: relative flex column, 16:9 media (21:9 at >= 768px), content overlay with responsive padding
  - Meta: definition list with responsive label/value layout (column → row at >= 768px)
  - Narrative/Discipline: reading-width content, max-width headings (20ch), max-width body (60ch)
  - Gallery: responsive grid (1→2→3 columns at 768px/1024px)
  - Video block: full-width in wideMedia container
  - Technical: reading-width with optional media
  - Testimonial: blockquote with max-width quote (48ch), attribution styling
  - Related work: responsive grid (1→2→3 columns)
  - Next project: large link with hover opacity transition, focus-visible outline
  - Preview indicator: fixed position, accent background, uppercase badge
  - Final CTA: reading-width with actions
  - Mobile adjustments: reduced padding at < 768px for all sections
  - Reduced motion: disables next-project link transition

### Constraints

- Zero client components (all 13 components are server components)
- No new dependencies (0 runtime, 0 dev)
- No inline styles (all styling via CSS classes + data attributes)
- No raw hex values (all colors via design tokens)
- No new design tokens (uses existing token set)
- Uses `next/image` for ResponsiveImage (project detail exception to work page `<img>` convention)
- No CMS-only content (all slugs return 404 when `hasSanityConfig()` is false)
- No git commits or pushes

---

## ACCEPTANCE CRITERIA VERIFICATION

### Foundation Layer

- [x] `ResponsiveImage` wraps `next/image` `Image` component
- [x] `ResponsiveImage` accepts `ImageMediaModel` with url, alt, width, height
- [x] `ResponsiveImage` supports `priority`, `sizes`, `fill` props
- [x] `ResponsiveImage` falls back to 1200x800 when dimensions missing
- [x] `ResponsiveImage` composes CSS class names with `responsive-image` base
- [x] `VideoPlayer` uses native `<video>` element
- [x] `VideoPlayer` accepts `VideoMediaModel` with url, poster, caption, transcript
- [x] `VideoPlayer` supports `autoPlay`, `muted`, `loop`, `controls` props
- [x] `VideoPlayer` defaults: autoPlay=false, muted=true, loop=false, controls=true
- [x] `VideoPlayer` renders `<track>` for captions when transcript available
- [x] `VideoPlayer` uses `preload="metadata"` and `playsInline`
- [x] `VideoPlayer` has `aria-label` from caption or default text

### Feature Module — Types

- [x] `PresentationMode` type: 'LIGHT' | 'FULL'
- [x] `ProjectPageData` interface with `project`, `presentationMode`, `isPreview`, `nextProject`

### Feature Module — Presentation Logic

- [x] `isRenderableProjectModule()` checks narrative: heading || body || media
- [x] `isRenderableProjectModule()` checks discipline: heading || body || media
- [x] `isRenderableProjectModule()` checks gallery: items.length > 0
- [x] `isRenderableProjectModule()` checks video: media present
- [x] `isRenderableProjectModule()` checks technical: heading || details || media
- [x] `isRenderableProjectModule()` checks testimonial: quote && name
- [x] `getProjectPresentationMode()` returns 'FULL' when >= 1 renderable module
- [x] `getProjectPresentationMode()` returns 'LIGHT' when 0 renderable modules

### Feature Module — Labels

- [x] `NARRATIVE_DEFAULT_HEADINGS` covers 4 section types (overview, challenge, insight, result)
- [x] `DISCIPLINE_DEFAULT_HEADINGS` covers 7 section types
- [x] `resolveNarrativeHeading()` returns custom heading when provided, default otherwise
- [x] `resolveDisciplineHeading()` returns custom heading when provided, default otherwise

### Feature Module — Data

- [x] `isValidProjectSlug()` validates slug format: lowercase alphanumeric with hyphens
- [x] `isValidProjectSlug()` enforces max length of 200 characters
- [x] `isValidProjectSlug()` rejects empty strings
- [x] `isValidProjectSlug()` rejects slugs with uppercase, spaces, or special characters
- [x] `getProjectPageData()` calls `notFound()` for invalid slugs
- [x] `getProjectPageData()` calls `notFound()` when `hasSanityConfig()` is false
- [x] `getProjectPageData()` detects draft mode via `draftMode()` from `next/headers`
- [x] `getProjectPageData()` uses `fetchPreviewProjectBySlug()` in preview mode
- [x] `getProjectPageData()` uses `fetchProjectBySlug()` in published mode
- [x] `getProjectPageData()` calls `notFound()` when project not found
- [x] `getProjectPageData()` resolves next project from published projects (excludes current)
- [x] `getProjectPageData()` skips next project resolution in preview mode
- [x] `getProjectPageData()` catches errors in next project resolution (returns null)

### Components — ProjectHero

- [x] Renders `section` with `project-hero` class
- [x] Renders hero media (image or video based on `heroMedia.kind`)
- [x] Uses `ResponsiveImage` for image media
- [x] Uses `VideoPlayer` for video media (autoPlay, muted, loop, no controls)
- [x] Renders "Case Study" eyebrow with marker
- [x] Renders project title with `displayXL` heading
- [x] Renders project summary with `lead` text
- [x] Uses `Container` with `shell` variant for content
- [x] Accepts `priority` prop for LCP image optimization

### Components — ProjectMeta

- [x] Renders `section` with `project-meta` class
- [x] Has `aria-label="Project details"`
- [x] Uses `<dl>` definition list structure
- [x] Renders client name when present
- [x] Renders year when present
- [x] Renders lifecycle stages with label mapping (CON → Concept, etc.)
- [x] Renders industries as tags
- [x] Renders capabilities as tags
- [x] Uses `Container` with `reading` variant
- [x] Omits client field when not present

### Components — NarrativeSection

- [x] Renders `section` with `project-narrative` class
- [x] Sets `data-section` attribute from `sectionType`
- [x] Uses `resolveNarrativeHeading()` for heading resolution
- [x] Renders body text when present
- [x] Renders media (image or video) when present
- [x] Uses `MediaFrame` with `containedStage` variant
- [x] Uses `Container` with `reading` variant

### Components — DisciplineSection

- [x] Renders `section` with `project-discipline` class
- [x] Sets `data-section` attribute from `sectionType`
- [x] Uses `resolveDisciplineHeading()` for heading resolution
- [x] Renders body text when present
- [x] Renders media (image or video) when present
- [x] Uses `MediaFrame` with `containedStage` variant
- [x] Uses `Container` with `reading` variant

### Components — ProjectGallery

- [x] Renders `section` with `project-gallery` class
- [x] Uses `Container` with `wideMedia` variant
- [x] Renders grid of gallery items
- [x] Each item uses `MediaFrame` with caption
- [x] Supports both image and video items
- [x] Renders gallery-level caption when present
- [x] Responsive grid (1→2→3 columns)

### Components — ProjectVideoBlock

- [x] Renders `section` with `project-video-block` class
- [x] Uses `Container` with `wideMedia` variant
- [x] Uses `MediaFrame` with `fullBleed` variant
- [x] Uses `VideoPlayer` component with controls
- [x] Returns null for non-video media

### Components — ProjectTechnicalDetails

- [x] Renders `section` with `project-technical` class
- [x] Renders heading when present
- [x] Renders details text when present
- [x] Renders media (image or video) when present
- [x] Omits heading element when not provided
- [x] Uses `Container` with `reading` variant

### Components — TestimonialBlock

- [x] Renders `section` with `project-testimonial` class
- [x] Uses `<blockquote>` element
- [x] Renders quote with curly quotes (HTML entities)
- [x] Renders name in `<cite>` element
- [x] Renders role and company when present
- [x] Uses `Container` with `reading` variant

### Components — ProjectCaseStudyBody

- [x] Renders wrapper with `project-case-study` class
- [x] Filters modules through `isRenderableProjectModule()`
- [x] Exhaustive switch on `module.kind` discriminated union
- [x] Renders all 6 module types (narrative, discipline, gallery, video, technical, testimonial)
- [x] Filters out non-renderable modules (empty content)

### Components — RelatedWork

- [x] Returns null when no projects
- [x] Renders `section` with `related-work` class when projects exist
- [x] Renders "Related Work" eyebrow with marker
- [x] Renders "More case studies" h2 heading
- [x] Uses `ProjectCard` for each related project
- [x] Responsive grid (1→2→3 columns)

### Components — NextProject

- [x] Renders `section` with `next-project` class
- [x] Links to `/work/[slug]` of next project
- [x] Renders "Next Project" eyebrow with marker
- [x] Renders project title with `displayL` heading
- [x] Has hover opacity transition
- [x] Has focus-visible outline

### Components — PreviewIndicator

- [x] Renders with `preview-indicator` class
- [x] Has `role="status"`
- [x] Has `aria-live="polite"`
- [x] Renders "Preview Mode" text
- [x] Fixed position (top-right)

### Components — ProjectFinalCta

- [x] Renders `section` with `project-cta` class
- [x] Renders "Have a project in mind?" heading
- [x] Renders body text about concept through production
- [x] Renders primary button "Start a conversation"
- [x] Defaults to `/contact` href
- [x] Accepts custom `scheduleCallUrl` prop

### Page Route

- [x] `page.tsx` is server component (no `'use client'`)
- [x] Resolves `params: Promise<{ slug: string }>` (Next.js 16 async pattern)
- [x] `generateMetadata()` returns preview noindex when in draft mode
- [x] `generateMetadata()` returns project title + summary for published pages
- [x] `generateMetadata()` returns "Project Not Found" on error
- [x] Renders `<main id="main-content" tabIndex={-1}>` for skip-link target
- [x] Conditionally renders `PreviewIndicator` when `isPreview` is true
- [x] Renders `ProjectHero` with `priority` prop
- [x] Renders `ProjectMeta`
- [x] Conditionally renders `ProjectCaseStudyBody` when `presentationMode === 'FULL'`
- [x] Renders `RelatedWork` with project's related projects
- [x] Conditionally renders `NextProject` when next project available
- [x] Renders `ProjectFinalCta`

### Preview Mode

- [x] Draft mode detected via `draftMode()` from `next/headers`
- [x] Preview uses `fetchPreviewProjectBySlug()` (includes drafts)
- [x] Preview skips next project resolution
- [x] Preview shows `PreviewIndicator` badge
- [x] Preview metadata has `robots: { index: false, follow: false }`
- [x] Preview title prefixed with "Preview:"

### Slug Validation

- [x] Valid slugs: lowercase alphanumeric with hyphens (e.g., `test-device`)
- [x] Invalid slugs: uppercase, spaces, special characters, empty
- [x] Max length: 200 characters
- [x] Invalid slugs trigger `notFound()` (404)

### Presentation Modes

- [x] LIGHT mode: 0 renderable modules → no case study body rendered
- [x] FULL mode: >= 1 renderable module → full case study body rendered
- [x] Module renderability checked per-type (narrative, discipline, gallery, video, technical, testimonial)

### Responsive Behavior

- [x] Hero media: 16:9 at mobile, 21:9 at >= 768px
- [x] Hero content: reduced padding at < 768px
- [x] Meta: column layout at mobile, row layout at >= 768px
- [x] Gallery grid: 1→2→3 columns at 768px/1024px
- [x] Related work grid: 1→2→3 columns at 768px/1024px
- [x] All sections: reduced padding at < 768px

### Accessibility

- [x] `<main id="main-content" tabIndex={-1}>` is skip-link target
- [x] ProjectMeta has `aria-label="Project details"`
- [x] PreviewIndicator has `role="status"` and `aria-live="polite"`
- [x] VideoPlayer has `aria-label` from caption or default
- [x] NextProject link has focus-visible outline
- [x] Testimonial uses semantic `<blockquote>` and `<cite>` elements
- [x] `prefers-reduced-motion` disables link transitions

### Testing

- [x] `tests/unit/project-presentation.test.ts` — 24 tests (isRenderableProjectModule, getProjectPresentationMode)
- [x] `tests/unit/project-data.test.ts` — 21 tests (isValidProjectSlug, getProjectPageData with mocked Sanity modules)
- [x] `tests/unit/project-page.test.tsx` — 61 tests (all 13 components via renderToStaticMarkup)
- [x] `tests/e2e/project-detail.spec.ts` — 7 E2E tests (404 without CMS, responsive overflow, accessibility)
- [x] All 701 unit tests pass (24 files)
- [x] All 105 E2E tests pass
- [x] Zero regressions in existing test files

### Constraints Compliance

- [x] Zero client components (all 13 are server components)
- [x] No new dependencies (0 runtime, 0 dev)
- [x] No inline styles (all styling via CSS classes + data attributes)
- [x] No raw hex values (all colors via design tokens)
- [x] No new design tokens (uses existing token set)
- [x] No CMS-only content (all slugs 404 without Sanity config)
- [x] No git commits or pushes

### Quality Gates

- [x] format:check — All matched files use Prettier code style
- [x] typecheck — TypeScript strict mode, no errors
- [x] test — 701 tests passed (24 files, 0 failures)
- [x] lint — 0 errors, 3 warnings (all `<img>` warnings intentional per spec)
- [x] build — Next.js 16.3.6 (Turbopack) compiled successfully
- [x] test:e2e — 105 E2E tests passed (56.8s)

### Contamination Sweeps

- [x] No `"use client"` in project feature files
- [x] No TODO/FIXME/HACK comments
- [x] No hardcoded secrets or credentials
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

### Lint Warnings (Intentional)

```
src/features/home/components/HomeCredibility.tsx
  17:13  warning  Using `<img>` could result in slower LCP and higher bandwidth.

src/features/home/components/HomeHeroReel.tsx
  27:9  warning  Using `<img>` could result in slower LCP and higher bandwidth.

src/features/home/components/ProjectCard.tsx
  18:11  warning  Using `<img>` could result in slower LCP and higher bandwidth.
```

**Rationale:** These are pre-existing warnings from BUILD 006 (homepage). Project detail uses `next/image` via `ResponsiveImage`. The home components use plain `<img>` per project convention.

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
- Hover video preview wiring (ProjectCardPreviewMedia integration into ProjectCard)
- CRM / lead form integration (BUILD 011)

---

## NOTES

### Server-First Architecture

Project detail pages are fully server-rendered. The page component is a server component that:

1. Validates the slug format before any CMS calls
2. Checks Sanity configuration availability
3. Detects draft/preview mode
4. Fetches the project (preview or published query)
5. Determines presentation mode (LIGHT/FULL)
6. Resolves next project (published mode only)
7. Renders all components to HTML

No client-side data fetching. No loading states. No client components.

### Preview Mode vs Published Mode

The data layer distinguishes between preview and published modes:

| Aspect           | Published               | Preview                       |
| ---------------- | ----------------------- | ----------------------------- |
| Query            | `fetchProjectBySlug()`  | `fetchPreviewProjectBySlug()` |
| Draft content    | Excluded                | Included                      |
| Next project     | Resolved from published | Skipped (null)                |
| PreviewIndicator | Hidden                  | Visible                       |
| Meta robots      | Default                 | `noindex, nofollow`           |
| Title prefix     | None                    | "Preview: "                   |

### Slug Validation

`isValidProjectSlug()` enforces a strict pattern before any CMS call:

- Pattern: `/^[a-z0-9]+(?:-[a-z0-9]+)*$/`
- Min length: 1 character
- Max length: 200 characters
- Allows: lowercase letters, digits, hyphens (not consecutive, not leading/trailing)
- Rejects: uppercase, spaces, underscores, special characters, Unicode

Invalid slugs immediately trigger `notFound()` without touching the CMS.

### Presentation Modes

Two presentation modes control how much of the page renders:

- **LIGHT** — Project has 0 renderable modules. Shows hero + meta + related work + next project + CTA. No case study body.
- **FULL** — Project has >= 1 renderable module. Shows everything including the case study body with all renderable modules.

`isRenderableProjectModule()` checks each module type for meaningful content:

| Module Type | Renderable When                     |
| ----------- | ----------------------------------- |
| narrative   | heading OR body OR media present    |
| discipline  | heading OR body OR media present    |
| gallery     | items.length > 0                    |
| video       | media present                       |
| technical   | heading OR details OR media present |
| testimonial | quote AND name present              |

### Exhaustive Module Rendering

`ProjectCaseStudyBody` uses an exhaustive `switch` on the `ProjectModuleModel` discriminated union. TypeScript ensures all 6 module kinds are handled. Adding a new module type requires updating the switch — the compiler enforces completeness.

### Client Component Budget

Zero client components in the project detail feature. All 13 components are server components. This is possible because:

- No interactive state (no filters, no dialogs, no hover effects requiring client logic)
- All data available at request time (server-side fetching)
- No URL manipulation (no client-side routing)
- Video playback uses native HTML controls (no custom player UI)

### Responsive Image Architecture

`ResponsiveImage` uses `next/image` for automatic optimization:

- Default `sizes`: `(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw`
- Hero images: `sizes="100vw"` (full-width)
- Narrative/discipline media: `sizes="(max-width: 768px) 100vw, 720px"` (reading width)
- Gallery items: responsive based on grid columns
- `priority` prop for LCP optimization (hero image)
- `fill` mode for positioned containers

### Video Architecture

`VideoPlayer` uses native `<video>` for maximum compatibility:

- `preload="metadata"` — loads duration/dimensions without downloading full video
- `playsInline` — required for iOS Safari
- `muted` default — enables autoplay in most browsers
- `<track>` for captions — accessibility compliance
- `aria-label` — screen reader description from caption or default

### No CMS Fallback

When `hasSanityConfig()` returns false (no Sanity environment variables), ALL project slugs return 404. There is no mock data, no fallback content. The project detail page requires a connected CMS to display any content.

This differs from the work index page (BUILD 007), which renders an empty grid without CMS. The project detail page cannot render a meaningful page without a specific project's content.

### Container Variants

Components use `Container` with specific variants for content width:

| Variant     | Used By                                                         | Purpose                         |
| ----------- | --------------------------------------------------------------- | ------------------------------- |
| `shell`     | ProjectHero, RelatedWork, NextProject                           | Full page width with padding    |
| `reading`   | ProjectMeta, Narrative, Discipline, Technical, Testimonial, CTA | Max-width for reading (60-70ch) |
| `wideMedia` | ProjectGallery, ProjectVideoBlock                               | Wider for media content         |

### Design Token Usage

All colors in `project.css` use design tokens:

- `var(--color-surface)` — backgrounds
- `var(--color-surface-muted)` — hero media placeholder
- `var(--color-ink)` — primary text
- `var(--color-ink-secondary)` — secondary text (summary, CTA body)
- `var(--color-ink-muted)` — muted text (meta labels, captions, testimonial role)
- `var(--color-line)` — section borders
- `var(--color-accent)` — preview indicator background
- `var(--color-focus-light)` — focus outlines
- `var(--space-*)` — spacing scale
- `var(--duration-micro)` — transition duration
- `var(--ease-primary)` — transition easing
- `var(--z-sticky)` — preview indicator z-index
- `var(--radius-sm)` — border radius
- `var(--focus-width)`, `var(--focus-offset)` — focus outline dimensions

No hardcoded hex values. No inline styles.

---

**BUILD 008 complete. All acceptance criteria verified. LOCKED — ready for BUILD 009.**
