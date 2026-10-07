import { defineField, defineType } from 'sanity';
import { DISCIPLINE_SECTION_TYPES } from '../../lib/constants';

export const projectDisciplineSection = defineType({
  name: 'projectDisciplineSection',
  title: 'Discipline Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: DISCIPLINE_SECTION_TYPES.map((value) => ({
          value,
          title: value
            .replace(/_/g, ' ')
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase()),
        })),
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'richText',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'mediaItem',
    }),
    defineField({
      name: 'lifecycleStage',
      title: 'Lifecycle Stage',
      type: 'lifecycleStageReference',
      description:
        'Optional. Assert the lifecycle stage this discipline work relates to. Do not infer stages from media, filenames, services, or assumptions.',
    }),
    defineField({
      name: 'technicalCallout',
      title: 'Technical Callout',
      type: 'technicalDetail',
      description: 'Optional highlighted technical specification.',
    }),
  ],
  preview: {
    select: {
      sectionType: 'sectionType',
      heading: 'heading',
    },
    prepare({ sectionType, heading }) {
      const label = sectionType
        ?.replace(/_/g, ' ')
        .toLowerCase()
        .replace(/\b\w/g, (c: string) => c.toUpperCase());
      return {
        title: heading || label || 'Discipline Section',
      };
    },
  },
});
