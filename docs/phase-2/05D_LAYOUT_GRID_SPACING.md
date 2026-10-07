# 05D — Layout, Grid & Spacing System

> 123.design Phase 2 Design System
> Version 1.0 — Phase 2

---

## 1. Layout Philosophy

The 123.design layout system is structured, calm, and predictable. Content breathes through generous spacing, aligns to a consistent grid, and respects the reader's eye. The system supports both wide cinematic sections and focused reading columns.

**Core principles:**

- A 4px base unit governs all spacing. Every gap, margin, and padding value is a multiple of 4.
- Section spacing is generous — the site should feel unhurried.
- The grid is a tool for alignment, not a cage. Content can span any number of columns.
- Containers control horizontal rhythm. Every text block has a maximum width.
- Arbitrary spacing values are avoided unless optical correction requires them.

---

## 2. Spacing System

### Base unit

All spacing derives from a **4px base unit**. Token values are multiples of 4.

### Spacing scale

| Token       | Value | Common usage                                                                           |
| ----------- | ----- | -------------------------------------------------------------------------------------- |
| `space-0.5` | 2px   | Hairline gap — icon-to-text optical adjustment, tight inline elements                  |
| `space-1`   | 4px   | Minimum gap between related elements (icon + label, tag padding)                       |
| `space-2`   | 8px   | Compact gap — list item spacing, form field internal padding, button icon gap          |
| `space-3`   | 12px  | Small gap — between eyebrow and heading, card internal padding (tight)                 |
| `space-4`   | 16px  | Default small gap — between related components, card padding (compact), form field gap |
| `space-5`   | 20px  | Medium-small gap — between cards in a tight grid, section sub-element spacing          |
| `space-6`   | 24px  | Default medium gap — grid column gap, between component groups                         |
| `space-8`   | 32px  | Medium-large gap — between major component groups, card padding (standard)             |
| `space-10`  | 40px  | Large gap — between content blocks within a section                                    |
| `space-12`  | 48px  | Extra-large gap — between major content areas                                          |
| `space-16`  | 64px  | Section sub-divider — between modules within a major section                           |
| `space-20`  | 80px  | Section spacing — smaller section separation                                           |
| `space-24`  | 96px  | Section spacing — standard section separation                                          |
| `space-30`  | 120px | Major section spacing — primary section separation (desktop)                           |
| `space-36`  | 144px | Major section spacing — generous section separation                                    |
| `space-40`  | 160px | Large section spacing — hero to first content section                                  |
| `space-48`  | 192px | Maximum section spacing — hero bottom padding on large displays                        |

### Spacing rules

1. **Use tokens, not arbitrary values.** Every margin, padding, and gap must reference a spacing token.
2. **Optical corrections are permitted.** If a 24px gap looks too tight next to a large heading, a 28px or 30px value is acceptable — but document the reason.
3. **Do not mix spacing scales.** If a section uses 32px gaps between items, do not insert a 20px gap somewhere in the same section without reason.
4. **Vertical rhythm matters more than horizontal.** Horizontal gaps can vary with grid layout. Vertical gaps define the page's breathing rhythm.

---

## 3. Section Spacing

Sections are the major vertical divisions of a page. Spacing between sections establishes the page's overall rhythm.

### Section spacing scale

| Context                              | Spacing   | Notes                                                                                                              |
| ------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------ |
| **Desktop — major section gap**      | 120–176px | Primary rhythm. Used between major content sections (hero → features, features → process, etc.)                    |
| **Desktop — dense technical module** | 72–96px   | Tighter spacing for technical sections with multiple sub-modules (comparison tables, spec grids, integration maps) |
| **Tablet — major section gap**       | 88–128px  | Proportionally reduced from desktop                                                                                |
| **Tablet — dense technical module**  | 56–80px   | Proportionally reduced                                                                                             |
| **Mobile — major section gap**       | 64–96px   | Compact but still generous. Mobile should not feel cramped.                                                        |
| **Mobile — dense technical module**  | 48–64px   | Tightest standard section gap                                                                                      |

### Hero section — special case

The hero section does not follow standard section spacing. It uses custom spacing to create maximum impact:

| Property                                               | Desktop                  | Tablet   | Mobile  |
| ------------------------------------------------------ | ------------------------ | -------- | ------- |
| Top padding                                            | 96–144px                 | 72–96px  | 56–72px |
| Bottom padding                                         | 120–192px                | 88–128px | 64–96px |
| Content vertical gap (eyebrow → headline → lead → CTA) | 16–24px between elements | Same     | Same    |

**Rule:** The hero's bottom padding should feel like the content is pushing away from the hero — creating a visual "launch" into the next section.

### Section spacing — non-uniform rhythm

**Do not force identical vertical spacing everywhere.** The spacing system allows variation:

- Major transitions (hero → content, content → CTA, CTA → footer) use larger spacing (120–176px).
- Minor transitions (between cards, between sub-sections) use smaller spacing (32–64px).
- Dense technical modules use tighter spacing (72–96px) because they contain more visual information per unit.

The rhythm should feel like music — varied but intentional. Not a metronome.

---

## 4. Container System

Containers control the horizontal extent of content. Every piece of content lives inside a container.

### Container tokens

| Token                  | Max width                     | Usage                                                                     |
| ---------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| `container-full`       | 100% (viewport)               | Full-bleed backgrounds, hero images, dark sections that span edge to edge |
| `container-shell`      | 1440px                        | Outermost content container. The "shell" that holds the grid.             |
| `container-content`    | 1280px                        | Standard content container. Used for most page sections.                  |
| `container-reading`    | 720px                         | Long-form text, articles, documentation. Optimized for reading comfort.   |
| `container-narrow`     | 520px                         | Focused content — single forms, confirmation messages, error states.      |
| `container-wide-media` | 1440px or viewport-controlled | Wide image galleries, video embeds, full-width diagrams                   |

### Container nesting

```
┌─── container-full (100%) ─────────────────────────────────┐
│  [ background color / image spans full width ]             │
│                                                            │
│  ┌─── container-shell (max 1440px) ───────────────────┐   │
│  │  [ outer padding creates breathing room ]            │   │
│  │                                                      │   │
│  │  ┌─── container-content (max 1280px) ───────────┐   │   │
│  │  │  [ actual content, grid, cards ]              │   │   │
│  │  └───────────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

**Rules:**

- `container-shell` and `container-content` are centered with `margin: 0 auto`.
- `container-full` sections contain a nested `container-shell` or `container-content` for their actual content.
- Never place body text directly in `container-shell` without a `container-content` or `container-reading` wrapper.
- Hero text can use `container-content` or a custom max-width up to 900px for the headline.

---

## 5. Outer Padding (Horizontal Gutters)

The space between the container edge and the viewport edge.

| Breakpoint              | Padding   | Notes                                            |
| ----------------------- | --------- | ------------------------------------------------ |
| Large desktop (≥1440px) | 40–48px   | Generous breathing room on wide screens          |
| Desktop (1280–1439px)   | 32px      | Standard padding                                 |
| Tablet (768–1279px)     | 24px      | Reduced for narrower viewports                   |
| Mobile (375–767px)      | 20px      | Standard mobile padding                          |
| Small mobile (<375px)   | 16px only | Minimum viable padding. Use only when necessary. |

**Rule:** Outer padding should feel consistent as the user scrolls. Do not change padding between sections on the same page — the horizontal edge should be a stable reference line.

---

## 6. Grid System

### Desktop grid (≥1280px)

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Columns         | 12                                                          |
| Gap             | 24–32px (use 24px for dense layouts, 32px for open layouts) |
| Column behavior | Equal-width, fluid                                          |

**Common column spans:**

| Pattern                      | Columns    | Usage                                  |
| ---------------------------- | ---------- | -------------------------------------- |
| Full width                   | 12/12      | Single-column hero, full-bleed content |
| Two equal                    | 6/6        | Feature pairs, comparison layouts      |
| Two unequal (emphasis left)  | 8/4 or 7/5 | Content + sidebar, text + media        |
| Two unequal (emphasis right) | 5/7 or 4/8 | Media + text, sidebar + content        |
| Three equal                  | 4/4/4      | Feature cards, process steps           |
| Four equal                   | 3/3/3/3    | Metric cards, integration tiles        |
| Asymmetric hero              | 7/5 or 8/4 | Headline left, media right             |

### Tablet grid (768–1279px)

| Property        | Value              |
| --------------- | ------------------ |
| Columns         | 8 (logical)        |
| Gap             | 20–24px            |
| Column behavior | Equal-width, fluid |

**Common tablet patterns:**

| Pattern         | Columns                                | Usage                         |
| --------------- | -------------------------------------- | ----------------------------- |
| Full width      | 8/8                                    | Single-column content         |
| Two equal       | 4/4                                    | Side-by-side cards            |
| Two unequal     | 5/3 or 3/5                             | Text + media                  |
| Three (wrapped) | 4/4 + 8(full) or 3/3/3 (with overflow) | Three cards — may wrap to 2+1 |

### Mobile grid (<768px)

| Property        | Value                              |
| --------------- | ---------------------------------- |
| Columns         | 4 (logical)                        |
| Gap             | 16px                               |
| Column behavior | Most content becomes single-column |

**Mobile layout rules:**

- Nearly all content stacks to a single column.
- The 4-column grid exists for edge cases: inline icon groups (2/2), small card pairs (2/2), or a 3+1 button group.
- Do not attempt multi-column text layouts on mobile.
- Cards that sit side-by-side on desktop stack vertically on mobile with 16px gap.

### Grid alignment rules

1. **Content aligns to the grid.** Every element's left and right edges should snap to a column boundary or a consistent gutter.
2. **Text within a grid cell respects the cell's padding.** Do not let text bleed outside its column.
3. **Images and media can break the grid intentionally.** A hero image may span 8 columns while the text spans 4 — this is an intentional asymmetry, not a misalignment.
4. **Full-bleed elements escape the grid.** Backgrounds, dark sections, and edge-to-edge media use `container-full` and are not constrained by grid columns.

---

## 7. Border Radius

### Radius tokens

| Token          | Value | Usage                                                      |
| -------------- | ----- | ---------------------------------------------------------- |
| `radius-xs`    | 3px   | Tiny elements — tag corners, small badge, inline indicator |
| `radius-sm`    | 6px   | Buttons, form inputs, small interactive elements           |
| `radius-md`    | 10px  | Cards, panels, medium containers                           |
| `radius-lg`    | 16px  | Large containers, modal dialogs, feature sections          |
| `radius-round` | 999px | Pills, circular avatars, round tags, capsule buttons       |

### Component radius mapping

| Component        | Radius                               | Notes                                                             |
| ---------------- | ------------------------------------ | ----------------------------------------------------------------- |
| Primary button   | 4–6px (`radius-sm`)                  | Slightly squared — confident, not playful                         |
| Secondary button | 4–6px (`radius-sm`)                  | Matches primary                                                   |
| Ghost button     | 4–6px (`radius-sm`)                  | Matches primary                                                   |
| Form input       | 6px (`radius-sm`)                    | Consistent with buttons                                           |
| Form select      | 6px (`radius-sm`)                    | Consistent with buttons                                           |
| Card             | 8–10px (`radius-md`)                 | Subtle rounding — not pill-like                                   |
| Modal / dialog   | 10–16px (`radius-md` to `radius-lg`) | Slightly more rounded than cards                                  |
| Image / media    | 0–8px                                | Can be square (0) or slightly rounded (6–8px). Match the context. |
| Tag / badge      | `radius-round` or `radius-xs`        | Round only for pill-shaped tags. Otherwise use `radius-xs`.       |
| Tooltip          | 6px (`radius-sm`)                    | Matches small interactive elements                                |
| Dropdown menu    | 8–10px (`radius-md`)                 | Matches card radius                                               |

### Radius rules

1. **Do not make every container 24–32px rounded.** Excessive rounding looks playful and weak — the opposite of the brand's industrial/editorial character.
2. **Buttons are slightly rounded, not round.** 4–6px. Not pill-shaped (unless the design specifically calls for a capsule CTA).
3. **Cards are 8–10px.** Enough to soften the corner, not enough to look like a sticker.
4. **Images can be square.** A 0px radius on photography is acceptable and often preferable — it lets the image content define the shape.
5. **Radius should be consistent within a component family.** All buttons share the same radius. All cards share the same radius. Do not mix within a family.

---

## 8. Border System

### Border tokens

| Token            | Value                                | Usage                                     |
| ---------------- | ------------------------------------ | ----------------------------------------- |
| `border-default` | `1px solid var(--color-line)`        | Standard divider, card edge, table rule   |
| `border-strong`  | `1px solid var(--color-line-strong)` | Active field border, emphasized separator |
| `border-accent`  | `2px solid var(--color-accent)`      | Active state indicator, focus ring detail |
| `border-error`   | `1px solid var(--color-error)`       | Error state field border                  |
| `border-success` | `1px solid var(--color-success)`     | Success state field border                |

### Border patterns

| Pattern               | Specification                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| Card edge             | `border-default` on all four sides. Or: `border-default` on top only, with no other edges (minimal). |
| Section separator     | `border-default` — full-width horizontal rule between sections                                       |
| Strong separator      | `border-strong` — used sparingly for major structural divisions                                      |
| Technical module rule | `border-default` or `border-strong` — top and/or bottom rule framing a technical block               |
| Grid shared border    | Adjacent grid items share a single `border-default` between them (not double borders)                |
| Active field          | `border-strong` or `border-accent` — 2px accent ring for focus                                       |
| Table row             | `border-default` bottom rule on each row                                                             |

### Border rules

1. **Default borders are 1px.** Never use 2px for standard dividers — that is what `border-strong` and `border-accent` are for.
2. **Avoid thick card outlines.** Cards should not have 2px or 3px borders. If a card needs emphasis, use a subtle background change or a top-accent rule.
3. **Grid items share borders.** When two cards sit side by side, the border between them is a single 1px line — not 2px (1px + 1px).
4. **Borders use the `line` token by default.** Do not hardcode border colors. Use `line` for default, `line-strong` for emphasis.

---

## 9. Shadow System

Shadows are rare in the 123.design system. The design relies on color contrast and border rules for depth — not drop shadows.

### Shadow tokens

| Token         | Value                                | Usage                                                     |
| ------------- | ------------------------------------ | --------------------------------------------------------- |
| `shadow-none` | `none`                               | Default cards, panels, and containers. No shadow.         |
| `shadow-sm`   | `0 2px 8px rgba(17, 17, 15, 0.06)`   | Subtle lift — dropdown menus, tooltips                    |
| `shadow-md`   | `0 12px 40px rgba(17, 17, 15, 0.10)` | Floating elements — modals, dialogs, popovers             |
| `shadow-lg`   | `0 24px 64px rgba(17, 17, 15, 0.14)` | Maximum elevation — full-screen overlays, critical modals |

### Shadow rules

1. **Cards have no shadow by default.** Cards are distinguished by background color (`surface` on `canvas`) and optional border — not by shadow.
2. **Only floating elements get shadows.** Dropdowns, tooltips, modals, and popovers exist above the page surface and need shadow to communicate elevation.
3. **No dramatic drop shadows.** The maximum shadow uses 14% opacity. Nothing should look like it is casting a harsh shadow.
4. **Shadow color uses `ink` base.** All shadows use `rgba(17, 17, 15, ...)` — matching the `ink` color — not pure black or gray.
5. **Do not stack shadows.** One shadow per element. No multi-layer shadow compositions.

---

## 10. Z-Index Scale

The z-index system uses a controlled scale to prevent layering conflicts.

| Token        | Value | Usage                                                                |
| ------------ | ----- | -------------------------------------------------------------------- |
| `z-base`     | 0     | Default content layer                                                |
| `z-raised`   | 10    | Slightly elevated content — sticky sub-navigation, highlighted cards |
| `z-sticky`   | 100   | Sticky headers, sticky sidebars, persistent navigation               |
| `z-dropdown` | 200   | Dropdown menus, select popups, autocomplete lists                    |
| `z-overlay`  | 300   | Semi-transparent overlays, backdrop dimming                          |
| `z-modal`    | 400   | Modal dialogs, lightboxes, full-screen panels                        |
| `z-toast`    | 500   | Toast notifications, snackbar messages — always on top               |

### Z-index rules

1. **Use tokens, never arbitrary values.** `z-index: 999999` is forbidden. If the highest token (500) is not enough, the layering architecture needs rethinking.
2. **Each layer is significantly above the previous.** The gaps between levels (0 → 10 → 100 → 200 → 300 → 400 → 500) provide room for intermediate layers if needed.
3. **Modals always sit above overlays.** When a modal opens, the overlay is at 300 and the modal is at 400. Never invert this.
4. **Toasts are always on top.** Toast notifications at 500 are the last visible layer. No content should appear above a toast.
5. **Sticky navigation at 100 should not compete with dropdowns at 200.** If a dropdown opens from within a sticky header, the dropdown (200) correctly appears above the header (100).

---

## 11. Alignment Rules

### Horizontal alignment

| Context               | Alignment                                     | Notes                                                               |
| --------------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| Page content          | Left-aligned by default                       | Editorial style — left-aligned text is easier to read               |
| Hero headlines        | Left-aligned                                  | Strong editorial position. Center only for specific campaign pages. |
| Hero supporting text  | Left-aligned                                  | Matches headline                                                    |
| Navigation items      | Left-aligned (logo) + Right-aligned (actions) | Standard nav pattern                                                |
| Card text             | Left-aligned                                  | Consistent with page content                                        |
| Metric / stat numbers | Left-aligned within their column              | Numbers align to the left edge                                      |
| Table content         | Left-aligned (text), Right-aligned (numbers)  | Standard data presentation                                          |
| CTA buttons           | Left-aligned within their container           | Editorial style. Never center the primary CTA unless in a modal.    |
| Modal content         | Center-aligned                                | Modals are centered on screen; content within can be left or center |

### Vertical alignment

| Context              | Alignment                                   | Notes                                                                                    |
| -------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Grid cards           | Top-aligned                                 | Cards in a row align to the top. Do not vertically center cards.                         |
| Icon + text (inline) | Center-aligned (icon to cap-height of text) | Optical center — icon center aligns to the text's visual center, not mathematical center |
| Table cells          | Middle-aligned                              | Standard table behavior                                                                  |
| Navigation items     | Center-aligned vertically                   | Items center within the nav bar height                                                   |

---

## 12. Text Width Rules

Controlling text width is critical for readability. These rules apply in addition to the container system.

| Context                      | Max width                          | Enforcement                              |
| ---------------------------- | ---------------------------------- | ---------------------------------------- |
| Body paragraphs              | 680–760px                          | `max-width` on the text container        |
| Hero supporting text         | 520–650px                          | `max-width` on the lead/intro element    |
| Article / long-form text     | 680–720px                          | `container-reading`                      |
| Technical text with diagrams | Up to `container-content` (1280px) | Only when text is interleaved with media |
| Single-line headings         | No max-width                       | Headings can span full container width   |
| Card body text               | Constrained by card width          | Cards naturally limit width              |
| Form labels and inputs       | Up to 520px                        | Forms should not sprawl horizontally     |

**Absolute rule:** Never allow body text to span 1200px+ without a `max-width` constraint. Long line lengths destroy readability.

---

## 13. Common Layout Patterns

### Pattern: Standard section

```
┌── container-full ──────────────────────────────────────┐
│  padding-top: 120–176px                                │
│  padding-bottom: 120–176px                             │
│                                                        │
│  ┌── container-content (max 1280px) ──────────────┐    │
│  │                                                 │    │
│  │  [Eyebrow]                                      │    │
│  │  [Heading — max ~800px]                         │    │
│  │  [Lead text — max ~650px]                       │    │
│  │                                                 │    │
│  │  [12-col grid: content cards / media]           │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────┘
```

### Pattern: Hero section

```
┌── container-full ──────────────────────────────────────┐
│  padding-top: 96–144px                                 │
│                                                        │
│  ┌── container-content (max 1280px) ──────────────┐    │
│  │                                                 │    │
│  │  [Eyebrow + optional accent marker]             │    │
│  │  gap: 16px                                      │    │
│  │  [DISPLAY XL — headline]                        │    │
│  │  gap: 16–24px                                   │    │
│  │  [Lead text — max ~600px]                       │    │
│  │  gap: 24–32px                                   │    │
│  │  [Primary CTA] [Secondary CTA]                  │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                        │
│  padding-bottom: 120–192px                             │
└────────────────────────────────────────────────────────┘
```

### Pattern: Two-column feature

```
┌── container-content (max 1280px) ──────────────────┐
│                                                    │
│  ┌── 12-col grid ─────────────────────────────┐    │
│  │                                             │    │
│  │  ┌── 7 cols ───┐  gap  ┌── 5 cols ───┐     │    │
│  │  │             │  32px │             │     │    │
│  │  │  Heading    │       │  [Media /   │     │    │
│  │  │  Body text  │       │   Image]    │     │    │
│  │  │  CTA        │       │             │     │    │
│  │  │             │       │             │     │    │
│  │  └─────────────┘       └─────────────┘     │    │
│  │                                             │    │
│  └─────────────────────────────────────────────┘    │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Pattern: Card grid

```
┌── container-content (max 1280px) ──────────────────┐
│                                                    │
│  ┌── 12-col grid, gap 24–32px ────────────────┐    │
│  │                                             │    │
│  │  ┌─ 4 col ─┐ ┌─ 4 col ─┐ ┌─ 4 col ─┐      │    │
│  │  │ Card 1  │ │ Card 2  │ │ Card 3  │      │    │
│  │  └─────────┘ └─────────┘ └─────────┘      │    │
│  │                                             │    │
│  └─────────────────────────────────────────────┘    │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Pattern: Dense technical module

```
┌── container-full (dark background) ────────────────┐
│  padding-top: 72–96px                              │
│  padding-bottom: 72–96px                           │
│                                                    │
│  ┌── container-content (max 1280px) ──────────┐    │
│  │                                             │    │
│  │  [Eyebrow] [Heading]                        │    │
│  │  ── border-strong separator ──              │    │
│  │  [Technical grid — 12-col, gap 24px]        │    │
│  │  ── border-strong separator ──              │    │
│  │  [Technical details / specs]                │    │
│  │                                             │    │
│  └─────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────┘
```

---

## 14. Responsive Behavior Summary

| Breakpoint          | Grid                       | Outer padding | Section spacing | Container behavior                |
| ------------------- | -------------------------- | ------------- | --------------- | --------------------------------- |
| ≥1280px (desktop)   | 12-col, 24–32px gap        | 32–48px       | 120–176px       | Shell 1440px, Content 1280px      |
| 768–1279px (tablet) | 8-col logical, 20–24px gap | 24px          | 88–128px        | Content 100% minus 48px padding   |
| <768px (mobile)     | 4-col logical, 16px gap    | 16–20px       | 64–96px         | 100% minus padding, single column |

### Responsive transition rules

1. **Grid columns collapse gracefully.** 12-col → 8-col → single column. Cards that sit 3-across on desktop become 2-across on tablet, then 1-across on mobile.
2. **Section spacing scales proportionally.** It does not halve — it reduces by approximately 30–40%.
3. **Outer padding adjusts in steps.** 48px → 32px → 24px → 20px → 16px. Not fluid — stepped.
4. **Container max-widths remain fixed.** A `container-content` at 1280px does not shrink on tablet — it becomes 100% of the available width minus padding.
5. **Hero remains dramatic at every size.** The mobile hero uses 48–60px type and 64–96px section padding. It should still feel like a hero, not a paragraph.

---

## 15. Implementation Notes

- All spacing values must reference tokens — no arbitrary pixel values in component code.
- Grid implementations should use CSS Grid with token-based `gap` values.
- Container tokens should map to CSS custom properties (e.g., `var(--container-content)` → `max-width: 1280px`).
- Z-index tokens must be used for all layering — no arbitrary `z-index` values.
- Border radius tokens must be used consistently — no per-component radius decisions outside the token mapping.
- Test all layouts at: 375px, 768px, 1024px, 1280px, 1440px, and 1920px viewport widths.

---

_This document is the source of truth for layout, grid, and spacing across 123.design. All spatial decisions should be resolved against this system._
