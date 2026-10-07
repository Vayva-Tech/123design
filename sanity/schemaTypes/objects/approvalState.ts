import { defineField, defineType } from 'sanity';
import { APPROVAL_STATES } from '../../lib/constants';

export const approvalState = defineType({
  name: 'approvalState',
  title: 'Approval State',
  type: 'object',
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: APPROVAL_STATES.map((s) => ({ title: s, value: s })),
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'NOT_REQUIRED',
    }),
    defineField({
      name: 'note',
      title: 'Internal Note',
      type: 'string',
      description: 'Internal governance note. Not displayed publicly.',
    }),
    defineField({
      name: 'lastVerifiedDate',
      title: 'Last Verified Date',
      type: 'date',
      description: 'Internal: when this approval was last verified.',
    }),
    defineField({
      name: 'verifiedByName',
      title: 'Verified By',
      type: 'string',
      description: 'Internal: who verified this approval.',
    }),
  ],
});
