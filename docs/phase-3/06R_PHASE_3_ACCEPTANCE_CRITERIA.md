# 06R — Phase 3 Acceptance Criteria

> Every criterion below must be verified before Phase 3 is considered complete. Each criterion maps to one or more documents in the Phase 3 architecture set.

---

## Document Status

**PHASE 3 — SECTION 06R: LOCKED**

---

## Stack & Framework

- [x] Stack is locked (06A)
- [x] Framework architecture is locked — Next.js App Router, server-first (06A, 06C)
- [x] CMS is locked — Sanity with structured schemas (06A, 06E)
- [x] Hosting is locked — Vercel (06A, 06P)

## Repository & Components

- [x] Repository architecture exists (06B)
- [x] Component hierarchy exists — 4 levels, ~57 components (06C)
- [x] Server/client boundaries documented — ~45 server, ~12 client (06C)
- [x] Component data contracts exist — 14 key contracts specified (06D)

## CMS Schema

- [x] CMS schemas fully specified — 13 document types, 15 object types (06E)
- [x] No general page builder exists — controlled templates only (06E, 06B)
- [x] Project publication workflow enforced architecturally — PUBLISHED-only at query level (06E)
- [x] Client-review leakage prevented at query level — dual approval model (06E)
- [x] Lifecycle evidence cannot be inferred automatically — explicit stage assignment required (06E)

## Data Layer

- [x] Domain models separated from CMS responses — 11 domain models (06G)
- [x] Runtime validation boundaries defined — 15 boundaries using Zod (06G)
- [x] Caching/revalidation defined — webhook-triggered with cache tags (06H)
- [x] Preview architecture defined — authorized, noindex, excluded from sitemap (06H)

## Media

- [x] Media pipeline defined — three-tier architecture (06I)
- [x] Low-resolution media strategy preserved — source archive immutable (06I)
- [x] Hero video performance strategy defined — purpose-driven behavior (06I, 06D)

## Forms

- [x] Lead submission architecture defined — client wizard → server validation → adapter (06J)
- [x] Attachment restrictions defined — PDF/JPEG/PNG/DOCX, ~10MB, 3 files (06J)

## SEO & Analytics

- [x] SEO metadata architecture defined — per-page Metadata API (06K)
- [x] Structured-data governance defined — Organization, WebSite, BreadcrumbList, Article, FAQPage (06K)
- [x] Sitemap rules defined — published content only, no filter pages (06K)
- [x] Redirect architecture defined — CMS-managed, 301/308, loop prevention (06K, 06E)
- [x] PII/analytics separation defined — trackEvent() abstraction, centralized PII filter (06L)

## Security

- [x] Security layers defined — 13 layers (06M)
- [x] CSP strategy defined — restrictive policy with specific allowances (06M)
- [x] Environment strategy defined — 4 environments, no NEXT_PUBLIC_ for secrets (06M, 06P)

## Accessibility & Testing

- [x] Accessibility technical patterns defined — WCAG 2.2 AA, reusable utilities (06N)
- [x] Test strategy defined — 6 categories (06O)
- [x] Critical E2E paths defined — 9 journeys (06O)
- [x] Performance strategy defined — LCP < 2.5s, CLS < 0.1, INP < 200ms (06O)

## Deployment

- [x] Deployment environments defined — local, preview, staging, production (06P)
- [x] CI gates defined — lint, typecheck, test, build (06P)
- [x] Observability architecture defined — structured logs, error tracking, health checks (06P)

## Build Sequence

- [x] Build sequence defined — 18 builds (06Q)
- [x] Build 001 boundary defined — repository init, quality gates, no page content (06Q)

## Integrity Constraints

- [x] No application files created
- [x] No dependencies installed
- [x] No external research performed

---

## Summary

| Category                | Criteria | Status       |
| ----------------------- | -------- | ------------ |
| Stack & Framework       | 4        | ALL PASS     |
| Repository & Components | 4        | ALL PASS     |
| CMS Schema              | 5        | ALL PASS     |
| Data Layer              | 4        | ALL PASS     |
| Media                   | 3        | ALL PASS     |
| Forms                   | 2        | ALL PASS     |
| SEO & Analytics         | 6        | ALL PASS     |
| Security                | 3        | ALL PASS     |
| Accessibility & Testing | 4        | ALL PASS     |
| Deployment              | 3        | ALL PASS     |
| Build Sequence          | 2        | ALL PASS     |
| Integrity Constraints   | 3        | ALL PASS     |
| **Total**               | **43**   | **ALL PASS** |

---

**PHASE 3 — SECTION 06R: LOCKED — ALL 43 CRITERIA PASS**
