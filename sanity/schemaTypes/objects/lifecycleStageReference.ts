import { defineField, defineType } from 'sanity';
import { LIFECYCLE_STAGES } from '../../lib/constants';

export const lifecycleStageReference = defineType({
  name: 'lifecycleStageReference',
  title: 'Lifecycle Stage',
  type: 'object',
  fields: [
    defineField({
      name: 'stage',
      title: 'Stage',
      type: 'string',
      options: {
        list: LIFECYCLE_STAGES.map((s) => ({ title: s, value: s })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'evidenceState',
      title: 'Evidence State',
      type: 'string',
      description:
        'Internal: what evidence supports this stage claim? Do not infer from media or filenames.',
      options: {
        list: [
          { title: 'VERIFIED', value: 'VERIFIED' },
          { title: 'OWNER_VERIFY', value: 'OWNER_VERIFY' },
          { title: 'CLIENT_APPROVAL', value: 'CLIENT_APPROVAL' },
          { title: 'RECOVERY_PENDING', value: 'RECOVERY_PENDING' },
          { title: 'UNKNOWN', value: 'UNKNOWN' },
        ],
      },
      initialValue: 'UNKNOWN',
    }),
    defineField({
      name: 'sourceNote',
      title: 'Source Note',
      type: 'string',
      description: 'Internal: evidence source or verification note.',
    }),
  ],
});
