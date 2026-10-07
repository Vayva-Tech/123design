# 06N — Accessibility Technical Architecture

> PHASE 3 — SECTION 06N: LOCKED

---

## 100. Accessibility Architecture

### Reusable Utilities & Patterns

The following utilities and patterns are implemented as shared, reusable components. They are not re-implemented per page.

#### SkipLink

- First focusable element on every page.
- Visually hidden until focused (keyboard Tab).
- Jumps focus to the `<main>` content area.
- Text: "Skip to main content".
- Styled per Phase 2 focus ring specification when visible.

#### VisuallyHidden

- Visually hidden but accessible to screen readers.
- Uses the standard clip-rect technique (`position: absolute; width: 1px; height: 1px; clip: rect(0, 0, 0, 0); overflow: hidden`).
- Used for: skip link text, icon button labels, supplementary context for screen readers.

#### Focus Management

- Visible focus ring on all interactive elements per Phase 2 specification.
- Focus ring: minimum 2px offset, sufficient contrast against both light and dark backgrounds.
- Focus styles applied via `:focus-visible` — not `:focus` — to avoid showing focus rings on mouse click.
- Tab order follows visual order. No `tabIndex` values greater than 0.

#### Modal Focus Trap

- When a modal opens, focus moves to the first focusable element inside the modal (or the modal itself if it has `role="dialog"`).
- Tab and Shift+Tab cycle focus within the modal — focus does not escape to background content.
- Escape key closes the modal.
- On close, focus returns to the element that triggered the modal.
- Background content has `inert` attribute (or `aria-hidden="true"` + pointer-events disabled) while modal is open.

#### Menu Keyboard Navigation

- Arrow keys (Up/Down) move focus between menu items.
- Escape closes the menu and returns focus to the trigger.
- Home key moves focus to the first menu item.
- End key moves focus to the last menu item.
- Enter or Space activates the focused menu item.
- Menu items have `role="menuitem"` within a container with `role="menu"` (or appropriate ARIA role for the pattern).

#### Error Summary

- After a failed form submission, an error summary list appears at the top of the form.
- Each error links to the corresponding invalid field.
- Focus moves to the error summary (or the first invalid field) after failed submission.
- Error summary has `role="alert"` or is announced via a live region.

#### Field Descriptions

- Help text and field descriptions associated via `aria-describedby`.
- The describedby relationship points to the description element's `id`.
- Description text is visible (not hidden) unless it is supplementary screen-reader-only context.

#### Live Regions

- Dynamic content updates announced via `aria-live`.
- Form submission status (submitting, success, error) announced via live region.
- Filter result counts announced when filter changes.
- Use `aria-live="polite"` for non-urgent updates, `aria-live="assertive"` for critical status changes.

#### Reduced Motion

- Respect `prefers-reduced-motion: reduce` media query.
- When reduced motion is preferred:
  - No animated reveals or transitions.
  - Video autoplay disabled — show poster image only, user initiates playback.
  - Scroll-based animations replaced with static presentation.
  - Page transitions are instant (no animation).

#### Semantic Landmarks

- Proper use of HTML5 landmark elements: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`.
- Each landmark has an accessible label when there are multiple instances of the same landmark type (e.g., `aria-label="Primary navigation"` vs `aria-label="Footer navigation"`).
- No content outside of landmarks (every visible content belongs to a landmark).

#### Heading Hierarchy

- One `<h1>` per page.
- No skipped heading levels (e.g., no `<h2>` directly after `<h1>` then `<h4>` without `<h3>`).
- Heading levels reflect content structure, not visual sizing.
- Visual appearance controlled by CSS classes, not by choosing a different heading level.

---

## 101. Heading Architecture

### Rules

1. Every page has exactly one semantic `<h1>`.
2. Components MUST NOT hard-code inappropriate heading levels. A section component used on the homepage (below the `<h1>`) and on a subpage (also below its own `<h1>`) must receive or derive the correct heading level for its context.
3. Section components accept a `headingLevel` prop (or derive it from context) to render the semantically correct heading element (`<h2>`, `<h3>`, etc.).
4. Typography appearance (font size, weight) is separate from semantic HTML heading level. An `<h3>` can look like an `<h2>` visually if the design calls for it — the semantic level reflects document structure, not appearance.

### Implementation

```
<SectionHeading level={3} className="text-2xl font-bold">
  Section Title
</SectionHeading>
```

Renders `<h3>` with the specified visual styling. The component does not assume its level from visual design tokens.

---

## 102. Interactive Card Accessibility

### No Nested Interactive Elements

HTML does not permit interactive elements nested inside other interactive elements. Specifically:

- No `<button>` inside `<a>`.
- No `<a>` inside `<a>`.
- No `<button>` inside `<button>`.

### Project Card Pattern

Project cards are navigation targets. Each card has ONE primary navigation action (navigating to the project detail page). The card pattern:

- The entire card is a single link (`<a>`) or has a single click handler.
- The card's accessible name is the project title.
- If secondary controls exist (e.g., video preview play button), they are positioned OUTSIDE the card link in the DOM, or the card is restructured so that:
  - The card container is a `<div>` (not interactive).
  - The project title is a link.
  - The video play button is a separate button.
  - All interactive elements are siblings, not nested.

### Validation

- Automated accessibility tests check for nested interactive elements.
- Manual keyboard testing verifies each interactive element is independently reachable and activatable.

---

## 103. Media Accessibility

### Images

| Type       | Alt Text                                       | Example                                                          |
| ---------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| Decorative | Empty `alt=""`                                 | Background patterns, spacer images, purely visual embellishments |
| Meaningful | Descriptive alt text conveying the information | Project screenshots, team photos, capability illustrations       |
| Functional | Describes the action/destination               | Logo linking to homepage, icon buttons                           |

### Background Video (Autoplay Reel)

- No essential information exists ONLY in the video. All information conveyed by the video is also available as text or static imagery elsewhere on the page.
- Autoplay video has no audio track (or is muted by default).
- Reduced-motion users see a static poster image instead of autoplay video.

### Project Videos

- Videos with speech or meaningful audio include captions.
- Transcript support: a text transcript is available for video content (linked adjacent to or below the video).
- Video player controls are keyboard accessible (play/pause, volume, fullscreen).

### Reduced Motion Fallback

- `prefers-reduced-motion: reduce` users receive a static poster image in place of autoplay video.
- A manual play button is shown for users who want to initiate video playback despite preferring reduced motion for other content.

---

## 104. Form Accessibility

### Field Structure

Every form field includes:

```
<div>
  <label htmlFor="field-id">Field Label</label>
  <p id="field-id-desc">Optional help text</p>
  <input
    id="field-id"
    aria-describedby="field-id-desc field-id-error"
    aria-invalid={hasError ? "true" : undefined}
  />
  {hasError && <p id="field-id-error" role="alert">Error message</p>}
</div>
```

- Each field has a visible `<label>` associated via `htmlFor`/`id`.
- Help text associated via `aria-describedby`.
- Error message associated via `aria-describedby` (appended to the describedby list when present).
- `aria-invalid="true"` set on the field when it has a validation error.
- `aria-invalid` is omitted (not set to `"false"`) when the field is valid — presence of the attribute signals invalidity.

### Error Handling

- **Inline errors**: Each invalid field shows an error message adjacent to the field.
- **Error summary**: After a failed submission, an error summary list appears at the top of the form (see Error Summary pattern in Section 100).
- **Focus behavior on invalid submit**: Focus moves to the error summary, or to the first invalid field if no summary is used.
- **Error messages are specific**: "Email is required" not "Please fill in all fields". The user knows exactly what to fix.

### Submission Status

- Submitting: button shows loading state, `aria-disabled="true"`, text changes to "Submitting...".
- Success: live region announces "Form submitted successfully".
- Error: live region announces the error, focus moves to error summary.

---

## Phase 2 Accessibility Rules (Locked Design System)

Thirteen rules from the locked design system. These are non-negotiable specifications.

| #   | Rule                        | Specification                                                                                                                                         |
| --- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Focus ring                  | Visible focus indicator on all interactive elements. Minimum 2px solid outline with 2px offset. Contrast per rules 2-4. Applied via `:focus-visible`. |
| 2   | Contrast — normal text      | Minimum 4.5:1 contrast ratio for normal text (below 18pt / 14pt bold).                                                                                |
| 3   | Contrast — large text       | Minimum 3:1 contrast ratio for large text (18pt+ / 14pt bold+).                                                                                       |
| 4   | Contrast — UI components    | Minimum 3:1 contrast ratio for UI component boundaries (borders, focus indicators, icons).                                                            |
| 5   | Touch target — minimum size | Minimum 44px by 44px touch target for all interactive elements.                                                                                       |
| 6   | Touch target — spacing      | Sufficient spacing between touch targets to prevent accidental activation. Minimum 8px between adjacent targets.                                      |
| 7   | Error not color-alone       | Errors communicated through text + icon + border, not color change alone. Color-blind users must be able to identify errors without color perception. |
| 8   | Keyboard tab order          | Tab order follows visual reading order. No unexpected tab stops. No `tabIndex > 0`.                                                                   |
| 9   | Keyboard focus visible      | Focus indicator always visible when navigating by keyboard. Never suppressed with `outline: none` without a replacement visible indicator.            |
| 10  | Keyboard — no traps         | No keyboard traps. Users can navigate to and away from all elements using keyboard alone. Modals trap focus intentionally and release it on close.    |
| 11  | Zoom 200%                   | Layout functional and content readable at 200% browser zoom. No horizontal scroll at 200% zoom on any page.                                           |
| 12  | Reduced motion              | All animations respect `prefers-reduced-motion: reduce`. No essential content conveyed only through animation.                                        |
| 13  | Body minimum font size      | Body text minimum 16px computed size. No body text below 16px regardless of design preference.                                                        |

---

## Document Status

**PHASE 3 — SECTION 06N: LOCKED**
