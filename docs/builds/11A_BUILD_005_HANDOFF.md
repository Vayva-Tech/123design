# BUILD 005 — HANDOFF

**Build:** 005 — Data Layer, Domain Models, Public Query Safety, Preview & Revalidation
**Date:** 2026-09-26
**Status:** COMPLETE — PATCH 001 APPLIED

---

## ACCEPTANCE CRITERIA VERIFICATION

### Domain Models (11 top-level)

- [x] `ProjectCardModel` with slug, title, shortLabel, industry, heroMedia, year, publicationState
- [x] `ProjectPageModel` with modules, industries, capabilities, relatedProjects
- [x] `ProjectModuleModel` discriminated union (6 kinds: narrative, discipline, gallery, video, technical, testimonial)
- [x] `CapabilityCardModel` with slug, title, description
- [x] `CapabilityPageModel` with slug, title, description, body
- [x] `IndustryPageModel` with slug, title, typicalChallenges, relatedCapabilities
- [x] `ArticleCardModel` with slug, title, excerpt, publicationDate, author, category
- [x] `ArticlePageModel` with body, relatedCapabilities, relatedProjects
- [x] `TestimonialModel` with quote, name, role, company
- [x] `NavigationModel` with items
- [x] `SiteSettingsModel` with siteName, siteDescription, primaryCTA, socialLinks
- [x] `LeadFormSettingsModel` with productTypes, developmentStages, needs, timingOptions, budgetOptions
- [x] Supporting types: `MediaModel` (IMAGE | VIDEO), `SeoFields`, `NavigationItemModel`, `SocialLinkModel`
- [x] Barrel exports from `src/types/domain/index.ts`

### GROQ Queries

- [x] Central public filters in `public-filters.ts` (project, capability, industry, article, testimonial)
- [x] Reusable fragments in `fragments.ts` (MEDIA_FRAGMENT, SEO_FRAGMENT, CAPABILITY_CARD_FIELDS, PROJECT_CARD_FIELDS)
- [x] `publishedProjectsQuery`, `publishedProjectBySlugQuery`, `featuredProjectsQuery`, `relatedProjectsQuery`, `projectsByIndustrySlugQuery`, `projectsByCapabilitySlugQuery`
- [x] `publishedCapabilitiesQuery` and `publishedCapabilityBySlugQuery`
- [x] `publishedIndustriesQuery` and `publishedIndustryBySlugQuery`
- [x] `publishedArticlesQuery` and `publishedArticleBySlugQuery`
- [x] `publishedTestimonialsQuery`
- [x] `siteSettingsQuery`, `leadFormSettingsQuery`, `seoDefaultsQuery`
- [x] `verifiedOfficesQuery`, `activePeopleQuery`, `publishedFaqQuery`, `verifiedRedirectsQuery`, `publishedArticleCategoriesQuery`
- [x] All queries are string constants (no runtime interpolation)
- [x] All list queries include `order()` clause

### Zod Validation

- [x] Record schemas for all content types
- [x] Module discriminated union schema (6 kinds)
- [x] Media discriminated union schema (IMAGE | VIDEO)
- [x] SEO schema with optional fields
- [x] Webhook payload schema: `{ _type: z.string(), _id: z.string().optional(), slug: z.string().optional() }`
- [x] Inferred TypeScript types exported via `z.infer<>`
- [x] `.default([])` on array fields that may be absent

### Mappers

- [x] `mapMedia()` handles IMAGE/VIDEO discriminated union
- [x] `mapOptionalMedia()` returns undefined for missing media
- [x] `mapImage()` for image-only contexts
- [x] `mapProjectCard()` and `mapProjectPage()` with full module mapping
- [x] `mapProjectPage()` client display defense: client info shown only when `clientDisplayMode === 'NAMED'` AND `clientRelationshipVerified === true`
- [x] `mapModule()` switches on 6 module kinds
- [x] Gallery module filters items without media using type guard
- [x] `mapCapabilityCard()`, `mapCapabilityPage()`, `mapIndustryPage()`, `mapArticleCard()`, `mapArticlePage()`
- [x] `mapTestimonial()`, `mapSiteSettings()`, `mapLeadFormSettings()`

### Fetch Layer

- [x] All public fetch functions return validated records with cache tag attachment
- [x] Each function: query → validate with Zod → return typed record
- [x] Returns `null` for not-found singletons and by-slug queries
- [x] Returns `[]` for list queries with no results
- [x] Uses public client (`getSanityClient()`) with CDN
- [x] 20 data access functions in `data-access.ts`, each with canonical cache tags

### Cache Tags

- [x] `cacheTags` object with 13 static tags: `projects`, `capabilities`, `industries`, `articles`, `testimonials`, `site-settings`, `lead-form-settings`, `seo-defaults`, `faq`, `offices`, `people`, `redirects`, `article-categories`
- [x] 5 dynamic tag functions: `cacheTags.project(slug)`, `cacheTags.capability(slug)`, `cacheTags.industry(slug)`, `cacheTags.article(slug)`, `cacheTags.testimonial(id)` — return `string | undefined`
- [x] `WEBHOOK_TYPE_WHITELIST` — 13 document types as `ReadonlySet<string>`
- [x] `getRevalidationTags(payload)` — deterministic server-side tag derivation with deduplication
- [x] `isValidSlug(slug)` — slug validation (pattern + max length 200)
- [x] No wildcards — all tags explicit and enumerated

### Preview System

- [x] Preview client with `useCdn: false` and `perspective: 'drafts'`
- [x] `verifyPreviewSecret()` validates against `SANITY_PREVIEW_SECRET` (separate from `SANITY_REVALIDATE_SECRET`)
- [x] Timing-safe comparison via `node:crypto` `timingSafeEqual`
- [x] `getPreviewPaths()` for draft content routing
- [x] Server-only enforcement (`'server-only'` import)
- [x] Preview fetch uses `cache: 'no-store'` to prevent draft content caching

### API Routes

- [x] `GET /api/draft/enable` — enables draft mode
  - Validates `SANITY_PREVIEW_SECRET` via timing-safe comparison
  - Enables draft mode, redirects with defensive headers (Cache-Control: no-store, Referrer-Policy: no-referrer, X-Robots-Tag: noindex/nofollow/noarchive)
  - Path validation on redirect parameter (rejects `//`, `\\`, `javascript:`, `data:`)
- [x] `POST /api/draft/disable` — disables draft mode, returns JSON
- [x] `POST /api/revalidate` — webhook endpoint
  - Bearer token auth against `SANITY_REVALIDATE_SECRET` via timing-safe comparison
  - 64KB body size guard (content-length header + actual byte count)
  - Rejects client-supplied `tags` or `paths` fields
  - Validates payload against `webhookPayloadSchema` (`{ _type, _id?, slug? }`)
  - Checks `_type` against `WEBHOOK_TYPE_WHITELIST` (13 types)
  - Derives cache tags server-side via `getRevalidationTags()` with deduplication
  - Calls `revalidateTag(tag, 'default')` (Next.js 16 two-arg signature)
  - Returns 200 on success, 401 on bad secret, 400 on bad payload, 413 on oversized body

### Error Handling

- [x] `SanityQueryError` — query failures with `queryName` and optional `cause`
- [x] `SanityValidationError` — validation failures with `queryName` and `issues` array
- [x] `SanityConfigError` — configuration problems
- [x] `PreviewAuthorizationError` — preview secret validation failures
- [x] `RevalidationError` — webhook revalidation failures with `reason`

### Testing

- [x] `sanity-queries.test.ts` — 49 tests (query structure, public filters, fragments)
- [x] `sanity-runtime-validation.test.ts` — 32 tests (Zod schema validation, webhook payload)
- [x] `sanity-mappers.test.ts` — 30 tests (mapper correctness, client display defense)
- [x] `domain-models.test.ts` — 22 tests (type contracts, discriminated unions)
- [x] `cache-tags.test.ts` — 41 tests (static tags, dynamic generators, slug validation, webhook whitelist, tag derivation)
- [x] `preview-security.test.ts` — 11 tests (authorization, timing-safe comparison)
- [x] `revalidation.test.ts` — 18 tests (webhook payload, server-side tag derivation, deduplication)
- [x] All 440 tests pass (16 files)
- [x] Zero regressions in existing test files

### Constraints Compliance

- [x] No public content pages (no [slug]/page.tsx)
- [x] No Portable Text renderers
- [x] No card UI components
- [x] No new dependencies (0 runtime, 0 dev)
- [x] No content seeding
- [x] No hardcoded project IDs or dataset names

### Quality Gates

- [x] format:check — Prettier clean
- [x] lint — ESLint no errors or warnings
- [x] typecheck — TypeScript strict mode, no errors
- [x] test — 440 tests passed (16 files)
- [x] build — Next.js 16.3.6 compiled successfully
- [x] test:e2e — 49 E2E tests passed

### Contamination Sweeps

- [x] No public content pages found (only homepage + API routes)
- [x] No Portable Text renderers found
- [x] No card components found
- [x] No new dependencies added
- [x] No content seeding code found
- [x] No Vayva domain contamination

---

## QUALITY GATE RESULTS

```
✓ format:check — All matched files use Prettier code style
✓ lint — No problems found
✓ typecheck — TypeScript compilation successful
✓ test — 440 tests passed (16 files, 0 failures)
✓ build — Next.js 16.3.6 (Turbopack) compiled successfully
✓ test:e2e — 49 tests passed (7.7s)
```

---

## DEFERRED WORK

### BUILD 006 — Homepage

BUILD 006 owns the Homepage only:

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

---

## NOTES

### Next.js 16 Breaking Changes

- `revalidateTag(tag, profile)` requires 2 arguments (tag string + cacheLife profile string). Using `'default'` profile.
- `draftMode()` is async — must use `await draftMode()`.
- ES2022 `Error.cause` property requires `override` modifier in subclass.

### Preview Secret Separation

`SANITY_PREVIEW_SECRET` is used for draft mode authorization (preview/enable route). `SANITY_REVALIDATE_SECRET` is used for webhook revalidation authorization. These are distinct secrets with distinct purposes.

### Timing-Safe Secret Comparison

`crypto.timingSafeEqual()` throws `RangeError` for different-length buffers. The preview authorization and revalidation routes handle length mismatches before calling `timingSafeEqual`, returning unauthorized on mismatch.

### Webhook Payload Schema

The webhook payload schema requires `_type` (z.string()) as the primary field, with `_id` and `slug` as optional. Tags are derived server-side from `_type` via `getRevalidationTags()`. Client-supplied `tags` or `paths` fields are explicitly rejected.

### Data Pipeline

```
Sanity Document → GROQ Projection → Zod Validation → Sanity Record Type → Domain Mapper → Domain Model → Future UI
```

No layer skips validation. No mapper accepts unvalidated input.

---

**BUILD 005 handoff complete. PATCH 001 applied. All acceptance criteria verified. LOCKED — ready for BUILD 006.**
