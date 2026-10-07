import { defineField, defineType } from 'sanity';
import { NARRATIVE_SECTION_TYPES } from '../../lib/constants';

export const projectNarrativeSection = defineType({
  name: 'projectNarrativeSection',
  title: 'Narrative Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: NARRATIVE_SECTION_TYPES.map((value) => ({
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
      description: 'Optional. Leave blank to use the default heading for this section type.',
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
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the media.',
    }),
    defineField({
      name: 'lifecycleStage',
      title: 'Lifecycle Stage',
      type: 'lifecycleStageReference',
      description:
        'Optional. Assert the lifecycle stage this narrative section relates to. Do not infer stages from media, filenames, services, or assumptions.',
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
        title: heading || label || 'Narrative Section',
      };
    },
  },
});
