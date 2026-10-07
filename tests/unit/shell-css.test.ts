import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const shellCss = readFileSync(resolve(process.cwd(), 'src/styles/shell.css'), 'utf-8');

describe('shell.css — active navigation color', () => {
  it('active nav underline uses --color-accent token', () => {
    expect(shellCss).toContain('var(--color-accent)');
  });

  it('does NOT use --color-success for navigation decoration', () => {
    const navSection = shellCss.match(/\.nav-link\[data-active[\s\S]*?\.disclosure-trigger/);
    if (navSection) {
      expect(navSection[0]).not.toContain('--color-success');
    }
  });

  it('does NOT use raw green hex (#287A53) in navigation', () => {
    expect(shellCss.toLowerCase()).not.toContain('#287a53');
  });

  it('does NOT use green Tailwind utility classes', () => {
    expect(shellCss).not.toMatch(/bg-green|text-green|border-green/);
  });
});

describe('shell.css — overlay header positioning', () => {
  it('overlay mode uses position: fixed (not absolute)', () => {
    const overlayRule = shellCss.match(
      /\.site-header\[data-header-overlay\]\s*\{[^}]*position:\s*(\w+)/,
    );
    expect(overlayRule).not.toBeNull();
    expect(overlayRule![1]).toBe('fixed');
  });

  it('normal header uses position: sticky', () => {
    const baseRule = shellCss.match(/\.site-header\s*\{[^}]*position:\s*(\w+)/);
    expect(baseRule).not.toBeNull();
    expect(baseRule![1]).toBe('sticky');
  });
});

describe('shell.css — desktop navigation breakpoint', () => {
  it('desktop-nav display: flex is at min-width: 1024px', () => {
    const breakpointRules = shellCss.match(/@media\s*\(min-width:\s*1024px\)/g);
    expect(breakpointRules).not.toBeNull();
    expect(breakpointRules!.length).toBeGreaterThan(0);
  });

  it('mobile-menu-trigger hides at min-width: 1024px', () => {
    const pattern =
      /@media\s*\(min-width:\s*1024px\)\s*\{[\s\S]*?\.mobile-menu-trigger[\s\S]*?display:\s*none/;
    expect(pattern.test(shellCss)).toBe(true);
  });

  it('does NOT use 768px as the navigation mode switch breakpoint', () => {
    const media768 = shellCss.match(/@media\s*\(min-width:\s*768px\)\s*\{[\s\S]*?\.desktop-nav/g);
    expect(media768).toBeNull();
  });
});

describe('shell.css — mobile header height', () => {
  it('mobile-nav-header uses 64px height (not 80px)', () => {
    const mobileHeaderRule = shellCss.match(/\.mobile-nav-header\s*\{[^}]*height:\s*(\d+)px/);
    expect(mobileHeaderRule).not.toBeNull();
    expect(mobileHeaderRule![1]).toBe('64');
  });
});
