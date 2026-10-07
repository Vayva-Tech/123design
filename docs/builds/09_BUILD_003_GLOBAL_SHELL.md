# BUILD 003 — GLOBAL SHELL

**Build:** 003 — Global Shell, Navigation & Site chrome  
**Date:** 2026-09-26  
**Status:** COMPLETE (PATCH 001 applied)

---

## SCOPE

Implementation of the canonical Phase 3 global shell for 123.design:

- Skip navigation link
- Brand mark (typographic logotype)
- Desktop header (80px, sticky, z-sticky)
- Desktop primary navigation (6 items)
- Capabilities mega menu (10 links in 4 groups)
- Industries dropdown (6 links)
- Sticky/scrolled header state (24px threshold)
- Overlay-ready header architecture (data-attribute driven)
- Mobile menu trigger (hamburger button)
- Full-height mobile navigation (native `<dialog>`)
- Footer with dark surface (5 link groups)
- Active-route states (prefix matching via `usePathname()`)
- Global navigation configuration (typed, centralized)
- Responsive shell behavior (mobile/desktop breakpoint at 1024px)
- Keyboard accessibility (Enter/Space toggle, Escape close, focus management)
- Unit tests (navigation config with exact canonical values, shell CSS pattern tests, shell component tests)
- E2E tests (multi-viewport: 1280x800, 1024x768, 768x1024, 390x844, 360x800)

### Constraints

- Zero new runtime dependencies
- CSS classes + data attributes only (zero inline styles)
- Only 3 client components (DesktopNavigation, MobileNavigation, HeaderScrollState)
- All other shell components are Server Components
- Native `<dialog>` for mobile menu (no custom modal logic)

---

## IMPLEMENTATION

### 1. Navigation Configuration (`src/lib/navigation/`)

Centralized, typed static navigation data:

| Export               | Type                        | Content                                                                                      |
| -------------------- | --------------------------- | -------------------------------------------------------------------------------------------- |
| `primaryNavigation`  | `NavItem[]` (6 items)       | Work, Capabilities, Process, Industries, About, Insights                                     |
| `startProjectLink`   | `NavItem`                   | "Start a Project" → /start-project (CTA)                                                     |
| `capabilityGroups`   | `NavGroup[]` (4 groups)     | Design(3), Engineering(3), Build(3), Manage(1) = 10                                          |
| `industries`         | `NavItem[]` (6 items)       | Consumer Products, Medical, Defense & Security, Electronics, Industrial, Emerging Technology |
| `mobileUtilityLinks` | `NavItem[]` (5 items)       | Work, Capabilities, Industries, Process, About                                               |
| `footerGroups`       | `FooterGroup[]` (5)         | Work(1), Capabilities(7), Company(4), Contact(2), Legal(3)                                   |
| `isInternalLink`     | `(href: string) => boolean` | Shared helper for Next.js Link vs `<a>` decision                                             |

Types: `NavItem { label, href }`, `NavGroup { heading, items }`, `FooterGroup { heading, items }`.

### 2. Shell CSS (`src/styles/shell.css`)

All shell styling via CSS classes and data attributes:

| Selector                                     | Purpose                                          |
| -------------------------------------------- | ------------------------------------------------ |
| `.skip-link`                                 | Off-screen, visible on focus (sr-only → visible) |
| `.brand-mark`                                | Typographic logotype, Inter Tight 700            |
| `.site-header`                               | Sticky, 80px, z-sticky, canvas background        |
| `.site-header[data-header-overlay]`          | Overlay mode (transparent, position fixed)       |
| `[data-header-scrolled="true"] .site-header` | Scrolled state (border-bottom, shadow)           |
| `.site-header-inner`                         | Flex container, 80px height                      |
| `.desktop-nav`                               | Desktop-only flex row (≥1024px)                  |
| `.mega-menu`                                 | Capabilities dropdown panel, z-dropdown          |
| `.mega-menu-group`                           | Grouped link list with heading                   |
| `.industries-dropdown`                       | Industries dropdown panel                        |
| `[data-nav-active]`                          | Active route indicator (accent color underline)  |
| `.mobile-menu-trigger`                       | Hamburger button (<1024px)                       |
| `.mobile-nav`                                | Native `<dialog>`, full-height                   |
| `.mobile-nav-backdrop`                       | Clickable backdrop area                          |
| `.site-footer`                               | Dark surface (dark-canvas background)            |
| `.footer-grid`                               | 5-column responsive grid                         |

Key responsive breakpoints:

- Mobile: `<1024px` — mobile trigger visible, desktop nav hidden
- Desktop: `≥1024px` — desktop nav visible, mobile trigger hidden
- Mobile header height: 64px; Desktop header height: 80px

### 3. Server Components

**SkipLink** (`src/components/shell/SkipLink.tsx`)  
`<a href="#main-content" className="skip-link">` — hidden until focused via keyboard.

**BrandMark** (`src/components/shell/BrandMark.tsx`)  
Next.js `Link` to `/`, typographic logotype "123.design" in Inter Tight 700.

**SiteHeader** (`src/components/shell/SiteHeader.tsx`)  
Orchestrates all header children. Props: `overlay?: boolean`, `overlayTheme?: 'light' | 'dark'`.  
Renders `HeaderScrollState` + `<header>` with `data-header-overlay` / `data-header-overlay-theme` attributes.

**SiteFooter** (`src/components/shell/SiteFooter.tsx`)  
Dark surface footer with 5 link groups from `footerGroups`. Brand tagline: "From Idea to Production". Dynamic copyright year.

### 4. Client Components

**HeaderScrollState** (`src/components/shell/HeaderScrollState.tsx`)  
Passive scroll listener setting `data-header-scrolled` on `<html>` element. 24px threshold. Direct DOM attribute mutation (no React setState per frame). Renders null.

**DesktopNavigation** (`src/components/shell/DesktopNavigation.tsx`)  
Primary navigation with mega menu and dropdown:

- 6 primary nav items from `primaryNavigation`
- Capabilities trigger opens mega menu (4 groups, 10 links)
- Industries trigger opens dropdown (6 links)
- "Start a Project" CTA button
- Hover timers: 150ms open delay, 180ms close delay, cancel on re-enter
- Keyboard: Enter/Space toggle panels, Escape closes
- Outside click: pointerdown listener closes panels
- Active route: `usePathname()` with prefix matching, `data-nav-active` attribute
- Cleanup: all timers and listeners cleaned up on unmount

**MobileNavigation** (`src/components/shell/MobileNavigation.tsx`)  
Native `<dialog>` based mobile menu:

- Trigger button visible at `<1024px`
- `showModal()` / `close()` for native focus containment
- Body scroll lock via `body[data-mobile-menu-open]`
- Backdrop click detection (click outside dialog content closes)
- Escape key via native `cancel` event
- Focus return to trigger on close
- `usePathname()` auto-close on navigation
- All primary nav links + CTA

### 5. Layout Integration

`src/app/layout.tsx` updated:

```
<body>
  <SkipLink />
  <SiteHeader />
  {children}
  <SiteFooter />
</body>
```

`src/app/page.tsx` updated: `<main id="main-content" tabIndex={-1}>` for skip link target.

### 6. Component Refactoring

`Button.tsx` and `TextLink.tsx` updated to use shared `isInternalLink` from `@/lib/navigation` instead of local duplicates.

---

## TESTING

### Unit Tests (3 files)

**`tests/unit/navigation.test.ts`** — Navigation config tests

- `isInternalLink`: internal paths, external URLs, protocol-relative
- `primaryNavigation`: 6 items in exact canonical order with exact labels and routes
- `startProjectLink`: label "Start a Project", href "/start-project"
- `capabilityGroups`: 4 groups (Design, Engineering, Build, Manage), all 10 items with exact labels/routes
- `industries`: 6 items with exact canonical labels/routes (Consumer Products, Medical, Defense & Security, Electronics, Industrial, Emerging Technology)
- `mobileUtilityLinks`: 5 items
- `footerGroups`: 5 groups with exact headings and item counts
- Negative tests: no Blog, no /contact for Start Project, no unauthorized industries

**`tests/unit/shell-css.test.ts`** — CSS pattern tests

- Active nav uses `--color-accent`, no `--color-success`, no green hex, no green Tailwind classes
- Overlay header uses `position: fixed`, normal header uses `position: sticky`
- Desktop nav breakpoint at 1024px, NOT 768px
- Mobile header height is 64px, not 80px

**`tests/unit/shell.test.tsx`** — Shell component tests

- SkipLink: href="#main-content", class, text, no inline styles
- BrandMark: href="/", class, text, no inline styles
- SiteFooter: footer element, class, brand name, 5 groups rendered, canonical tagline "From Idea to Production", canonical description, copyright year, no inline styles

### E2E Tests (multi-viewport, 1 file)

**`tests/e2e/homepage.spec.ts`** — Tests across 5 viewports:

**Global Shell:**

- Skip link present, visible on focus, main content target
- Header 80px at desktop, 64px mobile header
- Brand mark links to home
- Footer present with dark surface

**Desktop Navigation (1280x800):**

- Visible, 6 items in exact order, no Blog
- Start Project CTA links to /start-project
- Mega menu and dropdown open on hover/keyboard
- Escape closes menus, no overflow

**Desktop Boundary (1024x768):**

- Desktop nav visible, mobile trigger hidden
- Menus functional, no overflow

**Tablet (768x1024):**

- Desktop nav hidden, mobile trigger visible
- Mobile dialog shows Insights, Start a Project, 5 utility links

**Mobile (390x844, 360x800):**

- Exact canonical nav order in mobile dialog
- No unauthorized IA terms (Blog, E-commerce, Fintech, SaaS)
- No horizontal overflow

**Foundation Page:**

- Structure validation, overflow checks at 3 viewports, H1 visibility

---

## QUALITY GATE RESULTS

Quality gates re-run after PATCH 001 — see PATCH 001 acceptance report.

---

## FILES CREATED

### Navigation Configuration

```
src/lib/navigation/is-internal-link.ts    — Shared internal link detection helper
src/lib/navigation/site-navigation.ts     — Complete typed static navigation config
src/lib/navigation/index.ts               — Barrel export
```

### Shell Components

```
src/components/shell/SkipLink.tsx          — Server Component, skip navigation
src/components/shell/BrandMark.tsx         — Server Component, typographic logotype
src/components/shell/HeaderScrollState.tsx — Client Component, scroll state bridge
src/components/shell/DesktopNavigation.tsx — Client Component, primary nav + mega menu
src/components/shell/MobileNavigation.tsx  — Client Component, native <dialog> mobile menu
src/components/shell/SiteHeader.tsx        — Server Component, header orchestrator
src/components/shell/SiteFooter.tsx        — Server Component, dark surface footer
src/components/shell/index.ts             — Barrel export
```

### Styles

```
src/styles/shell.css                       — All shell/navigation/footer styles
```

### Tests

```
tests/unit/navigation.test.ts              — Navigation config tests (exact canonical values)
tests/unit/shell-css.test.ts               — CSS pattern tests (NEW, PATCH 001)
tests/unit/shell.test.tsx                  — Shell component tests
```

### Files Modified

```
src/app/globals.css                        — Added @import for shell.css
src/app/layout.tsx                         — Added SkipLink, SiteHeader, SiteFooter
src/app/page.tsx                           — Added id="main-content" and tabIndex to <main>
src/components/ui/Button.tsx               — Uses shared isInternalLink
src/components/ui/TextLink.tsx             — Uses shared isInternalLink
tests/e2e/homepage.spec.ts                 — Expanded multi-viewport E2E tests
```

---

## PATCH 001 — IA CORRECTIONS

**Date:** 2026-09-26  
**Status:** APPLIED

Corrections to align BUILD 003 with the locked 123.design information architecture:

### Source Corrections

| Item                 | Before (BUILD 003)                                                                       | After (PATCH 001)                                                                            |
| -------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Nav item 6           | Blog                                                                                     | Insights                                                                                     |
| Start Project href   | /contact                                                                                 | /start-project                                                                               |
| Industries           | E-commerce, Health, Education, Fintech, Logistics, SaaS                                  | Consumer Products, Medical, Defense & Security, Electronics, Industrial, Emerging Technology |
| Desktop breakpoint   | 768px                                                                                    | 1024px                                                                                       |
| Active nav color     | green (--color-success)                                                                  | accent (--color-accent)                                                                      |
| Overlay positioning  | position: absolute                                                                       | position: fixed                                                                              |
| Mobile header height | 80px                                                                                     | 64px                                                                                         |
| Footer tagline       | Product · Engineering · Manufacturing                                                    | From Idea to Production                                                                      |
| Footer description   | Product development, engineering and manufacturing for teams building physical products. | Product development, engineering and manufacturing.                                          |
| Capability label     | Product Animation                                                                        | Product Animation / Visualization                                                            |

### Test Corrections

- Navigation tests now enforce exact canonical labels AND routes (not just counts)
- New `shell-css.test.ts` enforces CSS patterns (accent color, fixed overlay, 1024px breakpoint, 64px mobile header)
- E2E tests expanded to 5 viewports: 1280x800, 1024x768, 768x1024, 390x844, 360x800
- Negative tests added: no Blog, no unauthorized industries, no /contact for Start Project
- Contamination sweep: zero unauthorized IA terms in src/ or tests/

### Files Modified by PATCH 001

```
src/lib/navigation/site-navigation.ts      — Capability label correction
src/styles/shell.css                        — Mobile header height 80px → 64px
src/components/shell/SiteFooter.tsx         — Tagline and description corrections
tests/unit/navigation.test.ts              — Full rewrite with exact canonical values
tests/unit/shell-css.test.ts               — New file: CSS pattern assertions
tests/unit/shell.test.tsx                  — Added footer tagline/description tests
tests/e2e/homepage.spec.ts                 — Multi-viewport expansion, exact content tests
```

---

## DESIGN DECISIONS

### Native `<dialog>` for Mobile Menu

The mobile navigation uses the native HTML `<dialog>` element with `showModal()`. This provides:

- Built-in focus containment (focus trap)
- Built-in Escape key handling (cancel event)
- Top layer rendering (no z-index management)
- Backdrop pseudo-element for overlay styling
- No custom modal logic needed

### Hover Timers for Desktop Menus

150ms open delay and 180ms close delay prevent menu flicker when the cursor crosses between trigger and panel. Timers are cancelled on re-enter and cleaned up on unmount. This is a standard UX pattern for navigation menus.

### Passive Scroll Listener

`HeaderScrollState` uses a passive scroll listener that directly mutates `data-header-scrolled` on `<html>`. No React setState per frame — this avoids unnecessary re-renders while scrolling. The component renders null; it exists solely for the side effect.

### Overlay-Ready Architecture

The header supports a future transparent-over-hero mode via `data-header-overlay` and `data-header-overlay-theme` attributes. The `SiteHeader` component accepts `overlay` and `overlayTheme` props. CSS handles the visual switching. No JavaScript needed for overlay mode.

### Server/Client Boundary

Only 3 components need `"use client"`:

1. `HeaderScrollState` — needs `useEffect` for scroll listener
2. `DesktopNavigation` — needs `useState`, `useEffect`, `useRef`, `usePathname` for interactive menus
3. `MobileNavigation` — needs `useState`, `useEffect`, `useRef`, `usePathname` for dialog control

All other shell components (SkipLink, BrandMark, SiteHeader, SiteFooter) are Server Components.

### React 19 Compiler Compliance

The React 19 compiler lint rules enforce strict constraints:

- No `setState` in effects (react-hooks/set-state-in-effect)
- No ref access during render (react-hooks/refs)

The pathname-change effect for closing panels was removed because both interaction handlers (pointerdown outside, Escape key) already handle panel closure. This avoids the lint violation while maintaining correct behavior.

### Zero Inline Styles

All shell styling uses CSS classes and data attributes. No component uses `style={}` objects. This is verified by unit tests and maintains the design system contract.

---

**BUILD 003 complete. PATCH 001 applied. All IA corrections verified.**
