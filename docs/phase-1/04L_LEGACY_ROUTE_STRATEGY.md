# 04L — Legacy Route Strategy

> Phase 1 documentation for the 123.design website rebuild.
> Conceptual route mapping only — this is NOT a final redirect map.

---

## Purpose

This document defines the conceptual mapping from legacy 123.design routes to the new site structure. It identifies where each legacy route should conceptually land, what status that mapping carries, and where owner decisions or content recovery are required before any redirect can be finalized.

**This document does not define production redirects.** All mappings are conceptual. Finalizing 301 redirects is a separate activity that occurs after content recovery and owner decisions are resolved.

---

## Status Values

| Status                    | Meaning                                                                            | Action Required                                       |
| ------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------- |
| LIKELY                    | High confidence in the conceptual destination                                      | No immediate action — mapping is sound                |
| REQUIRES_CONTENT_RECOVERY | Old page exists but content and media need recovery before mapping to the new page | Identify and recover content/media from legacy source |
| REQUIRES_OWNER_DECISION   | Owner must decide the intent or destination before mapping can be confirmed        | Present options to owner for decision                 |
| UNKNOWN                   | Cannot determine the conceptual destination without further investigation          | Investigate legacy route purpose and content          |

---

## Legacy Route Mapping Classes

| Class          | Description                           |
| -------------- | ------------------------------------- |
| LEGACY_HOME    | Former homepage                       |
| LEGACY_PROJECT | Former project/portfolio pages        |
| LEGACY_SERVICE | Former service/capability pages       |
| LEGACY_COMPANY | Former about/company pages            |
| LEGACY_CONTENT | Former blog/insights/articles/content |
| LEGACY_UNKNOWN | Any unrecognized legacy route         |

---

## Known Legacy Routes from Phase 0A

The following legacy routes were identified during Phase 0A discovery.

### 1. Visual Gallery

| Field                      | Value                                                                                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Legacy Route**           | `/visual-gallery/`                                                                                                                                                                                                                |
| **Mapping Class**          | LEGACY_PROJECT                                                                                                                                                                                                                    |
| **Status**                 | LIKELY                                                                                                                                                                                                                            |
| **Conceptual Destination** | `/work`                                                                                                                                                                                                                           |
| **Notes**                  | Gallery index maps to the work index. Individual project URLs within the gallery should preserve their identity — do not redirect all project URLs generically to `/work` if a corresponding project exists in the new structure. |

### 2. Product Design Firm USA

| Field                      | Value                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Legacy Route**           | `/product-design-firm-usa/`                                                                                                                                                                                    |
| **Mapping Class**          | LEGACY_SERVICE                                                                                                                                                                                                 |
| **Status**                 | LIKELY                                                                                                                                                                                                         |
| **Conceptual Destination** | `/capabilities`                                                                                                                                                                                                |
| **Notes**                  | Legacy service overview page maps to the new capabilities index. If specific sub-pages exist (e.g., individual service pages), they may map to individual capability detail pages at `/capabilities/[detail]`. |

### 3. Process

| Field                      | Value                                                                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Legacy Route**           | `/process-2/`                                                                                                                                                                                                                                  |
| **Mapping Class**          | LEGACY_CONTENT                                                                                                                                                                                                                                 |
| **Status**                 | LIKELY                                                                                                                                                                                                                                         |
| **Conceptual Destination** | `/process`                                                                                                                                                                                                                                     |
| **Notes**                  | The `-2` suffix suggests this was a duplicate or revised version of the process page in the old site. The conceptual destination is the new single process page. Content should be compared to ensure nothing from the legacy version is lost. |

### 4. Contact

| Field                      | Value                                                                                                                                                                                                                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Legacy Route**           | `/contact-2/`                                                                                                                                                                                                                                                                                        |
| **Mapping Class**          | LEGACY_UNKNOWN                                                                                                                                                                                                                                                                                       |
| **Status**                 | REQUIRES_OWNER_DECISION                                                                                                                                                                                                                                                                              |
| **Conceptual Destination** | `/contact` or `/start-project` — depending on intent                                                                                                                                                                                                                                                 |
| **Notes**                  | The owner must decide: is the legacy contact page intended for general contact inquiries (maps to `/contact`) or for project intake (maps to `/start-project`)? The `-2` suffix suggests this was a revised or duplicate contact form. Intent must be clarified before the mapping can be finalized. |

---

## Project Route Rules

These rules govern how legacy project URLs are handled during mapping.

1. **Preserve project identity.** Do not redirect project URLs generically to `/work` if a corresponding project exists in the new structure. Each project is a distinct entity.
2. **One-to-one mapping preferred.** If a legacy project maps to a new project, redirect to `/work/[new-slug]` — not to the work index.
3. **Missing projects require recovery.** If a legacy project has no new equivalent, status = `REQUIRES_CONTENT_RECOVERY`.
4. **Do not finalize 301 redirects yet.** All mappings are conceptual until content recovery and owner decisions are complete.

---

## Rules for All Mappings

- All mappings are conceptual only — they are not production redirects
- Do not finalize 301 redirects until content recovery and owner decisions are resolved
- REQUIRES_CONTENT_RECOVERY means old project page exists but content/media needs recovery before mapping to new project page
- REQUIRES_OWNER_DECISION means the owner must decide intent and destination
- UNKNOWN means the mapping cannot be determined without further investigation
- Unrecognized legacy routes should land on a 404 page with helpful navigation (primary nav, work, capabilities, contact) rather than a dead end

---

## Legacy Recovery Slot

The CMS and UX architecture must accommodate recovered old projects. This section defines the conceptual recovery state.

### RECOVERY_PENDING State

Projects entering the recovery pipeline receive the `RECOVERY_PENDING` state. This state has specific behavioral rules:

| Rule                         | Description                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------- |
| Do not publish               | Projects in this state are not visible on the public site                        |
| Do not appear in filters     | Excluded from work index filtering and browsing                                  |
| Retain known legacy URL      | The old URL is preserved in the system for future redirect mapping               |
| Retain known source name     | The original project name is retained as-is from the legacy source               |
| Await content/media recovery | Project remains in this state until content and media are recovered and verified |

### Recovery Slot Purpose

This state ensures that:

- Legacy projects are tracked and accounted for in the system
- They do not appear in the public experience prematurely
- Their legacy URLs are preserved for eventual redirect mapping
- Content and media recovery can proceed without time pressure
- The CMS architecture has a designated place for "known but not yet ready" projects

### Recovery Workflow (Conceptual)

```
Legacy project identified
    → RECOVERY_PENDING (legacy URL retained, name retained, not published)
    → Content/media recovered from legacy source
    → Content verified and updated to current standards
    → Project transitions to DRAFT
    → DRAFT reviewed and approved
    → Project transitions to PUBLISHED
    → Legacy URL redirect activated
```

---

## Additional Legacy Considerations

### Internal Search

- Do not include global site search at launch unless content volume justifies it
- Insights may gain search functionality later as article volume grows
- Portfolio filtering is more valuable than site-wide search initially
- The work index filtering system (by industry, capability, stage) serves the discovery function that search would otherwise provide for the portfolio

### Unmapped Legacy Routes

Any legacy route not identified in Phase 0A should be classified as:

| Class          | Status  | Destination                    |
| -------------- | ------- | ------------------------------ |
| LEGACY_UNKNOWN | UNKNOWN | `/404` with helpful navigation |

The 404 page should provide clear navigation options (primary nav, work, capabilities, contact) rather than a dead end.

---

## Summary

| #   | Legacy Route                | Class          | Status                  | Conceptual Destination         |
| --- | --------------------------- | -------------- | ----------------------- | ------------------------------ |
| 1   | `/visual-gallery/`          | LEGACY_PROJECT | LIKELY                  | `/work`                        |
| 2   | `/product-design-firm-usa/` | LEGACY_SERVICE | LIKELY                  | `/capabilities`                |
| 3   | `/process-2/`               | LEGACY_CONTENT | LIKELY                  | `/process`                     |
| 4   | `/contact-2/`               | LEGACY_UNKNOWN | REQUIRES_OWNER_DECISION | `/contact` or `/start-project` |

### Status Distribution

| Status                    | Count                                                                     |
| ------------------------- | ------------------------------------------------------------------------- |
| LIKELY                    | 3                                                                         |
| REQUIRES_CONTENT_RECOVERY | 0 (none identified yet — may emerge as more legacy routes are discovered) |
| REQUIRES_OWNER_DECISION   | 1                                                                         |
| UNKNOWN                   | 0 (none currently — unmapped routes default to UNKNOWN)                   |

Total known legacy routes from Phase 0A: **4**
