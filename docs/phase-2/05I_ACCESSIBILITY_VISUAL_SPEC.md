# 05I — Accessibility & Visual Specification

> Accessibility on 123.design is not a feature layer — it is a structural requirement. Every visual decision in this document set must satisfy WCAG 2.2 Level AA as a baseline. This specification defines the concrete visual rules that make that possible.

---

## 1. Scope & Standard

| Standard | Level | Applicability                                                                        |
| -------- | ----- | ------------------------------------------------------------------------------------ |
| WCAG 2.2 | AA    | All public-facing pages and interactive components                                   |
| WCAG 2.2 | AAA   | Target for critical text content where achievable without compromising design intent |

All requirements below are mandatory unless explicitly marked as advisory.

---

## 2. Color Contrast

### 2.1 Minimum Ratios

| Content Type                                            | Minimum Ratio | WCAG Criterion |
| ------------------------------------------------------- | ------------- | -------------- |
| Normal text (< 24px, or < 18.6px bold)                  | 4.5 : 1       | 1.4.3          |
| Large text (>= 24px, or >= 18.6px bold)                 | 3 : 1         | 1.4.3          |
| UI components (borders, icons, controls)                | 3 : 1         | 1.4.11         |
| Graphical objects (charts, diagrams, meaningful images) | 3 : 1         | 1.4.11         |

### 2.2 Token Combination Contrast Checklist

The following table evaluates key foreground/background token combinations against WCAG AA for normal text (4.5:1):

| Foreground                   | Background            | Contrast Ratio | AA Normal | AA Large | Notes                                                                                                                                    |
| ---------------------------- | --------------------- | -------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `ink` #11110F                | `canvas` #F4F1EA      | ~15.5:1        | PASS      | PASS     | Primary text on primary background. Excellent contrast                                                                                   |
| `ink-secondary` #4E504B      | `canvas` #F4F1EA      | ~6.8:1         | PASS      | PASS     | Secondary text fully compliant                                                                                                           |
| `ink-muted` #777970          | `canvas` #F4F1EA      | ~4.0:1         | FAIL      | PASS     | Fails for normal text. Must NOT be used for body copy or labels. Acceptable for large text (24px+) and decorative/placeholder text only  |
| `ink` #11110F                | `white` #FFFFFF       | ~17.4:1        | PASS      | PASS     | Input text on white background                                                                                                           |
| `ink-secondary` #4E504B      | `white` #FFFFFF       | ~8.5:1         | PASS      | PASS     | Labels and secondary text on white                                                                                                       |
| `ink-muted` #777970          | `white` #FFFFFF       | ~4.6:1         | PASS      | PASS     | Placeholder text passes at threshold. Acceptable for placeholder-only use                                                                |
| `accent` #F05A36             | `canvas` #F4F1EA      | ~3.6:1         | FAIL      | PASS     | **Do NOT use accent orange for small text on canvas.** Acceptable for large text (24px+) and graphical elements                          |
| `accent` #F05A36             | `white` #FFFFFF       | ~3.9:1         | FAIL      | PASS     | **Do NOT use accent orange for small text on white.** Acceptable for large text, buttons with white text on accent bg needs verification |
| `white` #F5F2EA              | `accent` #F05A36      | ~3.9:1         | FAIL      | PASS     | White text on accent background fails for normal text. Use only for large text or non-text elements                                      |
| `success` #287A53            | `canvas` #F4F1EA      | ~5.6:1         | PASS      | PASS     | Success messages compliant                                                                                                               |
| `error` #B9382D              | `canvas` #F4F1EA      | ~4.7:1         | PASS      | PASS     | Error messages compliant                                                                                                                 |
| `warning` #A66A19            | `canvas` #F4F1EA      | ~4.5:1         | PASS      | PASS     | Warning text at threshold — verify in production                                                                                         |
| `info` #386A8E               | `canvas` #F4F1EA      | ~5.2:1         | PASS      | PASS     | Info text compliant                                                                                                                      |
| `dark-ink` #F5F2EA           | `dark-canvas` #11110F | ~15.5:1        | PASS      | PASS     | Primary text on dark background                                                                                                          |
| `dark-ink-secondary` #B7B6AF | `dark-canvas` #11110F | ~8.2:1         | PASS      | PASS     | Secondary text on dark background                                                                                                        |
| `accent` #F05A36             | `dark-canvas` #11110F | ~3.8:1         | FAIL      | PASS     | **Do NOT use accent for small text on dark canvas.** Large text only                                                                     |

### 2.3 Critical Rules Derived from Contrast Data

1. **`ink-muted` (#777970) on `canvas` (#F4F1EA) FAILS AA for normal text.** Use only for: placeholder text (supplementary, disappears on input), large decorative text (24px+), or non-essential hints where `ink-secondary` is not needed.
2. **`accent` (#F05A36) FAILS AA for normal text on both canvas and white.** Never use signal orange as the text color for body copy, labels, links, or any text below 24px. Use it for: large headings (48px+), graphical indicators, selected state accents, buttons where white text sits on accent background (verify ratio), borders, and non-text UI elements.
3. **Always verify contrast in context.** Overlapping surfaces, gradients, and images can change effective contrast. Test with actual rendered output, not just token values.

### 2.4 Non-Color Indication

Color must never be the sole means of conveying information:

- **Error state**: Border color + icon + text message (see 05H)
- **Required fields**: Asterisk (*) in label + programmatic `aria-required`
- **Status indicators**: Icon/shape + text label, not color dot alone
- **Links in body text**: Underline or weight distinction, not color alone
- **Active navigation**: Weight change, underline, or position indicator — not color alone

---

## 3. Focus Indication

### 3.1 Focus Ring Specification

| Property                  | Value                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| Width                     | 2px (standard), 3px (for high-visibility contexts)                                         |
| Offset                    | 2–3px from element edge                                                                    |
| Color (light backgrounds) | `ink` (#11110F) inner ring, optional `canvas` (#F4F1EA) or white outer ring for separation |
| Color (dark backgrounds)  | `dark-ink` (#F5F2EA) inner ring, optional `dark-canvas` outer ring                         |
| Style                     | Solid outline (not dotted, not dashed)                                                     |

### 3.2 Focus Ring Rules

- **Never suppress native focus** without replacing it with a clearly superior custom treatment
- Focus ring must be visible on **all** interactive elements: links, buttons, inputs, selects, cards with click actions, tabs, accordion triggers, menu items
- Focus ring must have strong contrast against both the element and its surrounding background
- **Do NOT depend solely on `accent` (#F05A36) for focus visibility.** The focus ring uses `ink` or `dark-ink` as primary colors. Accent may appear as an outer ring for additional visibility but is not the focus indicator itself.
- Focus must move logically through the page following visual reading order

### 3.3 Focus on Different Surfaces

| Surface                          | Focus Treatment                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| Canvas (#F4F1EA) background      | `ink` (#11110F) ring, 2px, 2px offset                                                      |
| White (#FFFFFF) background       | `ink` (#11110F) ring, 2px, 2px offset                                                      |
| Dark canvas (#11110F) background | `dark-ink` (#F5F2EA) ring, 2px, 2px offset                                                 |
| Accent (#F05A36) background      | `ink` (#11110F) ring or white ring, 2–3px, 2px offset — whichever provides better contrast |
| Inside inputs                    | Focus ring outside the input border (offset from input edge)                               |

### 3.4 Skip Navigation

- A "Skip to main content" link must be the first focusable element on every page
- Visually hidden by default, visible on focus
- Positions focus at the start of main content, bypassing navigation
- Styled: visible on focus with focus ring, `ink` text on `canvas` background, adequate padding

---

## 4. Font Size Minimums

### 4.1 Absolute Minimums

| Context    | Minimum Size | Notes                                                                          |
| ---------- | ------------ | ------------------------------------------------------------------------------ |
| Body text  | 16px         | No exceptions. All readable paragraph text, descriptions, form labels          |
| UI labels  | 14px         | Navigation items, button text, card labels, form field labels                  |
| Micro text | 12px         | Only where appropriate: copyright, legal disclaimers, image captions, metadata |
| Below 12px | Forbidden    | No text below 12px anywhere on the site                                        |

### 4.2 Rules

- **No body copy below 16px, ever.** This includes descriptions, paragraphs, list items, form helper text, and any text the user is expected to read for comprehension.
- Section headings at 11px uppercase (per design system) are acceptable as category labels/group headers, not as readable body text. These must be short (1–4 words) and function as structural markers, not content.
- When in doubt about whether text qualifies as "body," treat it as body and use 16px minimum.

### 4.3 Responsive Type

- Font sizes scale with the type system (see 05C)
- Mobile sizes must not drop below the minimums above
- A 16px body on desktop remains at least 16px on mobile — do not shrink text to fit more content on small screens

---

## 5. Motion & Reduced Motion

### 5.1 prefers-reduced-motion

When the user has requested reduced motion via system preferences (`prefers-reduced-motion: reduce`):

| Element                                         | Behavior with Reduced Motion                                    |
| ----------------------------------------------- | --------------------------------------------------------------- |
| Scroll reveals (fade-in, slide-up on scroll)    | **Disabled.** Content appears immediately in its final position |
| Parallax scrolling                              | **Disabled.** Layers remain static                              |
| Hover autoplay (video previews, animated cards) | **Disabled.** Show static poster image                          |
| Page transitions                                | **Instant.** No crossfade or slide                              |
| Menu open/close                                 | **Instant** or minimal (< 100ms) opacity change                 |
| Scroll-triggered animations                     | **Disabled.** Content visible without scroll interaction        |
| Loading spinners                                | Retained but simplified — rotation is essential state feedback  |
| Focus ring appearance                           | Retained — essential state feedback                             |
| Error state appearance                          | Retained — essential state feedback                             |
| Success confirmation                            | Retained but simplified — no bouncing or pulsing                |

### 5.2 Principle

> Preserve essential state feedback. Remove decorative motion.

The user who requests reduced motion still needs to understand: what is focused, what is in error, what succeeded, what is loading. These states remain visible. Only the animation that delivers them changes.

### 5.3 Default Motion (No Preference)

When reduced motion is not requested, the motion system (05F) applies. All motion must still be:

- Purposeful (communicates state change or spatial relationship)
- Brief (100–300ms for UI transitions, up to 500ms for page-level)
- Non-distracting (no infinite loops, no attention-grabbing without user initiation)

---

## 6. Interactive States

Every interactive element must have visible, clearly distinguishable states:

### 6.1 State Matrix

| State                | Visual Treatment                                                                             | Required                      |
| -------------------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| **Default**          | Baseline appearance per component spec (05E)                                                 | Yes                           |
| **Hover**            | Subtle surface change: background tint, border darkening, underline appearance               | Yes (pointer devices)         |
| **Focus**            | Focus ring per Section 3 above                                                               | Yes                           |
| **Active** (pressed) | Slight background darkening, scale reduction (1–2%), or border emphasis                      | Yes                           |
| **Disabled**         | Reduced opacity (~40–50%), `ink-muted` text, `not-allowed` cursor, no hover/focus activation | Yes                           |
| **Loading**          | Spinner or progress indicator, element non-interactive, text may read "Submitting..."        | Yes (for async actions)       |
| **Selected**         | Strong border, background fill, or check indicator — clearly distinct from default           | Yes (for toggleable elements) |

### 6.2 Distinguishability Test

If you remove color from the interface (view in grayscale), can you still distinguish:

- A focused element from an unfocused one?
- A selected element from a default one?
- A disabled element from an enabled one?
- An error state from a normal state?

If the answer is no to any of these, the design fails. Add shape, weight, border, or opacity differentiation.

---

## 7. Labels & Naming

### 7.1 Form Labels

- Every form input has a **visible, persistent label** (not placeholder-only)
- Label is programmatically associated with its input (`for`/`id` pairing or `aria-labelledby`)
- Label text is specific: "Email Address" not "Email" where ambiguity exists, "Full Name" not "Name"

### 7.2 Interactive Element Names

Every interactive element must have an accessible name:

| Element              | Accessible Name Source                                                                 |
| -------------------- | -------------------------------------------------------------------------------------- |
| Buttons              | Button text content                                                                    |
| Icon buttons         | `aria-label` (e.g., "Open menu", "Close", "Search")                                    |
| Links                | Link text content (avoid "Click here")                                                 |
| Images (interactive) | `alt` text describing the action                                                       |
| Form inputs          | Associated `<label>` element                                                           |
| Regions/sections     | `aria-label` or `aria-labelledby` for landmark regions                                 |
| Navigation           | `aria-label` distinguishing nav regions (e.g., "Main navigation", "Footer navigation") |

### 7.3 Image Alt Text

| Image Type                       | Alt Treatment                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------- |
| Meaningful content               | Descriptive alt text conveying the information or function                      |
| Decorative                       | Empty `alt=""` — removed from accessibility tree                                |
| Functional (acts as button/link) | Alt text describes the action ("View project details")                          |
| Text in image                    | Alt text contains the text (avoid text-in-image where possible)                 |
| Complex (diagram, chart)         | Alt text for summary + long description via adjacent text or `aria-describedby` |

---

## 8. Touch & Click Target Sizes

### 8.1 Minimum Targets

| Element                  | Minimum Size            | Notes                                                      |
| ------------------------ | ----------------------- | ---------------------------------------------------------- |
| All interactive elements | 44px × 44px             | WCAG 2.2 Target Size (Minimum)                             |
| Buttons                  | 44px height minimum     | Width determined by content + padding                      |
| Icon buttons             | 44px × 44px             | Icon may be smaller visually, but tap area is 44px minimum |
| Links in text            | Adequate spacing        | Line height and paragraph spacing must allow accurate tap  |
| Table rows (interactive) | 44px row height minimum |                                                            |
| Dropdown options         | 44px height per option  |                                                            |
| Checkbox/radio controls  | 44px tap target         | Visual control may be 20px, but tap area extends           |
| Choice cards             | Full card is tappable   | Not just the radio/check indicator                         |

### 8.2 Spacing Between Targets

- Adjacent touch targets: minimum 8px gap (prefer 12px+)
- Inline links: adequate line height (1.5+) to prevent accidental taps on adjacent lines
- Button groups: clear visual and physical separation

---

## 9. Media Accessibility

### 9.1 Video

| Requirement    | Details                                                                         |
| -------------- | ------------------------------------------------------------------------------- |
| Captions       | Required for all video with speech. Closed captions preferred                   |
| Transcript     | Required for audio-only content. Available adjacent to or linked from the media |
| Autoplay       | Muted by default. No autoplaying video with sound                               |
| Controls       | Visible play/pause, volume, fullscreen. Keyboard accessible                     |
| Reduced motion | Video with autoplay/scroll behavior respects `prefers-reduced-motion`           |

### 9.2 Images

- Meaningful images: descriptive `alt` text
- Decorative images: `alt=""`
- Images conveying data: description in adjacent text
- Do not rely on color alone in images to convey information

### 9.3 Animation & Canvas

- If the site uses animated canvas or WebGL effects, provide a pause/stop mechanism
- Static poster image available as fallback
- Respect `prefers-reduced-motion`

---

## 10. Modal & Dialog Accessibility

### 10.1 Focus Management

- **Focus trap**: When a modal opens, focus moves to the first focusable element within the modal. Tab/Shift+Tab cycles within the modal only — focus cannot escape to background content.
- **On close**: Focus returns to the element that triggered the modal opening
- **On open**: Screen readers announce the modal title/purpose

### 10.2 Dismissal

- **Escape key**: Closes the modal
- **Close button**: Visible, labeled ("Close" or icon with `aria-label`), first or last focusable element
- **Backdrop click**: Closes the modal (for non-destructive modals)
- **Destructive modals**: Require explicit confirmation, do not close on backdrop click

### 10.3 Naming

- Modal must have an accessible name: `aria-labelledby` pointing to the modal title, or `aria-label` if no visible title
- Modal role: `dialog` (general) or `alertdialog` (requires immediate response)

### 10.4 Scroll Lock

- When modal is open, background page scroll is locked (`overflow: hidden` on body)
- Modal content scrolls independently if it exceeds viewport height
- Mobile: address bar behavior should not cause layout shift

---

## 11. Keyboard Accessibility

### 11.1 Requirements

| Requirement                                  | Details                                                         |
| -------------------------------------------- | --------------------------------------------------------------- |
| All interactive elements keyboard accessible | No mouse-only interactions                                      |
| Logical tab order                            | Follows visual reading order (top-to-bottom, left-to-right)     |
| No keyboard traps                            | Focus can always escape any region (except modal focus trap)    |
| Skip navigation                              | First focusable element on page                                 |
| Custom widgets                               | Implement expected keyboard patterns (ARIA Authoring Practices) |
| Focus visible                                | Focus ring always visible for keyboard users                    |

### 11.2 Custom Component Keyboard Patterns

| Component       | Expected Keyboard Behavior                                                                 |
| --------------- | ------------------------------------------------------------------------------------------ |
| Accordion       | Enter/Space: toggle. Arrow keys: move between headers                                      |
| Tabs            | Arrow keys: move between tabs. Home/End: first/last tab. Tab: move to active panel content |
| Dropdown/Select | Enter/Space: open. Arrows: navigate options. Enter: select. Escape: close                  |
| Menu            | Arrows: navigate items. Enter: activate. Escape: close menu                                |
| Modal           | Tab/Shift+Tab: cycle within modal. Escape: close                                           |
| Carousel        | Arrows: navigate slides. Tab: move to slide content or next control                        |

---

## 12. Zoom & Reflow

### 12.1 Zoom Requirements

| Requirement                  | Standard                                       |
| ---------------------------- | ---------------------------------------------- |
| Functional at 200% zoom      | WCAG 1.4.4                                     |
| No horizontal scroll at 200% | Content reflows within viewport                |
| No loss of functionality     | All features remain accessible                 |
| No overlapping content       | Text and controls remain readable and tappable |

### 12.2 Reflow Behavior

- Content reflows into single column at narrow viewports (inherent in responsive design, 05J)
- Navigation collapses to mobile pattern
- Multi-column layouts stack
- Tables: horizontal scroll where unavoidable (see 05J), but primary content must not require horizontal scroll
- Images scale proportionally, do not overflow container

---

## 13. High Contrast Considerations

### 13.1 Windows High Contrast Mode (WHCM)

- Do not use background images as the sole means of conveying information
- Focus indicators must remain visible in high contrast modes — use `forced-colors` media query to ensure system focus ring is not suppressed
- Borders and text must maintain sufficient contrast — avoid relying on subtle color differences that WHCM may flatten
- Do not set text color to `transparent` for visual effects (breaks in WHCM)

### 13.2 General High Contrast

- Borders on inputs, cards, and controls: ensure at least 3:1 against adjacent surfaces
- Focus ring: must be visible regardless of background
- Do not use thin, low-contrast borders as the sole separator between important content areas

---

## 14. Accessibility Verification Checklist

Before any page or component is considered complete, verify:

- [ ] All text meets 4.5:1 contrast ratio (normal) or 3:1 (large)
- [ ] All UI components and graphical objects meet 3:1 contrast
- [ ] Focus ring visible on every interactive element
- [ ] No information conveyed by color alone
- [ ] All form inputs have visible labels
- [ ] All images have appropriate alt text
- [ ] All touch targets are 44px minimum
- [ ] Keyboard can reach every interactive element
- [ ] Skip navigation link present and functional
- [ ] Modal traps focus and returns it on close
- [ ] `prefers-reduced-motion` disables decorative animation
- [ ] Site functions at 200% zoom without horizontal scroll
- [ ] Error states use icon + message + border (not color alone)
- [ ] Video has captions where speech exists
- [ ] Autoplay media is muted
- [ ] Body text is never below 16px
- [ ] Accent orange (#F05A36) is NOT used for small text on canvas/white

---

_This document defines the accessibility and visual specification for 123.design. All implementations must comply. Accessibility is not negotiable._
