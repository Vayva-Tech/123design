import type { StaticIndustryDefinition } from './types';

export const CANONICAL_INDUSTRIES: readonly StaticIndustryDefinition[] = [
  {
    slug: 'consumer-products',
    title: 'Consumer Products',
    shortDescription:
      'Consumer products live or die on the shelf \u2014 the first three seconds of a customer picking it up, feeling the weight, checking the price. We design and engineer products that win that moment. Form that stands out in a crowded category. Engineering that holds up to real daily use. Manufacturing that hits the price point your margin demands. From kitchen tools and home goods to fitness equipment and personal accessories, we have taken consumer products from concept to store shelves across multiple categories.',
    userNeed:
      'You have a product idea \u2014 or an existing product that needs to get to the next level. You need industrial design that differentiates, mechanical engineering that works reliably at scale, rapid prototyping to iterate quickly, and manufacturing support that gets you to production without surprises. You need a team that has done this before, not one learning on your dime.',
    relatedCapabilitySlugs: [
      'industrial-design',
      'mechanical-engineering',
      'prototyping',
      'manufacturing',
      'product-development',
    ],
  },
  {
    slug: 'medical',
    title: 'Medical',
    shortDescription:
      'Medical device development is not like consumer products. The documentation requirements are heavier. The design controls are stricter. The consequences of getting it wrong are measured in patient outcomes, not returns. We understand this. Our engineering work follows design control discipline \u2014 requirements traceability, verification and validation planning, risk management aligned to ISO 14971 principles, and documentation packages that support regulatory submissions. We have worked on Class I and Class II devices across diagnostics, surgical instruments, and patient monitoring.',
    userNeed:
      'You are developing a medical device and need an engineering partner who speaks the language of design controls, V&V, and risk management. You need documentation that supports your regulatory pathway \u2014 not an afterthought. You need a team that treats traceability and validation as engineering discipline, not bureaucratic overhead.',
    relatedCapabilitySlugs: [
      'mechanical-engineering',
      'electrical-engineering',
      'testing-validation',
      'program-management',
    ],
  },
  {
    slug: 'defense-security',
    title: 'Defense & Security',
    shortDescription:
      'Defense and security products operate in environments where failure is not an option \u2014 extreme temperatures, shock, vibration, EMI, and the expectation of years of reliable field operation. We engineer for these conditions. Our work follows reliability-centered design practices: derating analysis, worst-case and RSS tolerance analysis, environmental stress screening, and design margins that account for the operational envelope. We understand the confidentiality requirements of sensitive programs and maintain the operational security discipline these projects demand.',
    userNeed:
      'You are developing equipment for defense or security applications where reliability standards are non-negotiable and confidentiality is paramount. You need engineering partners who understand mil-spec environmental requirements, reliability engineering practices, and the discipline of working within classified or sensitive programs.',
    relatedCapabilitySlugs: [
      'mechanical-engineering',
      'electrical-engineering',
      'testing-validation',
      'program-management',
    ],
  },
  {
    slug: 'electronics',
    title: 'Electronics',
    shortDescription:
      'Electronic product development means more than laying out a PCB. It means integrating the board into a complete product \u2014 thermal management that keeps components within spec, mechanical integration that fits the enclosure, EMC design that passes certification on the first attempt, and firmware that handles real-world edge cases. We design multi-layer PCBs with signal integrity from the first layout, bring up boards in-house, and iterate until the electronics perform reliably in the full product context.',
    userNeed:
      'You need electronic product development \u2014 PCB design, firmware, enclosure integration, and full system bring-up. You need strong EE fundamentals: signal integrity, power management, EMC awareness. And you need those electronics to work inside a real product, not just on a bench.',
    relatedCapabilitySlugs: [
      'electrical-engineering',
      'mechanical-engineering',
      'prototyping',
      'testing-validation',
    ],
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    shortDescription:
      'Industrial products have a different job than consumer products \u2014 they need to work reliably in harsh environments, survive years of heavy use, and be manufactured efficiently enough to maintain margin at industrial price points. We design for durability: over-specified bearings, sealed enclosures, corrosion-resistant finishes, and maintenance access designed in from day one. We have engineered products for construction, agriculture, material handling, and commercial kitchen environments.',
    userNeed:
      'You need products that withstand harsh environments, meet reliability requirements over long service life, and are designed for efficient manufacturing at industrial margins. You need engineering that accounts for real-world abuse \u2014 dust, moisture, vibration, temperature extremes \u2014 not just the ideal case.',
    relatedCapabilitySlugs: ['mechanical-engineering', 'manufacturing', 'tooling', 'prototyping'],
  },
  {
    slug: 'emerging-technology',
    title: 'Emerging Technology',
    shortDescription:
      'Emerging technology products \u2014 robotics, AI hardware, new energy systems, advanced materials \u2014 have a development challenge that mature products do not: the requirements are still evolving. The technology is novel. The form factor may not be settled. You need a partner who can handle ambiguity, iterate rapidly as requirements crystallize, and integrate across mechanical, electrical, and software domains without waiting for a complete spec that does not exist yet.',
    userNeed:
      'You are developing something that does not have a precedent \u2014 novel robotics, AI-powered hardware, new energy technology, advanced materials. You need a partner who thrives in ambiguity, iterates fast, and integrates across disciplines. You need prototypes this week, not next month.',
    relatedCapabilitySlugs: [
      'product-development',
      'industrial-design',
      'prototyping',
      'electrical-engineering',
    ],
  },
] as const;

export const CANONICAL_SLUGS = CANONICAL_INDUSTRIES.map((i) => i.slug) as string[];

const slugSet = new Set(CANONICAL_SLUGS);

export function isCanonicalIndustrySlug(slug: string): boolean {
  return slugSet.has(slug);
}

export function getCanonicalIndustry(slug: string): StaticIndustryDefinition | undefined {
  return CANONICAL_INDUSTRIES.find((i) => i.slug === slug);
}

export function getCanonicalSlugsForStaticParams(): { slug: string }[] {
  return CANONICAL_INDUSTRIES.map((i) => ({ slug: i.slug }));
}
