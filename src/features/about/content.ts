export const ABOUT_EYEBROW = 'About';

export const ABOUT_HEADING = 'Why 123.design exists';

export const ABOUT_INTRO =
  'We started 123.design because the product development industry is broken. Most companies that need physical product development end up hiring a design firm, then an engineering firm, then a prototyping shop, then a manufacturing consultant \u2014 and spending half their budget managing the handoffs between them. Information gets lost. Decisions get reversed. Timelines slip. We built 123.design to eliminate that fragmentation. One team. One process. One accountable partner from the first sketch through the last unit off the production line.';

export const PHILOSOPHY_EYEBROW = 'Philosophy';

export const PHILOSOPHY_HEADING = 'How we think about product development';

export const PHILOSOPHY_BODY =
  'Every product decision is a trade-off between cost, performance, schedule, manufacturability and user experience. Most teams discover these trade-offs late \u2014 after tooling is cut or certification testing fails. We make them explicit on day one. Our integrated model means the mechanical engineer hears the user research firsthand. The manufacturing engineer reviews the industrial design concepts before they are finalized. The electrical engineer knows the thermal constraints before the enclosure is locked. This is how we avoid the expensive late-stage changes that kill timelines and budgets.';

export const PHILOSOPHY_PRINCIPLES: ReadonlyArray<{
  title: string;
  description: string;
}> = [
  {
    title: 'Integrated delivery',
    description:
      'Design, engineering and manufacturing strategy happen in the same room, at the same time. When a design decision affects cost, the manufacturing perspective is already in the conversation. When a manufacturing constraint emerges, the design team adjusts immediately. No handoff boundaries. No information loss. Decisions stay coherent because context never leaves the team.',
  },
  {
    title: 'Evidence over opinion',
    description:
      'We test assumptions before committing build effort. Research, prototyping and validation happen before the first production tool is cut. We build physical prototypes weekly during active development because holding a real part teaches you things that no amount of discussion can. Every design review is backed by test data, not just opinions.',
  },
  {
    title: 'Craft at every layer',
    description:
      'From the first user research conversation to the final production unit, every layer of the product receives deliberate attention. Industrial design that considers how the product feels in the hand. Mechanical engineering that accounts for how it will be assembled on the line. Electrical design that plans for thermal management and serviceability. Quality is not a phase \u2014 it is the standard at every level.',
  },
  {
    title: 'Honest partnership',
    description:
      'We tell you what we think, not what you want to hear. If a design direction will not survive manufacturing, we say so \u2014 and we offer an alternative that does. If a timeline is unrealistic, we flag it before we commit. If your product concept has a fundamental flaw, we will identify it in concept stage when the fix is cheap, not in production when it is catastrophic. That is what a real partner does.',
  },
];

export const DISCIPLINES_EYEBROW = 'Disciplines';

export const DISCIPLINES_HEADING = 'Integrated capabilities';

export const DISCIPLINES_BODY =
  'Every engagement draws on a connected set of disciplines that work together throughout the project. Industrial design informs mechanical engineering. Mechanical engineering constrains electrical design. Manufacturing strategy shapes every decision from the start. No single capability operates in isolation \u2014 each informs and strengthens the others, which is how we deliver products that work, look right, ship on time and hit their cost targets.';

export const DISCIPLINES_LINK = {
  href: '/capabilities',
  label: 'View all capabilities',
};

export const PROCESS_EYEBROW = 'Process';

export const PROCESS_HEADING = 'From concept to production';

export const PROCESS_BODY =
  'Our process follows the stages of real product development \u2014 Concept, Engineering Validation, Design Validation, Production Validation and full-rate Production. Each phase produces the evidence needed to decide whether to proceed. No stage gets skipped. No evidence gets faked. The output of each gate is a clear, documented basis for the go/no-go decision that moves the product forward.';

export const PROCESS_STAGES: ReadonlyArray<{
  code: string;
  name: string;
}> = [
  { code: 'CON', name: 'Concept' },
  { code: 'EVT', name: 'Engineering Validation' },
  { code: 'DVT', name: 'Design Validation' },
  { code: 'PVT', name: 'Production Validation' },
  { code: 'PRODUCTION', name: 'Production' },
];

export const PROCESS_LINK = {
  href: '/process',
  label: 'Explore the full process',
};

export const TEAM_EYEBROW = 'Team';

export const TEAM_HEADING = 'The people behind the work';

export const TEAM_SUPPORTING =
  'A senior team where every member is directly involved in your project. No bench of junior designers doing the actual work. No layers of account management between you and the people building your product. When you call, you talk to the engineer who designed your mechanism \u2014 not a project coordinator relaying messages.';

export const OFFICES_EYEBROW = 'Locations';

export const OFFICES_HEADING = 'Where we work';

export const STATIC_TEAM_MEMBERS: ReadonlyArray<{
  name: string;
  role: string;
}> = [
  { name: 'Michael J. Gelston', role: 'Founder & Creative Director' },
  { name: 'David Brown', role: 'VP, Product Development' },
  { name: 'Allyson Brown', role: 'VP, Operations' },
  { name: 'Chris Hartzell', role: 'Director, Industrial Design' },
  { name: 'Brian Hirtle', role: 'Director, Mechanical Engineering' },
  { name: 'John Hannon', role: 'Director, Electrical Engineering' },
  { name: 'Samuel Adesoye', role: 'Senior Product Designer' },
  { name: 'Daniel Torres', role: 'Senior Mechanical Engineer' },
  { name: 'Priya Nair', role: 'Senior Electrical Engineer' },
  { name: 'Marcus Lee', role: 'Prototyping Lead' },
  { name: 'Sarah Kim', role: 'Program Manager' },
  { name: 'James Okafor', role: 'Manufacturing Engineer' },
];

export const STATIC_OFFICES: ReadonlyArray<{
  name: string;
  city: string;
  country: string;
}> = [
  { name: 'Sarasota', city: 'Sarasota, FL', country: 'United States' },
  { name: 'Charlotte', city: 'Charlotte, NC', country: 'United States' },
  { name: 'New York', city: 'New York, NY', country: 'United States' },
];

export const ABOUT_CTA_HEADING = 'Let\u2019s build something that works';

export const ABOUT_CTA_BODY =
  'If you have a product challenge that needs a team that can handle the full journey \u2014 from concept through manufacturing \u2014 we should talk. Tell us what you are building and we will tell you honestly whether we are the right fit.';

export const ABOUT_CTA_BUTTON = 'START A PROJECT';
