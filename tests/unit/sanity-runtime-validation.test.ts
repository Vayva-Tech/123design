import { describe, it, expect } from 'vitest';
import {
  projectCardRecordSchema,
  projectPageRecordSchema,
  capabilityCardRecordSchema,
  capabilityPageRecordSchema,
  industryPageRecordSchema,
  articleCardRecordSchema,
  articlePageRecordSchema,
  testimonialRecordSchema,
  siteSettingsRecordSchema,
  leadFormSettingsRecordSchema,
  webhookPayloadSchema,
} from '../../src/lib/sanity/validation/schemas';

const validImage = {
  kind: 'IMAGE' as const,
  url: 'https://cdn.sanity.io/image.png',
  alt: 'Test',
  decorative: false,
};

const validVideo = {
  kind: 'VIDEO' as const,
  url: 'https://cdn.sanity.io/video.mp4',
  purpose: 'projectVideo' as const,
};

describe('Runtime Validation — Valid Data', () => {
  it('projectCardRecordSchema accepts valid card', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'proj-1',
      slug: 'test',
      title: 'Test',
      heroMedia: validImage,
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(true);
  });

  it('projectPageRecordSchema accepts valid page', () => {
    const result = projectPageRecordSchema.safeParse({
      id: 'proj-1',
      slug: 'test',
      title: 'Test',
      summary: 'Summary',
      heroMedia: validImage,
      modules: [],
      relatedProjects: [],
    });
    expect(result.success).toBe(true);
  });

  it('capabilityCardRecordSchema accepts valid card', () => {
    const result = capabilityCardRecordSchema.safeParse({
      slug: 'industrial-design',
      title: 'Industrial Design',
      shortDescription: 'Design for manufacturing',
    });
    expect(result.success).toBe(true);
  });

  it('capabilityPageRecordSchema accepts valid page', () => {
    const result = capabilityPageRecordSchema.safeParse({
      slug: 'test',
      title: 'Test',
      shortDescription: 'Desc',
      intro: 'Intro',
      body: 'Body',
      relatedCapabilities: [],
      relatedProjectIds: [],
      supportMedia: [],
    });
    expect(result.success).toBe(true);
  });

  it('industryPageRecordSchema accepts valid page', () => {
    const result = industryPageRecordSchema.safeParse({
      slug: 'aerospace',
      title: 'Aerospace',
      shortDescription: 'Aerospace engineering',
      intro: 'Intro',
      relatedCapabilities: [],
    });
    expect(result.success).toBe(true);
  });

  it('articleCardRecordSchema accepts valid card', () => {
    const result = articleCardRecordSchema.safeParse({
      slug: 'test',
      title: 'Test',
      excerpt: 'Excerpt',
      publicationDate: '2026-09-26',
    });
    expect(result.success).toBe(true);
  });

  it('articlePageRecordSchema accepts valid page', () => {
    const result = articlePageRecordSchema.safeParse({
      slug: 'test',
      title: 'Test',
      excerpt: 'Excerpt',
      publicationDate: '2026-09-26',
      author: { name: 'Author' },
      body: [{ _type: 'block' }],
      relatedCapabilities: [],
      relatedProjects: [],
    });
    expect(result.success).toBe(true);
  });

  it('testimonialRecordSchema accepts valid testimonial', () => {
    const result = testimonialRecordSchema.safeParse({
      quote: 'Great work',
      name: 'Client',
    });
    expect(result.success).toBe(true);
  });

  it('siteSettingsRecordSchema accepts valid settings', () => {
    const result = siteSettingsRecordSchema.safeParse({
      siteName: '123 Design',
      siteDescription: 'Studio',
      socialLinks: [],
      approvedClientLogos: [],
    });
    expect(result.success).toBe(true);
  });

  it('leadFormSettingsRecordSchema accepts valid settings', () => {
    const result = leadFormSettingsRecordSchema.safeParse({});
    expect(result.success).toBe(true);
  });
});

describe('Runtime Validation — Invalid Data', () => {
  it('projectCardRecordSchema rejects missing required fields', () => {
    const result = projectCardRecordSchema.safeParse({
      slug: 'test',
    });
    expect(result.success).toBe(false);
  });

  it('projectCardRecordSchema rejects invalid heroMedia', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'proj-1',
      slug: 'test',
      title: 'Test',
      heroMedia: { kind: 'AUDIO' },
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(false);
  });

  it('projectPageRecordSchema rejects missing summary', () => {
    const result = projectPageRecordSchema.safeParse({
      id: 'proj-1',
      slug: 'test',
      title: 'Test',
      heroMedia: validImage,
    });
    expect(result.success).toBe(false);
  });

  it('capabilityCardRecordSchema rejects missing title', () => {
    const result = capabilityCardRecordSchema.safeParse({
      slug: 'test',
      shortDescription: 'Desc',
    });
    expect(result.success).toBe(false);
  });

  it('articlePageRecordSchema rejects missing author', () => {
    const result = articlePageRecordSchema.safeParse({
      slug: 'test',
      title: 'Test',
      excerpt: 'Excerpt',
      publicationDate: '2026-09-26',
      body: 'text',
    });
    expect(result.success).toBe(false);
  });

  it('testimonialRecordSchema rejects missing quote', () => {
    const result = testimonialRecordSchema.safeParse({
      name: 'Client',
    });
    expect(result.success).toBe(false);
  });

  it('siteSettingsRecordSchema rejects missing siteName', () => {
    const result = siteSettingsRecordSchema.safeParse({
      siteDescription: 'Desc',
    });
    expect(result.success).toBe(false);
  });
});

describe('Runtime Validation — Media Discriminated Union', () => {
  it('accepts IMAGE media', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      heroMedia: validImage,
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.heroMedia.kind).toBe('IMAGE');
    }
  });

  it('rejects unknown media kind', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      heroMedia: { kind: 'AUDIO', url: 'x' },
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(false);
  });

  it('video requires purpose', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      heroMedia: { kind: 'VIDEO', url: 'x' },
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(false);
  });

  it('accepts valid VIDEO media', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      heroMedia: validVideo,
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(true);
  });
});

describe('Runtime Validation — Array Defaults', () => {
  it('projectCardRecordSchema defaults capabilities to empty array', () => {
    const result = projectCardRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      heroMedia: validImage,
      publicationState: 'PUBLISHED',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.capabilities).toEqual([]);
    }
  });

  it('projectPageRecordSchema defaults modules to empty array', () => {
    const result = projectPageRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      summary: 'Summary',
      heroMedia: validImage,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.modules).toEqual([]);
      expect(result.data.relatedProjects).toEqual([]);
    }
  });

  it('siteSettingsRecordSchema defaults socialLinks to empty array', () => {
    const result = siteSettingsRecordSchema.safeParse({
      siteName: 'Test',
      siteDescription: 'Desc',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.socialLinks).toEqual([]);
      expect(result.data.approvedClientLogos).toEqual([]);
    }
  });

  it('leadFormSettingsRecordSchema defaults all arrays', () => {
    const result = leadFormSettingsRecordSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.productTypes).toEqual([]);
      expect(result.data.developmentStages).toEqual([]);
      expect(result.data.needs).toEqual([]);
      expect(result.data.budgetEnabled).toBe(false);
      expect(result.data.uploadEnabled).toBe(false);
    }
  });
});

describe('Runtime Validation — Module Discriminated Union', () => {
  it('accepts narrative module', () => {
    const result = projectPageRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      summary: 'Summary',
      heroMedia: validImage,
      modules: [{ kind: 'narrative', sectionType: 'overview' }],
    });
    expect(result.success).toBe(true);
  });

  it('accepts all 6 module kinds', () => {
    const result = projectPageRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      summary: 'Summary',
      heroMedia: validImage,
      modules: [
        { kind: 'narrative', sectionType: 'overview' },
        { kind: 'discipline', sectionType: 'industrialDesign' },
        { kind: 'gallery', items: [] },
        { kind: 'video', media: validVideo },
        { kind: 'technical' },
        { kind: 'testimonial', quote: 'Great', name: 'Client' },
      ],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.modules).toHaveLength(6);
    }
  });

  it('rejects unknown module kind', () => {
    const result = projectPageRecordSchema.safeParse({
      id: 'p1',
      slug: 'test',
      title: 'Test',
      summary: 'Summary',
      heroMedia: validImage,
      modules: [{ kind: 'unknown' }],
    });
    expect(result.success).toBe(false);
  });
});

describe('Webhook Payload Validation', () => {
  it('accepts valid webhook payload', () => {
    const result = webhookPayloadSchema.safeParse({
      type: 'project',
      id: 'proj-1',
      _type: 'project',
      transition: 'update',
    });
    expect(result.success).toBe(true);
  });

  it('accepts minimal payload with just _type', () => {
    const result = webhookPayloadSchema.safeParse({
      _type: 'project',
    });
    expect(result.success).toBe(true);
  });

  it('rejects payload without _type', () => {
    const result = webhookPayloadSchema.safeParse({
      type: 'project',
    });
    expect(result.success).toBe(false);
  });

  it('accepts payload with _type, _id, and slug', () => {
    const result = webhookPayloadSchema.safeParse({
      _type: 'project',
      _id: 'proj-1',
      slug: 'my-project',
    });
    expect(result.success).toBe(true);
  });
});
