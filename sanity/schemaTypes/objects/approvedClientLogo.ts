import { defineField, defineType } from 'sanity';
import { APPROVAL_STATES } from '../../lib/constants';

export const approvedClientLogo = defineType({
  name: 'approvedClientLogo',
  title: 'Approved Client Logo',
  type: 'object',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'approvalState',
      title: 'Approval State',
      type: 'string',
      description: 'Only APPROVED entries will be displayed publicly.',
      options: {
        list: APPROVAL_STATES.map((s) => ({ title: s, value: s })),
      },
      initialValue: 'REQUIRED',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
