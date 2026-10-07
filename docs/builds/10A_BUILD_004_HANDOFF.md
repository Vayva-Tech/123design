# BUILD 004 — HANDOFF

**Build:** 004 — Sanity CMS Foundation, Core Schemas & Content Governance
**Date:** 2026-09-26
**Status:** COMPLETE

---

## ACCEPTANCE CRITERIA VERIFICATION

### Dependencies & Configuration

- [x] Sanity CMS 6.16.0 installed
- [x] next-sanity 13.3.4 installed
- [x] Environment schema extended with 4 optional Sanity variables
- [x] .env.example updated with Sanity variable names (no values)
- [x] studio:dev and studio:build scripts added to package.json

### Application-Side Client

- [x] config.ts exports apiVersion, getSanityProjectId, getSanityDataset, hasSanityConfig
- [x] client.ts uses lazy factory pattern with getSanityClient()
- [x] client.ts validates config at invocation, not import time
- [x] client.ts uses CDN for public reads (useCdn: true)
- [x] client.ts uses perspective: 'published'
- [x] No server-only preview client (deferred to BUILD 005)

### Sanity Studio Structure

- [x] sanity.config.ts uses defineConfig from Sanity
- [x] Structure tool with conceptual IA grouping
- [x] Conceptual groups: WORK, EXPERTISE, INSIGHTS, PROOF & PEOPLE, SYSTEM, SETTINGS
- [x] Singletons grouped under SETTINGS
- [x] Environment-driven project ID and dataset
- [x] API version constant (2026-09-26)

### Document Schemas (13 types)

- [x] project — core content type with governance fields and 6 controlled modules
- [x] capability — with publicationState, lifecycle stages, and related industries
- [x] industry — with publicationState, featured projects, and related capabilities
- [x] article — with richText content, author, categories, publicationState
- [x] articleCategory — with title, slug, description, publicationState
- [x] testimonial — with quote, author, role, company
- [x] person — with contact info, role, bio, photo
- [x] office — with address, coordinates, contact info
- [x] faqItem — with question, richText answer, order, category, publicationState
- [x] redirect — with source/destination paths and status code (301/308)
- [x] siteSettings (singleton) — site metadata and social links
- [x] leadFormSettings (singleton) — form configuration
- [x] seoDefaults (singleton) — default SEO values

### Object Schemas (17 types)

- [x] seo — meta title, description, canonical, OG tags, noIndex/noFollow
- [x] mediaImage — with alt text validation and hotspot
- [x] mediaVideo — with URL validation and poster image
- [x] mediaItem — discriminated union (kind: IMAGE | VIDEO)
- [x] link — with URL validation and openInNewTab
- [x] cta — heading, description, link
- [x] richText — Portable Text array with blocks, marks, inline objects
- [x] lifecycleStageReference — reference to lifecycle stages (CON, EVT, DVT, PVT, PRODUCTION)
- [x] approvalState — controlled vocabulary (5 states)
- [x] legacyRoute — with path validation
- [x] galleryItem — media reference, caption, order
- [x] quote — quote text, attribution, context
- [x] technicalDetail — label, value, unit
- [x] projectMeta — key-value metadata pairs
- [x] socialLink — with HTTPS validation
- [x] approvedClientLogo — image, clientName, approved flag
- [x] contentTable — rows with label/value pairs

### Module Schemas (6 types)

- [x] projectNarrativeSection — heading, body (richText)
- [x] projectDisciplineSection — discipline name, description, deliverables
- [x] projectGallerySection — gallery items array
- [x] projectVideoSection — video reference, caption
- [x] projectTechnicalSection — technical details array
- [x] projectTestimonialSection — testimonial reference

### Governance & Validation

**Constants:**

- [x] APPROVAL_STATES (5 states: NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED)
- [x] PROJECT_PUBLICATION_STATES (6 states: DRAFT, CONTENT_REVIEW, CLIENT_REVIEW, READY, PUBLISHED, ARCHIVED)
- [x] LIFECYCLE_STAGES (5 stages: CON, EVT, DVT, PVT, PRODUCTION)
- [x] CLIENT_DISPLAY_MODES (3 modes: NONE, ANONYMOUS, NAMED)
- [x] PROJECT_ENTITY_TYPES (8 types)
- [x] PUBLIC_ELIGIBLE_ENTITY_TYPES (2 types: INDIVIDUAL_PROJECT, PROJECT_FAMILY)
- [x] REDIRECT_STATUS_CODES (2 codes: 301, 308)
- [x] CONTENT_STATUSES (5 statuses: DRAFT, REVIEW, READY, PUBLISHED, ARCHIVED)
- [x] VIDEO_PURPOSES (5 purposes)
- [x] EVIDENCE_STATES (5 states)
- [x] VERIFICATION_STATES (3 states)
- [x] SINGLETON_IDS (3 singletons)

**Validation Helpers:**

- [x] validateProjectForPublication() — checks all publication requirements
- [x] validateNamedClientState() — validates NAMED client display mode
- [x] validateMediaAltState() — enforces alt text for non-decorative images
- [x] validateMediaItem() — validates discriminated union (IMAGE/VIDEO exclusivity)
- [x] validateRedirectPath() — validates redirect paths and status codes (301, 308 only)
- [x] hasDuplicateLifecycleStages() — detects duplicate stage references
- [x] isValidLifecycleStage() — type guard
- [x] isValidProjectPublicationState() — type guard
- [x] isValidApprovalState() — type guard
- [x] isValidClientDisplayMode() — type guard

**Validation Rules:**

- [x] isSafeHttpsUrl() — validates HTTPS URLs
- [x] isUnsafeProtocol() — detects unsafe protocols (javascript:, data:, vbscript:)
- [x] isValidInternalPath() — validates internal paths

### Testing

**Unit Tests:**

- [x] sanity-config.test.ts — environment variables, config exports, environment contract
- [x] sanity-governance.test.ts — exact enum assertions, all governance functions, validateMediaItem, type guards
- [x] sanity-schema.test.ts — schema counts (13/17/6), document contracts, module contracts, studio structure grouping
- [x] All tests pass

### Constraints Compliance

- [x] No content seeding
- [x] No remote project connection (environment-driven only)
- [x] No GROQ queries (deferred to BUILD 005)
- [x] No preview mode (deferred to BUILD 005)
- [x] No @portabletext/react (deferred to later builds)
- [x] No navigation CMS schema
- [x] No generic page builder
- [x] No Vision plugin

### Quality Gates

- [x] format:check — Prettier clean
- [x] lint — ESLint no errors or warnings
- [x] typecheck — TypeScript strict mode, no errors
- [x] test — all unit tests pass
- [x] build — Next.js 16.3.6 compiles successfully
- [x] test:e2e — all E2E tests pass

### Contamination Sweeps

- [x] No page builder schemas found
- [x] No navigation CMS schemas found
- [x] No content seeding code found
- [x] No GROQ queries found
- [x] No @portabletext/react found
- [x] No hardcoded project IDs found
- [x] No obsolete vocabulary (DISCOVERY, DESIGN/ENGINEERING/VALIDATION/DELIVERY as lifecycle stages, CASE_STUDY/SHOWCASE entity types, HIDDEN client display mode, SANITY_API_TOKEN, 302/307 redirect codes)
- [x] No public domain contamination (E-commerce, Fintech, SaaS, Logistics, Education, merchant, checkout, orders, inventory)

---

## QUALITY GATE RESULTS

```
✓ format:check — All matched files use Prettier code style
✓ lint — No problems found
✓ typecheck — TypeScript compilation successful
✓ test — All tests passed
✓ build — Next.js production build successful
✓ test:e2e — All E2E tests passed
```

---

## DEFERRED WORK

### BUILD 005 — Content Data Layer

- Data layer (GROQ queries for all content types)
- Domain models (typed response shapes)
- Sanity queries
- Runtime response validation
- Publication filters (only PUBLISHED content served to public)
- Preview/draft architecture
- Cache tags
- Webhook revalidation

---

## NOTES

### Lazy Factory Pattern

The Sanity client uses a lazy factory pattern to prevent build crashes when environment variables are not configured. The client is only instantiated when `getSanityClient()` is called, not at module import time. This allows the application to build and run even when Sanity is not configured.

### No Preview Client in Build 004

Build 004 does not include a server-only preview client. The preview/draft architecture is deferred to BUILD 005, which will implement the full data layer including preview mode, cache tags, and webhook revalidation.

### Environment Contract

Build 004 defines 4 environment variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — public, browser-exposed
- `NEXT_PUBLIC_SANITY_DATASET` — public, browser-exposed
- `SANITY_API_READ_TOKEN` — server-only secret (replaces deprecated SANITY_API_TOKEN)
- `SANITY_REVALIDATE_SECRET` — server-only secret (new for webhook revalidation)

### publicationState String Field

Non-project documents (capability, industry, article, articleCategory, faqItem) use a `publicationState` string field with options drawn from CONTENT_STATUSES, replacing the removed contentStatus object type. This simplifies the schema while maintaining governance control.

### mediaItem Discriminated Union

The mediaItem object uses a discriminated union pattern with a `kind` field (IMAGE | VIDEO). The `validateMediaItem()` governance function enforces that IMAGE kind carries only an image reference and VIDEO kind carries only a video reference.

### Redirect Status Codes

Only 301 (permanent) and 308 (permanent redirect) are allowed. 302 and 307 are rejected by both the schema options and the `validateRedirectPath()` governance function.

### Controlled Module Types

The project document uses 6 controlled module types instead of a generic page builder. This enforces a consistent content structure and prevents content editors from creating arbitrary layouts.

### Singleton Documents

Three singleton documents (siteSettings, leadFormSettings, seoDefaults) are configured in the Studio structure under SETTINGS. These are global configuration documents that should only have one instance.

### API Version

The API version is set to `2026-09-26` (the build date). This should be updated periodically to take advantage of Sanity API improvements.

---

**BUILD 004 handoff complete. All acceptance criteria verified. Ready for BUILD 005.**
