# 04I — Content Requirements Matrix

> For every page and module in the Phase 1 scope: what content is required, what is optional, who owns it, its current verification status, and what happens when content is absent. No module renders placeholder content. Absence means graceful removal, not fabricated filler.

---

## Status Definitions

| Status               | Meaning                                                                                           | Action                                  |
| -------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **READY**            | Content verified and available, or framework copy direction locked with no factual claims at risk | Proceed to implementation               |
| **OWNER_VERIFY**     | Content exists or is directionally correct but needs owner approval before publication            | Track for owner review before launch    |
| **CONTENT_REQUIRED** | Content does not yet exist and must be created before the module can render                       | Block until content is provided         |
| **CLIENT_APPROVAL**  | Content requires client sign-off before publication                                               | Block until client approves             |
| **RECOVERY_PENDING** | Content depends on legacy site recovery and has not yet been retrieved                            | Block until legacy content is recovered |

---

## 1. Homepage Hero

| Field            | Requirement                                            | Status |
| ---------------- | ------------------------------------------------------ | ------ |
| Headline         | "FROM IDEA TO PRODUCTION"                              | READY  |
| Subheadline      | Framework support copy — final text refined in Phase 2 | READY  |
| Background media | Video reel or fallback poster image                    | READY  |
| Primary CTA      | START A PROJECT button                                 | READY  |
| Secondary CTA    | Schedule conversation link                             | READY  |
| Eyebrow text     | "PRODUCT DEVELOPMENT . ENGINEERING . MANUFACTURING"    | READY  |

**Content Owner:** Site owner
**Verification Status:** READY — headline locked; support copy direction approved
**If Absent:** Page has no identity. The hero is the primary conversion surface and the first thing every visitor sees. This module cannot be absent.

---

## 2. Homepage Featured Work

| Field                      | Requirement                                         | Status       |
| -------------------------- | --------------------------------------------------- | ------------ |
| 2-3 PUBLISHED projects     | Projects with hero images, summaries, and key facts | OWNER_VERIFY |
| Featured project selection | SPOONY, DBLL, Bath Tray/Caddy as candidates         | OWNER_VERIFY |

**Candidate Projects:**

- **SPOONY** — PUBLISHED-CANDIDATE, likely the feature project. Individual fields within SPOONY vary in verification status.
- **DBLL** — PUBLISHED-CANDIDATE, strong engineering depth.
- **Bath Tray / Caddy** — PUBLISHED-CANDIDATE, good manufacturing evidence.

**Content Owner:** Site owner
**Verification Status:** OWNER_VERIFY — candidates identified but need final owner approval before publication
**If Absent:** Hide block entirely. No placeholder projects. No mock case studies. No stock imagery presented as real work. The homepage functions without this block; it simply loses proof.

---

## 3. Homepage Metrics

| Field            | Requirement                                                     | Status           |
| ---------------- | --------------------------------------------------------------- | ---------------- |
| Verified metrics | Specific numbers (projects delivered, years in operation, etc.) | CONTENT_REQUIRED |

**Content Owner:** Site owner
**Verification Status:** CONTENT_REQUIRED — no verified metrics exist yet. Every number must come from the owner with evidence.
**If Absent:** Hide block entirely. No fabricated numbers. No "500+ projects delivered" without evidence. No approximate or rounded figures without owner confirmation. The homepage functions without this block.

---

## 4. Homepage Testimonials

| Field                 | Requirement                                                  | Status           |
| --------------------- | ------------------------------------------------------------ | ---------------- |
| Verified testimonials | Attributed quotes from real clients with explicit permission | CONTENT_REQUIRED |

**Content Owner:** Site owner
**Verification Status:** CONTENT_REQUIRED — no verified testimonials exist yet. Each testimonial requires: the quote text, the attributed person's name, their role, their company, and their explicit permission for publication.
**If Absent:** Hide block entirely. No fabricated quotes. No anonymous "Client" testimonials. No paraphrased or invented feedback. The homepage functions without this block.

---

## 5. Homepage Client Logos

| Field                 | Requirement                                                       | Status           |
| --------------------- | ----------------------------------------------------------------- | ---------------- |
| Approved client logos | Real logos from real clients with explicit publication permission | CONTENT_REQUIRED |

**Content Owner:** Site owner
**Verification Status:** CONTENT_REQUIRED — no approved client logos exist yet. Each logo requires the client's explicit permission for use on the website.
**If Absent:** Hide block entirely. No fake logos. No stock company names. No "trusted by" claims without evidence. The homepage functions without this block.

---

## 6. Project Detail — SPOONY

| Field              | Requirement                                                | Status                           |
| ------------------ | ---------------------------------------------------------- | -------------------------------- |
| Title              | Project name                                               | OWNER_VERIFY                     |
| Summary            | Verified project overview                                  | OWNER_VERIFY                     |
| Hero image         | High-quality project photography                           | OWNER_VERIFY                     |
| Key facts          | Industry, services, materials, timeline                    | OWNER_VERIFY                     |
| Additional modules | Challenge, engineering, prototyping, manufacturing, result | OWNER_VERIFY (varies per module) |

**Content Owner:** Site owner
**Verification Status:** OWNER_VERIFY — SPOONY is the strongest candidate for featured project status. Individual content modules vary; some may be READY while others need owner input.
**If Absent:** Cannot publish. A project detail page without title, summary, images, and key facts is not a project page. It must not go live in an incomplete state.

---

## 7. Project Detail — DBLL

| Field              | Requirement                                                | Status                           |
| ------------------ | ---------------------------------------------------------- | -------------------------------- |
| Title              | Project name                                               | OWNER_VERIFY                     |
| Summary            | Verified project overview                                  | OWNER_VERIFY                     |
| Hero image         | High-quality project photography                           | OWNER_VERIFY                     |
| Key facts          | Industry, services, materials, timeline                    | OWNER_VERIFY                     |
| Additional modules | Challenge, engineering, prototyping, manufacturing, result | OWNER_VERIFY (varies per module) |

**Content Owner:** Site owner
**Verification Status:** OWNER_VERIFY — DBLL demonstrates strong engineering depth and is a candidate for publication.
**If Absent:** Cannot publish. Same requirements as SPOONY.

---

## 8. Project Detail — Bath Tray / Caddy

| Field              | Requirement                                                | Status                           |
| ------------------ | ---------------------------------------------------------- | -------------------------------- |
| Title              | Project name                                               | OWNER_VERIFY                     |
| Summary            | Verified project overview                                  | OWNER_VERIFY                     |
| Hero image         | High-quality project photography                           | OWNER_VERIFY                     |
| Key facts          | Industry, services, materials, timeline                    | OWNER_VERIFY                     |
| Additional modules | Challenge, engineering, prototyping, manufacturing, result | OWNER_VERIFY (varies per module) |

**Content Owner:** Site owner
**Verification Status:** OWNER_VERIFY — Bath Tray/Caddy demonstrates manufacturing capability and is a candidate for publication.
**If Absent:** Cannot publish. Same requirements as all project detail pages.

---

## 9. Project Detail — IPM

| Field           | Requirement                    | Status           |
| --------------- | ------------------------------ | ---------------- |
| Title           | Project name                   | CONTENT_REQUIRED |
| Summary         | Verified project overview      | CONTENT_REQUIRED |
| Images          | Project photography            | CONTENT_REQUIRED |
| Client approval | Explicit permission to publish | CONTENT_REQUIRED |

**Content Owner:** Site owner + client
**Verification Status:** CONTENT_REQUIRED — IPM requires both owner content preparation and client approval before publication. This is a dual-dependency block.
**If Absent:** Remains DRAFT. The project cannot be published without all required content and explicit client permission. It stays in draft state and does not appear in any public listing or index.

---

## 10. Project Detail — Adagio

| Field           | Requirement                    | Status          |
| --------------- | ------------------------------ | --------------- |
| Title           | Project name                   | CLIENT_APPROVAL |
| Summary         | Verified project overview      | CLIENT_APPROVAL |
| Images          | Project photography            | CLIENT_APPROVAL |
| Client approval | Explicit permission to publish | CLIENT_APPROVAL |

**Content Owner:** Client (primary); site owner (coordination)
**Verification Status:** CLIENT_APPROVAL — Adagio content depends on client sign-off. The client controls whether and how this project is published.
**If Absent:** Remains CLIENT_REVIEW. The project stays in review state and does not appear in any public listing. No content from this project is used anywhere on the site until approval is received.

---

## 11. Medical Industry Page

| Field                   | Requirement                                                                                  | Status            |
| ----------------------- | -------------------------------------------------------------------------------------------- | ----------------- |
| Industry description    | Overview of medical device development context                                               | READY             |
| Relevant capabilities   | Cross-links to applicable capabilities (Product Development, ME, EE, Testing, Manufacturing) | READY             |
| Careful language review | Regulatory awareness without certification claims                                            | READY (framework) |
| Related projects        | Published projects in medical industry                                                       | HOLD              |

**Content Owner:** Site owner
**Verification Status:** READY — framework content is prepared with careful, measured language appropriate for a regulated industry. No unverified regulatory claims.
**Projects Status:** HOLD — no medical projects are approved for publication yet. The project block on this page must not render until at least one medical project reaches PUBLISHED state with client approval.
**If Absent (projects):** Hide project block entirely. The industry page functions with framework content alone. No placeholder projects. No "coming soon" text.

---

## 12. Defense Industry Page

| Field                   | Requirement                                             | Status            |
| ----------------------- | ------------------------------------------------------- | ----------------- |
| Industry description    | Overview of defense/security development context        | READY             |
| Relevant capabilities   | Cross-links to applicable capabilities                  | READY             |
| Careful language review | Confidentiality-aware language without clearance claims | READY (framework) |
| Related projects        | Published projects in defense industry                  | HOLD              |

**Content Owner:** Site owner
**Verification Status:** READY — framework content is prepared with careful, discreet language appropriate for the defense sector. No unverified clearance or relationship claims.
**Projects Status:** HOLD — no defense projects are approved for publication yet. Defense projects require especially careful review due to classification and sensitivity concerns.
**If Absent (projects):** Hide project block entirely. The industry page functions with framework content alone. No placeholder projects. No references to specific defense work without explicit owner and client approval.

---

## 13. Capability Pages (10 pages)

| Field                | Requirement                                               | Status                                            |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------- |
| Purpose              | What this capability solves                               | READY (framework)                                 |
| Subtopics            | Services, deliverables, methods, tools, outputs           | READY (framework)                                 |
| Related capabilities | Cross-links to adjacent capabilities                      | READY (structural)                                |
| Lifecycle fit        | How this capability maps to development stages            | READY (framework)                                 |
| Process relationship | How this capability connects to the development process   | READY (framework)                                 |
| CTA                  | Start a project prompt                                    | READY                                             |
| Related projects     | Links to PUBLISHED projects demonstrating this capability | CONTENT_REQUIRED (depends on project publication) |

**The 10 capability pages:**

1. Product Development
2. Industrial Design
3. Mechanical Engineering
4. Electrical Engineering
5. Prototyping
6. Testing & Validation
7. Tooling
8. Manufacturing
9. Design for Manufacturing (DFM)
10. Composites & Advanced Materials

**Content Owner:** Site owner (framework content); site owner (project-specific evidence)
**Verification Status:** READY for structure and framework copy. CONTENT_REQUIRED for project-specific evidence and case study links.
**If Absent (related projects):** Hide related projects block on each capability page. The capability page functions with framework content alone. No placeholder projects. No "example coming soon" text. Projects can be added incrementally as they reach PUBLISHED state.

---

## 14. Process Page

| Field                  | Requirement                                            | Status |
| ---------------------- | ------------------------------------------------------ | ------ |
| 5 lifecycle stages     | CON, EVT, DVT, PVT, PRODUCTION — each with description | READY  |
| Stage descriptions     | Framework descriptions of each phase                   | READY  |
| Disclaimer             | Process is a framework; actual engagement varies       | READY  |
| Process media          | Supporting images/video from local prototyping gallery | READY  |
| "Your Process or Ours" | Integration messaging                                  | READY  |
| CTA                    | Start a project prompt                                 | READY  |

**Content Owner:** Site owner
**Verification Status:** READY — the process page describes the development framework, which is a core differentiator. Framework descriptions are locked.
**Process Media:** Use the local prototyping gallery (18 verified assets from Phase 0B.3 audit). If specific process images are unavailable, use available process images from the archive.
**If Absent (media):** Use available process images. The page functions without media, but visual evidence of the process significantly strengthens the page. No stock photography of manufacturing or prototyping.

---

## 15. About Page

| Field                 | Requirement                                         | Status           |
| --------------------- | --------------------------------------------------- | ---------------- |
| Philosophy            | Design and engineering philosophy, founding purpose | READY            |
| Team/facility content | Team member profiles, facility description          | OWNER_VERIFY     |
| Integrated model      | Explanation of the integrated delivery model        | READY            |
| How teams collaborate | Collaboration approach description                  | READY            |
| Metrics               | Verified firm metrics                               | CONTENT_REQUIRED |
| Testimonials          | Verified client testimonials                        | CONTENT_REQUIRED |
| Client logos          | Approved client logos                               | CONTENT_REQUIRED |
| Locations             | Office/studio locations                             | OWNER_VERIFY     |
| CTA                   | Start a project prompt                              | READY            |

**Content Owner:** Site owner (team, locations, metrics); site team (philosophy, model)
**Verification Status:** READY for required modules (philosophy, model, collaboration). OWNER_VERIFY for team info and locations. CONTENT_REQUIRED for metrics, testimonials, and logos.
**If Absent (conditional blocks):**

- **Metrics:** Hide metrics block. No fabricated numbers.
- **Testimonials:** Hide testimonials block. No fabricated quotes.
- **Client logos:** Hide logos block. No fake logos.
- **Team info:** Hide team block. The About page functions with philosophy and model content alone.
- **Locations:** Show only verified location data. No speculative addresses.

---

## 16. Start Project Funnel

| Field                 | Requirement                         | Status                       |
| --------------------- | ----------------------------------- | ---------------------------- |
| 8-step form structure | Multi-step form with defined stages | READY (architecture defined) |
| Progress indicator    | Visual step progress                | READY (structural)           |
| Validation            | Inline and summary validation       | READY (structural)           |
| Budget ranges         | Specific budget tier options        | CONTENT_REQUIRED             |

**Content Owner:** Development (structure); site owner (budget ranges)
**Verification Status:** READY for architecture and structure. CONTENT_REQUIRED for budget range values — the owner must define the budget tiers and their ranges.
**If Absent:** Form doesn't work. This is the primary conversion surface. The 8-step structure is architecturally defined and can proceed to implementation. Budget ranges can be added before go-live; the form can function with placeholder-free structure even before budget tiers are finalized.

---

## 17. Contact Page

| Field                 | Requirement                                       | Status       |
| --------------------- | ------------------------------------------------- | ------------ |
| Verified contact data | Email, phone, address — only verified information | OWNER_VERIFY |
| Start Project prompt  | Link/prompt to begin a project                    | READY        |

**Content Owner:** Site owner
**Verification Status:** OWNER_VERIFY — office details and contact information are unresolved. Every piece of contact data must be explicitly confirmed by the owner before publication.
**If Absent:** Show only available verified data. If no contact data is verified, show the Start Project prompt only. Do not display unverified contact information. Do not publish speculative office locations, phone numbers, or email addresses. Incorrect contact information is worse than no contact information.

---

## 18. Legacy Projects

| Field              | Requirement                                            | Status           |
| ------------------ | ------------------------------------------------------ | ---------------- |
| Recovered content  | Project text, descriptions, key facts from legacy site | RECOVERY_PENDING |
| Recovered media    | Project images, video from legacy site                 | RECOVERY_PENDING |
| Owner verification | Confirmation that recovered content is still accurate  | RECOVERY_PENDING |
| URL mapping        | Legacy URL to new URL redirects                        | RECOVERY_PENDING |

**Content Owner:** Site owner
**Verification Status:** RECOVERY_PENDING — content depends on legacy site recovery. No legacy project content has been recovered or verified yet.
**If Absent:** Do not publish legacy projects. Retain legacy URL mappings so that any external links to legacy project pages redirect appropriately (to the Work index or a 404 with helpful navigation). Legacy projects remain unpublished until content is recovered, verified, and approved.

---

## Content Blockers Summary

The following items must be resolved before the site can launch:

### Critical Blockers (site cannot launch without these)

1. **At least 1 PUBLISHED project** — The Work index, Featured Work block, and all project-dependent modules require at least one project in PUBLISHED state. Without this, the portfolio is empty.
2. **Legal content** — Privacy Policy and Terms of Use must be provided by the owner or legal counsel. This is a legal requirement, not optional.
3. **Verified contact data** — At minimum, an email address must be verified for the Contact page.

### High-Priority Items (significantly degrade the site if absent)

4. **OWNER_VERIFY project approvals** — SPOONY, DBLL, and Bath Tray/Caddy need final owner approval to reach PUBLISHED state.
5. **Budget ranges** — The Start Project form needs budget tier values to function as a qualification tool.
6. **Team/facility content** — The About page needs team information to feel human and credible.

### Medium-Priority Items (site functions without these, but they add credibility)

7. **Metrics** — Verified metrics for the homepage and About page.
8. **Testimonials** — Verified client testimonials with attribution and permission.
9. **Client logos** — Approved client logos with publication permission.
10. **FAQ answers** — If FAQ is included in navigation, answers must be verified by the owner. Do not carry forward claims from the legacy site without verification.

### Items That Can Be Added Incrementally

11. **Additional projects** — IPM, Adagio, and other projects can be published as they reach approval.
12. **Insights articles** — No articles exist yet; the Insights index shows an empty state until content is created.
13. **Related projects on capability/industry pages** — These populate automatically as projects reach PUBLISHED state.

---

## Module Rendering Rules

These rules govern how the site behaves when content is absent:

1. **Never render placeholder content.** No "Coming soon," no "Example placeholder," no stock imagery presented as real work.
2. **Hide the block entirely.** If a module has no content, it does not render. The layout adjusts to accommodate the absence.
3. **No broken layouts.** Every page must function correctly with all optional blocks hidden. The page skeleton is designed to be resilient to content absence.
4. **No fabricated data.** No fake metrics, no invented testimonials, no speculative contact information, no placeholder projects.
5. **Communicate absence gracefully.** Empty states (e.g., Work index with no published projects) show a clear message explaining what will appear there, not an error or broken layout.
6. **Conditional blocks are tracked.** Every block with CONTENT_REQUIRED or OWNER_VERIFY status is tracked in the project management system. When content arrives, the block is activated.
