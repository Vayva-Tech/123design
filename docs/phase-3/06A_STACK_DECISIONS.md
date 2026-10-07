# 06A — Stack Decisions

> Phase 3 — Sections 3–4 and 149–151 of the Phase 3 directive.
> All stack decisions are locked with rejected alternatives documented.

---

## Stack Lock Summary

| Concern                | Locked Decision                                                                                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Frontend framework     | Next.js (App Router)                                                                                                                                                           |
| Language               | TypeScript (strict)                                                                                                                                                            |
| UI library             | React                                                                                                                                                                          |
| Styling                | Tailwind CSS                                                                                                                                                                   |
| Motion                 | CSS transitions/animations first; React motion library only for interactions that cannot be implemented cleanly with native CSS/Web APIs. Not a dependency of every component. |
| CMS                    | Sanity                                                                                                                                                                         |
| Hosting                | Vercel                                                                                                                                                                         |
| Primary image delivery | Sanity Image CDN for CMS-managed content. Production site media may also reference approved optimized static/CDN assets where appropriate.                                     |
| Analytics              | GA4 + optional Vercel Analytics                                                                                                                                                |
| Search                 | Google Search Console                                                                                                                                                          |
| Error monitoring       | Sentry-compatible architecture                                                                                                                                                 |
| Runtime validation     | Zod                                                                                                                                                                            |

---

## Why Next.js (over Astro and others)

Next.js (App Router) is the frontend framework for 123.design.

**Key capabilities that drive this decision:**

- **Server Components by default** — marketing and portfolio pages render on the server or at the edge, producing fast initial HTML with minimal client-side JavaScript.
- **Static generation with ISR/revalidation** — pages can be pre-rendered at build time and selectively revalidated when Sanity content changes, without rebuilding the entire site.
- **Image optimization** — built-in `next/image` handles format negotiation, responsive sizing, and lazy loading out of the box.
- **Dynamic metadata** — `generateMetadata` allows per-page SEO metadata derived from CMS data, route params, or Open Graph requirements.
- **Sitemaps and robots** — native route handlers for `sitemap.xml` and `robots.txt` generation from CMS content.
- **Route handling** — API routes and server actions provide server submission endpoints for the lead funnel and form workflows without a separate backend.
- **Preview/draft mode** — native integration with Sanity preview for content editors to review unpublished content in context.
- **Vercel deployment** — zero-config deployment platform with preview deployments per PR, production from main branch, edge network, and serverless functions.
- **Strong TypeScript ecosystem** — first-class TypeScript support with strict mode, path aliases, and type-safe routing.

**Why this project benefits from Next.js specifically:**

The site includes rich interactive filtering, a multi-step lead funnel, preview/draft workflows, server submission endpoints, dynamic metadata, revalidation, and CMS integration — while still allowing server-rendered and statically generated marketing pages. Next.js consolidates these needs within one application architecture.

**Alternatives considered:**

- **Astro** — a capable static-first framework with island architecture and strong content integration. Astro would also serve this project well for its content-heavy pages. However, Next.js was chosen because the multi-step lead funnel, server actions, dynamic revalidation, and preview workflows are native to the Next.js App Router without requiring additional frameworks or adapters. Consolidating these needs in one architecture reduces operational complexity.
- **Remix** — strong server-rendering model but less mature static generation and ISR story compared to Next.js App Router.
- **Plain React SPA** — rejected. A client-rendered SPA would ship unnecessary JavaScript for content pages, harm SEO, and delay time-to-interactive for marketing content.

This is not a dismissal of alternatives. Astro, Remix, and other frameworks are valid tools. For this project's specific combination of requirements, Next.js provides the broadest coverage in a single architecture.

---

## Why Sanity (over Payload and others)

Sanity is the CMS for 123.design.

**Key capabilities that drive this decision:**

- **Structured content** — schema-defined content types with strong typing, references, and validation. Content editors work with structured fields, not freeform HTML.
- **Managed infrastructure** — Sanity hosts the content lake, real-time collaboration, and API layer. No self-hosted database, file storage, or server maintenance required.
- **Draft/publish workflow** — built-in document versioning with draft and published states. Editors can preview unpublished content without affecting the live site.
- **References and relationships** — typed references between documents enable relational content modeling (projects linked to services, team members linked to projects).
- **Image pipeline** — Sanity Image CDN provides automatic format negotiation, responsive resizing, hotspot/crop, and aspect ratio enforcement. No separate image processing pipeline needed.
- **Preview capability** — native preview URL configuration integrates with Next.js draft mode for in-context content preview.
- **GROQ queries** — flexible query language for fetching exactly the content needed, with server-side filtering and projection.
- **Webhook-driven revalidation** — Sanity webhooks trigger Next.js ISR revalidation when content changes, keeping the site fresh without full rebuilds.
- **Schema validation** — content schemas enforce required fields, value constraints, and custom validation at the CMS level before content reaches the site.
- **Portable Text** — structured rich text format that serializes to JSON, allowing custom block types and renderers without HTML parsing.

**Alternatives considered:**

- **Payload CMS** — a valid, capable CMS with strong TypeScript foundations and self-hosted flexibility. Payload was not chosen because this project does not require self-hosted infrastructure. Payload introduces database hosting, file storage, server maintenance, and deployment configuration that this project does not need. Sanity's managed infrastructure removes these operational concerns.
- **Contentful** — viable but imposes a more rigid content model structure and less flexible querying compared to GROQ.
- **WordPress/headless WordPress** — would work but introduces PHP runtime concerns and a content model that is post-based rather than schema-first.
- **Markdown/MDX in repository** — suitable for documentation sites but insufficient for the editorial workflow, media management, and relational content modeling this project requires.

Payload remains a valid alternative for projects that need self-hosted CMS infrastructure. For 123.design, Sanity's managed approach matches the project's operational scope.

---

## Why Tailwind CSS (over standalone CSS)

Tailwind CSS is the styling approach for 123.design.

**Key capabilities that drive this decision:**

- **Design token integration** — Tailwind configuration maps directly to the locked design system tokens (`05L_DESIGN_TOKENS.json`). Colors, spacing, typography, radii, breakpoints, and shadows are defined once in `tailwind.config.ts` and consumed everywhere through utility classes.
- **Utility-first approach** — styles are composed from atomic utilities directly in JSX. This eliminates the naming overhead of BEM/SMACSS, prevents stylesheet sprawl, and keeps styles co-located with the components that use them.
- **Responsive breakpoint utilities** — `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes map to the locked breakpoint system. Responsive behavior is expressed inline without media query boilerplate.
- **Consistent spacing and typography enforcement** — the design token scale constrains values. Developers cannot accidentally introduce arbitrary spacing or font sizes because the configured scale is the path of least resistance.
- **Purge/tree-shaking for production** — unused utility classes are removed at build time. The production CSS bundle contains only the classes actually used in the codebase.
- **Dark mode and state variants** — `hover:`, `focus:`, `active:`, `disabled:`, `dark:` prefixes handle interactive and theme states without custom CSS.

**Alternatives considered:**

- **Standalone CSS/CSS Modules** — viable but introduces naming conventions, stylesheet organization decisions, and no automatic enforcement of the design token scale. Drift between design system and implementation becomes more likely.
- **CSS-in-JS (styled-components, Emotion)** — adds runtime overhead, increases bundle size, and is moving away from server-component compatibility. Not aligned with the server-first architecture.
- **Vanilla Extract / zero-runtime CSS-in-JS** — type-safe and zero-runtime, but introduces a compilation step that Tailwind already handles through its PostCSS plugin. Adds complexity without proportional benefit for this project.

---

## Why Server-First (over SPA)

**Default rule: SERVER COMPONENT until interactivity proves otherwise.**

Every page and layout starts as a React Server Component. Client Components are adopted only where a specific interactive behavior cannot be implemented without client-side JavaScript.

**Client Components are used only where necessary:**

- Mobile navigation controller (open/close/toggle)
- Mega-menu interaction (expand/collapse, keyboard navigation)
- Portfolio filters (interactive filter state, URL sync)
- Hover-video controller (play/pause on hover/intersection)
- Video player controls (play, pause, seek, mute)
- Start Project form (multi-step funnel, validation, submission)
- Filter bottom sheet (mobile filter UI, open/close/apply)
- Modal/lightbox (overlay, focus trap, escape handling)
- Accordions (expand/collapse with animation)
- Interactive lifecycle state (if required for specific content visualization)
- Analytics event bridge (client-side event dispatch to GA4)

**Hard rules:**

- Do NOT mark whole pages `"use client"`.
- Do NOT turn root layouts into client components.
- Public marketing content must be server-rendered whenever possible.
- The site must remain usable and meaningful before client-side enhancements finish loading.

**Why this matters:**

A server-first architecture means the initial HTML contains real content. Search engines index the rendered page. Users on slow connections see content immediately. The site degrades gracefully if JavaScript fails to load or execute. Client-side JavaScript is added as progressive enhancement, not as a prerequisite for basic functionality.

**Alternatives considered:**

- **Full SPA (React client-rendered)** — rejected. Ships excessive JavaScript for content pages, harms SEO, delays time-to-interactive, and creates a dependency on JavaScript for basic content visibility.
- **Islands architecture (Astro-style)** — viable pattern but consolidated within Next.js App Router's Server/Client Component boundary for this project.

---

## Why Controlled Templates (over Page Builder)

**CRITICAL: Do NOT architect generic `sections[]` with unlimited arbitrary layout combinations. Do NOT allow CMS editors to construct arbitrary webpages.**

The site has intentionally designed templates. Each template is a specific layout with specific content slots, created through the design process in Phase 2.

**CMS controls:**

- Content (text, media, links)
- Visibility (show/hide specific sections)
- Approved optional modules (pre-designed components that can be toggled)
- Order inside limited module zones where appropriate (e.g., reordering portfolio items within a grid)

**CMS does NOT control:**

- Arbitrary grid configurations
- Random background colors
- Arbitrary typography choices
- Custom padding/margin values
- Custom CSS classes
- Uncontrolled component nesting
- Free-form layout composition

**Why this constraint exists:**

A page builder that allows arbitrary section combinations produces inconsistent, untested layouts. Design quality degrades because any combination of sections can be placed next to any other. Accessibility testing becomes unbounded. Performance becomes unpredictable. The design system's intentional composition patterns are bypassed.

The templates are designed. The CMS fills them with content. The CMS does not redesign them.

**Alternatives considered:**

- **Generic section-based page builder (e.g., `sections[]` with type discriminator)** — rejected. This pattern allows editors to stack arbitrary components in arbitrary orders, producing untested layouts that bypass the design system.
- **Visual page builder (drag-and-drop)** — rejected for the same reason. The site's layouts are intentionally designed, not composed ad hoc.
- **Fully hardcoded pages (no CMS)** — rejected. Content needs to change without code deployments. The CMS manages content within templates, not the templates themselves.

---

## Why Sanity CDN for Images

Primary image delivery is through Sanity Image CDN for all CMS-managed content.

**Key capabilities:**

- **Automatic format negotiation** — serves WebP/AVIF to browsers that support them, falls back to JPEG/PNG for older browsers. No manual format conversion needed.
- **Responsive sizing** — URL parameters control width, height, and crop. `next/image` can integrate with Sanity Image CDN to generate responsive `srcset` attributes automatically.
- **Hotspot and crop** — editors define focal points and crop regions in Sanity Studio. The Image CDN applies these at any requested dimension without re-uploading.
- **Aspect ratio enforcement** — images can be requested at specific aspect ratios, ensuring visual consistency across templates.
- **Compression and quality** — automatic quality optimization with configurable compression levels.
- **CDN distribution** — images are served from Sanity's global CDN with edge caching.

**Production site media** may also reference approved optimized static/CDN assets where appropriate — for example, brand assets, fixed hero images, or other non-CMS media that benefits from separate optimization or hosting.

**Alternatives considered:**

- **Self-hosted images with manual optimization** — rejected. Requires manual format conversion, responsive variant generation, and CDN configuration. Sanity Image CDN handles this automatically.
- **Third-party image CDN (Cloudinary, imgix)** — viable but introduces an additional service and cost when Sanity Image CDN already provides the required capabilities for CMS-managed content.
- **Unoptimized image serving** — rejected. Large unoptimized images are the most common cause of poor page performance. Image optimization is non-negotiable.

---

## Why Vercel for Deployment

Vercel is the deployment platform for 123.design.

**Key capabilities:**

- **Native Next.js platform** — Vercel is the creator and primary deployment target for Next.js. App Router features (Server Components, Route Handlers, ISR, Middleware, Edge Runtime) work without additional configuration.
- **Preview deployments per PR** — every pull request gets an isolated deployment URL. This enables content editors and stakeholders to review changes before merging.
- **Production from main branch** — production deployments are triggered by merges to the main branch, with automatic rollback capability.
- **Edge network** — static assets and edge-rendered pages are served from Vercel's global edge network for low-latency delivery.
- **Serverless functions** — API routes and server actions run as serverless functions with automatic scaling. No server provisioning or capacity planning required.
- **Integrated analytics** — Vercel Analytics provides Core Web Vitals monitoring and optional web analytics.
- **Sanity webhook integration** — Sanity webhooks can trigger Vercel deploy hooks or ISR revalidation endpoints directly.

**Alternatives considered:**

- **Self-hosted (VPS/Docker)** — viable but introduces server maintenance, SSL certificate management, scaling configuration, and deployment pipeline setup that this project does not require.
- **AWS (Amplify, S3 + CloudFront + Lambda)** — more infrastructure configuration than needed. Vercel abstracts this layer while providing equivalent capabilities for a Next.js site.
- **Netlify** — capable platform but Next.js support is secondary. Vercel's native Next.js integration provides more complete feature support with less configuration.

---

## Why Zod for Validation

Zod provides runtime validation at system boundaries.

**Where Zod is used:**

- **Environment variables** — validate that required environment variables are present and correctly typed at startup.
- **External form payloads** — validate form submissions from the lead funnel before processing.
- **Important CMS query responses** — validate that critical CMS data conforms to expected shapes before rendering. Not used for every query — only where data shape is load-bearing.
- **Webhook payloads** — validate incoming Sanity webhook payloads before acting on them.
- **URL query/filter state** — validate and parse URL search parameters for portfolio filters and other query-driven UI.

**Where Zod is NOT used:**

- TypeScript handles internal static typing. Zod is not used to redundantly validate every React prop or internal function argument.
- Zod does not replace TypeScript. It complements it at boundaries where external data enters the system.

**Alternatives considered:**

- **Manual validation** — rejected. Ad hoc validation is error-prone, harder to maintain, and does not produce TypeScript type guards automatically.
- **Joi / Yup** — viable alternatives but Zod provides better TypeScript integration, smaller bundle size, and a more modern API.
- **io-ts / runtime-types** — more complex type-level validation. Zod provides sufficient capability with a simpler API.

---

## JavaScript Budget Philosophy

The site must remain usable and meaningful before client-side enhancements finish loading.

**Prefer:**

- Semantic HTML
- CSS for visual behavior
- Native `<details>` where suitable
- Native form behavior (server-side validation, progressive enhancement)
- Server-rendered data
- Progressive enhancement patterns

**Over:**

- Client-side state management for content that does not change
- JavaScript-driven visual effects that CSS can handle
- Hydration of components that display static content
- Client-side routing for pages that could be server-rendered

**Rule:** Do not ship JavaScript for visual effects that CSS can handle.

---

## Dependency Budget

**Planned essential dependency classes:**

| Class      | Examples                                       |
| ---------- | ---------------------------------------------- |
| Framework  | Next.js, React                                 |
| Language   | TypeScript                                     |
| Styling    | Tailwind CSS                                   |
| CMS        | Sanity client, Sanity image URL builder        |
| Validation | Zod                                            |
| Motion     | Limited — only if justified during Build Phase |
| Testing    | Testing library, Playwright (if E2E required)  |
| Analytics  | GA4 adapter, optional Vercel Analytics         |
| Monitoring | Sentry SDK (compatible architecture)           |

**Do NOT install:**

- Large UI component kits (Ant Design, MUI, Chakra, Mantine — see UI Library Decision below)
- Carousel frameworks for trivial layouts
- Date libraries for simple formatting (`Intl.DateTimeFormat` is sufficient)
- lodash or similar utility libraries for basic JavaScript operations
- Generic form builder packages
- Page-builder packages
- State management libraries (React state and server state are sufficient for this site)
- CSS-in-JS runtime libraries

---

## UI Library Decision

**No external component design system.**

The following are explicitly rejected as wholesale visual systems:

- MUI (Material UI)
- Chakra UI
- Ant Design
- Bootstrap UI
- Mantine
- shadcn/ui as a complete visual system

The project uses its OWN locked design system from Phase 2 (`05L_DESIGN_TOKENS.json`, `05E_COMPONENT_VISUAL_SPEC.md`). An external design system would conflict with the locked visual identity.

**Headless primitives may be evaluated later** only when they improve:

- Accessibility (correct ARIA patterns, focus management)
- Reliability (tested interaction patterns)
- Complex focus management (modals, popovers, comboboxes)

...without imposing visual design.

Examples of acceptable headless primitives (if needed):

- Radix Primitives (unstyled, accessible)
- React Aria (Adobe's headless hooks)
- Downshift (combobox/autocomplete)

These are evaluated per-component during Build Phase. They are not pre-installed by assumption.

---

## Motion Dependency Decision

**Default: CSS, IntersectionObserver, native browser APIs.**

Motion and animation are handled first with:

- CSS `transition` for state changes (hover, focus, open/close)
- CSS `@keyframes` for entry/exit animations
- CSS `animation` with `view-transition-name` for page-level transitions where supported
- `IntersectionObserver` for scroll-triggered reveals
- Native `<details>` for expand/collapse without JavaScript

**A React motion library may be added later** only if the Build Phase proves that native implementation would become brittle for:

- Complex coordinated reveal sequences
- Layout transitions (element position/size animation)
- Gesture-driven animation (drag, swipe with physics)
- State-based animation that requires interruptible transitions

**Do not pre-install a motion library by assumption.** The dependency is justified only when a specific interaction cannot be implemented cleanly with CSS and native APIs.

---

## Carousel Decision

**Do not depend on a carousel library for core portfolio navigation.**

- Vertical layouts and grids are preferred for portfolio content.
- Essential content must not be trapped behind carousel navigation.
- If a project gallery later genuinely benefits from swipe behavior, use a minimal accessible implementation — not a full carousel framework.
- Carousel content is supplementary. A user who never swipes must still see the project's key information.

**Alternatives considered:**

- **Swiper / Embla / Splide** — viable for specific gallery components if justified later. Not installed preemptively.
- **CSS scroll-snap** — sufficient for simple horizontal scrolling galleries without JavaScript dependency.

---

## Document Status

**PHASE 3 — SECTION 06A: LOCKED**

All stack decisions in this document are locked. Changes require explicit justification and documentation of impact on dependent architecture documents.

> Do not initialize any services yet. This is documentation only.
