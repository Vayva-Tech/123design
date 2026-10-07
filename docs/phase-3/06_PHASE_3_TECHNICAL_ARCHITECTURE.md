# 06 — Phase 3 Technical Architecture (Master Document)

> **Master summary of Phase 3: Component Architecture, CMS Schema, Content Contracts, Data Model & Technical Foundation.** This document consolidates the complete technical architecture for the 123.design website rebuild. Each subsystem is defined in its own detailed document — this file provides the authoritative overview and cross-references.

---

## Document Status

**PHASE 3 — LOCKED — READY FOR BUILD 001**

No application files created. No dependencies installed. No external research performed.

---

## 1. Technology Stack

| Layer            | Decision                              | Detail                                                       |
| ---------------- | ------------------------------------- | ------------------------------------------------------------ |
| Framework        | Next.js App Router                    | Server-first rendering, static generation, server actions    |
| Language         | TypeScript (strict)                   | Full strict mode, no `any` at boundaries                     |
| Styling          | Tailwind CSS                          | Utility-first, design token-driven via CSS custom properties |
| CMS              | Sanity                                | Structured content, references, draft workflow, webhooks     |
| Hosting          | Vercel                                | Edge network, preview deployments, CI/CD                     |
| Analytics        | GA4 (+ optional Vercel Analytics)     | Via `trackEvent()` abstraction, no PII                       |
| Error Monitoring | Sentry-compatible                     | Server and client error tracking                             |
| Validation       | Zod                                   | Runtime validation at system boundaries                      |
| Testing          | Vitest + Testing Library + Playwright | 6 test categories                                            |

**Full rationale**: See [06A_STACK_DECISIONS.md](./06A_STACK_DECISIONS.md)

---

## 2. Repository Architecture

```
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
/docs           — Phase documentation
```

**Full detail**: See [06B_REPOSITORY_MODULE_ARCHITECTURE.md](./06B_REPOSITORY_MODULE_ARCHITECTURE.md)

---

## 3. Routes & Templates

### Public Routes (19)

| #   | Route                  | Template                       |
| --- | ---------------------- | ------------------------------ |
| 1   | `/`                    | Homepage                       |
| 2   | `/work`                | Work Index                     |
| 3   | `/work/[slug]`         | Project Detail (Light or Full) |
| 4   | `/capabilities`        | Capabilities Index             |
| 5   | `/capabilities/[slug]` | Capability Detail              |
| 6   | `/process`             | Process                        |
| 7   | `/industries`          | Industries Index               |
| 8   | `/industries/[slug]`   | Industry Detail                |
| 9   | `/about`               | About                          |
| 10  | `/insights`            | Insights Index                 |
| 11  | `/insights/[slug]`     | Article Detail                 |
| 12  | `/start-project`       | Start Project                  |
| 13  | `/contact`             | Contact                        |
| 14  | `/faq`                 | FAQ                            |
| 15  | `/privacy`             | Legal                          |
| 16  | `/terms`               | Legal                          |
| 17  | `/accessibility`       | Legal                          |
| 18  | `/robots.txt`          | Technical (generated)          |
| 19  | `/sitemap.xml`         | Technical (generated)          |

### Templates (17)

1. Homepage
2. Work Index
3. Project Detail — Light
4. Project Detail — Full Case Study
5. Capabilities Index
6. Capability Detail
7. Process
8. Industries Index
9. Industry Detail
10. About
11. Insights Index
12. Article Detail
13. Start Project
14. Contact
15. FAQ
16. Legal Page (reused for privacy, terms, accessibility)
17. 404 (not-found.tsx)

Route groups `(marketing)`, `(content)`, `(conversion)` organize files without altering public URLs.

**Full detail**: See [06B_REPOSITORY_MODULE_ARCHITECTURE.md](./06B_REPOSITORY_MODULE_ARCHITECTURE.md)

---

## 4. Component Architecture

### Four Levels

| Level                  | Purpose                      | Count | Examples                                                                 |
| ---------------------- | ---------------------------- | ----- | ------------------------------------------------------------------------ |
| L1 — UI Primitives     | Foundational elements        | 14    | Button, Container, Grid, Stack, Heading, Icon                            |
| L2 — System Components | Composite UI patterns        | 15    | MediaFrame, ResponsiveImage, FilterControl, FormField, Accordion         |
| L3 — Domain Components | Business-specific components | 18    | ProjectCard, CapabilityGrid, TestimonialBlock, ArticleCard               |
| L4 — Page Compositions | Page-level sections          | 11    | HomeHero, WorkIndexView, ProjectHero, StartProjectWizard, Header, Footer |

### Server/Client Split

| Type              | Count   | Rule                                                                                  |
| ----------------- | ------- | ------------------------------------------------------------------------------------- |
| Server Components | ~45     | Default. All L1, most L2/L3, most L4                                                  |
| Client Components | ~12     | Only where interactivity requires: forms, filters, wizards, video, modals, mobile nav |
| **Total**         | **~57** |                                                                                       |

**Full detail**: See [06C_COMPONENT_ARCHITECTURE.md](./06C_COMPONENT_ARCHITECTURE.md)

---

## 5. Component Data Contracts

Every component has a data contract specifying:

- Required and optional props
- Empty/missing data behavior
- Responsive behavior across viewports
- Accessibility responsibilities
- Analytics responsibilities

Key contracts documented: ProjectCard, ProjectGrid, FeaturedProject, CapabilityCard, IndustryCard, ArticleCard, MediaFrame, ResponsiveImage, VideoPlayer, StartProjectWizard, FilterControl, Header, ProjectHero, ProcessMap.

Filter architecture: Server-rendered initial content, client-interactive filtering, URL state sync, canonicalized to `/work` for SEO.

**Full detail**: See [06D_COMPONENT_DATA_CONTRACTS.md](./06D_COMPONENT_DATA_CONTRACTS.md)

---

## 6. CMS Schema (Sanity)

### Document Types (13)

| #   | Type             | Singleton |
| --- | ---------------- | --------- |
| 1   | project          | No        |
| 2   | capability       | No        |
| 3   | industry         | No        |
| 4   | article          | No        |
| 5   | articleCategory  | No        |
| 6   | testimonial      | No        |
| 7   | person           | No        |
| 8   | office           | No        |
| 9   | faqItem          | No        |
| 10  | redirect         | No        |
| 11  | siteSettings     | Yes       |
| 12  | leadFormSettings | Yes       |
| 13  | seoDefaults      | Yes       |

### Object Types (15)

seo, mediaImage, mediaVideo, mediaItem, cta, link, richText, projectMeta, lifecycleStageReference, approvalState, contentStatus, legacyRoute, galleryItem, quote, technicalDetail

### Publication Enforcement

- 6 states: DRAFT → CONTENT_REVIEW → CLIENT_REVIEW → READY → PUBLISHED → ARCHIVED
- Only PUBLISHED is public — enforced at query level
- Dual approval: content approval + client approval (independent tracks)
- Entity type gating: only INDIVIDUAL_PROJECT and approved PROJECT_FAMILY in public queries

**Full detail**: See [06E_CMS_SCHEMA.md](./06E_CMS_SCHEMA.md)

---

## 7. Content Governance

- Content provenance: evidenceState, sourceNote, ownerVerified, clientApproval
- Slug governance: lowercase, kebab-case, stable after publication, redirect on change
- No generic page builder — CMS controls content within controlled templates
- Migration strategy: verified structured data → transform → validate → editorial review → CMS import

**Full detail**: See [06F_CMS_CONTENT_GOVERNANCE.md](./06F_CMS_CONTENT_GOVERNANCE.md)

---

## 8. Domain Models & Data Layer

### Data Transformation Pipeline

```
SANITY RAW DATA → QUERY RESULT → VALIDATION (Zod) → DOMAIN MAPPER → DOMAIN MODEL → COMPONENT
```

### Domain Models (11)

1. ProjectCardModel
2. ProjectPageModel
3. CapabilityCardModel
4. CapabilityPageModel
5. IndustryPageModel
6. ArticleCardModel
7. ArticlePageModel
8. TestimonialModel
9. NavigationModel
10. SiteSettingsModel
11. LeadFormSettingsModel

### Validation Boundaries (15)

| #    | Boundary                 | Tool |
| ---- | ------------------------ | ---- |
| 1–11 | Domain model Zod schemas | Zod  |
| 12   | Environment variables    | Zod  |
| 13   | Form submission payloads | Zod  |
| 14   | Webhook payloads         | Zod  |
| 15   | URL query/filter state   | Zod  |

**Full detail**: See [06G_DOMAIN_CONTENT_CONTRACTS.md](./06G_DOMAIN_CONTENT_CONTRACTS.md)

---

## 9. Data Fetching, Caching & Revalidation

- Server-side fetching from Sanity (default)
- Static generation / cached server rendering for all content pages
- Webhook-triggered revalidation via cache tags
- Cache tags: project, project:{slug}, capabilities, capability:{slug}, industries, industry:{slug}, articles, article:{slug}
- Draft preview: authorized only, noindex, excluded from sitemap

**Full detail**: See [06H_DATA_FETCHING_CACHING_REVALIDATION.md](./06H_DATA_FETCHING_CACHING_REVALIDATION.md)

---

## 10. Media Pipeline

### Three-Tier Architecture

| Tier             | Purpose                              |
| ---------------- | ------------------------------------ |
| Source Archive   | Immutable raw media storage          |
| Migration Master | Archival-quality processed masters   |
| CMS/Delivery     | Optimized derivatives via Sanity CDN |

- Image pipeline: Sanity CDN transforms, responsive srcset, WOFF2 fonts
- Video: purpose-driven behavior (heroReel, hoverPreview, projectVideo, etc.)
- Alt text governance: never auto-generated from filename

**Full detail**: See [06I_MEDIA_PIPELINE_ARCHITECTURE.md](./06I_MEDIA_PIPELINE_ARCHITECTURE.md)

---

## 11. Lead Form Architecture

- Client wizard → client validation → server submission → server validation → bot/rate checks → attachment checks → lead adapter → notification/CRM
- Attachment policy: PDF/JPEG/PNG/DOCX only, ~10MB max, 3 files max
- No CAD at launch
- CMS configures options/copy; CMS does NOT alter security/validation/server logic

**Full detail**: See [06J_LEAD_FORM_ARCHITECTURE.md](./06J_LEAD_FORM_ARCHITECTURE.md)

---

## 12. SEO & Structured Data

- Per-page metadata via Next.js Metadata API
- Structured data: Organization, WebSite, BreadcrumbList, Article, FAQPage
- Sitemap: published content only, no filter pages
- Redirect architecture: CMS-managed, 301/308 only, loop prevention

**Full detail**: See [06K_SEO_METADATA_STRUCTURED_DATA.md](./06K_SEO_METADATA_STRUCTURED_DATA.md)

---

## 13. Analytics & Privacy

- Single abstraction: `trackEvent()` — no direct provider API calls
- 17 typed events with strict contracts
- Consent-aware: no event fires without consent
- PII filtering: centralized, no PII reaches analytics regardless of caller
- Provider adapter pattern for future migration

**Full detail**: See [06L_ANALYTICS_PRIVACY_ARCHITECTURE.md](./06L_ANALYTICS_PRIVACY_ARCHITECTURE.md)

---

## 14. Security Architecture

### 13 Layers of Defense

1. Dependency Security
2. Environment Validation
3. Security Headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
4. Server-Side Validation (Zod at API boundaries)
5. Rate Limiting
6. Bot Protection
7. Attachment Validation
8. Sanity Access Tiers (public read, authenticated write, webhook signing)
9. Webhook Verification
10. CSP Strategy
11. Environment Isolation
12. Secret Management
13. Dependency Audit in CI

**Full detail**: See [06M_SECURITY_ARCHITECTURE.md](./06M_SECURITY_ARCHITECTURE.md)

---

## 15. Accessibility

- WCAG 2.2 AA compliance
- Reusable a11y utilities (focus management, aria helpers, keyboard navigation)
- Heading architecture: single h1 per page, logical hierarchy
- Interactive card accessibility: proper role, keyboard activation, focus indicators
- Media accessibility: alt text governance, video transcripts, reduced motion support
- Form accessibility: labeled inputs, error association, required field indication

**Full detail**: See [06N_ACCESSIBILITY_TECHNICAL_ARCHITECTURE.md](./06N_ACCESSIBILITY_TECHNICAL_ARCHITECTURE.md)

---

## 16. Testing & QA

### 6 Test Categories

| #   | Category          | Tool                     | When                   |
| --- | ----------------- | ------------------------ | ---------------------- |
| 1   | Unit              | Vitest                   | Every save / CI        |
| 2   | Component         | Testing Library + Vitest | Every save / CI        |
| 3   | Integration       | Testing Library + MSW    | CI, pre-merge          |
| 4   | E2E               | Playwright               | Pre-merge, pre-deploy  |
| 5   | Performance       | Lighthouse / Web Vitals  | Pre-deploy, continuous |
| 6   | Visual Regression | Chromatic / Percy        | Optional, where useful |

### Performance Targets

| Metric | Target  |
| ------ | ------- |
| LCP    | < 2.5s  |
| CLS    | < 0.1   |
| INP    | < 200ms |

### 9 E2E Critical Paths

Homepage load, work index + filter, project detail, capability page, industry page, start project form, contact form, navigation flow, 404 handling.

**Full detail**: See [06O_TESTING_QA_ARCHITECTURE.md](./06O_TESTING_QA_ARCHITECTURE.md)

---

## 17. Deployment & Environments

| Environment | Purpose           | URL Pattern        |
| ----------- | ----------------- | ------------------ |
| Local       | Development       | localhost:3000     |
| Preview     | PR previews       | *.vercel.app       |
| Staging     | Pre-production QA | staging.123.design |
| Production  | Live site         | 123.design         |

- Git workflow: feature branches → PR → preview → merge to main → production
- Sanity dual-dataset: production + staging
- CI gates: lint, typecheck, test, build

**Full detail**: See [06P_DEPLOYMENT_ENVIRONMENTS.md](./06P_DEPLOYMENT_ENVIRONMENTS.md)

---

## 18. Implementation Sequence

18 builds (BUILD 001–018), sequential with defined dependencies:

| Build | Scope                                         |
| ----- | --------------------------------------------- |
| 001   | Repository Foundation & Quality Gates         |
| 002   | Design Tokens, Fonts & Core UI Primitives     |
| 003   | Global Shell, Header, Navigation & Footer     |
| 004   | Sanity CMS Foundation & Core Schemas          |
| 005   | Data Layer, Domain Models & Preview           |
| 006   | Homepage                                      |
| 007   | Work Index & Filtering                        |
| 008   | Project Detail System                         |
| 009   | Capabilities                                  |
| 010   | Process & Industries                          |
| 011   | About, Insights, FAQ & Content Pages          |
| 012   | Start Project + Contact                       |
| 013   | SEO, Redirects, Structured Data               |
| 014   | Analytics, Security & Observability           |
| 015   | Accessibility, Performance & Cross-Browser QA |
| 016   | Content Migration & Media Optimization        |
| 017   | Staging Acceptance                            |
| 018   | Production Launch                             |

**Full detail**: See [06Q_IMPLEMENTATION_SEQUENCE.md](./06Q_IMPLEMENTATION_SEQUENCE.md)

---

## 19. Architectural Invariants (15)

1. Public project content must be approved
2. Client-review content never appears in public queries
3. Server Components are default
4. CMS does not control arbitrary layout
5. Design tokens are canonical
6. No PII enters analytics
7. Source media archive is immutable
8. All form data is validated server-side
9. Optional content collapses cleanly
10. Accessibility is structural
11. Media is performance-budgeted
12. Redirect intent is preserved
13. Secrets remain server-side
14. No unverified claims are generated from metadata
15. Production deployment requires QA gates

---

## 20. Document Index

| Document                                                                                     | Sections Covered  | Status |
| -------------------------------------------------------------------------------------------- | ----------------- | ------ |
| [06A_STACK_DECISIONS.md](./06A_STACK_DECISIONS.md)                                           | 1–8               | LOCKED |
| [06B_REPOSITORY_MODULE_ARCHITECTURE.md](./06B_REPOSITORY_MODULE_ARCHITECTURE.md)             | 9–12              | LOCKED |
| [06C_COMPONENT_ARCHITECTURE.md](./06C_COMPONENT_ARCHITECTURE.md)                             | 13–21, 136        | LOCKED |
| [06D_COMPONENT_DATA_CONTRACTS.md](./06D_COMPONENT_DATA_CONTRACTS.md)                         | 22–25, 135        | LOCKED |
| [06E_CMS_SCHEMA.md](./06E_CMS_SCHEMA.md)                                                     | 26–54             | LOCKED |
| [06F_CMS_CONTENT_GOVERNANCE.md](./06F_CMS_CONTENT_GOVERNANCE.md)                             | 52–54, provenance | LOCKED |
| [06G_DOMAIN_CONTENT_CONTRACTS.md](./06G_DOMAIN_CONTENT_CONTRACTS.md)                         | 55–60             | LOCKED |
| [06H_DATA_FETCHING_CACHING_REVALIDATION.md](./06H_DATA_FETCHING_CACHING_REVALIDATION.md)     | 61–63             | LOCKED |
| [06I_MEDIA_PIPELINE_ARCHITECTURE.md](./06I_MEDIA_PIPELINE_ARCHITECTURE.md)                   | 64–70             | LOCKED |
| [06J_LEAD_FORM_ARCHITECTURE.md](./06J_LEAD_FORM_ARCHITECTURE.md)                             | 71–80             | LOCKED |
| [06K_SEO_METADATA_STRUCTURED_DATA.md](./06K_SEO_METADATA_STRUCTURED_DATA.md)                 | 81–89             | LOCKED |
| [06L_ANALYTICS_PRIVACY_ARCHITECTURE.md](./06L_ANALYTICS_PRIVACY_ARCHITECTURE.md)             | 90–92             | LOCKED |
| [06M_SECURITY_ARCHITECTURE.md](./06M_SECURITY_ARCHITECTURE.md)                               | 93–99             | LOCKED |
| [06N_ACCESSIBILITY_TECHNICAL_ARCHITECTURE.md](./06N_ACCESSIBILITY_TECHNICAL_ARCHITECTURE.md) | 100–104           | LOCKED |
| [06O_TESTING_QA_ARCHITECTURE.md](./06O_TESTING_QA_ARCHITECTURE.md)                           | 105–112           | LOCKED |
| [06P_DEPLOYMENT_ENVIRONMENTS.md](./06P_DEPLOYMENT_ENVIRONMENTS.md)                           | 113–118           | LOCKED |
| [06Q_IMPLEMENTATION_SEQUENCE.md](./06Q_IMPLEMENTATION_SEQUENCE.md)                           | 119–151           | LOCKED |
| [06R_PHASE_3_ACCEPTANCE_CRITERIA.md](./06R_PHASE_3_ACCEPTANCE_CRITERIA.md)                   | 154               | LOCKED |
| [06S_PHASE_3_HANDOFF.md](./06S_PHASE_3_HANDOFF.md)                                           | 155–157           | LOCKED |

---

**PHASE 3 — MASTER DOCUMENT: LOCKED**
