# 05F — Motion & Interaction System

Phase 2 design system reference. All motion, timing, easing, and interaction behavior for the 123.design website. No code, no framework assumptions.

---

## 1. Motion Principles

Motion at 123.design is:

- **Precise** — every animation has a clear purpose and endpoint.
- **Mechanical** — feels engineered, not organic. Clean starts, clean stops.
- **Smooth** — no jank, no stutter, no layout thrash.
- **Controlled** — restrained amplitude, no overshoot, no bounce.

Motion is NOT:

- Springy, bouncy, elastic, or playful (unless a specific physical interaction genuinely requires it).
- Decorative. If motion doesn't aid comprehension or feedback, remove it.
- Slow. The user is waiting. Respect their time.

---

## 2. Timing Scale

| Category       | Duration  | Use                                                                                |
| -------------- | --------- | ---------------------------------------------------------------------------------- |
| MICRO          | 150–220ms | Button hover, focus rings, small state changes, toggle transitions, arrow movement |
| UI             | 220–350ms | Menus, modals, dropdowns, panels, accordion expand, bottom sheet slide, tab switch |
| SECTION REVEAL | 450–700ms | Scroll-driven content entry, staged group appearance                               |
| MEDIA REVEAL   | 600–900ms | Image fades, video poster transitions, large media entrance                        |

### Rules

- Don't exceed 1 second for standard content transitions.
- Longer durations are reserved for cinematic media moments (hero video fade, full-page transitions).
- If a transition feels slow, it probably is. Err toward the shorter end of each range.
- Staggered animations within a group: 50–80ms offset between items, not more.

---

## 3. Easing Curves

| Curve     | CSS Equivalent                 | Use                                                                  |
| --------- | ------------------------------ | -------------------------------------------------------------------- |
| Primary   | cubic-bezier(0.22, 1, 0.36, 1) | Default for most UI transitions. Fast start, smooth deceleration.    |
| Secondary | ease-out                       | Simpler alternative. Acceptable for fades, opacity-only transitions. |

### Rules

- Avoid overshooting spring curves. No elastic bounce-back.
- Avoid linear easing except for continuous/looping animations (loading spinners, progress bars).
- The primary curve should feel like a precision mechanism arriving at its position. Not a rubber band.
- Use the same easing for both enter and exit of a paired transition unless there is a specific reason to differentiate.

---

## 4. Entry Animations

### 4.1 Page Load

- Content enters with a subtle fade + vertical translate (12–24px upward).
- Stagger: header first, then hero content, then supporting elements. 50–80ms between groups.
- Total entrance sequence: under 700ms.

### 4.2 Section Reveal (Scroll-Triggered)

Permitted animations:

- Fade + translate 12–24px (upward).
- Masked media reveal (clip-path or overflow mask expanding).
- Line drawing (SVG stroke-dashoffset for rules and connectors).
- Stage progression (lifecycle nodes lighting up sequentially).

Rules:

- Small parallax permitted: maximum ~3–5% visual movement relative to scroll.
- Don't animate every paragraph. Text blocks that simply appear are fine without animation.
- Avoid reveal fatigue: if every section animates, nothing feels special.
- Trigger point: element enters viewport by ~10–15% before animation begins.
- Each element animates once. Don't re-trigger on scroll back up.

### 4.3 Component Entry

- Cards in a grid: stagger 50–80ms per card, fade + 12–16px translate.
- Modals: fade in with slight scale (0.97 to 1.0) or fade only. No dramatic zoom.
- Bottom sheet: slide up from bottom, 250–350ms, primary easing.
- Mega menu: fade + 8–12px downward translate. Quick, 200–280ms.

---

## 5. Hover Interactions

### 5.1 Buttons

- Hover: subtle background or value change. 180–220ms.
- Text CTA arrow: moves ~3–4px in the direction of action. 180–220ms.
- No scaling, no bouncing, no shadow explosion.

### 5.2 Project Cards

- Media: gentle scale 1.015–1.025 maximum. 300–400ms.
- Video preview: see Section 7 (Project Hover Video).
- Metadata: no position shift. Readability is preserved.
- Card itself: no lift, no dramatic shadow change.

### 5.3 Navigation Links

- Subtle underline appearance or opacity shift. 150–200ms.
- No background color fill on hover for nav links.

### 5.4 General Hover Rules

- If the hover state is not noticeable, it's too subtle. If it's distracting, it's too much.
- Every hover must reverse cleanly when the pointer leaves.
- Don't chain hover animations that continue after the pointer exits.

---

## 6. Navigation Transitions

### 6.1 Desktop Header

- Transparent to scrolled transition: background color fade, border appearance. 200–300ms.
- Mega menu open: fade + slight downward translate. 200–280ms.
- Mega menu close: fade out. 150–200ms (exit faster than enter).

### 6.2 Mobile Menu

- Full viewport panel: slide in from right or fade in. 250–350ms.
- Close: reverse of open. 200–280ms.
- No hamburger animation spectacle. The icon can morph simply (three lines to X) if desired, but this is not a showcase moment.

### 6.3 Page Transitions

- If page transitions are used: crossfade or fade-out then fade-in. 300–500ms total.
- Don't use sliding page transitions. The site is not a mobile app.
- Navigation should feel instant. Motion is secondary to speed.

---

## 7. Video Behavior

### 7.1 Project Hover Video Sequence

1. Card displays static poster image by default.
2. Pointer enters card area.
3. Wait ~250ms (debounce against accidental hover).
4. If video is loaded and ready: begin muted preview playback.
5. Pointer exits: stop playback, reset to poster or return to initial frame.

### 7.2 Rules

- Never start 10 videos simultaneously. Implement a concurrency limit (1–2 simultaneous previews maximum).
- Video must be preloaded or pre-fetchable. Don't start a video that requires a multi-second network fetch.
- Preview is always muted. No audio on hover.
- Preview is a short loop (3–6 seconds of content). Not the full video.
- If the user's connection is slow or hover is brief, the poster is the experience. Video preview is an enhancement, not a requirement.

### 7.3 Performance

- Only load video for cards currently in or near the viewport.
- Use intersection observation to determine which cards are eligible for hover video.
- Don't preload all project videos on page load.

---

## 8. Timeline / Process Animation

### 8.1 Stage Progression

- When a lifecycle or process timeline enters view: stages can light up sequentially.
- Timing: 150–200ms per stage, 80–120ms stagger between stages.
- Active stage: signal orange appears. Completed stages: remain visible in their resolved state.
- Line/rule connecting stages: can draw progressively (stroke-dashoffset animation), 400–600ms total.

### 8.2 "Your Process or Ours" Workflow

- Steps can appear sequentially with subtle fade + translate.
- Connecting lines draw between steps.
- Total sequence: under 700ms.

### 8.3 Rules

- Timeline animation is a one-time entrance effect. Don't loop it.
- If the user scrolls away and back, don't re-animate.

---

## 9. Loading Transitions

### 9.1 Loading Spinners

- Smooth, continuous rotation. 800–1200ms per revolution.
- Linear easing (continuous motion, not start-stop).
- Minimal visual: thin stroke, single color.

### 9.2 Skeleton Screens

- Static or very subtle pulse. No aggressive shimmer.
- If pulse: opacity oscillation 0.4 to 0.7, 1.2–1.5s cycle.
- Neutral surface colors.

### 9.3 Progress Indicators

- Smooth fill. Primary easing.
- If indeterminate: smooth back-and-forth or rotation.
- Don't use progress animations that feel slower than the actual wait.

### 9.4 Image Load

- Background placeholder color visible first.
- Image fades in when loaded: 300–500ms.
- No progressive blur-to-sharp. Just placeholder to image crossfade.

### 9.5 Video Transitions

- Poster to video: fade transition, 200–300ms.
- Video to poster (on exit): fade back, 200–300ms.
- No abrupt cuts between poster and video.

---

## 10. Reduced Motion (prefers-reduced-motion)

When the user has requested reduced motion:

| Feature                | Behavior                                    |
| ---------------------- | ------------------------------------------- |
| Scroll reveals         | Disabled. Content is visible immediately.   |
| Parallax               | Disabled. Media is static.                  |
| Hover autoplay (video) | Disabled. Poster only.                      |
| Page transitions       | Instant. No crossfade.                      |
| Menu transitions       | Instant or minimal opacity change (<100ms). |
| Timeline progression   | Disabled. All stages visible immediately.   |
| Button hover arrow     | Disabled or minimal opacity change.         |
| Card hover scale       | Disabled.                                   |

### Rules

- Reduced motion does not mean broken. All interactive states (hover, focus, active) still function. They just don't animate.
- Essential state feedback is preserved: focus rings, active indicators, loading states.
- Use poster instead of reel where appropriate.
- Test with `prefers-reduced-motion: reduce` enabled. Don't assume it works.

---

## 11. Press / Active State

- Subtle compression: scale 0.98–0.99.
- Duration: immediate on pointer down, reverse on pointer up.
- Never animate layout properties (width, height, padding, margin). Use transform only.
- Not all components need a press state. Buttons and clickable cards do. Links do not.

---

## 12. Scroll Behavior

### 12.1 Parallax

- Maximum ~3–5% visual movement relative to scroll speed.
- Applied to: hero media, selected background images.
- Not applied to: text content, cards, navigation.

### 12.2 Smooth Scroll

- Anchor links: smooth scroll behavior acceptable.
- Don't override native scroll momentum with custom scroll physics.
- Scroll-linked animations must be performant. Use transform and opacity only.

---

## 13. Interaction Feedback Summary

| Interaction        | Feedback                                    | Timing    |
| ------------------ | ------------------------------------------- | --------- |
| Button hover       | Background/value shift, optional arrow move | 180–220ms |
| Button press       | Scale 0.98–0.99                             | Immediate |
| Button focus       | Focus ring visible                          | Immediate |
| Nav link hover     | Underline or opacity shift                  | 150–200ms |
| Card hover         | Media scale 1.015–1.025                     | 300–400ms |
| Card press         | Scale 0.98–0.99 (if clickable)              | Immediate |
| Filter select      | Fill/color change                           | 150–200ms |
| Accordion toggle   | Content expand/collapse                     | 220–300ms |
| Modal open         | Backdrop fade + content entrance            | 250–350ms |
| Modal close        | Content exit + backdrop fade                | 200–280ms |
| Bottom sheet open  | Slide up from bottom                        | 250–350ms |
| Bottom sheet close | Slide down                                  | 200–280ms |
| Mega menu open     | Fade + slight translate down                | 200–280ms |
| Mega menu close    | Fade out                                    | 150–200ms |
| Page scroll reveal | Fade + 12–24px translate up                 | 450–700ms |
| Image load         | Placeholder to image fade                   | 300–500ms |
| Video hover start  | Poster to video fade                        | 200–300ms |

---

## 14. Performance Rules

- Animate only: transform, opacity. These are compositor-friendly.
- Never animate: width, height, top, left, padding, margin. These trigger layout.
- Avoid animating: box-shadow (expensive). Use opacity on a pre-rendered shadow element instead.
- Use `will-change` sparingly and only for elements about to animate. Remove after animation completes.
- Test on mid-range devices. If motion janks on a 3-year-old phone, simplify it.
- Total simultaneous animations on screen: aim for fewer than 5.

---

## 15. Principles Recap

1. Motion serves comprehension and feedback. Not decoration.
2. Faster is better than slower. 200ms feels instant. 800ms feels like waiting.
3. Mechanical precision over organic bounce. This is an engineering firm, not a toy company.
4. Every animation must reverse cleanly. No orphaned states.
5. Reduced motion is a first-class requirement. Not an edge case.
6. Performance is part of the motion system. A beautiful animation that janks is a failed animation.
