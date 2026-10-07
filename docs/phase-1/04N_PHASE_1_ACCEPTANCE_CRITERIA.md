# 04N — Phase 1 Acceptance Criteria

> Phase 1 passes ONLY when every item below is satisfied. No partial passes.

## Acceptance Checklist

- [ ] Every top-level route has a defined purpose
- [ ] Every route has a defined primary audience
- [ ] Every route has a primary CTA
- [ ] Homepage narrative is locked (16 sections defined)
- [ ] Portfolio only exposes proper project entities (INDIVIDUAL_PROJECT, PROJECT_FAMILY)
- [ ] Collections cannot become accidental case studies
- [ ] Lifecycle taxonomy is controlled (CON, EVT, DVT, PVT, Production — framework only)
- [ ] Unverified stages cannot publish on project pages
- [ ] Medical/defense publication can be gated (HOLD state)
- [ ] Client-review content cannot leak (CLIENT_REVIEW state separate from PUBLISHED)
- [ ] Mobile navigation is fully specified (full-height panel, focus trap, Escape, body scroll lock, 44px targets)
- [ ] Work filtering is fully specified (URL-addressable, only values with published projects, mobile bottom sheet)
- [ ] Case-study conditional modules are specified (LIGHT PROJECT vs FULL CASE STUDY, optional modules defined)
- [ ] Start Project funnel is fully specified (8 steps, progress, back, preserve data, inline errors, UTM capture)
- [ ] Legacy projects have RECOVERY_PENDING state
- [ ] Missing testimonials/logos/metrics collapse gracefully (conditional rendering rules defined)
- [ ] Accessibility requirements are present (WCAG 2.2 AA intent)
- [ ] SEO hierarchy is coherent (indexable/noindex, canonical, breadcrumbs, schema candidates)
- [ ] Analytics does not capture PII (email, phone, name, message body never sent)
- [ ] No production code has been created (documentation only)

## Verification Method

Each criterion must be verifiable by reading the corresponding Phase 1 deliverable:

- Routes: 04B_ROUTE_AND_NAVIGATION_SPEC.md
- Homepage: 04_PHASE_1_INFORMATION_ARCHITECTURE.md
- Portfolio: 04D_PORTFOLIO_TAXONOMY.md
- Lifecycle: 04G_PROCESS_ARCHITECTURE.md
- Medical/defense: 04F_INDUSTRY_ARCHITECTURE.md
- Client review: 04I_CONTENT_REQUIREMENTS_MATRIX.md
- Mobile nav: 04J_RESPONSIVE_UX_RULES.md
- Filtering: 04B_ROUTE_AND_NAVIGATION_SPEC.md
- Case study: 04C_PAGE_TEMPLATE_ARCHITECTURE.md
- Start Project: 04C_PAGE_TEMPLATE_ARCHITECTURE.md
- Legacy: 04L_LEGACY_ROUTE_STRATEGY.md
- Conditional rendering: 04I_CONTENT_REQUIREMENTS_MATRIX.md
- Accessibility: 04J_RESPONSIVE_UX_RULES.md
- SEO: 04K_SEO_INFORMATION_ARCHITECTURE.md
- Analytics: 04M_ANALYTICS_EVENT_ARCHITECTURE.md
- No code: Verify /docs/phase-1/ contains only markdown files
