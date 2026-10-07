export type AnalyticsEventName =
  | 'page_view'
  | 'start_project_click'
  | 'schedule_call_click'
  | 'explore_work_click'
  | 'filter_portfolio'
  | 'view_project'
  | 'view_capability'
  | 'view_industry'
  | 'view_insight'
  | 'view_process_stage'
  | 'play_project_video'
  | 'complete_project_video'
  | 'lead_form_start'
  | 'lead_form_step'
  | 'lead_form_error'
  | 'lead_form_submit'
  | 'lead_form_upload'
  | 'newsletter_signup'
  | 'search_query'
  | 'share_click'
  | 'nav_click'
  | 'outbound_link';

export interface PageViewParams {
  route: string;
  title: string;
}

export interface FilterPortfolioParams {
  industry?: string;
  capability?: string;
  stage?: string;
}

export interface ViewProjectParams {
  slug: string;
  title: string;
}

export interface ViewCapabilityParams {
  slug: string;
  title: string;
}

export interface ViewIndustryParams {
  slug: string;
  title: string;
}

export interface ViewInsightParams {
  slug: string;
  title: string;
}

export interface LeadFormStartParams {
  source_route: string;
}

export interface LeadFormStepParams {
  step: number;
  step_name: string;
}

export interface LeadFormErrorParams {
  step: number;
  field: string;
  error_type: string;
}

export interface LeadFormSubmitParams {
  product_type: string;
  has_attachments: boolean;
}

export interface LeadFormUploadParams {
  file_type: string;
  file_size_kb: number;
}

export interface NewsletterSignupParams {
  page_route: string;
}

export interface SearchQueryParams {
  query: string;
  results_count: number;
}

export interface ShareClickParams {
  platform: string;
  page_type: string;
  slug: string;
}

export interface NavClickParams {
  label: string;
  route: string;
}

export interface OutboundLinkParams {
  url: string;
  label: string;
}

export interface PlayVideoParams {
  project_slug: string;
  video_title: string;
}

export type EventParams =
  | PageViewParams
  | FilterPortfolioParams
  | ViewProjectParams
  | ViewCapabilityParams
  | ViewIndustryParams
  | ViewInsightParams
  | LeadFormStartParams
  | LeadFormStepParams
  | LeadFormErrorParams
  | LeadFormSubmitParams
  | LeadFormUploadParams
  | NewsletterSignupParams
  | SearchQueryParams
  | ShareClickParams
  | NavClickParams
  | OutboundLinkParams
  | PlayVideoParams
  | Record<string, never>;
