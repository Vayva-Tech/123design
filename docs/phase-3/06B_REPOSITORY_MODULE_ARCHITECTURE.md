# 06B — Repository & Module Architecture

> **Document role:** Defines the future repository structure, module organization, route-to-file mapping, template system, CMS boundary, and content ownership rules for the 123.design website rebuild. This is the authoritative reference for how source code and configuration are organized on disk.

> **Phase 3 — Section 06B.** Covers Phase 3 directive sections 9–12.

---

## Document Status

**PHASE 3 — SECTION 06B: LOCKED**

This is documentation only. No files or directories have been created. No source code exists.

---

## 1. Repository Root Structure (Future)

The repository root separates application source, CMS configuration, static assets, testing, tooling, and documentation into distinct top-level directories.

```
/
  /src
    /app          — Next.js App Router pages and layouts
    /components   — Shared component hierarchy (L1–L3)
    /features     — Feature-oriented domain modules
    /lib          — Shared utilities and infrastructure code
    /types        — TypeScript type definitions and domain models
    /styles       — Global styles, CSS custom properties, font faces
  /sanity         — Sanity Studio configuration and schemas
  /public         — Static assets (favicons, robots, manifest)
  /tests          — Test configuration and shared test utilities
  /scripts        — Build scripts, migration utilities, validation
  /docs           — Phase documentation (0A through 3)
  /media-migration — Media migration planning and tooling
```

### Root Directory Responsibilities

| Directory          | Purpose                 | Contains                                                                       |
| ------------------ | ----------------------- | ------------------------------------------------------------------------------ |
| `src/`             | Application source code | All runtime code that ships to the browser or server                           |
| `sanity/`          | CMS Studio              | Sanity Studio configuration, document schemas, desk structure                  |
| `public/`          | Static assets           | Favicons, `robots.txt` template, `manifest.webmanifest`, OG image defaults     |
| `tests/`           | Test infrastructure     | Global test configuration, shared fixtures, custom matchers, test helpers      |
| `scripts/`         | Tooling                 | Build scripts, content migration utilities, redirect validation, link checking |
| `docs/`            | Phase documentation     | All phase deliverables (0A through 3), handoff documents, acceptance criteria  |
| `media-migration/` | Media migration         | Planning documents and tooling for migrating legacy media assets               |

### Rules

- **No source code outside `src/`** except Sanity Studio configuration in `sanity/`.
- **No documentation inside `src/`**. Documentation lives in `docs/`.
- **No test fixtures inside `src/`**. Shared fixtures live in `tests/`. Feature-specific test files co-locate with their source (see Section 9).
- **No environment files committed**. `.env.local`, `.env.production` are gitignored. Only `.env.example` is tracked.

---

## 2. Feature-Oriented Organization

Complex domain behavior is organized by feature, not by technical type. A single directory containing 150 unrelated components is forbidden.

### 2.1 — Component Hierarchy (`src/components/`)

Components are organized into three conceptual levels reflecting their abstraction and reuse scope.

```
src/
  components/
    ui/           — L1: UI Primitives
    layout/       — Layout primitives
    navigation/   — Header, Footer, Navigation components
    media/        — MediaFrame, ResponsiveImage, VideoPlayer
```

| Level | Directory     | Scope                                                                                | Examples                                                   |
| ----- | ------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| L1    | `ui/`         | Design-system primitives. Stateless, style-driven, no business logic.                | Button, Input, Select, Checkbox, Radio, Badge, Divider     |
| L2    | `layout/`     | Spatial composition primitives. Control grid, stack, cluster, and section structure. | Container, Grid, Stack, Cluster, Section, Bleed            |
| L2    | `navigation/` | Navigation components. Header, footer, mega menu, mobile menu, breadcrumbs.          | Header, Footer, MegaMenu, MobileMenu, Breadcrumbs, NavItem |
| L2    | `media/`      | Media presentation components. Frame modes, responsive images, video.                | MediaFrame, ResponsiveImage, VideoPlayer, ImageGrid        |

**L1 rules:**

- No business logic. No data fetching. No route awareness.
- Accept design tokens as props (variant, size, color). Never hardcode pixel values.
- Must implement all 9 component states from Phase 2: default, hover, focus, active, selected, disabled, loading, error, success.
- Must comply with all 13 accessibility rules from Phase 2.

**L2 rules:**

- May compose L1 primitives.
- May be route-aware (e.g., `navigation/` reads active route).
- No direct data fetching from CMS. Receive data via props or server components.

### 2.2 — Feature Modules (`src/features/`)

Each feature directory contains all components, queries, types, and logic specific to that domain.

```
src/
  features/
    work/         — Work index, project cards, filtering
    capabilities/ — Capability index and detail
    process/      — Process page
    industries/   — Industry index and detail
    insights/     — Articles index and detail
    lead-form/    — Start Project wizard
```

**Feature module internal structure (conventional):**

```
features/
  work/
    components/     — Feature-specific components (ProjectCard, ProjectGrid, FilterBar)
    queries/        — Sanity queries for this feature
    types.ts        — Feature-specific TypeScript types
    index.ts        — Public exports
```

**Feature module rules:**

- Features may import from `components/ui/`, `components/layout/`, `components/media/`, and `lib/`.
- Features must NOT import from other features. Cross-feature composition happens in page files (`app/`).
- Each feature owns its Sanity queries. No shared query file.
- Each feature owns its types. Shared domain types live in `src/types/`.

### 2.3 — Shared Libraries (`src/lib/`)

Infrastructure and utility code that features and components depend on.

```
src/
  lib/
    sanity/       — Sanity client, queries, image helpers
    seo/          — Metadata generation, structured data
    analytics/    — trackEvent abstraction, event definitions
    validation/   — Zod schemas for boundaries
    media/        — Media pipeline utilities
    security/     — Headers, CSP, webhook verification
    redirects/    — Redirect resolution and validation
    config/       — Environment validation, site config
```

| Library       | Responsibility                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `sanity/`     | Sanity client initialization (server and client), shared image URL builders, groq helpers, preview mode utilities        |
| `seo/`        | `generateMetadata` helpers per page type, JSON-LD structured data builders, sitemap and robots.txt generation logic      |
| `analytics/`  | `trackEvent` abstraction, event name constants (from Phase 1 04M), provider initialization (deferred)                    |
| `validation/` | Zod schemas for form inputs (Start Project, Contact), webhook payload validation, redirect target validation             |
| `media/`      | Image optimization pipeline, video embed resolution, low-resolution placeholder generation, art direction srcSet logic   |
| `security/`   | Security header definitions, CSP policy builder, Sanity webhook signature verification, rate limiting helpers            |
| `redirects/`  | Legacy route redirect resolution (from Phase 1 04L), redirect map validation, Next.js redirect config generation         |
| `config/`     | Environment variable validation (Zod), site-wide configuration (site URL, site name, social links), build-time constants |

**Library rules:**

- No React components. No JSX. Pure TypeScript utilities only.
- No feature-specific logic. Feature logic belongs in `features/`.
- Libraries may depend on other libraries. No circular dependencies.

### 2.4 — Types (`src/types/`)

```
src/
  types/
    project.ts      — Project, ProjectStatus, ProjectFamily
    capability.ts   — Capability, CapabilityCategory
    industry.ts     — Industry
    article.ts      — Article, ArticleCategory
    process.ts      — ProcessStage, LifecycleStage
    testimonial.ts  — Testimonial
    faq.ts          — FAQItem
    site.ts         — SiteSettings, NavigationConfig
    media.ts        — MediaAsset, VideoEmbed, ImageHotspot
    common.ts       — Shared utility types (Slug, SEO, RichText)
```

**Type rules:**

- Types mirror Sanity document schemas. One type file per Sanity document type.
- Types are the contract between CMS and application. If a type changes, the corresponding Sanity schema must change to match.
- No `any` types. No `as any` casts. Strict TypeScript.

### 2.5 — Styles (`src/styles/`)

```
src/
  styles/
    globals.css       — CSS custom properties (design tokens), reset, base typography
    fonts.css         — @font-face declarations for Inter Tight and Inter
```

**Style rules:**

- Design tokens from Phase 2 (05L_DESIGN_TOKENS.json) are expressed as CSS custom properties in `globals.css`.
- No hardcoded color values, spacing values, or font sizes in component files. Use tokens.
- Font faces are declared once in `fonts.css`. Components reference font families by CSS variable.

---

## 3. Application Routes

Routes are locked from Phase 1 (04B). The App Router file mapping below is the definitive guide for where each route lives on disk.

```
src/app/
  page.tsx                              → /
  work/
    page.tsx                            → /work
    [slug]/
      page.tsx                          → /work/[slug]
  capabilities/
    page.tsx                            → /capabilities
    [slug]/
      page.tsx                          → /capabilities/[slug]
  process/
    page.tsx                            → /process
  industries/
    page.tsx                            → /industries
    [slug]/
      page.tsx                          → /industries/[slug]
  about/
    page.tsx                            → /about
  insights/
    page.tsx                            → /insights
    [slug]/
      page.tsx                          → /insights/[slug]
  start-project/
    page.tsx                            → /start-project
  contact/
    page.tsx                            → /contact
  faq/
    page.tsx                            → /faq
  privacy/
    page.tsx                            → /privacy
  terms/
    page.tsx                            → /terms
  accessibility/
    page.tsx                            → /accessibility
  not-found.tsx                         → 404 behavior
  robots.ts                             → /robots.txt (generated)
  sitemap.ts                            → /sitemap.xml (generated)
```

### Route-to-File Rules

- Each `page.tsx` is a Next.js App Router page component. It composes feature modules and shared components. It does not contain business logic.
- Dynamic routes use `[slug]` parameter. Slug resolution and validation happen in `generateStaticParams` or server-side fetch.
- `robots.ts` and `sitemap.ts` are Next.js route handlers that generate XML at build time or request time.
- `not-found.tsx` is the Next.js convention for 404 pages. Returns HTTP 404 status code.
- Legal pages (`/privacy`, `/terms`, `/accessibility`) are individual routes, not grouped under `/legal/`. This matches the Phase 1 route table.

---

## 4. Route Groups

Route groups organize page files without altering public URLs. Next.js parenthesized directories `(group)` are excluded from the URL path.

### Recommended Route Groups

| Group          | Directory           | Routes                                                   |
| -------------- | ------------------- | -------------------------------------------------------- |
| `(marketing)`  | `app/(marketing)/`  | Homepage, Work, Capabilities, Process, Industries, About |
| `(content)`    | `app/(content)/`    | Insights, FAQ, Articles                                  |
| `(conversion)` | `app/(conversion)/` | Start Project, Contact                                   |

### Route Group File Mapping (with groups)

```
src/app/
  (marketing)/
    page.tsx                            → /
    work/
      page.tsx                          → /work
      [slug]/
        page.tsx                        → /work/[slug]
    capabilities/
      page.tsx                          → /capabilities
      [slug]/
        page.tsx                        → /capabilities/[slug]
    process/
      page.tsx                          → /process
    industries/
      page.tsx                          → /industries
      [slug]/
        page.tsx                        → /industries/[slug]
    about/
      page.tsx                          → /about
  (content)/
    insights/
      page.tsx                          → /insights
      [slug]/
        page.tsx                        → /insights/[slug]
    faq/
      page.tsx                          → /faq
  (conversion)/
    start-project/
      page.tsx                          → /start-project
    contact/
      page.tsx                          → /contact
  privacy/
    page.tsx                            → /privacy
  terms/
    page.tsx                            → /terms
  accessibility/
    page.tsx                            → /accessibility
  not-found.tsx                         → 404
  robots.ts                             → /robots.txt
  sitemap.ts                            → /sitemap.xml
```

### Route Group Rules

- Route groups MUST NOT alter public URLs. `app/(marketing)/work/page.tsx` resolves to `/work`, not `/marketing/work`.
- Shared `layout.tsx` files at the root level apply to all groups. Group-specific layouts are permitted when groups have genuinely different shell requirements.
- Legal pages (`/privacy`, `/terms`, `/accessibility`) are NOT in a route group. They have a minimal layout (no header navigation) and do not share the marketing shell.
- `not-found.tsx`, `robots.ts`, and `sitemap.ts` remain at the app root, outside all groups.

---

## 5. Template System

Templates are controlled by application architecture. Each template maps to one or more `page.tsx` files. Phase 1 (04C) defines 17 required templates.

### Template-to-Route Mapping

| #   | Template                         | Route(s)                               | Page File(s)                                                               |
| --- | -------------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| 1   | Homepage                         | `/`                                    | `app/(marketing)/page.tsx`                                                 |
| 2   | Work Index                       | `/work`                                | `app/(marketing)/work/page.tsx`                                            |
| 3   | Project Detail — Light           | `/work/[slug]`                         | `app/(marketing)/work/[slug]/page.tsx`                                     |
| 4   | Project Detail — Full Case Study | `/work/[slug]`                         | `app/(marketing)/work/[slug]/page.tsx`                                     |
| 5   | Capabilities Index               | `/capabilities`                        | `app/(marketing)/capabilities/page.tsx`                                    |
| 6   | Capability Detail                | `/capabilities/[slug]`                 | `app/(marketing)/capabilities/[slug]/page.tsx`                             |
| 7   | Process                          | `/process`                             | `app/(marketing)/process/page.tsx`                                         |
| 8   | Industries Index                 | `/industries`                          | `app/(marketing)/industries/page.tsx`                                      |
| 9   | Industry Detail                  | `/industries/[slug]`                   | `app/(marketing)/industries/[slug]/page.tsx`                               |
| 10  | About                            | `/about`                               | `app/(marketing)/about/page.tsx`                                           |
| 11  | Insights Index                   | `/insights`                            | `app/(content)/insights/page.tsx`                                          |
| 12  | Article Detail                   | `/insights/[slug]`                     | `app/(content)/insights/[slug]/page.tsx`                                   |
| 13  | FAQ                              | `/faq`                                 | `app/(content)/faq/page.tsx`                                               |
| 14  | Start Project                    | `/start-project`                       | `app/(conversion)/start-project/page.tsx`                                  |
| 15  | Contact                          | `/contact`                             | `app/(conversion)/contact/page.tsx`                                        |
| 16  | Legal Page                       | `/privacy`, `/terms`, `/accessibility` | `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/accessibility/page.tsx` |
| 17  | 404                              | Any unmatched route                    | `app/not-found.tsx`                                                        |

### Template Notes

- **Templates 3 and 4** (Project Detail — Light and Full Case Study) share the same route and page file. The template variant is determined by the project's content depth in Sanity (a field on the project document indicates whether it has full case study content or is a light project card).
- **Template 16** (Legal Page) is a single visual template reused across three routes. Each route has its own `page.tsx` but they compose the same legal page component.
- **Template 17** (404) uses the Next.js `not-found.tsx` convention. It is not a route group member.

---

## 6. Static vs CMS Content Boundary

The boundary between code-managed and CMS-managed content is strict. This prevents accidental editorial breakage of application behavior and prevents security rules from being editable through a CMS interface.

### In Code / Configuration (Never in CMS)

| Category                    | Examples                                                                       | Rationale                                                                       |
| --------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Design tokens               | Color values, spacing scale, typography scale, radius, z-index, motion         | Visual identity is controlled by code deploys, not editorial changes            |
| Taxonomy enums              | Capability slugs, industry slugs, lifecycle stage names, project status values | Application logic depends on these. CMS edits must not break routes or filters. |
| Route architecture          | Route definitions, redirect mappings, navigation structure                     | Routing is code. Navigation labels may come from CMS, but structure is code.    |
| Component logic             | Rendering rules, conditional display logic, state machines                     | Components are deployed, not edited.                                            |
| Security constraints        | CSP policy, header definitions, webhook verification, rate limits              | Security must go through code review. Never editable through CMS.               |
| Analytics event definitions | Event names, category constants, trigger conditions                            | Event contracts between frontend and analytics provider are code.               |
| Form validation rules       | Required fields, validation patterns, error messages                           | Validation logic is code. Field labels may come from CMS.                       |
| Build configuration         | Next.js config, environment validation, dependency versions                    | Infrastructure is code.                                                         |

### In CMS (Sanity)

| Category                      | Examples                                                      | Rationale                                       |
| ----------------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| Marketing copy                | Headlines, body text, section descriptions, CTAs              | Editorial content changes without code deploys. |
| Projects                      | Project title, summary, industry, capabilities, media, status | Content team manages portfolio.                 |
| Capabilities                  | Capability descriptions, related work, process stage mapping  | Content team manages service descriptions.      |
| Industries                    | Industry descriptions, representative work, market context    | Content team manages industry pages.            |
| Articles                      | Article title, body, author, publish date, category           | Content team publishes insights.                |
| Testimonials                  | Quote text, attribution, company, approval status             | Content team manages verified testimonials.     |
| Contact information           | Office addresses, phone numbers, email, social links          | Content team keeps contact info current.        |
| FAQ                           | Question/answer pairs, ordering, category                     | Content team manages FAQ.                       |
| Media assets                  | Images, videos, alt text, hotspot/ crop data                  | Content team uploads and manages media.         |
| Site-level editorial settings | Homepage hero text, footer copy, navigation labels            | Content team controls editorial surface.        |

### Boundary Rules

1. **Security rules NEVER go in CMS.** CSP headers, webhook secrets, rate limits, and auth configuration are code-only.
2. **Route structure NEVER goes in CMS.** Which pages exist and how they are reached is a code decision. CMS controls what content appears at those routes.
3. **Enum values NEVER go in CMS as free text.** Slugs and taxonomy values are defined in code. CMS content references these values by slug.
4. **Design tokens NEVER go in CMS.** Visual identity changes require code review and deployment.
5. **When in doubt, prefer code.** If changing a value through the CMS could break application behavior, it belongs in code.

---

## 7. CMS Studio Location

Sanity Studio is configured as a `/sanity` directory within the repository.

```
/sanity/
  sanity.config.ts        — Studio configuration (project ID, dataset, plugins)
  sanity.env.ts           — Studio environment variables
  /schemas/               — Document type definitions
    project.ts
    capability.ts
    industry.ts
    article.ts
    processStage.ts
    testimonial.ts
    faq.ts
    siteSettings.ts
    ...
  /desk/                  — Desk structure configuration
    structure.ts
  /plugins/               — Custom Studio plugins (if needed)
  package.json            — Studio-specific dependencies
```

### Studio Deployment Strategy

- Studio is a **separate editorial application**. It is not exposed under normal public navigation.
- Deployment strategy (embedded at `/sanity` route vs. standalone Sanity Cloud deployment) is determined during build configuration in Phase 3.
- The `/sanity` directory contains its own `package.json` with Studio-specific dependencies. This keeps Studio dependencies isolated from the main application.
- Studio schemas (`/sanity/schemas/`) define the content model. These schemas must stay synchronized with `src/types/` — the TypeScript types must match the schema fields.

### Studio Rules

- Studio is NOT accessible to public visitors. It requires authentication.
- Studio schemas are the source of truth for content structure. TypeScript types in `src/types/` mirror schemas.
- No application component code lives in `/sanity/`. No Sanity schema code lives in `src/`.
- Custom Studio plugins are permitted when editorial workflow requires it (e.g., custom publishing workflow, content validation).

---

## 8. Anti-Patterns

The following organizational patterns are explicitly prohibited:

| Anti-Pattern                                 | Why It Fails                                                                     | Correct Approach                                                |
| -------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| One directory with 150+ unrelated components | Unnavigable, no cohesion, impossible to reason about scope                       | Feature-oriented directories with clear ownership               |
| Components that fetch their own data         | Couples presentation to data source, breaks reusability, makes testing difficult | Server components or page-level fetching, data passed via props |
| Shared query file for all Sanity queries     | Becomes a 500-line monolith, every change touches everything                     | Each feature owns its queries                                   |
| Hardcoded pixel values in components         | Bypasses design system, creates visual drift                                     | Design tokens via CSS custom properties                         |
| Security configuration in CMS                | Editable through editorial interface, bypasses code review                       | Code-only, deployed through standard pipeline                   |
| Feature-to-feature imports                   | Creates circular dependencies, tight coupling                                    | Cross-feature composition in page files only                    |
| `any` types or `as any` casts                | Defeats TypeScript safety, hides bugs                                            | Proper type definitions, Zod validation at boundaries           |
| Test fixtures inside `src/`                  | Mixes test infrastructure with production code                                   | Shared fixtures in `tests/`, feature tests co-located           |
| Documentation inside `src/`                  | Clutters source tree, drifts from phase docs                                     | All documentation in `docs/`                                    |
| Route groups that alter URLs                 | Breaks Phase 1 route contract, confuses analytics                                | Route groups are invisible to URL path                          |

---

## 9. Testing Organization

Tests follow a two-tier structure: co-located unit/integration tests and shared test infrastructure.

```
tests/
  setup.ts              — Global test setup (jsdom, mocks, custom matchers)
  fixtures/             — Shared test data (mock projects, mock capabilities)
  helpers/              — Test utilities (render helpers, query mocks)

src/
  features/
    work/
      components/
        ProjectCard.tsx
        ProjectCard.test.tsx    ← Co-located with component
      queries/
        workQueries.ts
        workQueries.test.ts     ← Co-located with query
  lib/
    sanity/
      client.ts
      client.test.ts            ← Co-located with utility
```

### Testing Rules

- **Co-located tests** live next to the file they test: `Component.tsx` → `Component.test.tsx`.
- **Shared test infrastructure** lives in `tests/`: setup files, fixtures, custom matchers, render helpers.
- **No test directories inside `src/`**. Tests are co-located, not gathered into a separate `__tests__/` folder.
- **E2E tests** (when added) live in a top-level `/e2e/` directory, separate from unit and integration tests.

---

## 10. Import Rules

Import direction is strictly one-way to prevent circular dependencies.

```
page.tsx  →  features/*  →  components/*  →  lib/*
                ↓                ↓               ↓
             lib/*           lib/*           types/*
                ↓                ↓
             types/*          types/*
```

### Import Direction Rules

| From           | May Import                                   | Must NOT Import                    |
| -------------- | -------------------------------------------- | ---------------------------------- |
| `app/` (pages) | `features/`, `components/`, `lib/`, `types/` | —                                  |
| `features/`    | `components/`, `lib/`, `types/`              | Other features                     |
| `components/`  | `lib/`, `types/`                             | `features/`, `app/`                |
| `lib/`         | `types/`                                     | `features/`, `components/`, `app/` |
| `types/`       | Nothing (leaf level)                         | Everything                         |

### Import Rules

- **No circular imports.** If A imports B, B must not import A (directly or transitively).
- **No relative imports crossing feature boundaries.** `features/work/` must not use `../../features/capabilities/`. Cross-feature composition happens in `app/`.
- **Barrel exports (`index.ts`) are permitted** at feature and directory boundaries. They must re-export only, no logic.
- **Absolute imports from project root.** Use `@/` path alias (configured in `tsconfig.json`) instead of deep relative paths.

---

## 11. File Naming Conventions

| File Type               | Convention                  | Example                              |
| ----------------------- | --------------------------- | ------------------------------------ |
| Page files              | `page.tsx`                  | `work/page.tsx`                      |
| Layout files            | `layout.tsx`                | `(marketing)/layout.tsx`             |
| React components        | PascalCase                  | `ProjectCard.tsx`                    |
| Utilities and libraries | camelCase                   | `sanityClient.ts`                    |
| Type definitions        | camelCase                   | `project.ts`                         |
| Test files              | Co-located, `.test.` suffix | `ProjectCard.test.tsx`               |
| Style files             | kebab-case or convention    | `globals.css`, `fonts.css`           |
| Configuration           | kebab-case or dot-separated | `sanity.config.ts`, `.env.example`   |
| Sanity schemas          | camelCase                   | `project.ts` (in `/sanity/schemas/`) |

---

## 12. Dependency Isolation

Each top-level directory that runs independently has its own dependency scope.

| Directory  | Dependency Scope                | Rationale                                     |
| ---------- | ------------------------------- | --------------------------------------------- |
| `/` (root) | Main application `package.json` | Next.js application dependencies              |
| `/sanity`  | Studio `package.json`           | Sanity Studio dependencies, isolated from app |
| `/tests`   | Root devDependencies            | Test framework, matchers, utilities           |
| `/scripts` | Root devDependencies            | Build tools, migration utilities              |

### Dependency Rules

- Sanity Studio dependencies do not pollute the main application bundle.
- Test dependencies are `devDependencies`. They never ship to production.
- No runtime dependency on documentation or migration tooling.
- All dependencies must be justified. No speculative installs.

---

## Phase 3 Lock Statement

This document defines WHERE code lives and HOW modules relate. It does not create any files or directories. Implementation begins when Phase 3 build configuration is executed.

**PHASE 3 — SECTION 06B: LOCKED**
