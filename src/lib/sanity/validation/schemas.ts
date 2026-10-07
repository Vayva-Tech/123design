import { z } from 'zod';

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_SLUG_LENGTH = 200;

export const canonicalSlugSchema = z
  .string()
  .min(1)
  .max(MAX_SLUG_LENGTH)
  .regex(SLUG_PATTERN, 'Slug must be lowercase kebab-case with no slashes or spaces');

const imageMediaSchema = z.object({
  kind: z.literal('IMAGE'),
  url: z.string(),
  alt: z.string().default(''),
  decorative: z.boolean().default(false),
  width: z.number().optional(),
  height: z.number().optional(),
  aspectRatio: z.number().optional(),
  caption: z.string().optional(),
  hotspot: z
    .object({ x: z.number(), y: z.number(), width: z.number(), height: z.number() })
    .optional(),
  crop: z
    .object({ top: z.number(), bottom: z.number(), left: z.number(), right: z.number() })
    .optional(),
});

const videoMediaSchema = z.object({
  kind: z.literal('VIDEO'),
  url: z.string(),
  poster: z.lazy(() => imageMediaSchema.optional()),
  width: z.number().optional(),
  height: z.number().optional(),
  duration: z.number().optional(),
  purpose: z.enum(['heroReel', 'hoverPreview', 'projectVideo', 'processVideo', 'testimonialVideo']),
  caption: z.string().optional(),
  transcript: z.string().optional(),
});

const mediaSchema = z.discriminatedUnion('kind', [imageMediaSchema, videoMediaSchema]);

const seoSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    shareImage: imageMediaSchema.optional(),
    noIndex: z.boolean().optional(),
  })
  .optional();

const taxonomyRefSchema = z.object({
  slug: z.string(),
  title: z.string(),
});

export const projectCardRecordSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  shortLabel: z.string().optional(),
  industries: z.array(taxonomyRefSchema).default([]),
  capabilities: z.array(taxonomyRefSchema).default([]),
  lifecycleStages: z.array(z.string()).default([]),
  heroMedia: mediaSchema,
  previewVideo: mediaSchema.optional(),
  year: z.number().optional(),
  publicationState: z.string(),
  featuredVariant: z.string().optional(),
});

const narrativeModuleSchema = z.object({
  kind: z.literal('narrative'),
  sectionType: z.enum(['overview', 'challenge', 'insight', 'result']),
  heading: z.string().optional(),
  body: z.string().optional(),
  media: mediaSchema.optional(),
  caption: z.string().optional(),
  lifecycleStage: z.string().optional(),
});

const disciplineModuleSchema = z.object({
  kind: z.literal('discipline'),
  sectionType: z.enum([
    'industrialDesign',
    'mechanicalEngineering',
    'electricalEngineering',
    'prototype',
    'testingValidation',
    'tooling',
    'manufacturing',
  ]),
  heading: z.string().optional(),
  body: z.string().optional(),
  media: mediaSchema.optional(),
  caption: z.string().optional(),
});

const galleryModuleSchema = z.object({
  kind: z.literal('gallery'),
  items: z
    .array(
      z.object({
        media: mediaSchema.optional(),
        caption: z.string().optional(),
      }),
    )
    .default([]),
  caption: z.string().optional(),
});

const videoModuleSchema = z.object({
  kind: z.literal('video'),
  media: mediaSchema,
  caption: z.string().optional(),
});

const technicalModuleSchema = z.object({
  kind: z.literal('technical'),
  heading: z.string().optional(),
  details: z.string().optional(),
  media: mediaSchema.optional(),
});

const testimonialModuleSchema = z.object({
  kind: z.literal('testimonial'),
  quote: z.string(),
  name: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
});

const projectModuleSchema = z.discriminatedUnion('kind', [
  narrativeModuleSchema,
  disciplineModuleSchema,
  galleryModuleSchema,
  videoModuleSchema,
  technicalModuleSchema,
  testimonialModuleSchema,
]);

export const projectPageRecordSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  heroMedia: mediaSchema,
  industries: z.array(z.string()).default([]),
  capabilities: z.array(z.string()).default([]),
  lifecycleStages: z.array(z.string()).default([]),
  year: z.number().optional(),
  clientDisplayName: z.string().nullable().optional(),
  clientDisplayMode: z.enum(['NAMED', 'ANONYMOUS', 'NONE']).optional(),
  clientRelationshipVerified: z.boolean().optional(),
  clientLogo: imageMediaSchema.nullable().optional(),
  modules: z.array(projectModuleSchema).default([]),
  relatedProjects: z.array(projectCardRecordSchema).default([]),
  seo: seoSchema,
});

export const capabilityCardRecordSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  lifecycleStages: z.array(z.string()).default([]),
  heroMedia: mediaSchema.optional(),
});

export const capabilityPageRecordSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  intro: z.string(),
  deliverables: z.array(z.string()).default([]),
  lifecycleStages: z.array(z.string()).default([]),
  methods: z.array(z.string()).default([]),
  body: z.string(),
  relatedCapabilities: z.array(capabilityCardRecordSchema).default([]),
  relatedProjectIds: z.array(z.string()).default([]),
  heroMedia: mediaSchema.optional(),
  supportMedia: z.array(mediaSchema).default([]),
  cta: z
    .object({
      label: z.string(),
      href: z.string(),
      variant: z.enum(['primary', 'secondary', 'text', 'dark']),
    })
    .optional(),
  seo: seoSchema,
});

export const industryPageRecordSchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  intro: z.string(),
  typicalChallenges: z.array(z.string()).default([]),
  developmentConsiderations: z.array(z.string()).default([]),
  relatedCapabilities: z.array(capabilityCardRecordSchema).default([]),
  heroMedia: mediaSchema.optional(),
  seo: seoSchema,
});

export const portableTextBlockSchema = z.object({
  _type: z.string(),
  _key: z.string().optional(),
  style: z.string().optional(),
  listItem: z.string().optional(),
  level: z.number().optional(),
  children: z
    .array(
      z.object({
        _type: z.string(),
        _key: z.string().optional(),
        text: z.string().optional(),
        marks: z.array(z.string()).optional(),
      }),
    )
    .default([]),
  markDefs: z
    .array(
      z.object({
        _type: z.string(),
        _key: z.string(),
        href: z.string().optional(),
        newWindow: z.boolean().optional(),
      }),
    )
    .optional(),
  asset: z
    .object({
      _ref: z.string().optional(),
      url: z.string().optional(),
    })
    .optional(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

const authorSchema = z.object({
  name: z.string(),
  avatar: imageMediaSchema.optional(),
});

export const articleCardRecordSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  publicationDate: z.string(),
  updatedDate: z.string().optional(),
  category: z.string().optional(),
  author: authorSchema.optional(),
  heroMedia: imageMediaSchema.optional(),
});

export const articlePageRecordSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  publicationDate: z.string(),
  updatedDate: z.string().optional(),
  category: z.string().optional(),
  author: authorSchema,
  heroMedia: imageMediaSchema.optional(),
  body: z.array(portableTextBlockSchema).default([]),
  relatedCapabilities: z.array(capabilityCardRecordSchema).default([]),
  relatedProjects: z.array(projectCardRecordSchema).default([]),
  seo: seoSchema,
});

export const testimonialRecordSchema = z.object({
  quote: z.string(),
  name: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
  video: videoMediaSchema.optional(),
});

export const siteSettingsRecordSchema = z.object({
  siteName: z.string(),
  siteDescription: z.string(),
  defaultShareImage: imageMediaSchema.optional(),
  primaryCTA: z.object({ label: z.string(), href: z.string() }).optional(),
  socialLinks: z.array(z.object({ platform: z.string(), url: z.string() })).default([]),
  approvedClientLogos: z.array(imageMediaSchema).default([]),
  organizationName: z.string().optional(),
  footerBrandStatement: z.string().optional(),
});

export const leadFormSettingsRecordSchema = z.object({
  productTypes: z.array(z.string()).default([]),
  developmentStages: z.array(z.string()).default([]),
  needs: z.array(z.string()).default([]),
  timingOptions: z.array(z.string()).default([]),
  budgetOptions: z.array(z.string()).default([]),
  budgetEnabled: z.boolean().default(false),
  confirmationHeading: z.string().optional(),
  confirmationBody: z.string().optional(),
  uploadEnabled: z.boolean().default(false),
  scheduleCallUrl: z.string().optional(),
});

export const seoDefaultsRecordSchema = z.object({
  defaultTitle: z.string().optional(),
  titleSuffix: z.string().optional(),
  defaultDescription: z.string().optional(),
  defaultShareImage: imageMediaSchema.optional(),
  noIndex: z.boolean().optional(),
});

export const faqRecordSchema = z.object({
  question: z.string(),
  answer: z.string(),
  category: z.string().optional(),
});

export const officeRecordSchema = z.object({
  name: z.string(),
  city: z.string(),
  country: z.string(),
});

export const personRecordSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  avatar: imageMediaSchema.optional(),
});

export const webhookPayloadSchema = z.object({
  _type: z.string(),
  _id: z.string().optional(),
  slug: z.string().optional(),
});

export type ProjectCardRecord = z.infer<typeof projectCardRecordSchema>;
export type ProjectPageRecord = z.infer<typeof projectPageRecordSchema>;
export type CapabilityCardRecord = z.infer<typeof capabilityCardRecordSchema>;
export type CapabilityPageRecord = z.infer<typeof capabilityPageRecordSchema>;
export type IndustryPageRecord = z.infer<typeof industryPageRecordSchema>;
export type ArticleCardRecord = z.infer<typeof articleCardRecordSchema>;
export type ArticlePageRecord = z.infer<typeof articlePageRecordSchema>;
export type TestimonialRecord = z.infer<typeof testimonialRecordSchema>;
export type SiteSettingsRecord = z.infer<typeof siteSettingsRecordSchema>;
export type LeadFormSettingsRecord = z.infer<typeof leadFormSettingsRecordSchema>;
export type SeoDefaultsRecord = z.infer<typeof seoDefaultsRecordSchema>;
export type PortableTextBlockRecord = z.infer<typeof portableTextBlockSchema>;
export type FaqRecord = z.infer<typeof faqRecordSchema>;
export type OfficeRecord = z.infer<typeof officeRecordSchema>;
export type PersonRecord = z.infer<typeof personRecordSchema>;
export type WebhookPayload = z.infer<typeof webhookPayloadSchema>;
export type MediaRecord = z.infer<typeof mediaSchema>;
export type ImageMediaRecord = z.infer<typeof imageMediaSchema>;
export type CanonicalSlug = z.infer<typeof canonicalSlugSchema>;
