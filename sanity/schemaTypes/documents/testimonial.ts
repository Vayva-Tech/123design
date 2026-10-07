import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'governance', title: 'Governance' },
  ],
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }],
      group: 'content',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'mediaVideo',
      group: 'content',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      group: 'governance',
    }),
    defineField({
      name: 'approvalState',
      title: 'Approval State',
      type: 'approvalState',
      validation: (Rule) => Rule.required(),
      group: 'governance',
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      rows: 2,
      description: 'Internal only. Never displayed publicly.',
      group: 'governance',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Testimonial',
        subtitle: [title, subtitle].filter(Boolean).join(' — '),
      };
    },
  },
});
