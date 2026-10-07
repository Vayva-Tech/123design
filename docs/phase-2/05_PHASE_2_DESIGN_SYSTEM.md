# 05 — Phase 2 Design System (Master Summary)

> Complete visual design system for the 123.design website rebuild. This document is the master index. Each subsystem is defined in detail in its companion document (05A through 05O). This summary provides the authoritative reference for every token, rule, and constraint.

---

## 1. Visual Identity

123.design is a product development and manufacturing studio. The visual language must communicate precision, technical depth, and industrial capability — not generic agency polish.

**Brand Character:**

TECHNICAL, PREMIUM, WARM, CONFIDENT, INDUSTRIAL, HUMAN, MODERN, PRODUCTION-MINDED

**Foundation:**

- Warm neutral base. Not cool gray. Not pure white backgrounds everywhere. The canvas is warm (#F4F1EA), creating an editorial, print-quality atmosphere.
- Near-black typography (#11110F) for strong contrast and readability. Not pure #000000.
- Precise industrial grid. Visible structure. Rules and lines that reference technical drawings and engineering layouts.
- Large editorial typography. Headlines are dominant. Display type is a primary visual element, not decoration.
- Strong product imagery. Real photography of real products and manufacturing processes. No stock photography. No generic people-in-office shots.
- Thin technical rules. 1px borders, fine lines, hairline dividers. These create structure without weight.
- Controlled accent color. Signal Orange (#F05A36) used sparingly — active states, lifecycle indicators, critical CTAs. Never decorative.
- Select dark sections. Specific sections use a dark foundation (#11110F canvas, #F5F2EA text) for contrast and cinematic weight. Not everywhere. Not most of the site. Specific sections with intent.
- Subtle motion. Precise, mechanical, smooth. No bouncy, no playful, no gratuitous. Motion reinforces structure.
- Minimal radius. 3-16px range. Nothing pill-shaped unless functionally required (tags, badges). No huge rounded rectangles.
- Almost no decorative shadow. Shadows are functional (modals, dropdowns) not decorative. No floating card aesthetics.

**Explicitly NOT this:**

- No glassmorphism.
- No excessive cards floating on shadows.
- No generic rounded SaaS styling.
- No gradient blobs.
- No frosted glass effects.

See **05A_DESIGN_PRINCIPLES.md** for full specification.

---

## 2. Color System

### Light Foundation (9 tokens)

| Token         | Hex     | Usage                                   |
| ------------- | ------- | --------------------------------------- |
| canvas        | #F4F1EA | Page background, warm neutral base      |
| canvas-subtle | #F8F6F1 | Subtle background variation on canvas   |
| surface       | #FFFFFF | Cards, elevated panels, form inputs     |
| surface-muted | #ECE9E2 | Subtle background differentiation       |
| ink           | #11110F | Primary text, headings, primary buttons |
| ink-secondary | #4E504B | Body text, secondary content            |
| ink-muted     | #777970 | Muted text, labels, placeholders        |
| line          | #D6D3CB | Borders, dividers, rules                |
| line-strong   | #A9A69D | Emphasized borders, active rules        |

### Dark Foundation (6 tokens)

| Token                 | Hex     | Usage                             |
| --------------------- | ------- | --------------------------------- |
| dark-canvas           | #11110F | Dark section background           |
| dark-surface          | #191A17 | Elevated elements on dark         |
| dark-surface-elevated | #22231F | Further elevated elements on dark |
| dark-ink              | #F5F2EA | Primary text on dark              |
| dark-ink-secondary    | #B7B6AF | Secondary text on dark            |
| dark-line             | #363732 | Borders on dark                   |

### Accent (4 tokens)

| Token               | Hex     | Usage                                        |
| ------------------- | ------- | -------------------------------------------- |
| accent              | #F05A36 | Signal Orange — active states, critical CTAs |
| accent-hover        | #D94A29 | Accent hover state                           |
| accent-soft         | #F8D9CF | Accent tint for backgrounds                  |
| accent-dark-context | #FF7554 | Accent on dark backgrounds                   |

### Semantic (4 tokens)

| Token   | Hex     | Usage                             |
| ------- | ------- | --------------------------------- |
| success | #287A53 | Positive confirmation             |
| warning | #A66A19 | Caution states                    |
| error   | #B9382D | Error states, destructive actions |
| info    | #386A8E | Informational states              |

### Focus (2 tokens)

| Token       | Hex     | Usage                           |
| ----------- | ------- | ------------------------------- |
| focus-light | #11110F | Focus ring on light backgrounds |
| focus-dark  | #F5F2EA | Focus ring on dark backgrounds  |

### Color Ratio Guidelines

- 65-75% warm neutral (canvas, surface, ink tones)
- 20-30% dark (dark sections, footer, specific high-impact sections)
- ≤5% orange accent (sparingly — active indicators, key CTAs, lifecycle nodes)

### Contrast Compliance

All color pairings must meet WCAG 2.2 AA minimum contrast ratios:

- Normal text: 4.5:1 minimum
- Large text (≥18px bold or ≥24px): 3:1 minimum
- UI components and graphical objects: 3:1 minimum

**Total: 25 color tokens.**

See **05B_COLOR_SYSTEM.md** for full specification.

---

## 3. Typography

### Font Families

| Family      | Role                           | Weights                                                 |
| ----------- | ------------------------------ | ------------------------------------------------------- |
| Inter Tight | Display, headlines, eyebrows   | 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold) |
| Inter       | Body text, UI elements, labels | 400 (Regular), 500 (Medium), 600 (Semibold)             |

### Desktop Type Scale

| Token      | Size (fluid)                       | Line Height | Tracking            | Family      | Usage                    |
| ---------- | ---------------------------------- | ----------- | ------------------- | ----------- | ------------------------ |
| DISPLAY XL | clamp(5rem, 7.4vw, 7rem)           | 0.90–0.96   | -0.045em to -0.03em | Inter Tight | Hero headlines           |
| DISPLAY L  | clamp(4rem, 5.5vw, 5.5rem)         | 0.95–1.0    | -0.03em to -0.025em | Inter Tight | Section headlines        |
| H1         | clamp(3.5rem, 4.5vw, 4.5rem)       | 1.0–1.05    | -0.025em to -0.02em | Inter Tight | Page titles              |
| H2         | clamp(2.75rem, 3.8vw, 3.75rem)     | 1.05–1.10   | -0.025em to -0.02em | Inter Tight | Sub-section headlines    |
| H3         | clamp(2rem, 2.7vw, 2.625rem)       | 1.10–1.18   | -0.015em to -0.01em | Inter Tight | Component headings       |
| H4         | clamp(1.5rem, 1.9vw, 1.875rem)     | 1.15–1.25   | -0.015em to -0.01em | Inter Tight | Small headings           |
| LEAD       | clamp(1.25rem, 1.5vw, 1.5rem)      | 1.40–1.50   | -0.005em to 0       | Inter       | Lead body, intros        |
| BODY LARGE | clamp(1.125rem, 1.2vw, 1.25rem)    | 1.50–1.60   | 0 to +0.005em       | Inter       | Emphasized body          |
| BODY       | clamp(1rem, 1.1vw, 1.125rem)       | 1.50–1.65   | 0 to +0.005em       | Inter       | Default body text        |
| SMALL      | clamp(0.875rem, 0.94vw, 0.9375rem) | 1.45–1.55   | +0.005em to +0.01em | Inter       | Captions, secondary body |
| MICRO      | clamp(0.75rem, 0.82vw, 0.8125rem)  | 1.40–1.50   | +0.01em to +0.02em  | Inter       | Fine print, footnotes    |

### Mobile Type Scale

| Token | Size    | Line Height | Tracking            | Family      | Usage                        |
| ----- | ------- | ----------- | ------------------- | ----------- | ---------------------------- |
| HERO  | 48–60px | 0.95–1.0    | -0.03em to -0.025em | Inter Tight | Mobile hero headlines        |
| H1    | 44–52px | 1.0–1.05    | -0.025em            | Inter Tight | Mobile page titles           |
| H2    | 36–44px | 1.05–1.10   | -0.02em             | Inter Tight | Mobile sub-section headlines |
| H3    | 28–34px | 1.10–1.18   | -0.015em            | Inter Tight | Mobile component headings    |
| H4    | 22–26px | 1.15–1.25   | -0.01em             | Inter Tight | Mobile small headings        |
| LEAD  | 18–20px | 1.40–1.50   | -0.005em to 0       | Inter       | Mobile lead body             |
| BODY  | 16–17px | 1.50–1.60   | 0                   | Inter       | Mobile default body          |
| SMALL | 14px    | 1.45–1.55   | +0.005em            | Inter       | Mobile captions              |
| MICRO | 12px    | 1.40–1.50   | +0.01em             | Inter       | Mobile fine print            |

### Rules

- Body text never below 16px.
- Tight tracking on headlines (-0.045em to -0.01em). Normal to slightly positive tracking on body.
- Uppercase reserved for: eyebrows, labels, stage codes, navigation items. Not for body text. Not for headings.
- Fluid scaling between defined scale points. No abrupt jumps.

**Total: 20 typography tokens (11 desktop + 9 mobile).**

See **05C_TYPOGRAPHY_SYSTEM.md** for full specification.

---

## 4. Layout & Spacing

### Container Widths

| Token      | Width  | Usage                           |
| ---------- | ------ | ------------------------------- |
| shell      | 1440px | Maximum shell width, centered   |
| content    | 1280px | Standard content area           |
| reading    | 720px  | Long-form reading, article body |
| wide-media | 1440px | Full-bleed media within shell   |

### Grid System

| Breakpoint            | Columns | Gap     | Context                |
| --------------------- | ------- | ------- | ---------------------- |
| Desktop (1280px+)     | 12      | 24-32px | Standard layout        |
| Tablet (768px-1279px) | 8       | 20-24px | Tablet layout          |
| Mobile (<768px)       | 4       | 16px    | Single-purpose columns |

### Padding

| Breakpoint            | Horizontal Padding |
| --------------------- | ------------------ |
| Desktop (1280px+)     | 32px               |
| Tablet (768px-1279px) | 24px               |
| Mobile (<768px)       | 20px               |

### Spacing Scale

Base unit: 4px. All spacing values are multiples of 4.

| Token     | Value | Usage                              |
| --------- | ----- | ---------------------------------- |
| space-0.5 | 2px   | Hairline gaps, fine adjustments    |
| space-1   | 4px   | Minimal inner padding              |
| space-2   | 8px   | Compact inner spacing              |
| space-3   | 12px  | Small gaps                         |
| space-4   | 16px  | Default small spacing              |
| space-5   | 20px  | Medium-small spacing               |
| space-6   | 24px  | Default component spacing          |
| space-8   | 32px  | Section sub-gaps                   |
| space-10  | 40px  | Component group spacing            |
| space-12  | 48px  | Large component gaps               |
| space-16  | 64px  | Section sub-section spacing        |
| space-20  | 80px  | Section spacing (compact)          |
| space-24  | 96px  | Section spacing                    |
| space-30  | 120px | Section spacing (standard desktop) |
| space-36  | 144px | Section spacing (generous desktop) |
| space-40  | 160px | Section spacing (maximum desktop)  |
| space-48  | 192px | Hero/feature section spacing       |

### Section Spacing by Breakpoint

| Breakpoint            | Range     | Notes                    |
| --------------------- | --------- | ------------------------ |
| Desktop (1280px+)     | 120-176px | Generous vertical rhythm |
| Tablet (768px-1279px) | 88-128px  | Moderate vertical rhythm |
| Mobile (<768px)       | 64-96px   | Compact vertical rhythm  |

### Layout Rules

- Shell is always centered with `max-width: 1440px`.
- Content within shell uses `max-width: 1280px` unless full-bleed media.
- Reading content (articles, process descriptions) uses `max-width: 720px`.
- Grid gaps are consistent within a breakpoint. Do not mix gap sizes in the same layout.
- No horizontal overflow at any viewport width.

**Total: 17 spacing tokens, 6 breakpoints, 4 container widths, 3 grid definitions.**

See **05D_LAYOUT_GRID_SPACING.md** for full specification.

---

## 5. Surfaces & Borders

### Border Radius

| Token        | Value | Usage                              |
| ------------ | ----- | ---------------------------------- |
| radius-xs    | 3px   | Small elements, tags, badges       |
| radius-sm    | 6px   | Inputs, small cards                |
| radius-md    | 10px  | Cards, panels                      |
| radius-lg    | 16px  | Large panels, modals               |
| radius-round | 999px | Circular avatars, pill badges only |

### Borders

- Default border: 1px solid `line` (#D6D3CB).
- Emphasized border: 1px solid `line-strong` (#A9A69D).
- Dark context border: 1px solid `dark-line` (#363732).
- Focus border: 2px solid `focus-light` (#11110F) on light backgrounds, `focus-dark` (#F5F2EA) on dark backgrounds, with 2-3px offset ring.
- No 2px+ borders for decorative purposes. Borders are structural.

### Shadows

Shadows are rare and functional:

- Modal: `0 16px 48px rgba(17,17,15,0.12), 0 4px 12px rgba(17,17,15,0.08)`
- Dropdown: `0 8px 24px rgba(17,17,15,0.10), 0 2px 8px rgba(17,17,15,0.06)`
- No card shadows. Cards use borders or background differentiation.
- No floating element shadows. No decorative shadows.

### Z-Index Scale

| Token      | Value | Usage                              |
| ---------- | ----- | ---------------------------------- |
| z-base     | 0     | Default content                    |
| z-raised   | 10    | Slightly elevated content          |
| z-sticky   | 100   | Sticky headers, floating controls  |
| z-dropdown | 200   | Dropdown menus                     |
| z-overlay  | 300   | Overlay backgrounds                |
| z-modal    | 400   | Modal dialogs                      |
| z-toast    | 500   | Toast notifications, highest layer |

See **05E_COMPONENT_VISUAL_SPEC.md** for full specification.

---

## 6. Media Art Direction

### Three Frame Modes

| Mode            | Description                                     | Use Case                                                      |
| --------------- | ----------------------------------------------- | ------------------------------------------------------------- |
| Full-bleed      | Edge-to-edge, no container. Hi-res only.        | Hero images, cinematic project photography                    |
| Contained Stage | Within a defined frame with background.         | Product renders, legacy photography, controlled presentations |
| Document Frame  | Structured frame suggesting technical document. | Sketches, CAD exports, technical drawings                     |

### Low-Resolution Strategy

When source imagery is low resolution:

- Use contained stage mode with neutral background.
- Use mosaic layouts (smaller images in grid) to reduce visible scaling.
- Use within small modules where pixel density demands are lower.
- Never display low-res images full-bleed.

### Video

- Homepage hero: muted autoplay, loop, no controls visible. Static poster for fallback.
- Project pages: user-initiated playback with controls.
- Hover preview: short silent clips on hover (desktop only).
- Reduced motion: static poster image replaces all video.
- All video must have poster images.
- No auto-playing audio. Ever.

See **05G_MEDIA_ART_DIRECTION.md** for full specification.

---

## 7. Buttons & Controls

### Button Types

| Type         | Visual                                          | Usage                               |
| ------------ | ----------------------------------------------- | ----------------------------------- |
| Primary      | Near-black fill (#11110F), light text (#FFFFFF) | Main CTA on light backgrounds       |
| Secondary    | Transparent, 1px border (line-strong), ink text | Alternative actions                 |
| Text CTA     | Label + arrow, no background/border             | Tertiary actions, links with intent |
| Dark Context | Light fill (#F5F2EA), dark text (#11110F)       | CTAs on dark sections               |
| Danger       | Error fill (#B9382D), light text                | Destructive actions only            |

### Button Sizes

| Size    | Height  | Padding            | Context                         |
| ------- | ------- | ------------------ | ------------------------------- |
| Large   | 52-56px | 28-32px horizontal | Hero CTAs, primary page actions |
| Default | 48px    | 24px horizontal    | Standard buttons                |
| Compact | 40-44px | 16-20px horizontal | Secondary actions, inline       |

### Rules

- Minimum touch target: 44px height (or equivalent clickable area).
- All buttons must implement 5 states: default, hover, active, focus, disabled.
- Loading state: spinner replaces label text, button maintains dimensions.
- Primary button width: content-driven, not full-width. Target ~180-240px for standard CTAs.
- No full-width buttons except in form footers or mobile bottom sheets.

See **05E_COMPONENT_VISUAL_SPEC.md** and **05M_COMPONENT_STATE_MATRIX.md** for full specification.

---

## 8. Navigation

### Desktop Header

- Height: 76-80px.
- Transparent background when over hero image.
- Solid background (canvas or surface) on scroll and all interior pages.
- Logo left-aligned. Nav items center or left-center. CTA right-aligned.
- Nav items: WORK, CAPABILITIES, PROCESS, INDUSTRIES, ABOUT, INSIGHTS.
- Nav items use uppercase, 12-13px, tracking 0.04-0.06em.

### Mega Menu

- Triggered by CAPABILITIES nav item.
- Multi-column layout showing capability categories with descriptions.
- Appears below header, anchored to header bottom edge.
- Closes on Escape, click outside, or focus leaving menu.
- Keyboard accessible: Tab, Enter/Space, Escape, arrow keys.

### Mobile Menu

- Full-viewport panel.
- Triggered by hamburger icon (top-right).
- Full navigation list with expandable sub-items inline.
- Focus trap when open. Body scroll locked.
- Close on Escape or close button.

### States

- Transparent: over hero, white/light text.
- Solid: on scroll, dark text on canvas/surface background.
- Active: current page indicator (underline or weight change, not color pill).

See **05E_COMPONENT_VISUAL_SPEC.md** for full specification.

---

## 9. Cards

### When to Use Cards

Cards are used ONLY where content is genuinely discrete:

- Project cards (portfolio grid)
- Capability cards (capabilities listing)
- Article/insight cards (insights listing)
- Testimonial cards (when verified content exists)

Many sections use grid lines, typography, and spacing WITHOUT card containers. Cards are not the default layout primitive.

### Project Card

- Media-dominant. Image area is the primary visual.
- Aspect ratios: 4:3 (standard) or 16:10 (wide).
- Title below or overlaid (with sufficient contrast).
- Hover: subtle scale on image (1.015-1.025), title underline appears.
- No shadow. No border on hover. Minimal state change.
- Metadata (industry, stage) shown as text labels, not badges/pills.

### Capability Card

- Editorial style. Grid-line bounded, not floating.
- Title + concise description.
- No icon unless the capability has a unique, meaningful symbol.
- Hover: background shift to surface-muted or border emphasis.

See **05E_COMPONENT_VISUAL_SPEC.md** for full specification.

---

## 10. Forms

### Input Fields

- Height: 48-56px.
- Labels always visible (no floating labels that obscure content).
- 1px border (line #D6D3CB). Focus: 2px ink ring (#11110F) with 2-3px offset.
- Error state: 1px error border (#B9382D) + error icon + error message below field.
- Placeholder text: ink-muted, never used as a label substitute.

### Form Types

- Select dropdowns: custom styled, keyboard accessible, search for long lists.
- Choice selectors (radio-like): visual cards or tiles for distinct options.
- Checkboxes: custom styled, 20-24px touch area.
- Radio buttons: custom styled, mutually exclusive options.
- File upload: drag-and-drop zone with click fallback. Clear file type/size constraints.

### Validation

- Inline validation on blur (not on every keystroke).
- Error messages: specific, actionable. Not "Invalid input." Say what is wrong and how to fix it.
- Error icon + message + border color change. Red alone is not sufficient (color-blind accessibility).
- Success state: subtle check icon or green border confirmation.

### Start Project Funnel

- Central column: 760-880px max-width.
- Progressive disclosure: one logical group per step.
- Progress indicator visible (step count or progress bar).
- Back navigation preserves all entered data.
- Calm, focused, no distractions.

See **05H_FORM_CONVERSION_UI.md** for full specification.

---

## 11. Motion

### Principles

Motion is precise, mechanical, and smooth. It reinforces the industrial/technical identity. No bouncy, no playful, no elastic.

### Duration Tiers

| Tier    | Duration  | Usage                                       |
| ------- | --------- | ------------------------------------------- |
| Micro   | 150-220ms | Button state changes, hover effects, toggle |
| UI      | 220-350ms | Dropdown open/close, tab switch, accordion  |
| Section | 450-700ms | Scroll reveals, section transitions         |
| Media   | 600-900ms | Image reveals, hero transitions, video fade |

### Easing Curves

| Token     | Value                          | Usage                               |
| --------- | ------------------------------ | ----------------------------------- |
| primary   | cubic-bezier(0.22, 1, 0.36, 1) | Default for entrances, reveals      |
| secondary | ease-out                       | Symmetric transitions, size changes |

### Scroll Reveal

- Fade + translate: element starts 12-24px below final position, opacity 0, animates to opacity 1 at final position.
- Stagger: sequential elements stagger by 50-80ms.
- Trigger: when element enters viewport (10-15% visible).
- One-shot: reveal plays once, does not replay on scroll back.

### Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Disable all scroll reveals (content visible immediately).
- Disable parallax effects.
- Disable hover autoplay on video.
- Static poster images replace video.
- Transitions are instant (0ms) or minimal (≤50ms opacity only).
- No decorative animation.

See **05F_MOTION_INTERACTION_SYSTEM.md** for full specification.

---

## 12. Responsive Behavior

### Breakpoints

| Token | Width  | Target                         |
| ----- | ------ | ------------------------------ |
| xs    | 360px  | Small mobile                   |
| sm    | 390px  | Standard mobile                |
| md    | 768px  | Tablet portrait                |
| lg    | 1024px | Tablet landscape, small laptop |
| xl    | 1280px | Standard desktop               |
| 2xl   | 1536px | Wide desktop                   |

### Rules

- Fluid between breakpoints. No abrupt layout jumps.
- Every component must be usable at 360px minimum width.
- No horizontal overflow at any width.
- Grid columns reduce: 12 → 8 → 4 as viewport narrows.
- Navigation transforms: horizontal nav → hamburger + full-viewport panel.
- Images scale proportionally. No fixed-width images.
- Touch targets remain ≥44px at all breakpoints.

See **05J_RESPONSIVE_DESIGN_SYSTEM.md** for full specification.

---

## 13. Accessibility

### WCAG 2.2 AA Compliance

All visual design must meet WCAG 2.2 AA minimum requirements.

### Focus Indicators

- 2-3px solid outline using focus color (ink #11110F on light backgrounds, dark-ink #F5F2EA on dark backgrounds).
- 2-3px offset from element edge (so it does not clip the element).
- Visible on all interactive elements: buttons, links, inputs, dropdowns, cards with actions.
- Never `outline: none` without a visible replacement.

### Touch Targets

- Minimum 44px × 44px for all interactive elements.
- Adequate spacing between adjacent targets (minimum 8px gap).

### Typography

- Body text minimum 16px.
- Sufficient line height (1.5+ for body text).
- No text as the only means of conveying information.

### Color and Contrast

- All text meets 4.5:1 contrast ratio (normal text) or 3:1 (large text).
- Error states not communicated by color alone — always include icon + text.
- Interactive elements distinguishable from static content without color reliance.

### Keyboard Navigation

- All functionality accessible via keyboard.
- Logical tab order.
- Focus visible at all times.
- No keyboard traps (except intentional modal dialogs).

### Zoom

- Layout must not break at 200% zoom.
- Content must reflow correctly.

### Reduced Motion

- All decorative animation disabled when `prefers-reduced-motion: reduce`.
- Functional transitions minimized but not removed entirely (brief opacity changes acceptable).

See **05I_ACCESSIBILITY_VISUAL_SPEC.md** for full specification.

---

## 14. Page Rhythm

### Canonical Composition Patterns (13)

The following 13 composition patterns are defined in 05K_PAGE_COMPOSITION_PATTERNS.md and used to build page rhythms:

1. **EDITORIAL HERO** — Full-width headline + supporting text + primary CTA. Typography-dominant, minimal imagery.
2. **MEDIA HERO** — Full-bleed image or video with overlaid headline. Cinematic impact.
3. **SPLIT CONTENT+MEDIA** — Two-column layout with text on one side, media on the other.
4. **TECHNICAL TWO COLUMN** — Equal two-column grid for structured content pairs.
5. **LARGE MEDIA BREAK** — Full-bleed or near-full-bleed image/video as a visual pause between content sections.
6. **CONTAINED PRODUCT STAGE** — Product image within a defined background frame (neutral stage).
7. **PROCESS MOSAIC** — Multi-image grid layout showing process steps or manufacturing stages.
8. **CAPABILITY GRID** — Editorial grid of capability items, typography-driven, no card containers.
9. **LIFECYCLE RAIL** — Horizontal or angled lifecycle progression (CON → EVT → DVT → PVT → PRODUCTION).
10. **QUOTE SECTION** — Large pull-quote with attribution, editorial treatment.
11. **DARK MANUFACTURING BLOCK** — Dark canvas section with cinematic imagery and strong typographic statement.
12. **FINAL CTA** — Simple, direct call-to-action section with minimal friction.
13. **RELATED WORK** — Grid of project cards linking to related case studies.

### Homepage Example Rhythm

A typical homepage uses these patterns in sequence:

1. MEDIA HERO — cinematic hero with video/image
2. EDITORIAL HERO — credibility statement, key metrics
3. SPLIT CONTENT+MEDIA — featured work project
4. CONTAINED PRODUCT STAGE — case study deep dive
5. LIFECYCLE RAIL — product development lifecycle overview
6. EDITORIAL HERO — process philosophy, text-dominant
7. CAPABILITY GRID — capabilities overview
8. LARGE MEDIA BREAK — cinematic manufacturing process
9. CAPABILITY GRID — industries served
10. TECHNICAL TWO COLUMN — how we work, collaboration model
11. EDITORIAL HERO — trust & credentials
12. DARK MANUFACTURING BLOCK — dark canvas, cinematic imagery
13. FINAL CTA — "Start a Project"

### Case Study Rhythm

- Varied section composition. Not paragraph-image-paragraph-image repetition.
- Full-bleed images alternate with contained content sections.
- Lifecycle stage indicators provide structural variety.
- Technical specifications in grid layouts.
- Typography shifts between display (section openers) and body (narrative).

### General Rhythm Rules

- No three consecutive sections with the same visual weight.
- Alternate between dense (grid, multiple elements) and sparse (single image, large text).
- Dark sections appear at most 2-3 times per page.
- Every page has a clear visual entry point and exit point.

See **05K_PAGE_COMPOSITION_PATTERNS.md** for full specification.

---

## 15. Anti-Patterns (Prohibited)

The following patterns are explicitly prohibited. Any design using these must be rejected.

| #   | Anti-Pattern                                    | Reason                                      |
| --- | ----------------------------------------------- | ------------------------------------------- |
| 1   | Gradient blobs                                  | Generic, no brand association               |
| 2   | Frosted-glass cards everywhere                  | Glassmorphism is not the brand              |
| 3   | Huge rounded rectangles (>16px radius on cards) | Conflicts with industrial precision         |
| 4   | Random floating icons                           | Decorative, no information value            |
| 5   | Endless horizontal carousels                    | Poor accessibility, hides content           |
| 6   | Scroll hijacking                                | Disorienting, breaks user control           |
| 7   | Custom cursor                                   | Gimmick, accessibility nightmare            |
| 8   | Parallax on every section                       | Exhausting, not precise                     |
| 9   | 3D globe                                        | No product relevance                        |
| 10  | Fake CAD overlays                               | Dishonest representation                    |
| 11  | Auto-playing audio                              | Never acceptable                            |
| 12  | Marquee text                                    | Distracting, not editorial                  |
| 13  | Typewriter text effect                          | Slow, inaccessible, gimmicky                |
| 14  | Bouncing buttons                                | Conflicts with mechanical motion principles |
| 15  | Neon glow effects                               | Not the brand identity                      |
| 16  | Unnecessary loading screens                     | Performance waste                           |
| 17  | Floating chat bubble                            | Not specified, not scoped                   |
| 18  | Hamburger menu on desktop                       | Hidden navigation is anti-UX for this site  |
| 19  | Four-column tiny portfolio grid                 | Images too small to communicate quality     |
| 20  | Generic stock photos                            | Dishonest, no brand value                   |
| 21  | Generic people-in-office photography            | Stock, not authentic                        |
| 22  | Card-everywhere layouts                         | Not every section needs a card container    |
| 23  | Decorative shadows on cards                     | Conflicts with minimal shadow rule          |

See **05A_DESIGN_PRINCIPLES.md** for full anti-pattern rationale.

---

## 16. Implementation Notes

This document is a **design system specification**. It defines visual tokens, rules, and constraints. It is not framework-specific code.

### What Phase 2 Does NOT Include

- No React/Vue/Next.js component code.
- No CSS-in-JS or Tailwind configuration files.
- No build system or dependency decisions.
- No CMS schema implementation.
- No deployed application files.

### What Phase 3 Will Address

Phase 3 translates these design tokens into:

- Component architecture (React/Next.js component tree)
- CMS data model (content schema, field types, relationships)
- Content contracts (what data each component requires)
- Technical foundation (framework selection, build configuration)

### Token JSON

A structured JSON representation of all design tokens is provided in **05L_DESIGN_TOKENS.json** for programmatic consumption during Phase 3 implementation.

---

## Document Index

| Document | Subject                                      |
| -------- | -------------------------------------------- |
| 05       | Master design system summary (this document) |
| 05A      | Design principles and brand character        |
| 05B      | Color system                                 |
| 05C      | Typography system                            |
| 05D      | Layout, grid, and spacing                    |
| 05E      | Component visual specification               |
| 05F      | Motion and interaction system                |
| 05G      | Media art direction                          |
| 05H      | Form and conversion UI                       |
| 05I      | Accessibility visual specification           |
| 05J      | Responsive design system                     |
| 05K      | Page composition patterns                    |
| 05L      | Design tokens (JSON)                         |
| 05M      | Component state matrix                       |
| 05N      | Phase 2 acceptance criteria                  |
| 05O      | Phase 2 handoff                              |
