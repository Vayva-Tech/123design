# Component State Matrix

This document defines the visual states for all interactive components in the 123.design Phase 2 design system. Each component's states are documented with specific visual property changes.

---

## 1. BUTTON

### Variants

- Primary
- Secondary
- Text CTA
- Dark Context
- Danger

### States

| State                       | Background              | Border                          | Text Color            | Opacity | Transform        | Cursor      | Focus Ring                            | Other                       |
| --------------------------- | ----------------------- | ------------------------------- | --------------------- | ------- | ---------------- | ----------- | ------------------------------------- | --------------------------- |
| **Primary - Default**       | ink (#11110F)           | none                            | light (#F5F2EA)       | 1       | none             | pointer     | none                                  | -                           |
| **Primary - Hover**         | slightly lighter ink    | none                            | light (#F5F2EA)       | 1       | none             | pointer     | none                                  | transition: 180–220ms       |
| **Primary - Active**        | ink (#11110F)           | none                            | light (#F5F2EA)       | 1       | scale(0.98–0.99) | pointer     | none                                  | subtle compression          |
| **Primary - Focus**         | ink (#11110F)           | none                            | light (#F5F2EA)       | 1       | none             | pointer     | 2–3px solid focus-light, offset 2–3px | -                           |
| **Primary - Disabled**      | ink (#11110F)           | none                            | light (#F5F2EA)       | 0.4     | none             | not-allowed | none                                  | no pointer events           |
| **Primary - Loading**       | ink (#11110F)           | none                            | light (#F5F2EA)       | 1       | none             | wait        | none                                  | spinner replaces text/arrow |
| **Secondary - Default**     | transparent             | 1px solid line (#D6D3CB)        | ink (#11110F)         | 1       | none             | pointer     | none                                  | -                           |
| **Secondary - Hover**       | surface-muted (#ECE9E2) | 1px solid line-strong (#A9A69D) | ink (#11110F)         | 1       | none             | pointer     | none                                  | transition: 180–220ms       |
| **Secondary - Active**      | surface-muted (#ECE9E2) | 1px solid line-strong (#A9A69D) | ink (#11110F)         | 1       | scale(0.98–0.99) | pointer     | none                                  | -                           |
| **Secondary - Focus**       | transparent             | 1px solid line (#D6D3CB)        | ink (#11110F)         | 1       | none             | pointer     | 2–3px solid focus-light, offset 2–3px | -                           |
| **Secondary - Disabled**    | transparent             | 1px solid line (#D6D3CB)        | ink-muted (#777970)   | 0.4     | none             | not-allowed | none                                  | -                           |
| **Secondary - Loading**     | transparent             | 1px solid line (#D6D3CB)        | ink (#11110F)         | 1       | none             | wait        | none                                  | spinner replaces text       |
| **Text CTA - Default**      | transparent             | none                            | ink (#11110F)         | 1       | none             | pointer     | none                                  | underline on hover          |
| **Text CTA - Hover**        | transparent             | none                            | ink (#11110F)         | 1       | none             | pointer     | none                                  | underline appears           |
| **Text CTA - Active**       | transparent             | none                            | ink (#11110F)         | 1       | none             | pointer     | none                                  | underline visible           |
| **Text CTA - Focus**        | transparent             | none                            | ink (#11110F)         | 1       | none             | pointer     | 2–3px solid focus-light, offset 2–3px | -                           |
| **Text CTA - Disabled**     | transparent             | none                            | ink-muted (#777970)   | 0.4     | none             | not-allowed | none                                  | -                           |
| **Dark Context - Default**  | dark-ink (#F5F2EA)      | none                            | dark-canvas (#11110F) | 1       | none             | pointer     | none                                  | -                           |
| **Dark Context - Hover**    | slightly darker         | none                            | dark-canvas (#11110F) | 1       | none             | pointer     | none                                  | transition: 180–220ms       |
| **Dark Context - Active**   | dark-ink (#F5F2EA)      | none                            | dark-canvas (#11110F) | 1       | scale(0.98–0.99) | pointer     | none                                  | -                           |
| **Dark Context - Focus**    | dark-ink (#F5F2EA)      | none                            | dark-canvas (#11110F) | 1       | none             | pointer     | 2–3px solid focus-dark, offset 2–3px  | -                           |
| **Dark Context - Disabled** | dark-ink (#F5F2EA)      | none                            | dark-canvas (#11110F) | 0.4     | none             | not-allowed | none                                  | -                           |
| **Danger - Default**        | error (#B9382D)         | none                            | white (#FFFFFF)       | 1       | none             | pointer     | none                                  | -                           |
| **Danger - Hover**          | darker error            | none                            | white (#FFFFFF)       | 1       | none             | pointer     | none                                  | transition: 180–220ms       |
| **Danger - Active**         | error (#B9382D)         | none                            | white (#FFFFFF)       | 1       | scale(0.98–0.99) | pointer     | none                                  | -                           |
| **Danger - Focus**          | error (#B9382D)         | none                            | white (#FFFFFF)       | 1       | none             | pointer     | 2–3px solid error, offset 2–3px       | -                           |
| **Danger - Disabled**       | error (#B9382D)         | none                            | white (#FFFFFF)       | 0.4     | none             | not-allowed | none                                  | -                           |
| **Danger - Loading**        | error (#B9382D)         | none                            | white (#FFFFFF)       | 1       | none             | wait        | none                                  | spinner replaces text       |

---

## 2. LINK

### Variants

- Inline
- Navigation

### States

| State                | Text Color              | Text Decoration     | Border                 | Cursor  | Focus Ring                            | Other                |
| -------------------- | ----------------------- | ------------------- | ---------------------- | ------- | ------------------------------------- | -------------------- |
| **Inline - Default** | ink (#11110F)           | underline           | none                   | pointer | none                                  | -                    |
| **Inline - Hover**   | ink (#11110F)           | underline (thicker) | none                   | pointer | none                                  | -                    |
| **Inline - Focus**   | ink (#11110F)           | underline           | none                   | pointer | 2–3px solid focus-light, offset 2–3px | -                    |
| **Inline - Active**  | ink (#11110F)           | underline           | none                   | pointer | none                                  | -                    |
| **Inline - Visited** | ink-secondary (#4E504B) | underline           | none                   | pointer | none                                  | -                    |
| **Nav - Default**    | ink (#11110F)           | none                | none                   | pointer | none                                  | -                    |
| **Nav - Hover**      | ink (#11110F)           | none                | none                   | pointer | none                                  | -                    |
| **Nav - Focus**      | ink (#11110F)           | none                | none                   | pointer | 2–3px solid focus-light, offset 2–3px | -                    |
| **Nav - Active**     | ink (#11110F)           | none                | 2px solid ink (bottom) | pointer | none                                  | small underline/rule |
| **Nav - Visited**    | ink-secondary (#4E504B) | none                | none                   | pointer | none                                  | -                    |

---

## 3. NAV ITEM

### States

| State            | Background              | Text Color    | Border                 | Cursor  | Focus Ring                            | Other                     |
| ---------------- | ----------------------- | ------------- | ---------------------- | ------- | ------------------------------------- | ------------------------- |
| **Default**      | transparent             | ink (#11110F) | none                   | pointer | none                                  | -                         |
| **Hover**        | surface-muted (#ECE9E2) | ink (#11110F) | none                   | pointer | none                                  | -                         |
| **Focus**        | transparent             | ink (#11110F) | none                   | pointer | 2–3px solid focus-light, offset 2–3px | -                         |
| **Active**       | surface-muted (#ECE9E2) | ink (#11110F) | none                   | pointer | none                                  | -                         |
| **Current Page** | transparent             | ink (#11110F) | 2px solid ink (bottom) | pointer | none                                  | small underline indicator |

---

## 4. MEGA MENU ITEM

### States

| State       | Background              | Text Color    | Border | Cursor  | Focus Ring                            | Other |
| ----------- | ----------------------- | ------------- | ------ | ------- | ------------------------------------- | ----- |
| **Default** | transparent             | ink (#11110F) | none   | pointer | none                                  | -     |
| **Hover**   | surface-muted (#ECE9E2) | ink (#11110F) | none   | pointer | none                                  | -     |
| **Focus**   | transparent             | ink (#11110F) | none   | pointer | 2–3px solid focus-light, offset 2–3px | -     |
| **Active**  | surface-muted (#ECE9E2) | ink (#11110F) | none   | pointer | none                                  | -     |

---

## 5. PROJECT CARD

### States

| State       | Background        | Border                          | Media Transform    | Cursor  | Focus Ring                            | Other                                                |
| ----------- | ----------------- | ------------------------------- | ------------------ | ------- | ------------------------------------- | ---------------------------------------------------- |
| **Default** | surface (#FFFFFF) | 1px solid line (#D6D3CB)        | scale(1)           | pointer | none                                  | -                                                    |
| **Hover**   | surface (#FFFFFF) | 1px solid line-strong (#A9A69D) | scale(1.015–1.025) | pointer | none                                  | transition: 220–350ms, video preview after 200–350ms |
| **Focus**   | surface (#FFFFFF) | 1px solid line (#D6D3CB)        | scale(1)           | pointer | 2–3px solid focus-light, offset 2–3px | -                                                    |

---

## 6. FILTER CHIP

### States

| State        | Background              | Border                          | Text Color          | Cursor      | Focus Ring                            | Other        |
| ------------ | ----------------------- | ------------------------------- | ------------------- | ----------- | ------------------------------------- | ------------ |
| **Default**  | transparent             | 1px solid line (#D6D3CB)        | ink (#11110F)       | pointer     | none                                  | -            |
| **Hover**    | surface-muted (#ECE9E2) | 1px solid line-strong (#A9A69D) | ink (#11110F)       | pointer     | none                                  | -            |
| **Focus**    | transparent             | 1px solid line (#D6D3CB)        | ink (#11110F)       | pointer     | 2–3px solid focus-light, offset 2–3px | -            |
| **Selected** | ink (#11110F)           | 1px solid ink (#11110F)         | light (#F5F2EA)     | pointer     | none                                  | -            |
| **Disabled** | transparent             | 1px solid line (#D6D3CB)        | ink-muted (#777970) | not-allowed | none                                  | opacity: 0.4 |

---

## 7. FORM INPUT

### States

| State        | Background              | Border                          | Text Color          | Focus Ring                            | Other                                    |
| ------------ | ----------------------- | ------------------------------- | ------------------- | ------------------------------------- | ---------------------------------------- |
| **Default**  | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | ink (#11110F)       | none                                  | placeholder: ink-muted (#777970)         |
| **Hover**    | surface (#FFFFFF)       | 1px solid line-strong (#A9A69D) | ink (#11110F)       | none                                  | -                                        |
| **Focus**    | surface (#FFFFFF)       | 1px solid ink (#11110F)         | ink (#11110F)       | 2–3px solid focus-light, offset 2–3px | -                                        |
| **Error**    | surface (#FFFFFF)       | 1px solid error (#B9382D)       | ink (#11110F)       | none                                  | error message below input in error color |
| **Success**  | surface (#FFFFFF)       | 1px solid success (#287A53)     | ink (#11110F)       | none                                  | -                                        |
| **Disabled** | surface-muted (#ECE9E2) | 1px solid line (#D6D3CB)        | ink-muted (#777970) | none                                  | opacity: 0.6, no pointer events          |

---

## 8. TEXTAREA

### States

| State        | Background              | Border                          | Text Color          | Focus Ring                            | Other                                       |
| ------------ | ----------------------- | ------------------------------- | ------------------- | ------------------------------------- | ------------------------------------------- |
| **Default**  | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | ink (#11110F)       | none                                  | placeholder: ink-muted (#777970)            |
| **Hover**    | surface (#FFFFFF)       | 1px solid line-strong (#A9A69D) | ink (#11110F)       | none                                  | -                                           |
| **Focus**    | surface (#FFFFFF)       | 1px solid ink (#11110F)         | ink (#11110F)       | 2–3px solid focus-light, offset 2–3px | -                                           |
| **Error**    | surface (#FFFFFF)       | 1px solid error (#B9382D)       | ink (#11110F)       | none                                  | error message below textarea in error color |
| **Success**  | surface (#FFFFFF)       | 1px solid success (#287A53)     | ink (#11110F)       | none                                  | -                                           |
| **Disabled** | surface-muted (#ECE9E2) | 1px solid line (#D6D3CB)        | ink-muted (#777970) | none                                  | opacity: 0.6, no pointer events             |

---

## 9. SELECT

### States

| State        | Background              | Border                          | Text Color          | Cursor      | Focus Ring                            | Other                                     |
| ------------ | ----------------------- | ------------------------------- | ------------------- | ----------- | ------------------------------------- | ----------------------------------------- |
| **Default**  | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | ink (#11110F)       | pointer     | none                                  | dropdown closed                           |
| **Hover**    | surface (#FFFFFF)       | 1px solid line-strong (#A9A69D) | ink (#11110F)       | pointer     | none                                  | -                                         |
| **Focus**    | surface (#FFFFFF)       | 1px solid ink (#11110F)         | ink (#11110F)       | pointer     | 2–3px solid focus-light, offset 2–3px | -                                         |
| **Open**     | surface (#FFFFFF)       | 1px solid ink (#11110F)         | ink (#11110F)       | pointer     | none                                  | dropdown visible, z-index: dropdown (200) |
| **Error**    | surface (#FFFFFF)       | 1px solid error (#B9382D)       | ink (#11110F)       | pointer     | none                                  | error message below select                |
| **Disabled** | surface-muted (#ECE9E2) | 1px solid line (#D6D3CB)        | ink-muted (#777970) | not-allowed | none                                  | opacity: 0.6                              |

---

## 10. CHECKBOX

### States

| State        | Background              | Border                          | Icon              | Cursor      | Focus Ring                            | Other                      |
| ------------ | ----------------------- | ------------------------------- | ----------------- | ----------- | ------------------------------------- | -------------------------- |
| **Default**  | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | none              | pointer     | none                                  | -                          |
| **Hover**    | surface (#FFFFFF)       | 1px solid line-strong (#A9A69D) | none              | pointer     | none                                  | -                          |
| **Checked**  | ink (#11110F)           | 1px solid ink (#11110F)         | checkmark (light) | pointer     | none                                  | -                          |
| **Focus**    | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | none              | pointer     | 2–3px solid focus-light, offset 2–3px | -                          |
| **Disabled** | surface-muted (#ECE9E2) | 1px solid line (#D6D3CB)        | none              | not-allowed | none                                  | opacity: 0.4               |
| **Error**    | surface (#FFFFFF)       | 1px solid error (#B9382D)       | none              | pointer     | none                                  | error state for validation |

---

## 11. RADIO

### States

| State        | Background              | Border                          | Icon            | Cursor      | Focus Ring                            | Other                      |
| ------------ | ----------------------- | ------------------------------- | --------------- | ----------- | ------------------------------------- | -------------------------- |
| **Default**  | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | none            | pointer     | none                                  | circular shape             |
| **Hover**    | surface (#FFFFFF)       | 1px solid line-strong (#A9A69D) | none            | pointer     | none                                  | -                          |
| **Selected** | surface (#FFFFFF)       | 1px solid ink (#11110F)         | inner dot (ink) | pointer     | none                                  | -                          |
| **Focus**    | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | none            | pointer     | 2–3px solid focus-light, offset 2–3px | -                          |
| **Disabled** | surface-muted (#ECE9E2) | 1px solid line (#D6D3CB)        | none            | not-allowed | none                                  | opacity: 0.4               |
| **Error**    | surface (#FFFFFF)       | 1px solid error (#B9382D)       | none            | pointer     | none                                  | error state for validation |

---

## 12. CHOICE CARD

### States

| State        | Background              | Border                          | Cursor      | Focus Ring                            | Other                                          |
| ------------ | ----------------------- | ------------------------------- | ----------- | ------------------------------------- | ---------------------------------------------- |
| **Default**  | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | pointer     | none                                  | -                                              |
| **Hover**    | surface (#FFFFFF)       | 1px solid line-strong (#A9A69D) | pointer     | none                                  | -                                              |
| **Selected** | surface (#FFFFFF)       | 2px solid ink (#11110F)         | pointer     | none                                  | small accent indicator, slight background tint |
| **Focus**    | surface (#FFFFFF)       | 1px solid line (#D6D3CB)        | pointer     | 2–3px solid focus-light, offset 2–3px | -                                              |
| **Disabled** | surface-muted (#ECE9E2) | 1px solid line (#D6D3CB)        | not-allowed | none                                  | opacity: 0.4                                   |

---

## 13. ACCORDION

### States

| State                | Background              | Border                          | Icon                 | Cursor  | Focus Ring                            | Other                                   |
| -------------------- | ----------------------- | ------------------------------- | -------------------- | ------- | ------------------------------------- | --------------------------------------- |
| **Default (Closed)** | transparent             | 1px solid line (#D6D3CB)        | chevron-down         | pointer | none                                  | -                                       |
| **Hover**            | surface-muted (#ECE9E2) | 1px solid line-strong (#A9A69D) | chevron-down         | pointer | none                                  | -                                       |
| **Focus**            | transparent             | 1px solid line (#D6D3CB)        | chevron-down         | pointer | 2–3px solid focus-light, offset 2–3px | -                                       |
| **Open**             | transparent             | 1px solid line (#D6D3CB)        | chevron-up (rotated) | pointer | none                                  | content expanded, transition: 220–350ms |

---

## 14. MODAL

### States

| State        | Background                   | Opacity | Transform              | Other                                                  |
| ------------ | ---------------------------- | ------- | ---------------------- | ------------------------------------------------------ |
| **Entering** | overlay (rgba(17,17,15,0.5)) | 0 → 1   | scale(0.95) → scale(1) | transition: 220–350ms, easing: primary                 |
| **Open**     | overlay (rgba(17,17,15,0.5)) | 1       | scale(1)               | modal visible, z-index: modal (400), box-shadow: modal |
| **Exiting**  | overlay (rgba(17,17,15,0.5)) | 1 → 0   | scale(1) → scale(0.95) | transition: 220–350ms, easing: secondary               |
| **Closed**   | none                         | 0       | none                   | not visible, removed from DOM or display: none         |

---

## 15. BOTTOM SHEET

### States

| State        | Background                   | Transform                        | Other                                          |
| ------------ | ---------------------------- | -------------------------------- | ---------------------------------------------- |
| **Entering** | overlay (rgba(17,17,15,0.5)) | translateY(100%) → translateY(0) | transition: 350–450ms, easing: primary         |
| **Open**     | overlay (rgba(17,17,15,0.5)) | translateY(0)                    | sheet visible, z-index: modal (400)            |
| **Exiting**  | overlay (rgba(17,17,15,0.5)) | translateY(0) → translateY(100%) | transition: 220–350ms, easing: secondary       |
| **Closed**   | none                         | translateY(100%)                 | not visible, removed from DOM or display: none |

---

## 16. VIDEO

### States

| State       | Background                   | Overlay                             | Cursor  | Other                      |
| ----------- | ---------------------------- | ----------------------------------- | ------- | -------------------------- |
| **Poster**  | poster image                 | play button icon (center)           | pointer | video not started          |
| **Loading** | poster image (dimmed)        | loading spinner                     | wait    | buffering                  |
| **Playing** | video content                | none (or minimal controls on hover) | none    | autoplay or user-initiated |
| **Paused**  | video content (frozen frame) | play button icon (center)           | pointer | -                          |
| **Ended**   | last frame                   | replay button icon (center)         | pointer | -                          |

---

## 17. TOOLTIP

### States

| State       | Background    | Opacity | Transform       | Other                                                                |
| ----------- | ------------- | ------- | --------------- | -------------------------------------------------------------------- |
| **Hidden**  | ink (#11110F) | 0       | translateY(4px) | not visible, pointer-events: none                                    |
| **Visible** | ink (#11110F) | 1       | translateY(0)   | transition: 150–220ms, z-index: tooltip (500), text: light (#F5F2EA) |

---

## State Transition Guidelines

### Timing

- **Micro interactions** (hover, active): 150–220ms
- **UI transitions** (modals, sheets): 220–350ms
- **Section reveals**: 450–700ms
- **Media reveals**: 600–900ms

### Easing

- **Primary**: cubic-bezier(.22,1,.36,1) — for most transitions
- **Secondary**: ease-out — for exits and dismissals

### Focus Ring

- **Light backgrounds**: 2–3px solid focus-light (#11110F), offset 2–3px
- **Dark backgrounds**: 2–3px solid focus-dark (#F5F2EA), offset 2–3px
- **Error states**: 2–3px solid error (#B9382D), offset 2–3px

### Disabled State

- Opacity: 0.4 (or 0.6 for form inputs)
- Cursor: not-allowed
- No pointer events for buttons
- Muted text color: ink-muted (#777970)

### Loading State

- Cursor: wait
- Spinner replaces text or icon
- No pointer events (prevent double-submission)
- Maintain original background/border

---

## Accessibility Notes

- All interactive elements must have visible focus indicators
- Color contrast ratios must meet WCAG 2.2 AA (4.5:1 for text, 3:1 for large text/UI)
- Disabled states must be visually distinct and non-interactive
- Loading states must communicate progress to screen readers
- Error states must include text description, not just color
- Focus order must follow logical reading order
- Touch targets must be at least 44×44px on mobile
