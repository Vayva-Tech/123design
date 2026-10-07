import { defineField, defineType } from 'sanity';
import { CONTENT_STATUSES } from '../../lib/constants';

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'governance', title: 'Governance' },
  ],
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'richText',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Grouping label for FAQ filtering.',
      group: 'content',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Sort order within category.',
      group: 'content',
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
      name: 'approvalRequirement',
      title: 'Approval Requirement',
      type: 'approvalState',
      group: 'governance',
    }),
    defineField({
      name: 'internalVerificationNotes',
      title: 'Internal Verification Notes',
      type: 'text',
      rows: 2,
      description:
        'These FAQ answers require verification for claims about price, minimum budget, timeline, free consultation, supplier geography, certifications, and NDA policy. Do not seed old FAQ claims.',
      group: 'governance',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled FAQ',
        subtitle: subtitle || '',
      };
    },
  },
});
