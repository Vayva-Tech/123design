export class SanityQueryError extends Error {
  constructor(
    message: string,
    public readonly queryName: string,
    public override readonly cause?: unknown,
  ) {
    super(message);
    this.name = 'SanityQueryError';
  }
}

export class SanityValidationError extends Error {
  constructor(
    message: string,
    public readonly queryName: string,
    public readonly issues: ReadonlyArray<{ path: string; message: string }>,
  ) {
    super(message);
    this.name = 'SanityValidationError';
  }
}

export class SanityConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SanityConfigError';
  }
}

export class PreviewAuthorizationError extends Error {
  constructor(message = 'Preview authorization failed') {
    super(message);
    this.name = 'PreviewAuthorizationError';
  }
}

export class RevalidationError extends Error {
  constructor(
    message: string,
    public readonly reason: string,
  ) {
    super(message);
    this.name = 'RevalidationError';
  }
}
