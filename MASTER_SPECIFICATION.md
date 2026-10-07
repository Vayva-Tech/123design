# 123.DESIGN REBUILD — MASTER PROJECT SPECIFICATION

> This document is the source of truth for the entire 123.design website rebuild.
> Read and understand it before writing code. Do not attempt to build the entire
> website from this document in one operation. All future implementation prompts
> must conform to this specification. Do not invent company claims, portfolio assets,
> statistics, testimonials, certifications, projects or client information. When data
> is not supplied, use `[CONTENT REQUIRED]`. Wait for the first implementation phase
> before modifying or generating project files.

---

## 1. Primary Objective

The new website has four jobs:

1. **Establish credibility immediately.** Visitors understand within seconds that 123.design takes a physical product from idea through engineering, validation, tooling, and manufacturing.
2. **Show proof visually.** Portfolio work — especially video — becomes the center of the experience.
3. **Speak to both founders and engineering teams.** A founder understands the process without technical acronyms. A VP of Engineering sees CON, EVT, DVT, PVT, BOM, V&V, Jira, tooling, manufacturing readiness.
4. **Generate qualified project leads.** Guide visitors toward starting a project, not just leaving an email.

---

## 2. Brand Position

**FROM IDEA TO PRODUCTION.**

Supporting: **Industrial design, engineering, prototyping and manufacturing under one roof.**

Technical secondary: **Supporting product development from CON through EVT, DVT, PVT and production.**

Internal principle: 123.design should feel like an extension of the client's product-development organization, not merely a design vendor.

---

## 3. Primary Navigation

- **Work**
- **Capabilities**
- **Process**
- **Industries**
- **About**
- **Insights**

Right side: **Start a Project**

Logo returns home. Desktop: Capabilities and Industries use mega menus. Mobile: hamburger + logo + Start Project.

---

## 4. Site Architecture

### Main Routes

- `/` — Homepage
- `/work` — Portfolio listing
- `/work/[project-slug]` — Case study
- `/capabilities` — Overview
- `/process` — Development process
- `/industries` — Industry overview
- `/about` — Company
- `/insights` — Articles listing
- `/insights/[article-slug]` — Article detail
- `/start-project` — Lead funnel
- `/contact` — Contact

### Capability Pages

- `/capabilities/industrial-design`
- `/capabilities/mechanical-engineering`
- `/capabilities/electrical-engineering`
- `/capabilities/product-development`
- `/capabilities/prototyping`
- `/capabilities/product-animation`
- `/capabilities/tooling`
- `/capabilities/manufacturing`
- `/capabilities/testing-validation`
- `/capabilities/program-management`

### Industry Pages

- `/industries/consumer-products`
- `/industries/medical`
- `/industries/defense-security`
- `/industries/electronics`
- `/industries/industrial`
- `/industries/emerging-technology`

---

## 5. Homepage Structure

### Section 01 — Header

Transparent over hero, becomes compact solid/sticky on scroll.

### Section 02 — Hero (85-90vh)

- Eyebrow: PRODUCT DEVELOPMENT • ENGINEERING • MANUFACTURING
- Headline: FROM IDEA TO PRODUCTION.
- Copy: We design, engineer, prototype and manufacture products for startups, established companies and global brands.
- CTAs: START A PROJECT | VIEW OUR WORK
- Background: Cinematic reel from real projects (sketch → CAD → rendering → prototype → electronics → tooling → assembly → finished product). Muted autoplay. Desktop 1920x1080+, mobile vertical crop or static fallback.
- Motion: Text enters once. No constant floating typography. Hero video loops seamlessly.

### Section 03 — Credibility Strip

- 25+ YEARS — Product Development
- 200+ PROJECTS — Designed & Engineered
- GLOBAL PRODUCTION — US • Europe • Asia
- CON → PRODUCTION — End-to-End Development
- **Every numerical claim must be verified before publishing.**

### Section 04 — Featured Work

Headline: PRODUCTS WE'VE HELPED BRING TO LIFE.
Dynamic masonry/grid. Each tile: thumbnail, project name, category, capability tags, arrow, video indicator.
Hover: thumbnail transitions to muted looping 3-5s video. Mobile: poster only.

### Section 05 — Portfolio Filters

All | Consumer | Medical | Defense | Electronics | Industrial | Emerging Tech
Optional capability filter. URL query params: `/work?industry=medical`

### Section 06 — Featured Case Study Teaser

One flagship product, large. Structure: product video/render + story + capability list + EXPLORE CASE STUDY link.

### Section 07 — Development Lifecycle

Headline: ONE TEAM. EVERY DEVELOPMENT STAGE.
Horizontal progression: CON → EVT → DVT → PVT → PRODUCTION
Each stage expands to show supporting tasks. Scroll-driven animation.

**CON:** product strategy, user research, industrial design, architecture, feasibility, requirements
**EVT:** proof of concept, mechanical engineering, electrical engineering, firmware, functional prototypes, technical risk reduction
**DVT:** design verification, materials, detailed CAD, tolerance analysis, electronics revisions, certification preparation, reliability testing
**PVT:** production tooling, pilot builds, assembly process, fixtures, quality plans, manufacturing validation
**Production:** sourcing, supplier management, manufacturing, QC, assembly, packaging, continuous improvement

### Section 08 — "Your Process or Ours"

Headline: YOUR PROCESS OR OURS.
Copy: We can lead an entire development program or integrate with an established engineering organization.
Visual workflow: Requirements → Jira → Design Reviews → CAD/EE → BOM → Prototype → Validation → Release
Positioning: "We can integrate into your team's project-management and engineering-development process."

### Section 09 — Capability Overview

Six large cards: Industrial Design, Mechanical Engineering, Electrical Engineering, Prototyping, Tooling & Manufacturing, Program Management.

### Section 10 — Industries

Headline: EXPERIENCE ACROSS COMPLEX PRODUCT CATEGORIES.
Cards: Consumer, Medical, Defense & Security, Industrial, Electronics, Emerging Technology.
Use real products. No stock images.

### Section 11 — How We Work

Four principles: Transparent, Integrated, Iterative, Production-minded.

### Section 12 — Client Proof

Logos only after permission verification. Startups → Growth Companies → Fortune 500.

### Section 13 — Testimonials

Maximum 3. Video preferred. Each: Name, Role, Company, Project. Only real verifiable testimonials.

### Section 14 — Manufacturing Section

Headline: DESIGN DOESN'T END AT THE RENDER.
Copy: We help carry products through DFM, sourcing, tooling, pilot production and scalable manufacturing.
Capabilities: Injection molding, CNC, Sheet metal, Extrusion, Composite fabrication, Assembly, Tooling, Fixtures, Supplier management, Quality control.

### Section 15 — Start-a-Project CTA

Headline: HAVE A PRODUCT TO BUILD?
Copy: Tell us what you're developing and where you are in the process.
CTA: START YOUR PROJECT → | Schedule a conversation

### Section 16 — Footer

Columns: Work, Capabilities, Company, Contact. Bottom: Privacy, Terms, Accessibility, © 123.design.

---

## 6. Portfolio Page

Headline: OUR WORK
Description: A selection of products developed across consumer, medical, defense, electronics and industrial markets.
Filters + large responsive project grid.

### Project Card Schema

```ts
Project {
  title
  slug
  subtitle
  industry
  services[]
  stage[]
  thumbnail
  previewVideo
  heroMedia
  featured
  year
}
```

---

## 7. Case Study Template

Hero → Metadata (Industry, Scope, Stages, Year, Status) → Challenge → Insight → Development (sketches, CAD, engineering, testing) → Video → Engineering → Prototype → Validation → Manufacturing → Result → Next case study.

---

## 8. Video Architecture

- Poster image initially
- On hover: lazy load low-res preview
- On project open: load higher-quality stream
- Prefer WebM + MP4 fallback
- CDN delivery, lazy loading
- `preload="metadata"` or `none`
- Thumbnails below ~1-2 MB after compression

---

## 9. Capability Page Template

Hero → Value proposition → What we do (6-8 functions) → Development stage participation (CON/EVT/DVT/PVT/Production) → Methods/technologies → Relevant projects → Related capabilities → CTA.

---

## 10. Process Page

Discover → CON → EVT → DVT → PVT → Production. Each with sub-capabilities.

---

## 11. Start Project Funnel (7 Steps)

1. What are you building? (Consumer/Medical/Electronics/Industrial/Defense/Other)
2. Where are you now? (Idea/CON/EVT/DVT/PVT/Production/Not sure)
3. What do you need? (multi-select: Industrial Design, Mech Eng, Elec Eng, Prototype, Testing, Tooling, Manufacturing, Full Development)
4. Project timing (Immediately/0-3mo/3-6mo/6-12mo/Exploring)
5. Budget (optional, ranges)
6. Contact info (Name, company, email, phone)
7. Description + optional upload (PDF/CAD/brief/NDA)

Completion: "Thank you. A member of our product development team will review your project."

---

## 12. CRM / Lead Architecture

Integrate with HubSpot / Salesforce / Pipedrive or transactional email.
Store: source URL, UTM parameters, campaign, industry, development stage, requested capabilities, referrer.

---

## 13. Jira Positioning

Client-facing: "Jira-based project collaboration available where required."
Internal build: structured in epics (Design system, Navigation, Homepage, Portfolio, Case studies, Capabilities, Lead funnel, CMS, SEO, QA, Deployment).

---

## 14. Design System

### Visual Personality

Clean, technical, warm, premium, confident, industrial, human. Not sterile, not cyberpunk, not "AI startup," not generic consultancy blue.

### Typography

Headlines: Neue Haas Grotesk / Helvetica Now / Inter Tight / Geist
Body: Inter / Geist / system sans
Zero-licensing option: Inter + Inter Tight

### Type Scale

Desktop: H1 80-104px, H2 56-72px, H3 36-48px, H4 24-30px, Body large 20px, Body 17-18px, Small 14px
Mobile: H1 48-58px, H2 38-44px, H3 30-34px, Body 16-17px
Use fluid `clamp()` sizing.

### Layout

Desktop max-width: 1440px shell, 1280px content, 720px text. 12-column grid. 32px gutters desktop, 20px mobile.
Section spacing: Desktop 120-180px, Tablet 96-120px, Mobile 72-96px.

### Border Radius

Cards: 8-12px. Buttons: 4-6px or pill where deliberate. Product imagery: 0 or subtle 4-8px.

### Color Strategy

Mostly neutral. Warm off-white background, near-black primary text, graphite secondary. One distinctive brand accent. Products supply most color.

### Animation

Allowed: fade-up, masked image reveal, video hover, micro parallax, scroll progress, CAD→finished morph, line drawing, number count, stage progression.
Avoid: random floating blobs, bouncing buttons, scroll hijacking, cursor gimmicks, excessive horizontal scrolling, 3D without content value.
Timing: Micro 150-250ms, UI 250-400ms, Section reveals 500-900ms. Easing: `cubic-bezier(.22,1,.36,1)`. Respect `prefers-reduced-motion`.

### Responsive

360+ mobile, 768 tablet, 1024 laptop, 1280 desktop, 1536 large desktop. Fluid, not breakpoint-dependent.
Portfolio: desktop 3-4 cols, tablet 2, mobile 1.

---

## 15. Accessibility

Target: WCAG 2.2 AA.
Keyboard navigation, visible focus states, sufficient contrast, semantic headings, alt text, caption/transcript for video, skip navigation, form labels, error summaries, reduced motion, touch targets >= 44px.

---

## 16. Technical Stack

- **Next.js**
- **TypeScript**
- **React**
- **Tailwind CSS**
- **Framer Motion** (restrained interaction)
- **Sanity** or **Payload CMS**
- **Vercel** deployment
- **Cloudflare** for DNS/security/CDN

Alternative: Astro for content-first static performance.

---

## 17. CMS Content Types

### Project

title, slug, summary, industry, services, development stages, hero media, preview media, gallery, video, challenge, approach, engineering, prototype, manufacturing, results, testimonial, SEO title, SEO description, featured

### Capability

title, slug, intro, body, stage association, related projects, related capabilities

### Industry

title, slug, intro, projects, capabilities

### Article

title, slug, author, date, category, body, images, SEO

### Testimonial

quote, name, role, company, project

---

## 18. SEO Architecture

Every page: unique title, description, canonical, OpenGraph, Twitter/X metadata, schema markup.
Structured data: Organization, ProfessionalService, Article, BreadcrumbList, VideoObject, FAQPage (where legitimate).
Generate: sitemap.xml, robots.txt, image sitemap.

---

## 19. Redirect Strategy

Map every useful current URL to new equivalent. 301 redirect map before launch. Do not destroy Google indexing.

---

## 20. Performance Targets

LCP < 2.5s, CLS < 0.1, INP < 200ms.
AVIF/WebP images, responsive srcset, lazy loading, self-host fonts or efficient provider, critical font preload only.

---

## 21. Security

Forms: server-side validation, rate limiting, bot protection, sanitization, file upload validation.
Headers: CSP, HSTS, X-Content-Type-Options, Referrer Policy, Permissions Policy.
No public admin endpoints without protection. Secrets in environment variables.

---

## 22. DevOps

Three environments: development, staging, production.
Git: main = production, feature branches, PR required.
Automated checks: TypeScript, ESLint, build, tests, Lighthouse.
Deployment: push/PR → preview → QA → production.

---

## 23. Testing Strategy

Functional: navigation, filters, videos, forms, file upload, CMS rendering, 404, redirects.
Cross-browser: Chrome, Safari, Firefox, Edge.
Device: iPhone, Android, iPad, desktop.
Accessibility: keyboard-only, screen reader smoke test, contrast, focus.
Performance: Lighthouse, Core Web Vitals.

---

## 24. Analytics

GA4 or privacy-conscious equivalent. Google Search Console. Optional Hotjar/Clarity.
Events: view_project, play_project_video, filter_portfolio, start_project_click, lead_form_start, lead_form_step, lead_form_submit, schedule_call.

---

## 25. Post-Launch Observability

Monitor: 404 errors, form errors, JS exceptions, slow pages, Core Web Vitals, lead completion rate.
Tools: Sentry, UptimeRobot/Better Uptime, Vercel Analytics.

---

## 26. Content Migration

**Keep:** strong projects, real process expertise, manufacturing capabilities, genuine press, client proof, valuable technical content.
**Rewrite:** service copy, about copy, process language, CTAs, metadata.
**Archive/redirect:** thin or outdated SEO pages, duplicates, weak posts.

---

## 27. What Qoder Must NOT Invent

Client names, awards, project numbers, manufacturing volumes, medical approvals, certifications, patents, test results, product outcomes, customer quotes.

When data is unknown: `[CONTENT REQUIRED]`

---

## 28. Definition of "Finished"

Finished when: design system consistent, portfolio populated, videos work, forms route correctly, analytics work, SEO metadata exists, redirects mapped, accessibility passes, performance targets acceptable, mobile design complete, staging QA'd, production monitoring active.

---

## 29. Build Phases

1. **Discovery & Inventory** — Audit every current page, asset, image, video, URL.
2. **UX Architecture** — Lock sitemap, content model, user journeys, lead flow.
3. **UI System** — Define typography, spacing, colors, components, motion, responsive behavior.
4. **Page Specifications** — Detailed spec for every page and section.
5. **Qoder Implementation Prompts** — Build-ready instructions, component by component.
6. **QA + DevOps** — Testing, redirects, analytics, deployment, monitoring.

---

## Pending Inputs (Required Before Implementation)

- `123_DESIGN_ASSET_MANIFEST` — Every project, image, and video URL
- `123_DESIGN_CONTENT_INVENTORY` — Every existing page/copy element with KEEP/REWRITE/MERGE/DELETE status
- `123_DESIGN_ROUTE_REDIRECT_MAP` — Old URL → New URL mapping
- Design system specification (detailed)
- Qoder Build Prompt #1 (global shell)

**STATUS: AWAITING PHASE 1. No implementation files should be created until explicitly instructed.**
