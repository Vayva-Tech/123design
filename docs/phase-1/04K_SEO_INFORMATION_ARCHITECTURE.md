# 04K — SEO Information Architecture

> Phase 1 documentation for the 123.design website rebuild.
> This document defines indexable routes, noindex routes, canonical behavior, breadcrumb hierarchy, sitemap inclusion, schema candidates, title patterns, and description ownership. No implementation — this is the information architecture specification.

---

## 1. Indexable Routes

These pages are crawlable and indexable by search engines. Each receives `<meta name="robots" content="index, follow">` (or omits the robots meta tag entirely, which defaults to indexable).

| Route                    | Page Type          | Notes                                                     |
| ------------------------ | ------------------ | --------------------------------------------------------- |
| `/`                      | Homepage           | Site root                                                 |
| `/work`                  | Work index         | Portfolio listing page                                    |
| `/work/[project]`        | Project detail     | Only PUBLISHED project pages. Slugs are project-specific. |
| `/capabilities`          | Capabilities index | Service listing page                                      |
| `/capabilities/[detail]` | Capability detail  | 10 capability pages, one per capability                   |
| `/process`               | Process            | Single process page                                       |
| `/industries`            | Industries index   | Industry listing page                                     |
| `/industries/[detail]`   | Industry detail    | 6 industry pages, one per industry                        |
| `/about`                 | About              | Single about page                                         |
| `/insights`              | Insights index     | Article listing page                                      |
| `/insights/[article]`    | Article detail     | Only published articles                                   |
| `/faq`                   | FAQ                | Single FAQ page                                           |

### Indexing Rules

- Only PUBLISHED projects appear in the work index and are eligible for indexing
- Only published articles appear in the insights index and are eligible for indexing
- Projects in DRAFT, HOLD, or RECOVERY_PENDING states must never produce indexable URLs
- Draft, preview, and client-review states must never produce indexable URLs
- All indexable routes must be reachable via the sitemap

---

## 2. Noindex Routes

These pages must not be crawled or indexed. Each receives `<meta name="robots" content="noindex, nofollow">`.

| Route                                    | Reason                                                                |
| ---------------------------------------- | --------------------------------------------------------------------- |
| `/start-project/complete`                | Completion/confirmation state — no search value                       |
| Preview / draft pages                    | Unpublished content, not ready for public consumption                 |
| Client-review project pages              | Private review URLs intended for specific stakeholders only           |
| CMS previews                             | Draft content rendered through CMS preview mode                       |
| `/legal/privacy`                         | Legal page — no independent search value                              |
| `/legal/terms`                           | Legal page — no independent search value                              |
| `/404`                                   | Error page — returns HTTP 404 status code in addition to noindex meta |
| Internal search results (if added later) | Thin/dynamic content, not suitable for indexing                       |

### Noindex Rules

- Client-review and preview pages should also be behind authentication or unguessable URLs where possible
- `/404` returns HTTP 404 status code in addition to the noindex meta tag
- CMS preview URLs must never be linked from any public page or sitemap
- If internal search is added in the future, search results pages must be noindex

---

## 3. Canonical Behavior

Every page has exactly one canonical URL. All pages use self-referencing canonical URLs.

### Canonical Rules

- Every page: `<link rel="canonical" href="https://123.design/[path]" />`
- The canonical URL matches the page's own URL (self-referencing)
- No canonical chains (A canonicalizes to B which canonicalizes to C)
- Protocol: always `https://`
- Domain: always the production domain — no staging or preview domains in canonical tags

### Per-Route Canonical Patterns

| Route Pattern    | Canonical URL                         |
| ---------------- | ------------------------------------- |
| Project pages    | `/work/[project-slug]`                |
| Capability pages | `/capabilities/[capability-slug]`     |
| Industry pages   | `/industries/[industry-slug]`         |
| Article pages    | `/insights/[article-slug]`            |
| All other pages  | Self-referencing (the page's own URL) |

### Duplicate Content Prevention

- No duplicate content across routes — each piece of content lives at exactly one URL
- Filtered views of the Work index (e.g., `/work?industry=medical`) canonicalize to `/work` unless a future SEO strategy promotes specific filtered landing pages
- Trailing slash consistency: decide one convention in implementation and apply uniformly across all routes
- URL parameters that do not change page content (tracking parameters, session IDs) must not produce separate canonical URLs

---

## 4. Breadcrumb Hierarchy

Breadcrumbs provide contextual navigation and structured data for search engines.

### Pages That Use Breadcrumbs

| Page              | Breadcrumb Path                         |
| ----------------- | --------------------------------------- |
| Project detail    | Home > Work > [Project Name]            |
| Capability detail | Home > Capabilities > [Capability Name] |
| Industry detail   | Home > Industries > [Industry Name]     |
| Article detail    | Home > Insights > [Article Title]       |

### Pages That Do NOT Use Breadcrumbs

| Page                                 | Reason                    |
| ------------------------------------ | ------------------------- |
| Homepage (`/`)                       | Root — no parent context  |
| Work index (`/work`)                 | Top-level collection page |
| Capabilities index (`/capabilities`) | Top-level collection page |
| Industries index (`/industries`)     | Top-level collection page |
| Insights index (`/insights`)         | Top-level collection page |
| Process (`/process`)                 | Top-level page            |
| About (`/about`)                     | Top-level page            |
| FAQ (`/faq`)                         | Top-level page            |

### Breadcrumb Rules

- Breadcrumb text labels match the page titles of their parent routes
- "Home" links to `/`
- The current page is the last item and is not a link (it represents the current location)
- Breadcrumbs are visible but secondary — they complement, not replace, primary navigation
- Breadcrumb structured data (schema) follows the same visible hierarchy (see Section 6)

---

## 5. Sitemap Inclusion

The XML sitemap (`/sitemap.xml`) includes all indexable routes and excludes all noindex routes.

### Included in Sitemap

| Route                        | Notes                                                          |
| ---------------------------- | -------------------------------------------------------------- |
| `/`                          | Homepage                                                       |
| `/work`                      | Work index                                                     |
| `/work/[project-slug]`       | Only PUBLISHED projects — not DRAFT, HOLD, or RECOVERY_PENDING |
| `/capabilities`              | Capabilities index                                             |
| `/capabilities/[each of 10]` | All capability detail pages                                    |
| `/process`                   | Process page                                                   |
| `/industries`                | Industries index                                               |
| `/industries/[each of 6]`    | All industry detail pages                                      |
| `/about`                     | About page                                                     |
| `/insights`                  | Insights index                                                 |
| `/insights/[article-slug]`   | Only published articles                                        |
| `/faq`                       | FAQ page                                                       |

### Excluded from Sitemap

| Route                                    | Reason                             |
| ---------------------------------------- | ---------------------------------- |
| `/start-project/complete`                | Completion state — no search value |
| Draft / preview pages                    | Not public                         |
| Client-review pages                      | Private                            |
| CMS previews                             | Draft content                      |
| `/legal/privacy`                         | Legal page                         |
| `/legal/terms`                           | Legal page                         |
| `/404`                                   | Error page                         |
| Internal search results (if added later) | Thin/dynamic content               |

### Sitemap Rules

- Sitemap regenerates when project or article publication state changes
- Each URL entry includes `<lastmod>` date reflecting the most recent content change
- Priority and changefreq are optional — do not fabricate importance signals
- Sitemap is accessible at `/sitemap.xml`
- Sitemap is referenced in `robots.txt`

---

## 6. Schema Candidates

Structured data (JSON-LD) is eligible for the following page types. **Do not implement schema yet** — this section documents eligibility only. Implementation comes in a later phase.

### Organization Schema

| Scope     | Notes                                                       |
| --------- | ----------------------------------------------------------- |
| Site-wide | Organization name, URL, logo, contact info, social profiles |

### ProfessionalService Schema

| Scope     | Notes                                         |
| --------- | --------------------------------------------- |
| Site-wide | Service area, service types, geographic focus |

### BreadcrumbList Schema

| Eligible Pages    | Notes                              |
| ----------------- | ---------------------------------- |
| Project detail    | Home > Work > [Project]            |
| Capability detail | Home > Capabilities > [Capability] |
| Industry detail   | Home > Industries > [Industry]     |
| Article detail    | Home > Insights > [Article]        |

### Article Schema

| Eligible Pages              | Notes                                            |
| --------------------------- | ------------------------------------------------ |
| Published insights articles | Only when the article is published and indexable |

### VideoObject Schema

| Eligible Pages           | Notes                                                                                         |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Project pages with video | Only on project pages that contain meaningful video content — not decorative background loops |

### FAQPage Schema

| Eligible Pages | Notes                                                                                |
| -------------- | ------------------------------------------------------------------------------------ |
| FAQ page only  | Only where appropriate — questions and answers must be genuine, not marketing filler |

### Schema Rules (for future implementation)

- Schema must accurately reflect page content — no misleading structured data
- Schema for unpublished or draft content is forbidden
- VideoObject requires a real, meaningful video — not a background loop or ambient animation
- FAQPage requires genuine Q&A — not marketing questions with marketing answers
- BreadcrumbList must match the visible breadcrumb hierarchy exactly
- Organization and ProfessionalService data must use verified business information

---

## 7. Title Patterns

Every page owns its own `<title>` tag. No auto-generated titles from headings without review.

| Page               | Title Pattern                                                      |
| ------------------ | ------------------------------------------------------------------ |
| Homepage           | `123.design — From Idea to Production \| Product Development Firm` |
| Work index         | `Work — 123.design`                                                |
| Project detail     | `[Project Name] — 123.design`                                      |
| Capabilities index | `Capabilities — 123.design`                                        |
| Capability detail  | `[Capability Name] — 123.design`                                   |
| Process            | `Process — 123.design`                                             |
| Industries index   | `Industries — 123.design`                                          |
| Industry detail    | `[Industry Name] — 123.design`                                     |
| About              | `About — 123.design`                                               |
| Insights index     | `Insights — 123.design`                                            |
| Article detail     | `[Article Title] — 123.design`                                     |
| FAQ                | `FAQ — 123.design`                                                 |

### Title Rules

- Brand suffix `— 123.design` on every page except the homepage
- Homepage leads with the brand name and includes the product development firm descriptor
- All other pages lead with the page-specific identifier
- Titles should be concise — under 60 characters where possible
- No keyword stuffing in titles
- Titles are reviewed and verified — not generated algorithmically from headings

---

## 8. Description Ownership

Each page owns its meta description. Descriptions are written per page, not auto-generated from body text.

### Description Rules

- Every indexable page has a `<meta name="description" content="...">` tag
- Descriptions are reviewed and verified — not extracted algorithmically from page content
- No duplicate descriptions across pages — each page writes its own
- Descriptions should be 120–155 characters — long enough to be useful, short enough to avoid truncation

### Description Ownership by Page Type

| Page Type         | Description Source            | Notes                                                                                                                         |
| ----------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Homepage          | 123.design team               | Core value proposition — "From Idea to Production" positioning                                                                |
| Work index        | 123.design team               | Portfolio overview statement                                                                                                  |
| Project detail    | Project summary               | Each project owns its own summary — verified against actual project                                                           |
| Capability detail | Capability purpose statement  | Each of the 10 capabilities has a distinct purpose description                                                                |
| Industry detail   | Industry-specific description | Each of the 6 industries has a tailored description — Medical and Defense require owner verification (regulatory sensitivity) |
| Process           | 123.design team               | Process differentiator statement                                                                                              |
| About             | 123.design team               | Mission and philosophy                                                                                                        |
| Insights index    | 123.design team               | Insights section overview                                                                                                     |
| Article detail    | Per-article description       | Each article owns its own description — written by the author                                                                 |
| FAQ               | 123.design team               | Summary of covered topics                                                                                                     |

### Description Quality Standards

- Project descriptions must be verified against the actual project — not invented
- Capability descriptions must accurately represent the service — not padded with filler
- Industry descriptions must be factually accurate — especially Medical and Defense (regulatory sensitivity)
- No page should inherit a default or placeholder description in production

---

## 9. robots.txt Guidance

The `robots.txt` file should:

- Allow all crawlers access to indexable content
- Disallow access to preview/draft paths (e.g., `/preview/`, `/client-review/`, CMS preview routes)
- Reference the sitemap location: `Sitemap: https://123.design/sitemap.xml`
- Not block CSS, JS, or image assets (search engines need these to render pages)

---

## 10. Information Architecture Summary

```
/                               Homepage                          (indexable)
/work                           Work index                        (indexable)
/work/[project]                 Project detail                    (indexable, PUBLISHED only)
/capabilities                   Capabilities index                (indexable)
/capabilities/[detail]          10 capability pages               (indexable)
/process                        Process page                      (indexable)
/industries                     Industries index                  (indexable)
/industries/[detail]            6 industry pages                  (indexable)
/about                          About page                        (indexable)
/insights                       Insights index                    (indexable)
/insights/[article]             Article detail                    (indexable, published only)
/faq                            FAQ page                          (indexable)
/start-project/complete         Completion state                  (noindex)
/legal/privacy                  Privacy policy                    (noindex)
/legal/terms                    Terms of use                      (noindex)
/404                            Error page                        (noindex, 404 status)
```

### Route Count Summary

| Category                  | Count                                                                   |
| ------------------------- | ----------------------------------------------------------------------- |
| Indexable top-level pages | 8 (home, work, capabilities, process, industries, about, insights, faq) |
| Indexable detail pages    | Variable (projects + 10 capabilities + 6 industries + articles)         |
| Noindex pages             | 7+ (completion, previews, client-review, CMS previews, legal x2, 404)   |
| Total route patterns      | ~20+                                                                    |
