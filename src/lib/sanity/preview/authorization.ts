import { timingSafeEqual } from 'node:crypto';
import { PreviewAuthorizationError } from '../errors';

export function verifyPreviewSecret(providedSecret: string | null): boolean {
  const expectedSecret = process.env.SANITY_PREVIEW_SECRET;

  if (!expectedSecret) {
    throw new PreviewAuthorizationError('SANITY_PREVIEW_SECRET is not configured on the server.');
  }

  if (!providedSecret) {
    throw new PreviewAuthorizationError('No preview secret provided.');
  }

  if (providedSecret.length !== expectedSecret.length) {
    throw new PreviewAuthorizationError();
  }

  const provided = Buffer.from(providedSecret, 'utf-8');
  const expected = Buffer.from(expectedSecret, 'utf-8');

  if (!timingSafeEqual(provided, expected)) {
    throw new PreviewAuthorizationError();
  }

  return true;
}
