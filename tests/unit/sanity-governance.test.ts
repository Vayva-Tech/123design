import { describe, it, expect } from 'vitest';
import {
  validateProjectForPublication,
  validateNamedClientState,
  validateMediaAltState,
  validateMediaItem,
  validateRedirectPath,
  hasDuplicateLifecycleStages,
  isValidLifecycleStage,
  isValidProjectPublicationState,
  isValidApprovalState,
  isValidClientDisplayMode,
  type ProjectPublicationInput,
} from '../../sanity/lib/governance';
import {
  PROJECT_PUBLICATION_STATES,
  PROJECT_ENTITY_TYPES,
  LIFECYCLE_STAGES,
  CLIENT_DISPLAY_MODES,
  APPROVAL_STATES,
  CONTENT_STATUSES,
  VIDEO_PURPOSES,
  REDIRECT_STATUS_CODES,
} from '../../sanity/lib/constants';

describe('Exact Enum Assertions', () => {
  it('PROJECT_PUBLICATION_STATES has 6 canonical values', () => {
    expect(PROJECT_PUBLICATION_STATES).toEqual([
      'DRAFT',
      'CONTENT_REVIEW',
      'CLIENT_REVIEW',
      'READY',
      'PUBLISHED',
      'ARCHIVED',
    ]);
  });

  it('PROJECT_ENTITY_TYPES has 8 canonical values', () => {
    expect(PROJECT_ENTITY_TYPES).toEqual([
      'INDIVIDUAL_PROJECT',
      'PROJECT_FAMILY',
      'PORTFOLIO_COLLECTION',
      'CAPABILITY_COLLECTION',
      'MULTI_CLIENT_ARCHIVE',
      'ARCHIVE_BUCKET',
      'AGGREGATE_DUPLICATE_BUCKET',
      'UNKNOWN',
    ]);
  });

  it('LIFECYCLE_STAGES has 5 canonical values', () => {
    expect(LIFECYCLE_STAGES).toEqual(['CON', 'EVT', 'DVT', 'PVT', 'PRODUCTION']);
  });

  it('CLIENT_DISPLAY_MODES has 3 canonical values', () => {
    expect(CLIENT_DISPLAY_MODES).toEqual(['NONE', 'ANONYMOUS', 'NAMED']);
  });

  it('APPROVAL_STATES has 5 canonical values', () => {
    expect(APPROVAL_STATES).toEqual([
      'NOT_REQUIRED',
      'REQUIRED',
      'PENDING',
      'APPROVED',
      'REJECTED',
    ]);
  });

  it('CONTENT_STATUSES has 5 canonical values', () => {
    expect(CONTENT_STATUSES).toEqual(['DRAFT', 'REVIEW', 'READY', 'PUBLISHED', 'ARCHIVED']);
  });

  it('VIDEO_PURPOSES has 5 canonical values', () => {
    expect(VIDEO_PURPOSES).toEqual([
      'heroReel',
      'hoverPreview',
      'projectVideo',
      'processVideo',
      'testimonialVideo',
    ]);
  });

  it('REDIRECT_STATUS_CODES allows only 301 and 308', () => {
    expect(REDIRECT_STATUS_CODES).toEqual([301, 308]);
  });
});

describe('Project Publication Test Matrix', () => {
  const validInput: ProjectPublicationInput = {
    publicationState: 'PUBLISHED',
    title: 'Test Project',
    slug: 'test-project',
    summary: 'A test project summary',
    heroMedia: { _type: 'mediaItem', kind: 'IMAGE' },
    entityType: 'INDIVIDUAL_PROJECT',
    contentApprovalState: 'APPROVED',
    clientApprovalState: 'NOT_REQUIRED',
    clientDisplayMode: 'NONE',
    industries: [{ _ref: 'industry-1' }],
  };

  it('valid PUBLISHED INDIVIDUAL_PROJECT passes', () => {
    expect(validateProjectForPublication(validInput)).toHaveLength(0);
  });

  it('valid PUBLISHED PROJECT_FAMILY passes', () => {
    const input = { ...validInput, entityType: 'PROJECT_FAMILY' as const };
    expect(validateProjectForPublication(input)).toHaveLength(0);
  });

  it('missing title fails', () => {
    const errors = validateProjectForPublication({ ...validInput, title: undefined });
    expect(errors.find((e) => e.field === 'title')).toBeDefined();
  });

  it('missing slug fails', () => {
    const errors = validateProjectForPublication({ ...validInput, slug: undefined });
    expect(errors.find((e) => e.field === 'slug')).toBeDefined();
  });

  it('missing summary fails', () => {
    const errors = validateProjectForPublication({ ...validInput, summary: undefined });
    expect(errors.find((e) => e.field === 'summary')).toBeDefined();
  });

  it('missing hero fails', () => {
    const errors = validateProjectForPublication({ ...validInput, heroMedia: undefined });
    expect(errors.find((e) => e.field === 'heroMedia')).toBeDefined();
  });

  it('no industry or capability fails', () => {
    const errors = validateProjectForPublication({
      ...validInput,
      industries: [],
      capabilities: [],
    });
    expect(errors.find((e) => e.field === 'industries')).toBeDefined();
  });

  it('non-PUBLISHED states skip validation (DRAFT)', () => {
    const errors = validateProjectForPublication({ ...validInput, publicationState: 'DRAFT' });
    expect(errors).toHaveLength(0);
  });

  it('content approval PENDING fails', () => {
    const errors = validateProjectForPublication({
      ...validInput,
      contentApprovalState: 'PENDING',
    });
    expect(errors.find((e) => e.field === 'contentApprovalState')).toBeDefined();
  });

  it('content approval REJECTED fails', () => {
    const errors = validateProjectForPublication({
      ...validInput,
      contentApprovalState: 'REJECTED',
    });
    expect(errors.find((e) => e.field === 'contentApprovalState')).toBeDefined();
  });

  it('client approval PENDING fails', () => {
    const errors = validateProjectForPublication({
      ...validInput,
      clientApprovalState: 'PENDING',
    });
    expect(errors.find((e) => e.field === 'clientApprovalState')).toBeDefined();
  });
});

describe('Non-Public Entity Test Matrix', () => {
  const validInput: ProjectPublicationInput = {
    publicationState: 'PUBLISHED',
    title: 'Test',
    slug: 'test',
    summary: 'Summary',
    heroMedia: {},
    entityType: 'INDIVIDUAL_PROJECT',
    contentApprovalState: 'APPROVED',
    clientApprovalState: 'NOT_REQUIRED',
    clientDisplayMode: 'NONE',
    industries: [{ _ref: 'i1' }],
  };

  const nonPublicTypes = [
    'PORTFOLIO_COLLECTION',
    'CAPABILITY_COLLECTION',
    'MULTI_CLIENT_ARCHIVE',
    'ARCHIVE_BUCKET',
    'AGGREGATE_DUPLICATE_BUCKET',
    'UNKNOWN',
  ] as const;

  for (const entityType of nonPublicTypes) {
    it(`PUBLISHED ${entityType} fails`, () => {
      const errors = validateProjectForPublication({ ...validInput, entityType });
      expect(errors.find((e) => e.field === 'entityType')).toBeDefined();
    });
  }
});

describe('Named Client Governance', () => {
  const baseInput: ProjectPublicationInput = {
    publicationState: 'PUBLISHED',
    title: 'Test',
    slug: 'test',
    summary: 'Summary',
    heroMedia: {},
    entityType: 'INDIVIDUAL_PROJECT',
    contentApprovalState: 'APPROVED',
    clientApprovalState: 'APPROVED',
    clientDisplayMode: 'NAMED',
    clientDisplayName: 'Acme Corp',
    clientRelationshipVerified: true,
  };

  it('valid NAMED client state passes', () => {
    expect(validateNamedClientState(baseInput)).toHaveLength(0);
  });

  it('non-NAMED mode skips validation', () => {
    const input = { ...baseInput, clientDisplayMode: 'ANONYMOUS' as const };
    expect(validateNamedClientState(input)).toHaveLength(0);
  });

  it('NAMED with missing clientDisplayName fails', () => {
    const errors = validateNamedClientState({ ...baseInput, clientDisplayName: undefined });
    expect(errors.find((e) => e.field === 'clientDisplayName')).toBeDefined();
  });

  it('NAMED with unverified relationship fails', () => {
    const errors = validateNamedClientState({
      ...baseInput,
      clientRelationshipVerified: false,
    });
    expect(errors.find((e) => e.field === 'clientRelationshipVerified')).toBeDefined();
  });

  it('NAMED with PENDING approval fails', () => {
    const errors = validateNamedClientState({
      ...baseInput,
      clientApprovalState: 'PENDING' as const,
    });
    expect(errors.find((e) => e.field === 'clientApprovalState')).toBeDefined();
  });
});

describe('Media Test Matrix', () => {
  it('meaningful image without alt fails', () => {
    const errors = validateMediaAltState({});
    expect(errors.find((e) => e.field === 'alt')).toBeDefined();
  });

  it('decorative image without alt passes', () => {
    expect(validateMediaAltState({ decorative: true })).toHaveLength(0);
  });

  it('IMAGE mediaItem without image fails', () => {
    const errors = validateMediaItem({ kind: 'IMAGE' });
    expect(errors.find((e) => e.field === 'image')).toBeDefined();
  });

  it('VIDEO mediaItem without video fails', () => {
    const errors = validateMediaItem({ kind: 'VIDEO' });
    expect(errors.find((e) => e.field === 'video')).toBeDefined();
  });

  it('IMAGE carrying video fails', () => {
    const errors = validateMediaItem({ kind: 'IMAGE', image: {}, video: {} });
    expect(errors.find((e) => e.field === 'video')).toBeDefined();
  });

  it('VIDEO carrying image fails', () => {
    const errors = validateMediaItem({ kind: 'VIDEO', image: {}, video: {} });
    expect(errors.find((e) => e.field === 'image')).toBeDefined();
  });

  it('unknown kind fails', () => {
    const errors = validateMediaItem({ kind: 'AUDIO' });
    expect(errors.find((e) => e.field === 'kind')).toBeDefined();
  });

  it('valid IMAGE with image passes', () => {
    expect(validateMediaItem({ kind: 'IMAGE', image: {} })).toHaveLength(0);
  });

  it('valid VIDEO with video passes', () => {
    expect(validateMediaItem({ kind: 'VIDEO', video: {} })).toHaveLength(0);
  });
});

describe('Redirect Test Matrix', () => {
  it('301 is allowed', () => {
    const errors = validateRedirectPath({ fromPath: '/old', toPath: '/new', statusCode: 301 });
    expect(errors.filter((e) => e.field === 'statusCode')).toHaveLength(0);
  });

  it('308 is allowed', () => {
    const errors = validateRedirectPath({ fromPath: '/old', toPath: '/new', statusCode: 308 });
    expect(errors.filter((e) => e.field === 'statusCode')).toHaveLength(0);
  });

  it('302 is rejected', () => {
    const errors = validateRedirectPath({ fromPath: '/old', toPath: '/new', statusCode: 302 });
    expect(errors.find((e) => e.field === 'statusCode')).toBeDefined();
  });

  it('307 is rejected', () => {
    const errors = validateRedirectPath({ fromPath: '/old', toPath: '/new', statusCode: 307 });
    expect(errors.find((e) => e.field === 'statusCode')).toBeDefined();
  });

  it('absolute fromPath fails', () => {
    const errors = validateRedirectPath({
      fromPath: 'http://example.com/page',
      toPath: '/new',
    });
    expect(errors.find((e) => e.field === 'fromPath')).toBeDefined();
  });

  it('protocol in fromPath fails', () => {
    const errors = validateRedirectPath({
      fromPath: 'https://example.com',
      toPath: '/new',
    });
    expect(errors.find((e) => e.field === 'fromPath')).toBeDefined();
  });

  it('fromPath equals toPath fails', () => {
    const errors = validateRedirectPath({ fromPath: '/same', toPath: '/same' });
    expect(errors.find((e) => e.field === 'toPath')).toBeDefined();
  });

  it('toPath without leading / fails', () => {
    const errors = validateRedirectPath({ fromPath: '/old', toPath: 'new' });
    expect(errors.find((e) => e.field === 'toPath')).toBeDefined();
  });
});

describe('Type Guards', () => {
  it('isValidLifecycleStage', () => {
    expect(isValidLifecycleStage('CON')).toBe(true);
    expect(isValidLifecycleStage('PRODUCTION')).toBe(true);
    expect(isValidLifecycleStage('INVALID')).toBe(false);
    expect(isValidLifecycleStage('DESIGN')).toBe(false);
  });

  it('isValidProjectPublicationState', () => {
    expect(isValidProjectPublicationState('DRAFT')).toBe(true);
    expect(isValidProjectPublicationState('PUBLISHED')).toBe(true);
    expect(isValidProjectPublicationState('INVALID')).toBe(false);
  });

  it('isValidApprovalState', () => {
    expect(isValidApprovalState('APPROVED')).toBe(true);
    expect(isValidApprovalState('NOT_REQUIRED')).toBe(true);
    expect(isValidApprovalState('INVALID')).toBe(false);
  });

  it('isValidClientDisplayMode', () => {
    expect(isValidClientDisplayMode('NONE')).toBe(true);
    expect(isValidClientDisplayMode('NAMED')).toBe(true);
    expect(isValidClientDisplayMode('HIDDEN')).toBe(false);
    expect(isValidClientDisplayMode('INVALID')).toBe(false);
  });
});

describe('hasDuplicateLifecycleStages', () => {
  it('returns false for empty array', () => {
    expect(hasDuplicateLifecycleStages([])).toBe(false);
  });

  it('returns false for unique stages', () => {
    expect(hasDuplicateLifecycleStages(['CON', 'EVT', 'DVT'])).toBe(false);
  });

  it('returns true for duplicate stages', () => {
    expect(hasDuplicateLifecycleStages(['CON', 'EVT', 'CON'])).toBe(true);
  });
});
