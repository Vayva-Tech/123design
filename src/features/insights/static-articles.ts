import type { ArticleCardModel, ArticlePageModel } from '@/types/domain';

export const STATIC_ARTICLES: ArticleCardModel[] = [
  {
    slug: 'designing-for-manufacturability-dbll',
    title: 'Designing for Manufacturability: Lessons from the DBLL Dumbbell',
    excerpt:
      'Adjustable dumbbells seem simple until you try to manufacture them at scale. Here are the engineering decisions that made DBLL production-ready.',
    publicationDate: '2024-11-15',
    category: 'Engineering',
    author: {
      name: 'Marcus Webb',
      title: 'Lead Mechanical Engineer',
      credentials: 'PE, MS Mechanical Engineering, MIT',
      bio: 'Marcus leads mechanical engineering at 123.design with 12 years of experience in consumer product manufacturing. He specializes in design-for-manufacturability and has brought 40+ products from concept to mass production.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(5).jpg',
      alt: 'DBLL Adjustable Dumbbell — exploded view showing internal mechanism',
      decorative: false,
      width: 1600,
      height: 900,
    },
  },
  {
    slug: 'material-selection-rack-bath-tray',
    title: 'Material Selection in Wet Environments: The RACK Bath Tray',
    excerpt:
      'Choosing materials for products that live in bathrooms means balancing aesthetics, durability, and mold resistance. Our process for RACK.',
    publicationDate: '2024-10-28',
    category: 'Design',
    author: {
      name: 'Sarah Lin',
      title: 'Senior Industrial Designer',
      credentials: 'MFA Industrial Design, RISD',
      bio: 'Sarah specializes in material exploration and sustainable design. Her work on wet-environment products has been recognized by IDSA and Red Dot.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
      alt: 'RACK Bath Tray on white background',
      decorative: false,
      width: 1280,
      height: 854,
    },
  },
  {
    slug: 'prototype-to-production-spoony',
    title: 'From Prototype to Production: Shipping SPOONY',
    excerpt:
      'The journey from first prototype to mass production is where most hardware startups fail. Here is how we navigated it for SPOONY.',
    publicationDate: '2024-09-12',
    category: 'Process',
    author: {
      name: 'David Okafor',
      title: 'Manufacturing Engineer',
      credentials: 'MS Manufacturing Systems, Stanford',
      bio: 'David bridges the gap between design intent and factory floor reality. He has managed production launches across injection molding, CNC, and sheet metal for clients in 8 countries.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/spoony-hero.jpg',
      alt: 'SPOONY Version 2 Prototype — product in production environment',
      decorative: false,
      width: 1600,
      height: 900,
      caption: 'Version 2 Prototype — Production Environment',
    },
  },
  {
    slug: 'hidden-complexity-tamarack',
    title: 'The Hidden Complexity of Simple Products: Tamarack',
    excerpt:
      'Tamarack looks minimal. The engineering underneath is anything but. A deep dive into the decisions that make simplicity possible.',
    publicationDate: '2024-08-05',
    category: 'Engineering',
    author: {
      name: 'James Chen',
      title: 'Principal Engineer',
      credentials: 'PhD Mechanical Engineering, Caltech',
      bio: 'James leads complex engineering projects at 123.design. His expertise in electromechanical integration has produced patents in adjustable mechanisms and precision consumer devices.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/tamarack-hero.jpg',
      alt: 'Tamarack Version 2 Prototype — product detail shot',
      decorative: false,
      width: 1600,
      height: 900,
      caption: 'Version 2 Prototype — Product Detail',
    },
  },
  {
    slug: 'physical-vs-digital-design-thinking',
    title: 'Why Physical Products Need Different Design Thinking',
    excerpt:
      'Digital products can iterate in hours. Physical products take months. How this constraint changes everything about the design process.',
    publicationDate: '2024-07-20',
    category: 'Process',
    author: {
      name: 'Elena Vasquez',
      title: 'Design Director',
      credentials: 'MDes, ArtCenter College of Design',
      bio: 'Elena directs the design practice at 123.design, leading cross-disciplinary teams across industrial design, engineering, and manufacturing. She has 15 years of experience in physical product development.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/design-process-hero.jpg',
      alt: 'Design Process Version 2 Prototype — workspace with prototypes',
      decorative: false,
      width: 1600,
      height: 900,
      caption: 'Version 2 Prototype — Design Process',
    },
  },
];

export const STATIC_ARTICLE_PAGES: Record<string, ArticlePageModel> = {
  'designing-for-manufacturability-dbll': {
    slug: 'designing-for-manufacturability-dbll',
    title: 'Designing for Manufacturability: Lessons from the DBLL Dumbbell',
    excerpt:
      'Adjustable dumbbells seem simple until you try to manufacture them at scale. Here are the engineering decisions that made DBLL production-ready.',
    publicationDate: '2024-11-15',
    category: 'Engineering',
    author: {
      name: 'Marcus Webb',
      title: 'Lead Mechanical Engineer',
      credentials: 'PE, MS Mechanical Engineering, MIT',
      bio: 'Marcus leads mechanical engineering at 123.design with 12 years of experience in consumer product manufacturing. He specializes in design-for-manufacturability and has brought 40+ products from concept to mass production.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(5).jpg',
      alt: 'DBLL Adjustable Dumbbell — exploded view showing internal mechanism',
      decorative: false,
      width: 1600,
      height: 900,
    },
    body: [
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'The DBLL adjustable dumbbell started as a straightforward brief: design a space-efficient strength training tool for home gyms. What we discovered during engineering was that "adjustable" is doing a lot of heavy lifting.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'The Weight Selection Problem',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'Users need to change weight quickly between sets. Traditional pin-based systems are reliable but slow. Dial-based systems are fast but introduce mechanical complexity. We tested seven mechanisms before settling on a hybrid approach that uses a rotating collar with positive detents.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: 'The detent system had to survive 10,000+ adjustment cycles without losing tactile feedback. We specified hardened steel inserts in the collar mechanism, which added cost but eliminated the primary failure mode we observed in competitor products.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p5',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'Manufacturing Constraints',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p6',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's6',
            text: 'The weight plates use cast iron with a powder coat finish. Early prototypes used rubber coating for noise reduction, but the bonding agent failed under repeated impact. We switched to a mechanical interlock system where the rubber sleeve is compression-fitted rather than adhesively bonded.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'Tooling for the handle grip required a 4-slide mold to achieve the ergonomic contour without visible parting lines. This added 40% to the mold cost but was non-negotiable for the premium positioning.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's8',
            text: 'The Lesson',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'Manufacturability is not a phase you add at the end. It is a constraint you design with from day one. Every aesthetic decision on DBLL was evaluated against its manufacturing impact. The result is a product that looks simple because the complexity was resolved in engineering, not hidden from the user.',
            marks: [],
          },
        ],
      },
    ],
    relatedCapabilities: [],
    relatedProjects: [],
  },
  'material-selection-rack-bath-tray': {
    slug: 'material-selection-rack-bath-tray',
    title: 'Material Selection in Wet Environments: The RACK Bath Tray',
    excerpt:
      'Choosing materials for products that live in bathrooms means balancing aesthetics, durability, and mold resistance. Our process for RACK.',
    publicationDate: '2024-10-28',
    category: 'Design',
    author: {
      name: 'Sarah Lin',
      title: 'Senior Industrial Designer',
      credentials: 'MFA Industrial Design, RISD',
      bio: 'Sarah specializes in material exploration and sustainable design. Her work on wet-environment products has been recognized by IDSA and Red Dot.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
      alt: 'RACK Bath Tray on white background',
      decorative: false,
      width: 1280,
      height: 854,
    },
    body: [
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'Bathrooms are hostile environments for materials. Constant humidity, temperature swings, direct water contact, and cleaning chemicals create a perfect storm for material degradation. RACK needed to survive all of this while maintaining a premium aesthetic.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'The Wood Problem',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'Teak is the traditional choice for wet environments because of its natural oils. But teak requires regular oiling to maintain its color, and the grain variation makes consistent finishing difficult at scale. We tested teak, bamboo, and ash with three different sealant systems.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: 'The winner was white ash with a two-part polyurethane system. The ash provides consistent grain patterns for manufacturing, and the polyurethane creates a waterproof barrier that survives daily shower exposure without yellowing.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p5',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'Metal Components',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p6',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's6',
            text: 'The adjustable arms use 304 stainless steel with a brushed finish. We avoided 316 marine-grade because the cost premium was not justified for indoor use, but we specified passivation treatment to eliminate any risk of surface rust from mineral deposits in hard water.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'The rubber feet are silicone rather than natural rubber. Silicone does not degrade in humid environments and will not leave marks on porcelain or acrylic tub surfaces.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's8',
            text: 'Testing Protocol',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'We built a test rig that simulates 5 years of daily use in 6 weeks: 8-hour humidity cycles at 95% RH, direct water spray for 30 minutes daily, and weekly application of common bathroom cleaners. Materials that showed degradation were eliminated regardless of aesthetic appeal.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p10',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's10',
            text: 'The result is a product that maintains its appearance in real-world conditions. Material selection is not about finding the perfect material — it is about finding the right material for the specific environment and use case.',
            marks: [],
          },
        ],
      },
    ],
    relatedCapabilities: [],
    relatedProjects: [],
  },
  'prototype-to-production-spoony': {
    slug: 'prototype-to-production-spoony',
    title: 'From Prototype to Production: Shipping SPOONY',
    excerpt:
      'The journey from first prototype to mass production is where most hardware startups fail. Here is how we navigated it for SPOONY.',
    publicationDate: '2024-09-12',
    category: 'Process',
    author: {
      name: 'David Okafor',
      title: 'Manufacturing Engineer',
      credentials: 'MS Manufacturing Systems, Stanford',
      bio: 'David bridges the gap between design intent and factory floor reality. He has managed production launches across injection molding, CNC, and sheet metal for clients in 8 countries.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/spoony-hero.jpg',
      alt: 'SPOONY Version 2 Prototype — product in production environment',
      decorative: false,
      width: 1600,
      height: 900,
      caption: 'Version 2 Prototype — Production Environment',
    },
    body: [
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'SPOONY started as a kitchen tool designed to solve a specific problem: keeping cooking utensils organized and accessible during meal prep. The prototype worked perfectly. Production nearly did not happen.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'The Prototype Trap',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'Our first prototype was 3D printed in resin. It looked great and functioned perfectly in kitchen tests. But resin is not food-safe, and the layer lines harbor bacteria. We needed to find a manufacturing process that could replicate the prototype geometry in food-safe materials.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: 'Injection molding was the obvious choice for volume, but the tooling cost required a minimum order quantity that exceeded our initial demand forecast. We were stuck between a prototype that could not be sold and production that could not be justified.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p5',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'The Bridge Solution',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p6',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's6',
            text: 'We found a manufacturer offering aluminum tooling with a 5,000-shot lifespan. The per-unit cost was 40% higher than steel tooling, but the upfront investment was 80% lower. This let us validate market demand before committing to production-grade tooling.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'The material is glass-filled nylon with FDA-approved food contact certification. The glass fiber adds rigidity without the weight penalty of metal inserts. Color is achieved through masterbatch compounding rather than post-mold painting, which eliminates a failure point.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's8',
            text: 'Quality Control',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'The first production run had a 12% defect rate — mostly sink marks near thick sections and occasional short shots in the thin wall areas. We adjusted the gate location and added cooling channels to the mold. The second run dropped to 2% defects, which is acceptable for this price point.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p10',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's10',
            text: 'Shipping SPOONY taught us that production is not a destination — it is a process of continuous refinement. The product that ships is never identical to the prototype, but it should solve the same problem with the same elegance.',
            marks: [],
          },
        ],
      },
    ],
    relatedCapabilities: [],
    relatedProjects: [],
  },
  'hidden-complexity-tamarack': {
    slug: 'hidden-complexity-tamarack',
    title: 'The Hidden Complexity of Simple Products: Tamarack',
    excerpt:
      'Tamarack looks minimal. The engineering underneath is anything but. A deep dive into the decisions that make simplicity possible.',
    publicationDate: '2024-08-05',
    category: 'Engineering',
    author: {
      name: 'James Chen',
      title: 'Principal Engineer',
      credentials: 'PhD Mechanical Engineering, Caltech',
      bio: 'James leads complex engineering projects at 123.design. His expertise in electromechanical integration has produced patents in adjustable mechanisms and precision consumer devices.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/tamarack-hero.jpg',
      alt: 'Tamarack Version 2 Prototype — product detail shot',
      decorative: false,
      width: 1600,
      height: 900,
      caption: 'Version 2 Prototype — Product Detail',
    },
    body: [
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'Tamarack is a desk lamp. It has one button, one arm, and one light source. Users describe it as "simple" and "intuitive." Those adjectives are the result of 18 months of engineering iteration.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'The Single Control Problem',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'One button must control on/off, brightness, and color temperature. We evaluated capacitive touch, rotary encoder, and force-sensitive resistor inputs. The rotary encoder won because it provides tactile feedback without requiring users to look at the control.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: 'The interaction model: press for on/off, rotate for brightness, press-and-hold for color temperature. This mapping emerged from user testing with 40 participants. The alternative mappings all had higher error rates in blind operation tests.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p5',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'The Arm Mechanism',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p6',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's6',
            text: 'The arm must hold position at any angle without drifting, but still be adjustable with one hand. We tested friction hinges, gas springs, and counterbalance mechanisms. The counterbalance system using a torsion spring and cable drive provides the smoothest operation, but the packaging constraints forced us to a friction hinge with a cam-locking mechanism.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'The hinge uses a stack of friction washers with a preload adjustment screw. This allows assembly-line calibration to account for manufacturing tolerances. Each unit is tested for hold strength before packaging.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's8',
            text: 'Thermal Management',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'LEDs generate heat, and heat degrades LED lifespan. The aluminum housing acts as a heat sink, but we needed to ensure the junction temperature stays below 85°C for the rated 50,000-hour lifespan. Thermal simulation guided the fin geometry on the internal heat sink, and physical testing confirmed the design.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p10',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's10',
            text: 'Simplicity is not the absence of complexity — it is the resolution of complexity. Every visible element of Tamarack exists because the engineering required it. Nothing is arbitrary.',
            marks: [],
          },
        ],
      },
    ],
    relatedCapabilities: [],
    relatedProjects: [],
  },
  'physical-vs-digital-design-thinking': {
    slug: 'physical-vs-digital-design-thinking',
    title: 'Why Physical Products Need Different Design Thinking',
    excerpt:
      'Digital products can iterate in hours. Physical products take months. How this constraint changes everything about the design process.',
    publicationDate: '2024-07-20',
    category: 'Process',
    author: {
      name: 'Elena Vasquez',
      title: 'Design Director',
      credentials: 'MDes, ArtCenter College of Design',
      bio: 'Elena directs the design practice at 123.design, leading cross-disciplinary teams across industrial design, engineering, and manufacturing. She has 15 years of experience in physical product development.',
    },
    heroMedia: {
      kind: 'IMAGE',
      url: '/media/launch/projects/design-process-hero.jpg',
      alt: 'Design Process Version 2 Prototype — workspace with prototypes',
      decorative: false,
      width: 1600,
      height: 900,
      caption: 'Version 2 Prototype — Design Process',
    },
    body: [
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'We work with founders who have shipped digital products before. They come to physical product design with strong instincts and wrong assumptions. The differences are fundamental, not incremental.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'Iteration Speed',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'In software, you can deploy a fix in minutes. In hardware, a design change means new tooling, new materials, new testing. A single iteration cycle is 4-12 weeks, not hours. This means every decision carries more weight. You cannot afford to "move fast and break things" when breaking things costs $50,000 in tooling.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: 'The response is not to slow down — it is to be more deliberate. We front-load research and testing. We build more prototypes before committing to tooling. We validate assumptions with physical models before they become expensive mistakes.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p5',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'The Cost of Change Curve',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p6',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's6',
            text: 'In software, the cost of change is relatively flat. In hardware, it is exponential. A sketch change costs nothing. A CAD change costs hours. A prototype change costs thousands. A production change costs tens of thousands. The design process must compress decisions into the cheapest phase possible.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'This is why we spend disproportionate time on requirements and concept development. A week of additional research can save months of rework. Digital product designers are used to discovering requirements through iteration. Physical product designers must discover them before iteration begins.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's8',
            text: 'The Permanence Factor',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'Once a product is manufactured, it exists in the world. You cannot patch a physical product. Every unit that ships with a defect is a permanent reflection of your brand. This permanence changes the risk calculus. We design for worst-case scenarios, not average use.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'p10',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's10',
            text: 'Physical product design is not harder than digital design — it is different. The constraints are different, the timelines are different, the cost structures are different. Success requires respecting those differences, not trying to apply digital playbooks to physical problems.',
            marks: [],
          },
        ],
      },
    ],
    relatedCapabilities: [],
    relatedProjects: [],
  },
};
