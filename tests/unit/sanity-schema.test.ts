import { describe, it, expect } from 'vitest';
import { schemaTypes } from '../../sanity/schemaTypes';

const DOCUMENT_NAMES = [
  'project',
  'capability',
  'industry',
  'article',
  'articleCategory',
  'testimonial',
  'person',
  'office',
  'faqItem',
  'redirect',
  'siteSettings',
  'leadFormSettings',
  'seoDefaults',
] as const;

const MODULE_NAMES = [
  'projectNarrativeSection',
  'projectDisciplineSection',
  'projectGallerySection',
  'projectVideoSection',
  'projectTechnicalSection',
  'projectTestimonialSection',
] as const;

const OBJECT_NAMES = [
  'seo',
  'mediaImage',
  'mediaVideo',
  'mediaItem',
  'link',
  'cta',
  'richText',
  'lifecycleStageReference',
  'approvalState',
  'legacyRoute',
  'galleryItem',
  'quote',
  'technicalDetail',
  'projectMeta',
  'socialLink',
  'approvedClientLogo',
  'contentTable',
] as const;

function getFields(schemaName: string): string[] {
  const schema = schemaTypes.find((s) => s.name === schemaName) as
    { fields?: Array<{ name: string }> } | undefined;
  return schema?.fields?.map((f) => f.name) ?? [];
}

describe('Sanity Schema Types', () => {
  it('exports all schema types', () => {
    expect(schemaTypes).toBeDefined();
    expect(Array.isArray(schemaTypes)).toBe(true);
    expect(schemaTypes.length).toBeGreaterThan(0);
  });

  it('contains exactly 13 document schemas', () => {
    const documentTypes = schemaTypes.filter((s) => s.type === 'document');
    expect(documentTypes).toHaveLength(13);

    const documentNames = documentTypes.map((d) => d.name);
    for (const name of DOCUMENT_NAMES) {
      expect(documentNames).toContain(name);
    }
  });

  it('contains exactly 17 object schemas (contentStatus removed)', () => {
    const nonDocumentTypes = schemaTypes.filter(
      (s) => s.type !== 'document' && !(MODULE_NAMES as readonly string[]).includes(s.name),
    );
    expect(nonDocumentTypes).toHaveLength(17);

    const nonDocumentNames = nonDocumentTypes.map((o) => o.name);
    for (const name of OBJECT_NAMES) {
      expect(nonDocumentNames).toContain(name);
    }
    expect(nonDocumentNames).not.toContain('contentStatus');
  });

  it('contains exactly 6 module schemas', () => {
    const allNames = schemaTypes.map((s) => s.name);
    for (const name of MODULE_NAMES) {
      expect(allNames).toContain(name);
    }
  });

  it('has unique schema names', () => {
    const names = schemaTypes.map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('does not contain contentStatus object type', () => {
    const names = schemaTypes.map((s) => s.name);
    expect(names).not.toContain('contentStatus');
  });
});

describe('Document Contract Tests', () => {
  it('project has required governance fields', () => {
    const fields = getFields('project');
    expect(fields).toContain('_internalEntityId');
    expect(fields).toContain('title');
    expect(fields).toContain('slug');
    expect(fields).toContain('publicationState');
    expect(fields).toContain('entityType');
    expect(fields).toContain('modules');
    expect(fields).toContain('contentApprovalState');
    expect(fields).toContain('clientApprovalState');
    expect(fields).toContain('clientDisplayMode');
  });

  it('capability has required fields', () => {
    const fields = getFields('capability');
    expect(fields).toContain('title');
    expect(fields).toContain('slug');
    expect(fields).toContain('shortDescription');
    expect(fields).toContain('body');
    expect(fields).toContain('heroMedia');
    expect(fields).toContain('lifecycleStages');
    expect(fields).toContain('publicationState');
    expect(fields).toContain('seo');
    expect(fields).not.toContain('contentStatus');
  });

  it('industry has required fields', () => {
    const fields = getFields('industry');
    expect(fields).toContain('title');
    expect(fields).toContain('slug');
    expect(fields).toContain('shortDescription');
    expect(fields).toContain('heroMedia');
    expect(fields).toContain('publicationState');
    expect(fields).toContain('seo');
    expect(fields).not.toContain('contentStatus');
  });

  it('article has required fields', () => {
    const fields = getFields('article');
    expect(fields).toContain('title');
    expect(fields).toContain('slug');
    expect(fields).toContain('excerpt');
    expect(fields).toContain('author');
    expect(fields).toContain('publicationDate');
    expect(fields).toContain('heroMedia');
    expect(fields).toContain('body');
    expect(fields).toContain('publicationState');
    expect(fields).toContain('seo');
    expect(fields).not.toContain('contentStatus');
  });

  it('articleCategory has publicationState not contentStatus', () => {
    const fields = getFields('articleCategory');
    expect(fields).toContain('title');
    expect(fields).toContain('slug');
    expect(fields).toContain('publicationState');
    expect(fields).not.toContain('contentStatus');
  });

  it('testimonial has required fields', () => {
    const fields = getFields('testimonial');
    expect(fields).toContain('quote');
    expect(fields).toContain('name');
    expect(fields).toContain('approvalState');
    expect(fields).toContain('featured');
  });

  it('person has required fields without email or phone', () => {
    const fields = getFields('person');
    expect(fields).toContain('name');
    expect(fields).not.toContain('email');
    expect(fields).not.toContain('phone');
  });

  it('office has verificationState field', () => {
    const fields = getFields('office');
    expect(fields).toContain('verificationState');
  });

  it('faqItem has publicationState not contentStatus', () => {
    const fields = getFields('faqItem');
    expect(fields).toContain('question');
    expect(fields).toContain('answer');
    expect(fields).toContain('publicationState');
    expect(fields).not.toContain('contentStatus');
  });

  it('redirect has required fields', () => {
    const fields = getFields('redirect');
    expect(fields).toContain('fromPath');
    expect(fields).toContain('toPath');
    expect(fields).toContain('statusCode');
    expect(fields).toContain('verificationState');
  });

  it('siteSettings is a singleton document', () => {
    const siteSettings = schemaTypes.find(
      (s) => s.name === 'siteSettings' && s.type === 'document',
    );
    expect(siteSettings).toBeDefined();
    const fields = getFields('siteSettings');
    expect(fields).toContain('siteName');
    expect(fields).toContain('siteDescription');
    expect(fields).toContain('socialLinks');
    expect(fields).toContain('contactEmail');
  });

  it('leadFormSettings has editor-controlled fields only', () => {
    const fields = getFields('leadFormSettings');
    expect(fields).toContain('productTypes');
    expect(fields).toContain('confirmationHeading');
    expect(fields).toContain('confirmationBody');
    expect(fields).not.toContain('maxUploadBytes');
    expect(fields).not.toContain('allowedMimeTypes');
    expect(fields).not.toContain('rateLimit');
    expect(fields).not.toContain('analyticsPII');
    expect(fields).not.toContain('honeypot');
  });

  it('seoDefaults has required fields', () => {
    const fields = getFields('seoDefaults');
    expect(fields).toContain('defaultTitle');
    expect(fields).toContain('defaultDescription');
  });
});

describe('Module Contract Tests', () => {
  it('all 6 module types exist', () => {
    const allNames = schemaTypes.map((s) => s.name);
    for (const name of MODULE_NAMES) {
      expect(allNames).toContain(name);
    }
  });

  it('narrative and discipline modules have sectionType field', () => {
    for (const name of ['projectNarrativeSection', 'projectDisciplineSection']) {
      const fields = getFields(name);
      expect(fields).toContain('sectionType');
    }
  });

  it('gallery, video, technical, testimonial modules have characteristic fields', () => {
    expect(getFields('projectGallerySection')).toContain('items');
    expect(getFields('projectVideoSection')).toContain('video');
    expect(getFields('projectTechnicalSection')).toContain('details');
    expect(getFields('projectTestimonialSection')).toContain('testimonial');
  });
});

describe('Studio Structure', () => {
  it('structure file exports canonical grouping', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const structurePath = path.resolve(__dirname, '../../sanity/structure.ts');
    const content = fs.readFileSync(structurePath, 'utf-8');

    expect(content).toContain('WORK');
    expect(content).toContain('EXPERTISE');
    expect(content).toContain('INSIGHTS');
    expect(content).toContain('PROOF & PEOPLE');
    expect(content).toContain('SYSTEM');
    expect(content).toContain('SETTINGS');
  });

  it('structure uses singleton IDs for settings', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const structurePath = path.resolve(__dirname, '../../sanity/structure.ts');
    const content = fs.readFileSync(structurePath, 'utf-8');

    expect(content).toContain('siteSettings');
    expect(content).toContain('leadFormSettings');
    expect(content).toContain('seoDefaults');
  });
});
