import { describe, it, expect } from 'vitest';
import {
  parseWorkFilters,
  filterProjects,
  deriveWorkFacets,
  countActiveFilters,
  isOtherIndustryProject,
} from '@/features/work/filters';
import type { ProjectCardModel } from '@/types/domain';

function makeProject(overrides: Partial<ProjectCardModel> & { id: string }): ProjectCardModel {
  return {
    slug: overrides.slug ?? overrides.id,
    title: overrides.title ?? 'Test Project',
    industries: overrides.industries ?? [],
    capabilities: overrides.capabilities ?? [],
    lifecycleStages: overrides.lifecycleStages ?? [],
    heroMedia: { kind: 'IMAGE', url: 'https://example.com/img.png', alt: '', decorative: true },
    publicationState: 'PUBLISHED',
    ...overrides,
  };
}

describe('parseWorkFilters', () => {
  it('returns all null for empty params', () => {
    const result = parseWorkFilters({});
    expect(result).toEqual({ industry: null, capability: null, stage: null });
  });

  it('returns all null for undefined values', () => {
    const result = parseWorkFilters({
      industry: undefined,
      capability: undefined,
      stage: undefined,
    });
    expect(result).toEqual({ industry: null, capability: null, stage: null });
  });

  it('accepts valid industry slug', () => {
    const result = parseWorkFilters({ industry: 'medical' });
    expect(result.industry).toBe('medical');
  });

  it('accepts all canonical industry slugs', () => {
    const slugs = [
      'consumer-products',
      'medical',
      'defense-security',
      'electronics',
      'industrial',
      'emerging-technology',
      'other',
    ];
    for (const slug of slugs) {
      const result = parseWorkFilters({ industry: slug });
      expect(result.industry).toBe(slug);
    }
  });

  it('rejects invalid industry slug', () => {
    const result = parseWorkFilters({ industry: 'fintech' });
    expect(result.industry).toBeNull();
  });

  it('accepts valid capability slug', () => {
    const result = parseWorkFilters({ capability: 'industrial-design' });
    expect(result.capability).toBe('industrial-design');
  });

  it('accepts all canonical capability slugs', () => {
    const slugs = [
      'industrial-design',
      'mechanical-engineering',
      'electrical-engineering',
      'prototyping',
      'tooling',
      'manufacturing',
      'program-management',
    ];
    for (const slug of slugs) {
      const result = parseWorkFilters({ capability: slug });
      expect(result.capability).toBe(slug);
    }
  });

  it('rejects invalid capability slug', () => {
    const result = parseWorkFilters({ capability: 'firmware' });
    expect(result.capability).toBeNull();
  });

  it('maps stage URL values to lifecycle stages', () => {
    expect(parseWorkFilters({ stage: 'con' }).stage).toBe('CON');
    expect(parseWorkFilters({ stage: 'evt' }).stage).toBe('EVT');
    expect(parseWorkFilters({ stage: 'dvt' }).stage).toBe('DVT');
    expect(parseWorkFilters({ stage: 'pvt' }).stage).toBe('PVT');
    expect(parseWorkFilters({ stage: 'production' }).stage).toBe('PRODUCTION');
  });

  it('rejects invalid stage value', () => {
    const result = parseWorkFilters({ stage: 'CON' });
    expect(result.stage).toBeNull();
  });

  it('rejects unknown stage value', () => {
    const result = parseWorkFilters({ stage: 'unknown' });
    expect(result.stage).toBeNull();
  });

  it('parses all three filters together', () => {
    const result = parseWorkFilters({
      industry: 'medical',
      capability: 'prototyping',
      stage: 'evt',
    });
    expect(result).toEqual({
      industry: 'medical',
      capability: 'prototyping',
      stage: 'EVT',
    });
  });

  it('ignores non-filter params', () => {
    const result = parseWorkFilters({
      utm_source: 'google',
      industry: 'medical',
    });
    expect(result.industry).toBe('medical');
    expect(result.capability).toBeNull();
    expect(result.stage).toBeNull();
  });
});

describe('isOtherIndustryProject', () => {
  it('returns false for project with no industries', () => {
    const project = makeProject({ id: 'p1', industries: [] });
    expect(isOtherIndustryProject(project)).toBe(false);
  });

  it('returns false for project with canonical industry', () => {
    const project = makeProject({
      id: 'p1',
      industries: [{ slug: 'medical', title: 'Medical' }],
    });
    expect(isOtherIndustryProject(project)).toBe(false);
  });

  it('returns true for project with non-canonical industry', () => {
    const project = makeProject({
      id: 'p1',
      industries: [{ slug: 'aerospace', title: 'Aerospace' }],
    });
    expect(isOtherIndustryProject(project)).toBe(true);
  });

  it('returns true when mix of canonical and non-canonical', () => {
    const project = makeProject({
      id: 'p1',
      industries: [
        { slug: 'medical', title: 'Medical' },
        { slug: 'fintech', title: 'Fintech' },
      ],
    });
    expect(isOtherIndustryProject(project)).toBe(true);
  });
});

describe('filterProjects', () => {
  const medicalProject = makeProject({
    id: 'p1',
    industries: [{ slug: 'medical', title: 'Medical' }],
    capabilities: [{ slug: 'industrial-design', title: 'Industrial Design' }],
    lifecycleStages: ['CON', 'EVT'],
  });

  const electronicsProject = makeProject({
    id: 'p2',
    industries: [{ slug: 'electronics', title: 'Electronics' }],
    capabilities: [{ slug: 'electrical-engineering', title: 'Electrical Engineering' }],
    lifecycleStages: ['DVT', 'PVT'],
  });

  const otherProject = makeProject({
    id: 'p3',
    industries: [{ slug: 'aerospace', title: 'Aerospace' }],
    capabilities: [{ slug: 'manufacturing', title: 'Manufacturing' }],
    lifecycleStages: ['PRODUCTION'],
  });

  const allProjects = [medicalProject, electronicsProject, otherProject];

  it('returns all projects when no filters active', () => {
    const result = filterProjects(allProjects, {
      industry: null,
      capability: null,
      stage: null,
    });
    expect(result).toHaveLength(3);
  });

  it('filters by industry', () => {
    const result = filterProjects(allProjects, {
      industry: 'medical',
      capability: null,
      stage: null,
    });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('p1');
  });

  it('filters by capability', () => {
    const result = filterProjects(allProjects, {
      industry: null,
      capability: 'electrical-engineering',
      stage: null,
    });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('p2');
  });

  it('filters by stage', () => {
    const result = filterProjects(allProjects, {
      industry: null,
      capability: null,
      stage: 'CON',
    });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('p1');
  });

  it('filters by "other" industry', () => {
    const result = filterProjects(allProjects, {
      industry: 'other',
      capability: null,
      stage: null,
    });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('p3');
  });

  it('combines industry and capability filters (AND logic)', () => {
    const result = filterProjects(allProjects, {
      industry: 'medical',
      capability: 'industrial-design',
      stage: null,
    });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('p1');
  });

  it('returns empty when combined filters match nothing', () => {
    const result = filterProjects(allProjects, {
      industry: 'medical',
      capability: 'electrical-engineering',
      stage: null,
    });
    expect(result).toHaveLength(0);
  });

  it('combines all three filters', () => {
    const result = filterProjects(allProjects, {
      industry: 'electronics',
      capability: 'electrical-engineering',
      stage: 'DVT',
    });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('p2');
  });

  it('returns empty array for empty input', () => {
    const result = filterProjects([], {
      industry: 'medical',
      capability: null,
      stage: null,
    });
    expect(result).toHaveLength(0);
  });
});

describe('deriveWorkFacets', () => {
  it('returns empty facets for empty project list', () => {
    const facets = deriveWorkFacets([]);
    expect(facets.industries).toEqual([]);
    expect(facets.capabilities).toEqual([]);
    expect(facets.stages).toEqual([]);
  });

  it('counts industries correctly', () => {
    const projects = [
      makeProject({
        id: 'p1',
        industries: [{ slug: 'medical', title: 'Medical' }],
      }),
      makeProject({
        id: 'p2',
        industries: [
          { slug: 'medical', title: 'Medical' },
          { slug: 'electronics', title: 'Electronics' },
        ],
      }),
    ];
    const facets = deriveWorkFacets(projects);
    expect(facets.industries).toEqual([
      { slug: 'medical', title: 'Medical', count: 2 },
      { slug: 'electronics', title: 'Electronics', count: 1 },
    ]);
  });

  it('deduplicates per-project for industry counts', () => {
    const project = makeProject({
      id: 'p1',
      industries: [
        { slug: 'medical', title: 'Medical' },
        { slug: 'medical', title: 'Medical' },
      ],
    });
    const facets = deriveWorkFacets([project]);
    expect(facets.industries).toEqual([{ slug: 'medical', title: 'Medical', count: 1 }]);
  });

  it('includes "other" for non-canonical industries', () => {
    const project = makeProject({
      id: 'p1',
      industries: [{ slug: 'aerospace', title: 'Aerospace' }],
    });
    const facets = deriveWorkFacets([project]);
    const other = facets.industries.find((i) => i.slug === 'other');
    expect(other).toBeDefined();
    expect(other!.count).toBe(1);
  });

  it('does not include "other" for projects with no industries', () => {
    const project = makeProject({ id: 'p1', industries: [] });
    const facets = deriveWorkFacets([project]);
    const other = facets.industries.find((i) => i.slug === 'other');
    expect(other).toBeUndefined();
  });

  it('excludes industry options with zero count', () => {
    const project = makeProject({
      id: 'p1',
      industries: [{ slug: 'medical', title: 'Medical' }],
    });
    const facets = deriveWorkFacets([project]);
    const slugs = facets.industries.map((i) => i.slug);
    expect(slugs).toContain('medical');
    expect(slugs).not.toContain('electronics');
    expect(slugs).not.toContain('consumer-products');
  });

  it('counts capabilities correctly', () => {
    const projects = [
      makeProject({
        id: 'p1',
        capabilities: [{ slug: 'industrial-design', title: 'Industrial Design' }],
      }),
      makeProject({
        id: 'p2',
        capabilities: [
          { slug: 'industrial-design', title: 'Industrial Design' },
          { slug: 'manufacturing', title: 'Manufacturing' },
        ],
      }),
    ];
    const facets = deriveWorkFacets(projects);
    expect(facets.capabilities).toEqual([
      { slug: 'industrial-design', title: 'Industrial Design', count: 2 },
      { slug: 'manufacturing', title: 'Manufacturing', count: 1 },
    ]);
  });

  it('deduplicates per-project for capability counts', () => {
    const project = makeProject({
      id: 'p1',
      capabilities: [
        { slug: 'prototyping', title: 'Prototyping' },
        { slug: 'prototyping', title: 'Prototyping' },
      ],
    });
    const facets = deriveWorkFacets([project]);
    expect(facets.capabilities).toEqual([{ slug: 'prototyping', title: 'Prototyping', count: 1 }]);
  });

  it('counts stages correctly', () => {
    const projects = [
      makeProject({ id: 'p1', lifecycleStages: ['CON', 'EVT'] }),
      makeProject({ id: 'p2', lifecycleStages: ['EVT', 'DVT'] }),
    ];
    const facets = deriveWorkFacets(projects);
    expect(facets.stages).toEqual([
      { slug: 'CON', title: 'Concept', count: 1 },
      { slug: 'EVT', title: 'EVT', count: 2 },
      { slug: 'DVT', title: 'DVT', count: 1 },
    ]);
  });

  it('deduplicates per-project for stage counts', () => {
    const project = makeProject({
      id: 'p1',
      lifecycleStages: ['CON', 'CON'],
    });
    const facets = deriveWorkFacets([project]);
    expect(facets.stages).toEqual([{ slug: 'CON', title: 'Concept', count: 1 }]);
  });

  it('preserves canonical order for industries', () => {
    const projects = [
      makeProject({
        id: 'p1',
        industries: [{ slug: 'electronics', title: 'Electronics' }],
      }),
      makeProject({
        id: 'p2',
        industries: [{ slug: 'consumer-products', title: 'Consumer Products' }],
      }),
    ];
    const facets = deriveWorkFacets(projects);
    expect(facets.industries[0]!.slug).toBe('consumer-products');
    expect(facets.industries[1]!.slug).toBe('electronics');
  });

  it('preserves canonical order for capabilities', () => {
    const projects = [
      makeProject({
        id: 'p1',
        capabilities: [{ slug: 'manufacturing', title: 'Manufacturing' }],
      }),
      makeProject({
        id: 'p2',
        capabilities: [{ slug: 'industrial-design', title: 'Industrial Design' }],
      }),
    ];
    const facets = deriveWorkFacets(projects);
    expect(facets.capabilities[0]!.slug).toBe('industrial-design');
    expect(facets.capabilities[1]!.slug).toBe('manufacturing');
  });

  it('preserves canonical stage order', () => {
    const projects = [makeProject({ id: 'p1', lifecycleStages: ['PRODUCTION', 'CON'] })];
    const facets = deriveWorkFacets(projects);
    expect(facets.stages[0]!.slug).toBe('CON');
    expect(facets.stages[1]!.slug).toBe('PRODUCTION');
  });
});

describe('countActiveFilters', () => {
  it('returns 0 when no filters active', () => {
    expect(countActiveFilters({ industry: null, capability: null, stage: null })).toBe(0);
  });

  it('returns 1 when one filter active', () => {
    expect(countActiveFilters({ industry: 'medical', capability: null, stage: null })).toBe(1);
  });

  it('returns 2 when two filters active', () => {
    expect(
      countActiveFilters({
        industry: 'medical',
        capability: 'prototyping',
        stage: null,
      }),
    ).toBe(2);
  });

  it('returns 3 when all filters active', () => {
    expect(
      countActiveFilters({
        industry: 'medical',
        capability: 'prototyping',
        stage: 'EVT',
      }),
    ).toBe(3);
  });
});
