export function isSafeHttpsUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function isUnsafeProtocol(url: string): boolean {
  const lower = url.trim().toLowerCase();
  return (
    lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:')
  );
}

export function isValidInternalPath(path: string): boolean {
  if (!path.startsWith('/')) return false;
  if (path.includes('http://') || path.includes('https://')) return false;
  return true;
}

export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}
