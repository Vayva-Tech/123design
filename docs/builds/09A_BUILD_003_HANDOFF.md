# BUILD 003 — HANDOFF

**Build:** 003 — Global Shell, Navigation & Site Chrome  
**Date:** 2026-09-26  
**Status:** COMPLETE (PATCH 001 applied)

---

## ACCEPTANCE CRITERIA VERIFICATION

### Skip Link

- [x] Skip link renders as `<a>` with `href="#main-content"`
- [x] Hidden by default, visible on keyboard focus
- [x] Uses CSS class `.skip-link`, no inline styles
- [x] Main content has matching `id="main-content"` and `tabIndex={-1}`

### Brand Mark

- [x] Typographic logotype "123.design" using Inter Tight 700
- [x] Links to `/` via Next.js `Link`
- [x] Uses CSS class `.brand-mark`, no inline styles

### Desktop Header

- [x] 80px height, sticky positioning, z-sticky (100)
- [x] Canvas background with ink text
- [x] Scrolled state at 24px threshold (border-bottom + shadow)
- [x] Overlay-ready via `data-header-overlay` attribute
- [x] Container-constrained inner layout

### Desktop Primary Navigation

- [x] 6 items in correct order: Work, Capabilities, Process, Industries, About, Insights
- [x] Visible at ≥1024px, hidden below
- [x] "Start a Project" CTA button linking to /start-project
- [x] Active route detection via `usePathname()` with prefix matching
- [x] Active indicator: accent color underline via `data-active`

### Capabilities Mega Menu

- [x] 10 links in 4 groups: Design(3), Engineering(3), Build(3), Manage(1)
- [x] Opens on hover with 150ms delay
- [x] Opens on keyboard Enter/Space
- [x] Closes on Escape key
- [x] Closes on outside click (pointerdown)
- [x] 180ms close delay prevents flicker
- [x] z-dropdown (200) layering

### Industries Dropdown

- [x] 6 links: Consumer Products, Medical, Defense & Security, Electronics, Industrial, Emerging Technology
- [x] Same hover/keyboard/escape behavior as mega menu
- [x] Same timer pattern (150ms open, 180ms close)

### Mobile Menu Trigger

- [x] Visible at <1024px, hidden at ≥1024px
- [x] Hamburger icon (3 lines)
- [x] Accessible button with aria-label

### Mobile Navigation (Dialog)

- [x] Native `<dialog>` element with `showModal()`
- [x] Full-height overlay
- [x] All 6 primary navigation links
- [x] "Start a Project" CTA
- [x] Close button in header
- [x] Backdrop click closes dialog
- [x] Escape key closes dialog (native cancel event)
- [x] Body scroll lock when open
- [x] Focus return to trigger on close
- [x] Auto-close on navigation (pathname change)

### Footer

- [x] Dark surface (dark-canvas background)
- [x] 5 link groups: Work(1), Capabilities(7), Company(4), Contact(2), Legal(3)
- [x] Brand name "123.design" in footer
- [x] Brand tagline: "From Idea to Production"
- [x] Dynamic copyright year
- [x] Responsive grid layout
- [x] No inline styles

### Navigation Configuration

- [x] Centralized in `src/lib/navigation/`
- [x] Fully typed (NavItem, NavGroup, FooterGroup)
- [x] All data exports verified by unit tests
- [x] Shared `isInternalLink` helper used by Button and TextLink

### Keyboard Accessibility

- [x] Tab navigation through all interactive elements
- [x] Enter/Space toggle mega menu and dropdown
- [x] Escape closes open panels
- [x] Focus management: return to trigger on dialog close
- [x] Native `<dialog>` focus containment

### Responsive Behavior

- [x] Mobile (<1024px): mobile trigger visible, desktop nav hidden
- [x] Desktop (≥1024px): desktop nav visible, mobile trigger hidden
- [x] Mobile header height: 64px; Desktop header height: 80px
- [x] No horizontal overflow at any viewport
- [x] Touch-friendly tap targets on mobile

### Constraints Compliance

- [x] Zero new runtime dependencies
- [x] CSS classes + data attributes only (zero inline styles)
- [x] Only 3 client components (DesktopNavigation, MobileNavigation, HeaderScrollState)
- [x] All other shell components are Server Components
- [x] Native `<dialog>` for mobile menu (no custom modal)

### Testing

- [x] Unit tests: 3 files (navigation with exact canonical values, shell-css patterns, shell components)
- [x] E2E tests: multi-viewport (1280x800, 1024x768, 768x1024, 390x844, 360x800)
- [x] Navigation config fully tested (exact labels, routes, negative tests)
- [x] Shell CSS tested (accent color, fixed overlay, 1024px breakpoint, 64px mobile header)
- [x] Shell components tested (SkipLink, BrandMark, SiteFooter with canonical tagline)
- [x] E2E: skip link, header, brand mark, footer, desktop nav, mobile nav, contamination checks
- [x] All tests pass

### Quality Gates

- [x] format:check — Prettier clean
- [x] lint — ESLint no errors or warnings
- [x] typecheck — TypeScript strict mode, no errors
- [x] test — unit tests pass (navigation, shell-css, shell, tokens, design-system, env)
- [x] build — Next.js 16.3.6 compiles successfully
- [x] test:e2e — E2E tests pass across all viewports

---

## QUALITY GATE RESULTS

Quality gates re-run after PATCH 001 — see PATCH 001 acceptance report.

---

## DEFERRED WORK

### BUILD 004 — Sanity Foundation

- Sanity client configuration
- Sanity Studio setup
- CMS schemas for navigation, pages, work, capabilities, industries
- GROQ queries
- Preview mode

### BUILD 005 — Homepage Data Layer

- Homepage CMS schema
- Hero section data structure
- Section data structures
- Data fetching layer

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

### React 19 Compiler Lint Rules

The React 19 compiler plugin enforces strict rules that differ from standard React hooks rules:

1. **No setState in effects** (`react-hooks/set-state-in-effect`): The pathname-change effect that closed panels on navigation was removed because it violated this rule. Panel closure is handled by existing interaction handlers (pointerdown outside, Escape key).

2. **No ref access during render** (`react-hooks/refs`): Attempted to track previous pathname using a ref during render, but this also violated compiler rules. The simpler solution was to remove the effect entirely.

### Native Dialog Browser Support

The `<dialog>` element is supported in all modern browsers (Chrome 37+, Firefox 98+, Safari 15.4+). For older browsers, a polyfill would be needed, but this is not a concern for the 123.design target audience.

### Hover Timer Values

The 150ms open delay and 180ms close delay are based on common UX patterns for navigation menus. The slightly longer close delay prevents the menu from closing when the cursor moves from the trigger to the panel (a common user behavior).

### Overlay Mode

The header overlay architecture is implemented but not yet used. The `SiteHeader` component accepts `overlay` and `overlayTheme` props, and CSS handles the visual switching via `data-header-overlay` and `data-header-overlay-theme` attributes. BUILD 006 (Homepage) will use this for the transparent-over-hero effect.

### Active Route Detection

Active route detection uses `usePathname()` with prefix matching. For example, `/capabilities` is active when the pathname starts with `/capabilities`. This works for nested routes like `/capabilities/design`. The root `/` is matched exactly (not as a prefix) to avoid marking all routes as active.

---

**BUILD 003 handoff complete. PATCH 001 applied. All IA corrections verified. Ready for BUILD 004.**
