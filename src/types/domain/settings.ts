import type { ImageMediaModel } from './media';

export interface SocialLinkModel {
  platform: string;
  url: string;
}

export interface SiteSettingsModel {
  siteName: string;
  siteDescription: string;
  defaultShareImage?: ImageMediaModel;
  primaryCTA?: { label: string; href: string };
  socialLinks: SocialLinkModel[];
  approvedClientLogos: ImageMediaModel[];
  organizationName?: string;
  footerBrandStatement?: string;
}

export interface LeadFormSettingsModel {
  productTypes: string[];
  developmentStages: string[];
  needs: string[];
  timingOptions: string[];
  budgetOptions: string[];
  budgetEnabled: boolean;
  confirmationHeading?: string;
  confirmationBody?: string;
  uploadEnabled: boolean;
  scheduleCallUrl?: string;
}
