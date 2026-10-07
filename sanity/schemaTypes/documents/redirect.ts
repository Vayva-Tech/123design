import { defineField, defineType } from 'sanity';
import { REDIRECT_STATUS_CODES, VERIFICATION_STATES } from '../../lib/constants';

export const redirect = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  groups: [
    { name: 'routing', title: 'Routing', default: true },
    { name: 'governance', title: 'Governance' },
  ],
  fields: [
    defineField({
      name: 'fromPath',
      title: 'From Path',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value: string | undefined) => {
          if (!value) return 'Required';
          if (!value.startsWith('/')) return 'Must start with /';
          if (/^https?:\/\//.test(value)) return 'Must not contain a protocol or domain';
          return true;
        }),
      description: 'Source path. Must start with / and not contain a protocol or domain.',
      group: 'routing',
    }),
    defineField({
      name: 'toPath',
      title: 'To Path',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value: string | undefined) => {
          if (!value) return 'Required';
          if (!value.startsWith('/')) return 'Must start with /';
          if (/^https?:\/\//.test(value)) return 'Must be an internal path';
          return true;
        }),
      description: 'Destination path. Must be a valid internal path.',
      group: 'routing',
    }),
    defineField({
      name: 'statusCode',
      title: 'Status Code',
      type: 'number',
      initialValue: 301,
      validation: (Rule) => Rule.required(),
      options: {
        list: REDIRECT_STATUS_CODES.map((value) => ({
          value,
          title: `${value} — ${value === 301 ? 'Moved Permanently' : 'Permanent Redirect'}`,
        })),
        layout: 'dropdown',
      },
      group: 'routing',
    }),
    defineField({
      name: 'reason',
      title: 'Reason',
      type: 'string',
      description: 'Why this redirect exists.',
      group: 'routing',
    }),
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      description: 'Origin of this redirect (e.g. legacy migration, restructure).',
      group: 'routing',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      group: 'governance',
    }),
    defineField({
      name: 'verificationState',
      title: 'Verification State',
      type: 'string',
      initialValue: 'PENDING',
      options: {
        list: VERIFICATION_STATES.map((value) => ({
          value,
          title: value.charAt(0) + value.slice(1).toLowerCase(),
        })),
        layout: 'dropdown',
      },
      group: 'governance',
    }),
  ],
  preview: {
    select: {
      fromPath: 'fromPath',
      toPath: 'toPath',
    },
    prepare({ fromPath, toPath }) {
      return {
        title: `${fromPath} → ${toPath}`,
      };
    },
  },
});
