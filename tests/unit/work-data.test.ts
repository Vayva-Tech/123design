import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { ProjectCardModel } from '@/types/domain';

vi.mock('@/lib/sanity/config', () => ({
  hasSanityConfig: vi.fn(),
}));

vi.mock('@/lib/sanity/fetch/data-access', () => ({
  fetchPublishedProjects: vi.fn(),
}));

vi.mock('@/lib/sanity/mappers/project', () => ({
  mapProjectCard: vi.fn(),
}));

import { hasSanityConfig } from '@/lib/sanity/config';
import { fetchPublishedProjects } from '@/lib/sanity/fetch/data-access';
import { mapProjectCard } from '@/lib/sanity/mappers/project';
import { getWorkIndexData } from '@/features/work/data';
import { STATIC_FEATURED_PROJECTS } from '@/features/work/static-projects';

const mockHasSanityConfig = vi.mocked(hasSanityConfig);
const mockFetchPublishedProjects = vi.mocked(fetchPublishedProjects);
const mockMapProjectCard = vi.mocked(mapProjectCard);

const medicalProject: ProjectCardModel = {
  id: 'proj-1',
  slug: 'medical-device',
  title: 'Medical Device',
  industries: [{ slug: 'medical', title: 'Medical' }],
  capabilities: [{ slug: 'industrial-design', title: 'Industrial Design' }],
  lifecycleStages: ['CON', 'EVT'],
  heroMedia: { kind: 'IMAGE', url: 'https://example.com/img.png', alt: '', decorative: true },
  publicationState: 'PUBLISHED',
};

const electronicsProject: ProjectCardModel = {
  id: 'proj-2',
  slug: 'electronics-board',
  title: 'Electronics Board',
  industries: [{ slug: 'electronics', title: 'Electronics' }],
  capabilities: [{ slug: 'electrical-engineering', title: 'Electrical Engineering' }],
  lifecycleStages: ['DVT', 'PVT'],
  heroMedia: { kind: 'IMAGE', url: 'https://example.com/img2.png', alt: '', decorative: true },
  publicationState: 'PUBLISHED',
};

beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  delete process.env.NEXT_PUBLIC_SANITY_DATASET;
});

describe('getWorkIndexData', () => {
  it('returns static fallback projects when CMS is unavailable', async () => {
    mockHasSanityConfig.mockReturnValue(false);

    const result = await getWorkIndexData({});

    expect(result.cmsAvailable).toBe(false);
    expect(result.allProjects).toEqual(STATIC_FEATURED_PROJECTS);
    expect(result.filteredProjects).toEqual(STATIC_FEATURED_PROJECTS);
    expect(result.totalResultCount).toBe(STATIC_FEATURED_PROJECTS.length);
    expect(result.filteredResultCount).toBe(STATIC_FEATURED_PROJECTS.length);
    expect(mockFetchPublishedProjects).not.toHaveBeenCalled();
  });

  it('preserves active filters when CMS is unavailable', async () => {
    mockHasSanityConfig.mockReturnValue(false);

    const result = await getWorkIndexData({ industry: 'medical', stage: 'evt' });

    expect(result.activeFilters.industry).toBe('medical');
    expect(result.activeFilters.stage).toBe('EVT');
    expect(result.activeFilters.capability).toBeNull();
  });

  it('ignores invalid filter params when CMS is unavailable', async () => {
    mockHasSanityConfig.mockReturnValue(false);

    const result = await getWorkIndexData({ industry: 'fintech', stage: 'UNKNOWN' });

    expect(result.activeFilters.industry).toBeNull();
    expect(result.activeFilters.stage).toBeNull();
  });

  it('fetches and maps projects when CMS is available', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }, { _id: 'proj-2' }] as never);
    mockMapProjectCard.mockReturnValueOnce(medicalProject).mockReturnValueOnce(electronicsProject);

    const result = await getWorkIndexData({});

    expect(result.cmsAvailable).toBe(true);
    expect(result.allProjects).toHaveLength(2);
    expect(result.totalResultCount).toBe(2);
    expect(result.filteredResultCount).toBe(2);
    expect(mockFetchPublishedProjects).toHaveBeenCalledTimes(1);
    expect(mockMapProjectCard).toHaveBeenCalledTimes(2);
  });

  it('derives facets from all projects', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }, { _id: 'proj-2' }] as never);
    mockMapProjectCard.mockReturnValueOnce(medicalProject).mockReturnValueOnce(electronicsProject);

    const result = await getWorkIndexData({});

    expect(result.facets.industries).toHaveLength(2);
    expect(result.facets.industries[0]!.slug).toBe('medical');
    expect(result.facets.industries[1]!.slug).toBe('electronics');
    expect(result.facets.stages.length).toBeGreaterThan(0);
  });

  it('filters projects by industry', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }, { _id: 'proj-2' }] as never);
    mockMapProjectCard.mockReturnValueOnce(medicalProject).mockReturnValueOnce(electronicsProject);

    const result = await getWorkIndexData({ industry: 'medical' });

    expect(result.activeFilters.industry).toBe('medical');
    expect(result.filteredProjects).toHaveLength(1);
    expect(result.filteredProjects[0]!.id).toBe('proj-1');
    expect(result.filteredResultCount).toBe(1);
    expect(result.totalResultCount).toBe(2);
  });

  it('filters projects by stage', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }, { _id: 'proj-2' }] as never);
    mockMapProjectCard.mockReturnValueOnce(medicalProject).mockReturnValueOnce(electronicsProject);

    const result = await getWorkIndexData({ stage: 'dvt' });

    expect(result.activeFilters.stage).toBe('DVT');
    expect(result.filteredProjects).toHaveLength(1);
    expect(result.filteredProjects[0]!.id).toBe('proj-2');
  });

  it('combines multiple filters', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }, { _id: 'proj-2' }] as never);
    mockMapProjectCard.mockReturnValueOnce(medicalProject).mockReturnValueOnce(electronicsProject);

    const result = await getWorkIndexData({
      industry: 'medical',
      stage: 'con',
    });

    expect(result.filteredProjects).toHaveLength(1);
    expect(result.filteredProjects[0]!.id).toBe('proj-1');
  });

  it('returns zero filtered results when no projects match', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }] as never);
    mockMapProjectCard.mockReturnValueOnce(medicalProject);

    const result = await getWorkIndexData({ industry: 'electronics' });

    expect(result.filteredProjects).toHaveLength(0);
    expect(result.filteredResultCount).toBe(0);
    expect(result.totalResultCount).toBe(1);
  });

  it('falls back to static projects when CMS returns empty', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchPublishedProjects.mockResolvedValue([]);

    const result = await getWorkIndexData({});

    expect(result.cmsAvailable).toBe(true);
    expect(result.allProjects).toEqual(STATIC_FEATURED_PROJECTS);
    expect(result.totalResultCount).toBe(STATIC_FEATURED_PROJECTS.length);
    expect(result.facets.industries.length).toBeGreaterThan(0);
    expect(result.facets.capabilities.length).toBeGreaterThan(0);
  });
});
