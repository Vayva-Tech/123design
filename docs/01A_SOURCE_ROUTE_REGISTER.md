# SOURCE ROUTE REGISTER

**Document ID:** 01A_SOURCE_ROUTE_REGISTER
**Phase:** 0A — Discovery Documentation Only
**Status:** COMPLETE
**Date:** 2026-09-26

---

## PURPOSE

This register records every legacy URL observed during the Source Fact Pack collection. It is NOT the complete legacy URL inventory. Additional routes will be supplied during Phase 0D (Redirect Inventory).

Each route is recorded with its observed purpose, content family, known importance, migration concern, verification requirement, likely future destination, and current status.

---

## PRIMARY PAGES

| #   | Legacy Route                | Observed Purpose                | Content Family           | Known Importance | Migration Concern                                                    | Verification Required                              | Likely Future Destination                  | Status           |
| --- | --------------------------- | ------------------------------- | ------------------------ | ---------------- | -------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------ | ---------------- |
| 1   | `/`                         | Homepage                        | Home / Positioning       | HIGH             | Metrics render as zero; process too simplified; MG-NINE collision    | OWNER_VERIFY metrics, process, featured projects   | `/` (new homepage)                         | CONFIRMED_SOURCE |
| 2   | `/about/`                   | About page                      | Company / Team / Clients | HIGH             | Zero metrics; client names unverified; team member unverified        | OWNER_VERIFY all claims, team, clients             | `/about`                                   | CONFIRMED_SOURCE |
| 3   | `/network/`                 | Network / related organizations | Company / Partnerships   | MEDIUM           | Three entities unverified; relationship type unclear                 | OWNER_VERIFY Nespa, tru Dimension, Innovators Plus | UNDECIDED — may not exist in new IA        | CONFIRMED_SOURCE |
| 4   | `/press-room/`              | Press and articles              | Press / Media            | MEDIUM           | Content not inventoried; articles unverified                         | Phase 0C content inventory needed                  | `/insights` or `/press`                    | CONFIRMED_SOURCE |
| 5   | `/careers/`                 | Careers link in global nav      | Company / Recruitment    | LOW              | No content details supplied                                          | OWNER_VERIFY if careers page needed                | `/careers` or footer link only             | CONFIRMED_SOURCE |
| 6   | `/visual-gallery/`          | Broad portfolio/gallery         | Portfolio                | HIGH             | Labels may be categories not projects; duplicates; media unknown     | OWNER_VERIFY each gallery item                     | `/work`                                    | CONFIRMED_SOURCE |
| 7   | `/product-design-firm-usa/` | Primary Services page           | Services / Capabilities  | HIGH             | SEO-driven URL; keyword stuffing; digital services scope mismatch    | OWNER_VERIFY scope; REWRITE content                | `/capabilities`                            | CONFIRMED_SOURCE |
| 8   | `/process-2/`               | Process page                    | Process / Methodology    | HIGH             | Abstract headings; patent services unclear; too conceptual           | OWNER_VERIFY patent services; REWRITE              | `/process`                                 | CONFIRMED_SOURCE |
| 9   | `/faq/`                     | FAQ page                        | Lead Gen / Information   | MEDIUM           | Commercial claims unverified; pricing/timeline/geography             | OWNER_VERIFY all claims                            | `/faq` or integrated into `/start-project` | CONFIRMED_SOURCE |
| 10  | `/contact-2/`               | Contact page                    | Contact / Lead Gen       | HIGH             | Phone conflict; 4 offices unverified; template email; form structure | OWNER_VERIFY all contact details                   | `/contact` + `/start-project`              | CONFIRMED_SOURCE |

---

## PROJECT / PORTFOLIO PAGES

| #   | Legacy Route                   | Observed Purpose           | Content Family         | Known Importance | Migration Concern                                                             | Verification Required                      | Likely Future Destination                    | Status           |
| --- | ------------------------------ | -------------------------- | ---------------------- | ---------------- | ----------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------- | ---------------- |
| 11  | `/portfolio/home-goods/oral4/` | ORAL4 project page         | Portfolio / Case Study | HIGH             | Featured on homepage; needs full case study verification                      | OWNER_VERIFY project details, scope, media | `/work/oral4`                                | CONFIRMED_SOURCE |
| 12  | `/prelynx-portal/`             | PreLynx project page       | Portfolio / Case Study | HIGH             | Featured on homepage; portal/software product                                 | OWNER_VERIFY project details, scope, media | `/work/prelynx`                              | CONFIRMED_SOURCE |
| 13  | `/mg-nine-vehicle-dvr-camera/` | MG-NINE Vehicle DVR Camera | Portfolio / Case Study | HIGH             | POTENTIAL COLLISION — second description references armored PTZ patrol camera | OWNER_VERIFY identity; resolve duplicate   | `/work/mg-nine` (one page, verified content) | CONFIRMED_SOURCE |

---

## SERVICE PAGES

| #   | Legacy Route                                                                 | Observed Purpose                | Content Family          | Known Importance | Migration Concern                                                 | Verification Required                  | Likely Future Destination              | Status           |
| --- | ---------------------------------------------------------------------------- | ------------------------------- | ----------------------- | ---------------- | ----------------------------------------------------------------- | -------------------------------------- | -------------------------------------- | ---------------- |
| 14  | `/service/project-management/product-positioning-marketing/`                 | Product positioning & marketing | Service / Strategy      | MEDIUM           | SEO-driven URL slug                                               | REWRITE content                        | `/capabilities/program-management`     | CONFIRMED_SOURCE |
| 15  | `/service/industrial-design/industrial-product-design-refinement-process/`   | Industrial design / refinement  | Service / Design        | HIGH             | SEO-driven URL slug                                               | REWRITE content                        | `/capabilities/industrial-design`      | CONFIRMED_SOURCE |
| 16  | `/service/industrial-design/product-animation/`                              | Product animation               | Service / Visualization | MEDIUM           | SEO-driven URL slug                                               | REWRITE content                        | `/capabilities/product-animation`      | CONFIRMED_SOURCE |
| 17  | `/service/mechanical-engineering/mechanical-engineering-material-selection/` | Material selection              | Service / Engineering   | MEDIUM           | SEO-driven URL slug                                               | REWRITE content                        | `/capabilities/mechanical-engineering` | CONFIRMED_SOURCE |
| 18  | `/service/manufacturing/tooling-mold/`                                       | Tooling & mold                  | Service / Manufacturing | HIGH             | SEO-driven URL slug; may contain "Dawson Shanahan" copied content | INVESTIGATE content integrity; REWRITE | `/capabilities/tooling`                | CONFIRMED_SOURCE |
| 19  | `/service/manufacturing/sheet-metal-forming/`                                | Sheet metal forming             | Service / Manufacturing | HIGH             | SEO-driven URL slug                                               | REWRITE content                        | `/capabilities/manufacturing`          | CONFIRMED_SOURCE |
| 20  | `/service/manufacturing/metal-extrusion/`                                    | Metal extrusion                 | Service / Manufacturing | MEDIUM           | SEO-driven URL slug                                               | REWRITE content                        | `/capabilities/manufacturing`          | CONFIRMED_SOURCE |

---

## SUMMARY STATISTICS

| Category                  | Count  |
| ------------------------- | ------ |
| Primary pages             | 10     |
| Project/portfolio pages   | 3      |
| Service pages             | 7      |
| **Total routes recorded** | **20** |

---

## NOTES

- This register is NOT complete. Additional legacy URLs will be supplied in Phase 0D.
- All service page URLs follow an SEO-driven pattern (`/service/[category]/[long-keyword-slug]/`) that will not be preserved. The new IA uses `/capabilities/[capability-slug]`.
- All content on these pages is classified as CURRENT_SITE_STATES only. Nothing is approved for migration.
- Redirect mapping will be performed in Phase 0D after the full legacy URL inventory is available.
