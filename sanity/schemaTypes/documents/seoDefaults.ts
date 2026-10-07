import { defineField, defineType } from 'sanity';

export const seoDefaults = defineType({
  name: 'seoDefaults',
  title: 'SEO Defaults',
  type: 'document',
  fields: [
    defineField({
      name: 'titleSuffix',
      title: 'Title Suffix',
      type: 'string',
      description: 'Appended to page titles (e.g. " | 123.design").',
    }),
    defineField({
      name: 'defaultTitle',
      title: 'Default Title',
      type: 'string',
      description: 'Fallback title when a page does not specify its own.',
    }),
    defineField({
      name: 'defaultDescription',
      title: 'Default Description',
      type: 'text',
      rows: 3,
      description: 'Fallback meta description when a page does not specify its own.',
    }),
    defineField({
      name: 'defaultOGImage',
      title: 'Default OG Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Fallback Open Graph image.',
    }),
    defineField({
      name: 'organizationName',
      title: 'Organization Name',
      type: 'string',
    }),
    defineField({
      name: 'legalName',
      title: 'Legal Name',
      type: 'string',
      description: 'Optional. Do not seed disputed legal/business values.',
    }),
    defineField({
      name: 'canonicalSiteURL',
      title: 'Canonical Site URL',
      type: 'url',
      description: 'The canonical base URL for the site (e.g. https://123.design).',
    }),
    defineField({
      name: 'socialProfiles',
      title: 'Social Profiles',
      type: 'array',
      of: [{ type: 'socialLink' }],
      description: 'Organization social profile URLs for structured data.',
    }),
    defineField({
      name: 'defaultRobots',
      title: 'Default Robots Behavior',
      type: 'string',
      description: 'Default robots meta directive (e.g. "index, follow").',
    }),
  ],
  preview: {
    select: {
      title: 'organizationName',
    },
    prepare({ title }) {
      return { title: title || 'SEO Defaults' };
    },
  },
});
