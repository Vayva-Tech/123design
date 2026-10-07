# BUILD 004 — SANITY CMS FOUNDATION

**Build:** 004 — Sanity CMS Foundation, Core Schemas & Content Governance
**Date:** 2026-09-26
**Status:** COMPLETE

---

## SCOPE

Implementation of the Sanity CMS foundation for 123.design:

### Dependencies & Configuration

- Sanity CMS 6.16.0, next-sanity 13.3.4
- Environment schema extension (4 optional Sanity variables)
- Application-side Sanity client configuration (lazy factory pattern)
- Studio development scripts (studio:dev, studio:build)

### Sanity Studio Structure

- Studio configuration with structure tool
- Conceptual grouping: WORK, EXPERTISE, INSIGHTS, PROOF & PEOPLE, SYSTEM, SETTINGS
- Singleton documents grouped under SETTINGS
- Environment-driven project ID and dataset
- API version constant (2026-09-26)

### Document Schemas (13 types)

**Content Types:**

- project (with 6 controlled module types)
- capability
- industry
- article
- articleCategory
- testimonial
- person
- office
- faqItem
- redirect

**Singletons:**

- siteSettings
- leadFormSettings
- seoDefaults

### Object Schemas (17 types)

- seo (meta title, description, canonical, OG tags, noIndex/noFollow)
- mediaImage (with alt text validation)
- mediaVideo (with purpose and URL validation)
- mediaItem (discriminated union: kind IMAGE | VIDEO)
- link (with URL validation)
- cta (call-to-action with link)
- richText (Portable Text array with blocks, marks, and inline objects)
- lifecycleStageReference
- approvalState (controlled vocabulary)
- legacyRoute (with path validation)
- galleryItem
- quote
- technicalDetail
- projectMeta
- socialLink (with HTTPS validation)
- approvedClientLogo
- contentTable

Non-project documents use a `publicationState` string field (type: 'string', initialValue: 'DRAFT') with options drawn from CONTENT_STATUSES, replacing the removed contentStatus object type.

### Module Schemas (6 types)

Controlled project content modules:

- projectNarrativeSection
- projectDisciplineSection
- projectGallerySection
- projectVideoSection
- projectTechnicalSection
- projectTestimonialSection

### Governance & Validation

**Constants:**

- APPROVAL_STATES (NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED)
- PROJECT_PUBLICATION_STATES (DRAFT, CONTENT_REVIEW, CLIENT_REVIEW, READY, PUBLISHED, ARCHIVED)
- LIFECYCLE_STAGES (CON, EVT, DVT, PVT, PRODUCTION)
- CLIENT_DISPLAY_MODES (NONE, ANONYMOUS, NAMED)
- PROJECT_ENTITY_TYPES (INDIVIDUAL_PROJECT, PROJECT_FAMILY, PORTFOLIO_COLLECTION, CAPABILITY_COLLECTION, MULTI_CLIENT_ARCHIVE, ARCHIVE_BUCKET, AGGREGATE_DUPLICATE_BUCKET, UNKNOWN)
- PUBLIC_ELIGIBLE_ENTITY_TYPES (INDIVIDUAL_PROJECT, PROJECT_FAMILY)
- REDIRECT_STATUS_CODES (301, 308)
- CONTENT_STATUSES (DRAFT, REVIEW, READY, PUBLISHED, ARCHIVED)
- VIDEO_PURPOSES (heroReel, hoverPreview, projectVideo, processVideo, testimonialVideo)
- EVIDENCE_STATES (VERIFIED, OWNER_VERIFY, CLIENT_APPROVAL, RECOVERY_PENDING, UNKNOWN)
- VERIFICATION_STATES (PENDING, VERIFIED, REJECTED)
- SINGLETON_IDS (siteSettings, leadFormSettings, seoDefaults)
- CANONICAL_CAPABILITY_SLUGS (10 slugs)
- CANONICAL_INDUSTRY_SLUGS (6 slugs)

**Validation Helpers:**

- `validateProjectForPublication()` — checks all publication requirements
- `validateNamedClientState()` — validates NAMED client display mode
- `validateMediaAltState()` — enforces alt text for non-decorative images
- `validateMediaItem()` — validates discriminated union (IMAGE must carry image, VIDEO must carry video)
- `validateRedirectPath()` — validates redirect paths and status codes (301, 308 only)
- `hasDuplicateLifecycleStages()` — detects duplicate stage references
- Type guards: `isValidLifecycleStage()`, `isValidProjectPublicationState()`, `isValidApprovalState()`, `isValidClientDisplayMode()`

**Validation Rules:**

- `isSafeHttpsUrl()` — validates HTTPS URLs
- `isUnsafeProtocol()` — detects unsafe protocols (javascript:, data:, vbscript:)
- `isValidInternalPath()` — validates internal paths start with / and contain no protocol

### Testing

**Unit Tests:**

- sanity-config.test.ts — environment variables, config exports, environment contract (SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET)
- sanity-governance.test.ts — all governance functions, exact enum assertions, type guards, validateMediaItem
- sanity-schema.test.ts — schema structure, counts (13 documents, 17 objects, 6 modules), document contract tests, module contract tests, studio structure grouping

### Constraints

- No content seeding
- No remote project connection (environment-driven only)
- No GROQ queries (deferred to BUILD 005)
- No preview mode (deferred to BUILD 005)
- No @portabletext/react (deferred to later builds)
- No navigation CMS schema
- No generic page builder
- No Vision plugin

---

## IMPLEMENTATION

### 1. Environment Configuration

**Files:**

- `src/lib/env/schema.ts` — extended with 4 optional Sanity variables
- `.env.example` — added Sanity variable names (no values)

**Variables:**

```
NEXT_PUBLIC_SANITY_PROJECT_ID (public)
NEXT_PUBLIC_SANITY_DATASET (public)
SANITY_API_READ_TOKEN (server-only secret)
SANITY_REVALIDATE_SECRET (server-only secret)
```

All variables are optional to prevent build crashes when Sanity is not configured.

### 2. Application-Side Client (`src/lib/sanity/`)

**config.ts:**

- Exports `apiVersion` constant
- Exports `getSanityProjectId()`, `getSanityDataset()`, `hasSanityConfig()`
- Reads from environment variables at runtime

**client.ts:**

- Lazy factory pattern with `getSanityClient()`
- Validates config at invocation, not at import time
- Uses CDN for public reads (`useCdn: true`)
- Perspective: `published`

### 3. Sanity Studio (`sanity/`)

**Structure:**

```
sanity/
├── sanity.config.ts (Studio configuration)
├── structure.ts (conceptual IA grouping)
├── schemaTypes/
│   ├── index.ts (exports all schema types)
│   ├── documents/ (13 document schemas)
│   ├── objects/ (17 object schemas)
│   └── modules/ (6 module schemas)
└── lib/
    ├── constants.ts (controlled vocabularies)
    ├── governance.ts (validation helpers)
    └── validation.ts (URL/path validation)
```

**Studio Structure (structure.ts):**

- WORK: Projects
- EXPERTISE: Capabilities, Industries
- INSIGHTS: Articles, Article Categories, FAQ
- PROOF & PEOPLE: Testimonials, People, Offices
- SYSTEM: Redirects
- SETTINGS: Site Settings, Lead Form Settings, SEO Defaults (singletons)

### 4. Document Schemas

**project.ts:**

- Core content type with governance fields
- Fields: _internalEntityId, title, slug, publicationState, entityType, contentApprovalState, clientApprovalState, clientDisplayMode, clientDisplayName, clientRelationshipVerified, summary, heroMedia, industries, capabilities, modules
- Modules field uses 6 controlled module types

**capability.ts:**

- Fields: title, slug, description, publicationState, lifecycleStages, relatedIndustries

**industry.ts:**

- Fields: title, slug, description, publicationState, featuredProjects, relatedCapabilities

**article.ts:**

- Fields: title, slug, author, publishedAt, content (richText), excerpt, coverImage, categories, publicationState

**articleCategory.ts:**

- Fields: title, slug, description, publicationState

**testimonial.ts:**

- Fields: quote, author, role, company, relatedProjects

**person.ts:**

- Fields: firstName, lastName, email, phone, role, bio, photo

**office.ts:**

- Fields: name, address, city, country, coordinates (lat/lng), phone, email

**faqItem.ts:**

- Fields: question, answer (richText), order, category, publicationState

**redirect.ts:**

- Fields: sourcePath, destinationPath, statusCode (301/308)

**siteSettings (singleton):**

- Fields: siteTitle, siteDescription, contactEmail, socialLinks

**leadFormSettings (singleton):**

- Fields: recipientEmail, subjectPrefix, successMessage, errorMessage

**seoDefaults (singleton):**

- Fields: defaultTitle, titleSuffix, defaultDescription, defaultOgImage, robotsNoIndex, robotsNoFollow

### 5. Object Schemas

**seo.ts:**

- Meta title, description (text with rows), canonical URL
- OG title, description (text with rows), image
- noIndex, noFollow booleans

**mediaImage.ts:**

- Image with hotspot
- Alt text (required unless decorative)
- Caption, credit

**mediaVideo.ts:**

- Video URL with validation
- Title, subtitle, purpose
- Poster image

**mediaItem.ts:**

- Discriminated union with `kind` field: IMAGE or VIDEO
- IMAGE kind carries an image reference; VIDEO kind carries a video reference
- Governed by `validateMediaItem()` to enforce exclusivity

**link.ts:**

- Label, URL (with validation), openInNewTab boolean

**cta.ts:**

- Heading, description, link

**richText.ts:**

- Portable Text array
- Block styles: normal, h2, h3, h4, blockquote
- Lists: bullet, number
- Decorators: strong, em, code
- Annotations: link (with href, newWindow)
- Inline objects: mediaImage, mediaVideo, quote, technicalDetail

**approvalState.ts:**

- String enum: NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED

**lifecycleStageReference.ts:**

- Reference to lifecycle stages (CON, EVT, DVT, PVT, PRODUCTION)

**legacyRoute.ts:**

- Path with validation (must start with /, no protocols)

**galleryItem.ts:**

- Media reference, caption, order

**quote.ts:**

- Quote text, attribution, context

**technicalDetail.ts:**

- Label, value, unit

**projectMeta.ts:**

- Key-value metadata pairs

**socialLink.ts:**

- Label, URL (HTTPS validation)

**approvedClientLogo.ts:**

- Image, clientName, approved boolean

**contentTable.ts:**

- Rows with label/value pairs

### 6. Module Schemas

All modules use a common structure with title, content fields, and order.

**projectNarrativeSection:**

- Heading, body (richText)

**projectDisciplineSection:**

- Discipline name, description, deliverables

**projectGallerySection:**

- Gallery items array

**projectVideoSection:**

- Video reference, caption

**projectTechnicalSection:**

- Technical details array

**projectTestimonialSection:**

- Testimonial reference

### 7. Governance System

**Constants (sanity/lib/constants.ts):**

- All controlled vocabularies as const arrays
- TypeScript type exports for type safety

**Governance (sanity/lib/governance.ts):**

- `GovernanceError` interface: `{ field, message }`
- `ProjectPublicationInput` interface: all fields needed for publication validation
- `validateProjectForPublication()`: returns `GovernanceError[]`
  - Checks title, slug, summary, heroMedia presence
  - Validates entityType is PUBLIC_ELIGIBLE (INDIVIDUAL_PROJECT or PROJECT_FAMILY)
  - Validates contentApprovalState is APPROVED or NOT_REQUIRED
  - Validates clientApprovalState is not REQUIRED/PENDING/REJECTED
  - Validates NAMED client display mode requirements
  - Requires at least one industry or capability
- `validateNamedClientState()`: validates NAMED mode requirements
  - clientDisplayName required
  - clientRelationshipVerified required
  - clientApprovalState must be APPROVED
- `validateMediaAltState()`: enforces alt text
  - Required unless decorative flag is set
- `validateMediaItem()`: validates discriminated union
  - IMAGE kind must carry image, must not carry video
  - VIDEO kind must carry video, must not carry image
- `validateRedirectPath()`: validates redirect configuration
  - Paths must start with /
  - Paths must not contain protocols
  - Source and destination must differ
  - Status code must be 301 or 308
- `hasDuplicateLifecycleStages()`: detects duplicates
- Type guards for all enum types

**Validation (sanity/lib/validation.ts):**

- `isSafeHttpsUrl()`: validates HTTPS URL format
- `isUnsafeProtocol()`: detects unsafe protocols (javascript:, data:, vbscript:)
- `isValidInternalPath()`: validates internal paths

### 8. Testing

**sanity-config.test.ts:**

- apiVersion constant format
- getSanityProjectId() with various env scenarios
- getSanityDataset() with various env scenarios
- hasSanityConfig() with missing/present config
- Environment contract: SANITY_API_READ_TOKEN and SANITY_REVALIDATE_SECRET presence
- Deprecated SANITY_API_TOKEN absence

**sanity-governance.test.ts:**

- Exact enum assertions for all 8 constant arrays
- validateProjectForPublication() with valid/invalid inputs
- validateNamedClientState() with NAMED mode scenarios
- validateMediaAltState() with decorative/non-decorative images
- validateMediaItem() with IMAGE/VIDEO/unknown kind scenarios
- validateRedirectPath() with valid/invalid paths (301/308 allowed, 302/307 rejected)
- hasDuplicateLifecycleStages() with unique/duplicate arrays
- All type guards with valid/invalid values (including HIDDEN rejection)

**sanity-schema.test.ts:**

- 13 document types, 17 object types, 6 module types
- Unique schema names
- Document contract tests (critical fields for all 12 non-project documents)
- Module contract tests (sectionType enums)
- Studio structure grouping verification (WORK, EXPERTISE, INSIGHTS, PROOF & PEOPLE, SYSTEM, SETTINGS)
- leadFormSettings security field absence

---

## QUALITY GATES

All quality gates passed:

- ✅ format:check (Prettier)
- ✅ lint (ESLint)
- ✅ typecheck (TypeScript)
- ✅ test (all unit tests)
- ✅ build (Next.js production build)
- ✅ test:e2e (Playwright tests)

**Contamination Sweeps:**

- ✅ No page builder schemas
- ✅ No navigation CMS schemas
- ✅ No content seeding code
- ✅ No GROQ queries
- ✅ No @portabletext/react
- ✅ No hardcoded project IDs
- ✅ No obsolete vocabulary (DISCOVERY, DESIGN/ENGINEERING/VALIDATION/DELIVERY as lifecycle stages, CASE_STUDY/SHOWCASE entity types, HIDDEN client display mode, SANITY_API_TOKEN, 302/307 redirect codes)
- ✅ No public domain contamination (E-commerce, Fintech, SaaS, Logistics, Education, merchant, checkout, orders, inventory)

---

## FILES CREATED/MODIFIED

### Created

**Configuration:**

- `sanity/sanity.config.ts`
- `sanity/structure.ts`
- `sanity/schemaTypes/index.ts`
- `sanity/lib/constants.ts`
- `sanity/lib/governance.ts`
- `sanity/lib/validation.ts`

**Documents (13):**

- `sanity/schemaTypes/documents/project.ts`
- `sanity/schemaTypes/documents/capability.ts`
- `sanity/schemaTypes/documents/industry.ts`
- `sanity/schemaTypes/documents/article.ts`
- `sanity/schemaTypes/documents/articleCategory.ts`
- `sanity/schemaTypes/documents/testimonial.ts`
- `sanity/schemaTypes/documents/person.ts`
- `sanity/schemaTypes/documents/office.ts`
- `sanity/schemaTypes/documents/faqItem.ts`
- `sanity/schemaTypes/documents/redirect.ts`
- `sanity/schemaTypes/documents/siteSettings.ts`
- `sanity/schemaTypes/documents/leadFormSettings.ts`
- `sanity/schemaTypes/documents/seoDefaults.ts`

**Objects (17 + index):**

- `sanity/schemaTypes/objects/index.ts`
- `sanity/schemaTypes/objects/seo.ts`
- `sanity/schemaTypes/objects/mediaImage.ts`
- `sanity/schemaTypes/objects/mediaVideo.ts`
- `sanity/schemaTypes/objects/mediaItem.ts`
- `sanity/schemaTypes/objects/link.ts`
- `sanity/schemaTypes/objects/cta.ts`
- `sanity/schemaTypes/objects/richText.ts`
- `sanity/schemaTypes/objects/lifecycleStageReference.ts`
- `sanity/schemaTypes/objects/approvalState.ts`
- `sanity/schemaTypes/objects/legacyRoute.ts`
- `sanity/schemaTypes/objects/galleryItem.ts`
- `sanity/schemaTypes/objects/quote.ts`
- `sanity/schemaTypes/objects/technicalDetail.ts`
- `sanity/schemaTypes/objects/projectMeta.ts`
- `sanity/schemaTypes/objects/socialLink.ts`
- `sanity/schemaTypes/objects/approvedClientLogo.ts`
- `sanity/schemaTypes/objects/contentTable.ts`

**Modules (6):**

- `sanity/schemaTypes/modules/index.ts`
- `sanity/schemaTypes/modules/projectNarrativeSection.ts`
- `sanity/schemaTypes/modules/projectDisciplineSection.ts`
- `sanity/schemaTypes/modules/projectGallerySection.ts`
- `sanity/schemaTypes/modules/projectVideoSection.ts`
- `sanity/schemaTypes/modules/projectTechnicalSection.ts`
- `sanity/schemaTypes/modules/projectTestimonialSection.ts`

**Application Client (2):**

- `src/lib/sanity/config.ts`
- `src/lib/sanity/client.ts`

**Tests (3):**

- `tests/unit/sanity-config.test.ts`
- `tests/unit/sanity-governance.test.ts`
- `tests/unit/sanity-schema.test.ts`

### Deleted

- `src/lib/sanity/server.ts` — preview client with token authentication (not part of Build 004 scope)
- `sanity/schemaTypes/objects/contentStatus.ts` — replaced by publicationState string field on documents

### Modified

- `package.json` — added studio:dev and studio:build scripts
- `src/lib/env/schema.ts` — added 4 optional Sanity environment variables (NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET)
- `.env.example` — added Sanity variable names

---

## USAGE

### Starting Sanity Studio

```bash
pnpm run studio:dev
```

Opens Studio at http://localhost:3333

### Building Sanity Studio

```bash
pnpm run studio:build
```

Outputs to `sanity/dist/`

### Using Sanity Client in Application

**Public reads (CDN):**

```typescript
import { getSanityClient } from '@/lib/sanity/client';
const client = getSanityClient();
```

### Governance Validation

```typescript
import { validateProjectForPublication } from '@/sanity/lib/governance';

const errors = validateProjectForPublication({
  publicationState: 'PUBLISHED',
  title: 'Project Name',
  slug: 'project-name',
  summary: 'Project summary',
  heroMedia: { _type: 'mediaItem', kind: 'IMAGE', ... },
  entityType: 'INDIVIDUAL_PROJECT',
  contentApprovalState: 'APPROVED',
  clientApprovalState: 'NOT_REQUIRED',
  clientDisplayMode: 'ANONYMOUS',
  industries: [{ _ref: 'industry-1' }],
  capabilities: [],
});

if (errors.length > 0) {
  console.error('Publication blocked:', errors);
}
```

---

## NEXT BUILD

BUILD 005 will implement:

- Data layer (GROQ queries for all content types)
- Domain models (typed response shapes)
- Runtime response validation
- Publication filters (only PUBLISHED content served to public)
- Preview/draft architecture
- Cache tags
- Webhook revalidation
