# 05G — Media Art Direction

Phase 2 design system reference. Rules for how media is framed, displayed, sized, and art-directed across the 123.design website. No code, no framework assumptions.

---

## 1. Media Frame System

Three frame modes accommodate varying asset quality and context. Every media placement on the site uses one of these modes.

### 1.1 Mode A: FULL-BLEED

**When:** Only high-resolution assets or video. No exceptions.

**Behavior:**

- Image or video fills the frame completely. No visible padding, no matte.
- Edge-to-edge within its container.
- Object-fit: cover. Focal point respected.

**Requirements:**

- Source asset must be high resolution (see Section 4 for size thresholds).
- Video must be production quality (see Video System, Section 6).
- If the asset is not good enough for full-bleed, don't use full-bleed.

**Contexts:**

- Hero backgrounds.
- Featured project media (when asset quality permits).
- Full-width image breaks between content sections.

---

### 1.2 Mode B: CONTAINED STAGE

**When:** Product renders, legacy assets, products on white backgrounds, technical imagery, or any asset where the product should not fill the entire frame.

**Behavior:**

- Product sits within a neutral or dark stage environment.
- Object-fit: contain. The full asset is visible.
- Responsive padding around the product. Padding scales with container.

**Stage Surfaces:**

- Neutral light (warm white, light neutral).
- Neutral dark (graphite, near-black).
- Choice of light or dark stage depends on the product and surrounding section. Don't auto-tint. Let the product imagery guide the decision.

**Contexts:**

- 3D renders and CAD visualizations.
- Products photographed on white/light backgrounds.
- Legacy assets that are not high resolution.
- Technical imagery (PCB, components, engineering photos).

---

### 1.3 Mode C: DOCUMENT FRAME

**When:** Sketches, CAD screenshots, prototype photos, technical drawings, older assets, or any material that has a documentary quality.

**Behavior:**

- Subtle border or matte surrounds the image.
- The frame signals "this is a document, not a hero."
- Never stretch a low-resolution asset to fill a large viewport area.

**Frame Treatment:**

- Thin border (1px or hairline). Neutral color.
- Optional subtle background behind the image (slightly different from page background).
- No heavy drop shadows. No ornate frames.

**Contexts:**

- Hand sketches and concept drawings.
- CAD screenshots and technical drawings.
- Prototype and workshop photos.
- Historical project documentation.
- Process imagery that is informational, not cinematic.

---

### 1.4 Frame Selection Rules

- When in doubt, use CONTAINED STAGE. It is the safest mode for mixed-quality assets.
- A single project can use multiple frame modes across different images. The hero might be full-bleed while process photos are document-framed.
- Don't force consistency at the cost of presenting assets poorly. Match the frame to the asset.
- Frame mode is a property of the media placement, not the project. Different images in the same project can use different frames.

---

## 2. Media Backgrounds

### 2.1 Permitted Surfaces

| Surface            | Use                                                     |
| ------------------ | ------------------------------------------------------- |
| Warm white         | Default light background, most content areas            |
| Pure white         | Clean product staging, technical contexts               |
| Near-black         | Dark sections, hero backgrounds, manufacturing section  |
| Graphite           | Contained stage for dark products, technical imagery    |
| Very light neutral | Subtle differentiation from warm white, secondary areas |

### 2.2 Rules

- Don't auto-tint every project differently. The default system handles most cases.
- Product imagery supplies visual color. The background supports; it doesn't compete.
- If a project-specific background tone is used, it must be derived deliberately from the product/media and meet accessibility contrast requirements. Not required at launch.
- Avoid arbitrary color backgrounds. The palette is: warm whites, neutrals, near-blacks. Color comes from the work.

---

## 3. Low-Resolution Asset Strategy

Historical assets exist at 660px, 800px, and 1024px widths. These are real constraints. Don't pretend they aren't.

### 3.1 Permitted Treatments

| Treatment                 | Description                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| Contained stage           | Product sits within a padded frame. Small asset at small size looks intentional.            |
| Multi-image mosaic        | Several smaller images arranged in a grid. Each image is appropriately sized for its cell.  |
| Smaller process modules   | Use low-res assets in process sections where images are naturally smaller.                  |
| Two-column layouts        | Side-by-side images at moderate width. Each image stays within its resolution comfort zone. |
| Thumbnail strips          | Horizontal row of small images. Low resolution is acceptable at thumbnail scale.            |
| Technical caption modules | Small image paired with caption text. Documentary context frames lower quality as expected. |

### 3.2 Avoid

| Treatment              | Reason                                                                 |
| ---------------------- | ---------------------------------------------------------------------- |
| Full-screen stretch    | Pixelation is visible and unprofessional.                              |
| Large background cover | Same problem. Low-res as background = blurry mess.                     |
| AI upscaling           | Don't assume AI upscaling is available or produces acceptable results. |

### 3.3 Rules

- If an asset is below 1200px wide, it should not appear larger than ~600px rendered width.
- If an asset is below 800px wide, it should not appear larger than ~400px rendered width.
- These are guidelines, not absolute rules. Composition and asset quality matter more than pixel count. A sharp 800px image is better than a soft 1200px image at the same size.
- When building project pages, flag low-res assets in the CMS so the frontend can apply appropriate frame modes automatically.

---

## 4. Image Quality Behavior

### 4.1 Size Thresholds

| Source Width | Permitted Use                                           |
| ------------ | ------------------------------------------------------- |
| < 800px      | Small contained/process use, thumbnails, document frame |
| 800–1200px   | Gallery images, card media, process modules             |
| 1200–1600px  | Card media, medium panels, contained stage              |
| 1600–2400px  | Large contained placements, featured cards              |
| 2400px+      | Potential full-bleed use                                |

### 4.2 Rules

- These are heuristics, not absolute rules. Composition and asset quality matter more than pixel dimensions.
- Never let browser scaling create visible pixelation for key imagery. If an image looks soft at its rendered size, use a smaller layout or a different frame mode.
- When in doubt, size down. A sharp small image is better than a blurry large one.
- The CMS should track source dimensions so the frontend can make informed decisions about frame mode and maximum rendered size.

---

## 5. Hero Art Direction

### 5.1 Homepage Hero

- Cinematic but disciplined. This is an engineering firm, not a film studio.
- The hero communicates capability, precision, and range in a single visual moment.

### 5.2 Dimensions

- Desktop height: ~82–92vh. Minimum 720px where viewport permits.
- The hero should feel expansive without wasting space. It is the dominant visual moment on the site.

### 5.3 Text Placement

- Text occupies a deliberate foreground area.
- The headline is the dominant typographic moment on the entire site.
- Text must be readable against the background/media.

### 5.4 Background Media

- Full-width background or large media plane behind/adjacent to text.
- Dark overlay: only enough for text readability. Don't cover the media with an opaque black wash.
- The media should be visible and appreciable through the text area.

### 5.5 Rules

- Don't place critical product details permanently under the text area. See Video Safe Zones (Section 7).
- The hero media should represent the breadth of work: product development, engineering, manufacturing. Not just one discipline.
- If using a video reel: ensure it represents real work, not stock or conceptual footage.

---

## 5A. Home Hero Text

### 5A.1 Composition

- **Eyebrow:** PRODUCT DEVELOPMENT • ENGINEERING • MANUFACTURING
- **Primary display:** FROM IDEA / TO PRODUCTION. (line break intentional between IDEA and TO)
- **Supporting paragraph** underneath the display line.
- **Primary CTA:** START A PROJECT.
- **Secondary CTA:** VIEW OUR WORK.

### 5A.2 Rules

- The display line is the dominant typographic moment on the site.
- The line break between "FROM IDEA" and "TO PRODUCTION." is intentional and must be preserved.
- The eyebrow provides context. The display line provides impact. The paragraph provides clarity. The CTAs provide direction.

---

## 6. Video System

### 6.1 Homepage Hero Video

| Property        | Value                                                                     |
| --------------- | ------------------------------------------------------------------------- |
| Audio           | Muted                                                                     |
| Autoplay        | Yes, where browser permits                                                |
| Loop            | Yes                                                                       |
| playsinline     | Yes                                                                       |
| Controls        | No (background mode)                                                      |
| Poster fallback | Required. Static image shown if video cannot load or autoplay is blocked. |

### 6.2 Rules

- Don't load every reel asset on the homepage. Target one short edited reel or controlled sequence.
- Video file size: optimize aggressively. Hero video should load within the LCP budget.
- Provide multiple formats/sources if needed for browser compatibility.
- The poster image must be a strong standalone image. Many users will never see the video.

### 6.3 Project Page Video

| Property            | Value                                 |
| ------------------- | ------------------------------------- |
| Audio               | User-controlled                       |
| Controls            | Yes (play, pause, volume, fullscreen) |
| Poster              | Required                              |
| Captions/transcript | Required where speech exists          |

### 6.4 Hover Preview

| Property    | Value                             |
| ----------- | --------------------------------- |
| Audio       | Muted                             |
| Loop        | Short loop (3–6 seconds)          |
| Trigger     | Pointer enter with ~250ms delay   |
| Exit        | Stop and reset to poster          |
| Concurrency | Maximum 1–2 simultaneous previews |

See 05F_MOTION_INTERACTION_SYSTEM.md Section 7 for full hover video behavior.

### 6.5 Reduced Motion

- When `prefers-reduced-motion` is active: show static poster only.
- No autoplay, no hover preview, no scrolling video.
- The poster must communicate the same message as the video would.

---

## 7. Video Safe Zones

### 7.1 Homepage Hero Video

Define safe zones where text and critical content must remain visible:

1. **Headline safe zone** — area where the primary headline text is guaranteed readable.
2. **CTA safe zone** — area where call-to-action buttons are visible and not obscured by important video content.
3. **Mobile crop safe zone** — the central area that remains visible when the video is cropped for mobile viewports.

### 7.2 Rules

- Test reel composition against actual copy. Don't design the video and text separately.
- Don't place important product details permanently under the text area. They will be hidden.
- If the video has a critical visual moment, ensure it's not in a safe zone that will be covered by text.
- Safe zones should be defined as percentage coordinates from each edge, documented per hero placement.

---

## 8. Responsive Media Crops

### 8.1 Requirements

Every important media placement requires:

1. **Desktop crop** — composed for wide viewports.
2. **Mobile crop** — composed for narrow viewports. May be a different aspect ratio.
3. **Focal point** — the critical area of the image that must remain visible at all sizes.

### 8.2 Rules

- Don't assume center crop works everywhere. A wide landscape shot may need to favor the left or right third on mobile.
- Support CMS focal-point metadata in future iterations. For now, provide explicit crop directives per asset.
- Test every hero and featured media placement at: 375px, 768px, 1280px, 1600px.
- If a crop doesn't work at a breakpoint, provide a different crop for that breakpoint. Don't accept a bad crop.

---

## 9. Captions

### 9.1 Specification

- Size: 12–14px.
- Color: muted, technical tone.
- Content: asset caption, process type, stage, material/process label.

### 9.2 Rules

- Never state unverified facts. If uncertain, omit the caption.
- Captions are part of the technical visual language. They add information, not filler.
- Captions can support: asset identification, process type, lifecycle stage, material or process label.

---

## 10. Project Color

### 10.1 Default Behavior

- Projects inherit the core system palette. No arbitrary brand color per project.
- Product imagery and media supply visual identity. The system doesn't need to add color on top.

### 10.2 Project-Specific Background Tone

- Permitted only if derived deliberately from the product or media.
- Must meet accessibility contrast requirements.
- Not required at launch. Default system is sufficient.

### 10.3 Rules

- Don't create a rainbow of project colors. The site should feel cohesive, not like each project is a different brand.
- If a project has strong brand color in its imagery, let the imagery carry it. Don't tint the entire page.
- Dark sections are permitted but they are a structural choice, not a per-project choice.

---

## 11. Process Imagery

### 11.1 Art Direction

- Documentary and tactile: real making, real workshop, real material.
- Not staged marketing photography.
- Show: machines in motion, hands working with materials, prototypes being assembled, surfaces and textures of fabrication.
- The process section should feel like you're standing in the workshop, not looking at a stock photo library.

### 11.2 Rules

- No conceptual renderings passed off as process photography.
- No stock photography of manufacturing. Use real project imagery or nothing.
- If real process imagery doesn't exist for a capability, use the capability description without a photo. Don't fabricate.

---

## 12. Dark Section Rules

### 12.1 Permitted Dark Sections

- Homepage manufacturing section.
- Selected process modules (where the content benefits from contrast).
- Project media transition moments (brief dark interludes between project content).
- Footer.

### 12.2 Rules

- Don't alternate light/dark every section. Dark sections are punctuation, not a pattern.
- Dark mode is not a separate theme at launch. There is one theme. Dark sections are deliberate design choices within that theme.
- When entering a dark section, the transition should feel intentional. Not accidental.
- Text on dark backgrounds: ensure contrast meets WCAG AA minimum (4.5:1 for body text, 3:1 for large text).
- Dark section canvas: warm near-black (e.g., #11110F). Not pure #000000.

---

## 13. Media Composition Principles

### 13.1 Hierarchy

- Every media placement has a purpose. Hero media is dominant. Process media is supporting. Detail media is supplementary.
- The visual weight of media should match its informational importance.

### 13.2 Breathing Room

- Media needs space. Don't pack images tightly against text or other images without intentional gaps.
- Gutters and margins around media are part of the composition.

### 13.3 Consistency Within Context

- Images within the same section or grid should feel related. Similar treatment, similar frame mode, similar visual weight.
- Don't mix full-bleed and document-frame images within the same grid without a clear structural reason.

### 13.4 Intentionality

- Every media placement is a design decision. "We had an empty space so we put an image there" is not a valid reason.
- If a section works better without media, don't add media.

---

## 14. Asset Preparation Guidelines

### 14.1 Formats

- Photographs: WebP with JPEG fallback. AVIF where supported.
- Vector/technical: SVG for logos, diagrams, technical graphics.
- Video: MP4 (H.264) as baseline. WebM as enhancement.

### 14.2 Naming

- Assets should have clear, descriptive filenames.
- Include project identifier and context in filename.
- Example: `project-atlas-hero-front-3q4` not `IMG_4832.jpg`.

### 14.3 Metadata

- Track: source dimensions, aspect ratio, focal point, frame mode recommendation, project association, approval status.
- This metadata enables the frontend to make correct display decisions automatically.

---

## 15. Summary Principles

1. Match the frame to the asset. Don't force low-quality assets into hero placements.
2. Product imagery supplies visual identity. The system supports; it doesn't compete.
3. Every media placement is a design decision. Justify it.
4. Test at every breakpoint. Mobile crops are not afterthoughts.
5. Dark sections are deliberate punctuation, not a pattern.
6. Performance matters. Optimize aggressively. A beautiful image that takes 4 seconds to load is a failed image.
7. When in doubt: contained stage, warm neutral background, honest caption.
8. Process imagery is documentary. Real making, real material. Not staged marketing.
9. Never state unverified facts in captions or metadata.
10. Color comes from the work, not from arbitrary system tints.
