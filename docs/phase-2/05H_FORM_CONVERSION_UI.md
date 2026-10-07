# 05H — Form & Conversion UI

> Design specification for all form-driven experiences on 123.design: the Start Project funnel, contact forms, newsletter signup, and any input-bearing surface. Forms must feel serious, clear, and professional — never quiz-like, game-like, or cartoonish.

---

## 1. Design Philosophy

Forms on 123.design communicate competence. A visitor who lands on a form is already considering engagement; the interface must remove friction, not add personality. Every field should feel purposeful. Every step should feel progressive. Every interaction should feel responsive.

**Guiding principles:**

- Clarity over cleverness
- Progress over presentation
- Calm over excitement
- Professional over playful

---

## 2. Input Anatomy

### 2.1 Text Input

| Property      | Value                                                                                 |
| ------------- | ------------------------------------------------------------------------------------- |
| Height        | 48–56px                                                                               |
| Background    | White (#FFFFFF) or transparent on warm surfaces                                       |
| Border        | 1px `line` token (#D6D3CB)                                                            |
| Border radius | Consistent with component system (see 05E)                                            |
| Padding       | 12–16px horizontal, vertical centered                                                 |
| Font          | Body text size (16px minimum), `ink` color (#11110F)                                  |
| Placeholder   | Muted text (`ink-muted`, #777970). Placeholder is hint text, never a label substitute |

**States:**

| State     | Treatment                                                                |
| --------- | ------------------------------------------------------------------------ |
| Default   | `line` border, white/transparent fill                                    |
| Hover     | Border darkens slightly (e.g., `ink-muted` #777970)                      |
| Focus     | Near-black border (#11110F) + visible focus ring (2–3px offset, see 05I) |
| Error     | `error` border (#B9382D) + error icon + inline message below field       |
| Disabled  | Reduced opacity, `ink-muted` text, non-interactive cursor                |
| Read-only | Subtle background shift, no border change on hover                       |

### 2.2 Textarea

| Property       | Value                           |
| -------------- | ------------------------------- |
| Minimum height | 140px                           |
| Resize         | Vertical only (user-controlled) |
| Background     | Same as text input              |
| Border         | Same as text input              |
| Padding        | 12–16px all sides               |

Textarea should feel generous. A 140px minimum invites writing; do not constrain further unless the context demands it (e.g., a brief note field).

### 2.3 Label

- **Always visible**, positioned above the field
- Font: `text-xs` to `text-sm` equivalent (12–14px), `ink-secondary` (#4E504B) or `ink` (#11110F)
- Uppercase tracking-wide labels are acceptable for section grouping, not required for every field
- Required indicator: asterisk (*) adjacent to label text, in `error` color or `ink-secondary`
- Never rely on placeholder text as the sole label. Placeholders disappear on input and fail accessibility requirements

### 2.4 Helper Text

- Positioned below the input, left-aligned
- Font: 12–14px, `ink-muted` (#777970)
- Used for format guidance ("MM/DD/YYYY"), character limits, or contextual hints
- Replaced by error message when validation fails

---

## 3. Select / Dropdown Anatomy

| Property   | Value                                                           |
| ---------- | --------------------------------------------------------------- |
| Height     | Same as text input (48–56px) — visual consistency is mandatory  |
| Background | White or transparent                                            |
| Border     | `line` token                                                    |
| Chevron    | Right-aligned, `ink-secondary` color, clear open/close rotation |
| Padding    | 12–16px horizontal                                              |

**States:**

| State           | Treatment                                              |
| --------------- | ------------------------------------------------------ |
| Closed, default | Same as input default                                  |
| Open            | Border matches focus treatment, dropdown panel visible |
| Option hover    | Subtle surface change (light warm tint)                |
| Option selected | Check indicator or strong left border accent           |
| Keyboard focus  | Focus ring visible on highlighted option               |

**Dropdown panel:**

- Max height: ~280–320px with internal scroll
- Options: minimum 44px touch target height
- Group headers: small uppercase labels, `ink-muted`
- Empty state: "No options available" in `ink-muted`
- Search/filter within dropdown for lists exceeding ~15 items

**Keyboard behavior:**

- Enter/Space: open dropdown, select highlighted option
- Arrow keys: navigate options
- Escape: close without selecting
- Type-ahead: jump to matching option

---

## 4. Choice Card Anatomy

Choice cards are the primary selection mechanism in the Start Project funnel. They replace pill clouds and radio button clusters for significant decisions.

### 4.1 Structure

```
┌──────────────────────────────────────────────────┐
│  ○  Service Design                               │
│     End-to-end service blueprinting and          │
│     customer journey mapping                     │
└──────────────────────────────────────────────────┘
```

Each choice card contains:

- **Radio/check indicator**: Left-aligned, clear selected/unselected state
- **Label**: Primary text, 16px, `ink` color (#11110F), semibold or medium weight
- **Description** (optional): One line maximum, 14px, `ink-secondary` (#4E504B)

### 4.2 Dimensions

| Property          | Value                                       |
| ----------------- | ------------------------------------------- |
| Min height        | 64px (single-line), 80px (with description) |
| Padding           | 16–20px vertical, 20–24px horizontal        |
| Border            | 1px `line` token                            |
| Border radius     | Consistent with system                      |
| Gap between cards | 8–12px                                      |

### 4.3 States

| State    | Treatment                                                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Default  | `line` border, transparent/white fill                                                                         |
| Hover    | Subtle surface change — very light warm tint or border darkens to `ink-muted`                                 |
| Selected | Strong border (1.5–2px, `ink` color #11110F or `accent` #F05A36 as small indicator only), optional light fill |
| Focus    | Focus ring (see 05I), independent of selected state                                                           |
| Disabled | Reduced opacity, non-interactive                                                                              |

**Signal orange usage:** Accent (#F05A36) may appear only as a small selected indicator (check mark, left border accent, or filled radio). It must not flood the entire card background or border for selection state — that would be too loud for a professional form context.

### 4.4 Layout

- Desktop: Cards span full content column width
- Tablet: Same, full width within column
- Mobile: Same, full width within padding

Cards stack vertically. Do not place cards side-by-side in a grid within a form context — the vertical list is clearer and more scannable.

---

## 5. Checkbox & Radio Anatomy

### 5.1 Visual Design

| Property      | Checkbox                         | Radio                                  |
| ------------- | -------------------------------- | -------------------------------------- |
| Size          | 20×20px                          | 20×20px (outer circle)                 |
| Border        | 1.5px `ink-secondary`            | 1.5px `ink-secondary`                  |
| Selected fill | `ink` (#11110F) with white check | `ink` (#11110F) outer, white inner dot |
| Border radius | 3–4px                            | 50% (circle)                           |

### 5.2 States

| State                    | Treatment                          |
| ------------------------ | ---------------------------------- |
| Unselected               | Hollow, `ink-secondary` border     |
| Selected                 | Filled per table above             |
| Indeterminate (checkbox) | Horizontal dash or square in `ink` |
| Hover                    | Border darkens to `ink`            |
| Focus                    | Focus ring around control          |
| Disabled                 | Reduced opacity, no interaction    |

### 5.3 Label

- Adjacent to control, left-aligned
- Clickable (clicking label toggles control)
- Minimum 16px font size
- Adequate spacing: 8–12px between control and label text

### 5.4 Grouping

- Group label above the set
- Vertical stacking preferred for readability
- Horizontal arrangement acceptable only for 2–3 short options with adequate spacing
- Minimum 12px gap between items

---

## 6. Validation Patterns

### 6.1 Error State

An error state must **never** depend solely on color. Every error communicates through three channels:

1. **Border treatment**: `error` color (#B9382D) on the input border
2. **Icon**: Small error icon (alert triangle or circle-x) inside or adjacent to the field, in `error` color
3. **Message**: Inline text below the field, `error` color, 12–14px, specific and actionable

**Error message guidelines:**

- Be specific: "Enter a valid email address" not "Invalid input"
- Be actionable: "Password must be at least 8 characters" not "Too short"
- Appear directly below the affected field, not in a distant summary
- Persist until the user corrects the issue

### 6.2 Validation Timing

| Trigger                | Behavior                                                              |
| ---------------------- | --------------------------------------------------------------------- |
| On blur                | Validate field after user leaves (non-destructive, first interaction) |
| On submit              | Validate all fields, scroll to first error, focus first error field   |
| On change (post-error) | Clear error as user corrects (real-time recovery)                     |
| On typing (pre-error)  | Do NOT validate while user is still typing — this is aggressive       |

### 6.3 Success State (Field-Level)

- Optional: subtle check icon in `success` color (#287A53) after valid input
- Do not animate excessively — a quiet confirmation, not a celebration
- Not required on every field; use where it aids confidence (e.g., email availability check)

### 6.4 Form-Level Error Summary

- If multiple errors exist on submit, a summary block at the top of the form lists all errors
- Each item in the summary links/scrolls to the offending field
- Format: numbered list, field label + error description
- Background: very light `error` tint or neutral with `error` left border

---

## 7. Progress Indication (Multi-Step Forms)

### 7.1 Format

The Start Project funnel uses a multi-step progress model:

```
STEP 2 OF 8
───────────────────────────────────
```

- **Text**: "STEP [N] OF [TOTAL]" — uppercase, tracking-wide, `ink-secondary` (#4E504B), 11–12px
- **Progress rule**: A thin horizontal line (2–3px) below the step indicator
  - Filled portion: `ink` (#11110F) or `accent` (#F05A36), width proportional to N/TOTAL
  - Unfilled portion: `line` (#D6D3CB)
  - Full width matches content column

### 7.2 What NOT to Use

- No numbered circles with connecting lines (too complex, too quiz-like)
- No step labels like "About You > Your Project > Budget" (creates cognitive load, locks copy into rigid sequence)
- No percentage indicators (feels mechanical)
- No animated progress transitions between steps (keep it calm)

### 7.3 Mobile Progress

On mobile (<768px), the progress indicator compresses:

- Step text remains: "STEP 2 OF 8"
- Progress rule remains, full width within padding
- Both elements are compact — total height ~24px including spacing
- Position: sticky top or immediately below header, always visible during scroll

### 7.4 Step Transitions

- Transition between steps: instant or very brief fade (100–150ms)
- No sliding animations — they imply physical movement that distracts from the task
- Back navigation: preserve previously entered data
- URL updates per step (bookmarkable, shareable state)

---

## 8. Start Project Form Specification

### 8.1 Layout

| Context             | Specification                                                           |
| ------------------- | ----------------------------------------------------------------------- |
| Desktop (>=1280px)  | Central content column, max-width 760–880px, centered on canvas         |
| Tablet (768–1279px) | Content column expands to fill available width with comfortable padding |
| Mobile (<768px)     | Full width within page padding (16–20px)                                |
| 360px               | Single column, comfortable padding (16px), no horizontal overflow       |

### 8.2 Tone

The funnel is calm, progressive, low-friction, and professional. The visitor is making a serious inquiry; the interface respects that by staying out of the way.

- No illustrations or decorative graphics within the form
- No progress celebrations between steps
- No personality-driven microcopy ("Great choice!" / "You're doing amazing!")
- Copy is direct, specific, and merchant-facing

### 8.3 Step Structure (Reference)

Each step presents one decision or one group of related fields:

1. Service selection (choice cards)
2. Industry / context (choice cards or select)
3. Project scope (choice cards + detail fields)
4. Timeline (choice cards)
5. Budget range (choice cards)
6. Contact details (text inputs)
7. Additional context (textarea, file upload if needed)
8. Review & submit

This is a reference structure. The exact steps may vary, but each step must contain one logical decision group.

### 8.4 Navigation

- **Continue / Next**: Primary button, right-aligned or full-width on mobile within form context
- **Back**: Secondary/ghost button, left-aligned
- **Submit** (final step): Primary button, distinct label ("Submit Request" not "Next")
- Disable Continue only when a required selection is genuinely missing — do not disable prematurely

---

## 9. File Upload

### 9.1 Drop Zone

| Property      | Value                               |
| ------------- | ----------------------------------- |
| Min height    | 120px                               |
| Border        | 1.5px dashed `line` token           |
| Background    | Very light warm tint or transparent |
| Border radius | Consistent with system              |

### 9.2 Content

- Upload icon (cloud-arrow or paperclip), `ink-muted`
- Primary text: "Drop files here or click to browse" (16px, `ink-secondary`)
- Secondary text: "PDF, PNG, JPG up to 10MB" (12–14px, `ink-muted`)

### 9.3 States

| State     | Treatment                                                          |
| --------- | ------------------------------------------------------------------ |
| Default   | Dashed border, muted content                                       |
| Drag over | Border becomes `ink` (#11110F), background lightens                |
| Uploading | Progress bar or percentage indicator within zone                   |
| Complete  | File name + size + remove button, `success` indicator              |
| Error     | `error` border + message ("File too large" / "Unsupported format") |

### 9.4 Error Handling

- File too large: clear message with size limit restated
- Wrong type: message with accepted types listed
- Upload failure: retry option, do not silently lose the file
- Multiple files: list each with individual status and remove option

---

## 10. Confirmation State

### 10.1 After Form Submission

The confirmation is a distinct state, not a continuation of the form:

- **Heading**: Clear confirmation ("Request Received" / "Thank You — We'll Be in Touch")
- **Body**: What happens next, with specifics ("Our team will review your project details and respond within 2 business days")
- **Reference**: If applicable, a reference number or summary of submitted information
- **Action**: Optional secondary action ("Return to Home" / "Start Another Request")

### 10.2 What NOT to Do

- No confetti animations
- No celebration illustrations
- No exclamation-heavy copy ("AMAZING! YOUR REQUEST IS IN!")
- No social media share prompts on a confirmation page

### 10.3 Delivery

- Confirmation may be inline (replacing the form) or a separate page
- If email confirmation is sent, state that explicitly
- If no email is sent, do not promise one

---

## 11. Mobile Considerations

### 11.1 Input Types

Use appropriate HTML input types to trigger correct keyboards:

| Field          | Input Type                       |
| -------------- | -------------------------------- |
| Email          | `email`                          |
| Phone          | `tel`                            |
| Budget/numbers | `number` (with care — see below) |
| URL            | `url`                            |
| Search         | `search`                         |
| All other text | `text`                           |

**Number input caveat:** Use `type="number"` only for genuinely numeric data where browser spinner controls are acceptable. For currency amounts, consider `inputmode="decimal"` on a text input for cleaner UX.

### 11.2 Keyboard Behavior

- Active field must scroll into view when keyboard opens
- Do not hide the active field behind the keyboard
- Do not resize the viewport in ways that lose the user's position
- Form should not jump or reflow disorientingly when keyboard appears

### 11.3 Mobile Form Layout

- Full width within page padding
- Fields stack vertically — no side-by-side fields on mobile
- Labels above fields (never inline)
- Buttons: full-width acceptable within form context (primary Continue/Submit)
- Back/Next navigation: Back as ghost/text button, Continue as full-width primary
- Adequate spacing between fields: 16–20px

### 11.4 Touch Targets

- All interactive elements: minimum 44px touch target (see 05I)
- Choice cards: generous tap area (full card is tappable, not just the radio indicator)
- Dropdown options: minimum 44px height per option
- Checkbox/radio: 20px visual, but 44px tap target

### 11.5 Autofill

- Support browser autofill with correct `autocomplete` attributes
- Do not break autofill with custom components
- Test: can the user autofill their name, email, phone, address?

---

## 12. Contact Form (Standalone)

For contact forms outside the Start Project funnel (footer contact, dedicated contact page):

- Single-page layout, not multi-step
- Fields: Name, Email, Subject/Topic (select or text), Message (textarea), optional file upload
- Same input anatomy and validation patterns as above
- Confirmation: inline success state or dedicated confirmation section

---

## 13. Newsletter / Inline Signup

- Minimal: email field + submit button, inline
- Label or heading above: "Stay Updated" or similar
- Input + button side-by-side on desktop, stacked on mobile
- Same validation and error patterns
- Confirmation: inline text change ("Subscribed" or check icon + message)

---

## 14. Accessibility Requirements

All form elements must comply with 05I (Accessibility Visual Spec):

- Every input has a visible, associated `<label>`
- Error messages are announced to assistive technology
- Focus order follows visual order
- Focus ring visible on all interactive elements
- Color is never the sole indicator of state
- Keyboard-only users can complete every form action
- Form sections use appropriate heading structure

---

## 15. Design Token References

| Usage                   | Token                    | Hex                |
| ----------------------- | ------------------------ | ------------------ |
| Input border            | `line`                   | #D6D3CB            |
| Input text              | `ink`                    | #11110F            |
| Label text              | `ink-secondary` or `ink` | #4E504B or #11110F |
| Placeholder             | `ink-muted`              | #777970            |
| Focus border            | `ink`                    | #11110F            |
| Error border/text       | `error`                  | #B9382D            |
| Success indicator       | `success`                | #287A53            |
| Selected accent (small) | `accent`                 | #F05A36            |
| Form background         | Canvas or white          | #F4F1EA or #FFFFFF |

---

_This document defines the visual and interaction specification for forms on 123.design. Implementation must match these specifications. Any deviation requires design review._
