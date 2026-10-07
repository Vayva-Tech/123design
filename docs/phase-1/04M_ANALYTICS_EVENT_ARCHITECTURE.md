# 04M — Analytics Event Architecture

> Phase 1 documentation for the 123.design website rebuild.
> Full event data dictionary. No implementation.

---

## PII Restrictions (CRITICAL)

The following data must **NEVER** be sent to analytics:

| PII Type      | Examples                                    | Rule                         |
| ------------- | ------------------------------------------- | ---------------------------- |
| Email address | user@example.com                            | Never in any event parameter |
| Phone number  | +1-555-0100                                 | Never in any event parameter |
| Name          | First name, last name, full name            | Never in any event parameter |
| Message body  | Form textarea content, project descriptions | Never in any event parameter |

### PII Enforcement Rules

- Form field values must not be included in analytics payloads
- Events track behavior (started, stepped, submitted), not content
- URL parameters containing PII must be stripped before sending
- If an event specification could conceivably carry PII, the parameter is explicitly excluded with a note
- This is a hard rule with no exceptions

---

## Event Specifications

Each event specification includes: event name, trigger condition, parameters (structured list), and PII restrictions.

---

### 1. nav_click

| Field               | Value                                                  |
| ------------------- | ------------------------------------------------------ |
| **Event Name**      | `nav_click`                                            |
| **Trigger**         | Navigation link click                                  |
| **Parameters**      |                                                        |
| `link_text`         | string — the text label of the navigation link clicked |
| `destination_route` | string — the route the user navigated to               |
| **PII**             | None                                                   |

---

### 2. start_project_click

| Field          | Value                                                                                   |
| -------------- | --------------------------------------------------------------------------------------- |
| **Event Name** | `start_project_click`                                                                   |
| **Trigger**    | Any START A PROJECT button click                                                        |
| **Parameters** |                                                                                         |
| `page_route`   | string — the page route where the click occurred                                        |
| `cta_location` | `"header"` \| `"hero"` \| `"footer"` \| `"ending"` — where on the page the CTA appeared |
| **PII**        | None                                                                                    |

---

### 3. view_work_index

| Field            | Value                                                   |
| ---------------- | ------------------------------------------------------- |
| **Event Name**   | `view_work_index`                                       |
| **Trigger**      | Work index page view                                    |
| **Parameters**   |                                                         |
| `referrer_route` | string — the page or external source the user came from |
| **PII**          | None                                                    |

---

### 4. filter_portfolio

| Field          | Value                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| **Event Name** | `filter_portfolio`                                                          |
| **Trigger**    | Portfolio filter applied                                                    |
| **Parameters** |                                                                             |
| `filter_type`  | `"industry"` \| `"capability"` — which filter dimension was changed         |
| `filter_value` | string — the specific value selected (e.g., "medical", "industrial-design") |
| `result_count` | number — number of projects matching the applied filter                     |
| **PII**        | None                                                                        |

---

### 5. view_project

| Field            | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| **Event Name**   | `view_project`                                                     |
| **Trigger**      | Project detail page view                                           |
| **Parameters**   |                                                                    |
| `project_slug`   | string — the URL slug of the project                               |
| `project_status` | string — the publication status of the project (e.g., "PUBLISHED") |
| **PII**          | None                                                               |

---

### 6. play_project_video

| Field          | Value                                |
| -------------- | ------------------------------------ |
| **Event Name** | `play_project_video`                 |
| **Trigger**    | Video play on project page           |
| **Parameters** |                                      |
| `project_slug` | string — the URL slug of the project |
| **PII**        | None                                 |

---

### 7. complete_project_video

| Field          | Value                                |
| -------------- | ------------------------------------ |
| **Event Name** | `complete_project_video`             |
| **Trigger**    | Video playback completed             |
| **Parameters** |                                      |
| `project_slug` | string — the URL slug of the project |
| **PII**        | None                                 |

---

### 8. view_capability

| Field             | Value                                                                              |
| ----------------- | ---------------------------------------------------------------------------------- |
| **Event Name**    | `view_capability`                                                                  |
| **Trigger**       | Capability detail page view                                                        |
| **Parameters**    |                                                                                    |
| `capability_slug` | string — the URL slug of the capability (e.g., "industrial-design", "prototyping") |
| **PII**           | None                                                                               |

---

### 9. view_process_stage

| Field          | Value                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------- |
| **Event Name** | `view_process_stage`                                                                        |
| **Trigger**    | Process stage section scrolled into view                                                    |
| **Parameters** |                                                                                             |
| `stage_name`   | `"CON"` \| `"EVT"` \| `"DVT"` \| `"PVT"` \| `"Production"` — which process stage was viewed |
| **PII**        | None                                                                                        |

---

### 10. lead_form_start

| Field            | Value                                                        |
| ---------------- | ------------------------------------------------------------ |
| **Event Name**   | `lead_form_start`                                            |
| **Trigger**      | Step 1 of Start Project funnel interaction                   |
| **Parameters**   |                                                              |
| `referrer_route` | string — the page the user was on before entering the funnel |
| **PII**          | None                                                         |

---

### 11. lead_form_step

| Field          | Value                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------- |
| **Event Name** | `lead_form_step`                                                                                |
| **Trigger**    | Each step completion (Steps 1–8)                                                                |
| **Parameters** |                                                                                                 |
| `step_number`  | number — which step was completed (1–8)                                                         |
| `step_name`    | string — the name/label of the step (e.g., "project_type", "stage", "timeline", "budget_range") |
| **PII**        | None                                                                                            |

---

### 12. lead_form_error

| Field          | Value                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------ |
| **Event Name** | `lead_form_error`                                                                          |
| **Trigger**    | Validation error in form                                                                   |
| **Parameters** |                                                                                            |
| `step_number`  | number — which step the error occurred on                                                  |
| `field_name`   | string — the field identifier (not the field value)                                        |
| `error_type`   | string — the type of validation error (e.g., "required", "invalid_format", "out_of_range") |
| **PII**        | None — no field values are sent, only the field name and error type                        |

---

### 13. lead_form_upload

| Field          | Value                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **Event Name** | `lead_form_upload`                                                                                        |
| **Trigger**    | File attachment in form                                                                                   |
| **Parameters** |                                                                                                           |
| `step_number`  | number — which step the upload occurred on                                                                |
| `file_type`    | string — MIME type or file extension (e.g., "pdf", "image/jpeg", "step")                                  |
| **PII**        | None — no file content or file names are sent (filenames may contain PII like names or project codenames) |

---

### 14. lead_form_submit

| Field          | Value                                                                      |
| -------------- | -------------------------------------------------------------------------- |
| **Event Name** | `lead_form_submit`                                                         |
| **Trigger**    | Final form submission                                                      |
| **Parameters** |                                                                            |
| `project_type` | string — from Step 1 (e.g., "new_product", "existing_product_improvement") |
| `stage`        | string — from Step 2 (e.g., "concept", "prototyping", "production")        |
| `timing`       | string — from Step 4 (e.g., "asap", "1-3_months", "flexible")              |
| **PII**        | None — no email, name, phone, or message body is sent                      |

---

### 15. schedule_call_click

| Field          | Value                                                  |
| -------------- | ------------------------------------------------------ |
| **Event Name** | `schedule_call_click`                                  |
| **Trigger**    | Schedule Conversation interaction                      |
| **Parameters** |                                                        |
| `page_route`   | string — the page route where the interaction occurred |
| **PII**        | None                                                   |

---

### 16. outbound_link

| Field             | Value                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Event Name**    | `outbound_link`                                                                                             |
| **Trigger**       | External link click                                                                                         |
| **Parameters**    |                                                                                                             |
| `destination_url` | string — domain only, not full URL (e.g., "linkedin.com", not "https://www.linkedin.com/company/123design") |
| **PII**           | None                                                                                                        |

---

### 17. newsletter_signup

| Field          | Value                                               |
| -------------- | --------------------------------------------------- |
| **Event Name** | `newsletter_signup`                                 |
| **Trigger**    | Newsletter subscription (only if newsletter exists) |
| **Parameters** |                                                     |
| `page_route`   | string — the page route where the signup occurred   |
| **PII**        | None — no email address is sent                     |

---

## Event Summary Table

| #   | Event                    | Category          | PII Risk                                 |
| --- | ------------------------ | ----------------- | ---------------------------------------- |
| 1   | `nav_click`              | Navigation        | None                                     |
| 2   | `start_project_click`    | Conversion        | None                                     |
| 3   | `view_work_index`        | Page View         | None                                     |
| 4   | `filter_portfolio`       | Interaction       | None                                     |
| 5   | `view_project`           | Page View         | None                                     |
| 6   | `play_project_video`     | Media             | None                                     |
| 7   | `complete_project_video` | Media             | None                                     |
| 8   | `view_capability`        | Page View         | None                                     |
| 9   | `view_process_stage`     | Interaction       | None                                     |
| 10  | `lead_form_start`        | Conversion Funnel | None                                     |
| 11  | `lead_form_step`         | Conversion Funnel | None                                     |
| 12  | `lead_form_error`        | Conversion Funnel | None (field values excluded)             |
| 13  | `lead_form_upload`       | Conversion Funnel | None (filename excluded)                 |
| 14  | `lead_form_submit`       | Conversion Funnel | None (email/name/phone/message excluded) |
| 15  | `schedule_call_click`    | Conversion        | None                                     |
| 16  | `outbound_link`          | Navigation        | None (domain only, not full URL)         |
| 17  | `newsletter_signup`      | Conversion        | None (email excluded)                    |

**Total events: 17**
**All events: PII-free by design.**

---

## PII Stripping Rules

Before any event is sent to analytics:

1. **URL parameters**: Strip all query parameters that may contain PII (email, name, phone) from URLs before including them as event parameters
2. **Referrer routes**: If a referrer URL contains PII in query parameters, strip the query string and send only the path
3. **Destination URLs**: For `outbound_link`, send only the domain — never the full URL with path or query parameters
4. **Form fields**: For `lead_form_error`, send only the field identifier and error type — never the field value
5. **File uploads**: For `lead_form_upload`, send only the file type — never the filename or file content

---

## Silent Contextual Data (Not Events)

The following data is captured silently as part of form submissions or page context. These are NOT analytics events — they are contextual data that enriches lead records.

| Data           | Description                                                           | Notes                                                         |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| UTM parameters | `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | Captured silently on first visit, stored with lead submission |
| Source page    | The page where the user first entered the site                        | Captured silently, attached to lead context                   |
| Referrer       | The external URL that referred the user                               | Captured silently via `document.referrer`                     |

These are contextual data points, not events. They enrich lead records but are never pushed to analytics as standalone events.
