import { defineField, defineType } from 'sanity';
import { CONTENT_STATUSES } from '../../lib/constants';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'associations', title: 'Associations' },
    { name: 'governance', title: 'Governance' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(160),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
      description: 'Short summary for article cards and metadata.',
      group: 'content',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'updatedDate',
      title: 'Updated Date',
      type: 'date',
      group: 'content',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'articleCategory' }],
      group: 'content',
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'mediaItem',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'relatedCapabilities',
      title: 'Related Capabilities',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'capability' }] }],
      group: 'associations',
    }),
    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      group: 'associations',
    }),
    defineField({
      name: 'publicationState',
      title: 'Publication State',
      type: 'string',
      initialValue: 'DRAFT',
      options: {
        list: CONTENT_STATUSES.map((s) => ({ title: s, value: s })),
        layout: 'dropdown',
      },
      group: 'governance',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'heroMedia.image',
    },
  },
});
