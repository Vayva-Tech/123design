const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://123.design';

export function getOrganizationSchema(socialLinks?: Array<{ platform: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '123.design',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.svg`,
    },
    description:
      'Industrial design, mechanical engineering, electrical engineering, prototyping and manufacturing. From concept to production.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-590-0395',
      contactType: 'customer service',
      email: 'hello@123.design',
    },
    sameAs: socialLinks?.map((link) => link.url) ?? [],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '123.design',
    url: SITE_URL,
    description:
      'Product development studio specializing in industrial design, engineering, prototyping, and manufacturing.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/work?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: article.author
      ? {
          '@type': 'Organization',
          name: article.author,
        }
      : {
          '@type': 'Organization',
          name: '123.design',
        },
    publisher: {
      '@type': 'Organization',
      name: '123.design',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    image: article.image,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'p'],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${article.url}`,
    },
  };
}

export function getFaqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: '123.design',
      url: SITE_URL,
    },
    areaServed: service.areaServed ?? [
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Product Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Design',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mechanical Engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Engineering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prototyping',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manufacturing',
          },
        },
      ],
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '123.design',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/opengraph-image.png`,
    description:
      'Product development studio specializing in industrial design, engineering, prototyping, and manufacturing.',
    telephone: '+1-800-590-0395',
    email: 'hello@123.design',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  };
}

export function getProductSchema(product: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `${SITE_URL}${product.url}`,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Organization',
      name: '123.design',
    },
    manufacturer: {
      '@type': 'Organization',
      name: '123.design',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}${product.url}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}
