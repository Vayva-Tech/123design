# Route & Navigation Specification

> **Document role:** Defines every route in the 123.design site, its navigation behavior, indexability, audience targeting, conversion goals, content requirements, and the complete navigation system (desktop header, mobile navigation, mega menu, breadcrumbs, footer). This is the authoritative reference for routing and navigation implementation.

---

## 1. Route Table

33 routes total. Each route is defined by the following fields:

| Field                    | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| Route                    | URL path                                             |
| Page Type                | What kind of page this is                            |
| Nav Visibility           | Where this route appears in navigation               |
| Indexability             | Whether search engines should index this page        |
| Primary Audience         | Which audience segment(s) this page primarily serves |
| Primary Goal             | What this page must accomplish for the visitor       |
| Primary CTA              | The main call-to-action on this page                 |
| Secondary CTA            | Supporting call-to-action                            |
| Content Owner            | Who is responsible for this page's content           |
| Publication Requirements | What must be true before this page is accessible     |

---

### 1.1 — Homepage

| Field                        | Value                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------- |
| **Route**                    | `/`                                                                             |
| **Page Type**                | Homepage                                                                        |
| **Nav Visibility**           | Primary nav (logo)                                                              |
| **Indexability**             | Indexable                                                                       |
| **Primary Audience**         | All audiences (A, B, C, D, E)                                                   |
| **Primary Goal**             | Understand what 123.design does — establish trust, show proof, drive conversion |
| **Primary CTA**              | START A PROJECT                                                                 |
| **Secondary CTA**            | VIEW OUR WORK                                                                   |
| **Content Owner**            | Design/Product Lead                                                             |
| **Publication Requirements** | Always published                                                                |

---

### 1.2 — Work Index

| Field                        | Value                                                 |
| ---------------------------- | ----------------------------------------------------- |
| **Route**                    | `/work`                                               |
| **Page Type**                | Work Index                                            |
| **Nav Visibility**           | Primary nav                                           |
| **Indexability**             | Indexable                                             |
| **Primary Audience**         | A, B, C                                               |
| **Primary Goal**             | See proof of capability — browse curated product work |
| **Primary CTA**              | VIEW OUR WORK                                         |
| **Secondary CTA**            | Explore Capability                                    |
| **Content Owner**            | Design/Product Lead                                   |
| **Publication Requirements** | Only PUBLISHED projects displayed                     |

**Behavior:**

- Filterable by industry and capability.
- Grid of project cards (INDIVIDUAL_PROJECT and approved PROJECT_FAMILY only).
- Filters show only options that have PUBLISHED projects.
- Empty state: "No projects match this filter" with option to clear filters.

---

### 1.3 — Project Detail

| Field                        | Value                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| **Route**                    | `/work/[project]`                                                                          |
| **Page Type**                | Project Detail                                                                             |
| **Nav Visibility**           | Not in nav (reached from work grid, homepage, related work)                                |
| **Indexability**             | Indexable (when PUBLISHED)                                                                 |
| **Primary Audience**         | A, B, C                                                                                    |
| **Primary Goal**             | Evaluate specific project relevance — demonstrate real capability through project evidence |
| **Primary CTA**              | START A PROJECT                                                                            |
| **Secondary CTA**            | Explore Capability                                                                         |
| **Content Owner**            | Design/Product Lead                                                                        |
| **Publication Requirements** | Only PUBLISHED state projects are accessible                                               |

**Behavior:**

- Non-PUBLISHED projects return 404 (not a soft redirect).
- Content gating applies: no stage badge without evidence, no related work without published related projects, no manufacturing result without documentation.
- Project images: verified assets only. No stock imagery.

---

### 1.4 — Capabilities Index

| Field                        | Value                                                           |
| ---------------------------- | --------------------------------------------------------------- |
| **Route**                    | `/capabilities`                                                 |
| **Page Type**                | Capabilities Index                                              |
| **Nav Visibility**           | Primary nav                                                     |
| **Indexability**             | Indexable                                                       |
| **Primary Audience**         | B, C                                                            |
| **Primary Goal**             | Understand full capability range — breadth without overwhelming |
| **Primary CTA**              | START A PROJECT                                                 |
| **Secondary CTA**            | Explore Capability                                              |
| **Content Owner**            | Design/Product Lead                                             |
| **Publication Requirements** | Always published                                                |

**Behavior:**

- Displays all 10 capabilities grouped by mega menu categories (Strategy & Development, Design, Engineering, Prototype & Production).
- Each capability links to its detail page.
- May include representative project thumbnails per capability.

---

### 1.5 — Product Development

| Field                        | Value                                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/product-development`                                                                |
| **Page Type**                | Capability Detail                                                                                  |
| **Nav Visibility**           | Mega menu (Strategy & Development)                                                                 |
| **Indexability**             | Indexable                                                                                          |
| **Primary Audience**         | B, C                                                                                               |
| **Primary Goal**             | Understand product development depth — strongest SEO and conversion page, primary brand capability |
| **Primary CTA**              | START A PROJECT                                                                                    |
| **Secondary CTA**            | See Process                                                                                        |
| **Content Owner**            | Design/Product Lead                                                                                |
| **Publication Requirements** | Always published                                                                                   |

**Notes:** This is the "FROM IDEA TO PRODUCTION" manifesto page.

---

### 1.6 — Industrial Design

| Field                        | Value                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/industrial-design`                                                 |
| **Page Type**                | Capability Detail                                                                 |
| **Nav Visibility**           | Mega menu (Design)                                                                |
| **Indexability**             | Indexable                                                                         |
| **Primary Audience**         | B, C                                                                              |
| **Primary Goal**             | Understand industrial design capability — form, experience, aesthetics, usability |
| **Primary CTA**              | START A PROJECT                                                                   |
| **Secondary CTA**            | See Process                                                                       |
| **Content Owner**            | Design/Product Lead                                                               |
| **Publication Requirements** | Always published                                                                  |

---

### 1.7 — Mechanical Engineering

| Field                        | Value                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/mechanical-engineering`                                                    |
| **Page Type**                | Capability Detail                                                                         |
| **Nav Visibility**           | Mega menu (Engineering)                                                                   |
| **Indexability**             | Indexable                                                                                 |
| **Primary Audience**         | B, C                                                                                      |
| **Primary Goal**             | Understand mechanical engineering capability — mechanisms, structures, thermal, materials |
| **Primary CTA**              | START A PROJECT                                                                           |
| **Secondary CTA**            | See Process                                                                               |
| **Content Owner**            | Design/Product Lead                                                                       |
| **Publication Requirements** | Always published                                                                          |

---

### 1.8 — Electrical Engineering

| Field                        | Value                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/electrical-engineering`                                            |
| **Page Type**                | Capability Detail                                                                 |
| **Nav Visibility**           | Mega menu (Engineering)                                                           |
| **Indexability**             | Indexable                                                                         |
| **Primary Audience**         | B, C                                                                              |
| **Primary Goal**             | Understand electrical engineering capability — PCB, firmware, power, connectivity |
| **Primary CTA**              | START A PROJECT                                                                   |
| **Secondary CTA**            | See Process                                                                       |
| **Content Owner**            | Design/Product Lead                                                               |
| **Publication Requirements** | Always published                                                                  |

---

### 1.9 — Prototyping

| Field                        | Value                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/prototyping`                                                                    |
| **Page Type**                | Capability Detail                                                                              |
| **Nav Visibility**           | Mega menu (Prototype & Production)                                                             |
| **Indexability**             | Indexable                                                                                      |
| **Primary Audience**         | B, C                                                                                           |
| **Primary Goal**             | Understand prototyping depth — FDM, SLA/SLS, RTV, sheet metal, carbon fiber, finishing, builds |
| **Primary CTA**              | START A PROJECT                                                                                |
| **Secondary CTA**            | See Process                                                                                    |
| **Content Owner**            | Design/Product Lead                                                                            |
| **Publication Requirements** | Always published                                                                               |

---

### 1.10 — Testing & Validation

| Field                        | Value                                             |
| ---------------------------- | ------------------------------------------------- |
| **Route**                    | `/capabilities/testing-and-validation`            |
| **Page Type**                | Capability Detail                                 |
| **Nav Visibility**           | Mega menu (Prototype & Production)                |
| **Indexability**             | Indexable                                         |
| **Primary Audience**         | B, C                                              |
| **Primary Goal**             | Understand verification and validation capability |
| **Primary CTA**              | START A PROJECT                                   |
| **Secondary CTA**            | See Process                                       |
| **Content Owner**            | Design/Product Lead                               |
| **Publication Requirements** | Always published                                  |

---

### 1.11 — Product Animation

| Field                        | Value                                              |
| ---------------------------- | -------------------------------------------------- |
| **Route**                    | `/capabilities/product-animation`                  |
| **Page Type**                | Capability Detail                                  |
| **Nav Visibility**           | Mega menu (Design)                                 |
| **Indexability**             | Indexable                                          |
| **Primary Audience**         | B, C                                               |
| **Primary Goal**             | Demonstrate visualization and animation capability |
| **Primary CTA**              | START A PROJECT                                    |
| **Secondary CTA**            | See Process                                        |
| **Content Owner**            | Design/Product Lead                                |
| **Publication Requirements** | Always published                                   |

---

### 1.12 — Tooling

| Field                        | Value                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/tooling`                                                         |
| **Page Type**                | Capability Detail                                                               |
| **Nav Visibility**           | Mega menu (Prototype & Production)                                              |
| **Indexability**             | Indexable                                                                       |
| **Primary Audience**         | B, C                                                                            |
| **Primary Goal**             | Understand tooling development capability — molds, fixtures, production tooling |
| **Primary CTA**              | START A PROJECT                                                                 |
| **Secondary CTA**            | See Process                                                                     |
| **Content Owner**            | Design/Product Lead                                                             |
| **Publication Requirements** | Always published                                                                |

---

### 1.13 — Manufacturing

| Field                        | Value                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| **Route**                    | `/capabilities/manufacturing`                                                          |
| **Page Type**                | Capability Detail                                                                      |
| **Nav Visibility**           | Mega menu (Prototype & Production)                                                     |
| **Indexability**             | Indexable                                                                              |
| **Primary Audience**         | B, C                                                                                   |
| **Primary Goal**             | Demonstrate manufacturing competence — DFM, production, supplier coordination, quality |
| **Primary CTA**              | START A PROJECT                                                                        |
| **Secondary CTA**            | See Process                                                                            |
| **Content Owner**            | Design/Product Lead                                                                    |
| **Publication Requirements** | Always published                                                                       |

---

### 1.14 — Program Management

| Field                        | Value                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| **Route**                    | `/capabilities/program-management`                                                         |
| **Page Type**                | Capability Detail                                                                          |
| **Nav Visibility**           | Mega menu (Prototype & Production)                                                         |
| **Indexability**             | Indexable                                                                                  |
| **Primary Audience**         | B, C                                                                                       |
| **Primary Goal**             | Show structured execution capability — stage-gate, timeline, cross-functional coordination |
| **Primary CTA**              | START A PROJECT                                                                            |
| **Secondary CTA**            | See Process                                                                                |
| **Content Owner**            | Design/Product Lead                                                                        |
| **Publication Requirements** | Always published                                                                           |

---

### 1.15 — Process

| Field                        | Value                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| **Route**                    | `/process`                                                                                   |
| **Page Type**                | Process                                                                                      |
| **Nav Visibility**           | Primary nav                                                                                  |
| **Indexability**             | Indexable                                                                                    |
| **Primary Audience**         | B, C                                                                                         |
| **Primary Goal**             | Understand development framework — how 123.design takes a product from concept to production |
| **Primary CTA**              | START A PROJECT                                                                              |
| **Secondary CTA**            | See Process                                                                                  |
| **Content Owner**            | Design/Product Lead                                                                          |
| **Publication Requirements** | Always published                                                                             |

**Behavior:**

- Shows the "Your Process or Ours" engagement model.
- Lifecycle stages (CON → EVT → DVT → PVT → PRODUCTION).
- Process assets: prototyping imagery, making proof.

---

### 1.16 — Industries Index

| Field                        | Value                                                                    |
| ---------------------------- | ------------------------------------------------------------------------ |
| **Route**                    | `/industries`                                                            |
| **Page Type**                | Industries Index                                                         |
| **Nav Visibility**           | Primary nav                                                              |
| **Indexability**             | Indexable                                                                |
| **Primary Audience**         | C, D                                                                     |
| **Primary Goal**             | Understand industry experience — where 123.design has relevant expertise |
| **Primary CTA**              | START A PROJECT                                                          |
| **Secondary CTA**            | Explore Capability                                                       |
| **Content Owner**            | Design/Product Lead                                                      |
| **Publication Requirements** | Always published                                                         |

---

### 1.17 — Consumer Products

| Field                        | Value                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| **Route**                    | `/industries/consumer-products`                                                         |
| **Page Type**                | Industry Detail                                                                         |
| **Nav Visibility**           | Dropdown (Industries)                                                                   |
| **Indexability**             | Indexable                                                                               |
| **Primary Audience**         | C                                                                                       |
| **Primary Goal**             | Evaluate consumer products fit — show product development experience for consumer goods |
| **Primary CTA**              | START A PROJECT                                                                         |
| **Secondary CTA**            | Schedule Conversation                                                                   |
| **Content Owner**            | Design/Product Lead                                                                     |
| **Publication Requirements** | Always published                                                                        |

---

### 1.18 — Medical

| Field                        | Value                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| **Route**                    | `/industries/medical`                                                                    |
| **Page Type**                | Industry Detail                                                                          |
| **Nav Visibility**           | Dropdown (Industries)                                                                    |
| **Indexability**             | Indexable                                                                                |
| **Primary Audience**         | C                                                                                        |
| **Primary Goal**             | Evaluate medical fit — show medical industry experience with careful, compliant language |
| **Primary CTA**              | Schedule Conversation                                                                    |
| **Secondary CTA**            | START A PROJECT                                                                          |
| **Content Owner**            | Design/Product Lead                                                                      |
| **Publication Requirements** | Always published (careful language for medical)                                          |

**Notes:** No inferred customers, regulatory approvals, certifications, or deployments. Capability statements only.

---

### 1.19 — Defense & Security

| Field                        | Value                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------- |
| **Route**                    | `/industries/defense-security`                                                |
| **Page Type**                | Industry Detail                                                               |
| **Nav Visibility**           | Dropdown (Industries)                                                         |
| **Indexability**             | Indexable                                                                     |
| **Primary Audience**         | C                                                                             |
| **Primary Goal**             | Evaluate defense fit — show defense/security experience with careful language |
| **Primary CTA**              | Schedule Conversation                                                         |
| **Secondary CTA**            | START A PROJECT                                                               |
| **Content Owner**            | Design/Product Lead                                                           |
| **Publication Requirements** | Always published (careful language for defense)                               |

**Notes:** No inferred government contracts, classified work, or deployments. Capability statements only.

---

### 1.20 — Electronics

| Field                        | Value                                                              |
| ---------------------------- | ------------------------------------------------------------------ |
| **Route**                    | `/industries/electronics`                                          |
| **Page Type**                | Industry Detail                                                    |
| **Nav Visibility**           | Dropdown (Industries)                                              |
| **Indexability**             | Indexable                                                          |
| **Primary Audience**         | C                                                                  |
| **Primary Goal**             | Evaluate electronics fit — show electronics development experience |
| **Primary CTA**              | START A PROJECT                                                    |
| **Secondary CTA**            | Schedule Conversation                                              |
| **Content Owner**            | Design/Product Lead                                                |
| **Publication Requirements** | Always published                                                   |

---

### 1.21 — Industrial

| Field                        | Value                                                                      |
| ---------------------------- | -------------------------------------------------------------------------- |
| **Route**                    | `/industries/industrial`                                                   |
| **Page Type**                | Industry Detail                                                            |
| **Nav Visibility**           | Dropdown (Industries)                                                      |
| **Indexability**             | Indexable                                                                  |
| **Primary Audience**         | C                                                                          |
| **Primary Goal**             | Evaluate industrial fit — show industrial product and equipment experience |
| **Primary CTA**              | START A PROJECT                                                            |
| **Secondary CTA**            | Schedule Conversation                                                      |
| **Content Owner**            | Design/Product Lead                                                        |
| **Publication Requirements** | Always published                                                           |

---

### 1.22 — Emerging Technology

| Field                        | Value                                                                  |
| ---------------------------- | ---------------------------------------------------------------------- |
| **Route**                    | `/industries/emerging-technology`                                      |
| **Page Type**                | Industry Detail                                                        |
| **Nav Visibility**           | Dropdown (Industries)                                                  |
| **Indexability**             | Indexable                                                              |
| **Primary Audience**         | C                                                                      |
| **Primary Goal**             | Evaluate emerging tech fit — robotics, AI hardware, novel form factors |
| **Primary CTA**              | START A PROJECT                                                        |
| **Secondary CTA**            | Schedule Conversation                                                  |
| **Content Owner**            | Design/Product Lead                                                    |
| **Publication Requirements** | Always published                                                       |

---

### 1.23 — About

| Field                        | Value                                                          |
| ---------------------------- | -------------------------------------------------------------- |
| **Route**                    | `/about`                                                       |
| **Page Type**                | About                                                          |
| **Nav Visibility**           | Primary nav                                                    |
| **Indexability**             | Indexable                                                      |
| **Primary Audience**         | All audiences                                                  |
| **Primary Goal**             | Understand team and philosophy — human credibility, firm ethos |
| **Primary CTA**              | START A PROJECT                                                |
| **Secondary CTA**            | Schedule Conversation                                          |
| **Content Owner**            | Design/Product Lead                                            |
| **Publication Requirements** | Always published                                               |

---

### 1.24 — Insights Index

| Field                        | Value                                                             |
| ---------------------------- | ----------------------------------------------------------------- |
| **Route**                    | `/insights`                                                       |
| **Page Type**                | Insights Index                                                    |
| **Nav Visibility**           | Primary nav                                                       |
| **Indexability**             | Indexable                                                         |
| **Primary Audience**         | B, C                                                              |
| **Primary Goal**             | Find technical content — thought leadership, technical education  |
| **Primary CTA**              | Subscribe (if newsletter exists)                                  |
| **Secondary CTA**            | START A PROJECT                                                   |
| **Content Owner**            | Design/Product Lead                                               |
| **Publication Requirements** | Always published (page itself); only published articles displayed |

---

### 1.25 — Article Detail

| Field                        | Value                                                   |
| ---------------------------- | ------------------------------------------------------- |
| **Route**                    | `/insights/[article]`                                   |
| **Page Type**                | Article Detail                                          |
| **Nav Visibility**           | Not in nav (reached from insights index, related links) |
| **Indexability**             | Indexable                                               |
| **Primary Audience**         | B, C                                                    |
| **Primary Goal**             | Read technical content — build trust through expertise  |
| **Primary CTA**              | START A PROJECT                                         |
| **Secondary CTA**            | Explore Capability                                      |
| **Content Owner**            | Design/Product Lead                                     |
| **Publication Requirements** | Only published articles accessible                      |

---

### 1.26 — FAQ

| Field                        | Value                                                                 |
| ---------------------------- | --------------------------------------------------------------------- |
| **Route**                    | `/faq`                                                                |
| **Page Type**                | FAQ                                                                   |
| **Nav Visibility**           | Utility (footer, mobile nav)                                          |
| **Indexability**             | Indexable                                                             |
| **Primary Audience**         | All audiences                                                         |
| **Primary Goal**             | Find answers — address common questions about working with 123.design |
| **Primary CTA**              | START A PROJECT                                                       |
| **Secondary CTA**            | Contact                                                               |
| **Content Owner**            | Design/Product Lead                                                   |
| **Publication Requirements** | Always published                                                      |

---

### 1.27 — Start Project

| Field                        | Value                                                  |
| ---------------------------- | ------------------------------------------------------ |
| **Route**                    | `/start-project`                                       |
| **Page Type**                | Start Project (Conversion Funnel)                      |
| **Nav Visibility**           | Header CTA button                                      |
| **Indexability**             | Noindex                                                |
| **Primary Audience**         | A, B                                                   |
| **Primary Goal**             | Begin project inquiry — collect qualified project lead |
| **Primary CTA**              | Submit (form submission)                               |
| **Secondary CTA**            | Schedule Conversation                                  |
| **Content Owner**            | Design/Product Lead                                    |
| **Publication Requirements** | Always published                                       |

**Behavior:**

- Multi-step or single-page form.
- Qualifying questions to filter low-quality leads.
- Fields: project type, industry, stage, budget range, timeline, description, contact info.
- Form validation: inline errors, error summary on submit failure.
- Success state: redirects to `/start-project/complete`.

---

### 1.28 — Start Project Complete

| Field                        | Value                                                                   |
| ---------------------------- | ----------------------------------------------------------------------- |
| **Route**                    | `/start-project/complete`                                               |
| **Page Type**                | Completion State                                                        |
| **Nav Visibility**           | Not in nav                                                              |
| **Indexability**             | Noindex                                                                 |
| **Primary Audience**         | A, B                                                                    |
| **Primary Goal**             | Know what happens next — set expectations for response time and process |
| **Primary CTA**              | Schedule Conversation                                                   |
| **Secondary CTA**            | —                                                                       |
| **Content Owner**            | Design/Product Lead                                                     |
| **Publication Requirements** | Always published                                                        |

**Behavior:**

- Confirmation message after successful form submission.
- Expected response time.
- What to expect next in the process.
- Optional: link to schedule a conversation for immediate engagement.

---

### 1.29 — Contact

| Field                        | Value                                                                     |
| ---------------------------- | ------------------------------------------------------------------------- |
| **Route**                    | `/contact`                                                                |
| **Page Type**                | Contact                                                                   |
| **Nav Visibility**           | Utility (footer, mobile nav)                                              |
| **Indexability**             | Indexable                                                                 |
| **Primary Audience**         | D, E                                                                      |
| **Primary Goal**             | General inquiry — non-project contact (vendors, press, returning clients) |
| **Primary CTA**              | Contact                                                                   |
| **Secondary CTA**            | START A PROJECT                                                           |
| **Content Owner**            | Design/Product Lead                                                       |
| **Publication Requirements** | Always published                                                          |

**Behavior:**

- General contact information (verified email, possibly phone).
- Primary recommendation: "Starting a project? Use our project form" linking to `/start-project`.
- This page is for non-project inquiries: vendor inquiries, press, general questions, returning clients.

---

### 1.30 — Not Found

| Field                        | Value                                                      |
| ---------------------------- | ---------------------------------------------------------- |
| **Route**                    | `/404`                                                     |
| **Page Type**                | Error                                                      |
| **Nav Visibility**           | Not in nav                                                 |
| **Indexability**             | Noindex                                                    |
| **Primary Audience**         | All audiences                                              |
| **Primary Goal**             | Recover from broken link — guide visitor to useful content |
| **Primary CTA**              | VIEW OUR WORK                                              |
| **Secondary CTA**            | START A PROJECT                                            |
| **Content Owner**            | System                                                     |
| **Publication Requirements** | Always available                                           |

**Behavior:**

- Clear message: "Page not found" or equivalent.
- Navigation options: browse work, return home, use search (if implemented).
- Does not auto-redirect. User chooses where to go.

---

### 1.31 — Privacy Policy

| Field                        | Value                     |
| ---------------------------- | ------------------------- |
| **Route**                    | `/legal/privacy`          |
| **Page Type**                | Legal                     |
| **Nav Visibility**           | Footer only               |
| **Indexability**             | Noindex                   |
| **Primary Audience**         | All audiences             |
| **Primary Goal**             | Understand privacy policy |
| **Primary CTA**              | —                         |
| **Secondary CTA**            | —                         |
| **Content Owner**            | Legal                     |
| **Publication Requirements** | Always published          |

---

### 1.32 — Terms of Service

| Field                        | Value                       |
| ---------------------------- | --------------------------- |
| **Route**                    | `/legal/terms`              |
| **Page Type**                | Legal                       |
| **Nav Visibility**           | Footer only                 |
| **Indexability**             | Noindex                     |
| **Primary Audience**         | All audiences               |
| **Primary Goal**             | Understand terms of service |
| **Primary CTA**              | —                           |
| **Secondary CTA**            | —                           |
| **Content Owner**            | Legal                       |
| **Publication Requirements** | Always published            |

---

### Route Summary Table

| #   | Route                                  | Type               | Nav        | Index  | Primary CTA           | Secondary CTA         |
| --- | -------------------------------------- | ------------------ | ---------- | ------ | --------------------- | --------------------- |
| 1   | `/`                                    | Homepage           | Logo       | Yes    | START A PROJECT       | VIEW OUR WORK         |
| 2   | `/work`                                | Work Index         | Primary    | Yes    | VIEW OUR WORK         | Explore Capability    |
| 3   | `/work/[project]`                      | Project Detail     | —          | Yes*   | START A PROJECT       | Explore Capability    |
| 4   | `/capabilities`                        | Capabilities Index | Primary    | Yes    | START A PROJECT       | Explore Capability    |
| 5   | `/capabilities/product-development`    | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 6   | `/capabilities/industrial-design`      | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 7   | `/capabilities/mechanical-engineering` | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 8   | `/capabilities/electrical-engineering` | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 9   | `/capabilities/prototyping`            | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 10  | `/capabilities/testing-and-validation` | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 11  | `/capabilities/product-animation`      | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 12  | `/capabilities/tooling`                | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 13  | `/capabilities/manufacturing`          | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 14  | `/capabilities/program-management`     | Capability Detail  | Mega       | Yes    | START A PROJECT       | See Process           |
| 15  | `/process`                             | Process            | Primary    | Yes    | START A PROJECT       | See Process           |
| 16  | `/industries`                          | Industries Index   | Primary    | Yes    | START A PROJECT       | Explore Capability    |
| 17  | `/industries/consumer-products`        | Industry Detail    | Dropdown   | Yes    | START A PROJECT       | Schedule Conversation |
| 18  | `/industries/medical`                  | Industry Detail    | Dropdown   | Yes    | Schedule Conversation | START A PROJECT       |
| 19  | `/industries/defense-security`         | Industry Detail    | Dropdown   | Yes    | Schedule Conversation | START A PROJECT       |
| 20  | `/industries/electronics`              | Industry Detail    | Dropdown   | Yes    | START A PROJECT       | Schedule Conversation |
| 21  | `/industries/industrial`               | Industry Detail    | Dropdown   | Yes    | START A PROJECT       | Schedule Conversation |
| 22  | `/industries/emerging-technology`      | Industry Detail    | Dropdown   | Yes    | START A PROJECT       | Schedule Conversation |
| 23  | `/about`                               | About              | Primary    | Yes    | START A PROJECT       | Schedule Conversation |
| 24  | `/insights`                            | Insights Index     | Primary    | Yes    | Subscribe             | START A PROJECT       |
| 25  | `/insights/[article]`                  | Article Detail     | —          | Yes    | START A PROJECT       | Explore Capability    |
| 26  | `/faq`                                 | FAQ                | Utility    | Yes    | START A PROJECT       | Contact               |
| 27  | `/start-project`                       | Start Project      | Header CTA | **No** | Submit                | Schedule Conversation |
| 28  | `/start-project/complete`              | Completion         | —          | **No** | Schedule Conversation | —                     |
| 29  | `/contact`                             | Contact            | Utility    | Yes    | Contact               | START A PROJECT       |
| 30  | `/404`                                 | Error              | —          | **No** | VIEW OUR WORK         | START A PROJECT       |
| 31  | `/legal/privacy`                       | Legal              | Footer     | **No** | —                     | —                     |
| 32  | `/legal/terms`                         | Legal              | Footer     | **No** | —                     | —                     |

*Project detail pages are indexable only when the project status is PUBLISHED. Non-PUBLISHED projects return 404.

---

## 2. Header Behavior

### Desktop Header

| State                            | Background                               | Logo Variant                                  | Height  | CTA                     |
| -------------------------------- | ---------------------------------------- | --------------------------------------------- | ------- | ----------------------- |
| Homepage — initial (top of page) | Transparent, overlays hero               | Light or dark variant based on hero treatment | 72-84px | START A PROJECT visible |
| Homepage — scrolled              | Solid background, slight blur acceptable | Stable variant (consistent contrast)          | 72-84px | START A PROJECT visible |
| Interior pages — all states      | Solid background from load               | Stable variant                                | 72-84px | START A PROJECT visible |

**Desktop Header Rules:**

- Logo left, nav center, CTA right.
- Sticky positioning (remains visible on scroll).
- Compact, professional — not oversized.
- Navigation links clearly legible in both header states.
- Primary CTA (START A PROJECT) always visible and clickable.
- Transition on homepage scroll should be smooth (CSS transition, respects `prefers-reduced-motion`).
- Final height value confirmed in Design System phase. Expected range: 72-84px.

### Mobile Header

| Element      | Behavior                                                            |
| ------------ | ------------------------------------------------------------------- |
| Logo         | Left-aligned, links to `/`                                          |
| Menu trigger | Right-aligned hamburger/icon button                                 |
| Compact CTA  | Optional "Start Project" button if spacing allows (min 44px target) |

---

## 3. Footer

The footer appears on every page and provides global navigation fallback.

### Footer Contents

| Section       | Contents                                                                       |
| ------------- | ------------------------------------------------------------------------------ |
| CTA           | START A PROJECT — primary conversion CTA, visually prominent                   |
| Navigation    | Work, Capabilities, Process, Industries, About, Insights                       |
| Utility Links | Contact, FAQ                                                                   |
| Contact Info  | Verified email address. Phone only if verified. No fabricated contact details. |
| Legal Links   | Privacy Policy (`/legal/privacy`), Terms of Service (`/legal/terms`)           |
| Social Links  | Only verified, active social profiles. No placeholder links.                   |
| Copyright     | Current year, 123.design                                                       |

### Footer Rules

- Contact info: verified only. Do not invent phone numbers, addresses, or email addresses.
- Social links: verified only. Do not include social media links that are not actively maintained.
- The START A PROJECT CTA in the footer is the global fallback conversion point — it appears on every page.

---

## 4. Mobile Navigation

### Navigation Panel

When the menu trigger is activated:

- **Full-height panel** — covers the full viewport height.
- **Focus trapped** — Tab cycles within the panel. Focus does not escape to page content behind.
- **Escape closes** — pressing Escape closes the panel and returns focus to the menu trigger.
- **Body scroll locked** — the background page does not scroll while the panel is open.
- **44px touch targets minimum** — all nav items have minimum 44px touch/click target height.

### Navigation Order

```
WORK
CAPABILITIES
PROCESS
INDUSTRIES
ABOUT
INSIGHTS
---
START A PROJECT (primary CTA, visually distinguished)
---
FAQ (utility)
CONTACT (utility)
```

### Mobile Capabilities Expansion

When CAPABILITIES is expanded in mobile nav, shows the grouped list:

```
CAPABILITIES
  Strategy & Development
    Product Development
  Design
    Industrial Design
    Product Animation
  Engineering
    Mechanical Engineering
    Electrical Engineering
  Prototype & Production
    Prototyping
    Testing & Validation
    Tooling
    Manufacturing
    Program Management
  View All Capabilities →
```

### Mobile Industries Expansion

When INDUSTRIES is expanded in mobile nav, shows the flat list:

```
INDUSTRIES
  Consumer Products
  Medical
  Defense & Security
  Electronics
  Industrial
  Emerging Technology
  View All Industries →
```

### Mobile Navigation Requirements

| Requirement              | Implementation                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| Keyboard accessible      | Menu trigger is focusable. All nav items reachable via Tab. Enter/Space activates.                      |
| Focus trapped            | When open, Tab cycles within the panel. Focus does not escape to page content behind.                   |
| Escape closes            | Pressing Escape closes the panel and returns focus to the menu trigger.                                 |
| Body scroll locked       | When open, the background page does not scroll.                                                         |
| Active route indicated   | Current page's nav item has visible active state (text weight, underline, or similar — not color-only). |
| 44px minimum targets     | All nav items have minimum 44px touch/click target height.                                              |
| Reduced motion respected | If `prefers-reduced-motion: reduce`, panel appears/disappears without animation.                        |
| No deep nesting          | Maximum one level of expansion (e.g., Capabilities → sub-items). No accordion-within-accordion.         |

---

## 5. Mega Menu — Desktop

### CAPABILITIES Mega Menu

Triggered on hover or focus of the CAPABILITIES nav item. Grouped layout:

```
┌─────────────────────────────────────────────────────────────────┐
│  CAPABILITIES                                                   │
│                                                                 │
│  STRATEGY & DEVELOPMENT        DESIGN                           │
│  ┌─────────────────────┐      ┌─────────────────────┐          │
│  │ Product Development │      │ Industrial Design   │          │
│  │ End-to-end concept  │      │ Form, experience,   │          │
│  │ through production  │      │ aesthetics          │          │
│  └─────────────────────┘      ├─────────────────────┤          │
│                                │ Product Animation   │          │
│                                │ 3D visualization    │          │
│                                │ and animation       │          │
│                                └─────────────────────┘          │
│                                                                 │
│  ENGINEERING                   PROTOTYPE & PRODUCTION           │
│  ┌─────────────────────┐      ┌─────────────────────┐          │
│  │ Mechanical Eng.     │      │ Prototyping         │          │
│  │ Mechanisms, struct. │      │ Rapid iteration,    │          │
│  ├─────────────────────┤      │ functional protos   │          │
│  │ Electrical Eng.     │      ├─────────────────────┤          │
│  │ PCB, firmware,      │      │ Testing & Valid.    │          │
│  │ power, connectivity │      │ Verification,       │          │
│  └─────────────────────┘      │ compliance support  │          │
│                                ├─────────────────────┤          │
│                                │ Tooling             │          │
│                                │ Mold design, fixt.  │          │
│                                ├─────────────────────┤          │
│                                │ Manufacturing       │          │
│                                │ DFM, production,    │          │
│                                │ supplier coord.     │          │
│                                ├─────────────────────┤          │
│                                │ Program Management  │          │
│                                │ Stage-gate, timeline│          │
│                                └─────────────────────┘          │
│                                                                 │
│  [View All Capabilities →]                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Mega Menu Rules:**

- Each item has a short 1-line description.
- "View All Capabilities" link at bottom routes to `/capabilities`.
- Opens on hover (desktop) with slight delay to prevent accidental trigger.
- Opens on focus (keyboard) for accessibility.
- Closes on Escape, on mouse-leave (with delay), or on focus-leave.
- Respects `prefers-reduced-motion`.

### INDUSTRIES Dropdown

Simple dropdown — no grouped layout, no heavy media:

```
┌──────────────────────────┐
│  INDUSTRIES              │
│                          │
│  Consumer Products       │
│  Medical                 │
│  Defense & Security      │
│  Electronics             │
│  Industrial              │
│  Emerging Technology     │
│                          │
│  View All Industries →   │
└──────────────────────────┘
```

**Industries Dropdown Rules:**

- Simple list. No grouping needed (only 6 items).
- Do not overload with media or thumbnails.
- "View All Industries" link at bottom routes to `/industries`.
- Same interaction rules as mega menu (hover, focus, Escape, reduced-motion).

---

## 6. Breadcrumb Model

Breadcrumbs provide secondary navigation context on detail pages.

### Breadcrumb Patterns

| Page Context      | Breadcrumb                              |
| ----------------- | --------------------------------------- |
| Project Detail    | Home > Work > [Project Name]            |
| Capability Detail | Home > Capabilities > [Capability Name] |
| Industry Detail   | Home > Industries > [Industry Name]     |
| Article Detail    | Home > Insights > [Article Title]       |

### Breadcrumb Rules

- **Do NOT use breadcrumbs on the homepage.** The homepage is the root — no breadcrumb needed.
- **Do NOT use breadcrumbs on top-level collection pages** (`/work`, `/capabilities`, `/industries`, `/insights`). These are one level deep from home — breadcrumbs add no value.
- Each breadcrumb segment is a clickable link back to that level.
- The current page (last segment) is plain text, not a link.
- Breadcrumbs use `>` or `/` as separator.
- Breadcrumbs are hidden on mobile viewports where horizontal space is constrained. Alternative: show only "Back to [Parent]" link on mobile.
- Breadcrumbs are supplemental navigation — they do not replace the primary navigation or footer.

---

## 7. CTA Hierarchy

Three tiers of call-to-action across the entire site.

### PRIMARY: START A PROJECT

The single primary conversion action. Visually distinguished: filled button, prominent placement.

Appears in:

- Global header (every page)
- Homepage hero
- After featured work
- After lifecycle/process sections
- Capability page endings
- Industry page endings
- Case study endings
- About ending
- Footer (global fallback)

### SECONDARY: VIEW OUR WORK

Secondary action for visitors not ready to start a project. Visually subordinate: outlined or text button.

Appears in:

- Homepage hero
- Capability pages
- Industry pages
- Project detail pages
- 404 page

### TERTIARY

Lower-commitment actions for visitors exploring:

- **Explore Capability** — Links to a specific capability detail page from related context.
- **See Process** — Links to `/process` from capability or project context.
- **Schedule Conversation** — Lower-commitment alternative to Start Project. Used on medical, defense, about, and industry pages.

### CTA Placement Rules

- Do NOT insert aggressive CTA blocks after every section.
- CTA placement follows natural narrative breakpoints.
- The homepage has CTAs at hero (Section 02), after capabilities (Section 05), and final CTA (Section 16) — not between every section.
- Interior pages typically have one primary CTA at the page ending.

---

## 8. Amendment Log

| Date       | Amendment | Description                                                                                                                                                                                                                                                 |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-03-15 | Initial   | Route and navigation specification established                                                                                                                                                                                                              |
| 2026-09-17 | Rewrite   | Aligned to updated specification: 32 routes with `/legal/privacy`, `/legal/terms`, `/start-project/complete`. Added breadcrumb model. Updated mega menu groups. Corrected indexability for `/start-project` (noindex). Added all required fields per route. |
