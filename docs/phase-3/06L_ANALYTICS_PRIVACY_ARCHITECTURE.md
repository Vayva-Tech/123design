# 06L — Analytics & Privacy Architecture

> PHASE 3 — SECTION 06L: LOCKED

---

## 90. Analytics Architecture

### Single Internal Abstraction

All analytics flow through one internal function: `trackEvent()`.

Application components MUST NOT call `gtag`, `dataLayer.push`, or any provider-specific API directly. This abstraction ensures:

- A single point of change if the analytics provider changes.
- Centralized consent enforcement — no event fires unless consent state permits.
- Centralized PII filtering — no PII reaches the analytics layer regardless of caller intent.
- Typed event definitions that prevent arbitrary string event names and untyped parameters.

### Implementation Contract

```
trackEvent(eventName: AnalyticsEventName, params?: EventParams[eventName]): void
```

- `AnalyticsEventName` is a union of all defined event name literals.
- `EventParams` is a mapped type that resolves allowed parameters per event name.
- The function checks consent state before dispatching.
- The function strips or rejects any parameter not in the allowed set for that event.
- In development, invalid event names or disallowed parameters produce a console warning.

### Provider Adapter

Behind `trackEvent()`, a provider adapter translates typed events into the provider's native format (e.g., `gtag('event', name, params)`). The adapter is the only module that imports the provider SDK.

---

## 91. Defined Events

Seventeen events defined in Phase 1. Each event has a strict contract.

### Event Contract Table

| #   | Event Name               | Trigger Condition                                     | Allowed Parameters                             | Required Parameters           |                                                                                          PII Policy |
| --- | ------------------------ | ----------------------------------------------------- | ---------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------: |
| 1   | `nav_click`              | User clicks a primary navigation link                 | `link_label`, `destination`                    | `link_label`                  |                                                       No PII. `link_label` is the visible nav text. |
| 2   | `start_project_click`    | User clicks "Start a Project" or equivalent CTA       | `location`                                     | `location`                    |                                      No PII. `location` is the page/section where the CTA appeared. |
| 3   | `view_work_index`        | User navigates to the work/portfolio index page       | `source`                                       | none                          |                                   No PII. `source` is the referring page or navigation entry point. |
| 4   | `filter_portfolio`       | User applies a filter on the portfolio index          | `filter_type`, `filter_value`, `result_count`  | `filter_type`, `filter_value` |                                No PII. Filter values are capability/industry labels, not user data. |
| 5   | `view_project`           | User opens a project detail page                      | `project_slug`, `industry`, `capability_count` | `project_slug`                |                         No PII. `project_slug` is a public content identifier. No internal CMS IDs. |
| 6   | `play_project_video`     | User initiates video playback on a project page       | `project_slug`, `video_source`                 | `project_slug`                |                                                                                             No PII. |
| 7   | `complete_project_video` | User watches a project video to completion            | `project_slug`, `duration_seconds`             | `project_slug`                |                                                                                             No PII. |
| 8   | `view_capability`        | User views a capability/service detail section        | `capability_slug`                              | `capability_slug`             |                                                                                             No PII. |
| 9   | `view_process_stage`     | User views a process stage detail                     | `stage_slug`, `stage_index`                    | `stage_slug`                  |                                                                                             No PII. |
| 10  | `lead_form_start`        | User focuses or begins interacting with the lead form | `form_location`                                | `form_location`               |                                                                                             No PII. |
| 11  | `lead_form_step`         | User completes a step within a multi-step lead form   | `step_name`, `step_index`                      | `step_name`                   |                                                                     No PII. Never log field values. |
| 12  | `lead_form_error`        | A validation error occurs on the lead form            | `field_name`, `error_type`                     | `field_name`, `error_type`    |                         No PII. `field_name` is the form field identifier, not the submitted value. |
| 13  | `lead_form_upload`       | User uploads an attachment via the lead form          | `file_type`, `file_size_range`                 | `file_type`                   | No PII. Never log original filename. `file_size_range` is a bucket (e.g., `<1MB`, `1-5MB`, `>5MB`). |
| 14  | `lead_form_submit`       | User successfully submits the lead form               | `form_type`, `has_attachment`                  | `form_type`                   |                                                                No PII. Never log form field values. |
| 15  | `schedule_call_click`    | User clicks a "Schedule a Call" link or button        | `location`                                     | `location`                    |                                                                                             No PII. |
| 16  | `outbound_link`          | User clicks a link that navigates away from the site  | `link_url`, `link_label`                       | `link_url`                    |               No PII. Strip query parameters that may contain tokens or session IDs before logging. |

### Events Not Included

The following are intentionally absent. If needed in future phases, they require a new contract definition:

- Page view / route change — handled by the analytics provider's automatic page view tracking or a dedicated `page_view` event outside this set.
- Scroll depth — not in Phase 1 scope.
- Time on page — derived by the analytics provider, not sent as a custom event.

---

## 92. Consent & Privacy

### Consent Architecture

Analytics MUST be consent-aware. The architecture supports:

1. **Consent state check** — `trackEvent()` reads the current consent state before dispatching any event.
2. **Non-essential analytics can be disabled** — When consent is denied or withdrawn, non-essential analytics events are suppressed entirely. They are not queued for later transmission.
3. **Essential site functionality is never blocked** — Disabling analytics does not affect page rendering, navigation, form submission, video playback, or any other site feature.

### Consent Categories

| Category                                          | Essential? | Behavior When Denied                                                        |
| ------------------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| Site functionality (rendering, navigation, forms) | Yes        | N/A — cannot be disabled                                                    |
| Analytics (all 17 events above)                   | No         | All events suppressed; provider SDK not loaded or loaded in restricted mode |

### Implementation Notes

- Consent state is determined by the applicable legal/configuration requirement (e.g., cookie banner, configuration flag, regional requirement).
- When analytics consent is denied, the `trackEvent()` function returns immediately without dispatching.
- No analytics script is loaded in the initial page weight when consent has not been given (lazy-load after consent, or do not load at all).

---

## 93. PII Separation Rules

### Absolute Prohibitions

Analytics events MUST NEVER contain:

| Prohibited Data                                       | Reason                                                                           |
| ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| `firstName`                                           | Direct PII                                                                       |
| `lastName`                                            | Direct PII                                                                       |
| `email`                                               | Direct PII                                                                       |
| `phone`                                               | Direct PII                                                                       |
| `company` (where identifying)                         | Indirect PII — company names can identify individuals                            |
| `summary` / `message` / `description` (user-provided) | Free-text fields may contain any PII                                             |
| `attachment filename` (original)                      | Filenames may contain names, project codenames, or other identifying information |
| NDA-related information                               | Legal confidentiality implications                                               |
| CMS internal IDs (where avoidable)                    | Internal identifiers should not leak to external analytics                       |

### What Analytics Receives

GA4 events contain only non-PII dimensions:

- Public content identifiers (slugs, labels)
- UI interaction metadata (button labels, page sections, filter values)
- Aggregate metrics (result counts, duration buckets, file size buckets)
- Navigation context (source page, location labels)

### Enforcement

- The `trackEvent()` function validates parameters against the allowed set for each event.
- Parameters not in the allowed set are stripped before dispatch.
- In development mode, stripped parameters produce a console warning.
- Code review must verify that no form field values, user-provided text, or identifying information reaches any `trackEvent()` call.

---

## Document Status

**PHASE 3 — SECTION 06L: LOCKED**
