# 06C — Component Architecture

Phase 3 implementation architecture for 123.design. Defines component hierarchy, server/client boundaries, layout primitives, and design token integration.

---

## 1. Server-First Architecture

**Default rule:** Every component is a SERVER COMPONENT until interactivity proves otherwise.

**Client Components only where necessary:**

- Interactive state management (forms, filters, wizards)
- DOM manipulation (modals, focus traps, scroll lock)
- Browser APIs (video playback, intersection observers, touch gestures)
- Real-time user input (validation, autocomplete, multi-step flows)

**Hard prohibitions:**

- Do NOT mark whole pages `"use client"`.
- Do NOT turn root layouts into client components.
- Do NOT add client JS for visual effects that CSS can handle.
- Do NOT ship JavaScript for static content rendering.

**Rationale:** Server Components reduce bundle size, improve initial load performance, and ensure the site remains usable and meaningful before client-side enhancements finish loading. The site must work with JavaScript disabled or delayed.

---

## 2. JavaScript Budget Philosophy

The site must remain usable and meaningful before client-side enhancements finish loading.

**Prefer over client-side state:**

- Semantic HTML
- CSS (transitions, animations, scroll-snap, grid, flexbox)
- Native `<details>` where suitable
- Native form behavior (validation, submission)
- Server-rendered data
- Progressive enhancement

**Do not ship JavaScript for:**

- Visual effects that CSS can handle (hover states, transitions, animations)
- Layout calculations that CSS Grid/Flexbox can solve
- Static content rendering
- Decorative animations

**Client JS is justified for:**

- Interactive forms with validation
- Filter controls with URL sync
- Modal/bottom sheet focus management
- Video playback controls
- Multi-step wizards
- Mobile menu toggle
- Lightbox/gallery interaction (if required)

---

## 3. No General Page Builder

**CRITICAL:** Do NOT architect generic `sections[]` with unlimited arbitrary layout combinations.

**CMS controls:**

- Content (text, media, metadata)
- Media (images, videos, documents)
- Visibility (show/hide modules)
- Approved optional modules (from a defined list)
- Order inside limited module zones

**CMS does NOT control:**

- Arbitrary grids (column counts, gap sizes)
- Random background colors
- Arbitrary typography (font sizes, weights, families)
- Custom padding (outside token-based variants)
- Custom CSS classes
- Uncontrolled component nesting

**Rationale:** A generic page builder invites layout chaos, breaks design system consistency, and creates maintenance burden. The CMS should manage content within defined structural constraints, not become a layout engine.

---

## 4. Component Hierarchy — Four Levels

### LEVEL 1 — UI Primitives (14 components)

Foundational building blocks. No business logic. Pure presentational.

| Component      | Purpose                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| Button         | Interactive action trigger (primary, secondary, text CTA, dark context) |
| TextLink       | Inline or navigation link                                               |
| Container      | Max-width wrapper (shell, content, reading, wideMedia)                  |
| Grid           | 12/8/4 column grid system                                               |
| Stack          | Vertical spacing with consistent gap                                    |
| Cluster        | Horizontal wrapping layout                                              |
| Divider        | Visual separator (horizontal rule, thin line)                           |
| Tag            | Small label (capability, industry, filter state)                        |
| Eyebrow        | Section label (uppercase, tracking-wide, muted)                         |
| Heading        | Semantic heading (h1–h4, display levels)                                |
| BodyText       | Paragraph text (lead, body-lg, body, small, micro)                      |
| Icon           | SVG icon (line style, 1.5–2px stroke)                                   |
| VisuallyHidden | Screen reader-only content                                              |
| SkipLink       | Skip to main content link                                               |

**All Level 1 components are Server Components.**

---

### LEVEL 2 — System Components (15 components)

Reusable interactive and media components. Some require client JS.

| Component         | Server/Client        | Notes                                                                           |
| ----------------- | -------------------- | ------------------------------------------------------------------------------- |
| MediaFrame        | Server               | Responsive media container                                                      |
| ResponsiveImage   | Server               | Optimized image with srcset                                                     |
| VideoPlayer       | Client               | Play/pause, intersection observer for autoplay                                  |
| SectionHeader     | Server               | Eyebrow + heading + optional description                                        |
| Breadcrumbs       | Server               | Navigation breadcrumb trail                                                     |
| LifecycleNode     | Server               | Single lifecycle stage indicator                                                |
| LifecycleRail     | Client (conditional) | Interactive stage selection if required; could be CSS scroll-snap               |
| FilterControl     | Client               | Filter state management, URL sync                                               |
| ChoiceCard        | Client               | Selection state in form wizard                                                  |
| FormField         | Client               | Validation feedback, input state                                                |
| FormError         | Server               | Error message display                                                           |
| ProgressIndicator | Server               | Step progress or loading indicator                                              |
| Modal             | Client               | Focus trap, keyboard handling, overlay management                               |
| BottomSheet       | Client               | Touch gesture, scroll lock, focus trap                                          |
| Accordion         | Client               | Expand/collapse state, animation; could use native `<details>` for simple cases |

**Client components at Level 2:** VideoPlayer, FilterControl, ChoiceCard, FormField, Modal, BottomSheet, Accordion, and conditionally LifecycleRail.

---

### LEVEL 3 — Domain Components (18 components)

Business-specific components for 123.design portfolio, capabilities, industries, and process.

| Component               | Server/Client        | Notes                                                     |
| ----------------------- | -------------------- | --------------------------------------------------------- |
| ProjectCard             | Server               | Project preview (media, title, industry, tags)            |
| ProjectGrid             | Server               | Grid layout for project cards                             |
| FeaturedProject         | Server               | Highlighted project with large media                      |
| RelatedWork             | Server               | Related project list                                      |
| CapabilityCard          | Server               | Capability preview (index, title, description, stages)    |
| CapabilityGrid          | Server               | Grid layout for capability cards                          |
| IndustryCard            | Server               | Industry preview (media or typographic composition)       |
| IndustryGrid            | Server               | Grid layout for industry cards                            |
| ProcessMosaic           | Server               | Process stage visualization                               |
| WorkflowRail            | Server               | Workflow step sequence                                    |
| ManufacturingBlock      | Server               | Manufacturing process detail                              |
| TestimonialBlock        | Server               | Quote + attribution + optional video                      |
| CredibilityStrip        | Server               | Client logos or metrics (only if verified)                |
| ProjectMeta             | Server               | Project metadata (client, year, industry, capabilities)   |
| ProjectGallery          | Client (conditional) | Lightbox/gallery interaction if needed; could be CSS-only |
| ProjectTechnicalDetails | Server               | Technical specification display                           |
| ProjectVideoBlock       | Client               | Video playback controls                                   |
| ArticleCard             | Server               | Article preview (title, excerpt, date)                    |
| ArticleGrid             | Server               | Grid layout for article cards                             |

**Client components at Level 3:** ProjectGallery (conditional), ProjectVideoBlock.

**All other Level 3 components are Server Components.**

---

### LEVEL 4 — Page Compositions (11 components)

Page-level compositions that assemble Level 1–3 components into complete sections.

| Component            | Server/Client        | Notes                                                     |
| -------------------- | -------------------- | --------------------------------------------------------- |
| HomeHero             | Client (conditional) | Hero reel video controller; text/CTA server, video client |
| WorkIndexView        | Client (conditional) | Filter integration; grid server, filter client            |
| ProjectHero          | Server               | Project detail hero                                       |
| ProjectCaseStudyBody | Server               | Project case study content                                |
| CapabilityHero       | Server               | Capability detail hero                                    |
| ProcessMap           | Server               | Process visualization                                     |
| IndustryHero         | Server               | Industry detail hero                                      |
| StartProjectWizard   | Client               | Multi-step form, validation, file upload                  |
| ContactView          | Client               | Form interaction, category selection                      |
| Footer               | Server               | Site-wide footer                                          |
| Header               | Client               | Mobile menu toggle, mega-menu interaction                 |

**Client components at Level 4:** HomeHero (conditional), WorkIndexView (conditional), StartProjectWizard, ContactView, Header.

---

## 5. Client Component Register

**CRITICAL TABLE** — Every component with Server/Client designation.

| Component               | Server/Client        | Reason Client JS Required                               | Could It Be CSS/Server-Only?                            |
| ----------------------- | -------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| Button                  | Server               | N/A                                                     | Yes — already server                                    |
| TextLink                | Server               | N/A                                                     | Yes                                                     |
| Container               | Server               | N/A                                                     | Yes                                                     |
| Grid                    | Server               | N/A                                                     | Yes                                                     |
| Stack                   | Server               | N/A                                                     | Yes                                                     |
| Cluster                 | Server               | N/A                                                     | Yes                                                     |
| Divider                 | Server               | N/A                                                     | Yes                                                     |
| Tag                     | Server               | N/A                                                     | Yes                                                     |
| Eyebrow                 | Server               | N/A                                                     | Yes                                                     |
| Heading                 | Server               | N/A                                                     | Yes                                                     |
| BodyText                | Server               | N/A                                                     | Yes                                                     |
| Icon                    | Server               | N/A                                                     | Yes                                                     |
| VisuallyHidden          | Server               | N/A                                                     | Yes                                                     |
| SkipLink                | Server               | N/A                                                     | Yes                                                     |
| MediaFrame              | Server               | N/A                                                     | Yes                                                     |
| ResponsiveImage         | Server               | N/A                                                     | Yes                                                     |
| VideoPlayer             | Client               | Play/pause controls, intersection observer for autoplay | Partial — poster/initial render server, controls client |
| SectionHeader           | Server               | N/A                                                     | Yes                                                     |
| Breadcrumbs             | Server               | N/A                                                     | Yes                                                     |
| LifecycleNode           | Server               | N/A                                                     | Yes                                                     |
| LifecycleRail           | Client (conditional) | Interactive stage selection if required                 | Could be CSS scroll-snap if interaction is simple       |
| FilterControl           | Client               | Filter state management, URL sync                       | No — requires client interactivity                      |
| ChoiceCard              | Client               | Selection state in form wizard                          | No — part of interactive form                           |
| FormField               | Client               | Validation feedback, input state                        | Partial — static fields server, interactive client      |
| FormError               | Server               | N/A                                                     | Yes                                                     |
| ProgressIndicator       | Server               | N/A                                                     | Yes                                                     |
| Modal                   | Client               | Focus trap, keyboard handling, overlay management       | No — requires client DOM management                     |
| BottomSheet             | Client               | Touch gesture, scroll lock, focus trap                  | No — requires client interaction                        |
| Accordion               | Client               | Expand/collapse state, animation                        | Could use native details element for simple cases       |
| ProjectCard             | Server               | N/A                                                     | Yes                                                     |
| ProjectGrid             | Server               | N/A                                                     | Yes                                                     |
| FeaturedProject         | Server               | N/A                                                     | Yes                                                     |
| RelatedWork             | Server               | N/A                                                     | Yes                                                     |
| CapabilityCard          | Server               | N/A                                                     | Yes                                                     |
| CapabilityGrid          | Server               | N/A                                                     | Yes                                                     |
| IndustryCard            | Server               | N/A                                                     | Yes                                                     |
| IndustryGrid            | Server               | N/A                                                     | Yes                                                     |
| ProcessMosaic           | Server               | N/A                                                     | Yes                                                     |
| WorkflowRail            | Server               | N/A                                                     | Yes                                                     |
| ManufacturingBlock      | Server               | N/A                                                     | Yes                                                     |
| TestimonialBlock        | Server               | N/A                                                     | Yes                                                     |
| CredibilityStrip        | Server               | N/A                                                     | Yes                                                     |
| ProjectMeta             | Server               | N/A                                                     | Yes                                                     |
| ProjectGallery          | Client (conditional) | Lightbox/gallery interaction if needed                  | Could be server with CSS-only gallery                   |
| ProjectTechnicalDetails | Server               | N/A                                                     | Yes                                                     |
| ProjectVideoBlock       | Client               | Video playback controls                                 | Partial — poster server                                 |
| ArticleCard             | Server               | N/A                                                     | Yes                                                     |
| ArticleGrid             | Server               | N/A                                                     | Yes                                                     |
| HomeHero                | Client (conditional) | Hero reel video controller                              | Partial — text/CTA server, video client                 |
| WorkIndexView           | Client (conditional) | Filter integration                                      | Partial — grid server, filter client                    |
| ProjectHero             | Server               | N/A                                                     | Yes                                                     |
| ProjectCaseStudyBody    | Server               | N/A                                                     | Yes                                                     |
| CapabilityHero          | Server               | N/A                                                     | Yes                                                     |
| ProcessMap              | Server               | N/A                                                     | Yes                                                     |
| IndustryHero            | Server               | N/A                                                     | Yes                                                     |
| StartProjectWizard      | Client               | Multi-step form, validation, file upload                | No — fully interactive                                  |
| ContactView             | Client               | Form interaction, category selection                    | No — form requires client                               |
| Footer                  | Server               | N/A                                                     | Yes                                                     |
| Header                  | Client               | Mobile menu toggle, mega-menu interaction               | Partial — logo/brand server, nav client                 |

**Summary:** ~57 total components. Majority are Server Components. Approximately 10–12 require client JS:

- **Always client:** VideoPlayer, FilterControl, ChoiceCard, FormField, Modal, BottomSheet, Accordion, StartProjectWizard, ContactView, Header
- **Conditional client:** LifecycleRail, ProjectGallery, HomeHero, WorkIndexView (could be server with CSS-only alternatives)

---

## 6. Component Naming Rules

Component names must describe responsibility, not visual accidents.

**Good names:**

- ProjectCard (describes what it represents)
- LifecycleRail (describes the domain concept)
- ProcessMosaic (describes the visualization type)
- MediaFrame (describes the container purpose)

**Bad names:**

- FancyCard (visual accident)
- Section2 (implementation detail)
- OrangeBox (visual accident)
- Wrapper2 (implementation detail)
- ContentThing (vague)
- CoolGrid (subjective)

**Rules:**

- Name after domain concept or responsibility, not color, size, or position.
- Avoid numbered components (Section1, Section2) — use meaningful names.
- Avoid implementation names (Wrapper, Container2) — use purpose names.
- If a component name sounds like a visual description, rename it.

---

## 7. Layout Primitives Contracts

### Container

Max-width wrapper with responsive horizontal padding.

**Sizes:**

- `shell` — 1440px (outermost page container)
- `content` — 1280px (main content area)
- `reading` — 720px (prose, article content)
- `wideMedia` — 1440px (full-width media sections)

**Props:**

- `size` — enum: `'shell' | 'content' | 'reading' | 'wideMedia'` (required)
- `as` — element type: `'div' | 'section' | 'article' | 'main'` (default: `'div'`)
- `className` — internal-only, for composition (not exposed to application code)

**Behavior:**

- Centers horizontally with `margin: 0 auto`.
- Applies responsive horizontal padding from design tokens (desktop: 32–48px, tablet: 24px, mobile: 20px).
- Does NOT apply vertical padding (vertical spacing is the responsibility of Stack or Section).

---

### Grid

12-column grid system (desktop), 8-column (tablet), 4-column (mobile).

**Props:**

- `columns` — number or responsive object (default: 12 desktop, 8 tablet, 4 mobile)
- `gap` — token-based spacing (default: `'md'` → 24–32px desktop, 20–24px tablet, 16px mobile)
- `align` — vertical alignment: `'start' | 'center' | 'end' | 'stretch'`
- `as` — element type (default: `'div'`)

**Application components should expose meaningful layout props rather than arbitrary column math.**

**Example:**

```tsx
// Good — meaningful layout prop
<ProjectGrid columns={{ desktop: 3, tablet: 2, mobile: 1 }} />

// Bad — arbitrary column math exposed to application code
<Grid columns={12} template="4/4/4" />
```

---

### Stack

Vertical spacing with consistent gap.

**Props:**

- `gap` — token-based spacing: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'` (required)
- `align` — horizontal alignment: `'start' | 'center' | 'end' | 'stretch'` (default: `'stretch'`)
- `as` — element type (default: `'div'`)

**Behavior:**

- Applies vertical gap between children using `gap` property (not margin).
- Does NOT apply horizontal padding or max-width (use Container for that).

**Token mapping:**

- `xs` → 8px
- `sm` → 16px
- `md` → 24px
- `lg` → 32px
- `xl` → 48px
- `2xl` → 64px

---

### Cluster

Horizontal wrapping layout.

**Props:**

- `gap` — token-based spacing (default: `'sm'`)
- `align` — vertical alignment: `'start' | 'center' | 'end'` (default: `'center'`)
- `justify` — horizontal distribution: `'start' | 'center' | 'end' | 'space-between'` (default: `'start'`)

**Behavior:**

- Uses `display: flex` with `flex-wrap: wrap`.
- Children wrap to next line when horizontal space is exhausted.
- Useful for tag lists, button groups, inline metadata.

---

### Section

Vertical page section with consistent spacing.

**Props:**

- `variant` — `'light' | 'dark' | 'alternate'` (default: `'light'`)
- `padding` — token-based vertical padding: `'sm' | 'md' | 'lg' | 'xl'` (default: `'lg'`)
- `as` — element type (default: `'section'`)

**Behavior:**

- Applies vertical padding from design tokens.
- Applies background color based on variant (light: canvas, dark: dark-canvas, alternate: canvas-subtle).
- Does NOT apply horizontal padding or max-width (use Container inside Section).

**Token mapping (vertical padding):**

- `sm` → 48px
- `md` → 80px
- `lg` → 120px
- `xl` → 160px

---

## 8. Design Tokens Implementation Contract

**Source of truth:** `05L_DESIGN_TOKENS.json` is canonical design input.

**Token flow:**

```
05L_DESIGN_TOKENS.json
  ↓
CSS custom properties (--color-canvas, --color-surface, --color-ink, etc.)
  ↓
Tailwind theme/configuration (extends Tailwind with custom tokens)
  ↓
Component styles (reference Tailwind utilities or CSS variables)
```

**Rules:**

- Do NOT duplicate raw hex values throughout components.
- Do NOT hardcode `#F4F1EA` in a component — use `var(--color-canvas)` or `bg-canvas`.
- All colors, spacing, typography, radius, elevation, and motion must reference design tokens.
- Tailwind utilities reference CSS custom properties, not hardcoded values.

**Expected CSS custom properties (partial list):**

```css
:root {
  /* Colors — Light */
  --color-canvas: #f4f1ea;
  --color-canvas-subtle: #f8f6f1;
  --color-surface: #ffffff;
  --color-surface-muted: #ece9e2;
  --color-ink: #11110f;
  --color-ink-secondary: #4e504b;
  --color-ink-muted: #777970;
  --color-line: #d6d3cb;
  --color-line-strong: #a9a69d;

  /* Colors — Dark */
  --color-dark-canvas: #11110f;
  --color-dark-surface: #191a17;
  --color-dark-surface-elevated: #22231f;
  --color-dark-ink: #f5f2ea;
  --color-dark-ink-secondary: #b7b6af;
  --color-dark-line: #363732;

  /* Accent */
  --color-accent: #f05a36;
  --color-accent-hover: #d94a29;
  --color-accent-soft: #f8d9cf;
  --color-accent-dark-context: #ff7554;

  /* Semantic */
  --color-success: #287a53;
  --color-warning: #a66a19;
  --color-error: #b9382d;
  --color-info: #386a8e;

  /* Focus */
  --color-focus-light: #11110f;
  --color-focus-dark: #f5f2ea;

  /* Typography */
  --font-family-display: 'Inter Tight', sans-serif;
  --font-family-text: 'Inter', sans-serif;

  /* Spacing (partial) */
  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Container */
  --container-shell-max: 1440px;
  --container-content-max: 1280px;
  --container-reading-max: 720px;

  /* Border radius */
  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-round: 999px;

  /* Motion */
  --duration-micro: 150-220ms;
  --duration-ui: 220-350ms;
  --duration-section-reveal: 450-700ms;
  --duration-media-reveal: 600-900ms;
  --easing-primary: cubic-bezier(0.22, 1, 0.36, 1);
  --easing-secondary: ease-out;
}
```

**Tailwind configuration (partial):**

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--color-canvas)',
        'canvas-subtle': 'var(--color-canvas-subtle)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        ink: 'var(--color-ink)',
        'ink-secondary': 'var(--color-ink-secondary)',
        'ink-muted': 'var(--color-ink-muted)',
        line: 'var(--color-line)',
        'line-strong': 'var(--color-line-strong)',
        // ... dark variants, accent, semantic
      },
      fontFamily: {
        display: ['Inter Tight', 'sans-serif'],
        text: ['Inter', 'sans-serif'],
      },
      spacing: {
        // Map to CSS variables or use token values directly
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        round: 'var(--radius-round)',
      },
      // ... typography, motion, etc.
    },
  },
};
```

---

## 9. Component API Philosophy

Component APIs must be: **small, typed, semantic, predictable.**

**Principles:**

- Avoid enormous prop surfaces. If a component has >8 props, reconsider its responsibility.
- Avoid arbitrary styling props: `padding="37"`, `color="#123456"`, `fontSize="52"`.
- Avoid escape hatches: `customClass="..."`, `style={{ ... }}`.
- Expose design-system decisions through variants, not arbitrary styling.

**Good API:**

```tsx
<Button variant="primary" size="lg" loading={false}>
  Start a Project
</Button>

<Container size="content">
  {/* ... */}
</Container>

<Stack gap="lg" align="center">
  {/* ... */}
</Stack>
```

**Bad API:**

```tsx
<Button
  bgColor="#11110F"
  textColor="#F5F2EA"
  padding="16px 32px"
  fontSize="16px"
  borderRadius="6px"
  customClass="my-special-button"
>
  Start a Project
</Button>
```

**Variant pattern:**

- Use discriminated unions for variant props: `variant: 'primary' | 'secondary' | 'text' | 'dark'`.
- Use size enums: `size: 'sm' | 'md' | 'lg'`.
- Use boolean flags sparingly: `loading`, `disabled`, `fullWidth`.

**Composition over configuration:**

- Prefer composing smaller components over building monolithic components with many props.
- Example: `SectionHeader` = `Eyebrow` + `Heading` + optional `BodyText`, not a single component with 15 props.

---

## 10. Document Status

**PHASE 3 — SECTION 06C: LOCKED**

This document defines the authoritative component architecture for 123.design Phase 3. All implementation must comply with these constraints.

**Companion documents:**

- 05L_DESIGN_TOKENS.json — canonical design token definitions
- 05E_COMPONENT_VISUAL_SPEC.md — visual specification for each component
- 05M_COMPONENT_STATE_MATRIX.md — state definitions for interactive components
- 05F_MOTION_INTERACTION_SYSTEM.md — motion and timing specifications
- 04C_PAGE_TEMPLATE_ARCHITECTURE.md — page-level composition rules
