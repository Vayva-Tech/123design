# 06F — CMS Content Governance

## Content Provenance (section 52)

Important content may carry internal-only governance metadata:

| Field               | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| `evidenceState`     | Tracks whether claims in content are verified or unverified |
| `sourceNote`        | Internal note on where claims/data originated               |
| `ownerVerified`     | Whether the content owner has reviewed and approved         |
| `clientApproval`    | Whether the client has approved public display              |
| `lastVerifiedDate`  | Date the content was last confirmed accurate                |
| `verificationNotes` | Internal notes from verification process                    |

These are **editorial/governance fields**. They are **NOT displayed publicly**.

---

## Content Status (section 53)

Common content status values where appropriate:

| Status      | Meaning                                          |
| ----------- | ------------------------------------------------ |
| `DRAFT`     | Work in progress, not ready for review           |
| `REVIEW`    | Submitted for editorial or client review         |
| `READY`     | Approved, awaiting publication                   |
| `PUBLISHED` | Live and visible to the public                   |
| `ARCHIVED`  | Removed from public view, retained for reference |

**Public queries must enforce: `PUBLISHED` only.**

---

## Slug Governance (section 54)

Rules:

- Lowercase, kebab-case
- Stable after publication where possible
- No dates in project slugs
- No capability category nesting beyond locked IA
- Changing a published slug requires redirect creation

---

## Taxonomy Governance (section 123)

Industry/capability/stage values should use **references or controlled enums**.

Do not permit editors to type arbitrary variations like "Mech Eng", "Mechanical", "Mechanical Engineering Services" as separate tags. Taxonomy values must come from a controlled set to prevent fragmentation and inconsistency.

---

## Project Relationship Logic (section 124)

Related Work derivation order:

1. **Explicit editorial picks first** — editor manually selects related projects
2. **Controlled similarity fallback later if desired** — rule-based matching on shared industry/capability

Do not create opaque AI-generated recommendations. Relationships must be explainable and editorially controllable.

---

## Related Work Safety (section 125)

Related project queries must apply the **SAME public publication filter** as normal Work queries.

A client-review project must never leak through related content. Related work is public-facing content and inherits all publication approval requirements.

---

## Homepage Featured Projects (section 126)

Homepage featured projects should be **editorially selected** via CMS field:

- `featured` boolean/flag on project documents, OR
- A controlled ordered homepage selection in site settings

Do not automatically pick: latest, highest asset count, random project. Editorial control ensures the homepage represents the studio's current positioning.

---

## Homepage Hero Reel (section 127)

Hero reel selection should be **editorially controlled**.

CMS/config model may include:

| Field                  | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `poster`               | Static poster image for the hero video         |
| `desktop source(s)`    | Desktop-optimized video source(s)              |
| `mobile poster/source` | Mobile-optimized poster and video source       |
| `alt/context text`     | Descriptive text for accessibility and context |
| `publication approval` | Approval state for public display              |

Do not allow an editor to select all 44 raw clips. Hero reel is a curated, approved subset.

---

## Navigation Content (section 128)

Primary nav architecture remains **controlled in code** from Phase 1.

CMS may supply limited content:

- Labels
- Optional featured project in mega menu
- Footer utility links

Do not allow editors to restructure the fundamental IA accidentally. Navigation structure is an architectural decision, not an editorial one.

---

## Legal Pages (section 129)

Legal copy may live in CMS or controlled content files.

Routes remain fixed:

- `/privacy`
- `/terms`
- `/accessibility`

No legal copy should be invented during implementation. Legal text must come from verified sources.

---

## Content Migration Strategy (section 144)

Do not bulk-import legacy content automatically.

Migration path:

```
Verified structured data → Transform → Validation → Editorial review → CMS import
```

Do not import:

- Copied legacy SEO text
- Unverified metrics
- Unverified client claims
- Junk template content

---

## Media Migration Strategy (section 145)

Only **approved shortlist media** proceeds toward production. Raw archive remains reference only.

Future import script should preserve:

- Source asset ID
- Source filename
- Project association
- Approval metadata where useful

---

## CMS Role Governance (section 142)

Expected role separation where supported operationally:

| Role      | Responsibility                                   |
| --------- | ------------------------------------------------ |
| Developer | Schema, technical configuration, deployment      |
| Editor    | Content creation, editing, review submission     |
| Publisher | Final approval and publication of sensitive work |

Only appropriate roles should publish approval-sensitive work.

Do not attempt custom authorization implementation before actual Sanity configuration.

---

## Data Portability (section 143)

Schema design must use **meaningful domain concepts**. Avoid Sanity-specific content structures that make migration unnecessarily difficult.

Portable Text is acceptable for rich text. Core project metadata remains structured.

---

## Document Status

**PHASE 3 — SECTION 06F: LOCKED**
