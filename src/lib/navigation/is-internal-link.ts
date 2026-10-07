export function isInternalLink(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}
