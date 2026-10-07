export const HERO_EYEBROW = 'PRODUCT DEVELOPMENT \u2022 ENGINEERING \u2022 MANUFACTURING';

export const HERO_HEADING_LINES = ['FROM IDEA', 'TO PRODUCTION.'];

export const HERO_SUBTITLE =
  'We are the team behind products you already use. 123.design takes physical products from napkin sketch through full-rate manufacturing \u2014 industrial design, mechanical and electrical engineering, prototyping, tooling and production management, all working as a single integrated team.';

export const HERO_PRIMARY_CTA = { label: 'Start Your Project \u2192', href: '/start-project' };
export const HERO_SECONDARY_CTA = { label: 'Explore Our Work \u25b7', href: '/work' };

export const HERO_STATS = [
  { value: '200+', label: 'Products Developed' },
  { value: '1,000,000+', label: 'Units in Market' },
  { value: '25+', label: 'Industries Served' },
] as const;

export const CLIENT_LOGOS = [
  'BOSE',
  'Honeywell',
  'Medtronic',
  'DEWALT',
  'P&G',
  'PHILIPS',
  'stryker',
  'TIMEX',
] as const;

export const FEATURED_EYEBROW = 'FEATURED WORK';

export const FEATURED_HEADING_LINES = ['REAL PRODUCTS.', 'REAL RESULTS.'];

export const FEATURED_DESCRIPTION =
  'Every project here went from concept to mass production. These are not renderings or concept studies \u2014 they are products shipping today in consumer, medical, industrial and defense markets. We handled the full stack: user research, industrial design, mechanical and electrical engineering, prototyping, certification, tooling and manufacturing oversight.';

export const FEATURED_FILTERS = [
  'All',
  'Consumer',
  'Medical',
  'Industrial',
  'Electronics',
  'Outdoor',
  'Defense',
  'Manufacturing',
] as const;

export const FEATURED_VIEW_ALL = { label: 'View All Projects \u2192', href: '/work' };

export const SHOWREEL_EYEBROW = 'SEE OUR WORK IN MOTION';

export const SHOWREEL_HEADING_LINES = ['FROM CONCEPT', 'TO REALITY.'];

export const SHOWREEL_VIDEO_ID = 'LiTnhnKV_i0';

export const SHOWREEL_VIDEO_TITLE =
  '123 DESIGN Product Portfolio | Award-Winning Product Development from Concept to Manufacturing';

export const LIFECYCLE_EYEBROW = 'OUR PROCESS';

export const LIFECYCLE_HEADING_LINES = ['CONCEPT TO PRODUCTION.', 'EVERY STAGE.'];

export const LIFECYCLE_DESCRIPTION =
  'Most product failures happen in the gaps between stages \u2014 when design hands off to engineering, or engineering hands off to manufacturing, and context gets lost. We eliminate those gaps. Our team stays constant from the first sketch through the last unit off the line, so decisions made in concept carry through to production without degradation.';

export const LIFECYCLE_STAGES = [
  {
    code: 'CON',
    label: 'Concept',
    description:
      'We start by understanding the market, the user and the constraints before drawing a single line. Product strategy, competitive analysis, user research, industrial design exploration and feasibility assessment all happen here. The output is a validated product direction with clear requirements \u2014 not a guess.',
  },
  {
    code: 'EVT',
    label: 'Engineering Validation',
    description:
      'Core technology gets proven. We build functional prototypes that test the highest-risk subsystems \u2014 mechanisms, electronics, firmware, thermal management, power. The goal is not a pretty model. It is evidence that the product can work, with documented test results and a clear path to the next phase.',
  },
  {
    code: 'DVT',
    label: 'Design Validation',
    description:
      'Production-intent hardware gets refined for manufacture, assembly and regulatory compliance. Materials are locked. Tolerances are analyzed. Certification testing begins. We validate that every subsystem meets specifications under real-world conditions \u2014 drop tests, environmental cycling, EMC pre-scans, biocompatibility if applicable.',
  },
  {
    code: 'PVT',
    label: 'Production Validation',
    description:
      'The manufacturing process itself gets validated. Tooling is cut. Pilot runs produce first-article parts. Assembly fixtures are built and proven. Yield is measured and optimized. We do not move to full production until the process is repeatable, the supply chain is locked and quality plans are in place.',
  },
  {
    code: 'PRODUCTION',
    label: 'Production',
    description:
      'Full-rate manufacturing with ongoing quality control, supplier management and continuous improvement. We stay involved through production ramp-up \u2014 managing incoming inspection, in-process quality, packaging design and logistics. The product ships on spec, on time and at the cost model that was planned.',
  },
] as const;

export const WORKFLOW_EYEBROW = 'INTEGRATED WORKFLOW';

export const WORKFLOW_HEADING_LINES = ['YOUR TOOLS,', 'CONNECTED.'];

export const WORKFLOW_SUPPORTING =
  'We do not ask you to change how you work. We plug into your existing systems \u2014 Jira for task tracking, PLM for design control, CAD for version management, BOM tools for cost tracking \u2014 so every decision, every revision and every approval is visible to your team in real time. No status meetings to decode. No surprise delays.';

export const WORKFLOW_STEPS = [
  { id: 'requirements', label: 'Requirements Tracking' },
  { id: 'cad-design', label: 'CAD Design Control' },
  { id: 'bom', label: 'BOM Management' },
  { id: 'design-reviews', label: 'Design Reviews' },
  { id: 'testing', label: 'Testing & Validation' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'launch', label: 'Launch & Support' },
] as const;

export const CAPABILITIES_EYEBROW = 'OUR CAPABILITIES';

export const CAPABILITIES_HEADING_LINES = ['A FULL-SERVICE', 'DEVELOPMENT PARTNER.'];

export const CAPABILITIES_DESCRIPTION =
  'Most companies hiring a product development firm end up managing five separate vendors \u2014 a design studio, an ME firm, an EE firm, a prototyping shop and a manufacturing consultant. We do all of it under one roof, which means your product gets designed with manufacturing in mind from day one, not value-engineered after the fact.';

export const CAPABILITY_GROUPS = [
  {
    slug: 'industrial-design',
    label: 'Industrial Design',
  },
  {
    slug: 'mechanical-engineering',
    label: 'Mechanical Engineering',
  },
  {
    slug: 'electrical-engineering',
    label: 'Electrical Engineering',
  },
  {
    slug: 'prototyping',
    label: 'Prototyping',
  },
  {
    slug: 'tooling-manufacturing',
    label: 'Tooling & Manufacturing',
  },
  {
    slug: 'testing-validation',
    label: 'Testing & Certification',
  },
] as const;

export const INDUSTRIES_HEADING_LINES = ['BUILT FOR PRODUCTS', 'THAT HAVE TO WORK.'];

export const CANONICAL_INDUSTRIES = [
  {
    slug: 'consumer-products',
    label: 'Consumer Products',
    href: '/industries/consumer-products',
    description:
      'Consumer products live or die on first impression. We design products that stand out on the shelf, feel right in the hand and ship at a cost that makes business sense. From kitchen gadgets to fitness equipment to smart home devices, we have shipped 50+ consumer products through retail and DTC channels.',
  },
  {
    slug: 'medical',
    label: 'Medical',
    href: '/industries/medical',
    description:
      'Medical device development demands a different discipline \u2014 design controls, risk management, validation protocols and regulatory documentation from day one. We have developed products across Class I and Class II categories, working within FDA design control frameworks and building the documentation packages that support 510(k) submissions.',
  },
  {
    slug: 'defense-security',
    label: 'Defense & Security',
    href: '/industries/defense-security',
    description:
      'Defense products operate in environments where failure is not an option. We develop ruggedized, reliable products that meet MIL-SPEC requirements, survive extreme conditions and maintain operational readiness. Our team understands ITAR compliance, secure development practices and the documentation rigor defense programs demand.',
  },
  {
    slug: 'electronics',
    label: 'Electronics',
    href: '/industries/electronics',
    description:
      'We design complete electronic products \u2014 not just the PCB, but the full integration of electronics into a manufacturable product. That means embedded firmware, power management, wireless connectivity, sensor integration, thermal design and the mechanical enclosure that protects it all. From wearables to industrial IoT, we handle the full stack.',
  },
  {
    slug: 'industrial',
    label: 'Industrial',
    href: '/industries/industrial',
    description:
      'Industrial products need to survive years of daily use in demanding environments. We design for durability, serviceability and cost-effective production at scale. Our experience covers power tools, commercial equipment, material handling systems and architectural hardware \u2014 products where engineering rigor directly impacts the bottom line.',
  },
  {
    slug: 'emerging-technology',
    label: 'Emerging Technology',
    href: '/industries/emerging-technology',
    description:
      'Some of the most interesting products we have built did not have a category yet. We work with startups and innovation teams to develop novel products where the technology is new, the market is unproven and speed matters. We move fast, iterate constantly and help you learn what works before committing to full production.',
  },
] as const;

export const HOW_WE_WORK_HEADING = 'HOW WE WORK';

export const HOW_WE_WORK_PRINCIPLES = [
  {
    label: 'Transparent',
    description:
      'You get access to everything we do \u2014 live CAD models, test results, BOMs, design review notes, vendor communications. No black boxes. No polished status decks that hide real progress. If something is not working, you hear about it the same day we find out, along with our recommended path forward.',
  },
  {
    label: 'Integrated',
    description:
      'The industrial designer sits next to the mechanical engineer, who sits next to the electrical engineer. When a design decision affects manufacturability, the manufacturing engineer weighs in immediately \u2014 not three months later when tooling quotes come back too high. This is not a slogan. It is how our studio is physically organized.',
  },
  {
    label: 'Iterative',
    description:
      'We build physical prototypes every week during active development. Not renderings. Not slides. Real parts that real users can hold, test and react to. Each cycle teaches us something the previous one could not. By the time we reach production, the product has been through dozens of iterations and the design is genuinely resolved.',
  },
  {
    label: 'Production-Minded',
    description:
      'Every design decision gets evaluated against three questions: Can it be manufactured at scale? Can it be assembled reliably? Can it hit the target cost? A beautiful prototype that cannot be produced is not a success \u2014 it is a liability. We design for production from the first sketch, not as an afterthought.',
  },
] as const;

export const MANUFACTURING_EYEBROW = 'MANUFACTURING';

export const MANUFACTURING_HEADING_LINES = ['REAL MANUFACTURING', 'CAPABILITIES.'];

export const MANUFACTURING_BODY =
  'We do not just hand you a CAD file and wish you luck. We manage the entire manufacturing process \u2014 from DFM analysis through supplier selection, tooling oversight, pilot builds, production quality control and ongoing continuous improvement. Our manufacturing engineers have managed production across injection molding, CNC machining, sheet metal, die casting, extrusion, PCBA assembly and complete product integration. We have relationships with vetted production partners across North America and Asia, and we manage quality on the ground regardless of where your product is made.';

export const MANUFACTURING_BULLETS = [
  'Design for Manufacture (DFM)',
  'Injection Molding & Tooling',
  'CNC Machining & Sheet Metal',
  'Electronics Assembly (PCBA)',
  'Quality Systems & Inspection',
] as const;

export const FINAL_CTA_EYEBROW = "LET'S BUILD SOMETHING GREAT";

export const FINAL_CTA_HEADING_LINES = ['START YOUR', 'PROJECT.'];

export const FINAL_CTA_BODY =
  'Whether you have a napkin sketch, a working prototype or a product that needs to get to the next stage \u2014 we should talk. Tell us what you are building, where you are in the process and what you need. We will tell you honestly whether we are the right fit and what the path forward looks like.';

export const FINAL_CTA_BUTTON = { label: 'Get Started \u2192', href: '/start-project' };

export const SCHEDULE_CTA_LABEL = 'SCHEDULE A CONVERSATION';
