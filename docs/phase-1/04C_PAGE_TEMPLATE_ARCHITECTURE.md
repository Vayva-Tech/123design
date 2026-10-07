# 04C — Page Template Architecture

Defines every page template for the 123.design website rebuild. For each template: required modules, optional modules, conditional rendering rules, CTA placement, and mobile display order.

123.design is a product development firm. The site showcases work and converts visitors into project leads. The primary conversion action is **START A PROJECT**.

---

## Cross-Template Rules

These rules apply to every template unless explicitly overridden.

1. **No empty modules.** Every module on every page must have real content or not render at all. No placeholder text, no "Coming soon", no "Lorem ipsum", no generic filler.
2. **No decorative modules.** Every module must earn its place. No fake charts, no generic insight cards, no AI suggestion widgets without context, no status badges without meaning.
3. **CTA consistency.** START A PROJECT is the universal primary CTA across all commercial templates. The only exceptions are Legal pages (no CTA) and 404 (recovery navigation).
4. **Mobile-first ordering.** Mobile order is defined per template and is the baseline layout. Desktop layouts enhance from this order.
5. **Conditional transparency.** When a module hides due to a conditional rule, the layout must not leave a visible gap. Adjacent modules close the space.
6. **No unverified claims.** No metrics, testimonials, client logos, certifications, or performance claims without explicit owner verification.
7. **Viewport-filling layout.** Root uses full viewport height. Only individual panels/sections scroll. No full-page scroll in the app shell.
8. **Text overflow safety.** All text containers: `min-width: 0`, `overflow-wrap: break-word`. No horizontal scroll in any panel.

---

## Template 1: Homepage

**Route:** `/`

**Purpose:** Establish what 123.design does, demonstrate capability through work, and convert visitors into project leads.

### Required Modules

| Order | Module              | Description                                                                                                                                                  |
| ----- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Hero                | Primary headline communicating the 123.design value proposition. Sub-headline. START A PROJECT CTA. Hero media (video or image).                             |
| 2     | What We Do          | Concise statement of 123.design as a product development firm. End-to-end: concept through production. Links to Capabilities and Process.                    |
| 3     | Featured Work       | One or more highlighted projects with media, project name, industry, and brief context. Links to project detail pages.                                       |
| 4     | Capability Overview | Summary of the 10 capabilities grouped into 4 categories (Strategy & Development, Design, Engineering, Prototype & Production). Links to Capabilities index. |
| 5     | Lifecycle Teaser    | Brief overview of the product development lifecycle (CON through Production). Links to Process page.                                                         |
| 6     | Industry Reach      | Summary of the 6 industries 123.design serves. Links to Industries index.                                                                                    |
| 7     | Final CTA           | Closing conversion block. START A PROJECT headline with supporting copy.                                                                                     |
| 8     | Footer              | Site-wide footer with navigation, contact info, legal links.                                                                                                 |

### Optional Modules

| Module               | Condition                                                  | Placement                                            |
| -------------------- | ---------------------------------------------------------- | ---------------------------------------------------- |
| Philosophy           | When founding philosophy content is owner-approved         | Between What We Do and Featured Work                 |
| Team/Facility Teaser | When verified team/facility content exists                 | Between Industry Reach and Final CTA                 |
| Insights Teaser      | When published insights exist                              | Between Industry Reach and Final CTA                 |
| Metrics              | **ONLY if verified.** No fabricated or unverified numbers. | Within Proof section or inline with relevant content |
| Testimonials         | **ONLY if verified.** No unapproved client quotes.         | Between Featured Work and Capability Overview        |

### Conditional Rules

- **Metrics:** Do NOT render without explicit owner verification of each number. No "20+ years" or "500 projects" unless verified. Module hides entirely if no verified metrics exist.
- **Testimonials:** Do NOT render without explicit owner approval of each quote and attribution. Module hides entirely if no approved testimonials exist.
- **Client Logos:** Do NOT render without explicit owner approval for each logo. No inferred or assumed client relationships. Module hides entirely if no approved logos exist.
- **Featured Work:** Must show only PUBLISHED projects. If no published projects exist, the module hides (though this would indicate a content readiness problem).

### CTA Position

| Position            | CTA                         | Context                                           |
| ------------------- | --------------------------- | ------------------------------------------------- |
| Hero                | START A PROJECT (primary)   | First conversion opportunity                      |
| After Featured Work | START A PROJECT (secondary) | Mid-page reinforcement after seeing work evidence |
| Final Section       | START A PROJECT (primary)   | Closing conversion block                          |

### Mobile Order

1. Hero (headline, sub-headline, CTA, media)
2. What We Do
3. Featured Work
4. Capability Overview
5. Lifecycle Teaser
6. Industry Reach
7. Optional modules (Philosophy, Team teaser, Insights teaser — in order if present)
8. Final CTA
9. Footer

CTA remains accessible throughout via sticky header or repeated placement.

---

## Template 2: Work Index

**Route:** `/work`

**Purpose:** Browseable portfolio of published projects with filtering by industry and capability.

### Required Modules

| Order | Module          | Description                                                                                                                                                  |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Page Header     | "WORK" label + short descriptive statement about the body of work.                                                                                           |
| 2     | Filter Controls | Filter by Industry and Capability. URL-addressable (filter state reflected in URL). Only show filter values that have at least one published project.        |
| 3     | Project Grid    | Cards for all published projects. **3 columns desktop, 2 columns tablet, 1 column mobile.** Each card: project image, name, industry label, capability tags. |

### Optional Modules

| Module     | Condition                            | Placement                               |
| ---------- | ------------------------------------ | --------------------------------------- |
| Intro Text | When editorial intro text is written | Between Page Header and Filter Controls |

### Filter Behavior

- **URL-addressable:** Each filter combination produces a unique URL (query parameters or path segments).
- **Dynamic availability:** Only show industry/capability values that have at least one published project. If no published projects exist for "Medical", do not show Medical as a filter option.
- **Combined filtering:** Filters combine (AND logic). Selecting "Consumer Products" + "Industrial Design" shows only projects matching both.
- **Empty state:** When a filter combination produces zero results, show a clear "No projects match this combination" message with a "Clear filters" action.

### Conditional Rules

- Only projects with status **PUBLISHED** appear in the grid.
- Filter values only render if at least one published project uses them.
- If fewer than 4 projects are published, the grid still renders (no minimum threshold for page visibility).

### CTA Position

| Position   | CTA             | Context                                                             |
| ---------- | --------------- | ------------------------------------------------------------------- |
| After grid | START A PROJECT | Placed after the project grid, visible after scrolling through work |

### Mobile Order

1. Page Header
2. Filter button (opens bottom sheet with filter options)
3. Project Grid (single column)
4. CTA

**Mobile filter behavior:** Filter button triggers a bottom sheet overlay. Bottom sheet contains Industry and Capability filter groups with apply/clear actions. Bottom sheet dismissible by tapping outside or pressing a close button.

---

## Template 3: Project Detail

**Route:** `/work/[project]`

**Purpose:** Tell the story of a specific project — from challenge through outcome — and convert readers into project leads.

### Two Display Modes

Every project renders in one of two modes based on available content:

| Mode                | Trigger                              | Content                                                                                                     |
| ------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **LIGHT PROJECT**   | Limited content available            | Hero + Title + Summary + Key Facts + Gallery + Related Capabilities + Related Projects + CTA + Next Project |
| **FULL CASE STUDY** | Rich content across multiple modules | All populated optional modules render. Full narrative with challenge, insight, development stages, results. |

### Required Modules

| Order | Module        | Description                                                                                                                     |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Hero          | Project title, summary paragraph (2-4 sentences), hero media (image or video).                                                  |
| 2     | Key Facts     | Industry, capabilities used, stage badges (ONLY if verified), year (ONLY if verified). Compact fact block, not a metadata wall. |
| 3     | Story Content | The project narrative — challenge, approach, solution, outcome. Renders as populated content sections.                          |

### Optional Modules

| Module                     | Condition                                                    | Notes                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Video                      | When project video exists                                    | Embedded or hosted video player                                                                                                                     |
| Gallery                    | When project images exist                                    | Image grid or carousel                                                                                                                              |
| Stage Badges               | **ONLY if verified**                                         | CON / EVT / DVT / PVT / Production badges on Key Facts. Do not show stages unless there is evidence the project actually passed through that stage. |
| Challenge/Insight Sections | When narrative content is populated                          | Distinct sections within the story                                                                                                                  |
| Development Stage Sections | When stage-specific content is documented                    | ID work, ME/EE work, prototyping, validation, tooling, manufacturing                                                                                |
| Results/Metrics            | **ONLY if verified**                                         | Quantified outcomes. No fabricated metrics.                                                                                                         |
| Related Capabilities       | Always (when capabilities can be determined)                 | Links to capabilities used in this project                                                                                                          |
| Related Projects           | When other published projects share industry or capabilities | 2-3 related project cards                                                                                                                           |
| Testimonial                | When a project-specific testimonial is owner-approved        | Quote with attribution                                                                                                                              |
| Next Project               | Always                                                       | Navigation to next published project                                                                                                                |

### Conditional Rules

- **Only render populated modules.** No empty labels. No placeholder paragraphs. No "Coming soon" sections.
- **No stage badges without verification.** If there is no evidence a project passed through EVT, do not show an EVT badge. Partial badges are acceptable (show only verified stages).
- **No metrics without verification.** Results/metrics module hides entirely if no verified numbers exist.
- **No metadata wall before imagery on mobile.** Key facts appear after hero media, not before.
- **LIGHT PROJECT mode** activates when content is limited. This is acceptable — not every project needs to be a full case study.

### CTA Position

| Position | CTA             | Context                                                   |
| -------- | --------------- | --------------------------------------------------------- |
| Ending   | START A PROJECT | After all content modules, before Next Project navigation |

### Mobile Order

1. Hero media (image/video — priority visual content first)
2. Title
3. Summary
4. Key Facts (industry, capabilities, verified stages, verified year)
5. Story content modules (in narrative order)
6. Gallery
7. Related Capabilities
8. Related Projects
9. CTA
10. Next Project

---

## Template 4: Capabilities Index

**Route:** `/capabilities`

**Purpose:** Overview of all 10 capabilities organized into 4 groups, demonstrating the integrated product development team.

### Required Modules

| Order | Module                   | Description                                                                                                       |
| ----- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 1     | Page Header              | Opening statement: "One integrated product-development team" or equivalent. Brief context for the capability set. |
| 2     | Grouped Capability Cards | All 10 capabilities displayed as cards, organized into 4 groups. Each card links to its detail page.              |
| 3     | CTA                      | START A PROJECT closing block.                                                                                    |

### Capability Groups

| Group                      | Capabilities                                              |
| -------------------------- | --------------------------------------------------------- |
| **STRATEGY & DEVELOPMENT** | Product Development, Program Management                   |
| **DESIGN**                 | Industrial Design, Product Animation                      |
| **ENGINEERING**            | Mechanical Engineering, Electrical Engineering            |
| **PROTOTYPE & PRODUCTION** | Prototyping, Testing & Validation, Tooling, Manufacturing |

### Card Content

Each capability card contains:

- Capability name
- 1-2 sentence value proposition (what this capability delivers for the client)
- Lifecycle relevance indicator (which stages this capability applies to: CON / EVT / DVT / PVT / Production)
- Related published work count or indicator (if any published projects use this capability)
- Link to capability detail page

### Conditional Rules

- None. All 10 capabilities always appear. This is not conditional on content availability — all capabilities are core offerings.

### CTA Position

| Position | CTA             | Context                    |
| -------- | --------------- | -------------------------- |
| Ending   | START A PROJECT | After all capability cards |

### Mobile Order

1. Page Header
2. Grouped capability cards (stacked, single column, grouped visually with group headings)
3. CTA

---

## Template 5: Capability Detail

**Route:** `/capabilities/[slug]`

**Purpose:** Deep dive into a specific capability — what it solves, who it serves, what it includes, and how it connects to other capabilities and real projects.

### Required Modules

| Order | Module               | Description                                                                                                                        |
| ----- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Page Header          | Capability name + headline communicating the value proposition.                                                                    |
| 2     | Purpose              | What this capability solves. The specific client problem it addresses.                                                             |
| 3     | Target User          | Who benefits from this capability. Persona-oriented description.                                                                   |
| 4     | Core Subtopics       | The specific disciplines, methods, or deliverables within this capability. Not a generic list — specific to 123.design's practice. |
| 5     | Related Capabilities | Cross-links to connected capabilities. Shows the integrated nature of the team.                                                    |
| 6     | Related Projects     | Published projects that demonstrate this capability. Only PUBLISHED projects.                                                      |
| 7     | CTA                  | START A PROJECT closing block.                                                                                                     |

### Optional Modules

| Module                | Condition                                          | Description                                                                                           |
| --------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Process Mapping       | When lifecycle mapping content is meaningful       | Shows where this capability fits in the CON-EVT-DVT-PVT-Production lifecycle. Visual or text mapping. |
| Industry Applications | When industry-specific applications are documented | Shows which industries this capability serves and how it applies differently across industries.       |

### Conditional Rules

- **No meaningless tool or logo walls.** Every tool or method mentioned must have context explaining why it matters.
- **Technical detail must be meaningful.** No filler content or generic descriptions. Content must reflect 123.design's actual practice, not textbook definitions.
- **Related projects must be genuine.** Only show projects where this capability was substantively used, not just tangentially touched.

### CTA Position

| Position | CTA                            | Context                                                                                         |
| -------- | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| Ending   | START A PROJECT (primary)      | After all content                                                                               |
| Inline   | Explore Capability (secondary) | Within the page, a secondary action to begin a project conversation specific to this capability |

### Mobile Order

1. Page Header
2. Purpose
3. Target User
4. Core Subtopics
5. Process Mapping (if present)
6. Industry Applications (if present)
7. Related Capabilities
8. Related Projects
9. CTA

---

## Template 6: Process

**Route:** `/process`

**Purpose:** Explain the product development lifecycle framework that 123.design operates within. This page is substantially more technical than the homepage — it speaks to engineering stakeholders.

### Required Modules

| Order | Module               | Description                                                                                                                                                                                                                                                                    |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Page Header          | "FROM IDEA TO PRODUCTION" or equivalent. Brief context.                                                                                                                                                                                                                        |
| 2     | 5 Lifecycle Stages   | Detailed description of each development stage: **CON** (Concept), **EVT** (Engineering Validation Test), **DVT** (Design Validation Test), **PVT** (Production Validation Test), **Production**. Each stage: what happens, what deliverables emerge, what decisions are made. |
| 3     | Your Process or Ours | Flexibility statement — 123.design can work within the client's existing process or bring its own framework. Client workflow integration.                                                                                                                                      |
| 4     | CTA                  | START A PROJECT closing block.                                                                                                                                                                                                                                                 |

### Optional Modules

| Module                            | Condition                                      | Description                                                                                                            |
| --------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Jira Integration Mention          | When workflow integration details are defined  | "Your workflow or ours" — mention of Jira, linear, or other project tool integration. Supporting detail, not headline. |
| Design Review Workflow            | When design review process is documented       | How design reviews are conducted, frequency, participants, deliverables.                                               |
| Requirements/BOM/Release Workflow | When release management details are documented | How requirements are tracked, BOM managed, releases coordinated.                                                       |

### Disclaimer

**Lifecycle describes FRAMEWORK, not per-project history.** The lifecycle content on this page describes the development methodology and framework that 123.design operates within. It does NOT claim that every project completed all stages. Language must reflect methodology, not universal completion.

Phrasing guidance:

- CORRECT: "Our development framework progresses through these stages"
- CORRECT: "Projects engage with these stages as needed"
- INCORRECT: "Every project completes all five stages"
- INCORRECT: "We take you through the entire lifecycle" (implies universal completion)

### Conditional Rules

- **Substantially more technical than the homepage.** This page speaks to engineering stakeholders. Content depth should match.
- **No stage claims without evidence.** Each stage description must reflect actual 123.design practice.

### CTA Position

| Position | CTA             | Context                   |
| -------- | --------------- | ------------------------- |
| Ending   | START A PROJECT | After all process content |

### Mobile Order

1. Page Header
2. Lifecycle overview (vertical visual map)
3. Stage sections (vertical stack, each stage as a distinct section)
4. Your Process or Ours
5. Optional modules (if present)
6. CTA

---

## Template 7: Industries Index

**Route:** `/industries`

**Purpose:** Overview of the 6 industries 123.design serves, demonstrating relevant experience across market segments.

### Required Modules

| Order | Module           | Description                                                                                                                                                                              |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Page Header      | Opening statement framing industry experience. "Where does 123.design have relevant experience?" or equivalent.                                                                          |
| 2     | 6 Industry Cards | One card per industry. Each card: industry name, short challenge statement (what this industry demands from product development), relevant capabilities teaser, link to industry detail. |
| 3     | CTA              | START A PROJECT closing block.                                                                                                                                                           |

### Card Content

Each industry card contains:

- Industry name
- Short industry challenge statement (1-2 sentences on what makes this industry distinct for product development)
- Relevant capabilities for that industry (subset of the 10, not all 10)
- Published work indicator (whether published projects exist for this industry)
- Link to industry detail page

### Conditional Rules

- None. All 6 industries always appear. This is not conditional on content availability.

### CTA Position

| Position | CTA             | Context                  |
| -------- | --------------- | ------------------------ |
| Ending   | START A PROJECT | After all industry cards |

### Mobile Order

1. Page Header
2. Industry cards (stacked, single column)
3. CTA

---

## Template 8: Industry Detail

**Route:** `/industries/[slug]`

**Purpose:** Deep dive into a specific industry — what it demands from product development, how 123.design's capabilities apply, and relevant project evidence.

### Required Modules

| Order | Module                    | Description                                                                                                               |
| ----- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1     | Page Header               | Industry name + context headline communicating understanding of the industry's product development demands.               |
| 2     | User Need                 | What companies in this industry need from a product development partner. The specific challenges and requirements.        |
| 3     | Relevant Capabilities     | Which of the 10 capabilities apply to this industry and how. Not all 10 — only the genuinely relevant subset.             |
| 4     | Industry-Specific Content | Development considerations, typical challenges, domain-specific factors that affect product development in this industry. |
| 5     | CTA                       | START A PROJECT or Schedule Conversation (see CTA Logic below).                                                           |

### Optional Modules

| Module              | Condition                                                      | Description                                                                                       |
| ------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Related Projects    | **ONLY if published projects exist for this industry.**        | Published projects in this industry. If no published projects exist, this module does not render. |
| Compliance Language | When compliance-language restrictions apply (Medical, Defense) | Careful, verified language about regulatory or security considerations. Only when owner-approved. |

### CTA Logic

| Industry            | Primary CTA               | Secondary CTA   | Rationale                                                                                                     |
| ------------------- | ------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| Consumer Products   | START A PROJECT           | —               | Standard conversion path                                                                                      |
| Medical             | **Schedule Conversation** | START A PROJECT | Lower commitment first step. Medical prospects may want to discuss before committing to a project funnel.     |
| Defense & Security  | **Schedule Conversation** | START A PROJECT | Lower commitment first step. Defense prospects may want to discuss confidentiality and fit before committing. |
| Electronics         | START A PROJECT           | —               | Standard conversion path                                                                                      |
| Industrial          | START A PROJECT           | —               | Standard conversion path                                                                                      |
| Emerging Technology | START A PROJECT           | —               | Standard conversion path                                                                                      |

### Conditional Rules

- **Medical:** Careful language around regulation. Do NOT claim FDA expertise, regulatory approvals, or certifications without owner verification. Never infer customers, deployments, or results. Language must be careful and accurate.
- **Defense & Security:** Careful language around confidentiality and security. Never infer government contracts, deployments, classified work, or security clearances. No specific program names or classifications without owner verification.
- **All industries:** Do not present unsupported compliance expertise. Do not claim certifications or standards compliance without verification.
- **Related projects:** Module hides entirely if no published projects exist for the industry. Do not show empty "No projects yet" states.

### Mobile Order

1. Page Header
2. User Need
3. Relevant Capabilities
4. Industry-Specific Content
5. Related Projects (if present)
6. CTA

---

## Template 9: About

**Route:** `/about`

**Purpose:** Explain why 123.design exists, how the team thinks about product development, and build trust through philosophy and transparency.

### Required Modules

| Order | Module                | Description                                                                                                             |
| ----- | --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1     | Page Header           | Why 123.design exists. Founding rationale. Not generic mission-statement prose.                                         |
| 2     | Philosophy            | Product-development philosophy. How the team thinks about development, what principles guide the work.                  |
| 3     | Team/Facility Content | Verified information about the team and/or facility. Only real people with confirmed roles. Only real facility details. |
| 4     | CTA                   | START A PROJECT closing block.                                                                                          |

### Optional Modules

| Module       | Condition                                                  | Placement                            |
| ------------ | ---------------------------------------------------------- | ------------------------------------ |
| Metrics      | **ONLY if verified.** No fabricated or unverified numbers. | Between Philosophy and Team/Facility |
| Testimonials | **ONLY if verified.** No unapproved client quotes.         | Between Team/Facility and CTA        |
| Client Logos | **ONLY if approved.** No inferred client relationships.    | Between Team/Facility and CTA        |

### Conditional Rules

- **No fake statistics.** Every number must be owner-verified.
- **No generic mission-statement prose.** Content must be specific to 123.design's actual founding story and philosophy.
- **No timeline filler content.** Do not create a timeline just because there is space. Only if meaningful milestones exist.
- **No unverified office locations.** If office details are unresolved, do not show speculative locations.
- **No unverified team members.** Only show people who have confirmed their role and consented to being listed.

### CTA Position

| Position | CTA                               | Context                                            |
| -------- | --------------------------------- | -------------------------------------------------- |
| Ending   | START A PROJECT (primary)         | After all content                                  |
| Ending   | Schedule Conversation (secondary) | Lower-commitment alternative alongside primary CTA |

### Mobile Order

1. Page Header (founding rationale)
2. Philosophy
3. Team/Facility Content
4. Optional modules (Metrics, Testimonials, Client Logos — if verified/approved)
5. CTA

---

## Template 10: Insights Index

**Route:** `/insights`

**Purpose:** Browseable list of published articles, insights, and thought leadership from the 123.design team.

### Required Modules

| Order | Module       | Description                                                                                                                            |
| ----- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Page Header  | Section introduction. What insights are and why they matter.                                                                           |
| 2     | Article List | List of published articles. Each card: title, category, date, excerpt, featured image, optional reading time. Links to article detail. |

### Optional Modules

| Module           | Condition                              | Notes                                                               |
| ---------------- | -------------------------------------- | ------------------------------------------------------------------- |
| Search           | **Later phase, NOT at launch.**        | Full-text search across articles. Deferred to post-launch.          |
| Category Filters | When category filtering is implemented | Filter articles by category. Similar to Work Index filter behavior. |

### Conditional Rules

- **Do not migrate weak legacy press posts automatically.** Only content meeting quality standards appears in the insights index. Legacy blog posts that do not meet current standards are excluded.
- **No global site search at launch.** Search is deferred. The insights index is a simple listing at launch.
- **Articles must have real content.** No stub articles, no placeholder posts.

### CTA Position

| Position | CTA             | Context               |
| -------- | --------------- | --------------------- |
| Ending   | START A PROJECT | After article listing |

### Mobile Order

1. Page Header
2. Article cards (stacked, single column)
3. CTA

---

## Template 11: Article Detail

**Route:** `/insights/[article]`

**Purpose:** Full article reading experience with contextual navigation to related content and conversion.

### Required Modules

| Order | Module     | Description                                                                   |
| ----- | ---------- | ----------------------------------------------------------------------------- |
| 1     | Breadcrumb | Navigation context: Insights > [Category] > [Article Title]                   |
| 2     | Title      | Article headline.                                                             |
| 3     | Author     | Article author name (only if verified author exists).                         |
| 4     | Date       | Publication date.                                                             |
| 5     | Content    | Full article body. Rich text with images, code blocks, pull quotes as needed. |
| 6     | CTA        | START A PROJECT closing block.                                                |

### Optional Modules

| Module               | Condition                                                        | Placement                 |
| -------------------- | ---------------------------------------------------------------- | ------------------------- |
| Related Articles     | When related articles exist                                      | After content, before CTA |
| Related Capabilities | When capabilities are contextually relevant to the article topic | After content, before CTA |

### Conditional Rules

- **Author fields render only when a verified author exists.** If no author is specified, the author module does not render.
- **Related articles must be genuine.** Show articles that are topically related, not just the most recent.
- **Related capabilities must be contextually relevant.** Do not show capabilities that are only tangentially mentioned.

### CTA Position

| Position | CTA                       | Context                                   |
| -------- | ------------------------- | ----------------------------------------- |
| Ending   | START A PROJECT (primary) | After article content and related modules |

### Mobile Order

1. Breadcrumb
2. Title
3. Author + Date (if author verified)
4. Content
5. Related Articles / Related Capabilities (if present)
6. CTA

---

## Template 12: FAQ

**Route:** `/faq`

**Purpose:** Answer common questions about working with 123.design, organized by topic. Reduce friction before the conversion step.

### Required Modules

| Order | Module                | Description                                             |
| ----- | --------------------- | ------------------------------------------------------- |
| 1     | Page Header           | FAQ introduction.                                       |
| 2     | Question/Answer Pairs | Expandable accordion sections organized by topic group. |
| 3     | CTA                   | START A PROJECT closing block.                          |

### Topic Groups

| Group                 | Scope                                                                    |
| --------------------- | ------------------------------------------------------------------------ |
| Getting Started       | How to begin working with 123.design, initial engagement, what to expect |
| Confidentiality / NDA | IP protection, NDAs, confidentiality practices                           |
| Process               | Development process questions, lifecycle, methodology                    |
| Timeline              | Typical project timelines, scheduling, phasing                           |
| Prototyping           | Prototyping methods, capabilities, lead times                            |
| Manufacturing         | Manufacturing-related questions, supplier coordination, DFM              |
| Engagement            | How engagements work, pricing model, communication                       |

### Conditional Rules

- **Price, minimum budget, timeline range, office location, geographic supplier claims** = `CONTENT_REQUIRED` / `OWNER_VERIFY`. These must not be published until owner-approved.
- **Do not carry old specific numbers automatically.** No "$15,000 minimum" or "8-12 week" claims from legacy content. All specific numbers require owner verification.
- **FAQ answers must be truthful and specific.** No vague deflections. If a question cannot be answered publicly, the answer should say so honestly rather than providing a non-answer.

### CTA Position

| Position | CTA                       | Context                      |
| -------- | ------------------------- | ---------------------------- |
| Ending   | START A PROJECT (primary) | After FAQ content            |
| Ending   | Contact (secondary)       | Lower-commitment alternative |

### Mobile Order

1. Page Header
2. Topic groups (stacked accordion items, expandable)
3. CTA

---

## Template 13: Start Project

**Route:** `/start-project`

**Purpose:** The primary conversion funnel. An 8-step progressive form that captures project information and converts visitors into leads.

### Required Modules

| Order | Module             | Description                                                                         |
| ----- | ------------------ | ----------------------------------------------------------------------------------- |
| 1     | Progress Indicator | Visual step indicator showing current step (1 of 8) and overall progress.           |
| 2     | Step Content       | The current step's form fields and labels. One step per view.                       |
| 3     | Navigation         | Back button (every step). Next/Continue button (steps 1-7). Submit button (step 8). |

### 8-Step Funnel

| Step | Title                  | Fields                                                                                                                                                                                                                        | Required?                                                   |
| ---- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 1    | WHAT ARE YOU BUILDING? | Category selection: Consumer Product, Medical Device, Electronics, Industrial Product, Defense/Security, Emerging Technology, Other                                                                                           | Required                                                    |
| 2    | WHERE ARE YOU NOW?     | Current stage: Idea, CON, EVT, DVT, PVT, Production, Not Sure                                                                                                                                                                 | Required                                                    |
| 3    | WHAT DO YOU NEED?      | Multi-select capabilities: Product Development, Industrial Design, Mechanical Engineering, Electrical Engineering, Prototyping, Testing/Validation, Tooling, Manufacturing, Program Management, Full Development (end-to-end) | Required (at least one)                                     |
| 4    | TIMING                 | Timeline: Immediately, 0-3 months, 3-6 months, 6-12 months, Exploring options                                                                                                                                                 | Required                                                    |
| 5    | BUDGET                 | Budget range or free-text input. **Optional.** No finalized ranges in Phase 1. Schema permits CMS/config-driven ranges later.                                                                                                 | Optional                                                    |
| 6    | YOUR INFORMATION       | First name, Last name, Company, Email, Phone (optional), Location (optional)                                                                                                                                                  | Name, Company, Email required. Phone and Location optional. |
| 7    | PROJECT SUMMARY        | Free text description, optional file attachment, optional NDA request flag                                                                                                                                                    | Optional (but encouraged)                                   |
| 8    | REVIEW + SUBMIT        | Summary of all entered data across steps 1-7. Edit links to return to any step. Submit action.                                                                                                                                | N/A — review step                                           |

### UX Requirements

| Requirement               | Detail                                                                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Progress indicator        | Visible on every step. Shows current step number and total (e.g., "Step 3 of 8"). Visual progress bar or step dots.                                |
| Back button               | Available on every step (2-8). Returns to previous step with all data preserved.                                                                   |
| Data preservation         | All entered data is preserved when navigating between steps. Data survives back/forward navigation. Autosave locally (localStorage or equivalent). |
| Inline validation         | Field-level validation errors appear inline, adjacent to the field. Clear error messaging.                                                         |
| Error summary             | When attempting to advance with invalid required data, show an error summary at the top of the step listing all validation issues.                 |
| Keyboard accessible       | Full keyboard navigation. Tab order follows visual order. Enter/Space activates buttons. Escape closes modals.                                     |
| No hidden required fields | All required fields are clearly marked with a visual indicator. No surprise requirements on the review step.                                       |
| UTM capture               | Silently capture UTM parameters: utm_source, utm_medium, utm_campaign, utm_content, utm_term. Included in submission metadata.                     |
| Source page capture       | Capture the page the user was on before navigating to /start-project. Included in submission metadata.                                             |
| Referrer capture          | Capture document.referrer. Included in submission metadata.                                                                                        |
| No spam                   | No unnecessary fields. No marketing opt-in pre-checked. No double-entry. Respect the user's time.                                                  |

### Budget Step Specifics

- **Optional field.** The user can skip budget without penalty.
- **No finalized ranges in Phase 1.** The budget step does not present predefined ranges at launch.
- **Schema permits CMS/config later.** The data model supports adding predefined ranges via CMS or configuration in a future phase without schema changes.
- **Free-text acceptable for Phase 1.** If no ranges are configured, the budget step accepts free-text input or can be skipped entirely.

### Conditional Rules

- **Medical and Defense selections** do not trigger any special compliance language unless owner-approved. The form treats all categories equally.
- **Budget step** has no predefined ranges in Phase 1. Empty state is acceptable.

### CTA Position

| Position            | CTA                               | Context                                                                |
| ------------------- | --------------------------------- | ---------------------------------------------------------------------- |
| Step 8              | Submit (primary)                  | Final submission action                                                |
| Step 8 / Completion | Schedule Conversation (secondary) | Alternative for users who prefer a conversation over a form submission |

### Mobile Order

- Single step per view.
- Progress indicator at top.
- Form fields in vertical stack.
- Back/Next navigation at bottom.

---

## Template 14: Start Project Complete

**Route:** `/start-project/complete`

**Purpose:** Post-submission confirmation. Reassure the user that their submission was received and set expectations for what happens next.

### Required Modules

| Order | Module            | Description                                                                                                                             |
| ----- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Thank You         | Clear confirmation that the project inquiry was submitted successfully.                                                                 |
| 2     | What Happens Next | Explanation of the next steps. What the user can expect after submission.                                                               |
| 3     | Expected Response | Timeline and method for follow-up. **Owner-approved language only.** Do not promise specific response times without owner verification. |

### Conditional Rules

- **Expected response language** must be owner-approved. Do not promise "We'll respond within 24 hours" or "A senior engineer will review your project" without explicit owner approval of the specific language.
- **No speculative commitments.** Only state what has been explicitly approved by the business owner.
- **This page is only reachable after a successful form submission.** Direct navigation to this URL without a submission should redirect to /start-project.

### CTA Position

| Position           | CTA                               | Context                                                                                                  |
| ------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------- |
| After confirmation | Schedule Conversation (secondary) | For users who want to schedule a direct conversation in addition to or instead of waiting for a response |

### Mobile Order

1. Thank You
2. What Happens Next
3. Expected Response
4. Schedule Conversation CTA

---

## Template 15: Contact

**Route:** `/contact`

**Purpose:** General contact page. This is NOT the primary project funnel — that is /start-project. Contact is for: general inquiries, vendor submissions, press inquiries, careers, and existing client communication.

### Required Modules

| Order | Module                | Description                                                                                                                                                  |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Primary Prompt        | "Have a product project? Start a Project" — directs project inquiries to the proper funnel (/start-project). This is the most prominent element on the page. |
| 2     | Verified Contact Data | Only verified contact information. Email address, phone number (if verified). No speculative or unverified contact details.                                  |

### Optional Modules

| Module               | Condition                                     | Description                                                          |
| -------------------- | --------------------------------------------- | -------------------------------------------------------------------- |
| General Inquiry Form | When form is needed for non-project inquiries | Simple form for general questions not related to starting a project. |
| Vendor Info          | When vendor/submission guidelines are defined | Instructions for vendors wanting to work with 123.design.            |
| Press Info           | When press contact is verified                | Press/media contact information. Only if verified.                   |
| Careers Info         | When hiring status is confirmed               | Current hiring status and how to apply. Only if confirmed.           |

### Conditional Rules

- **Contact is NOT the primary project funnel.** The primary funnel is /start-project. The contact page must redirect project-oriented visitors to the proper funnel.
- **If office details are unresolved, do NOT show a speculative office list.** No "Visit our offices" section with unverified addresses.
- **Only show verified contact data.** No placeholder emails, no "info@123.design" unless that email actually exists and is monitored.

### CTA Position

| Position       | CTA                                       | Context                                                                                |
| -------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- |
| Primary prompt | START A PROJECT (links to /start-project) | The most prominent action on the page. Directs project inquiries to the proper funnel. |

### Mobile Order

1. Primary Prompt ("Have a product project? Start a Project")
2. Contact information
3. Optional modules (General Inquiry Form, Vendor Info, Press Info, Careers Info — if present)

---

## Template 16: 404

**Route:** `*` (catch-all for unmatched routes)

**Purpose:** Clear error communication with recovery navigation. Help the user find what they were looking for or redirect to useful content.

### Required Modules

| Order | Module              | Description                                                                                                                                             |
| ----- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Error Message       | Clear "Page not found" message. Not cryptic, not humorous at the user's expense. Straightforward acknowledgment that the requested page does not exist. |
| 2     | Recovery Navigation | Links to help the user recover: primary site sections, search, or sitemap.                                                                              |

### Conditional Rules

- None. The 404 page is static and always renders the same way.

### CTA Position

| Position  | CTA             | Context                                                                                  |
| --------- | --------------- | ---------------------------------------------------------------------------------------- |
| Primary   | VIEW OUR WORK   | Links to /work — helps the user find portfolio content                                   |
| Secondary | START A PROJECT | Links to /start-project — captures project-oriented visitors who landed on a broken page |

### Mobile Order

1. Error message (centered)
2. Recovery navigation links
3. CTA buttons

---

## Template Summary Matrix

| #   | Template               | Route                     | Primary CTA                              | Secondary CTA         | Conditional Complexity                             |
| --- | ---------------------- | ------------------------- | ---------------------------------------- | --------------------- | -------------------------------------------------- |
| 1   | Homepage               | `/`                       | START A PROJECT                          | —                     | HIGH (metrics, testimonials, logos gated)          |
| 2   | Work Index             | `/work`                   | START A PROJECT                          | —                     | MEDIUM (filter availability)                       |
| 3   | Project Detail         | `/work/[project]`         | START A PROJECT                          | —                     | HIGH (LIGHT vs FULL mode, stage/metric gates)      |
| 4   | Capabilities Index     | `/capabilities`           | START A PROJECT                          | —                     | LOW (all 10 always render)                         |
| 5   | Capability Detail      | `/capabilities/[slug]`    | START A PROJECT                          | Explore Capability    | MEDIUM (optional modules)                          |
| 6   | Process                | `/process`                | START A PROJECT                          | —                     | MEDIUM (optional workflow modules)                 |
| 7   | Industries Index       | `/industries`             | START A PROJECT                          | —                     | LOW (all 6 always render)                          |
| 8   | Industry Detail        | `/industries/[slug]`      | START A PROJECT or Schedule Conversation | Varies by industry    | HIGH (Medical/Defense CTA override, project gates) |
| 9   | About                  | `/about`                  | START A PROJECT                          | Schedule Conversation | HIGH (metrics, testimonials, logos gated)          |
| 10  | Insights Index         | `/insights`               | START A PROJECT                          | —                     | LOW (search deferred)                              |
| 11  | Article Detail         | `/insights/[article]`     | START A PROJECT                          | —                     | LOW (author conditional)                           |
| 12  | FAQ                    | `/faq`                    | START A PROJECT                          | Contact               | MEDIUM (content verification gates)                |
| 13  | Start Project          | `/start-project`          | Submit                                   | Schedule Conversation | HIGH (8-step form, data preservation)              |
| 14  | Start Project Complete | `/start-project/complete` | Schedule Conversation                    | —                     | MEDIUM (owner-approved language)                   |
| 15  | Contact                | `/contact`                | START A PROJECT                          | —                     | MEDIUM (office detail conditional)                 |
| 16  | 404                    | `*`                       | VIEW OUR WORK                            | START A PROJECT       | LOW (static)                                       |
