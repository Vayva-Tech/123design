# 06P — Deployment Environments

> Phase 3 — Section 06P
> Status: LOCKED

---

## 113 — Deployment Environments

Four environments, each with a distinct purpose and content source.

| Environment    | Purpose                               | Branch/Trigger                           | CMS Dataset                                               | Who Accesses                     |
| -------------- | ------------------------------------- | ---------------------------------------- | --------------------------------------------------------- | -------------------------------- |
| **LOCAL**      | Development, debugging, feature work  | Local dev server                         | Development dataset                                       | Developer                        |
| **PREVIEW**    | Review changes before merge           | Feature branch / PR (Vercel auto-deploy) | Development dataset or controlled production-read content | Developer, reviewer, stakeholder |
| **STAGING**    | Pre-production acceptance (if needed) | `staging` branch or manual trigger       | Production dataset (read-only) or production-mirror       | Developer, QA, content approver  |
| **PRODUCTION** | Live public site                      | `main` branch (merged, reviewed)         | Production dataset                                        | Public                           |

### Environment Rules

- **Do not deploy to production yet.** Production deployment occurs only at BUILD 018 (06Q).
- Preview deployments are automatic per PR on Vercel.
- Production deploys only from `main` after merge.
- Each environment has its own environment variables — no shared secrets across environments.
- Environment variables validated at build time (06A stack, BUILD 001).

---

## 114 — Git Workflow

### Future Flow

```
feature branch → PR → automated checks → preview deployment → QA → merge to main → production deployment
```

### Rules

- **No direct unreviewed production changes.** All changes to `main` go through pull request.
- **Feature branches** are named descriptively: `feat/work-filter`, `fix/hero-cls`, `chore/update-deps`.
- **Pull requests** require:
  - Passing CI checks (115).
  - At least one review approval.
  - No unresolved comments blocking merge.
- **Merge strategy**: Squash merge to keep `main` history clean (or merge commit if the branch history is valuable — decide during BUILD 001).
- **No force-push to `main`.** Ever.
- **No force-push to any shared branch** without explicit team agreement.

### Branch Protection (Future)

When repository hosting is configured:

- `main` branch protected: require PR, require checks, require approval, disallow force-push, disallow deletion.
- `staging` branch protected (if used): same rules as `main`.

---

## 115 — Required CI Checks

These checks run on every pull request. No deployment proceeds when required checks fail.

| Check                          | Purpose                                                  | Blocks Merge |
| ------------------------------ | -------------------------------------------------------- | ------------ |
| **TypeScript**                 | Strict compilation, no type errors                       | Yes          |
| **Lint**                       | ESLint passes (project rules + accessibility plugin)     | Yes          |
| **Format**                     | Prettier check — code is correctly formatted             | Yes          |
| **Unit tests**                 | All unit tests pass                                      | Yes          |
| **Build**                      | Production build succeeds without errors                 | Yes          |
| **Critical integration tests** | Key integration tests pass (data layer, form submission) | Yes          |
| **Accessibility smoke**        | axe-core passes on key page templates                    | Yes          |

### CI Rules

- All checks must pass before merge is permitted.
- CI runs in an environment that mirrors production (same Node.js version, same build command).
- CI does not have access to production secrets — only non-sensitive build-time variables.
- Failed checks are visible on the PR. No merging around failures.
- Flaky checks are fixed immediately — flaky CI erodes trust in all checks.

### Future Additions (After Launch)

- E2E test suite (Playwright) — runs on staging, blocks production deploy.
- Visual regression tests — runs on PR, informational (not blocking until baseline established).
- Bundle size check — alerts on significant increases.
- Lighthouse CI — tracks performance scores over time.

---

## 116 — Sanity Environments

### Dataset Strategy

| Dataset         | Purpose                                              | Who Writes                              | Used By                         |
| --------------- | ---------------------------------------------------- | --------------------------------------- | ------------------------------- |
| **Development** | Schema development, testing, content experimentation | Developers, content editors (testing)   | LOCAL, PREVIEW                  |
| **Production**  | Live content for the public site                     | Content editors (approved content only) | PRODUCTION, STAGING (read-only) |

### Rules

- **Do not test schema migrations directly against production content first.** Schema changes are developed and tested against the development dataset, then migrated to production after validation.
- **Do not duplicate production PII unnecessarily.** If the production dataset contains personal information (lead data, client details), the development dataset should not contain copies of that PII.
- **Production dataset is append/edit-only through the Studio.** No direct database manipulation.
- **Schema migrations** follow a safe process:
  1. Develop schema change in development dataset.
  2. Test with sample content.
  3. Verify frontend handles both old and new schema shapes (backward compatibility).
  4. Apply migration to production dataset.
  5. Verify production frontend with new schema.

### CMS Environment Variables

- `SANITY_STUDIO_PROJECT_ID` — same across environments (same Sanity project).
- `SANITY_STUDIO_DATASET` — `development` or `production` depending on environment.
- `NEXT_PUBLIC_SANITY_DATASET` — frontend reads from the appropriate dataset per environment.
- `SANITY_API_READ_TOKEN` — scoped to the correct dataset, minimal read-only permissions.
- `SANITY_REVALIDATE_SECRET` — unique per environment, not shared.

---

## 117 — Preview Environment

### Vercel Preview Deployments

- Every push to a feature branch triggers a preview deployment on Vercel.
- Preview deployments use the **development CMS dataset** by default.
- Preview deployments may optionally connect to **controlled production-read content** for final review before merge (configurable via environment variable).

### Preview Rules

- **Draft preview tokens remain restricted.** Preview mode requires a valid secret token. Preview URLs are not shared publicly.
- **Do not expose secrets to browser bundles.** Environment variables prefixed with `NEXT_PUBLIC_` are embedded in the client bundle. Never put API tokens, revalidation secrets, or write credentials in `NEXT_PUBLIC_` variables.
- **Preview deployments are ephemeral.** They exist for review and are cleaned up when the branch is deleted or PR is merged.
- **Preview does not process real lead submissions.** Form submissions in preview environments should be clearly marked as test data or disabled entirely.

### Preview + CMS Preview Mode

- Sanity preview mode (draft documents visible) requires authentication.
- Preview token validated server-side before enabling draft mode.
- Preview content never leaks to production builds or public URLs.

---

## 118 — Observability

### What to Observe

The architecture must support monitoring for:

| Category                    | What to Track                                                       | Why                                                     |
| --------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------- |
| **Application errors**      | Unhandled exceptions, failed API routes, build failures             | Detect and diagnose issues quickly                      |
| **Failed lead submissions** | Form submission errors, server action failures, validation failures | Leads are revenue — failures must be caught immediately |
| **Webhook failures**        | Sanity webhook delivery failures, revalidation errors               | Content updates must propagate reliably                 |
| **404 trends**              | Frequently hit 404 paths, redirect gaps                             | Identify broken links, missing redirects, content gaps  |
| **Core Web Vitals**         | LCP, CLS, INP per page template                                     | Performance regression detection                        |
| **Deployment health**       | Build success/failure, deployment status, rollback events           | Operational awareness                                   |

### Provider Integration (Later)

Specific tooling is selected during implementation. The architecture supports integration with:

- **Error monitoring**: Sentry (or equivalent) — captures application errors, source maps, release tracking.
- **Vercel analytics/logging**: Built-in deployment logs, analytics, speed insights.
- **Uptime monitoring**: External monitor (UptimeRobot, Better Stack, or equivalent) — checks production availability at regular intervals.

### Observability Rules

- Error monitoring does not capture PII (names, emails, phone numbers from form submissions).
- Error monitoring does not capture CMS API tokens or revalidation secrets.
- Log levels are appropriate: errors for failures, warnings for degraded behavior, info for significant events.
- Alerts are configured for critical paths: lead submission failure, site down, webhook failure.
- Observability is configured after launch (BUILD 014+), but the architecture supports it from day one.

---

## Document Status

**PHASE 3 — SECTION 06P: LOCKED**

This document defines the deployment environment architecture for 123.design. No deployments are performed by this document — it specifies the environment structure, workflow, and constraints. Deployment configuration occurs during the build sequence (06Q), with production launch at BUILD 018.
