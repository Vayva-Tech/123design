import { describe, it, expect } from 'vitest';
import type {
  ProjectModuleModel,
  NarrativeModuleModel,
  DisciplineModuleModel,
  GalleryModuleModel,
  VideoModuleModel,
  TechnicalModuleModel,
  TestimonialModuleModel,
} from '@/types/domain';
import {
  isRenderableProjectModule,
  getProjectPresentationMode,
} from '@/features/project/presentation';

const imageMedia = {
  kind: 'IMAGE' as const,
  url: 'https://example.com/img.png',
  alt: 'Test',
  decorative: false,
};

const videoMedia = {
  kind: 'VIDEO' as const,
  url: 'https://example.com/video.mp4',
  purpose: 'projectVideo' as const,
};

function narrative(overrides: Partial<NarrativeModuleModel> = {}): NarrativeModuleModel {
  return { kind: 'narrative', sectionType: 'overview', ...overrides };
}

function discipline(overrides: Partial<DisciplineModuleModel> = {}): DisciplineModuleModel {
  return { kind: 'discipline', sectionType: 'industrialDesign', ...overrides };
}

function gallery(overrides: Partial<GalleryModuleModel> = {}): GalleryModuleModel {
  return { kind: 'gallery', items: [], ...overrides };
}

function video(overrides: Partial<VideoModuleModel> = {}): VideoModuleModel {
  return { kind: 'video', media: videoMedia, ...overrides };
}

function technical(overrides: Partial<TechnicalModuleModel> = {}): TechnicalModuleModel {
  return { kind: 'technical', ...overrides };
}

function testimonial(overrides: Partial<TestimonialModuleModel> = {}): TestimonialModuleModel {
  return { kind: 'testimonial', quote: '"Great work"', name: 'Jane Doe', ...overrides };
}

describe('isRenderableProjectModule', () => {
  describe('narrative', () => {
    it('returns false when all fields empty', () => {
      expect(isRenderableProjectModule(narrative())).toBe(false);
    });

    it('returns true when heading present', () => {
      expect(isRenderableProjectModule(narrative({ heading: 'Overview' }))).toBe(true);
    });

    it('returns true when body present', () => {
      expect(isRenderableProjectModule(narrative({ body: 'Some text' }))).toBe(true);
    });

    it('returns true when media present', () => {
      expect(isRenderableProjectModule(narrative({ media: imageMedia }))).toBe(true);
    });
  });

  describe('discipline', () => {
    it('returns false when all fields empty', () => {
      expect(isRenderableProjectModule(discipline())).toBe(false);
    });

    it('returns true when heading present', () => {
      expect(isRenderableProjectModule(discipline({ heading: 'Custom' }))).toBe(true);
    });

    it('returns true when body present', () => {
      expect(isRenderableProjectModule(discipline({ body: 'Details' }))).toBe(true);
    });

    it('returns true when media present', () => {
      expect(isRenderableProjectModule(discipline({ media: imageMedia }))).toBe(true);
    });
  });

  describe('gallery', () => {
    it('returns false when items empty', () => {
      expect(isRenderableProjectModule(gallery())).toBe(false);
    });

    it('returns true when items present', () => {
      expect(isRenderableProjectModule(gallery({ items: [{ media: imageMedia }] }))).toBe(true);
    });
  });

  describe('video', () => {
    it('returns true when media present', () => {
      expect(isRenderableProjectModule(video())).toBe(true);
    });
  });

  describe('technical', () => {
    it('returns false when all fields empty', () => {
      expect(isRenderableProjectModule(technical())).toBe(false);
    });

    it('returns true when heading present', () => {
      expect(isRenderableProjectModule(technical({ heading: 'Specs' }))).toBe(true);
    });

    it('returns true when details present', () => {
      expect(isRenderableProjectModule(technical({ details: 'Specs here' }))).toBe(true);
    });

    it('returns true when media present', () => {
      expect(isRenderableProjectModule(technical({ media: imageMedia }))).toBe(true);
    });
  });

  describe('testimonial', () => {
    it('returns true when quote and name present', () => {
      expect(isRenderableProjectModule(testimonial())).toBe(true);
    });

    it('returns false when quote missing', () => {
      expect(isRenderableProjectModule(testimonial({ quote: '' }))).toBe(false);
    });

    it('returns false when name missing', () => {
      expect(isRenderableProjectModule(testimonial({ name: '' }))).toBe(false);
    });
  });
});

describe('getProjectPresentationMode', () => {
  it('returns LIGHT when no modules', () => {
    expect(getProjectPresentationMode([])).toBe('LIGHT');
  });

  it('returns LIGHT when all modules are empty', () => {
    const modules: ProjectModuleModel[] = [narrative(), discipline(), technical()];
    expect(getProjectPresentationMode(modules)).toBe('LIGHT');
  });

  it('returns FULL when at least one module is renderable', () => {
    const modules: ProjectModuleModel[] = [
      narrative(),
      narrative({ body: 'Content' }),
      technical(),
    ];
    expect(getProjectPresentationMode(modules)).toBe('FULL');
  });

  it('returns FULL for gallery with items', () => {
    const modules: ProjectModuleModel[] = [gallery({ items: [{ media: imageMedia }] })];
    expect(getProjectPresentationMode(modules)).toBe('FULL');
  });

  it('returns FULL for testimonial with quote and name', () => {
    const modules: ProjectModuleModel[] = [testimonial()];
    expect(getProjectPresentationMode(modules)).toBe('FULL');
  });

  it('returns LIGHT for gallery with no items', () => {
    const modules: ProjectModuleModel[] = [gallery()];
    expect(getProjectPresentationMode(modules)).toBe('LIGHT');
  });
});
