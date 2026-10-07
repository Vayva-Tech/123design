import { getPreviewClient } from './client';
import { SanityQueryError, SanityValidationError } from '../errors';
import type { z } from 'zod';

export async function fetchPreviewQuery<T>(
  query: string,
  params: Record<string, unknown>,
  schema: z.ZodType<T>,
  queryName: string,
): Promise<T> {
  const client = getPreviewClient();

  let raw: unknown;
  try {
    raw = await client.fetch(query, params, {
      cache: 'no-store',
    });
  } catch (error) {
    throw new SanityQueryError(
      `Failed to execute preview query "${queryName}": ${error instanceof Error ? error.message : String(error)}`,
      queryName,
      error,
    );
  }

  const result = schema.safeParse(raw);
  if (!result.success) {
    const issues = result.error.issues.map((issue) => ({
      path: issue.path.map(String).join('.'),
      message: issue.message,
    }));
    throw new SanityValidationError(
      `Preview validation failed for query "${queryName}": ${issues.map((i) => `${i.path}: ${i.message}`).join(', ')}`,
      queryName,
      issues,
    );
  }

  return result.data;
}

export async function fetchPreviewQueryMany<T>(
  query: string,
  params: Record<string, unknown>,
  itemSchema: z.ZodType<T>,
  queryName: string,
): Promise<T[]> {
  const client = getPreviewClient();

  let raw: unknown;
  try {
    raw = await client.fetch(query, params, {
      cache: 'no-store',
    });
  } catch (error) {
    throw new SanityQueryError(
      `Failed to execute preview query "${queryName}": ${error instanceof Error ? error.message : String(error)}`,
      queryName,
      error,
    );
  }

  if (!Array.isArray(raw)) {
    throw new SanityValidationError(
      `Preview query "${queryName}" expected an array but received ${typeof raw}`,
      queryName,
      [{ path: '', message: 'Expected array response' }],
    );
  }

  const results: T[] = [];
  const allIssues: { path: string; message: string }[] = [];

  for (let i = 0; i < raw.length; i++) {
    const result = itemSchema.safeParse(raw[i]);
    if (result.success) {
      results.push(result.data);
    } else {
      for (const issue of result.error.issues) {
        allIssues.push({
          path: `[${i}].${issue.path.map(String).join('.')}`,
          message: issue.message,
        });
      }
    }
  }

  if (allIssues.length > 0) {
    throw new SanityValidationError(
      `Preview validation failed for ${allIssues.length} items in query "${queryName}"`,
      queryName,
      allIssues,
    );
  }

  return results;
}
