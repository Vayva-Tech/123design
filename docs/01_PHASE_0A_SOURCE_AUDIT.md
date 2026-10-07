# PHASE 0A — SOURCE AUDIT, CONTENT GOVERNANCE & MIGRATION BASELINE

**Document ID:** 01_PHASE_0A_SOURCE_AUDIT
**Phase:** 0A — Discovery Documentation Only
**Status:** COMPLETE
**Date:** 2026-09-26

---

## 1. PURPOSE

Phase 0A converts the supplied Source Fact Pack into a disciplined internal project record. This audit establishes what currently exists on the live 123.design website, what is useful, what is questionable, what conflicts, what must be verified, and what should not survive migration.

Phase 0A does NOT establish final sitemap, final redirect map, final portfolio taxonomy, final copy, final design, final branding, final CMS schema, final technical architecture, or final asset manifest.

---

## 2. PHASE 0A BOUNDARIES

### Permitted

- Documentation within `/docs/*`
- Classification of supplied source facts
- Identification of conflicts, risks, and verification requirements
- Recording of observed routes, portfolio labels, service concepts, contact details

### Prohibited

- Browsing 123.design or any external website
- Web searches, crawling, scraping, API calls
- Competitor inspection
- Creating implementation files, application code, or configuration
- Installing packages or frameworks
- Inventing facts not present in the Source Fact Pack

---

## 3. EVIDENCE CLASSIFICATION SYSTEM

### Source Evidence States

| State               | Meaning                                                                        |
| ------------------- | ------------------------------------------------------------------------------ |
| CURRENT_SITE_STATES | Content or location was observed on the current website by the Design Lead     |
| OWNER_VERIFIED      | Business owner has explicitly confirmed the information remains accurate       |
| VERIFIED_EXTERNAL   | Design/Product Lead has independently verified from a reliable external source |

### Confidence States

| State            | Meaning                                                           |
| ---------------- | ----------------------------------------------------------------- |
| CONFIRMED_SOURCE | Content/location observed on current website                      |
| OWNER_VERIFY     | Exists on current website but must be confirmed before publishing |
| CONFLICT         | Two or more source locations disagree                             |
| SUSPECT_LEGACY   | Likely old, irrelevant, broken, malformed, or no longer suitable  |
| CONTENT_REQUIRED | Necessary information does not currently exist                    |
| APPROVED         | Only when explicitly supplied by Design/Product Lead              |

### Content Disposition States

| State         | Meaning                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| KEEP          | Information/concept has migration value (not permission to copy verbatim) |
| KEEP_AND_EDIT | Core concept retained but wording needs revision                          |
| REWRITE       | Concept must be substantially rewritten                                   |
| MERGE         | Should be consolidated with other content                                 |
| ARCHIVE       | Preserve for reference but do not publish                                 |
| DELETE        | No migration value                                                        |
| VERIFY_FIRST  | Cannot decide until owner verification completes                          |
| ASSET_ONLY    | Visual/media assets may have value; text does not                         |
| UNDECIDED     | Insufficient information to classify                                      |

---

## 4. CURRENT BRAND POSITIONING (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

The current site positions 123.design as:

- Product design company
- Industrial design company
- Engineering company
- Prototyping provider
- Manufacturing support / manufacturing provider

**Recurring concepts:**

- Concept to manufacturing
- Product design
- Industrial design
- CAD engineering
- Prototyping
- Manufacturing
- Transparency
- Collaboration
- Market-ready products

**Future direction (from Master Specification):**
New positioning: FROM IDEA TO PRODUCTION
Lifecycle language: CON → EVT → DVT → PVT → PRODUCTION

**Disposition:** REWRITE (current positioning is source material only)

---

## 5. CURRENT INFORMATION ARCHITECTURE (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

### Observed Primary Routes

| Route                       | Observed Purpose                |
| --------------------------- | ------------------------------- |
| `/`                         | Home                            |
| `/about/`                   | About                           |
| `/network/`                 | Network / related organizations |
| `/press-room/`              | Press and articles              |
| `/careers/`                 | Careers (in global navigation)  |
| `/visual-gallery/`          | Broad portfolio/gallery         |
| `/product-design-firm-usa/` | Primary Services page           |
| `/process-2/`               | Process page                    |
| `/faq/`                     | FAQ page                        |
| `/contact-2/`               | Contact page                    |

### Observed Project Routes

| Route                          | Observed Purpose |
| ------------------------------ | ---------------- |
| `/portfolio/home-goods/oral4/` | ORAL4 project    |
| `/prelynx-portal/`             | PreLynx project  |
| `/mg-nine-vehicle-dvr-camera/` | MG-NINE project  |

### Observed Service Routes

| Route                                                                        | Observed Purpose    |
| ---------------------------------------------------------------------------- | ------------------- |
| `/service/project-management/product-positioning-marketing/`                 | Product positioning |
| `/service/industrial-design/industrial-product-design-refinement-process/`   | Industrial design   |
| `/service/industrial-design/product-animation/`                              | Product animation   |
| `/service/mechanical-engineering/mechanical-engineering-material-selection/` | Material selection  |
| `/service/manufacturing/tooling-mold/`                                       | Tooling/mold        |
| `/service/manufacturing/sheet-metal-forming/`                                | Sheet metal         |
| `/service/manufacturing/metal-extrusion/`                                    | Metal extrusion     |

**Note:** These are NOT the complete legacy URL inventory. More routes will be provided during redirect/content migration phases.

Full route register: See `01A_SOURCE_ROUTE_REGISTER.md`

---

## 6. CURRENT SERVICE ARCHITECTURE (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

The existing Services page contains five broad capability groups:

### GROUP 01: Product Strategy & Positioning

Product positioning, milestones, creative brief, resource allocation, deadlines, product-to-market timing, release planning, target markets, contextual inquiry, data collection, opportunity identification.

### GROUP 02: Design Concepts & Creative Development

Design refinement, conceptual study, ergonomics, realistic rendering, packaging, graphic design, animation.

### GROUP 03: Engineering & Technical Development

Material selection, CAD modeling, assembly design, design for manufacturing, bill of materials, finite element analysis, PCB design, system control, signal processing, embedded software.

**Flag:** This group also lists web development, app development, data science/analytics, and SEO. These digital/SEO items may not belong in future core physical-product development positioning.
**Classification:** OWNER_VERIFY / POSSIBLE_SCOPE_REMOVAL

### GROUP 04: Manufacturing & Production Feasibility

Local suppliers, global suppliers, tooling, plastic injection, sheet metal forming, metal extrusion, in-house production, third-party production.

### GROUP 05: Compliance, Testing & Launch Support

Consultation, evaluation, UL, FDA, FCC, ISO, EMC, CE, Six Sigma, service design, packaging design, advertising, campaigns.

**IMPORTANT:** The existence of regulatory acronyms does NOT prove that 123.design holds certifications. Verification items created for all regulatory acronyms.

Full content decisions: See `01B_CONTENT_DECISION_REGISTER.md`
Full verification register: See `01C_VERIFICATION_REGISTER.md`

---

## 7. CURRENT PROCESS ARCHITECTURE (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

### Homepage Process (TOO SIMPLIFIED)

1. Product Research
2. Product Design
3. Product Production

**Disposition:** REWRITE

### Dedicated Process Page Headings

- Vision (market research, target markets, contextual inquiry, data)
- Project Management (product positioning, milestones, creative brief, resources, deadlines)
- Creativity
- Applied Science (Mechanical Engineering, Electrical Engineering)
- Practicality
- Integration (tooling, plastic injection, sheet metal, extrusion, assembly)
- Prototyping (CNC, FDM, SLS, SLA, RTV, thermoforming, soft-tool overmolding, fiberglass, carbon-fiber)
- Patenting Services
- Quality Systems
- Marketing Services

**Flag:** Patenting Services requires OWNER_VERIFY. Must determine whether 123.design offers legal patent services, a partner provides them, the firm only supports patent-oriented development, or this capability should be removed.

---

## 8. CURRENT PORTFOLIO SITUATION (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

### Observed Gallery Labels (Visual Gallery)

The following labels were observed. Each is recorded as a source item without classification as project, category, video, duplicate, or concept.

1. Shopping Cart
2. Multiple
3. Regain Medical
4. Vehicular DVR Camera
5. Koffti
6. Consumer
7. RegalPress.AI
8. RegalBrand.AI
9. Promo
10. Medical Multiple
11. BlackRock.AI
12. HoverBoard
13. EVtols
14. Fishing Lures
15. Promo (second occurrence)
16. Oral4 Dental Kit
17. Bucket
18. Halevai Electric Boat
19. Villa Subdivision
20. Star Guard
21. Fishing Lure
22. Timeset App
23. Marker Locker
24. Pain chronic
25. FairBridge Presentation
26. PreLynx Portal
27. Remittance Processor
28. Falcon+ Prep Reducing Scanners
29. Recovery System

### Portfolio Issues Identified

| Issue                                       | Classification                 |
| ------------------------------------------- | ------------------------------ |
| "Multiple" may be category, not project     | OWNER_VERIFY                   |
| "Consumer" may be category, not project     | OWNER_VERIFY                   |
| "Promo" appears twice                       | CONFLICT / POTENTIAL DUPLICATE |
| "Medical Multiple" may be category          | OWNER_VERIFY                   |
| "Fishing Lures" vs "Fishing Lure"           | POTENTIAL DUPLICATE            |
| MG-NINE appears with differing descriptions | POTENTIAL PROJECT COLLISION    |

### Featured Projects (Homepage)

- ORAL4
- PERLYNX / PreLynx
- MG-NINE (appears more than once with differing context)

**MG-NINE Identity Issue:**
One description presents it as a vehicle DVR camera. Another references a mobile armored PTZ patrol camera. These may be different products.
**Classification:** OWNER_VERIFY / POTENTIAL_PROJECT_COLLISION

Full portfolio register: See `01D_PORTFOLIO_SOURCE_REGISTER.md`

---

## 9. CURRENT LEAD GENERATION & FORMS (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

### Contact Form Fields

First Name, Last Name, Email, Phone, Product Industry, Product Development Stage (Idea/Concept through Production Completed), Lead Source, Subject, Description.

### Additional Forms (Network/FAQ areas)

Request combinations of: name, email, phone, product industry, development stage, subject, message.

### Homepage CTAs

- Free Consultation
- Contact
- Subscribe

**Disposition:** MERGE / REWRITE into new Start Project lead funnel system.

Legacy form concepts preserved in audit as evidence of existing lead-qualification intent.

---

## 10. CURRENT COMPANY INFORMATION (SOURCE OBSERVATION)

### About Page Content

Positioning around: industrial product development, creativity, applied engineering, practical innovation, concept through production, innovation, precision, user-centered thinking.

### Metrics Displayed

- Projects completed
- Client satisfaction
- Global clients
- Certified awards

**Classification:** SUSPECT_LEGACY / OWNER_VERIFY / DO NOT MIGRATE NUMBERS
Values render as zero / placeholder-looking values.

### Named Team Member

Max Keller — Head of Business Development
**Classification:** OWNER_VERIFY_CURRENT_TEAM_MEMBER

### Named Clients

Boeing, Coca-Cola, Georgia-Pacific, Philip Morris, Xerox, Cirkul, Lipton

Also states "over 30 satisfied clients."

**Classification:** OWNER_VERIFY for ALL client names and client counts.
Do not use company logos. Do not imply endorsement. Do not write case studies. Do not migrate client relationships without explicit approval.

---

## 11. CURRENT CONTACT INFORMATION (SOURCE OBSERVATION)

**Classification:** CONFLICT

### Footer / Common Site Content

- 1990 Main St, Suite 750, Sarasota, Florida 34236
- Email: vendor@123.design
- Phone: +1 (203) 918-4057
- Hours: Mon-Fri 9:00AM-5:00PM

### Dedicated Contact Page

**HEADQUARTERS:**

- 1990 Main St, Suite 750, Sarasota, FL 34236
- Phone: +1 (941) 265-2173

**THINK TANK / STUDIO:**

- 1500 Independence Blvd, Suite 200, Sarasota, FL 34234

**WEST COAST DIVISION:**

- 795 Folsom Street, 1st Floor, San Francisco, CA 94107

**CANADA DIVISION:**

- 888 3rd St SW, 10th Floor, Calgary, AB, Canada T2P 5C5

### Email Addresses

- vendor@123.design
- info@123.design
- careers@123.design
- contact@mysite.com — **SUSPECT_LEGACY / DO NOT MIGRATE** (template address)

### Conflicts Identified

| Item              | Conflict                         | Classification          |
| ----------------- | -------------------------------- | ----------------------- |
| Phone number      | (203) 918-4057 vs (941) 265-2173 | CONFLICT / OWNER_VERIFY |
| Office locations  | 4 locations listed               | OWNER_VERIFY            |
| All addresses     | Multiple offices/divisions       | OWNER_VERIFY            |
| All phone numbers | Two different numbers            | OWNER_VERIFY            |
| All emails        | Multiple addresses               | OWNER_VERIFY            |
| Media contacts    | Exist on legacy site             | OWNER_VERIFY            |

---

## 12. CURRENT NETWORK PAGE (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

### Referenced Entities

| Entity          | Described Relationship                                                    |
| --------------- | ------------------------------------------------------------------------- |
| Nespa           | Advertising, messaging, attracting attention                              |
| tru Dimension   | Market research, crowdsourcing, market/user data                          |
| Innovators Plus | Manufacturing, light assembly, warehousing, distribution, Sarasota County |

**All three require:** OWNER_VERIFY

**Questions for later resolution:**

- Do these entities still exist?
- Are they legally affiliated?
- Are they brands, subsidiaries, partners, or historical relationships?
- Should any appear on the new website?

**Default disposition:** VERIFY_FIRST

---

## 13. CURRENT FAQ CONTENT (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

### Topics Covered

- NDA / confidential ideas
- Patents
- Project duration
- Marketing assistance
- Unpaid work
- Consultation fees
- Prototyping process

### Commercial/Timeline Claims

| Claim                           | Classification |
| ------------------------------- | -------------- |
| 8-12 weeks concept-to-prototype | OWNER_VERIFY   |
| $15,000 turnkey project start   | OWNER_VERIFY   |
| Production partners in U.S.     | OWNER_VERIFY   |
| Production partners in Turkey   | OWNER_VERIFY   |
| Production partners in Taiwan   | OWNER_VERIFY   |
| Production partners in China    | OWNER_VERIFY   |
| Free first consultation         | OWNER_VERIFY   |
| Fee for second consultation     | OWNER_VERIFY   |

---

## 14. CURRENT PRESS ROOM (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

The current site has a `/press-room/` route. Specific articles and content were not detailed in the Source Fact Pack.

**Disposition:** VERIFY_FIRST — content inventory needed in Phase 0C.

---

## 15. CURRENT MANUFACTURING CONTENT (SOURCE OBSERVATION)

**Classification:** CONFIRMED_SOURCE

The current website contains substantial content about:

- Tooling processes
- Sheet metal forming
- Metal extrusion
- Plastic injection
- Assembly processes

**Disposition:** KEEP_AND_EDIT — turn existing knowledge into clean, authoritative capability content rather than lengthy SEO-style articles.

---

## 16. CONTENT INTEGRITY WARNINGS

### "Dawson Shanahan" Name in Tooling Content

A name ("Dawson Shanahan") was found embedded in tooling page content. This may indicate scraped or copied content.

**Classification:** SUSPECT_LEGACY / HIGH RISK
**Disposition:** DELETE from migrated content. Investigate origin.

### Template Email Address

`contact@mysite.com` found in footer.

**Classification:** SUSPECT_LEGACY / DO NOT MIGRATE

---

## 17. SEO PROBLEMS OBSERVED

**Classification:** SUSPECT_LEGACY

The current site exhibits keyword-stuffing patterns in service page URLs and content. URLs such as `/service/industrial-design/industrial-product-design-refinement-process/` suggest SEO-driven construction rather than information architecture.

**Disposition:** All service page copy should be REWRITE. URL structure will be redesigned in Phase 0D.

---

## 18. MIGRATION RISKS SUMMARY

| Risk                                    | Severity | Summary                                          |
| --------------------------------------- | -------- | ------------------------------------------------ |
| Publishing unverified metrics           | CRITICAL | Zero/placeholder values currently displayed      |
| Publishing unverified client names      | CRITICAL | Legal/reputational risk                          |
| Phone number conflict                   | HIGH     | Two different numbers in different locations     |
| Office locations unverified             | HIGH     | Four locations may not all be active             |
| MG-NINE project collision               | HIGH     | Two different product descriptions for same name |
| Copied/scraped content in service pages | HIGH     | "Dawson Shanahan" name found                     |
| Template email in footer                | MEDIUM   | contact@mysite.com                               |
| Regulatory claims without verification  | CRITICAL | UL/FDA/FCC/ISO/EMC/CE/Six Sigma                  |
| Pricing/timeline claims unverified      | HIGH     | $15,000 / 8-12 weeks                             |
| Network entities unverified             | MEDIUM   | Three organizations, relationship unclear        |
| Patent services scope unclear           | MEDIUM   | Legal implications                               |
| Digital services scope mismatch         | LOW      | Web dev/SEO may not belong in new positioning    |

Full risk register: See `01E_LEGACY_RISK_REGISTER.md`

---

## 19. MIGRATION OPPORTUNITIES

| Opportunity                                | Source                                             |
| ------------------------------------------ | -------------------------------------------------- |
| Strong manufacturing content foundation    | Current tooling/sheet metal/extrusion pages        |
| Existing lead qualification intent         | Current form field structure                       |
| Prototyping capability breadth             | CNC, FDM, SLS, SLA, RTV, thermoforming, composites |
| Transparency as brand value                | Current homepage emphasis                          |
| Client roster depth (if verified)          | Named clients: Boeing, Coca-Cola, etc.             |
| Video/media portfolio emphasis             | Visual gallery with video-heavy projects           |
| Regulatory knowledge (if verified)         | Compliance/testing concepts                        |
| Global manufacturing network (if verified) | US, Turkey, Taiwan, China references               |

---

## 20. ITEMS BLOCKING MIGRATION

The following items MUST be resolved before content migration can proceed:

1. **Owner verification of all client names and relationships**
2. **Owner verification of all metrics (projects, clients, satisfaction, awards)**
3. **Owner verification of all contact information (phones, addresses, emails, offices)**
4. **Owner verification of network entities (Nespa, tru Dimension, Innovators Plus)**
5. **Owner verification of regulatory capability claims**
6. **Owner verification of commercial claims (pricing, timelines, geographies)**
7. **Owner verification of team member (Max Keller)**
8. **Resolution of MG-NINE project identity**
9. **Resolution of patent services scope**
10. **Determination of digital services (web dev, SEO) inclusion**

---

## 21. INPUTS EXPECTED FOR PHASE 0B+

| Phase | Expected Input                                            |
| ----- | --------------------------------------------------------- |
| 0B    | Asset & Media Manifest (images, videos, documents)        |
| 0C    | Content Inventory (full page-by-page content extraction)  |
| 0D    | Redirect Inventory (complete legacy URL list)             |
| 1+    | Implementation phases (after all Phase 0 inputs complete) |

---

## 22. SUMMARY

Phase 0A has successfully converted the supplied Source Fact Pack into a structured audit record. The current 123.design website contains substantial foundational content — particularly around manufacturing capabilities, prototyping breadth, and portfolio depth — that has migration value.

However, significant verification gaps exist across client relationships, metrics, contact information, regulatory claims, commercial claims, and network entities. The MG-NINE project collision and the presence of potentially copied content ("Dawson Shanahan") represent specific integrity risks.

No content from the current site should be migrated to the new website until the verification register items are resolved. The new site's information architecture, positioning, and content strategy will be built from the Master Specification, using current site content only as source reference material.

**Implementation files created: 0**
**External research performed: 0**
