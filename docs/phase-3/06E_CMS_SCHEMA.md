# 06E — CMS Schema (Sanity)

> Sanity is the canonical content source for 123.design. This document defines every document type, object type, field specification, governance rule, and publication constraint. No application code is created — this is architecture specification only.

---

## 1. CMS Decision — Sanity

Sanity was selected because the project requires:

| Requirement                          | Sanity Capability                            |
| ------------------------------------ | -------------------------------------------- |
| Structured content with typed fields | Schema-defined document/object types         |
| References between documents         | Strong references with referential integrity |
| Image hotspot/crop metadata          | Built-in image pipeline with focal point     |
| Draft workflow                       | Native draft/publish with versioning         |
| Editorial preview                    | Preview mode with token authentication       |
| Portable rich text                   | Portable Text with controlled block types    |
| Managed asset delivery               | Sanity CDN with automatic image transforms   |
| Flexible queries                     | GROQ query language                          |
| Webhook-driven revalidation          | Webhooks on document create/update/delete    |
| Schema validation                    | Schema-level field validation rules          |

**Rejected alternatives** (see 06A_STACK_DECISIONS.md for full rationale):

- **Payload CMS** — valid alternative but introduces greater infrastructure responsibility (self-hosted, database management) than this project needs
- **Contentful** — less flexible schema model, higher cost at this content volume
- **WordPress** — no structured content model suitable for this architecture

**Constraint**: Do not initialize Sanity. Do not install dependencies. This document specifies what will be built.

---

## 2. Document Types (13)

| #   | Document Type      | Purpose                   | Singleton |
| --- | ------------------ | ------------------------- | --------- |
| 1   | `project`          | Portfolio work entries    | No        |
| 2   | `capability`       | Service capability pages  | No        |
| 3   | `industry`         | Industry vertical pages   | No        |
| 4   | `article`          | Insights/blog posts       | No        |
| 5   | `articleCategory`  | Article classification    | No        |
| 6   | `testimonial`      | Client endorsements       | No        |
| 7   | `person`           | Team members              | No        |
| 8   | `office`           | Office locations          | No        |
| 9   | `faqItem`          | FAQ entries               | No        |
| 10  | `redirect`         | URL redirect rules        | No        |
| 11  | `siteSettings`     | Global site configuration | Yes       |
| 12  | `leadFormSettings` | Lead form configuration   | Yes       |
| 13  | `seoDefaults`      | Default SEO metadata      | Yes       |

**Prohibited**: No generic `page` document type with arbitrary page-builder sections. Every document type has a fixed, purpose-specific schema.

---

## 3. Reusable Object Types (15)

| #   | Object Type               | Used By                            |
| --- | ------------------------- | ---------------------------------- |
| 1   | `seo`                     | All public document types          |
| 2   | `mediaImage`              | All types with image content       |
| 3   | `mediaVideo`              | Types with video content           |
| 4   | `mediaItem`               | Polymorphic media (image or video) |
| 5   | `cta`                     | Capability, industry, homepage     |
| 6   | `link`                    | Navigation, CTAs, inline           |
| 7   | `richText`                | Article body, project modules      |
| 8   | `projectMeta`             | Project metadata block             |
| 9   | `lifecycleStageReference` | Capability lifecycle stages        |
| 10  | `approvalState`           | Content/client approval tracking   |
| 11  | `contentStatus`           | Publication state tracking         |
| 12  | `legacyRoute`             | Legacy URL mapping                 |
| 13  | `galleryItem`             | Project gallery entries            |
| 14  | `quote`                   | Pull quotes in rich text           |
| 15  | `technicalDetail`         | Project technical specifications   |

---

## 4. Project Schema

### 4.1 Internal/Governance Fields

| Field                  | Type    | Required | Description                                                      |
| ---------------------- | ------- | -------- | ---------------------------------------------------------------- |
| `_internalEntityId`    | string  | No       | Internal system identifier for migration tracking                |
| `title`                | string  | Yes      | Project title                                                    |
| `slug`                 | slug    | Yes      | URL slug (kebab-case, stable after publication)                  |
| `publicationState`     | enum    | Yes      | DRAFT, CONTENT_REVIEW, CLIENT_REVIEW, READY, PUBLISHED, ARCHIVED |
| `entityType`           | enum    | Yes      | See §4.2                                                         |
| `contentApprovalState` | enum    | Yes      | NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED              |
| `clientApprovalState`  | enum    | Yes      | NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED              |
| `featured`             | boolean | Yes      | Whether project appears in featured positions                    |
| `sortOrder`            | number  | No       | Manual ordering override                                         |

### 4.2 Entity Type Enum

| Value                        | Description                | Public Query Eligible          |
| ---------------------------- | -------------------------- | ------------------------------ |
| `INDIVIDUAL_PROJECT`         | Single standalone project  | Yes                            |
| `PROJECT_FAMILY`             | Group of related projects  | Yes (when approved)            |
| `PORTFOLIO_COLLECTION`       | Curated collection         | No (unless explicitly defined) |
| `CAPABILITY_COLLECTION`      | Capability-grouped archive | No                             |
| `MULTI_CLIENT_ARCHIVE`       | Multi-client body of work  | No                             |
| `ARCHIVE_BUCKET`             | Unsorted archive           | No                             |
| `AGGREGATE_DUPLICATE_BUCKET` | Deduplication holder       | No                             |
| `UNKNOWN`                    | Unclassified               | No                             |

**Public query rule**: Only `INDIVIDUAL_PROJECT` and approved `PROJECT_FAMILY` appear in public Work queries unless the architecture explicitly defines otherwise.

### 4.3 Publication State

| State            | Visibility    | Description                    |
| ---------------- | ------------- | ------------------------------ |
| `DRAFT`          | Internal only | Work in progress               |
| `CONTENT_REVIEW` | Internal only | Awaiting content review        |
| `CLIENT_REVIEW`  | Internal only | Shared with client for review  |
| `READY`          | Internal only | Approved, awaiting publication |
| `PUBLISHED`      | **Public**    | Live on the site               |
| `ARCHIVED`       | Internal only | Removed from public view       |

**Enforcement**: Only `PUBLISHED` is public. This is enforced at the QUERY level, not only in the UI.

### 4.4 Public Content Fields

| Field          | Type        | Required | Description                        |
| -------------- | ----------- | -------- | ---------------------------------- |
| `summary`      | text        | Yes      | Short project description          |
| `heroMedia`    | mediaItem   | Yes      | Primary hero image/video           |
| `industries`   | reference[] | Yes      | References to industry documents   |
| `capabilities` | reference[] | Yes      | References to capability documents |

### 4.5 Optional Content Fields

| Field               | Type              | Description                                                 |
| ------------------- | ----------------- | ----------------------------------------------------------- |
| `year`              | number            | Project year                                                |
| `stages`            | reference[]       | Lifecycle stage references (CON, EVT, DVT, PVT, PRODUCTION) |
| `clientDisplayName` | string            | Visible client name (only when clientDisplayMode = NAMED)   |
| `overview`          | richText          | Extended project overview                                   |
| `modules`           | object[]          | Controlled project modules (see §4.7)                       |
| `gallery`           | galleryItem[]     | Project gallery images                                      |
| `video`             | mediaVideo        | Project video                                               |
| `technicalDetails`  | technicalDetail[] | Technical specifications                                    |
| `testimonial`       | reference         | Reference to testimonial document                           |
| `relatedProjects`   | reference[]       | Manually curated related projects                           |
| `legacyRoutes`      | legacyRoute[]     | Legacy URL mappings                                         |
| `seo`               | seo               | SEO metadata override                                       |

### 4.6 Client Display Fields

| Field                        | Type       | Description                                   |
| ---------------------------- | ---------- | --------------------------------------------- |
| `clientDisplayMode`          | enum       | NONE, ANONYMOUS, NAMED                        |
| `clientDisplayName`          | string     | Client name (only returned when mode = NAMED) |
| `clientRelationshipVerified` | boolean    | Whether client relationship is verified       |
| `clientLogo`                 | mediaImage | Approved client logo                          |
| `clientApprovalState`        | enum       | Approval state for client-visible content     |

**Rule**: Never return `clientDisplayName` publicly when `clientDisplayMode != NAMED`.

### 4.7 Project Module System

Controlled whitelist of content modules. Each module has fixed rendering behavior. Only populated modules render. No arbitrary layout modules.

| Module                  | Purpose                       |
| ----------------------- | ----------------------------- |
| `overview`              | Project overview narrative    |
| `challenge`             | Problem/challenge description |
| `insight`               | Key insight or discovery      |
| `industrialDesign`      | Industrial design work        |
| `mechanicalEngineering` | Mechanical engineering work   |
| `electricalEngineering` | Electrical engineering work   |
| `prototype`             | Prototyping work              |
| `testingValidation`     | Testing and validation        |
| `tooling`               | Tooling development           |
| `manufacturing`         | Manufacturing process         |
| `technicalDetails`      | Technical specifications      |
| `gallery`               | Image gallery                 |
| `video`                 | Video content                 |
| `testimonial`           | Client testimonial            |
| `result`                | Outcome/results               |

### 4.8 Module Content Contract

Standard content module fields:

| Field              | Type            | Required | Description                     |
| ------------------ | --------------- | -------- | ------------------------------- |
| `heading`          | string          | No       | Module heading                  |
| `body`             | richText        | Yes      | Module body content             |
| `media`            | mediaItem       | No       | Associated media                |
| `caption`          | string          | No       | Media caption                   |
| `stage`            | reference       | No       | Lifecycle stage reference       |
| `technicalCallout` | technicalDetail | No       | Technical specification callout |

**Rule**: Never require `challenge` or `result` for every project. Modules are optional and render only when populated.

### 4.9 Light vs Full Project

**Light project** requires only:

- title, slug, summary, hero media
- At least one verified industry/capability relationship
- Gallery or supporting media
- Publication approvals
- SEO defaults

Light projects do NOT require a fabricated case-study narrative.

**Full case study** uses the SAME `project` document type (not a separate type). Depth is determined by populated, verified modules.

---

## 5. Project Stages

| Stage        | Description            |
| ------------ | ---------------------- |
| `CON`        | Concept                |
| `EVT`        | Engineering Validation |
| `DVT`        | Design Validation      |
| `PVT`        | Production Validation  |
| `PRODUCTION` | Full production        |

**Rule**: Stage assignment MUST be explicit. Never derive stages from images, filenames, capabilities, year, or folder location. CMS editors assign stages only when verified.

---

## 6. Capability Schema

| Field                 | Type                      | Required | Description                       |
| --------------------- | ------------------------- | -------- | --------------------------------- |
| `title`               | string                    | Yes      | Capability name                   |
| `slug`                | slug                      | Yes      | URL slug                          |
| `shortDescription`    | string                    | Yes      | Brief description                 |
| `intro`               | richText                  | Yes      | Introduction content              |
| `deliverables`        | object[]                  | Yes      | List of deliverables              |
| `lifecycleStages`     | lifecycleStageReference[] | Yes      | Stages this capability applies to |
| `methods`             | object[]                  | Yes      | Methods/approaches                |
| `body`                | richText                  | Yes      | Full capability description       |
| `relatedCapabilities` | reference[]               | No       | Related capabilities              |
| `relatedProjects`     | reference[]               | No       | Related published projects        |
| `heroMedia`           | mediaItem                 | No       | Hero image/video                  |
| `supportMedia`        | mediaItem[]               | No       | Supporting media                  |
| `cta`                 | cta                       | No       | Call to action                    |
| `seo`                 | seo                       | Yes      | SEO metadata                      |
| `publicationState`    | enum                      | Yes      | Publication state                 |

**Locked capability slugs**:

- `product-development`
- `industrial-design`
- `mechanical-engineering`
- `electrical-engineering`
- `prototyping`
- `testing-validation`
- `product-animation`
- `tooling`
- `manufacturing`
- `program-management`

---

## 7. Industry Schema

| Field                       | Type            | Required | Description                                 |
| --------------------------- | --------------- | -------- | ------------------------------------------- |
| `title`                     | string          | Yes      | Industry name                               |
| `slug`                      | slug            | Yes      | URL slug                                    |
| `shortDescription`          | string          | Yes      | Brief description                           |
| `intro`                     | richText        | Yes      | Introduction content                        |
| `typicalChallenges`         | object[]        | No       | Common challenges in this industry          |
| `developmentConsiderations` | object[]        | No       | Industry-specific considerations            |
| `relatedCapabilities`       | reference[]     | No       | Related capabilities                        |
| `publishedProjects`         | query/reference | No       | Strategy for referencing published projects |
| `heroMedia`                 | mediaItem       | No       | Hero image/video                            |
| `seo`                       | seo             | Yes      | SEO metadata                                |
| `publicationState`          | enum            | Yes      | Publication state                           |

**Locked industry slugs**:

- `consumer-products`
- `medical`
- `defense-security`
- `electronics`
- `industrial`
- `emerging-technology`

### 7.1 Medical / Defense Governance

Medical and Defense pages may exist before projects are approved. They must function without publishing held projects.

**Prohibited content** (when unverified):

- Certifications or approvals not confirmed
- Security clearances not confirmed
- Regulatory outcomes not confirmed
- Government contracts not confirmed
- Medical efficacy claims
- Deployment status claims

---

## 8. Article Schema

| Field                 | Type        | Required | Description                  |
| --------------------- | ----------- | -------- | ---------------------------- |
| `title`               | string      | Yes      | Article title                |
| `slug`                | slug        | Yes      | URL slug                     |
| `excerpt`             | text        | Yes      | Short excerpt for cards      |
| `author`              | reference   | Yes      | Reference to person document |
| `publicationDate`     | datetime    | Yes      | Original publication date    |
| `updatedDate`         | datetime    | No       | Last update date             |
| `category`            | reference   | Yes      | Reference to articleCategory |
| `heroMedia`           | mediaItem   | Yes      | Hero image                   |
| `body`                | richText    | Yes      | Article body (Portable Text) |
| `relatedCapabilities` | reference[] | No       | Related capabilities         |
| `relatedProjects`     | reference[] | No       | Related projects             |
| `seo`                 | seo         | Yes      | SEO metadata                 |
| `publicationState`    | enum        | Yes      | Publication state            |

### 8.1 Article Body Blocks (Whitelist)

| Block Type      | Description                                           |
| --------------- | ----------------------------------------------------- |
| `paragraph`     | Standard text paragraphs                              |
| `heading`       | H2, H3 headings                                       |
| `orderedList`   | Numbered lists                                        |
| `unorderedList` | Bullet lists                                          |
| `blockquote`    | Quoted text                                           |
| `image`         | Inline images                                         |
| `video`         | Inline video                                          |
| `callout`       | Highlighted callout boxes                             |
| `table`         | Data tables (where required)                          |
| `inlineLink`    | Hyperlinks within text                                |
| `codeBlock`     | Code (only when technical content genuinely needs it) |

**Prohibited**: No arbitrary `iframe`, no embedded JavaScript, no raw HTML blocks.

---

## 9. Testimonial Schema

| Field           | Type       | Required | Description                                         |
| --------------- | ---------- | -------- | --------------------------------------------------- |
| `quote`         | text       | Yes      | Testimonial quote text                              |
| `name`          | string     | Yes      | Person name                                         |
| `role`          | string     | Yes      | Person role/title                                   |
| `company`       | string     | Yes      | Company name                                        |
| `project`       | reference  | No       | Reference to related project                        |
| `video`         | mediaVideo | No       | Video testimonial                                   |
| `approvalState` | enum       | Yes      | NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED |
| `featured`      | boolean    | Yes      | Whether featured on homepage                        |

**Rule**: Do not publish testimonial unless `approvalState = APPROVED` (or `NOT_REQUIRED`).

---

## 10. Person Schema

| Field          | Type       | Required | Description                     |
| -------------- | ---------- | -------- | ------------------------------- |
| `name`         | string     | Yes      | Full name                       |
| `role`         | string     | Yes      | Role/title                      |
| `bio`          | text       | No       | Short biography                 |
| `portrait`     | mediaImage | No       | Headshot image                  |
| `socialLinks`  | object[]   | No       | Social media links              |
| `displayOrder` | number     | No       | Sort order                      |
| `active`       | boolean    | Yes      | Whether person appears publicly |

**Rules**:

- SEO not required for person documents
- Only `active = true` people appear in public queries

---

## 11. Office Schema

| Field               | Type    | Required | Description                     |
| ------------------- | ------- | -------- | ------------------------------- |
| `name`              | string  | Yes      | Office name                     |
| `address`           | string  | Yes      | Street address                  |
| `city`              | string  | Yes      | City                            |
| `region`            | string  | No       | State/region                    |
| `country`           | string  | Yes      | Country                         |
| `postalCode`        | string  | No       | Postal/ZIP code                 |
| `phone`             | string  | No       | Phone number                    |
| `email`             | string  | No       | Email address                   |
| `hours`             | string  | No       | Operating hours                 |
| `mapLink`           | string  | No       | External map URL                |
| `active`            | boolean | Yes      | Whether office appears publicly |
| `verificationState` | enum    | Yes      | Verification status             |

**Rule**: Only offices with `active = true` AND `verificationState = VERIFIED` appear in public queries.

---

## 12. FAQ Schema

| Field                 | Type     | Required | Description                      |
| --------------------- | -------- | -------- | -------------------------------- |
| `question`            | string   | Yes      | FAQ question text                |
| `answer`              | richText | Yes      | FAQ answer                       |
| `category`            | string   | No       | FAQ category grouping            |
| `order`               | number   | Yes      | Display order                    |
| `publicationState`    | enum     | Yes      | Publication state                |
| `approvalRequirement` | enum     | No       | Whether answer requires approval |

**Rule**: Commercial claims (pricing, timeline, free consultation, geographic manufacturing) must remain gated when unverified.

---

## 13. Redirect Schema

| Field               | Type    | Required | Description                        |
| ------------------- | ------- | -------- | ---------------------------------- |
| `fromPath`          | string  | Yes      | Source path                        |
| `toPath`            | string  | Yes      | Destination path                   |
| `statusCode`        | number  | Yes      | 301 or 308                         |
| `reason`            | string  | No       | Why this redirect exists           |
| `sourceType`        | enum    | No       | Origin of redirect                 |
| `verificationState` | enum    | Yes      | Whether redirect has been verified |
| `active`            | boolean | Yes      | Whether redirect is active         |

**Rules**:

- Allowed status codes: `301` (permanent) and `308` (permanent, preserve method)
- Temporary redirects require explicit architectural justification
- Normalize: leading slash required, no domain in `fromPath`
- Prevent redirect loops (validated at schema level)

---

## 14. Site Settings (Singleton)

| Field                        | Type         | Required | Description                                 |
| ---------------------------- | ------------ | -------- | ------------------------------------------- |
| `siteName`                   | string       | Yes      | Site display name                           |
| `defaultDescription`         | text         | Yes      | Default meta description                    |
| `primaryCTA`                 | cta          | No       | Primary call to action                      |
| `contactEmail`               | string       | No       | Contact email                               |
| `contactPhone`               | string       | No       | Contact phone                               |
| `socialLinks`                | object[]     | No       | Social media links                          |
| `approvedClientLogos`        | mediaImage[] | No       | Approved client logos for credibility strip |
| `footerConfiguration`        | object       | Yes      | Footer navigation and content               |
| `defaultShareImage`          | mediaImage   | No       | Default OG share image                      |
| `organizationName`           | string       | Yes      | Organization display name                   |
| `organizationLegalName`      | string       | No       | Legal entity name (if verified)             |
| `organizationStructuredData` | object       | No       | Schema.org organization fields              |

**Rules**:

- Do not store secrets or API keys in site settings
- Single instance only — this is a singleton document

---

## 15. SEO Defaults (Singleton)

| Field                   | Type       | Required | Description                       |
| ----------------------- | ---------- | -------- | --------------------------------- |
| `titleSuffix`           | string     | No       | Appended to page titles (e.g., "  | 123.design") |
| `defaultTitle`          | string     | Yes      | Fallback title when page has none |
| `defaultDescription`    | text       | Yes      | Fallback meta description         |
| `defaultOGImage`        | mediaImage | No       | Default Open Graph image          |
| `organizationName`      | string     | Yes      | For structured data               |
| `legalName`             | string     | No       | Legal entity name (if verified)   |
| `canonicalSiteURL`      | string     | Yes      | Canonical base URL                |
| `socialHandles`         | object     | No       | Social media handles              |
| `defaultRobotsBehavior` | string     | No       | Default robots directives         |

**Rule**: Do not fabricate organization attributes. Only include verified information.

---

## 16. Lead Form Settings (Singleton)

| Field                | Type     | Required | Description                          |
| -------------------- | -------- | -------- | ------------------------------------ |
| `productTypes`       | object[] | Yes      | Available product type options       |
| `developmentStages`  | object[] | Yes      | Available stage options              |
| `neededCapabilities` | object[] | Yes      | Available capability options         |
| `timingChoices`      | object[] | Yes      | Available timing options             |
| `budgetChoices`      | object[] | No       | Available budget options             |
| `confirmationCopy`   | richText | Yes      | Post-submission confirmation message |
| `uploadEnabled`      | boolean  | Yes      | Whether file uploads are enabled     |
| `scheduleCallURL`    | string   | No       | External scheduling link             |

**Rules**:

- CMS may configure form options and copy
- CMS may NOT alter: security validation, required PII rules, analytics privacy constraints, server logic

---

## 17. SEO Object Type

| Field          | Type       | Required | Description                 |
| -------------- | ---------- | -------- | --------------------------- |
| `title`        | string     | No       | Override page title         |
| `description`  | text       | No       | Override meta description   |
| `ogImage`      | mediaImage | No       | Override OG image           |
| `noindex`      | boolean    | No       | Exclude from indexing       |
| `nofollow`     | boolean    | No       | Exclude links from indexing |
| `canonicalUrl` | string     | No       | Override canonical URL      |

---

## 18. Media Object Types

### 18.1 mediaImage

| Field        | Type    | Required | Description                                         |
| ------------ | ------- | -------- | --------------------------------------------------- |
| `asset`      | image   | Yes      | Sanity image asset                                  |
| `alt`        | string  | Yes      | Alt text (must not be auto-generated from filename) |
| `decorative` | boolean | No       | Whether image is decorative (alt = "")              |
| `caption`    | string  | No       | Image caption                                       |
| `hotspot`    | object  | No       | Focal point / crop region                           |
| `width`      | number  | No       | Original width                                      |
| `height`     | number  | No       | Original height                                     |
| `crop`       | object  | No       | Crop metadata                                       |

### 18.2 mediaVideo

| Field         | Type       | Required | Description                                                          |
| ------------- | ---------- | -------- | -------------------------------------------------------------------- |
| `source`      | file       | Yes      | Video asset or external URL                                          |
| `poster`      | mediaImage | No       | Poster/thumbnail image                                               |
| `width`       | number     | No       | Video width                                                          |
| `height`      | number     | No       | Video height                                                         |
| `duration`    | number     | No       | Duration in seconds                                                  |
| `muted`       | boolean    | Yes      | Whether muted                                                        |
| `autoplay`    | boolean    | Yes      | Whether autoplay                                                     |
| `loop`        | boolean    | Yes      | Whether looped                                                       |
| `controls`    | boolean    | Yes      | Whether controls shown                                               |
| `playsInline` | boolean    | Yes      | Whether plays inline                                                 |
| `caption`     | string     | No       | Video caption                                                        |
| `transcript`  | text       | No       | Video transcript                                                     |
| `purpose`     | enum       | Yes      | heroReel, hoverPreview, projectVideo, processVideo, testimonialVideo |

**Rule**: Behavior derives from `purpose`. Authors may not manually configure contradictory video behavior.

### 18.3 mediaItem (Polymorphic)

Wraps either `mediaImage` or `mediaVideo` with a `type` discriminator field. Used wherever a slot accepts either format.

---

## 19. Supporting Object Types

### 19.1 cta

| Field     | Type   | Required | Description      |
| --------- | ------ | -------- | ---------------- |
| `label`   | string | Yes      | Button/link text |
| `link`    | link   | Yes      | Target link      |
| `variant` | enum   | No       | Button variant   |

### 19.2 link

| Field               | Type      | Required | Description                    |
| ------------------- | --------- | -------- | ------------------------------ |
| `type`              | enum      | Yes      | internal, external, anchor     |
| `internalReference` | reference | No       | Reference to internal document |
| `externalUrl`       | string    | No       | External URL                   |
| `anchor`            | string    | No       | Anchor/fragment                |
| `label`             | string    | No       | Link text                      |
| `openInNewTab`      | boolean   | No       | External links only            |

### 19.3 projectMeta

| Field          | Type        | Required | Description          |
| -------------- | ----------- | -------- | -------------------- |
| `clientName`   | string      | No       | Display client name  |
| `year`         | number      | No       | Project year         |
| `industry`     | reference   | No       | Primary industry     |
| `capabilities` | reference[] | No       | Applied capabilities |
| `stages`       | reference[] | No       | Lifecycle stages     |

### 19.4 lifecycleStageReference

| Field         | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| `stage`       | enum   | Yes      | CON, EVT, DVT, PVT, PRODUCTION |
| `description` | string | No       | Stage-specific description     |

### 19.5 approvalState

| Field        | Type     | Required | Description                                         |
| ------------ | -------- | -------- | --------------------------------------------------- |
| `state`      | enum     | Yes      | NOT_REQUIRED, REQUIRED, PENDING, APPROVED, REJECTED |
| `reviewer`   | string   | No       | Who reviewed                                        |
| `reviewedAt` | datetime | No       | When reviewed                                       |
| `notes`      | string   | No       | Review notes                                        |

### 19.6 contentStatus

| Field            | Type     | Required | Description                               |
| ---------------- | -------- | -------- | ----------------------------------------- |
| `state`          | enum     | Yes      | DRAFT, REVIEW, READY, PUBLISHED, ARCHIVED |
| `lastModifiedBy` | string   | No       | Last editor                               |
| `lastModifiedAt` | datetime | No       | Last edit time                            |

### 19.7 legacyRoute

| Field      | Type   | Required | Description                  |
| ---------- | ------ | -------- | ---------------------------- |
| `fromPath` | string | Yes      | Legacy URL path              |
| `reason`   | string | No       | Why this legacy route exists |

### 19.8 galleryItem

| Field     | Type       | Required | Description   |
| --------- | ---------- | -------- | ------------- |
| `media`   | mediaImage | Yes      | Gallery image |
| `caption` | string     | No       | Image caption |
| `order`   | number     | Yes      | Display order |

### 19.9 quote

| Field         | Type   | Required | Description      |
| ------------- | ------ | -------- | ---------------- |
| `text`        | text   | Yes      | Quote text       |
| `attribution` | string | No       | Who said it      |
| `source`      | string | No       | Source reference |

### 19.10 technicalDetail

| Field   | Type   | Required | Description                                  |
| ------- | ------ | -------- | -------------------------------------------- |
| `label` | string | Yes      | Detail label (e.g., "Material", "Tolerance") |
| `value` | string | Yes      | Detail value                                 |
| `unit`  | string | No       | Unit of measurement                          |

---

## 20. Content Provenance

Important content may carry internal-only governance metadata:

| Field               | Type    | Description                  |
| ------------------- | ------- | ---------------------------- |
| `evidenceState`     | enum    | Evidence verification status |
| `sourceNote`        | string  | Internal source note         |
| `ownerVerified`     | boolean | Whether owner has verified   |
| `clientApproval`    | enum    | Client approval status       |
| `lastVerifiedDate`  | date    | When last verified           |
| `verificationNotes` | string  | Internal notes               |

**Rule**: These fields are editorial/governance only. They are NEVER displayed publicly.

---

## 21. Content Status

Common content status for all publishable documents:

| State       | Description                    | Public  |
| ----------- | ------------------------------ | ------- |
| `DRAFT`     | Work in progress               | No      |
| `REVIEW`    | Under review                   | No      |
| `READY`     | Approved, awaiting publication | No      |
| `PUBLISHED` | Live                           | **Yes** |
| `ARCHIVED`  | Removed from public view       | No      |

**Enforcement**: Public queries MUST filter for `PUBLISHED` state only.

---

## 22. Slug Governance

| Rule                      | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| Lowercase                 | All slugs lowercase                                             |
| Kebab-case                | Words separated by hyphens                                      |
| Stable after publication  | Do not change published slugs without creating redirect         |
| No dates in project slugs | `medical-device-prototype` not `2024-medical-device`            |
| No capability nesting     | Slugs are flat, not hierarchical beyond locked IA               |
| Redirect on change        | Changing a published slug requires creating a redirect document |

---

## 23. Approval Model — Defense in Depth

Two independent approval tracks:

### Content Approval

- NOT_REQUIRED / REQUIRED / PENDING / APPROVED / REJECTED
- Managed by content team

### Client Approval

- NOT_REQUIRED / REQUIRED / PENDING / APPROVED / REJECTED
- Managed through client review process

**Publication constraint**: A project may NOT become `PUBLISHED` when a required approval is not `APPROVED`. CMS validation should make invalid publication difficult. Application queries MUST enforce publication rules independently of CMS validation.

---

## 24. Public Query Enforcement Summary

All public queries must filter:

```
publicationState == PUBLISHED
AND contentApprovalState in [APPROVED, NOT_REQUIRED]
AND clientApprovalState in [APPROVED, NOT_REQUIRED] (when required)
AND entityType eligible (INDIVIDUAL_PROJECT or approved PROJECT_FAMILY)
```

This applies to:

- Work index page
- Individual project pages
- Homepage featured work
- Related work sections
- Industry pages (project references)
- Capability pages (project references)
- Sitemap generation
- Search metadata

---

## 25. Cross-References

| Document                                  | Relationship                                                    |
| ----------------------------------------- | --------------------------------------------------------------- |
| 06F_CMS_CONTENT_GOVERNANCE.md             | Content provenance, migration strategy, editorial workflow      |
| 06G_DOMAIN_CONTENT_CONTRACTS.md           | Domain models, data transformation pipeline, query organization |
| 06H_DATA_FETCHING_CACHING_REVALIDATION.md | Fetching strategy, webhook revalidation, cache tags             |
| 06C_COMPONENT_ARCHITECTURE.md             | Component hierarchy that consumes domain models                 |
| 06D_COMPONENT_DATA_CONTRACTS.md           | Component prop contracts derived from domain models             |
| 06K_SEO_METADATA_STRUCTURED_DATA.md       | SEO implementation details                                      |

---

## Document Status

**PHASE 3 — SECTION 06E: LOCKED**
