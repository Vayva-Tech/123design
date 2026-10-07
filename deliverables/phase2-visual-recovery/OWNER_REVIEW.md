# Phase 2 Visual Recovery — Owner Review Package

**Date**: 2026-09-30
**Status**: READY FOR OWNER REVIEW
**BUILD 012**: GATED on owner visual approval

---

## Summary

Phase 0B-approved media assets activated across the 123Design website. All assets sourced from the normalized register (03A: 613 assets, 03M: 78 website-shortlisted). No stock photos, no fabricated content, no held media.

---

## What Changed

### 1. Hero Reel (src/features/home/components/HomeHeroReel.tsx)

- **Before**: Empty video array — no hero video rendered
- **After**: 14 Phase 0B-approved videos wired via `launch-media.ts` manifest
- **Assets**: `public/media/launch/hero/` (14 MP4 files)
- **Behavior**: Auto-play, muted, loop, playsInline — client component

### 2. Credibility Strip (src/features/home/components/HomeCredibility.tsx)

- **Before**: Conditional logo-based component (no logos available)
- **After**: Always-rendered text-based strip
- **Content**: CON → EVT → DVT → PVT → PRODUCTION phases + 4 capabilities
- **Rationale**: No verified client logos exist; text communicates process authority without fabrication

### 3. Manufacturing Section (src/features/home/components/HomeManufacturing.tsx)

- **Before**: Empty media placeholder
- **After**: 3 approved product images in responsive grid
- **Assets**:
  - DBLL Adjustable Dumbbell (`123_design_blog_new_products_DUMB_BELL_(1).jpg`)
  - RACK Bath Tray (`123_design_blog_new_products_1 (1).jpg`)
  - VIRT product (`WhatsApp Image 2019-08-22 at 11.30.15 AM.jpeg`)
- **Layout**: First image spans full width, remaining two in 2-column grid

### 4. Final CTA (src/features/home/components/HomeFinalCta.tsx)

- **Before**: Plain dark section
- **After**: Tamarack elevation background image at 15% opacity
- **Asset**: `tam-main-elevs-front.jpg`
- **Technique**: `next/image` fill mode, z-index layering, content wrapper at z-index 1

### 5. Typed Manifest (src/features/home/launch-media.ts)

- **Created**: Comprehensive typed manifest for all Phase 0B-approved launch media
- **Exports**: `heroReelPrimary`, `caseStudyLead`, `caseStudySupport`, `portfolioCards`, `allLaunchMedia`, `homepageHeroReel`
- **Purpose**: Single source of truth for launch media; prevents accidental use of unapproved assets

---

## Quality Gates

| Gate         | Status              | Notes                                            |
| ------------ | ------------------- | ------------------------------------------------ |
| format:check | FAIL (pre-existing) | `check-eyebrow.mjs` — not related to this change |
| lint         | PASS                | 0 errors, 3 pre-existing warnings                |
| typecheck    | PASS                | —                                                |
| test         | PASS                | 953/953 unit tests                               |
| build        | PASS                | All routes generate successfully                 |
| test:e2e     | PASS                | 293/293 E2E tests                                |

**Test updates**:

- `tests/unit/homepage.test.tsx`: Replaced "no inline styles" assertions with `next/image` rendering checks (2 tests)
- `tests/unit/home-content.test.ts`: Updated hero reel test to verify 14 entries with videoUrl pattern
- `tests/e2e/homepage.spec.ts`: Removed `.home-credibility` from conditional sections test; added credibility strip content test

---

## Screenshots

All screenshots in `deliverables/phase2-visual-recovery/screenshots/`:

| File                                | Viewport | Page               |
| ----------------------------------- | -------- | ------------------ |
| `home-mobile-390x844.png`           | 390×844  | Homepage (mobile)  |
| `home-desktop-1536x900.png`         | 1536×900 | Homepage (desktop) |
| `work-desktop-1536x900.png`         | 1536×900 | Work page          |
| `process-desktop-1536x900.png`      | 1536×900 | Process page       |
| `capabilities-desktop-1536x900.png` | 1536×900 | Capabilities page  |

---

## Owner Review Checklist

Please verify the following and respond with approval or requested changes:

### Visual Accuracy

- [ ] Hero video renders and auto-plays on homepage
- [ ] Credibility strip shows correct phases (CON → EVT → DVT → PVT → PRODUCTION)
- [ ] Manufacturing section shows 3 product images (DBLL, RACK, VIRT)
- [ ] Final CTA has subtle background image (Tamarack elevation)
- [ ] All images load without errors
- [ ] Mobile layout stacks correctly (390px viewport)
- [ ] Desktop layout uses full width (1536px viewport)

### Content Verification

- [ ] No stock photos or unapproved assets visible
- [ ] No fake client logos
- [ ] No fabricated project claims
- [ ] All alt text is accurate and descriptive
- [ ] No held/restricted media (medical, defense)

### Design System Compliance

- [ ] Colors match brand tokens (--color-accent: #f05a36)
- [ ] Typography uses design system scale
- [ ] Spacing consistent with design tokens
- [ ] Responsive breakpoints work correctly

### Technical Quality

- [ ] No console errors in browser devtools
- [ ] Images optimize correctly (next/image srcSet)
- [ ] Video loads without blocking page render
- [ ] All links navigate correctly

---

## Known Issues (Pre-existing)

1. **Format check failure**: `check-eyebrow.mjs` has Prettier formatting issues — not related to this change
2. **Lint warnings**: 3 pre-existing warnings (no-img-element in HomeHeroReel and ProjectCard, unused var in HomeLifecycle)
3. **Work page empty state**: Shows "0 projects" — correct CMS-absent behavior (BUILD 016 owns content migration)

---

## Next Steps

Upon owner approval:

1. Mark BUILD 012 as LOCKED
2. Proceed to BUILD 013 (SEO) or BUILD 014 (Analytics) per roadmap
3. Content migration (BUILD 016) will populate CMS with real project data

---

## Files Modified

```
src/features/home/components/HomeHeroReel.tsx
src/features/home/components/HomeCredibility.tsx
src/features/home/components/HomeManufacturing.tsx
src/features/home/components/HomeFinalCta.tsx
src/features/home/launch-media.ts (created)
src/app/page.tsx
src/styles/home.css
tests/unit/homepage.test.tsx
tests/unit/home-content.test.ts
tests/e2e/homepage.spec.ts
```

---

## Approval

**Owner**: [Awaiting review]
**Date**: [Pending]
**Decision**: [ ] APPROVED [ ] CHANGES REQUESTED

**Comments**:

---

---

---
