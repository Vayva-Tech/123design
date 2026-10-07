import { defineField, defineType } from 'sanity';
import {
  PROJECT_PUBLICATION_STATES,
  PROJECT_ENTITY_TYPES,
  CLIENT_DISPLAY_MODES,
} from '../../lib/constants';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'client', title: 'Client' },
    { name: 'modules', title: 'Modules' },
    { name: 'associations', title: 'Associations' },
    { name: 'governance', title: 'Governance' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: '_internalEntityId',
      title: 'Internal Entity ID',
      type: 'string',
      description:
        'Stable internal project/entity identifier. Do not display publicly. Do not infer from slug.',
      validation: (Rule) => Rule.required(),
      readOnly: true,
      group: 'governance',
    }),
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
      description: 'Published slug-change redirect enforcement comes in a later build.',
      group: 'content',
    }),
    defineField({
      name: 'publicationState',
      title: 'Publication State',
      type: 'string',
      initialValue: 'DRAFT',
      validation: (Rule) => Rule.required(),
      options: {
        list: PROJECT_PUBLICATION_STATES.map((value) => ({
          value,
          title: value
            .replace(/_/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        })),
        layout: 'dropdown',
      },
      group: 'governance',
    }),
    defineField({
      name: 'entityType',
      title: 'Entity Type',
      type: 'string',
      initialValue: 'INDIVIDUAL_PROJECT',
      validation: (Rule) => Rule.required(),
      options: {
        list: PROJECT_ENTITY_TYPES.map((value) => ({
          value,
          title: value
            .replace(/_/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        })),
        layout: 'dropdown',
      },
      group: 'governance',
    }),
    defineField({
      name: 'contentApprovalState',
      title: 'Content Approval',
      type: 'approvalState',
      group: 'governance',
    }),
    defineField({
      name: 'clientApprovalState',
      title: 'Client Approval',
      type: 'approvalState',
      group: 'governance',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Editorial eligibility only. Does not guarantee homepage rendering.',
      group: 'governance',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Optional editorial sort weight.',
      group: 'governance',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(280),
      description: 'Plain text. Suitable for cards, metadata, and SEO fallback.',
      group: 'content',
    }),
    defineField({
      name: 'heroMedia',
      title: 'Hero Media',
      type: 'mediaItem',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'content',
    }),
    defineField({
      name: 'lifecycleStages',
      title: 'Lifecycle Stages',
      type: 'array',
      of: [{ type: 'lifecycleStageReference' }],
      validation: (Rule) =>
        Rule.unique().error('Each lifecycle stage may appear only once per project.'),
      description:
        'Do not infer stages from media, filenames, services, or assumptions. Adding a stage asserts verified evidence.',
      group: 'content',
    }),
    defineField({
      name: 'clientDisplayMode',
      title: 'Client Display Mode',
      type: 'string',
      initialValue: 'NONE',
      validation: (Rule) => Rule.required(),
      options: {
        list: CLIENT_DISPLAY_MODES.map((value) => ({
          value,
          title: value.charAt(0) + value.slice(1).toLowerCase(),
        })),
        layout: 'dropdown',
      },
      group: 'client',
    }),
    defineField({
      name: 'clientDisplayName',
      title: 'Client Display Name',
      type: 'string',
      description: 'Required when Client Display Mode is NAMED.',
      group: 'client',
      hidden: ({ parent }) => parent?.clientDisplayMode !== 'NAMED',
    }),
    defineField({
      name: 'clientRelationshipVerified',
      title: 'Client Relationship Verified',
      type: 'boolean',
      initialValue: false,
      description: 'Required when Client Display Mode is NAMED.',
      group: 'client',
      hidden: ({ parent }) => parent?.clientDisplayMode !== 'NAMED',
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'client',
      hidden: ({ parent }) => parent?.clientDisplayMode !== 'NAMED',
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        { type: 'projectNarrativeSection' },
        { type: 'projectDisciplineSection' },
        { type: 'projectGallerySection' },
        { type: 'projectVideoSection' },
        { type: 'projectTechnicalSection' },
        { type: 'projectTestimonialSection' },
      ],
      description:
        'Controlled content sequence. Editors may reorder but not create arbitrary components.',
      group: 'modules',
    }),
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'industry' }] }],
      group: 'associations',
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities',
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
      name: 'legacyRoutes',
      title: 'Legacy Routes',
      type: 'array',
      of: [{ type: 'legacyRoute' }],
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
