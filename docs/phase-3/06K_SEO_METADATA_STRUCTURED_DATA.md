# 06K — SEO, Metadata & Structured Data

## SEO Metadata Architecture (section 81)

Use Next metadata architecture. Each indexable document supports:

- `title`
- `description`
- `canonical`
- `og:title`
- `og:description`
- `og:image`
- `robots`

Public defaults inherit from site settings.

## Title Patterns (section 82)

| Page Type  | Title Pattern                                                   |
| ---------- | --------------------------------------------------------------- |
| Homepage   | `123.design — Product Development, Engineering & Manufacturing` |
| Project    | `{Project Title} \| 123.design`                                 |
| Capability | `{Capability} \| 123.design`                                    |
| Industry   | `{Industry} Product Development \| 123.design`                  |
| Article    | `{Article Title} \| 123.design`                                 |

Do not implement final copy blindly if content later changes.

## Canonical URL (section 83)

Canonical base configured centrally. Never derive canonical origin solely from browser host headers.

Production site URL comes from validated environment configuration.

## Structured Data (section 84)

Supported types:

- `Organization`
- `ProfessionalService`
- `BreadcrumbList`
- `Article`
- `VideoObject`
- `FAQPage` (only where legitimate)

Do not emit schema with empty/unverified fields.

## Organization Schema Governance (section 85)

Only verified fields may enter Organization schema:

- `name`
- `url`
- `logo`
- `telephone`
- `address`
- `sameAs` (social profiles)

Do not include disputed office/contact information.

## Project Structured Data (section 86)

Do not invent specialized schema types for projects when not clearly applicable.

Use:

- `BreadcrumbList`
- `VideoObject` where applicable
- General webpage metadata

Unless a more accurate schema is later justified.

## Sitemap (section 87)

**Include**:

- Public canonical indexable routes
- PUBLISHED projects
- PUBLISHED articles
- Published capability/industry pages

**Exclude**:

- Drafts
- Preview routes
- Client review routes
- Start-project completion states
- Filter query strings
- Admin/studio routes

## Robots (section 88)

- **Production**: allow public website, exclude internal/private routes.
- **Preview/staging**: noindex / deny indexing strategy.

Do not let staging enter search indexes.

## Legacy Redirect System (section 89)

Redirect registry from:

- Locked route mapping
- CMS redirect documents

Build step/server config must validate:

- No redirect loops
- Valid path syntax
- No duplicate `fromPath` conflicts
- Known status code (301 or 302)

Do not redirect every missing legacy project to `/work`. Preserve project intent wherever possible.

---

## Document Status

**PHASE 3 — SECTION 06K: LOCKED**
