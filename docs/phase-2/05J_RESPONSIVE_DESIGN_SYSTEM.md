# 05J — Responsive Design System

> Design specification for how every component on 123.design adapts across viewport sizes. The design remains fluid between breakpoints. There are no breakpoint-specific visual hacks — each component scales proportionally and purposefully from 360px to ultrawide.

---

## 1. Breakpoint Reference

These breakpoints are design reference points. The design is fluid between them — no component should look broken at any intermediate width.

| Token | Width  | Context                                                         |
| ----- | ------ | --------------------------------------------------------------- |
| `xs`  | 360px  | Minimum supported viewport. Smallest common mobile device       |
| `sm`  | 390px  | Standard mobile (iPhone 14/15 class)                            |
| `md`  | 768px  | Tablet portrait. Transition point for mobile → tablet layouts   |
| `lg`  | 1024px | Tablet landscape / small laptop                                 |
| `xl`  | 1280px | Standard desktop. Transition point for tablet → desktop layouts |
| `2xl` | 1536px | Large desktop / ultrawide                                       |

**Fluid principle:** Between any two breakpoints, the layout adapts continuously. Grid columns resize, type scales smoothly, spacing adjusts. No width should produce a broken or unconsidered layout.

---

## 2. The 360px Rule

Every core component must remain usable at 360px. This is the hard minimum viewport. Components that break below 360px are defective.

**Components subject to the 360px rule:**

- Header / navigation
- Hero section
- Project cards
- Filter bar
- Lifecycle / timeline
- Forms (Start Project funnel)
- CTA groups
- Footer
- Quote section
- Process mosaic
- Capability grid

**360px constraints:**

- No horizontal overflow at any point
- Minimum 16px page padding (left and right)
- Text must not truncate unexpectedly
- Touch targets remain 44px minimum
- Single-column layout for all content

---

## 3. Component Adaptation Reference

### 3.1 Header / Navigation

| Breakpoint              | Behavior                                                                                                                                                                                                                                                   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Horizontal layout. Height ~76–80px. Logo left, navigation links center or center-right, CTA button right. All items visible inline. Adequate spacing between nav items (24–32px)                                                                           |
| **Tablet (768–1279px)** | Condensed horizontal layout. May reduce visible nav items or shorten labels. CTA button retained. Height may reduce to 64–72px. If nav items overflow, transition to hamburger                                                                             |
| **Mobile (<768px)**     | Logo left, hamburger icon right. Height ~60–64px. Hamburger opens full-viewport overlay panel: warm neutral surface (canvas or white), navigation items as large labels (28–36px), vertically stacked with generous spacing. CTA button at bottom of panel |
| **360px**               | Same as mobile. Single column in menu panel. No horizontal overflow. Logo scales proportionally. Hamburger tap target 44px minimum                                                                                                                         |
| **Reduced motion**      | Menu opens instantly (no slide animation). Content appears immediately                                                                                                                                                                                     |

**Mobile menu panel details:**

- Full viewport height (100dvh to address mobile browser chrome)
- Background: `canvas` (#F4F1EA) or white
- Nav items: 28–36px, `ink` color, left-aligned, 48px+ tap targets
- Spacing between items: 8–12px
- Close mechanism: X button (top-right, 44px target) or back gesture
- Focus trap within panel when open
- Escape key closes panel

---

### 3.2 Hero Section

| Breakpoint              | Behavior                                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Height: 82–92vh. Large display type (see 05C for scale). Content vertically centered or bottom-aligned within hero. Max content width ~900–1100px, left-aligned or centered per page context. CTA inline with secondary option  |
| **Tablet (768–1279px)** | Proportional scaling. Type reduces smoothly. Height: 70–85vh. Content maintains drama without excessive whitespace                                                                                                              |
| **Mobile (<768px)**     | Hero type: 48–60px. Height: 60–75vh (shorter to accommodate scroll context on mobile). Maintain dramatic impact — do not let type shrink to the point where words break one-per-line awkwardly. CTA stacks vertically if needed |
| **360px**               | Type still dramatic (48px minimum). CTA stacks. Padding: 16px sides. No single-word-per-line breaks if avoidable — adjust line breaks intentionally                                                                             |
| **Reduced motion**      | No scroll-driven reveals. Background image/video is static poster. Content visible immediately                                                                                                                                  |

**Hero type scaling principle:** The hero headline should feel impactful at every size. At 360px, a 48px word like "DESIGN" fills most of the width — this is intentional and dramatic. Do not shrink to 32px to make it "fit better." The scale is the statement.

---

### 3.3 Project Cards

| Breakpoint              | Behavior                                                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Grid: 3 columns. Gap: 24–32px. Media aspect ratio: 4:3 or 16:10. Card padding: 20–24px. Hover: subtle elevation or border change         |
| **Tablet (768–1279px)** | Grid: 2 columns. Gap: 20–24px. Media ratio maintained. Card padding: 16–20px                                                             |
| **Mobile (<768px)**     | Grid: 1 column, full-width cards. Gap: 16–20px between cards. Card padding: 16px. Media: full-width within card, aspect ratio maintained |
| **360px**               | Single column. Padding: 16px page padding, card padding 12–16px. Card text remains readable. Title does not truncate                     |
| **Reduced motion**      | No hover scale/lift animation. Card appears in static state                                                                              |

---

### 3.4 Filter Bar

| Breakpoint              | Behavior                                                                                                                                                                                                        |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Compact horizontal layout. Text labels on filter buttons. Subtle borders (`line` token). Inline with content or sticky above content area. All filters visible                                                  |
| **Tablet (768–1279px)** | May wrap to second line if filters exceed available width. Maintain text labels. Alternatively: horizontal scroll within filter container (with scroll indicators)                                              |
| **Mobile (<768px)**     | Single "Filter" button (or "Filters" with count badge). Tapping opens bottom sheet containing all filter options. Bottom sheet: rounded top corners, full-width, max-height ~70vh, body scroll locked when open |
| **360px**               | Same as mobile. Bottom sheet with adequate touch targets (44px minimum per option). Apply/Clear buttons at bottom of sheet                                                                                      |
| **Reduced motion**      | Bottom sheet appears instantly (no slide-up animation)                                                                                                                                                          |

---

### 3.5 Lifecycle / Timeline

| Breakpoint              | Behavior                                                                                                                                                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Horizontal progression or stepped grid. Stages flow left-to-right with connecting lines or visual continuity. Stage labels: 11px uppercase, tracking-wide. Each stage: icon/number + label + optional description |
| **Tablet (768–1279px)** | May compress horizontal layout. Stage descriptions hidden, labels retained. Connecting lines shorten proportionally                                                                                               |
| **Mobile (<768px)**     | Vertical progression. Stages flow top-to-bottom. Connecting line runs vertically on the left. Each stage: indicator + label. Descriptions below label or expandable                                               |
| **360px**               | Vertical, compact. Stage labels: short but clear. Adequate spacing between stages (16px+). Connecting line thin (1–2px)                                                                                           |
| **Reduced motion**      | No scroll-triggered stage reveals. All stages visible immediately                                                                                                                                                 |

---

### 3.6 Forms (Start Project Funnel)

| Breakpoint              | Behavior                                                                                                                                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Central content column: max-width 760–880px, centered. Fields full-width within column. Choice cards span column width. Progress indicator at top of column                                     |
| **Tablet (768–1279px)** | Content column wider (fills available width minus comfortable padding ~40–60px per side). All other behavior same as desktop                                                                    |
| **Mobile (<768px)**     | Full width within page padding (16–20px). Fields stacked. Choice cards full-width. Progress indicator compact (see 05H). Buttons: full-width acceptable for primary actions within form context |
| **360px**               | Comfortable single column. 16px page padding. Fields full-width. Choice cards full-width. No horizontal overflow. Labels above fields, never inline                                             |
| **Reduced motion**      | Step transitions instant. No scroll-based field reveals                                                                                                                                         |

See 05H for complete form specification.

---

### 3.7 CTA Groups

| Breakpoint              | Behavior                                                                                                                                                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Inline: primary + secondary side by side. Primary left, secondary right (or adjacent). Adequate gap (12–16px)                                                                                                                          |
| **Tablet (768–1279px)** | Inline if space permits. Stack if secondary action wraps                                                                                                                                                                               |
| **Mobile (<768px)**     | Stacked: primary first, secondary below. Gap: 8–12px. Primary button: full-width acceptable in form context. **Not every mobile button is full-width** — in hero sections, headers, and card contexts, buttons may be sized to content |
| **360px**               | Stacked. Primary full-width in forms. In non-form contexts, buttons sized to content but minimum 44px height                                                                                                                           |

**CTA stacking rule:** Primary action always appears first in the visual order. On desktop, "first" is left. On mobile, "first" is top. Never place secondary above primary.

---

### 3.8 Footer

| Breakpoint              | Behavior                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desktop (>=1280px)**  | Multi-column layout. Brand statement/logo in one column. Navigation links in 2–4 columns. Social/legal at bottom. Adequate spacing between columns (32–48px) |
| **Tablet (768–1279px)** | Condensed columns. May reduce from 4 to 2–3 columns. Brand statement retained. Spacing reduces proportionally                                                |
| **Mobile (<768px)**     | Stacked sections. Each column becomes a full-width block. Expandable/collapsible sections acceptable for navigation groups. Brand statement at top           |
| **360px**               | Single column. All sections stacked. Readable text sizes maintained. Adequate spacing between sections (24px+). Legal/copyright at bottom                    |

---

### 3.9 Mega Menu

| Breakpoint              | Behavior                                                                                                                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Full-width panel below navigation. Structured columns: category headers + link lists. Optional: featured content area (image + link) in one column. Background: white or canvas. Subtle shadow or border for separation |
| **Tablet (768–1279px)** | May simplify columns. Reduce from 4 to 2–3 columns. Featured content area may be removed. Panel width matches viewport                                                                                                  |
| **Mobile (<768px)**     | Mega menu pattern replaced entirely by mobile navigation menu. Mobile menu provides access to all mega menu destinations through accordion/expandable structure                                                         |
| **360px**               | Same as mobile. Mobile menu handles all navigation depth                                                                                                                                                                |

---

### 3.10 Bottom Sheet

| Property        | Specification                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------- |
| Availability    | Mobile-only pattern (<768px)                                                                       |
| Top corners     | Rounded (12–16px radius)                                                                           |
| Width           | Full viewport width                                                                                |
| Max height      | ~70–85vh (configurable per context)                                                                |
| Body scroll     | Locked when sheet is open                                                                          |
| Dismiss         | Swipe down, backdrop tap, or close button                                                          |
| Handle          | Optional drag indicator bar at top (36px wide, 4px tall, `ink-muted`, centered, 8px from top edge) |
| Content padding | 16–20px                                                                                            |
| Reduced motion  | Appears instantly (no slide-up)                                                                    |

Bottom sheets are used for: filter panels, share menus, mobile dropdowns, and other contextual overlays that benefit from a native mobile feel.

---

### 3.11 Large Media Break

| Breakpoint              | Behavior                                                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Full-width, 50–70vh height. Edge-to-edge or within content container per context. Maintains visual impact                                     |
| **Tablet (768–1279px)** | Proportional scaling. Height: 45–60vh. Width follows container                                                                                |
| **Mobile (<768px)**     | Full-width within page padding. Height: 40–50vh. Maintain impact — do not collapse to a tiny preview. The media should still feel significant |
| **360px**               | Full-width within 16px padding. Height: 40–50vh. Aspect ratio preserved                                                                       |
| **Reduced motion**      | Static poster image. No autoplay video, no parallax, no scroll-driven effects                                                                 |

---

### 3.12 Process Mosaic

| Breakpoint              | Behavior                                                                                                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | 3–4 columns. Each cell: icon/number + title + description. Consistent cell sizing. Gap: 20–24px                                                                                  |
| **Tablet (768–1279px)** | 2 columns. Cells maintain proportions. Gap: 16–20px                                                                                                                              |
| **Mobile (<768px)**     | 1 column (stacked) or horizontal scroll. If horizontal scroll: clear scroll indicators, snap to cells, each cell ~80% viewport width. If stacked: full-width cells with 16px gap |
| **360px**               | 1 column stacked. Full-width cells. 12–16px gap. Text readable                                                                                                                   |
| **Reduced motion**      | No scroll-triggered cell reveals. All cells visible immediately                                                                                                                  |

---

### 3.13 Capability Grid

| Breakpoint              | Behavior                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Multi-column editorial grid with shared alignment rules. Mixed cell sizes for visual interest (some span 2 columns, some 1). Consistent baseline grid. Gap: 20–24px |
| **Tablet (768–1279px)** | 2 columns. Mixed sizing simplified — cells may normalize to equal width. Gap: 16–20px                                                                               |
| **Mobile (<768px)**     | 1 column. All cells full-width. Stacked vertically. Gap: 12–16px                                                                                                    |
| **360px**               | 1 column. Full-width cells. Comfortable padding. No overflow                                                                                                        |

---

### 3.14 Quote Section

| Breakpoint              | Behavior                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Centered layout. Text max-width ~640px for comfortable reading. Large quote marks or decorative rule optional. Generous vertical padding (80–120px above and below) |
| **Tablet (768–1279px)** | Centered. Max-width ~560–640px. Proportional padding                                                                                                                |
| **Mobile (<768px)**     | Full-width within page padding (16–20px). Text remains breathing — do not compress. Padding: 48–64px vertical                                                       |
| **360px**               | Full-width within 16px padding. Quote text readable at 16px+ minimum. Attribution below                                                                             |

---

### 3.15 Dark Manufacturing Block

| Breakpoint              | Behavior                                                                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Desktop (>=1280px)**  | Full-width dark canvas section (`dark-canvas` #11110F). Content centered within, max-width ~1100–1200px. Text: `dark-ink` (#F5F2EA) and `dark-ink-secondary` (#B7B6AF). Generous vertical padding (80–120px) |
| **Tablet (768–1279px)** | Full-width dark section. Content padding reduces proportionally. Same color pattern                                                                                                                          |
| **Mobile (<768px)**     | Full-width dark section. 16px page padding within. Same color pattern. Vertical padding: 48–64px                                                                                                             |
| **360px**               | Full-width dark section. 16px padding. Text readable. Same dark canvas treatment                                                                                                                             |
| **Reduced motion**      | No scroll-driven reveals within the section. Content visible immediately                                                                                                                                     |

---

### 3.16 Tables

| Breakpoint              | Behavior                                                                                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop (>=1280px)**  | Full table with all columns visible. Adequate cell padding (12–16px). Header row visually distinct                                                                                                          |
| **Tablet (768–1279px)** | Full table if columns fit. If columns exceed width: horizontal scroll within table container (visible scroll indicator). Do not auto-convert to cards                                                       |
| **Mobile (<768px)**     | Horizontal scroll where table conversion to cards would lose structural context. Container with `overflow-x: auto`. First column may be sticky. If table is simple (2–3 columns), it may fit without scroll |
| **360px**               | Horizontal scroll for most tables. First column sticky if possible. Minimum cell width ensures readability                                                                                                  |

**Table rule:** Do not automatically convert tables to card layouts on mobile. Tables communicate structured data relationships. Cards destroy that structure. Horizontal scroll preserves the table's integrity.

---

## 4. Responsive Summary Table

| Component       | Desktop (>=1280)        | Tablet (768–1279)     | Mobile (<768)              | 360px                      | Reduced Motion      |
| --------------- | ----------------------- | --------------------- | -------------------------- | -------------------------- | ------------------- |
| Header          | Horizontal nav, 76–80px | Condensed nav         | Hamburger → full panel     | Single column, no overflow | Instant menu        |
| Hero            | 82–92vh, large type     | Proportional scale    | 60–75vh, 48–60px type      | Dramatic type, stacked CTA | Static poster       |
| Project Cards   | 3-col grid              | 2-col grid            | 1-col, full-width          | Single column              | Static state        |
| Filter Bar      | Inline, text labels     | May wrap or scroll    | "Filter" → bottom sheet    | Bottom sheet               | Instant sheet       |
| Timeline        | Horizontal              | Compressed horizontal | Vertical progression       | Vertical, compact          | All visible         |
| Forms           | 760–880px column        | Wider column          | Full-width, stacked        | Comfortable single col     | Instant transitions |
| CTA Groups      | Inline                  | Inline or stack       | Stacked, primary first     | Stacked                    | N/A                 |
| Footer          | Multi-column            | Condensed columns     | Stacked sections           | Single column              | N/A                 |
| Mega Menu       | Full panel, columns     | Simplified columns    | Mobile menu pattern        | Mobile menu                | Instant             |
| Bottom Sheet    | N/A (desktop pattern)   | N/A (desktop pattern) | Sheet overlay              | Sheet overlay              | Instant             |
| Large Media     | 50–70vh, full-width     | 45–60vh               | 40–50vh                    | 40–50vh                    | Static poster       |
| Process Mosaic  | 3–4 columns             | 2 columns             | 1-col or horizontal scroll | 1-col stacked              | All visible         |
| Capability Grid | Multi-col editorial     | 2 columns             | 1 column                   | 1 column                   | All visible         |
| Quote           | Centered, ~640px max    | Centered, ~560px      | Full-width + padding       | Full-width + padding       | N/A                 |
| Dark Block      | Full-width dark         | Full-width dark       | Full-width dark            | Full-width dark            | All visible         |
| Tables          | Full table              | Full or scroll        | Horizontal scroll          | Scroll, sticky col 1       | N/A                 |

---

## 5. Fluid Scaling Principles

### 5.1 Typography

Type scales smoothly between breakpoints using viewport-relative or clamp-based sizing. No abrupt jumps at breakpoint boundaries. The type system (05C) defines the scale; this document defines how it flows.

**Example scaling logic (not prescriptive values):**

- Hero headline: scales from 48px (at 360px) to 120px+ (at 1536px)
- Section heading: scales from 28px to 48px
- Body text: remains 16–18px across all viewports (body text does not scale dramatically)
- Micro text: remains 12–14px

### 5.2 Spacing

Spacing scales proportionally:

- Section padding: 48px (mobile) → 80–120px (desktop)
- Component gaps: 12px (mobile) → 24–32px (desktop)
- Page padding: 16px (mobile/360px) → 24–40px (tablet) → 40–80px (desktop)

### 5.3 Grid

The grid (05D) is fluid. Columns resize, gaps adjust, and content reflows without breakpoint-specific overrides. Use CSS grid with `auto-fit` / `minmax()` patterns to achieve natural reflow.

### 5.4 Images & Media

- Images scale proportionally within their containers
- `object-fit: cover` for fixed-aspect-ratio containers
- `max-width: 100%` on all images
- Do not stretch images beyond their intrinsic resolution
- Serve appropriately sized images per viewport (responsive images / srcset)

---

## 6. Orientation Considerations

| Orientation        | Behavior                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Portrait (default) | All mobile layouts designed for portrait                                                                                |
| Landscape mobile   | May show tablet-adjacent layouts for some components. Hero may expand. Cards may show 2 columns if width exceeds ~900px |
| Landscape tablet   | Desktop-adjacent layouts. Navigation may show horizontal links. Cards may show 2–3 columns                              |

The design does not target orientation specifically — it responds to available width. Landscape mobile simply provides more width, so the fluid layout naturally adapts.

---

## 7. Edge Cases

### 7.1 Foldable Devices

- Layout responds to actual viewport width, not device type
- When a foldable unfolds mid-session, layout reflows smoothly
- No content loss during reflow

### 7.2 Split Screen / Multitasking

- OS-level split screen reduces viewport width
- Fluid layout handles arbitrary widths between 360px and full viewport
- No minimum width above 360px — the site must work in a split-screen half

### 7.3 Dynamic Viewport (Mobile Browser Chrome)

- Use `dvh` (dynamic viewport height) for full-height sections (hero, mobile menu)
- Avoid `100vh` on mobile — browser chrome appearance/disappearance causes layout shift
- Test: does the hero section jump when mobile Safari's address bar hides/shows?

### 7.4 Very Wide Viewports (>1920px)

- Content max-width caps at ~1400–1600px for readability
- Background/edge-to-edge elements extend to viewport edge
- Do not let text lines exceed ~75 characters at any viewport width
- Ultra-wide monitors: content centered with canvas background extending to edges

---

## 8. Testing Viewports

Every page must be verified at these minimum viewports before approval:

| Viewport    | Device Representative |
| ----------- | --------------------- |
| 360 × 640   | Smallest Android      |
| 390 × 844   | iPhone 14/15          |
| 768 × 1024  | iPad portrait         |
| 1024 × 768  | iPad landscape        |
| 1280 × 800  | Small laptop          |
| 1440 × 900  | Standard laptop       |
| 1920 × 1080 | Full HD desktop       |
| 2560 × 1440 | Large desktop         |

Additionally, test at:

- 200% zoom (accessibility requirement, see 05I)
- Split screen (50% viewport on mobile and tablet)
- Landscape mobile

---

_This document defines the responsive behavior of 123.design. All components must adapt fluidly across viewports. No breakpoint is an afterthought._
