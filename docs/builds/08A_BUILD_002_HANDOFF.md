# BUILD 002 — HANDOFF

**Build:** 002 — Design System Foundation, Tokens, Typography & Core UI Primitives  
**Date:** 2026-09-26  
**Status:** COMPLETE (PATCH 001 applied 2026-09-26)

---

## ACCEPTANCE CRITERIA VERIFICATION

### Design Tokens

- [x] All canonical Phase 2 CSS custom properties defined in `src/styles/tokens.css`
- [x] Color tokens: light (9), dark (6), accent (4), semantic (4), focus (2)
- [x] Spacing tokens: 17 values (2px–192px, 4px base scale)
- [x] Container tokens: shell 1440px, content 1280px, reading 720px, wide-media 1440px
- [x] Padding tokens: mobile 20px, tablet 24px, desktop 32px, large-desktop 40px
- [x] Border radius tokens: xs 3px, sm 6px, md 10px, lg 16px, round 999px
- [x] Motion duration tokens: micro 180ms, ui 280ms, section 550ms, media 750ms
- [x] Motion easing tokens: primary cubic-bezier(0.22,1,0.36,1), secondary ease-out
- [x] Focus tokens: width 2px, high-vis 3px, offset 2px, high-vis-offset 3px
- [x] Z-index tokens: base 0, raised 10, sticky 100, dropdown 200, overlay 300, modal 400, toast 500
- [x] Token unit tests: 30 tests validating canonical values

### Tailwind CSS 4 Integration

- [x] CSS-first configuration via `@theme inline` (no tailwind.config.ts)
- [x] All color tokens mapped to `--color-*` theme variables
- [x] Font families mapped: `--font-sans` (Inter), `--font-display` (Inter Tight)
- [x] Radius tokens mapped to `--radius-*` theme variables
- [x] globals.css imports: tailwindcss → tokens.css → typography.css → utilities.css

### Typography

- [x] Inter variable font (body, weights 400/500/600) via `next/font/google`
- [x] Inter Tight variable font (display/headings, weights 400/500/600/700) via `next/font/google`
- [x] Both fonts use `display: 'swap'` and CSS custom property variables
- [x] Fluid type scale: 11 sizes from display-xl to micro, all using `clamp()`
- [x] Display/heading classes include overflow protection (overflow-wrap + min-width)
- [x] Typography classes in dedicated `src/styles/typography.css`

### Layout Primitives

- [x] Container: 4 variants (shell/content/reading/wideMedia), responsive padding
- [x] Section: 4 spacing options (standard/compact/large/none), renders `<section>`
- [x] Grid: 1-4 columns, configurable gap, CSS grid
- [x] Stack: vertical flex, token-mapped gaps (2-64), configurable as/align
- [x] Cluster: horizontal flex, configurable gap/align/justify/wrap
- [x] All layout primitives are Server Components
- [x] Barrel export via `src/components/layout/index.ts`

### UI Primitives

- [x] Heading: 6 variants (displayXL/displayL/h1-h4), elements h1-h6, Inter Tight font
- [x] Text: 5 variants (lead/bodyLarge/body/small/micro), elements p/span/div
- [x] Eyebrow: optional accent marker (24px × 2px, accent color), uppercase tracked text
- [x] Button: 5 variants (primary/secondary/text/dark/danger), 3 sizes, discriminated union (button/link)
- [x] TextLink: optional arrow (→), optional external (target="_blank" + rel)
- [x] Tag: non-interactive `<span>`, subtle border
- [x] Divider: `<hr>` with strength variants (default/strong)
- [x] All UI primitives are Server Components
- [x] Barrel export via `src/components/ui/index.ts`

### Media

- [x] MediaFrame: 3 variants (fullBleed/containedStage/documentFrame)
- [x] Aspect ratios: auto/square/4:3/16:10/16:9
- [x] Optional caption via `<figcaption>`
- [x] Barrel export via `src/components/media/index.ts`

### Focus System

- [x] Standard focus ring: 2px width, 2px offset, ink color
- [x] High-visibility focus ring: 3px width, 3px offset
- [x] Dark context variant
- [x] `focus-visible` integration (`.focus-visible-ring`)
- [x] Focus colors: light `#11110f`, dark `#f5f2ea` (NOT Signal Orange)

### Motion

- [x] Duration tokens: micro 180ms, ui 280ms, section 550ms, media 750ms
- [x] Easing tokens: primary cubic-bezier(0.22,1,0.36,1), secondary ease-out
- [x] Reduced motion baseline: targeted `[data-motion="decorative"]` suppression, essential state feedback preserved

### Constraints Compliance

- [x] No new runtime dependencies added (no clsx, classnames, cva, tailwind-merge, icon libs)
- [x] All components are Server Components (no `"use client"` anywhere)
- [x] CSS custom properties as single source of truth
- [x] Token-mapped component props (no hardcoded pixel values in component APIs)

### Testing

- [x] Unit tests: 74 tests across 3 files (tokens 30, design-system 38, env 6)
- [x] E2E tests: 7 tests at 3 viewports (360x800, 390x844, 1280x800)
- [x] E2E coverage: structure validation, horizontal overflow check, H1 visibility
- [x] All tests pass

### Quality Gates

- [x] format:check — Prettier clean
- [x] lint — ESLint no errors or warnings
- [x] typecheck — TypeScript strict mode, no errors
- [x] test — 74/74 unit tests pass
- [x] build — Next.js 16.3.6 compiles successfully, 4/4 static pages
- [x] test:e2e — 7/7 E2E tests pass

---

## QUALITY GATE RESULTS

### format:check

```
All matched files use Prettier code style!
```

### lint

```
ESLint: No errors or warnings
```

### typecheck

```
TypeScript: No errors (strict mode)
```

### test

```
Test Files  3 passed (3)
Tests       74 passed (74)
Duration    1.45s
```

### build

```
Next.js 16.3.6 (Turbopack)
Compiled successfully in 756ms
TypeScript check passed
Static pages generated (4/4)

Route (app)
○ /
○ /_not-found
```

### test:e2e

```
Running 7 tests using 5 workers
7 passed (5.9s)

Coverage:
- Structure validation (title, main, h1, eyebrow, heading)
- Horizontal overflow at 360px, 390px, 1280px
- H1 visibility at all viewports
```

---

## PATCH 001 — CANONICAL CORRECTIONS

**Date:** 2026-09-26  
**Trigger:** Design/Product Lead review identified 5 drift issues

### Corrections Applied

#### 1. Typography Scale — Canonical Values Corrected

Documentation table had incorrect `clamp()` values. Source `typography.css` was already correct. Doc table updated to match source:

| Token     | Doc (before)                        | Doc (after)                        |
| --------- | ----------------------------------- | ---------------------------------- |
| display-l | clamp(3.5rem, 5.2vw, 5rem)          | clamp(4rem, 5.5vw, 5.5rem)         |
| h1        | clamp(2.5rem, 3.8vw, 3.5rem)        | clamp(3.5rem, 4.5vw, 4.5rem)       |
| h2        | clamp(2rem, 3vw, 2.75rem)           | clamp(2.75rem, 3.8vw, 3.75rem)     |
| h3        | clamp(1.5rem, 2.2vw, 2rem)          | clamp(2rem, 2.7vw, 2.625rem)       |
| h4        | clamp(1.25rem, 1.6vw, 1.5rem)       | clamp(1.5rem, 1.9vw, 1.875rem)     |
| lead      | clamp(1.125rem, 1.4vw, 1.375rem)    | clamp(1.25rem, 1.5vw, 1.5rem)      |
| body-lg   | clamp(1.0625rem, 1.2vw, 1.1875rem)  | clamp(1.125rem, 1.2vw, 1.25rem)    |
| body      | clamp(0.9375rem, 1.05vw, 1.0625rem) | clamp(1rem, 1.1vw, 1.125rem)       |
| small     | clamp(0.8125rem, 0.9vw, 0.875rem)   | clamp(0.875rem, 0.94vw, 0.9375rem) |
| micro     | clamp(0.6875rem, 0.75vw, 0.75rem)   | clamp(0.75rem, 0.82vw, 0.8125rem)  |

#### 2. Selection Colors — Accessibility Fix

- **Before:** `accent` background + `surface` text (contrast failure)
- **After:** `accent-soft` background + `ink` text (AA compliant)
- **File:** `src/app/globals.css`

#### 3. Reduced Motion — Targeted Approach

- **Before:** Global `*` selector suppressed all animation/transition
- **After:** `[data-motion="decorative"]` selector preserves essential state feedback (focus rings, loading indicators)
- **File:** `src/styles/utilities.css`

#### 4. Component Styling — Zero Inline Styles

- **Before:** Components used inline `style={}` objects
- **After:** CSS classes + `data-*` attributes via `src/styles/components.css`
- **Files:** All component files rewritten, `components.css` created (~300 lines)
- **New pattern:** `.btn[data-variant="primary"]`, `.stack[data-gap="24"]`, etc.
- **Verification:** Test suite includes "Zero inline styles" check

#### 5. Z-Index Token Count — Documentation Fix

- **Before:** Doc said "8" z-index tokens
- **After:** Corrected to "7" (`--z-base`, `--z-raised`, `--z-sticky`, `--z-dropdown`, `--z-overlay`, `--z-modal`, `--z-toast`)

#### 6. Next.js Link Integration

- Button and TextLink now use Next.js `Link` for internal hrefs (`/path`)
- External hrefs use `<a>` with `rel="noopener noreferrer"` and `target="_blank"`
- `isInternalLink` helper: `href.startsWith('/') && !href.startsWith('//')`

#### 7. Foundation Page — Fake CTAs Removed

- Removed non-functional "Get started", "Learn more" buttons and "View documentation" link
- Replaced raw `<div>` tag list with `Cluster` component

#### 8. Typography Mobile Minimums — Test Coverage

- Body minimum ≥ 16px (1rem) via clamp — verified
- Micro minimum ≥ 12px (0.75rem) via clamp — verified

### Test Count Changes

| File                        | Before | After  |
| --------------------------- | ------ | ------ |
| `tests/unit/tokens.test.ts` | 22     | 30     |
| `tests/unit/design-system`  | 27     | 38     |
| `tests/unit/env.test.ts`    | 6      | 6      |
| **Total**                   | **55** | **74** |

---

## DEFERRED WORK

### BUILD 003 — Global Shell

- Header component
- Navigation system
- Mega menu
- Mobile menu
- Footer component
- Skip link integration

### BUILD 004 — Sanity Foundation

- Sanity client configuration
- Sanity Studio setup
- CMS schemas
- GROQ queries
- Preview mode

### BUILD 006 — Homepage

- Hero section with video reel
- Featured Work section
- Lifecycle section
- Capabilities section
- Industries section
- Manufacturing section
- Final CTA section

---

## NOTES

### Tailwind CSS v4 CSS-First Configuration

This build uses Tailwind CSS v4.3.3 with CSS-first configuration. There is no `tailwind.config.ts`. All theme customization happens in `globals.css` via `@theme inline`. This is the current Tailwind v4 pattern.

### Font Loading Strategy

Inter and Inter Tight are loaded via `next/font/google` with `display: 'swap'`. Both are variable fonts, so only one font file per family is downloaded. CSS custom properties (`--font-inter`, `--font-inter-tight`) connect the font instances to the Tailwind theme.

### Button Discriminated Union

The Button component uses a TypeScript discriminated union to handle both `<button>` and `<a>` rendering. When `href` is provided, it renders as an anchor; otherwise as a button. This provides full type safety for the different prop sets.

### Overflow Prevention

Two measures prevent horizontal overflow at narrow viewports:

1. All display/heading typography classes include `overflow-wrap: break-word; min-width: 0`
2. The foundation page Stack uses default `align-items: stretch` (not `start`), ensuring children are width-constrained by the flex container

---

**BUILD 002 handoff complete (PATCH 001 applied). All acceptance criteria met. Ready for BUILD 003.**
