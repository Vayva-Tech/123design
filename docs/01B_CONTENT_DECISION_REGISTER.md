# CONTENT DECISION REGISTER

**Document ID:** 01B_CONTENT_DECISION_REGISTER
**Phase:** 0A — Discovery Documentation Only
**Status:** COMPLETE
**Date:** 2026-09-26

---

## PURPOSE

This register records every meaningful content group identified in the Source Fact Pack and assigns a migration disposition. Each entry documents the current value, known problems, disposition decision, and reasoning.

No entry in this register constitutes approval to publish. All dispositions are preliminary and subject to owner verification.

---

## REGISTER

### CD-001: Homepage Hero Positioning

| Field                         | Value                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------- |
| **Source Area**               | Homepage (`/`)                                                                          |
| **Content Topic**             | Hero headline and subheading around industrial/product design                           |
| **Current Value**             | Establishes core service identity                                                       |
| **Problem**                   | Too generic; does not convey end-to-end capability; does not use new lifecycle language |
| **Disposition**               | REWRITE                                                                                 |
| **Reason**                    | New positioning "FROM IDEA TO PRODUCTION" supersedes current messaging                  |
| **Needs Rewrite?**            | YES                                                                                     |
| **Needs Owner Verification?** | NO (direction set by Master Specification)                                              |
| **Potential Future Location** | `/` hero section                                                                        |
| **Notes**                     | Source only. New copy to be written in implementation phase.                            |

---

### CD-002: Homepage Metrics (Projects Completed, Client Satisfaction, Global Clients)

| Field                         | Value                                                                       |
| ----------------------------- | --------------------------------------------------------------------------- |
| **Source Area**               | Homepage (`/`) and About (`/about/`)                                        |
| **Content Topic**             | Numeric metric displays                                                     |
| **Current Value**             | Intent to show credibility through numbers                                  |
| **Problem**                   | Values render as zero/placeholder; no evidence of real values               |
| **Disposition**               | DELETE                                                                      |
| **Reason**                    | SUSPECT_LEGACY. Do not migrate until real values are supplied and verified. |
| **Needs Rewrite?**            | N/A — delete until verified                                                 |
| **Needs Owner Verification?** | YES — if real values exist, owner must supply them                          |
| **Potential Future Location** | Credibility strip on homepage (only if verified values provided)            |
| **Notes**                     | Entered in Verification Register as VR-METRICS-001 through VR-METRICS-004.  |

---

### CD-003: Homepage "Who We Are" Section

| Field                         | Value                                                                  |
| ----------------------------- | ---------------------------------------------------------------------- |
| **Source Area**               | Homepage (`/`)                                                         |
| **Content Topic**             | "Product Designers, Engineers, Global Innovation Partners" positioning |
| **Current Value**             | Communicates team identity and scope                                   |
| **Problem**                   | Vague; "global innovation partners" is generic                         |
| **Disposition**               | REWRITE                                                                |
| **Reason**                    | New site needs specific, verifiable team/capability statements         |
| **Needs Rewrite?**            | YES                                                                    |
| **Needs Owner Verification?** | YES (team composition, scope claims)                                   |
| **Potential Future Location** | Homepage credibility section or `/about`                               |
| **Notes**                     | Concept of multidisciplinary team retained. Wording must change.       |

---

### CD-004: Homepage Transparency Emphasis

| Field                         | Value                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Source Area**               | Homepage (`/`)                                                                                                           |
| **Content Topic**             | Emphasis on transparency and keeping clients involved                                                                    |
| **Current Value**             | Strong brand differentiator concept                                                                                      |
| **Problem**                   | Currently expressed as marketing language without specific mechanisms                                                    |
| **Disposition**               | KEEP_AND_EDIT                                                                                                            |
| **Reason**                    | Transparency is a genuine brand value; needs concrete expression (Jira integration, design reviews, reporting workflows) |
| **Needs Rewrite?**            | YES — expand with specific mechanisms                                                                                    |
| **Needs Owner Verification?** | YES — verify that transparency practices described actually exist                                                        |
| **Potential Future Location** | Homepage "How We Work" section; `/process`                                                                               |
| **Notes**                     | Master Specification already expands this into "Your Process or Ours" section with Jira/workflow integration detail.     |

---

### CD-005: Homepage 3-Step Process

| Field                         | Value                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------- |
| **Source Area**               | Homepage (`/`)                                                                  |
| **Content Topic**             | Product Research → Product Design → Product Production                          |
| **Current Value**             | Shows process exists                                                            |
| **Problem**                   | Far too simplified; does not reflect actual development capability              |
| **Disposition**               | REWRITE                                                                         |
| **Reason**                    | Master Specification replaces with CON → EVT → DVT → PVT → Production lifecycle |
| **Needs Rewrite?**            | YES                                                                             |
| **Needs Owner Verification?** | NO (direction set by Master Specification)                                      |
| **Potential Future Location** | Homepage development lifecycle section; `/process`                              |
| **Notes**                     | Keep only as source observation. Do not carry forward.                          |

---

### CD-006: Service Group 01 — Product Strategy & Positioning

| Field                         | Value                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/product-design-firm-usa/` (Services page)                                                             |
| **Content Topic**             | Product positioning, milestones, creative brief, resource allocation, market timing, contextual inquiry |
| **Current Value**             | Shows strategic planning capability                                                                     |
| **Problem**                   | SEO-driven presentation; concepts scattered across keyword-heavy text                                   |
| **Disposition**               | REWRITE                                                                                                 |
| **Reason**                    | Concepts have value but need restructuring into clean capability narrative                              |
| **Needs Rewrite?**            | YES                                                                                                     |
| **Needs Owner Verification?** | YES — verify these capabilities are actively delivered                                                  |
| **Potential Future Location** | `/capabilities/program-management`                                                                      |
| **Notes**                     | Aligns with Master Specification's "Program Management" capability.                                     |

---

### CD-007: Service Group 02 — Design Concepts & Creative Development

| Field                         | Value                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Source Area**               | `/product-design-firm-usa/` (Services page)                                                      |
| **Content Topic**             | Design refinement, conceptual study, ergonomics, rendering, packaging, graphic design, animation |
| **Current Value**             | Core industrial design capability                                                                |
| **Problem**                   | SEO-driven presentation; packaging and graphic design may need separation                        |
| **Disposition**               | REWRITE                                                                                          |
| **Reason**                    | Core capability but needs restructuring                                                          |
| **Needs Rewrite?**            | YES                                                                                              |
| **Needs Owner Verification?** | YES — verify active delivery of each sub-capability                                              |
| **Potential Future Location** | `/capabilities/industrial-design`                                                                |
| **Notes**                     | Product animation has its own dedicated capability page in new IA.                               |

---

### CD-008: Service Group 03 — Engineering & Technical Development

| Field                         | Value                                                                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/product-design-firm-usa/` (Services page)                                                                                             |
| **Content Topic**             | Material selection, CAD, assemblies, DFM, BOM, FEA, PCB, control, signal processing, embedded software                                  |
| **Current Value**             | Core engineering capability                                                                                                             |
| **Problem**                   | Also includes web development, app development, data science/analytics, SEO — these do not fit physical product development positioning |
| **Disposition**               | KEEP_AND_EDIT (core engineering) / DELETE (digital/SEO items, pending verification)                                                     |
| **Reason**                    | Mechanical/electrical engineering is core; digital services may not belong                                                              |
| **Needs Rewrite?**            | YES                                                                                                                                     |
| **Needs Owner Verification?** | YES — especially for web dev, app dev, data science, SEO scope                                                                          |
| **Potential Future Location** | `/capabilities/mechanical-engineering`, `/capabilities/electrical-engineering`                                                          |
| **Notes**                     | Digital services flagged as POSSIBLE_SCOPE_REMOVAL.                                                                                     |

---

### CD-009: Digital Services (Web Dev, App Dev, Data Science, SEO)

| Field                         | Value                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------- |
| **Source Area**               | `/product-design-firm-usa/` (Services page, Group 03)                            |
| **Content Topic**             | Web development, app development, data science/analytics, SEO                    |
| **Current Value**             | Shows breadth of current offerings                                               |
| **Problem**                   | Does not align with "FROM IDEA TO PRODUCTION" physical product positioning       |
| **Disposition**               | VERIFY_FIRST                                                                     |
| **Reason**                    | Owner must decide if these are core, peripheral, or discontinued                 |
| **Needs Rewrite?**            | N/A pending decision                                                             |
| **Needs Owner Verification?** | YES — CRITICAL decision                                                          |
| **Potential Future Location** | UNDECIDED — may not exist in new IA                                              |
| **Notes**                     | Entered in Verification Register as VR-CAPABILITY-001 through VR-CAPABILITY-004. |

---

### CD-010: Service Group 04 — Manufacturing & Production Feasibility

| Field                         | Value                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/product-design-firm-usa/` (Services page)                                                                 |
| **Content Topic**             | Local/global suppliers, tooling, plastic injection, sheet metal, extrusion, in-house/third-party production |
| **Current Value**             | Strong manufacturing capability foundation                                                                  |
| **Problem**                   | SEO-driven presentation; supplier network unverified                                                        |
| **Disposition**               | KEEP_AND_EDIT                                                                                               |
| **Reason**                    | Core differentiator; substantial content exists to build on                                                 |
| **Needs Rewrite?**            | YES — restructure into clean narrative                                                                      |
| **Needs Owner Verification?** | YES — supplier relationships, in-house vs third-party split                                                 |
| **Potential Future Location** | `/capabilities/manufacturing`, `/capabilities/tooling`                                                      |
| **Notes**                     | Dedicated service pages for tooling, sheet metal, extrusion provide additional source content.              |

---

### CD-011: Service Group 05 — Compliance, Testing & Launch Support

| Field                         | Value                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/product-design-firm-usa/` (Services page)                                                                                                  |
| **Content Topic**             | UL, FDA, FCC, ISO, EMC, CE, Six Sigma, service design, packaging design, advertising, campaigns                                              |
| **Current Value**             | Shows regulatory awareness                                                                                                                   |
| **Problem**                   | Acronym presence does NOT prove certification; advertising/campaigns may not belong                                                          |
| **Disposition**               | VERIFY_FIRST                                                                                                                                 |
| **Reason**                    | Must determine: does 123.design hold certifications, design to standards, coordinate testing, provide compliance support, or something else? |
| **Needs Rewrite?**            | YES — after verification                                                                                                                     |
| **Needs Owner Verification?** | YES — CRITICAL                                                                                                                               |
| **Potential Future Location** | `/capabilities/testing-validation`                                                                                                           |
| **Notes**                     | Entered in Verification Register as VR-REGULATORY-001 through VR-REGULATORY-007.                                                             |

---

### CD-012: Process Page Headings (Vision, Creativity, Applied Science, Practicality, Integration, etc.)

| Field                         | Value                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/process-2/`                                                                                                             |
| **Content Topic**             | Abstract process headings with associated concepts                                                                        |
| **Current Value**             | Shows process thinking exists                                                                                             |
| **Problem**                   | Too abstract; not recognizable to modern product development teams                                                        |
| **Disposition**               | REWRITE                                                                                                                   |
| **Reason**                    | Master Specification replaces with CON/EVT/DVT/PVT/Production lifecycle                                                   |
| **Needs Rewrite?**            | YES                                                                                                                       |
| **Needs Owner Verification?** | NO (structure set by Master Specification)                                                                                |
| **Potential Future Location** | `/process`                                                                                                                |
| **Notes**                     | Specific technical concepts (prototyping methods, engineering disciplines) have value and should be preserved in rewrite. |

---

### CD-013: Prototyping Methods List

| Field                         | Value                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Source Area**               | `/process-2/` (Prototyping section)                                                                                      |
| **Content Topic**             | CNC, FDM, SLS, SLA, RTV/silicone tooling, thermoforming, soft-tool overmolding, fiberglass forming, carbon-fiber forming |
| **Current Value**             | Demonstrates prototyping breadth                                                                                         |
| **Problem**                   | Presented as list without context or hierarchy                                                                           |
| **Disposition**               | KEEP_AND_EDIT                                                                                                            |
| **Reason**                    | Genuine capability list; needs restructuring into capability narrative                                                   |
| **Needs Rewrite?**            | YES — restructure, not delete                                                                                            |
| **Needs Owner Verification?** | YES — verify each method is currently available                                                                          |
| **Potential Future Location** | `/capabilities/prototyping`                                                                                              |
| **Notes**                     | Strong differentiator content when properly presented.                                                                   |

---

### CD-014: Patenting Services

| Field                         | Value                                                                                                            |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/process-2/`                                                                                                    |
| **Content Topic**             | Patenting services as a process step                                                                             |
| **Current Value**             | Shows IP awareness                                                                                               |
| **Problem**                   | Unclear if 123.design offers legal patent services, uses a partner, or only supports patent-oriented development |
| **Disposition**               | VERIFY_FIRST                                                                                                     |
| **Reason**                    | Legal implications. Cannot imply legal representation without verification.                                      |
| **Needs Rewrite?**            | N/A pending verification                                                                                         |
| **Needs Owner Verification?** | YES — CRITICAL                                                                                                   |
| **Potential Future Location** | UNDECIDED                                                                                                        |
| **Notes**                     | Entered in Verification Register as VR-LEGAL-001.                                                                |

---

### CD-015: About Page Positioning

| Field                         | Value                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/about/`                                                                                                         |
| **Content Topic**             | Industrial product development, creativity, applied engineering, practical innovation, concept through production |
| **Current Value**             | Core brand positioning                                                                                            |
| **Problem**                   | Generic; overlaps with homepage; zero metrics                                                                     |
| **Disposition**               | REWRITE                                                                                                           |
| **Reason**                    | Needs specific, verifiable company narrative                                                                      |
| **Needs Rewrite?**            | YES                                                                                                               |
| **Needs Owner Verification?** | YES                                                                                                               |
| **Potential Future Location** | `/about`                                                                                                          |
| **Notes**                     | Concept of "concept through production" aligns with new "FROM IDEA TO PRODUCTION" positioning.                    |

---

### CD-016: Named Client List (Boeing, Coca-Cola, Georgia-Pacific, Philip Morris, Xerox, Cirkul, Lipton)

| Field                         | Value                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/about/`                                                                                                              |
| **Content Topic**             | Client names displayed as social proof                                                                                 |
| **Current Value**             | Strong social proof if verified                                                                                        |
| **Problem**                   | No verification that relationships are current, active, or permissioned for display                                    |
| **Disposition**               | VERIFY_FIRST                                                                                                           |
| **Reason**                    | Legal/reputational risk. Cannot display company names or logos without permission.                                     |
| **Needs Rewrite?**            | N/A pending verification                                                                                               |
| **Needs Owner Verification?** | YES — CRITICAL                                                                                                         |
| **Potential Future Location** | Homepage credibility strip (only if approved)                                                                          |
| **Notes**                     | Entered in Verification Register as VR-CLIENTS-001 through VR-CLIENTS-007. Do not use logos. Do not imply endorsement. |

---

### CD-017: "Over 30 Satisfied Clients" Claim

| Field                         | Value                                               |
| ----------------------------- | --------------------------------------------------- |
| **Source Area**               | `/about/`                                           |
| **Content Topic**             | Client count claim                                  |
| **Current Value**             | Social proof intent                                 |
| **Problem**                   | Unverified number                                   |
| **Disposition**               | VERIFY_FIRST                                        |
| **Reason**                    | Must have real, verifiable number before publishing |
| **Needs Rewrite?**            | N/A pending verification                            |
| **Needs Owner Verification?** | YES                                                 |
| **Potential Future Location** | Credibility strip (only if verified)                |
| **Notes**                     | Entered in Verification Register as VR-METRICS-002. |

---

### CD-018: Max Keller — Head of Business Development

| Field                         | Value                                            |
| ----------------------------- | ------------------------------------------------ |
| **Source Area**               | `/about/`                                        |
| **Content Topic**             | Named team member with title                     |
| **Current Value**             | Humanizes the company                            |
| **Problem**                   | Must verify this person still holds this role    |
| **Disposition**               | VERIFY_FIRST                                     |
| **Reason**                    | Team information must be current                 |
| **Needs Rewrite?**            | N/A pending verification                         |
| **Needs Owner Verification?** | YES                                              |
| **Potential Future Location** | `/about` team section                            |
| **Notes**                     | Entered in Verification Register as VR-TEAM-001. |

---

### CD-019: Network Entities (Nespa, tru Dimension, Innovators Plus)

| Field                         | Value                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| **Source Area**               | `/network/`                                                                         |
| **Content Topic**             | Related organizations / network entities                                            |
| **Current Value**             | Shows ecosystem breadth                                                             |
| **Problem**                   | Relationship type unclear; entities may not exist; legal affiliation unknown        |
| **Disposition**               | VERIFY_FIRST                                                                        |
| **Reason**                    | Must determine: do they exist? are they affiliated? should they appear on new site? |
| **Needs Rewrite?**            | N/A pending verification                                                            |
| **Needs Owner Verification?** | YES — CRITICAL                                                                      |
| **Potential Future Location** | UNDECIDED — may not exist in new IA                                                 |
| **Notes**                     | Entered in Verification Register as VR-NETWORK-001 through VR-NETWORK-003.          |

---

### CD-020: FAQ Commercial Claims

| Field                         | Value                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/faq/` and homepage FAQ                                                                           |
| **Content Topic**             | $15,000 pricing, 8-12 week timeline, US/Turkey/Taiwan/China production partners, free consultation |
| **Current Value**             | Lead qualification intent                                                                          |
| **Problem**                   | All claims unverified; may be outdated                                                             |
| **Disposition**               | VERIFY_FIRST                                                                                       |
| **Reason**                    | Commercial claims carry legal and reputational risk                                                |
| **Needs Rewrite?**            | YES — after verification                                                                           |
| **Needs Owner Verification?** | YES — CRITICAL                                                                                     |
| **Potential Future Location** | `/faq`, `/start-project`, or pricing page                                                          |
| **Notes**                     | Entered in Verification Register as VR-COMMERCIAL-001 through VR-COMMERCIAL-006.                   |

---

### CD-021: Contact Form Structure

| Field                         | Value                                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/contact-2/`                                                                                            |
| **Content Topic**             | Form fields: name, email, phone, industry, development stage, lead source, subject, description          |
| **Current Value**             | Shows lead qualification thinking                                                                        |
| **Problem**                   | Will be superseded by 7-step Start Project funnel                                                        |
| **Disposition**               | MERGE                                                                                                    |
| **Reason**                    | Concepts (industry, development stage, lead source) should inform new form design                        |
| **Needs Rewrite?**            | YES — new form structure defined in Master Specification                                                 |
| **Needs Owner Verification?** | NO (structure defined by Master Specification)                                                           |
| **Potential Future Location** | `/start-project`                                                                                         |
| **Notes**                     | Development stage options (Idea/Concept through Production Completed) align with new lifecycle language. |

---

### CD-022: Contact Information (All Addresses, Phones, Emails)

| Field                         | Value                                                                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | Footer and `/contact-2/`                                                                                                          |
| **Content Topic**             | 4 office locations, 2 phone numbers, multiple emails, fax numbers                                                                 |
| **Current Value**             | Business contact details                                                                                                          |
| **Problem**                   | Conflicting phone numbers; unverified offices; template email (contact@mysite.com); fax numbers likely obsolete                   |
| **Disposition**               | VERIFY_FIRST                                                                                                                      |
| **Reason**                    | Must verify which offices are active, which phone is correct, which emails are monitored                                          |
| **Needs Rewrite?**            | N/A pending verification                                                                                                          |
| **Needs Owner Verification?** | YES — CRITICAL                                                                                                                    |
| **Potential Future Location** | `/contact` footer                                                                                                                 |
| **Notes**                     | Entered in Verification Register as VR-CONTACT-001 through VR-CONTACT-008. contact@mysite.com is SUSPECT_LEGACY — DO NOT MIGRATE. |

---

### CD-023: "Dawson Shanahan" Content in Tooling Page

| Field                         | Value                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **Source Area**               | `/service/manufacturing/tooling-mold/`                                               |
| **Content Topic**             | Tooling page content containing a person's name that appears to be scraped or copied |
| **Current Value**             | NONE — integrity issue                                                               |
| **Problem**                   | Indicates potentially copied/scraped content; legal and credibility risk             |
| **Disposition**               | DELETE                                                                               |
| **Reason**                    | Copied content must not survive migration                                            |
| **Needs Rewrite?**            | YES — entire page needs original content                                             |
| **Needs Owner Verification?** | YES — investigate origin                                                             |
| **Potential Future Location** | `/capabilities/tooling` (with original content only)                                 |
| **Notes**                     | Entered in Legacy Risk Register as LRR-006.                                          |

---

### CD-024: Manufacturing Process Content (Tooling, Sheet Metal, Extrusion)

| Field                         | Value                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------- |
| **Source Area**               | `/service/manufacturing/*` pages                                                 |
| **Content Topic**             | Detailed manufacturing process descriptions                                      |
| **Current Value**             | Substantial technical knowledge                                                  |
| **Problem**                   | SEO-driven presentation; may contain copied content                              |
| **Disposition**               | KEEP_AND_EDIT                                                                    |
| **Reason**                    | Technical knowledge has value; needs restructuring into clean capability content |
| **Needs Rewrite?**            | YES — audit each page for original content                                       |
| **Needs Owner Verification?** | YES — verify content is original and current                                     |
| **Potential Future Location** | `/capabilities/manufacturing`, `/capabilities/tooling`                           |
| **Notes**                     | Each page must be individually audited for content integrity before migration.   |

---

### CD-025: Press Room Content

| Field                         | Value                                       |
| ----------------------------- | ------------------------------------------- |
| **Source Area**               | `/press-room/`                              |
| **Content Topic**             | Press articles and media mentions           |
| **Current Value**             | Social proof and credibility                |
| **Problem**                   | Content not inventoried in Source Fact Pack |
| **Disposition**               | VERIFY_FIRST                                |
| **Reason**                    | Need full content inventory in Phase 0C     |
| **Needs Rewrite?**            | N/A pending inventory                       |
| **Needs Owner Verification?** | YES                                         |
| **Potential Future Location** | `/insights` or `/press`                     |
| **Notes**                     | Phase 0C content inventory required.        |

---

### CD-026: Visual Gallery Labels (29 Items)

| Field                         | Value                                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/visual-gallery/`                                                                                  |
| **Content Topic**             | 29 observed gallery labels representing projects, categories, or concepts                           |
| **Current Value**             | Portfolio breadth indicator                                                                         |
| **Problem**                   | Labels may be categories not projects; duplicates exist; media/status unknown                       |
| **Disposition**               | VERIFY_FIRST                                                                                        |
| **Reason**                    | Each item must be classified as project, category, duplicate, or concept before migration decisions |
| **Needs Rewrite?**            | N/A pending verification                                                                            |
| **Needs Owner Verification?** | YES — each item                                                                                     |
| **Potential Future Location** | `/work` and `/work/[project-slug]`                                                                  |
| **Notes**                     | Full portfolio register in `01D_PORTFOLIO_SOURCE_REGISTER.md`.                                      |

---

### CD-027: MG-NINE Project Content

| Field                         | Value                                                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Source Area**               | `/mg-nine-vehicle-dvr-camera/` and homepage                                                                         |
| **Content Topic**             | Vehicle DVR camera specs (160-degree FOV, 1080p, G-sensor, 64GB, HDMI, USB, GPS)                                    |
| **Current Value**             | Detailed product information                                                                                        |
| **Problem**                   | POTENTIAL COLLISION — second description references mobile armored PTZ patrol camera; may be two different products |
| **Disposition**               | VERIFY_FIRST                                                                                                        |
| **Reason**                    | Cannot publish case study until project identity is resolved                                                        |
| **Needs Rewrite?**            | YES — after verification                                                                                            |
| **Needs Owner Verification?** | YES — CRITICAL                                                                                                      |
| **Potential Future Location** | `/work/mg-nine` (or separate pages if two products)                                                                 |
| **Notes**                     | Entered in Verification Register as VR-PORTFOLIO-001. Entered in Risk Register as LRR-003.                          |

---

### CD-028: Homepage CTAs (Free Consultation, Contact, Subscribe)

| Field                         | Value                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| **Source Area**               | Homepage (`/`)                                                                     |
| **Content Topic**             | Call-to-action buttons                                                             |
| **Current Value**             | Lead generation entry points                                                       |
| **Problem**                   | "Free Consultation" and "Subscribe" may not align with new lead funnel             |
| **Disposition**               | REWRITE                                                                            |
| **Reason**                    | New site uses "START A PROJECT" as primary CTA per Master Specification            |
| **Needs Rewrite?**            | YES                                                                                |
| **Needs Owner Verification?** | NO (direction set by Master Specification)                                         |
| **Potential Future Location** | Homepage hero, section CTAs, global header                                         |
| **Notes**                     | "Free Consultation" concept entered in Verification Register as VR-COMMERCIAL-005. |

---

### CD-029: Marketing Services Content

| Field                         | Value                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------- |
| **Source Area**               | `/process-2/` (Marketing Services heading)                                    |
| **Content Topic**             | Marketing services as a process capability                                    |
| **Current Value**             | Shows service breadth                                                         |
| **Problem**                   | May not belong in core physical product development positioning               |
| **Disposition**               | VERIFY_FIRST                                                                  |
| **Reason**                    | Owner must decide if marketing services are core, peripheral, or discontinued |
| **Needs Rewrite?**            | N/A pending decision                                                          |
| **Needs Owner Verification?** | YES                                                                           |
| **Potential Future Location** | UNDECIDED                                                                     |
| **Notes**                     | Related to CD-009 digital services scope question.                            |

---

### CD-030: Quality Systems Content

| Field                         | Value                                                                  |
| ----------------------------- | ---------------------------------------------------------------------- |
| **Source Area**               | `/process-2/` (Quality Systems heading)                                |
| **Content Topic**             | Quality systems as a process capability                                |
| **Current Value**             | Shows quality awareness                                                |
| **Problem**                   | Content details not supplied in Source Fact Pack                       |
| **Disposition**               | VERIFY_FIRST                                                           |
| **Reason**                    | Need more information about what quality systems are actually in place |
| **Needs Rewrite?**            | N/A pending verification                                               |
| **Needs Owner Verification?** | YES                                                                    |
| **Potential Future Location** | `/capabilities/testing-validation` or `/process`                       |
| **Notes**                     | Related to regulatory verification items.                              |

---

## DISPOSITION SUMMARY

| Disposition   | Count                                                      |
| ------------- | ---------------------------------------------------------- |
| REWRITE       | 9                                                          |
| VERIFY_FIRST  | 12                                                         |
| KEEP_AND_EDIT | 4                                                          |
| MERGE         | 1                                                          |
| DELETE        | 1                                                          |
| UNDECIDED     | 0                                                          |
| **Total**     | **30** (note: CD-026 covers 29 gallery items as one entry) |

---

## NOTES

- All dispositions are preliminary and subject to owner verification.
- VERIFY_FIRST is the most common disposition, reflecting the evidence governance rule that CURRENT_SITE_STATES does not equal approval to publish.
- REWRITE dispositions reflect the Master Specification's new information architecture and positioning direction.
- No content from this register should be copied verbatim into the new website.
