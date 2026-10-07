import type { LifecycleStage } from '@/types/domain';

export const PAGE_EYEBROW = 'PROCESS';

export const PAGE_HEADING = 'FROM IDEA TO PRODUCTION.';

export const PAGE_SUPPORTING =
  'Product development is not a linear process, and pretending otherwise is how products fail. Our framework follows five stages, each one answering specific questions and producing specific evidence. You cannot skip a stage without carrying risk forward. You cannot fake the output. Every gate is a real decision point \u2014 and we give you the data to make that decision with confidence.';

export const LIFECYCLE_HEADING_LINES = ['ONE TEAM.', 'EVERY DEVELOPMENT STAGE.'];

export interface ProcessStageDetail {
  code: LifecycleStage;
  label: string;
  activities: string[];
}

export const PROCESS_STAGE_DETAILS: readonly ProcessStageDetail[] = [
  {
    code: 'CON' as LifecycleStage,
    label: 'Concept',
    activities: [
      'Product strategy and market analysis',
      'User research and persona development',
      'Industrial design exploration (sketches, mood boards, form studies)',
      'System architecture definition',
      'Technical and commercial feasibility assessment',
      'Requirements capture and prioritization',
      'Competitive benchmarking',
      'Initial cost modeling and target pricing',
    ],
  },
  {
    code: 'EVT' as LifecycleStage,
    label: 'Engineering Validation',
    activities: [
      'Proof-of-concept prototypes for highest-risk subsystems',
      'Mechanical engineering (mechanisms, structures, thermal)',
      'Electrical engineering (PCB layout, power, connectivity)',
      'Embedded firmware development',
      'Functional prototype builds (SLA, SLS, CNC)',
      'Critical path testing and risk reduction experiments',
      'Preliminary BOM and cost analysis',
      'Regulatory and certification pathway identification',
    ],
  },
  {
    code: 'DVT' as LifecycleStage,
    label: 'Design Validation',
    activities: [
      'Design verification against requirements',
      'Materials selection and finish specification',
      'Detailed CAD with full tolerance analysis',
      'Electronics revisions (DFM for PCBA, component sourcing)',
      'Certification pre-testing (EMC, safety, environmental)',
      'Reliability testing (drop, vibration, thermal cycling)',
      'User testing with production-intent prototypes',
      'Design freeze and production readiness assessment',
    ],
  },
  {
    code: 'PVT' as LifecycleStage,
    label: 'Production Validation',
    activities: [
      'Tooling design review and fabrication oversight',
      'Pilot production runs (first-article inspection)',
      'Assembly process development and validation',
      'Fixtures, jigs and test equipment build-out',
      'Quality control plans and inspection criteria',
      'Manufacturing yield measurement and optimization',
      'Supply chain finalization and component qualification',
      'Packaging design and ship-testing',
    ],
  },
  {
    code: 'PRODUCTION' as LifecycleStage,
    label: 'Production',
    activities: [
      'Full-rate production management',
      'Supplier management and incoming quality control',
      'In-process quality monitoring and statistical process control',
      'Assembly line optimization',
      'Continuous improvement and cost reduction',
      'Field failure analysis and corrective action',
      'Lifecycle support and engineering change management',
      'Second-source qualification and supply chain resilience',
    ],
  },
] as const;

export const WORKFLOW_HEADING_LINES = ['YOUR PROCESS', 'OR OURS.'];

export const WORKFLOW_INTRO =
  'Some companies come to us with an established development process, a PLM system and a preferred way of working. Others have a great product idea but no development infrastructure yet. We handle both. We can work inside your existing systems \u2014 your Jira instance, your PLM, your design review cadence \u2014 or we can bring our own structured workflow that connects requirements, design reviews, engineering, prototypes, validation and release. Either way, nothing falls through the cracks.';

export interface ProcessWorkflowStep {
  step: number;
  label: string;
  description: string;
}

export const WORKFLOW_STEPS: readonly ProcessWorkflowStep[] = [
  {
    step: 1,
    label: 'Requirements',
    description:
      'We capture what the product must do, who it is for, what it must cost, what regulations apply and what the competitive landscape looks like. These requirements are traced throughout the project \u2014 every design decision links back to a requirement, and every requirement has a verification method.',
  },
  {
    step: 2,
    label: 'Jira',
    description:
      'All work is structured into tracked tasks with clear ownership, priority and acceptance criteria. You get a live view of what is in progress, what is blocked and what is coming next. No more wondering where things stand.',
  },
  {
    step: 3,
    label: 'Design Reviews',
    description:
      'Cross-functional review at every stage. Industrial design, mechanical, electrical, manufacturing and quality all weigh in together. Decisions are made visible, recorded and traced. No side conversations that derail the timeline three months later.',
  },
  {
    step: 4,
    label: 'CAD / EE',
    description:
      'Mechanical and electrical engineering develop in parallel with continuous integration. The mechanical team knows what the PCB needs before the layout starts. The electrical team knows the thermal constraints before the enclosure is finalized. This is how we avoid the expensive late-stage redesign.',
  },
  {
    step: 5,
    label: 'BOM',
    description:
      'Bill of materials managed from initial draft through production release. Every component is sourced, costed and qualified. We track alternatives, lead times and end-of-life risk. When a component goes obsolete, you already have a qualified replacement.',
  },
  {
    step: 6,
    label: 'Prototype',
    description:
      'Physical builds for functional validation, user testing and risk reduction. We prototype weekly during active development \u2014 SLA for form, SLS for function, CNC for production-like materials. Each prototype answers specific questions and the results feed directly into the next iteration.',
  },
  {
    step: 7,
    label: 'Validation',
    description:
      'Verification, reliability and certification preparation against requirements. We test to failure, not just to pass. Drop tests, thermal cycling, vibration, EMC pre-scans, ingress protection \u2014 whatever the product needs to survive in the real world. Test results are documented and traceable to requirements.',
  },
  {
    step: 8,
    label: 'Release',
    description:
      'Production readiness review, documentation package and handoff to manufacturing. We do not release a design until the manufacturing process is validated, the supply chain is locked and quality plans are in place. The release package includes everything manufacturing needs \u2014 drawings, specs, test procedures, assembly instructions.',
  },
] as const;

export interface ProcessPrinciple {
  code: string;
  title: string;
  description: string;
}

export const PROCESS_PRINCIPLES: readonly ProcessPrinciple[] = [
  {
    code: 'PRINCIPLE_01',
    title: 'TRANSPARENT',
    description:
      'Clear requirements, visible decisions and regular design reviews. You see what we see \u2014 live CAD models, test results, BOMs, vendor communications. No black boxes, no status theatre, no polished decks that hide real progress.',
  },
  {
    code: 'PRINCIPLE_02',
    title: 'INTEGRATED',
    description:
      'Industrial design, mechanical engineering, electrical engineering, prototyping and manufacturing remain connected throughout the project. The people who understand the problem are the same people building the solution. No translation layers, no information loss between disciplines.',
  },
  {
    code: 'PRINCIPLE_03',
    title: 'ITERATIVE',
    description:
      'Products improve through repeated cycles of design, build, test and refinement. We build physical prototypes every week during active development. Not renderings. Not slides. Real parts that teach us things the previous iteration could not.',
  },
  {
    code: 'PRINCIPLE_04',
    title: 'PRODUCTION-MINDED',
    description:
      'Every design decision is evaluated against manufacturability, assembly cost, supply chain risk and scale. A beautiful prototype that cannot be produced reliably at target cost is not a success \u2014 it is a liability. We design for production from day one.',
  },
] as const;

export const FINAL_CTA_HEADING = 'HAVE A PRODUCT TO BUILD?';

export const FINAL_CTA_BODY =
  'Tell us where it is today \u2014 napkin sketch, working prototype, or somewhere in between. Tell us what needs to happen next and what constraints you are working within. We will give you an honest assessment of whether we are the right team and what the path to production looks like.';

export const FINAL_CTA_BUTTON = { label: 'START YOUR PROJECT', href: '/start-project' };
