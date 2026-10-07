export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  heading: string;
  items: NavItem[];
}

export interface FooterGroup {
  heading: string;
  items: NavItem[];
}

export const primaryNavigation: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Process', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export const startProjectLink: NavItem = {
  label: 'Start a Project',
  href: '/start-project',
};

export const capabilityGroups: NavGroup[] = [
  {
    heading: 'Design',
    items: [
      { label: 'Product Development', href: '/capabilities/product-development' },
      { label: 'Industrial Design', href: '/capabilities/industrial-design' },
      { label: 'Product Animation / Visualization', href: '/capabilities/product-animation' },
    ],
  },
  {
    heading: 'Engineering',
    items: [
      { label: 'Mechanical Engineering', href: '/capabilities/mechanical-engineering' },
      { label: 'Electrical Engineering', href: '/capabilities/electrical-engineering' },
      { label: 'Testing & Validation', href: '/capabilities/testing-validation' },
    ],
  },
  {
    heading: 'Build',
    items: [
      { label: 'Prototyping', href: '/capabilities/prototyping' },
      { label: 'Tooling', href: '/capabilities/tooling' },
      { label: 'Manufacturing', href: '/capabilities/manufacturing' },
    ],
  },
  {
    heading: 'Manage',
    items: [{ label: 'Program Management', href: '/capabilities/program-management' }],
  },
];

export const viewAllCapabilities: NavItem = {
  label: 'View All Capabilities',
  href: '/capabilities',
};

export const industries: NavItem[] = [
  { label: 'Consumer Products', href: '/industries/consumer-products' },
  { label: 'Medical', href: '/industries/medical' },
  { label: 'Defense & Security', href: '/industries/defense-security' },
  { label: 'Electronics', href: '/industries/electronics' },
  { label: 'Industrial', href: '/industries/industrial' },
  { label: 'Emerging Technology', href: '/industries/emerging-technology' },
];

export const viewAllIndustries: NavItem = {
  label: 'View All Industries',
  href: '/industries',
};

export const mobileUtilityLinks: NavItem[] = [
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

export const footerGroups: FooterGroup[] = [
  {
    heading: 'Work',
    items: [{ label: 'Work', href: '/work' }],
  },
  {
    heading: 'Capabilities',
    items: [
      { label: 'Capabilities', href: '/capabilities' },
      { label: 'Product Development', href: '/capabilities/product-development' },
      { label: 'Industrial Design', href: '/capabilities/industrial-design' },
      { label: 'Mechanical Engineering', href: '/capabilities/mechanical-engineering' },
      { label: 'Electrical Engineering', href: '/capabilities/electrical-engineering' },
      { label: 'Prototyping', href: '/capabilities/prototyping' },
      { label: 'Manufacturing', href: '/capabilities/manufacturing' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'Industries', href: '/industries' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: 'Start a Project', href: '/start-project' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];
