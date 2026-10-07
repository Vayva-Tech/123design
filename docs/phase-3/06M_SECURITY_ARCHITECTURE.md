# 06M — Security Architecture

> PHASE 3 — SECTION 06M: LOCKED

---

## 93. Security Model

Thirteen layers of defense. Each layer is independent — a failure in one does not excuse weakness in another.

### Layer 1: Dependency Security

- Regular dependency audits (`npm audit`, `pnpm audit`).
- Minimal dependency surface — no unnecessary packages.
- No known vulnerable packages in production builds.
- Lockfile integrity verified in CI.

### Layer 2: Environment Validation

- All environment variables validated on startup and at build time.
- Secrets are NEVER prefixed with `NEXT_PUBLIC_` — this prefix exposes values to the browser bundle.
- Missing required variables fail the build or startup, not silently degrade.

### Layer 3: Security Headers

All responses include:

| Header                            | Purpose                                                                  |
| --------------------------------- | ------------------------------------------------------------------------ |
| `Content-Security-Policy`         | Restricts resource origins; replaces X-Frame-Options for framing control |
| `Strict-Transport-Security`       | Enforces HTTPS for the specified duration                                |
| `X-Content-Type-Options: nosniff` | Prevents MIME-type sniffing                                              |
| `Referrer-Policy`                 | Controls referrer information sent with requests                         |
| `Permissions-Policy`              | Restricts browser feature access (camera, microphone, geolocation, etc.) |
| `frame-ancestors` (via CSP)       | Replaces X-Frame-Options; controls which origins can embed the page      |

Do not depend on deprecated `X-Frame-Options` alone where CSP `frame-ancestors` is stronger.

### Layer 4: Server-Side Validation

- All form data validated server-side before processing.
- Zod schemas at API route boundaries — no implicit `any` acceptance.
- Client-side validation is for UX; server-side validation is for security.

### Layer 5: Rate Limiting

- Form submission endpoints rate-limited per IP/session.
- API routes rate-limited to prevent abuse.
- Rate limit responses return appropriate HTTP status (429) with retry guidance.

### Layer 6: Bot Protection

- Honeypot fields on forms (invisible to humans, filled by bots).
- Throttling on form submissions beyond rate limits.
- Optional Cloudflare Turnstile or equivalent challenge for high-risk endpoints.

### Layer 7: Upload Validation

- MIME type check AND file extension check — both must match.
- Type whitelist — only explicitly allowed file types accepted.
- Size limits enforced server-side (not just client-side).
- Uploaded files stored with sanitized names; original filenames not exposed publicly.

### Layer 8: CMS Access Controls

- Public content queries use least-privileged read access.
- Writing through Sanity Studio / editor authentication only.
- Application public runtime does not hold write credentials.
- Preview tokens remain server-side.

### Layer 9: Preview Authorization

- Preview mode requires server-side token verification.
- Preview pages include `noindex` meta tag.
- Preview pages excluded from sitemap.
- Preview mode cannot be activated by unauthenticated requests.

### Layer 10: Webhook Verification

- Revalidation endpoints verify requests via shared secret or signed request.
- Payload structure validated against expected schema.
- Allowed dataset and project ID verified.
- Arbitrary `revalidatePath` input rejected without validation.

### Layer 11: Secret Handling

- All secrets stored as environment variables only.
- Secrets NEVER in source code, configuration files committed to version control, or browser bundles.
- `NEXT_PUBLIC_` prefix audit — any secret with this prefix is a critical vulnerability.
- Secret rotation procedure documented.

### Layer 12: Content Sanitization

- Portable Text renderers use a whitelist of allowed block types.
- Arbitrary HTML from CMS is NOT rendered.
- External links include safe `rel` attributes (`noopener`, `noreferrer` where appropriate).
- No executable embeds by default.

### Layer 13: Dependency Supply Chain

- Lockfile committed and verified in CI (`--frozen-lockfile`).
- Minimal attack surface — fewer dependencies means fewer potential vulnerabilities.
- Dependency updates reviewed for breaking changes and new transitive dependencies.

---

## 94. Security Headers

### Required Headers

| Header                      | Value (Conceptual)                              | Notes                                     |
| --------------------------- | ----------------------------------------------- | ----------------------------------------- |
| `Content-Security-Policy`   | See Section 95                                  | Primary defense against XSS and injection |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains`           | Enforce HTTPS                             |
| `X-Content-Type-Options`    | `nosniff`                                       | Prevent MIME sniffing                     |
| `Referrer-Policy`           | `strict-origin-when-cross-origin`               | Balance privacy with useful referrer data |
| `Permissions-Policy`        | Restrictive — only allow features actually used | Camera, microphone, geolocation, etc.     |

### Framing Protection

Use CSP `frame-ancestors` directive instead of (or in addition to) `X-Frame-Options`. CSP `frame-ancestors` is more flexible and is the modern standard. `X-Frame-Options` is deprecated and not supported consistently across all browsers when CSP framing directives exist.

---

## 95. CSP Strategy

### Approved Sources (Conceptual)

The Content-Security-Policy must eventually account for these approved sources only:

| Directive         | Sources                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------ |
| `default-src`     | `'self'`                                                                                   |
| `script-src`      | `'self'`, analytics provider origin                                                        |
| `style-src`       | `'self'`, `'unsafe-inline'` (required for CSS-in-JS or Tailwind), Sanity CDN if applicable |
| `img-src`         | `'self'`, Sanity CDN, analytics provider (pixel)                                           |
| `font-src`        | `'self'`, Sanity CDN                                                                       |
| `connect-src`     | `'self'`, Sanity API, analytics provider                                                   |
| `media-src`       | `'self'`, video source (project videos)                                                    |
| `frame-ancestors` | `'none'` or specific allowed embedders                                                     |

### Prohibited

- `unsafe-eval` — not permitted.
- Broad wildcards (`*`) — not permitted. Each source must be explicitly listed.

### CSP Finalization

Do not finalize the exact production CSP until all integrations exist and their resource origins are known. The CSP must be built from verified integration requirements, not assumptions. A report-only CSP may be deployed earlier to identify violations without blocking.

---

## 96. Environment Variables

### Variable Schema

| Variable                        | Scope                              | Purpose                                                                           |
| ------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Public (browser)                   | Site origin for absolute URLs, OG tags, sitemaps                                  |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Public (browser)                   | Sanity project identifier for content queries                                     |
| `NEXT_PUBLIC_SANITY_DATASET`    | Public (browser)                   | Sanity dataset name (e.g., `production`)                                          |
| `SANITY_API_READ_TOKEN`         | Server-side only                   | Least-privileged read token for server-side queries (if needed beyond public API) |
| `SANITY_REVALIDATE_SECRET`      | Server-side only                   | Shared secret for ISR revalidation webhook                                        |
| Analytics IDs                   | Server-side / public per provider  | Analytics provider identifiers                                                    |
| Lead destination credentials    | Server-side only                   | Credentials for lead form submission targets                                      |
| Attachment storage credentials  | Server-side only                   | Credentials for file upload storage                                               |
| Monitoring DSN                  | Public or server-side per provider | Error monitoring endpoint                                                         |

### Validation Rules

1. All variables validated on startup (runtime) and at build time where applicable.
2. Variables prefixed `NEXT_PUBLIC_` are confirmed to contain no secret values.
3. Variables NOT prefixed `NEXT_PUBLIC_` are confirmed to be used only in server-side code (API routes, `getServerSideProps`, server components).
4. Missing required variables cause a build failure or startup error — not a silent runtime failure.

---

## 97. Sanity Access

### Access Tiers

| Tier               | Credential              | Scope                            | Where Used                                        |
| ------------------ | ----------------------- | -------------------------------- | ------------------------------------------------- |
| Public             | No token (public API)   | Read published content only      | Browser client, public pages                      |
| Authenticated Read | `SANITY_API_READ_TOKEN` | Read published + preview content | Server-side only (API routes, server components)  |
| Write              | Studio/editor auth      | Create, update, delete content   | Sanity Studio only — never in application runtime |

### Rules

- The application public runtime does NOT require write credentials.
- Preview tokens remain server-side — never exposed to the browser.
- If `SANITY_API_READ_TOKEN` is compromised, it grants read access only — not write access.
- Token scopes reviewed during setup and rotation.

---

## 98. Webhook Security

### Revalidation Endpoint

The ISR revalidation endpoint (e.g., `/api/revalidate`) must verify ALL of:

1. **Request authentication** — Shared secret in request header/body matches `SANITY_REVALIDATE_SECRET`, OR the request is a signed webhook from Sanity with verified signature.
2. **Payload structure** — Request body matches expected schema (validated with Zod). Unexpected fields or types are rejected.
3. **Allowed scope** — The payload references an allowed dataset and project ID. Requests for other datasets/projects are rejected.
4. **Path validation** — The path to revalidate is derived from the payload, not accepted as arbitrary input. Never accept a raw `revalidatePath` value from the request without validation against known routes.

### Rejection Behavior

- Invalid requests return 401 (unauthorized) or 400 (bad request).
- Failed verification attempts are logged with request metadata (IP, timestamp, payload hash).
- No information about internal routes or valid paths is leaked in error responses.

---

## 99. Rich Text Security

### Portable Text Rendering

Portable Text renderers MUST:

1. **Whitelist allowed block types** — Only explicitly registered block types are rendered. Unknown types are silently ignored or rendered as a fallback.
2. **NOT render arbitrary HTML** — CMS content is Portable Text (structured JSON), not raw HTML. The renderer converts structured blocks to React elements. HTML injection through CMS content is not possible if the renderer does not include an `dangerouslySetInnerHTML` path.
3. **Handle marks safely** — Link marks produce `<a>` elements with safe `rel` attributes. No other mark types execute code.
4. **Sanitize custom block types** — Any custom Portable Text block type has its own validated renderer. Custom blocks do not bypass the whitelist.

### External Links

All external links rendered from CMS content include:

- `rel="noopener noreferrer"` — prevents tab-nabbing and referrer leakage.
- `target="_blank"` only when intentional (external links opening in new tab).

### Embeds

- No executable embeds (iframes, scripts) rendered from CMS content by default.
- If embed support is added in future, it requires an explicit allowlist of embed sources and a sanitized embed renderer.

---

## Document Status

**PHASE 3 — SECTION 06M: LOCKED**
