import { draftMode } from 'next/headers';
import { verifyPreviewSecret } from '@/lib/sanity/preview/authorization';

const DEFENSIVE_HEADERS: Record<string, string> = {
  'Cache-Control': 'no-store',
  'Referrer-Policy': 'no-referrer',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
};

function isInternalPath(path: string): boolean {
  if (!path.startsWith('/')) return false;
  if (path.startsWith('//')) return false;
  if (path.includes('\\')) return false;
  const lower = path.toLowerCase();
  if (lower.startsWith('javascript:') || lower.startsWith('data:')) return false;
  return true;
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  try {
    verifyPreviewSecret(secret);
  } catch {
    return new Response('Invalid preview secret', { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  const redirectTo = searchParams.get('redirect') ?? '/';

  if (!isInternalPath(redirectTo)) {
    return new Response('Invalid redirect path', { status: 400 });
  }

  return new Response(null, {
    status: 307,
    headers: {
      Location: redirectTo,
      ...DEFENSIVE_HEADERS,
    },
  });
}
