import { defineField, defineType } from 'sanity';
import { CONTENT_STATUSES, LIFECYCLE_STAGES } from '../../lib/constants';

export const capability = defineType({
  name: 'capability',
  title: 'Capability',
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
      description: 'Longer introductory text for the capability page.',
      group: 'content',
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of deliverable items this capability produces.',
      group: 'content',
    }),
    defineField({
      name: 'lifecycleStages',
      title: 'Lifecycle Stages',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: LIFECYCLE_STAGES.map((value) => ({ value, title: value })),
            layout: 'dropdown',
          },
        },
      ],
      validation: (Rule) => Rule.unique().error('Each stage may appear only once.'),
      description:
        'Stages this capability applies to. Does not imply any project lifecycle completion.',
      group: 'content',
    }),
    defineField({
      name: 'methods',
      title: 'Methods',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Methods and techniques used in this capability.',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'richText',
      group: 'content',
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'mediaItem',
      group: 'content',
    }),
    defineField({
      name: 'supportMedia',
      title: 'Support Media',
      type: 'array',
      of: [{ type: 'mediaItem' }],
      group: 'content',
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'cta',
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
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
