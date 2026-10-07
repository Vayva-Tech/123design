# 06Q — Implementation Sequence

> Phase 3 — Section 06Q
> Status: LOCKED

---

## Build Sequence Overview

The implementation is divided into 18 planned build prompts: **BUILD 001** through **BUILD 018**. Each build has defined scope, inputs, acceptance criteria, and explicit prohibitions. Builds are sequential — each depends on the output of prior builds.

| Build | Title                                         | Core Deliverable                                                 |
| ----- | --------------------------------------------- | ---------------------------------------------------------------- |
| 001   | Repository Foundation & Quality Gates         | Project init, TypeScript, lint, format, Tailwind, test baseline  |
| 002   | Design Tokens, Fonts & Core UI Primitives     | CSS custom properties, L1 component library                      |
| 003   | Global Shell, Header, Navigation & Footer     | Root layout, header, footer, mobile menu, mega-menu              |
| 004   | Sanity CMS Foundation & Core Schemas          | Sanity Studio, document schemas, object schemas                  |
| 005   | Data Layer, Domain Models & Preview           | Sanity client, GROQ queries, Zod schemas, domain models          |
| 006   | Homepage                                      | Hero reel, featured work, capabilities overview, CTA             |
| 007   | Work Index & Filtering                        | Project grid, filter controls, URL state, filter SEO             |
| 008   | Project Detail System                         | Project hero, case study body, modules, gallery, video           |
| 009   | Capabilities                                  | Capabilities index, capability detail, lifecycle rail            |
| 010   | Process & Industries                          | Process mosaic, industries index, industry detail                |
| 011   | About, Insights, FAQ & Content Pages          | About, insights index, article detail, FAQ, legal                |
| 012   | Start Project + Contact                       | Lead form wizard, file upload, server validation, bot protection |
| 013   | SEO, Redirects, Structured Data               | Metadata, structured data, sitemap, robots.txt, redirects        |
| 014   | Analytics, Security & Observability           | Event tracking, security headers, CSP, error monitoring          |
| 015   | Accessibility, Performance & Cross-Browser QA | A11y audit, performance optimization, CWV verification           |
| 016   | Content Migration & Media Optimization        | Content migration, media pipeline, alt text, video encoding      |
| 017   | Staging Acceptance                            | Full staging deploy, E2E suite, content approval, draft check    |
| 018   | Production Launch                             | Production deploy, DNS, monitoring, smoke tests                  |

---

## 147 — Build Order Principle

The build sequence respects dependency order. Certain foundations must exist before dependent work begins.

### Hard Dependencies

- **Do not build Homepage (BUILD 006) before:** design tokens (BUILD 002), primitives (BUILD 002), global shell (BUILD 003), basic CMS/data architecture (BUILD 004, BUILD 005) exist.
- **Do not build lead forms (BUILD 012) before:** server validation architecture (BUILD 005), security architecture (BUILD 014) exist.
- **Do not deploy production (BUILD 018) before:** redirects (BUILD 013), SEO (BUILD 013), accessibility (BUILD 015), performance (BUILD 015), forms (BUILD 012), security (BUILD 014), content approval pass QA (BUILD 017).

### Sequence Logic

1. Foundation first: tokens, primitives, shell (BUILD 001–003).
2. Data architecture next: CMS, schemas, queries, domain models (BUILD 004–005).
3. Pages built in dependency order: homepage first (most visible), then work/project system, then capabilities/process/industries, then content pages (BUILD 006–011).
4. Cross-cutting concerns after pages exist: SEO, analytics, security (BUILD 013–014).
5. Quality gates after everything built: accessibility, performance, cross-browser (BUILD 015).
6. Content and media after architecture proven: migration, optimization (BUILD 016).
7. Acceptance before launch: staging QA (BUILD 017), then production (BUILD 018).

---

## BUILD 001 — Repository Foundation & Quality Gates

**Scope:**
Initialize project, create dependencies, configure TypeScript (strict), configure linting, configure formatting, configure Tailwind, create testing baseline, create environment validation skeleton, create empty route shell only where specifically authorized.

**Inputs:**

- 06A (tech stack)
- 06B (repository structure)
- 05L (design tokens JSON)

**Files allowed:**
`package.json`, `tsconfig.json`, `tailwind.config.*`, lint config, format config, test config, environment validation module, empty app shell (`app/layout.tsx`, `app/page.tsx` as placeholder only).

**Dependencies:** None (first build).

**Acceptance criteria:**

- Project initializes without errors.
- TypeScript compiles in strict mode with zero errors.
- Lint passes with zero errors.
- Format check passes.
- Test runner starts and can execute an empty test file.
- Environment validation rejects missing required variables.

**Prohibited:**

- Homepage content.
- CMS connection.
- Component implementation (beyond empty shell).
- Deployment configuration.

---

## BUILD 002 — Design Tokens, Fonts & Core UI Primitives

**Scope:**
CSS custom properties from 05L tokens, Tailwind theme integration, font loading (Inter + Inter Tight), L1 UI Primitives.

**L1 Primitives:**
Button, TextLink, Container, Grid, Stack, Cluster, Divider, Tag, Eyebrow, Heading, BodyText, Icon, VisuallyHidden, SkipLink.

**Inputs:**

- 05L_DESIGN_TOKENS.json
- 05C (typography)
- 05B (color)
- 05D (layout/grid/spacing)
- 06C (component architecture)

**Acceptance criteria:**

- All tokens available as CSS custom properties.
- Tailwind utilities reference tokens (no hardcoded values).
- All L1 components render with correct variants (size, color, state).
- Font loading works (Inter + Inter Tight, correct weights).
- Components pass basic accessibility checks (semantic HTML, aria where needed).

---

## BUILD 003 — Global Shell, Header, Navigation & Footer

**Scope:**
Root layout, Header with navigation, Footer, mobile menu, mega-menu structure.

**Inputs:**

- Phase 1 IA (information architecture)
- 06C (component architecture)
- 05E (component visual spec)

**Acceptance criteria:**

- Navigation works at all breakpoints (mobile, tablet, desktop, wide).
- Mobile menu functional (open, close, navigate, close on navigate).
- Footer renders with correct link structure.
- Accessibility landmarks correct (header, nav, main, footer).
- Skip link works.
- Focus management correct in mobile menu and mega-menu.

---

## BUILD 004 — Sanity CMS Foundation & Core Schemas

**Scope:**
Sanity Studio setup, core document schemas, object schemas, development dataset.

**Document schemas:**
Project, Capability, Industry, Article (+ others as defined in 06E).

**Object schemas:**
seo, mediaImage, mediaVideo, internalLink, externalLink, rich text blocks (+ others as defined in 06E).

**Inputs:**

- 06E (CMS schema)

**Acceptance criteria:**

- Sanity Studio runs locally.
- All schemas validate without errors.
- Test documents can be created for each schema.
- Schema relationships (references) work correctly.
- Development dataset populated with sample content.

---

## BUILD 005 — Data Layer, Domain Models & Preview

**Scope:**
Sanity client configuration, GROQ queries, Zod validation schemas, domain mappers, domain models, preview/draft architecture.

**Inputs:**

- 06E (CMS schema)
- 06G (domain contracts)
- 06H (data fetching)

**Acceptance criteria:**

- GROQ queries return data from development dataset.
- Zod schemas validate all expected content shapes.
- Domain mappers transform CMS data → domain models correctly.
- Domain models match contracts defined in 06G.
- Preview mode works with valid authorization token.
- Draft documents visible in preview, hidden without authorization.
- Revalidation endpoint responds correctly (with secret validation).

---

## BUILD 006 — Homepage

**Scope:**
HomeHero (with reel), featured work section, capabilities overview, credibility strip, CTA section.

**Inputs:**

- Phase 1 IA
- 05K (composition patterns)
- 06D (component contracts)

**Acceptance criteria:**

- Homepage renders with CMS content.
- Hero reel performs within performance budget (no CLS, lazy subsequent slides).
- All sections responsive at all breakpoints.
- Featured work shows only PUBLISHED projects.
- All interactive elements keyboard accessible.
- No hardcoded content — everything from CMS.

---

## BUILD 007 — Work Index & Filtering

**Scope:**
Work index page, ProjectCard/ProjectGrid, filter controls, URL state management, filter SEO.

**Inputs:**

- Phase 1 IA
- 06D (component contracts)
- 06G (domain contracts)

**Acceptance criteria:**

- Published projects render in grid.
- Filter controls update URL query parameters.
- URL query parameters restore filter state on load.
- Browser back/forward navigation works with filter state.
- Only PUBLISHED projects shown (no drafts, no client-review).
- Filter SEO: metadata reflects active filters where appropriate.
- Empty filter results show appropriate empty state.

---

## BUILD 008 — Project Detail System

**Scope:**
Project hero, case study body, module system, gallery, video blocks, technical details, related work, light vs full project support.

**Inputs:**

- 06E (project schema)
- 06D (component contracts)

**Acceptance criteria:**

- Light projects render correctly (minimal content).
- Full projects render correctly (all module types).
- Modules conditionally render based on content presence.
- Gallery displays images with correct responsive behavior.
- Video blocks show poster first, play on interaction (not autoplay in grid).
- Related work filtered correctly (same industry/capability, excludes current project, PUBLISHED only).
- All media has explicit dimensions (no CLS).

---

## BUILD 009 — Capabilities

**Scope:**
Capabilities index, capability detail, lifecycle rail, related projects.

**Inputs:**

- Phase 1 IA
- 06E (capability schema)

**Acceptance criteria:**

- All 10 capabilities render on index page.
- Capability detail page renders with correct content.
- Lifecycle stages display in correct order with correct content.
- Related projects filtered correctly (by capability, PUBLISHED only).
- Navigation between capabilities works.

---

## BUILD 010 — Process & Industries

**Scope:**
Process page with mosaic, industries index, industry detail, medical/defense governance.

**Inputs:**

- Phase 1 IA
- 06E (industry schema)

**Acceptance criteria:**

- Process stages render in mosaic layout.
- Industry index shows all industries.
- Industry detail pages render correctly.
- Medical/defense governance content displays without unverified claims.
- Industry pages work even when no approved projects exist for that industry (graceful empty state).

---

## BUILD 011 — About, Insights, FAQ & Content Pages

**Scope:**
About page, insights index, article detail, FAQ page, legal pages.

**Inputs:**

- Phase 1 IA
- 06E (article, FAQ, person schemas)

**Acceptance criteria:**

- About page renders with team/person content.
- Insights index shows published articles, paginated if needed.
- Article detail renders all body block types correctly.
- FAQ page renders questions and answers.
- FAQ structured data included where legitimate (not forced where inappropriate).
- Legal pages render correctly.
- All content pages responsive.

---

## BUILD 012 — Start Project + Contact

**Scope:**
Start Project wizard (multi-step), file upload, client validation, server action, server validation, bot protection, lead adapter, contact form.

**Inputs:**

- 06J (lead form architecture)
- 06M (security)

**Acceptance criteria:**

- Form submits successfully end-to-end.
- Server validation works independently of client validation.
- File attachments restricted by type and size.
- PII not present in analytics events.
- Bot protection active and functional.
- Lead adapter creates lead record correctly.
- Validation errors shown clearly, blocking submit.
- Form works with keyboard only (no mouse required).
- Contact form (simpler) also works end-to-end.

---

## BUILD 013 — SEO, Redirects, Structured Data

**Scope:**
Metadata generation, structured data, sitemap, robots.txt, legacy redirect system.

**Structured data types:**
Organization, BreadcrumbList, Article, VideoObject, FAQPage.

**Inputs:**

- 06K (SEO architecture)
- 06F (content governance)

**Acceptance criteria:**

- All pages have correct metadata (title, description, OG, Twitter).
- Structured data validates (Google Rich Results Test or equivalent).
- Sitemap includes only PUBLISHED content.
- robots.txt configured correctly.
- Legacy redirects work without loops.
- Redirect chains resolve in a single hop where possible.
- 404 page renders for invalid URLs.

---

## BUILD 014 — Analytics, Security & Observability

**Scope:**
trackEvent() implementation, all 17 event definitions, security headers, CSP, error monitoring integration, webhook revalidation endpoint.

**Inputs:**

- 06L (analytics)
- 06M (security)

**Acceptance criteria:**

- All 17 events fire correctly in appropriate contexts.
- No PII in any analytics event payload.
- Security headers present on all responses.
- CSP configured (does not break functionality).
- Error monitoring captures unhandled exceptions.
- Webhook revalidation endpoint verifies secret before processing.
- No secrets in client bundle.

---

## BUILD 015 — Accessibility, Performance & Cross-Browser QA

**Scope:**
Accessibility audit (axe + manual), performance optimization, Core Web Vitals verification, cross-browser testing, reduced motion verification.

**Inputs:**

- 06N (accessibility)
- 06O (testing)

**Acceptance criteria:**

- No critical or serious accessibility violations (axe).
- Manual keyboard navigation works on all pages.
- Manual screen reader smoke test passes on key pages.
- LCP < 2.5s on key pages (measured, not assumed).
- CLS < 0.1 on key pages (measured, not assumed).
- INP < 200ms on interactive pages (measured, not assumed).
- Reduced motion: animations disabled/simplified when preferred.
- Cross-browser: works in Chrome, Firefox, Safari, Edge (latest).

---

## BUILD 016 — Content Migration & Media Optimization

**Scope:**
Verified content migration, media optimization pipeline, image alt text review, video encoding/optimization.

**Inputs:**

- 06F (content governance)
- 06I (media pipeline)

**Acceptance criteria:**

- Migrated content validated against domain models.
- Images optimized (correct format, size, responsive variants).
- All content images have meaningful alt text.
- Videos encoded to target specs (resolution, bitrate, format).
- Video posters generated and assigned.
- No broken references from migration.

---

## BUILD 017 — Staging Acceptance

**Scope:**
Full staging deployment, E2E test suite, content approval verification, draft leakage check, redirect verification, form submission verification.

**Inputs:**

- 06O (testing)
- All previous builds.

**Acceptance criteria:**

- All E2E paths pass (9 critical paths from 108).
- No draft or client-review content leaks to staging/public.
- All forms submit successfully in staging.
- All redirects resolve correctly.
- No broken links detected.
- Content approval workflow verified (editors can publish, preview, approve).
- Staging environment mirrors production configuration.

---

## BUILD 018 — Production Launch

**Scope:**
Production deployment, DNS configuration, monitoring activation, final smoke tests.

**Inputs:**

- All previous builds.
- Staging acceptance (BUILD 017).

**Acceptance criteria:**

- Production site live and accessible.
- DNS configured and resolving correctly.
- Monitoring active (error tracking, uptime, analytics).
- Final smoke tests pass (homepage loads, key pages render, forms work).
- No regressions from staging.
- Legacy URLs redirect correctly from production domain.

---

## 148 — First Build Boundary

**BUILD 001** is explicitly scoped to foundation work only. It will later be permitted to:

- Initialize the project repository.
- Create dependencies (package.json, install packages).
- Configure TypeScript in strict mode.
- Configure linting (ESLint).
- Configure formatting (Prettier).
- Configure Tailwind CSS.
- Create testing baseline (test runner, empty test).
- Create environment validation skeleton.
- Create empty route shell only where specifically authorized (e.g., `app/layout.tsx` with minimal content, `app/page.tsx` as placeholder).

**BUILD 001 will NOT:**

- Build homepage content.
- Connect to CMS.
- Implement components beyond empty shell.
- Configure deployment.
- Create any page beyond the authorized empty shell.

This boundary exists to prevent scope creep in the foundation build. Foundation is complete when the toolchain works, not when the first page is visible.

---

## Document Status

**PHASE 3 — SECTION 06Q: LOCKED**

This document defines the implementation sequence for 123.design. Each build is a self-contained prompt with defined scope, inputs, acceptance criteria, and prohibitions. Builds are executed sequentially — no build may begin until its dependencies are satisfied. The sequence ensures foundations exist before pages, pages exist before cross-cutting concerns, and everything passes QA before production launch.
