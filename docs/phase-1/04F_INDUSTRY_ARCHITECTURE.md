# 04F — Industry Architecture

Defines all 6 industries for the 123.design website. For each industry: user need, content purpose, relevant capabilities, compliance-language restrictions, project rules, and CTA logic.

Industries represent who 123.design works with. Each industry page demonstrates understanding of that industry's specific product development challenges and shows relevant capability and project evidence.

---

## Cross-Industry Rules

1. **No empty industry pages.** Every industry must have real content or not exist. No placeholder descriptions.
2. **No unverified projects.** Only PUBLISHED, owner-approved projects appear on industry pages. If no published projects exist for an industry, the related projects module does not render.
3. **High-restriction industries require explicit approval.** Medical and Defense & Security projects are HOLD by default and require owner approval before publication.
4. **Compliance language must be precise.** Do not claim certifications, regulatory expertise, or domain expertise without verification. When in doubt, use more careful language.
5. **CTA consistency.** START A PROJECT is the universal primary CTA across standard industry pages. Medical and Defense use Schedule Conversation as primary (lower commitment).
6. **No speculative claims.** Do not infer customers, deployments, results, or expertise without explicit owner approval.
7. **Capability relevance.** Each industry page must show only capabilities that are genuinely relevant to that industry — do not list all 10 capabilities on every industry page.
8. **No cross-industry contamination.** Each industry page must speak to that industry's specific challenges. Content from one industry must not bleed into another.

---

## Industry 1: Consumer Products

**Route:** `/industries/consumer-products`

### User Need

Bring a consumer product to market — form, function, and manufacturability. Founders and companies need end-to-end product development for consumer-facing products: strong industrial design (form, UX, CMF), sound mechanical engineering, rapid prototyping for iteration, and manufacturing support for production at scale. The consumer product market demands speed to market, design quality, and cost-effective production.

### Content Purpose

Show consumer product expertise, speed to market, and design quality. Demonstrate that 123.design has delivered consumer products across categories — electronics, housewares, personal care, accessories, and other consumer categories. Content should emphasize the balance of aesthetics, function, and manufacturability that consumer products require.

### Relevant Capabilities

| Capability             | Relevance                                                            |
| ---------------------- | -------------------------------------------------------------------- |
| Industrial Design      | HIGH — Consumer products demand strong form, UX, and CMF             |
| Mechanical Engineering | HIGH — Functional design, mechanism integration, DFM                 |
| Prototyping            | HIGH — Rapid iteration is essential for consumer product development |
| Manufacturing          | HIGH — Production at scale, cost management, quality                 |
| Product Development    | HIGH — End-to-end coordination from concept to shelf                 |
| Product Animation      | MEDIUM — Marketing visualization, stakeholder presentations          |

### Compliance-Language Restrictions

**Standard consumer product language.** No special restrictions beyond general accuracy requirements.

- Do not claim specific retail distribution or sales outcomes unless verified (e.g., "sold at Target" or "100K units sold").
- Do not claim specific consumer market success (e.g., "bestselling", "market-leading") unless verified.
- Do not claim specific brand partnerships unless verified and approved.

### Project Rules

| Project         | Status    | Notes                                                   |
| --------------- | --------- | ------------------------------------------------------- |
| SPOONY          | Candidate | Consumer product — verify publication status with owner |
| Bath Tray/Caddy | Candidate | Consumer product — verify publication status with owner |

- Show published consumer products only.
- Projects must have owner approval for publication.
- Select projects that demonstrate consumer product depth — not just any project with a consumer end-use.

### CTA Logic

- **Primary:** START A PROJECT
- Standard conversion path. Consumer product prospects are typically ready to discuss a project.

---

## Industry 2: Medical

**Route:** `/industries/medical`

### User Need

Navigate regulatory complexity while developing medical devices. Medical device companies need development partners who understand the rigor required — validation, documentation, quality systems, design controls — without 123.design claiming to be a regulatory expert. The medical industry demands precision, traceability, and a development process that supports regulatory submission.

### Content Purpose

Demonstrate understanding of medical product constraints **without overclaiming.** Show that 123.design has worked on medical products and understands the development rigor required, without claiming FDA expertise, regulatory approvals, or certifications. Content should emphasize: design control awareness, validation discipline, documentation practices, and the ability to work within regulated development frameworks.

### Relevant Capabilities

| Capability             | Relevance                                                                       |
| ---------------------- | ------------------------------------------------------------------------------- |
| Mechanical Engineering | HIGH — Device mechanisms, enclosures, materials biocompatibility considerations |
| Electrical Engineering | HIGH — Medical device electronics, safety considerations, signal integrity      |
| Testing & Validation   | HIGH — Verification and validation are central to medical device development    |
| Program Management     | HIGH — Structured program oversight, documentation, traceability                |
| Product Development    | MEDIUM — Integrated development within a regulated framework                    |
| Industrial Design      | MEDIUM — Human factors for medical devices, usability                           |

### Compliance-Language Restrictions

**HIGH RESTRICTION — Careful language around regulation.** This is the most restricted industry for content.

| Restriction                       | Detail                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No FDA claims**                 | Do NOT claim FDA expertise, FDA consulting capability, or regulatory submission experience without explicit owner verification.                                                                                     |
| **No regulatory approval claims** | Do NOT claim 510(k), PMA, De Novo, or any regulatory pathway expertise without owner verification.                                                                                                                  |
| **No certification claims**       | Do NOT claim ISO 13485, ISO 14971, or any quality system certification without owner verification.                                                                                                                  |
| **No customer/result inference**  | Never infer customers, deployments, clinical use, or market results. Do not say "leading medical device companies trust us" or "our products are in clinical use" unless owner explicitly approves specific claims. |
| **Careful language**              | Use precise language: "we have supported medical device development" NOT "we are medical device experts." "We understand the development rigor required" NOT "we navigate FDA regulatory pathways."                 |
| **No device claims**              | Do not claim specific device types or therapeutic areas without verification.                                                                                                                                       |

### Project Rules

| Status   | Rule                                                               |
| -------- | ------------------------------------------------------------------ |
| **HOLD** | All medical projects remain HOLD until owner publication approval. |

- No medical project is auto-exposed. Even if a project is technically complete, it requires explicit owner approval before publication on the website.
- When in doubt, do not publish. Medical claims carry legal and regulatory risk.
- If no medical projects are approved for publication, the Related Projects module does not render. The industry page still exists with capability and context content.

### CTA Logic

- **Primary:** Schedule Conversation (lower commitment — medical prospects may want to discuss confidentiality, fit, and capability before committing to a project funnel)
- **Secondary:** START A PROJECT (available for prospects who are ready to begin)

**Rationale:** Medical device development involves significant upfront discussion about regulatory strategy, IP protection, and technical fit. A lower-commitment first step (Schedule Conversation) respects this reality.

---

## Industry 3: Defense & Security

**Route:** `/industries/defense-security`

### User Need

Secure, compliant, reliable product development for defense applications. Defense and security organizations need development partners who understand confidentiality requirements, reliability standards, and the constraints of sensitive work. The defense industry demands operational discipline, documentation rigor, and the ability to work within security frameworks.

### Content Purpose

Show relevant technical capability **without revealing sensitive details.** Demonstrate that 123.design has the technical capability and operational discipline for defense work, without inferring specific contracts, deployments, or security clearances. Content should emphasize: engineering rigor, reliability focus, documentation discipline, and the ability to work within confidentiality constraints.

### Relevant Capabilities

| Capability             | Relevance                                                                |
| ---------------------- | ------------------------------------------------------------------------ |
| Mechanical Engineering | HIGH — Ruggedized design, environmental hardening, mechanism reliability |
| Electrical Engineering | HIGH — Defense electronics, secure communications, ruggedized PCB design |
| Testing & Validation   | HIGH — Reliability testing, environmental testing, qualification         |
| Program Management     | HIGH — Structured oversight, documentation, milestone management         |
| Product Development    | MEDIUM — Integrated development for defense products                     |
| Prototyping            | MEDIUM — Rapid iteration for defense prototypes                          |

### Compliance-Language Restrictions

**HIGH RESTRICTION — Careful language around confidentiality and security.**

| Restriction                           | Detail                                                                                                                                                                                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **No program names**                  | Do NOT reveal specific program names, project codenames, or classified project details.                                                                                                         |
| **No classification claims**          | Do NOT infer classified work, security clearances, or facility security clearances without explicit owner verification.                                                                         |
| **No government relationship claims** | Do NOT claim specific government relationships, contracts, or agency partnerships without owner verification.                                                                                   |
| **No standards claims**               | Do NOT claim MIL-STD compliance, ITAR registration, or specific defense standards expertise without verification.                                                                               |
| **No clearance claims**               | Do NOT claim individual or facility security clearances without verification.                                                                                                                   |
| **Careful language**                  | Use precise language: "we have supported defense product development" NOT "we are a defense contractor." "We understand the operational discipline required" NOT "we hold security clearances." |

### Project Rules

| Status   | Rule                                                   |
| -------- | ------------------------------------------------------ |
| **HOLD** | All defense projects remain HOLD until owner approval. |

- No defense project is auto-exposed. Even if a project is technically complete, it requires explicit owner approval before publication.
- When in doubt, do not publish. Defense claims carry security and contractual risk.
- If no defense projects are approved for publication, the Related Projects module does not render. The industry page still exists with capability and context content.

### CTA Logic

- **Primary:** Schedule Conversation (lower commitment — defense prospects need to discuss confidentiality, security requirements, and fit before committing to a project funnel)
- **Secondary:** START A PROJECT (available for prospects who are ready to begin)

**Rationale:** Defense and security work involves significant upfront discussion about security requirements, confidentiality agreements, and technical fit. A lower-commitment first step respects this reality.

---

## Industry 4: Electronics

**Route:** `/industries/electronics`

### User Need

Electronic product development — PCB, firmware, enclosure, and integration. Companies need electrical engineering depth, embedded systems expertise, and integration capability for electronic products. The electronics industry demands strong EE fundamentals, rapid iteration, and the ability to integrate electronics into well-designed enclosures.

### Content Purpose

Show EE depth and integration capability. Demonstrate that 123.design can handle complex electronics — PCB design, embedded systems, signal processing, power management, and electronics integration into complete products with well-designed enclosures. Content should emphasize: EE technical depth, ME/EE integration, and the ability to deliver complete electronic products (not just bare PCBs).

### Relevant Capabilities

| Capability             | Relevance                                                                        |
| ---------------------- | -------------------------------------------------------------------------------- |
| Electrical Engineering | HIGH — PCB design, embedded systems, power, signal integrity, firmware           |
| Mechanical Engineering | HIGH — Enclosure design, thermal management, connector access, PCB mounting      |
| Industrial Design      | MEDIUM — Product form, user interface, industrial design for electronic products |
| Prototyping            | HIGH — Electronic prototyping, PCB iteration, functional prototypes              |
| Testing & Validation   | HIGH — Electronics testing, functional verification, EMC considerations          |
| Product Development    | MEDIUM — Integrated development context                                          |

### Compliance-Language Restrictions

**Standard electronics language.** No special restrictions beyond general accuracy requirements.

- Do not claim specific electronics certifications (UL, FCC, CE) without verification.
- Do not claim specialized electronics testing or lab capabilities without verification.
- Do not claim specific protocol expertise (Bluetooth, WiFi, Zigbee, etc.) without verified project evidence.

### Project Rules

| Project | Status    | Notes                                                      |
| ------- | --------- | ---------------------------------------------------------- |
| DBLL    | Candidate | Electronics project — verify publication status with owner |

- Show published electronics projects only.
- Projects must have owner approval for publication.
- Select projects that demonstrate electronics depth — complex PCBs, embedded systems, or electronics integration challenges.

### CTA Logic

- **Primary:** START A PROJECT
- Standard conversion path. Electronics prospects are typically ready to discuss a project.

---

## Industry 5: Industrial

**Route:** `/industries/industrial`

### User Need

Robust products for industrial and commercial use. Industrial companies need products that withstand harsh environments, meet reliability requirements, and are designed for efficient manufacturing. The industrial market demands durability, engineering rigor, and manufacturing discipline.

### Content Purpose

Show durability, engineering rigor, and manufacturing capability. Demonstrate that 123.design can develop industrial products — heavy-duty, reliable, manufacturable — with strong mechanical engineering and manufacturing support. Content should emphasize: robust design, DFM discipline, materials selection for harsh environments, and production manufacturing competence.

### Relevant Capabilities

| Capability             | Relevance                                                                   |
| ---------------------- | --------------------------------------------------------------------------- |
| Mechanical Engineering | HIGH — Robust design, structural analysis, materials for harsh environments |
| Industrial Design      | MEDIUM — Industrial product form, operator ergonomics, brand identity       |
| Manufacturing          | HIGH — Production manufacturing, supplier coordination, quality             |
| Tooling                | HIGH — Production tooling for industrial products                           |
| Prototyping            | MEDIUM — Functional prototypes for industrial validation                    |
| Product Development    | MEDIUM — Integrated development context                                     |

### Compliance-Language Restrictions

**Standard industrial language.** No special restrictions beyond general accuracy requirements.

- Do not claim specific industrial certifications or standards compliance (ISO, ANSI, etc.) without verification.
- Do not claim specialized industrial testing or facilities without verification.
- Do not claim specific performance metrics (load capacity, lifecycle, environmental ratings) without verification.

### Project Rules

| Project  | Status                       | Notes                                                                  |
| -------- | ---------------------------- | ---------------------------------------------------------------------- |
| Tamarack | Candidate (legacy/secondary) | Industrial project — verify publication status and priority with owner |

- Show published industrial projects only.
- Projects must have owner approval for publication.
- Select projects that demonstrate industrial product depth — robust design, manufacturing complexity, or tooling challenges.

### CTA Logic

- **Primary:** START A PROJECT
- Standard conversion path. Industrial prospects are typically ready to discuss a project.

---

## Industry 6: Emerging Technology

**Route:** `/industries/emerging-technology`

### User Need

Early-stage technology development and novel products. Companies developing novel products — robotics, AI hardware, new energy, advanced materials, or other emerging categories — need development partners who can handle ambiguity and rapid iteration. The emerging technology space demands adaptability, speed, and comfort with undefined requirements.

### Content Purpose

Show ability to work with ambiguity and novel problems. Demonstrate that 123.design can work in undefined or emerging categories where requirements evolve, technologies are novel, and speed is critical. Content should emphasize: adaptability, rapid iteration, cross-capability integration, and comfort with uncertainty. Not domain expertise in specific emerging technologies — but the ability to develop products in emerging technology contexts.

### Relevant Capabilities

| Capability             | Relevance                                                                  |
| ---------------------- | -------------------------------------------------------------------------- |
| Product Development    | HIGH — End-to-end development for novel products where the path is unclear |
| Industrial Design      | HIGH — Form definition for novel products that have no precedent           |
| Prototyping            | HIGH — Rapid iteration is essential when requirements are evolving         |
| Electrical Engineering | HIGH — Novel electronics, custom sensors, emerging communication protocols |
| Mechanical Engineering | MEDIUM — Mechanical design for novel form factors and mechanisms           |
| Program Management     | MEDIUM — Structured coordination even when the path is uncertain           |

### Compliance-Language Restrictions

**Do not overclaim in unverified domains.**

- Do not claim expertise in specific emerging technologies (robotics, AI, blockchain hardware, quantum computing, etc.) unless verified through published projects.
- Language should emphasize adaptability and rapid development, not domain expertise in unverified categories.
- Phrase: "we work in emerging technology categories" NOT "we are experts in [specific emerging technology]."
- Do not claim specific technology partnerships or integrations without verification.

### Project Rules

| Project | Status    | Notes                                                              |
| ------- | --------- | ------------------------------------------------------------------ |
| VIRT    | Candidate | Emerging technology project — verify publication status with owner |

- Show published emerging technology projects only.
- Projects must have owner approval for publication.
- Select projects that demonstrate adaptability — novel technologies, rapid iteration, or undefined requirements.

### CTA Logic

- **Primary:** START A PROJECT
- Standard conversion path. Emerging technology prospects are typically ready to discuss a project.

---

## Industry Capability Matrix

This matrix shows which capabilities are relevant to each industry. H = High relevance, M = Medium relevance, blank = not a primary focus.

| Capability             | Consumer | Medical | Defense | Electronics | Industrial | Emerging Tech |
| ---------------------- | -------- | ------- | ------- | ----------- | ---------- | ------------- |
| Product Development    | H        | M       | M       | M           | M          | H             |
| Industrial Design      | H        | M       |         | M           | M          | H             |
| Mechanical Engineering | H        | H       | H       | H           | H          | M             |
| Electrical Engineering |          | H       | H       | H           |            | H             |
| Prototyping            | H        |         | M       | H           | M          | H             |
| Testing & Validation   |          | H       | H       | H           |            |               |
| Product Animation      | M        |         |         |             |            |               |
| Tooling                |          |         |         |             | H          |               |
| Manufacturing          | H        |         |         |             | H          |               |
| Program Management     |          | H       | H       |             |            | M             |

---

## Industry CTA Summary

| Industry            | Primary CTA           | Secondary CTA   | Rationale                                                      |
| ------------------- | --------------------- | --------------- | -------------------------------------------------------------- |
| Consumer Products   | START A PROJECT       | —               | Standard conversion                                            |
| Medical             | Schedule Conversation | START A PROJECT | Lower commitment first step; regulatory discussion needed      |
| Defense & Security  | Schedule Conversation | START A PROJECT | Lower commitment first step; confidentiality discussion needed |
| Electronics         | START A PROJECT       | —               | Standard conversion                                            |
| Industrial          | START A PROJECT       | —               | Standard conversion                                            |
| Emerging Technology | START A PROJECT       | —               | Standard conversion                                            |

---

## Industry Project Status Summary

| Industry            | Candidate Projects          | Publication Status                                             |
| ------------------- | --------------------------- | -------------------------------------------------------------- |
| Consumer Products   | SPOONY, Bath Tray/Caddy     | Verify with owner                                              |
| Medical             | Unknown                     | **HOLD** — No projects publish without explicit owner decision |
| Defense & Security  | Unknown                     | **HOLD** — No projects publish without explicit owner decision |
| Electronics         | DBLL                        | Verify with owner                                              |
| Industrial          | Tamarack (legacy/secondary) | Verify with owner                                              |
| Emerging Technology | VIRT                        | Verify with owner                                              |
