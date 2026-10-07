# 06D — Component Data Contracts

> Every component in the 123.design system has a data contract: what it requires, what it accepts optionally, what it does when data is absent, how it behaves across viewports, and what accessibility and analytics responsibilities it carries. No component renders without a contract. No component accepts arbitrary data outside its contract.

---

## 1. Component Contract Documentation Standard

Every major component document in this system must answer the same set of questions. This standard ensures consistency across all component specifications and makes it possible to audit any component's behavior by reading its contract.

### Required Contract Sections

| Section                          | Purpose                                                                                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Purpose**                      | Defines why the component exists. If it has no purpose, it does not exist.                                                                                                           |
| **Server/Client Designation**    | Determines rendering strategy, data fetching, and SEO implications. Every component is one or the other. Hybrid components must specify which parts are server and which are client. |
| **Props Table**                  | Complete field specification: field name, type, required/optional, description. No ambiguity.                                                                                        |
| **Empty/Missing Data Behavior**  | What happens when required data is missing. Every component has an answer. The answer is never "show a placeholder."                                                                 |
| **Responsive Behavior**          | How the component adapts across mobile (375px), tablet (768px), desktop (1280px), and wide (1600px) viewports.                                                                       |
| **Accessibility Responsibility** | What ARIA roles, keyboard behaviors, focus management, and screen reader semantics the component owns.                                                                               |
| **Analytics Responsibility**     | What events the component emits and what interaction data it captures.                                                                                                               |

### Contract Enforcement Rules

- Components do not accept arbitrary style overrides. Visual properties derive from design tokens and variant props.
- Components do not fetch their own data. Data is passed in or provided by a server component boundary.
- Components do not make decisions about data visibility (e.g., publication state filtering). That is the responsibility of the query layer.
- When required data is absent, the component does not render. It does not render a placeholder, a "coming soon" message, or fabricated content. The parent layout closes the gap.
- No component may invent data. If a field is empty, it is empty. The component reflects truth, not aspiration.

---

## 2. ProjectCard Contract

### Purpose

Displays a project summary in grid/list contexts. The card is a navigation element — it links to the project detail page. It is not a miniature case study.

### Rendering

**Server/Client:** Server. Cards are server-rendered for SEO and initial paint performance. Client hydration handles hover video preview on desktop.

### ProjectCardModel

| Field              | Type                                           | Required | Description                                                                                                                                                                 |
| ------------------ | ---------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | `string`                                       | Yes      | Unique identifier for the project.                                                                                                                                          |
| `slug`             | `string`                                       | Yes      | URL slug for the project detail link.                                                                                                                                       |
| `title`            | `string`                                       | Yes      | Full project display name.                                                                                                                                                  |
| `shortLabel`       | `string \| undefined`                          | No       | Abbreviated name for compact contexts. Falls back to `title` when absent.                                                                                                   |
| `industry`         | `{ slug: string, title: string } \| undefined` | No       | Primary industry as a structured object. `slug` for URL generation, `title` for display. When absent, no industry is shown on the card.                                     |
| `capabilities`     | `{ slug: string, title: string }[]`            | Yes      | Curated list of capability objects. Each has `slug` for linking and `title` for display. Display 2-4 maximum per card. The editor selects which to display.                 |
| `heroMedia`        | `MediaImageModel`                              | Yes      | Primary card image. Required — a project card without a hero image is not a card.                                                                                           |
| `previewVideo`     | `VideoModel \| undefined`                      | No       | Hover preview video for desktop interaction. When absent, the card is image-only.                                                                                           |
| `year`             | `number \| undefined`                          | No       | Project completion year as a numeric value (e.g., `2024`). When absent, no year is displayed.                                                                               |
| `publicationState` | `'PUBLISHED'`                                  | Yes      | Always `'PUBLISHED'` for cards served to the public. This field exists as a contract guarantee — the query layer enforces that only published projects reach the component. |
| `featuredVariant`  | `string \| undefined`                          | No       | Grid placement variant: `standard`, `wide`, `tall`. When absent, defaults to `standard`.                                                                                    |

### CRITICAL: Publication State Enforcement

**Do NOT expose client-review projects through public card queries.** Only projects with `publicationState: 'PUBLISHED'` appear in public card lists. This is enforced at the query layer, not in the component. The component never checks publication state — it receives pre-filtered data.

### Constraints

- `capabilities` is curated. Display 2-4 capabilities maximum per card. If a project has more, the editor selects which to display on the card.
- `heroMedia` is required. A project card without a hero image is not a card — it is a text link. If no hero media exists, the project should not appear in card grids.
- `previewVideo` is optional. When present, it enables the hover video interaction on desktop. When absent, the card is image-only.
- `industry` is a structured object, not a plain string. Both `slug` and `title` are required within the object. The slug enables linking to the industry page; the title enables display.

### Empty Behavior

- If `title` is missing: the card does not render.
- If `heroMedia` is missing: the card does not render. The project may still have a detail page (accessible via direct link), but it does not appear in card grids.
- If `slug` is missing: the card does not render. A card without a destination is not navigable.
- If `id` is missing: the card does not render. Analytics and deduplication depend on it.

### Responsive Behavior

| Viewport | Behavior                                                                          |
| -------- | --------------------------------------------------------------------------------- |
| Mobile   | Single column. Poster image only. No hover video (touch device).                  |
| Tablet   | 2-column grid. No hover video.                                                    |
| Desktop  | 3-column grid (or variant-specific layout). Hover video active on eligible cards. |
| Wide     | Same as desktop with wider grid gutters.                                          |

### Accessibility Responsibility

- Card is a single link (`<a>`) wrapping the entire card. The entire card is clickable.
- The link's accessible name is the project `title`. Industry and capabilities provide additional context via `aria-describedby` or visually hidden text.
- Hover video is decorative enhancement. It does not carry semantic meaning and receives `aria-hidden="true"`.
- Focus state visible on keyboard navigation.

### Analytics Responsibility

| Event                    | Trigger                    | Payload                                                               |
| ------------------------ | -------------------------- | --------------------------------------------------------------------- |
| `card_click`             | User clicks the card       | `{ project_id, project_slug, title, variant, page_path, section_id }` |
| `card_hover_video_start` | Hover video begins playing | `{ project_id, project_slug, page_path }`                             |
| `card_visible`           | Card enters viewport       | `{ project_id, project_slug, variant, page_path, section_id }`        |

---

## 3. ProjectCard Media Logic

### Purpose

Defines the precise loading and playback sequence for project card media, balancing visual richness with performance discipline.

### Render Order (Desktop)

The media lifecycle follows a strict sequential order:

```
1. Poster/image rendered immediately
   |  Server-rendered. Eager-loaded for priority cards (LCP candidate).
   |  This is the guaranteed visual. Video is an enhancement.
   |
2. Hover interaction detected
   |  mouseenter event with 200ms debounce.
   |  Debounce prevents video loading on accidental cursor crossings.
   |
3. Video element created, source loaded
   |  Network fetch begins only at this point.
   |  Never preload all card videos on page load.
   |
4. Preview starts after required delay
   |  Video readyState >= 3 (HAVE_FUTURE_DATA) confirmed.
   |  No spinner, no loading state visible to the user.
   |  If the video is not ready, the poster remains visible.
   |
5. Interaction ends (mouseleave)
   |
6. Preview stops immediately
   |  No fade-out, no trailing frames.
   |  Video element paused.
   |
7. After timeout (5s), video element removed from DOM
   |  Frees memory. Do not keep dozens of video elements in the DOM.
```

### Mobile/Tablet Behavior

```
1. Poster/image rendered immediately
2. No hover video. Touch devices do not support hover interaction.
3. Poster only unless explicitly activated (future enhancement, not Phase 3 scope).
```

### Reduced Motion Behavior

```
1. Poster/image rendered immediately
2. No hover video. No autoplay. No animation.
3. Static poster only.
```

This applies when `prefers-reduced-motion: reduce` is detected.

### Rules

- The poster image is always rendered first. It is the guaranteed visual. Video is an enhancement.
- Video loads ONLY on eligible desktop interaction. Never preload all card videos on page load.
- Video preview starts only after the video has sufficient buffered data. No spinner, no loading state visible to the user. If the video is not ready, the poster remains.
- Preview stops immediately when the interaction ends. No fade-out, no trailing frames.
- Video elements are cleaned up after the interaction ends plus a timeout. Do not keep dozens of video elements in the DOM.
- Maximum one hover video playing at any time. If the user moves between cards rapidly, the previous video stops before the new one starts.

---

## 4. Filter Architecture

### Purpose

Portfolio filters are client-interactive but content starts server-rendered. The initial page load delivers a complete, SEO-friendly project list. Filters refine the displayed set without requiring a full page reload.

### Rendering

**Server/Client:** Hybrid. The initial project list is server-rendered. Filter controls and client-side filtering are client components. URL state synchronization is a client responsibility.

### Initial Request

- Server renders the full published project list.
- The server does not process filter query parameters for the initial HTML. All published projects are in the DOM.
- Filter state is applied client-side on hydration.
- Filters operate on published data only. Draft or client-review projects are never part of the filterable set.

### URL State Parameters

Filter state is reflected in the URL query string. The URL is the source of truth for filter state.

| Parameter    | Type          | Example                   |
| ------------ | ------------- | ------------------------- |
| `industry`   | string (slug) | `?industry=medical`       |
| `capability` | string (slug) | `?capability=prototyping` |
| `stage`      | string (code) | `?stage=dvt`              |

Combined filters: `?industry=medical&capability=prototyping`

### Constraints

- **Do NOT store filter state only in memory.** The URL is the source of truth for filter state.
- **Back/forward navigation must work.** When the user navigates back, the previous filter state restores from the URL.
- Filter values only render if at least one published project uses them. If no published projects exist for "Medical", do not show Medical as a filter option.
- Filters combine with AND logic. Selecting "Consumer Products" + "Industrial Design" shows only projects matching both.
- When a filter combination produces zero results, display a clear empty state: "No projects match this combination" with a "Clear filters" action.

### Filter Availability Logic

```
For each filter dimension (industry, capability, stage):
  1. Count published projects per value
  2. Remove values with zero count
  3. Render remaining values with their counts
  4. When another filter is active, recount based on the intersection
```

Example: If "Medical" filter is active, the capability filter shows only capabilities that have at least one published Medical project.

### Empty Behavior

- If no filters are active: all published projects display.
- If all filters are cleared: all published projects display. URL returns to `/work` with no query parameters.
- If a filter combination produces zero results: empty state renders with clear text and a "Clear filters" action.

### Responsive Behavior

| Viewport | Behavior                                                                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile   | Single "FILTER" button opens bottom sheet. Active count displayed: "FILTERS (2)". Bottom sheet dismissible by tap outside, close button, or Escape key. |
| Tablet   | Horizontal filter controls. Same interaction as desktop.                                                                                                |
| Desktop  | Horizontal filter controls. Compact, text labels, subtle borders. Active state: dark fill or strong contrast.                                           |
| Wide     | Same as desktop.                                                                                                                                        |

### Accessibility Responsibility

- Filter controls are keyboard accessible.
- Filter changes announce via live region: "X projects match these filters" or "No projects match these filters."
- Bottom sheet (mobile): focus trap when open. Escape to close. Focus returns to trigger button on close.
- Active filters are visually and programmatically indicated.

### Analytics Responsibility

| Event                 | Trigger                                  | Payload                             |
| --------------------- | ---------------------------------------- | ----------------------------------- |
| `filter_apply`        | User applies a filter value              | `{ dimension, value, page_path }`   |
| `filter_clear`        | User clears all filters                  | `{ page_path, previous_filters[] }` |
| `filter_empty_result` | Filter combination produces zero results | `{ page_path, active_filters[] }`   |

---

## 5. Filter SEO Rule

### Canonical URL

- The canonical URL for the work index is `/work` — always.
- Filtered query-string states (`/work?industry=medical`, `/work?capability=prototyping&stage=dvt`) are NOT separate pages. They are views of the same page.
- The `<link rel="canonical">` tag always points to `/work` regardless of active filters.

### Sitemap Exclusion

- Only `/work` appears in the sitemap. Not `/work?industry=medical` or any other filtered variant.
- **Do NOT create indexable combinatorial filter pages automatically.** The number of filter combinations is potentially large (6 industries x 10 capabilities x 5 stages = 300 combinations). Indexing all of them would create thin/duplicate content.

### Meta Tags

- `<title>` and `<meta description>` do not change based on filter state. They describe the work index page, not the filtered view.
- Exception: if a future editorial need arises for specific filter-landing pages (e.g., `/work/medical` as a curated editorial page), that is a separate route with its own CMS-driven content — not a filter state.

### Robots

- Query-string variations of `/work` are not blocked by `robots.txt`. They are simply not linked from the sitemap and carry canonical tags pointing to `/work`.
- If needed in the future, a `noindex` directive can be applied to filtered states. This is not required in Phase 3 because the canonical tag already handles the signal.

---

## 6. Key Component Contracts

### 6.1 ProjectGrid

#### Purpose

Renders a collection of ProjectCards in a responsive grid layout. Handles empty states and layout variants.

#### Rendering

**Server/Client:** Server. The grid and its cards are server-rendered for SEO. Client hydration handles any interactive layout adjustments.

#### Props

| Field           | Type                 | Required | Description                                                                                         |
| --------------- | -------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `projects`      | `ProjectCardModel[]` | Yes      | Array of project card data objects. Each must conform to the ProjectCardModel contract (Section 2). |
| `layoutVariant` | `enum`               | No       | `grid` (default), `masonry`, `featured-mixed`. Controls grid arrangement.                           |
| `emptyMessage`  | `string`             | No       | Custom message when `projects` is empty. Defaults to "No projects to display."                      |

#### Empty/Missing Data Behavior

- If `projects` is an empty array: the grid renders the empty state message. No cards, no grid structure.
- If `projects` is missing/null: the grid does not render at all. The parent layout closes the gap.

#### Responsive Behavior

| Viewport | Behavior                                   |
| -------- | ------------------------------------------ |
| Mobile   | Single column. Cards stack vertically.     |
| Tablet   | 2-column grid.                             |
| Desktop  | 3-column grid, or variant-specific layout. |
| Wide     | Same as desktop with wider gutters.        |

#### Accessibility Responsibility

- Grid uses `role="list"` with each card as `role="listitem"` when cards are uniform. For featured-mixed variant, uses semantic heading to introduce the section.
- Announces project count: "Showing X projects."

#### Analytics Responsibility

| Event          | Trigger                      | Payload                                                    |
| -------------- | ---------------------------- | ---------------------------------------------------------- |
| `grid_visible` | Grid section enters viewport | `{ project_count, layout_variant, page_path, section_id }` |

---

### 6.2 FeaturedProject

#### Purpose

Displays a single project with elevated visual treatment. Used for hero-adjacent or highlighted placements within a project grid or standalone section.

#### Rendering

**Server/Client:** Server. The featured project is server-rendered for SEO and LCP performance. Client hydration handles hover video if present.

#### Props

| Field     | Type               | Required | Description                                                                                               |
| --------- | ------------------ | -------- | --------------------------------------------------------------------------------------------------------- |
| `project` | `ProjectCardModel` | Yes      | Full project card data with `featuredVariant` set. Must conform to ProjectCardModel contract (Section 2). |

#### Behavior Specification

- Receives a ProjectCardModel where `featuredVariant` is set to `wide` or `tall`.
- Larger media treatment: the hero image occupies more visual space than a standard card.
- `wide` variant: media left + metadata right, or full-width media with overlaid text.
- `tall` variant: taller aspect ratio, media-dominant with metadata below.
- Hover video follows the same media logic as ProjectCard (Section 3).

#### Empty/Missing Data Behavior

- If `project` is missing/null: the featured project does not render. The parent layout closes the gap.
- If `project.heroMedia` is missing: does not render (inherited from ProjectCard contract).

#### Responsive Behavior

| Viewport | Behavior                                                                  |
| -------- | ------------------------------------------------------------------------- |
| Mobile   | Full-width, single column. Media stacks above metadata.                   |
| Tablet   | May occupy full width or half-width depending on grid context.            |
| Desktop  | Side-by-side layout for `wide` variant. Taller aspect for `tall` variant. |
| Wide     | Same as desktop with wider gutters.                                       |

#### Accessibility Responsibility

- Entire component is a single link to the project detail page.
- Accessible name is the project `title`.
- Hover video receives `aria-hidden="true"`.

#### Analytics Responsibility

| Event              | Trigger                          | Payload                                                     |
| ------------------ | -------------------------------- | ----------------------------------------------------------- |
| `featured_click`   | User clicks the featured project | `{ project_id, project_slug, featured_variant, page_path }` |
| `featured_visible` | Featured project enters viewport | `{ project_id, project_slug, featured_variant, page_path }` |

---

### 6.3 CapabilityCard

#### Purpose

Displays a capability summary in index/grid contexts. Links to the capability detail page.

#### Rendering

**Server/Client:** Server. Cards are server-rendered for SEO.

#### CapabilityCardModel

| Field              | Type                           | Required | Description                                                                    |
| ------------------ | ------------------------------ | -------- | ------------------------------------------------------------------------------ |
| `slug`             | `string`                       | Yes      | URL slug for the capability detail link.                                       |
| `title`            | `string`                       | Yes      | Capability display name.                                                       |
| `shortDescription` | `string`                       | Yes      | Brief description displayed on the card.                                       |
| `heroMedia`        | `MediaImageModel \| undefined` | No       | Optional hero image. When absent, the card renders with a text-only treatment. |

#### Empty/Missing Data Behavior

- If `title` is missing: the card does not render.
- If `slug` is missing: the card does not render.
- If `shortDescription` is missing: the card does not render. A card without a description provides no information.
- If `heroMedia` is absent: the card renders with text-only treatment. This is a valid state, not an error.

#### Responsive Behavior

| Viewport | Behavior                               |
| -------- | -------------------------------------- |
| Mobile   | Single column. Cards stack vertically. |
| Tablet   | 2-column grid.                         |
| Desktop  | 3-4 column grid depending on context.  |
| Wide     | Same as desktop with wider gutters.    |

#### Accessibility Responsibility

- Card is a single link wrapping the entire card.
- Accessible name is the capability `title`.
- `shortDescription` provides additional context via `aria-describedby`.

#### Analytics Responsibility

| Event          | Trigger              | Payload                                             |
| -------------- | -------------------- | --------------------------------------------------- |
| `card_click`   | User clicks the card | `{ capability_slug, title, page_path, section_id }` |
| `card_visible` | Card enters viewport | `{ capability_slug, title, page_path, section_id }` |

---

### 6.4 IndustryCard

#### Purpose

Displays an industry summary in index/grid contexts. Links to the industry detail page.

#### Rendering

**Server/Client:** Server. Cards are server-rendered for SEO.

#### Props (IndustryPageModel Summary)

| Field              | Type                           | Required | Description                                                              |
| ------------------ | ------------------------------ | -------- | ------------------------------------------------------------------------ |
| `title`            | `string`                       | Yes      | Industry display name.                                                   |
| `slug`             | `string`                       | Yes      | URL slug for the industry detail link.                                   |
| `shortDescription` | `string`                       | Yes      | Brief description displayed on the card.                                 |
| `heroMedia`        | `MediaImageModel \| undefined` | No       | Optional hero image.                                                     |
| `projectCount`     | `number \| undefined`          | No       | Number of published projects in this industry. Displayed when available. |

#### Empty/Missing Data Behavior

- If `title` is missing: the card does not render.
- If `slug` is missing: the card does not render.
- If `shortDescription` is missing: the card does not render.
- If `heroMedia` is absent: the card renders with text-only treatment.

#### Responsive Behavior

| Viewport | Behavior                               |
| -------- | -------------------------------------- |
| Mobile   | Single column. Cards stack vertically. |
| Tablet   | 2-column grid.                         |
| Desktop  | 3-column grid.                         |
| Wide     | Same as desktop with wider gutters.    |

#### Accessibility Responsibility

- Card is a single link wrapping the entire card.
- Accessible name is the industry `title`.

#### Analytics Responsibility

| Event          | Trigger              | Payload                                           |
| -------------- | -------------------- | ------------------------------------------------- |
| `card_click`   | User clicks the card | `{ industry_slug, title, page_path, section_id }` |
| `card_visible` | Card enters viewport | `{ industry_slug, title, page_path, section_id }` |

---

### 6.5 ArticleCard

#### Purpose

Displays an article/insight summary in list or grid contexts. Links to the article detail page.

#### Rendering

**Server/Client:** Server. Cards are server-rendered for SEO.

#### ArticleCardModel

| Field             | Type                           | Required | Description                                                                  |
| ----------------- | ------------------------------ | -------- | ---------------------------------------------------------------------------- |
| `slug`            | `string`                       | Yes      | URL slug for the article detail link.                                        |
| `title`           | `string`                       | Yes      | Article headline.                                                            |
| `excerpt`         | `string`                       | Yes      | Brief summary displayed on the card.                                         |
| `author`          | `string`                       | Yes      | Author display name.                                                         |
| `publicationDate` | `string`                       | Yes      | ISO 8601 date string for display and `<time>` element.                       |
| `heroMedia`       | `MediaImageModel \| undefined` | No       | Optional hero image. When absent, the card renders with text-only treatment. |
| `category`        | `string \| undefined`          | No       | Article category/section label.                                              |

#### Empty/Missing Data Behavior

- If `title` is missing: the card does not render.
- If `slug` is missing: the card does not render.
- If `excerpt` is missing: the card does not render.
- If `author` is missing: the card does not render.
- If `publicationDate` is missing: the card does not render.
- If `heroMedia` is absent: the card renders with text-only treatment.
- If `category` is absent: no category label is displayed. This is valid.

#### Responsive Behavior

| Viewport | Behavior                                |
| -------- | --------------------------------------- |
| Mobile   | Single column. Media stacks above text. |
| Tablet   | 2-column grid or horizontal list.       |
| Desktop  | 3-column grid or horizontal list.       |
| Wide     | Same as desktop with wider gutters.     |

#### Accessibility Responsibility

- Card is a single link wrapping the entire card.
- Accessible name is the article `title`.
- `publicationDate` renders as `<time datetime="...">` for machine readability.
- Author and date provide additional context via `aria-describedby`.

#### Analytics Responsibility

| Event          | Trigger              | Payload                                                    |
| -------------- | -------------------- | ---------------------------------------------------------- |
| `card_click`   | User clicks the card | `{ article_slug, title, category, page_path, section_id }` |
| `card_visible` | Card enters viewport | `{ article_slug, title, page_path, section_id }`           |

---

### 6.6 MediaFrame

#### Purpose

Critical system component. Every media placement on the site uses one of three frame modes. MediaFrame normalizes how images and video are presented, ensuring consistent visual treatment regardless of source asset quality.

#### Rendering

**Server/Client:** Server. The initial frame and media element are server-rendered for LCP performance. Client-side hydration handles lazy-loading of video and responsive behavior.

#### Props

| Field         | Type                       | Required | Description                                                                                       |
| ------------- | -------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `media`       | `MediaItem`                | Yes      | Reference to the image or video asset. See ResponsiveImage (6.7) and VideoPlayer (6.8) contracts. |
| `mode`        | `enum`                     | Yes      | `fullBleed`, `containedStage`, `documentFrame`. The three frame modes are the complete set.       |
| `aspectRatio` | `string`                   | No       | `4:3`, `16:10`, `16:9`, `3:2`, `1:1`, `auto`. Default: `auto`.                                    |
| `focalPoint`  | `{ x: number, y: number }` | No       | 0-1 range. Used for `object-position` when cropping. Default: center.                             |
| `caption`     | `string`                   | No       | Displayed below or overlaid on the media.                                                         |
| `priority`    | `boolean`                  | No       | Eager loading flag. Only one per page. Default: `false`.                                          |
| `sizes`       | `string`                   | No       | Valid `sizes` attribute value. Default: responsive calculation.                                   |

#### Background Constraint

**Background from approved finite set only.** When `mode` is `containedStage`, the stage background uses an approved finite set: `warm-white`, `pure-white`, `near-black`, `graphite`, `light-neutral`. No arbitrary CMS background colors. No editor-selected hex values. No gradient backgrounds.

#### Empty/Missing Data Behavior

- If `media` is missing or null: the MediaFrame does not render. The parent layout closes the gap.
- If `media` is present but the asset URL is invalid: the MediaFrame does not render. No broken image icon. No placeholder graphic.

#### Responsive Behavior

| Viewport | Behavior                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| Mobile   | Frame scales to viewport width. `containedStage` padding reduces proportionally. `fullBleed` remains edge-to-edge. |
| Tablet   | Frame scales to container width. Aspect ratio maintained.                                                          |
| Desktop  | Full treatment. All frame modes render at designed dimensions.                                                     |
| Wide     | No change from desktop unless container is wider than max content width.                                           |

#### Accessibility Responsibility

- Renders `<figure>` when caption is present, `<div>` with `role="figure"` when caption is absent.
- Caption renders as `<figcaption>`.
- `priority` images use `fetchpriority="high"` and `loading="eager"`. Non-priority images use `loading="lazy"`.
- Decorative images receive `alt=""` and `aria-hidden="true"`.
- Video within MediaFrame inherits VideoPlayer contract accessibility requirements.

#### Analytics Responsibility

| Event           | Trigger                                        | Payload                                                     |
| --------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `media_visible` | Media enters viewport (50% threshold)          | `{ mode, aspect_ratio, media_type, page_path, section_id }` |
| `media_click`   | User clicks the media element (if interactive) | `{ mode, media_type, page_path }`                           |

---

### 6.7 ResponsiveImage

#### Purpose

Defines the data model and rendering rules for every CMS-driven image on the site. Every image passes through this contract whether it appears in a hero, a card, a gallery, or an article body.

#### Rendering

**Server/Client:** Server. Images are server-rendered with proper `srcset`, `sizes`, and `width`/`height` attributes for optimal LCP and CLS performance.

#### Props

| Field         | Type                                                      | Required    | Description                                                                                              |
| ------------- | --------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `asset`       | `object`                                                  | Yes         | Reference to the image asset (URL, dimensions, format).                                                  |
| `alt`         | `string`                                                  | Conditional | Descriptive text for non-decorative images. **Must NOT be generated automatically from filename.**       |
| `decorative`  | `boolean`                                                 | No          | When true, image is purely decorative. Renders with `alt=""` and `aria-hidden="true"`. Default: `false`. |
| `caption`     | `string`                                                  | No          | Displayed below or overlaid on the image.                                                                |
| `hotspot`     | `{ x: number, y: number, width: number, height: number }` | No          | Sanity hotspot/crop metadata for intelligent cropping.                                                   |
| `focalPoint`  | `{ x: number, y: number }`                                | No          | 0-1 range. Used for `object-position` when cropping.                                                     |
| `width`       | `number`                                                  | Yes         | Original asset width in pixels. Required for CLS prevention.                                             |
| `height`      | `number`                                                  | Yes         | Original asset height in pixels. Required for CLS prevention.                                            |
| `crop`        | `object`                                                  | No          | Crop metadata from CMS.                                                                                  |
| `displayMode` | `enum`                                                    | No          | `fullBleed`, `containedStage`, `documentFrame`. Overrides parent MediaFrame mode if set.                 |
| `priority`    | `boolean`                                                 | No          | Eager loading flag. Only one per page. Default: `false`.                                                 |

#### Alt Text Rules

- `alt` must be written by a human who understands the image content and its context.
- **`alt` must NOT be generated automatically from filename.** Filenames are internal identifiers, not descriptions.
- `alt` must NOT be generated by AI without human review. Auto-generated alt text may be technically accurate but contextually wrong.
- When `decorative` is true, `alt` is ignored and the image renders with `alt=""`.
- When `decorative` is false and `alt` is empty: the image renders but a CMS validation warning is raised. Missing alt on a non-decorative image is a content quality issue, not a rendering blocker.

#### Empty/Missing Data Behavior

- If `asset` is missing: the image does not render. No placeholder image. No broken image icon.
- If `width` or `height` is missing: the image does not render. These are required for CLS prevention.

#### Responsive Behavior

- `srcset` generated at standard breakpoints: 320w, 640w, 768w, 1024w, 1280w, 1536w, 1920w, 2048w.
- `sizes` attribute reflects the component's layout context.
- Format negotiation: WebP/AVIF preferred, JPEG fallback.
- `width` and `height` attributes always set on the `<img>` element to prevent CLS.

---

### 6.8 VideoPlayer

#### Purpose

Defines the data model and behavioral rules for every video element on the site. Video behavior derives from its declared purpose. Authors do not manually configure contradictory video behavior.

#### Rendering

**Server/Client:** Client. Video elements require client-side interaction handling (play/pause, hover preview, mute controls). The poster image is server-rendered for LCP. The `<video>` element hydrates on the client.

#### Props

| Field         | Type         | Required | Description                                                             |
| ------------- | ------------ | -------- | ----------------------------------------------------------------------- |
| `source`      | `object`     | Yes      | Video asset reference (URL, format, dimensions).                        |
| `poster`      | `MediaImage` | Yes      | Poster image displayed before playback. Required even for autoplay.     |
| `width`       | `number`     | Yes      | Original video width. Required for layout stability.                    |
| `height`      | `number`     | Yes      | Original video height. Required for layout stability.                   |
| `duration`    | `number`     | No       | Duration in seconds. Used for progress indicators and accessibility.    |
| `muted`       | `boolean`    | No       | Default: derives from `purpose`.                                        |
| `autoplay`    | `boolean`    | No       | Default: derives from `purpose`.                                        |
| `loop`        | `boolean`    | No       | Default: derives from `purpose`.                                        |
| `controls`    | `boolean`    | No       | Default: derives from `purpose`.                                        |
| `playsInline` | `boolean`    | No       | Default: `true`. Required for iOS inline playback.                      |
| `caption`     | `string`     | No       | Displayed caption for the video.                                        |
| `transcript`  | `string`     | No       | Full transcript for accessibility. Required when video contains speech. |
| `purpose`     | `enum`       | Yes      | Determines behavioral defaults. See Purpose Enum below.                 |

#### Purpose Enum

Behavior derives from purpose. Do not let authors manually configure contradictory video behavior.

| Purpose            | Autoplay         | Muted | Loop | Controls | Context                                                    |
| ------------------ | ---------------- | ----- | ---- | -------- | ---------------------------------------------------------- |
| `heroReel`         | Yes (on visible) | Yes   | Yes  | No       | Homepage hero background reel. Plays silently, loops.      |
| `hoverPreview`     | No               | Yes   | No   | No       | Project card hover video. Desktop interaction only.        |
| `projectVideo`     | No               | No    | No   | Yes      | Embedded project video. User-initiated with full controls. |
| `processVideo`     | No               | Yes   | Yes  | No       | Manufacturing/process documentation. Informational.        |
| `testimonialVideo` | No               | No    | No   | Yes      | Client testimonial. User-initiated. Transcript required.   |

#### Behavior Derivation Rules

- The `purpose` field determines default values for `autoplay`, `muted`, `loop`, and `controls`.
- If an author sets `autoplay: true` with `purpose: projectVideo`, the system overrides to `autoplay: false`.
- If an author sets `controls: false` with `purpose: testimonialVideo`, the system overrides to `controls: true`.
- These are safety overrides, not suggestions. The purpose enum is the source of truth.

#### Empty/Missing Data Behavior

- If `source` is missing: the video does not render. The poster image may render as a static image if available.
- If `poster` is missing: the video does not render. A video without a poster creates a blank space before load.
- If `purpose` is missing: the video does not render. Behavior cannot be determined without purpose.

#### Responsive Behavior

| Viewport | Behavior                                                                             |
| -------- | ------------------------------------------------------------------------------------ |
| Mobile   | Video scales to viewport width. `playsInline` always true. Controls sized for touch. |
| Tablet   | Video scales to container width. Hover preview not active (touch-only device).       |
| Desktop  | Full treatment. Hover preview active on project cards.                               |
| Wide     | No change from desktop.                                                              |

#### Accessibility Responsibility

- Videos with speech require a transcript displayed in an expandable section.
- `heroReel` and `processVideo` are muted and decorative — receive `aria-hidden="true"` when they contain no meaningful audio.
- All video controls are keyboard accessible.
- Videos must not autoplay with sound.
- Respect `prefers-reduced-motion`: autoplaying videos pause. Poster image remains visible.

#### Analytics Responsibility

| Event            | Trigger                       | Payload                                             |
| ---------------- | ----------------------------- | --------------------------------------------------- |
| `video_play`     | User initiates playback       | `{ purpose, page_path, section_id, video_source }`  |
| `video_complete` | Video reaches end             | `{ purpose, page_path, duration, percent_watched }` |
| `video_visible`  | Video element enters viewport | `{ purpose, page_path, section_id }`                |

---

### 6.9 StartProjectWizard

#### Purpose

Multi-step lead capture form. Guides potential clients through a structured intake process to generate a qualified project inquiry.

#### Rendering

**Server/Client:** Client. The wizard is a fully client-side interactive component. Form state, step navigation, validation, and submission all require client-side JavaScript.

#### Props

| Field      | Type                    | Required | Description                                                                                  |
| ---------- | ----------------------- | -------- | -------------------------------------------------------------------------------------------- |
| `settings` | `LeadFormSettingsModel` | Yes      | Form configuration: fields, steps, validation rules, submission endpoint, confirmation copy. |
| `onSubmit` | `function`              | Yes      | Callback invoked when the form is successfully submitted. Receives the form data payload.    |

#### Empty/Missing Data Behavior

- If `settings` is missing: the wizard does not render. A form without configuration is not a form.
- If `onSubmit` is missing: the wizard does not render. A form without a submission handler has no purpose.

#### Responsive Behavior

| Viewport | Behavior                                                                 |
| -------- | ------------------------------------------------------------------------ |
| Mobile   | Single-column step layout. Full-width inputs. Progress indicator at top. |
| Tablet   | Single-column step layout. Wider inputs.                                 |
| Desktop  | Centered form with max-width. Progress indicator visible.                |
| Wide     | Same as desktop.                                                         |

#### Accessibility Responsibility

- Each step has a visible progress indicator (e.g., "Step 2 of 5").
- Form labels are always visible. No placeholder-only labels.
- Validation errors appear inline, adjacent to the relevant field.
- Error messages are associated via `aria-describedby`.
- Step transitions announce via live region.
- Submit button shows loading state with `aria-busy="true"`.
- On successful submission, confirmation message is focused.

#### Analytics Responsibility

| Event         | Trigger                    | Payload                                 |
| ------------- | -------------------------- | --------------------------------------- |
| `form_step`   | User advances to next step | `{ step_number, step_name, page_path }` |
| `form_submit` | User submits the form      | `{ page_path, step_count }`             |
| `form_error`  | Validation error occurs    | `{ field_name, error_type, page_path }` |

---

### 6.10 FilterControl

#### Purpose

Client-side filter control bar. Renders filter options for portfolio/industry/capability filtering and synchronizes state with the URL.

#### Rendering

**Server/Client:** Client. Filter controls are interactive and manage URL state. They receive available filter data from the server but handle all interaction client-side.

#### Props

| Field              | Type                | Required | Description                                                                                                                    |
| ------------------ | ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `availableFilters` | `FilterDimension[]` | Yes      | Available filter dimensions and their values. Each dimension has a name (e.g., "industry") and an array of values with counts. |
| `currentUrlState`  | `URLSearchParams`   | Yes      | Current URL query parameters. Used to determine which filters are active.                                                      |
| `onChange`         | `function`          | Yes      | Callback invoked when a filter value is toggled. Receives the updated filter state. Responsible for URL update.                |

#### Empty/Missing Data Behavior

- If `availableFilters` is empty: the filter control does not render. No filters means no filtering UI.
- If `currentUrlState` is missing: the filter control does not render. It cannot determine active state.
- If `onChange` is missing: the filter control does not render. Non-interactive filters are useless.

#### Responsive Behavior

| Viewport | Behavior                                                         |
| -------- | ---------------------------------------------------------------- |
| Mobile   | Single "FILTER" button opens bottom sheet. Active count badge.   |
| Tablet   | Horizontal filter controls.                                      |
| Desktop  | Horizontal filter controls. Compact text labels, subtle borders. |
| Wide     | Same as desktop.                                                 |

#### Accessibility Responsibility

- Filter controls are keyboard accessible.
- Filter changes announce via live region: "X projects match these filters."
- Bottom sheet (mobile): focus trap when open. Escape to close. Focus returns to trigger on close.
- Active filters are visually and programmatically indicated.

#### Analytics Responsibility

| Event                 | Trigger                                  | Payload                             |
| --------------------- | ---------------------------------------- | ----------------------------------- |
| `filter_apply`        | User applies a filter value              | `{ dimension, value, page_path }`   |
| `filter_clear`        | User clears all filters                  | `{ page_path, previous_filters[] }` |
| `filter_empty_result` | Filter combination produces zero results | `{ page_path, active_filters[] }`   |

---

### 6.11 Header

#### Purpose

Site-wide navigation header. Provides primary navigation, mobile menu, and brand identity.

#### Rendering

**Server/Client:** Client for mobile nav. The header's desktop navigation links are server-rendered for SEO. The mobile navigation drawer, hamburger menu toggle, and scroll-aware behavior are client-side.

#### Props

| Field        | Type              | Required | Description                                                                |
| ------------ | ----------------- | -------- | -------------------------------------------------------------------------- |
| `navigation` | `NavigationModel` | Yes      | Complete navigation structure: primary links, secondary links, CTA button. |

#### NavigationModel Structure

| Field            | Type                                                 | Description                                   |
| ---------------- | ---------------------------------------------------- | --------------------------------------------- |
| `primaryLinks`   | `{ label: string, href: string, active: boolean }[]` | Main navigation items.                        |
| `secondaryLinks` | `{ label: string, href: string }[]`                  | Secondary/utility navigation items.           |
| `cta`            | `{ label: string, href: string } \| undefined`       | Optional call-to-action button in the header. |
| `logo`           | `{ src: string, alt: string }`                       | Brand logo.                                   |

#### Empty/Missing Data Behavior

- If `navigation` is missing: the header does not render. A site without navigation is broken — this should be treated as a critical error.
- If `primaryLinks` is empty: the header renders with logo only. No navigation items.
- If `logo` is missing: the header renders with text-based brand name fallback.

#### Responsive Behavior

| Viewport | Behavior                                                                    |
| -------- | --------------------------------------------------------------------------- |
| Mobile   | Logo left, hamburger menu right. Full-screen or slide-in navigation drawer. |
| Tablet   | Logo left, horizontal nav links. Hamburger if links overflow.               |
| Desktop  | Logo left, horizontal nav links center/right, CTA button far right.         |
| Wide     | Same as desktop with wider max-width.                                       |

#### Accessibility Responsibility

- Header is a `<header>` landmark element.
- Navigation is a `<nav>` with `aria-label="Primary"`.
- Mobile menu: focus trap when open. Escape to close. Focus returns to hamburger button on close.
- Logo link has accessible name matching the brand.
- Active page link is indicated programmatically (`aria-current="page"`).

#### Analytics Responsibility

| Event               | Trigger                       | Payload                      |
| ------------------- | ----------------------------- | ---------------------------- |
| `nav_click`         | User clicks a navigation link | `{ label, href, page_path }` |
| `cta_click`         | User clicks the header CTA    | `{ label, href, page_path }` |
| `mobile_menu_open`  | Mobile menu opens             | `{ page_path }`              |
| `mobile_menu_close` | Mobile menu closes            | `{ page_path }`              |

---

### 6.12 ProjectHero

#### Purpose

Hero section for project detail pages. Displays the project title, industry, capabilities, and hero media in a prominent layout.

#### Rendering

**Server/Client:** Server. The hero is server-rendered for SEO (contains the page's `<h1>`) and LCP (hero media is the priority image).

#### Props (ProjectPageModel Hero Data)

| Field              | Type                                           | Required | Description                                             |
| ------------------ | ---------------------------------------------- | -------- | ------------------------------------------------------- |
| `title`            | `string`                                       | Yes      | Project name. Renders as the page's single `<h1>`.      |
| `industry`         | `{ slug: string, title: string } \| undefined` | No       | Primary industry. Displayed as a link when present.     |
| `capabilities`     | `{ slug: string, title: string }[]`            | Yes      | Project capabilities. Displayed as tags or inline list. |
| `heroMedia`        | `MediaImageModel`                              | Yes      | Hero image or video. Priority-loaded for LCP.           |
| `shortDescription` | `string \| undefined`                          | No       | Brief project summary displayed below the title.        |
| `year`             | `number \| undefined`                          | No       | Project year displayed in the metadata area.            |

#### Empty/Missing Data Behavior

- If `title` is missing: the hero does not render. A project page without a title has no identity.
- If `heroMedia` is missing: the hero does not render. The project detail page cannot display without a hero.
- If `capabilities` is empty: the hero renders without capability tags. The metadata row is shorter but valid.

#### Responsive Behavior

| Viewport | Behavior                                                           |
| -------- | ------------------------------------------------------------------ |
| Mobile   | Media full-width above title. Title and metadata below.            |
| Tablet   | Media and title side-by-side or stacked depending on aspect ratio. |
| Desktop  | Large hero media with overlaid or adjacent title and metadata.     |
| Wide     | Same as desktop with wider max-width.                              |

#### Accessibility Responsibility

- Title renders as the single `<h1>` on the page.
- Hero media has `priority` flag for eager loading.
- Industry link has accessible name.
- Capability list uses appropriate list semantics.

#### Analytics Responsibility

| Event                 | Trigger                       | Payload                        |
| --------------------- | ----------------------------- | ------------------------------ |
| `hero_visible`        | Hero section enters viewport  | `{ project_slug, page_path }`  |
| `industry_link_click` | User clicks the industry link | `{ industry_slug, page_path }` |

---

### 6.13 ProcessMap

#### Purpose

Visualizes the product development lifecycle stages. Shows where a project or capability fits within the overall process.

#### Rendering

**Server/Client:** Server. The process map is server-rendered for SEO. Client hydration handles any interactive stage selection or animation.

#### Props (Process Data with Stages)

| Field      | Type                  | Required | Description                                                                                               |
| ---------- | --------------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `stages`   | `ProcessStage[]`      | Yes      | Ordered array of lifecycle stages. Each stage has `code`, `title`, `shortDescription`, and `active` flag. |
| `variant`  | `enum`                | No       | `horizontal` (default), `vertical`. Layout orientation.                                                   |
| `headline` | `string \| undefined` | No       | Section heading above the process map.                                                                    |

#### ProcessStage Structure

| Field              | Type      | Description                                                      |
| ------------------ | --------- | ---------------------------------------------------------------- |
| `code`             | `string`  | Stage identifier (e.g., `EVT`, `DVT`, `PVT`).                    |
| `title`            | `string`  | Display name for the stage.                                      |
| `shortDescription` | `string`  | Brief description of what happens in this stage.                 |
| `active`           | `boolean` | Whether this stage is highlighted/active in the current context. |

#### Empty/Missing Data Behavior

- If `stages` is empty: the process map does not render. A process map without stages has no content.
- If `stages` is missing: the process map does not render.

#### Responsive Behavior

| Viewport | Behavior                                                                      |
| -------- | ----------------------------------------------------------------------------- |
| Mobile   | Horizontal scroll or vertical stack. Stage labels readable without squinting. |
| Tablet   | Horizontal layout with connecting lines.                                      |
| Desktop  | Full horizontal layout with connecting lines and active stage highlighted.    |
| Wide     | Same as desktop with wider max-width.                                         |

#### Accessibility Responsibility

- Stage list uses `role="list"` with ordered semantics.
- Active stage is indicated programmatically (`aria-current="step"` or similar).
- Connecting lines are decorative — `aria-hidden="true"`.
- Keyboard navigation between stages when interactive.

#### Analytics Responsibility

| Event             | Trigger                     | Payload                                  |
| ----------------- | --------------------------- | ---------------------------------------- |
| `stage_click`     | User clicks a stage         | `{ stage_code, stage_title, page_path }` |
| `process_visible` | Process map enters viewport | `{ stage_count, page_path, section_id }` |

---

## 7. Empty/Collapse Behavior

### The Rule

**Optional content collapses cleanly.** If optional CMS data is absent, the module does not render. No undefined, null, or empty titles are displayed. No placeholder content fills the gap.

### Enforcement

- Every component contract in this document specifies empty behavior. The answer is always "does not render" for missing required data.
- For optional data: the component renders without that element. The layout closes the gap. No empty `<div>`, no invisible spacer, no "coming soon" text.
- A page with fewer content modules is correct. A page with empty modules is broken.

### Examples

| Scenario                      | Correct Behavior                                              |
| ----------------------------- | ------------------------------------------------------------- |
| Project has no testimonial    | Testimonial module does not render. Next module moves up.     |
| Capability has no hero media  | Capability renders with text-only treatment. No broken image. |
| Article has no category       | Article card renders without category label. No empty pill.   |
| Industry has no project count | Industry card renders without count. No "0 projects" text.    |
| Filter returns zero results   | Empty state renders with message and "Clear filters" action.  |

### What This Prevents

- No empty headings (`<h2></h2>`) in the DOM.
- No invisible containers that create unexpected whitespace.
- No "undefined" or "null" text rendered on screen.
- No placeholder images or "coming soon" modules.
- No fabricated content to fill space.

### Layout Responsibility

When a module does not render, the parent layout must handle the gap gracefully:

- Spacing between remaining modules remains consistent.
- No orphaned section dividers.
- Grid layouts reflow to fill available space.

---

## 10. Comprehensive Component Contract Table

The following tables list all 59 components from the 123.design system, organized by the 4 levels defined in 06C. Each component's contract is detailed in Section 6 above. This table provides a quick reference to the component's rendering strategy and primary responsibility.

### Level 1 — UI Primitives (14 components)

These are the foundational building blocks. All are server-rendered for performance and SEO.

| Component      | Server/Client | Primary Responsibility                                       |
| -------------- | ------------- | ------------------------------------------------------------ |
| Button         | Server        | Interactive element with variant, size, and state contracts. |
| TextLink       | Server        | Inline link with context-aware styling and analytics.        |
| Container      | Server        | Max-width constraint and horizontal padding.                 |
| Grid           | Server        | CSS Grid layout with responsive column control.              |
| Stack          | Server        | Vertical spacing between child elements.                     |
| Cluster        | Server        | Horizontal grouping of elements with wrapping.               |
| Divider        | Server        | Visual separation between content sections.                  |
| Tag            | Server        | Small label for categorization or metadata.                  |
| Eyebrow        | Server        | Small uppercase label above headings.                        |
| Heading        | Server        | Semantic heading (h1-h6) with visual hierarchy.              |
| BodyText       | Server        | Paragraph text with proper line-height and measure.          |
| Icon           | Server        | SVG icon with size and color variants.                       |
| VisuallyHidden | Server        | Screen-reader-only content, visually hidden.                 |
| SkipLink       | Server        | Skip navigation link for keyboard users.                     |

### Level 2 — System Components (15 components)

These handle complex interactions and media. Mix of server and client rendering.

| Component         | Server/Client | Primary Responsibility                                                      |
| ----------------- | ------------- | --------------------------------------------------------------------------- |
| MediaFrame        | Server        | Three-mode media container (fullBleed, containedStage, documentFrame).      |
| ResponsiveImage   | Server        | CMS-driven image with srcset, hotspot, and CLS prevention.                  |
| VideoPlayer       | Client        | Purpose-driven video behavior (heroReel, hoverPreview, projectVideo, etc.). |
| SectionHeader     | Server        | Section heading with optional eyebrow and description.                      |
| Breadcrumbs       | Server        | Hierarchical navigation trail with structured data.                         |
| LifecycleNode     | Server        | Single stage indicator in lifecycle visualization.                          |
| LifecycleRail     | Server        | Horizontal lifecycle stage navigation.                                      |
| FilterControl     | Client        | Interactive filter UI with URL state synchronization.                       |
| ChoiceCard        | Server        | Selectable card for forms or filtering.                                     |
| FormField         | Client        | Form input with label, validation, and error handling.                      |
| FormError         | Client        | Inline error message display.                                               |
| ProgressIndicator | Server        | Step or progress visualization.                                             |
| Modal             | Client        | Overlay dialog with focus trap and keyboard handling.                       |
| BottomSheet       | Client        | Mobile slide-up panel with gesture support.                                 |
| Accordion         | Client        | Expandable content sections with keyboard navigation.                       |

### Level 3 — Domain Components (19 components)

These represent business-specific content types. Mostly server-rendered for SEO.

| Component               | Server/Client | Primary Responsibility                                   |
| ----------------------- | ------------- | -------------------------------------------------------- |
| ProjectCard             | Server        | Project summary card with hover video support.           |
| ProjectGrid             | Server        | Responsive grid of ProjectCards.                         |
| FeaturedProject         | Server        | Prominent project display with large media.              |
| RelatedWork             | Server        | Grid of related project cards.                           |
| CapabilityCard          | Server        | Capability summary card with link.                       |
| CapabilityGrid          | Server        | Responsive grid of CapabilityCards.                      |
| IndustryCard            | Server        | Industry summary card with link.                         |
| IndustryGrid            | Server        | Responsive grid of IndustryCards.                        |
| ProcessMosaic           | Server        | Visual process stage mosaic.                             |
| WorkflowRail            | Server        | Horizontal workflow step visualization.                  |
| ManufacturingBlock      | Server        | Manufacturing process documentation block.               |
| TestimonialBlock        | Server        | Client testimonial with quote and attribution.           |
| CredibilityStrip        | Server        | Logo grid or credential display.                         |
| ProjectMeta             | Server        | Project metadata display (industry, capabilities, year). |
| ProjectGallery          | Server        | Image gallery with lightbox.                             |
| ProjectTechnicalDetails | Server        | Technical specifications table or list.                  |
| ProjectVideoBlock       | Server        | Embedded project video with transcript.                  |
| ArticleCard             | Server        | Article summary card with link.                          |
| ArticleGrid             | Server        | Responsive grid of ArticleCards.                         |

### Level 4 — Page Compositions (11 components)

These are full page sections or views. Mix of server and client rendering.

| Component            | Server/Client | Primary Responsibility                        |
| -------------------- | ------------- | --------------------------------------------- |
| HomeHero             | Client        | Homepage hero with autoplay video reel.       |
| WorkIndexView        | Client        | Portfolio index with filtering and URL state. |
| ProjectHero          | Server        | Project detail hero with priority media.      |
| ProjectCaseStudyBody | Server        | Modular case study content builder.           |
| CapabilityHero       | Server        | Capability detail hero.                       |
| ProcessMap           | Server        | Lifecycle stage visualization.                |
| IndustryHero         | Server        | Industry detail hero.                         |
| StartProjectWizard   | Client        | Multi-step lead capture form.                 |
| ContactView          | Client        | Contact form and information display.         |
| Footer               | Server        | Site footer with navigation and legal links.  |
| Header               | Client        | Site header with navigation and mobile menu.  |

### Contract Coverage Summary

- **Total Components:** 59
- **Level 1 (UI Primitives):** 14 components, all Server
- **Level 2 (System Components):** 15 components, 8 Server / 7 Client
- **Level 3 (Domain Components):** 19 components, all Server
- **Level 4 (Page Compositions):** 11 components, 5 Server / 6 Client

All 59 components have contracts defined in Section 6. Every contract specifies: purpose, server/client designation, props, empty/missing data behavior, responsive behavior, accessibility responsibility, and analytics responsibility.

---

## Document Status

**PHASE 3 — SECTION 06D: LOCKED**
