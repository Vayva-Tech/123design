import { IMAGE_FRAGMENT } from './fragments';

const SINGLETON_IDS = {
  siteSettings: 'siteSettings',
  leadFormSettings: 'leadFormSettings',
  seoDefaults: 'seoDefaults',
} as const;

export const siteSettingsQuery = `
*[_type == "siteSettings" && _id == "${SINGLETON_IDS.siteSettings}"][0] {
  siteName,
  siteDescription,
  "defaultShareImage": defaultShareImage {
    ${IMAGE_FRAGMENT}
  },
  primaryCTA {
    label,
    href
  },
  socialLinks[] {
    platform,
    url
  },
  "approvedClientLogos": approvedClientLogos[approvalState.status == "APPROVED"] {
    ${IMAGE_FRAGMENT}
  },
  organizationName,
  footerBrandStatement
}
`;

export const leadFormSettingsQuery = `
*[_type == "leadFormSettings" && _id == "${SINGLETON_IDS.leadFormSettings}"][0] {
  productTypes,
  developmentStages,
  needs,
  timingOptions,
  budgetOptions,
  budgetEnabled,
  confirmationHeading,
  confirmationBody,
  uploadEnabled,
  scheduleCallUrl
}
`;

export const seoDefaultsQuery = `
*[_type == "seoDefaults" && _id == "${SINGLETON_IDS.seoDefaults}"][0] {
  defaultTitle,
  titleSuffix,
  defaultDescription,
  "defaultShareImage": defaultShareImage {
    ${IMAGE_FRAGMENT}
  },
  noIndex
}
`;
