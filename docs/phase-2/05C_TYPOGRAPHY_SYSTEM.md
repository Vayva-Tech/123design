# 05C — Typography System

> 123.design Phase 2 Design System
> Version 1.0 — Phase 2

---

## 1. Typography Philosophy

Typography is the primary visual material of 123.design. The site communicates through words — confident, specific, active. The type system must support two modes: **editorial impact** (large display type that commands attention) and **frictionless reading** (body copy that disappears into meaning).

**Core principles:**

- Two families only. No decorative fonts. No exceptions.
- Tight tracking on display. Generous tracking on body. Never the reverse.
- Uppercase is a tool for metadata and labels — not for entire headings.
- Body copy never drops below 16px. Readability is non-negotiable.
- The homepage hero must remain dramatic at every viewport width — including mobile.

---

## 2. Font Families

| Role      | Family          | Variant                 | Notes                                                                                               |
| --------- | --------------- | ----------------------- | --------------------------------------------------------------------------------------------------- |
| Display   | **Inter Tight** | Variable (wght 100–900) | Headlines, hero text, display moments. Tighter letter-spacing gives industrial/editorial character. |
| Text / UI | **Inter**       | Variable (wght 100–900) | Body copy, UI labels, navigation, captions, form text. Neutral, highly legible, low-friction.       |

### Why these two

- **Inter Tight** is a distinct face from Inter — the tighter metrics give display text a stronger, more confident presence without needing a completely different typeface.
- **Inter** is one of the most legible sans-serif families for screen reading. It disappears into the content.
- Using variable font files reduces network requests and enables fluid weight adjustments.
- No decorative display font is needed. The editorial character comes from size, weight, tracking, and tight line-height — not from a novelty face.

### Font loading

- Load both families as variable-weight WOFF2 files.
- Use `font-display: swap` to prevent invisible text during load.
- Preload the primary weight ranges to avoid layout shift.

---

## 3. Typographic Character

### Display (Inter Tight)

| Attribute   | Value                                                             |
| ----------- | ----------------------------------------------------------------- |
| Mood        | Tight, strong, modern, industrial/editorial, confident            |
| Tracking    | Slightly tight: -0.045em to -0.02em depending on size             |
| Line height | Tight: 0.90–1.05 depending on size                                |
| Weight      | 500–600 for headlines. 600–700 for hero display.                  |
| Case        | Sentence case by default. Uppercase only for eyebrows and labels. |

### Body / UI (Inter)

| Attribute   | Value                                                                                  |
| ----------- | -------------------------------------------------------------------------------------- |
| Mood        | Neutral, highly readable, professional, low-friction                                   |
| Tracking    | Normal to slightly open: 0 to +0.01em                                                  |
| Line height | Comfortable: 1.45–1.65 depending on size                                               |
| Weight      | 400 (regular) for body. 500 (medium) for labels and emphasis. 600 for strong emphasis. |
| Case        | Sentence case. Never all-caps for body paragraphs.                                     |

### Tracking rules

| Context             | Tracking            | Rationale                                                            |
| ------------------- | ------------------- | -------------------------------------------------------------------- |
| Display XL (80px+)  | -0.045em to -0.03em | Large type needs tighter tracking to hold together as a visual block |
| Display L (64–88px) | -0.03em to -0.025em | Still tight, slightly relaxed                                        |
| H1–H2 (44–72px)     | -0.025em to -0.02em | Moderate tight — readable but strong                                 |
| H3–H4 (24–42px)     | -0.015em to -0.01em | Near-normal — these sizes are also read, not just seen               |
| Lead (20–24px)      | -0.005em to 0       | Almost neutral                                                       |
| Body (16–18px)      | 0 to +0.005em       | Normal — optimized for reading comfort                               |
| Small (14–15px)     | +0.005em to +0.01em | Slightly open — smaller text benefits from breathing room            |
| Micro (12–13px)     | +0.01em to +0.02em  | Most open — small text needs maximum legibility                      |
| Uppercase labels    | +0.08em to +0.12em  | Uppercase glyphs need significant spacing to remain distinct         |

**Absolute rule:** Body copy is never tightly tracked. Tight tracking is a display-only technique.

---

## 4. Desktop Type Scale

All desktop sizes use fluid `clamp()` tokens for smooth scaling between breakpoints.

| Level          | Size range | Clamp token                          | Line height | Tracking            | Weight  | Family      |
| -------------- | ---------- | ------------------------------------ | ----------- | ------------------- | ------- | ----------- |
| **DISPLAY XL** | 80–112px   | `clamp(5rem, 7.4vw, 7rem)`           | 0.90–0.96   | -0.045em to -0.03em | 600–700 | Inter Tight |
| **DISPLAY L**  | 64–88px    | `clamp(4rem, 5.5vw, 5.5rem)`         | 0.95–1.0    | -0.03em to -0.025em | 600     | Inter Tight |
| **H1**         | 56–72px    | `clamp(3.5rem, 4.5vw, 4.5rem)`       | 1.0–1.05    | -0.025em to -0.02em | 600     | Inter Tight |
| **H2**         | 44–60px    | `clamp(2.75rem, 3.8vw, 3.75rem)`     | 1.05–1.10   | -0.025em to -0.02em | 600     | Inter Tight |
| **H3**         | 32–42px    | `clamp(2rem, 2.7vw, 2.625rem)`       | 1.10–1.18   | -0.015em to -0.01em | 500–600 | Inter Tight |
| **H4**         | 24–30px    | `clamp(1.5rem, 1.9vw, 1.875rem)`     | 1.15–1.25   | -0.015em to -0.01em | 500–600 | Inter Tight |
| **LEAD**       | 20–24px    | `clamp(1.25rem, 1.5vw, 1.5rem)`      | 1.40–1.50   | -0.005em to 0       | 400     | Inter       |
| **BODY LARGE** | 18–20px    | `clamp(1.125rem, 1.2vw, 1.25rem)`    | 1.50–1.60   | 0 to +0.005em       | 400     | Inter       |
| **BODY**       | 16–18px    | `clamp(1rem, 1.1vw, 1.125rem)`       | 1.50–1.65   | 0 to +0.005em       | 400     | Inter       |
| **SMALL**      | 14–15px    | `clamp(0.875rem, 0.94vw, 0.9375rem)` | 1.45–1.55   | +0.005em to +0.01em | 400–500 | Inter       |
| **MICRO**      | 12–13px    | `clamp(0.75rem, 0.82vw, 0.8125rem)`  | 1.40–1.50   | +0.01em to +0.02em  | 400–500 | Inter       |

### Scale relationships

```
DISPLAY XL  ─── Hero moments, landing page headline
DISPLAY L   ─── Section hero text, major page titles
H1          ─── Page titles, primary section headings
H2          ─── Major section headings within pages
H3          ─── Sub-section headings, card titles (large)
H4          ─── Component headings, card titles (standard)
LEAD        ─── Introductory paragraphs, hero supporting text
BODY LARGE  ─── Emphasized body, feature descriptions
BODY        ─── Default body text, paragraphs, list items
SMALL       ─── Captions, metadata, labels, form hints
MICRO       ─── Technical annotations, legal text, fine print
```

### Minimum body size

**Body copy must never render smaller than 16px.** The `clamp()` minimum for BODY is `1rem` (16px). No override is permitted. If a design calls for smaller text, it is metadata or a label — use SMALL or MICRO.

---

## 5. Mobile Type Scale

Mobile sizes are proportionally adjusted. The hero must remain dramatic — not shrink to insignificance.

| Level             | Size range | Line height | Tracking            | Weight  | Family      |
| ----------------- | ---------- | ----------- | ------------------- | ------- | ----------- |
| **Hero (mobile)** | 48–60px    | 0.95–1.0    | -0.03em to -0.025em | 600–700 | Inter Tight |
| **H1**            | 44–52px    | 1.0–1.05    | -0.025em            | 600     | Inter Tight |
| **H2**            | 36–44px    | 1.05–1.10   | -0.02em             | 600     | Inter Tight |
| **H3**            | 28–34px    | 1.10–1.18   | -0.015em            | 500–600 | Inter Tight |
| **H4**            | 22–26px    | 1.15–1.25   | -0.01em             | 500–600 | Inter Tight |
| **LEAD**          | 18–20px    | 1.40–1.50   | -0.005em to 0       | 400     | Inter       |
| **BODY**          | 16–17px    | 1.50–1.60   | 0                   | 400     | Inter       |
| **SMALL**         | 14px       | 1.45–1.55   | +0.005em            | 400–500 | Inter       |
| **MICRO**         | 12px (min) | 1.40–1.50   | +0.01em             | 400–500 | Inter       |

### Mobile hero rule

The mobile hero (48–60px) must remain visually dramatic. Common failure: the hero text shrinks so much that it renders one word per line, destroying the headline's impact.

**Prevention rules:**

- Test every hero headline at 375px width during design.
- If the headline wraps badly, shorten the copy — do not shrink the type.
- Use `word-break: keep-all` and `hyphens: none` on hero text to prevent awkward breaks.
- Consider responsive copy: a slightly shorter headline variant for mobile if the desktop version is long.

---

## 6. Copy Width Rules

Line length directly affects readability. Uncontrolled line width is one of the most common typography failures.

| Context                                             | Max width                                       | Rationale                                                                         |
| --------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| Long-form readable text (body paragraphs, articles) | 680–760px                                       | Optimal reading comfort at 16–18px body. Approximately 60–75 characters per line. |
| Hero supporting text                                | 520–650px                                       | Shorter lines for impact. Supporting text should not sprawl.                      |
| Technical sections with diagrams/media              | Wider — up to content max (1280px)              | Acceptable when text is paired with visual elements and uses shorter paragraphs.  |
| Single-line headings                                | No max-width constraint                         | Headings can span the full container. Line-breaking is controlled by copy length. |
| Card body text                                      | Constrained by card width (typically 280–400px) | Cards naturally limit line length. No additional constraint needed.               |

**Absolute rule:** Never run long paragraphs across 1200px+ containers. If a text block exceeds 760px, it must be split into columns or constrained with `max-width`.

---

## 7. Weight Usage

| Weight    | Value | Usage                                                                 |
| --------- | ----- | --------------------------------------------------------------------- |
| Regular   | 400   | Body text, descriptions, captions, default UI text                    |
| Medium    | 500   | Labels, navigation items, emphasis within body, subheadings, eyebrows |
| Semi-bold | 600   | Headlines (H1–H4), display text, strong UI emphasis                   |
| Bold      | 700   | Hero display text only. Use sparingly.                                |

### Weight rules

1. **Do not use bold (700) for body text.** Emphasis within body is achieved with Medium (500) or color, not weight jump to 700.
2. **Do not use light (300) or extra-light (200) for any text.** These weights fail contrast at small sizes and appear weak.
3. **Headlines are 500–600 by default.** Only the hero display reaches 700.
4. **Navigation items are Medium (500).** Not regular (too light), not semi-bold (too heavy).

---

## 8. Eyebrow Typography

Eyebrows are small uppercase labels that precede a heading or section. They establish context and hierarchy.

| Property      | Value                                                                             |
| ------------- | --------------------------------------------------------------------------------- |
| Family        | Inter                                                                             |
| Size          | 12–14px (SMALL to MICRO range)                                                    |
| Weight        | 500 (Medium)                                                                      |
| Case          | UPPERCASE                                                                         |
| Tracking      | +0.08em to +0.12em                                                                |
| Color         | `ink-muted` (#777970) or `ink-secondary` (#4E504B)                                |
| Accent marker | Optional — 24px wide, 2px tall, `accent` color, placed 8px above the eyebrow text |

### Eyebrow patterns

**Standard eyebrow:**

```
[accent marker — optional]
LABEL TEXT
Heading below
```

**Rules:**

- Eyebrows are always uppercase. Never sentence case.
- Eyebrows are always Medium (500) weight. Never regular — too faint. Never semi-bold — too heavy for the size.
- The accent marker is optional. When used, it appears on at most 2–3 sections per page. Do not put accent markers on every eyebrow.
- Eyebrow-to-heading gap: 8–12px. The eyebrow should feel attached to the heading below, not floating.

---

## 9. Metadata Typography

Metadata includes timestamps, author names, version labels, status indicators, and technical annotations.

| Property | Value                                      |
| -------- | ------------------------------------------ |
| Family   | Inter                                      |
| Size     | 12–14px (MICRO to SMALL)                   |
| Weight   | 400 (Regular) or 500 (Medium) for emphasis |
| Color    | `ink-muted` (#777970)                      |
| Tracking | +0.005em to +0.02em                        |

### Technical caption style

Technical captions appear below diagrams, code blocks, process steps, and system illustrations.

| Property | Value                                                 |
| -------- | ----------------------------------------------------- |
| Size     | 12–14px                                               |
| Weight   | 400                                                   |
| Color    | `ink-muted` (#777970)                                 |
| Style    | Sentence case. Concise. Specific.                     |
| Format   | "Fig. 1 — [Description]" or "[Step N]: [Description]" |

---

## 10. Link Typography

| State   | Style                                                                                 |
| ------- | ------------------------------------------------------------------------------------- |
| Default | `ink` color, no underline (or subtle underline at 30% opacity)                        |
| Hover   | `accent` color for underline, text remains `ink`. Or: text shifts to `ink-secondary`. |
| Active  | `accent` text color                                                                   |
| Visited | No special color change. Use context (e.g., checkmark, "Done" label) instead.         |
| Focus   | 2px `accent` focus ring, 2px offset                                                   |

### Inline link rules

- Inline links in body text: underline is acceptable. Use 1px underline at `ink-muted` opacity, transitioning to `accent` on hover.
- Navigation links: no underline. Active state indicated by `accent` underline (2px) or weight change.
- CTA links (standalone): styled as ghost buttons or text with arrow, not as underlined links.

---

## 11. Headline Line-Breaking Rules

Headlines must break intentionally. Awkward line breaks destroy rhythm and readability.

### Rules

1. **Never orphan a single word on the last line.** If the headline wraps, the last line should have at least two words. Adjust copy or use `<br>` to control the break.
2. **Never break between a number and its unit.** "Phase 2" must stay together. "123.design" must stay together.
3. **Prefer breaking at natural phrase boundaries.** Break after a preposition, not in the middle of a noun phrase.
4. **Test at every breakpoint.** Fluid type means the break point shifts with viewport width. Test at desktop, tablet, and mobile.
5. **Use `text-wrap: balance` for short headlines** (2–3 lines) to distribute words evenly. Use `text-wrap: pretty` for longer paragraphs to prevent orphans.
6. **Hero headlines:** Control the break explicitly with markup. Do not leave hero line-breaking to chance.

### Example — good vs. bad break

```
GOOD:                          BAD:
"Design systems               "Design systems for
 for modern                    modern
 commerce"                     commerce"

(3 words per line,             (1 word orphaned
 balanced rhythm)               on last line)
```

---

## 12. Uppercase Usage

Uppercase is a deliberate typographic tool. It is not a default style.

| Context                       | Case          | Rationale                                |
| ----------------------------- | ------------- | ---------------------------------------- |
| Eyebrows / section labels     | UPPERCASE     | Establishes hierarchy, signals metadata  |
| Navigation microcopy          | UPPERCASE     | Compact, scannable, systematic           |
| Stage codes / step indicators | UPPERCASE     | Technical, structured feel               |
| Technical metadata            | UPPERCASE     | Timestamps, version labels, status codes |
| Body paragraphs               | Sentence case | Reading comfort                          |
| Headlines (H1–H2)             | Sentence case | Editorial, confident, readable           |
| Button labels                 | Sentence case | Friendly, actionable                     |
| Card titles                   | Sentence case | Readable at small sizes                  |

**Rule:** If everything is uppercase, nothing is. Reserve uppercase for the specific contexts above.

---

## 13. List Typography

| Element                | Style                                                         |
| ---------------------- | ------------------------------------------------------------- |
| List item text         | BODY (16–18px), `ink` color                                   |
| Bullet                 | 6px diameter circle, `ink-muted` color, aligned to cap-height |
| Ordered list numbers   | BODY, `ink-muted` color, tabular spacing                      |
| Nested list            | Indent 24px, SMALL (14–15px) for second level                 |
| List item spacing      | 8–12px between items                                          |
| List top/bottom margin | 16px from surrounding body text                               |

---

## 14. Form Typography

| Element         | Style                                            |
| --------------- | ------------------------------------------------ |
| Label           | SMALL (14–15px), Medium (500), `ink` color       |
| Input text      | BODY (16–18px), Regular (400), `ink` color       |
| Placeholder     | BODY (16–18px), Regular (400), `ink-muted` color |
| Helper text     | SMALL (14px), Regular (400), `ink-muted` color   |
| Error text      | SMALL (14px), Regular (400), `error` color       |
| Character count | MICRO (12px), Regular (400), `ink-muted` color   |

---

## 15. Type Scale Summary Table

| Token      | Desktop  | Mobile  | Family      | Weight  | LH        | Tracking          |
| ---------- | -------- | ------- | ----------- | ------- | --------- | ----------------- |
| Display XL | 80–112px | 48–60px | Inter Tight | 600–700 | 0.90–0.96 | -0.045 to -0.03em |
| Display L  | 64–88px  | 44–52px | Inter Tight | 600     | 0.95–1.0  | -0.03em           |
| H1         | 56–72px  | 44–52px | Inter Tight | 600     | 1.0–1.05  | -0.025em          |
| H2         | 44–60px  | 36–44px | Inter Tight | 600     | 1.05–1.10 | -0.02em           |
| H3         | 32–42px  | 28–34px | Inter Tight | 500–600 | 1.10–1.18 | -0.015em          |
| H4         | 24–30px  | 22–26px | Inter Tight | 500–600 | 1.15–1.25 | -0.01em           |
| Lead       | 20–24px  | 18–20px | Inter       | 400     | 1.40–1.50 | -0.005em          |
| Body Large | 18–20px  | —       | Inter       | 400     | 1.50–1.60 | 0                 |
| Body       | 16–18px  | 16–17px | Inter       | 400     | 1.50–1.65 | 0                 |
| Small      | 14–15px  | 14px    | Inter       | 400–500 | 1.45–1.55 | +0.005em          |
| Micro      | 12–13px  | 12px    | Inter       | 400–500 | 1.40–1.50 | +0.01em           |

---

## 16. Implementation Notes

- All type sizes must use the fluid `clamp()` tokens — never fixed pixel values.
- Font family, weight, size, line-height, and tracking must all be set through tokens.
- Variable font files should be loaded once at the document level and shared across all components.
- Test every heading at desktop (1440px), tablet (768px), and mobile (375px) widths.
- Use `font-feature-settings` for tabular figures in data contexts (prices, metrics, step numbers).
- Do not override line-height with arbitrary values. Use the token scale.
- Do not set `letter-spacing` on body text unless the token specifies it.

---

_This document is the source of truth for typography across 123.design. All type decisions should be resolved against this system._
