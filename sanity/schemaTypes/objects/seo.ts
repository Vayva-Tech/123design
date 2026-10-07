import { defineField, defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Override the default page title for search engines.',
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'Override the default meta description.',
      rows: 3,
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'string',
      description: 'Override the canonical URL if this content is duplicated elsewhere.',
    }),
    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      description: 'Override the Open Graph title for social sharing.',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'text',
      description: 'Override the Open Graph description for social sharing.',
      rows: 2,
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      description: 'Override the default social share image.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page.',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Prevent search engines from following links on this page.',
      initialValue: false,
    }),
  ],
});
