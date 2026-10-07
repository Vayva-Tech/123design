# 06O — Testing & QA Architecture

> Phase 3 — Section 06O
> Status: LOCKED

---

## 105 — Testing Strategy

The testing strategy uses six categories, applied in layers from fast/cheap to slow/expensive. Each layer has a distinct purpose; no single layer is sufficient on its own.

### Test Categories

| Category              | Purpose                                                           | Speed        | When to Run           |
| --------------------- | ----------------------------------------------------------------- | ------------ | --------------------- |
| **Unit**              | Verify isolated logic (mappers, validators, parsers)              | Fast (ms)    | Every save / CI       |
| **Component**         | Verify component rendering and user interactions                  | Fast (ms–s)  | Every save / CI       |
| **Integration**       | Verify module boundaries (data layer + CMS, form + server action) | Medium (s)   | CI, pre-merge         |
| **E2E**               | Verify critical user journeys in a real browser                   | Slow (s–min) | Pre-merge, pre-deploy |
| **Accessibility**     | Automated a11y checks + manual verification                       | Medium       | CI + manual QA        |
| **Visual Regression** | Detect unintended visual changes                                  | Medium       | Later, where useful   |

### Principles

- Tests verify behavior, not implementation details.
- Test names describe the behavior being tested, not the function being called.
- No test should pass by accident — every assertion must discriminate correct from incorrect behavior.
- Do not mock away real defects to make tests pass.
- Do not disable or weaken tests to achieve coverage numbers.
- Financial/PII data must never appear in test fixtures or logs.

### Build/Type/Lint Checks

These run before any test and gate all deployments:

- TypeScript strict compilation (no errors).
- ESLint (project rules + accessibility plugin).
- Prettier format check.
- Build succeeds without warnings that indicate broken imports or dead code.

---

## 106 — Unit Test Targets

Unit tests cover pure logic with no DOM or network dependencies. High-value targets:

| Target                         | What to Verify                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Domain mappers**             | CMS response → domain model transformation correctness, missing field handling, enum mapping                 |
| **Validation schemas**         | Zod schema acceptance/rejection, error message correctness, edge cases (empty strings, max lengths, unicode) |
| **SEO metadata functions**     | Title generation, description truncation, fallback chains, structured data output shape                      |
| **Redirect validation**        | Source/target path validation, loop detection, wildcard matching, status code assignment                     |
| **Filter URL parsing**         | Query string → filter state, invalid value handling, empty/missing params, round-trip consistency            |
| **Analytics event validation** | Event name correctness, payload shape, PII exclusion, required field enforcement                             |
| **Form payload normalization** | Whitespace trimming, phone number normalization, file size calculation, step data merging                    |

### Unit Test Rules

- One behavior per test.
- Arrange-Act-Assert structure.
- No shared mutable state between tests.
- Test both valid and invalid inputs.
- Boundary values explicitly tested.

---

## 107 — Component Test Targets

Component tests verify rendering and user interaction without requiring a full browser or CMS connection.

| Component/Interaction   | What to Verify                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Mobile menu**         | Open/close toggle, focus trap, escape key dismissal, body scroll lock, aria attributes                     |
| **Mega menu**           | Expand/collapse, keyboard navigation between items, focus management on close                              |
| **Filter controls**     | Selection updates URL, URL updates selection, clear all, disabled state when no results                    |
| **Project hover video** | Play on hover/focus, pause on leave/blur, poster shown before interaction, reduced motion static fallback  |
| **Accordion**           | Expand/collapse, single vs multi mode, keyboard operation (Enter/Space), aria-expanded state               |
| **Modal**               | Open/close, focus trap, escape dismissal, backdrop click, return focus to trigger                          |
| **Bottom sheet**        | Open/close, swipe-to-dismiss (mobile), focus management, scroll behavior behind sheet                      |
| **Lead form steps**     | Step advancement, step regression, field persistence across steps, final submission payload assembly       |
| **Validation states**   | Error display on blur, error display on submit, error clearing on correction, blocking submit when invalid |
| **Reduced motion**      | Animations disabled/simplified, video posters shown instead of autoplay, transitions instant               |

### Component Test Rules

- Query by role or accessible name, not by class or test-id (prefer user-facing selectors).
- Verify visible behavior, not internal state.
- Test keyboard interaction, not just mouse clicks.
- Verify aria attributes change correctly during interaction.

---

## 108 — E2E Critical Paths

End-to-end tests run in a real browser against a staging-like environment with real CMS data (development dataset). They verify complete user journeys.

### Required Paths

| #   | Path                                                  | Key Assertions                                                                                                              |
| --- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Homepage → Work → Project**                         | Homepage loads, work link navigable, project list renders, project detail opens with correct content                        |
| 2   | **Homepage → Capability**                             | Homepage loads, capability link navigable, capability detail renders with lifecycle stages                                  |
| 3   | **Work filter + URL state**                           | Filter selection updates URL, URL change updates filter, back/forward navigation works, shareable URL produces same results |
| 4   | **Start Project complete submission**                 | All steps completed, file attached, form submits, success state shown, lead created in system                               |
| 5   | **Start Project validation error path**               | Required fields empty → submit → errors shown, invalid email → error shown, cannot advance past blocking errors             |
| 6   | **Mobile navigation**                                 | Menu opens, all nav items reachable, submenu works, menu closes on navigation, focus returns correctly                      |
| 7   | **404**                                               | Invalid URL → 404 page renders, 404 page has navigation back to home, correct HTTP status code                              |
| 8   | **Legacy redirect**                                   | Old URL → redirects to new URL, redirect chain resolves without loops, correct HTTP status (301/308)                        |
| 9   | **Draft/client-review project inaccessible publicly** | Draft project URL → 404 or redirect, client-review project URL → 404 or redirect, only PUBLISHED projects accessible        |

### E2E Rules

- Tests run against a deterministic dataset (development CMS dataset or seeded test data).
- Tests do not depend on external services being available (mock webhook endpoints if needed).
- Each test is independent — no shared state between tests.
- Tests verify both the happy path and at least one error/edge path per critical flow.
- Flaky tests are fixed or removed — flaky tests are worse than no tests.

---

## 109 — Accessibility Automation

Automated accessibility checks catch approximately 30–40% of accessibility issues. They are necessary but not sufficient.

### Automated Checks

- **axe-core** (or compatible): Run against every page template and key interaction states.
- Integrate into CI pipeline — block merge on critical/serious violations.
- Run in component tests on interactive components (modal open, menu expanded, form error state).

### Manual QA (Required, Not Replaced by Automation)

| Check                        | Method                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Keyboard navigation**      | Tab through every page — all interactive elements reachable, focus order logical, focus visible                    |
| **Focus management**         | Modal/menu traps focus correctly, focus returns to trigger on close, no focus lost during dynamic updates          |
| **Screen reader smoke test** | Navigate key pages with VoiceOver/NVDA — headings announce, images have meaningful alt, form errors announced      |
| **Color contrast**           | Verify all text meets WCAG AA (4.5:1 normal, 3:1 large). Check focus indicators, placeholder text, disabled states |
| **Zoom 200%**                | Page remains usable, no horizontal scroll, no overlapping text, no clipped content                                 |
| **Reduced motion**           | Enable prefers-reduced-motion — animations stop/simplify, video posters replace autoplay, no layout shift          |

### Accessibility Rules

- Automation does not replace manual accessibility QA.
- Both are required before any page is considered complete.
- Accessibility regressions caught in CI block merge immediately.
- Manual QA results documented per page template.

---

## 110 — Performance Testing

### Core Web Vitals Targets

| Metric                              | Target  | Measurement                      |
| ----------------------------------- | ------- | -------------------------------- |
| **LCP** (Largest Contentful Paint)  | < 2.5s  | Lighthouse, real-user monitoring |
| **CLS** (Cumulative Layout Shift)   | < 0.1   | Lighthouse, real-user monitoring |
| **INP** (Interaction to Next Paint) | < 200ms | Real-user monitoring             |

### Performance Verification

- **Lighthouse CI**: Run against key page templates (homepage, work index, project detail, capability detail) in CI.
- **Web Vitals monitoring**: Track Core Web Vitals in production via real-user metrics after launch.
- **Bundle analysis**: Track JavaScript bundle size in CI — alert on significant increases.
- **Image/video audit**: Verify responsive images served correctly, video encoding matches target specs.

### Important

- These targets are architectural goals, not guarantees. Actual scores depend on content, media, network conditions, and device capabilities.
- Do not claim specific scores before implementation and measurement.
- Performance is verified with evidence (Lighthouse reports, real-user data), not assumed from architecture alone.

---

## 111 — Performance Architecture

Performance is designed in, not bolted on. These rules apply throughout implementation.

### Rendering

- **Server-render core content.** All above-the-fold content rendered on the server. No client-side rendering for primary content.
- **Minimal JS.** Only ship JavaScript that provides interactivity. No framework JS for static content.
- **Lazy below-fold media.** Images and videos below the fold use `loading="lazy"`. Above-fold media loads eagerly.

### Media

- **Responsive images.** Use `srcset` and `sizes` for all content images. Serve WebP/AVIF where supported.
- **Poster-first video.** Video elements show a poster image by default. Grid videos do not autoplay.
- **Limited hero reel.** Hero reel is the single most media-heavy component — optimize aggressively (preload strategy, lazy subsequent slides, poster fallbacks).
- **Explicit aspect ratios.** All media elements have explicit width/height or aspect-ratio to prevent layout shift.
- **Reserve dimensions.** Advertise space for dynamic content (images, videos, embeds) to prevent CLS.

### Layout Stability

- **Avoid layout shifts.** Reserve space for all dynamic content. No injecting content above existing content.
- **Font display strategy.** Use `font-display: swap` or equivalent to prevent FOIT. Preload critical fonts.
- **Stable navigation.** Navigation height is fixed — no shift when menu state changes.

### What This Means for Implementation

- Every `<img>` has `width`, `height`, and `alt`.
- Every `<video>` has `poster`, `width`, `height`, and `preload="none"` (or `"metadata"` where justified).
- No `position: absolute` layout hacks that shift content on load.
- No third-party scripts injected without async/defer and measured impact.

---

## 112 — Font Delivery

### Font Stack

- **Inter** — Body text, UI elements, general purpose.
- **Inter Tight** — Headings, display text, tighter spacing contexts.

### Delivery Strategy

- **Self-hosted, local optimized WOFF2** where licensing and source permit.
- Use the framework's optimized font loading strategy (e.g., `next/font` or equivalent) to:
  - Inline font CSS (no extra network request).
  - Subset fonts to required character sets.
  - Automatically handle `font-display` strategy.
  - Zero layout shift from font loading.

### Constraints

- **Do NOT retrieve fonts during Phase 3.** Font files are not downloaded or stored as part of this architecture phase.
- Future implementation should use the framework's built-in font optimization rather than manual `@font-face` declarations.
- Do not load fonts from external CDNs at runtime (adds external dependency, privacy concern, latency).

### Font Rules

- Only load weights actually used in the design (refer to 05C typography spec).
- Do not load the full Inter character set if a subset covers the content.
- Font files are cached aggressively (long cache lifetime, immutable).

---

## Test Categories Summary

| #   | Category              | Scope                                     | Tooling (Future)          | Gate Level                       |
| --- | --------------------- | ----------------------------------------- | ------------------------- | -------------------------------- |
| 1   | **Unit**              | Pure logic (mappers, validators, parsers) | Vitest / Jest             | CI — block on failure            |
| 2   | **Component**         | Rendering + interaction                   | Testing Library + Vitest  | CI — block on failure            |
| 3   | **Integration**       | Module boundaries                         | Testing Library + MSW     | CI — block on failure            |
| 4   | **E2E**               | Critical user journeys                    | Playwright                | Pre-merge, pre-deploy            |
| 5   | **Accessibility**     | Automated + manual a11y                   | axe-core + manual QA      | CI (automated) + manual sign-off |
| 6   | **Visual Regression** | Unintended visual changes                 | Chromatic / Percy (later) | Optional, where useful           |

---

## Document Status

**PHASE 3 — SECTION 06O: LOCKED**

This document defines the testing and QA architecture for 123.design. No tests are created by this document — it specifies what to test, where, and how. Test implementation occurs during the build sequence (06Q).
