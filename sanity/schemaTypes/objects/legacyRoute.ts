import { defineField, defineType } from 'sanity';

export const legacyRoute = defineType({
  name: 'legacyRoute',
  title: 'Legacy Route',
  type: 'object',
  fields: [
    defineField({
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'Legacy URL path starting with /. Must not contain protocol or domain.',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return 'Path is required.';
          if (!value.startsWith('/')) return 'Path must start with /.';
          if (value.includes('http://') || value.includes('https://'))
            return 'Path must not contain a protocol or domain.';
          return true;
        }),
    }),
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      description: 'Origin of this legacy route.',
      options: {
        list: [
          { title: 'Legacy Site', value: 'LEGACY_SITE' },
          { title: 'Migration', value: 'MIGRATION' },
          { title: 'Manual', value: 'MANUAL' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'ACTIVE', value: 'ACTIVE' },
          { title: 'BROKEN', value: 'BROKEN' },
          { title: 'RESOLVED', value: 'RESOLVED' },
          { title: 'DEFERRED', value: 'DEFERRED' },
        ],
      },
      initialValue: 'ACTIVE',
    }),
    defineField({
      name: 'recoveryState',
      title: 'Recovery State',
      type: 'string',
      description: 'Internal: recovery/migration status of this route.',
      options: {
        list: [
          { title: 'PENDING', value: 'PENDING' },
          { title: 'IN_PROGRESS', value: 'IN_PROGRESS' },
          { title: 'RESOLVED', value: 'RESOLVED' },
          { title: 'NOT_APPLICABLE', value: 'NOT_APPLICABLE' },
        ],
      },
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'string',
      description: 'Internal notes about this legacy route.',
    }),
  ],
});
