import { draftMode } from 'next/headers';

export async function POST(): Promise<Response> {
  const draft = await draftMode();
  draft.disable();
  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
