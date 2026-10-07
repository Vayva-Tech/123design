import { describe, it, expect } from 'vitest';
import {
  cacheTags,
  WEBHOOK_TYPE_WHITELIST,
  getRevalidationTags,
  isValidSlug,
} from '../../src/lib/sanity/cache-tags';

describe('Cache Tags', () => {
  describe('Static tags', () => {
    it('cacheTags.projects is "projects"', () => {
      expect(cacheTags.projects).toBe('projects');
    });

    it('cacheTags.capabilities is "capabilities"', () => {
      expect(cacheTags.capabilities).toBe('capabilities');
    });

    it('cacheTags.industries is "industries"', () => {
      expect(cacheTags.industries).toBe('industries');
    });

    it('cacheTags.articles is "articles"', () => {
      expect(cacheTags.articles).toBe('articles');
    });

    it('cacheTags.testimonials is "testimonials"', () => {
      expect(cacheTags.testimonials).toBe('testimonials');
    });

    it('cacheTags.siteSettings is "site-settings"', () => {
      expect(cacheTags.siteSettings).toBe('site-settings');
    });

    it('cacheTags.leadFormSettings is "lead-form-settings"', () => {
      expect(cacheTags.leadFormSettings).toBe('lead-form-settings');
    });

    it('cacheTags.seoDefaults is "seo-defaults"', () => {
      expect(cacheTags.seoDefaults).toBe('seo-defaults');
    });

    it('cacheTags.faq is "faq"', () => {
      expect(cacheTags.faq).toBe('faq');
    });

    it('cacheTags.offices is "offices"', () => {
      expect(cacheTags.offices).toBe('offices');
    });

    it('cacheTags.people is "people"', () => {
      expect(cacheTags.people).toBe('people');
    });

    it('cacheTags.redirects is "redirects"', () => {
      expect(cacheTags.redirects).toBe('redirects');
    });

    it('cacheTags.articleCategories is "article-categories"', () => {
      expect(cacheTags.articleCategories).toBe('article-categories');
    });
  });

  describe('Dynamic tag generators', () => {
    it('cacheTags.project(slug) formats correctly', () => {
      expect(cacheTags.project('my-project')).toBe('project:my-project');
    });

    it('cacheTags.capability(slug) formats correctly', () => {
      expect(cacheTags.capability('industrial-design')).toBe('capability:industrial-design');
    });

    it('cacheTags.industry(slug) formats correctly', () => {
      expect(cacheTags.industry('aerospace')).toBe('industry:aerospace');
    });

    it('cacheTags.article(slug) formats correctly', () => {
      expect(cacheTags.article('my-article')).toBe('article:my-article');
    });

    it('cacheTags.testimonial(id) formats correctly', () => {
      expect(cacheTags.testimonial('client-id')).toBe('testimonial:client-id');
    });

    it('returns undefined for invalid slug', () => {
      expect(cacheTags.project('')).toBeUndefined();
      expect(cacheTags.project('INVALID')).toBeUndefined();
      expect(cacheTags.project('has space')).toBeUndefined();
      expect(cacheTags.project('has/slash')).toBeUndefined();
    });

    it('returns undefined for testimonial with empty id', () => {
      expect(cacheTags.testimonial('')).toBeUndefined();
    });
  });

  describe('isValidSlug', () => {
    it('accepts valid kebab-case slugs', () => {
      expect(isValidSlug('my-project')).toBe(true);
      expect(isValidSlug('a')).toBe(true);
      expect(isValidSlug('test-123')).toBe(true);
    });

    it('rejects empty strings', () => {
      expect(isValidSlug('')).toBe(false);
    });

    it('rejects uppercase', () => {
      expect(isValidSlug('MyProject')).toBe(false);
    });

    it('rejects spaces', () => {
      expect(isValidSlug('my project')).toBe(false);
    });

    it('rejects slashes', () => {
      expect(isValidSlug('my/project')).toBe(false);
    });

    it('rejects slugs over 200 characters', () => {
      const longSlug = 'a'.repeat(201);
      expect(isValidSlug(longSlug)).toBe(false);
    });

    it('accepts slugs up to 200 characters', () => {
      const maxSlug = 'a'.repeat(200);
      expect(isValidSlug(maxSlug)).toBe(true);
    });
  });

  describe('WEBHOOK_TYPE_WHITELIST', () => {
    it('contains all expected document types', () => {
      const expectedTypes = [
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
      ];
      for (const type of expectedTypes) {
        expect(WEBHOOK_TYPE_WHITELIST.has(type)).toBe(true);
      }
    });

    it('does not contain unknown types', () => {
      expect(WEBHOOK_TYPE_WHITELIST.has('unknownType')).toBe(false);
    });
  });

  describe('getRevalidationTags', () => {
    it('derives project tags with collection and related tags', () => {
      const tags = getRevalidationTags({ _type: 'project' });
      expect(tags).toContain('projects');
      expect(tags).toContain('capabilities');
      expect(tags).toContain('industries');
    });

    it('derives project tags with dynamic slug tag', () => {
      const tags = getRevalidationTags({ _type: 'project', slug: 'my-project' });
      expect(tags).toContain('projects');
      expect(tags).toContain('project:my-project');
    });

    it('derives capability tags with collection and projects', () => {
      const tags = getRevalidationTags({ _type: 'capability' });
      expect(tags).toContain('capabilities');
      expect(tags).toContain('projects');
    });

    it('derives industry tags with collection and projects', () => {
      const tags = getRevalidationTags({ _type: 'industry' });
      expect(tags).toContain('industries');
      expect(tags).toContain('projects');
    });

    it('derives article tags with collection', () => {
      const tags = getRevalidationTags({ _type: 'article' });
      expect(tags).toContain('articles');
    });

    it('derives articleCategory tags with articles and articleCategories', () => {
      const tags = getRevalidationTags({ _type: 'articleCategory' });
      expect(tags).toContain('articles');
      expect(tags).toContain('article-categories');
    });

    it('derives testimonial tags with testimonials and projects', () => {
      const tags = getRevalidationTags({ _type: 'testimonial' });
      expect(tags).toContain('testimonials');
      expect(tags).toContain('projects');
    });

    it('derives siteSettings tags', () => {
      const tags = getRevalidationTags({ _type: 'siteSettings' });
      expect(tags).toContain('site-settings');
    });

    it('derives leadFormSettings tags', () => {
      const tags = getRevalidationTags({ _type: 'leadFormSettings' });
      expect(tags).toContain('lead-form-settings');
    });

    it('derives seoDefaults tags', () => {
      const tags = getRevalidationTags({ _type: 'seoDefaults' });
      expect(tags).toContain('seo-defaults');
    });

    it('returns empty array for unknown type', () => {
      const tags = getRevalidationTags({ _type: 'unknownType' });
      expect(tags).toEqual([]);
    });

    it('deduplicates tags', () => {
      const tags = getRevalidationTags({ _type: 'project', slug: 'test' });
      const uniqueTags = [...new Set(tags)];
      expect(tags.length).toBe(uniqueTags.length);
    });
  });
});
