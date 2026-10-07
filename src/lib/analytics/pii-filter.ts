const PII_PATTERNS = [
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  /^\+?\d[\d\s\-()]{6,}$/,
  /^\d{3}-?\d{2}-?\d{4}$/,
];

export function stripPii(value: unknown): unknown {
  if (typeof value === 'string') {
    for (const pattern of PII_PATTERNS) {
      if (pattern.test(value)) return '[redacted]';
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(stripPii);
  }

  if (value !== null && typeof value === 'object') {
    const cleaned: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      cleaned[key] = stripPii(val);
    }
    return cleaned;
  }

  return value;
}

export function stripPiiFromParams(
  params: Record<string, unknown>,
): Record<string, unknown> {
  const cleaned: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    cleaned[key] = stripPii(value);
  }
  return cleaned;
}
