/**
 * Launch Media Manifest
 *
 * Typed registry of all Phase 0B-approved media assets activated for website launch.
 * Each entry tracks provenance, usage, accessibility, and entity mapping.
 *
 * Authority: Phase 0B.3 Normalized Media Entity Register (03A) and Website Asset Shortlist (03M).
 * Only assets with approved publication status are included.
 */

export interface LaunchMediaEntry {
  id: string;
  publicUrl: string;
  sourceAssetId: string;
  usage: LaunchMediaUsage;
  alt: string;
  decorative: boolean;
  width: number;
  height: number;
  entityMapping?: string;
  publicationStatus: string;
}

export type LaunchMediaUsage =
  | 'HERO_REEL_PRIMARY'
  | 'HERO_REEL_ALTERNATE'
  | 'HERO_PRIMARY'
  | 'FEATURED_GALLERY'
  | 'PROCESS_STAGE'
  | 'CAPABILITY_TILE'
  | 'MANUFACTURING_PRIMARY'
  | 'CTA_PRIMARY'
  | 'CASE_STUDY_LEAD'
  | 'CASE_STUDY_SUPPORT'
  | 'PORTFOLIO_CARD'
  | 'MANUFACTURING'
  | 'PROCESS'
  | 'CAPABILITY'
  | 'CTA';

export interface HeroReelEntry {
  id: string;
  posterUrl: string;
  videoUrl: string;
  alt: string;
  decorative: boolean;
  sourceAssetId: string;
  width: number;
  height: number;
  caption?: string;
}

/**
 * HOMEPAGE_REEL_PRIMARY — 14 approved videos (1920x1080+)
 * All from PRJ-LOCAL-0110 (Video Archive), TIER_D, FULL_BLEED_READY
 * Publication status: USE_AFTER_CONTENT_APPROVAL
 * Split: first 7 for hero, last 7 for showreel
 */
export const heroReelPrimary: HeroReelEntry[] = [
  {
    id: 'reel-28',
    posterUrl: '/media/launch/hero/posters/28.png',
    videoUrl: '/media/launch/hero/28.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000959',
    width: 2492,
    height: 1080,
  },
  {
    id: 'reel-28a',
    posterUrl: '/media/launch/hero/posters/28a.png',
    videoUrl: '/media/launch/hero/28a.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000960',
    width: 2492,
    height: 1080,
  },
  {
    id: 'reel-29',
    posterUrl: '/media/launch/hero/posters/29.png',
    videoUrl: '/media/launch/hero/29.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000961',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-30',
    posterUrl: '/media/launch/hero/posters/30.png',
    videoUrl: '/media/launch/hero/30.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000963',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-31',
    posterUrl: '/media/launch/hero/posters/31.png',
    videoUrl: '/media/launch/hero/31.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000964',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-32',
    posterUrl: '/media/launch/hero/posters/32.png',
    videoUrl: '/media/launch/hero/32.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000965',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-33',
    posterUrl: '/media/launch/hero/posters/33.png',
    videoUrl: '/media/launch/hero/33.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000966',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-34',
    posterUrl: '/media/launch/hero/posters/34.png',
    videoUrl: '/media/launch/hero/34.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000967',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-35',
    posterUrl: '/media/launch/hero/posters/35.png',
    videoUrl: '/media/launch/hero/35.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000968',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-36',
    posterUrl: '/media/launch/hero/posters/36.png',
    videoUrl: '/media/launch/hero/36.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000969',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-37',
    posterUrl: '/media/launch/hero/posters/37.png',
    videoUrl: '/media/launch/hero/37.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000970',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-38',
    posterUrl: '/media/launch/hero/posters/38.png',
    videoUrl: '/media/launch/hero/38.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000971',
    width: 1936,
    height: 1080,
  },
  {
    id: 'reel-42',
    posterUrl: '/media/launch/hero/posters/42.png',
    videoUrl: '/media/launch/hero/42.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000976',
    width: 2592,
    height: 1080,
  },
  {
    id: 'reel-42A',
    posterUrl: '/media/launch/hero/posters/42A.png',
    videoUrl: '/media/launch/hero/42A.mp4',
    alt: '',
    decorative: true,
    sourceAssetId: 'AST-000977',
    width: 2592,
    height: 1080,
  },
];

export const heroReelFirstHalf = heroReelPrimary.slice(0, 7);
export const heroReelSecondHalf = heroReelPrimary.slice(7, 14);

/**
 * CASE_STUDY_LEAD — 1 approved image
 * PRJ-LOCAL-0020 (SPOONY Smart Spoon), TIER_A, GALLERY_READY
 */
export const caseStudyLead: LaunchMediaEntry[] = [
  {
    id: 'case-lead-spoony',
    publicUrl: '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
    sourceAssetId: 'AST-000897',
    usage: 'CASE_STUDY_LEAD',
    alt: 'SPOONY heated spoon — three colourways',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
];

/**
 * CASE_STUDY_SUPPORT — 17 approved images
 * SPOONY (14), DBLL (1), RACK (1), Adagio (1)
 */
export const caseStudySupport: LaunchMediaEntry[] = [
  // SPOONY support images (14)
  {
    id: 'case-support-spoony-01',
    publicUrl: '/media/launch/projects/bf46d228-b42d-43ce-99fc-bb67b210bb79.jpg',
    sourceAssetId: 'AST-000886',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-02',
    publicUrl: '/media/launch/projects/81134d30-b341-4e59-bc7f-054f37c7c88b.jpg',
    sourceAssetId: 'AST-000887',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-03',
    publicUrl: '/media/launch/projects/47c0b82e-3d94-497e-a75b-8510ab2737d8.jpg',
    sourceAssetId: 'AST-000888',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-04',
    publicUrl: '/media/launch/projects/2edfa118-40b3-40e2-842a-5bfa83d56a20.jpg',
    sourceAssetId: 'AST-000889',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-05',
    publicUrl: '/media/launch/projects/07964f5d-d6ef-420c-9a52-e91f97349dfb.jpg',
    sourceAssetId: 'AST-000890',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-06',
    publicUrl: '/media/launch/projects/09e72b74-6f40-4a4d-afd6-9fe4d0d10936.jpg',
    sourceAssetId: 'AST-000891',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-07',
    publicUrl: '/media/launch/projects/cd21d58b-5d21-41a8-9677-5993cf521e35.jpg',
    sourceAssetId: 'AST-000892',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-08',
    publicUrl: '/media/launch/projects/248527da-fefa-4432-83d7-f2a41307cacc.jpg',
    sourceAssetId: 'AST-000893',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-09',
    publicUrl: '/media/launch/projects/6374c322-53c8-4e11-88d4-9b20e74947dd.jpg',
    sourceAssetId: 'AST-000894',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-10',
    publicUrl: '/media/launch/projects/da673554-c904-4aed-b6c8-d73372a196b7.jpg',
    sourceAssetId: 'AST-000895',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-11',
    publicUrl: '/media/launch/projects/565828ca-64ae-44cc-9ef3-fd3fde21daac.jpg',
    sourceAssetId: 'AST-000896',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-12',
    publicUrl: '/media/launch/projects/34b26467-fb16-4c55-a506-090be4239985.jpg',
    sourceAssetId: 'AST-000898',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-13',
    publicUrl: '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
    sourceAssetId: 'AST-000899',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1280,
    height: 847,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'case-support-spoony-14',
    publicUrl: '/media/launch/projects/0a1204ff-86f3-44b1-970e-cfb8c883a9bc.jpg',
    sourceAssetId: 'AST-000900',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'SPOONY Smart Spoon product photography',
    decorative: false,
    width: 1600,
    height: 1168,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  // Therapy System support image (1)
  {
    id: 'case-support-therapy',
    publicUrl: '/media/work/medical/therapy-system/Therapy-System-1.jpg',
    sourceAssetId: 'AST-000870',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'Therapy System — medical device product development',
    decorative: false,
    width: 1600,
    height: 1067,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  // RACK support image (1)
  {
    id: 'case-support-rack',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1-(1).jpg',
    sourceAssetId: 'AST-000885',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'RACK Bath Tray product image',
    decorative: false,
    width: 854,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  // Adagio support image (1) — requires client approval
  {
    id: 'case-support-adagio',
    publicUrl: '/media/launch/projects/e73eb6ff-7657-40f7-ba6b-f0b7c4c7933e.jpg',
    sourceAssetId: 'AST-000498',
    usage: 'CASE_STUDY_SUPPORT',
    alt: 'Crestron Adagio project image',
    decorative: false,
    width: 1024,
    height: 512,
    entityMapping: 'PRJ-LOCAL-0030',
    publicationStatus: 'USE_AFTER_CLIENT_APPROVAL',
  },
];

/**
 * PORTFOLIO_CARD — 16 approved images
 * Tamarack (2), DBLL (7), RACK (6), VIRT (1)
 */
export const portfolioCards: LaunchMediaEntry[] = [
  // Tamarack Country Club (2)
  {
    id: 'portfolio-tamarack-01',
    publicUrl: '/media/launch/projects/tam-main-elevs-front.jpg',
    sourceAssetId: 'AST-000466',
    usage: 'PORTFOLIO_CARD',
    alt: 'Tamarack Country Club front elevation',
    decorative: false,
    width: 1280,
    height: 853,
    entityMapping: 'PRJ-LOCAL-0001',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-tamarack-02',
    publicUrl: '/media/launch/projects/tam-main-elevs-side.jpg',
    sourceAssetId: 'AST-000467',
    usage: 'PORTFOLIO_CARD',
    alt: 'Tamarack Country Club side elevation',
    decorative: false,
    width: 1280,
    height: 853,
    entityMapping: 'PRJ-LOCAL-0001',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  // DBLL portfolio images (2) + ORAL4 (2) + other products (2)
  {
    id: 'portfolio-oral4-spray',
    publicUrl: 'https://123.design/wp-content/uploads/2025/03/spray-1_large.webp',
    sourceAssetId: 'AST-000902',
    usage: 'PORTFOLIO_CARD',
    alt: 'ORAL4 — integrated mouth spray in cap',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0024',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-dbll-02',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(2).jpg',
    sourceAssetId: 'AST-000865',
    usage: 'PORTFOLIO_CARD',
    alt: 'DBLL Adjustable Dumbbell product view',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-oral4-floss',
    publicUrl: 'https://123.design/wp-content/uploads/2025/03/floss-1_large.webp',
    sourceAssetId: 'AST-000903',
    usage: 'PORTFOLIO_CARD',
    alt: 'ORAL4 — portable floss dispenser on back body',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0024',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-dbll-04',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(4).jpg',
    sourceAssetId: 'AST-000867',
    usage: 'PORTFOLIO_CARD',
    alt: 'DBLL Adjustable Dumbbell product view',
    decorative: false,
    width: 1600,
    height: 1067,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-spoony',
    publicUrl: '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
    sourceAssetId: 'AST-000897',
    usage: 'PORTFOLIO_CARD',
    alt: 'SPOONY smart spoon — multiple colourways with charging dock',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-catheter',
    publicUrl: '/media/work/old/cat-catheter-secure/CAT-023.jpg',
    sourceAssetId: 'AST-000904',
    usage: 'PORTFOLIO_CARD',
    alt: 'Catheter Secure — medical catheter securing system',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0025',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  // RACK portfolio images (6)
  {
    id: 'portfolio-rack-01',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
    sourceAssetId: 'AST-000879',
    usage: 'PORTFOLIO_CARD',
    alt: 'RACK Bath Tray — product on white background',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-rack-02',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
    sourceAssetId: 'AST-000880',
    usage: 'PORTFOLIO_CARD',
    alt: 'RACK Bath Tray product view',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-rack-03',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (3).jpg',
    sourceAssetId: 'AST-000881',
    usage: 'PORTFOLIO_CARD',
    alt: 'RACK Bath Tray product view',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-rack-04',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (4).jpg',
    sourceAssetId: 'AST-000882',
    usage: 'PORTFOLIO_CARD',
    alt: 'RACK Bath Tray product view',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-rack-05',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (5).jpg',
    sourceAssetId: 'AST-000883',
    usage: 'PORTFOLIO_CARD',
    alt: 'RACK Bath Tray product view',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'portfolio-rack-06',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (6).jpg',
    sourceAssetId: 'AST-000884',
    usage: 'PORTFOLIO_CARD',
    alt: 'RACK Bath Tray product view',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  // VIRT portfolio image (1)
  {
    id: 'portfolio-virt',
    publicUrl: '/media/launch/projects/WhatsApp Image 2019-08-22 at 11.30.15 AM.jpeg',
    sourceAssetId: 'AST-000938',
    usage: 'PORTFOLIO_CARD',
    alt: 'VIRT project product image',
    decorative: false,
    width: 1600,
    height: 1068,
    entityMapping: 'PRJ-LOCAL-0023',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
];

/**
 * ============================================================
 * HOMEPAGE SECTION-SPECIFIC MEDIA (Phase 2 Visual Recovery)
 * ============================================================
 */

/**
 * HERO_PRIMARY — Single dominant product visual for hero right half
 * RACK Bath Tray — premium bamboo with stainless steel, strong product composition
 */
export const heroPrimary: LaunchMediaEntry = {
  id: 'hero-primary-oral4',
  publicUrl: 'https://123.design/wp-content/uploads/2025/03/Toothpaste-2_large.webp',
  sourceAssetId: 'AST-000900',
  usage: 'HERO_PRIMARY',
  alt: 'ORAL4 All-in-One Oral Care Kit — pen-shaped device with toothbrush, floss, toothpick, and mouth spray',
  decorative: false,
  width: 1600,
  height: 900,
  entityMapping: 'PRJ-LOCAL-0024',
  publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
};

/**
 * FEATURED_GALLERY — 6 images for featured work grid (3×2)
 * DBLL (2), ORAL4 (toothbrush), RACK (1), RACK (3), SPOONY, ORAL4 (toothpick)
 */
export const featuredGallery: LaunchMediaEntry[] = [
  {
    id: 'featured-dbll-02',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(2).jpg',
    sourceAssetId: 'AST-000865',
    usage: 'FEATURED_GALLERY',
    alt: 'DBLL Adjustable Dumbbell product view',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'featured-oral4-toothbrush',
    publicUrl: 'https://123.design/wp-content/uploads/2025/03/Toothpaste-2_large.webp',
    sourceAssetId: 'AST-000900',
    usage: 'FEATURED_GALLERY',
    alt: 'ORAL4 — powder fresh brush with toothpaste glaze',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0024',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'featured-rack-01',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
    sourceAssetId: 'AST-000879',
    usage: 'FEATURED_GALLERY',
    alt: 'RACK Bath Tray — product on white background',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'featured-rack-03',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (3).jpg',
    sourceAssetId: 'AST-000881',
    usage: 'FEATURED_GALLERY',
    alt: 'RACK Bath Tray product view',
    decorative: false,
    width: 1280,
    height: 854,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'featured-spoony',
    publicUrl: '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
    sourceAssetId: 'AST-000897',
    usage: 'FEATURED_GALLERY',
    alt: 'SPOONY heated spoon — three colourways',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'featured-oral4-toothpick',
    publicUrl: 'https://123.design/wp-content/uploads/2025/03/Toothpick-1_large.webp',
    sourceAssetId: 'AST-000901',
    usage: 'FEATURED_GALLERY',
    alt: 'ORAL4 — retractable toothpick deploys from the base',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0024',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
];

/**
 * PROCESS_STAGES — 5 stage-matched images for lifecycle timeline
 * CON → SPOONY support 01 (sketch/concept)
 * EVT → DBLL (4) (prototype/CAD)
 * DVT → RACK (2) (engineered product)
 * PVT → DBLL (5) (tooling/pilot)
 * PRODUCTION → RACK (4) (manufacturing)
 */
export const processStages: LaunchMediaEntry[] = [
  {
    id: 'process-con',
    publicUrl: '/images/process/concept.png',
    sourceAssetId: 'AST-000886',
    usage: 'PROCESS_STAGE',
    alt: 'Concept stage — form exploration, user research and ideation',
    decorative: false,
    width: 1536,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'process-evt',
    publicUrl: '/images/process/evt.png',
    sourceAssetId: 'AST-000867',
    usage: 'PROCESS_STAGE',
    alt: 'Engineering validation — functional prototypes and risk reduction',
    decorative: false,
    width: 1536,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'process-dvt',
    publicUrl: '/images/process/dvt.png',
    sourceAssetId: 'AST-000880',
    usage: 'PROCESS_STAGE',
    alt: 'Design validation — refined form, materials and certification prep',
    decorative: false,
    width: 1536,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'process-pvt',
    publicUrl: '/images/process/pvt.png',
    sourceAssetId: 'AST-000868',
    usage: 'PROCESS_STAGE',
    alt: 'Production validation — tooling, pilot builds and assembly process',
    decorative: false,
    width: 1536,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'process-production',
    publicUrl: '/images/process/production.png',
    sourceAssetId: 'AST-000882',
    usage: 'PROCESS_STAGE',
    alt: 'Production — manufacturing, quality control and fulfillment',
    decorative: false,
    width: 1536,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
];

/**
 * CAPABILITY_TILES — 6 image-led tiles for capabilities section
 * Industrial Design → SPOONY support 02 (form/design)
 * Mechanical Engineering → DBLL icon (mechanical product)
 * Electrical Engineering → SPOONY support 03 (electronics/smart device)
 * Prototyping → DBLL (2) (rapid iteration)
 * Tooling & Manufacturing → RACK (5) (process/tooling)
 * Testing & Validation → RACK (6) (testing/quality)
 */
export const capabilityTiles: LaunchMediaEntry[] = [
  {
    id: 'capability-product-development',
    publicUrl: '/media/launch/projects/123_design_blog_new_products_1 (1).jpg',
    sourceAssetId: 'AST-000890',
    usage: 'CAPABILITY_TILE',
    alt: 'Product Development — from concept to production',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-industrial-design',
    publicUrl: '/media/launch/projects/81134d30-b341-4e59-bc7f-054f37c7c88b.jpg',
    sourceAssetId: 'AST-000887',
    usage: 'CAPABILITY_TILE',
    alt: 'Industrial Design — form and user experience',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-mechanical',
    publicUrl: '/media/work/industrial/hydraulic-valve/hydraulic-valve-1.jpg',
    sourceAssetId: 'AST-000870',
    usage: 'CAPABILITY_TILE',
    alt: 'Mechanical Engineering — precision valve mechanism',
    decorative: false,
    width: 1600,
    height: 1067,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-electrical',
    publicUrl: '/media/launch/projects/47c0b82e-3d94-497e-a75b-8510ab2737d8.jpg',
    sourceAssetId: 'AST-000888',
    usage: 'CAPABILITY_TILE',
    alt: 'Electrical Engineering — embedded systems and electronics',
    decorative: false,
    width: 1600,
    height: 900,
    entityMapping: 'PRJ-LOCAL-0020',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-software-development',
    publicUrl: '/images/capabilities/software-development.png',
    sourceAssetId: 'AST-000891',
    usage: 'CAPABILITY_TILE',
    alt: 'Software & App Development — mobile and web applications',
    decorative: false,
    width: 1792,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0023',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-ai-services',
    publicUrl: '/images/capabilities/ai-services.png',
    sourceAssetId: 'AST-000892',
    usage: 'CAPABILITY_TILE',
    alt: 'AI & Machine Learning — intelligent systems and automation',
    decorative: false,
    width: 1792,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0024',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-prototyping',
    publicUrl: '/images/capabilities/prototyping.png',
    sourceAssetId: 'AST-000865',
    usage: 'CAPABILITY_TILE',
    alt: 'Prototyping — 3D printing, foam models, and rapid iteration',
    decorative: false,
    width: 1792,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0021',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-sourcing',
    publicUrl: '/images/capabilities/sourcing.png',
    sourceAssetId: 'AST-000893',
    usage: 'CAPABILITY_TILE',
    alt: 'Sourcing & Supply Chain — global supplier network',
    decorative: false,
    width: 1792,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0025',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
  {
    id: 'capability-manufacturing',
    publicUrl: '/images/capabilities/manufacturing.png',
    sourceAssetId: 'AST-000883',
    usage: 'CAPABILITY_TILE',
    alt: 'Manufacturing — CNC machines and injection molding',
    decorative: false,
    width: 1792,
    height: 1024,
    entityMapping: 'PRJ-LOCAL-0022',
    publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
  },
];

/**
 * MANUFACTURING_PRIMARY — Single dominant manufacturing/process image
 * Speaker Tower — premium audio product showing assembly and finish quality
 */
export const manufacturingPrimary: LaunchMediaEntry = {
  id: 'manufacturing-primary',
  publicUrl: '/media/work/audio/speaker-tower/Speaker_Tower-1.jpg',
  sourceAssetId: 'AST-000869',
  usage: 'MANUFACTURING_PRIMARY',
  alt: 'Manufacturing — premium audio product assembly and finish',
  decorative: false,
  width: 1600,
  height: 1067,
  entityMapping: 'PRJ-LOCAL-0021',
  publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
};

/**
 * CTA_PRIMARY — Final CTA background/visual
 * RACK Bath Tray — premium product showing design depth
 */
export const ctaPrimary: LaunchMediaEntry = {
  id: 'cta-primary-get-started',
  publicUrl: '/images/cta-get-started.png',
  sourceAssetId: 'AST-000868',
  usage: 'CTA_PRIMARY',
  alt: 'Product design studio workspace with prototypes and materials',
  decorative: false,
  width: 1280,
  height: 1024,
  entityMapping: 'PRJ-LOCAL-0022',
  publicationStatus: 'USE_AFTER_CONTENT_APPROVAL',
};

/**
 * Aggregate exports for convenience
 */
export const allLaunchMedia: LaunchMediaEntry[] = [
  ...caseStudyLead,
  ...caseStudySupport,
  ...portfolioCards,
];

/**
 * Backwards-compatible homepage hero reel export
 * Maps HeroReelEntry[] to the format expected by HomeHeroReel component
 */
export const homepageHeroReel = heroReelPrimary.map((entry) => ({
  id: entry.id,
  posterUrl: entry.posterUrl,
  videoUrl: entry.videoUrl,
  alt: entry.alt,
  decorative: entry.decorative,
  caption: entry.caption,
}));
