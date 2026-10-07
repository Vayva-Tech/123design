# BUILD 002 — DESIGN SYSTEM FOUNDATION, TOKENS, TYPOGRAPHY & CORE UI PRIMITIVES

**Build:** 002 — Design System Foundation  
**Date:** 2026-09-26  
**Status:** COMPLETE (PATCH 001 applied 2026-09-26)

---

## SCOPE

Implementation of the canonical Phase 2 design system for 123.design:

- CSS design tokens (colors, spacing, containers, radii, borders, shadows, motion, focus, z-index)
- Tailwind CSS 4 CSS-first theme integration (`@theme inline`)
- Inter + Inter Tight variable fonts via `next/font/google`
- Fluid typography scale with `clamp()` values
- Layout primitives: Container, Section, Grid, Stack, Cluster
- UI primitives: Heading, Text, Eyebrow, Button, TextLink, Tag, Divider
- Media component: MediaFrame
- Focus system (standard + high-visibility)
- Motion tokens (durations + easings)
- Reduced motion baseline
- Unit tests (74 tests)
- Responsive E2E tests (7 tests at 3 viewports)

### Constraints

- No new runtime dependencies (no clsx, classnames, cva, tailwind-merge, icon libraries)
- All Server Components (no `"use client"` anywhere)
- CSS custom properties as single source of truth
- Token-mapped component props (no hardcoded pixel values)

---

## IMPLEMENTATION

### 1. Design Tokens (`src/styles/tokens.css`)

All canonical Phase 2 CSS custom properties:

| Category          | Count | Key Values                                         |
| ----------------- | ----- | -------------------------------------------------- |
| Colors — Light    | 9     | canvas `#f4f1ea`, ink `#11110f`, surface `#ffffff` |
| Colors — Dark     | 6     | dark-canvas `#11110f`, dark-ink `#f5f2ea`          |
| Colors — Accent   | 4     | accent `#f05a36`, accent-hover `#d94a29`           |
| Colors — Semantic | 4     | success, warning, error, info                      |
| Colors — Focus    | 2     | focus-light, focus-dark                            |
| Spacing           | 17    | 2px–192px (4px base scale)                         |
| Containers        | 4     | shell 1440px, content 1280px, reading 720px        |
| Padding           | 4     | mobile 20px → large-desktop 40px                   |
| Border Radius     | 5     | xs 3px → round 999px                               |
| Borders           | 3     | default, strong, dark                              |
| Shadows           | 1     | modal                                              |
| Motion — Duration | 4     | micro 180ms, ui 280ms, section 550ms, media 750ms  |
| Motion — Easing   | 2     | primary (cubic-bezier), secondary (ease-out)       |
| Focus             | 4     | width, width-high-vis, offset, offset-high-vis     |
| Z-Index           | 7     | base 0 → toast 500                                 |

### 2. Typography (`src/styles/typography.css`)

Fluid type scale using `clamp()`:

| Token      | Size                               | Line Height | Weight | Tracking |
| ---------- | ---------------------------------- | ----------- | ------ | -------- |
| display-xl | clamp(5rem, 7.4vw, 7rem)           | 0.92        | 700    | -0.04em  |
| display-l  | clamp(4rem, 5.5vw, 5.5rem)         | 0.97        | 600    | -0.03em  |
| h1         | clamp(3.5rem, 4.5vw, 4.5rem)       | 1.02        | 600    | -0.025em |
| h2         | clamp(2.75rem, 3.8vw, 3.75rem)     | 1.07        | 600    | -0.02em  |
| h3         | clamp(2rem, 2.7vw, 2.625rem)       | 1.14        | 500    | -0.015em |
| h4         | clamp(1.5rem, 1.9vw, 1.875rem)     | 1.2         | 500    | -0.01em  |
| lead       | clamp(1.25rem, 1.5vw, 1.5rem)      | 1.45        | 400    | -0.005em |
| body-lg    | clamp(1.125rem, 1.2vw, 1.25rem)    | 1.55        | 400    | 0        |
| body       | clamp(1rem, 1.1vw, 1.125rem)       | 1.57        | 400    | 0        |
| small      | clamp(0.875rem, 0.94vw, 0.9375rem) | 1.5         | 400    | 0.005em  |
| micro      | clamp(0.75rem, 0.82vw, 0.8125rem)  | 1.45        | 400    | 0.01em   |

Display and heading classes include `overflow-wrap: break-word; min-width: 0` for overflow safety.

### 3. Utilities (`src/styles/utilities.css`)

- Focus ring utilities (`.focus-ring`, `.focus-ring-high-vis`, `.focus-ring-dark`, `.focus-visible-ring`)
- Screen reader only (`.sr-only`)
- Reduced motion baseline: targeted `[data-motion="decorative"]` suppression, preserving essential state feedback (focus rings, loading indicators)

### 4. Global Styles (`src/app/globals.css`)

Imports: tailwindcss → tokens.css → typography.css → utilities.css → components.css

`@theme inline` block maps all design tokens to Tailwind theme:

- Color tokens → `--color-*`
- Font families → `--font-sans` (Inter), `--font-display` (Inter Tight)
- Radius tokens → `--radius-*`

Body base: canvas background, ink color, Inter font, antialiased rendering.  
Selection: accent-soft background, ink color text (AA contrast compliant).

### 5. Font Configuration (`src/app/layout.tsx`)

```typescript
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
  Weight: ['400', '500', '600', '700'],
});
```

Both CSS variable classes applied to `<html>` element.

### 6. Layout Primitives (`src/components/layout/`)

| Component | Element | Props                                    | Purpose                                     |
| --------- | ------- | ---------------------------------------- | ------------------------------------------- |
| Container | div     | variant: shell/content/reading/wideMedia | Max-width container with responsive padding |
| Section   | section | spacing: standard/compact/large/none     | Vertical section spacing                    |
| Grid      | div     | columns: 1-4, gap                        | CSS Grid layout                             |
| Stack     | div     | gap (token-mapped), as, align            | Vertical flex stack                         |
| Cluster   | div     | gap, align, justify, wrap                | Horizontal flex cluster                     |

### 7. UI Primitives (`src/components/ui/`)

| Component | Element    | Key Props                                                                | Notes                                   |
| --------- | ---------- | ------------------------------------------------------------------------ | --------------------------------------- |
| Heading   | h1-h6      | variant: displayXL/displayL/h1-h4                                        | Inter Tight (display font)              |
| Text      | p/span/div | variant: lead/bodyLarge/body/small/micro                                 | Token-mapped typography                 |
| Eyebrow   | span       | marker?: boolean                                                         | Uppercase, tracked, optional accent bar |
| Button    | button/a   | variant: primary/secondary/text/dark/danger, size: large/default/compact | Discriminated union (button vs link)    |
| TextLink  | a          | arrow?, external?                                                        | Inline text link with optional arrow    |
| Tag       | span       | —                                                                        | Non-interactive label                   |
| Divider   | hr         | strength: default/strong                                                 | Horizontal rule                         |

### 8. Media (`src/components/media/`)

| Component  | Element | Key Props                                                                           | Notes                           |
| ---------- | ------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| MediaFrame | figure  | variant: fullBleed/containedStage/documentFrame, aspect: auto/square/4:3/16:10/16:9 | Optional caption via figcaption |

### 9. Foundation Page (`src/app/page.tsx`)

Demonstrates all primitives:

- Section(large) > Container(reading) > Stack(gap=24)
- Eyebrow(marker) "Design System"
- Heading(displayXL) "123.design"
- Text(lead) tagline
- Divider
- Foundation description block (h3 + body)
- Primitives inventory (h4 + 13 Tags in Cluster)

---

## TESTING

### Unit Tests (74 tests, 3 files)

**`tests/unit/tokens.test.ts`** — 30 tests  
Reads `tokens.css` and `typography.css` directly and asserts canonical values for all token categories, z-index layers (7), typography scale (11+ classes, mobile minimums), and selection colors.

**`tests/unit/design-system.test.tsx`** — 38 tests  
Component rendering tests:

- Button: CSS class + data attributes, variants, sizes, disabled/loading states, internal (Next.js Link) vs external rendering
- Heading: CSS class applied, element override, display font
- Text: CSS class applied, variants, element variants
- Tag: CSS class, non-interactive
- Eyebrow: marker class, eyebrow-text class
- MediaFrame: data-variant, data-aspect, caption
- Divider: data-strength
- TextLink: internal (Next.js Link) vs external, arrow
- Layout primitives: CSS classes + data attributes for Container, Section, Stack, Cluster, Grid
- Zero inline styles: no component renders with `style=` attribute

**`tests/unit/env.test.ts`** — 6 tests (from BUILD 001, unchanged)

### E2E Tests (7 tests, 1 file)

**`tests/e2e/homepage.spec.ts`** — 7 tests at 3 viewports (360x800, 390x844, 1280x800):

- Structure: title, main visible, h1 count=1 with text "123.design", eyebrow "Design System" exact, heading "Foundation" exact
- Overflow: scrollWidth <= clientWidth at each viewport
- H1 visibility at each viewport

---

## QUALITY GATE RESULTS

```
✓ format:check — All matched files use Prettier code style
✓ lint         — ESLint: No errors or warnings
✓ typecheck    — TypeScript: No errors (strict mode)
✓ test         — 3 files, 74 tests passed (74)
✓ build        — Next.js 16.3.6 (Turbopack), compiled successfully, 4/4 static pages
✓ test:e2e     — 7 tests passed (5.9s, Chromium, port 3001)
```

---

## FILES CREATED

### Styles

```
src/styles/tokens.css                   — All canonical CSS custom properties
src/styles/typography.css               — Fluid type scale with clamp()
src/styles/utilities.css                — Focus system, sr-only, reduced motion
src/styles/components.css              — All component styles via CSS classes + data attributes
```

### Layout Components

```
src/components/layout/Container.tsx     — Max-width container
src/components/layout/Section.tsx       — Vertical section spacing
src/components/layout/Grid.tsx          — CSS Grid layout
src/components/layout/Stack.tsx         — Vertical flex stack
src/components/layout/Cluster.tsx       — Horizontal flex cluster
src/components/layout/index.ts          — Barrel export
```

### UI Components

```
src/components/ui/Heading.tsx           — Heading/display typography
src/components/ui/Text.tsx              — Body/lead/small typography
src/components/ui/Eyebrow.tsx           — Section label with optional accent marker
src/components/ui/Button.tsx            — Button primitive (5 variants, 3 sizes)
src/components/ui/TextLink.tsx          — Inline text link
src/components/ui/Tag.tsx               — Non-interactive label
src/components/ui/Divider.tsx           — Horizontal rule
src/components/ui/index.ts              — Barrel export
```

### Media Components

```
src/components/media/MediaFrame.tsx     — Media container with aspect ratio
src/components/media/index.ts           — Barrel export
```

### Test Files

```
tests/unit/tokens.test.ts               — 30 token validation tests
tests/unit/design-system.test.tsx       — 38 component rendering tests
```

### Files Modified

```
src/app/globals.css                     — Rewritten: imports tokens/typography/utilities, @theme inline mapping
src/app/layout.tsx                      — Rewritten: Inter + Inter Tight font configuration
src/app/page.tsx                        — Rewritten: Foundation showcase page
tests/e2e/homepage.spec.ts              — Rewritten: 7 responsive E2E tests
```

---

## DESIGN DECISIONS

### CSS Classes with Data Attributes

No clsx, classnames, cva, or tailwind-merge. Components use CSS classes scoped by `data-*` attributes (e.g., `.btn[data-variant="primary"]`, `.stack[data-gap="24"]`). CSS custom properties bridge data attributes to token values. Zero inline styles on any component. This keeps the bundle minimal and avoids runtime dependencies for what CSS handles natively.

### Server Components Only

All components are Server Components. No `"use client"` directives. Components render static markup with token-based styling.

### Discriminated Union for Button

Button uses a discriminated union type: `ButtonAsButton` (renders `<button>`) vs `ButtonAsLink` (renders `<a>` or Next.js `Link` when `href` is provided). Internal links (`/path`) use Next.js `Link` for client-side navigation; external links use `<a>`. This provides type-safe polymorphism without runtime overhead.

### Token Props, Not Hardcoded Values

Component props reference token names (e.g., `gap="24"` maps to `var(--space-24)`), not raw pixel values. This maintains the token contract at the component API level.

### Overflow Safety

All display and heading typography classes include `overflow-wrap: break-word; min-width: 0`. The foundation page Stack uses default `align-items: stretch` (not `start`) to ensure children are width-constrained by the flex container.

---

**BUILD 002 complete (with PATCH 001 corrections). All quality gates pass. 74 unit tests + 7 E2E tests green.**
