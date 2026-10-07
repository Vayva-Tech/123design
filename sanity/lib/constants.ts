export const SANITY_API_VERSION = '2026-09-26' as const;

export const PROJECT_PUBLICATION_STATES = [
  'DRAFT',
  'CONTENT_REVIEW',
  'CLIENT_REVIEW',
  'READY',
  'PUBLISHED',
  'ARCHIVED',
] as const;

export type ProjectPublicationState = (typeof PROJECT_PUBLICATION_STATES)[number];

export const PROJECT_ENTITY_TYPES = [
  'INDIVIDUAL_PROJECT',
  'PROJECT_FAMILY',
  'PORTFOLIO_COLLECTION',
  'CAPABILITY_COLLECTION',
  'MULTI_CLIENT_ARCHIVE',
  'ARCHIVE_BUCKET',
  'AGGREGATE_DUPLICATE_BUCKET',
  'UNKNOWN',
] as const;

export type ProjectEntityType = (typeof PROJECT_ENTITY_TYPES)[number];

export const PUBLIC_ELIGIBLE_ENTITY_TYPES: readonly ProjectEntityType[] = [
  'INDIVIDUAL_PROJECT',
  'PROJECT_FAMILY',
];

export const APPROVAL_STATES = [
  'NOT_REQUIRED',
  'REQUIRED',
  'PENDING',
  'APPROVED',
  'REJECTED',
] as const;

export type ApprovalState = (typeof APPROVAL_STATES)[number];

export const CONTENT_STATUSES = ['DRAFT', 'REVIEW', 'READY', 'PUBLISHED', 'ARCHIVED'] as const;

export type ContentStatus = (typeof CONTENT_STATUSES)[number];

export const LIFECYCLE_STAGES = ['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION'] as const;

export type LifecycleStage = (typeof LIFECYCLE_STAGES)[number];

export const CLIENT_DISPLAY_MODES = ['NONE', 'ANONYMOUS', 'NAMED'] as const;

export type ClientDisplayMode = (typeof CLIENT_DISPLAY_MODES)[number];

export const VIDEO_PURPOSES = [
  'heroReel',
  'hoverPreview',
  'projectVideo',
  'processVideo',
  'testimonialVideo',
] as const;

export type VideoPurpose = (typeof VIDEO_PURPOSES)[number];

export const EVIDENCE_STATES = [
  'VERIFIED',
  'OWNER_VERIFY',
  'CLIENT_APPROVAL',
  'RECOVERY_PENDING',
  'UNKNOWN',
] as const;

export type EvidenceState = (typeof EVIDENCE_STATES)[number];

export const VERIFICATION_STATES = ['PENDING', 'VERIFIED', 'REJECTED'] as const;

export type VerificationState = (typeof VERIFICATION_STATES)[number];

export const NARRATIVE_SECTION_TYPES = ['overview', 'challenge', 'insight', 'result'] as const;

export const DISCIPLINE_SECTION_TYPES = [
  'industrialDesign',
  'mechanicalEngineering',
  'electricalEngineering',
  'prototype',
  'testingValidation',
  'tooling',
  'manufacturing',
] as const;

export const CTA_VARIANTS = ['primary', 'secondary', 'text', 'dark'] as const;

export const LINK_TYPES = ['INTERNAL', 'EXTERNAL'] as const;

export const REDIRECT_STATUS_CODES = [301, 308] as const;

export const SINGLETON_IDS = {
  siteSettings: 'siteSettings',
  leadFormSettings: 'leadFormSettings',
  seoDefaults: 'seoDefaults',
} as const;

export const CANONICAL_CAPABILITY_SLUGS = [
  'product-development',
  'industrial-design',
  'mechanical-engineering',
  'electrical-engineering',
  'prototyping',
  'testing-validation',
  'product-animation',
  'tooling',
  'manufacturing',
  'program-management',
] as const;

export const CANONICAL_INDUSTRY_SLUGS = [
  'consumer-products',
  'medical',
  'defense-security',
  'electronics',
  'industrial',
  'emerging-technology',
] as const;
