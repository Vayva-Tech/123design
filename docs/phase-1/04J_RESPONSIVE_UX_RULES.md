# 04J — Responsive UX Rules

> Responsive behavior rules across all breakpoints for every component and section in the Phase 1 scope. The system is fluid. These breakpoints are layout shift points, not fixed design widths. Content must look correct at any width between 360px and the user's viewport.

---

## Breakpoint System

| Token | Width   | Target Devices                                 |
| ----- | ------- | ---------------------------------------------- |
| xs    | 360px   | Small mobile (iPhone SE, compact Android)      |
| sm    | 390px   | Standard mobile (iPhone 14/15, modern Android) |
| md    | 768px   | Tablet portrait (iPad Mini, iPad)              |
| lg    | 1024px  | Tablet landscape, small laptop                 |
| xl    | 1280px  | Standard desktop                               |
| 2xl   | 1536px+ | Wide desktop, external monitors                |

**Fluid behavior:** The system remains fluid between breakpoints. These are not fixed design widths — they are layout shift points where grid columns, navigation patterns, and component behavior change. Content must look correct at every width from 360px to the user's maximum viewport width. No horizontal scroll at any width.

---

## 1. Navigation

### Desktop (1024px+)

- Horizontal nav in header with items: WORK, CAPABILITIES, PROCESS, INDUSTRIES, ABOUT, INSIGHTS
- Header height: 72-84px
- Transparent background on homepage hero; solid background on scroll and all interior pages
- START A PROJECT CTA button, right-aligned
- Capabilities nav item opens a mega menu (grouped dropdown with 4 groups)
- Industries nav item opens a simple dropdown
- All nav items are keyboard accessible: Tab to move between items, Enter/Space to activate, Escape to close dropdowns, arrow keys within dropdowns
- Focus indicators visible on all interactive elements

### Tablet (768px - 1023px)

- Horizontal nav, same structure as desktop
- Spacing may compact to fit within available width
- Mega menu still available for Capabilities (may simplify to single-column layout)
- Dropdown still available for Industries
- CTA button may reduce padding but remains visible and accessible
- All keyboard interactions same as desktop

### Mobile (< 768px)

- Logo (left) + hamburger menu trigger (right) + optional compact CTA
- Hamburger opens a full-height navigation panel
- Panel navigation order:
  1. Work
  2. Capabilities (expandable inline)
  3. Process
  4. Industries (expandable inline)
  5. About
  6. Insights
  7. Start a Project (primary CTA within panel)
  8. Contact
  9. FAQ
  10. Privacy
- Capabilities and Industries expand inline within the panel (no nested panels beyond one level)
- All touch targets minimum 44px height
- **Accessibility requirements:**
  - Focus trapped within panel when open
  - Escape key closes panel and returns focus to hamburger trigger
  - Body scroll locked when panel is open (no background scrolling)
  - Screen reader announces panel state (open/closed)
  - Tab order follows visual order within panel

### Reduced Motion

- No slide animations on panel open/close
- Instant open/close state changes
- No fade or scale transitions on dropdowns

---

## 2. Hero

### Desktop (1024px+)

- Full-width hero with background media (video reel or static poster fallback)
- Centered text overlay: eyebrow + headline + support text + dual CTAs
- Video autoplay muted, looped, with poster image fallback
- Text must maintain readable contrast against media (overlay gradient or solid backing as needed)
- Headline does not wrap to more than 2 lines at any desktop width

### Tablet (768px - 1023px)

- Full-width, similar layout to desktop
- Media aspect ratio may adjust to fit viewport
- Text sizing scales proportionally (step down from desktop type scale)
- CTAs remain side by side if space permits; stack if not

### Mobile (< 768px)

- Full-width, stacked text layout
- Headline first, media below or behind text as background
- CTAs stack vertically; each CTA maintains minimum 44px touch target height
- Video does not autoplay on mobile (see Video section)
- Poster image displayed as static background

### Reduced Motion

- Static poster image instead of video autoplay
- No animated text reveals
- No parallax or scroll-driven effects
- No ken-burns or zoom effects on background image

---

## 3. Portfolio Grid (Work Index)

### Desktop Large (1280px+)

- 3-column grid
- Cards have room to breathe — products need space, not cramped thumbnails
- Card aspect ratio preserves image integrity (no cropping that hides the product)
- Occasional editorial spanning card permitted if Design System supports it

### Desktop / Tablet (768px - 1279px)

- 2-column grid
- Cards maintain aspect ratio and readability
- Consistent card sizing within the grid

### Mobile (< 768px)

- 1-column stack
- Full-width cards
- No tiny 4-column thumbnails at any breakpoint — products need room to be seen

### All Breakpoints

- No horizontal scroll
- Cards maintain consistent visual weight
- Loading states reserve space to prevent layout shift
- Empty state defined (when no projects match filters or no projects are published)

---

## 4. Filters (Work Index)

### Desktop (768px+)

- Horizontal filter controls displayed inline above the project grid
- Filter by industry, service/capability
- Active filters visible as removable tags (click to remove)
- "Clear All" option visible when any filters are active
- Filter changes update the grid immediately (no "Apply" button needed on desktop)

### Mobile (< 768px)

- Compact filter button (e.g., "Filters" label with active-filter count badge)
- Tapping opens a bottom sheet or modal panel
- Panel shows:
  - Active filter count
  - "Clear All" button (when filters are active)
  - "Apply" button to confirm and close panel
- Panel is dismissible by tapping outside, swiping down, or pressing Escape
- Focus trapped within panel when open

### Accessibility (All Breakpoints)

- Keyboard accessible: Tab to navigate filter options, Space/Enter to toggle
- Screen reader announces filter state changes ("Filter applied: Medical. 3 projects shown.")
- Active filter count is announced to screen readers
- Focus returns to filter trigger after closing mobile panel

### Reduced Motion

- No animated filter transitions
- Grid updates instantly when filters change
- No animated reveal of filtered results

---

## 5. Process Timeline

### Desktop (1024px+)

- Horizontal or vertical timeline with clearly marked stage markers
- Each stage: name, description, key activities
- Visual connection between stages (line, arrow, or progressive indicator)
- Stages are scannable at a glance

### Tablet (768px - 1023px)

- May stack vertically with connecting lines
- Each stage remains clearly delineated
- Connecting lines adapt to vertical layout

### Mobile (< 768px)

- Vertical stack
- Each stage rendered as a card with name, description, and activities
- No fragile horizontal scroll — content must not require sideways scrolling at any point
- Stage progression communicated through vertical ordering and visual hierarchy, not horizontal position
- Connecting indicator is vertical (line or stepped numbering)

### Reduced Motion

- No animated stage reveals on scroll
- All stages visible immediately on page load
- No progressive disclosure animations

---

## 6. Mega Menu (Capabilities)

### Desktop (1024px+)

- Grouped dropdown triggered from Capabilities nav item
- 4 groups: DESIGN, ENGINEERING, BUILD, MANAGE
- Each item within a group: capability name + 1-line description + optional thumbnail
- "View All Capabilities" link at bottom or top of menu
- Opens on hover (with intent delay of ~150ms to prevent flicker) or on focus
- Closes on Escape, pointer leave (with intent delay), or clicking outside
- Keyboard navigable: arrow keys move between items, Enter activates, Escape closes

### Tablet (768px - 1023px)

- May simplify to single-column dropdown
- Same items, condensed layout
- Still grouped for scanability
- Same keyboard interactions as desktop

### Mobile (< 768px)

- Mega menu dropdown not applicable on mobile
- Capabilities accessible via mobile navigation panel directly
- Capabilities expand inline within the mobile panel (one level of expansion only)
- Each capability is a tappable list item with 44px minimum touch target
- Expand/collapse indicator (chevron) shows state

### Reduced Motion

- Instant open/close
- No fade, slide, or scale animations on dropdown
- No staggered item reveals

---

## 7. Case Study Gallery (Project Detail / Featured Work)

### Desktop (1024px+)

- Grid layout for project images
- Hover behavior on work cards: video preview plays (muted, short delay of 300ms+ to prevent flicker, stops on pointer leave)
- Lightbox option for full-size image viewing
- Keyboard accessible: Tab to navigate, Enter to open lightbox, Escape to close

### Tablet (768px - 1023px)

- 2-column grid for gallery images
- Hover preview behavior same as desktop if pointer input detected
- Lightbox available on tap

### Mobile (< 768px)

- Vertical stack preferred for gallery images
- No fragile horizontal drag carousels for essential content — drag carousels break on touch devices, hide content, and frustrate users
- Tap to open full-screen image view
- Video: explicit play button or strategic inline placement (no hover dependency since hover doesn't exist on touch)
- Images are pinch-to-zoom capable in full-screen view

### Reduced Motion

- No hover autoplay
- Static images only — no video preview on hover
- Cards respond to tap/click only
- No animated transitions in lightbox/gallery view

---

## 8. Forms (Start Project, Contact)

### Desktop (1024px+)

- Multi-step form centered on page with comfortable max-width
- Visible progress indicator showing current step and total steps
- Comfortable spacing between fields
- Back button available on every step
- Data preserved when navigating between steps
- Inline validation: errors appear directly below the offending field on blur or submit
- Error summary displayed at top when advancing with multiple errors
- Keyboard accessible: Tab to navigate fields, Enter to advance where appropriate

### Tablet (768px - 1023px)

- Similar to desktop layout
- Spacing may reduce proportionally
- Progress indicator remains visible
- All interactions same as desktop

### Mobile (< 768px)

- Full-width form with stacked fields
- Single step per view (no side-by-side fields)
- Progress indicator visible at top of form
- Back button on every step
- Data preserved across step navigation
- All touch targets minimum 44px height
- Inline errors appear directly below the offending field
- Error summary displayed at top when advancing with multiple errors
- Keyboard accessible: Tab, Shift+Tab, Enter to advance where appropriate
- Form data preserved if user accidentally navigates away (warn before discard)
- Auto-scroll to first error when validation fails

### Reduced Motion

- No animated step transitions
- Steps change instantly
- No animated error reveals

---

## 9. Footer

### Desktop (1024px+)

- Multi-column layout: navigation links, contact information, legal links
- Columns arranged horizontally
- Logo and tagline in prominent position
- START A PROJECT CTA visible in footer

### Tablet (768px - 1023px)

- 2-column layout or stacked depending on content volume
- Navigation and contact side by side; legal below
- CTA visible

### Mobile (< 768px)

- Single column, stacked vertically
- All links accessible with 44px touch targets
- No horizontal overflow
- CTA visible (may be positioned at top of footer for visibility)

### Reduced Motion

- No animated reveals on scroll
- Footer content visible immediately

---

## 10. Video

### Desktop (1024px+)

- Homepage hero: muted autoplay loop with poster image fallback
- Work cards: hover for video preview (muted, 300ms+ delay, stops on pointer leave)
- Project pages: strategic inline video with controls (play/pause, progress, fullscreen)
- Tap/click to play for non-autoplay video

### Tablet (768px - 1023px)

- Similar to desktop with adjusted sizing
- Autoplay behavior same as desktop on homepage hero
- Hover preview on work cards if pointer input detected
- Inline video with controls on project pages

### Mobile (< 768px)

- No autoplay — all video requires explicit tap to play
- Poster image displayed as placeholder
- Video controls visible: play/pause, progress bar, fullscreen
- Strategic inline placement on project pages where video adds meaning
- Video does not autoplay even on WiFi connections (respect user context)

### Reduced Motion

- Static poster fallback in all contexts
- No autoplay anywhere, regardless of context
- No hover preview on work cards
- Video only plays on explicit user action (tap/click)
- No animated transitions when video starts or ends

### Data-Saving Considerations

- Low-bandwidth strategies to be defined in later phase
- Consider: poster-only by default with explicit "play video" action
- Consider: reduced resolution on mobile connections
- Consider: respect `Save-Data` HTTP header when implemented
- Consider: lazy-load video elements (do not load video source until user scrolls to it or interacts with it)

---

## Cross-Cutting Rules

These rules apply at every breakpoint and to every component.

### Touch Targets

- All interactive elements: minimum 44px x 44px on mobile
- Applies to: buttons, links, form controls, filter chips, nav items, gallery thumbnails, accordion triggers
- On desktop, touch target minimum is less critical but clickable areas should still be comfortably sized

### Focus Management

- Visible focus indicators on all interactive elements at every breakpoint
- Focus order follows visual order (left-to-right, top-to-bottom)
- Modal/panel open: focus trapped within the modal/panel
- Modal/panel close: focus returns to the element that triggered the open
- Skip-to-content link available for keyboard users

### Scroll Behavior

- No horizontal scroll at any breakpoint
- Only designated scroll containers scroll (not the full page within the app shell, where applicable)
- Scroll padding prevents content from hiding behind sticky headers or footers
- Smooth scroll behavior respects `prefers-reduced-motion` (instant scroll when reduced motion is preferred)

### Typography Scaling

- Type scale adjusts at breakpoints — no arbitrary sizes outside the design system type scale
- Headlines do not overflow containers at any width
- Body text remains readable: minimum 16px equivalent on mobile
- Line length: 45-75 characters for body text at every breakpoint
- No text overflow or truncation without a tooltip or expansion mechanism

### Image and Media

- All images responsive: `max-width: 100%`, `height: auto` or `aspect-ratio` constrained
- No images with fixed pixel widths that break at small viewports
- Art direction: consider different crops at different breakpoints where critical (e.g., hero images may need a different focal point on mobile)
- Lazy-load images below the fold
- Reserve space for images to prevent layout shift (use `aspect-ratio` or explicit height)

### Loading States

- Every content area has a defined loading state
- No layout shift when content loads (reserve space with skeleton or aspect-ratio)
- Skeleton screens or subtle indicators preferred over spinners for content areas
- Loading states respect reduced motion (no animated skeletons; use static placeholder)

### Empty States

- Every content area has a defined empty state
- No broken layouts when content is absent
- Empty states communicate what will appear there, not that something is wrong
- Empty states are designed per component (e.g., Work index empty state, filtered results empty state)

### Print Styles

- Navigation, footer, CTAs, and video are hidden in print
- Content flows in a single column
- Images are constrained to page width
- Colors are adjusted for print readability
