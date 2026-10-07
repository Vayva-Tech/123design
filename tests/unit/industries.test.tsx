import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  CANONICAL_INDUSTRIES,
  CANONICAL_SLUGS,
  isCanonicalIndustrySlug,
  getCanonicalIndustry,
  getCanonicalSlugsForStaticParams,
} from '@/features/industries/registry';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

import { IndustryCard } from '@/features/industries/components/IndustryCard';
import { IndustryHero } from '@/features/industries/components/IndustryHero';
import { IndustryBody } from '@/features/industries/components/IndustryBody';
import { IndustryChallenges } from '@/features/industries/components/IndustryChallenges';
import { IndustryConsiderations } from '@/features/industries/components/IndustryConsiderations';
import { IndustryRelatedCapabilities } from '@/features/industries/components/IndustryRelatedCapabilities';
import { IndustryRelatedProjects } from '@/features/industries/components/IndustryRelatedProjects';
import { IndustryCta } from '@/features/industries/components/IndustryCta';
import {
  INDEX_EYEBROW,
  INDEX_HEADING,
  INDEX_SUPPORTING,
  FINAL_CTA_HEADING,
  FINAL_CTA_BODY,
  FINAL_CTA_BUTTON,
  INDUSTRY_EYEBROW,
  CHALLENGES_EYEBROW,
  CONSIDERATIONS_EYEBROW,
  RELATED_CAPABILITIES_HEADING,
  RELATED_PROJECTS_HEADING,
} from '@/features/industries/content';
import type { IndustryIndexEntry, IndustryPageData } from '@/features/industries/types';
import type { CapabilityCardModel } from '@/types/domain';

const basePageData: IndustryPageData = {
  slug: 'consumer-products',
  title: 'Consumer Products',
  shortDescription: 'Form, function and manufacturability for consumer-facing products.',
  typicalChallenges: ['Speed to market', 'Cost optimization'],
  developmentConsiderations: ['User research', 'Regulatory compliance'],
  relatedCapabilities: [
    {
      slug: 'industrial-design',
      title: 'Industrial Design',
      shortDescription: '',
      lifecycleStages: [],
    },
  ],
  relatedProjects: [],
  isPreview: false,
  cmsAvailable: false,
};

describe('Industries content', () => {
  it('has INDEX_EYEBROW', () => {
    expect(INDEX_EYEBROW).toBe('INDUSTRIES');
  });

  it('has INDEX_HEADING', () => {
    expect(INDEX_HEADING).toBe('BUILT FOR PRODUCTS\nTHAT HAVE TO WORK.');
  });

  it('has INDEX_SUPPORTING', () => {
    expect(INDEX_SUPPORTING).toBeTruthy();
    expect(INDEX_SUPPORTING.length).toBeGreaterThan(50);
  });

  it('has FINAL_CTA_HEADING', () => {
    expect(FINAL_CTA_HEADING).toBe('HAVE A PRODUCT TO BUILD?');
  });

  it('has FINAL_CTA_BODY', () => {
    expect(FINAL_CTA_BODY).toBeTruthy();
  });

  it('has FINAL_CTA_BUTTON', () => {
    expect(FINAL_CTA_BUTTON.label).toBe('START YOUR PROJECT');
    expect(FINAL_CTA_BUTTON.href).toBe('/start-project');
  });

  it('has INDUSTRY_EYEBROW', () => {
    expect(INDUSTRY_EYEBROW).toBe('INDUSTRY');
  });

  it('has CHALLENGES_EYEBROW', () => {
    expect(CHALLENGES_EYEBROW).toBe('TYPICAL CHALLENGES');
  });

  it('has CONSIDERATIONS_EYEBROW', () => {
    expect(CONSIDERATIONS_EYEBROW).toBe('DEVELOPMENT CONSIDERATIONS');
  });

  it('has RELATED_CAPABILITIES_HEADING', () => {
    expect(RELATED_CAPABILITIES_HEADING).toBe('Relevant Capabilities');
  });

  it('has RELATED_PROJECTS_HEADING', () => {
    expect(RELATED_PROJECTS_HEADING).toBe('Related Work');
  });
});

describe('Industries Registry', () => {
  it('has exactly 6 canonical industries', () => {
    expect(CANONICAL_INDUSTRIES).toHaveLength(6);
  });

  it('has unique slugs', () => {
    const unique = new Set(CANONICAL_SLUGS);
    expect(unique.size).toBe(CANONICAL_SLUGS.length);
  });

  it('has expected slugs', () => {
    expect(CANONICAL_SLUGS).toEqual([
      'consumer-products',
      'medical',
      'defense-security',
      'electronics',
      'industrial',
      'emerging-technology',
    ]);
  });

  it('each industry has required fields', () => {
    for (const industry of CANONICAL_INDUSTRIES) {
      expect(industry.slug).toBeTruthy();
      expect(industry.title).toBeTruthy();
      expect(industry.shortDescription).toBeTruthy();
      expect(industry.userNeed).toBeTruthy();
      expect(industry.relatedCapabilitySlugs.length).toBeGreaterThan(0);
    }
  });

  it('isCanonicalIndustrySlug returns true for valid slugs', () => {
    expect(isCanonicalIndustrySlug('consumer-products')).toBe(true);
    expect(isCanonicalIndustrySlug('medical')).toBe(true);
    expect(isCanonicalIndustrySlug('emerging-technology')).toBe(true);
  });

  it('isCanonicalIndustrySlug returns false for unknown slugs', () => {
    expect(isCanonicalIndustrySlug('nonexistent')).toBe(false);
    expect(isCanonicalIndustrySlug('')).toBe(false);
    expect(isCanonicalIndustrySlug('MEDICAL')).toBe(false);
  });

  it('getCanonicalIndustry returns the correct entry', () => {
    const industry = getCanonicalIndustry('medical');
    expect(industry).toBeDefined();
    expect(industry!.title).toBe('Medical');
  });

  it('getCanonicalIndustry returns undefined for unknown slug', () => {
    expect(getCanonicalIndustry('unknown')).toBeUndefined();
  });

  it('getCanonicalSlugsForStaticParams returns 6 entries', () => {
    const params = getCanonicalSlugsForStaticParams();
    expect(params).toHaveLength(6);
    expect(params[0]).toHaveProperty('slug');
    expect(params[0]!.slug).toBe('consumer-products');
  });
});

describe('IndustryCard', () => {
  const entry: IndustryIndexEntry = {
    slug: 'consumer-products',
    title: 'Consumer Products',
    shortDescription: 'Form, function and manufacturability.',
  };

  it('renders as a link', () => {
    const html = renderToStaticMarkup(<IndustryCard entry={entry} />);
    expect(html).toContain('<a');
    expect(html).toContain('href="/industries/consumer-products"');
  });

  it('has industry-card class', () => {
    const html = renderToStaticMarkup(<IndustryCard entry={entry} />);
    expect(html).toContain('class="industry-card"');
  });

  it('renders title', () => {
    const html = renderToStaticMarkup(<IndustryCard entry={entry} />);
    expect(html).toContain('Consumer Products');
  });

  it('renders short description', () => {
    const html = renderToStaticMarkup(<IndustryCard entry={entry} />);
    expect(html).toContain('Form, function and manufacturability.');
  });
});

describe('IndustryHero', () => {
  it('renders section with industry-hero class', () => {
    const html = renderToStaticMarkup(<IndustryHero data={basePageData} />);
    expect(html).toContain('class="industry-hero"');
  });

  it('renders the industry title', () => {
    const html = renderToStaticMarkup(<IndustryHero data={basePageData} />);
    expect(html).toContain('Consumer Products');
  });

  it('renders the short description', () => {
    const html = renderToStaticMarkup(<IndustryHero data={basePageData} />);
    expect(html).toContain('Form, function and manufacturability');
  });

  it('renders INDUSTRY eyebrow', () => {
    const html = renderToStaticMarkup(<IndustryHero data={basePageData} />);
    expect(html).toContain('INDUSTRY');
  });

  it('uses shell container', () => {
    const html = renderToStaticMarkup(<IndustryHero data={basePageData} />);
    expect(html).toContain('data-variant="shell"');
  });

  it('does not render media when heroMedia is absent', () => {
    const html = renderToStaticMarkup(<IndustryHero data={basePageData} />);
    expect(html).not.toContain('industry-hero__media');
  });
});

describe('IndustryBody', () => {
  it('renders section with industry-body class', () => {
    const html = renderToStaticMarkup(<IndustryBody intro="Intro text" />);
    expect(html).toContain('class="industry-body"');
  });

  it('renders intro text', () => {
    const html = renderToStaticMarkup(<IndustryBody intro="Intro text" />);
    expect(html).toContain('Intro text');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<IndustryBody intro="text" />);
    expect(html).toContain('aria-label="Overview"');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<IndustryBody intro="text" />);
    expect(html).toContain('data-variant="reading"');
  });

  it('returns null when no intro', () => {
    const html = renderToStaticMarkup(<IndustryBody />);
    expect(html).toBe('');
  });
});

describe('IndustryChallenges', () => {
  const challenges = ['Speed to market', 'Cost optimization', 'Design quality'];

  it('renders section with industry-challenges class', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={challenges} />);
    expect(html).toContain('class="industry-challenges"');
  });

  it('renders all challenge items', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={challenges} />);
    expect(html).toContain('Speed to market');
    expect(html).toContain('Cost optimization');
    expect(html).toContain('Design quality');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={challenges} />);
    expect(html).toContain('aria-label="Typical challenges"');
  });

  it('renders challenges eyebrow', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={challenges} />);
    expect(html).toContain('TYPICAL CHALLENGES');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={challenges} />);
    expect(html).toContain('Typical challenges in this sector');
  });

  it('returns null when empty', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={[]} />);
    expect(html).toBe('');
  });

  it('renders list items as li elements', () => {
    const html = renderToStaticMarkup(<IndustryChallenges challenges={challenges} />);
    expect(html).toContain('<li');
    expect(html).toContain('industry-challenges__item');
  });
});

describe('IndustryConsiderations', () => {
  const considerations = ['User research', 'Regulatory compliance'];

  it('renders section with industry-considerations class', () => {
    const html = renderToStaticMarkup(<IndustryConsiderations considerations={considerations} />);
    expect(html).toContain('class="industry-considerations"');
  });

  it('renders all consideration items', () => {
    const html = renderToStaticMarkup(<IndustryConsiderations considerations={considerations} />);
    expect(html).toContain('User research');
    expect(html).toContain('Regulatory compliance');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<IndustryConsiderations considerations={considerations} />);
    expect(html).toContain('aria-label="Development considerations"');
  });

  it('renders considerations eyebrow', () => {
    const html = renderToStaticMarkup(<IndustryConsiderations considerations={considerations} />);
    expect(html).toContain('DEVELOPMENT CONSIDERATIONS');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<IndustryConsiderations considerations={considerations} />);
    expect(html).toContain('Key development considerations');
  });

  it('returns null when empty', () => {
    const html = renderToStaticMarkup(<IndustryConsiderations considerations={[]} />);
    expect(html).toBe('');
  });
});

describe('IndustryRelatedCapabilities', () => {
  const capabilities: CapabilityCardModel[] = [
    {
      slug: 'industrial-design',
      title: 'Industrial Design',
      shortDescription: '',
      lifecycleStages: [],
    },
    {
      slug: 'mechanical-engineering',
      title: 'Mechanical Engineering',
      shortDescription: '',
      lifecycleStages: [],
    },
  ];

  it('returns null when no capabilities', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={[]} />);
    expect(html).toBe('');
  });

  it('renders section with industry-related-caps class', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={capabilities} />);
    expect(html).toContain('class="industry-related-caps"');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={capabilities} />);
    expect(html).toContain('aria-label="Related capabilities"');
  });

  it('renders Capabilities eyebrow', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={capabilities} />);
    expect(html).toContain('Capabilities');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={capabilities} />);
    expect(html).toContain('Relevant Capabilities');
  });

  it('renders links to capability pages', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={capabilities} />);
    expect(html).toContain('href="/capabilities/industrial-design"');
    expect(html).toContain('href="/capabilities/mechanical-engineering"');
  });

  it('renders capability titles', () => {
    const html = renderToStaticMarkup(<IndustryRelatedCapabilities capabilities={capabilities} />);
    expect(html).toContain('Industrial Design');
    expect(html).toContain('Mechanical Engineering');
  });
});

describe('IndustryRelatedProjects', () => {
  it('returns null when no projects', () => {
    const html = renderToStaticMarkup(<IndustryRelatedProjects projects={[]} />);
    expect(html).toBe('');
  });

  it('renders section with industry-related-projects class when projects exist', () => {
    const projects = [
      {
        id: 'proj-1',
        slug: 'proj-1',
        title: 'Project 1',
        industries: [],
        capabilities: [],
        lifecycleStages: [],
        heroMedia: {
          kind: 'IMAGE' as const,
          url: '/img.jpg',
          alt: 'Alt',
          decorative: false,
          width: 800,
          height: 600,
        },
        publicationState: 'PUBLISHED' as const,
      },
    ];
    const html = renderToStaticMarkup(<IndustryRelatedProjects projects={projects} />);
    expect(html).toContain('class="industry-related-projects"');
  });

  it('has aria-label when projects exist', () => {
    const projects = [
      {
        id: 'proj-1',
        slug: 'proj-1',
        title: 'Project 1',
        industries: [],
        capabilities: [],
        lifecycleStages: [],
        heroMedia: {
          kind: 'IMAGE' as const,
          url: '/img.jpg',
          alt: 'Alt',
          decorative: false,
          width: 800,
          height: 600,
        },
        publicationState: 'PUBLISHED' as const,
      },
    ];
    const html = renderToStaticMarkup(<IndustryRelatedProjects projects={projects} />);
    expect(html).toContain('aria-label="Related projects"');
  });

  it('renders Work eyebrow when projects exist', () => {
    const projects = [
      {
        id: 'proj-1',
        slug: 'proj-1',
        title: 'Project 1',
        industries: [],
        capabilities: [],
        lifecycleStages: [],
        heroMedia: {
          kind: 'IMAGE' as const,
          url: '/img.jpg',
          alt: 'Alt',
          decorative: false,
          width: 800,
          height: 600,
        },
        publicationState: 'PUBLISHED' as const,
      },
    ];
    const html = renderToStaticMarkup(<IndustryRelatedProjects projects={projects} />);
    expect(html).toContain('Work');
  });

  it('renders heading when projects exist', () => {
    const projects = [
      {
        id: 'proj-1',
        slug: 'proj-1',
        title: 'Project 1',
        industries: [],
        capabilities: [],
        lifecycleStages: [],
        heroMedia: {
          kind: 'IMAGE' as const,
          url: '/img.jpg',
          alt: 'Alt',
          decorative: false,
          width: 800,
          height: 600,
        },
        publicationState: 'PUBLISHED' as const,
      },
    ];
    const html = renderToStaticMarkup(<IndustryRelatedProjects projects={projects} />);
    expect(html).toContain('Related Work');
  });
});

describe('IndustryCta', () => {
  it('renders section with industry-cta class', () => {
    const html = renderToStaticMarkup(<IndustryCta />);
    expect(html).toContain('class="industry-cta"');
  });

  it('renders FINAL CTA heading', () => {
    const html = renderToStaticMarkup(<IndustryCta />);
    expect(html).toContain('HAVE A PRODUCT TO BUILD?');
  });

  it('renders START YOUR PROJECT button', () => {
    const html = renderToStaticMarkup(<IndustryCta />);
    expect(html).toContain('START YOUR PROJECT');
  });

  it('links to /start-project', () => {
    const html = renderToStaticMarkup(<IndustryCta />);
    expect(html).toContain('href="/start-project"');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<IndustryCta />);
    expect(html).toContain('data-variant="reading"');
  });
});
