import { timingSafeEqual } from 'node:crypto';
import { revalidateTag } from 'next/cache';
import { webhookPayloadSchema } from '@/lib/sanity/validation';
import { WEBHOOK_TYPE_WHITELIST, getRevalidationTags } from '@/lib/sanity/cache-tags';

const MAX_BODY_BYTES = 64 * 1024;

function verifyBearerToken(request: Request): boolean {
  const expected = process.env.SANITY_REVALIDATE_SECRET;
  if (!expected) return false;

  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;

  const [scheme, provided] = authHeader.split(' ', 2);
  if (scheme !== 'Bearer' || !provided) return false;
  if (provided.length !== expected.length) return false;

  return timingSafeEqual(Buffer.from(provided, 'utf-8'), Buffer.from(expected, 'utf-8'));
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request): Promise<Response> {
  const contentLength = request.headers.get('content-length');
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'Payload too large' }, 413);
  }

  if (!verifyBearerToken(request)) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  const rawBody = await request.text();
  if (Buffer.byteLength(rawBody, 'utf-8') > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'Payload too large' }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  if (body && typeof body === 'object') {
    const obj = body as Record<string, unknown>;
    if ('tags' in obj || 'paths' in obj) {
      return jsonResponse({ error: 'Client-supplied tags/paths are not accepted' }, 400);
    }
  }

  const parsed = webhookPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return jsonResponse({ error: 'Invalid webhook payload' }, 400);
  }

  const { _type, slug } = parsed.data;

  if (!WEBHOOK_TYPE_WHITELIST.has(_type)) {
    return jsonResponse({ error: `Document type "${_type}" is not accepted` }, 400);
  }

  const tags = getRevalidationTags({ _type, slug });

  if (tags.length === 0) {
    return jsonResponse({ revalidated: false, reason: 'No tags derived for document type' }, 200);
  }

  for (const tag of tags) {
    revalidateTag(tag, 'default');
  }

  return jsonResponse({ revalidated: true, tags }, 200);
}
