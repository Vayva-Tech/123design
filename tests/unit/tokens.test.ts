import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const tokensCss = readFileSync(resolve(process.cwd(), 'src/styles/tokens.css'), 'utf-8');

describe('Canonical color tokens', () => {
  it('defines canvas color', () => {
    expect(tokensCss).toContain('--color-canvas: #f4f1ea');
  });

  it('defines ink color', () => {
    expect(tokensCss).toContain('--color-ink: #11110f');
  });

  it('defines accent color', () => {
    expect(tokensCss).toContain('--color-accent: #f05a36');
  });

  it('defines accent hover color', () => {
    expect(tokensCss).toContain('--color-accent-hover: #d94a29');
  });

  it('defines surface color', () => {
    expect(tokensCss).toContain('--color-surface: #ffffff');
  });

  it('defines line color', () => {
    expect(tokensCss).toContain('--color-line: #d6d3cb');
  });

  it('defines dark canvas color', () => {
    expect(tokensCss).toContain('--color-dark-canvas: #11110f');
  });

  it('defines dark ink color', () => {
    expect(tokensCss).toContain('--color-dark-ink: #f5f2ea');
  });

  it('defines focus colors', () => {
    expect(tokensCss).toContain('--color-focus-light: #11110f');
    expect(tokensCss).toContain('--color-focus-dark: #f5f2ea');
  });
});

describe('Canonical spacing tokens', () => {
  it('defines space-2', () => {
    expect(tokensCss).toContain('--space-2: 2px');
  });

  it('defines space-16', () => {
    expect(tokensCss).toContain('--space-16: 16px');
  });

  it('defines space-192', () => {
    expect(tokensCss).toContain('--space-192: 192px');
  });
});

describe('Canonical motion tokens', () => {
  it('defines micro duration within canonical range', () => {
    expect(tokensCss).toContain('--duration-micro: 180ms');
  });

  it('defines ui duration within canonical range', () => {
    expect(tokensCss).toContain('--duration-ui: 280ms');
  });

  it('defines section duration within canonical range', () => {
    expect(tokensCss).toContain('--duration-section: 550ms');
  });

  it('defines media duration within canonical range', () => {
    expect(tokensCss).toContain('--duration-media: 750ms');
  });

  it('defines primary easing', () => {
    expect(tokensCss).toContain('--ease-primary: cubic-bezier(0.22, 1, 0.36, 1)');
  });
});

describe('Canonical radius tokens', () => {
  it('defines radius-sm', () => {
    expect(tokensCss).toContain('--radius-sm: 6px');
  });

  it('defines radius-round', () => {
    expect(tokensCss).toContain('--radius-round: 999px');
  });
});

describe('Canonical container tokens', () => {
  it('defines shell container', () => {
    expect(tokensCss).toContain('--container-shell: 100%');
  });

  it('defines content container', () => {
    expect(tokensCss).toContain('--container-content: 100%');
  });

  it('defines reading container', () => {
    expect(tokensCss).toContain('--container-reading: 720px');
  });
});

describe('Canonical z-index tokens', () => {
  it('defines exactly 7 z-index layers', () => {
    const zIndexMatches = tokensCss.match(/--z-/g);
    expect(zIndexMatches).not.toBeNull();
    expect(zIndexMatches!.length).toBe(7);
  });

  it('defines base, raised, sticky, dropdown, overlay, modal, toast', () => {
    expect(tokensCss).toContain('--z-base: 0');
    expect(tokensCss).toContain('--z-raised: 10');
    expect(tokensCss).toContain('--z-sticky: 100');
    expect(tokensCss).toContain('--z-dropdown: 200');
    expect(tokensCss).toContain('--z-overlay: 300');
    expect(tokensCss).toContain('--z-modal: 400');
    expect(tokensCss).toContain('--z-toast: 500');
  });
});

describe('Typography scale', () => {
  const typographyCss = readFileSync(resolve(process.cwd(), 'src/styles/typography.css'), 'utf-8');

  it('defines 11 type size classes', () => {
    const typeClasses = typographyCss.match(/\.type-/g);
    expect(typeClasses).not.toBeNull();
    expect(typeClasses!.length).toBeGreaterThanOrEqual(11);
  });

  it('body minimum is at least 16px via clamp', () => {
    const bodyMatch = typographyCss.match(/\.type-body\s*\{[^}]*font-size:\s*([^;]+)/);
    expect(bodyMatch).not.toBeNull();
    const clampValue = bodyMatch![1]!;
    const minMatch = clampValue.match(/clamp\(([^,]+)/);
    expect(minMatch).not.toBeNull();
    const minRem = parseFloat(minMatch![1]!);
    expect(minRem).toBeGreaterThanOrEqual(1);
  });

  it('micro minimum is at least 12px via clamp', () => {
    const microMatch = typographyCss.match(/\.type-micro\s*\{[^}]*font-size:\s*([^;]+)/);
    expect(microMatch).not.toBeNull();
    const clampValue = microMatch![1]!;
    const minMatch = clampValue.match(/clamp\(([^,]+)/);
    expect(minMatch).not.toBeNull();
    const minRem = parseFloat(minMatch![1]!);
    expect(minRem).toBeGreaterThanOrEqual(0.75);
  });

  it('display-l uses canonical clamp values', () => {
    expect(typographyCss).toContain('.type-display-l');
  });
});

describe('Selection colors', () => {
  const globalsCss = readFileSync(resolve(process.cwd(), 'src/app/globals.css'), 'utf-8');

  it('uses accent-soft background for selection', () => {
    expect(globalsCss).toContain('--color-accent-soft');
  });

  it('uses ink color for selection text', () => {
    const selectionBlock = globalsCss.match(/::selection\s*\{([^}]+)\}/);
    expect(selectionBlock).not.toBeNull();
    expect(selectionBlock![1]).toContain('--color-ink');
  });
});
