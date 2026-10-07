import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  CANONICAL_CAPABILITIES,
  CANONICAL_SLUGS,
  isCanonicalSlug,
  getCanonicalCapability,
  getCanonicalSlugsForStaticParams,
} from '@/features/capabilities/registry';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

import { CapabilityHero } from '@/features/capabilities/components/CapabilityHero';
import { CapabilityLifecycle } from '@/features/capabilities/components/CapabilityLifecycle';
import { CapabilityDeliverables } from '@/features/capabilities/components/CapabilityDeliverables';
import { CapabilityMethods } from '@/features/capabilities/components/CapabilityMethods';
import { CapabilityBody } from '@/features/capabilities/components/CapabilityBody';
import { CapabilitySupportMedia } from '@/features/capabilities/components/CapabilitySupportMedia';
import { CapabilityRelatedCapabilities } from '@/features/capabilities/components/CapabilityRelatedCapabilities';
import { CapabilityCta } from '@/features/capabilities/components/CapabilityCta';
import { CapabilityCard } from '@/features/capabilities/components/CapabilityCard';
import { CapabilityGroupSection } from '@/features/capabilities/components/CapabilityGroupSection';
import type {
  CapabilityPageData,
  CapabilityIndexEntry,
  CapabilityGroupData,
} from '@/features/capabilities/types';

const basePageData: CapabilityPageData = {
  slug: 'industrial-design',
  title: 'Industrial Design',
  group: 'DESIGN',
  shortDescription: 'Form, user experience, aesthetics and human factors.',
  deliverables: ['Form exploration', 'CMF specification'],
  lifecycleStages: ['CON', 'EVT'],
  methods: ['User research', 'Sketching'],
  relatedCapabilities: [],
  relatedProjects: [],
  isPreview: false,
  cmsAvailable: false,
};

describe('Registry', () => {
  it('has exactly 10 canonical capabilities', () => {
    expect(CANONICAL_CAPABILITIES).toHaveLength(10);
  });

  it('has unique slugs', () => {
    const unique = new Set(CANONICAL_SLUGS);
    expect(unique.size).toBe(CANONICAL_SLUGS.length);
  });

  it('has four groups represented', () => {
    const groups = new Set(CANONICAL_CAPABILITIES.map((c) => c.group));
    expect(groups).toEqual(new Set(['DESIGN', 'ENGINEERING', 'BUILD', 'MANAGE']));
  });

  it('orders are sequential 1-10', () => {
    const orders = CANONICAL_CAPABILITIES.map((c) => c.order);
    expect(orders).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('isCanonicalSlug returns true for valid slugs', () => {
    expect(isCanonicalSlug('industrial-design')).toBe(true);
    expect(isCanonicalSlug('product-development')).toBe(true);
    expect(isCanonicalSlug('manufacturing')).toBe(true);
  });

  it('isCanonicalSlug returns false for unknown slugs', () => {
    expect(isCanonicalSlug('nonexistent')).toBe(false);
    expect(isCanonicalSlug('')).toBe(false);
    expect(isCanonicalSlug('INDUSTRIAL-DESIGN')).toBe(false);
  });

  it('getCanonicalCapability returns the correct entry', () => {
    const cap = getCanonicalCapability('mechanical-engineering');
    expect(cap).toBeDefined();
    expect(cap!.title).toBe('Mechanical Engineering');
    expect(cap!.group).toBe('ENGINEERING');
  });

  it('getCanonicalCapability returns undefined for unknown slug', () => {
    expect(getCanonicalCapability('unknown')).toBeUndefined();
  });

  it('getCanonicalSlugsForStaticParams returns 10 entries', () => {
    const params = getCanonicalSlugsForStaticParams();
    expect(params).toHaveLength(10);
    expect(params[0]).toHaveProperty('slug');
    expect(params[0]!.slug).toBe('product-development');
  });
});

describe('CapabilityHero', () => {
  it('renders section with capability-hero class', () => {
    const html = renderToStaticMarkup(<CapabilityHero data={basePageData} />);
    expect(html).toContain('class="capability-hero"');
  });

  it('renders the capability title', () => {
    const html = renderToStaticMarkup(<CapabilityHero data={basePageData} />);
    expect(html).toContain('Industrial Design');
  });

  it('renders the short description', () => {
    const html = renderToStaticMarkup(<CapabilityHero data={basePageData} />);
    expect(html).toContain('Form, user experience');
  });

  it('renders CAPABILITY eyebrow with group', () => {
    const html = renderToStaticMarkup(<CapabilityHero data={basePageData} />);
    expect(html).toContain('CAPABILITY');
    expect(html).toContain('DESIGN');
  });

  it('uses shell container', () => {
    const html = renderToStaticMarkup(<CapabilityHero data={basePageData} />);
    expect(html).toContain('data-variant="shell"');
  });

  it('omits short description when not provided', () => {
    const data = { ...basePageData, shortDescription: undefined };
    const html = renderToStaticMarkup(<CapabilityHero data={data} />);
    expect(html).not.toContain('capability-hero__summary');
  });

  it('does not render media when heroMedia is absent', () => {
    const html = renderToStaticMarkup(<CapabilityHero data={basePageData} />);
    expect(html).not.toContain('capability-hero__media');
  });
});

describe('CapabilityLifecycle', () => {
  it('renders section with capability-lifecycle class', () => {
    const html = renderToStaticMarkup(<CapabilityLifecycle stages={['CON', 'EVT']} />);
    expect(html).toContain('class="capability-lifecycle"');
  });

  it('renders stage labels', () => {
    const html = renderToStaticMarkup(<CapabilityLifecycle stages={['CON', 'EVT']} />);
    expect(html).toContain('Concept');
    expect(html).toContain('Engineering Validation');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<CapabilityLifecycle stages={['CON']} />);
    expect(html).toContain('aria-label="Lifecycle stages"');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<CapabilityLifecycle stages={['CON']} />);
    expect(html).toContain('data-variant="reading"');
  });

  it('returns null when no stages', () => {
    const html = renderToStaticMarkup(<CapabilityLifecycle stages={[]} />);
    expect(html).toBe('');
  });

  it('renders all five stages', () => {
    const html = renderToStaticMarkup(
      <CapabilityLifecycle stages={['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION']} />,
    );
    expect(html).toContain('Concept');
    expect(html).toContain('Engineering Validation');
    expect(html).toContain('Design Validation');
    expect(html).toContain('Production Validation');
    expect(html).toContain('Production');
  });
});

describe('CapabilityDeliverables', () => {
  const items = ['Form exploration', 'CMF specification', 'Design language'];

  it('renders section with capability-deliverables class', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={items} />);
    expect(html).toContain('class="capability-deliverables"');
  });

  it('renders all deliverable items', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={items} />);
    expect(html).toContain('Form exploration');
    expect(html).toContain('CMF specification');
    expect(html).toContain('Design language');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={items} />);
    expect(html).toContain('aria-label="Deliverables"');
  });

  it('renders Deliverables eyebrow', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={items} />);
    expect(html).toContain('Deliverables');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={items} />);
    expect(html).toContain('What we deliver');
  });

  it('returns null when no items', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={[]} />);
    expect(html).toBe('');
  });

  it('renders list items as li elements', () => {
    const html = renderToStaticMarkup(<CapabilityDeliverables items={items} />);
    expect(html).toContain('<li');
    expect(html).toContain('capability-deliverables__item');
  });
});

describe('CapabilityMethods', () => {
  const items = ['User research', 'Sketching'];

  it('renders section with capability-methods class', () => {
    const html = renderToStaticMarkup(<CapabilityMethods items={items} />);
    expect(html).toContain('class="capability-methods"');
  });

  it('renders all method items', () => {
    const html = renderToStaticMarkup(<CapabilityMethods items={items} />);
    expect(html).toContain('User research');
    expect(html).toContain('Sketching');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<CapabilityMethods items={items} />);
    expect(html).toContain('aria-label="Methods"');
  });

  it('renders Methods eyebrow', () => {
    const html = renderToStaticMarkup(<CapabilityMethods items={items} />);
    expect(html).toContain('Methods');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<CapabilityMethods items={items} />);
    expect(html).toContain('How we work');
  });

  it('returns null when no items', () => {
    const html = renderToStaticMarkup(<CapabilityMethods items={[]} />);
    expect(html).toBe('');
  });
});

describe('CapabilityBody', () => {
  it('renders section with capability-body class', () => {
    const html = renderToStaticMarkup(<CapabilityBody intro="Intro text" body="Body text" />);
    expect(html).toContain('class="capability-body"');
  });

  it('renders intro text', () => {
    const html = renderToStaticMarkup(<CapabilityBody intro="Intro text" />);
    expect(html).toContain('Intro text');
  });

  it('renders body text', () => {
    const html = renderToStaticMarkup(<CapabilityBody body="Body text" />);
    expect(html).toContain('Body text');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<CapabilityBody intro="text" />);
    expect(html).toContain('aria-label="Overview"');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<CapabilityBody intro="text" />);
    expect(html).toContain('data-variant="reading"');
  });

  it('returns null when both intro and body are absent', () => {
    const html = renderToStaticMarkup(<CapabilityBody />);
    expect(html).toBe('');
  });

  it('renders both intro and body when both provided', () => {
    const html = renderToStaticMarkup(<CapabilityBody intro="Intro" body="Body" />);
    expect(html).toContain('capability-body__intro');
    expect(html).toContain('capability-body__text');
  });
});

describe('CapabilitySupportMedia', () => {
  const imageMedia = {
    kind: 'IMAGE' as const,
    url: 'https://cdn.sanity.io/images/test.png',
    alt: 'Test',
    decorative: false,
    width: 800,
    height: 600,
  };

  it('returns null when no media', () => {
    const html = renderToStaticMarkup(<CapabilitySupportMedia media={[]} />);
    expect(html).toBe('');
  });

  it('renders section with capability-support-media class', () => {
    const html = renderToStaticMarkup(<CapabilitySupportMedia media={[imageMedia]} />);
    expect(html).toContain('class="capability-support-media"');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<CapabilitySupportMedia media={[imageMedia]} />);
    expect(html).toContain('aria-label="Supporting media"');
  });

  it('uses wideMedia container', () => {
    const html = renderToStaticMarkup(<CapabilitySupportMedia media={[imageMedia]} />);
    expect(html).toContain('data-variant="wide-media"');
  });

  it('renders Gallery eyebrow', () => {
    const html = renderToStaticMarkup(<CapabilitySupportMedia media={[imageMedia]} />);
    expect(html).toContain('Gallery');
  });

  it('renders grid items', () => {
    const html = renderToStaticMarkup(<CapabilitySupportMedia media={[imageMedia]} />);
    expect(html).toContain('capability-support-media__item');
  });
});

describe('CapabilityRelatedCapabilities', () => {
  const related: CapabilityIndexEntry[] = [
    { slug: 'product-development', title: 'Product Development', group: 'DESIGN', order: 1 },
    {
      slug: 'mechanical-engineering',
      title: 'Mechanical Engineering',
      group: 'ENGINEERING',
      order: 4,
    },
  ];

  it('returns null when no capabilities', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={[]} />);
    expect(html).toBe('');
  });

  it('renders section with capability-related class', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('class="capability-related"');
  });

  it('has aria-label', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('aria-label="Related capabilities"');
  });

  it('renders Related Capabilities eyebrow', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('Related Capabilities');
  });

  it('renders heading', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('Works alongside');
  });

  it('renders links to capability pages', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('href="/capabilities/product-development"');
    expect(html).toContain('href="/capabilities/mechanical-engineering"');
  });

  it('renders capability titles', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('Product Development');
    expect(html).toContain('Mechanical Engineering');
  });

  it('renders group labels', () => {
    const html = renderToStaticMarkup(<CapabilityRelatedCapabilities capabilities={related} />);
    expect(html).toContain('DESIGN');
    expect(html).toContain('ENGINEERING');
  });
});

describe('CapabilityCta', () => {
  it('renders section with capability-cta class', () => {
    const html = renderToStaticMarkup(<CapabilityCta />);
    expect(html).toContain('class="capability-cta"');
  });

  it('renders CTA heading', () => {
    const html = renderToStaticMarkup(<CapabilityCta />);
    expect(html).toContain('HAVE A PRODUCT TO BUILD?');
  });

  it('renders CTA body text', () => {
    const html = renderToStaticMarkup(<CapabilityCta />);
    expect(html).toContain('Let');
  });

  it('renders primary button', () => {
    const html = renderToStaticMarkup(<CapabilityCta />);
    expect(html).toContain('START YOUR PROJECT');
  });

  it('links to /start-project', () => {
    const html = renderToStaticMarkup(<CapabilityCta />);
    expect(html).toContain('href="/start-project"');
  });

  it('uses reading container', () => {
    const html = renderToStaticMarkup(<CapabilityCta />);
    expect(html).toContain('data-variant="reading"');
  });
});

describe('CapabilityCard', () => {
  const entry: CapabilityIndexEntry = {
    slug: 'prototyping',
    title: 'Prototyping',
    group: 'BUILD',
    order: 7,
    shortDescription: 'Rapid physical validation.',
    lifecycleStages: ['CON', 'EVT', 'DVT'],
  };

  it('renders as a link', () => {
    const html = renderToStaticMarkup(<CapabilityCard entry={entry} />);
    expect(html).toContain('<a');
    expect(html).toContain('href="/capabilities/prototyping"');
  });

  it('has capability-card class', () => {
    const html = renderToStaticMarkup(<CapabilityCard entry={entry} />);
    expect(html).toContain('class="capability-card"');
  });

  it('renders title', () => {
    const html = renderToStaticMarkup(<CapabilityCard entry={entry} />);
    expect(html).toContain('Prototyping');
  });

  it('renders short description', () => {
    const html = renderToStaticMarkup(<CapabilityCard entry={entry} />);
    expect(html).toContain('Rapid physical validation.');
  });

  it('renders lifecycle stage tags', () => {
    const html = renderToStaticMarkup(<CapabilityCard entry={entry} />);
    expect(html).toContain('Concept');
    expect(html).toContain('EVT');
    expect(html).toContain('DVT');
  });

  it('omits stages when not provided', () => {
    const noStages: CapabilityIndexEntry = { ...entry, lifecycleStages: undefined };
    const html = renderToStaticMarkup(<CapabilityCard entry={noStages} />);
    expect(html).not.toContain('capability-card__stages');
  });

  it('omits description when not provided', () => {
    const noDesc: CapabilityIndexEntry = { ...entry, shortDescription: undefined };
    const html = renderToStaticMarkup(<CapabilityCard entry={noDesc} />);
    expect(html).not.toContain('capability-card__description');
  });
});

describe('CapabilityGroupSection', () => {
  const groupData: CapabilityGroupData = {
    group: 'DESIGN',
    label: 'DESIGN',
    capabilities: [
      { slug: 'product-development', title: 'Product Development', group: 'DESIGN', order: 1 },
      { slug: 'industrial-design', title: 'Industrial Design', group: 'DESIGN', order: 2 },
    ],
  };

  it('renders section with capability-group class', () => {
    const html = renderToStaticMarkup(<CapabilityGroupSection group={groupData} />);
    expect(html).toContain('class="capability-group"');
  });

  it('has aria-label matching group label', () => {
    const html = renderToStaticMarkup(<CapabilityGroupSection group={groupData} />);
    expect(html).toContain('aria-label="DESIGN"');
  });

  it('renders group label as eyebrow', () => {
    const html = renderToStaticMarkup(<CapabilityGroupSection group={groupData} />);
    expect(html).toContain('DESIGN');
  });

  it('renders capability cards for each entry', () => {
    const html = renderToStaticMarkup(<CapabilityGroupSection group={groupData} />);
    expect(html).toContain('Product Development');
    expect(html).toContain('Industrial Design');
  });

  it('renders links to capability detail pages', () => {
    const html = renderToStaticMarkup(<CapabilityGroupSection group={groupData} />);
    expect(html).toContain('href="/capabilities/product-development"');
    expect(html).toContain('href="/capabilities/industrial-design"');
  });

  it('renders grid container', () => {
    const html = renderToStaticMarkup(<CapabilityGroupSection group={groupData} />);
    expect(html).toContain('capability-group__grid');
  });
});
