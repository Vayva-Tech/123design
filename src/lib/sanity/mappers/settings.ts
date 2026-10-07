import type { SiteSettingsModel, LeadFormSettingsModel } from '@/types/domain';
import type { SiteSettingsRecord, LeadFormSettingsRecord } from '../validation';
import { mapImage } from './media';

export function mapSiteSettings(record: SiteSettingsRecord): SiteSettingsModel {
  return {
    siteName: record.siteName,
    siteDescription: record.siteDescription,
    defaultShareImage: record.defaultShareImage ? mapImage(record.defaultShareImage) : undefined,
    primaryCTA: record.primaryCTA,
    socialLinks: record.socialLinks,
    approvedClientLogos: record.approvedClientLogos.map(mapImage),
    organizationName: record.organizationName,
    footerBrandStatement: record.footerBrandStatement,
  };
}

export function mapLeadFormSettings(record: LeadFormSettingsRecord): LeadFormSettingsModel {
  return {
    productTypes: record.productTypes,
    developmentStages: record.developmentStages,
    needs: record.needs,
    timingOptions: record.timingOptions,
    budgetOptions: record.budgetOptions,
    budgetEnabled: record.budgetEnabled,
    confirmationHeading: record.confirmationHeading,
    confirmationBody: record.confirmationBody,
    uploadEnabled: record.uploadEnabled,
    scheduleCallUrl: record.scheduleCallUrl,
  };
}
