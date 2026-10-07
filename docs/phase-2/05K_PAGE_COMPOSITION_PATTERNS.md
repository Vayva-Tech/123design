# 05K — Page Composition Patterns

Reusable composition patterns for 123.design. These define section-level layout structures, not production components. Each pattern describes spatial arrangement, content hierarchy, and appropriate use.

---

## 1. EDITORIAL HERO

**Structure:** Eyebrow label, large display title (clamp 48–80px), supporting paragraph (reading max ~640px), CTA group (primary + secondary).

**Grid:** Full-width container, content left-aligned or centered. Generous vertical padding (120–160px top, 80–120px bottom).

**Drama level:** High. White space does the heavy lifting. Title dominates. Paragraph anchors meaning. CTA resolves the section.

**Use for:** Homepage hero, capability page openings, index pages requiring authority.

**Avoid when:** Content is thin or unverified. This pattern needs real weight in the copy to justify its scale.

---

## 2. MEDIA HERO

**Structure:** Large image or video as dominant element (60–70% of viewport height minimum). Text overlaid on media (with gradient/scrims) or positioned adjacent below/beside.

**Grid:** Full-bleed media. Text block can be left-aligned overlay or separate contained section below.

**Drama level:** Cinematic. The media carries the emotional weight. Text provides context, not competition.

**Use for:** Homepage hero variants, project detail openings, case study headers where photography is strong.

**Avoid when:** Media quality is uncertain or inconsistent. A weak image in this pattern undermines the entire page.

---

## 3. SPLIT CONTENT + MEDIA

**Structure:** Two-column layout. Text one side, media the other. Grid split: 8/4 (text-dominant) or 6/6 (balanced).

**Grid alignment:** Media edge-aligns with container. Text maintains reading max (~640px) within its column. Vertical centering optional; top-alignment is more editorial.

**Variants:**

- Text left / media right — standard case study presentation
- Media left / text right — when image leads the narrative
- Stacked on mobile — media always first on small viewports

**Use for:** Case studies, capability detail sections, project narratives, process explanations with supporting imagery.

**Avoid when:** Both columns have equal visual weight but different content importance. One side must lead.

---

## 4. TECHNICAL TWO COLUMN

**Structure:** Structured data left (specifications, parameters, stage details), explanatory copy right (context, rationale, narrative).

**Grid:** 5/7 or 4/8 split. Left column is reference material (tables, lists, codes). Right column is prose.

**Visual separation:** Thin vertical rule or spacing gap between columns. No cards, no backgrounds — the structure itself creates the separation.

**Use for:** Process pages, technical detail sections, lifecycle stage explanations, specification-heavy content.

**Avoid when:** Content is purely narrative with no structured data. Use single-column reading layout instead.

---

## 5. LARGE MEDIA BREAK

**Structure:** Full-width image or video spanning edge-to-edge between content sections. Height: 50–70vh for images, up to 80vh for video.

**Purpose:** Pacing reset. Breaks reading rhythm. Creates breathing room between dense content sections.

**Caption:** Optional. If present, small text (text-xs), muted color, positioned bottom-left or bottom-center with padding.

**Use for:** Case study pacing (between narrative sections), project detail pages, anywhere content density needs relief.

**Avoid when:** Adjacent sections already have strong visual presence. The break should contrast with surrounding content density.

---

## 6. CONTAINED PRODUCT STAGE

**Structure:** Product image within a neutral or dark background stage. `object-fit: contain`. Image centered within the stage area.

**Stage background:** `#11110F` (ink) or `#F4F1EA` (canvas) depending on context. Stage height: 400–600px on desktop, 280–400px on mobile.

**Purpose:** Presents product renders, legacy assets, or hero objects in a controlled environment. The stage neutralizes background variation in source imagery.

**Use for:** Legacy product assets, industrial design renders, hero objects on project pages, capability demonstrations where product is the focus.

**Avoid when:** Photography has strong environmental context that should be preserved. Use full-bleed media instead.

---

## 7. PROCESS MOSAIC

**Structure:** Grid of process images (2–4 columns depending on viewport) with short captions. Images are documentary/tactile — real making, real workshop, real material.

**Grid:** Responsive grid. Desktop: 3–4 columns. Tablet: 2 columns. Mobile: 1 column or horizontal scroll.

**Captions:** Below each image. Text-xs, ink-muted. Brief context (process step, material, technique).

**Aspect ratio:** Consistent within the grid (all 4:3 or all 3:2). Mixed ratios create visual noise.

**Use for:** Manufacturing sections, process pages, behind-the-scenes content, capability proof sections.

**Avoid when:** Images are polished/marketing rather than documentary. This pattern celebrates real making, not staged photography.

---

## 8. CAPABILITY GRID

**Structure:** Editorial grid of capability cards sharing visible grid lines. Each cell contains: index number (01, 02...), title, short description, directional arrow.

**Grid lines:** Thin rules (`1px solid #D6D3CB`) forming a visible grid structure. Cards are not disconnected rounded boxes — they share borders and align to a common grid.

**Cell content hierarchy:**

1. Index number — text-xs, ink-muted, top-left
2. Title — text-lg or text-xl, ink, semibold
3. Description — text-sm, ink-secondary, 2–3 lines max
4. Arrow — bottom-right, indicates navigation

**Hover:** Cell background shifts to surface (#FFFFFF), arrow animates slightly. No elevation change, no shadow.

**Use for:** Capability index pages, service listings, structured overviews where scannability matters.

**Avoid when:** Capabilities have vastly different content lengths. The grid requires visual consistency across cells.

---

## 9. LIFECYCLE RAIL

**Structure:** Horizontal or vertical stage progression. Nodes represent stages. Thin rule connects nodes. Stage codes (CON, EVT, DVT, PVT, PRODUCTION) label each node.

**Horizontal variant:** Full-width rail. Nodes spaced evenly. Active/current stage highlighted with accent color. Used inline within pages.

**Vertical variant:** Left-aligned rail with stage content to the right. Used for detailed process pages where each stage expands.

**Node states:**

- Default: ink-muted circle with stage code
- Active: accent (#F05A36) fill with dark text
- Completed: ink fill with check or filled state
- Upcoming: ink-muted, reduced opacity

**Use for:** Process page, project development sections, lifecycle explanations, anywhere stage progression is communicated.

**Avoid when:** Content doesn't have a genuine sequential/phase structure. Don't force the rail onto non-process content.

---

## 10. QUOTE SECTION

**Structure:** Large testimonial quote (text-2xl to text-3xl), attribution below (name, role, company), optional video portrait or contextual image.

**Layout:** Centered, reading max (~640px). Generous vertical padding (80–120px). Quote marks optional — the typography itself should signal "quote."

**Tone:** Quiet, confident. This section breathes. It doesn't compete with surrounding content density.

**Attribution:** text-sm, ink-secondary. Name bold, role/company regular. Separated from quote by spacing, not a rule.

**Use for:** Testimonial sections, case study client quotes, trust-building sections between content-heavy areas.

**Avoid when:** Quote is weak, generic, or unverifiable. A bad quote in this prominent pattern damages credibility more than helping.

---

## 11. DARK MANUFACTURING BLOCK

**Structure:** Dark canvas (#11110F) background. Light text (#F5F2EA). Large heading, capability list, process media mosaic, CTA.

**Content hierarchy:**

1. Section heading — text-3xl to text-4xl, #F5F2EA
2. Supporting text — text-lg, #B7B6AF
3. Capability list or process mosaic — light text on dark
4. CTA — accent (#F05A36) or light outline button

**Purpose:** Grounded, industrial tone shift. Signals "this is where making happens." The dark canvas creates weight and seriousness.

**Use for:** Manufacturing capability sections, process-heavy pages, sections emphasizing industrial/making capability.

**Avoid when:** The section content is light or superficial. Dark canvas demands substance.

---

## 12. FINAL CTA

**Structure:** Simple, high confidence. Large text (text-2xl to text-4xl), single primary CTA button. Minimal surrounding content.

**Layout:** Centered. Generous vertical padding (100–160px). No secondary content competing with the CTA.

**Text:** Direct, specific. Not "Learn More" — instead: "Start a project," "Discuss your requirements," "See what's possible."

**Use for:** Page endings. Every page should end with a clear next action.

**Avoid when:** Multiple competing CTAs exist. This pattern resolves the page with one direction.

---

## 13. RELATED WORK

**Structure:** Project cards in grid. 2–3 columns depending on viewport. Each card: image, project title, category/industry tag, optional brief descriptor.

**Grid:** Desktop: 3 columns. Tablet: 2 columns. Mobile: 1 column (horizontal scroll variant acceptable for compact cards).

**Card proportions:** Image aspect ratio 4:3 or 3:2. Metadata below image, compact. Title text-lg, descriptor text-sm ink-secondary.

**Interaction:** Card hover reveals subtle image scale or overlay shift. Entire card is clickable.

**Use for:** Case study footers ("More work like this"), capability page related projects, homepage featured work sections.

**Avoid when:** Only 1–2 related items exist. The grid pattern feels empty with too few items. Use a single "next project" link instead.

---

## HOME PAGE COMPOSITION — Visual Rhythm

The homepage sequences these patterns to create rhythm. Alternating between high-drama and quiet, between media-heavy and typographic, between dark and light.

| Section           | Pattern                                         | Rhythm Quality             |
| ----------------- | ----------------------------------------------- | -------------------------- |
| Hero              | Editorial Hero or Media Hero                    | Cinematic / high drama     |
| Credibility strip | Compact inline logos or stats                   | Compact, quiet confidence  |
| Featured Work     | Related Work grid (2–3 projects)                | Media-heavy, scannable     |
| Feature Case      | Split Content + Media                           | Editorial, narrative       |
| Lifecycle         | Lifecycle Rail (horizontal)                     | Structured, technical      |
| Your Process      | Process steps with lifecycle connection         | Systematic, clear          |
| Capabilities      | Capability Grid                                 | Editorial grid, scannable  |
| Process Media     | Process Mosaic                                  | Tactile, real making       |
| Industries        | Split or grid with industry descriptors         | Balanced, informative      |
| How We Work       | Typographic section (large text, minimal media) | Typographic, confident     |
| Trust / Quote     | Quote Section                                   | Quiet, human               |
| Manufacturing     | Dark Manufacturing Block                        | Dark, grounded, industrial |
| Final CTA         | Final CTA                                       | Simple, high confidence    |

**Rhythm principle:** No two adjacent sections should share the same visual weight or tone. Alternate between dense and sparse, dark and light, media-heavy and text-heavy.

---

## CASE STUDY COMPOSITION

**Sequence:**

1. Hero (Editorial Hero or Media Hero)
2. Small metadata block (client, industry, year, scope)
3. Large hero image (full-width or contained stage)
4. Narrow copy column (reading max ~640px, left-aligned or centered)
5. Two-column media + text (Split Content + Media)
6. Technical detail section (Technical Two Column if applicable)
7. Large image or video break (Large Media Break)
8. Process sequence (Lifecycle Rail or Process Mosaic)
9. Final product showcase (Contained Product Stage or Media Hero)
10. Results and metrics (structured data)
11. Final CTA

**Pacing rule:** Do not create paragraph / image / paragraph / image with identical rhythm throughout. Vary the density. Some sections are image-dominant, others text-dominant. The reader should feel progression, not repetition.

---

## LIGHT PROJECT COMPOSITION

For projects with limited narrative depth but strong visual assets.

**Sequence:**

1. Hero (Media Hero — let the imagery lead)
2. Project summary (compact, 2–3 sentences)
3. Tags / metadata (industry, capability, year)
4. Strong media grid (2–3 large images, full-bleed or near-full-bleed)
5. Short verified description (only what's true, no generated narrative)
6. Related capability link
7. CTA
8. Next project navigation

**Principle:** Use visual polish to compensate for limited narrative. Do not generate fake narrative to fill space. A short honest project page is better than a long fabricated one.

---

## CAPABILITY PAGE COMPOSITION

**Sequence:**

1. Hero (Editorial Hero — capability title, value statement)
2. Value proposition (compact, 1–2 paragraphs)
3. Deliverables grid (Capability Grid or structured list)
4. Lifecycle relation (Lifecycle Rail showing where this capability sits)
5. Real media / proof (Process Mosaic or Split Content + Media with real imagery)
6. Technical detail (Technical Two Column if applicable)
7. Related work (Related Work grid — projects using this capability)
8. Related capabilities (links to connected capabilities)
9. Final CTA

**Avoid:** Endless text blocks. Capability pages must remain scannable. Break text with media, structured data, or grid patterns.

---

## PROCESS PAGE ART DIRECTION

The process page should feel more like a product-development map than an agency "our process" page.

**Character:**

- Stage progression is explicit and visual
- Technical labels (CON, EVT, DVT, PVT, PRODUCTION) are used openly
- Outputs are listed for each stage
- Cross-links to capabilities and case studies
- Process media (real workshop/factory imagery) accompanies stages

**Potential structure:**

- One continuous lifecycle rule running the page length (vertical Lifecycle Rail)
- Each stage expands into a content section: description, outputs, media, related capabilities
- The rail creates a visual spine that the reader follows down the page

**Tone:** Technical, systematic, honest. Not marketing polish — engineering clarity.
