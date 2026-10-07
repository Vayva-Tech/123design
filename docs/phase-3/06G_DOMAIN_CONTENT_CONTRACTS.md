# 06G — Domain Content Contracts

## Data Transformation Layer (section 56)

Architecture pipeline:

```
SANITY RAW DATA → QUERY RESULT → VALIDATION (Zod) → DOMAIN MAPPER → DOMAIN MODEL → COMPONENT
```

Do not pass large raw Sanity documents directly into UI components. Every query result passes through validation and domain mapping before reaching the presentation layer.

---

## Runtime Validation (section 57)

Use **Zod** as planned runtime validation library for:

- Environment variables
- External form payloads
- Important CMS query responses
- Webhook payloads
- URL query/filter state

Do not validate every internal React prop redundantly at runtime. TypeScript handles internal static typing.

---

## Domain Models (11 models)

### ProjectCardModel

| Field              | Type        | Required | Nullable | Visibility | Validation                      | Fallback Behavior    |
| ------------------ | ----------- | -------- | -------- | ---------- | ------------------------------- | -------------------- |
| `id`               | string      | Yes      | No       | Public     | Non-empty string                | Validation error     |
| `slug`             | string      | Yes      | No       | Public     | Valid slug format               | Validation error     |
| `title`            | string      | Yes      | No       | Public     | Non-empty string                | Validation error     |
| `shortLabel`       | string      | No       | Yes      | Public     | —                               | Omit from display    |
| `industry`         | reference   | No       | Yes      | Public     | Valid reference when present    | Omit from display    |
| `capabilities`     | reference[] | No       | No       | Public     | Array of valid references       | Empty array          |
| `heroMedia`        | mediaImage  | Yes      | No       | Public     | Valid image asset               | Validation error     |
| `previewVideo`     | mediaVideo  | No       | Yes      | Public     | Valid video asset when present  | Omit from display    |
| `year`             | number      | No       | Yes      | Public     | Only when verified              | Omit from display    |
| `publicationState` | enum        | Yes      | No       | Internal   | Valid content status enum value | Validation error     |
| `featuredVariant`  | enum        | No       | Yes      | Public     | Valid variant when present      | Default card variant |

---

### ProjectPageModel

| Field                           | Type               | Required | Nullable | Visibility | Validation                        | Fallback Behavior       |
| ------------------------------- | ------------------ | -------- | -------- | ---------- | --------------------------------- | ----------------------- |
| _(all ProjectCardModel fields)_ | —                  | —        | —        | —          | —                                 | —                       |
| `summary`                       | richText           | Yes      | No       | Public     | Non-empty Portable Text           | Validation error        |
| `overview`                      | richText           | No       | No       | Public     | Valid Portable Text when present  | Omit section            |
| `modules`                       | projectModule[]    | No       | No       | Public     | Valid module structures           | Empty array             |
| `gallery`                       | galleryItem[]      | No       | No       | Public     | Valid gallery items               | Empty array             |
| `video`                         | mediaVideo         | No       | Yes      | Public     | Valid video asset when present    | Omit section            |
| `technicalDetails`              | technicalDetail[]  | No       | No       | Public     | Valid detail structures           | Empty array             |
| `testimonial`                   | quote              | No       | Yes      | Public     | Valid quote when present          | Omit section            |
| `relatedProjects`               | ProjectCardModel[] | No       | No       | Public     | Valid card models, PUBLISHED only | Empty array             |
| `clientDisplayMode`             | enum               | Yes      | No       | Public     | Valid display mode enum           | Validation error        |
| `clientDisplayName`             | string             | No       | Yes      | Public     | Only when mode=NAMED              | Omit when mode != NAMED |
| `stages`                        | enum[]             | No       | No       | Public     | Only when explicitly assigned     | Empty array             |
| `legacyRoutes`                  | string[]           | No       | No       | Internal   | Valid route strings               | Empty array             |
| `seo`                           | seo                | Yes      | No       | Public     | Valid SEO structure               | Validation error        |

---

### CapabilityCardModel

| Field                 | Type       | Required | Nullable | Visibility | Validation               | Fallback Behavior |
| --------------------- | ---------- | -------- | -------- | ---------- | ------------------------ | ----------------- |
| `id`                  | string     | Yes      | No       | Public     | Non-empty string         | Validation error  |
| `slug`                | string     | Yes      | No       | Public     | Valid slug format        | Validation error  |
| `title`               | string     | Yes      | No       | Public     | Non-empty string         | Validation error  |
| `shortDescription`    | string     | Yes      | No       | Public     | Non-empty string         | Validation error  |
| `heroMedia`           | mediaImage | No       | Yes      | Public     | Valid image when present | Omit from display |
| `deliverablesSummary` | string     | Yes      | No       | Public     | Non-empty string         | Validation error  |

---

### CapabilityPageModel

| Field                              | Type                  | Required | Nullable | Visibility | Validation                        | Fallback Behavior |
| ---------------------------------- | --------------------- | -------- | -------- | ---------- | --------------------------------- | ----------------- |
| _(all CapabilityCardModel fields)_ | —                     | —        | —        | —          | —                                 | —                 |
| `intro`                            | richText              | Yes      | No       | Public     | Non-empty Portable Text           | Validation error  |
| `deliverables`                     | deliverable[]         | Yes      | No       | Public     | Non-empty array                   | Validation error  |
| `lifecycleStages`                  | lifecycleStage[]      | Yes      | No       | Public     | Non-empty array                   | Validation error  |
| `methods`                          | method[]              | No       | No       | Public     | Valid method structures           | Empty array       |
| `body`                             | richText              | No       | No       | Public     | Valid Portable Text when present  | Omit section      |
| `relatedCapabilities`              | CapabilityCardModel[] | No       | No       | Public     | Valid card models                 | Empty array       |
| `relatedProjects`                  | ProjectCardModel[]    | No       | No       | Public     | Valid card models, PUBLISHED only | Empty array       |
| `supportMedia`                     | mediaItem[]           | No       | No       | Public     | Valid media items                 | Empty array       |
| `cta`                              | cta                   | No       | Yes      | Public     | Valid CTA when present            | Omit section      |
| `seo`                              | seo                   | Yes      | No       | Public     | Valid SEO structure               | Validation error  |

---

### IndustryPageModel

| Field                       | Type                  | Required | Nullable | Visibility | Validation                     | Fallback Behavior |
| --------------------------- | --------------------- | -------- | -------- | ---------- | ------------------------------ | ----------------- |
| `id`                        | string                | Yes      | No       | Public     | Non-empty string               | Validation error  |
| `slug`                      | string                | Yes      | No       | Public     | Valid slug format              | Validation error  |
| `title`                     | string                | Yes      | No       | Public     | Non-empty string               | Validation error  |
| `shortDescription`          | string                | Yes      | No       | Public     | Non-empty string               | Validation error  |
| `intro`                     | richText              | Yes      | No       | Public     | Non-empty Portable Text        | Validation error  |
| `typicalChallenges`         | challenge[]           | No       | No       | Public     | Valid challenge structures     | Empty array       |
| `developmentConsiderations` | consideration[]       | No       | No       | Public     | Valid consideration structures | Empty array       |
| `relatedCapabilities`       | CapabilityCardModel[] | No       | No       | Public     | Valid card models              | Empty array       |
| `publishedProjects`         | ProjectCardModel[]    | No       | No       | Public     | Query result, PUBLISHED only   | Empty array       |
| `heroMedia`                 | mediaImage            | No       | Yes      | Public     | Valid image when present       | Omit from display |
| `seo`                       | seo                   | Yes      | No       | Public     | Valid SEO structure            | Validation error  |

---

### ArticleCardModel

| Field             | Type       | Required | Nullable | Visibility | Validation        | Fallback Behavior |
| ----------------- | ---------- | -------- | -------- | ---------- | ----------------- | ----------------- |
| `id`              | string     | Yes      | No       | Public     | Non-empty string  | Validation error  |
| `slug`            | string     | Yes      | No       | Public     | Valid slug format | Validation error  |
| `title`           | string     | Yes      | No       | Public     | Non-empty string  | Validation error  |
| `excerpt`         | string     | Yes      | No       | Public     | Non-empty string  | Validation error  |
| `author`          | name       | Yes      | No       | Public     | Non-empty name    | Validation error  |
| `publicationDate` | date       | Yes      | No       | Public     | Valid ISO date    | Validation error  |
| `category`        | string     | Yes      | No       | Public     | Non-empty string  | Validation error  |
| `heroMedia`       | mediaImage | Yes      | No       | Public     | Valid image asset | Validation error  |

---

### ArticlePageModel

| Field                           | Type                  | Required | Nullable | Visibility | Validation                        | Fallback Behavior |
| ------------------------------- | --------------------- | -------- | -------- | ---------- | --------------------------------- | ----------------- |
| _(all ArticleCardModel fields)_ | —                     | —        | —        | —          | —                                 | —                 |
| `body`                          | richText              | Yes      | No       | Public     | Non-empty Portable Text           | Validation error  |
| `relatedCapabilities`           | CapabilityCardModel[] | No       | No       | Public     | Valid card models                 | Empty array       |
| `relatedProjects`               | ProjectCardModel[]    | No       | No       | Public     | Valid card models, PUBLISHED only | Empty array       |
| `updatedDate`                   | date                  | No       | Yes      | Public     | Valid ISO date when present       | Omit from display |
| `seo`                           | seo                   | Yes      | No       | Public     | Valid SEO structure               | Validation error  |

---

### TestimonialModel

| Field              | Type       | Required | Nullable | Visibility | Validation                   | Fallback Behavior |
| ------------------ | ---------- | -------- | -------- | ---------- | ---------------------------- | ----------------- |
| `id`               | string     | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `quote`            | string     | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `name`             | string     | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `role`             | string     | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `company`          | string     | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `projectReference` | reference  | No       | Yes      | Public     | Valid reference when present | Omit from display |
| `video`            | mediaVideo | No       | Yes      | Public     | Valid video when present     | Omit from display |
| `approvalState`    | enum       | Yes      | No       | Internal   | Valid approval enum          | Validation error  |
| `featured`         | boolean    | Yes      | No       | Public     | Boolean value                | Defaults to false |

---

### NavigationModel

| Field             | Type         | Required | Nullable | Visibility | Validation                         | Fallback Behavior |
| ----------------- | ------------ | -------- | -------- | ---------- | ---------------------------------- | ----------------- |
| `primaryNavItems` | navItem[]    | Yes      | No       | Public     | Non-empty array of valid nav items | Validation error  |
| `footerLinks`     | footerLink[] | Yes      | No       | Public     | Non-empty array of valid links     | Validation error  |
| `socialLinks`     | socialLink[] | No       | No       | Public     | Valid social link structures       | Empty array       |
| `primaryCTA`      | cta          | Yes      | No       | Public     | Valid CTA structure                | Validation error  |

---

### SiteSettingsModel

| Field                        | Type           | Required | Nullable | Visibility | Validation                   | Fallback Behavior |
| ---------------------------- | -------------- | -------- | -------- | ---------- | ---------------------------- | ----------------- |
| `siteName`                   | string         | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `defaultDescription`         | string         | Yes      | No       | Public     | Non-empty string             | Validation error  |
| `primaryCTA`                 | cta            | Yes      | No       | Public     | Valid CTA structure          | Validation error  |
| `contactReferences`          | contactRef[]   | Yes      | No       | Public     | Non-empty array              | Validation error  |
| `socialLinks`                | socialLink[]   | No       | No       | Public     | Valid social link structures | Empty array       |
| `approvedClientLogos`        | clientLogo[]   | No       | No       | Public     | Valid logo structures        | Empty array       |
| `footerConfig`               | footerConfig   | Yes      | No       | Public     | Valid footer configuration   | Validation error  |
| `defaultShareImage`          | mediaImage     | Yes      | No       | Public     | Valid image asset            | Validation error  |
| `organizationStructuredData` | structuredData | No       | No       | Public     | Valid JSON-LD when present   | Omit from output  |

---

### LeadFormSettingsModel

| Field                | Type     | Required | Nullable | Visibility | Validation                       | Fallback Behavior |
| -------------------- | -------- | -------- | -------- | ---------- | -------------------------------- | ----------------- |
| `productTypes`       | enum[]   | Yes      | No       | Public     | Non-empty array of valid types   | Validation error  |
| `developmentStages`  | enum[]   | Yes      | No       | Public     | Non-empty array of valid stages  | Validation error  |
| `neededCapabilities` | enum[]   | Yes      | No       | Public     | Non-empty array of valid caps    | Validation error  |
| `timingChoices`      | enum[]   | Yes      | No       | Public     | Non-empty array of valid timings | Validation error  |
| `budgetChoices`      | enum[]   | No       | No       | Public     | Valid budget ranges when present | Empty array       |
| `confirmationCopy`   | richText | Yes      | No       | Public     | Non-empty Portable Text          | Validation error  |
| `uploadEnabled`      | boolean  | Yes      | No       | Public     | Boolean value                    | Defaults to false |
| `scheduleCallUrl`    | string   | No       | Yes      | Public     | Valid URL when present           | Omit from display |

---

## Query Organization (section 58)

Conceptual Sanity query modules:

| Module         | Responsibility                                    |
| -------------- | ------------------------------------------------- |
| `projects`     | Project queries: index, detail, featured, related |
| `capabilities` | Capability queries: index, detail, related        |
| `industries`   | Industry queries: index, detail, related          |
| `articles`     | Article queries: index, detail, related           |
| `testimonials` | Testimonial queries: featured, all approved       |
| `settings`     | Site settings, SEO defaults, structured data      |
| `navigation`   | Primary nav, footer links, social links           |
| `redirects`    | Redirect lookups for legacy URL support           |

Avoid one enormous GROQ query file. Queries should return only fields required by the domain model.

---

## Public Project Query Rule (section 59)

Public project queries must filter:

```
publicationState == PUBLISHED
AND content approval valid
AND client approval valid when required
AND entityType eligible
```

This applies to:

- Work index
- Project pages
- Homepage featured work
- Related work
- Industry pages
- Capability pages
- Sitemap
- Search metadata

---

## Draft Preview (section 60)

Sanity preview/draft architecture must support:

- Authorized editorial preview
- Draft documents
- `CONTENT_REVIEW` status
- `CLIENT_REVIEW` status

Without exposing them publicly.

Preview mode requirements:

- Must require authorization
- Preview pages must: `noindex`
- Preview pages must not appear in sitemap
- Preview pages must not populate public caches

---

## Document Status

**PHASE 3 — SECTION 06G: LOCKED**
