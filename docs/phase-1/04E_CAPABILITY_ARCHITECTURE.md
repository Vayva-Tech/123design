# 04E — Capability Architecture

Defines all 10 capabilities for the 123.design website. For each capability: purpose, target user, search intent, lifecycle mapping, core subtopics, related capabilities, related project logic, CTA logic, and content restrictions.

Capabilities represent what 123.design does. They are organized into 4 groups:

| Group                      | Capabilities                                              |
| -------------------------- | --------------------------------------------------------- |
| **STRATEGY & DEVELOPMENT** | Product Development, Program Management                   |
| **DESIGN**                 | Industrial Design, Product Animation                      |
| **ENGINEERING**            | Mechanical Engineering, Electrical Engineering            |
| **PROTOTYPE & PRODUCTION** | Prototyping, Testing & Validation, Tooling, Manufacturing |

---

## Cross-Capability Rules

1. **No empty capability pages.** Every capability must have real content or not exist. No placeholder descriptions.
2. **No generic descriptions.** Every capability page must reflect 123.design's actual work and approach, not textbook definitions.
3. **No unverified claims.** Do not claim certifications, equipment, facilities, or domain expertise without owner verification.
4. **Lifecycle accuracy.** Lifecycle mappings must reflect actual practice, not aspirational positioning.
5. **Related project accuracy.** Related projects must be PUBLISHED and must genuinely demonstrate the capability. Not every project that touched a capability qualifies.
6. **CTA consistency.** START A PROJECT is the universal primary CTA across all capability pages.
7. **No tool/logo walls without context.** Every tool or method mentioned must have context explaining why it matters.
8. **Content specificity.** Every capability page must contain information specific to 123.design's practice. If the content could describe any firm, it is not specific enough.

---

## Capability 1: Product Development

**Route:** `/capabilities/product-development`
**Group:** STRATEGY & DEVELOPMENT

### Purpose

End-to-end product realization from concept to production. This is the integrating capability — the strongest SEO and conversion page because it represents the full 123.design value proposition. Product Development coordinates all other capabilities into a unified development effort.

### Target User

- **Founders with ideas** who need a development partner to take a concept from napkin sketch through to manufactured product.
- **Engineering directors** at established companies who need a full-scope development partner with cross-functional capacity.

### Search Intent

- "product development firm"
- "product design company"
- "concept to production"
- "product development agency"
- "product design and engineering"

### Lifecycle Mapping

**All stages:** CON → EVT → DVT → PVT → Production

Product Development spans the entire lifecycle. It is the integrating capability that coordinates Industrial Design, Mechanical Engineering, Electrical Engineering, Prototyping, Testing & Validation, Tooling, and Manufacturing into a unified effort.

### Core Subtopics

| Subtopic                      | Description                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------- |
| Product Strategy              | Defining what the product should be, market positioning, feature prioritization |
| Requirements Definition       | Translating user needs and market demands into actionable product requirements  |
| Architecture                  | High-level product architecture decisions — how subsystems fit together         |
| Cross-Functional Coordination | Orchestrating ID, ME, EE, prototyping, testing, and manufacturing activities    |

### Related Capabilities

| Capability             | Relationship                                     |
| ---------------------- | ------------------------------------------------ |
| Industrial Design      | Form, UX, and human factors definition           |
| Mechanical Engineering | Mechanical systems, mechanisms, structures       |
| Electrical Engineering | PCB design, firmware, power, signal integrity    |
| Program Management     | Project coordination, timeline, budget oversight |

### Related Project Logic

Show any published project that used integrated product development — projects where 123.design managed the full development process. These are projects where Product Development was the coordinating function, even if specific capabilities (ID, ME, EE) are also highlighted individually on their own pages.

### CTA Logic

- **Primary:** START A PROJECT
- **Secondary links:** Process page, related capabilities (Industrial Design, Mechanical Engineering, Electrical Engineering, Program Management)

### Content Restrictions

- This page must not become a generic encyclopedia of product development. Content must be specific to 123.design's approach and evidence.
- No abstract product development philosophy without connection to real project outcomes.

---

## Capability 2: Industrial Design

**Route:** `/capabilities/industrial-design`
**Group:** DESIGN

### Purpose

Form, user experience, aesthetics, and human factors. Industrial Design defines how a product looks, feels, and interacts — balancing aesthetics, ergonomics, and manufacturability. This capability translates user needs and brand identity into physical product form.

### Target User

- **Companies needing product form/UX definition** — from founders who need their first product to look and feel right, to established companies refreshing a product line.

### Search Intent

- "industrial design firm"
- "product design"
- "human factors design"
- "industrial design services"
- "product design company"

### Lifecycle Mapping

- **Primary:** CON (concept development — form exploration, user research, ideation)
- **Secondary:** EVT (design refinement — adapting form to engineering constraints, CMF finalization)

Industrial Design is front-loaded in the development process but continues into EVT as designs are refined for engineering constraints and manufacturing reality.

### Core Subtopics

| Subtopic                    | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| Form Exploration            | Sketching, ideation, 3D concept development, form language definition   |
| User Research               | Understanding user needs, contexts of use, ergonomic requirements       |
| CMF (Color/Material/Finish) | Color strategy, material selection, surface finish specification        |
| Ergonomics                  | Human factors integration, fit, comfort, usability in physical form     |
| Design Language             | Consistent visual and tactile identity across a product family or brand |

### Related Capabilities

| Capability             | Relationship                                                     |
| ---------------------- | ---------------------------------------------------------------- |
| Product Development    | Integrated development context — ID does not exist in isolation  |
| Mechanical Engineering | Form-to-function translation — ID defines form, ME makes it work |
| Product Animation      | Visualization of ID concepts before physical prototypes exist    |

### Related Project Logic

Show projects with significant form/UX work — where industrial design decisions were a meaningful part of the project narrative. These projects demonstrate ID depth: form exploration, CMF decisions, ergonomic problem-solving, or design language development. Not every project with visual appeal qualifies; select for evidence of intentional ID work.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- Avoid generic design-school encyclopedia prose. Content must be specific to 123.design's approach and evidence.
- No abstract design philosophy without connection to real project outcomes.
- Do not claim specialized UX research facilities or methods unless verified.

---

## Capability 3: Mechanical Engineering

**Route:** `/capabilities/mechanical-engineering`
**Group:** ENGINEERING

### Purpose

Mechanical systems, mechanisms, structures, thermal management, and materials. Mechanical Engineering translates industrial design into functional, manufacturable products — defining the internal architecture, mechanisms, and structural elements that make a product work.

### Target User

- **Companies needing ME capacity or expertise** — engineering directors who need mechanical design support, operations stakeholders focused on manufacturing feasibility.

### Search Intent

- "mechanical engineering firm"
- "product mechanical design"
- "mechanical design services"
- "product architecture engineering"
- "DFM mechanical engineering"

### Lifecycle Mapping

- **Primary:** EVT (engineering development — mechanisms, architecture, materials), DVT (detailed design — tolerance analysis, BOM, DFM finalization)
- **Secondary:** PVT (production transition — manufacturing support, design adjustments for production tooling)

Mechanical Engineering is heaviest in EVT and DVT, where product architecture and detailed design are defined.

### Core Subtopics

| Subtopic                       | Description                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Mechanism Design               | Moving parts, linkages, actuation, mechanical advantage                                                 |
| Structural Analysis            | Load-bearing design, stress considerations, structural integrity                                        |
| Thermal Management             | Heat dissipation, thermal paths, material thermal properties                                            |
| Materials Selection            | Choosing materials based on function, cost, manufacturability, aesthetics                               |
| Tolerance Analysis             | GD&T, fit analysis, stack-up calculations, manufacturing variability                                    |
| DFM (Design for Manufacturing) | Designing for efficient production — draft angles, wall thickness, fastener strategy, assembly sequence |

### Related Capabilities

| Capability             | Relationship                                                            |
| ---------------------- | ----------------------------------------------------------------------- |
| Industrial Design      | Form-to-function translation — ME realizes ID vision in functional form |
| Electrical Engineering | ME/EE integration — PCB mounting, thermal coupling, connector access    |
| Prototyping            | Physical validation of ME designs through prototypes                    |
| Tooling                | ME designs define tooling requirements — mold geometry, fixture needs   |

### Related Project Logic

Show projects demonstrating mechanical engineering depth — complex mechanisms, materials decisions, DFM work, thermal challenges, or manufacturing collaboration. Not every project with ME work qualifies; select for evidence of ME substance: non-trivial mechanism design, challenging materials selection, or significant DFM effort.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- Do not claim specialized simulation capabilities (FEA, CFD, etc.) unless verified with specific tools and validated results.
- No generic mechanical engineering descriptions. Content must reflect 123.design's actual ME work and approach.

---

## Capability 4: Electrical Engineering

**Route:** `/capabilities/electrical-engineering`
**Group:** ENGINEERING

### Purpose

PCB design, firmware integration, power systems, and signal integrity. Electrical Engineering brings electronic functionality to products — from simple circuits to complex embedded systems with power management, sensor integration, and communication protocols.

### Target User

- **Companies needing EE capacity** — engineering directors who need electrical design support for electronic products.

### Search Intent

- "electrical engineering firm"
- "PCB design"
- "embedded systems"
- "electrical design services"
- "firmware integration"

### Lifecycle Mapping

- **Primary:** EVT (electronics development — schematic capture, PCB layout, firmware prototyping), DVT (detailed electronics design — signal integrity, power optimization, EMC considerations)

Electrical Engineering is concentrated in EVT and DVT, where PCBs, firmware, and electronic systems are developed and refined.

### Core Subtopics

| Subtopic             | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| PCB Layout           | Schematic design, board layout, component selection, design rule checks        |
| Power Systems        | Power supply design, battery management, power distribution, efficiency        |
| Signal Integrity     | High-speed signal routing, impedance control, crosstalk mitigation             |
| Firmware Integration | Embedded firmware development, hardware-software interface, driver development |
| EMC/EMI              | Electromagnetic compatibility design, pre-compliance considerations, shielding |

### Related Capabilities

| Capability             | Relationship                                                                      |
| ---------------------- | --------------------------------------------------------------------------------- |
| Mechanical Engineering | ME/EE integration — enclosure design for PCBs, thermal coupling, connector access |
| Product Development    | EE within the integrated development context                                      |
| Testing & Validation   | Electronics testing, functional verification, pre-compliance testing              |

### Related Project Logic

Show projects with electronic systems — PCBs, embedded systems, electronics integration, power management. Select for projects where EE was a significant challenge, not just a commodity task. Projects should demonstrate EE depth: complex PCB designs, challenging power requirements, or non-trivial firmware integration.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- Do not claim certifications (UL, FCC, CE, etc.) or domain-specific compliance expertise (medical, automotive, etc.) without owner verification.
- Avoid claims about specialized testing or compliance labs unless verified.
- No generic EE descriptions. Content must reflect 123.design's actual EE work.

---

## Capability 5: Prototyping

**Route:** `/capabilities/prototyping`
**Group:** PROTOTYPE & PRODUCTION

### Purpose

Rapid physical validation through multiple techniques — FDM, SLA, SLS, RTV, sheet metal, composites. Prototyping turns digital models into tangible artifacts for testing, iteration, and decision-making. This capability provides the physical evidence that validates (or invalidates) design and engineering decisions.

### Target User

- **Companies needing fast physical iteration** — from founders who need to see and hold their product for the first time, to engineering teams needing functional prototypes for testing.

### Search Intent

- "rapid prototyping"
- "product prototyping"
- "3D printing services"
- "prototype manufacturing"
- "product prototype company"

### Lifecycle Mapping

- **Primary:** CON (concept models — form validation, scale models), EVT (functional prototypes — fit, function, basic testing), DVT (pre-production prototypes — validation prototypes, pre-production samples)

Prototyping is heaviest across CON, EVT, and DVT, where physical iteration drives design and engineering decisions.

### Core Subtopics

| Subtopic                                                | Description                                                                                         |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| FDM (Fused Deposition Modeling)                         | Thermoplastic extrusion prototypes — functional, durable, cost-effective                            |
| SLA/SLS (Stereolithography / Selective Laser Sintering) | High-resolution resin or nylon prototypes — detail, surface finish, complex geometry                |
| RTV Tooling (Room Temperature Vulcanization)            | Silicone mold casting for small-batch urethane prototypes — bridge between prototype and production |
| Sheet Metal Fabrication                                 | Laser-cut, bent, and formed metal prototypes — enclosures, brackets, structural elements            |
| Carbon Fiber Composites                                 | Lightweight, high-strength composite prototypes and production parts                                |
| Finishing                                               | Post-processing — sanding, painting, plating, assembly, appearance refinement                       |

### Related Capabilities

| Capability             | Relationship                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| Mechanical Engineering | Prototypes validate ME designs — fit, function, mechanism testing |
| Industrial Design      | Prototypes validate ID decisions — form, ergonomics, CMF          |
| Testing & Validation   | Prototypes are the physical artifacts used for testing            |

### Related Project Logic

All projects use prototyping — it is inherent to product development. The Prototyping capability page should showcase the technique gallery: different methods, different materials, different outcomes. Use actual archive process evidence. Prototyping pages should be media-rich but use contained layouts — source images may be low resolution, so design for contained presentation rather than full-bleed hero images.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- Do not claim capabilities (e.g., 5-axis CNC, cleanroom prototyping, metal 3D printing) unless verified with specific equipment and validated results.
- No generic 3D printing marketing language. Content must reflect 123.design's actual prototyping methods, equipment, and materials.

---

## Capability 6: Testing & Validation

**Route:** `/capabilities/testing-validation`
**Group:** PROTOTYPE & PRODUCTION

### Purpose

Verification, reliability, and certification preparation. Testing & Validation confirms that products meet specifications, perform reliably under expected conditions, and are ready for production and market.

### Target User

- **Companies needing product validation** — engineering directors who need verification support, operations stakeholders focused on quality and production readiness.

### Search Intent

- "product testing"
- "design validation"
- "reliability testing"
- "product verification"
- "certification preparation"

### Lifecycle Mapping

- **Primary:** DVT (design validation — verifying the design meets all requirements), PVT (production validation — verifying production units meet specifications)

Testing & Validation is heaviest in DVT and PVT, where designs are verified against requirements and production readiness is confirmed.

### Core Subtopics

| Subtopic                  | Description                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Functional Testing        | Does the product perform its intended functions? Performance verification against requirements.                                   |
| Environmental Testing     | How does the product perform under temperature, humidity, vibration, and other environmental conditions?                          |
| Reliability               | Will the product perform consistently over its expected lifetime? Durability and failure mode analysis.                           |
| Certification Preparation | Supporting the process of preparing for regulatory certifications (UL, FCC, CE, etc.) — documentation, pre-testing, coordination. |

### Related Capabilities

| Capability             | Relationship                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------- |
| Mechanical Engineering | Testing validates ME designs — structural, thermal, mechanism testing                 |
| Electrical Engineering | Testing validates EE designs — functional, EMC, power testing                         |
| Manufacturing          | Validation confirms production quality — first article inspection, process validation |

### Related Project Logic

Show projects with testing/validation evidence — where testing, verification, or certification preparation was documented. Select for projects demonstrating validation rigor: structured test plans, meaningful test results, or certification support. Not every project with basic testing qualifies.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- **Do NOT state 123.design is UL, FDA, FCC, CE, or ISO certified unless owner verification explicitly allows it.**
- Do not claim in-house testing labs or specialized equipment unless verified.
- Content must reflect actual validation work, not generic testing descriptions.
- Certification preparation means supporting the client's certification process — not claiming 123.design can issue certifications.

---

## Capability 7: Product Animation

**Route:** `/capabilities/product-animation`
**Group:** DESIGN

### Purpose

Visual communication of product concepts and mechanisms. Product Animation creates 3D renderings and animations to communicate product concepts before physical prototypes exist — for stakeholder alignment, marketing, investor presentations, and development communication.

### Target User

- **Companies needing product visualization** — founders who need to show a product concept before it exists physically, marketing teams needing product animation for campaigns, engineering teams needing mechanism visualization.

### Search Intent

- "product animation"
- "3D product visualization"
- "product rendering"
- "product animation services"
- "3D rendering product development"

### Lifecycle Mapping

- **Primary:** CON (concept visualization — showing what a product could look like before any physical artifact exists)
- **Secondary:** EVT (engineering visualization — showing how mechanisms work, internal architecture, assembly sequences)

Product Animation is front-loaded in CON, where concepts are visualized before physical development. It continues into EVT for mechanism animation and technical communication.

### Core Subtopics

| Subtopic              | Description                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| Concept Visualization | Photorealistic renderings of product concepts for stakeholder review, investor presentations, market testing |
| Mechanism Animation   | Animated sequences showing how internal mechanisms work — assembly, actuation, mechanical interaction        |
| Marketing Animation   | Polished product animations for marketing campaigns, launch videos, trade show content                       |

### Related Capabilities

| Capability          | Relationship                                                                            |
| ------------------- | --------------------------------------------------------------------------------------- |
| Industrial Design   | Animation visualizes ID concepts — form, CMF, and user interaction                      |
| Product Development | Animation within the integrated development context — communicating progress and vision |

### Related Project Logic

Show projects with animation deliverables — renderings, animations, or visualization work that was a significant project output. Select for projects where visualization was a meaningful deliverable, not just a supplementary artifact. Projects should demonstrate animation quality and relevance to the development process.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- No generic animation portfolio language. Content must connect visualization to product development outcomes — not just "we make pretty renders."
- Animation examples should be embedded or linked, not just described.

---

## Capability 8: Tooling

**Route:** `/capabilities/tooling`
**Group:** PROTOTYPE & PRODUCTION

### Purpose

Mold design, fixture design, and manufacturing tooling. Tooling bridges design to production — defining the molds, dies, jigs, and fixtures required to manufacture products at scale.

### Target User

- **Companies moving toward production** — operations and sourcing stakeholders who need tooling strategy and coordination for production manufacturing.

### Search Intent

- "injection mold design"
- "manufacturing tooling"
- "production tooling"
- "tooling services"
- "mold making"

### Lifecycle Mapping

- **Primary:** PVT (pilot tooling — soft tooling, prototype molds, small-batch production), Production (production tooling — hard tooling, production molds, volume manufacturing)

Tooling is heaviest in PVT and Production, where production tooling is specified, validated, and deployed.

### Core Subtopics

| Subtopic             | Description                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------- |
| Mold Design          | Injection mold specification, geometry, gating, cooling, ejection — coordinating with mold makers |
| Fixture Design       | Assembly fixtures, test fixtures, inspection fixtures — supporting production and validation      |
| Tooling Validation   | First article inspection, mold trial evaluation, process parameter validation                     |
| Production Readiness | Ensuring tooling is production-ready — cycle time, part quality, maintenance planning             |

### Related Capabilities

| Capability             | Relationship                                                             |
| ---------------------- | ------------------------------------------------------------------------ |
| Manufacturing          | Tooling serves manufacturing — tooling strategy follows production plan  |
| Mechanical Engineering | ME designs define tooling requirements — geometry, materials, tolerances |

### Related Project Logic

Show projects with tooling evidence — where tooling strategy, mold development, fixture design, or production tooling coordination was documented. Select for projects demonstrating tooling substance: complex mold design, challenging fixture requirements, or significant production readiness work.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- No legacy copied wording from old website without review.
- Do not claim in-house tooling or mold-making facilities unless verified.
- Content must reflect actual tooling work, not generic tooling descriptions.
- Tooling coordination may involve external mold makers — do not imply in-house capability unless verified.

---

## Capability 9: Manufacturing

**Route:** `/capabilities/manufacturing`
**Group:** PROTOTYPE & PRODUCTION

### Purpose

Production management, supplier coordination, and quality. Manufacturing ensures products transition efficiently from development to volume production — coordinating suppliers, managing quality, and supporting assembly processes.

### Target User

- **Companies needing manufacturing support** — operations and sourcing stakeholders who need production management, supplier coordination, and quality planning.

### Search Intent

- "product manufacturing"
- "manufacturing partner"
- "production management"
- "contract manufacturing"
- "manufacturing services"

### Lifecycle Mapping

- **Primary:** PVT (pilot builds, production transition, process validation), Production (volume production support, ongoing quality management, supplier coordination)

Manufacturing is heaviest in PVT and Production, where the transition from prototype to volume production occurs.

### Core Subtopics

| Subtopic              | Description                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Supplier Coordination | Identifying, qualifying, and managing production suppliers. Coordinating across multiple suppliers for multi-process products. |
| Production Management | Overseeing production schedules, capacity planning, production ramp-up, and ongoing manufacturing operations.                  |
| Quality Planning      | Defining quality standards, inspection plans, acceptance criteria, and corrective action processes.                            |
| Assembly Processes    | Planning and optimizing assembly sequences, fixtures, tooling, and work instructions.                                          |

### Related Capabilities

| Capability           | Relationship                                                                                    |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| Tooling              | Manufacturing depends on tooling — production tooling enables volume manufacturing              |
| Testing & Validation | Manufacturing quality is verified through testing — first article, in-process, final inspection |
| Program Management   | Manufacturing coordination requires program management discipline                               |

### Related Project Logic

Show projects with manufacturing results — where production, supplier coordination, manufacturing transition, or assembly was documented. Select for projects demonstrating manufacturing substance: successful production ramp-up, complex supplier coordination, or significant quality achievements.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- Do not publish unverified factory ownership or geography claims.
- Do not claim in-house manufacturing facilities unless verified.
- Content must reflect actual manufacturing work, not generic manufacturing descriptions.
- Manufacturing support may involve external production partners — do not imply in-house production unless verified.

---

## Capability 10: Program Management

**Route:** `/capabilities/program-management`
**Group:** PROTOTYPE & PRODUCTION

### Purpose

Project coordination, timeline management, budget tracking, and cross-functional alignment. Program Management ensures projects are coordinated, tracked, and delivered on time and within scope — the organizational discipline that holds complex, multi-capability projects together.

### Target User

- **Companies needing structured program oversight** — engineering directors who expect program management discipline, established companies that need visibility into project progress and coordination.

### Search Intent

- "product program management"
- "product development project management"
- "engineering project management"
- "program management services"
- "product development coordination"

### Lifecycle Mapping

**All stages:** CON → EVT → DVT → PVT → Production

Program Management is cross-cutting — it applies to every stage of development. Every project that spans multiple capabilities or phases requires program management coordination.

### Core Subtopics

| Subtopic                      | Description                                                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project Planning              | Scope definition, work breakdown, resource planning, milestone definition                                                                                                            |
| Timeline Management           | Schedule development, critical path tracking, milestone management, delay mitigation                                                                                                 |
| Budget Tracking               | Cost estimation, budget monitoring, change order management, financial visibility                                                                                                    |
| Cross-Functional Coordination | Aligning ID, ME, EE, prototyping, testing, and manufacturing activities. Ensuring handoffs are clean and dependencies are managed.                                                   |
| Jira/Workflow Integration     | "Your workflow or ours" — 123.design can work within the client's existing project tools (Jira, Linear, etc.) or bring its own. Tool integration is supporting detail, not headline. |

### Related Capabilities

**All capabilities** — Program Management is cross-cutting and supports every other capability. Every capability benefits from structured coordination.

| Capability             | Relationship                                                    |
| ---------------------- | --------------------------------------------------------------- |
| Product Development    | PM coordinates the full development effort                      |
| Industrial Design      | PM ensures ID deliverables align with timeline and dependencies |
| Mechanical Engineering | PM coordinates ME work with ID, EE, and prototyping             |
| Electrical Engineering | PM coordinates EE work with ME and prototyping                  |
| Prototyping            | PM schedules prototyping activities to support design reviews   |
| Testing & Validation   | PM coordinates test planning and execution                      |
| Tooling                | PM manages tooling lead times and coordination                  |
| Manufacturing          | PM oversees production transition and ramp-up                   |

### Related Project Logic

Show any complex project where program management was significant — multi-phase projects, multi-capability projects, or projects with documented coordination challenges. Projects should demonstrate PM substance: structured planning, timeline management, or cross-functional coordination evidence.

### CTA Logic

- **Primary:** START A PROJECT

### Content Restrictions

- Jira (or other tools) is supporting detail, not headline. Phrase: "Your workflow or ours." Do not make tool names the focus.
- Do not claim specific certifications (PMP, Agile, Six Sigma, etc.) unless verified for individual team members.
- Content must reflect actual program management practice at 123.design, not generic project management textbook descriptions.

---

## Capability Relationship Map

This matrix shows how capabilities relate to each other. A checkmark indicates a direct, substantive relationship.

| Capability             | PD  | ID  | ME  | EE  | Proto | T&V | PA  | Tool | Mfg | PM  |
| ---------------------- | --- | --- | --- | --- | ----- | --- | --- | ---- | --- | --- |
| Product Development    | —   | X   | X   | X   | X     | X   | X   | X    | X   | X   |
| Industrial Design      | X   | —   | X   |     | X     |     | X   |      |     |     |
| Mechanical Engineering | X   | X   | —   | X   | X     | X   |     | X    | X   |     |
| Electrical Engineering | X   |     | X   | —   | X     | X   |     |      |     |     |
| Prototyping            | X   | X   | X   | X   | —     | X   |     |      |     |     |
| Testing & Validation   | X   |     | X   | X   | X     | —   |     |      | X   |     |
| Product Animation      | X   | X   |     |     |       |     | —   |      |     |     |
| Tooling                | X   |     | X   |     |       |     |     | —    | X   |     |
| Manufacturing          | X   |     | X   |     |       | X   |     | X    | —   | X   |
| Program Management     | X   |     |     |     |       |     |     |      |     | —   |

---

## Lifecycle Coverage Matrix

This matrix shows which capabilities are active at each lifecycle stage.

| Stage          | Active Capabilities                                                                                                        | Primary Focus                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **CON**        | Product Development, Industrial Design, Prototyping, Product Animation, Program Management                                 | Concept definition, form exploration, concept models, visualization                        |
| **EVT**        | All 10 capabilities active                                                                                                 | Engineering development, design refinement, functional prototypes, electronics development |
| **DVT**        | Product Development, Mechanical Engineering, Electrical Engineering, Prototyping, Testing & Validation, Program Management | Detailed design, validation prototypes, testing, verification                              |
| **PVT**        | Mechanical Engineering, Testing & Validation, Tooling, Manufacturing, Program Management                                   | Production validation, pilot tooling, pilot builds, process validation                     |
| **Production** | Tooling, Manufacturing, Program Management                                                                                 | Volume production, ongoing quality, supplier management, production tooling                |
