import { describe, it, expect } from 'vitest';
import { mapMedia, mapImage, mapOptionalMedia } from '../../src/lib/sanity/mappers/media';
import { mapProjectCard, mapProjectPage } from '../../src/lib/sanity/mappers/project';
import { mapCapabilityCard, mapCapabilityPage } from '../../src/lib/sanity/mappers/capability';
import { mapIndustryPage } from '../../src/lib/sanity/mappers/industry';
import { mapArticleCard, mapArticlePage } from '../../src/lib/sanity/mappers/article';
import { mapTestimonial } from '../../src/lib/sanity/mappers/testimonial';
import { mapSiteSettings, mapLeadFormSettings } from '../../src/lib/sanity/mappers/settings';
import type {
  ImageMediaRecord,
  MediaRecord,
  ProjectPageRecord,
} from '../../src/lib/sanity/validation';

const baseImage: ImageMediaRecord = {
  kind: 'IMAGE',
  url: 'https://cdn.sanity.io/image.png',
  alt: 'Test',
  decorative: false,
};

const baseVideo: MediaRecord = {
  kind: 'VIDEO',
  url: 'https://cdn.sanity.io/video.mp4',
  purpose: 'projectVideo',
};

describe('Media Mappers', () => {
  describe('mapImage', () => {
    it('maps image record to model', () => {
      const result = mapImage(baseImage);
      expect(result.kind).toBe('IMAGE');
      expect(result.url).toBe('https://cdn.sanity.io/image.png');
      expect(result.alt).toBe('Test');
    });

    it('forces alt to empty string for decorative images', () => {
      const result = mapImage({ ...baseImage, decorative: true, alt: 'Should be ignored' });
      expect(result.alt).toBe('');
      expect(result.decorative).toBe(true);
    });

    it('preserves optional fields', () => {
      const result = mapImage({
        ...baseImage,
        width: 1920,
        height: 1080,
        aspectRatio: 1.777,
        caption: 'A caption',
        hotspot: { x: 0.5, y: 0.5, width: 0.3, height: 0.3 },
        crop: { top: 0.1, bottom: 0.1, left: 0, right: 0 },
      });
      expect(result.width).toBe(1920);
      expect(result.height).toBe(1080);
      expect(result.aspectRatio).toBe(1.777);
      expect(result.caption).toBe('A caption');
      expect(result.hotspot).toEqual({ x: 0.5, y: 0.5, width: 0.3, height: 0.3 });
      expect(result.crop).toEqual({ top: 0.1, bottom: 0.1, left: 0, right: 0 });
    });
  });

  describe('mapMedia', () => {
    it('dispatches IMAGE to mapImage', () => {
      const result = mapMedia(baseImage);
      expect(result.kind).toBe('IMAGE');
    });

    it('dispatches VIDEO to video mapping', () => {
      const result = mapMedia(baseVideo);
      expect(result.kind).toBe('VIDEO');
    });
  });

  describe('mapOptionalMedia', () => {
    it('returns undefined for null', () => {
      expect(mapOptionalMedia(null)).toBeUndefined();
    });

    it('returns undefined for undefined', () => {
      expect(mapOptionalMedia(undefined)).toBeUndefined();
    });

    it('maps valid record', () => {
      const result = mapOptionalMedia(baseImage);
      expect(result).toBeDefined();
      expect(result!.kind).toBe('IMAGE');
    });
  });
});

describe('Project Mappers', () => {
  const baseCardRecord = {
    id: 'proj-1',
    slug: 'test-project',
    title: 'Test Project',
    industries: [{ slug: 'design', title: 'Design' }],
    capabilities: [{ slug: 'industrial-design', title: 'Industrial Design' }],
    lifecycleStages: ['CON'],
    heroMedia: baseImage,
    publicationState: 'PUBLISHED',
  };

  describe('mapProjectCard', () => {
    it('maps card record to model', () => {
      const result = mapProjectCard(baseCardRecord);
      expect(result.id).toBe('proj-1');
      expect(result.slug).toBe('test-project');
      expect(result.heroMedia.kind).toBe('IMAGE');
    });

    it('maps optional fields', () => {
      const result = mapProjectCard({
        ...baseCardRecord,
        shortLabel: 'TP',
        industries: [{ slug: 'aerospace', title: 'Aerospace' }],
        year: 2026,
        featuredVariant: 'hero',
      });
      expect(result.shortLabel).toBe('TP');
      expect(result.industries[0]!.title).toBe('Aerospace');
      expect(result.year).toBe(2026);
      expect(result.featuredVariant).toBe('hero');
    });
  });

  describe('mapProjectPage', () => {
    const basePageRecord: ProjectPageRecord = {
      id: 'proj-1',
      slug: 'test',
      title: 'Test',
      summary: 'Summary text',
      heroMedia: baseImage,
      industries: ['Aerospace'],
      capabilities: ['Design'],
      lifecycleStages: ['CON', 'EVT'],
      modules: [],
      relatedProjects: [],
    };

    it('maps page record to model', () => {
      const result = mapProjectPage(basePageRecord);
      expect(result.slug).toBe('test');
      expect(result.summary).toBe('Summary text');
      expect(result.industries).toEqual(['Aerospace']);
    });

    it('maps narrative modules', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        modules: [
          {
            kind: 'narrative' as const,
            sectionType: 'overview' as const,
            heading: 'Overview',
            body: 'Body text',
          },
        ],
      });
      expect(result.modules[0]!.kind).toBe('narrative');
    });

    it('maps gallery modules and filters items without media', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        modules: [
          {
            kind: 'gallery' as const,
            items: [
              { media: baseImage, caption: 'Has media' },
              { media: undefined, caption: 'No media' },
            ],
          },
        ],
      });
      const gallery = result.modules[0]!;
      expect(gallery.kind).toBe('gallery');
      if (gallery.kind === 'gallery') {
        expect(gallery.items).toHaveLength(1);
        expect(gallery.items[0]!.caption).toBe('Has media');
      }
    });

    it('maps testimonial modules', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        modules: [
          {
            kind: 'testimonial' as const,
            quote: 'Great work',
            name: 'Client',
            role: 'CEO',
            company: 'Acme',
          },
        ],
      });
      const mod = result.modules[0]!;
      expect(mod.kind).toBe('testimonial');
      if (mod.kind === 'testimonial') {
        expect(mod.quote).toBe('Great work');
        expect(mod.name).toBe('Client');
      }
    });

    it('handles null clientDisplayName as undefined', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        clientDisplayName: null,
        clientLogo: null,
      });
      expect(result.clientDisplayName).toBeUndefined();
      expect(result.clientLogo).toBeUndefined();
    });

    it('maps clientLogo when present', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        clientDisplayName: 'Acme Corp',
        clientDisplayMode: 'NAMED',
        clientRelationshipVerified: true,
        clientLogo: baseImage,
      });
      expect(result.clientDisplayName).toBe('Acme Corp');
      expect(result.clientLogo?.kind).toBe('IMAGE');
    });

    it('maps SEO fields', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        seo: { title: 'SEO Title', description: 'SEO Desc', noIndex: false },
      });
      expect(result.seo?.title).toBe('SEO Title');
      expect(result.seo?.description).toBe('SEO Desc');
    });

    it('maps related projects', () => {
      const result = mapProjectPage({
        ...basePageRecord,
        relatedProjects: [baseCardRecord],
      });
      expect(result.relatedProjects).toHaveLength(1);
      expect(result.relatedProjects[0]!.id).toBe('proj-1');
    });
  });
});

describe('Capability Mappers', () => {
  describe('mapCapabilityCard', () => {
    it('maps card record', () => {
      const result = mapCapabilityCard({
        slug: 'industrial-design',
        title: 'Industrial Design',
        shortDescription: 'Design for manufacturing',
        lifecycleStages: ['CON'],
      });
      expect(result.slug).toBe('industrial-design');
      expect(result.lifecycleStages).toEqual(['CON']);
    });
  });

  describe('mapCapabilityPage', () => {
    it('sets relatedProjects to empty array (resolved at fetch layer)', () => {
      const result = mapCapabilityPage({
        slug: 'test',
        title: 'Test',
        shortDescription: 'Desc',
        intro: 'Intro',
        body: 'Body',
        deliverables: ['CAD'],
        lifecycleStages: ['CON'],
        methods: ['Sketching'],
        relatedCapabilities: [],
        relatedProjectIds: ['proj-1'],
        supportMedia: [],
      });
      expect(result.relatedProjects).toEqual([]);
    });

    it('maps CTA when present', () => {
      const result = mapCapabilityPage({
        slug: 'test',
        title: 'Test',
        shortDescription: 'Desc',
        intro: 'Intro',
        body: 'Body',
        deliverables: [],
        lifecycleStages: [],
        methods: [],
        relatedCapabilities: [],
        relatedProjectIds: [],
        supportMedia: [],
        cta: { label: 'Start', href: '/contact', variant: 'primary' },
      });
      expect(result.cta?.label).toBe('Start');
      expect(result.cta?.variant).toBe('primary');
    });
  });
});

describe('Industry Mapper', () => {
  it('maps industry page', () => {
    const result = mapIndustryPage({
      slug: 'aerospace',
      title: 'Aerospace',
      shortDescription: 'Aerospace engineering',
      intro: 'Intro',
      typicalChallenges: ['Tolerances'],
      developmentConsiderations: ['Certification'],
      relatedCapabilities: [],
    });
    expect(result.slug).toBe('aerospace');
    expect(result.typicalChallenges).toEqual(['Tolerances']);
    expect(result).not.toHaveProperty('featuredProjects');
  });
});

describe('Article Mappers', () => {
  describe('mapArticleCard', () => {
    it('maps card record', () => {
      const result = mapArticleCard({
        slug: 'test-article',
        title: 'Test',
        excerpt: 'Excerpt',
        publicationDate: '2026-09-26',
      });
      expect(result.slug).toBe('test-article');
    });

    it('maps author with avatar', () => {
      const result = mapArticleCard({
        slug: 'test',
        title: 'Test',
        excerpt: 'Excerpt',
        publicationDate: '2026-09-26',
        author: { name: 'Author', avatar: baseImage },
      });
      expect(result.author?.name).toBe('Author');
      expect(result.author?.avatar?.kind).toBe('IMAGE');
    });
  });

  describe('mapArticlePage', () => {
    it('maps page record with body as unknown', () => {
      const result = mapArticlePage({
        slug: 'test',
        title: 'Test',
        excerpt: 'Excerpt',
        publicationDate: '2026-09-26',
        author: { name: 'Author' },
        body: [{ _type: 'block', children: [] }],
        relatedCapabilities: [],
        relatedProjects: [],
      });
      expect(result.body).toBeDefined();
      expect(result.author.name).toBe('Author');
    });
  });
});

describe('Testimonial Mapper', () => {
  it('maps testimonial without approvalState or internalNotes', () => {
    const result = mapTestimonial({
      quote: 'Great work',
      name: 'Client',
      role: 'CEO',
      company: 'Acme',
    });
    expect(result.quote).toBe('Great work');
    expect(result.name).toBe('Client');
    expect(result).not.toHaveProperty('approvalState');
    expect(result).not.toHaveProperty('internalNotes');
  });

  it('maps video when present', () => {
    const result = mapTestimonial({
      quote: 'Great',
      name: 'Client',
      video: { kind: 'VIDEO', url: 'https://cdn.sanity.io/vid.mp4', purpose: 'testimonialVideo' },
    });
    expect(result.video?.kind).toBe('VIDEO');
  });
});

describe('Settings Mappers', () => {
  describe('mapSiteSettings', () => {
    it('maps site settings', () => {
      const result = mapSiteSettings({
        siteName: '123 Design',
        siteDescription: 'Engineering studio',
        socialLinks: [{ platform: 'linkedin', url: 'https://linkedin.com' }],
        approvedClientLogos: [],
      });
      expect(result.siteName).toBe('123 Design');
      expect(result.socialLinks).toHaveLength(1);
    });

    it('maps approved client logos', () => {
      const result = mapSiteSettings({
        siteName: 'Test',
        siteDescription: 'Test',
        socialLinks: [],
        approvedClientLogos: [baseImage],
      });
      expect(result.approvedClientLogos).toHaveLength(1);
      expect(result.approvedClientLogos[0]!.kind).toBe('IMAGE');
    });
  });

  describe('mapLeadFormSettings', () => {
    it('maps lead form settings', () => {
      const result = mapLeadFormSettings({
        productTypes: ['Product Design'],
        developmentStages: ['Concept'],
        needs: ['Industrial Design'],
        timingOptions: ['ASAP'],
        budgetOptions: ['$50k+'],
        budgetEnabled: true,
        uploadEnabled: false,
      });
      expect(result.productTypes).toEqual(['Product Design']);
      expect(result.budgetEnabled).toBe(true);
      expect(result.uploadEnabled).toBe(false);
    });
  });
});
