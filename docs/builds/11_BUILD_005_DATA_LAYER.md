# BUILD 005 — DATA LAYER, DOMAIN MODELS, PUBLIC QUERY SAFETY, PREVIEW & REVALIDATION

**Build:** 005 — Data Layer, Domain Models, Public Query Safety, Preview & Revalidation
**Date:** 2026-09-26
**Status:** COMPLETE — PATCH 001 APPLIED

---

## SCOPE

Implementation of the application data boundary between Sanity CMS and the public website:

### Domain Models (10 type files, 11 top-level models)

Typed interfaces representing the content contract for the public website. The canonical top-level application domain models are exactly 11:

1. `ProjectCardModel`
2. `ProjectPageModel`
3. `CapabilityCardModel`
4. `CapabilityPageModel`
5. `IndustryPageModel`
6. `ArticleCardModel`
7. `ArticlePageModel`
8. `TestimonialModel`
9. `NavigationModel`
10. `SiteSettingsModel`
11. `LeadFormSettingsModel`

Supporting nested types (MediaModel, SeoFields, ProjectModuleModel, NavigationItemModel, SocialLinkModel) do NOT count as additional canonical top-level domain models.

### GROQ Queries (9 query files)

String-constant GROQ queries with centralized public filters:

- `public-filters.ts` — `PUBLIC_PROJECT_FILTER`, `PUBLIC_CAPABILITY_FILTER`, `PUBLIC_INDUSTRY_FILTER`, `PUBLIC_ARTICLE_FILTER`, `PUBLIC_TESTIMONIAL_FILTER`
- `fragments.ts` — reusable field fragments (`MEDIA_FRAGMENT`, `SEO_FRAGMENT`, `CAPABILITY_CARD_FIELDS`, `PROJECT_CARD_FIELDS`)
- `projects.ts` — `publishedProjectsQuery`, `publishedProjectBySlugQuery`, `featuredProjectsQuery`, `relatedProjectsQuery`, `projectsByIndustrySlugQuery`, `projectsByCapabilitySlugQuery`
- `capabilities.ts` — `publishedCapabilitiesQuery`, `publishedCapabilityBySlugQuery`
- `industries.ts` — `publishedIndustriesQuery`, `publishedIndustryBySlugQuery`
- `articles.ts` — `publishedArticlesQuery`, `publishedArticleBySlugQuery`
- `testimonials.ts` — `publishedTestimonialsQuery`
- `settings.ts` — `siteSettingsQuery`, `leadFormSettingsQuery`, `seoDefaultsQuery`
- `supporting.ts` — `verifiedOfficesQuery`, `activePeopleQuery`, `publishedFaqQuery`, `verifiedRedirectsQuery`, `publishedArticleCategoriesQuery`

### Zod Validation Schemas

Runtime validation of Sanity API responses:

- `validation/schemas.ts` — Zod schemas for all record types (project, capability, industry, article, testimonial, settings, seoDefaults, webhook payload, etc.)
- `validation/index.ts` — barrel exports with inferred TypeScript types

Webhook payload schema: `{ _type: z.string(), _id: z.string().optional(), slug: z.string().optional() }`.

### Sanity Record Mappers (8 mapper files)

Transform validated Sanity records into domain models:

- `mappers/media.ts` — `mapMedia()`, `mapOptionalMedia()`, `mapImage()`
- `mappers/project.ts` — `mapProjectCard()`, `mapProjectPage()`, `mapModule()` — includes client display defense (NAMED + clientRelationshipVerified required)
- `mappers/capability.ts` — `mapCapabilityCard()`, `mapCapabilityPage()`
- `mappers/industry.ts` — `mapIndustryPage()`
- `mappers/article.ts` — `mapArticleCard()`, `mapArticlePage()`
- `mappers/testimonial.ts` — `mapTestimonial()`
- `mappers/settings.ts` — `mapSiteSettings()`, `mapLeadFormSettings()`
- `mappers/index.ts` — barrel exports

### Fetch Layer

Type-safe public fetch functions with cache tag attachment:

- `fetch/public.ts` — `fetchPublicQuery()`, `fetchPublicQueryMany()` (low-level tagged fetch)
- `fetch/data-access.ts` — 20 typed data access functions, each attaching canonical cache tags:
  - `fetchPublishedProjects()`, `fetchProjectBySlug()`, `fetchFeaturedProjects()`, `fetchRelatedProjects()`, `fetchProjectsByIndustrySlug()`, `fetchProjectsByCapabilitySlug()`
  - `fetchPublishedCapabilities()`, `fetchCapabilityBySlug()`
  - `fetchPublishedIndustries()`, `fetchIndustryBySlug()`
  - `fetchPublishedArticles()`, `fetchArticleBySlug()`
  - `fetchPublishedTestimonials()`
  - `fetchSiteSettings()`, `fetchLeadFormSettings()`, `fetchSeoDefaults()`
  - `fetchFaq()`, `fetchOffices()`, `fetchPeople()`, `fetchRedirects()`, `fetchArticleCategories()`
- `fetch/index.ts` — barrel exports

### Cache Tag Architecture

Centralized `cacheTags` object with 13 static tags and 5 dynamic tag generator functions:

**Static tags:** `projects`, `capabilities`, `industries`, `articles`, `testimonials`, `site-settings`, `lead-form-settings`, `seo-defaults`, `faq`, `offices`, `people`, `redirects`, `article-categories`.

**Dynamic tag functions:** `cacheTags.project(slug)`, `cacheTags.capability(slug)`, `cacheTags.industry(slug)`, `cacheTags.article(slug)`, `cacheTags.testimonial(id)` — all return `string | undefined` (undefined for invalid slugs).

**Additional exports:** `WEBHOOK_TYPE_WHITELIST` (13 document types), `getRevalidationTags(payload)` for server-side deterministic tag derivation with deduplication, `isValidSlug(slug)` for slug validation.

No wildcards. All tags are explicit and enumerated.

### Preview System

Server-only draft mode infrastructure:

- `preview/client.ts` — preview Sanity client (`useCdn: false`, `perspective: 'drafts'`, token authenticated)
- `preview/authorization.ts` — `verifyPreviewSecret()` using `SANITY_PREVIEW_SECRET` (distinct from `SANITY_REVALIDATE_SECRET`), timing-safe comparison via `node:crypto`
- `preview/paths.ts` — `getPreviewPaths()` for draft content routing
- `preview/index.ts` — barrel exports

Preview fetch functions use `fetchPublicQuery`/`fetchPublicQueryMany` with `cache: 'no-store'` to prevent draft content from entering the cache.

### API Routes

- `api/draft/enable/route.ts` — **GET** handler: validates `SANITY_PREVIEW_SECRET` via timing-safe comparison, enables draft mode, redirects with defensive headers (Cache-Control: no-store, Referrer-Policy: no-referrer, X-Robots-Tag: noindex/nofollow/noarchive), path validation on redirect parameter
- `api/draft/disable/route.ts` — **POST** handler: disables draft mode, returns JSON
- `api/revalidate/route.ts` — **POST** handler: Bearer token auth against `SANITY_REVALIDATE_SECRET`, 64KB body size guard (content-length + actual byte check), rejects client-supplied tags/paths, validates payload against `webhookPayloadSchema`, checks `_type` against `WEBHOOK_TYPE_WHITELIST`, derives tags server-side via `getRevalidationTags()`, calls `revalidateTag(tag, 'default')` (Next.js 16 two-arg signature)

### Error Handling

- `errors.ts` — Five error classes:
  - `SanityQueryError` — query failures with `queryName` and optional `cause`
  - `SanityValidationError` — validation failures with `queryName` and `issues` array
  - `SanityConfigError` — configuration problems
  - `PreviewAuthorizationError` — preview secret validation failures
  - `RevalidationError` — webhook revalidation failures with `reason`

### Testing (7 test files, 440 total tests)

- `sanity-queries.test.ts` — 49 tests (GROQ query structure, public filter enforcement, fragment composition)
- `sanity-runtime-validation.test.ts` — 32 tests (Zod schema validation for all record types, webhook payload schema)
- `sanity-mappers.test.ts` — 30 tests (mapper correctness for all content types, client display defense)
- `domain-models.test.ts` — 22 tests (domain model type contracts and discriminated unions)
- `cache-tags.test.ts` — 41 tests (static tags, dynamic tag generators, slug validation, webhook whitelist, tag derivation)
- `preview-security.test.ts` — 11 tests (preview authorization, secret validation, timing-safe comparison)
- `revalidation.test.ts` — 18 tests (webhook payload validation, server-side tag derivation, deduplication)

### Constraints

- No public content pages (no [slug]/page.tsx)
- No Portable Text renderers
- No card UI components
- No new dependencies (0 runtime, 0 dev)
- No content seeding
- No hardcoded project IDs or dataset names

---

## IMPLEMENTATION

### 1. Domain Models (`src/types/domain/`)

Pure TypeScript interfaces defining the content contract:

- **media.ts** — `MediaModel` discriminated union (`kind: 'IMAGE' | 'VIDEO'`), `ImageMediaModel`, `VideoMediaModel`
- **common.ts** — `SeoFields`, `PublicationState`, `LinkModel`, `CtaModel`
- **capability.ts** — `CapabilityCardModel`, `CapabilityPageModel`
- **project.ts** — `ProjectCardModel`, `ProjectPageModel`, `ProjectModuleModel` (6-kind discriminated union on `kind` field)
- **article.ts** — `ArticleCardModel`, `ArticlePageModel` with `ArticleAuthorModel`
- **industry.ts** — `IndustryPageModel` with typicalChallenges, developmentConsiderations
- **testimonial.ts** — `TestimonialModel` with quote, name, role, company
- **settings.ts** — `SiteSettingsModel`, `LeadFormSettingsModel`, `SocialLinkModel`
- **navigation.ts** — `NavigationModel`, `NavigationItemModel`
- **index.ts** — barrel exports

### 2. GROQ Queries (`src/lib/sanity/queries/`)

All queries are string constants (no runtime interpolation):

- **public-filters.ts** — Central publication eligibility filters:
  - `PUBLIC_PROJECT_FILTER` — publicationState == 'PUBLISHED' && entityType in PUBLIC_ELIGIBLE_ENTITY_TYPES && content approval && client approval && named-client rule && draft exclusion && required content && association requirement
  - `PUBLIC_CAPABILITY_FILTER` — publicationState == 'PUBLISHED'
  - `PUBLIC_INDUSTRY_FILTER` — publicationState == 'PUBLISHED'
  - `PUBLIC_ARTICLE_FILTER` — publicationState == 'PUBLISHED'
  - `PUBLIC_TESTIMONIAL_FILTER` — approved == true
- **fragments.ts** — Reusable field sets for consistent projections
- **projects.ts** — 6 queries: list, by-slug, featured, related, by-industry, by-capability
- **capabilities.ts** — List and detail queries
- **industries.ts** — List and detail queries with related capabilities
- **articles.ts** — List and detail queries with author/category resolution
- **testimonials.ts** — List query only (no detail pages)
- **settings.ts** — Singleton queries for siteSettings, leadFormSettings, seoDefaults
- **supporting.ts** — Offices, people, FAQ, redirects, article categories

### 3. Zod Validation (`src/lib/sanity/validation/`)

Runtime validation of all Sanity API responses:

- **schemas.ts** — Zod schemas for every record type:
  - `mediaImageRecordSchema`, `mediaVideoRecordSchema`, `mediaItemRecordSchema`
  - `seoRecordSchema`
  - `capabilityCardRecordSchema`, `capabilityPageRecordSchema`
  - `projectCardRecordSchema`, `projectPageRecordSchema` (with module discriminated union, clientDisplayMode, clientRelationshipVerified)
  - `articleCardRecordSchema`, `articlePageRecordSchema`
  - `industryPageRecordSchema`
  - `testimonialRecordSchema`
  - `siteSettingsRecordSchema`, `leadFormSettingsRecordSchema`, `seoDefaultsRecordSchema`
  - `webhookPayloadSchema` — `{ _type: z.string(), _id: z.string().optional(), slug: z.string().optional() }`
- **index.ts** — Barrel exports with `z.infer<>` types

### 4. Mappers (`src/lib/sanity/mappers/`)

Transform validated records into domain models:

- **media.ts** — `mapMedia()`, `mapOptionalMedia()`, `mapImage()` — handles IMAGE/VIDEO discriminated union
- **project.ts** — `mapProjectCard()`, `mapProjectPage()`, `mapModule()` — switches on 6 module kinds; client display defense: client info shown only when `clientDisplayMode === 'NAMED'` AND `clientRelationshipVerified === true`
- **capability.ts** — `mapCapabilityCard()`, `mapCapabilityPage()`
- **industry.ts** — `mapIndustryPage()`
- **article.ts** — `mapArticleCard()`, `mapArticlePage()`
- **testimonial.ts** — `mapTestimonial()`
- **settings.ts** — `mapSiteSettings()`, `mapLeadFormSettings()`

### 5. Fetch Layer (`src/lib/sanity/fetch/`)

Type-safe public fetch functions with cache tag attachment:

- **public.ts** — Low-level `fetchPublicQuery()` and `fetchPublicQueryMany()` with `next: { tags }` and `cache: 'no-store'` support
- **data-access.ts** — 20 typed data access functions, each attaching canonical cache tags from the `cacheTags` object
- **index.ts** — Barrel exports for all fetch functions

### 6. Cache Tags (`src/lib/sanity/cache-tags.ts`)

Centralized `cacheTags` object API:

- 13 static tags: `projects`, `capabilities`, `industries`, `articles`, `testimonials`, `site-settings`, `lead-form-settings`, `seo-defaults`, `faq`, `offices`, `people`, `redirects`, `article-categories`
- 5 dynamic tag functions: `project(slug)`, `capability(slug)`, `industry(slug)`, `article(slug)`, `testimonial(id)` — return `string | undefined`
- `WEBHOOK_TYPE_WHITELIST` — 13 document types as a `ReadonlySet<string>`
- `getRevalidationTags(payload)` — deterministic server-side tag derivation with deduplication
- `isValidSlug(slug)` — slug validation (pattern + max length 200)

No wildcards. All tags are explicit and enumerated.

### 7. Preview System (`src/lib/sanity/preview/`)

Server-only draft mode infrastructure:

- **client.ts** — Preview Sanity client with `useCdn: false`, `perspective: 'drafts'`, token authentication
- **authorization.ts** — `verifyPreviewSecret(secret)` using `SANITY_PREVIEW_SECRET` (separate from `SANITY_REVALIDATE_SECRET`), timing-safe comparison
- **paths.ts** — `getPreviewPaths()` for generating draft content paths

### 8. API Routes

- **api/draft/enable/route.ts** — GET handler: validates `SANITY_PREVIEW_SECRET` via timing-safe comparison, enables draft mode, redirects with defensive headers, path validation
- **api/draft/disable/route.ts** — POST handler: disables draft mode, returns JSON
- **api/revalidate/route.ts** — POST handler: Bearer token auth, 64KB body guard, rejects client tags/paths, validates payload, checks type whitelist, derives tags server-side, calls `revalidateTag(tag, 'default')`

### 9. Error Handling (`src/lib/sanity/errors.ts`)

Five error classes:

- `SanityQueryError` — query failures with `queryName` and optional `cause`
- `SanityValidationError` — validation failures with `queryName` and `issues` array
- `SanityConfigError` — configuration problems
- `PreviewAuthorizationError` — preview secret validation failures
- `RevalidationError` — webhook revalidation failures with `reason`

---

## QUALITY GATES

All quality gates passed after PATCH 001:

- format:check (Prettier) — All matched files use Prettier code style
- lint (ESLint) — No errors or warnings
- typecheck (TypeScript) — No errors
- test (Vitest) — 440 tests passed (16 files)
- build (Next.js 16.3.6) — Compiled successfully
- test:e2e (Playwright) — 49 tests passed

---

## FILES CREATED/MODIFIED

### Created

**Domain Models (10):**

- `src/types/domain/index.ts`
- `src/types/domain/media.ts`
- `src/types/domain/common.ts`
- `src/types/domain/capability.ts`
- `src/types/domain/project.ts`
- `src/types/domain/article.ts`
- `src/types/domain/industry.ts`
- `src/types/domain/testimonial.ts`
- `src/types/domain/settings.ts`
- `src/types/domain/navigation.ts`

**Queries (9):**

- `src/lib/sanity/queries/index.ts`
- `src/lib/sanity/queries/public-filters.ts`
- `src/lib/sanity/queries/fragments.ts`
- `src/lib/sanity/queries/projects.ts`
- `src/lib/sanity/queries/capabilities.ts`
- `src/lib/sanity/queries/industries.ts`
- `src/lib/sanity/queries/articles.ts`
- `src/lib/sanity/queries/testimonials.ts`
- `src/lib/sanity/queries/settings.ts`
- `src/lib/sanity/queries/supporting.ts`

**Validation (2):**

- `src/lib/sanity/validation/schemas.ts`
- `src/lib/sanity/validation/index.ts`

**Mappers (8):**

- `src/lib/sanity/mappers/index.ts`
- `src/lib/sanity/mappers/media.ts`
- `src/lib/sanity/mappers/project.ts`
- `src/lib/sanity/mappers/capability.ts`
- `src/lib/sanity/mappers/industry.ts`
- `src/lib/sanity/mappers/article.ts`
- `src/lib/sanity/mappers/testimonial.ts`
- `src/lib/sanity/mappers/settings.ts`

**Fetch Layer (3):**

- `src/lib/sanity/fetch/public.ts`
- `src/lib/sanity/fetch/data-access.ts`
- `src/lib/sanity/fetch/index.ts`

**Cache Tags (1):**

- `src/lib/sanity/cache-tags.ts`

**Preview System (4):**

- `src/lib/sanity/preview/index.ts`
- `src/lib/sanity/preview/client.ts`
- `src/lib/sanity/preview/authorization.ts`
- `src/lib/sanity/preview/paths.ts`

**API Routes (3):**

- `src/app/api/draft/enable/route.ts`
- `src/app/api/draft/disable/route.ts`
- `src/app/api/revalidate/route.ts`

**Error Handling (1):**

- `src/lib/sanity/errors.ts`

**Tests (7):**

- `tests/unit/sanity-queries.test.ts` (49 tests)
- `tests/unit/sanity-runtime-validation.test.ts` (32 tests)
- `tests/unit/sanity-mappers.test.ts` (30 tests)
- `tests/unit/domain-models.test.ts` (22 tests)
- `tests/unit/cache-tags.test.ts` (41 tests)
- `tests/unit/preview-security.test.ts` (11 tests)
- `tests/unit/revalidation.test.ts` (18 tests)

### Modified by PATCH 001

- `src/lib/sanity/cache-tags.ts` — Rewritten: `cacheTags` object API, `WEBHOOK_TYPE_WHITELIST`, `getRevalidationTags()`, `isValidSlug()`
- `src/lib/sanity/fetch/data-access.ts` — Created: 20 typed data access functions with cache tag attachment
- `src/lib/sanity/fetch/index.ts` — Updated: exports all data-access functions
- `src/lib/sanity/mappers/project.ts` — Added client display defense
- `src/lib/sanity/preview/client.ts` — Perspective corrected to `'drafts'`
- `src/app/api/draft/enable/route.ts` — Hardened: GET only, path validation, defensive headers
- `src/app/api/draft/disable/route.ts` — Changed to POST only
- `src/app/api/revalidate/route.ts` — Rewritten: Bearer auth, 64KB guard, type whitelist, server-side tag derivation
- `tests/unit/cache-tags.test.ts` — Rewritten for new cacheTags API (41 tests)
- `tests/unit/revalidation.test.ts` — Rewritten for new webhook schema (18 tests)

---

## DATA PIPELINE

```
Sanity Document → GROQ Projection → Zod Validation → Sanity Record Type → Domain Mapper → Domain Model → Future UI
```

1. GROQ query defines the projection shape
2. Zod schema validates the API response at runtime
3. Inferred TypeScript type (`z.infer<>`) provides compile-time safety
4. Mapper transforms validated record into domain model
5. Domain model is consumed by future public pages

---

## NEXT BUILD

BUILD 006 owns the **Homepage only**:

- Homepage data composition
- Hero section
- Controlled homepage video/reel behavior
- Featured Work
- Lifecycle
- Your Process or Ours
- Capabilities
- Industries
- How We Work
- Manufacturing block
- Final CTA

Navigation remains static application IA. Do NOT move navigation into Sanity.

### Later Build Ownership

- **BUILD 007:** Work Index & Filtering
- **BUILD 008:** Project Detail System
- **BUILD 009:** Capabilities
- **BUILD 010:** Process & Industries
- **BUILD 011:** About, Insights, FAQ & Content Pages

Portable Text article rendering belongs with the content/article implementation (BUILD 011), not BUILD 006.
