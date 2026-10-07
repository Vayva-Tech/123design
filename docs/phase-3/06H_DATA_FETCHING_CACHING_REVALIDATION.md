# 06H — Data Fetching, Caching & Revalidation

## Data Fetching (section 61)

Default: **server-side fetches from Sanity**.

Prefer static generation / cached server rendering for:

- Homepage
- Work index
- Published project pages
- Capabilities
- Industries
- Process
- About
- Articles
- FAQ

Do not fetch core content from the browser after initial page render unless interaction requires it.

---

## Revalidation (section 62)

Use **webhook-triggered revalidation** architecture.

When Sanity content changes:

```
Sanity webhook → Verified endpoint → Revalidate relevant tags/routes
```

Cache tags:

| Tag                 | Scope                                |
| ------------------- | ------------------------------------ |
| `project`           | All project-related content          |
| `project:{slug}`    | Specific project page                |
| `projects`          | Project index/listing                |
| `capabilities`      | All capability-related content       |
| `capability:{slug}` | Specific capability page             |
| `industries`        | All industry-related content         |
| `industry:{slug}`   | Specific industry page               |
| `articles`          | All article-related content          |
| `article:{slug}`    | Specific article page                |
| `settings`          | Site-wide settings and configuration |

Do not revalidate the entire site for every edit unless necessary. Target revalidation by content type and affected routes.

---

## Caching Rules (section 63)

### LONG-LIVED STATIC

Content that changes infrequently and is safe to cache for extended periods:

- Homepage structure
- Capability structure
- Published project content

### REVALIDATED CONTENT

Content managed through CMS that is cleared on webhook trigger:

- CMS edits — cleared on webhook trigger

### DYNAMIC

Content that must never be cached:

- Lead submission
- Preview

### NO STORE

Sensitive operations that must not be cached or stored:

- Sensitive form operations
- Preview authorization

---

## Error Handling (section 119)

| Scenario                | Behavior                                           |
| ----------------------- | -------------------------------------------------- |
| CMS unavailable         | Serve cache where possible                         |
| Image unavailable       | Preserve layout and fallback gracefully            |
| Lead submission failure | Retain entered data, show clear error, allow retry |
| Analytics failure       | Never break user experience                        |

---

## CMS Content Fallback (section 120)

Do not display:

- `undefined`
- `null`
- Empty section titles
- Placeholder lorem ipsum

Rules:

- If optional CMS data is absent: **module does not render**
- Critical required data failures should be visible during development/QA

---

## Build-Time Content Validation (section 121)

Plan validation/reporting for:

| Check                               | Purpose                                    |
| ----------------------------------- | ------------------------------------------ |
| Published project missing hero      | Prevent broken project cards               |
| Published project invalid approvals | Prevent unapproved content from going live |
| Missing alt decisions               | Ensure accessibility compliance            |
| Broken internal references          | Prevent dead links and missing references  |
| Duplicate slugs                     | Prevent routing conflicts                  |
| Redirect loops                      | Prevent infinite redirect cycles           |
| SEO metadata gaps                   | Ensure search engine discoverability       |

Do not automatically fabricate missing content. Report issues for editorial resolution.

---

## Document Status

**PHASE 3 — SECTION 06H: LOCKED**
