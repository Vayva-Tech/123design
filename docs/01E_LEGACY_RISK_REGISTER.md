# LEGACY RISK REGISTER

**Document ID:** 01E_LEGACY_RISK_REGISTER
**Phase:** 0A — Discovery Documentation Only
**Status:** COMPLETE
**Date:** 2026-09-26

---

## PURPOSE

This register records every risk identified during the Phase 0A source audit that could negatively impact the new website if not addressed before or during migration. Each risk is classified by severity, impact, mitigation strategy, ownership, and the phase in which it should be resolved.

---

## RISK REGISTER

| Risk ID | Risk                                                                                                                                        | Severity | Impact                                                                                                               | Mitigation                                                                                                                                                                 | Owner               | Phase to Resolve                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------- |
| LRR-001 | Publishing unverified metrics (projects completed, client satisfaction, global clients, awards) that currently render as zero/placeholder   | CRITICAL | Credibility damage; visitors see unprofessional zero values; misleading if real but unverified numbers are published | Do not migrate any metrics. Remove from new site until owner supplies and verifies real values.                                                                            | Design/Product Lead | Phase 0C or later (after owner verification)      |
| LRR-002 | Publishing unverified client names (Boeing, Coca-Cola, Georgia-Pacific, Philip Morris, Xerox, Cirkul, Lipton) without permission            | CRITICAL | Legal liability; reputational damage; loss of client trust; potential cease-and-desice                               | Do not display any client names or logos until owner confirms each relationship and provides written permission.                                                           | Design/Product Lead | Phase 0C or later (after owner verification)      |
| LRR-003 | MG-NINE project collision — two different product descriptions (vehicle DVR camera vs. armored PTZ patrol camera) for the same project name | HIGH     | Incorrect case study; client confusion; credibility damage                                                           | Owner must clarify: is MG-NINE one product or two? Are there two separate projects with similar names? Resolve before creating any case study content.                     | Design/Product Lead | Phase 0C (portfolio verification)                 |
| LRR-004 | Conflicting phone numbers — (203) 918-4057 in footer vs. (941) 265-2173 on contact page                                                     | HIGH     | Clients cannot reach the company; lost business; confusion                                                           | Owner must confirm which number(s) are active. Publish only verified numbers.                                                                                              | Design/Product Lead | Phase 0C (contact verification)                   |
| LRR-005 | Unverified office locations — four offices listed (Sarasota HQ, Sarasota Studio, San Francisco, Calgary)                                    | HIGH     | Directing clients to closed offices; legal exposure for offices that may not exist                                   | Owner must confirm which offices are active. Publish only verified locations.                                                                                              | Design/Product Lead | Phase 0C (contact verification)                   |
| LRR-006 | "Dawson Shanahan" name found in tooling page content — indicates potentially scraped or copied content                                      | HIGH     | Copyright infringement risk; credibility damage if discovered; SEO penalty for duplicate content                     | Audit ALL service pages for copied content. Do not migrate any content that cannot be confirmed as original. Rewrite with original content.                                | Design/Product Lead | Phase 0C (content audit)                          |
| LRR-007 | Publishing regulatory claims (UL, FDA, FCC, ISO, EMC, CE, Six Sigma) without verifying what they mean                                       | CRITICAL | Regulatory misrepresentation; legal liability; false advertising claims                                              | Do not publish any regulatory acronyms until owner clarifies: does 123.design hold certifications, design to standards, coordinate testing, or provide compliance support? | Design/Product Lead | Phase 0C (capability verification)                |
| LRR-008 | Publishing unverified commercial claims ($15,000 pricing, 8-12 week timelines, specific countries for production partners)                  | HIGH     | Client expectation mismatch; legal exposure; financial commitments without agreement                                 | Do not publish pricing, timelines, or geography claims until owner verifies each one.                                                                                      | Design/Product Lead | Phase 0C (commercial verification)                |
| LRR-009 | Template email address (contact@mysite.com) in footer                                                                                       | MEDIUM   | Embarrassment; credibility damage; signals unprofessionalism                                                         | Do not migrate. This is clearly a template/default address.                                                                                                                | Design/Product Lead | Phase 0A (identified — do not migrate)            |
| LRR-010 | Network entities (Nespa, tru Dimension, Innovators Plus) may not exist or may not be affiliated                                             | MEDIUM   | Linking to defunct organizations; misrepresenting relationships; legal exposure                                      | Do not publish network page until owner verifies each entity's existence, legal relationship, and whether they should appear on the new site.                              | Design/Product Lead | Phase 0C (network verification)                   |
| LRR-011 | Patent services scope unclear — may imply legal representation                                                                              | HIGH     | Unauthorized practice of law implication; legal liability                                                            | Owner must clarify: does 123.design offer legal patent services, refer to a partner, or only support patent-oriented product development? Do not publish until resolved.   | Design/Product Lead | Phase 0C (legal verification)                     |
| LRR-012 | Digital services (web dev, app dev, data science, SEO) may not belong in new physical product development positioning                       | LOW      | Message dilution; confused positioning                                                                               | Owner must decide if these services are core, peripheral, or discontinued. Default: do not include in new IA until confirmed.                                              | Design/Product Lead | Phase 0B or 0C (scope decision)                   |
| LRR-013 | SEO keyword-stuffing in service page URLs and content                                                                                       | MEDIUM   | Poor user experience; may trigger search engine penalties if carried forward                                         | Do not preserve old URL structure. All service pages get REWRITE with clean, human-readable content.                                                                       | Design/Product Lead | Phase 0D (redirect planning)                      |
| LRR-014 | Portfolio gallery labels may be categories, not projects (Multiple, Consumer, Promo, Medical Multiple)                                      | MEDIUM   | Publishing category labels as project names; confused portfolio                                                      | Owner must classify each gallery label as project, category, duplicate, or concept before portfolio migration.                                                             | Design/Product Lead | Phase 0C (portfolio verification)                 |
| LRR-015 | Potential portfolio duplicates (Fishing Lures/Fishing Lure, Promo x2, Vehicular DVR/MG-NINE)                                                | MEDIUM   | Duplicate entries in portfolio; unprofessional appearance                                                            | Owner must resolve duplicates before portfolio migration.                                                                                                                  | Design/Product Lead | Phase 0C (portfolio verification)                 |
| LRR-016 | Team member (Max Keller) may no longer hold stated role                                                                                     | MEDIUM   | Embarrassment; incorrect information                                                                                 | Owner must verify current team roster before publishing any team information.                                                                                              | Design/Product Lead | Phase 0C (team verification)                      |
| LRR-017 | Press room content not inventoried — may contain outdated or irrelevant articles                                                            | LOW      | Outdated press references; weak credibility signal                                                                   | Phase 0C content inventory needed before press/migration decisions.                                                                                                        | Design/Product Lead | Phase 0C (content inventory)                      |
| LRR-018 | Fax numbers listed on contact page — likely obsolete                                                                                        | LOW      | Confusion; signals outdated business practices                                                                       | Do not migrate fax numbers unless owner explicitly confirms they are still in use.                                                                                         | Design/Product Lead | Phase 0A (identified — do not migrate by default) |
| LRR-019 | "Free consultation" and fee-based consultation claims                                                                                       | MEDIUM   | Financial commitment without agreement; policy may have changed                                                      | Owner must verify current consultation policy before publishing.                                                                                                           | Design/Product Lead | Phase 0C (commercial verification)                |
| LRR-020 | BlackRock.AI name similarity to BlackRock (major investment firm)                                                                           | LOW      | Potential trademark confusion; may be completely unrelated                                                           | Owner must clarify relationship to BlackRock name, if any.                                                                                                                 | Design/Product Lead | Phase 0C (portfolio verification)                 |

---

## SEVERITY DISTRIBUTION

| Severity  | Count  |
| --------- | ------ |
| CRITICAL  | 3      |
| HIGH      | 7      |
| MEDIUM    | 7      |
| LOW       | 3      |
| **Total** | **20** |

---

## CRITICAL RISKS — IMMEDIATE ACTION REQUIRED

1. **LRR-001**: Do not publish any metrics until verified values are supplied.
2. **LRR-002**: Do not publish any client names until permission is confirmed.
3. **LRR-007**: Do not publish any regulatory claims until capability is clarified.

---

## RESOLUTION PHASE MAPPING

| Phase              | Risks to Resolve                                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase 0A (current) | LRR-009, LRR-018 (identified — do not migrate)                                                                                                 |
| Phase 0B           | LRR-012 (scope decision)                                                                                                                       |
| Phase 0C           | LRR-001, LRR-002, LRR-003, LRR-004, LRR-005, LRR-006, LRR-007, LRR-008, LRR-010, LRR-011, LRR-014, LRR-015, LRR-016, LRR-017, LRR-019, LRR-020 |
| Phase 0D           | LRR-013 (URL/redirect planning)                                                                                                                |

---

## NOTES

- All risks are based on the Source Fact Pack. Additional risks may emerge during Phase 0B (Asset Manifest), Phase 0C (Content Inventory), and Phase 0D (Redirect Inventory).
- CRITICAL risks must be resolved before ANY content migration begins.
- HIGH risks should be resolved before the affected pages are built.
- MEDIUM and LOW risks can be resolved during their respective content creation phases.
