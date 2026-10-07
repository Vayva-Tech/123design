import { describe, it, expect } from 'vitest';
import type {
  PublicationState,
  SeoFields,
  LinkModel,
  CtaModel,
  ImageMediaModel,
  VideoMediaModel,
  MediaModel,
  LifecycleStage,
  NarrativeSectionType,
  DisciplineSectionType,
  ProjectModuleModel,
  ProjectCardModel,
  ProjectPageModel,
  CapabilityCardModel,
  CapabilityPageModel,
  IndustryPageModel,
  ArticleCardModel,
  ArticlePageModel,
  TestimonialModel,
  NavigationModel,
  SiteSettingsModel,
  LeadFormSettingsModel,
} from '../../src/types/domain';

describe('Domain Model Type Structure', () => {
  describe('PublicationState', () => {
    it('accepts all 6 canonical states', () => {
      const states: PublicationState[] = [
        'DRAFT',
        'CONTENT_REVIEW',
        'CLIENT_REVIEW',
        'READY',
        'PUBLISHED',
        'ARCHIVED',
      ];
      expect(states).toHaveLength(6);
    });
  });

  describe('MediaModel discriminated union', () => {
    it('image media has kind IMAGE', () => {
      const image: ImageMediaModel = {
        kind: 'IMAGE',
        url: 'https://cdn.sanity.io/image.png',
        alt: 'Test image',
        decorative: false,
      };
      expect(image.kind).toBe('IMAGE');
    });

    it('video media has kind VIDEO', () => {
      const video: VideoMediaModel = {
        kind: 'VIDEO',
        url: 'https://cdn.sanity.io/video.mp4',
        purpose: 'projectVideo',
      };
      expect(video.kind).toBe('VIDEO');
    });

    it('MediaModel union discriminates on kind', () => {
      const items: MediaModel[] = [
        { kind: 'IMAGE', url: 'https://example.com/img.png', alt: '', decorative: true },
        { kind: 'VIDEO', url: 'https://example.com/vid.mp4', purpose: 'heroReel' },
      ];
      expect(items[0]!.kind).toBe('IMAGE');
      expect(items[1]!.kind).toBe('VIDEO');
    });
  });

  describe('LifecycleStage', () => {
    it('accepts 5 canonical stages', () => {
      const stages: LifecycleStage[] = ['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION'];
      expect(stages).toHaveLength(5);
    });
  });

  describe('ProjectModuleModel discriminated union', () => {
    it('has 6 module kinds', () => {
      const modules: ProjectModuleModel[] = [
        { kind: 'narrative', sectionType: 'overview' },
        { kind: 'discipline', sectionType: 'industrialDesign' },
        { kind: 'gallery', items: [] },
        { kind: 'video', media: { kind: 'VIDEO', url: 'x', purpose: 'projectVideo' } },
        { kind: 'technical' },
        { kind: 'testimonial', quote: 'Great', name: 'Client' },
      ];
      expect(modules).toHaveLength(6);
      expect(modules.map((m) => m.kind)).toEqual([
        'narrative',
        'discipline',
        'gallery',
        'video',
        'technical',
        'testimonial',
      ]);
    });
  });

  describe('NarrativeSectionType', () => {
    it('has 4 section types', () => {
      const types: NarrativeSectionType[] = ['overview', 'challenge', 'insight', 'result'];
      expect(types).toHaveLength(4);
    });
  });

  describe('DisciplineSectionType', () => {
    it('has 7 discipline types', () => {
      const types: DisciplineSectionType[] = [
        'industrialDesign',
        'mechanicalEngineering',
        'electricalEngineering',
        'prototype',
        'testingValidation',
        'tooling',
        'manufacturing',
      ];
      expect(types).toHaveLength(7);
    });
  });

  describe('ProjectCardModel', () => {
    it('requires id, slug, title, heroMedia, publicationState', () => {
      const card: ProjectCardModel = {
        id: 'proj-1',
        slug: 'test-project',
        title: 'Test Project',
        industries: [{ slug: 'medical', title: 'Medical Devices' }],
        capabilities: [{ slug: 'industrial-design', title: 'Industrial Design' }],
        lifecycleStages: ['CON'],
        heroMedia: { kind: 'IMAGE', url: 'https://example.com/img.png', alt: '', decorative: true },
        publicationState: 'PUBLISHED',
      };
      expect(card.id).toBe('proj-1');
      expect(card.publicationState).toBe('PUBLISHED');
      expect(card.industries[0]!.title).toBe('Medical Devices');
    });
  });

  describe('ProjectPageModel', () => {
    it('includes modules and relatedProjects', () => {
      const page: ProjectPageModel = {
        id: 'proj-1',
        slug: 'test',
        title: 'Test',
        summary: 'Summary',
        heroMedia: { kind: 'IMAGE', url: 'https://example.com/img.png', alt: '', decorative: true },
        industries: ['Aerospace'],
        capabilities: ['Industrial Design'],
        lifecycleStages: ['CON'],
        modules: [],
        relatedProjects: [],
      };
      expect(page.modules).toEqual([]);
      expect(page.relatedProjects).toEqual([]);
    });
  });

  describe('CapabilityCardModel', () => {
    it('has slug, title, shortDescription', () => {
      const card: CapabilityCardModel = {
        slug: 'industrial-design',
        title: 'Industrial Design',
        shortDescription: 'Design for manufacturing',
        lifecycleStages: ['CON', 'EVT'],
      };
      expect(card.slug).toBe('industrial-design');
    });
  });

  describe('CapabilityPageModel', () => {
    it('includes relatedCapabilities and relatedProjects', () => {
      const page: CapabilityPageModel = {
        slug: 'industrial-design',
        title: 'Industrial Design',
        shortDescription: 'Design',
        intro: 'Full intro',
        body: 'Full body',
        deliverables: ['CAD models'],
        lifecycleStages: ['CON'],
        methods: ['Sketching'],
        relatedCapabilities: [],
        relatedProjects: [],
      };
      expect(page.relatedProjects).toEqual([]);
      expect(page.relatedCapabilities).toEqual([]);
    });
  });

  describe('IndustryPageModel', () => {
    it('has no featuredProjects field', () => {
      const page: IndustryPageModel = {
        slug: 'aerospace',
        title: 'Aerospace',
        shortDescription: 'Aerospace engineering',
        intro: 'Full intro',
        typicalChallenges: ['Tolerances'],
        developmentConsiderations: ['Certification'],
        relatedCapabilities: [],
      };
      expect(page).not.toHaveProperty('featuredProjects');
      expect(Object.keys(page)).not.toContain('featuredProjects');
    });
  });

  describe('ArticleCardModel and ArticlePageModel', () => {
    it('article card has slug, title, excerpt, publicationDate', () => {
      const card: ArticleCardModel = {
        slug: 'test-article',
        title: 'Test Article',
        excerpt: 'An excerpt',
        publicationDate: '2026-09-26',
      };
      expect(card.slug).toBe('test-article');
    });

    it('article page body is unknown type (for future Portable Text)', () => {
      const page: ArticlePageModel = {
        slug: 'test',
        title: 'Test',
        excerpt: 'Excerpt',
        publicationDate: '2026-09-26',
        author: { name: 'Author' },
        body: [{ _type: 'block', children: [] }],
        relatedCapabilities: [],
        relatedProjects: [],
      };
      expect(page.body).toBeDefined();
    });
  });

  describe('TestimonialModel', () => {
    it('has no approvalState or internalNotes', () => {
      const testimonial: TestimonialModel = {
        quote: 'Great work',
        name: 'Client Name',
      };
      expect(testimonial).not.toHaveProperty('approvalState');
      expect(testimonial).not.toHaveProperty('internalNotes');
    });
  });

  describe('NavigationModel', () => {
    it('is application-controlled (not from Sanity)', () => {
      const nav: NavigationModel = {
        primary: [{ label: 'Work', href: '/work' }],
        footer: [{ label: 'Contact', href: '/contact' }],
      };
      expect(nav.primary).toHaveLength(1);
      expect(nav.footer).toHaveLength(1);
    });
  });

  describe('SiteSettingsModel', () => {
    it('includes approvedClientLogos and socialLinks', () => {
      const settings: SiteSettingsModel = {
        siteName: '123 Design',
        siteDescription: 'Engineering design studio',
        socialLinks: [{ platform: 'linkedin', url: 'https://linkedin.com' }],
        approvedClientLogos: [],
      };
      expect(settings.siteName).toBe('123 Design');
      expect(settings.approvedClientLogos).toEqual([]);
    });
  });

  describe('LeadFormSettingsModel', () => {
    it('includes form configuration arrays', () => {
      const settings: LeadFormSettingsModel = {
        productTypes: ['Product Design'],
        developmentStages: ['Concept'],
        needs: ['Industrial Design'],
        timingOptions: ['ASAP'],
        budgetOptions: ['$50k-$100k'],
        budgetEnabled: true,
        uploadEnabled: false,
      };
      expect(settings.productTypes).toHaveLength(1);
      expect(settings.budgetEnabled).toBe(true);
    });
  });

  describe('SeoFields', () => {
    it('all fields optional', () => {
      const seo: SeoFields = {};
      expect(seo).toBeDefined();
    });
  });

  describe('CtaModel', () => {
    it('has label, href, variant', () => {
      const cta: CtaModel = { label: 'Contact', href: '/contact', variant: 'primary' };
      expect(cta.variant).toBe('primary');
    });
  });

  describe('LinkModel', () => {
    it('discriminates INTERNAL vs EXTERNAL', () => {
      const internal: LinkModel = { type: 'INTERNAL', label: 'About', href: '/about' };
      const external: LinkModel = { type: 'EXTERNAL', label: 'GitHub', href: 'https://github.com' };
      expect(internal.type).toBe('INTERNAL');
      expect(external.type).toBe('EXTERNAL');
    });
  });
});
