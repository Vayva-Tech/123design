import { defineField, defineType } from 'sanity';
import { CONTENT_STATUSES } from '../../lib/constants';

export const industry = defineType({
  name: 'industry',
  title: 'Industry',
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
      validation: (Rule) => Rule.required().max(120),
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(200),
      description: 'Brief description for cards and metadata.',
      group: 'content',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      description: 'Longer introductory text for the industry page.',
      group: 'content',
    }),
    defineField({
      name: 'typicalChallenges',
      title: 'Typical Challenges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Common challenges faced in this industry.',
      group: 'content',
    }),
    defineField({
      name: 'developmentConsiderations',
      title: 'Development Considerations',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key development considerations specific to this industry.',
      group: 'content',
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'mediaItem',
      group: 'content',
    }),
    defineField({
      name: 'relatedCapabilities',
      title: 'Related Capabilities',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'capability' }] }],
      description:
        'Public project relationships are queried from project.industry references. Avoid bidirectional editorial drift.',
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
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
