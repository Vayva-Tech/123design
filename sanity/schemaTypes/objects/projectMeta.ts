import { defineField, defineType } from 'sanity';

export const projectMeta = defineType({
  name: 'projectMeta',
  title: 'Project Meta',
  type: 'object',
  description:
    'Display metadata for project context. Source-of-truth fields remain on the project document itself.',
  fields: [
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Display-only location context. Not a structured address.',
    }),
  ],
});
