# 05B — Color System

> 123.design Phase 2 Design System
> Version 1.0 — Phase 2

---

## 1. Color Philosophy

The 123.design color system is restrained and intentional. The palette is built on warm neutrals — off-whites, graphites, and muted stone tones — with a single high-energy accent: Signal Orange. Color is not decoration. It carries meaning, directs attention, and reinforces the industrial-editorial character of the brand.

**Core principles:**

- Warm neutrals dominate. The site should feel calm, confident, and grounded.
- Dark surfaces create depth and contrast, not heaviness.
- Signal Orange is scarce by design. When it appears, it means something.
- Semantic colors are reserved for system communication — never decorative.
- Real product imagery supplies the majority of visual color beyond the palette.

---

## 2. Light Foundation Tokens

The light theme is the default. These tokens define the base visual environment.

| Token           | Hex       | Role                                                                        |
| --------------- | --------- | --------------------------------------------------------------------------- |
| `canvas`        | `#F4F1EA` | Page-level background. The warm off-white that underlies the entire site.   |
| `canvas-subtle` | `#F8F6F1` | Slightly lighter variant for nested or secondary background areas.          |
| `surface`       | `#FFFFFF` | Card, panel, and elevated surface background.                               |
| `surface-muted` | `#ECE9E2` | Recessed or secondary surface — input fields, disabled areas, inset panels. |
| `ink`           | `#11110F` | Primary text color. Near-black with warm undertone.                         |
| `ink-secondary` | `#4E504B` | Secondary text — descriptions, supporting copy, captions.                   |
| `ink-muted`     | `#777970` | Tertiary text — metadata, labels, placeholders, helper text.                |
| `line`          | `#D6D3CB` | Default border and divider. 1px separators, card edges, table rules.        |
| `line-strong`   | `#A9A69D` | Emphasized border — active field outlines, stronger separators.             |

### Light token relationships

```
canvas (#F4F1EA)
  └─ canvas-subtle (#F8F6F1) — lighter, for subtle differentiation
surface (#FFFFFF)
  └─ surface-muted (#ECE9E2) — recessed / inset areas

ink (#11110F)
  └─ ink-secondary (#4E504B) — one step lighter
      └─ ink-muted (#777970) — two steps lighter

line (#D6D3CB)
  └─ line-strong (#A9A69D) — emphasized border
```

### Usage guidance — light mode

- **Page background:** Use `canvas` as the default body/section background. Use `canvas-subtle` only when a section needs to be visually distinguished from its surroundings without adding weight.
- **Cards and panels:** Use `surface` for cards, modals, and elevated containers. Use `surface-muted` for inset areas within cards (e.g., code blocks, embedded previews, disabled states).
- **Text hierarchy:** `ink` for headings and primary body. `ink-secondary` for descriptions and supporting text. `ink-muted` for metadata, timestamps, labels, and placeholder text.
- **Borders and dividers:** `line` for standard 1px rules. `line-strong` for active states, focused form fields, or structural separators that need more presence.

---

## 3. Dark Foundation Tokens

The dark theme is used for specific high-impact sections, technical modules, manufacturing contexts, and the footer. Dark surfaces create contrast and visual weight. Dark styling is contextual/sectional at launch. A global dark theme is NOT part of launch scope.

| Token                   | Hex       | Role                                                                    |
| ----------------------- | --------- | ----------------------------------------------------------------------- |
| `dark-canvas`           | `#11110F` | Page-level dark background. The deepest surface in the system.          |
| `dark-surface`          | `#191A17` | Card and panel background in dark context. Slightly lifted from canvas. |
| `dark-surface-elevated` | `#22231F` | Elevated elements in dark context — dropdowns, popovers, tooltips.      |
| `dark-ink`              | `#F5F2EA` | Primary text in dark context. Warm off-white, not pure white.           |
| `dark-ink-secondary`    | `#B7B6AF` | Secondary text in dark context — descriptions, captions.                |
| `dark-line`             | `#363732` | Border and divider in dark context.                                     |

### Dark token relationships

```
dark-canvas (#11110F)
  └─ dark-surface (#191A17) — lifted surface
      └─ dark-surface-elevated (#22231F) — floating / interactive surface

dark-ink (#F5F2EA)
  └─ dark-ink-secondary (#B7B6AF) — reduced emphasis text

dark-line (#363732) — subtle separator on dark backgrounds
```

### Usage guidance — dark mode

- **Dark backgrounds:** Use `dark-canvas` for full-bleed dark sections. Do not mix `dark-canvas` and `canvas` within the same viewport region — commit to one foundation per section.
- **Dark cards:** Use `dark-surface` for cards and panels. Use `dark-surface-elevated` for elements that float above (dropdowns, tooltips, modals within dark sections).
- **Dark text:** `dark-ink` for headings and primary content. `dark-ink-secondary` for supporting text. Never use pure `#FFFFFF` for large text areas in dark mode — the warm off-white reduces eye strain and maintains brand warmth.
- **Dark borders:** `dark-line` for all separators. This token is deliberately low-contrast to avoid visual noise on dark backgrounds.

---

## 4. Accent Color — Signal Orange

Signal Orange is the single accent color in the system. It is high-energy, attention-directing, and deliberately scarce.

| Token                 | Hex       | Role                                                                                                 |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------- |
| `accent`              | `#F05A36` | Primary accent. Active states, stage indicators, small graphic emphasis, technical callouts.         |
| `accent-hover`        | `#D94A29` | Hover/pressed state for accent-colored interactive elements.                                         |
| `accent-soft`         | `#F8D9CF` | Light tint for accent backgrounds — tags, badges, highlighted rows, soft callout fills.              |
| `accent-dark-context` | `#FF7554` | Lighter variant for dark backgrounds. Compensates for reduced perceived brightness on dark surfaces. |

### Accent — approved uses

| Use case                           | Token         | Notes                                              |
| ---------------------------------- | ------------- | -------------------------------------------------- |
| Active stage node / indicator      | `accent`      | Small geometric marker — dot, line, ring           |
| Technical callout marker           | `accent`      | Left-border rule on callout blocks                 |
| Eyebrow accent bar                 | `accent`      | Small horizontal rule above section headings       |
| Active navigation underline        | `accent`      | 2px bottom rule on active nav item                 |
| Inline link hover underline        | `accent`      | Subtle hover state on text links                   |
| Icon on active state               | `accent`      | Single icon indicating current/active step         |
| Tag / badge background             | `accent-soft` | Low-intensity background for status tags           |
| Small graphic area in illustration | `accent`      | Geometric element within technical diagrams        |
| CTA underline or accent detail     | `accent`      | Not the full button — a detail within or beside it |

### Accent — prohibited uses

| Do NOT use orange for              | Reason                                                   |
| ---------------------------------- | -------------------------------------------------------- |
| Large body text color              | Fails WCAG AA contrast on warm white backgrounds         |
| Full-page or large-area background | Overwhelms the palette, destroys calm                    |
| Every CTA button fill              | Primary buttons should be near-black with off-white text |
| Every icon in a set                | Dilutes meaning — if everything is orange, nothing is    |
| All heading colors                 | Headings use `ink`, not accent                           |
| Decorative gradient fills          | Accent is not a decorative palette                       |
| Error or success indication        | Use semantic colors for system meaning                   |

### Accent ratio rule

Signal Orange must not exceed **5% of the total visual surface area** on any page. In practice:

- A single page should have 2–5 accent touches, not 20.
- If a section feels "loud," remove accent elements until it feels intentional.
- When in doubt, leave it out. The accent earns its impact through scarcity.

---

## 5. Semantic Colors

Semantic colors communicate system state. They are not brand colors and must not be used decoratively.

| Token     | Hex       | Meaning                                             |
| --------- | --------- | --------------------------------------------------- |
| `success` | `#287A53` | Operation completed. Positive outcome. Valid input. |
| `warning` | `#A66A19` | Attention needed. Non-blocking caution.             |
| `error`   | `#B9382D` | Operation failed. Invalid input. Blocking problem.  |
| `info`    | `#386A8E` | Neutral information. Contextual guidance.           |

### Semantic color usage rules

1. **Semantic colors carry meaning only.** A green checkmark means success. A green decorative circle does not.
2. **Do not mix semantic and accent colors.** If a stage indicator is orange, it is "active/current" — not "successful." Success is green.
3. **Error text must meet WCAG AA.** `error` (#B9382D) on `surface` (#FFFFFF) passes AA for large text. For small text, pair with a darker variant or use on `surface` only with sufficient weight.
4. **Inline validation:** Use `error` for the message text and a 1px `error` border on the field. Do not fill the entire field background.
5. **Success confirmation:** Use `success` for the confirmation message and optional icon. Do not create large green success banners.
6. **Warning and info:** Use as text color or left-border rule on callout blocks. Do not create large colored background areas.

### Semantic — light context

| Element        | Color                         |
| -------------- | ----------------------------- |
| Success text   | `success` (#287A53)           |
| Success icon   | `success` (#287A53)           |
| Success border | `success` at 30% opacity      |
| Error text     | `error` (#B9382D)             |
| Error icon     | `error` (#B9382D)             |
| Error border   | `error` (#B9382D) — 1px solid |
| Warning text   | `warning` (#A66A19)           |
| Info text      | `info` (#386A8E)              |

### Semantic — dark context

On dark surfaces, semantic colors may need slight brightness adjustment. Use the base semantic token if it passes AA against `dark-surface`. If not, lighten by 10–15% for text applications.

---

## 6. Color Usage Ratios

Every page in the system should approximate these ratios:

| Category                         | Target ratio | What counts                                                  |
| -------------------------------- | ------------ | ------------------------------------------------------------ |
| Warm neutral / white             | 65–75%       | Canvas, surface, body text areas, whitespace                 |
| Black / graphite / dark surfaces | 20–30%       | Dark sections, headings, primary buttons, footer             |
| Signal Orange                    | 5% or less   | Accent touches only (see Section 4)                          |
| Product imagery color            | Variable     | Real photography and media supply additional color naturally |

### How to evaluate ratio compliance

- **Squint test:** If you squint at the page and orange dominates, the ratio is wrong.
- **Screenshot desaturation:** Desaturate a screenshot. If the accent areas are as prominent as the content areas, there is too much accent.
- **Count the touches:** A typical section should have 1–3 accent elements. A full page should have no more than 5–8.

---

## 7. Contrast Rules

All text and interactive control combinations must target **WCAG 2.2 Level AA** minimum.

### Minimum contrast ratios

| Content type                         | Minimum ratio | Standard |
| ------------------------------------ | ------------- | -------- |
| Normal text (below 18px / 14px bold) | 4.5:1         | WCAG AA  |
| Large text (18px+ / 14px bold+)      | 3:1           | WCAG AA  |
| UI components and icons              | 3:1           | WCAG AA  |
| Non-text decorative elements         | No minimum    | —        |

### Verified combinations — light mode

| Foreground                | Background             | Ratio   | Passes AA (normal) | Passes AA (large) |
| ------------------------- | ---------------------- | ------- | ------------------ | ----------------- |
| `ink` (#11110F)           | `canvas` (#F4F1EA)     | ~15.5:1 | Yes                | Yes               |
| `ink` (#11110F)           | `surface` (#FFFFFF)    | ~17.4:1 | Yes                | Yes               |
| `ink-secondary` (#4E504B) | `canvas` (#F4F1EA)     | ~7.2:1  | Yes                | Yes               |
| `ink-secondary` (#4E504B) | `surface` (#FFFFFF)    | ~8.1:1  | Yes                | Yes               |
| `ink-muted` (#777970)     | `canvas` (#F4F1EA)     | ~4.0:1  | No                 | Yes               |
| `ink-muted` (#777970)     | `surface` (#FFFFFF)    | ~4.5:1  | Yes                | Yes               |
| `accent` (#F05A36)        | `canvas` (#F4F1EA)     | ~3.2:1  | No                 | Yes (large only)  |
| `accent` (#F05A36)        | `surface` (#FFFFFF)    | ~3.5:1  | No                 | Yes (large only)  |
| `accent-hover` (#D94A29)  | `surface` (#FFFFFF)    | ~4.4:1  | No                 | Yes               |
| `surface` (#FFFFFF)       | `ink` (#11110F) button | ~17.4:1 | Yes                | Yes               |

### Verified combinations — dark mode

| Foreground                      | Background               | Ratio   | Passes AA (normal) | Passes AA (large) |
| ------------------------------- | ------------------------ | ------- | ------------------ | ----------------- |
| `dark-ink` (#F5F2EA)            | `dark-canvas` (#11110F)  | ~16.1:1 | Yes                | Yes               |
| `dark-ink` (#F5F2EA)            | `dark-surface` (#191A17) | ~14.2:1 | Yes                | Yes               |
| `dark-ink-secondary` (#B7B6AF)  | `dark-canvas` (#11110F)  | ~8.5:1  | Yes                | Yes               |
| `dark-ink-secondary` (#B7B6AF)  | `dark-surface` (#191A17) | ~7.4:1  | Yes                | Yes               |
| `accent-dark-context` (#FF7554) | `dark-canvas` (#11110F)  | ~5.3:1  | Yes                | Yes               |
| `accent-dark-context` (#FF7554) | `dark-surface` (#191A17) | ~4.6:1  | Yes                | Yes               |

### Critical contrast rule — accent orange

**Accent orange (#F05A36) does NOT pass WCAG AA for normal-size text on warm white or pure white backgrounds.** It passes only for large text (18px+ regular, 14px+ bold).

Therefore:

- Do NOT use `accent` for body text, captions, labels, or any text below 18px.
- DO use `accent` for: large headings (if contrast-verified), decorative markers, icons at 24px+, active-state lines, stage nodes, focus rings.
- In dark context, use `accent-dark-context` (#FF7554) which passes AA for normal text on `dark-canvas`.

---

## 8. Button Color Patterns

### Primary button

| Property         | Value                             |
| ---------------- | --------------------------------- |
| Background       | `ink` (#11110F)                   |
| Text             | `surface` (#FFFFFF)               |
| Hover background | `#2A2B27` (slightly lifted black) |
| Border           | None                              |
| Radius           | 4–6px                             |

### Secondary button

| Property     | Value                             |
| ------------ | --------------------------------- |
| Background   | Transparent                       |
| Text         | `ink` (#11110F)                   |
| Border       | 1px solid `line-strong` (#A9A69D) |
| Hover border | `ink` (#11110F)                   |
| Radius       | 4–6px                             |

### Ghost button

| Property         | Value                     |
| ---------------- | ------------------------- |
| Background       | Transparent               |
| Text             | `ink-secondary` (#4E504B) |
| Border           | None                      |
| Hover text       | `ink` (#11110F)           |
| Hover background | `surface-muted` (#ECE9E2) |

### Accent button (rare)

| Property         | Value                                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| Background       | `accent` (#F05A36)                                                                  |
| Text             | `surface` (#FFFFFF)                                                                 |
| Hover background | `accent-hover` (#D94A29)                                                            |
| Usage            | Only when the action itself is accent-worthy — e.g., a single CTA in a dark section |

**Rule:** The majority of primary buttons across the site should be near-black background with off-white text. Accent-colored buttons should appear at most 1–2 times per page and only where the action genuinely warrants accent-level attention.

---

## 9. Do and Don't Examples

### Color application

| Do                                               | Don't                                                                  |
| ------------------------------------------------ | ---------------------------------------------------------------------- |
| Use `canvas` as the dominant page background     | Don't alternate between `canvas` and `surface` for every other section |
| Use `surface` for cards on `canvas` backgrounds  | Don't put `surface` cards on `surface` backgrounds — no contrast       |
| Use `ink-muted` for metadata and timestamps      | Don't use `ink-muted` for body copy — insufficient emphasis            |
| Use `line` for subtle 1px dividers               | Don't use `line-strong` for every divider — save it for active states  |
| Use `accent` for a single stage indicator        | Don't use `accent` for every item in a list                            |
| Use `accent-soft` as a tag background            | Don't use `accent` as a tag background — too intense                   |
| Use semantic green for success states only       | Don't use green for decorative elements or brand accents               |
| Use `dark-ink` (warm off-white) in dark sections | Don't use pure `#FFFFFF` for large text areas in dark mode             |

### Accent discipline

| Do                                               | Don't                                            |
| ------------------------------------------------ | ------------------------------------------------ |
| One accent bar above a section heading           | Orange heading text                              |
| Orange active dot in a step indicator            | Orange dots next to every list item              |
| Orange underline on active nav item              | Orange background on every nav item              |
| Orange focus ring on the active input            | Orange border on every input                     |
| Orange icon for the current step                 | Orange icons throughout the entire icon set      |
| Orange as a small geometric element in a diagram | Orange gradient across a full-width hero section |

### Dark mode

| Do                                                | Don't                                                  |
| ------------------------------------------------- | ------------------------------------------------------ |
| Commit to `dark-canvas` for the full dark section | Mix `dark-canvas` and `canvas` in the same viewport    |
| Use `dark-surface` for cards in dark sections     | Use pure black (#000000) for any surface               |
| Use `dark-ink-secondary` for descriptions         | Use `dark-ink` for everything — create hierarchy       |
| Use `accent-dark-context` for accent in dark mode | Use `accent` (#F05A36) on dark backgrounds — too dark  |
| Keep `dark-line` subtle                           | Make dark borders high-contrast — creates visual noise |

---

## 10. Color Token Naming Convention

All color tokens follow a consistent naming pattern:

```
{category}-{property}
```

| Category           | Examples                                                       |
| ------------------ | -------------------------------------------------------------- |
| Foundation (light) | `canvas`, `surface`, `ink`, `line`                             |
| Foundation (dark)  | `dark-canvas`, `dark-surface`, `dark-ink`, `dark-line`         |
| Accent             | `accent`, `accent-hover`, `accent-soft`, `accent-dark-context` |
| Semantic           | `success`, `warning`, `error`, `info`                          |

**Naming rules:**

- Tokens are named by role, not by color value. Never name a token `orange` or `gray-400`.
- Dark tokens are prefixed with `dark-` to distinguish from light counterparts.
- Modifiers (`-hover`, `-soft`, `-dark-context`) describe the token's relationship to its parent.
- Do not create ad-hoc color values in component code. All colors must reference a token.

---

## 11. Opacity and Overlay Patterns

In addition to solid tokens, the system uses controlled opacity for specific patterns:

| Pattern                 | Value                     | Usage                                       |
| ----------------------- | ------------------------- | ------------------------------------------- |
| Modal overlay           | `rgba(17, 17, 15, 0.50)`  | Behind modals and dialogs                   |
| Hover overlay on images | `rgba(17, 17, 15, 0.08)`  | Subtle darken on image hover                |
| Disabled overlay        | `rgba(17, 17, 15, 0.40)`  | Over disabled interactive elements          |
| Skeleton loading        | `rgba(17, 17, 15, 0.06)`  | Skeleton background fill                    |
| Accent tint             | `rgba(240, 90, 54, 0.10)` | Soft accent background for rows, highlights |

**Rule:** Do not introduce new opacity values. Use the tokens above for consistency.

---

## 12. Implementation Notes

- All color values must be consumed through design tokens — never hardcoded hex values in component files.
- Token names should map directly to CSS custom properties (e.g., `var(--color-canvas)`, `var(--color-accent)`).
- When the dark theme is active, token resolution should swap automatically (e.g., `var(--color-canvas)` resolves to `#F4F1EA` in light, `#11110F` in dark).
- Semantic tokens should also participate in theme switching.
- Test all color combinations in both light and dark contexts before shipping.

---

_This document is the source of truth for color usage across 123.design. Questions about color application should be resolved against this document first._
