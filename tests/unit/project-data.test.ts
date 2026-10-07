import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { ProjectPageModel, ProjectCardModel } from '@/types/domain';

vi.mock('next/headers', () => ({
  draftMode: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND');
  }),
  useRouter: () => ({ replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('@/lib/sanity/config', () => ({
  hasSanityConfig: vi.fn(),
}));

vi.mock('@/lib/sanity/fetch/data-access', () => ({
  fetchProjectBySlug: vi.fn(),
  fetchPreviewProjectBySlug: vi.fn(),
  fetchPublishedProjects: vi.fn(),
}));

vi.mock('@/lib/sanity/mappers/project', () => ({
  mapProjectPage: vi.fn(),
  mapProjectCard: vi.fn(),
}));

import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { hasSanityConfig } from '@/lib/sanity/config';
import {
  fetchProjectBySlug,
  fetchPreviewProjectBySlug,
  fetchPublishedProjects,
} from '@/lib/sanity/fetch/data-access';
import { mapProjectPage, mapProjectCard } from '@/lib/sanity/mappers/project';
import { isValidProjectSlug, getProjectPageData } from '@/features/project/data';

const mockDraftMode = vi.mocked(draftMode);
const mockNotfound = vi.mocked(notFound);
const mockHasSanityConfig = vi.mocked(hasSanityConfig);
const mockFetchProjectBySlug = vi.mocked(fetchProjectBySlug);
const mockFetchPreviewProjectBySlug = vi.mocked(fetchPreviewProjectBySlug);
const mockFetchPublishedProjects = vi.mocked(fetchPublishedProjects);
const mockMapProjectPage = vi.mocked(mapProjectPage);
const mockMapProjectCard = vi.mocked(mapProjectCard);

const baseProject: ProjectPageModel = {
  id: 'proj-1',
  slug: 'test-device',
  title: 'Test Device',
  summary: 'A test medical device',
  heroMedia: {
    kind: 'IMAGE',
    url: 'https://example.com/hero.png',
    alt: 'Hero',
    decorative: false,
    width: 1200,
    height: 800,
  },
  industries: ['Medical Devices'],
  capabilities: ['Industrial Design', 'Prototyping'],
  lifecycleStages: ['CON', 'EVT'],
  year: 2025,
  clientDisplayName: 'Acme Corp',
  modules: [],
  relatedProjects: [],
};

const cardProject: ProjectCardModel = {
  id: 'proj-2',
  slug: 'other-device',
  title: 'Other Device',
  industries: [{ slug: 'electronics', title: 'Electronics' }],
  capabilities: [{ slug: 'electrical-engineering', title: 'Electrical Engineering' }],
  lifecycleStages: ['DVT'],
  heroMedia: {
    kind: 'IMAGE',
    url: 'https://example.com/other.png',
    alt: '',
    decorative: true,
  },
  publicationState: 'PUBLISHED',
};

beforeEach(() => {
  vi.clearAllMocks();
  mockDraftMode.mockResolvedValue({ isEnabled: false } as Awaited<ReturnType<typeof draftMode>>);
});

describe('isValidProjectSlug', () => {
  it('accepts simple lowercase slug', () => {
    expect(isValidProjectSlug('test-device')).toBe(true);
  });

  it('accepts slug with numbers', () => {
    expect(isValidProjectSlug('proj-123')).toBe(true);
  });

  it('accepts single word slug', () => {
    expect(isValidProjectSlug('device')).toBe(true);
  });

  it('rejects empty string', () => {
    expect(isValidProjectSlug('')).toBe(false);
  });

  it('rejects slug with uppercase', () => {
    expect(isValidProjectSlug('Test-Device')).toBe(false);
  });

  it('rejects slug with spaces', () => {
    expect(isValidProjectSlug('test device')).toBe(false);
  });

  it('rejects slug with special characters', () => {
    expect(isValidProjectSlug('test_device!')).toBe(false);
  });

  it('rejects slug starting with hyphen', () => {
    expect(isValidProjectSlug('-test')).toBe(false);
  });

  it('rejects slug ending with hyphen', () => {
    expect(isValidProjectSlug('test-')).toBe(false);
  });

  it('rejects slug with consecutive hyphens', () => {
    expect(isValidProjectSlug('test--device')).toBe(false);
  });

  it('rejects slug over 200 characters', () => {
    const longSlug = 'a'.repeat(201);
    expect(isValidProjectSlug(longSlug)).toBe(false);
  });

  it('accepts slug at exactly 200 characters', () => {
    const slug = 'a'.repeat(200);
    expect(isValidProjectSlug(slug)).toBe(true);
  });
});

describe('getProjectPageData', () => {
  it('calls notFound for invalid slug', async () => {
    await expect(getProjectPageData('INVALID')).rejects.toThrow('NEXT_NOT_FOUND');
    expect(mockNotfound).toHaveBeenCalled();
  });

  it('calls notFound when Sanity is not configured', async () => {
    mockHasSanityConfig.mockReturnValue(false);
    await expect(getProjectPageData('test-device')).rejects.toThrow('NEXT_NOT_FOUND');
  });

  it('calls notFound when project not found (public mode)', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchProjectBySlug.mockResolvedValue(null);
    await expect(getProjectPageData('test-device')).rejects.toThrow('NEXT_NOT_FOUND');
  });

  it('returns project data in public mode', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockDraftMode.mockResolvedValue({ isEnabled: false } as Awaited<ReturnType<typeof draftMode>>);
    mockFetchProjectBySlug.mockResolvedValue({ _id: 'proj-1' } as never);
    mockMapProjectPage.mockReturnValue({
      ...baseProject,
      modules: [{ kind: 'narrative', sectionType: 'overview', body: 'Content' }],
    });
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-2' }] as never);
    mockMapProjectCard.mockReturnValue(cardProject);

    const result = await getProjectPageData('test-device');

    expect(result.project.title).toBe('Test Device');
    expect(result.presentationMode).toBe('FULL');
    expect(result.isPreview).toBe(false);
    expect(result.nextProject).not.toBeNull();
    expect(result.nextProject!.slug).toBe('other-device');
  });

  it('returns LIGHT mode when no renderable modules', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchProjectBySlug.mockResolvedValue({ _id: 'proj-1' } as never);
    mockMapProjectPage.mockReturnValue(baseProject);
    mockFetchPublishedProjects.mockResolvedValue([]);

    const result = await getProjectPageData('test-device');

    expect(result.presentationMode).toBe('LIGHT');
  });

  it('uses preview fetch in preview mode', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockDraftMode.mockResolvedValue({ isEnabled: true } as Awaited<ReturnType<typeof draftMode>>);
    mockFetchPreviewProjectBySlug.mockResolvedValue({ _id: 'proj-1' } as never);
    mockMapProjectPage.mockReturnValue(baseProject);

    const result = await getProjectPageData('test-device');

    expect(result.isPreview).toBe(true);
    expect(mockFetchPreviewProjectBySlug).toHaveBeenCalled();
    expect(mockFetchProjectBySlug).not.toHaveBeenCalled();
    expect(result.nextProject).toBeNull();
  });

  it('calls notFound when preview project not found', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockDraftMode.mockResolvedValue({ isEnabled: true } as Awaited<ReturnType<typeof draftMode>>);
    mockFetchPreviewProjectBySlug.mockResolvedValue(null);

    await expect(getProjectPageData('test-device')).rejects.toThrow('NEXT_NOT_FOUND');
  });

  it('excludes current project from next project', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchProjectBySlug.mockResolvedValue({ _id: 'proj-1' } as never);
    mockMapProjectPage.mockReturnValue(baseProject);
    mockFetchPublishedProjects.mockResolvedValue([{ _id: 'proj-1' }] as never);
    mockMapProjectCard.mockReturnValue({
      ...cardProject,
      slug: 'test-device',
    });

    const result = await getProjectPageData('test-device');

    expect(result.nextProject).toBeNull();
  });

  it('sets nextProject to null when fetchPublishedProjects fails', async () => {
    mockHasSanityConfig.mockReturnValue(true);
    mockFetchProjectBySlug.mockResolvedValue({ _id: 'proj-1' } as never);
    mockMapProjectPage.mockReturnValue(baseProject);
    mockFetchPublishedProjects.mockRejectedValue(new Error('CMS down'));

    const result = await getProjectPageData('test-device');

    expect(result.nextProject).toBeNull();
  });
});
