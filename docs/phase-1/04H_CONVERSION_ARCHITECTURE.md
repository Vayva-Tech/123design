# 04H — Conversion Architecture

> The conversion funnel defines how visitors move from awareness to submitted inquiry. One primary conversion dominates. Secondary conversions exist where the primary feels too committed.

---

## Conversion Funnel (6 Stages)

### 1. Awareness

**Where:** Homepage hero, Insights articles, capability pages, industry pages, Google search results

**Goal:** Visitor understands what 123.design does

**Content:**

- Clear positioning ("FROM IDEA TO PRODUCTION")
- Capability overview
- Work showcase

**CTAs:**

- VIEW OUR WORK (secondary)
- Explore Capability (tertiary)

---

### 2. Proof

**Where:** Featured work, project detail pages, process page, lifecycle section

**Goal:** Visitor believes 123.design can deliver

**Content:**

- Real project evidence
- Process explanation
- Technical depth

**CTAs:**

- VIEW OUR WORK
- See Process

---

### 3. Consideration

**Where:** Capability detail pages, industry pages, case studies, about page

**Goal:** Visitor evaluates fit for their specific need

**Content:**

- Capability depth
- Industry relevance
- Philosophy
- Team credibility

**CTAs:**

- Explore Capability
- Schedule Conversation

---

### 4. Qualification

**Where:** Start Project funnel (Steps 1-5), FAQ

**Goal:** Both parties determine if there's a fit

**Content:**

- Progressive form (what building, where now, what need, timing, budget)
- FAQ answers

**CTAs:**

- Continue through funnel

---

### 5. Conversion

**Where:** Start Project funnel (Steps 6-8), Contact page

**Goal:** Visitor submits inquiry

**Content:**

- Contact information form
- Project summary
- Review/submit

**CTAs:**

- Submit (primary)
- Schedule Conversation (secondary)

---

### 6. Confirmation

**Where:** Start Project completion state

**Goal:** Visitor knows what happens next

**Content:**

- Thank you
- What happens next
- Expected response timeline (owner-approved language only)

**CTAs:**

- Schedule Conversation (secondary)

---

## CTA Placement Map

| CTA                       | Placement Locations                                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **START A PROJECT**       | Global header, homepage hero, after featured work, after lifecycle/process, capability page ending, industry page ending, case study ending, about ending, footer |
| **VIEW OUR WORK**         | Homepage hero (secondary), homepage proof section                                                                                                                 |
| **Explore Capability**    | Capability index cards, related capabilities on project pages                                                                                                     |
| **See Process**           | Homepage lifecycle section, capability pages                                                                                                                      |
| **Schedule Conversation** | Homepage final CTA (secondary), about ending, medical/defense industry pages, start project completion                                                            |
| **Contact**               | Footer utility, mobile nav utility                                                                                                                                |

---

## Conversion Competition Rules

1. **Don't insert aggressive CTA blocks after every section.** The page content earns the conversion. Over-CTAing signals desperation and breaks reading flow.

2. **One primary conversion dominates.** START A PROJECT is the dominant action. Every page should make this action reachable, but it should not appear more than once per viewport.

3. **Schedule Conversation is secondary.** Used where START A PROJECT feels too committed — medical industry, defense/security, about page, start project completion state. It is a lower-commitment alternative, not a separate conversion goal.

4. **Contact is NOT a conversion competitor.** Contact exists for non-project inquiries (existing clients, press, general questions). It should not compete with START A PROJECT on any content page.

5. **Avoid many different phrases for identical actions.** If three buttons say slightly different things but do the same thing, consolidate. Confusion kills conversion.

---

## Analytics Events for Conversion

| Event                 | Trigger                           | Notes                                                 |
| --------------------- | --------------------------------- | ----------------------------------------------------- |
| `lead_form_start`     | Step 1 interaction                | Visitor begins the Start Project funnel               |
| `lead_form_step`      | Each step completion              | Tracks progression through Steps 1-8                  |
| `lead_form_error`     | Validation error                  | Identifies friction points in the form                |
| `lead_form_upload`    | File attachment                   | Tracks attachment usage (reference images, documents) |
| `lead_form_submit`    | Final submission                  | Primary conversion event                              |
| `schedule_call_click` | Schedule Conversation interaction | Secondary conversion event                            |
| `start_project_click` | Any START A PROJECT click         | Tracks CTA reach regardless of funnel completion      |

---

## PII Restrictions

**Never send to analytics:**

- Email addresses
- Phone numbers
- Names
- Message body content

Form field values must not be included in analytics payloads. Events track behavior (started, stepped, submitted), not content.

---

## Funnel-to-Page Mapping

| Funnel Stage  | Page/Route                                                                    | Primary Action                            |
| ------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| Awareness     | `/`, `/capabilities/*`, `/industries/*`, `/insights/*`                        | Explore content                           |
| Proof         | `/work/*`, `/process`                                                         | VIEW OUR WORK, See Process                |
| Consideration | `/capabilities/[detail]`, `/industries/[detail]`, `/work/[project]`, `/about` | Explore Capability, Schedule Conversation |
| Qualification | `/start-project` (Steps 1-5)                                                  | Continue through funnel                   |
| Conversion    | `/start-project` (Steps 6-8), `/contact`                                      | Submit inquiry                            |
| Confirmation  | `/start-project` (completion)                                                 | Schedule Conversation (secondary)         |

---

## Conversion Health Indicators

Track these to assess funnel health:

- **Start rate:** Percentage of visitors who begin the Start Project funnel
- **Step completion rate:** Percentage who complete each step (identify drop-off)
- **Submit rate:** Percentage who reach final submission
- **Error rate:** Frequency of validation errors (indicates form friction)
- **Upload rate:** Percentage who attach files (indicates engagement depth)
- **Schedule rate:** Schedule Conversation clicks relative to page views
