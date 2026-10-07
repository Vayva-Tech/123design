import type { StaticCapabilityDefinition } from './types';

export const CANONICAL_CAPABILITIES: readonly StaticCapabilityDefinition[] = [
  {
    slug: 'product-development',
    title: 'Product Development',
    group: 'DESIGN',
    order: 1,
    shortDescription:
      'We take your product from napkin sketch to shipping box. Product development at 123.design means one team owns the entire journey — industrial design, mechanical engineering, electronics, prototyping, manufacturing. No handoffs between five vendors who blame each other when something breaks. One team, one P&L, one answer when you ask "where are we?"',
    deliverables: [
      'Product strategy, market positioning and competitive analysis',
      'Requirements architecture and technical specification',
      'High-level product architecture spanning mechanics, electronics and software',
      'Cross-functional coordination across all engineering disciplines',
      'Stage-gate planning with clear go/no-go criteria at each phase',
      'Risk registers and mitigation tracks updated weekly',
    ],
    lifecycleStages: ['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: [
      'industrial-design',
      'mechanical-engineering',
      'electrical-engineering',
      'program-management',
    ],
  },
  {
    slug: 'industrial-design',
    title: 'Industrial Design',
    group: 'DESIGN',
    order: 2,
    shortDescription:
      'The thing your customer touches first is the thing that makes or breaks the sale. Our industrial designers explore dozens of form directions, validate them against real user research, and land on a design language that is unmistakably yours. We do not just make things look good — we make them feel right in the hand, sit correctly on the shelf, and manufacture cleanly at scale.',
    deliverables: [
      'Form exploration: 20–50 concept directions narrowed to 3 strong candidates',
      'User research synthesis, ergonomic analysis and human factors validation',
      'CMF specification (Color/Material/Finish) with supplier-ready callouts',
      'Design language definition and brand-aligned design system',
      'Class-A surface models ready for engineering surfacing',
      'Physical appearance prototypes for stakeholder review',
    ],
    lifecycleStages: ['CON', 'EVT'],
    relatedCapabilitySlugs: ['product-development', 'mechanical-engineering', 'product-animation'],
  },
  {
    slug: 'product-animation',
    title: 'Product Animation / Visualization',
    group: 'DESIGN',
    order: 3,
    shortDescription:
      'Before a single prototype exists, we can show your product in motion. Photorealistic renders for investor decks. Mechanism animations that prove the internal architecture works. Marketing videos that let you start selling before production ramps. This is how you get buy-in from stakeholders, close pre-orders, and align your team around a shared vision of the finished product.',
    deliverables: [
      'Photorealistic concept renderings for presentations and pitch decks',
      'Mechanism animations showing internal architecture and moving parts',
      'Marketing-grade product animations for launch campaigns',
      'Exploded views and teardown animations for technical communication',
      'AR-ready assets for virtual prototyping and customer previews',
    ],
    lifecycleStages: ['CON', 'EVT'],
    relatedCapabilitySlugs: ['industrial-design', 'product-development'],
  },
  {
    slug: 'mechanical-engineering',
    title: 'Mechanical Engineering',
    group: 'ENGINEERING',
    order: 4,
    shortDescription:
      'This is where the product becomes real. Our mechanical engineers take the industrial design intent and build the internal architecture — mechanisms, structural members, thermal paths, snap fits, fastener strategies — that make it function. We run FEA and thermal simulation before cutting metal, so the first prototype works. We design for the manufacturing process from day one, not as an afterthought.',
    deliverables: [
      'Mechanism design with motion studies and force analysis',
      'Structural analysis (FEA) for drop, vibration and static loading',
      'Thermal management design with simulation-validated heat paths',
      'Materials selection with cost-performance trade-off analysis',
      'Tolerance analysis (RSS and worst-case) for assembly yield',
      'DFM/DFA reports for injection molding, die casting, sheet metal and extrusion',
      'Full parametric CAD models with GD&T callouts',
    ],
    lifecycleStages: ['EVT', 'DVT', 'PVT'],
    relatedCapabilitySlugs: [
      'industrial-design',
      'electrical-engineering',
      'prototyping',
      'tooling',
    ],
  },
  {
    slug: 'electrical-engineering',
    title: 'Electrical Engineering',
    group: 'ENGINEERING',
    order: 5,
    shortDescription:
      'Every product with a plug, a battery or a radio antenna needs electrical engineering that works reliably in the real world — not just on the bench. We design PCBs with signal integrity from the first layout, write firmware that handles edge cases, and validate EMC/EMI before certification. From simple sensor boards to multi-layer high-speed designs, we deliver electronics that ship.',
    deliverables: [
      'Schematic capture and multi-layer PCB layout (up to 12 layers)',
      'Power systems design with efficiency optimization and thermal validation',
      'Signal integrity analysis for high-speed interfaces (USB, HDMI, DDR)',
      'Firmware and embedded software integration with hardware bring-up',
      'EMC/EMI pre-compliance design and debug support',
      'Production test fixtures and boundary-scan strategies',
    ],
    lifecycleStages: ['EVT', 'DVT'],
    relatedCapabilitySlugs: ['mechanical-engineering', 'product-development', 'testing-validation'],
  },
  {
    slug: 'software-development',
    title: 'Software & App Development',
    group: 'ENGINEERING',
    order: 6,
    shortDescription:
      'Your product does not stop at the hardware edge. We build the companion software — mobile apps, web platforms, embedded interfaces, cloud backends — that makes your product complete. We develop custom applications for clients across consumer, industrial and enterprise markets, integrating tightly with the physical product and the business systems behind it.',
    deliverables: [
      'Mobile applications (iOS and Android) with native or cross-platform frameworks',
      'Web applications and dashboards for product management and analytics',
      'Cloud backend services, APIs and data pipelines',
      'Embedded UI and firmware integration with hardware systems',
      'IoT connectivity, OTA update systems and device management platforms',
      'AI and machine learning integration for smart product features',
    ],
    lifecycleStages: ['EVT', 'DVT', 'PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: ['electrical-engineering', 'product-development', 'ai-services'],
  },
  {
    slug: 'ai-services',
    title: 'AI & Machine Learning',
    group: 'ENGINEERING',
    order: 7,
    shortDescription:
      'We embed intelligence into products and workflows. From on-device inference for edge hardware to cloud-based ML pipelines for analytics and automation, we build AI systems that ship. Computer vision for quality inspection. Predictive models for maintenance. Natural language interfaces for user interaction. We find where AI creates real value — not just demo-worthy features — and build production-grade systems around it.',
    deliverables: [
      'Machine learning model development, training and optimization',
      'Computer vision systems for inspection, detection and classification',
      'On-device / edge AI deployment with hardware acceleration',
      'Natural language processing and conversational interfaces',
      'Predictive analytics and recommendation systems',
      'AI-powered automation for business workflows and data pipelines',
    ],
    lifecycleStages: ['EVT', 'DVT', 'PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: ['software-development', 'electrical-engineering', 'product-development'],
  },
  {
    slug: 'testing-validation',
    title: 'Testing & Validation',
    group: 'ENGINEERING',
    order: 8,
    shortDescription:
      'Shipping an untested product is shipping a liability. We build test plans that mirror how your customers will actually use — and abuse — the product. Functional testing, environmental stress screening, reliability run-to-failure, drop testing, IP rating validation. We find the failures in our lab so your customers do not find them in the field.',
    deliverables: [
      'Functional test plans covering all product modes and edge cases',
      'Environmental testing (thermal cycling, humidity, salt spray, UV)',
      'Reliability and durability analysis with accelerated life testing',
      'Drop, vibration and mechanical shock testing per ISTA/ASTM standards',
      'Certification preparation support (FCC, CE, UL, IEC)',
      'Test reports with pass/fail evidence and failure analysis',
    ],
    lifecycleStages: ['DVT', 'PVT'],
    relatedCapabilitySlugs: ['mechanical-engineering', 'electrical-engineering', 'manufacturing'],
  },
  {
    slug: 'prototyping',
    title: 'Prototyping',
    group: 'BUILD',
    order: 9,
    shortDescription:
      'We turn CAD into physical parts within days, not weeks. FDM for fit checks overnight. SLA/SLS for detailed appearance models. RTV casting for small batches of 10–50 units. Sheet metal and carbon fiber for structural prototypes that mirror production intent. Every prototype is a decision-making tool — we build the right process for the right question at the right time.',
    deliverables: [
      'FDM prototypes for fit, form and assembly verification (24–48 hr turnaround)',
      'SLA/SLS prototypes with production-grade surface finish and detail',
      'RTV tooling and urethane castings for small-batch functional testing',
      'Sheet metal fabrication matching production material and process',
      'Carbon fiber and composite layup for lightweight structural parts',
      'Finishing, post-processing and cosmetic treatment to near-production quality',
    ],
    lifecycleStages: ['CON', 'EVT', 'DVT'],
    relatedCapabilitySlugs: ['mechanical-engineering', 'industrial-design', 'testing-validation'],
  },
  {
    slug: 'tooling',
    title: 'Tooling',
    group: 'BUILD',
    order: 10,
    shortDescription:
      'The mold is the most expensive single component of your product program — get it wrong and you are paying $50K+ for a paperweight. We specify molds with the right steel, the right cavity count, and the right gate design for your volume and budget. We manage the tool build at the supplier, run T1–T4 trials, and do not approve a mold until the parts meet dimension, cosmetic and assembly requirements.',
    deliverables: [
      'Mold design review and specification (steel selection, cavity count, gating)',
      'Fixture design for assembly, testing and quality inspection',
      'Tooling validation with T1–T4 trial participation and part measurement',
      'Production readiness assessment with CMM reports and capability studies',
      'Tool transfer documentation for multi-source production',
    ],
    lifecycleStages: ['PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: ['manufacturing', 'mechanical-engineering'],
  },
  {
    slug: 'sourcing',
    title: 'Sourcing & Supply Chain',
    group: 'BUILD',
    order: 11,
    shortDescription:
      'Getting the right parts at the right price from the right suppliers is a full-time job. We manage component sourcing, supplier qualification, pricing negotiation and supply chain strategy so you do not have to. We have established relationships with component distributors, contract manufacturers and specialty suppliers across North America, Europe and Asia. We find the right source for your volume, quality and cost requirements — and we manage the relationship so you do not have to.',
    deliverables: [
      'Component sourcing and supplier identification across global markets',
      'Supplier qualification, auditing and pricing negotiation',
      'Supply chain strategy with dual-source and risk mitigation planning',
      'Cost optimization through competitive bidding and value engineering',
      'Logistics coordination, import/export compliance and freight management',
      'Ongoing supplier relationship management and quality monitoring',
    ],
    lifecycleStages: ['EVT', 'DVT', 'PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: ['manufacturing', 'tooling', 'program-management'],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    group: 'BUILD',
    order: 12,
    shortDescription:
      'We do not own factories — we own the process. We source production partners, negotiate pricing, oversee tooling, run production trials, manage quality control, and handle logistics. You get a product that ships on time, at the right cost, with consistent quality. We have managed production runs from 500 units to 500,000 units across plastics, metals, electronics and mixed-assembly products.',
    intro:
      'Manufacturing is where your product meets reality. Every design decision — every tolerance, every material choice, every assembly sequence — gets stress-tested against the economics and constraints of mass production. We bridge that gap. Our manufacturing team has launched products across consumer electronics, audio equipment, fitness devices, home appliances and medical devices, managing every step from supplier selection to first shipment.',
    body:
      'We do not own factories — and we do it that way on purpose. Owning a factory creates a conflict of interest: you are incentivized to use your own capacity, even when a better option exists. Instead, we maintain a curated network of production partners across Asia, Eastern Europe and North America, each vetted for specific capabilities — injection molding, die casting, sheet metal, PCB assembly, final product integration. We match your product to the right partner for your volume, quality and budget requirements. We run the production trial, approve the first articles, monitor yield during ramp-up, and stay engaged through steady-state production. When something goes wrong — and it will, because manufacturing is never perfect — we are the ones on the phone with the supplier, the ones flying to the factory, the ones solving the problem before it becomes a missed shipment.',
    deliverables: [
      'Supplier sourcing, qualification and pricing negotiation',
      'Production management with weekly status and yield tracking',
      'Quality planning (AQL sampling, control plans, inspection protocols)',
      'Assembly process optimization and line balancing',
      'Cost reduction programs targeting BOM, cycle time and yield',
      'Logistics coordination including packaging, labeling and freight',
    ],
    methods: [
      'Injection molding production management — from single-cavity prototype tools to multi-cavity family molds, with full process validation (T1–T4 trials)',
      'Die casting for aluminum, zinc and magnesium — cold chamber and hot chamber, with porosity analysis and heat treatment validation',
      'Sheet metal fabrication — laser cutting, stamping, bending and welding, with progressive die and hard tooling options',
      'PCB assembly (SMT and through-hole) — from quick-turn prototype runs to high-volume production with AOI and X-ray inspection',
      'Final product assembly and integration — electro-mechanical assembly, functional testing, cosmetic inspection and packaging',
      'Supply chain management — dual-source strategies, safety stock planning, demand forecasting and logistics optimization',
      'Quality systems — AQL sampling per ANSI/ASQ Z1.4, CMM inspection, capability studies (Cp/Cpk), and full dimensional reporting',
      'Cost engineering — should-cost modeling, value engineering, BOM optimization and cycle time reduction',
    ],
    lifecycleStages: ['PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: ['tooling', 'testing-validation', 'program-management'],
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/work/audio/speaker-tower/Speaker_Tower-1.jpg',
      alt: 'Manufacturing — premium audio product assembly and finish',
      decorative: false,
      width: 1600,
      height: 1067,
    },
    supportMedia: [
      {
        kind: 'IMAGE',
        url: '/images/process/pvt.png',
        alt: 'Production validation — tooling, pilot builds and assembly process',
        decorative: false,
        width: 1536,
        height: 1024,
      },
      {
        kind: 'IMAGE',
        url: '/images/process/production.png',
        alt: 'Production — manufacturing, quality control and fulfillment',
        decorative: false,
        width: 1536,
        height: 1024,
      },
      {
        kind: 'IMAGE',
        url: '/media/launch/projects/123_design_blog_new_products_1 (5).jpg',
        alt: 'Manufacturing — production process and tooling',
        decorative: false,
        width: 1280,
        height: 854,
      },
    ],
  },
  {
    slug: 'program-management',
    title: 'Program Management',
    group: 'MANAGE',
    order: 13,
    shortDescription:
      'A product development program has dozens of parallel workstreams, hundreds of decisions, and a timeline that slips if any one of them stalls. Our program managers keep everything moving — tracking every deliverable, flagging risks before they become problems, and making sure the right people have the right information at the right time. You always know exactly where your project stands.',
    deliverables: [
      'Project planning and scoping with resource-loaded timelines',
      'Timeline management with critical-path tracking and recovery plans',
      'Budget tracking with earned-value analysis and forecast updates',
      'Cross-functional coordination across all disciplines and external partners',
      'Risk management with proactive mitigation and escalation protocols',
      'Weekly status reporting and executive dashboards',
    ],
    lifecycleStages: ['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION'],
    relatedCapabilitySlugs: ['product-development'],
  },
] as const;

export const CANONICAL_SLUGS = CANONICAL_CAPABILITIES.map((c) => c.slug) as string[];

const slugSet = new Set(CANONICAL_SLUGS);

export function isCanonicalSlug(slug: string): boolean {
  return slugSet.has(slug);
}

export function getCanonicalCapability(slug: string): StaticCapabilityDefinition | undefined {
  return CANONICAL_CAPABILITIES.find((c) => c.slug === slug);
}

export function getCanonicalSlugsForStaticParams(): { slug: string }[] {
  return CANONICAL_CAPABILITIES.map((c) => ({ slug: c.slug }));
}
