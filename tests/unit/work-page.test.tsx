import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ProjectCardModel } from '@/types/domain';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

import { WorkHero } from '@/features/work/components/WorkHero';
import { ProjectGrid } from '@/features/work/components/ProjectGrid';
import { WorkIndexView } from '@/features/work/components/WorkIndexView';
import type { WorkIndexData } from '@/features/work/types';

const mockProject: ProjectCardModel = {
  id: 'proj-1',
  slug: 'test-device',
  title: 'Test Device',
  industries: [{ slug: 'medical', title: 'Medical Devices' }],
  capabilities: [
    { slug: 'industrial-design', title: 'Industrial Design' },
    { slug: 'prototyping', title: 'Prototyping' },
  ],
  lifecycleStages: ['CON', 'EVT'],
  heroMedia: {
    kind: 'IMAGE',
    url: 'https://example.com/image.jpg',
    alt: 'Test device photo',
    decorative: false,
    width: 800,
    height: 600,
  },
  publicationState: 'PUBLISHED',
};

const emptyData: WorkIndexData = {
  cmsAvailable: false,
  allProjects: [],
  filteredProjects: [],
  facets: { industries: [], capabilities: [], stages: [] },
  activeFilters: { industry: null, capability: null, stage: null },
  totalResultCount: 0,
  filteredResultCount: 0,
};

function makeData(overrides: Partial<WorkIndexData>): WorkIndexData {
  return { ...emptyData, ...overrides };
}

describe('WorkHero', () => {
  it('renders a section with work-hero class', () => {
    const html = renderToStaticMarkup(<WorkHero />);
    expect(html).toContain('class="work-hero"');
  });

  it('renders the eyebrow with marker', () => {
    const html = renderToStaticMarkup(<WorkHero />);
    expect(html).toContain('Selected Work');
    expect(html).toContain('eyebrow-marker');
    expect(html).toContain('eyebrow-text');
  });

  it('renders the heading', () => {
    const html = renderToStaticMarkup(<WorkHero />);
    expect(html).toContain('Engineering physical products');
    expect(html).toContain('concept to production');
  });

  it('renders the supporting text', () => {
    const html = renderToStaticMarkup(<WorkHero />);
    expect(html).toContain('cross-section of programs');
  });

  it('uses shell container variant', () => {
    const html = renderToStaticMarkup(<WorkHero />);
    expect(html).toContain('data-variant="shell"');
  });

  it('has no inline styles', () => {
    const html = renderToStaticMarkup(<WorkHero />);
    expect(html).not.toContain('style=');
  });
});

describe('ProjectGrid', () => {
  it('renders empty state when no projects', () => {
    const html = renderToStaticMarkup(<ProjectGrid projects={[]} />);
    expect(html).toContain('project-grid-empty');
    expect(html).toContain('No projects match the current filters.');
  });

  it('renders custom empty message', () => {
    const html = renderToStaticMarkup(<ProjectGrid projects={[]} emptyMessage="Try again." />);
    expect(html).toContain('Try again.');
    expect(html).not.toContain('No projects match the current filters.');
  });

  it('renders project cards when projects provided', () => {
    const html = renderToStaticMarkup(<ProjectGrid projects={[mockProject]} />);
    expect(html).toContain('project-grid');
    expect(html).toContain('role="list"');
    expect(html).toContain('role="listitem"');
    expect(html).toContain('Test Device');
  });

  it('renders multiple projects', () => {
    const secondProject: ProjectCardModel = {
      ...mockProject,
      id: 'proj-2',
      slug: 'another-device',
      title: 'Another Device',
    };
    const html = renderToStaticMarkup(<ProjectGrid projects={[mockProject, secondProject]} />);
    expect(html).toContain('Test Device');
    expect(html).toContain('Another Device');
    expect(html).toContain('href="/work/test-device"');
    expect(html).toContain('href="/work/another-device"');
  });

  it('does not show empty state when projects exist', () => {
    const html = renderToStaticMarkup(<ProjectGrid projects={[mockProject]} />);
    expect(html).not.toContain('project-grid-empty');
  });
});

describe('WorkIndexView', () => {
  it('renders the hero section', () => {
    const html = renderToStaticMarkup(<WorkIndexView data={emptyData} />);
    expect(html).toContain('class="work-hero"');
    expect(html).toContain('Selected Work');
  });

  it('renders the filter bar section', () => {
    const html = renderToStaticMarkup(<WorkIndexView data={emptyData} />);
    expect(html).toContain('work-filter-bar');
  });

  it('renders the grid section', () => {
    const html = renderToStaticMarkup(<WorkIndexView data={emptyData} />);
    expect(html).toContain('work-grid-section');
  });

  it('shows total count when no filters active', () => {
    const data = makeData({ totalResultCount: 12 });
    const html = renderToStaticMarkup(<WorkIndexView data={data} />);
    expect(html).toContain('12 projects');
  });

  it('shows filtered count when filters active', () => {
    const data = makeData({
      totalResultCount: 12,
      filteredResultCount: 3,
      activeFilters: { industry: 'medical', capability: null, stage: null },
    });
    const html = renderToStaticMarkup(<WorkIndexView data={data} />);
    expect(html).toContain('3 of 12 projects');
  });

  it('has aria-live for result count announcements', () => {
    const html = renderToStaticMarkup(<WorkIndexView data={emptyData} />);
    expect(html).toContain('aria-live="polite"');
  });

  it('renders project grid with filtered projects', () => {
    const data = makeData({
      filteredProjects: [mockProject],
      totalResultCount: 5,
      filteredResultCount: 1,
    });
    const html = renderToStaticMarkup(<WorkIndexView data={data} />);
    expect(html).toContain('Test Device');
  });

  it('renders empty grid message when no filtered results', () => {
    const data = makeData({
      filteredProjects: [],
      totalResultCount: 5,
      filteredResultCount: 0,
      activeFilters: { industry: 'medical', capability: null, stage: null },
    });
    const html = renderToStaticMarkup(<WorkIndexView data={data} />);
    expect(html).toContain('No projects match the current filters');
  });
});
