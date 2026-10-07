# 05E — Component Visual Specification

Phase 2 design system reference. Every visible primitive required by Phase 1, documented with exact anatomy and visual rules. No code, no framework assumptions.

---

## 1. Buttons

### 1.1 Variants

| Variant              | Fill             | Border     | Text               | Use                                                   |
| -------------------- | ---------------- | ---------- | ------------------ | ----------------------------------------------------- |
| PRIMARY              | Near-black       | None       | Light              | Main action on light surfaces                         |
| SECONDARY            | Transparent      | Near-black | Near-black         | Alternative action, paired with primary               |
| TEXT CTA             | None             | None       | Near-black + arrow | Inline navigation, low-emphasis action                |
| DARK CONTEXT PRIMARY | Light background | None       | Dark text          | Primary action on dark surfaces (hero, dark sections) |
| DANGER               | System use only  | —          | —                  | Destructive actions reserved for system contexts only |

### 1.2 Sizing

| Size    | Height  | Context                                        |
| ------- | ------- | ---------------------------------------------- |
| Large   | 52–56px | Hero CTA, page-level primary actions           |
| Default | 48px    | Standard page actions, form submissions        |
| Compact | 40–44px | Inline actions, dense UI, secondary placements |

Touch target minimum: 44px in all dimensions. If visual size is smaller, padding extends the hit area to meet this requirement.

### 1.3 States

| State          | Visual Treatment                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Default        | As specified per variant                                                                                                            |
| Hover          | Subtle background/value shift. Text CTA: arrow moves ~3–4px in direction of action. Transition: 180–220ms. No scaling, no bouncing. |
| Active / Press | Very subtle compression: scale 0.98–0.99. Never animate layout properties (width, height, padding).                                 |
| Focus          | Visible focus ring. Must be discernible on all surface types.                                                                       |
| Disabled       | Reduced opacity or muted value. No pointer interaction.                                                                             |
| Loading        | Spinner or progress indicator replaces or accompanies label. Action disabled during load.                                           |

### 1.4 Rules

- Primary CTA target width: ~180–220px. Never full-width unless inside a form footer.
- Clear action priority: primary > secondary > tertiary must be visually obvious on every page.
- Every button must have a real action. No decorative buttons.
- Arrow on Text CTA: small, geometric, consistent direction (right for forward navigation, down for expand).
- Hover: subtle background change only. No scaling, no bouncing, no shadow explosion.
- Press: subtle compression 0.98–0.99. Never animate layout.

---

## 2. Links

### 2.1 Types

| Type              | Underline                                                  | Context                           |
| ----------------- | ---------------------------------------------------------- | --------------------------------- |
| Inline text link  | Underlined or clearly differentiated from surrounding text | Within paragraphs, body copy      |
| Navigation link   | Not underlined by default                                  | Header nav, footer nav, mega menu |
| Active navigation | Small underline, rule, or tonal treatment                  | Indicates current page/section    |

### 2.2 Rules

- Don't rely on color alone to distinguish links from surrounding text.
- Navigation links use weight, case, or position to communicate state.
- Active nav indicator: thin underline, bottom rule, or subtle tonal shift. Keep it minimal.
- Inline links within body copy should be underlined or otherwise clearly differentiated.

---

## 3. Eyebrows

### 3.1 Specification

- Case: Uppercase.
- Size: 12–14px.
- Weight: Medium.
- Letter-spacing: 0.08–0.12em.
- Optional accent marker: short orange rule or dot preceding the label.

### 3.2 Rules

- Eyebrows label sections and provide context. They are not headlines.
- Keep eyebrow text short: 2–6 words maximum.
- The accent marker (orange rule/dot) is optional but permitted as a recurring motif.
- Don't use eyebrows on every element. They are for section-level labeling.

---

## 4. Tags / Chips

### 4.1 Portfolio Tags

- Small typography (text-xs or equivalent).
- Muted borders, transparent or near-transparent background.
- No colorful tag rainbows. Restrained, monochromatic palette.
- Examples: MECHANICAL ENGINEERING, PROTOTYPING, DVT.

### 4.2 Active Filter State

- Dark fill or strong contrast against inactive tags.
- Clearly communicates selection without relying on color alone.

### 4.3 Rules

- Tags are labels, not decorations. Each tag must carry information.
- Don't use tags as pure visual filler in cards or layouts.
- Tags should be readable without squinting. If they need to be larger, make them larger.

---

## 5. Card Philosophy

### 5.1 Core Principle

Don't make everything a floating card.

### 5.2 When Cards Are Appropriate

Cards exist where objects are genuinely discrete items:

- Project
- Capability
- Article
- Testimonial
- Filter selection

### 5.3 When Cards Are Not Appropriate

Many sections use grid lines, rules, typography, and media without container boxes:

- A section of text with a heading does not need a card wrapper.
- A list of related items separated by rules does not need individual cards.
- Editorial layouts use spacing and typography, not boxes.

### 5.4 Rules

- Avoid nested cards. Avoid cards within cards.
- If every element on the page is a card, nothing is a card. Use cards sparingly.
- Cards align to the grid system. Don't float them independently.

---

## 6. Project Card

### 6.1 Anatomy

1. **Media** — dominant visual element. Ratio: 4:3 or 16:10.
2. **Video indicator** (optional) — small icon or label signaling hover video availability.
3. **Title** — 20–28px depending on card size variant.
4. **Industry / category** — short label.
5. **Capability tags** — small tags showing relevant capabilities.
6. **Year** (optional) — subtle, muted.

### 6.2 Variants

| Variant         | Layout                                                       | Context                             |
| --------------- | ------------------------------------------------------------ | ----------------------------------- |
| STANDARD        | Single column, media on top                                  | Default grid placement              |
| FEATURED_WIDE   | Wide format, media left + metadata right or full-width media | Hero-adjacent, highlighted projects |
| FEATURED_TALL   | Taller aspect, media-dominant                                | Emphasized grid position            |
| COMPACT_RELATED | Smaller, minimal metadata                                    | Related project lists, sidebar      |

### 6.3 Hover (Desktop)

- Media: gentle scale 1.015–1.025 maximum. Subtle, not dramatic.
- Video preview: begins after 200–350ms delay. Only if video is loaded and ready.
- Metadata remains readable throughout. Don't move the whole card dramatically.
- No card lift, no large shadow change, no position shift.

### 6.4 Rules

- Media dominates the card. Metadata is secondary.
- Title size scales with card variant but stays within 20–28px range.
- Don't stack so many tags that the card becomes noisy. Curate the displayed capabilities.

---

## 7. Capability Card

### 7.1 Anatomy

1. **Index number** — sequential, editorial (01, 02, 03...).
2. **Capability title** — the capability name.
3. **Short description** — one to two lines.
4. **Stage relevance** — lifecycle stage tags (CON, EVT, DVT, PVT, PRODUCTION).
5. **Arrow / link indicator** — directional, leads to capability detail.
6. **Optional media** — only when it adds comprehension, not decoration.

### 7.2 Style

- More editorial than SaaS feature cards. Think magazine layout, not software grid.
- Prefer shared grid lines over disconnected rounded boxes.
- No colorful icons per capability. Typography carries the weight.
- Cards align to the grid system. Don't float them independently.

---

## 8. Industry Card

### 8.1 Media Strategy

| Condition                     | Treatment                                      |
| ----------------------------- | ---------------------------------------------- |
| Approved project media exists | Media-led: real product photography or renders |
| No approved media             | Typographic or graphic composition             |

### 8.2 Rules

- No stock industry photography. No generic doctor for Medical, no soldier for Defense, no generic office for Enterprise.
- Use real product work or clean typography/technical composition only.
- If no media is available, the card should feel intentional, not empty.
- The typographic/graphic fallback should feel like a deliberate design choice, not a placeholder.

---

## 9. Navigation

### 9.1 Desktop Header

- Height: ~76–80px.
- Layout: Logo left, navigation center or right, CTA right.
- Transparent hero mode: must preserve text contrast against background media.
- Scrolled mode: warm-light or white surface, thin bottom border, very subtle backdrop blur acceptable.

### 9.2 Mega Menu

- Full-width panel beneath header.
- Structured columns on light surface.
- Thin top and bottom border. Minimal shadow.
- No enormous promotional graphic. May include one small featured-project media slot in future iterations.
- Navigation links organized by category. Clear hierarchy.

### 9.3 Mobile Menu

- Full viewport panel. Warm neutral surface.
- Large nav labels: 28–36px. Utility links smaller below.
- Primary "Start Project" CTA visually distinct from navigation links.
- No hamburger animation spectacle. Simple open/close.

---

## 10. Footer

### 10.1 Surface

- Dark surface allowed (encouraged for contrast with lighter page content above).

### 10.2 Structure

1. Large brand/statement area.
2. Navigation groups (Work, Capabilities, Process, Company).
3. Contact information.
4. Legal links.
5. Social links (only if actively maintained).

### 10.3 Closing Statement

- Possible oversized final line: "FROM IDEA TO PRODUCTION."
- Treat as a closing statement, not a duplicate of the hero. It is the final typographic moment, not a repetition.

---

## 11. Filter Bar

### 11.1 Desktop

- Compact horizontal controls.
- Text labels, subtle borders.
- Active state: dark fill or strong contrast.
- Don't make filters giant pills. They are controls, not features.

### 11.2 Mobile

- Single "FILTER" button opens bottom sheet.
- Active count displayed: "FILTERS (2)".
- Button is compact, not a full-width bar.

---

## 12. Bottom Sheet

### 12.1 Anatomy

- Rounded top corners only (not all corners).
- Strong top divider or drag handle (optional but recommended).
- Full-width, max-height controlled (typically 60–85vh).
- Body scroll locked when open.

### 12.2 Sticky Footer

- "CLEAR" and "APPLY" actions pinned to bottom.
- Clear visual separation from scrollable content above.

### 12.3 Accessibility

- Keyboard accessible: focus trap, Escape to close.
- Focus management: move focus into sheet on open, return to trigger on close.

---

## 13. Accordions

### 13.1 Specification

- Use for: FAQ, technical detail expansion, mobile secondary information.
- Default state: closed where appropriate (don't force everything open).
- Indicator: simple plus/minus or chevron. Clear focus state.
- No animated height theatrics. Smooth but quick transition (220–300ms).
- Only one open at a time if context demands it; independent if content is unrelated.

---

## 14. Modals

### 14.1 Permitted Uses

- Video lightbox.
- Mobile filter (if bottom sheet is not used).
- Confirmation dialogs.

### 14.2 Not For

- Basic navigation.
- Project details (use a page).
- Capability descriptions (use a page).

### 14.3 Rules

- Modals are a last resort for overlay content. Prefer pages and inline expansion.
- If a modal is required: backdrop blur/dim, focus trap, Escape to close, clear close button.
- Use sparingly. If you find many use cases, reconsider the information architecture.

---

## 15. Loading States

### 15.1 Specification

- Restrained skeletons. Neutral surface. No shimmer animation required.
- Images: background placeholder color, then fade-in when loaded.
- Don't use loading spinners for every component. Skeletons for content areas, spinners only for actions.

---

## 16. Empty States

### 16.1 Filter No Results

- Clear text: "No projects match these filters."
- Action: "Clear filters" link or button.
- No illustration.

### 16.2 Rules

- Empty states are functional, not decorative.
- Communicate what happened and what to do next.
- No stock illustrations, no whimsical copy.

---

## 17. Error / 404

### 17.1 Specification

- Large "404" typographic element.
- Simple message: what happened, plainly.
- Links: "View Work" and "Start a Project."
- May use one approved project visual for atmosphere.
- No joke-heavy copy. Professional tone.

---

## 18. Iconography

### 18.1 Specification

- Simple line icons only when they improve comprehension.
- Stroke: 1.5–2px, geometric, minimal.
- Don't create an icon for every capability if typography communicates more clearly.
- No decorative giant icons. Icons are supporting actors, not heroes.
- Consistent style across all icons: same stroke weight, same corner treatment, same optical size.

---

## 19. Arrows

### 19.1 Specification

- Directional arrow as a small recurring motif throughout the site.
- Uses: Text CTA, next project navigation, navigation indication, workflow direction.
- Style: restrained, geometric. Either a Unicode arrow (→) or a custom-drawn minimal arrow.
- Don't overuse chevrons. Arrows and chevrons are different; pick one vocabulary.

---

## 20. Technical Graphic Language

### 20.1 Permitted Elements

- Hairlines.
- Measurement ticks.
- Grid divisions.
- Stage labels.
- Technical captions.
- Coordinates and index numbers.
- Controlled diagrams.

### 20.2 Rules

- Don't pretend decorative graphics are actual CAD/engineering data.
- Technical graphics signal precision and process. They are not literal engineering drawings.
- Keep them clean, aligned to the grid, and purposeful.

---

## 21. Client Logos

### 21.1 Rules

- Only display if brand approval state allows.
- If approved: monochrome or original depending on brand agreement. Don't recolor arbitrarily.
- Restrained grid. Not a huge logo wall.
- No logos until approval state allows them. Placeholder logos are not permitted.

---

## 22. Testimonial

### 22.1 Anatomy

1. **Quote** — dominates the component. No decorative quotation marks larger than the content text.
2. **Name** — full name.
3. **Role** — job title.
4. **Company** — organization name.
5. **Optional project / video** — links testimonial to specific work.

### 22.2 Video Testimonial

- Poster image displayed by default.
- Play control visible.
- Caption/transcript support required.
- Same media rules as project video (muted option, controls, accessibility).

### 22.3 Rules

- Quote is the hero. Attribution is secondary.
- Don't wrap in heavy card containers. Let the text breathe.

---

## 23. Metrics

### 23.1 Rules

- Only display if owner-verified. No exceptions.
- Format: large number, small label.
- Don't show: 0, em-dash, placeholder values, unverified figures.
- If no verified metrics exist: the section disappears entirely. No "coming soon" metrics.

---

## 24. Tables

### 24.1 Specification

- Responsive: horizontal overflow where unavoidable on small screens.
- Row separators: thin rules between rows.
- Good numeric alignment: right-align numbers, left-align text.
- Don't automatically turn desktop tables into unreadable cards on mobile. Horizontal scroll with clear indication is acceptable.
- Header row: visually distinct but not heavy.

---

## 25. Tooltips

### 25.1 Rules

- If used, keep minimal and accessible.
- Must be keyboard accessible.
- Don't put essential information only in tooltips.
- Brief text only. Tooltips are not documentation.

---

## Summary Principles

1. Every component earns its place. No decorative wrappers.
2. Typography does the heavy lifting before icons, colors, or containers.
3. States are designed: default, hover, active, focus, disabled, loading, error.
4. Accessibility is not an afterthought: focus management, keyboard navigation, contrast, screen reader semantics.
5. Restraint is the design value. If something can be removed without losing information, remove it.
