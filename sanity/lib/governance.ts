import {
  APPROVAL_STATES,
  CLIENT_DISPLAY_MODES,
  LIFECYCLE_STAGES,
  PUBLIC_ELIGIBLE_ENTITY_TYPES,
  PROJECT_PUBLICATION_STATES,
  REDIRECT_STATUS_CODES,
  type ApprovalState,
  type ClientDisplayMode,
  type LifecycleStage,
  type ProjectEntityType,
  type ProjectPublicationState,
} from './constants';

export interface GovernanceError {
  field: string;
  message: string;
}

export interface ProjectPublicationInput {
  publicationState: ProjectPublicationState;
  title?: string;
  slug?: string;
  summary?: string;
  heroMedia?: unknown;
  entityType: ProjectEntityType;
  contentApprovalState: ApprovalState;
  clientApprovalState: ApprovalState;
  clientDisplayMode: ClientDisplayMode;
  clientDisplayName?: string;
  clientRelationshipVerified?: boolean;
  industries?: unknown[];
  capabilities?: unknown[];
}

export function validateProjectForPublication(input: ProjectPublicationInput): GovernanceError[] {
  const errors: GovernanceError[] = [];

  if (input.publicationState !== 'PUBLISHED') {
    return errors;
  }

  if (!input.title || input.title.trim().length === 0) {
    errors.push({ field: 'title', message: 'Title is required for publication.' });
  }

  if (!input.slug) {
    errors.push({ field: 'slug', message: 'Slug is required for publication.' });
  }

  if (!input.summary || input.summary.trim().length === 0) {
    errors.push({ field: 'summary', message: 'Summary is required for publication.' });
  }

  if (!input.heroMedia) {
    errors.push({
      field: 'heroMedia',
      message: 'Hero media is required for publication.',
    });
  }

  if (!PUBLIC_ELIGIBLE_ENTITY_TYPES.includes(input.entityType)) {
    errors.push({
      field: 'entityType',
      message: `Entity type "${input.entityType}" is not eligible for publication. Only ${PUBLIC_ELIGIBLE_ENTITY_TYPES.join(' or ')} may be published.`,
    });
  }

  if (input.contentApprovalState !== 'APPROVED' && input.contentApprovalState !== 'NOT_REQUIRED') {
    errors.push({
      field: 'contentApprovalState',
      message: `Content approval state "${input.contentApprovalState}" is not valid for publication. Must be APPROVED or NOT_REQUIRED.`,
    });
  }

  if (
    input.clientApprovalState === 'REQUIRED' ||
    input.clientApprovalState === 'PENDING' ||
    input.clientApprovalState === 'REJECTED'
  ) {
    errors.push({
      field: 'clientApprovalState',
      message: `Client approval state "${input.clientApprovalState}" blocks publication. Must be APPROVED or NOT_REQUIRED.`,
    });
  }

  if (input.clientDisplayMode === 'NAMED') {
    errors.push(...validateNamedClientState(input));
  }

  const hasIndustry = input.industries && input.industries.length > 0;
  const hasCapability = input.capabilities && input.capabilities.length > 0;
  if (!hasIndustry && !hasCapability) {
    errors.push({
      field: 'industries',
      message: 'At least one industry or capability reference is required for publication.',
    });
  }

  return errors;
}

export function validateNamedClientState(input: ProjectPublicationInput): GovernanceError[] {
  const errors: GovernanceError[] = [];

  if (input.clientDisplayMode !== 'NAMED') {
    return errors;
  }

  if (!input.clientDisplayName || input.clientDisplayName.trim().length === 0) {
    errors.push({
      field: 'clientDisplayName',
      message: 'Client display name is required when client display mode is NAMED.',
    });
  }

  if (!input.clientRelationshipVerified) {
    errors.push({
      field: 'clientRelationshipVerified',
      message: 'Client relationship must be verified when client display mode is NAMED.',
    });
  }

  if (input.clientApprovalState !== 'APPROVED') {
    errors.push({
      field: 'clientApprovalState',
      message: 'Client approval must be APPROVED when client display mode is NAMED.',
    });
  }

  return errors;
}

export interface MediaAltInput {
  decorative?: boolean;
  alt?: string;
}

export function validateMediaAltState(input: MediaAltInput): GovernanceError[] {
  const errors: GovernanceError[] = [];

  if (!input.decorative && (!input.alt || input.alt.trim().length === 0)) {
    errors.push({
      field: 'alt',
      message: 'Alt text is required for non-decorative images.',
    });
  }

  return errors;
}

export interface RedirectPathInput {
  fromPath: string;
  toPath: string;
  statusCode?: number;
}

export function validateRedirectPath(input: RedirectPathInput): GovernanceError[] {
  const errors: GovernanceError[] = [];

  if (!input.fromPath.startsWith('/')) {
    errors.push({
      field: 'fromPath',
      message: 'Source path must start with /.',
    });
  }

  if (input.fromPath.includes('http://') || input.fromPath.includes('https://')) {
    errors.push({
      field: 'fromPath',
      message: 'Source path must not contain a protocol or domain.',
    });
  }

  if (!input.toPath.startsWith('/')) {
    errors.push({
      field: 'toPath',
      message: 'Destination path must start with /.',
    });
  }

  if (input.toPath.includes('http://') || input.toPath.includes('https://')) {
    errors.push({
      field: 'toPath',
      message: 'Destination path must not contain a protocol or domain.',
    });
  }

  if (input.fromPath === input.toPath) {
    errors.push({
      field: 'toPath',
      message: 'Source and destination paths must differ.',
    });
  }

  if (
    input.statusCode !== undefined &&
    !REDIRECT_STATUS_CODES.includes(input.statusCode as (typeof REDIRECT_STATUS_CODES)[number])
  ) {
    errors.push({
      field: 'statusCode',
      message: `Status code must be one of: ${REDIRECT_STATUS_CODES.join(', ')}.`,
    });
  }

  return errors;
}

export function hasDuplicateLifecycleStages(stages: readonly LifecycleStage[]): boolean {
  return new Set(stages).size !== stages.length;
}

export function isValidLifecycleStage(value: string): value is LifecycleStage {
  return (LIFECYCLE_STAGES as readonly string[]).includes(value);
}

export function isValidProjectPublicationState(value: string): value is ProjectPublicationState {
  return (PROJECT_PUBLICATION_STATES as readonly string[]).includes(value);
}

export function isValidApprovalState(value: string): value is ApprovalState {
  return (APPROVAL_STATES as readonly string[]).includes(value);
}

export function isValidClientDisplayMode(value: string): value is ClientDisplayMode {
  return (CLIENT_DISPLAY_MODES as readonly string[]).includes(value);
}

export interface MediaItemInput {
  kind?: string;
  image?: unknown;
  video?: unknown;
}

export function validateMediaItem(input: MediaItemInput): GovernanceError[] {
  const errors: GovernanceError[] = [];

  if (!input.kind || (input.kind !== 'IMAGE' && input.kind !== 'VIDEO')) {
    errors.push({
      field: 'kind',
      message: 'Media item kind must be IMAGE or VIDEO.',
    });
    return errors;
  }

  if (input.kind === 'IMAGE') {
    if (!input.image) {
      errors.push({ field: 'image', message: 'IMAGE media item must carry an image.' });
    }
    if (input.video) {
      errors.push({ field: 'video', message: 'IMAGE media item must not carry a video.' });
    }
  }

  if (input.kind === 'VIDEO') {
    if (!input.video) {
      errors.push({ field: 'video', message: 'VIDEO media item must carry a video.' });
    }
    if (input.image) {
      errors.push({ field: 'image', message: 'VIDEO media item must not carry an image.' });
    }
  }

  return errors;
}
