# 06J — Lead Form Architecture

## Lead Form Architecture Overview (section 71)

Start Project is server-handled.

Architecture:

```
Client wizard UI
  → client validation (UX only)
    → server submission endpoint/action
      → server validation
        → bot/rate checks
          → attachment checks
            → lead adapter
              → notification/CRM destination
                → success response
```

Never trust client validation.

## Lead Domain Model (section 72)

`LeadSubmission` fields:

| Field              | Type     | Required | Notes                   |
| ------------------ | -------- | -------- | ----------------------- |
| `productType`      | enum     | yes      |                         |
| `developmentStage` | enum     | yes      |                         |
| `needs[]`          | enum[]   | yes      | multi-select            |
| `timing`           | enum     | yes      |                         |
| `budget`           | enum     | no       |                         |
| `firstName`        | string   | yes      |                         |
| `lastName`         | string   | yes      |                         |
| `company`          | string   | yes      |                         |
| `email`            | string   | yes      | validated               |
| `phone`            | string   | no       | validated when supplied |
| `location`         | string   | no       |                         |
| `summary`          | string   | yes      | length-bounded          |
| `ndaRequested`     | boolean  | yes      |                         |
| `attachments[]`    | file[]   | no       | restricted types        |
| `sourceUrl`        | string   | —        | server-set              |
| `referrer`         | string   | —        | server-set              |
| `utmSource`        | string   | no       |                         |
| `utmMedium`        | string   | no       |                         |
| `utmCampaign`      | string   | no       |                         |
| `utmContent`       | string   | no       |                         |
| `utmTerm`          | string   | no       |                         |
| `createdAt`        | datetime | —        | server-set              |

## Analytics vs Lead Data (section 73)

Lead data may contain PII. Analytics must NEVER receive:

- `firstName`
- `lastName`
- `email`
- `phone`
- `company` (where identifying)
- `summary`
- `attachment` names (if identifying)
- NDA information

GA4 event `lead_form_submit` contains only non-PII dimensions:

- `product_type`
- `development_stage`
- `needs_count`
- `timing_bucket`
- `source_page_type`

## Form Validation (section 74)

Server validation rules:

- Email valid format
- Summary length bounded (min and max)
- Multi-select constrained to allowed enum values
- Phone normalized/validated reasonably when supplied
- All enum values whitelisted against known set
- Strings length-limited
- HTML/script not accepted as executable content

## Lead Attachments (section 75)

Public form should NOT accept raw CAD files at launch.

**Allowed**: PDF, JPEG, PNG, possibly DOCX (if security evaluation passes).

**NOT allowed**: EXE, JS, HTML, ZIP, STEP, STP, IGES, IGS, DWG, DXF, arbitrary binary archives.

Users can exchange CAD securely after qualification.

## File Size Policy (section 76)

- Maximum approximately 10 MB per file
- Maximum 3 files
- Both client and server must validate
- MIME and extension should both be checked
- Never trust extension alone

## Attachment Storage (section 77)

Do not store uploaded lead attachments in public static directories.

Architecture must permit:

- Private object storage
- Short-lived signed access
- Expiration/deletion policy
- Provider abstraction

Do not lock credentials into application code.

## Lead Destination Adapter (section 78)

Do not hard-wire UI to one CRM.

Define conceptual adapter: `LeadDestination` with `submitLead()`.

Possible future implementations:

- Email notification
- HubSpot
- Pipedrive
- Salesforce
- Custom CRM

## Bot Protection (section 79)

Architecture should support:

- Rate limiting
- Honeypot field
- Server-side throttling
- Turnstile-compatible challenge if needed

Do not show CAPTCHAs unnecessarily by default. Escalate protection when abuse is detected.

## Contact Form (section 80)

General Contact is separate from Start Project.

Categories:

- General
- Vendor
- Press
- Careers
- Existing Client

Do not mix these into project qualification analytics.

---

## Document Status

**PHASE 3 — SECTION 06J: LOCKED**
