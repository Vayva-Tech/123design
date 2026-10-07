import type { ProjectPageModel } from '@/types/domain';

const DBLL_SLUG = 'dbll-adjustable-dumbbell';
const RACK_SLUG = 'rack-bath-tray';
const SPOONY_SLUG = 'spoony';
const TAMARACK_SLUG = 'tamarack-country-club';
const TRUELI_SLUG = 'trueli-adjustable-dumbbells';
const GOLF_CADDY_SLUG = 'golf-caddy';
const MADISON_SLUG = '520-madison-avenue';
const CD_PLAYER_SLUG = 'cd-player';
const TABLET_SLUG = 'tablet-with-keyboard';
const DEFIB_SLUG = 'portable-defibrillator';
const BPM_SLUG = 'blood-pressure-monitor';
const BOMB_SQUAD_SLUG = 'bomb-squad-robot';
const YACHT_SLUG = 'luxury-yacht';
const COFFEE_SLUG = 'coffee-maker';
const VACUUM_SLUG = 'vacuum-cleaner';
const HAND_DRYER_SLUG = 'hand-dryer';
const BUSINESS_PHONE_SLUG = 'business-phone';
const ARMORED_CAMERA_SLUG = 'armored-vehicle-camera';
const BINOCULARS_SLUG = 'binoculars';
const CAMCORDER_SLUG = 'camcorder';
const CATAMARAN_SLUG = 'catamaran';
const DIAMOND_SLUG = 'diamond-yacht';
const DICTAPHONE_SLUG = 'dictaphone';
const DVD_PLAYER_SLUG = 'dvd-player';
const CLEANSER_SLUG = 'washer-cleanser';
const GPS_NAV_SLUG = 'gps-navigator';
const GYROCAM_SLUG = 'gyrocam';
const MASSAGER_SLUG = 'handheld-massager';
const IONIZER_SLUG = 'air-ionizer';
const CIGAR_SLUG = 'heavenly-cigar';
const HYDRA_SLUG = 'hydra-speed-boat';
const MAIL_EXTRACT_SLUG = 'mail-extraction-machine';
const MANPACK_SLUG = 'boeing-manpack';
const PDA_SLUG = 'carbon-fiber-pda';
const PORTABLE_SCANNER_SLUG = 'portable-body-scanner';
const MASTIQUE_SLUG = 'mastique';
const MEGA_YACHT_SLUG = 'mega-yacht';
const MOSQUITO_SLUG = 'mosquito-deleto';
const RACKMOUNT_SLUG = 'rackmount-enclosure';
const REFRIGERATOR_SLUG = 'refrigerator';
const SECURITY_SCANNER_SLUG = 'security-scanner';
const STRETCHER_SLUG = 'stretcher';
const SUBMERSIBLE_SLUG = 'submersible-tablet';
const SUITCASE_SLUG = 'suitcase';
const SYNERGIX_SLUG = 'synergix';
const TENNIS_SLUG = 'tennis-ball-machine';
const THERAPY_BIKE_SLUG = 'therapy-bike';
const THERAPY_SYSTEM_SLUG = 'therapy-system';
const WATERPROOF_SLUG = 'waterproof-case';
const MEDICAL_SCALE_SLUG = 'medical-scale';
const MILITARY_PHONE_SLUG = 'military-phone';
const PEDOMETER_SLUG = 'pedometer';
const SHREDDER_SLUG = 'portable-shredder';
const SPORTS_BOTTLE_SLUG = 'sports-bottle';
const PAYPHONE_SLUG = 'payphone';
const KNIFE_SLUG = 'knife';
const LABELER_SLUG = 'labeler';
const FAN_SLUG = 'fan';
const GKV_LAW_SLUG = 'gkv-law-firm';
const HAYDAR_SLUG = 'haydar';
const IPM_SLUG = 'ipm';
const MBA_AIR_SLUG = 'mba-air';
const NAPLES_SLUG = 'naples-lumber';
const PAP_SLUG = 'pap';
const POD_SLUG = 'pod';
const RIFLE_SCOPE_SLUG = 'rifle-scope';
const ROLLER_BLADE_SLUG = 'roller-blade';
const RUGGED_COMPUTER_SLUG = 'rugged-computer';
const SALT_SLUG = 'salt';
const SOUP_SERVER_SLUG = 'soup-server';
const SPEAKER_TOWER_SLUG = 'speaker-tower';
const STAIRCASE_SLUG = 'staircase';
const SUNA_SLUG = 'suna-salon';
const SUPER_YACHT_SLUG = 'super-yacht';
const THERMOMETER_SLUG = 'thermometer';
const WALKIE_TALKIE_SLUG = 'walkie-talkie';
const WIRELESS_TOWER_SLUG = 'wireless-tower';
const YACHT_INTERIOR_SLUG = 'yacht-interior';
const ADAGIO_SLUG = 'adagio';
const DEHUMIDIFIER_SLUG = 'dehumidifier';
const DENTAL_SLUG = 'dental';
const DUBAI_BOAT_SLUG = 'dubai-boat-show';
const AESTHETIC_SLUG = 'aesthetic-treatment-machine';
const BOMB_REMOTE_SLUG = 'bomb-squad-remote';
const BARCODE_SCANNER_SLUG = 'barcode-scanner';
const BOAT_PROFILE_SLUG = 'boat-profile';
const GRILL_SLUG = 'all-in-one-grill';
const AIRCRAFT_INTERIOR_SLUG = 'aircraft-interior';
const DYNAMOMETER_SLUG = 'grip-strength-dynamometer';
const EMERGENCY_BEACON_SLUG = 'emergency-beacon';
const EATON_FLIGHT_BOX_SLUG = 'eaton-flight-box';
const FLIGHT_PLANNER_SLUG = 'flight-planner';
const FPS_BIOMETRIC_SLUG = 'fps-biometric-access';
const SPORTS_GOGGLES_SLUG = 'sports-goggles';
const COOL_DRIVE_SLUG = 'cool-drive-micro';
const HYDRAULIC_VALVE_SLUG = 'hydraulic-valve';
const INFO_KIOSK_SLUG = 'information-kiosk';
const SECURITY_WAND_SLUG = 'security-wand';
const DISNEY_TEETHER_SLUG = 'disney-teether';
const UNIVERSAL_REMOTE_SLUG = 'universal-remote';
const PIONEER_PLAYER_SLUG = 'pioneer-video-player';
const GOLF_PUTTER_SLUG = 'golf-putter';
const KNEE_BOARDS_SLUG = 'knee-boards';
const BRASS_BALLS_SLUG = 'brass-balls-board-game';
const GREENCAN_SLUG = 'kitchen-trash-can';
const DA_BENITO_SLUG = 'da-benito-pasta-sauce';
const ROLLIE_SLUG = 'rollie-paper-towel-dispenser';
const ABS_RTV_SLUG = 'abs-rtv-tooling';
const ACRYLIC_FORMING_SLUG = 'acrylic-forming';
const CARBON_FIBER_PROTO_SLUG = 'carbon-fiber-molding-proto';
const FDM_PRINTING_SLUG = 'fdm-printing';
const MULTI_LEVEL_PROTO_SLUG = 'multi-level-prototyping';
const RUBBER_COATING_SLUG = 'rubber-coating-silkscreening';
const SHEET_METAL_RTV_SLUG = 'sheet-metal-rtv-tooling';
const SLA_SLS_SLUG = 'sla-sls';
const CHARLOTTE_OFFICE_SLUG = 'charlotte-office-interior';
const CONVENT_SACRED_SLUG = 'convent-of-the-sacred-heart';
const HYDERABAD_SLUG = 'hyderabad-phase-ii';
const MISQUAMICUT_SLUG = 'misquamicut-beach-club';
const TAMARACK_POOL_SLUG = 'tamarack-pool-house';
const AC_FAN_SLUG = 'air-conditioning-fan';
const REFRIGERATOR_1_SLUG = 'refrigerator-1';
const REFRIGERATOR_2_SLUG = 'refrigerator-2';
const JEWELRY_SLUG = 'jewelry';
const MCL_CAFETERIA_SLUG = 'mcl-cafeteria';
const MEDICAL_AD_SLUG = 'medical-advertising';
const SIOUX_CITY_SLUG = 'sioux-city-sarsaparilla';
const KITCHEN_KNIFE_SLUG = 'kitchen-knife';
const PAPER_HOLDER_SLUG = 'paper-holder-dispenser';
const RECYCLE_BIN_SLUG = 'recycle-bin';
const SALT_PEPPER_SLUG = 'salt-and-pepper-shaker';
const KITCHEN_SCALE_SLUG = 'kitchen-scale';
const SPINE_BOARD_SLUG = 'spine-board';
const DENTAL_JET_SLUG = 'dental-jet';
const MED_HOSPITAL_SCALE_SLUG = 'medical-hospital-scale';
const FPS_SLUG = 'military-finger-print-scanner';
const FLIGHT_BOX_SLUG = 'military-flight-box';
const POD_UAV_SLUG = 'pod-for-uav';
const TAC_EYE_SLUG = 'tac-eye-binocular';
const IPAD_COVER_SLUG = 'ipad-cover';
const LADDER_RACK_SLUG = 'ladder-rack';
const DIVING_GOGGLE_SLUG = 'diving-goggle-with-camera';
const LED_STREET_SLUG = 'led-street-light';
const MASSAGING_TEETHER_SLUG = 'massaging-vibrating-teether';
const WILD_PEAS_SLUG = 'wild-peas';
const TUTOR_MY_KID_SLUG = 'tutor-my-kid';
const YOUR_LUCKY_EYE_SLUG = 'your-lucky-eye';
const INFRARED_WINDOW_SLUG = 'infrared-window';
const HYDRAULIC_CROSS_SLUG = 'hydraulic-cross-section';
const CATHETER_SECURE_SLUG = 'catheter-secure';
const BUD_LIGHT_WALLET_SLUG = 'bud-light-wallet';
const RETRACTABLE_DOG_LEASH_SLUG = 'retractable-dog-leash';
const IPAD_CARBON_CASE_SLUG = 'ipad-carbon-case';
const ELECTRIC_SHAVER_CONCEPT_SLUG = 'electric-shaver-concept';
const HEADPHONE_CONCEPT_SLUG = 'headphone-concept';
const ECHEK_MENU_SLUG = 'echek-menu';
const EPILATOR_CONCEPT_SLUG = 'epilator-concept';
const STOP_SIGN_SENSOR_SLUG = 'stop-sign-sensor';
const GAMING_SETUP_SLUG = 'gaming-setup';
const GOLF_SHAFT_SLUG = 'golf-shaft';
const SMART_GROOMING_SLUG = 'smart-grooming';
const GOLF_POSTURE_POD_SLUG = 'golf-posture-pod';
const TOY_GUN_SLUG = 'toy-gun';
const CHILD_SAFETY_WRISTBAND_SLUG = 'child-safety-wristband';
const MEDICAL_SIMULATION_CART_SLUG = 'medical-simulation-cart';
const CABLE_MANAGEMENT_SLUG = 'cable-management';
const DOG_WALKING_AID_SLUG = 'dog-walking-aid';
const TELEPRESENCE_ROBOT_SLUG = 'telepresence-robot';
const TAPE_MEASURE_SLUG = 'tape-measure';
const IPAD_CHAIR_SLUG = 'ipad-chair';
const RUGGED_DEVICE_SLUG = 'rugged-device';
const SMART_STETHOSCOPE_SLUG = 'smart-stethoscope';
const DASH_CAMERA_SLUG = 'dash-camera';
const MG_NINE_DASH_CAM_SLUG = 'mg-nine-dash-cam';
const MG_NINE_WEBCAM_SLUG = 'mg-nine-webcam';
const RESTAURANT_SERVICE_SLUG = 'restaurant-service';
const FITNESS_VENDING_SLUG = 'fitness-vending';
const VENDING_MACHINE_SLUG = 'vending-machine';
const TRAVEL_PILLOW_SLUG = 'travel-pillow';
const SUNGLASSES_SLUG = 'sunglasses';
const EDIBLE_GOLD_SLUG = 'edible-gold';
const OUTDOOR_LAMP_SLUG = 'outdoor-lamp';
const BALANCE_BELT_SLUG = 'balance-belt';
const HOSPITALITY_KIOSK_SLUG = 'hospitality-kiosk';
const PROTEIN_BOTTLE_SLUG = 'protein-bottle';
const BABY_FOOD_POUCH_SLUG = 'baby-food-pouch';
const IPAD_CAR_MOUNT_SLUG = 'ipad-car-mount';
const ORAL4_SLUG = 'oral4';

function img(url: string, alt: string, w = 1600, h = 900) {
  return { kind: 'IMAGE' as const, url, alt, decorative: false, width: w, height: h };
}

export const STATIC_PROJECT_PAGES: ProjectPageModel[] = [
  // === LATEST: ORAL CARE ===
  {
    id: 'static-oral4',
    slug: ORAL4_SLUG,
    title: 'ORAL4 All-in-One Oral Care Kit',
    summary:
      'A compact pen-shaped oral care kit that integrates a toothbrush with powder toothpaste, retractable toothpick, portable floss dispenser, and mouth spray into a single pocket-sized device — redefining on-the-go dental hygiene.',
    heroMedia: img(
      'https://123.design/wp-content/uploads/2025/03/Toothpaste-2_large.webp',
      'ORAL4 all-in-one oral care kit — pen-shaped device with powder fresh brush',
      1600,
      900,
    ),
    industries: ['Consumer Products', 'Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2025,
    metrics: {
      timeline: '8 months (concept to production)',
      budgetRange: '$150K–$250K',
      performanceSpecs: ['4-in-1 integration', 'Pen-sized form factor', 'Sealed hygiene compartments'],
      customMetrics: [
        { label: 'Components Integrated', value: '4 (brush, toothpick, floss, spray)' },
        { label: 'Target User', value: 'Professionals & travellers' },
      ],
    },
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'ORAL4 consolidates four oral hygiene tools — a powder toothpaste toothbrush, a precision toothpick, a portable floss dispenser, and a mouth spray — into a single pen-shaped device. The form factor is compact enough to slip into a pocket or purse, yet each component deploys independently with a satisfying mechanical action. The design targets professionals, travellers, and anyone who wants a complete oral care routine without carrying multiple products.',
        media: img(
          'https://123.design/wp-content/uploads/2025/03/Toothpaste-2_large.webp',
          'ORAL4 — pen-shaped all-in-one oral care device',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Most people who maintain oral hygiene on the go carry a fragmented collection — a travel toothbrush in one pocket, floss in another, mouthwash in a checked bag. The brief was to unify these tools into a single object that feels intentional, not improvised. Each component had to deploy easily, stow securely, and remain hygienic between uses. The form needed to read as a premium personal care device, not a gimmicky multi-tool.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The pen form factor was chosen because it already maps to how people carry and use small precision tools. The toothbrush sits at the working end, glazed with powder toothpaste for a mess-free brushing experience. The toothpick retracts from the opposite end — a hidden compartment that deploys with a slide mechanism. The floss dispenser is taped flat along the back body, accessible via a recessed pull tab. The mouth spray is integrated into the cap, activated by pressing the top. Each element is sealed independently to maintain hygiene.',
        media: img(
          'https://123.design/wp-content/uploads/2025/03/Toothpick-1_large.webp',
          'ORAL4 — retractable toothpick deploys from the base',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'howWeSolvedIt',
        heading: 'How We Solved It',
        body: 'The core engineering challenge was fitting four independent mechanisms into a pen-sized body while keeping each seal hygienic. We developed a modular internal chassis — a slim aluminum spine that each component snaps into. The toothbrush and toothpick share a dual-chamber seal at opposite ends of the body. The floss cartridge is a flat, replaceable insert that slides into a recessed channel with an audible click. The spray mechanism reuses the cap as its actuator, eliminating a separate button. Prototyping in resin let us validate the internal packaging before committing to injection-mold tooling.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        body: 'ORAL4 delivers a complete four-step oral care routine in a device no larger than a marker pen. The powder toothpaste brush provides a clean, residue-free brushing experience. The retractable toothpick reaches interdental spaces the brush cannot. The flat-profile floss dispenser stows without bulk. The integrated mouth spray delivers a confidence boost between full routines. The pen form factor fits naturally in a shirt pocket, jacket, or small bag.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              'https://123.design/wp-content/uploads/2025/03/Toothpaste-2_large.webp',
              'ORAL4 — powder fresh brush with toothpaste glaze',
            ),
          },
          {
            media: img(
              'https://123.design/wp-content/uploads/2025/03/Toothpick-1_large.webp',
              'ORAL4 — hidden toothpick compartment',
            ),
          },
          {
            media: img(
              'https://123.design/wp-content/uploads/2025/03/floss-1_large.webp',
              'ORAL4 — portable floss dispenser on back body',
            ),
          },
          {
            media: img(
              'https://123.design/wp-content/uploads/2025/03/spray-1_large.webp',
              'ORAL4 — integrated mouth spray in cap',
            ),
          },
        ],
      },
    ],
    relatedProjects: [],
    seo: {
      title: 'ORAL4 — All-in-One Portable Oral Care Kit | 123.design',
      description:
        'ORAL4 integrates toothbrush, toothpick, floss, and mouth spray into a single pen-sized device. Compact, pocket-friendly oral hygiene for professionals and travellers. Industrial design by 123.design.',
    },
  },

  {
    id: 'static-dbll',
    slug: DBLL_SLUG,
    title: 'DBLL Adjustable Dumbbell',
    summary:
      'An adjustable dumbbell that replaces an entire rack with a single compact unit. White cube housing, black weight plates, and a red selector dial let users switch from 5 to 30 lbs in seconds — no plate swapping, no rack of individual dumbbells.',
    heroMedia: img(
      '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(5).jpg',
      'DBLL Adjustable Dumbbell — white cube housing with black weight plates and red selector dial',
      1600,
      900,
    ),
    industries: ['Fitness'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Manufacturing'],
    lifecycleStages: ['PRODUCTION'],
    year: 2024,
    metrics: {
      timeline: '14 months (concept to production)',
      budgetRange: '$500K–$750K',
      performanceSpecs: ['5–30 lb range', '10,000+ adjustment cycles', 'Hardened steel detents'],
      unitsProduced: '5,000+ units (first production run)',
      customMetrics: [
        { label: 'Weight Increments', value: '5 lb steps (5, 10, 15, 20, 25, 30)' },
        { label: 'Mold Complexity', value: '4-slide handle grip mold' },
      ],
    },
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'DBLL is an adjustable dumbbell that consolidates a 5 to 30 lb weight range into a single unit housed in a clean white cube shell. Black weight plates stack internally, selected via a red dial on each end of the handle. The dark grey handle features red accent rings at the grip points and a subtle brand mark. Users rotate the dial to the desired weight number, lift, and go — the mechanism engages only the selected plates, leaving the rest in the cradle. The design replaces a full dumbbell rack with a footprint no larger than a single traditional dumbbell.',
        media: img(
          '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(5).jpg',
          'DBLL — white cube housing, black plates, red selector dial, dark grey handle with red accents',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Existing adjustable dumbbells look like gym equipment forced into a domestic setting — exposed mechanics, industrial finishes, and visual bulk. The brief was to design a weight system that feels at home in a modern living space: clean lines, a considered colour palette, and a form that conceals its mechanical complexity behind a calm, minimal exterior. The dial mechanism had to feel precise and satisfying, not fiddly or cheap.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The white cube shell was chosen as the dominant visual gesture — it reads as a designed object, not gym hardware. Black plates inside create a strong contrast against the white housing, visible through the open sides. The red selector dial serves as the single accent colour, drawing the eye to the primary interaction point. The dark grey handle with red grip rings provides a secure, comfortable hold and adds a sporty precision to the overall form. Weight numbers (5 through 30) are printed in high-contrast white-on-black on the dial face for quick identification mid-workout.',
        media: img(
          '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(2).jpg',
          'DBLL — red selector dial with 5–30 weight markings, dark grey handle with red accent rings',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'howWeSolvedIt',
        heading: 'How We Solved It',
        body: 'The dial mechanism was the hardest problem. Off-the-shelf adjustable dumbbells use either pin locks (reliable but slow) or rotary dials (fast but prone to wear). We tested seven mechanisms before developing a hybrid: a rotating collar with hardened steel detents that engage with a positive click at each weight increment. The detents are machined into a steel insert overmolded into the housing — this eliminates the wear that plagued competitor products after 1,000+ cycles. The white cube shell was engineered as two halves that snap-fit around the internal mechanism, hiding all fasteners and maintaining the clean exterior.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'DBLL delivers a full 5–30 lb range in a single, visually considered unit. The white cube housing conceals the internal weight stack while the black plates and red dial create a clear visual hierarchy. The handle grip is balanced and comfortable across exercises, and the dial mechanism provides positive tactile feedback at each weight increment. The unit sits on a standard shelf or floor space where a full rack would otherwise be needed.',
      },
      {
        kind: 'discipline',
        sectionType: 'industrialDesign',
        heading: 'Industrial Design',
        body: 'The white cube shell was developed through iterative form studies to balance visual calm with the functional requirements of grip access, plate visibility, and dial operation. The open sides reveal the black weight stack, creating a mechanical honesty within the minimal exterior. The dark grey handle with red accent rings provides grip positioning cues and adds a performance-oriented detail to the otherwise clean form. The dial face uses bold, high-contrast numbering — white on black — for instant weight identification.',
        media: img(
          '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(3).jpg',
          'DBLL — white cube shell with open sides revealing black weight stack',
        ),
      },
      {
        kind: 'discipline',
        sectionType: 'mechanicalEngineering',
        heading: 'Mechanical Engineering',
        body: 'The red selector dial drives a locking-pin mechanism that engages only the chosen weight plates. Each plate has a positive detent that prevents accidental disengagement during use. The dial-to-linkage system was designed for durability across tens of thousands of selection cycles, with tolerance analysis ensuring smooth rotation and consistent plate pickup over the product lifetime. The internal cradle guides plates back into alignment after each use.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(5).jpg',
              'DBLL — full product view, white cube housing with black plates and red dial',
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(2).jpg',
              'DBLL — red selector dial close-up with 5–30 weight markings',
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(3).jpg',
              'DBLL — side profile showing white shell, open sides, and black weight stack',
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(4).jpg',
              'DBLL — dark grey handle with red accent grip rings',
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(5).jpg',
              'DBLL — assembled unit on cradle, weight plates engaged',
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_DUMB_BELL_(4).jpg',
              'DBLL — handle and dial detail, showing brand mark and grip texture',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Adjustable weight range: 5–30 lbs. Red dial selector with white-on-black numbering. White cube housing with open-side plate visibility. Black internal weight plates. Dark grey handle with red accent grip rings. Compact form factor replacing a full dumbbell rack. Designed for home and light commercial gym use.',
      },
      {
        kind: 'video',
        media: {
          kind: 'VIDEO',
          url: '/media/work/video/40.mp4',
          width: 1280,
          height: 720,
          purpose: 'projectVideo',
          caption: 'DBLL adjustable dumbbell — product video showing white cube housing with red dial selector',
        },
        caption: 'DBLL in use — rotating the dial to select weight, lifting, and returning to cradle',
      },
    ],
    seo: {
      title: 'DBLL Adjustable Dumbbell — Product Design & Engineering | 123.design',
      description:
        'An adjustable dumbbell that replaces an entire rack with a single compact unit. White cube housing, black weight plates, and a red selector dial let...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-rack',
    slug: RACK_SLUG,
    title: 'RACK Bath Tray',
    summary:
      'A premium bamboo bath tray with integrated phone slot, tablet stand, and wine glass holder. Stainless steel U-handles and adjustable width let it span any standard bathtub while storing flat when not in use.',
    heroMedia: img(
      '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
      'RACK Bath Tray — product on white background',
      1280,
      854,
    ),
    industries: ['Home'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Manufacturing'],
    lifecycleStages: ['PRODUCTION'],
    year: 2024,
    metrics: {
      timeline: '10 months (concept to production)',
      budgetRange: '$200K–$350K',
      performanceSpecs: ['304 stainless steel', 'Polyurethane waterproof coating', '5-year durability tested'],
      customMetrics: [
        { label: 'Material', value: 'White ash + 2-part polyurethane' },
        { label: 'Adjustability', value: 'Fits standard bathtubs (26"–34")' },
      ],
    },
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'RACK is a premium bath tray crafted from bamboo with stainless steel U-shaped handles. It spans a standard bathtub to create a stable surface for reading, devices, and drinks. Integrated features include a phone slot, a tablet stand with a metal arch support, and a circular wine glass holder — all machined into the tray surface without compromising structural integrity. The width adjusts to fit different tub sizes, and the tray stores flat against a wall when not in use.',
        media: img(
          '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
          'RACK Bath Tray — bamboo tray with stainless steel handles',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Most bath trays are flat boards with no accommodation for modern devices — phones slip off, tablets have no support, and glasses tip in the steam. The brief was to design a single tray that integrates phone, tablet, and glass storage into a cohesive surface while maintaining the clean, spa-like aesthetic of natural bamboo and brushed stainless steel. The adjustable width mechanism needed to lock securely at multiple settings without wobble.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Each integrated feature was positioned based on how people actually use a bath tray: phone within arm\'s reach, tablet propped at a comfortable viewing angle via the stainless steel arch stand, wine glass seated in a circular cutout that prevents tipping. The bamboo surface was selected for its natural water resistance and warm tactile quality. Stainless steel U-handles at each end provide a secure grip with wet hands and add a visual contrast to the natural wood.',
        media: img(
          '/media/launch/projects/123_design_blog_new_products_1 (3).jpg',
          'RACK — detail view showing integrated features',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'RACK delivers a complete bath experience in a single object. The phone slot, tablet stand, and wine glass holder are all flush-integrated — no add-on accessories or separate components. The adjustable width locks firmly at multiple settings, the non-slip grips protect the tub surface, and the bamboo material ages gracefully in a humid environment. The tray stores flat against a wall or behind a vanity when not in use.',
      },
      {
        kind: 'discipline',
        sectionType: 'industrialDesign',
        heading: 'Industrial Design',
        body: 'The tray\'s visual language balances the warmth of natural bamboo with the precision of brushed stainless steel. The U-handles are both functional and expressive — they signal grip points and add a material contrast that elevates the object beyond a basic board. The integrated features (phone slot, tablet arch, wine glass cutout) are machined cleanly into the surface, maintaining a flat overall profile when viewed from above.',
        media: img(
          '/media/launch/projects/123_design_blog_new_products_1 (4).jpg',
          'RACK — extended width showing adjustable arms',
        ),
      },
      {
        kind: 'discipline',
        sectionType: 'mechanicalEngineering',
        heading: 'Mechanical Engineering',
        body: 'The telescoping extension mechanism locks at multiple width settings with positive detents that prevent collapse during use. Load analysis confirmed stability with a tablet on the arch stand, a phone in the slot, and a filled wine glass — all simultaneously at maximum extension. The stainless steel arch stand was engineered to hold devices at a comfortable viewing angle while folding flush with the tray surface for storage.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
              'RACK — bamboo tray with stainless steel U-handles, phone slot, and tablet arch stand',
              1280,
              854,
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_1 (2).jpg',
              'RACK — integrated wine glass holder and tablet stand detail',
              1280,
              854,
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_1 (3).jpg',
              'RACK — side profile showing bamboo surface and stainless steel handle attachment',
              1280,
              854,
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_1 (4).jpg',
              'RACK — telescoping extension at maximum width with positive-lock detents',
              1280,
              854,
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_1 (5).jpg',
              'RACK — brushed stainless steel U-handle grip detail',
              1280,
              854,
            ),
          },
          {
            media: img(
              '/media/launch/projects/123_design_blog_new_products_1 (6).jpg',
              'RACK — tray stored flat against wall, compact profile',
              1280,
              854,
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Bamboo tray body with brushed stainless steel U-handles. Integrated phone slot, tablet stand with metal arch support, and circular wine glass holder. Telescoping adjustable width with positive-lock detents. Non-slip tub contact points. Flat-fold storage.',
      },
    ],
    seo: {
      title: 'RACK Bath Tray — Product Design & Engineering | 123.design',
      description:
        'A premium bamboo bath tray with integrated phone slot, tablet stand, and wine glass holder. Stainless steel U-handles and adjustable width let it span...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-spoony',
    slug: SPOONY_SLUG,
    title: 'SPOONY',
    summary:
      'A smart temperature-controlled spoon with induction heating and cooling. Engineered to heat soups, chill desserts, and maintain food at the ideal serving temperature — all from a single handheld utensil.',
    heroMedia: img(
      '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
      'SPOONY heated spoon — three colourways',
      1600,
      900,
    ),
    industries: ['Kitchen'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2023,
    metrics: {
      timeline: '18 months (prototype to production)',
      budgetRange: '$300K–$500K',
      performanceSpecs: ['Induction heating & cooling', 'FDA-approved food contact', 'Glass-filled nylon body'],
      unitsProduced: '3,000+ units (bridge tooling run)',
      customMetrics: [
        { label: 'Tooling Strategy', value: 'Aluminum bridge tooling (5,000-shot lifespan)' },
        { label: 'Defect Rate', value: '2% (after gate location optimization)' },
      ],
    },
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'SPOONY is a smart temperature-controlled utensil that uses induction technology to both heat and cool food. A ceramic-coated spoon bowl with integrated induction rings can warm soups and sauces or chill desserts to the ideal serving temperature. Two buttons on the handle let the user switch between heating and cooling modes, with visual indicators showing the active temperature zone. The rechargeable battery and compact charging dock make it a self-contained kitchen tool — no cords during use.',
        media: img(
          '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
          'SPOONY smart spoon — multiple colourways with charging dock',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Temperature-controlled kitchen tools typically require external power, bulky housings, or compromise on the eating experience. The brief was to engineer a utensil that delivers genuine heating and cooling performance while feeling like a natural spoon in the hand — lightweight, balanced, and intuitive to use at the table. The dual-mode thermal system had to fit inside a spoon-sized form factor without sacrificing battery life or safety.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Induction heating and cooling were chosen over resistive elements for faster thermal response and more even temperature distribution across the bowl. The ceramic coating provides a food-safe, easy-clean surface that does not metallically taint flavours. The handle houses the battery, control electronics, and two tactile buttons — one for heat (indicated by a warm ring), one for cool (indicated by a blue ring). The charging dock uses pogo-pin contacts and doubles as a countertop stand with an LED status indicator.',
        media: img(
          '/media/launch/projects/248527da-fefa-4432-83d7-f2a41307cacc.jpg',
          'SPOONY — induction ring detail showing thermal zones',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'SPOONY delivers a genuinely dual-function kitchen utensil: it heats soups and stews to a comfortable eating temperature and chills desserts and ice cream for a firmer consistency. The ceramic bowl stays neutral to taste, the handle remains cool to the touch during heating mode, and the battery supports multiple servings per charge. The form factor is close to a standard spoon — compact enough to use naturally at the table.',
      },
      {
        kind: 'discipline',
        sectionType: 'industrialDesign',
        heading: 'Industrial Design',
        body: 'The bowl geometry was optimised for both thermal surface area and eating comfort — wide enough for efficient induction coupling, shaped naturally for lifting food. The handle profile tapers for a secure grip and positions the two control buttons within thumb reach. The charging dock was designed as a minimal countertop object that holds the spoon at a resting angle, with an LED ring communicating charge state and mode readiness.',
        media: img(
          '/media/launch/projects/0a1204ff-86f3-44b1-970e-cfb8c883a9bc.jpg',
          'SPOONY — side profile showing handle ergonomics',
        ),
      },
      {
        kind: 'discipline',
        sectionType: 'mechanicalEngineering',
        heading: 'Mechanical & Electrical Engineering',
        body: 'The induction coil was sized and positioned to couple efficiently with the ceramic-coated bowl substrate. Thermal management isolates the battery compartment from the heating zone to maintain safe operating temperatures. The control circuit supports two discrete thermal modes with indicator feedback. Battery capacity was validated for multiple heating and cooling cycles per charge, and the pogo-pin dock connection eliminates wear-prone exposed connectors.',
        media: img(
          '/media/launch/projects/47c0b82e-3d94-497e-a75b-8510ab2737d8.jpg',
          'SPOONY — charging dock with LED status indicator',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
              'SPOONY — colourways with charging dock',
              1600,
              900,
            ),
          },
          {
            media: img(
              '/media/launch/projects/1bad19be-c681-44e1-b684-ed5592c44a15.jpg',
              'SPOONY — full product family',
            ),
          },
          {
            media: img(
              '/media/launch/projects/34b26467-fb16-4c55-a506-090be4239985.jpg',
              'SPOONY — top-down view showing bowl and handle form',
            ),
          },
          {
            media: img(
              '/media/launch/projects/565828ca-64ae-44cc-9ef3-fd3fde21daac.jpg',
              'SPOONY — variant with charging dock',
            ),
          },
          {
            media: img(
              '/media/launch/projects/0a1204ff-86f3-44b1-970e-cfb8c883a9bc.jpg',
              'SPOONY — side profile showing handle and button placement',
            ),
          },
          {
            media: img(
              '/media/launch/projects/248527da-fefa-4432-83d7-f2a41307cacc.jpg',
              'SPOONY — induction ring thermal zones on bowl underside',
            ),
          },
          {
            media: img(
              '/media/launch/projects/6374c322-53c8-4e11-88d4-9b20e74947dd.jpg',
              'SPOONY — bowl detail with thermal indicator ring',
            ),
          },
          {
            media: img(
              '/media/launch/projects/07964f5d-d6ef-420c-9a52-e91f97349dfb.jpg',
              'SPOONY — green variant induction ring detail',
            ),
          },
          {
            media: img(
              '/media/launch/projects/09e72b74-6f40-4a4d-afd6-9fe4d0d10936.jpg',
              'SPOONY — alternate variant thermal zone detail',
            ),
          },
          {
            media: img(
              '/media/launch/projects/81134d30-b341-4e59-bc7f-054f37c7c88b.jpg',
              'SPOONY — handle control button close-up',
            ),
          },
          {
            media: img(
              '/media/launch/projects/47c0b82e-3d94-497e-a75b-8510ab2737d8.jpg',
              'SPOONY — charging dock with status LED',
            ),
          },
          {
            media: img(
              '/media/launch/projects/bf46d228-b42d-43ce-99fc-bb67b210bb79.jpg',
              'SPOONY — charging dock LED indicator state',
            ),
          },
          {
            media: img(
              '/media/launch/projects/2edfa118-40b3-40e2-842a-5bfa83d56a20.jpg',
              'SPOONY — in-use lifestyle shot, hot application',
            ),
          },
          {
            media: img(
              '/media/launch/projects/cd21d58b-5d21-41a8-9677-5993cf521e35.jpg',
              'SPOONY — dessert application',
            ),
          },
          {
            media: img(
              '/media/launch/projects/da673554-c904-4aed-b6c8-d73372a196b7.jpg',
              'SPOONY — chilled dessert serving',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Dual-mode induction heating and cooling. Ceramic-coated spoon bowl. Rechargeable battery with pogo-pin charging dock. LED mode and charge indicators. Two-button control (heat/cool). Available in multiple colourways.',
      },
      {
        kind: 'video',
        media: {
          kind: 'VIDEO',
          url: '/media/work/video/41.mp4',
          width: 1280,
          height: 720,
          purpose: 'projectVideo',
          caption: 'SPOONY smart temperature-controlled spoon — product video showing green and blue variants on charging base',
        },
        caption: 'SPOONY — dual-mode induction heating and cooling spoon with charging dock',
      },
    ],
    seo: {
      title: 'SPOONY — Product Design & Engineering | 123.design',
      description:
        'A smart temperature-controlled spoon with induction heating and cooling. Engineered to heat soups, chill desserts, and maintain food at the ideal...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-tamarack',
    slug: TAMARACK_SLUG,
    title: 'Tamarack Country Club',
    summary:
      'A two-storey Arts & Crafts country clubhouse in Greenwich, Connecticut. Cedar shingle cladding, natural stone base, and green-trimmed fenestration set against a golf course landscape.',
    heroMedia: img(
      '/media/launch/projects/tam-main-elevs-front.jpg',
      'Tamarack Country Club front elevation — cedar shingles, stone base, green trim',
      1280,
      853,
    ),
    industries: ['Architecture'],
    capabilities: ['Architecture', 'Architectural Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2023,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Tamarack Country Club is a two-storey Arts & Crafts clubhouse in Greenwich, Connecticut. The building is clad in cedar shingles with a natural stone base and green-trimmed windows and doors. It sits on a golf course site, with the front elevation addressing the arrival court and the side elevation facing the fairways. The design draws on traditional American club architecture — steep gabled roofs, deep overhangs, and natural materials that weather into the landscape.',
        media: img(
          '/media/launch/projects/tam-main-elevs-front.jpg',
          'Tamarack Country Club — front elevation with cedar shingles and stone base',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The club needed a building that felt established and timeless from the first day — not a modern structure trying to look traditional, but a design that appeared to have always belonged on the site. The Arts & Crafts idiom had to accommodate a large programme — dining, lounging, locker facilities, event spaces — without the building becoming visually overwhelming. The elevation design needed to communicate materiality, scale, and the relationship between the building and the golf course landscape.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The completed clubhouse reads as a natural extension of its Connecticut setting. Cedar shingles weather gracefully, the stone base anchors the building to the ground, and the green trim ties the fenestration to the surrounding landscape. The front elevation presents a welcoming, symmetrical arrival face, while the side elevation opens toward the golf course with a more relaxed, asymmetrical composition. The building has been photographed with an American flag flying from the entrance — a sign of its role as a community landmark.',
        media: img(
          '/media/launch/projects/tam-main-elevs-side.jpg',
          'Tamarack Country Club — side elevation facing the golf course',
        ),
      },
      {
        kind: 'discipline',
        sectionType: 'industrialDesign',
        heading: 'Architectural Design',
        body: 'The elevation design was developed through careful study of Arts & Crafts precedents — the proportion of shingle fields to stone base, the rhythm of window groupings, the depth of eave overhangs. The front elevation uses a central entrance motif with flanking window bays, creating a balanced arrival experience. The side elevation is more informal, with varied roof lines and window sizes that respond to the golf course views and the interior programme behind them.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/launch/projects/tam-main-elevs-front.jpg',
              'Tamarack Country Club — front elevation, cedar shingles, stone base, green-trimmed windows',
              1280,
              853,
            ),
          },
          {
            media: img(
              '/media/launch/projects/tam-main-elevs-side.jpg',
              'Tamarack Country Club — side elevation facing the golf course fairways',
              1280,
              853,
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Tamarack Country Club — Product Design & Engineering | 123.design',
      description:
        'A two-storey Arts & Crafts country clubhouse in Greenwich, Connecticut. Cedar shingle cladding, natural stone base, and green-trimmed fenestration set...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-trueli',
    slug: TRUELI_SLUG,
    title: 'TRUELI Adjustable Dumbbells',
    summary:
      'A pair of adjustable dumbbells with angular red and chrome housings, knurled grips, and a dial-select weight mechanism. TRUELI branding on the handle. Shown in a home fitness setting on a purple yoga mat.',
    heroMedia: img(
      '/media/work/sport/dumbbells/Dumbbells-1.jpg',
      'TRUELI Adjustable Dumbbells — red and chrome angular housings with knurled grip',
    ),
    industries: ['consumer-products'],
    capabilities: ['industrial-design', 'mechanical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2022,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'TRUELI is a pair of adjustable dumbbells featuring angular red and polished chrome housings with a knurled grip handle. The TRUELI brand mark is visible on the handle barrel. Each dumbbell uses a dial-select mechanism to adjust weight, replacing a full rack of individual dumbbells with a single compact unit per hand. The design balances aggressive, performance-oriented aesthetics with the clean lines needed for a home fitness environment.',
        media: img(
          '/media/work/sport/dumbbells/Dumbbells-1.jpg',
          'TRUELI — red and chrome angular dumbbell with knurled grip and TRUELI branding',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The adjustable dumbbell market is crowded with utilitarian designs that prioritize function over form. The brief was to create a pair that looks like a designed object — something a homeowner would be proud to display in their living space — without compromising the rugged durability required for daily strength training. The angular geometry needed to feel intentional, not accidental.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The angular faceted housing was chosen to create a distinctive silhouette that reads as performance equipment from any angle. The red and chrome colour split creates a clear visual hierarchy — red for the weight housing, chrome for the structural core and grip area. The knurled grip texture provides secure handling during sweaty workouts while adding a tactile quality that cheap plastic grips lack. The dial mechanism is positioned at the end of the handle for one-handed weight selection.',
        media: img(
          '/media/work/sport/dumbbells/Dumbbells-2.jpg',
          'TRUELI — pair shown on purple yoga mat in home fitness setting',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'TRUELI delivers a visually distinctive adjustable dumbbell that performs as well as it looks. The angular housing is immediately recognizable, the knurled grip provides secure handling, and the dial mechanism allows quick weight changes between sets. The pair sits compactly on a floor or shelf, replacing an entire dumbbell rack.',
      },
      {
        kind: 'discipline',
        sectionType: 'industrialDesign',
        heading: 'Industrial Design',
        body: 'The faceted angular geometry was developed through iterative form studies to balance visual aggression with ergonomic comfort. The red housing panels wrap around the chrome structural core, creating a two-material expression that communicates both performance and precision. The TRUELI brand mark on the handle barrel is positioned for visibility during use without interfering with grip.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/sport/dumbbells/Dumbbells-1.jpg',
              'TRUELI — red and chrome angular dumbbell with knurled grip',
            ),
          },
          {
            media: img(
              '/media/work/sport/dumbbells/Dumbbells-2.jpg',
              'TRUELI — pair on purple yoga mat in home setting',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Adjustable weight via dial-select mechanism. Angular red and chrome housing. Knurled grip handle with TRUELI branding. Compact form factor replacing a full dumbbell rack. Designed for home fitness use.',
      },
    ],
    seo: {
      title: 'TRUELI Adjustable Dumbbells — Product Design & Engineering | 123.design',
      description:
        'A pair of adjustable dumbbells with angular red and chrome housings, knurled grips, and a dial-select weight mechanism. TRUELI branding on the handle....',
    },
    relatedProjects: [],
  },
  {
    id: 'static-golf-caddy',
    slug: GOLF_CADDY_SLUG,
    title: 'Golf Caddy',
    summary:
      'A three-wheel foldable golf trolley with a white frame and green accents. Carries a full golf bag, folds flat for transport, and locks into three stable configurations for use on the course.',
    heroMedia: img(
      '/media/work/sport/golf-caddy/golf_caddy-1.jpg',
      'Golf Caddy — white frame with green accents, three configurations shown',
    ),
    industries: ['consumer-products'],
    capabilities: ['industrial-design', 'mechanical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2021,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'The Golf Caddy is a three-wheel foldable trolley designed to carry a full golf bag across the course. The white tubular frame is accented with green structural elements — handle grips, bag straps, and folding hinges. Three large spoked wheels provide stability on uneven terrain. The trolley folds into a compact flat profile for car boot storage and locks into three distinct configurations: fully deployed for play, partially folded for transport, and fully collapsed for storage.',
        media: img(
          '/media/work/sport/golf-caddy/golf_caddy-1.jpg',
          'Golf Caddy — three configurations: loaded, folded, and collapsed',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Golf trolleys need to be lightweight enough to push comfortably over 18 holes, stable enough to carry a heavy bag on slopes, and compact enough to fit in a car boot. Most designs compromise on one of these. The brief was to engineer a three-wheel system that excels at all three — with a folding mechanism that is intuitive, positive-locking, and durable across thousands of fold cycles.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The three-wheel layout was chosen over four wheels for reduced weight and a tighter turning radius on narrow fairway paths. The white frame keeps the visual weight low, while the green accents serve a functional purpose — they mark all interaction points: where to grip, where to fold, where to secure the bag. The large spoked wheels distribute weight evenly and roll smoothly over rough ground. The folding hinge uses a positive-lock cam mechanism that clicks firmly into each configuration.',
        media: img(
          '/media/work/sport/golf-caddy/golf_caddy-2.jpg',
          'Golf Caddy — in use on course with golfer, bag loaded',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The Golf Caddy delivers a lightweight, stable, and compact trolley that performs across all three use cases. The three-wheel design handles slopes and rough terrain with confidence, the folding mechanism is intuitive and locks positively, and the compact folded profile fits easily in a standard car boot. The white and green colour scheme is clean and distinctive on the course.',
      },
      {
        kind: 'discipline',
        sectionType: 'mechanicalEngineering',
        heading: 'Mechanical Engineering',
        body: 'The tubular frame was engineered for a high strength-to-weight ratio using lightweight alloy. The three-wheel geometry was analyzed for stability across slope angles up to 15 degrees with a full bag load. The folding hinge mechanism uses a cam-lock system with positive detents at each configuration — fully deployed, partially folded, and fully collapsed. Load testing confirmed durability across thousands of fold cycles without play or looseness.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/sport/golf-caddy/golf_caddy-1.jpg',
              'Golf Caddy — three configurations: loaded, folded, collapsed',
            ),
          },
          {
            media: img(
              '/media/work/sport/golf-caddy/golf_caddy-2.jpg',
              'Golf Caddy — in use on course with golfer swinging',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Three-wheel foldable golf trolley. White tubular frame with green accent elements. Large spoked wheels for uneven terrain. Positive-lock cam folding mechanism with three configurations. Compact folded profile for car boot storage. Designed for 18-hole course use.',
      },
    ],
    seo: {
      title: 'Golf Caddy — Product Design & Engineering | 123.design',
      description:
        'A three-wheel foldable golf trolley with a white frame and green accents. Carries a full golf bag, folds flat for transport, and locks into three...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-520-madison',
    slug: MADISON_SLUG,
    title: '520 Madison Avenue',
    summary:
      'A commercial office interior at 520 Madison Avenue, New York. Glass partition walls, warm wood paneling, and recessed linear lighting create a modern corporate workspace with clear sightlines and natural material warmth.',
    heroMedia: img(
      '/media/work/architecture/520-madison-avenue-ny/01.jpg',
      '520 Madison Avenue — glass partitions, wood paneling, recessed linear lighting',
    ),
    industries: ['other'],
    capabilities: ['industrial-design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: '520 Madison Avenue is a commercial office interior in Midtown Manhattan. The space features floor-to-ceiling glass partition walls that maintain visual connectivity between work areas while providing acoustic separation. Warm wood paneling on the lower walls and ceiling creates a welcoming contrast to the cool glass and metal elements. Recessed linear LED lighting runs the length of the ceiling, providing even illumination without visible fixtures. The design balances corporate professionalism with human comfort.',
        media: img(
          '/media/work/architecture/520-madison-avenue-ny/01.jpg',
          '520 Madison Avenue — open plan with glass partitions and wood paneling',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief was to design a modern office interior that feels both professional and inviting — avoiding the sterility of all-glass corporate spaces while maintaining the openness and light that modern workplaces demand. The design needed to accommodate flexible workstation layouts, provide acoustic privacy where needed, and create a cohesive visual identity across a large floor plate.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The completed interior achieves a balance between transparency and warmth. Glass partitions maintain sightlines across the floor plate while the wood paneling grounds the space with natural material texture. The recessed linear lighting provides uniform illumination without the visual clutter of pendant fixtures. Potted trees at regular intervals add a biophilic element that softens the corporate environment.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/architecture/520-madison-avenue-ny/01.jpg',
              '520 Madison Avenue — open plan workspace with glass and wood',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Commercial office interior, Midtown Manhattan. Floor-to-ceiling glass partition walls. Warm wood paneling on lower walls and ceiling. Recessed linear LED lighting. Flexible workstation layout. Biophilic elements with potted trees.',
      },
    ],
    seo: {
      title: '520 Madison Avenue — Product Design & Engineering | 123.design',
      description:
        'A commercial office interior at 520 Madison Avenue, New York. Glass partition walls, warm wood paneling, and recessed linear lighting create a modern...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-cd-player',
    slug: CD_PLAYER_SLUG,
    title: 'CD Portal',
    summary:
      'A USB-powered disc-shaped CD player with a blue LED accent ring. The "CD PORTAL" branded device accepts discs through a top-loading slot, with the disc partially visible through the transparent upper surface.',
    heroMedia: img(
      '/media/work/consumer-electronics/cd-player/cd_player_1.jpg',
      'CD Portal — disc-shaped USB-powered CD player with blue LED ring',
    ),
    industries: ['electronics'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'CD Portal is a USB-powered CD player with a distinctive disc-shaped form that mirrors the media it plays. The circular body features a blue LED accent ring around the perimeter, a top-loading disc slot, and a transparent upper surface through which the spinning disc is partially visible. The "CD PORTAL" brand name is printed on the top surface. A USB cable provides both power and digital audio output, making it a compact desktop music solution.',
        media: img(
          '/media/work/consumer-electronics/cd-player/cd_player_1.jpg',
          'CD Portal — top view showing disc slot and blue LED ring',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'By the late 2000s, CD players had become commoditized black boxes with no design identity. The brief was to create a CD player that celebrated the disc format — making the spinning disc a visual feature rather than hiding it inside a rectangular case. The design needed to be compact, USB-powered for desktop use, and visually distinctive enough to stand out as a designed object.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The disc-shaped form was the natural starting point — a CD player that looks like a CD. The blue LED ring serves multiple purposes: it provides ambient lighting, indicates power status, and creates a visual halo effect when the device is in use. The transparent upper surface lets the user see the disc spinning inside, turning the mechanical action into a visual feature. The USB connection eliminates the need for a separate power adapter.',
        media: img(
          '/media/work/consumer-electronics/cd-player/cd_player_2.jpg',
          'CD Portal — top-down view showing circular form and disc slot',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'CD Portal delivers a visually distinctive CD player that celebrates the disc format. The circular form is immediately recognizable, the blue LED ring creates an ambient glow, and the transparent top lets the spinning disc become part of the visual experience. The USB-powered design makes it a clean desktop solution with no external power brick.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-electronics/cd-player/cd_player_1.jpg',
              'CD Portal — angled view with disc partially inserted and blue LED ring',
            ),
          },
          {
            media: img(
              '/media/work/consumer-electronics/cd-player/cd_player_2.jpg',
              'CD Portal — top-down view showing circular form factor',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'USB-powered CD player. Disc-shaped circular form factor. Blue LED accent ring. Top-loading disc slot with transparent upper surface. "CD PORTAL" branding. Compact desktop footprint. USB audio output.',
      },
    ],
    seo: {
      title: 'CD Portal — Product Design & Engineering | 123.design',
      description:
        'A USB-powered disc-shaped CD player with a blue LED accent ring. The "CD PORTAL" branded device accepts discs through a top-loading slot, with the disc...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-tablet',
    slug: TABLET_SLUG,
    title: 'Tablet with Wireless Keyboard',
    summary:
      'A white tablet concept with a home button and iOS-style interface, paired with a compact wireless keyboard featuring blue lettering and dual USB ports. Clean, minimalist ecosystem design.',
    heroMedia: img(
      '/media/work/consumer-electronics/tablet/tablet_1.jpg',
      'Tablet with Wireless Keyboard — white tablet and compact keyboard with blue lettering',
    ),
    industries: ['electronics'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A tablet and wireless keyboard concept designed as a cohesive ecosystem. The white tablet features a circular home button, a thin bezel, and a blue-tinted screen showing an iOS-style interface with app icons. The companion keyboard is compact and rectangular, with white keys and blue lettering, dual USB ports on the side for peripheral connectivity, and a slim profile that matches the tablet\'s design language. Both devices share a clean, minimalist aesthetic.',
        media: img(
          '/media/work/consumer-electronics/tablet/tablet_1.jpg',
          'Tablet and keyboard — white tablet with home button and compact wireless keyboard',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Tablet keyboards in the early 2010s were either bulky laptop docks or flimsy Bluetooth accessories that felt like afterthoughts. The brief was to design a keyboard that felt like a native part of the tablet ecosystem — matching its material language, proportions, and design intent — while providing a genuine typing experience with USB connectivity for additional peripherals.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The keyboard was designed from the tablet outward — same white material, same edge radius, same visual weight. The blue key lettering echoes the blue screen tint of the tablet, creating a cohesive colour story. The dual USB ports on the keyboard side transform it from a simple input device into a connectivity hub, allowing a mouse or storage device to be connected alongside the tablet. The compact layout sacrifices the number pad for portability.',
        media: img(
          '/media/work/consumer-electronics/tablet/tablet_2.jpg',
          'Keyboard detail — blue lettering on white keys, dual USB ports on side',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The tablet and keyboard concept delivers a cohesive ecosystem where both devices feel like they were designed together. The shared white material language, blue accent colour, and matching proportions create visual harmony. The keyboard\'s USB ports add practical functionality beyond typing, and the compact form factor maintains portability.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-electronics/tablet/tablet_1.jpg',
              'Tablet and keyboard — full ecosystem view',
            ),
          },
          {
            media: img(
              '/media/work/consumer-electronics/tablet/tablet_2.jpg',
              'Keyboard detail — blue lettering and USB ports',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'White tablet with circular home button and thin bezel. Compact wireless keyboard with blue key lettering. Dual USB ports on keyboard side. Shared material language and edge radius. Bluetooth connectivity between devices.',
      },
    ],
    seo: {
      title: 'Tablet with Wireless Keyboard — Product Design & Engineering | 123.design',
      description:
        'A white tablet concept with a home button and iOS-style interface, paired with a compact wireless keyboard featuring blue lettering and dual USB ports....',
    },
    relatedProjects: [],
  },
  {
    id: 'static-defibrillator',
    slug: DEFIB_SLUG,
    title: 'Portable Defibrillator',
    summary:
      'A next-generation AED with a transparent dome revealing internal electrode pads and wiring, a red LED accent ring, and two large blue directional control buttons. Futuristic medical device design.',
    heroMedia: img(
      '/media/work/medical/defibrillator/medical_1.jpg',
      'Portable Defibrillator — transparent dome AED with red LED ring and blue control buttons',
    ),
    industries: ['medical'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A next-generation automated external defibrillator (AED) with a distinctive transparent dome that reveals the internal electrode pads and wiring. The device body is a smooth grey housing with a red LED accent ring running around the perimeter of the dome. Two large blue directional buttons — marked with arrow symbols — serve as the primary user interface. The design makes the life-saving technology visible rather than hidden, communicating both function and urgency.',
        media: img(
          '/media/work/medical/defibrillator/medical_1.jpg',
          'Defibrillator — transparent dome showing internal components, red LED ring, blue buttons',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'AEDs are emergency devices that must be instantly recognizable, intuitive to operate under stress, and visually communicate their purpose to untrained bystanders. Most AEDs look like plain boxes with minimal visual identity. The brief was to design an AED that is immediately identifiable as a life-saving device, with controls so clear that anyone can operate them in a panic situation.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The transparent dome was the key design decision — it makes the internal technology visible, communicating that this is a sophisticated medical device while also allowing visual inspection of the electrode pads without opening the unit. The red LED ring serves as a status indicator and creates a visual beacon that draws attention in an emergency. The two large blue buttons with directional arrows provide an unambiguous interface: follow the arrows. The smooth grey housing is easy to clean and resistant to impact.',
        media: img(
          '/media/work/medical/defibrillator/medical_2.jpg',
          'Defibrillator — two units showing transparent dome from different angles',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The defibrillator delivers a visually distinctive AED that is immediately recognizable as a medical emergency device. The transparent dome communicates sophistication and allows pad inspection, the red LED ring provides clear status indication, and the two-button interface is simple enough for untrained users. The design has been photographed in both rendered and physical prototype form.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/defibrillator/medical_1.jpg',
              'Defibrillator — front view with transparent dome and red LED ring',
            ),
          },
          {
            media: img(
              '/media/work/medical/defibrillator/medical_2.jpg',
              'Defibrillator — two units showing dome transparency and internal components',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Automated external defibrillator (AED). Transparent dome revealing internal electrode pads and wiring. Red LED accent ring for status indication. Two large blue directional control buttons. Smooth grey impact-resistant housing. Designed for public access and emergency use.',
      },
    ],
    seo: {
      title: 'Portable Defibrillator — Product Design & Engineering | 123.design',
      description:
        'A next-generation AED with a transparent dome revealing internal electrode pads and wiring, a red LED accent ring, and two large blue directional...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-bpm',
    slug: BPM_SLUG,
    title: 'Blood Pressure Monitor',
    summary:
      'A cuffless blood pressure monitor with a circular blue arm-insertion opening, white housing, and green power indicator. "Medpower" branding. Includes a separate compact display unit showing systolic/diastolic readings.',
    heroMedia: img(
      '/media/work/medical/blood-pressure-monitor/bpm_1.jpg',
      'Blood Pressure Monitor — cuffless design with circular blue opening and separate display',
    ),
    industries: ['medical'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A cuffless blood pressure monitor from Medpower featuring a distinctive circular blue opening where the user inserts their arm. The main unit has a smooth white housing with a blue ring accent and a green power indicator button. A separate compact display unit shows systolic and diastolic readings (120/68 visible) along with pulse rate, controlled by blue buttons. The design eliminates the traditional inflatable cuff in favor of a more comfortable, streamlined measurement experience.',
        media: img(
          '/media/work/medical/blood-pressure-monitor/bpm_1.jpg',
          'Blood Pressure Monitor — main unit with circular blue opening and separate display',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Traditional blood pressure monitors require an inflatable cuff that wraps around the arm — uncomfortable, intimidating for some users, and prone to inaccurate readings if positioned incorrectly. The brief was to design a cuffless monitor that maintains clinical accuracy while providing a more comfortable, less clinical user experience. The device needed to feel at home in a domestic setting, not just a medical office.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The circular arm-insertion opening replaces the cuff with a guided positioning system — the user inserts their arm to a natural depth and the sensors engage automatically. The blue ring around the opening provides a clear visual target for arm placement. The white housing with minimal controls keeps the device approachable. The separate display unit is small enough to hold in one hand, with large numerals for easy reading and blue buttons that match the main unit\'s colour accent.',
        media: img(
          '/media/work/medical/blood-pressure-monitor/bpm_2.jpg',
          'Blood Pressure Monitor — on bedside table in domestic setting',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The Medpower blood pressure monitor delivers a cuffless measurement experience that is more comfortable and less intimidating than traditional devices. The circular arm opening provides guided positioning, the separate display unit is clear and easy to read, and the overall design fits naturally in a home environment. The device has been photographed in both studio and domestic settings.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/blood-pressure-monitor/bpm_1.jpg',
              'Blood Pressure Monitor — studio view with main unit and display',
            ),
          },
          {
            media: img(
              '/media/work/medical/blood-pressure-monitor/bpm_2.jpg',
              'Blood Pressure Monitor — on bedside table in home setting',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Cuffless blood pressure monitoring. Circular arm-insertion opening with blue ring guide. White housing with green power indicator. Separate compact display unit showing systolic/diastolic/pulse. Blue control buttons. "Medpower" branding. Designed for home and clinical use.',
      },
    ],
    seo: {
      title: 'Blood Pressure Monitor — Product Design & Engineering | 123.design',
      description:
        'A cuffless blood pressure monitor with a circular blue arm-insertion opening, white housing, and green power indicator. "Medpower" branding. Includes a...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-bomb-squad',
    slug: BOMB_SQUAD_SLUG,
    title: 'Bomb Squad Robot Controller',
    summary:
      'A rugged carbon-fiber portable controller for remote bomb disposal robot operation. Features a flip-up tactical display screen, full keyboard, antenna, and joystick. Military-grade design for field deployment.',
    heroMedia: img(
      '/media/work/military/bomb-squad-remote/bomb_squad_remote-1.jpg',
      'Bomb Squad Robot Controller — carbon-fiber case with flip-up tactical screen',
    ),
    industries: ['defense-security'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A rugged portable controller designed for remote operation of bomb disposal robots. The carbon-fiber textured housing provides durability and a professional military aesthetic. A flip-up display screen shows a tactical map interface with robot position, camera feeds, and system status. The base unit contains a full keyboard for data entry, a joystick for robot navigation, and an antenna for wireless communication. The entire system is designed for field deployment by EOD (Explosive Ordnance Disposal) technicians.',
        media: img(
          '/media/work/military/bomb-squad-remote/bomb_squad_remote-1.jpg',
          'Bomb Squad Controller — carbon-fiber case with tactical screen and keyboard',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Bomb disposal robot controllers must operate reliably in high-stress, high-stakes environments where a single mistake can be fatal. The interface needs to provide clear situational awareness, precise robot control, and reliable communication — all while being portable enough to carry to a scene and rugged enough to survive field conditions. The brief was to design a controller that military EOD technicians could operate confidently under extreme pressure.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The carbon-fiber housing was chosen for its strength-to-weight ratio and military-grade durability. The flip-up screen positions the tactical display at an optimal viewing angle while protecting it during transport. The full keyboard allows rapid data entry for mission parameters and notes. The joystick provides precise robot navigation control. The antenna ensures reliable wireless communication at distance. Every element serves a critical operational function — no decorative features.',
        media: img(
          '/media/work/military/bomb-squad-remote/bomb_squad_remote-2.jpg',
          'Bomb Squad Controller — military technician operating in field conditions',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The bomb squad robot controller delivers a rugged, field-deployable interface for remote EOD operations. The carbon-fiber housing survives harsh conditions, the tactical display provides clear situational awareness, and the joystick-keyboard combination allows precise robot control and rapid data entry. The system has been photographed in both studio and field deployment with military personnel.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/military/bomb-squad-remote/bomb_squad_remote-1.jpg',
              'Bomb Squad Controller — studio view with screen deployed',
            ),
          },
          {
            media: img(
              '/media/work/military/bomb-squad-remote/bomb_squad_remote-2.jpg',
              'Bomb Squad Controller — military technician operating in field',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Rugged carbon-fiber portable controller. Flip-up tactical display screen. Full keyboard for data entry. Joystick for robot navigation. Antenna for wireless communication. Designed for EOD field deployment. Military-grade durability.',
      },
    ],
    seo: {
      title: 'Bomb Squad Robot Controller — Product Design & Engineering | 123.design',
      description:
        'A rugged carbon-fiber portable controller for remote bomb disposal robot operation. Features a flip-up tactical display screen, full keyboard, antenna,...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-yacht',
    slug: YACHT_SLUG,
    title: 'Luxury Motor Yacht',
    summary:
      'A modern luxury motor yacht with an angular white hull, dark tinted windows, teak deck, and circular jacuzzi on the upper deck. Stern view reveals a tender garage with a speedboat. Cutting at speed through open water.',
    heroMedia: img(
      '/media/work/transportation/luxury-yacht/Luxury_Yacht-1.jpg',
      'Luxury Motor Yacht — angular white hull cutting through water at speed',
    ),
    industries: ['other'],
    capabilities: ['industrial-design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A modern luxury motor yacht featuring an angular white hull with dark tinted window bands, a teak deck, and a circular jacuzzi on the upper aft deck. The design emphasizes clean geometric lines — sharp bow angles, flat deck surfaces, and a stepped hull profile that reduces drag at speed. Radar and communication equipment are mounted on a central mast. The stern view reveals a tender garage housing a matching speedboat, accessed via a hydraulic platform.',
        media: img(
          '/media/work/transportation/luxury-yacht/Luxury_Yacht-1.jpg',
          'Luxury Motor Yacht — three-quarter view at speed with wake',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Luxury yacht design must balance aesthetic drama with hydrodynamic performance, interior volume with exterior profile, and owner privacy with entertaining space. The brief was to design a motor yacht that looks fast even at anchor — with a distinctive silhouette that stands out in a marina — while delivering the interior space, stability, and range expected of a luxury cruiser.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The angular hull geometry was chosen for both visual impact and hydrodynamic efficiency — the sharp bow cuts through waves cleanly, while the stepped hull profile reduces drag at cruising speed. The dark window band creates a continuous visual line around the superstructure, emphasizing length and speed. The teak deck provides warmth and tradition against the modern white hull. The circular jacuzzi on the upper deck is positioned for social use while underway. The tender garage in the stern maintains clean lines when the speedboat is stowed.',
        media: img(
          '/media/work/transportation/luxury-yacht/Luxury_Yacht-2.jpg',
          'Luxury Motor Yacht — stern view showing tender garage with speedboat',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The luxury motor yacht delivers a distinctive profile that combines modern angular aesthetics with proven yacht design principles. The angular hull is visually dramatic and hydrodynamically efficient, the teak deck adds traditional warmth, and the tender garage maintains clean stern lines. The design has been rendered in both underway and static configurations.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/transportation/luxury-yacht/Luxury_Yacht-1.jpg',
              'Luxury Motor Yacht — underway at speed with wake',
            ),
          },
          {
            media: img(
              '/media/work/transportation/luxury-yacht/Luxury_Yacht-2.jpg',
              'Luxury Motor Yacht — stern view with tender garage and speedboat',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Modern luxury motor yacht. Angular white hull with dark tinted window band. Teak deck surfaces. Circular upper deck jacuzzi. Stern tender garage with hydraulic platform. Radar and communication mast. Stepped hull profile for hydrodynamic efficiency.',
      },
    ],
    seo: {
      title: 'Luxury Motor Yacht — Product Design & Engineering | 123.design',
      description:
        'A modern luxury motor yacht with an angular white hull, dark tinted windows, teak deck, and circular jacuzzi on the upper deck. Stern view reveals a...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-coffee',
    slug: COFFEE_SLUG,
    title: 'Elite Coffee Maker',
    summary:
      'A red and black single-serve coffee machine with blue LED accent lighting around the dispensing area. "Elite" branding on the side. Features a Starbucks coffee pod slot, power button, and control buttons. Two white cups with metal bases sit in front.',
    heroMedia: img(
      '/media/work/appliances/coffee-maker/coffee.jpg',
      'Elite Coffee Maker — red and black single-serve machine with blue LED accent',
    ),
    industries: ['consumer-products'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'The Elite is a single-serve coffee machine with a bold red and black colour scheme and blue LED accent lighting around the dispensing area. The "Elite" brand name is printed in script on the side panel. A vertical slot on the right side accepts Starbucks coffee pods. The control panel features a green power button and three function buttons above the dispensing area. Two white ceramic cups with brushed metal bases sit on the countertop in front, completing the premium kitchen aesthetic.',
        media: img(
          '/media/work/appliances/coffee-maker/coffee.jpg',
          'Elite Coffee Maker — red and black with blue LED, Starbucks pod slot, two cups',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Single-serve coffee machines in the early 2010s were mostly white or silver plastic boxes with minimal design identity. The brief was to create a machine that looks like a premium kitchen appliance — something that earns its place on the countertop as a designed object, not just a functional tool. The design needed to accommodate pod-based brewing while creating a distinctive visual presence.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The bold red and black colour scheme was chosen to create a statement piece on the kitchen counter. The blue LED ring around the dispensing area serves as both a functional indicator (showing when coffee is brewing) and a dramatic visual element that gives the machine a futuristic quality. The vertical pod slot on the side is integrated cleanly into the form rather than protruding as an afterthought. The brushed metal cup bases echo the premium material language of the machine itself.',
        media: img(
          '/media/work/appliances/coffee-maker/coffee2.jpg',
          'Elite Coffee Maker — lifestyle shot in kitchen setting with user',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The Elite coffee machine delivers a visually bold single-serve brewing solution. The red and black colour scheme makes it a countertop statement piece, the blue LED ring creates a dramatic brewing indicator, and the integrated pod slot maintains clean lines. The design has been photographed in both studio and lifestyle kitchen settings.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/appliances/coffee-maker/coffee.jpg',
              'Elite Coffee Maker — studio view with cups and coffee pods',
            ),
          },
          {
            media: img(
              '/media/work/appliances/coffee-maker/coffee2.jpg',
              'Elite Coffee Maker — lifestyle kitchen setting',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Single-serve pod-based coffee machine. Red and black housing with blue LED accent ring. "Elite" branding. Vertical Starbucks pod slot. Green power button with three function buttons. Designed for countertop kitchen use.',
      },
      {
        kind: 'video',
        media: {
          kind: 'VIDEO',
          url: '/media/work/video/26.mp4',
          width: 1280,
          height: 720,
          purpose: 'projectVideo',
          caption: 'Elite Coffee Maker — product video showing red and black machine with blue LED accent in kitchen setting',
        },
        caption: 'Elite Coffee Maker — brewing demonstration in kitchen environment',
      },
    ],
    seo: {
      title: 'Elite Coffee Maker — Product Design & Engineering | 123.design',
      description:
        'A red and black single-serve coffee machine with blue LED accent lighting around the dispensing area. "Elite" branding on the side. Features a...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-vacuum',
    slug: VACUUM_SLUG,
    title: 'Teardrop Vacuum Cleaner',
    summary:
      'A teardrop-shaped vacuum cleaner with large integrated side wheels. Available in orange/white, teal/white, and red/grey colourways. Power cord extends from the front nose. Organic, futuristic form factor.',
    heroMedia: img(
      '/media/work/appliances/vacuum-cleaner/Vacuum_Cleaner-1.jpg',
      'Teardrop Vacuum Cleaner — orange/white and teal/white colourways with side wheels',
    ),
    industries: ['consumer-products'],
    capabilities: ['industrial-design', 'mechanical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A teardrop-shaped vacuum cleaner with a distinctive organic form factor. The smooth, egg-like body sits on two large integrated side wheels that double as design elements and functional mobility. Available in multiple colourways — orange and white, teal and white, and red and grey — each with a contrasting wheel colour. The power cord extends from the front nose of the unit. The design abandons the traditional upright or canister vacuum form in favor of a sculptural, almost toy-like appearance.',
        media: img(
          '/media/work/appliances/vacuum-cleaner/Vacuum_Cleaner-1.jpg',
          'Teardrop Vacuum — orange/white and teal/white colourways with large side wheels',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Vacuum cleaners are typically utilitarian appliances hidden in closets. The brief was to design a vacuum that people would not mind leaving out — a device with enough visual appeal to function as a household object rather than a hidden tool. The form needed to be compact, easy to maneuver, and visually distinctive without sacrificing suction performance.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The teardrop form was chosen for its natural rolling geometry — the curved body follows the floor contour, and the large side wheels provide stable mobility in any direction. The organic shape makes the vacuum feel approachable and almost playful, contrasting with the aggressive, angular designs of most cleaning appliances. The colour-split design (coloured body, white top, contrasting wheel) creates visual interest from every angle. The front-mounted power cord keeps the cord management simple and intuitive.',
        media: img(
          '/media/work/appliances/vacuum-cleaner/Vacuum_Cleaner-2.jpg',
          'Teardrop Vacuum — red/grey colourway showing smooth organic form',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The teardrop vacuum delivers a visually distinctive cleaning appliance that breaks from traditional vacuum design. The organic form is approachable and compact, the large side wheels provide smooth mobility, and the multiple colourways let users choose a version that matches their home decor. The design has been rendered in three colourways.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/appliances/vacuum-cleaner/Vacuum_Cleaner-1.jpg',
              'Teardrop Vacuum — orange/white and teal/white colourways',
            ),
          },
          {
            media: img(
              '/media/work/appliances/vacuum-cleaner/Vacuum_Cleaner-2.jpg',
              'Teardrop Vacuum — red/grey colourway',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Teardrop-shaped canister vacuum. Large integrated side wheels for mobility. Multiple colourways: orange/white, teal/white, red/grey. Front-mounted power cord. Organic form factor. Compact footprint for home use.',
      },
    ],
    seo: {
      title: 'Teardrop Vacuum Cleaner — Product Design & Engineering | 123.design',
      description:
        'A teardrop-shaped vacuum cleaner with large integrated side wheels. Available in orange/white, teal/white, and red/grey colourways. Power cord extends...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-hand-dryer',
    slug: HAND_DRYER_SLUG,
    title: 'Architectural Hand Dryer',
    summary:
      'A wall-mounted hand dryer with an angular sculptural form in copper/bronze metallic finish. Three units shown on a gray tiled wall. Features a curved dome top, dark air output slot, and vented lower section.',
    heroMedia: img(
      '/media/work/commercial/hand-dryer/hand_dryer_1.jpg',
      'Architectural Hand Dryer — three copper/bronze units on gray tiled wall',
    ),
    industries: ['other'],
    capabilities: ['industrial-design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A wall-mounted hand dryer with a distinctive angular sculptural form finished in a copper/bronze metallic coating. The design features a curved dome top that transitions into an angular body, with a dark air output slot at the bottom and a vented lower section for air intake. Three units are shown mounted in a row on a gray tiled wall, creating a rhythmic architectural pattern. The finish and form elevate the hand dryer from a utilitarian bathroom fixture to a designed object.',
        media: img(
          '/media/work/commercial/hand-dryer/hand_dryer_1.jpg',
          'Hand Dryer — three copper/bronze units mounted on gray tiled wall',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Hand dryers in public restrooms are typically white plastic boxes — functional but visually forgettable. In high-end commercial spaces (hotels, restaurants, corporate offices), the hand dryer needs to match the quality of the surrounding design. The brief was to create a hand dryer that architects and interior designers would specify as a design element, not just a functional necessity.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The angular sculptural form was designed to look like an architectural object rather than an appliance. The copper/bronze metallic finish was chosen for its warmth and premium quality — it complements both modern and traditional interior schemes. The curved dome top softens the angular body and creates a distinctive silhouette. The dark air output slot is integrated cleanly into the form rather than appearing as a separate grille. The vented lower section provides air intake while adding visual texture.',
        media: img(
          '/media/work/commercial/hand-dryer/hand_dryer_2.jpg',
          'Hand Dryer — close-up showing copper/bronze finish and air vent detail',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The architectural hand dryer delivers a premium wall-mounted drying solution that architects and designers can specify with confidence. The copper/bronze finish complements high-end interiors, the sculptural form adds visual interest to the restroom wall, and the integrated air slots maintain clean lines. The design has been rendered in both group and close-up views.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/commercial/hand-dryer/hand_dryer_1.jpg',
              'Hand Dryer — three units on gray tiled wall',
            ),
          },
          {
            media: img(
              '/media/work/commercial/hand-dryer/hand_dryer_2.jpg',
              'Hand Dryer — close-up showing finish and vent detail',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Wall-mounted hand dryer. Angular sculptural form with curved dome top. Copper/bronze metallic finish. Dark air output slot at bottom. Vented lower section for air intake. Designed for high-end commercial and hospitality interiors.',
      },
    ],
    seo: {
      title: 'Architectural Hand Dryer — Product Design & Engineering | 123.design',
      description:
        'A wall-mounted hand dryer with an angular sculptural form in copper/bronze metallic finish. Three units shown on a gray tiled wall. Features a curved...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-business-phone',
    slug: BUSINESS_PHONE_SLUG,
    title: 'Cisco Conference Phone',
    summary:
      'A Cisco-branded conference phone with a distinctive curved design. Silver body with dark gray accents, blue LED display strip, and circular keypad. Shown on a dark surface next to a cylindrical lamp.',
    heroMedia: img(
      '/media/work/communication/business-phone/Business_phone-1.jpg',
      'Cisco Conference Phone — curved silver design with blue LED display and circular keypad',
    ),
    industries: ['electronics'],
    capabilities: ['industrial-design', 'electrical-engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A Cisco-branded conference phone with a distinctive curved, almost clamshell-like form. The silver body features dark gray accent panels on the sides, a blue LED display strip across the top showing call information, and a circular keypad with standard phone buttons arranged in an arc. The Cisco logo with its bridge symbol is visible on the lower left. The design balances professional functionality with a sculptural form that looks at home on an executive desk.',
        media: img(
          '/media/work/communication/business-phone/Business_phone-1.jpg',
          'Cisco Conference Phone — curved silver design with blue LED and circular keypad',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Conference phones are typically flat, wide devices optimized for 360-degree microphone pickup but with little design identity. The brief was to create a conference phone that performs acoustically for group calls while looking like a premium communications device — something that reflects the quality of the Cisco brand and feels appropriate on a boardroom table or executive desk.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The curved form was chosen to optimize microphone placement around the device while creating a distinctive silhouette. The silver body with dark gray accents creates a professional two-tone palette. The blue LED display strip provides clear call status information without being distracting. The circular keypad arrangement follows the natural arc of the device form. The Cisco branding is subtle but visible, reinforcing brand identity without dominating the design.',
        media: img(
          '/media/work/communication/business-phone/PHONE-1.jpg',
          'Cisco Conference Phone — on dark surface next to cylindrical lamp',
        ),
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'The Cisco conference phone delivers a premium communications device with distinctive design identity. The curved form optimizes acoustic performance, the blue LED display provides clear status information, and the silver and dark gray colour scheme reflects professional quality. The design has been photographed in both studio and lifestyle desk settings.',
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/communication/business-phone/Business_phone-1.jpg',
              'Cisco Conference Phone — studio view showing curved form and keypad',
            ),
          },
          {
            media: img(
              '/media/work/communication/business-phone/PHONE-1.jpg',
              'Cisco Conference Phone — on desk next to lamp',
            ),
          },
        ],
      },
      {
        kind: 'technical',
        heading: 'Specifications',
        details:
          'Cisco-branded conference phone. Curved silver body with dark gray accent panels. Blue LED display strip. Circular keypad with arc button arrangement. 360-degree microphone pickup. Designed for boardroom and executive desk use.',
      },
    ],
    seo: {
      title: 'Cisco Conference Phone — Product Design & Engineering | 123.design',
      description:
        'A Cisco-branded conference phone with a distinctive curved design. Silver body with dark gray accents, blue LED display strip, and circular keypad....',
    },
    relatedProjects: [],
  },
  {
    id: 'static-armored-camera',
    slug: ARMORED_CAMERA_SLUG,
    title: 'Armored Vehicle Camera System',
    summary:
      'Boeing armored military vehicle with integrated camera and sensor system. Desert-tan MRAP-class vehicle with reinforced hull, run-flat tires, and roof-mounted sensor turret for surveillance and threat detection.',
    heroMedia: img(
      '/media/work/military/armored-vehicle-camera/ArmoredVehicleCamera-1.jpg',
      'Boeing armored vehicle with camera system — desert tan MRAP',
      1600,
      900,
    ),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Boeing armored vehicle camera system designed for MRAP-class military vehicles. The desert-tan armored hull features reinforced V-bottom geometry, run-flat tires, and a roof-mounted sensor turret. The camera system provides 360-degree situational awareness for crew protection and threat detection in combat zones.',
        media: img(
          '/media/work/military/armored-vehicle-camera/ArmoredVehicleCamera-1.jpg',
          'Boeing MRAP with camera turret — front three-quarter view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/military/armored-vehicle-camera/ArmoredVehicleCamera-1.jpg',
              'Armored vehicle — front view with sensor turret',
            ),
          },
          {
            media: img(
              '/media/work/military/armored-vehicle-camera/ArmoredVehicleCamera-2.jpg',
              'Armored vehicle — side profile showing hull geometry',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Armored Vehicle Camera System — Product Design & Engineering | 123.design',
      description:
        'Boeing armored military vehicle with integrated camera and sensor system. Desert-tan MRAP-class vehicle with reinforced hull, run-flat tires, and...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-binoculars',
    slug: BINOCULARS_SLUG,
    title: 'Tactical Binoculars',
    summary:
      'DRS Technologies military-grade optical device. Compact olive-drab housing with ergonomic grip, rubberized eyecups, and integrated mounting points. Designed for field durability and rapid target acquisition.',
    heroMedia: img(
      '/media/work/military/binoculars/Binoculars-1.jpg',
      'DRS Technologies tactical binoculars — olive drab housing',
      1600,
      900,
    ),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'DRS Technologies tactical binoculars designed for military field use. The compact olive-drab housing features ergonomic grip contours, rubberized eyecups for comfort during extended observation, and integrated mounting points for tripod or vehicle attachment. The form balances optical performance with portability and field durability.',
        media: img(
          '/media/work/military/binoculars/Binoculars-1.jpg',
          'Tactical binoculars — top view showing housing form',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/military/binoculars/Binoculars-1.jpg',
              'Binoculars — top view with DRS logo',
            ),
          },
          {
            media: img(
              '/media/work/military/binoculars/Binoculars-2.jpg',
              'Binoculars — side profile showing eyecup and grip',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Tactical Binoculars — Product Design & Engineering | 123.design',
      description:
        'DRS Technologies military-grade optical device. Compact olive-drab housing with ergonomic grip, rubberized eyecups, and integrated mounting points....',
    },
    relatedProjects: [],
  },
  {
    id: 'static-camcorder',
    slug: CAMCORDER_SLUG,
    title: 'Portable Camcorder',
    summary:
      'Sleek portable media player and camcorder with disc loading. Dark gray circular body with silver trim ring, touch-sensitive controls, and blue LED indicator. Compact disc-based design for portable video playback and recording.',
    heroMedia: img(
      '/media/work/consumer-electronics/cam-corder-portable-camera/Camcorder-1.jpg',
      'Portable camcorder — circular dark gray body with silver trim',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2008,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Portable camcorder and media player with a distinctive circular form factor. The dark gray body features a silver trim ring around the disc compartment, touch-sensitive playback controls, and a blue LED status indicator. The compact disc-based design enables portable video playback and recording in a pocketable form.',
        media: img(
          '/media/work/consumer-electronics/cam-corder-portable-camera/Camcorder-1.jpg',
          'Camcorder — top view showing disc compartment and controls',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-electronics/cam-corder-portable-camera/Camcorder-1.jpg',
              'Camcorder — top view with disc loading',
            ),
          },
          {
            media: img(
              '/media/work/consumer-electronics/cam-corder-portable-camera/Camcorder-2.jpg',
              'Camcorder — side profile showing slim form',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Portable Camcorder — Product Design & Engineering | 123.design',
      description:
        'Sleek portable media player and camcorder with disc loading. Dark gray circular body with silver trim ring, touch-sensitive controls, and blue LED...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-catamaran',
    slug: CATAMARAN_SLUG,
    title: 'LeisureCat Catamaran',
    summary:
      'LeisureCat power catamaran with dual-hull stability. White fiberglass hull with blue upholstery, stainless steel railings, and hardtop canopy. Twin outboard engines provide efficient cruising for day trips and coastal exploration.',
    heroMedia: img(
      '/media/work/transportation/catamaran/Catamaran-1.jpg',
      'LeisureCat catamaran — white hull with blue upholstery',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'LeisureCat power catamaran designed for recreational day cruising. The white fiberglass dual-hull design provides exceptional stability and shallow-draft capability. Blue upholstered seating, stainless steel safety railings, and a hardtop canopy create a comfortable cockpit. Twin outboard engines deliver efficient propulsion for coastal exploration.',
        media: img(
          '/media/work/transportation/catamaran/Catamaran-1.jpg',
          'Catamaran — aerial view showing dual hull and cockpit',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/transportation/catamaran/Catamaran-1.jpg',
              'Catamaran — aerial view with twin hulls',
            ),
          },
          {
            media: img(
              '/media/work/transportation/catamaran/Catamaran-2.jpg',
              'Catamaran — side profile showing hull geometry',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'LeisureCat Catamaran — Product Design & Engineering | 123.design',
      description:
        'LeisureCat power catamaran with dual-hull stability. White fiberglass hull with blue upholstery, stainless steel railings, and hardtop canopy. Twin...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-diamond',
    slug: DIAMOND_SLUG,
    title: 'Diamond Concept Yacht',
    summary:
      'Futuristic luxury yacht concept with angular geometric hull. Silver metallic finish with teak wood deck accents and black glass canopy. Dramatic bow design inspired by stealth aircraft geometry for high-speed performance.',
    heroMedia: img(
      '/media/work/transportation/diamond/Diamond-1.jpg',
      'Diamond yacht concept — angular silver hull with teak deck',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Diamond concept yacht featuring a dramatic angular hull inspired by stealth aircraft geometry. The silver metallic finish contrasts with warm teak wood deck accents and a black glass canopy. The sharp bow design reduces drag for high-speed performance while creating a distinctive visual identity on the water.',
        media: img(
          '/media/work/transportation/diamond/Diamond-1.jpg',
          'Diamond yacht — aerial view showing angular hull and teak deck',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/transportation/diamond/Diamond-1.jpg',
              'Diamond yacht — aerial view near coastal fortress',
            ),
          },
          {
            media: img(
              '/media/work/transportation/diamond/Diamond-2.jpg',
              'Diamond yacht — side profile showing bow geometry',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Diamond Concept Yacht — Product Design & Engineering | 123.design',
      description:
        'Futuristic luxury yacht concept with angular geometric hull. Silver metallic finish with teak wood deck accents and black glass canopy. Dramatic bow...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dictaphone',
    slug: DICTAPHONE_SLUG,
    title: 'Professional Dictaphone',
    summary:
      'Olympus professional dictation and transcription device. Silver-gray body with coiled handset cord, cassette tape compartment, and numeric keypad. Designed for medical, legal, and executive voice recording workflows.',
    heroMedia: img(
      '/media/work/commercial/dictaphone/Dictaphone-1.jpg',
      'Olympus dictaphone — silver body with cassette compartment',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2005,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Olympus professional dictaphone designed for medical, legal, and executive voice recording. The silver-gray body houses a cassette tape mechanism for analog recording, with a coiled handset cord for private playback. The numeric keypad enables quick navigation and indexing of recorded segments. The form balances desktop stability with portable operation.',
        media: img(
          '/media/work/commercial/dictaphone/Dictaphone-1.jpg',
          'Dictaphone — three-quarter view showing handset and keypad',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/commercial/dictaphone/Dictaphone-1.jpg',
              'Dictaphone — full view with coiled handset',
            ),
          },
          {
            media: img(
              '/media/work/commercial/dictaphone/Dictaphone-2.jpg',
              'Dictaphone — top view showing cassette compartment',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Professional Dictaphone — Product Design & Engineering | 123.design',
      description:
        'Olympus professional dictation and transcription device. Silver-gray body with coiled handset cord, cassette tape compartment, and numeric keypad....',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dvd-player',
    slug: DVD_PLAYER_SLUG,
    title: 'Portable DVD Player',
    summary:
      'Sleek portable DVD player with disc loading mechanism. Silver aluminum body with black accent panel and cyan LED strip. Compact wedge form factor with ventilation grilles for silent operation during media playback.',
    heroMedia: img(
      '/media/work/consumer-electronics/dvd-player/DVD Player.jpg',
      'Portable DVD player — silver body with cyan LED strip',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2007,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Portable DVD player with a distinctive wedge-shaped aluminum body. The silver finish contrasts with a black accent panel housing the disc loading mechanism. A cyan LED strip provides status indication along the top edge. Ventilation grilles on the sides enable silent operation during extended media playback.',
        media: img(
          '/media/work/consumer-electronics/dvd-player/DVD Player.jpg',
          'DVD player — three-quarter view with disc loading',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-electronics/dvd-player/DVD Player.jpg',
              'DVD player — disc loading mechanism open',
            ),
          },
          {
            media: img(
              '/media/work/consumer-electronics/dvd-player/DVD Player_2.jpg',
              'DVD player — top view showing LED strip',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Portable DVD Player — Product Design & Engineering | 123.design',
      description:
        'Sleek portable DVD player with disc loading mechanism. Silver aluminum body with black accent panel and cyan LED strip. Compact wedge form factor with...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-cleanser',
    slug: CLEANSER_SLUG,
    title: 'Washer Cleanser Campaign',
    summary:
      'Product advertisement for washing machine cleanser. Dark front-loading washer with colorful microbial illustration visible through the door. Bold headline and product bottle placement communicate cleaning effectiveness.',
    heroMedia: img(
      '/media/work/graphic/cleanser/Cleanser-1.jpg',
      'Washer cleanser ad — washing machine with microbial illustration',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2019,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Product advertisement for washing machine cleanser featuring a dramatic visual metaphor. The dark front-loading washer displays a colorful microbial illustration visible through the glass door, representing hidden bacteria and residue. Bold headline typography and strategic product bottle placement communicate cleaning effectiveness and maintenance benefits.',
        media: img(
          '/media/work/graphic/cleanser/Cleanser-1.jpg',
          'Cleanser ad — washing machine with colorful microbial graphic',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/graphic/cleanser/Cleanser-1.jpg',
              'Cleanser ad — full composition with headline',
            ),
          },
          {
            media: img(
              '/media/work/graphic/cleanser/Cleanser-2.jpg',
              'Cleanser ad — product bottle detail',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Washer Cleanser Campaign — Product Design & Engineering | 123.design',
      description:
        'Product advertisement for washing machine cleanser. Dark front-loading washer with colorful microbial illustration visible through the door. Bold...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER ELECTRONICS ===
  {
    id: 'static-gps-navigator',
    slug: GPS_NAV_SLUG,
    title: 'GPS Navigator',
    summary:
      'Handheld GPS navigation device with color display showing real-time speed, heading, and arrival time. Rugged casing designed for automotive and outdoor use with intuitive button layout.',
    heroMedia: img(
      '/media/work/consumer-electronics/gps-navigator/GPS_Navigator-1.jpg',
      'GPS navigator — color display showing speed, heading, and arrival time',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2009,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Handheld GPS navigation device featuring a color LCD display that shows real-time driving data including current speed (24 mph), compass heading (NW), and estimated arrival time (1:23). The interface displays a street-view map with a blue directional arrow for turn-by-turn guidance. The rugged casing is designed for both automotive mounting and handheld outdoor use, with an intuitive button layout for quick access to navigation functions while driving.',
        media: img(
          '/media/work/consumer-electronics/gps-navigator/GPS_Navigator-1.jpg',
          'GPS navigator display — speed, heading, arrival time, street map',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-electronics/gps-navigator/GPS_Navigator-1.jpg',
              'GPS navigator — front view with active display',
            ),
          },
          {
            media: img(
              '/media/work/consumer-electronics/gps-navigator/GPS_Navigator-2.jpg',
              'GPS navigator — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'GPS Navigator — Product Design & Engineering | 123.design',
      description:
        'Handheld GPS navigation device with color display showing real-time speed, heading, and arrival time. Rugged casing designed for automotive and outdoor...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-pda',
    slug: PDA_SLUG,
    title: 'Carbon Fiber PDA',
    summary:
      'Premium personal digital assistant with carbon fiber shell and vibrant blue display. Sleek black design with ergonomic grip and integrated stylus slot for mobile professionals.',
    heroMedia: img(
      '/media/work/consumer-electronics/pda/PDA-1.jpg',
      'Carbon fiber PDA — black shell with blue screen and stylus dock',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2006,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Premium personal digital assistant featuring a distinctive carbon fiber shell with woven texture visible along the edges. The vibrant blue backlit display shows a grid-based interface for contacts, calendar, and applications. The sleek black ergonomic form includes an integrated stylus slot and rubberized grip surfaces. Designed for mobile professionals who need reliable handheld computing with a premium aesthetic that distinguishes it from commodity plastic PDAs.',
        media: img(
          '/media/work/consumer-electronics/pda/PDA-1.jpg',
          'Carbon fiber PDA — angled view showing shell texture and display',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-electronics/pda/PDA-1.jpg',
              'PDA — front view with blue display',
            ),
          },
          {
            media: img(
              '/media/work/consumer-electronics/pda/PDA-2.jpg',
              'PDA — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Carbon Fiber PDA — Product Design & Engineering | 123.design',
      description:
        'Premium personal digital assistant with carbon fiber shell and vibrant blue display. Sleek black design with ergonomic grip and integrated stylus slot...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MILITARY & DEFENSE ===
  {
    id: 'static-gyrocam',
    slug: GYROCAM_SLUG,
    title: 'Gyrocam Surveillance System',
    summary:
      'Lockheed Martin gyro-stabilized camera system with helmet-mounted display and handheld control unit. Military-grade surveillance platform for aerial and ground reconnaissance.',
    heroMedia: img(
      '/media/work/military/gyrocam/Gyrocam-1.jpg',
      'Gyrocam system — helmet display and green control unit with joysticks',
      1600,
      900,
    ),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2005,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Lockheed Martin gyro-stabilized camera system designed for military surveillance and reconnaissance operations. The system includes a helmet-mounted display unit that provides real-time video feed to the operator, and a rugged green control unit with dual joysticks for precise camera positioning. The gyro-stabilization technology ensures steady imagery even from moving platforms such as aircraft or vehicles. The control unit features a sealed, weather-resistant housing suitable for field deployment in harsh environments.',
        media: img(
          '/media/work/military/gyrocam/Gyrocam-1.jpg',
          'Gyrocam — helmet display and control unit',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/military/gyrocam/Gyrocam-1.jpg',
              'Gyrocam system — complete setup',
            ),
          },
          {
            media: img(
              '/media/work/military/gyrocam/Gyrocam-2.jpg',
              'Gyrocam — control unit detail',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Gyrocam Surveillance System — Product Design & Engineering | 123.design',
      description:
        'Lockheed Martin gyro-stabilized camera system with helmet-mounted display and handheld control unit. Military-grade surveillance platform for aerial...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-manpack',
    slug: MANPACK_SLUG,
    title: 'Boeing Manpack Radio',
    summary:
      'Boeing military manpack communication device with rugged olive drab housing, multiple connector ports, and integrated carrying handle. Field-deployable tactical radio system.',
    heroMedia: img(
      '/media/work/military/manpack/Manpack-1.jpg',
      'Boeing manpack — olive drab housing with connectors and handle',
      1600,
      900,
    ),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Boeing military manpack communication device designed for field-deployable tactical operations. The rugged olive drab housing features multiple sealed connector ports for antenna, power, and data interfaces. An integrated carrying handle with reinforced mounting points allows soldiers to transport the unit quickly. The ventilation grille on the side panel ensures thermal management during extended operation. The design balances durability with portability for dismounted infantry communications.',
        media: img(
          '/media/work/military/manpack/Manpack-1.jpg',
          'Boeing manpack — three views showing connectors and handle',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/military/manpack/Manpack-1.jpg',
              'Manpack — complete views',
            ),
          },
          {
            media: img(
              '/media/work/military/manpack/Manpack-2.jpg',
              'Manpack — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Boeing Manpack Radio — Product Design & Engineering | 123.design',
      description:
        'Boeing military manpack communication device with rugged olive drab housing, multiple connector ports, and integrated carrying handle. Field-deployable...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: TRANSPORTATION ===
  {
    id: 'static-hydra',
    slug: HYDRA_SLUG,
    title: 'Hydra Speed Boat',
    summary:
      'Futuristic high-performance speed boat with dramatic orange and black aerodynamic hull. Sleek canopy design with integrated cockpit for extreme water sports.',
    heroMedia: img(
      '/media/work/transportation/hydra/Hydra-1.jpg',
      'Hydra speed boat — orange and black aerodynamic hull with canopy',
      1600,
      900,
    ),
    industries: ['Transportation'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['CON'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Hydra is a concept high-performance speed boat featuring a dramatic aerodynamic hull in orange and black. The swept-back canopy design integrates seamlessly with the hull lines, creating a low-profile silhouette optimized for speed. The open cockpit reveals racing-style seating with harness mounts. Silver hydrofoil-like supports elevate the hull above the water surface. The design language draws from aerospace and supercar aesthetics, positioning it as a statement piece for extreme water sports enthusiasts.',
        media: img(
          '/media/work/transportation/hydra/Hydra-1.jpg',
          'Hydra — full profile showing aerodynamic form',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/transportation/hydra/Hydra-1.jpg',
              'Hydra — three-quarter view',
            ),
          },
          {
            media: img(
              '/media/work/transportation/hydra/Hydra-2.jpg',
              'Hydra — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Hydra Speed Boat — Product Design & Engineering | 123.design',
      description:
        'Futuristic high-performance speed boat with dramatic orange and black aerodynamic hull. Sleek canopy design with integrated cockpit for extreme water...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: INDUSTRIAL ===
  {
    id: 'static-mail-extraction',
    slug: MAIL_EXTRACT_SLUG,
    title: 'Mail Extraction Machine',
    summary:
      'OPEX industrial mail extraction and processing system. Large-scale automated platform with multiple sorting stations, touchscreen controls, and high-throughput document handling.',
    heroMedia: img(
      '/media/work/industrial/mail-extraction/Mail_Extraction_Machine.jpg',
      'OPEX mail extraction machine — industrial sorting system with touchscreens',
      1600,
      900,
    ),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'OPEX industrial mail extraction and processing system designed for high-volume mailroom operations. The large-scale automated platform features multiple sorting stations with individual touchscreen control panels, document feed mechanisms, and output trays. The clean white and gray industrial design integrates complex mechanical systems behind accessible panel doors. The system handles extraction, sorting, and routing of mail pieces at high throughput, reducing manual labor in corporate and government mailrooms.',
        media: img(
          '/media/work/industrial/mail-extraction/Mail_Extraction_Machine.jpg',
          'Mail extraction machine — full system view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/industrial/mail-extraction/Mail_Extraction_Machine.jpg',
              'Mail extraction — complete system',
            ),
          },
          {
            media: img(
              '/media/work/industrial/mail-extraction/Mail_Extraction_Machine_2.jpg',
              'Mail extraction — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Mail Extraction Machine — Product Design & Engineering | 123.design',
      description:
        'OPEX industrial mail extraction and processing system. Large-scale automated platform with multiple sorting stations, touchscreen controls, and...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-handheld-massager',
    slug: MASSAGER_SLUG,
    title: 'Handheld Massager',
    summary:
      'Ergonomic handheld massage device with white and black housing, indicator lights, and branded "MASSAGE" label. Multiple speed settings for personal therapeutic use.',
    heroMedia: img(
      '/media/work/consumer-products/handheld-massager/Handheld_Massager-1.jpg',
      'Handheld massager — white and black body with indicator lights',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Ergonomic handheld massage device featuring a white and black two-tone housing with a contoured grip for comfortable extended use. The control panel includes indicator lights for power and speed settings, with a prominent "MASSAGE" brand label. The device offers multiple vibration speed settings for personal therapeutic use, targeting muscle tension and soreness. The compact form factor makes it portable for home or travel use.',
        media: img(
          '/media/work/consumer-products/handheld-massager/Handheld_Massager-1.jpg',
          'Handheld massager — front view with controls',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/handheld-massager/Handheld_Massager-1.jpg',
              'Massager — front view',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/handheld-massager/Handheld_Massager-2.jpg',
              'Massager — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Handheld Massager — Product Design & Engineering | 123.design',
      description:
        'Ergonomic handheld massage device with white and black housing, indicator lights, and branded "MASSAGE" label. Multiple speed settings for personal...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-ionizer',
    slug: IONIZER_SLUG,
    title: 'Air Ionizer',
    summary:
      'Tall cone-shaped air ionizer in matte black with silver band at base. Minimalist "AIR" branding. Designed to purify indoor air through negative ion generation.',
    heroMedia: img(
      '/media/work/consumer-products/ionizer/Ionizer-1.jpg',
      'Air ionizer — tall black cone with silver base band',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Tall cone-shaped air ionizer finished in matte black with a distinctive silver band at the base. The minimalist design features subtle "AIR" branding on the body. The conical form factor maximizes air intake surface area while maintaining a small footprint suitable for placement on floors or large surfaces. Negative ion generation technology purifies indoor air by attracting and neutralizing airborne particles, allergens, and odors. The design language is intentionally sculptural, functioning as both an air treatment device and a decorative object.',
        media: img(
          '/media/work/consumer-products/ionizer/Ionizer-1.jpg',
          'Air ionizer — full height view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/ionizer/Ionizer-1.jpg',
              'Ionizer — front view',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/ionizer/Ionizer-2.jpg',
              'Ionizer — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Air Ionizer — Product Design & Engineering | 123.design',
      description:
        'Tall cone-shaped air ionizer in matte black with silver band at base. Minimalist "AIR" branding. Designed to purify indoor air through negative ion...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-heavenly-cigar',
    slug: CIGAR_SLUG,
    title: 'Heavenly Cigar Humidor',
    summary:
      'Premium cedar cigar humidor with branded "Heavenly Cigar Company" lid art featuring angel motif. Tagline "Tastes Like Heaven. Sells Like Hell." Luxury packaging design.',
    heroMedia: img(
      '/media/work/consumer-products/heavenly-cigar/Heavenly_Cigar-1.jpg',
      'Heavenly Cigar humidor — cedar box with angel motif lid art',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Premium cedar cigar humidor designed for the Heavenly Cigar Company. The box features a hinged lid with branded artwork depicting an angel motif surrounded by a halo, reinforcing the "Heavenly" brand identity. The tagline "Tastes Like Heaven. Sells Like Hell." is prominently displayed. Inside, the humidor holds a row of cigars in individual slots with a cedar interior for proper humidity retention. The exterior showcases traditional woodworking with brass hardware. The overall design balances luxury craftsmanship with bold brand personality.',
        media: img(
          '/media/work/consumer-products/heavenly-cigar/Heavenly_Cigar-1.jpg',
          'Heavenly Cigar humidor — open box with branding',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/heavenly-cigar/Heavenly_Cigar-1.jpg',
              'Humidor — open view with lid art',
            ),
          },
          {
            media: img('/media/projects/heavenly-cigar/heavenly-cigar-1.png', 'Heavenly Cigar humidor — premium cedar box with branded lid', 1536, 1024),
            caption: 'Premium cedar construction with brass hardware and branded angel motif lid art',
          },
          {
            media: img('/media/projects/heavenly-cigar/heavenly-cigar-2.png', 'Heavenly Cigar humidor — open view showing cedar interior', 1024, 1280),
            caption: 'Open view revealing cedar-lined interior with individual cigar slots',
          },
        ],
      },
    ],
    seo: {
      title: 'Heavenly Cigar Humidor — Product Design & Engineering | 123.design',
      description:
        'Premium cedar cigar humidor with branded "Heavenly Cigar Company" lid art featuring angel motif. Tagline "Tastes Like Heaven. Sells Like Hell." Luxury...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL ===
  {
    id: 'static-portable-scanner',
    slug: PORTABLE_SCANNER_SLUG,
    title: 'Portable Body Scanner',
    summary:
      'Handheld medical imaging device (IUS-2635) with color display showing body scan visualization. White and gray ergonomic housing with orange accents and dual handles.',
    heroMedia: img(
      '/media/work/medical/portable-scanner/Portable_Scanner-1.jpg',
      'Portable body scanner — white housing with color display and handles',
      1600,
      900,
    ),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Handheld medical imaging device (model IUS-2635) designed for portable body scanning in clinical and field settings. The white and gray ergonomic housing features dual handles for stable two-handed operation, with orange accent buttons for critical controls. The color LCD display shows real-time body scan visualization with a human figure overlay and measurement data. The front-facing sensor array includes a primary imaging lens and auxiliary sensors. The design enables medical professionals to perform rapid diagnostic scans without requiring patients to visit a fixed imaging suite.',
        media: img(
          '/media/work/medical/portable-scanner/Portable_Scanner-1.jpg',
          'Portable scanner — front and back views',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/portable-scanner/Portable_Scanner-1.jpg',
              'Scanner — front view with display',
            ),
          },
          {
            media: img(
              '/media/work/medical/portable-scanner/Portable_Scanner-2.jpg',
              'Scanner — back view showing sensor',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Portable Body Scanner — Product Design & Engineering | 123.design',
      description:
        'Handheld medical imaging device (IUS-2635) with color display showing body scan visualization. White and gray ergonomic housing with orange accents and...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-mastique',
    slug: MASTIQUE_SLUG,
    title: 'Mastique Island Community',
    summary:
      'Brand identity and promotional campaign for Mastique, an island-style community. Retro travel-poster aesthetic with a diver leaping into turquoise water, evoking leisure and coastal living.',
    heroMedia: img(
      '/media/work/consumer-products/mastique/Mastique-1.jpg',
      'Mastique — retro travel poster with diver over turquoise bay',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Visual identity and promotional campaign for Mastique, an island-style residential community. The design draws on mid-century travel poster aesthetics — a diver in a red swimsuit leaping into turquoise water, framed by a coastal resort scene with sailboats and palm trees. The bold "MASTIQUE" wordmark in a retro serif typeface anchors the composition. The campaign communicates a lifestyle of leisure, sun, and coastal living through a single evocative image rather than a feature list.',
        media: img(
          '/media/work/consumer-products/mastique/Mastique-1.jpg',
          'Mastique — full poster composition',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/mastique/Mastique-1.jpg',
              'Mastique — poster with diver',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Mastique Island Community — Product Design & Engineering | 123.design',
      description:
        'Brand identity and promotional campaign for Mastique, an island-style community. Retro travel-poster aesthetic with a diver leaping into turquoise...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: TRANSPORTATION ===
  {
    id: 'static-mega-yacht',
    slug: MEGA_YACHT_SLUG,
    title: 'Mega Yacht Concept',
    summary:
      'Futuristic mega yacht concept with angular black hull, layered deck structure, and dramatic sunset rendering. Bold geometric form language pushes beyond conventional yacht design.',
    heroMedia: img(
      '/media/work/transportation/mega-yacht/Mega-Yacht-1.jpg',
      'Mega yacht concept — angular black hull at sunset',
      1600,
      900,
    ),
    industries: ['Other'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Concept design for a futuristic mega yacht with a bold angular hull form. The black faceted exterior features layered horizontal deck bands, a raised command tower with antenna array, and a dramatic low-profile bow. The rendering places the vessel against a stormy sunset seascape, emphasizing the contrast between the geometric hull and the organic horizon. The design explores how yacht aesthetics might evolve beyond traditional curved hulls toward architectural form language.',
        media: img(
          '/media/work/transportation/mega-yacht/Mega-Yacht-1.jpg',
          'Mega yacht — three-quarter view at sunset',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/transportation/mega-yacht/Mega-Yacht-1.jpg',
              'Mega yacht — dramatic sunset rendering',
            ),
          },
          {
            media: img(
              '/media/work/transportation/mega-yacht/Mega-Yacht-2.jpg',
              'Mega yacht — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Mega Yacht Concept — Product Design & Engineering | 123.design',
      description:
        'Futuristic mega yacht concept with angular black hull, layered deck structure, and dramatic sunset rendering. Bold geometric form language pushes...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-mosquito-deleto',
    slug: MOSQUITO_SLUG,
    title: 'Mosquito Deleto',
    summary:
      'Coleman-branded electric mosquito elimination device. Cylindrical gray housing with a black wire cage enclosure and a control knob. Designed for outdoor and camping use.',
    heroMedia: img(
      '/media/work/consumer-products/mosquito-deleto/Mosquito-Deleto-1.jpg',
      'Mosquito Deleto — Coleman branded electric insect eliminator',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Electric mosquito elimination device designed for Coleman\'s outdoor product line. The cylindrical gray housing supports a black wire cage enclosure that draws insects inward via UV light and eliminates them on contact. A single rotary control knob on the front panel adjusts intensity. The compact base includes a power cord connection and rubber feet for stable placement on camping tables or deck surfaces. The design integrates seamlessly with Coleman\'s existing outdoor equipment aesthetic.',
        media: img(
          '/media/work/consumer-products/mosquito-deleto/Mosquito-Deleto-1.jpg',
          'Mosquito Deleto — full product view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/mosquito-deleto/Mosquito-Deleto-1.jpg',
              'Mosquito Deleto — product with Coleman branding',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/mosquito-deleto/Mosquito-Deleto-2.jpg',
              'Mosquito Deleto — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Mosquito Deleto — Product Design & Engineering | 123.design',
      description:
        'Coleman-branded electric mosquito elimination device. Cylindrical gray housing with a black wire cage enclosure and a control knob. Designed for...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: ELECTRONICS ===
  {
    id: 'static-rackmount-enclosure',
    slug: RACKMOUNT_SLUG,
    title: 'Rackmount Enclosure',
    summary:
      'Rugged military-grade rackmount enclosure with L3 Communications branding. Sand-colored housing with multiple I/O ports, cable management, and field-serviceable panels.',
    heroMedia: img(
      '/media/work/electronics/rackmount-enclosure/Rackmount-Enclosure-1.jpg',
      'Rackmount enclosure — L3 Communications military housing with cables',
      1600,
      900,
    ),
    industries: ['Electronics'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Rugged rackmount enclosure designed for L3 Communications\' military communications systems. The sand-colored housing features a multi-port rear panel with color-coded cable connectors (yellow, blue, gray) for rapid field deployment. The front panel includes status LEDs, ventilation grilles, and a service access door. The enclosure is designed to withstand harsh field conditions while maintaining standard 19-inch rack compatibility. A technician is shown connecting cables in a desert deployment setting, demonstrating the real-world operational context.',
        media: img(
          '/media/work/electronics/rackmount-enclosure/Rackmount-Enclosure-1.jpg',
          'Rackmount enclosure — rear panel with cable connections',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/electronics/rackmount-enclosure/Rackmount-Enclosure-1.jpg',
              'Rackmount — cable management detail',
            ),
          },
          {
            media: img(
              '/media/work/electronics/rackmount-enclosure/Rackmount-Enclosure-2.jpg',
              'Rackmount — alternate view',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Rackmount Enclosure — Product Design & Engineering | 123.design',
      description:
        'Rugged military-grade rackmount enclosure with L3 Communications branding. Sand-colored housing with multiple I/O ports, cable management, and...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-refrigerator',
    slug: REFRIGERATOR_SLUG,
    title: 'Designer Refrigerator',
    summary:
      'Side-by-side refrigerator with distinctive angular door handle design. Available in matte black and brushed stainless steel finishes. Bold geometric accent line runs the full door height.',
    heroMedia: img(
      '/media/work/consumer-products/refrigerator/Refrigerator-1.jpg',
      'Designer refrigerator — black and stainless steel side-by-side',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Side-by-side refrigerator design featuring a distinctive angular handle accent that runs the full height of both doors. The geometric line creates a visual signature that differentiates the product on the showroom floor. Offered in two finishes — matte black with a silver accent line and brushed stainless steel with a matching silver line — the design targets consumers who view kitchen appliances as design statements. The R&R brand mark appears subtly at the top of each door. The clean rectangular form with minimal visible hardware emphasizes the handle detail as the primary design element.',
        media: img(
          '/media/work/consumer-products/refrigerator/Refrigerator-1.jpg',
          'Refrigerator — black and stainless steel pair',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/refrigerator/Refrigerator-1.jpg',
              'Refrigerator — both finishes side by side',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/refrigerator/Refrigerator-1b.jpg',
              'Refrigerator — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Designer Refrigerator — Product Design & Engineering | 123.design',
      description:
        'Side-by-side refrigerator with distinctive angular door handle design. Available in matte black and brushed stainless steel finishes. Bold geometric...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL ===
  {
    id: 'static-security-scanner',
    slug: SECURITY_SCANNER_SLUG,
    title: 'Security Access Scanner',
    summary:
      'Wall-mounted biometric security scanner with camera lens, LCD display, numeric keypad, and fingerprint reader. Brushed metal housing with blue-backlit interface elements.',
    heroMedia: img(
      '/media/work/medical/security-scanner/Security-Scanner-1.jpg',
      'Security scanner — brushed metal housing with biometric interface',
      1600,
      900,
    ),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Wall-mounted biometric security access scanner with a brushed metal housing. The interface combines four authentication modalities: a camera lens at the top for facial recognition or visual verification, a blue-backlit LCD display for status feedback, a 12-button numeric keypad for PIN entry, and a fingerprint reader at the bottom for biometric authentication. Perforated ventilation panels on the right side suggest internal processing hardware. The design consolidates multiple security layers into a single compact unit suitable for high-security facility access points.',
        media: img(
          '/media/work/medical/security-scanner/Security-Scanner-1.jpg',
          'Security scanner — three-quarter view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/security-scanner/Security-Scanner-1.jpg',
              'Scanner — full interface view',
            ),
          },
          {
            media: img('/media/projects/security-scanner/security-scanner-1.png', 'Security scanner — wall-mounted biometric access terminal', 1536, 1024),
            caption: 'Multi-factor biometric access terminal with camera, keypad, and fingerprint scanner',
          },
          {
            media: img('/media/projects/security-scanner/security-scanner-2.png', 'Security scanner — fingerprint reader detail with blue LED', 1024, 1280),
            caption: 'Close-up of fingerprint reader with blue LED illumination and brushed metal housing',
          },
        ],
      },
    ],
    seo: {
      title: 'Security Access Scanner — Product Design & Engineering | 123.design',
      description:
        'Wall-mounted biometric security scanner with camera lens, LCD display, numeric keypad, and fingerprint reader. Brushed metal housing with blue-backlit...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL ===
  {
    id: 'static-stretcher',
    slug: STRETCHER_SLUG,
    title: 'Sports Injury Stretcher',
    summary:
      'Low-profile emergency stretcher designed for sports field use. White molded shell with orange padded surface and black restraint straps. Ultra-low height for safe athlete transfer.',
    heroMedia: img(
      '/media/work/medical/stretcher/Stretcher-1.jpg',
      'Sports stretcher — white shell with orange padding on grass field',
      1600,
      900,
    ),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Low-profile emergency stretcher designed specifically for sports field injury response. The white molded plastic shell sits just inches above the ground, minimizing the distance an injured athlete must be lifted during transfer. The bright orange padded surface provides high visibility on green turf and comfortable support. Four black restraint straps secure the patient at the shoulders, waist, and legs. The elongated oval form with integrated side handles allows multiple responders to lift simultaneously. The design prioritizes speed of deployment and safe spinal alignment during field emergencies.',
        media: img(
          '/media/work/medical/stretcher/Stretcher-1.jpg',
          'Stretcher — on sports field with players',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/stretcher/Stretcher-1.jpg',
              'Stretcher — field deployment view',
            ),
          },
          {
            media: img(
              '/media/work/medical/stretcher/Stretcher-2.jpg',
              'Stretcher — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Sports Injury Stretcher — Product Design & Engineering | 123.design',
      description:
        'Low-profile emergency stretcher designed for sports field use. White molded shell with orange padded surface and black restraint straps. Ultra-low...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: ELECTRONICS ===
  {
    id: 'static-submersible-tablet',
    slug: SUBMERSIBLE_SLUG,
    title: 'Submersible Tablet (TOP-269)',
    summary:
      'Rugged submersible tablet computer (model TOP-269) with white and black housing, rubberized side grips, and a top-mounted handle. Running macOS with full desktop interface.',
    heroMedia: img(
      '/media/work/electronics/submersible-tablet/Submersible-Tablet-1.jpg',
      'Submersible tablet — white housing with rubberized grips running macOS',
      1600,
      900,
    ),
    industries: ['Electronics'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Rugged submersible tablet computer (model TOP-269) designed for marine and underwater inspection use. The white housing features black rubberized side grips for secure handling in wet conditions and a top-mounted carrying handle. The large display runs a full macOS desktop environment, visible with the Finder, Dock, and application windows — indicating this is a full computer in a tablet form factor rather than a mobile OS device. The sealed enclosure protects internal electronics from water ingress while maintaining thermal management. The design enables inspectors and divers to access full desktop computing power in submerged or splash-prone environments.',
        media: img(
          '/media/work/electronics/submersible-tablet/Submersible-Tablet-1.jpg',
          'Submersible tablet — three-quarter view with macOS desktop',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/electronics/submersible-tablet/Submersible-Tablet-1.jpg',
              'Tablet — front view with display',
            ),
          },
          {
            media: img(
              '/media/work/electronics/submersible-tablet/Submersible-Tablet-2.jpg',
              'Tablet — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Submersible Tablet (TOP-269) — Product Design & Engineering | 123.design',
      description:
        'Rugged submersible tablet computer (model TOP-269) with white and black housing, rubberized side grips, and a top-mounted handle. Running macOS with...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-suitcase',
    slug: SUITCASE_SLUG,
    title: 'Military Ammunition Case',
    summary:
      'Olive-drab military ammunition case system with modular internal carriers. U.S. Army branding. Cases open to reveal organized cylindrical ammunition holders with spring-loaded retention.',
    heroMedia: img(
      '/media/work/consumer-products/suitcase/Suitcase-1.jpg',
      'Military ammo case — olive drab with U.S. Army branding',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Modular ammunition case system designed for U.S. Army field use. The olive-drab molded plastic exterior features the U.S. Army star logo embossed on the front panel. The case system includes multiple carrier sizes — a large vertical carrier, a compact flat carrier, and an open carrier revealing the internal ammunition retention mechanism. Cylindrical ammunition rounds are held in spring-loaded slots that secure each round individually while allowing rapid extraction. The interlocking case design enables soldiers to configure loadouts based on mission requirements. Rugged latches and reinforced corners protect contents during transport.',
        media: img(
          '/media/work/consumer-products/suitcase/Suitcase-1.jpg',
          'Ammo case — three carriers with ammunition visible',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/suitcase/Suitcase-1.jpg',
              'Cases — full system view',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/suitcase/Suitcase-2.jpg',
              'Cases — alternate arrangement',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Military Ammunition Case — Product Design & Engineering | 123.design',
      description:
        'Olive-drab military ammunition case system with modular internal carriers. U.S. Army branding. Cases open to reveal organized cylindrical ammunition...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-synergix',
    slug: SYNERGIX_SLUG,
    title: 'Synergix Docking System',
    summary:
      'Teal and white modular device docking system (Synergix) with iPhone compatibility. Geometric angular housing with translucent teal accents and a companion wireless peripheral.',
    heroMedia: img(
      '/media/work/consumer-products/synergix/Synergix-1.jpg',
      'Synergix dock — teal and white modular system with iPhone',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Modular device docking system branded as Synergix, designed for the original iPhone era. The system features a distinctive teal and white color scheme with angular geometric housing. The main dock unit has a translucent teal center section flanked by white structural elements, with the Synergix logo prominently displayed. A companion wireless peripheral — possibly a charging puck or audio adapter — sits nearby. The design language emphasizes modularity and clean geometry, positioning the product as a premium accessory for early smartphone users who valued both function and aesthetic.',
        media: img(
          '/media/work/consumer-products/synergix/Synergix-1.jpg',
          'Synergix — full system with iPhone',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/synergix/Synergix-1.jpg',
              'Synergix — dock with iPhone and peripheral',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/synergix/Synergix-2.jpg',
              'Synergix — alternate arrangement',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Synergix Docking System — Product Design & Engineering | 123.design',
      description:
        'Teal and white modular device docking system (Synergix) with iPhone compatibility. Geometric angular housing with translucent teal accents and a...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: SPORT ===
  {
    id: 'static-tennis-ball-machine',
    slug: TENNIS_SLUG,
    title: 'TennisPro Ball Machine',
    summary:
      'TennisPro automatic ball machine with white housing, translucent green ball reservoir, and caster wheels. Modern angular design with visible ball feed mechanism.',
    heroMedia: img(
      '/media/work/sport/tennis-ball-machine/Tennis-Ball-Machine-1.jpg',
      'TennisPro ball machine — white housing with green ball reservoir',
      1600,
      900,
    ),
    industries: ['Other'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'TennisPro automatic tennis ball machine with a distinctive modern design. The white angular housing encloses a translucent green ball reservoir visible through the side panel, showing the ball supply level at a glance. A circular ball feed opening is positioned at the front center. The unit stands on caster wheels for easy court-side positioning. Two views show the machine from the front and side, revealing the internal ball storage capacity and the compact footprint. The design moves away from the utilitarian look of traditional ball machines toward a consumer-electronics aesthetic.',
        media: img(
          '/media/work/sport/tennis-ball-machine/Tennis-Ball-Machine-1.jpg',
          'TennisPro — front and side views',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/sport/tennis-ball-machine/Tennis-Ball-Machine-1.jpg',
              'TennisPro — dual view rendering',
            ),
          },
          {
            media: img(
              '/media/work/sport/tennis-ball-machine/Tennis-Ball-Machine-2.jpg',
              'TennisPro — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'TennisPro Ball Machine — Product Design & Engineering | 123.design',
      description:
        'TennisPro automatic ball machine with white housing, translucent green ball reservoir, and caster wheels. Modern angular design with visible ball feed...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL ===
  {
    id: 'static-therapy-bike',
    slug: THERAPY_BIKE_SLUG,
    title: 'Therapy Exercise Bike',
    summary:
      'Black recumbent therapy exercise bike with racing-style seat, arm levers, and a stable base platform. Designed for rehabilitation and adaptive fitness use.',
    heroMedia: img(
      '/media/work/medical/therapy-bike/Therapy-Bike-1.jpg',
      'Therapy bike — black recumbent bike with racing seat in studio',
      1600,
      900,
    ),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Recumbent therapy exercise bike designed for rehabilitation and adaptive fitness applications. The black steel frame supports a racing-style bucket seat with red accents and a five-point harness system for users who need additional postural support. Dual arm levers extend forward for upper-body engagement during therapy sessions. The wide base platform provides stability during use, and the low center of gravity makes transfers from wheelchairs safer. The design bridges the gap between clinical rehabilitation equipment and consumer fitness machines, making therapy feel less institutional.',
        media: img(
          '/media/work/medical/therapy-bike/Therapy-Bike-1.jpg',
          'Therapy bike — full view in studio setting',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/therapy-bike/Therapy-Bike-1.jpg',
              'Therapy bike — studio view',
            ),
          },
          {
            media: img(
              '/media/work/medical/therapy-bike/Therapy-Bike-2.jpg',
              'Therapy bike — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Therapy Exercise Bike — Product Design & Engineering | 123.design',
      description:
        'Black recumbent therapy exercise bike with racing-style seat, arm levers, and a stable base platform. Designed for rehabilitation and adaptive fitness use.',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL ===
  {
    id: 'static-therapy-system',
    slug: THERAPY_SYSTEM_SLUG,
    title: 'Therapy System Station',
    summary:
      'Blue and gray freestanding therapy system with touchscreen interface, handheld controllers on cables, and ventilation grilles. Multiple views show the modular clinical station.',
    heroMedia: img(
      '/media/work/medical/therapy-system/Therapy-System-1.jpg',
      'Therapy system — blue clinical station with touchscreen and controllers',
      1600,
      900,
    ),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Freestanding therapy system station designed for clinical rehabilitation environments. The blue and gray housing features a tilted touchscreen interface at the top for therapist control and patient feedback. Two handheld controllers hang from retractable cables on either side, enabling bilateral therapy exercises. Ventilation grilles on the side panels suggest internal computing or stimulation hardware. The base is weighted for stability during active use. Three views — side, front, and three-quarter — show the system\'s compact footprint and the ergonomic positioning of all interface elements within arm\'s reach of a seated patient.',
        media: img(
          '/media/work/medical/therapy-system/Therapy-System-1.jpg',
          'Therapy system — three views of clinical station',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/therapy-system/Therapy-System-1.jpg',
              'Therapy system — full rendering',
            ),
          },
          {
            media: img(
              '/media/work/medical/therapy-system/Therapy-System-2.jpg',
              'Therapy system — alternate view',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Therapy System Station — Product Design & Engineering | 123.design',
      description:
        'Blue and gray freestanding therapy system with touchscreen interface, handheld controllers on cables, and ventilation grilles. Multiple views show the...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-waterproof-case',
    slug: WATERPROOF_SLUG,
    title: 'Waterproof Device Case',
    summary:
      'Compact waterproof case system for mobile devices. White and teal angular housing with sealed enclosure. Designed to protect electronics in wet environments.',
    heroMedia: img(
      '/media/work/consumer-products/waterproof-case/Waterproof-Case-1.jpg',
      'Waterproof case — white and teal sealed enclosure',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Compact waterproof case system designed to protect mobile electronic devices in wet or submerged environments. The white angular housing features a translucent teal center section that matches the Synergix design language, suggesting these products share a brand ecosystem. The sealed enclosure uses gasketed joints to prevent water ingress while maintaining access to device controls. The compact form factor is sized for smartphones or small handheld devices. The design prioritizes protection without sacrificing the aesthetic quality expected of a consumer accessory.',
        media: img(
          '/media/work/consumer-products/waterproof-case/Waterproof-Case-1.jpg',
          'Waterproof case — sealed enclosure view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/waterproof-case/Waterproof-Case-1.jpg',
              'Waterproof case — product view',
            ),
          },
          {
            media: img('/media/projects/waterproof-case/waterproof-case-1.png', 'Waterproof case — compact sealed enclosure for mobile devices', 1536, 1024),
            caption: 'Compact waterproof case with white and teal angular housing and sealed enclosure',
          },
          {
            media: img('/media/projects/waterproof-case/waterproof-case-2.png', 'Waterproof case — sealed gasket and locking mechanism detail', 1024, 1280),
            caption: 'Close-up of sealed gasket lines and locking mechanism ensuring waterproof protection',
          },
        ],
      },
    ],
    seo: {
      title: 'Waterproof Device Case — Product Design & Engineering | 123.design',
      description:
        'Compact waterproof case system for mobile devices. White and teal angular housing with sealed enclosure. Designed to protect electronics in wet...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL ===
  {
    id: 'static-medical-scale',
    slug: MEDICAL_SCALE_SLUG,
    title: 'Medical Scale System',
    summary:
      'Clinical measurement station with a digital scale column, adjustable monitor arm, and examination table. Clean white and blue design for medical office environments.',
    heroMedia: img(
      '/media/work/medical/medical-scale/Medical-Scale-1.jpg',
      'Medical scale — clinical measurement station in exam room',
      1600,
      900,
    ),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Clinical measurement station designed for medical examination rooms. The system integrates a digital scale column (branded "iHealth") with a slim vertical profile and blue accent line, an adjustable monitor arm with keyboard tray for data entry, and a connected examination table with medical instruments. The scale column features a base platform for patient weighing and a tall upright that likely displays height measurements. The clean white and blue color scheme matches standard clinical environments. The modular design allows the scale, monitor, and examination components to be arranged based on room layout and workflow needs.',
        media: img(
          '/media/work/medical/medical-scale/Medical-Scale-1.jpg',
          'Medical scale — full exam room setup',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/medical/medical-scale/Medical-Scale-1.jpg',
              'Scale — exam room installation',
            ),
          },
          {
            media: img(
              '/media/work/medical/medical-scale/Medical-Scale-2.jpg',
              'Scale — alternate view',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Medical Scale System — Product Design & Engineering | 123.design',
      description:
        'Clinical measurement station with a digital scale column, adjustable monitor arm, and examination table. Clean white and blue design for medical office...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MILITARY ===
  {
    id: 'static-military-phone',
    slug: MILITARY_PHONE_SLUG,
    title: 'Military Field Phone',
    summary:
      'Rugged olive-drab military field communication device with U.S. Army branding. Compact rectangular housing with antenna, coiled handset cord, and sealed controls.',
    heroMedia: img(
      '/media/work/military/military-phone/Military-Phone-1.jpg',
      'Military field phone — olive drab U.S. Army communication device',
      1600,
      900,
    ),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Rugged military field communication device designed for U.S. Army use. The olive-drab molded housing features the U.S. Army star logo embossed on the front panel. A telescoping antenna extends from the top for radio communication, and a coiled handset cord connects to a sealed handset port. The front panel includes sealed control buttons and indicator lights protected from dust and moisture. The compact rectangular form factor is designed for belt or vest mounting in the field. The design prioritizes durability, weather resistance, and operational simplicity under combat conditions.',
        media: img(
          '/media/work/military/military-phone/Military-Phone-1.jpg',
          'Military phone — two views with handset',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/military/military-phone/Military-Phone-1.jpg',
              'Phone — full system view',
            ),
          },
          {
            media: img(
              '/media/work/military/military-phone/Military-Phone-2.jpg',
              'Phone — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Military Field Phone — Product Design & Engineering | 123.design',
      description:
        'Rugged olive-drab military field communication device with U.S. Army branding. Compact rectangular housing with antenna, coiled handset cord, and...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS ===
  {
    id: 'static-pedometer',
    slug: PEDOMETER_SLUG,
    title: 'Pedometer PR-2050',
    summary:
      'Compact circular pedometer (model PR-2050) with LCD display showing step count and time. Black rubberized housing with lime green or blue accent clip. Clip-on wearable design.',
    heroMedia: img(
      '/media/work/consumer-products/pedometer/Pedometer-1.jpg',
      'Pedometer PR-2050 — black circular device with lime green accent',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Compact circular pedometer (model PR-2050) designed as a clip-on wearable fitness tracker. The black rubberized housing features a circular LCD display showing step count, time, and activity data. A colored accent clip — available in lime green or blue — serves as both the attachment mechanism and the brand color identifier. The "PEDOMETER" wordmark is embossed on the side of the housing. The design predates modern smartwatch fitness trackers, offering a focused single-function device for step counting and basic activity monitoring. The small form factor and clip attachment make it suitable for belts, pockets, or bags.',
        media: img(
          '/media/work/consumer-products/pedometer/Pedometer-1.jpg',
          'Pedometer — two color variants',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/consumer-products/pedometer/Pedometer-1.jpg',
              'Pedometer — green and blue variants',
            ),
          },
          {
            media: img(
              '/media/work/consumer-products/pedometer/Pedometer-2.jpg',
              'Pedometer — alternate view',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Pedometer PR-2050 — Product Design & Engineering | 123.design',
      description:
        'Compact circular pedometer (model PR-2050) with LCD display showing step count and time. Black rubberized housing with lime green or blue accent clip....',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: INDUSTRIAL ===
  {
    id: 'static-portable-shredder',
    slug: SHREDDER_SLUG,
    title: 'Portable Document Shredder',
    summary:
      'Compact disc-shaped document shredder by R&R Shred-All. Black domed housing with brushed silver accent ring and a single blue power button. Low-profile desktop design.',
    heroMedia: img(
      '/media/work/industrial/portable-shredder/Portable-Shredder-1.jpg',
      'Portable shredder — black disc-shaped R&R Shred-All device',
      1600,
      900,
    ),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Compact disc-shaped document shredder branded as R&R Shred-All. The low-profile black domed housing sits flat on a desktop surface, with a brushed silver accent ring separating the top feed surface from the base. A single blue-lit power button on the front indicates operational status. The circular form factor is unusual for a shredder — most competitors use rectangular housings — suggesting the internal cutting mechanism is arranged radially rather than linearly. Ventilation slots around the perimeter provide cooling for the motor. The design targets home office and small business users who need secure document disposal without a bulky machine.',
        media: img(
          '/media/work/industrial/portable-shredder/Portable-Shredder-1.jpg',
          'Shredder — top three-quarter view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/industrial/portable-shredder/Portable-Shredder-1.jpg',
              'Shredder — full product view',
            ),
          },
          {
            media: img(
              '/media/work/industrial/portable-shredder/Portable-Shredder-2.jpg',
              'Shredder — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Portable Document Shredder — Product Design & Engineering | 123.design',
      description:
        'Compact disc-shaped document shredder by R&R Shred-All. Black domed housing with brushed silver accent ring and a single blue power button. Low-profile...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: SPORT ===
  {
    id: 'static-sports-bottle',
    slug: SPORTS_BOTTLE_SLUG,
    title: 'Xsport Water Bottle',
    summary:
      'Xsport-branded sports water bottle in four color variants (orange, yellow, green, blue). Ergonomic twisted body with textured grip zone and integrated straw lid.',
    heroMedia: img(
      '/media/work/sport/sports-bottle/Sports-Bottle-1.jpg',
      'Xsport bottles — four color variants with textured grip',
      1600,
      900,
    ),
    industries: ['Other'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Xsport-branded sports water bottle offered in four vibrant color variants: orange, yellow, green, and blue. Each bottle features an ergonomic twisted body form with a textured dark gray grip zone wrapping the lower half for secure handling during exercise. The upper portion is smooth and colored, tapering to a gray cap with an integrated flip-up straw. The Xsport logo appears near the base. The twisted form is both aesthetic and functional — it provides natural finger placement and prevents the bottle from rolling when set down. The design targets active consumers who want a distinctive, easy-to-grip hydration solution.',
        media: img(
          '/media/work/sport/sports-bottle/Sports-Bottle-1.jpg',
          'Sports bottles — four color lineup',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/sport/sports-bottle/Sports-Bottle-1.jpg',
              'Bottles — full color lineup',
            ),
          },
          {
            media: img(
              '/media/work/sport/sports-bottle/Sports-Bottle-2.jpg',
              'Bottles — alternate arrangement',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Xsport Water Bottle — Product Design & Engineering | 123.design',
      description:
        'Xsport-branded sports water bottle in four color variants (orange, yellow, green, blue). Ergonomic twisted body with textured grip zone and integrated...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: ELECTRONICS ===
  {
    id: 'static-payphone',
    slug: PAYPHONE_SLUG,
    title: 'Digital Payphone',
    summary:
      'Wall-mounted digital payphone with curved black housing, blue-backlit touchscreen display showing "PUBLIC TELEPHONE", and a numeric keypad. Modern reinterpretation of the public phone.',
    heroMedia: img(
      '/media/work/electronics/payphone/Payphone-1.jpg',
      'Digital payphone — black curved housing with blue touchscreen',
      1600,
      900,
    ),
    industries: ['Electronics'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Modern reinterpretation of the public payphone with a curved black housing and blue-backlit interface. The touchscreen display shows "PUBLIC TELEPHONE" with a menu of options including call services and information. Below the screen, a 12-button numeric keypad with blue backlighting provides tactile input. A handset hangs from the left side via a coiled cord. The design moves away from the boxy metal enclosures of traditional payphones toward a sleek, consumer-electronics aesthetic. The wall-mounted form factor and sealed housing suggest weather-resistant construction for outdoor or high-traffic indoor installation.',
        media: img(
          '/media/work/electronics/payphone/Payphone-1.jpg',
          'Payphone — wall-mounted unit with display',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/electronics/payphone/Payphone-1.jpg',
              'Payphone — full unit view',
            ),
          },
          {
            media: img('/media/projects/payphone/payphone-1.png', 'Digital payphone — wall-mounted unit with blue touchscreen', 1536, 1024),
            caption: 'Modern digital payphone with curved black housing and blue-backlit touchscreen display',
          },
          {
            media: img('/media/projects/payphone/payphone-2.png', 'Digital payphone — touchscreen and keypad detail', 1024, 1280),
            caption: 'Close-up of blue-backlit touchscreen showing PUBLIC TELEPHONE interface and numeric keypad',
          },
        ],
      },
    ],
    seo: {
      title: 'Digital Payphone — Product Design & Engineering | 123.design',
      description:
        'Wall-mounted digital payphone with curved black housing, blue-backlit touchscreen display showing "PUBLIC TELEPHONE", and a numeric keypad. Modern...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: KITCHENWARE ===
  {
    id: 'static-knife',
    slug: KNIFE_SLUG,
    title: 'Chef Knife',
    summary:
      'Sleek chef knife with black ergonomic handle and stainless steel blade featuring hollow-ground indentations. Photographed with fresh vegetables on a reflective surface.',
    heroMedia: img(
      '/media/work/kitchenware/knife/Knife-1.jpg',
      'Chef knife — black handle with hollow-ground blade',
      1600,
      900,
    ),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Chef knife with a sleek black ergonomic handle and a stainless steel blade featuring hollow-ground indentations along the edge. The indentations reduce friction and prevent food from sticking to the blade during slicing. The handle is shaped for a comfortable grip with a slight curve at the end for secure holding. The knife is photographed in a product advertising context with fresh cabbage, cherry tomatoes, and basil on a reflective dark surface, communicating precision and culinary quality. The design balances professional-grade performance with consumer-friendly aesthetics.',
        media: img(
          '/media/work/kitchenware/knife/Knife-1.jpg',
          'Knife — product shot with vegetables',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/kitchenware/knife/Knife-1.jpg',
              'Knife — full product composition',
            ),
          },
          {
            media: img('/media/projects/chef-knife/chef-knife-1.png', 'Chef knife — professional product shot with fresh vegetables', 1536, 1024),
            caption: 'Professional-grade chef knife with hollow-ground blade and ergonomic handle',
          },
          {
            media: img('/media/projects/chef-knife/chef-knife-2.png', 'Chef knife — blade detail showing hollow-ground indentations', 1024, 1280),
            caption: 'Close-up detail of stainless steel blade with hollow-ground indentations',
          },
        ],
      },
    ],
    seo: {
      title: 'Chef Knife — Product Design & Engineering | 123.design',
      description:
        'Sleek chef knife with black ergonomic handle and stainless steel blade featuring hollow-ground indentations. Photographed with fresh vegetables on a...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: INDUSTRIAL ===
  {
    id: 'static-labeler',
    slug: LABELER_SLUG,
    title: 'Mail Labeling Machine',
    summary:
      'Large industrial mail labeling and sorting machine by OPEX. Gray metal housing with multiple feed trays, conveyor system, and a mounted touchscreen control panel.',
    heroMedia: img(
      '/media/work/industrial/labeler/Labeler-1.jpg',
      'Labeling machine — OPEX industrial mail processing system',
      1600,
      900,
    ),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Large-scale industrial mail labeling and sorting machine manufactured by OPEX. The gray metal housing encloses a complex internal mechanism with multiple feed trays, conveyor belts, and sorting chutes visible through the open top. A mounted touchscreen control panel on an articulated arm allows operators to monitor and control the sorting process. The machine processes mail pieces at high speed, applying labels and routing items to the correct output bins. The design prioritizes operator accessibility, maintenance access, and throughput efficiency for high-volume mail processing environments such as distribution centers and government mail rooms.',
        media: img(
          '/media/work/industrial/labeler/Labeler-1.jpg',
          'Labeling machine — full system view',
        ),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img(
              '/media/work/industrial/labeler/Labeler-1.jpg',
              'Labeler — OPEX machine overview',
            ),
          },
          {
            media: img(
              '/media/work/industrial/labeler/Labeler-2.jpg',
              'Labeler — alternate angle',
            ),
          },
        ],
      },
    ],
    seo: {
      title: 'Mail Labeling Machine — Product Design & Engineering | 123.design',
      description:
        'Large industrial mail labeling and sorting machine by OPEX. Gray metal housing with multiple feed trays, conveyor system, and a mounted touchscreen...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: CONSUMER PRODUCTS (BATCH 4) ===
  {
    id: 'static-fan',
    slug: FAN_SLUG,
    title: 'Fan',
    summary:
      'Futuristic interior design rendering of a residential space with curved organic furniture, green and white color palette, and a large circular ceiling fan integrated into the architecture.',
    heroMedia: img('/media/work/consumer-products/fan/FAN1.jpg', 'Fan — futuristic interior rendering with curved furniture and green palette', 1600, 900),
    industries: ['Home'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Conceptual interior design rendering exploring the integration of a large ceiling fan into a futuristic residential space. The room features curved organic furniture in white and green, floor-to-ceiling windows, and a circular fan element that doubles as an architectural feature. The green and white color palette creates a fresh, modern atmosphere. The design demonstrates how functional elements like air circulation can become central design features rather than afterthoughts.',
        media: img('/media/work/consumer-products/fan/FAN1.jpg', 'Fan — interior concept rendering'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/consumer-products/fan/FAN1.jpg', 'Fan — main view') },
          { media: img('/media/work/consumer-products/fan/FAN2.jpg', 'Fan — alternate angle') },
          { media: img('/media/work/consumer-products/fan/FAN3.jpg', 'Fan — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Fan — Product Design & Engineering | 123.design',
      description:
        'Futuristic interior design rendering of a residential space with curved organic furniture, green and white color palette, and a large circular ceiling...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-salt',
    slug: SALT_SLUG,
    title: 'SALT',
    summary:
      'Sleek rectangular consumer electronics devices with minimal industrial design. Clean white and silver housings with subtle branding and precision-machined edges.',
    heroMedia: img('/media/work/consumer-products/salt/SALT-017.jpg', 'SALT — sleek rectangular consumer electronics device', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Consumer electronics product design for SALT brand devices. The sleek rectangular form factor features clean white and silver housings with minimal branding, precision-machined edges, and a focus on material quality. The design language emphasizes simplicity and sophistication, with careful attention to surface finishes, parting lines, and the overall proportion of the device. Multiple views show the product from different angles, revealing the thoughtful integration of ports, controls, and branding elements.',
        media: img('/media/work/consumer-products/salt/SALT-017.jpg', 'SALT — device overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/consumer-products/salt/SALT-017.jpg', 'SALT — primary view') },
          { media: img('/media/work/consumer-products/salt/salt1.jpg', 'SALT — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'SALT — Product Design & Engineering | 123.design',
      description:
        'Sleek rectangular consumer electronics devices with minimal industrial design. Clean white and silver housings with subtle branding and...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-soup-server',
    slug: SOUP_SERVER_SLUG,
    title: 'Soup Server',
    summary:
      'Knorr soup dispensing machines for commercial environments. Stainless steel housing with branded graphics, intuitive controls, and a drip tray designed for high-traffic public spaces.',
    heroMedia: img('/media/work/kitchenware/soup-server/Soup_Server-1.jpg', 'Soup Server — Knorr soup dispensing machine', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Commercial soup dispensing machine designed for Knorr. The stainless steel housing features branded graphics and an intuitive user interface with clear button controls. The machine is designed for high-traffic public environments such as cafeterias, food courts, and office break rooms. The drip tray and dispensing nozzle are positioned for easy access and minimal mess. The design balances brand visibility with functional clarity, ensuring users can quickly understand how to operate the machine.',
        media: img('/media/work/kitchenware/soup-server/Soup_Server-1.jpg', 'Soup Server — machine overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/kitchenware/soup-server/Soup_Server-1.jpg', 'Soup Server — front view') },
          { media: img('/media/work/kitchenware/soup-server/Soup_Server-2.jpg', 'Soup Server — alternate angle') },
        ],
      },
    ],
    seo: {
      title: 'Soup Server — Product Design & Engineering | 123.design',
      description:
        'Knorr soup dispensing machines for commercial environments. Stainless steel housing with branded graphics, intuitive controls, and a drip tray designed...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-speaker-tower',
    slug: SPEAKER_TOWER_SLUG,
    title: 'Speaker Tower',
    summary:
      'Carbon fiber speaker towers with blue LED accent lighting. Tall, slender form factor with multiple driver units and a premium finish designed for high-end audio environments.',
    heroMedia: img('/media/work/audio/speaker-tower/Speaker_Tower-1.jpg', 'Speaker Tower — carbon fiber towers with blue LED', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Premium carbon fiber speaker tower design with blue LED accent lighting. The tall, slender form factor houses multiple driver units in a carefully tuned enclosure. The carbon fiber construction provides both structural rigidity and visual appeal, while the blue LED strips add a modern, high-tech aesthetic. The design targets the high-end home audio market, where visual presence is as important as sound quality. The towers are designed to be statement pieces in a listening room.',
        media: img('/media/work/audio/speaker-tower/Speaker_Tower-1.jpg', 'Speaker Tower — carbon fiber towers'),
      },
      {
        kind: 'gallery',
        items: [
          {
            media: img('/media/projects/speaker-tower/speaker-tower-1.png', 'Speaker Tower — full height view in listening room', 1024, 1280),
            caption: 'Full-height view showcasing the slender tower form and blue LED accent lighting',
          },
          {
            media: img('/media/projects/speaker-tower/speaker-tower-2.png', 'Speaker Tower — carbon fiber detail with LED illumination', 1536, 1024),
            caption: 'Close-up detail of carbon fiber weave texture illuminated by blue LED strips',
          },
        ],
      },
    ],
    seo: {
      title: 'Speaker Tower — Product Design & Engineering | 123.design',
      description:
        'Carbon fiber speaker towers with blue LED accent lighting. Tall, slender form factor with multiple driver units and a premium finish designed for...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-adagio',
    slug: ADAGIO_SLUG,
    title: 'Adagio',
    summary:
      'Audio equipment stereo system with violin. Sleek black and silver components with a CD player, amplifier, and speakers arranged in a premium home audio setup.',
    heroMedia: img('/media/work/audio/adagio/adagio1.jpg', 'Adagio — stereo system with violin', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Adagio home audio stereo system featuring a CD player, amplifier, and speakers in a sleek black and silver finish. The product photography includes a violin, suggesting the system is designed for audiophiles who appreciate classical music and high-fidelity sound reproduction. The components feature clean lines, minimal controls, and a premium aesthetic that emphasizes the quality of the audio experience. The design language is consistent across all components, creating a cohesive system.',
        media: img('/media/work/audio/adagio/adagio1.jpg', 'Adagio — system overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/audio/adagio/adagio1.jpg', 'Adagio — main view') },
          { media: img('/media/work/audio/adagio/adagio2.jpg', 'Adagio — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Adagio — Product Design & Engineering | 123.design',
      description:
        'Audio equipment stereo system with violin. Sleek black and silver components with a CD player, amplifier, and speakers arranged in a premium home audio...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dehumidifier',
    slug: DEHUMIDIFIER_SLUG,
    title: 'Dehumidifier',
    summary:
      'Tower dehumidifiers in black, blue, and silver. Tall, slender form factor with a modern aesthetic designed for residential and light commercial environments.',
    heroMedia: img('/media/work/consumer-products/dehumidifier/dehumidifier.jpg', 'Dehumidifier — tower dehumidifiers in black, blue, silver', 1600, 900),
    industries: ['Home'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Tower dehumidifier product design exploring multiple color variants: black, blue, and silver. The tall, slender form factor is designed to fit into residential and light commercial environments without dominating the space. The modern aesthetic features clean lines, a minimal control panel, and a subtle brand presence. The tower design maximizes air intake surface area while maintaining a small footprint. Multiple color options allow users to match the device to their interior decor.',
        media: img('/media/work/consumer-products/dehumidifier/dehumidifier.jpg', 'Dehumidifier — product family'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/consumer-products/dehumidifier/dehumidifier.jpg', 'Dehumidifier — three variants') },
          { media: img('/media/work/consumer-products/dehumidifier/dehumidifier2.jpg', 'Dehumidifier — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Dehumidifier — Product Design & Engineering | 123.design',
      description:
        'Tower dehumidifiers in black, blue, and silver. Tall, slender form factor with a modern aesthetic designed for residential and light commercial...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-roller-blade',
    slug: ROLLER_BLADE_SLUG,
    title: 'Roller Blade',
    summary:
      'Inline skate with black boot and green accents. Performance-oriented design with a supportive boot, precision frame, and high-rebound wheels for speed and agility.',
    heroMedia: img('/media/work/sport/roller-blade/Roller_Blade-1.jpg', 'Roller Blade — inline skate with black boot and green accents', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['CON'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Performance inline skate design featuring a black boot with green accent elements. The boot is designed for support and comfort during high-speed skating, with reinforced ankle support and a secure closure system. The precision frame holds high-rebound wheels optimized for speed and agility. The green accents provide visual contrast and brand identity. The design balances performance requirements with aesthetic appeal, targeting serious recreational and fitness skaters.',
        media: img('/media/work/sport/roller-blade/Roller_Blade-1.jpg', 'Roller Blade — skate overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/sport/roller-blade/Roller_Blade-1.jpg', 'Roller Blade — side view') },
          { media: img('/media/work/sport/roller-blade/Roller_Blade-2.jpg', 'Roller Blade — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Roller Blade — Product Design & Engineering | 123.design',
      description:
        'Inline skate with black boot and green accents. Performance-oriented design with a supportive boot, precision frame, and high-rebound wheels for speed...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: ELECTRONICS (BATCH 4) ===
  {
    id: 'static-ipm',
    slug: IPM_SLUG,
    title: 'IPM',
    summary:
      'Consumer electronics tablet device with multiple prototype iterations. Sleek form factor with a focus on portability and usability, evolved through multiple design cycles.',
    heroMedia: img('/media/work/electronics/ipm/IPM-009_LR.jpg', 'IPM — consumer electronics tablet device', 1600, 900),
    industries: ['Electronics'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['EVT'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'IPM consumer electronics tablet device that evolved through multiple prototype iterations. The design features a sleek form factor optimized for portability and usability. Multiple prototype views show the design evolution from early concepts to refined production-ready forms. The device features a high-resolution display, minimal bezels, and a carefully considered button layout. The industrial design focuses on ergonomics, material selection, and manufacturing feasibility.',
        media: img('/media/work/electronics/ipm/IPM-009_LR.jpg', 'IPM — tablet overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/electronics/ipm/IPM-009_LR.jpg', 'IPM — front view') },
          { media: img('/media/work/electronics/ipm/IPM-010_LR.jpg', 'IPM — alternate view') },
          { media: img('/media/work/electronics/ipm/ipm-008_LR.jpg', 'IPM — another angle') },
          { media: img('/media/work/electronics/ipm/ipm_prototype1.jpg', 'IPM — prototype 1') },
          { media: img('/media/work/electronics/ipm/ipm_prototype2.jpg', 'IPM — prototype 2') },
          { media: img('/media/work/electronics/ipm/ipm_prototype3.jpg', 'IPM — prototype 3') },
        ],
      },
    ],
    seo: {
      title: 'IPM — Product Design & Engineering | 123.design',
      description:
        'Consumer electronics tablet device with multiple prototype iterations. Sleek form factor with a focus on portability and usability, evolved through...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-rugged-computer',
    slug: RUGGED_COMPUTER_SLUG,
    title: 'Rugged Computer',
    summary:
      'Ruggedized laptop by Xplore Technologies. Heavy-duty construction with reinforced corners, sealed ports, and a design optimized for field use in harsh environments.',
    heroMedia: img('/media/work/electronics/rugged-computer/Rugged_Computer-1.jpg', 'Rugged Computer — Xplore Technologies ruggedized laptop', 1600, 900),
    industries: ['Electronics'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Ruggedized laptop computer designed by Xplore Technologies for field use in harsh environments. The heavy-duty construction features reinforced corners, sealed ports, and a durable chassis that can withstand drops, vibration, and extreme temperatures. The design prioritizes durability and reliability over aesthetics, with a focus on protecting the internal components from environmental damage. The laptop is targeted at military, industrial, and field service applications where standard consumer laptops would fail.',
        media: img('/media/work/electronics/rugged-computer/Rugged_Computer-1.jpg', 'Rugged Computer — laptop overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/electronics/rugged-computer/Rugged_Computer-1.jpg', 'Rugged Computer — closed view') },
          { media: img('/media/work/electronics/rugged-computer/Rugged_Computer-2.jpg', 'Rugged Computer — open view') },
        ],
      },
    ],
    seo: {
      title: 'Rugged Computer — Product Design & Engineering | 123.design',
      description:
        'Ruggedized laptop by Xplore Technologies. Heavy-duty construction with reinforced corners, sealed ports, and a design optimized for field use in harsh...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-thermometer',
    slug: THERMOMETER_SLUG,
    title: 'Thermometer',
    summary:
      'Digital thermometer devices with clear LCD displays and ergonomic housings. Designed for medical and home use with fast, accurate temperature readings.',
    heroMedia: img('/media/work/electronics/thermometer/Thermometer-1.jpg', 'Thermometer — digital thermometer devices', 1600, 900),
    industries: ['Electronics'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Digital thermometer product design for medical and home use. The devices feature clear LCD displays for easy reading, ergonomic housings that fit comfortably in the hand, and a design optimized for fast, accurate temperature readings. The industrial design focuses on usability, with intuitive button placement and clear visual feedback. The housing is designed for easy cleaning and disinfection, important for medical applications.',
        media: img('/media/work/electronics/thermometer/Thermometer-1.jpg', 'Thermometer — device overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/electronics/thermometer/Thermometer-1.jpg', 'Thermometer — primary view') },
          { media: img('/media/work/electronics/thermometer/Thermometer-2.jpg', 'Thermometer — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Thermometer — Product Design & Engineering | 123.design',
      description:
        'Digital thermometer devices with clear LCD displays and ergonomic housings. Designed for medical and home use with fast, accurate temperature readings.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-walkie-talkie',
    slug: WALKIE_TALKIE_SLUG,
    title: 'Walkie Talkie',
    summary:
      'Handheld radio with carbon fiber texture and rugged construction. Designed for professional communication in demanding environments with long battery life and clear audio.',
    heroMedia: img('/media/work/electronics/walkie-talkie/Walkie_Talkie-1.jpg', 'Walkie Talkie — handheld radio with carbon fiber texture', 1600, 900),
    industries: ['Communication'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Professional handheld radio design with carbon fiber texture for grip and durability. The rugged construction is optimized for demanding environments where clear communication is critical. The design features an ergonomic form factor that fits comfortably in the hand, with easy-to-reach controls for channel selection, volume, and push-to-talk. The carbon fiber texture provides both visual appeal and functional grip. The radio is designed for long battery life and reliable performance in professional settings.',
        media: img('/media/work/electronics/walkie-talkie/Walkie_Talkie-1.jpg', 'Walkie Talkie — radio overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/electronics/walkie-talkie/Walkie_Talkie-1.jpg', 'Walkie Talkie — front view') },
          { media: img('/media/work/electronics/walkie-talkie/Walkie_Talkie-2.jpg', 'Walkie Talkie — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Walkie Talkie — Product Design & Engineering | 123.design',
      description:
        'Handheld radio with carbon fiber texture and rugged construction. Designed for professional communication in demanding environments with long battery...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-wireless-tower',
    slug: WIRELESS_TOWER_SLUG,
    title: 'Wireless Tower',
    summary:
      'X-link networking and communication devices. Tower-form factor wireless access points designed for outdoor deployment with weatherproof enclosures and high-gain antennas.',
    heroMedia: img('/media/work/electronics/wireless-tower/Wireless_Tower_1.jpg', 'Wireless Tower — X-link networking devices', 1600, 900),
    industries: ['Communication'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'X-link wireless networking and communication devices in a tower form factor. The weatherproof enclosures are designed for outdoor deployment, with high-gain antennas for extended range. The industrial design balances aesthetic appeal with functional requirements such as heat dissipation, cable management, and mounting hardware. The tower form factor allows for elevated antenna placement, improving signal coverage. The devices are targeted at rural and suburban broadband deployment.',
        media: img('/media/work/electronics/wireless-tower/Wireless_Tower_1.jpg', 'Wireless Tower — device overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/electronics/wireless-tower/Wireless_Tower_1.jpg', 'Wireless Tower — primary view') },
          { media: img('/media/work/electronics/wireless-tower/Wireless_Tower_2.jpg', 'Wireless Tower — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Wireless Tower — Product Design & Engineering | 123.design',
      description:
        'X-link networking and communication devices. Tower-form factor wireless access points designed for outdoor deployment with weatherproof enclosures and...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: DEFENSE & SECURITY (BATCH 4) ===
  {
    id: 'static-pod',
    slug: POD_SLUG,
    title: 'POD',
    summary:
      'Boeing military drone/UAV with a pod-like fuselage. Compact, aerodynamic design for reconnaissance and surveillance missions with modular payload capacity.',
    heroMedia: img('/media/work/military/pod/POD_1.jpg', 'POD — Boeing military drone/UAV', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['CON'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Boeing military drone/UAV design featuring a compact, pod-like fuselage. The aerodynamic shape is optimized for reconnaissance and surveillance missions, with a modular payload bay that can accommodate different sensor packages. The design prioritizes low observability, endurance, and ease of deployment. The drone is designed for tactical use by military and security forces, providing real-time intelligence, surveillance, and reconnaissance capabilities in contested environments.',
        media: img('/media/work/military/pod/POD_1.jpg', 'POD — drone overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/military/pod/POD_1.jpg', 'POD — main view') },
          { media: img('/media/work/military/pod/POD_2.jpg', 'POD — alternate angle') },
        ],
      },
    ],
    seo: {
      title: 'POD — Product Design & Engineering | 123.design',
      description:
        'Boeing military drone/UAV with a pod-like fuselage. Compact, aerodynamic design for reconnaissance and surveillance missions with modular payload capacity.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-rifle-scope',
    slug: RIFLE_SCOPE_SLUG,
    title: 'Rifle Scope',
    summary:
      'Tactical rifle scope with green lens and precision optics. Rugged aluminum housing with adjustable magnification and illuminated reticle for low-light conditions.',
    heroMedia: img('/media/work/defense-security/rifle-scope/Rifle_Scope-1.jpg', 'Rifle Scope — tactical scope with green lens', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Tactical rifle scope design featuring precision optics with a distinctive green lens coating. The rugged aluminum housing is designed to withstand recoil and harsh field conditions. Adjustable magnification and an illuminated reticle enable accurate targeting in low-light conditions. The industrial design focuses on ergonomics, with easy-to-reach turrets for windage and elevation adjustments. The scope is targeted at military, law enforcement, and precision shooting applications.',
        media: img('/media/work/defense-security/rifle-scope/Rifle_Scope-1.jpg', 'Rifle Scope — scope overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/defense-security/rifle-scope/Rifle_Scope-1.jpg', 'Rifle Scope — side view') },
          { media: img('/media/work/defense-security/rifle-scope/Rifle_Scope-2.jpg', 'Rifle Scope — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Rifle Scope — Product Design & Engineering | 123.design',
      description:
        'Tactical rifle scope with green lens and precision optics. Rugged aluminum housing with adjustable magnification and illuminated reticle for low-light...',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: INDUSTRIAL (BATCH 4) ===
  {
    id: 'static-pap',
    slug: PAP_SLUG,
    title: 'PAP',
    summary:
      'Plastic and metal clips and holders for industrial applications. Precision-molded components designed for reliable fastening and mounting in demanding environments.',
    heroMedia: img('/media/work/industrial/pap/PAP1.jpg', 'PAP — plastic and metal clips and holders', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'PAP industrial clip and holder product family featuring precision-molded plastic and metal components. The designs are optimized for reliable fastening and mounting in demanding industrial environments. Multiple variants address different mounting scenarios, from cable management to panel attachment. The industrial design focuses on ease of installation, retention force, and durability. The components are designed for high-volume manufacturing with consistent quality.',
        media: img('/media/work/industrial/pap/PAP1.jpg', 'PAP — clip family overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/industrial/pap/PAP1.jpg', 'PAP — variant 1') },
          { media: img('/media/work/industrial/pap/pap2.jpg', 'PAP — variant 2') },
          { media: img('/media/work/industrial/pap/pap3.jpg', 'PAP — variant 3') },
          { media: img('/media/work/industrial/pap/pap4.jpg', 'PAP — variant 4') },
          { media: img('/media/work/industrial/pap/pap5.jpg', 'PAP — variant 5') },
          { media: img('/media/work/industrial/pap/pap6.jpg', 'PAP — variant 6') },
        ],
      },
    ],
    seo: {
      title: 'PAP — Product Design & Engineering | 123.design',
      description:
        'Plastic and metal clips and holders for industrial applications. Precision-molded components designed for reliable fastening and mounting in demanding...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-staircase',
    slug: STAIRCASE_SLUG,
    title: 'Staircase',
    summary:
      'Dock and pier mechanical staircase/lift system. Heavy-duty steel construction with anti-slip treads designed for marine environments and passenger access.',
    heroMedia: img('/media/work/industrial/staircase/Staircase-1.jpg', 'Staircase — dock/pier mechanical staircase system', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Mechanical staircase and lift system designed for dock and pier environments. The heavy-duty steel construction features anti-slip treads and corrosion-resistant coatings for marine environments. The system provides safe passenger access between different levels of a dock or between a vessel and the shore. The mechanical design prioritizes reliability, low maintenance, and compliance with marine safety regulations. The staircase can be configured in multiple arrangements to suit different dock layouts.',
        media: img('/media/work/industrial/staircase/Staircase-1.jpg', 'Staircase — system overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/industrial/staircase/Staircase-1.jpg', 'Staircase — installed view') },
          { media: img('/media/work/industrial/staircase/Staircase-2.jpg', 'Staircase — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Staircase — Product Design & Engineering | 123.design',
      description:
        'Dock and pier mechanical staircase/lift system. Heavy-duty steel construction with anti-slip treads designed for marine environments and passenger access.',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: MEDICAL (BATCH 4) ===
  {
    id: 'static-dental',
    slug: DENTAL_SLUG,
    title: 'Dental',
    summary:
      'Red dental device in a dental office setting. Compact, ergonomic design for dental procedures with intuitive controls and easy-to-clean surfaces.',
    heroMedia: img('/media/work/medical/dental/dental-1.jpg', 'Dental — red dental device in office setting', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Dental device product design featuring a distinctive red housing. The compact, ergonomic form factor is designed for use in dental procedures, with intuitive controls positioned for easy access by the practitioner. The surfaces are designed for easy cleaning and disinfection, critical for maintaining hygiene standards in a dental office. The industrial design balances aesthetic appeal with the functional requirements of a medical device, creating a product that looks professional and performs reliably.',
        media: img('/media/work/medical/dental/dental-1.jpg', 'Dental — device in context'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/medical/dental/dental-1.jpg', 'Dental — office setting') },
          { media: img('/media/work/medical/dental/dental-2.jpg', 'Dental — device detail') },
        ],
      },
    ],
    seo: {
      title: 'Dental — Product Design & Engineering | 123.design',
      description:
        'Red dental device in a dental office setting. Compact, ergonomic design for dental procedures with intuitive controls and easy-to-clean surfaces.',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: TRANSPORTATION (BATCH 4) ===
  {
    id: 'static-super-yacht',
    slug: SUPER_YACHT_SLUG,
    title: 'Super Yacht',
    summary:
      'Futuristic yacht concept rendering with sleek lines and a modern profile. Advanced hull design with integrated helipad and multi-deck luxury accommodations.',
    heroMedia: img('/media/work/transportation/super-yacht/Super_Yacht-1.jpg', 'Super Yacht — futuristic yacht concept', 1600, 900),
    industries: ['Transportation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Futuristic super yacht concept design featuring sleek lines and a modern profile. The advanced hull design is optimized for speed and fuel efficiency, with an integrated helipad and multi-deck luxury accommodations. The exterior design emphasizes dynamic movement and visual impact, while the interior spaces prioritize comfort and entertainment. The concept explores the future of luxury yacht design, incorporating advanced materials and propulsion systems.',
        media: img('/media/work/transportation/super-yacht/Super_Yacht-1.jpg', 'Super Yacht — concept rendering'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/transportation/super-yacht/Super_Yacht-1.jpg', 'Super Yacht — profile view') },
          { media: img('/media/work/transportation/super-yacht/Super_Yacht-2.jpg', 'Super Yacht — alternate angle') },
        ],
      },
    ],
    seo: {
      title: 'Super Yacht — Product Design & Engineering | 123.design',
      description:
        'Futuristic yacht concept rendering with sleek lines and a modern profile. Advanced hull design with integrated helipad and multi-deck luxury...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-yacht-interior',
    slug: YACHT_INTERIOR_SLUG,
    title: 'Yacht Interior',
    summary:
      'Luxury white sectional sofa and interior design for a yacht. Premium materials, clean lines, and a light color palette designed for marine environments.',
    heroMedia: img('/media/work/transportation/yacht-interior/Yacht_Interior-1.jpg', 'Yacht Interior — luxury white sectional sofa', 1600, 900),
    industries: ['Transportation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Luxury yacht interior design featuring a white sectional sofa and premium materials throughout. The clean lines and light color palette create an airy, spacious feel appropriate for a marine environment. The furniture is designed to withstand the marine environment while maintaining a high-end residential aesthetic. The interior design emphasizes comfort, durability, and visual appeal, creating a space where owners and guests can relax in style.',
        media: img('/media/work/transportation/yacht-interior/Yacht_Interior-1.jpg', 'Yacht Interior — salon view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/transportation/yacht-interior/Yacht_Interior-1.jpg', 'Yacht Interior — main view') },
          { media: img('/media/work/transportation/yacht-interior/Yacht_Interior-2.jpg', 'Yacht Interior — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Yacht Interior — Product Design & Engineering | 123.design',
      description:
        'Luxury white sectional sofa and interior design for a yacht. Premium materials, clean lines, and a light color palette designed for marine environments.',
    },
    relatedProjects: [],
  },

  // === ARCHIVE: WEB DESIGN & COMMERCIAL (BATCH 4) ===
  {
    id: 'static-gkv-law',
    slug: GKV_LAW_SLUG,
    title: 'GKV Law Firm',
    summary:
      'Law firm website design for GKV, focusing on immigration law. Professional, trustworthy aesthetic with clear navigation and prominent call-to-action elements.',
    heroMedia: img('/media/work/web-design/gkv-law-firm/GKVLawFirm.jpg', 'GKV Law Firm — website design mockup', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Website design for GKV law firm, specializing in immigration law. The design prioritizes professionalism and trustworthiness, with a clean layout, clear navigation, and prominent call-to-action elements. The homepage features a hero section with a strong value proposition, followed by sections highlighting the firm\'s expertise, attorney profiles, and client testimonials. The design is responsive and accessible, ensuring a good experience across all devices.',
        media: img('/media/work/web-design/gkv-law-firm/GKVLawFirm.jpg', 'GKV Law Firm — homepage'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/web-design/gkv-law-firm/GKVLawFirm.jpg', 'GKV — homepage') },
          { media: img('/media/work/web-design/gkv-law-firm/GKV Law Firm 2.jpg', 'GKV — alternate page') },
        ],
      },
    ],
    seo: {
      title: 'GKV Law Firm — Product Design & Engineering | 123.design',
      description:
        'Law firm website design for GKV, focusing on immigration law. Professional, trustworthy aesthetic with clear navigation and prominent call-to-action...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-haydar',
    slug: HAYDAR_SLUG,
    title: 'Haydar',
    summary:
      'Modern office and campus complex with glass buildings. Contemporary architectural design with sustainable features and a focus on employee well-being.',
    heroMedia: img('/media/work/architecture/haydar/Haydar1.jpg', 'Haydar — modern office campus with glass buildings', 1600, 900),
    industries: ['Architecture'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Modern office and campus complex architectural design featuring glass buildings and contemporary aesthetics. The design incorporates sustainable features such as natural lighting, energy-efficient systems, and green spaces. The campus layout promotes collaboration and employee well-being, with a mix of open work areas, meeting rooms, and amenity spaces. The glass facades create a transparent, inviting appearance while maximizing daylight penetration into the workspaces.',
        media: img('/media/work/architecture/haydar/Haydar1.jpg', 'Haydar — campus overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/architecture/haydar/Haydar1.jpg', 'Haydar — main view') },
          { media: img('/media/work/architecture/haydar/Haydar2.jpg', 'Haydar — alternate angle') },
          { media: img('/media/work/architecture/haydar/Haydar3.jpg', 'Haydar — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Haydar — Product Design & Engineering | 123.design',
      description:
        'Modern office and campus complex with glass buildings. Contemporary architectural design with sustainable features and a focus on employee well-being.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-mba-air',
    slug: MBA_AIR_SLUG,
    title: 'MBA Air',
    summary:
      'Aviation company website mockups for MBA Air. Clean, professional design with flight booking interface, route maps, and corporate information sections.',
    heroMedia: img('/media/work/web-design/mba-air/MBA_Air.jpg', 'MBA Air — aviation website mockup', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Website design for MBA Air aviation company. The clean, professional design features a flight booking interface, route maps, and corporate information sections. The homepage showcases the airline\'s fleet and destinations, with clear calls-to-action for booking flights. The design is optimized for conversion, with a streamlined booking flow and prominent display of special offers. The responsive layout ensures a good experience on all devices, from mobile phones to desktop computers.',
        media: img('/media/work/web-design/mba-air/MBA_Air.jpg', 'MBA Air — homepage'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/web-design/mba-air/MBA_Air.jpg', 'MBA Air — main page') },
          { media: img('/media/work/web-design/mba-air/MBA Air 2.jpg', 'MBA Air — alternate page') },
        ],
      },
    ],
    seo: {
      title: 'MBA Air — Product Design & Engineering | 123.design',
      description:
        'Aviation company website mockups for MBA Air. Clean, professional design with flight booking interface, route maps, and corporate information sections.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-naples',
    slug: NAPLES_SLUG,
    title: 'Naples Lumber',
    summary:
      'Fashion and editorial advertising campaign for Naples Lumber. High-contrast imagery with bold typography and a gritty, urban aesthetic.',
    heroMedia: img('/media/work/advertising/naples-lumber/Naples_Lumber-1.jpg', 'Naples Lumber — advertising campaign', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Fashion and editorial advertising campaign design for Naples Lumber. The campaign features high-contrast imagery with bold typography and a gritty, urban aesthetic. The visual language is designed to stand out in a crowded media landscape, using strong compositions and striking color palettes. The campaign spans multiple formats, from print ads to digital banners, with a consistent visual identity across all touchpoints.',
        media: img('/media/work/advertising/naples-lumber/Naples_Lumber-1.jpg', 'Naples Lumber — campaign image'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/advertising/naples-lumber/Naples_Lumber-1.jpg', 'Naples — image 1') },
          { media: img('/media/work/advertising/naples-lumber/Naples_Lumber-2.jpg', 'Naples — image 2') },
        ],
      },
    ],
    seo: {
      title: 'Naples Lumber — Product Design & Engineering | 123.design',
      description:
        'Fashion and editorial advertising campaign for Naples Lumber. High-contrast imagery with bold typography and a gritty, urban aesthetic.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-suna',
    slug: SUNA_SLUG,
    title: 'Suna Salon',
    summary:
      'Salon and spa website design for Suna. Elegant, feminine aesthetic with service menus, booking interface, and gallery of salon work.',
    heroMedia: img('/media/work/web-design/suna-salon/SunaSalon.jpg', 'Suna Salon — website design mockup', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Website design for Suna salon and spa. The elegant, feminine aesthetic features soft colors, refined typography, and high-quality imagery. The site includes service menus with pricing, an online booking interface, and a gallery showcasing the salon\'s work. The design prioritizes ease of use, with clear navigation and prominent calls-to-action for booking appointments. The responsive layout ensures a good experience on all devices.',
        media: img('/media/work/web-design/suna-salon/SunaSalon.jpg', 'Suna Salon — homepage'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/web-design/suna-salon/SunaSalon.jpg', 'Suna — homepage') },
          { media: img('/media/work/web-design/suna-salon/Suna Salon 2.jpg', 'Suna — alternate page') },
        ],
      },
    ],
    seo: {
      title: 'Suna Salon — Product Design & Engineering | 123.design',
      description:
        'Salon and spa website design for Suna. Elegant, feminine aesthetic with service menus, booking interface, and gallery of salon work.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dubai-boat',
    slug: DUBAI_BOAT_SLUG,
    title: 'Dubai Boat Show',
    summary:
      'Trade show booth and exhibition display for the Dubai Boat Show. Large-scale graphics, interactive displays, and a design optimized for high-traffic marine industry events.',
    heroMedia: img('/media/work/exhibitions/dubai-boat-show/dubai_boat_show1.jpg', 'Dubai Boat Show — exhibition booth', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design', 'Program Management'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Trade show booth and exhibition display design for the Dubai Boat Show. The design features large-scale graphics, interactive displays, and a layout optimized for high-traffic marine industry events. The booth attracts visitors with striking visuals and provides clear information about exhibitors and their products. The design considers the flow of foot traffic, sight lines, and the need for both open display areas and private meeting spaces.',
        media: img('/media/work/exhibitions/dubai-boat-show/dubai_boat_show1.jpg', 'Dubai Boat Show — booth overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/exhibitions/dubai-boat-show/dubai_boat_show1.jpg', 'Dubai Boat Show — view 1') },
          { media: img('/media/work/exhibitions/dubai-boat-show/dubai_boat_show2.jpg', 'Dubai Boat Show — view 2') },
          { media: img('/media/work/exhibitions/dubai-boat-show/dubai_boat_show3.jpg', 'Dubai Boat Show — view 3') },
        ],
      },
    ],
    seo: {
      title: 'Dubai Boat Show — Product Design & Engineering | 123.design',
      description:
        'Trade show booth and exhibition display for the Dubai Boat Show. Large-scale graphics, interactive displays, and a design optimized for high-traffic...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-aesthetic-machine',
    slug: AESTHETIC_SLUG,
    title: 'Aesthetic Treatment Machine',
    summary:
      'Medical-grade aesthetic treatment device with integrated touchscreen controls and interchangeable handheld applicators. Industrial design for a clinical-grade system used in dermatology and cosmetic treatment.',
    heroMedia: img('/media/work/medical/aesthetic-treatment-machine/aesthetic-treatment-machine-1.jpg', 'Aesthetic treatment machine — three-view rendering with touchscreen and applicators', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A medical-grade aesthetic treatment system designed for dermatology and cosmetic clinics. The device combines a standing console with an integrated touchscreen interface and interchangeable handheld applicators for different treatment modalities. The blue and silver finish communicates clinical precision while differentiating from the typical white-and-gray medical device aesthetic. Three views show the console, applicator dock, and handheld treatment head.',
        media: img('/media/work/medical/aesthetic-treatment-machine/aesthetic-treatment-machine-1.jpg', 'Aesthetic treatment machine — full system overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/medical/aesthetic-treatment-machine/aesthetic-treatment-machine-1.jpg', 'Aesthetic treatment machine — system view') },
          { media: img('/media/work/medical/aesthetic-treatment-machine/aesthetic-treatment-machine-2.jpg', 'Aesthetic treatment machine — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Aesthetic Treatment Machine — Product Design & Engineering | 123.design',
      description:
        'Medical-grade aesthetic treatment device with integrated touchscreen controls and interchangeable handheld applicators. Industrial design for a...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-bomb-remote',
    slug: BOMB_REMOTE_SLUG,
    title: 'Bomb Squad Remote Control',
    summary:
      'Military-grade remote control system for explosive ordnance disposal operations. Carbon fiber construction with integrated laptop display, antenna system, and field-deployable keyboard for EOD teams.',
    heroMedia: img('/media/work/defense-security/bomb-squad-remote/bomb-squad-remote-1.jpg', 'Bomb squad remote control — carbon fiber EOD device with map display', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A remote control system designed for military explosive ordnance disposal (EOD) teams. The device features carbon fiber construction for durability and weight reduction, an integrated laptop display showing tactical map interfaces, a high-gain antenna for reliable field communication, and a full keyboard for precise command input. The design prioritizes operability under stress — controls are reachable and identifiable by touch, and the form factor supports both vehicle-mounted and dismounted use.',
        media: img('/media/work/defense-security/bomb-squad-remote/bomb-squad-remote-1.jpg', 'Bomb squad remote — overview with map display'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/defense-security/bomb-squad-remote/bomb-squad-remote-1.jpg', 'Bomb squad remote — front view') },
          { media: img('/media/work/defense-security/bomb-squad-remote/bomb-squad-remote-2.jpg', 'Bomb squad remote — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Bomb Squad Remote Control — Product Design & Engineering | 123.design',
      description:
        'Military-grade remote control system for explosive ordnance disposal operations. Carbon fiber construction with integrated laptop display, antenna...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-barcode-scanner',
    slug: BARCODE_SCANNER_SLUG,
    title: 'Barcode Scanner',
    summary:
      'Ergonomic handheld barcode scanner for retail and warehouse environments. Blue housing with red accent stripe, contoured grip, and integrated charging dock for continuous operation.',
    heroMedia: img('/media/work/commercial/barcode-scanner/barcode-scanner-1.jpg', 'Barcode scanner — blue handheld device on charging dock', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A handheld barcode scanner designed for high-volume retail and warehouse environments. The blue housing with red accent stripe provides high visibility on the floor. The contoured grip reduces fatigue during extended use, and the scanning trigger is positioned for natural index-finger actuation. The charging dock holds the scanner upright for hands-free charging between uses, with contact pins that align automatically when docked.',
        media: img('/media/work/commercial/barcode-scanner/barcode-scanner-1.jpg', 'Barcode scanner — resting on charging dock'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/commercial/barcode-scanner/barcode-scanner-1.jpg', 'Barcode scanner — on dock') },
          { media: img('/media/work/commercial/barcode-scanner/barcode-scanner-2.jpg', 'Barcode scanner — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Barcode Scanner — Product Design & Engineering | 123.design',
      description:
        'Ergonomic handheld barcode scanner for retail and warehouse environments. Blue housing with red accent stripe, contoured grip, and integrated charging...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-boat-profile',
    slug: BOAT_PROFILE_SLUG,
    title: 'Boat Profile',
    summary:
      'Luxury yacht profile rendering showing sleek dark hull lines from two perspectives. Naval industrial design study exploring hull proportions, deck geometry, and superstructure silhouette for a motor yacht.',
    heroMedia: img('/media/work/transportation/boat-profile/boat-profile-1.jpg', 'Boat profile — dark blue yacht side and top view rendering', 1600, 900),
    industries: ['Transportation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A naval industrial design study for a luxury motor yacht. Two profile views — side and top — explore the hull proportions, deck geometry, and superstructure silhouette. The dark blue rendering on a black background emphasizes the hull lines and allows evaluation of the vessel\'s visual character. The design balances sleek sporty proportions with the volume needed for luxury accommodation below and on deck.',
        media: img('/media/work/transportation/boat-profile/boat-profile-1.jpg', 'Boat profile — side and top views'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/transportation/boat-profile/boat-profile-1.jpg', 'Boat profile — primary rendering') },
          { media: img('/media/work/transportation/boat-profile/boat-profile-2.jpg', 'Boat profile — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Boat Profile — Product Design & Engineering | 123.design',
      description:
        'Luxury yacht profile rendering showing sleek dark hull lines from two perspectives. Naval industrial design study exploring hull proportions, deck...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-all-in-one-grill',
    slug: GRILL_SLUG,
    title: 'All-in-One Grill',
    summary:
      'Compact portable outdoor grill with integrated red heating elements visible through a circular cooking aperture. Designed for tabletop and outdoor use with a dark gray housing and intuitive top-mounted controls.',
    heroMedia: img('/media/work/outdoors/all-in-one-grill/all-in-one-grill-1.jpg', 'All-in-one grill — compact portable grill with visible heating elements', 1600, 900),
    industries: ['Outdoors'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['CON'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A compact portable grill designed for outdoor and tabletop use. The circular cooking aperture exposes red heating elements for visible cooking action, while the dark gray and silver housing provides a modern aesthetic that contrasts with traditional barbecue grills. Top-mounted red control buttons allow heat adjustment without reaching over the cooking surface. The form factor prioritizes portability — compact enough for a car trunk or balcony while still providing adequate cooking area.',
        media: img('/media/work/outdoors/all-in-one-grill/all-in-one-grill-1.jpg', 'All-in-one grill — front view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/outdoors/all-in-one-grill/all-in-one-grill-1.jpg', 'All-in-one grill — primary view') },
          {
            media: img('/media/projects/all-in-one-grill/grill-1.png', 'All-in-one grill — compact portable design with heating elements', 1536, 1024),
            caption: 'Compact portable grill with integrated red heating elements visible through cooking aperture',
          },
          {
            media: img('/media/projects/all-in-one-grill/grill-2.png', 'All-in-one grill — detail of heating element and cooking surface', 1024, 1280),
            caption: 'Close-up of circular cooking aperture with red heating elements and control knobs',
          },
        ],
      },
    ],
    seo: {
      title: 'All-in-One Grill — Product Design & Engineering | 123.design',
      description:
        'Compact portable outdoor grill with integrated red heating elements visible through a circular cooking aperture. Designed for tabletop and outdoor use...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-aircraft-interior',
    slug: AIRCRAFT_INTERIOR_SLUG,
    title: 'Aircraft Interior',
    summary:
      'Luxury aircraft cabin interior design featuring white leather seating, blue ambient lighting, and a full dining setup. The layout arranges two rows of facing seats with a central table for in-flight dining and meetings.',
    heroMedia: img('/media/work/transportation/aircraft-interior/aircraft-interior-1.jpg', 'Aircraft interior — luxury cabin with white leather seats and blue ambient lighting', 1600, 900),
    industries: ['Transportation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A luxury aircraft cabin interior design for private or VIP aviation. The rendering shows white leather seats arranged in two facing rows with a central dining table, set against blue ambient lighting that runs along the ceiling and wall panels. The dining setup includes place settings with glassware and wine, communicating the level of service the cabin is designed to support. Materials, lighting temperature, and seat proportions are all tuned for long-haul comfort and a residential quality.',
        media: img('/media/work/transportation/aircraft-interior/aircraft-interior-1.jpg', 'Aircraft interior — cabin overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/transportation/aircraft-interior/aircraft-interior-1.jpg', 'Aircraft interior — dining layout') },
          { media: img('/media/work/transportation/aircraft-interior/aircraft-interior-2.jpg', 'Aircraft interior — alternate angle') },
        ],
      },
    ],
    seo: {
      title: 'Aircraft Interior — Product Design & Engineering | 123.design',
      description:
        'Luxury aircraft cabin interior design featuring white leather seating, blue ambient lighting, and a full dining setup. The layout arranges two rows of...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-grip-strength-dynamometer',
    slug: DYNAMOMETER_SLUG,
    title: 'Grip Strength Dynamometer',
    summary:
      'Ergonomic handheld grip strength dynamometer with digital readout for clinical and fitness assessment. The Dyna+ device combines medical-grade measurement with an industrial design suited to repeated daily use in rehabilitation and sports science.',
    heroMedia: img('/media/work/medical/dynamometer/dynamometer-1.jpg', 'Dyna+ grip strength dynamometer — ergonomic handheld device with digital display', 1600, 900),
    industries: ['Medical', 'Fitness'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'The Dyna+ grip strength dynamometer is a handheld clinical device for measuring grip force in rehabilitation, occupational health, and sports science settings. The industrial design prioritizes ergonomic grip geometry — the housing contour fits naturally in the palm with the digital display angled for easy reading during measurement. The sensor zone is positioned to capture consistent readings regardless of hand size. The form communicates medical precision while remaining approachable for patients who may be unfamiliar with the device.',
        media: img('/media/work/medical/dynamometer/dynamometer-1.jpg', 'Dyna+ dynamometer — front view showing display and grip contour'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/medical/dynamometer/dynamometer-1.jpg', 'Dyna+ dynamometer — primary view') },
          { media: img('/media/work/medical/dynamometer/dynamometer-2.jpg', 'Dyna+ dynamometer — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Grip Strength Dynamometer — Product Design & Engineering | 123.design',
      description:
        'Ergonomic handheld grip strength dynamometer with digital readout for clinical and fitness assessment. The Dyna+ device combines medical-grade...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-emergency-beacon',
    slug: EMERGENCY_BEACON_SLUG,
    title: 'Emergency Beacon',
    summary:
      'Marine-grade emergency beacon light with high-visibility yellow housing and rotating warning lamp. Designed for maritime and industrial safety applications where immediate visual recognition is critical.',
    heroMedia: img('/media/work/industrial/emergency-beacon/emergency-beacon-1.jpg', 'Emergency beacon light — yellow rotating warning light with life preserver', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A marine-grade emergency beacon designed for high-visibility warning in maritime and industrial environments. The bright yellow housing ensures the device is immediately recognizable even in peripheral vision or low-light conditions. The rotating lamp mechanism produces a sweeping light pattern that draws attention from all directions. The base integrates with standard life preserver mounting hardware, allowing the beacon to be co-located with rescue equipment. The design must withstand salt spray, UV exposure, and temperature extremes without degradation of the housing color or lamp mechanism.',
        media: img('/media/work/industrial/emergency-beacon/emergency-beacon-1.jpg', 'Emergency beacon — yellow housing with rotating lamp'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/industrial/emergency-beacon/emergency-beacon-1.jpg', 'Emergency beacon — primary view') },
          {
            media: img('/media/projects/emergency-beacon/emergency-beacon-1.png', 'Emergency beacon — marine-grade yellow housing with rotating lamp', 1536, 1024),
            caption: 'Marine-grade emergency beacon with high-visibility yellow housing and rotating warning lamp',
          },
          {
            media: img('/media/projects/emergency-beacon/emergency-beacon-2.png', 'Emergency beacon — detail of rotating lamp mechanism', 1024, 1280),
            caption: 'Close-up detail of rotating warning lamp mechanism and lens assembly',
          },
        ],
      },
    ],
    seo: {
      title: 'Emergency Beacon — Product Design & Engineering | 123.design',
      description:
        'Marine-grade emergency beacon light with high-visibility yellow housing and rotating warning lamp. Designed for maritime and industrial safety...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-eaton-flight-box',
    slug: EATON_FLIGHT_BOX_SLUG,
    title: 'EATON Flight Box',
    summary:
      'Ruggedized flight case for EATON housing sensitive avionics and mission-critical electronics. The design integrates rack mounting, cable management, and environmental protection into a field-deployable enclosure.',
    heroMedia: img('/media/work/defense-security/eaton-flight-box/eaton-flight-box-1.jpg', 'EATON rugged flight case — open showing internal electronics and rack mounting', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A ruggedized flight case designed by EATON for deploying sensitive avionics and mission-critical electronics in field environments. The open view reveals a 19-inch rack-mount chassis with organized cable management, power distribution, and module bays. The enclosure must protect its contents from shock, vibration, moisture, and dust during transport by aircraft, vehicle, or helicopter. The industrial design balances structural rigidity with weight constraints — the case must be strong enough to survive rough handling but light enough for air transport. Latch placement, handle ergonomics, and stacking features are all designed for rapid deployment by military or emergency response teams.',
        media: img('/media/work/defense-security/eaton-flight-box/eaton-flight-box-1.jpg', 'EATON flight box — open showing rack-mount internals'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/defense-security/eaton-flight-box/eaton-flight-box-1.jpg', 'EATON flight box — internal layout') },
          {
            media: img('/media/projects/eaton-flight-box/eaton-flight-box-1.png', 'EATON flight box — ruggedized case with rack mounting', 1536, 1024),
            caption: 'Ruggedized flight case with internal rack mounting and precision-cut foam inserts',
          },
          {
            media: img('/media/projects/eaton-flight-box/eaton-flight-box-2.png', 'EATON flight box — internal electronics and cable management', 1024, 1280),
            caption: 'Close-up of internal electronics modules and organized cable management system',
          },
        ],
      },
    ],
    seo: {
      title: 'EATON Flight Box — Product Design & Engineering | 123.design',
      description:
        'Ruggedized flight case for EATON housing sensitive avionics and mission-critical electronics. The design integrates rack mounting, cable management,...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-flight-planner',
    slug: FLIGHT_PLANNER_SLUG,
    title: 'Flight Planner',
    summary:
      'Handheld aviation flight planner with integrated map display and navigation controls. A portable electronic flight bag replacement designed for cockpit use with glove-compatible inputs and sunlight-readable screen.',
    heroMedia: img('/media/work/defense-security/flight-planner/flight-planner-1.jpg', 'Handheld aviation flight planner with map display and navigation controls', 1600, 900),
    industries: ['Defense & Security', 'Transportation'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A handheld aviation flight planner designed as a portable replacement for paper flight bags and bulky cockpit electronics. The device features a sunlight-readable map display with navigation waypoints, flight plan overlays, and terrain data. The black housing is designed for cockpit integration — compact enough to mount on a kneeboard or yoke, with physical buttons sized for operation with flight gloves. The form factor balances screen size against one-handed operability. Battery life, durability under vibration, and electromagnetic compatibility with avionics are all critical engineering constraints.',
        media: img('/media/work/defense-security/flight-planner/flight-planner-1.jpg', 'Flight planner — map display view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/defense-security/flight-planner/flight-planner-1.jpg', 'Flight planner — primary view') },
          {
            media: img('/media/projects/flight-planner/flight-planner-1.png', 'Flight planner — handheld aviation device with map display', 1536, 1024),
            caption: 'Handheld aviation flight planner with integrated map display and navigation controls',
          },
          {
            media: img('/media/projects/flight-planner/flight-planner-2.png', 'Flight planner — sunlight-readable display with aviation waypoints', 1024, 1280),
            caption: 'Close-up of sunlight-readable display showing aviation waypoints and navigation interface',
          },
        ],
      },
    ],
    seo: {
      title: 'Flight Planner — Product Design & Engineering | 123.design',
      description:
        'Handheld aviation flight planner with integrated map display and navigation controls. A portable electronic flight bag replacement designed for cockpit...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-fps-biometric-access',
    slug: FPS_BIOMETRIC_SLUG,
    title: 'FPS Biometric Access',
    summary:
      'Multi-factor biometric access control terminal combining camera, numeric keypad, and fingerprint scanner in a single wall-mounted unit. Designed for secure facility entry with layered identity verification.',
    heroMedia: img('/media/work/defense-security/fps-biometric/fps-biometric-1.jpg', 'FPS biometric access control device with camera, keypad, and fingerprint scanner', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A multi-factor biometric access control terminal that combines three verification methods in a single wall-mounted device: a camera for facial recognition or visual identification, a numeric keypad for PIN entry, and a fingerprint scanner for biometric authentication. The vertical layout stacks these elements in an ergonomic sequence — camera at eye level for face capture, keypad at hand height for PIN entry, and fingerprint sensor at thumb level. The industrial design must communicate security authority while remaining approachable for authorized users. The housing must resist tampering, weather exposure (for exterior mounting), and attempts at spoofing.',
        media: img('/media/work/defense-security/fps-biometric/fps-biometric-1.jpg', 'FPS biometric — front panel showing camera, keypad, and scanner'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/defense-security/fps-biometric/fps-biometric-1.jpg', 'FPS biometric — primary view') },
          {
            media: img('/media/projects/fps-biometric-access/fps-biometric-1.png', 'FPS biometric access — multi-factor terminal with camera and scanner', 1536, 1024),
            caption: 'Multi-factor biometric access terminal combining camera, keypad, and fingerprint scanner',
          },
          {
            media: img('/media/projects/fps-biometric-access/fps-biometric-2.png', 'FPS biometric access — fingerprint scanner and sensor detail', 1024, 1280),
            caption: 'Close-up of fingerprint scanner with LED illumination and precision sensors',
          },
        ],
      },
    ],
    seo: {
      title: 'FPS Biometric Access — Product Design & Engineering | 123.design',
      description:
        'Multi-factor biometric access control terminal combining camera, numeric keypad, and fingerprint scanner in a single wall-mounted unit. Designed for...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-sports-goggles',
    slug: SPORTS_GOGGLES_SLUG,
    title: 'Sports Goggles',
    summary:
      'Sports goggles with integrated camera module for first-person action recording. The design merges protective eyewear with wearable capture technology for cycling, skiing, and extreme sports.',
    heroMedia: img('/media/work/sport/sports-goggles/sports-goggles-1.jpg', 'Sports goggles with integrated camera — white and black frames with tinted lenses', 1600, 900),
    industries: ['Sport'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['EVT'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Sports goggles that integrate a camera module directly into the frame for first-person action recording. Unlike helmet-mounted cameras that add bulk, this design embeds the camera into the goggle structure itself — maintaining a low profile while capturing footage from the natural eye line. The white and black frame with tinted lenses communicates a sporty, technical aesthetic. Key design challenges include vibration dampening for stable footage, fog prevention for both the lens and camera, and a secure fit that survives high-G activities. The camera module must be removable for charging and data transfer without compromising the goggle seal.',
        media: img('/media/work/sport/sports-goggles/sports-goggles-1.jpg', 'Sports goggles — frame with integrated camera module'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/sport/sports-goggles/sports-goggles-1.jpg', 'Sports goggles — primary view') },
          {
            media: img('/media/projects/sports-goggles/sports-goggles-1.png', 'Sports goggles — protective eyewear with integrated camera', 1536, 1024),
            caption: 'Sports goggles with integrated camera module for first-person action recording',
          },
          {
            media: img('/media/projects/sports-goggles/sports-goggles-2.png', 'Sports goggles — camera module and lens detail', 1024, 1280),
            caption: 'Close-up of integrated camera module and protective lens design',
          },
        ],
      },
    ],
    seo: {
      title: 'Sports Goggles — Product Design & Engineering | 123.design',
      description:
        'Sports goggles with integrated camera module for first-person action recording. The design merges protective eyewear with wearable capture technology...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-cool-drive-micro',
    slug: COOL_DRIVE_SLUG,
    title: 'Cool Drive Micro',
    summary:
      'Tower-shaped multi-format storage hub accepting CDs, SD cards, USB drives, and external hard drives. The Cool Drive Micro consolidates legacy and modern media formats into a single desktop device.',
    heroMedia: img('/media/work/consumer-electronics/cool-drive-micro/cool-drive-micro-1.jpg', 'Cool Drive Micro — tower-shaped multi-format storage hub with CD, SD, and USB slots', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2007,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'The Cool Drive Micro is a tower-shaped desktop storage hub that consolidates multiple media formats into a single device. It accepts CDs, SD cards, CompactFlash cards, USB flash drives, and 2.5-inch external hard drives — covering both legacy optical media and modern solid-state storage. The vertical tower form factor minimizes desk footprint while keeping all input slots accessible from the top edge. The industrial design uses a clean white and silver palette that fits alongside Apple-era desktop peripherals. Internal electronics handle format detection, data transfer, and pass-through to the host computer via USB or FireWire.',
        media: img('/media/work/consumer-electronics/cool-drive-micro/cool-drive-micro-1.jpg', 'Cool Drive Micro — tower form factor with multi-format slots'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/consumer-electronics/cool-drive-micro/cool-drive-micro-1.jpg', 'Cool Drive Micro — primary view') },
          {
            media: img('/media/projects/cool-drive-micro/cool-drive-1.png', 'Cool Drive Micro — tower-shaped multi-format storage hub', 1536, 1024),
            caption: 'Tower-shaped storage hub consolidating CDs, SD cards, USB drives, and external hard drives',
          },
          {
            media: img('/media/projects/cool-drive-micro/cool-drive-2.png', 'Cool Drive Micro — multiple media input slots detail', 1024, 1280),
            caption: 'Close-up of multiple media input slots and LED status indicators',
          },
        ],
      },
    ],
    seo: {
      title: 'Cool Drive Micro — Product Design & Engineering | 123.design',
      description:
        'Tower-shaped multi-format storage hub accepting CDs, SD cards, USB drives, and external hard drives. The Cool Drive Micro consolidates legacy and...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-hydraulic-valve',
    slug: HYDRAULIC_VALVE_SLUG,
    title: 'Hydraulic Valve',
    summary:
      'Cross-section rendering of a hydraulic control valve showing internal flow paths, spool mechanism, and port geometry. An industrial mechanical engineering study for fluid power system design.',
    heroMedia: img('/media/work/industrial/hydraulic-valve/hydraulic-valve-1.jpg', 'Hydraulic valve cross-section rendering showing internal flow paths and spool mechanism', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Mechanical Engineering', 'Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A cross-section rendering of a hydraulic control valve, showing the internal spool mechanism, flow paths, and port geometry. This type of valve directs pressurized hydraulic fluid to actuators in heavy machinery, industrial presses, and mobile equipment. The rendering communicates the precision of the internal machining — tight tolerances between the spool and bore are critical for controlling flow rate and preventing internal leakage. The mechanical engineering work involves calculating flow coefficients, pressure drops, and force balances across the spool lands. The rendering serves both as a design communication tool and a manufacturing reference.',
        media: img('/media/work/industrial/hydraulic-valve/hydraulic-valve-1.jpg', 'Hydraulic valve — cutaway showing spool and flow paths'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/industrial/hydraulic-valve/hydraulic-valve-1.jpg', 'Hydraulic valve — cross-section view') },
          {
            media: img('/media/projects/hydraulic-valve/hydraulic-valve-1.png', 'Hydraulic valve — cross-section showing internal flow paths', 1536, 1024),
            caption: 'Cross-section rendering showing internal flow paths, spool mechanism, and port geometry',
          },
          {
            media: img('/media/projects/hydraulic-valve/hydraulic-valve-2.png', 'Hydraulic valve — spool mechanism and precision machined components', 1024, 1280),
            caption: 'Close-up of precision-machined spool mechanism and internal sealing surfaces',
          },
        ],
      },
    ],
    seo: {
      title: 'Hydraulic Valve — Product Design & Engineering | 123.design',
      description:
        'Cross-section rendering of a hydraulic control valve showing internal flow paths, spool mechanism, and port geometry. An industrial mechanical...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-information-kiosk',
    slug: INFO_KIOSK_SLUG,
    title: 'Information Kiosk',
    summary:
      'Digital information pillar kiosk deployed in transit stations and public spaces. The tall, slim form factor houses a display screen, media player, and network connectivity for wayfinding and information delivery.',
    heroMedia: img('/media/work/commercial/information-kiosk/information-kiosk-1.jpg', 'Digital information kiosk in transit station — tall pillar with display screen', 1600, 900),
    industries: ['Commercial', 'Communication'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A digital information kiosk designed for deployment in transit stations, airports, and public spaces. The tall pillar form factor minimizes floor footprint while positioning the display screen at comfortable viewing height. The enclosure houses a display panel, media player, network connectivity, and thermal management — all sealed against dust and vandalism. The industrial design must balance visibility (the kiosk must be easy to find in a busy station) with restraint (it should not dominate the architectural environment). The brushed metal finish and clean geometry complement the surrounding transit infrastructure.',
        media: img('/media/work/commercial/information-kiosk/information-kiosk-1.jpg', 'Information kiosk — pillar form in transit station context'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/commercial/information-kiosk/information-kiosk-1.jpg', 'Information kiosk — installed view') },
          {
            media: img('/media/projects/information-kiosk/info-kiosk-1.png', 'Information kiosk — digital pillar in transit station', 1536, 1024),
            caption: 'Digital information pillar kiosk with tall slim form factor for wayfinding',
          },
          {
            media: img('/media/projects/information-kiosk/info-kiosk-2.png', 'Information kiosk — interactive touchscreen display detail', 1024, 1280),
            caption: 'Close-up of interactive touchscreen display with wayfinding interface',
          },
        ],
      },
    ],
    seo: {
      title: 'Information Kiosk — Product Design & Engineering | 123.design',
      description:
        'Digital information pillar kiosk deployed in transit stations and public spaces. The tall, slim form factor houses a display screen, media player, and...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-security-wand',
    slug: SECURITY_WAND_SLUG,
    title: 'Security Wand',
    summary:
      'Scan-Tek handheld metal detector wand for security screening. The ergonomic design enables prolonged use by security personnel while maintaining consistent detection sensitivity across the scan area.',
    heroMedia: img('/media/work/defense-security/security-wand/security-wand-1.jpg', 'Scan-Tek handheld metal detector wand — black with red LED indicator', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'The Scan-Tek handheld metal detector wand is used by security personnel at airports, government buildings, and event venues to screen individuals for concealed metallic objects. The design prioritizes ergonomics for prolonged use — the weight distribution, grip contour, and overall length are tuned to reduce operator fatigue during hundreds of scans per day. The red LED indicator provides clear visual feedback when metal is detected, visible to both the operator and the person being screened. The sensor coil spans the full length of the detection head for maximum coverage per sweep. Battery life, sensitivity calibration, and durability under continuous use are key engineering parameters.',
        media: img('/media/work/defense-security/security-wand/security-wand-1.jpg', 'Scan-Tek wand — full length view with LED indicator'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/defense-security/security-wand/security-wand-1.jpg', 'Security wand — primary view') },
        ],
      },
    ],
    seo: {
      title: 'Security Wand — Product Design & Engineering | 123.design',
      description:
        'Scan-Tek handheld metal detector wand for security screening. The ergonomic design enables prolonged use by security personnel while maintaining...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-disney-teether',
    slug: DISNEY_TEETHER_SLUG,
    title: 'Disney Hunny Pot Teether',
    summary:
      'Disney Baby Winnie the Pooh "Hunny" pot teether — a licensed infant product combining character design with safe, functional teething surfaces. The pot shape doubles as a gripping aid for small hands.',
    heroMedia: img('/media/work/toys-games-juvenile/disney-teether/disney-teether-1.jpg', 'Disney Baby Winnie the Pooh Hunny pot teether in retail packaging', 1600, 900),
    industries: ['Toys, Games & Juvenile'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A licensed Disney Baby teether designed as a miniature Winnie the Pooh "Hunny" pot. The pot shape serves a dual purpose — it is instantly recognizable as a character object, and its rounded form with protruding rim provides multiple gripping surfaces for small hands. The material is food-grade silicone that is safe for mouthing, with textured zones on the pot body and a separate "honey dipper" element that provides additional chewing variety. The retail packaging uses a windowed blister card that shows the product while communicating safety certifications and age recommendations. The project required close collaboration with Disney licensing to ensure character accuracy while meeting infant product safety standards.',
        media: img('/media/work/toys-games-juvenile/disney-teether/disney-teether-1.jpg', 'Disney teether — packaged retail view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/toys-games-juvenile/disney-teether/disney-teether-1.jpg', 'Disney teether — retail packaging') },
          { media: img('/media/work/toys-games-juvenile/disney-teether/disney-teether-2.jpg', 'Disney teether — 3D render showing pot form') },
        ],
      },
    ],
    seo: {
      title: 'Disney Hunny Pot Teether — Product Design & Engineering | 123.design',
      description:
        'Disney Baby Winnie the Pooh "Hunny" pot teether — a licensed infant product combining character design with safe, functional teething surfaces. The pot...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-universal-remote',
    slug: UNIVERSAL_REMOTE_SLUG,
    title: 'Universal Remote',
    summary:
      'Sleek silver universal remote control with red backlit buttons and ergonomic form factor. Designed to replace multiple entertainment system remotes with a single, intuitive device.',
    heroMedia: img('/media/work/consumer-electronics/universal-remote/universal-remote-1.jpg', 'Sleek silver universal remote control with red backlit buttons', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2008,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A premium universal remote control designed to consolidate multiple entertainment system remotes into a single device. The silver aluminum body with red backlit buttons communicates quality and provides intuitive operation in dim viewing environments. The button layout organizes controls by function — power, source selection, volume, channel, and navigation — in zones that match the user\'s mental model of their entertainment system. The elongated form fits comfortably in one hand with thumb-reachable controls, while the weight and balance convey solidity without fatigue. IR and RF connectivity allow control of components both in line-of-sight and inside closed cabinets.',
        media: img('/media/work/consumer-electronics/universal-remote/universal-remote-1.jpg', 'Universal remote — angled view showing button layout'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/consumer-electronics/universal-remote/universal-remote-1.jpg', 'Universal remote — primary view') },
        ],
      },
    ],
    seo: {
      title: 'Universal Remote — Product Design & Engineering | 123.design',
      description:
        'Sleek silver universal remote control with red backlit buttons and ergonomic form factor. Designed to replace multiple entertainment system remotes...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-pioneer-video-player',
    slug: PIONEER_PLAYER_SLUG,
    title: 'Pioneer Video Player',
    summary:
      'Pioneer HD video player with distinctive curved top surface and front-loading disc mechanism. Industrial design for a premium home theater component that communicates high-fidelity playback.',
    heroMedia: img('/media/work/consumer-electronics/pioneer-video-player/pioneer-video-player-1.jpg', 'Pioneer HD video player with curved top surface and front disc slot', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2008,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A Pioneer high-definition video player designed as a premium home theater component. The distinctive curved top surface differentiates it from the flat black boxes that dominate the category, creating a visual identity that signals quality and technological sophistication. The front-loading disc mechanism with a smooth tray ejection maintains the clean surface language. The industrial design balances visual lightness (the curved top reduces the apparent bulk) with the engineering reality of internal cooling, vibration isolation for the disc drive, and electromagnetic shielding. The display and controls are minimal — Pioneer\'s target user values picture quality over feature complexity.',
        media: img('/media/work/consumer-electronics/pioneer-video-player/pioneer-video-player-1.jpg', 'Pioneer video player — three-quarter view showing curved top'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/consumer-electronics/pioneer-video-player/pioneer-video-player-1.jpg', 'Pioneer video player — primary view') },
        ],
      },
    ],
    seo: {
      title: 'Pioneer Video Player — Product Design & Engineering | 123.design',
      description:
        'Pioneer HD video player with distinctive curved top surface and front-loading disc mechanism. Industrial design for a premium home theater component...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-golf-putter',
    slug: GOLF_PUTTER_SLUG,
    title: 'Golf Putter',
    summary:
      'Golf putter with blue shaft and silver blade head. A sport equipment design study exploring head geometry, balance, and visual alignment aids for improved putting accuracy.',
    heroMedia: img('/media/work/sport/golf-putter/golf-putter-1.jpg', 'Golf putter with blue shaft and silver blade head on grass', 1600, 900),
    industries: ['Sport'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A golf putter design featuring a classic blade head with a distinctive blue shaft. The blade head geometry is optimized for a face-balanced stroke with a sweet spot centered behind the clubface for consistent ball roll. The silver finish on the head provides a clean visual contrast against the green playing surface, while the blue shaft adds a personalization element that differentiates the club in a market dominated by all-black or all-silver offerings. Alignment aids on the top of the blade help the golfer square the face at address. The grip, hosel transition, and head weight distribution are all tuned for the feel that serious golfers demand from a putter.',
        media: img('/media/work/sport/golf-putter/golf-putter-1.jpg', 'Golf putter — full club view on grass'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/sport/golf-putter/golf-putter-1.jpg', 'Golf putter — primary view') },
        ],
      },
    ],
    seo: {
      title: 'Golf Putter — Product Design & Engineering | 123.design',
      description:
        'Golf putter with blue shaft and silver blade head. A sport equipment design study exploring head geometry, balance, and visual alignment aids for...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-knee-boards',
    slug: KNEE_BOARDS_SLUG,
    title: 'Knee Boards',
    summary:
      'Water sports knee boards with graphic accent design in blue and orange on white and black base forms. Designed for tow-behind riding with ergonomic knee wells and strap systems.',
    heroMedia: img('/media/work/sport/knee-boards/knee-boards-1.jpg', 'Water sports knee boards — white and black boards with blue and orange graphic accents', 1600, 900),
    industries: ['Sport'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A pair of water sports knee boards designed for tow-behind riding at boats or cable parks. The design pairs a white board with blue graphic accents and a black board with orange accents — allowing riders to choose their style while maintaining visual coherence as a product family. The board shape features ergonomic knee wells molded into the deck for secure lower-body positioning, with a strap system to lock the rider in for spins and aerial maneuvers. The hull geometry balances planing surface area for quick starts with edge hardness for carving turns. The graphic design extends from the tail to the nose, creating visual motion even when the board is stationary on a retail wall.',
        media: img('/media/work/sport/knee-boards/knee-boards-1.jpg', 'Knee boards — pair showing graphic design language'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/sport/knee-boards/knee-boards-1.jpg', 'Knee boards — primary pair view') },
        ],
      },
    ],
    seo: {
      title: 'Knee Boards — Product Design & Engineering | 123.design',
      description:
        'Water sports knee boards with graphic accent design in blue and orange on white and black base forms. Designed for tow-behind riding with ergonomic...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-brass-balls-board-game',
    slug: BRASS_BALLS_SLUG,
    title: 'Brass Balls & Nerves of Steel',
    summary:
      'Tabletop board game with brass-themed packaging and custom game components. Product design for a skill-and-nerve party game targeting adult audiences.',
    heroMedia: img('/media/work/toys-games-juvenile/brass-balls/brass-balls-1.jpg', 'Brass Balls & Nerves of Steel board game — box art and components', 1600, 900),
    industries: ['Toys & Games'],
    capabilities: ['Industrial Design', 'Graphic Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2008,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A tabletop board game designed around a skill-and-nerve mechanic for adult party audiences. The brass-themed packaging and game components create a cohesive visual identity that communicates the game\'s tone before a single piece is picked up. The box art uses metallic brass tones against a dark background, establishing the premium yet playful character of the game. Inside, the game board, cards, and components follow the same material language — brass-finished pieces that feel substantial in the hand. The graphic design system extends from the box to the rulebook and card faces, maintaining visual coherence across every touchpoint of the unboxing and play experience.',
        media: img('/media/work/toys-games-juvenile/brass-balls/brass-balls-1.jpg', 'Brass Balls board game — packaging and components'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/toys-games-juvenile/brass-balls/brass-balls-1.jpg', 'Brass Balls — game box and components') },
        ],
      },
    ],
    seo: {
      title: 'Brass Balls & Nerves of Steel — Product Design & Engineering | 123.design',
      description:
        'Tabletop board game with brass-themed packaging and custom game components. Product design for a skill-and-nerve party game targeting adult audiences.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-kitchen-trash-can',
    slug: GREENCAN_SLUG,
    title: 'Kitchen Trash Can',
    summary:
      'Sleek stainless steel kitchen trash can with a red rim accent. Industrial design for a household essential that balances form and function in the kitchen environment.',
    heroMedia: img('/media/work/home/greencan/greencan-1.jpg', 'Kitchen trash can — silver stainless steel with red rim', 1600, 900),
    industries: ['Home', 'Kitchen'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A kitchen trash can designed to be visually at home in a modern kitchen rather than hidden away. The brushed stainless steel body reflects the surrounding environment, allowing the can to recede visually while still feeling like an intentional design object. The red rim accent at the lid provides a single point of color that signals the opening mechanism without overwhelming the form. The cylindrical body has a slight taper toward the base, giving it a lighter visual footprint than a straight cylinder. The lid mechanism is designed for quiet, one-handed operation — a foot pedal or gentle push opens the lid, and the soft-close damping prevents slamming. The interior liner system hides the trash bag from view while allowing easy bag changes.',
        media: img('/media/work/home/greencan/greencan-1.jpg', 'Kitchen trash can — front view showing red rim accent'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/home/greencan/greencan-1.jpg', 'Trash can — primary view') },
          { media: img('/media/work/home/greencan/greencan-2.jpg', 'Trash can — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Kitchen Trash Can — Product Design & Engineering | 123.design',
      description:
        'Sleek stainless steel kitchen trash can with a red rim accent. Industrial design for a household essential that balances form and function in the...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-da-benito-pasta-sauce',
    slug: DA_BENITO_SLUG,
    title: 'Da Benito Pasta Sauce',
    summary:
      'Brand identity and label design for a three-variety pasta sauce line. Packaging design creating a cohesive family of products with distinct variety identification.',
    heroMedia: img('/media/work/advertising/da-benito/da-benito-1.jpg', 'Da Benito pasta sauce jars — three varieties', 1600, 900),
    industries: ['Advertising', 'Graphic Design'],
    capabilities: ['Graphic Design', 'Advertising'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A brand identity and packaging design system for a three-variety pasta sauce line. The "Da Benito" name evokes Italian heritage, and the label design balances traditional Italian visual cues with modern clean typography. Each variety in the line has its own color-coded label accent while maintaining the shared brand architecture — the family is immediately recognizable on shelf, but each variant is distinguishable at a glance. The jar shape was selected to accommodate the full-wrap label while allowing the sauce color to show through on the upper portion, creating appetite appeal at point of sale. The label stock is designed to resist moisture and condensation from refrigeration without peeling or smudging.',
        media: img('/media/work/advertising/da-benito/da-benito-1.jpg', 'Da Benito pasta sauce — three variety jars'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/advertising/da-benito/da-benito-1.jpg', 'Da Benito — primary jar arrangement') },
          { media: img('/media/work/advertising/da-benito/da-benito-2.jpg', 'Da Benito — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Da Benito Pasta Sauce — Product Design & Engineering | 123.design',
      description:
        'Brand identity and label design for a three-variety pasta sauce line. Packaging design creating a cohesive family of products with distinct variety...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-rollie-paper-towel-dispenser',
    slug: ROLLIE_SLUG,
    title: 'Rollie Paper Towel Dispenser',
    summary:
      'Under-cabinet paper towel dispenser for kitchen installation. Mechanical design enabling one-handed tear-off with spring-loaded tension and concealed mounting.',
    heroMedia: img('/media/work/home/rollie/rollie-1.jpg', 'Rollie paper towel dispenser — under-cabinet mounted', 1600, 900),
    industries: ['Home', 'Kitchen'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'An under-cabinet paper towel dispenser designed for convenient kitchen use without consuming counter space. The dispenser mounts directly to the underside of a standard kitchen cabinet, keeping the roll accessible but out of the way. The core mechanical challenge was the tension system — the spring-loaded arm must hold the roll firmly enough to allow one-handed tearing, but release smoothly as paper is pulled. The arm mechanism uses a friction clutch that maintains consistent tension regardless of how much paper remains on the roll. The housing conceals the mounting hardware and spring mechanism, presenting a clean form that doesn\'t look mechanical from below. The finish matches common kitchen hardware (stainless steel, brushed nickel, or white) so the dispenser integrates rather than stands out.',
        media: img('/media/work/home/rollie/rollie-1.jpg', 'Rollie dispenser — under-cabinet installation'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/home/rollie/rollie-1.jpg', 'Rollie — installed view') },
          { media: img('/media/work/home/rollie/rollie-2.jpg', 'Rollie — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Rollie Paper Towel Dispenser — Product Design & Engineering | 123.design',
      description:
        'Under-cabinet paper towel dispenser for kitchen installation. Mechanical design enabling one-handed tear-off with spring-loaded tension and concealed...',
    },
    relatedProjects: [],
  },
  // === PROTOTYPING CAPABILITIES ===
  {
    id: 'static-abs-rtv-tooling',
    slug: ABS_RTV_SLUG,
    title: 'ABS + RTV Tooling',
    summary: 'Rapid prototyping using ABS patterns and RTV silicone molds for low-volume production runs. Bridge between concept validation and injection molding.',
    heroMedia: img('/media/work/prototyping/abs-rtv-tooling/ipm_prototype2.jpg', 'ABS + RTV tooling prototype part', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'ABS pattern making combined with RTV (Room Temperature Vulcanizing) silicone tooling enables rapid production of functional prototypes and bridge tooling. The process starts with a precision-machined or 3D-printed ABS master pattern, which is then used to create silicone molds. These molds produce urethane cast parts that closely mimic the material properties and surface finish of injection-molded ABS. This approach is ideal for runs of 10–50 units where injection molding tooling cost cannot be justified.',
        media: img('/media/work/prototyping/abs-rtv-tooling/ipm_prototype1.jpg', 'ABS pattern ready for RTV molding'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/abs-rtv-tooling/ipm_prototype1.jpg', 'ABS prototype pattern') },
          { media: img('/media/work/prototyping/abs-rtv-tooling/ipm_prototype2.jpg', 'RTV silicone mold assembly') },
          { media: img('/media/work/prototyping/abs-rtv-tooling/ipm_prototype3.jpg', 'Cast urethane parts') },
        ],
      },
    ],
    seo: {
      title: 'ABS + RTV Tooling — Product Design & Engineering | 123.design',
      description:
        'Rapid prototyping using ABS patterns and RTV silicone molds for low-volume production runs. Bridge between concept validation and injection molding.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-acrylic-forming',
    slug: ACRYLIC_FORMING_SLUG,
    title: 'Acrylic Forming & Bending',
    summary: 'Thermoforming and precision bending of acrylic sheets into complex 3D shapes for functional prototypes and display pieces.',
    heroMedia: img('/media/work/prototyping/acrylic-formingbending/prototype_guitar_support2.jpg', 'Acrylic formed guitar support prototype', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Acrylic thermoforming and line bending transforms flat sheet stock into structural forms with optical clarity. Using custom jigs and controlled heating elements, acrylic sheets are heated to their forming temperature and shaped over molds or bent along precise lines. The process produces parts with smooth, glass-like surfaces suitable for light guides, enclosures, display elements, and functional brackets. Tolerances are held to ±0.5mm on formed dimensions.',
        media: img('/media/work/prototyping/acrylic-formingbending/prototype_guitar_support.jpg', 'Acrylic guitar support — formed and polished'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/acrylic-formingbending/prototype_guitar_support.jpg', 'Guitar support — front view') },
          { media: img('/media/work/prototyping/acrylic-formingbending/prototype_guitar_support2.jpg', 'Guitar support — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Acrylic Forming & Bending — Product Design & Engineering | 123.design',
      description:
        'Thermoforming and precision bending of acrylic sheets into complex 3D shapes for functional prototypes and display pieces.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-carbon-fiber-molding-proto',
    slug: CARBON_FIBER_PROTO_SLUG,
    title: 'Carbon Fiber Molding',
    summary: 'Carbon fiber composite prototyping using wet layup and compression molding techniques for high-strength, lightweight structural parts.',
    heroMedia: img('/media/work/prototyping/carbon-fiber-molding/prototype_carbon_fiber2.jpg', 'Carbon fiber molded prototype', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Carbon fiber composite prototyping delivers production-grade structural parts with exceptional strength-to-weight ratios. Using wet layup techniques with woven carbon fiber fabric and epoxy resin systems, parts are laid up in aluminum or composite molds and cured under controlled temperature and pressure. The result is a net-shape part with visible weave pattern and mechanical properties approaching those of production composite components. Ideal for sporting goods, aerospace brackets, and automotive structural elements.',
        media: img('/media/work/prototyping/carbon-fiber-molding/prototype_carbon_fiber.jpg', 'Carbon fiber part — woven texture detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/carbon-fiber-molding/prototype_carbon_fiber.jpg', 'Carbon fiber — weave detail') },
          { media: img('/media/work/prototyping/carbon-fiber-molding/prototype_carbon_fiber2.jpg', 'Carbon fiber — formed part') },
        ],
      },
    ],
    seo: {
      title: 'Carbon Fiber Molding — Product Design & Engineering | 123.design',
      description:
        'Carbon fiber composite prototyping using wet layup and compression molding techniques for high-strength, lightweight structural parts.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-fdm-printing',
    slug: FDM_PRINTING_SLUG,
    title: 'FDM Printing',
    summary: 'Fused Deposition Modeling 3D printing for rapid concept validation, fit checks, and functional testing of production-intent geometries.',
    heroMedia: img('/media/work/prototyping/fdm-printing/prototype_fdm.jpg', 'FDM 3D printed prototype', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2022,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'FDM (Fused Deposition Modeling) is the workhorse of rapid prototyping. Using production-grade thermoplastics including ABS, polycarbonate, and nylon, FDM builds parts layer by layer from 3D CAD data. The process produces durable parts suitable for form verification, assembly fit checks, and functional testing. With layer heights as fine as 0.127mm and multi-material capabilities, FDM bridges the gap between digital design and physical validation in hours rather than days.',
        media: img('/media/work/prototyping/fdm-printing/prototype_fdm.jpg', 'FDM printed part — layer detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/fdm-printing/prototype_fdm.jpg', 'FDM prototype — detail view') },
        ],
      },
    ],
    seo: {
      title: 'FDM Printing — Product Design & Engineering | 123.design',
      description:
        'Fused Deposition Modeling 3D printing for rapid concept validation, fit checks, and functional testing of production-intent geometries.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-multi-level-prototyping',
    slug: MULTI_LEVEL_PROTO_SLUG,
    title: 'Multi Level Prototyping',
    summary: 'Strategic combination of prototyping methods across multiple fidelity levels to validate form, fit, and function progressively through the design process.',
    heroMedia: img('/media/work/prototyping/multi-level-prototyping/therapy_bike.jpg', 'Multi-level prototyping — therapy bike assembly', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Multi-level prototyping is a systematic approach that uses the right prototyping method at each stage of product development. Early-stage foam and cardboard models validate ergonomics and scale. Mid-stage 3D prints and CNC parts test mechanical function and assembly. Late-stage urethane casts and surface-finished parts approach production quality for user testing and stakeholder review. This phased approach reduces risk by catching design issues early while managing cost — each level of fidelity is invested only after the previous level has validated the design direction.',
        media: img('/media/work/prototyping/multi-level-prototyping/therapy_bike2.jpg', 'Therapy bike — assembled prototype'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/multi-level-prototyping/therapy_bike.jpg', 'Therapy bike — prototype view 1') },
          { media: img('/media/work/prototyping/multi-level-prototyping/therapy_bike2.jpg', 'Therapy bike — prototype view 2') },
        ],
      },
    ],
    seo: {
      title: 'Multi Level Prototyping — Product Design & Engineering | 123.design',
      description:
        'Strategic combination of prototyping methods across multiple fidelity levels to validate form, fit, and function progressively through the design process.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-rubber-coating-silkscreening',
    slug: RUBBER_COATING_SLUG,
    title: 'Rubber Coating & Silkscreening',
    summary: 'Surface finishing capabilities including soft-touch rubber coating and precision silkscreen printing for production-quality prototype aesthetics.',
    heroMedia: img('/media/work/prototyping/rubber-coating-silkscreening/prototype_camera_hd.jpg', 'Rubber coated camera housing prototype', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Surface finishing transforms raw prototypes into presentation-ready models that communicate the final product experience. Soft-touch rubber coatings provide ergonomic grip and premium tactile feedback. Silkscreen printing applies precise graphics, icons, labels, and branding with registration accuracy down to 0.1mm. Together, these processes enable prototypes that are visually and tactilely indistinguishable from production parts — critical for user testing, trade shows, and executive reviews.',
        media: img('/media/work/prototyping/rubber-coating-silkscreening/prototype_remote1.jpg', 'Rubber coated remote control prototype'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/rubber-coating-silkscreening/prototype_camera_hd.jpg', 'Camera housing — rubber coated') },
          { media: img('/media/work/prototyping/rubber-coating-silkscreening/prototype_remote1.jpg', 'Remote control — front view') },
          { media: img('/media/work/prototyping/rubber-coating-silkscreening/prototype_remote2.jpg', 'Remote control — side view') },
          { media: img('/media/work/prototyping/rubber-coating-silkscreening/prototype_remote3.jpg', 'Remote control — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Rubber Coating & Silkscreening — Product Design & Engineering | 123.design',
      description:
        'Surface finishing capabilities including soft-touch rubber coating and precision silkscreen printing for production-quality prototype aesthetics.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-sheet-metal-rtv-tooling',
    slug: SHEET_METAL_RTV_SLUG,
    title: 'Sheet Metal + RTV Tooling',
    summary: 'Combination of sheet metal fabrication and RTV silicone casting for prototypes that integrate metal structural elements with formed plastic components.',
    heroMedia: img('/media/work/prototyping/sheet-metal-rtv-tooling/PAP1.jpg', 'Sheet metal and RTV tooling assembly', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping', 'Tooling'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Sheet metal fabrication combined with RTV tooling produces prototypes that integrate laser-cut and formed metal structures with cast urethane housings and covers. This hybrid approach delivers the strength and precision of sheet metal — brackets, chassis, heat sinks — alongside the ergonomic forms and surface quality of cast plastics. The process is ideal for equipment enclosures, medical device housings, and industrial product prototypes where both structural rigidity and aesthetic quality are required.',
        media: img('/media/work/prototyping/sheet-metal-rtv-tooling/pap2.jpg', 'Sheet metal chassis with RTV cast covers'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/sheet-metal-rtv-tooling/PAP1.jpg', 'Assembly — overview') },
          { media: img('/media/work/prototyping/sheet-metal-rtv-tooling/pap2.jpg', 'Sheet metal chassis') },
          { media: img('/media/work/prototyping/sheet-metal-rtv-tooling/pap3.jpg', 'Formed metal detail') },
          { media: img('/media/work/prototyping/sheet-metal-rtv-tooling/pap4.jpg', 'RTV cast housing') },
          { media: img('/media/work/prototyping/sheet-metal-rtv-tooling/pap5.jpg', 'Assembly detail') },
          { media: img('/media/work/prototyping/sheet-metal-rtv-tooling/pap6.jpg', 'Final assembly') },
        ],
      },
    ],
    seo: {
      title: 'Sheet Metal + RTV Tooling — Product Design & Engineering | 123.design',
      description:
        'Combination of sheet metal fabrication and RTV silicone casting for prototypes that integrate metal structural elements with formed plastic components.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-sla-sls',
    slug: SLA_SLS_SLUG,
    title: 'SLA / SLS',
    summary: 'High-resolution stereolithography and selective laser sintering for complex geometries with fine feature detail and smooth surface finishes.',
    heroMedia: img('/media/work/prototyping/sla-sls/prototype_clip_fdm.jpg', 'SLA/SLS printed prototype clip', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Prototyping'],
    lifecycleStages: ['PRODUCTION'],
    year: 2022,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'SLA (Stereolithography) and SLS (Selective Laser Sintering) represent the highest resolution in additive manufacturing. SLA uses a UV laser to cure liquid photopolymer resin layer by layer, producing parts with surface finishes approaching injection molding and feature resolution down to 0.05mm. SLS uses a laser to fuse nylon powder, producing fully dense functional parts with complex internal geometries and living hinges that are impossible with traditional manufacturing. Both processes are ideal for intricate mechanisms, medical devices, and detailed visual models.',
        media: img('/media/work/prototyping/sla-sls/prototype_clip_fdm.jpg', 'SLA printed clip — fine feature detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/prototyping/sla-sls/prototype_clip_fdm.jpg', 'SLA/SLS prototype — clip detail') },
        ],
      },
    ],
    seo: {
      title: 'SLA / SLS — Product Design & Engineering | 123.design',
      description:
        'High-resolution stereolithography and selective laser sintering for complex geometries with fine feature detail and smooth surface finishes.',
    },
    relatedProjects: [],
  },

  // === ARCHITECTURE ===
  {
    id: 'static-charlotte-office-interior',
    slug: CHARLOTTE_OFFICE_SLUG,
    title: 'Charlotte Office Interior',
    summary: 'Corporate office interior design featuring modern workspace planning, custom furniture selection, and integrated technology infrastructure.',
    heroMedia: img('/media/work/architecture/charlotte-office-interior/Charlotte  photos 11-20-09 084 (2).jpg', 'Charlotte office interior — modern workspace', 1600, 900),
    industries: ['Architecture'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2009,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A complete interior design for a corporate office in Charlotte, North Carolina. The project encompassed space planning, material selection, custom furniture design, lighting design, and technology integration. The design language balanced professional sophistication with creative energy — open collaborative areas alongside focused work zones, with a material palette of warm woods, brushed metals, and glass. Custom reception desk, conference table, and breakout area furnishings were designed and sourced specifically for the space.',
        media: img('/media/work/architecture/charlotte-office-interior/Charlotte  photos 11-20-09 087 (2).jpg', 'Office collaborative workspace area'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/architecture/charlotte-office-interior/01.jpg', 'Office — entrance view') },
          { media: img('/media/work/architecture/charlotte-office-interior/Charlotte  photos 11-20-09 084 (2).jpg', 'Office — workspace view 1') },
          { media: img('/media/work/architecture/charlotte-office-interior/Charlotte  photos 11-20-09 087 (2).jpg', 'Office — workspace view 2') },
          { media: img('/media/work/architecture/charlotte-office-interior/Charlotte  photos 11-20-09 092 (2).jpg', 'Office — conference area') },
        ],
      },
    ],
    seo: {
      title: 'Charlotte Office Interior — Product Design & Engineering | 123.design',
      description:
        'Corporate office interior design featuring modern workspace planning, custom furniture selection, and integrated technology infrastructure.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-convent-of-the-sacred-heart',
    slug: CONVENT_SACRED_SLUG,
    title: 'Convent of the Sacred Heart',
    summary: 'Architectural design for an educational and religious facility blending traditional sacred architecture with contemporary construction methods.',
    heroMedia: img('/media/work/architecture/convent-of-the-sacred-heart/Sacred Heart-1.jpg', 'Convent of the Sacred Heart — architectural view', 1600, 900),
    industries: ['Architecture'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Architectural design for the Convent of the Sacred Heart, a facility that serves both educational and religious functions. The design respects the traditional architectural language of sacred spaces — proportion, light, and material honesty — while employing modern construction techniques and sustainability principles. The building integrates classrooms, chapels, and community spaces organized around a central courtyard that provides natural light and a contemplative gathering space.',
        media: img('/media/work/architecture/convent-of-the-sacred-heart/SacredHeart.jpg', 'Sacred Heart — main elevation'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/architecture/convent-of-the-sacred-heart/Sacred Heart-1.jpg', 'Sacred Heart — front view') },
          { media: img('/media/work/architecture/convent-of-the-sacred-heart/SacredHeart.jpg', 'Sacred Heart — elevation') },
          { media: img('/media/work/architecture/convent-of-the-sacred-heart/SacredHeart3.jpg', 'Sacred Heart — detail') },
        ],
      },
    ],
    seo: {
      title: 'Convent of the Sacred Heart — Product Design & Engineering | 123.design',
      description:
        'Architectural design for an educational and religious facility blending traditional sacred architecture with contemporary construction methods.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-hyderabad-phase-ii',
    slug: HYDERABAD_SLUG,
    title: 'Hyderabad Phase II',
    summary: 'Second phase of a mixed-use architectural development in Hyderabad, India, expanding on the master plan with residential and commercial spaces.',
    heroMedia: img('/media/work/architecture/hyderabad-phase-ii/Haydar1.jpg', 'Hyderabad Phase II — building exterior', 1600, 900),
    industries: ['Architecture'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Phase II of the Hyderabad development expands the master plan with additional residential towers and commercial podium space. The design maintains visual continuity with Phase I while introducing updated facade systems, improved natural ventilation strategies, and enhanced communal amenity spaces. The building massing responds to the tropical climate with deep overhangs, shaded balconies, and cross-ventilation corridors that reduce mechanical cooling loads.',
        media: img('/media/work/architecture/hyderabad-phase-ii/Haydar2.jpg', 'Hyderabad Phase II — alternate view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/architecture/hyderabad-phase-ii/Haydar1.jpg', 'Hyderabad — exterior view 1') },
          { media: img('/media/work/architecture/hyderabad-phase-ii/Haydar2.jpg', 'Hyderabad — exterior view 2') },
          { media: img('/media/work/architecture/hyderabad-phase-ii/Haydar3.jpg', 'Hyderabad — detail view') },
        ],
      },
    ],
    seo: {
      title: 'Hyderabad Phase II — Product Design & Engineering | 123.design',
      description:
        'Second phase of a mixed-use architectural development in Hyderabad, India, expanding on the master plan with residential and commercial spaces.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-misquamicut-beach-club',
    slug: MISQUAMICUT_SLUG,
    title: 'Misquamicut Beach Club',
    summary: 'Coastal beach club architecture designed to withstand marine environments while providing elegant leisure spaces with panoramic ocean views.',
    heroMedia: img('/media/work/architecture/misquamicut-beach-club/misquamicut1.jpg', 'Misquamicut Beach Club — coastal architecture', 1600, 900),
    industries: ['Architecture'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A beach club in Misquamicut, Rhode Island designed for the coastal environment. The architecture balances openness to the ocean with protection from salt air, wind, and storms. Elevated construction, marine-grade materials, and impact-resistant glazing ensure durability, while the open plan maximizes ocean views and natural cross-ventilation. The design vocabulary draws from traditional New England coastal architecture — cedar shingles, white trim, and natural wood interiors — updated with contemporary proportions and detailing.',
        media: img('/media/work/architecture/misquamicut-beach-club/misquamicut.jpg', 'Misquamicut — overview'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/architecture/misquamicut-beach-club/misquamicut.jpg', 'Beach club — overview') },
          { media: img('/media/work/architecture/misquamicut-beach-club/misquamicut1.jpg', 'Beach club — view 1') },
          { media: img('/media/work/architecture/misquamicut-beach-club/misquamicut2.jpg', 'Beach club — view 2') },
          { media: img('/media/work/architecture/misquamicut-beach-club/misquamicut3.jpg', 'Beach club — view 3') },
        ],
      },
    ],
    seo: {
      title: 'Misquamicut Beach Club — Product Design & Engineering | 123.design',
      description:
        'Coastal beach club architecture designed to withstand marine environments while providing elegant leisure spaces with panoramic ocean views.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-tamarack-pool-house',
    slug: TAMARACK_POOL_SLUG,
    title: 'Tamarack Pool House',
    summary: 'Pool house pavilion design for the Tamarack resort, integrating indoor-outdoor leisure spaces with mechanical systems for pool climate management.',
    heroMedia: img('/media/work/architecture/tamarack-pool-house/TamarackPool1.jpg', 'Tamarack Pool House — poolside structure', 1600, 900),
    industries: ['Architecture'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'The Tamarack Pool House serves as both a functional pool mechanical facility and an elegant gathering pavilion. The design houses filtration, heating, and chemical treatment systems within a concealed mechanical core, while the surrounding spaces provide covered lounging, changing facilities, and an outdoor kitchen. Large sliding glass walls open the pavilion to the pool deck and mountain views beyond, creating a seamless indoor-outdoor experience.',
        media: img('/media/work/architecture/tamarack-pool-house/TamarackPool.jpg', 'Tamarack Pool House — main view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/architecture/tamarack-pool-house/TamarackPool.jpg', 'Pool house — main view') },
          { media: img('/media/work/architecture/tamarack-pool-house/TamarackPool1.jpg', 'Pool house — poolside') },
        ],
      },
    ],
    seo: {
      title: 'Tamarack Pool House — Product Design & Engineering | 123.design',
      description:
        'Pool house pavilion design for the Tamarack resort, integrating indoor-outdoor leisure spaces with mechanical systems for pool climate management.',
    },
    relatedProjects: [],
  },

  // === APPLIANCES ===
  {
    id: 'static-air-conditioning-fan',
    slug: AC_FAN_SLUG,
    title: 'Air Conditioning Fan',
    summary: 'Hybrid cooling appliance combining evaporative cooling with high-velocity airflow for energy-efficient personal climate control.',
    heroMedia: img('/media/work/appliances/air-conditioning-fan/FAN3.jpg', 'Air conditioning fan unit', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A hybrid cooling appliance that combines the air movement of a high-velocity fan with evaporative cooling pads to deliver cooled airflow without the energy cost of compressor-based air conditioning. The unit draws warm air through water-saturated media, reducing air temperature by up to 15°F through evaporative heat exchange, then projects the cooled air across the room via an optimized blade geometry. The industrial design balances performance airflow with residential aesthetic expectations — clean lines, quiet operation, and intuitive controls.',
        media: img('/media/work/appliances/air-conditioning-fan/FAN1.jpg', 'AC fan — front view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/appliances/air-conditioning-fan/FAN1.jpg', 'AC fan — front') },
          { media: img('/media/work/appliances/air-conditioning-fan/FAN2.jpg', 'AC fan — alternate view') },
          { media: img('/media/work/appliances/air-conditioning-fan/FAN3.jpg', 'AC fan — lifestyle view') },
        ],
      },
    ],
    seo: {
      title: 'Air Conditioning Fan — Product Design & Engineering | 123.design',
      description:
        'Hybrid cooling appliance combining evaporative cooling with high-velocity airflow for energy-efficient personal climate control.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-refrigerator-1',
    slug: REFRIGERATOR_1_SLUG,
    title: 'Refrigerator',
    summary: 'Full-size refrigerator industrial design exploring door configuration, interior layout optimization, and contemporary exterior styling.',
    heroMedia: img('/media/work/appliances/refrigerator-1/Refrigerator_1.jpg', 'Refrigerator design concept — front view', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Industrial design exploration for a full-size residential refrigerator. The project addressed door configuration (French door vs. side-by-side), interior shelf flexibility, crisper humidity control, and exterior panel styling. The design language emphasized clean horizontal lines, integrated handles, and a flush-door profile that minimizes visual bulk. Interior layouts were optimized using anthropometric data to maximize accessible storage at common reach heights.',
        media: img('/media/work/appliances/refrigerator-1/Refrigerator_1_b.jpg', 'Refrigerator — alternate angle'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/appliances/refrigerator-1/Refrigerator_1.jpg', 'Refrigerator — front view') },
          { media: img('/media/work/appliances/refrigerator-1/Refrigerator_1_b.jpg', 'Refrigerator — alternate view') },
        ],
      },
    ],
    seo: {
      title: 'Refrigerator — Product Design & Engineering | 123.design',
      description:
        'Full-size refrigerator industrial design exploring door configuration, interior layout optimization, and contemporary exterior styling.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-refrigerator-2',
    slug: REFRIGERATOR_2_SLUG,
    title: 'Refrigerator II',
    summary: 'Second-generation refrigerator design study exploring alternative configurations, premium material finishes, and next-generation dispensing interfaces.',
    heroMedia: img('/media/work/appliances/refrigerator-2/Refrigerator_2-1.jpg', 'Refrigerator II design concept', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Building on the first refrigerator study, this second exploration pushed toward premium positioning with stainless steel cladding, touch-screen dispensing interfaces, and a four-door configuration that separates fresh and frozen zones vertically. The interior organization system uses modular bins and adjustable shelving that accommodate everything from full sheet pans to wine bottles. The design targets the luxury appliance market where aesthetics and organization are as important as thermal performance.',
        media: img('/media/work/appliances/refrigerator-2/Refrigerator_2-1_2.jpg', 'Refrigerator II — detail view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/appliances/refrigerator-2/Refrigerator_2-1.jpg', 'Refrigerator II — front') },
          { media: img('/media/work/appliances/refrigerator-2/Refrigerator_2-1_2.jpg', 'Refrigerator II — detail') },
        ],
      },
    ],
    seo: {
      title: 'Refrigerator II — Product Design & Engineering | 123.design',
      description:
        'Second-generation refrigerator design study exploring alternative configurations, premium material finishes, and next-generation dispensing interfaces.',
    },
    relatedProjects: [],
  },

  // === GRAPHIC DESIGN ===
  {
    id: 'static-jewelry',
    slug: JEWELRY_SLUG,
    title: 'Jewelry',
    summary: 'Product design and branding for a jewelry collection, encompassing piece design, packaging, display systems, and visual identity.',
    heroMedia: img('/media/work/graphic/jewelry/jewelry.jpg', 'Jewelry design — product layout', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A comprehensive design project for a jewelry brand encompassing piece design, packaging, retail display, and visual identity. Each jewelry piece was designed for stackability and mix-and-match versatility, with forms that balance contemporary minimalism with organic warmth. The packaging system uses nested boxes and magnetic closures that communicate premium quality. The retail display was designed as a modular system of acrylic and metal fixtures that allow flexible arrangement for different retail environments.',
        media: img('/media/work/graphic/jewelry/jewelry_2.jpg', 'Jewelry — collection detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/graphic/jewelry/jewelry.jpg', 'Jewelry — layout') },
          { media: img('/media/work/graphic/jewelry/jewelry_2.jpg', 'Jewelry — detail') },
        ],
      },
    ],
    seo: {
      title: 'Jewelry — Product Design & Engineering | 123.design',
      description:
        'Product design and branding for a jewelry collection, encompassing piece design, packaging, display systems, and visual identity.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-mcl-cafeteria',
    slug: MCL_CAFETERIA_SLUG,
    title: 'MCL Cafeteria',
    summary: 'Brand identity and environmental design for MCL Cafeteria, a regional restaurant chain. Encompassing logo, menu systems, signage, and interior graphics.',
    heroMedia: img('/media/work/graphic/mcl-cafeteria/MCL_Cafeteria-1.jpg', 'MCL Cafeteria branding and interior design', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Complete brand identity and environmental graphics for MCL Cafeteria, a beloved regional cafeteria chain. The project modernized the brand while preserving the warmth and nostalgia that defined the customer experience. Deliverables included a refreshed logo, menu board system, wayfinding signage, tray liner designs, and interior color palette. The design language balanced Americana heritage with contemporary cleanliness — warm typography, hand-drawn illustration accents, and a color system rooted in comfort food associations.',
        media: img('/media/work/graphic/mcl-cafeteria/MCL_Cafeteria-2.jpg', 'MCL Cafeteria — menu system'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/graphic/mcl-cafeteria/MCL_Cafeteria-1.jpg', 'MCL — branding overview') },
          { media: img('/media/work/graphic/mcl-cafeteria/MCL_Cafeteria-2.jpg', 'MCL — interior graphics') },
        ],
      },
    ],
    seo: {
      title: 'MCL Cafeteria — Product Design & Engineering | 123.design',
      description:
        'Brand identity and environmental design for MCL Cafeteria, a regional restaurant chain. Encompassing logo, menu systems, signage, and interior graphics.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-medical-advertising',
    slug: MEDICAL_AD_SLUG,
    title: 'Medical Advertising',
    summary: 'Print and digital advertising campaigns for medical device and pharmaceutical clients, translating complex clinical data into compelling visual narratives.',
    heroMedia: img('/media/work/graphic/medical-advertising/medical_Advertising_2.jpg', 'Medical advertising campaign layout', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A series of advertising campaigns for medical device and healthcare clients. The work required translating complex clinical information into visually compelling layouts that communicate efficacy and trust. Each campaign was designed for multi-channel deployment — print (trade magazines, direct mail), digital (banner ads, landing pages), and point-of-sale (brochure racks, display units). The design approach prioritized clarity and credibility, using data visualization techniques to make clinical results accessible to both healthcare professionals and consumers.',
        media: img('/media/work/graphic/medical-advertising/medical_Advertising_1.jpg', 'Medical advertising — campaign detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/graphic/medical-advertising/medical_Advertising_1.jpg', 'Medical ad — layout 1') },
          { media: img('/media/work/graphic/medical-advertising/medical_Advertising_2.jpg', 'Medical ad — layout 2') },
        ],
      },
    ],
    seo: {
      title: 'Medical Advertising — Product Design & Engineering | 123.design',
      description:
        'Print and digital advertising campaigns for medical device and pharmaceutical clients, translating complex clinical data into compelling visual narratives.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-sioux-city-sarsaparilla',
    slug: SIOUX_CITY_SLUG,
    title: 'Sioux City Sarsaparilla',
    summary: 'Packaging redesign for Sioux City Sarsaparilla, modernizing a heritage brand while preserving its distinctive Americana character and shelf presence.',
    heroMedia: img('/media/work/graphic/sioux-city-sarsaparilla/Sarsaparilla-2.jpg', 'Sioux City Sarsaparilla packaging design', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2010,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Packaging redesign for Sioux City Sarsaparilla, a heritage American soft drink brand. The challenge was to modernize the visual identity for contemporary retail while preserving the brand\'s distinctive Western heritage character. The redesign updated the label illustration, typography, and color palette while maintaining the iconic bottle silhouette and the hand-drawn quality that signals authenticity. The new packaging achieves stronger shelf presence through bolder color blocking and simplified composition that reads clearly at arm\'s length.',
        media: img('/media/work/graphic/sioux-city-sarsaparilla/Sarsaparilla-1.jpg', 'Sarsaparilla — label detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/graphic/sioux-city-sarsaparilla/Sarsaparilla-1.jpg', 'Sarsaparilla — label') },
          { media: img('/media/work/graphic/sioux-city-sarsaparilla/Sarsaparilla-2.jpg', 'Sarsaparilla — packaging') },
        ],
      },
    ],
    seo: {
      title: 'Sioux City Sarsaparilla — Product Design & Engineering | 123.design',
      description:
        'Packaging redesign for Sioux City Sarsaparilla, modernizing a heritage brand while preserving its distinctive Americana character and shelf presence.',
    },
    relatedProjects: [],
  },

  // === KITCHENWARE ===
  {
    id: 'static-kitchen-knife',
    slug: KITCHEN_KNIFE_SLUG,
    title: 'Kitchen Knife',
    summary: 'Ergonomic kitchen knife design optimizing blade geometry, handle form, and balance point for reduced fatigue during extended use.',
    heroMedia: img('/media/work/kitchenware/kitchen-knife/knife33.jpg', 'Kitchen knife — ergonomic handle design', 1600, 900),
    industries: ['Home', 'Kitchen'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Kitchen knife design focused on ergonomic optimization and cutting performance. The handle geometry was developed through iterative prototyping with professional chefs, optimizing the grip cross-section, finger guard profile, and balance point to reduce fatigue during extended prep work. The blade geometry uses a variable-thickness grind that provides stiffness at the spine for controlled cuts while thinning toward the edge for clean slicing. The handle material — a glass-filled nylon over stainless steel tang — provides secure grip even when wet.',
        media: img('/media/work/kitchenware/kitchen-knife/knife.jpg', 'Kitchen knife — full view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/kitchenware/kitchen-knife/knife.jpg', 'Knife — overview') },
          { media: img('/media/work/kitchenware/kitchen-knife/knife33.jpg', 'Knife — handle detail') },
        ],
      },
    ],
    seo: {
      title: 'Kitchen Knife — Product Design & Engineering | 123.design',
      description:
        'Ergonomic kitchen knife design optimizing blade geometry, handle form, and balance point for reduced fatigue during extended use.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-paper-holder-dispenser',
    slug: PAPER_HOLDER_SLUG,
    title: 'Paper Holder/Dispenser',
    summary: 'Wall-mounted paper towel holder and dispenser designed for hygienic single-sheet dispensing in commercial restroom and kitchen environments.',
    heroMedia: img('/media/work/kitchenware/paper-holderdispenser/rollie2.jpg', 'Paper holder/dispenser — wall-mounted design', 1600, 900),
    industries: ['Home'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A wall-mounted paper towel holder and dispenser designed for controlled, hygienic dispensing. The internal mechanism uses a spring-loaded arm that advances one sheet at a time with consistent tension, preventing the multi-sheet pulls that waste product. The housing conceals the roll and mechanism, presenting a clean architectural form suitable for both commercial restrooms and residential kitchens. The design accommodates standard roll sizes and supports tool-free reloading.',
        media: img('/media/work/kitchenware/paper-holderdispenser/rollie1.jpg', 'Paper dispenser — installed view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/kitchenware/paper-holderdispenser/rollie1.jpg', 'Dispenser — view 1') },
          { media: img('/media/work/kitchenware/paper-holderdispenser/rollie2.jpg', 'Dispenser — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Paper Holder/Dispenser — Product Design & Engineering | 123.design',
      description:
        'Wall-mounted paper towel holder and dispenser designed for hygienic single-sheet dispensing in commercial restroom and kitchen environments.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-recycle-bin',
    slug: RECYCLE_BIN_SLUG,
    title: 'Recycle Bin',
    summary: 'Eco-friendly recycling bin design with color-coded sorting compartments and pedal-operated lid for hands-free use in kitchen environments.',
    heroMedia: img('/media/work/kitchenware/recycle-bin/greencan.jpg', 'Recycle bin — eco-friendly design', 1600, 900),
    industries: ['Home'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A kitchen recycling bin designed to make waste sorting intuitive and hands-free. The unit features three color-coded compartments for recyclables, compost, and landfill waste, each with a clearly labeled lid section. A foot pedal mechanism opens all lids simultaneously or allows individual compartment access through a twist selector. The inner bins are removable for easy emptying, and the exterior shell uses recycled post-consumer plastic. The form factor fits standard kitchen cabinet widths.',
        media: img('/media/work/kitchenware/recycle-bin/greencan2.jpg', 'Recycle bin — compartments open'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/kitchenware/recycle-bin/greencan.jpg', 'Recycle bin — closed') },
          { media: img('/media/work/kitchenware/recycle-bin/greencan2.jpg', 'Recycle bin — open') },
        ],
      },
    ],
    seo: {
      title: 'Recycle Bin — Product Design & Engineering | 123.design',
      description:
        'Eco-friendly recycling bin design with color-coded sorting compartments and pedal-operated lid for hands-free use in kitchen environments.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-salt-and-pepper-shaker',
    slug: SALT_PEPPER_SLUG,
    title: 'Salt and Pepper Shaker',
    summary: 'Tabletop salt and pepper shaker set with ergonomic grip, adjustable flow control, and distinctive visual identity for the dining table.',
    heroMedia: img('/media/work/kitchenware/salt-and-pepper-shaker/salt1.jpg', 'Salt and pepper shaker set', 1600, 900),
    industries: ['Home', 'Kitchen'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A salt and pepper shaker set designed for both functional precision and table presence. The form uses an asymmetric organic shape that naturally guides the grip and makes left/right identification tactile — the salt shaker has a smooth cap while the pepper has a textured grip zone. An adjustable flow mechanism in the cap allows users to dial between fine dusting and coarse grinding output. The ceramic body is glazed in contrasting matte and gloss finishes, and the base includes a integrated catch tray.',
        media: img('/media/work/kitchenware/salt-and-pepper-shaker/SALT-017.jpg', 'Salt and pepper — alternate view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/kitchenware/salt-and-pepper-shaker/salt1.jpg', 'Shaker set — view 1') },
          { media: img('/media/work/kitchenware/salt-and-pepper-shaker/SALT-017.jpg', 'Shaker set — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Salt and Pepper Shaker — Product Design & Engineering | 123.design',
      description:
        'Tabletop salt and pepper shaker set with ergonomic grip, adjustable flow control, and distinctive visual identity for the dining table.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-kitchen-scale',
    slug: KITCHEN_SCALE_SLUG,
    title: 'Kitchen Scale',
    summary: 'Digital kitchen scale with ultra-thin profile, backlit display, and touch-sensitive controls for precise ingredient measurement.',
    heroMedia: img('/media/work/kitchenware/scale/scale1.jpg', 'Kitchen scale — digital display with clean form', 1600, 900),
    industries: ['Home', 'Kitchen'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A digital kitchen scale that prioritizes accuracy, hygiene, and visual minimalism. The weighing platform is a single piece of tempered glass with no crevices for food residue accumulation. A backlit LCD display reads through the glass surface when active and disappears when off. Touch-sensitive controls for unit switching (g, oz, ml, lb:oz) and tare function are integrated into the glass surface with capacitive sensing. The scale measures in 0.1g increments up to 5kg and auto-offs after 60 seconds of inactivity.',
        media: img('/media/work/kitchenware/scale/scale2.jpg', 'Kitchen scale — side profile'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/kitchenware/scale/scale1.jpg', 'Scale — top view') },
          { media: img('/media/work/kitchenware/scale/scale2.jpg', 'Scale — profile view') },
        ],
      },
    ],
    seo: {
      title: 'Kitchen Scale — Product Design & Engineering | 123.design',
      description:
        'Digital kitchen scale with ultra-thin profile, backlit display, and touch-sensitive controls for precise ingredient measurement.',
    },
    relatedProjects: [],
  },

  // === MEDICAL ===
  {
    id: 'static-spine-board',
    slug: SPINE_BOARD_SLUG,
    title: 'Spine Board',
    summary: 'Emergency medical spine board designed for spinal immobilization during patient extrication and transport, with integrated strap routing and radiolucent construction.',
    heroMedia: img('/media/work/medical/spine-board/stretcher-1.jpg', 'Spine board — emergency immobilization device', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'An emergency spinal immobilization device designed for first responder and hospital use. The board uses a radiolucent composite construction that allows X-ray imaging without removal, reducing patient handling during critical assessment. Integrated strap routing channels with quick-release buckles enable secure immobilization in under 60 seconds. The surface texture provides grip for patients in shock while allowing easy decontamination. Side rails and head immobilizer attachment points are molded directly into the board.',
        media: img('/media/work/medical/spine-board/STRE-050.jpg', 'Spine board — technical view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/medical/spine-board/stretcher-1.jpg', 'Spine board — view 1') },
          { media: img('/media/work/medical/spine-board/stretcher-2.jpg', 'Spine board — view 2') },
          { media: img('/media/work/medical/spine-board/STRE-050.jpg', 'Spine board — detail') },
        ],
      },
    ],
    seo: {
      title: 'Spine Board — Product Design & Engineering | 123.design',
      description:
        'Emergency medical spine board designed for spinal immobilization during patient extrication and transport, with integrated strap routing and...',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dental-jet',
    slug: DENTAL_JET_SLUG,
    title: 'Dental Jet',
    summary: 'Oral hygiene water jet device for home use, combining ergonomic handheld form with pressurized water pulsation for interdental cleaning.',
    heroMedia: img('/media/work/medical/dental-jet/dental-2.jpg', 'Dental Jet — oral hygiene device', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A handheld oral irrigation device that uses pulsating water jets to clean between teeth and below the gumline. The design challenge was balancing water reservoir capacity with handheld ergonomics — the unit must be light enough for comfortable use at arm\'s length while holding enough water for a full cleaning session. The pump mechanism generates pulses at 1,200–1,800 per minute with adjustable pressure. The handle uses a soft-grip overmold with contour mapping that guides finger placement for stable control during use.',
        media: img('/media/work/medical/dental-jet/dental-1.jpg', 'Dental Jet — handle detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/medical/dental-jet/dental-1.jpg', 'Dental Jet — view 1') },
          { media: img('/media/work/medical/dental-jet/dental-2.jpg', 'Dental Jet — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Dental Jet — Product Design & Engineering | 123.design',
      description:
        'Oral hygiene water jet device for home use, combining ergonomic handheld form with pressurized water pulsation for interdental cleaning.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-medical-hospital-scale',
    slug: MED_HOSPITAL_SCALE_SLUG,
    title: 'Medical Hospital Scale',
    summary: 'Clinical-grade hospital scale with high-capacity platform, integrated BMI calculation, and EMR connectivity for patient weighing in healthcare settings.',
    heroMedia: img('/media/work/medical/medical-hospital-scale/medical_scale-2.jpg', 'Medical hospital scale — clinical weighing device', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A clinical-grade floor scale designed for hospitals and medical offices. The platform accommodates wheelchairs and bariatric patients with a 500kg capacity and 0.05kg readability. The design prioritizes patient safety — a low-profile platform with non-slip surface, rounded edges, and integrated handrails. A tall backlit display is visible from a distance for both patient and operator. The scale connects to hospital EMR systems via RS-232 and Bluetooth, and includes a built-in BMI calculator with height input via slider.',
        media: img('/media/work/medical/medical-hospital-scale/medical_scale-1.jpg', 'Hospital scale — front view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/medical/medical-hospital-scale/medical_scale-1.jpg', 'Hospital scale — view 1') },
          { media: img('/media/work/medical/medical-hospital-scale/medical_scale-2.jpg', 'Hospital scale — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Medical Hospital Scale — Product Design & Engineering | 123.design',
      description:
        'Clinical-grade hospital scale with high-capacity platform, integrated BMI calculation, and EMR connectivity for patient weighing in healthcare settings.',
    },
    relatedProjects: [],
  },

  // === DEFENSE & SECURITY ===
  {
    id: 'static-military-finger-print-scanner',
    slug: FPS_SLUG,
    title: 'Finger-Print Scanner',
    summary: 'Military-grade biometric fingerprint scanner for field-deployable access control and identity verification in austere environments.',
    heroMedia: img('/media/work/military/finger-print-scanner/fps_2.jpg', 'Military-grade finger-print scanner', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A ruggedized biometric fingerprint scanner designed for military field deployment. The unit operates in extreme temperatures (-40°C to +70°C), resists water and dust ingress (IP67), and functions with wet, dirty, or damaged fingerprints using multi-spectral imaging. The industrial design prioritizes one-handed operation with a large scan surface that accommodates natural finger placement angles. The housing uses glass-filled nylon with rubber overmold for shock resistance and grip. Data processing occurs on-board with FIPS 140-2 compliant encryption.',
        media: img('/media/work/military/finger-print-scanner/fps_1.jpg', 'FPS — alternate view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/military/finger-print-scanner/fps_1.jpg', 'FPS — view 1') },
          { media: img('/media/work/military/finger-print-scanner/fps_2.jpg', 'FPS — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Finger-Print Scanner — Product Design & Engineering | 123.design',
      description:
        'Military-grade biometric fingerprint scanner for field-deployable access control and identity verification in austere environments.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-military-flight-box',
    slug: FLIGHT_BOX_SLUG,
    title: 'Flight Box',
    summary: 'Ruggedized equipment transport case for military aviation applications, with custom foam inserts and MIL-SPEC connectors for field-deployable electronics.',
    heroMedia: img('/media/work/military/flight-box/flight_box.jpg', 'Military flight box — ruggedized equipment case', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A ruggedized transport case designed for military aviation electronics. The flight box protects sensitive equipment during air transport, vehicle movement, and field deployment. The rotomolded polyethylene shell meets MIL-SPEC impact and environmental requirements. Custom-cut foam inserts cradle specific electronic modules with shock-absorbing suspension. MIL-SPEC connectors provide sealed pass-through for power and data without opening the case. Stackable geometry with corner castings allows secure palletizing and aircraft loading.',
        media: img('/media/work/military/flight-box/flight_box-2.jpg', 'Flight box — interior view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/military/flight-box/flight_box.jpg', 'Flight box — exterior') },
          { media: img('/media/work/military/flight-box/flight_box-2.jpg', 'Flight box — interior') },
        ],
      },
    ],
    seo: {
      title: 'Flight Box — Product Design & Engineering | 123.design',
      description:
        'Ruggedized equipment transport case for military aviation applications, with custom foam inserts and MIL-SPEC connectors for field-deployable electronics.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-pod-for-uav',
    slug: POD_UAV_SLUG,
    title: 'POD for UAV',
    summary: 'Aerodynamic sensor pod housing for unmanned aerial vehicles, integrating electro-optic/IR sensors with thermal management and vibration isolation.',
    heroMedia: img('/media/work/military/pod-for-uav/POD_2.jpg', 'UAV sensor pod — airborne surveillance housing', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2019,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'An aerodynamic sensor pod designed for integration with tactical unmanned aerial vehicles. The pod houses electro-optic and infrared sensors, GPS/INS navigation, and a datalink antenna within a streamlined enclosure that minimizes drag. Internal thermal management uses heat pipes and phase-change materials to maintain sensor operating temperatures without adding external cooling fans. Vibration isolation mounts decouple the sensors from airframe vibration for stable imagery. The pod attaches to the UAV via a quick-release interface that provides both mechanical retention and electrical connection.',
        media: img('/media/work/military/pod-for-uav/POD_1.jpg', 'UAV pod — front view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/military/pod-for-uav/POD_1.jpg', 'UAV pod — view 1') },
          { media: img('/media/work/military/pod-for-uav/POD_2.jpg', 'UAV pod — view 2') },
        ],
      },
    ],
    seo: {
      title: 'POD for UAV — Product Design & Engineering | 123.design',
      description:
        'Aerodynamic sensor pod housing for unmanned aerial vehicles, integrating electro-optic/IR sensors with thermal management and vibration isolation.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-tac-eye-binocular',
    slug: TAC_EYE_SLUG,
    title: 'Tac-Eye Binocular',
    summary: 'Tactical binocular design optimized for military observation with integrated rangefinding, image stabilization, and night vision compatibility.',
    heroMedia: img('/media/work/military/tac-eye-binocular/binocular_01.jpg', 'Tac-Eye tactical binocular — ruggedized optics', 1600, 900),
    industries: ['Defense & Security'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A tactical binocular designed for military and law enforcement observation. The optical system delivers 10x magnification with 42mm objective lenses in a nitrogen-purged, waterproof housing. The design integrates a laser rangefinder, digital compass, and image stabilization into a form factor that remains handheld-portable. Rubber armor provides shock protection and noise-free handling. Eyecups are adjustable for use with or without eye protection, and the focus mechanism uses a center wheel with individual diopter correction.',
        media: img('/media/work/military/tac-eye-binocular/binocular_02.jpg', 'Tac-Eye — alternate view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/military/tac-eye-binocular/binocular_01.jpg', 'Tac-Eye — view 1') },
          { media: img('/media/work/military/tac-eye-binocular/binocular_02.jpg', 'Tac-Eye — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Tac-Eye Binocular — Product Design & Engineering | 123.design',
      description:
        'Tactical binocular design optimized for military observation with integrated rangefinding, image stabilization, and night vision compatibility.',
    },
    relatedProjects: [],
  },

  // === MISCELLANEOUS ===
  {
    id: 'static-ipad-cover',
    slug: IPAD_COVER_SLUG,
    title: 'iPad Cover',
    summary: 'Protective iPad case with integrated stand function, smart wake/sleep magnet, and MIL-STD drop protection in a slim profile.',
    heroMedia: img('/media/work/miscellaneous/ipad-cover/IPM-010_LR.jpg', 'iPad protective cover — slim form factor', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A protective case for iPad that combines MIL-STD 810 drop protection with a slim, lightweight profile. The case uses a dual-layer construction — a rigid polycarbonate shell for impact distribution and a soft TPU inner layer for energy absorption. The cover folds into both a typing angle and a viewing angle using a tri-fold origami pattern with embedded magnets that lock each position. A smart cover magnet triggers the iPad\'s wake/sleep function automatically. Precise cutouts provide full access to all ports, buttons, and cameras.',
        media: img('/media/work/miscellaneous/ipad-cover/ipm-008_LR.jpg', 'iPad cover — folded view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/miscellaneous/ipad-cover/ipm-008_LR.jpg', 'iPad cover — view 1') },
          { media: img('/media/work/miscellaneous/ipad-cover/IPM-009_LR.jpg', 'iPad cover — view 2') },
          { media: img('/media/work/miscellaneous/ipad-cover/IPM-010_LR.jpg', 'iPad cover — view 3') },
        ],
      },
    ],
    seo: {
      title: 'iPad Cover — Product Design & Engineering | 123.design',
      description:
        'Protective iPad case with integrated stand function, smart wake/sleep magnet, and MIL-STD drop protection in a slim profile.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-ladder-rack',
    slug: LADDER_RACK_SLUG,
    title: 'Ladder Rack',
    summary: 'Vehicle-mounted ladder rack system with quick-adjust crossbars, integrated tie-down points, and aerodynamic fairing for reduced wind noise.',
    heroMedia: img('/media/work/miscellaneous/ladder-rack/ladderrack2.jpg', 'Ladder rack — vehicle-mounted storage system', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A vehicle-mounted ladder and equipment rack designed for commercial work vans and pickup trucks. The rack uses powder-coated steel construction with adjustable crossbars that slide to any position along the side rails, accommodating loads of varying width. Integrated tie-down points with D-ring anchors provide secure lashing without additional accessories. An aerodynamic front fairing reduces wind noise and fuel consumption at highway speeds. The mounting system clamps to the vehicle\'s existing rain gutters or roof rack points without drilling.',
        media: img('/media/work/miscellaneous/ladder-rack/ladderrack.jpg', 'Ladder rack — installed view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/miscellaneous/ladder-rack/ladderrack.jpg', 'Ladder rack — view 1') },
          { media: img('/media/work/miscellaneous/ladder-rack/ladderrack2.jpg', 'Ladder rack — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Ladder Rack — Product Design & Engineering | 123.design',
      description:
        'Vehicle-mounted ladder rack system with quick-adjust crossbars, integrated tie-down points, and aerodynamic fairing for reduced wind noise.',
    },
    relatedProjects: [],
  },

  // === OUTDOORS ===
  {
    id: 'static-diving-goggle-with-camera',
    slug: DIVING_GOGGLE_SLUG,
    title: 'Diving Goggle with Camera',
    summary: 'Underwater diving mask with integrated HD camera system for hands-free recording of dive experiences with wide-angle optics.',
    heroMedia: img('/media/work/outdoors/diving-goggle-with-camera/goggles1.jpg', 'Diving goggle with integrated camera', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2019,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A diving mask with an integrated HD camera system that captures the diver\'s underwater experience without requiring a separate mount or handheld device. The camera module sits flush within the mask frame, using a wide-angle lens aligned with the diver\'s natural line of sight. The housing is pressure-rated to 60m depth with dual O-ring sealing. Recording is controlled by a single oversized button that operates with dive gloves. The mask skirt uses soft silicone with a wide seal area for comfort during extended dives.',
        media: img('/media/work/outdoors/diving-goggle-with-camera/goggles2.jpg', 'Diving goggles — side view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/outdoors/diving-goggle-with-camera/goggles1.jpg', 'Diving goggles — front') },
          { media: img('/media/work/outdoors/diving-goggle-with-camera/goggles2.jpg', 'Diving goggles — side') },
          { media: img('/media/work/outdoors/diving-goggle-with-camera/goggles3.jpg', 'Diving goggles — detail') },
        ],
      },
    ],
    seo: {
      title: 'Diving Goggle with Camera — Product Design & Engineering | 123.design',
      description:
        'Underwater diving mask with integrated HD camera system for hands-free recording of dive experiences with wide-angle optics.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-led-street-light',
    slug: LED_STREET_SLUG,
    title: 'LED Street Light',
    summary: 'Municipal LED street luminaire with adaptive optics, smart controls integration, and tool-free maintenance access for urban infrastructure.',
    heroMedia: img('/media/work/outdoors/led-street-light/windsor30.jpg', 'LED street light — Windsor design', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Electrical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2020,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'An LED street luminaire designed for municipal installation. The optical system uses precisely aimed LED arrays with secondary lenses to deliver uniform illumination on the roadway while minimizing light trespass onto adjacent properties. The housing is die-cast aluminum with a powder-coat finish rated for 20-year coastal exposure. Tool-free access panels enable lamp and driver replacement from a bucket truck without ladders. Smart controls integration supports 0-10V dimming, motion sensing, and mesh-networked monitoring for predictive maintenance.',
        media: img('/media/work/outdoors/led-street-light/windsor30_1.jpg', 'LED street light — detail view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/outdoors/led-street-light/windsor30.jpg', 'Street light — view 1') },
          { media: img('/media/work/outdoors/led-street-light/windsor30_1.jpg', 'Street light — view 2') },
        ],
      },
    ],
    seo: {
      title: 'LED Street Light — Product Design & Engineering | 123.design',
      description:
        'Municipal LED street luminaire with adaptive optics, smart controls integration, and tool-free maintenance access for urban infrastructure.',
    },
    relatedProjects: [],
  },

  // === TOYS, GAMES & JUVENILE ===
  {
    id: 'static-massaging-vibrating-teether',
    slug: MASSAGING_TEETHER_SLUG,
    title: 'Massaging Vibrating Teether',
    summary: 'Licensed infant teether toy with vibration massage mechanism, textured chewing surfaces, and Disney character licensing integration.',
    heroMedia: img('/media/work/toys-games-juvenile/massaging-vibrating-teether/5717newpoohsmall.jpg', 'Massaging vibrating teether — infant comfort toy', 1600, 900),
    industries: ['Toys, Games & Juvenile'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'An infant teether that combines gentle vibration with textured chewing surfaces to soothe teething discomfort. The toy uses a licensed Disney Winnie the Pooh character form factor. The vibration mechanism is a small eccentric motor powered by a replaceable button cell battery, enclosed in a sealed compartment secured with a safety screw. The chewing surface uses food-grade silicone with varied texture zones — soft bumps, firm ridges, and cool gel-filled areas. The form is sized and shaped to prevent choking hazard while remaining easy for small hands to grip.',
        media: img('/media/work/toys-games-juvenile/massaging-vibrating-teether/teether.jpg', 'Teether — alternate view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/toys-games-juvenile/massaging-vibrating-teether/5717newpoohsmall.jpg', 'Teether — packaging view') },
          { media: img('/media/work/toys-games-juvenile/massaging-vibrating-teether/teether.jpg', 'Teether — product view') },
        ],
      },
    ],
    seo: {
      title: 'Massaging Vibrating Teether — Product Design & Engineering | 123.design',
      description:
        'Licensed infant teether toy with vibration massage mechanism, textured chewing surfaces, and Disney character licensing integration.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-wild-peas',
    slug: WILD_PEAS_SLUG,
    title: 'Wild Peas',
    summary: 'Board game design encompassing game mechanics, component design, packaging, and visual identity for a family-friendly strategy game.',
    heroMedia: img('/media/work/toys-games-juvenile/wild-peas/brass-balls6.jpg', 'Wild Peas — board game', 1600, 900),
    industries: ['Toys, Games & Juvenile'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2016,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A board game design project covering game mechanics development, component industrial design, packaging engineering, and visual identity. The game uses custom-molded playing pieces, printed cards, and a foldable game board housed in a rigid box with magnetic closure. The component design prioritizes tactile quality — weighted pieces with soft-touch coating, linen-finish cards, and a board with recessed zones that hold pieces in place during play. The packaging is designed for shelf impact in retail while protecting components during shipping.',
        media: img('/media/work/toys-games-juvenile/wild-peas/brass-balls6.jpg', 'Wild Peas — game components'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/toys-games-juvenile/wild-peas/brass-balls6.jpg', 'Wild Peas — components') },
        ],
      },
    ],
    seo: {
      title: 'Wild Peas — Product Design & Engineering | 123.design',
      description:
        'Board game design encompassing game mechanics, component design, packaging, and visual identity for a family-friendly strategy game.',
    },
    relatedProjects: [],
  },

  // === WEB DESIGN ===
  {
    id: 'static-tutor-my-kid',
    slug: TUTOR_MY_KID_SLUG,
    title: 'Tutor My Kid',
    summary: 'Educational platform website design focused on parent engagement, tutor matching, and progress tracking with accessible, trust-building visual language.',
    heroMedia: img('/media/work/web-design/tutor-my-kid/tmk.jpg', 'Tutor My Kid — educational website design', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Website design for Tutor My Kid, an online platform connecting parents with qualified tutors for K-12 education. The design prioritizes trust and clarity — parent testimonials, tutor credentials, and progress tracking dashboards are prominently featured. The visual language uses warm, approachable colors and photography of real tutoring sessions to communicate the human element behind the platform. Key user flows include tutor search and matching, session scheduling, payment processing, and progress report viewing.',
        media: img('/media/work/web-design/tutor-my-kid/Tutor My Kid 2.jpg', 'Tutor My Kid — homepage detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/web-design/tutor-my-kid/tmk.jpg', 'Tutor My Kid — homepage') },
          { media: img('/media/work/web-design/tutor-my-kid/Tutor My Kid 2.jpg', 'Tutor My Kid — inner page') },
        ],
      },
    ],
    seo: {
      title: 'Tutor My Kid — Product Design & Engineering | 123.design',
      description:
        'Educational platform website design focused on parent engagement, tutor matching, and progress tracking with accessible, trust-building visual language.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-your-lucky-eye',
    slug: YOUR_LUCKY_EYE_SLUG,
    title: 'Your Lucky Eye',
    summary: 'Creative agency website design with bold visual identity, portfolio showcase system, and interactive brand storytelling elements.',
    heroMedia: img('/media/work/web-design/your-lucky-eye/your_lucky_eye.jpg', 'Your Lucky Eye — creative website design', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Website design for Your Lucky Eye, a creative agency specializing in branding and digital experiences. The design mirrors the agency\'s creative philosophy — bold typography, unexpected layouts, and interactive elements that reward exploration. The portfolio system uses a masonry grid with hover-triggered previews, allowing potential clients to sample work before committing to full case studies. The site includes an interactive brand process visualization, team profiles with personality-driven bios, and a project inquiry form with budget and timeline selectors.',
        media: img('/media/work/web-design/your-lucky-eye/Your Lucky Eye 2.jpg', 'Your Lucky Eye — portfolio page'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/web-design/your-lucky-eye/your_lucky_eye.jpg', 'Your Lucky Eye — homepage') },
          { media: img('/media/work/web-design/your-lucky-eye/Your Lucky Eye 2.jpg', 'Your Lucky Eye — portfolio') },
        ],
      },
    ],
    seo: {
      title: 'Your Lucky Eye — Product Design & Engineering | 123.design',
      description:
        'Creative agency website design with bold visual identity, portfolio showcase system, and interactive brand storytelling elements.',
    },
    relatedProjects: [],
  },

  // === INDUSTRIAL ===
  {
    id: 'static-infrared-window',
    slug: INFRARED_WINDOW_SLUG,
    title: 'Infrared Window',
    summary: 'Industrial infrared viewing port for thermal imaging inspections of electrical panels and mechanical systems without opening enclosures.',
    heroMedia: img('/media/work/industrial/infrared-window/infrared1.jpg', 'Infrared window — thermal imaging port', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2018,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'An infrared-transparent viewing window designed for installation on electrical panels, motor control centers, and mechanical enclosures. The window allows maintenance technicians to perform thermal imaging inspections without opening the enclosure — eliminating arc flash exposure risk. The infrared-transparent lens is mounted in a steel frame that bolts to standard knockout sizes. A spring-loaded cover protects the lens from dust and debris when not in use. The design is UL-rated for use on energized equipment up to 600V.',
        media: img('/media/work/industrial/infrared-window/infrared2.jpg', 'Infrared window — installed view'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/industrial/infrared-window/infrared1.jpg', 'IR window — product view') },
          { media: img('/media/work/industrial/infrared-window/infrared2.jpg', 'IR window — installed') },
        ],
      },
    ],
    seo: {
      title: 'Infrared Window — Product Design & Engineering | 123.design',
      description:
        'Industrial infrared viewing port for thermal imaging inspections of electrical panels and mechanical systems without opening enclosures.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-hydraulic-cross-section',
    slug: HYDRAULIC_CROSS_SLUG,
    title: 'Hydraulic Cross-Section',
    summary: 'Cutaway hydraulic component display model for technical training and trade show exhibition, revealing internal flow paths and valve mechanisms.',
    heroMedia: img('/media/work/industrial/hydraulic-cross-section/hydraulic1.jpg', 'Hydraulic cross-section — cutaway technical display', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design', 'Mechanical Engineering'],
    lifecycleStages: ['PRODUCTION'],
    year: 2017,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'A cutaway display model of a hydraulic valve assembly designed for technical training and trade show exhibition. The cross-section reveals internal flow paths, spool positioning, and seal arrangements that are normally hidden within the machined housing. The cut surface is precision-machined and polished, with flow paths color-coded to distinguish pressure, return, and work ports. The display base includes a manual actuator that allows viewers to shift the spool and observe how internal passages redirect flow. Surface treatments differentiate the cut section from the intact exterior.',
        media: img('/media/work/industrial/hydraulic-cross-section/hydraulic2.jpg', 'Hydraulic cross-section — detail'),
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/industrial/hydraulic-cross-section/hydraulic1.jpg', 'Hydraulic — view 1') },
          { media: img('/media/work/industrial/hydraulic-cross-section/hydraulic2.jpg', 'Hydraulic — view 2') },
        ],
      },
    ],
    seo: {
      title: 'Hydraulic Cross-Section — Product Design & Engineering | 123.design',
      description:
        'Cutaway hydraulic component display model for technical training and trade show exhibition, revealing internal flow paths and valve mechanisms.',
    },
    relatedProjects: [],
  },

  // === ARCHIVE (OLD) ===
  {
    id: 'static-catheter-secure',
    slug: CATHETER_SECURE_SLUG,
    title: 'Catheter Secure',
    summary: 'Medical catheter securing system with color-coded clamps for hospital use.',
    heroMedia: img('/media/work/old/cat-catheter-secure/CAT-023.jpg', 'Catheter securing system — medical device', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Catheter Secure is a purpose-built medical device engineered for clinical environments where precision, hygiene, and reliability are non-negotiable. Medical catheter securing system with color-coded clamps for hospital use. The design prioritizes ergonomic handling for healthcare professionals, intuitive operation under time pressure, and compliance with medical device standards. Every surface, interface, and mechanical interaction was evaluated for its impact on patient safety and workflow efficiency.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Medical device design demands a balance between clinical functionality and human-centered ergonomics. Catheter Secure needed to perform reliably in sterile environments while remaining intuitive for staff under pressure. The challenge was to minimize cognitive load during use, ensure cleanability between patients, and maintain mechanical precision across thousands of cycles — all within a form factor that feels confident in a clinician\'s hand.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process began with clinical workflow observation — mapping every touchpoint between the device, the practitioner, and the patient. Materials were selected for chemical resistance and tactile clarity. Interfaces were simplified to reduce training time and eliminate ambiguity during critical moments. The form language communicates cleanliness and precision through smooth transitions, minimal seams, and a considered color palette that supports quick identification in a busy clinical setting.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Catheter Secure delivers clinical-grade performance in a form that integrates seamlessly into modern healthcare environments. The device reduces procedural steps, minimizes cross-contamination risk, and provides consistent results across users. Manufacturing tolerances ensure every unit meets the same performance standard, and the design scales efficiently from prototype to production volume.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/cat-catheter-secure/CAT-023.jpg', 'CAT 023') },
          { media: img('/media/work/old/cat-catheter-secure/CAT-029.jpg', 'CAT 029') },
          { media: img('/media/work/old/cat-catheter-secure/CAT-030.jpg', 'CAT 030') },
          { media: img('/media/work/old/cat-catheter-secure/CAT-035.jpg', 'CAT 035') },
        
        ],
      },
    ],
    seo: {
      title: 'Catheter Secure — Product Design & Engineering | 123.design',
      description:
        'Medical catheter securing system with color-coded clamps for hospital use.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-bud-light-wallet',
    slug: BUD_LIGHT_WALLET_SLUG,
    title: 'Bud Light Wallet',
    summary: 'Bud Light branded slim wallet promotional product.',
    heroMedia: img('/media/work/old/ccw-bud-light-wallet/CCW-P043.jpg', 'Bud Light branded slim wallet', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Bud Light Wallet demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Bud Light branded slim wallet promotional product. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Bud Light Wallet needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Bud Light Wallet was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Bud Light Wallet represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/ccw-bud-light-wallet/CCW-P043.jpg', 'CCW P043') },
        
        ],
      },
    ],
    seo: {
      title: 'Bud Light Wallet — Product Design & Engineering | 123.design',
      description:
        'Bud Light branded slim wallet promotional product.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-retractable-dog-leash',
    slug: RETRACTABLE_DOG_LEASH_SLUG,
    title: 'Retractable Dog Leash',
    summary: 'Retractable dog leash with silver housing by In The Lead.',
    heroMedia: img('/media/work/old/col-retractable-leash/COL-R001.jpg', 'Retractable dog leash', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Retractable Dog Leash brings considered industrial design to everyday consumer use. Retractable dog leash with silver housing by In The Lead. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Retractable Dog Leash needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Retractable Dog Leash uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Retractable Dog Leash achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/col-retractable-leash/COL-R001.JPG', 'COL R001') },
          { media: img('/media/work/old/col-retractable-leash/COL-R002.JPG', 'COL R002') },
          { media: img('/media/work/old/col-retractable-leash/COL-R007.jpg', 'COL R007') },
        
        ],
      },
    ],
    seo: {
      title: 'Retractable Dog Leash — Product Design & Engineering | 123.design',
      description:
        'Retractable dog leash with silver housing by In The Lead.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-ipad-carbon-case',
    slug: IPAD_CARBON_CASE_SLUG,
    title: 'iPad Carbon Case',
    summary: 'iPad carbon fiber case with rotating Apple logo mount.',
    heroMedia: img('/media/work/old/cov-ipad-case/COV-P046.jpg', 'iPad carbon fiber case', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'iPad Carbon Case bridges the gap between advanced technology and intuitive user experience. iPad carbon fiber case with rotating Apple logo mount. The design makes sophisticated functionality accessible through thoughtful interface design and clear physical affordances.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Technology products often prioritize specs over usability. iPad Carbon Case needed to make complex functionality feel simple — reducing the learning curve while preserving the power that advanced users expect. The challenge was designing interfaces that scale from novice to expert without compromise.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process mapped user journeys from unboxing through daily use to advanced operation. Each interaction was evaluated for clarity, speed, and error prevention. Physical controls complement digital interfaces where tactile feedback improves confidence. The form factor accommodates internal electronics while remaining comfortable and portable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'iPad Carbon Case makes advanced technology genuinely usable. Users achieve their goals faster with fewer errors, and the product adapts to their growing skill level. The design supports both casual and power users without requiring separate modes or accessories.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/cov-ipad-case/COV-P046.jpg', 'COV P046') },
          { media: img('/media/work/old/cov-ipad-case/COV-P047.jpg', 'COV P047') },
        
        ],
      },
    ],
    seo: {
      title: 'iPad Carbon Case — Product Design & Engineering | 123.design',
      description:
        'iPad carbon fiber case with rotating Apple logo mount.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-electric-shaver-concept',
    slug: ELECTRIC_SHAVER_CONCEPT_SLUG,
    title: 'Electric Shaver Concept',
    summary: 'Futuristic electric shaver concept with blue bristle head and cyan accents.',
    heroMedia: img('/media/work/old/dir-shaver/DIR-R013.jpg', 'Electric shaver concept', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Electric Shaver Concept brings considered industrial design to everyday consumer use. Futuristic electric shaver concept with blue bristle head and cyan accents. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Electric Shaver Concept needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Electric Shaver Concept uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Electric Shaver Concept achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/dir-shaver/DIR-2014-05-14-ROUND A.jpg', 'DIR 2014 05 14 ROUND A') },
          { media: img('/media/work/old/dir-shaver/DIR-R013.jpg', 'DIR R013') },
          { media: img('/media/work/old/dir-shaver/DIR-R019.jpg', 'DIR R019') },
          { media: img('/media/work/old/dir-shaver/DIR-R021.jpg', 'DIR R021') },
          { media: img('/media/work/old/dir-shaver/DIR-R029.jpg', 'DIR R029') },
        
        ],
      },
    ],
    seo: {
      title: 'Electric Shaver Concept — Product Design & Engineering | 123.design',
      description:
        'Futuristic electric shaver concept with blue bristle head and cyan accents.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-headphone-concept',
    slug: HEADPHONE_CONCEPT_SLUG,
    title: 'Headphone Concept',
    summary: 'Futuristic headphone concept sketch with LCD display.',
    heroMedia: img('/media/work/old/dom-headphone/DOM-2015-10-30-CONCEPT SKETCHES_Page_12.jpg', 'Headphone concept sketch', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2011,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Headphone Concept bridges the gap between advanced technology and intuitive user experience. Futuristic headphone concept sketch with LCD display. The design makes sophisticated functionality accessible through thoughtful interface design and clear physical affordances.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Technology products often prioritize specs over usability. Headphone Concept needed to make complex functionality feel simple — reducing the learning curve while preserving the power that advanced users expect. The challenge was designing interfaces that scale from novice to expert without compromise.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process mapped user journeys from unboxing through daily use to advanced operation. Each interaction was evaluated for clarity, speed, and error prevention. Physical controls complement digital interfaces where tactile feedback improves confidence. The form factor accommodates internal electronics while remaining comfortable and portable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Headphone Concept makes advanced technology genuinely usable. Users achieve their goals faster with fewer errors, and the product adapts to their growing skill level. The design supports both casual and power users without requiring separate modes or accessories.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/dom-headphone/DOM-2015-10-30-CONCEPT SKETCHES_Page_12.jpg', 'DOM 2015 10 30 CONCEPT SKETCHES Page 12') },
        
        ],
      },
    ],
    seo: {
      title: 'Headphone Concept — Product Design & Engineering | 123.design',
      description:
        'Futuristic headphone concept sketch with LCD display.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-echek-menu',
    slug: ECHEK_MENU_SLUG,
    title: 'eCheck Menu',
    summary: 'Digital restaurant menu device eCheck in leather folio for John Barleycorn restaurant.',
    heroMedia: img('/media/work/old/ech-echek/ECH-R018.JPG', 'eCheck digital menu device', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'eCheck Menu demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Digital restaurant menu device eCheck in leather folio for John Barleycorn restaurant. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. eCheck Menu needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. eCheck Menu was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'eCheck Menu represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/ech-echek/ECH-R018.JPG', 'ECH R018') },
          { media: img('/media/work/old/ech-echek/ECH-R019.JPG', 'ECH R019') },
        
        ],
      },
    ],
    seo: {
      title: 'eCheck Menu — Product Design & Engineering | 123.design',
      description:
        'Digital restaurant menu device eCheck in leather folio for John Barleycorn restaurant.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-epilator-concept',
    slug: EPILATOR_CONCEPT_SLUG,
    title: 'Epilator Concept',
    summary: 'Epilator hair removal device concept with teal accents.',
    heroMedia: img('/media/work/old/epi-epilator/EPI-001.jpg', 'Epilator concept', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['CON'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Epilator Concept brings considered industrial design to everyday consumer use. Epilator hair removal device concept with teal accents. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Epilator Concept needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Epilator Concept uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Epilator Concept achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/epi-epilator/EPI-001.jpg', 'EPI 001') },
          { media: img('/media/work/old/epi-epilator/EPI-002.jpg', 'EPI 002') },
        
        ],
      },
    ],
    seo: {
      title: 'Epilator Concept — Product Design & Engineering | 123.design',
      description:
        'Epilator hair removal device concept with teal accents.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-stop-sign-sensor',
    slug: STOP_SIGN_SENSOR_SLUG,
    title: 'Stop Sign Sensor',
    summary: 'Stop sign with security camera and sensor mounting system for traffic safety.',
    heroMedia: img('/media/work/old/fss-stop-sign/FSS-R021-INSTALL-3.jpg', 'Stop sign sensor system', 1600, 900),
    industries: ['Transportation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Stop Sign Sensor is designed for athletes and enthusiasts who demand performance without compromise. Stop sign with security camera and sensor mounting system for traffic safety. The product was developed with direct input from users who understand the demands of competitive and recreational sport — where equipment failure is not an option.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Sports equipment must perform under extreme conditions: impact, moisture, temperature variation, and repeated high-force use. Stop Sign Sensor needed to maintain structural integrity and functional precision while remaining lightweight and comfortable during extended use.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Performance sports design starts with biomechanics — understanding how the body moves and where equipment interfaces with anatomy. Stop Sign Sensor was shaped by motion analysis, grip pressure mapping, and fatigue studies. Materials were selected for their strength-to-weight ratio and environmental resilience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Stop Sign Sensor delivers measurable performance advantages through engineering-led design. The product reduces fatigue, improves control, and maintains consistency across conditions. Athletes report immediate comfort and confidence from first use.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/fss-stop-sign/FSS-R021-INSTALL-3.jpg', 'FSS R021 INSTALL 3') },
          { media: img('/media/work/old/fss-stop-sign/FSS-R023-INSTALL-9-ROTATION2.jpg', 'FSS R023 INSTALL 9 ROTATION2') },
          { media: img('/media/work/old/fss-stop-sign/FSS-R031.jpg', 'FSS R031') },
          { media: img('/media/work/old/fss-stop-sign/FSS-R032.jpg', 'FSS R032') },
          { media: img('/media/work/old/fss-stop-sign/FSS-R033.jpg', 'FSS R033') },
        
        ],
      },
    ],
    seo: {
      title: 'Stop Sign Sensor — Product Design & Engineering | 123.design',
      description:
        'Stop sign with security camera and sensor mounting system for traffic safety.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-gaming-setup',
    slug: GAMING_SETUP_SLUG,
    title: 'Gaming Setup',
    summary: 'Gaming console setup with Xbox 360, PS3, Sony Bravia, and Surround Paradise soundbar.',
    heroMedia: img('/media/work/old/gam-gaming/GAM-P017.jpg', 'Gaming setup', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Gaming Setup bridges the gap between advanced technology and intuitive user experience. Gaming console setup with Xbox 360, PS3, Sony Bravia, and Surround Paradise soundbar. The design makes sophisticated functionality accessible through thoughtful interface design and clear physical affordances.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Technology products often prioritize specs over usability. Gaming Setup needed to make complex functionality feel simple — reducing the learning curve while preserving the power that advanced users expect. The challenge was designing interfaces that scale from novice to expert without compromise.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process mapped user journeys from unboxing through daily use to advanced operation. Each interaction was evaluated for clarity, speed, and error prevention. Physical controls complement digital interfaces where tactile feedback improves confidence. The form factor accommodates internal electronics while remaining comfortable and portable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Gaming Setup makes advanced technology genuinely usable. Users achieve their goals faster with fewer errors, and the product adapts to their growing skill level. The design supports both casual and power users without requiring separate modes or accessories.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/gam-gaming/GAM-P017.jpg', 'GAM P017') },
          { media: img('/media/work/old/gam-gaming/GAM-P019.jpg', 'GAM P019') },
          { media: img('/media/work/old/gam-gaming/GAM-P020.jpg', 'GAM P020') },
          { media: img('/media/work/old/gam-gaming/GAM-P022.JPG', 'GAM P022') },
          { media: img('/media/work/old/gam-gaming/GAM-R002.png', 'GAM R002') },
        
        ],
      },
    ],
    seo: {
      title: 'Gaming Setup — Product Design & Engineering | 123.design',
      description:
        'Gaming console setup with Xbox 360, PS3, Sony Bravia, and Surround Paradise soundbar.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-golf-shaft',
    slug: GOLF_SHAFT_SLUG,
    title: 'Golf Shaft',
    summary: 'Golf club shaft with internal vibration dampening foam insert.',
    heroMedia: img('/media/work/old/glf-golf/GLF-27.jpg', 'Golf club shaft', 1600, 900),
    industries: ['Sports & Recreation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Golf Shaft is designed for athletes and enthusiasts who demand performance without compromise. Golf club shaft with internal vibration dampening foam insert. The product was developed with direct input from users who understand the demands of competitive and recreational sport — where equipment failure is not an option.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Sports equipment must perform under extreme conditions: impact, moisture, temperature variation, and repeated high-force use. Golf Shaft needed to maintain structural integrity and functional precision while remaining lightweight and comfortable during extended use.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Performance sports design starts with biomechanics — understanding how the body moves and where equipment interfaces with anatomy. Golf Shaft was shaped by motion analysis, grip pressure mapping, and fatigue studies. Materials were selected for their strength-to-weight ratio and environmental resilience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Golf Shaft delivers measurable performance advantages through engineering-led design. The product reduces fatigue, improves control, and maintains consistency across conditions. Athletes report immediate comfort and confidence from first use.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/glf-golf/GLF-27.jpg', 'GLF 27') },
          { media: img('/media/work/old/glf-golf/GLF-34.jpg', 'GLF 34') },
          { media: img('/media/work/old/glf-golf/GLF-36.jpg', 'GLF 36') },
          { media: img('/media/work/old/glf-golf/GLF-4.jpg', 'GLF 4') },
        
        ],
      },
    ],
    seo: {
      title: 'Golf Shaft — Product Design & Engineering | 123.design',
      description:
        'Golf club shaft with internal vibration dampening foam insert.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-smart-grooming',
    slug: SMART_GROOMING_SLUG,
    title: 'Smart Grooming',
    summary: 'Mint green handheld device with LCD showing grooming metrics.',
    heroMedia: img('/media/work/old/gro-grooming/GRO-R025.JPG', 'Smart grooming device', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Smart Grooming brings considered industrial design to everyday consumer use. Mint green handheld device with LCD showing grooming metrics. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Smart Grooming needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Smart Grooming uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Smart Grooming achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/gro-grooming/GRO-R025.JPG', 'GRO R025') },
          { media: img('/media/work/old/gro-grooming/GRO-R036-2.jpg', 'GRO R036 2') },
          { media: img('/media/work/old/gro-grooming/GRO-R038-2.jpg', 'GRO R038 2') },
          { media: img('/media/work/old/gro-grooming/GRO-R040-2.jpg', 'GRO R040 2') },
        
        ],
      },
    ],
    seo: {
      title: 'Smart Grooming — Product Design & Engineering | 123.design',
      description:
        'Mint green handheld device with LCD showing grooming metrics.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-golf-posture-pod',
    slug: GOLF_POSTURE_POD_SLUG,
    title: 'Golf PosturePOD',
    summary: 'Golf posture training system with posture analysis screen.',
    heroMedia: img('/media/work/old/gsl-posture-pod/GSL-008.jpg', 'Golf PosturePOD', 1600, 900),
    industries: ['Sports & Recreation'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Golf PosturePOD is designed for athletes and enthusiasts who demand performance without compromise. Golf posture training system with posture analysis screen. The product was developed with direct input from users who understand the demands of competitive and recreational sport — where equipment failure is not an option.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Sports equipment must perform under extreme conditions: impact, moisture, temperature variation, and repeated high-force use. Golf PosturePOD needed to maintain structural integrity and functional precision while remaining lightweight and comfortable during extended use.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Performance sports design starts with biomechanics — understanding how the body moves and where equipment interfaces with anatomy. Golf PosturePOD was shaped by motion analysis, grip pressure mapping, and fatigue studies. Materials were selected for their strength-to-weight ratio and environmental resilience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Golf PosturePOD delivers measurable performance advantages through engineering-led design. The product reduces fatigue, improves control, and maintains consistency across conditions. Athletes report immediate comfort and confidence from first use.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/gsl-posture-pod/GSL-008.jpg', 'GSL 008') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-010..JPG', 'GSL 010.') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-012.JPG', 'GSL 012') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-013-1.JPG', 'GSL 013 1') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-014-1.JPG', 'GSL 014 1') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-015.JPG', 'GSL 015') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-018.JPG', 'GSL 018') },
          { media: img('/media/work/old/gsl-posture-pod/GSL-020.JPG', 'GSL 020') },
        
        ],
      },
    ],
    seo: {
      title: 'Golf PosturePOD — Product Design & Engineering | 123.design',
      description:
        'Golf posture training system with posture analysis screen.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-toy-gun',
    slug: TOY_GUN_SLUG,
    title: 'Toy Gun',
    summary: 'Futuristic toy laser tag gun STIK with red wood-grain and cyan LED.',
    heroMedia: img('/media/work/old/gun-toy/GUN-R026-2.jpg', 'Toy gun', 1600, 900),
    industries: ['Toys, Games & Juvenile'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Toy Gun demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Futuristic toy laser tag gun STIK with red wood-grain and cyan LED. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Toy Gun needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Toy Gun was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Toy Gun represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/gun-toy/GUN-R026-2.jpg', 'GUN R026 2') },
          { media: img('/media/work/old/gun-toy/GUN-R038.JPG', 'GUN R038') },
        
        ],
      },
    ],
    seo: {
      title: 'Toy Gun — Product Design & Engineering | 123.design',
      description:
        'Futuristic toy laser tag gun STIK with red wood-grain and cyan LED.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-child-safety-wristband',
    slug: CHILD_SAFETY_WRISTBAND_SLUG,
    title: 'Child Safety Wristband',
    summary: 'Child safety wristband for amusement parks.',
    heroMedia: img('/media/work/old/hed-wristband/HED-P015a.jpg', 'Child safety wristband', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Child Safety Wristband brings considered industrial design to everyday consumer use. Child safety wristband for amusement parks. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Child Safety Wristband needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Child Safety Wristband uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Child Safety Wristband achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/hed-wristband/HED-P015a.jpg', 'HED P015a') },
          { media: img('/media/work/old/hed-wristband/HED-P016b.jpg', 'HED P016b') },
          { media: img('/media/work/old/hed-wristband/HED-P017b.jpg', 'HED P017b') },
          { media: img('/media/work/old/hed-wristband/HED-P018a.jpg', 'HED P018a') },
          { media: img('/media/work/old/hed-wristband/HED-P046.jpg', 'HED P046') },
          { media: img('/media/work/old/hed-wristband/HED-P049.jpg', 'HED P049') },
          { media: img('/media/work/old/hed-wristband/HED-P053.jpg', 'HED P053') },
          { media: img('/media/work/old/hed-wristband/HED-R004.jpg', 'HED R004') },
          { media: img('/media/work/old/hed-wristband/HED-R006.jpg', 'HED R006') },
        
        ],
      },
    ],
    seo: {
      title: 'Child Safety Wristband — Product Design & Engineering | 123.design',
      description:
        'Child safety wristband for amusement parks.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-medical-simulation-cart',
    slug: MEDICAL_SIMULATION_CART_SLUG,
    title: 'Medical Simulation Cart',
    summary: 'METI Learning Drug Rec/Trauma System medical simulation cart.',
    heroMedia: img('/media/work/old/hps-sim-cart/HPS-019.JPG', 'Medical simulation cart', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Medical Simulation Cart is a purpose-built medical device engineered for clinical environments where precision, hygiene, and reliability are non-negotiable. METI Learning Drug Rec/Trauma System medical simulation cart. The design prioritizes ergonomic handling for healthcare professionals, intuitive operation under time pressure, and compliance with medical device standards. Every surface, interface, and mechanical interaction was evaluated for its impact on patient safety and workflow efficiency.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Medical device design demands a balance between clinical functionality and human-centered ergonomics. Medical Simulation Cart needed to perform reliably in sterile environments while remaining intuitive for staff under pressure. The challenge was to minimize cognitive load during use, ensure cleanability between patients, and maintain mechanical precision across thousands of cycles — all within a form factor that feels confident in a clinician\'s hand.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process began with clinical workflow observation — mapping every touchpoint between the device, the practitioner, and the patient. Materials were selected for chemical resistance and tactile clarity. Interfaces were simplified to reduce training time and eliminate ambiguity during critical moments. The form language communicates cleanliness and precision through smooth transitions, minimal seams, and a considered color palette that supports quick identification in a busy clinical setting.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Medical Simulation Cart delivers clinical-grade performance in a form that integrates seamlessly into modern healthcare environments. The device reduces procedural steps, minimizes cross-contamination risk, and provides consistent results across users. Manufacturing tolerances ensure every unit meets the same performance standard, and the design scales efficiently from prototype to production volume.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/hps-sim-cart/HPS-019.JPG', 'HPS 019') },
          { media: img('/media/work/old/hps-sim-cart/HPS-020.JPG', 'HPS 020') },
          { media: img('/media/work/old/hps-sim-cart/HPS-021.jpg', 'HPS 021') },
          { media: img('/media/work/old/hps-sim-cart/HPS-028.jpg', 'HPS 028') },
          { media: img('/media/work/old/hps-sim-cart/HPS-031.jpg', 'HPS 031') },
          { media: img('/media/work/old/hps-sim-cart/HPS-032.jpg', 'HPS 032') },
          { media: img('/media/work/old/hps-sim-cart/HPS-033.JPG', 'HPS 033') },
          { media: img('/media/work/old/hps-sim-cart/HPS-034.jpg', 'HPS 034') },
          { media: img('/media/work/old/hps-sim-cart/HPS-P014.jpg', 'HPS P014') },
          { media: img('/media/work/old/hps-sim-cart/HPS-P015.jpg', 'HPS P015') },
          { media: img('/media/work/old/hps-sim-cart/HPS-P016.jpg', 'HPS P016') },
        
        ],
      },
    ],
    seo: {
      title: 'Medical Simulation Cart — Product Design & Engineering | 123.design',
      description:
        'METI Learning Drug Rec/Trauma System medical simulation cart.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-cable-management',
    slug: CABLE_MANAGEMENT_SLUG,
    title: 'Cable Management',
    summary: 'ReelClaw JWA-2000 cable management device with metallic reel system.',
    heroMedia: img('/media/work/old/jwa-cable/JWA-R094.jpeg', 'Cable management device', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Cable Management bridges the gap between advanced technology and intuitive user experience. ReelClaw JWA-2000 cable management device with metallic reel system. The design makes sophisticated functionality accessible through thoughtful interface design and clear physical affordances.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Technology products often prioritize specs over usability. Cable Management needed to make complex functionality feel simple — reducing the learning curve while preserving the power that advanced users expect. The challenge was designing interfaces that scale from novice to expert without compromise.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process mapped user journeys from unboxing through daily use to advanced operation. Each interaction was evaluated for clarity, speed, and error prevention. Physical controls complement digital interfaces where tactile feedback improves confidence. The form factor accommodates internal electronics while remaining comfortable and portable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Cable Management makes advanced technology genuinely usable. Users achieve their goals faster with fewer errors, and the product adapts to their growing skill level. The design supports both casual and power users without requiring separate modes or accessories.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/jwa-cable/JWA-R094.jpeg', 'JWA R094') },
          { media: img('/media/work/old/jwa-cable/JWA-R095.jpeg', 'JWA R095') },
          { media: img('/media/work/old/jwa-cable/JWA-R096.jpeg', 'JWA R096') },
          { media: img('/media/work/old/jwa-cable/JWA-R097.jpeg', 'JWA R097') },
          { media: img('/media/work/old/jwa-cable/JWA-R098.jpg', 'JWA R098') },
          { media: img('/media/work/old/jwa-cable/JWA-R100.jpeg', 'JWA R100') },
          { media: img('/media/work/old/jwa-cable/JWA-R101.jpeg', 'JWA R101') },
        
        ],
      },
    ],
    seo: {
      title: 'Cable Management — Product Design & Engineering | 123.design',
      description:
        'ReelClaw JWA-2000 cable management device with metallic reel system.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dog-walking-aid',
    slug: DOG_WALKING_AID_SLUG,
    title: 'Dog Walking Aid',
    summary: 'Dog walking aid pole device for controlled walks.',
    heroMedia: img('/media/work/old/las-dog-walk/LAS-R045.JPG', 'Dog walking aid', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Dog Walking Aid brings considered industrial design to everyday consumer use. Dog walking aid pole device for controlled walks. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Dog Walking Aid needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Dog Walking Aid uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Dog Walking Aid achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/las-dog-walk/LAS-R045.JPG', 'LAS R045') },
          { media: img('/media/work/old/las-dog-walk/LAS-R046.JPG', 'LAS R046') },
        
        ],
      },
    ],
    seo: {
      title: 'Dog Walking Aid — Product Design & Engineering | 123.design',
      description:
        'Dog walking aid pole device for controlled walks.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-telepresence-robot',
    slug: TELEPRESENCE_ROBOT_SLUG,
    title: 'Telepresence Robot',
    summary: 'Telepresence robot for conference rooms with wheeled base and tablet screen.',
    heroMedia: img('/media/work/old/mca-robot/MCA-R022-2.jpg', 'Telepresence robot', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Telepresence Robot demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Telepresence robot for conference rooms with wheeled base and tablet screen. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Telepresence Robot needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Telepresence Robot was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Telepresence Robot represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/mca-robot/MCA-R022-2.jpg', 'MCA R022 2') },
          { media: img('/media/work/old/mca-robot/MCA-R027.jpg', 'MCA R027') },
          { media: img('/media/work/old/mca-robot/MCA-R031.jpg', 'MCA R031') },
          { media: img('/media/work/old/mca-robot/MCA-R032-2.jpg', 'MCA R032 2') },
          { media: img('/media/work/old/mca-robot/MCA-R033.jpg', 'MCA R033') },
          { media: img('/media/work/old/mca-robot/MCA-R034.jpg', 'MCA R034') },
          { media: img('/media/work/old/mca-robot/MCA-R035.jpg', 'MCA R035') },
        
        ],
      },
    ],
    seo: {
      title: 'Telepresence Robot — Product Design & Engineering | 123.design',
      description:
        'Telepresence robot for conference rooms with wheeled base and tablet screen.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-tape-measure',
    slug: TAPE_MEASURE_SLUG,
    title: 'Tape Measure',
    summary: '25ft All in one TAPE multi-function tape measure with built-in level.',
    heroMedia: img('/media/work/old/mea-tape/MEA-R001-51-2014-07-03.jpg', 'Multi-function tape measure', 1600, 900),
    industries: ['Tools & Hardware'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Tape Measure demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. 25ft All in one TAPE multi-function tape measure with built-in level. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Tape Measure needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Tape Measure was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Tape Measure represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/mea-tape/MEA-R001-51-2014-07-03.jpg', 'MEA R001 51 2014 07 03') },
          { media: img('/media/work/old/mea-tape/MEA-R001-52-2014-07-03.jpg', 'MEA R001 52 2014 07 03') },
          { media: img('/media/work/old/mea-tape/MEA-R001-59-2014-07-03.jpg', 'MEA R001 59 2014 07 03') },
          { media: img('/media/work/old/mea-tape/MEA-R001-62-2014-07-03.jpg', 'MEA R001 62 2014 07 03') },
          { media: img('/media/work/old/mea-tape/MEA-R001-68-2014-07-14.jpg', 'MEA R001 68 2014 07 14') },
        
        ],
      },
    ],
    seo: {
      title: 'Tape Measure — Product Design & Engineering | 123.design',
      description:
        '25ft All in one TAPE multi-function tape measure with built-in level.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-ipad-chair',
    slug: IPAD_CHAIR_SLUG,
    title: 'iPad Chair',
    summary: 'Orange leather luxury chair with hidden iPad compartment and wood-grain rotating lid.',
    heroMedia: img('/media/work/old/she-chair/SHE-R016.jpg', 'iPad chair', 1600, 900),
    industries: ['Furniture'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'iPad Chair demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Orange leather luxury chair with hidden iPad compartment and wood-grain rotating lid. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. iPad Chair needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. iPad Chair was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'iPad Chair represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/she-chair/SHE-R016.jpg', 'SHE R016') },
          { media: img('/media/work/old/she-chair/SHE-R021 - Copy.jpg', 'SHE R021   Copy') },
          { media: img('/media/work/old/she-chair/SHE-R021.jpg', 'SHE R021') },
          { media: img('/media/work/old/she-chair/SHE-R022 - Copy - Copy.jpg', 'SHE R022   Copy   Copy') },
          { media: img('/media/work/old/she-chair/SHE-R022 - Copy.jpg', 'SHE R022   Copy') },
          { media: img('/media/work/old/she-chair/SHE-R022.jpg', 'SHE R022') },
          { media: img('/media/work/old/she-chair/SHE-R024 - Copy - Copy.jpg', 'SHE R024   Copy   Copy') },
          { media: img('/media/work/old/she-chair/SHE-R024 - Copy.jpg', 'SHE R024   Copy') },
          { media: img('/media/work/old/she-chair/SHE-R024.jpg', 'SHE R024') },
        
        ],
      },
    ],
    seo: {
      title: 'iPad Chair — Product Design & Engineering | 123.design',
      description:
        'Orange leather luxury chair with hidden iPad compartment and wood-grain rotating lid.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-rugged-device',
    slug: RUGGED_DEVICE_SLUG,
    title: 'Rugged Device',
    summary: 'Yellow and black rugged industrial device with large touchscreen display.',
    heroMedia: img('/media/work/old/smd-rugged/SMD-025.jpg', 'Rugged industrial device', 1600, 900),
    industries: ['Industrial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2015,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Rugged Device demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Yellow and black rugged industrial device with large touchscreen display. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Rugged Device needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Rugged Device was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Rugged Device represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/smd-rugged/SMD-025.jpg', 'SMD 025') },
          { media: img('/media/work/old/smd-rugged/SMD-030.jpg', 'SMD 030') },
          { media: img('/media/work/old/smd-rugged/SMD-031.jpg', 'SMD 031') },
          { media: img('/media/work/old/smd-rugged/SMD-034.jpg', 'SMD 034') },
          { media: img('/media/work/old/smd-rugged/SMD-043.jpg', 'SMD 043') },
          { media: img('/media/work/old/smd-rugged/SMD-046.jpg', 'SMD 046') },
          { media: img('/media/work/old/smd-rugged/SMD-049.jpg', 'SMD 049') },
          { media: img('/media/work/old/smd-rugged/SMD-051.jpg', 'SMD 051') },
          { media: img('/media/work/old/smd-rugged/SMD-059.jpg', 'SMD 059') },
          { media: img('/media/work/old/smd-rugged/SMD-060.jpg', 'SMD 060') },
          { media: img('/media/work/old/smd-rugged/SMD-062.jpg', 'SMD 062') },
        
        ],
      },
    ],
    seo: {
      title: 'Rugged Device — Product Design & Engineering | 123.design',
      description:
        'Yellow and black rugged industrial device with large touchscreen display.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-smart-stethoscope',
    slug: SMART_STETHOSCOPE_SLUG,
    title: 'Smart Stethoscope',
    summary: 'Apollo Renal Therapeutics smart stethoscope with digital attachment.',
    heroMedia: img('/media/work/old/sth-stethoscope/STH-R01.jpg', 'Smart stethoscope', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Smart Stethoscope is a purpose-built medical device engineered for clinical environments where precision, hygiene, and reliability are non-negotiable. Apollo Renal Therapeutics smart stethoscope with digital attachment. The design prioritizes ergonomic handling for healthcare professionals, intuitive operation under time pressure, and compliance with medical device standards. Every surface, interface, and mechanical interaction was evaluated for its impact on patient safety and workflow efficiency.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Medical device design demands a balance between clinical functionality and human-centered ergonomics. Smart Stethoscope needed to perform reliably in sterile environments while remaining intuitive for staff under pressure. The challenge was to minimize cognitive load during use, ensure cleanability between patients, and maintain mechanical precision across thousands of cycles — all within a form factor that feels confident in a clinician\'s hand.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process began with clinical workflow observation — mapping every touchpoint between the device, the practitioner, and the patient. Materials were selected for chemical resistance and tactile clarity. Interfaces were simplified to reduce training time and eliminate ambiguity during critical moments. The form language communicates cleanliness and precision through smooth transitions, minimal seams, and a considered color palette that supports quick identification in a busy clinical setting.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Smart Stethoscope delivers clinical-grade performance in a form that integrates seamlessly into modern healthcare environments. The device reduces procedural steps, minimizes cross-contamination risk, and provides consistent results across users. Manufacturing tolerances ensure every unit meets the same performance standard, and the design scales efficiently from prototype to production volume.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/sth-stethoscope/STH-R01.jpg', 'STH R01') },
        
        ],
      },
    ],
    seo: {
      title: 'Smart Stethoscope — Product Design & Engineering | 123.design',
      description:
        'Apollo Renal Therapeutics smart stethoscope with digital attachment.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-dash-camera',
    slug: DASH_CAMERA_SLUG,
    title: 'Dash Camera',
    summary: 'MG-NINE AV-360 HD DVR dash cameras in blue, silver, and black variants.',
    heroMedia: img('/media/work/old/tra-dashcam/TRA-R107.jpg', 'Dash camera', 1600, 900),
    industries: ['Automotive'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Dash Camera brings automotive-grade design thinking to its category. MG-NINE AV-360 HD DVR dash cameras in blue, silver, and black variants. The product applies the same attention to ergonomics, material quality, and manufacturing precision that defines premium automotive interiors and components.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Automotive design standards demand excellence in fit, finish, and durability. Dash Camera needed to meet these expectations while adapting to a different product category — maintaining the sensory quality of automotive design without the automotive cost structure.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design borrowed automotive principles: soft-touch surfaces where hands rest, precise mechanical feedback from controls, and a visual hierarchy that guides attention to important functions. Materials were selected for their tactile quality and resistance to UV, heat, and abrasion.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Dash Camera delivers an automotive-quality experience in its category. Users immediately notice the difference in material quality, mechanical precision, and overall refinement. The design sets a new standard for what users should expect.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/tra-dashcam/TRA-R107.jpg', 'TRA R107') },
          { media: img('/media/work/old/tra-dashcam/TRA-R109.jpg', 'TRA R109') },
          { media: img('/media/work/old/tra-dashcam/TRA-R114.JPG', 'TRA R114') },
          { media: img('/media/work/old/tra-dashcam/TRA-R115.JPG', 'TRA R115') },
          { media: img('/media/work/old/tra-dashcam/TRA-R121.jpg', 'TRA R121') },
          { media: img('/media/work/old/tra-dashcam/TRA-R124.jpg', 'TRA R124') },
        
        ],
      },
    ],
    seo: {
      title: 'Dash Camera — Product Design & Engineering | 123.design',
      description:
        'MG-NINE AV-360 HD DVR dash cameras in blue, silver, and black variants.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-mg-nine-dash-cam',
    slug: MG_NINE_DASH_CAM_SLUG,
    title: 'MG-NINE Dash Cam',
    summary: 'MG-NINE dash cameras in red, blue, and black colorways.',
    heroMedia: img('/media/work/old/trb-mg-nine-dash-cam/TRB-R086.jpg', 'MG-NINE dash cameras', 1600, 900),
    industries: ['Automotive'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'MG-NINE Dash Cam brings automotive-grade design thinking to its category. MG-NINE dash cameras in red, blue, and black colorways. The product applies the same attention to ergonomics, material quality, and manufacturing precision that defines premium automotive interiors and components.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Automotive design standards demand excellence in fit, finish, and durability. MG-NINE Dash Cam needed to meet these expectations while adapting to a different product category — maintaining the sensory quality of automotive design without the automotive cost structure.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design borrowed automotive principles: soft-touch surfaces where hands rest, precise mechanical feedback from controls, and a visual hierarchy that guides attention to important functions. Materials were selected for their tactile quality and resistance to UV, heat, and abrasion.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'MG-NINE Dash Cam delivers an automotive-quality experience in its category. Users immediately notice the difference in material quality, mechanical precision, and overall refinement. The design sets a new standard for what users should expect.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/trb-mg-nine-dash-cam/TRB-R086.jpg', 'TRB R086') },
          { media: img('/media/work/old/trb-mg-nine-dash-cam/TRB-R092.JPG', 'TRB R092') },
          { media: img('/media/work/old/trb-mg-nine-dash-cam/TRB-R094.JPG', 'TRB R094') },
          { media: img('/media/work/old/trb-mg-nine-dash-cam/TRB-R095.JPG', 'TRB R095') },
        
        ],
      },
    ],
    seo: {
      title: 'MG-NINE Dash Cam — Product Design & Engineering | 123.design',
      description:
        'MG-NINE dash cameras in red, blue, and black colorways.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-mg-nine-webcam',
    slug: MG_NINE_WEBCAM_SLUG,
    title: 'MG-NINE Webcam',
    summary: 'MG-NINE HD AX-630 webcam with gaming headphones.',
    heroMedia: img('/media/work/old/trc-mg-nine-webcam/TRC-R049.jpg', 'MG-NINE webcam', 1600, 900),
    industries: ['Consumer Electronics'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'MG-NINE Webcam bridges the gap between advanced technology and intuitive user experience. MG-NINE HD AX-630 webcam with gaming headphones. The design makes sophisticated functionality accessible through thoughtful interface design and clear physical affordances.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Technology products often prioritize specs over usability. MG-NINE Webcam needed to make complex functionality feel simple — reducing the learning curve while preserving the power that advanced users expect. The challenge was designing interfaces that scale from novice to expert without compromise.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process mapped user journeys from unboxing through daily use to advanced operation. Each interaction was evaluated for clarity, speed, and error prevention. Physical controls complement digital interfaces where tactile feedback improves confidence. The form factor accommodates internal electronics while remaining comfortable and portable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'MG-NINE Webcam makes advanced technology genuinely usable. Users achieve their goals faster with fewer errors, and the product adapts to their growing skill level. The design supports both casual and power users without requiring separate modes or accessories.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/trc-mg-nine-webcam/TRC-R049.jpg', 'TRC R049') },
          { media: img('/media/work/old/trc-mg-nine-webcam/TRC-R052.jpg', 'TRC R052') },
          { media: img('/media/work/old/trc-mg-nine-webcam/TRC-R053.jpg', 'TRC R053') },
        
        ],
      },
    ],
    seo: {
      title: 'MG-NINE Webcam — Product Design & Engineering | 123.design',
      description:
        'MG-NINE HD AX-630 webcam with gaming headphones.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-restaurant-service',
    slug: RESTAURANT_SERVICE_SLUG,
    title: 'Restaurant Service',
    summary: 'Restaurant service tray design for hospitality industry.',
    heroMedia: img('/media/work/old/trd-restaurant-service/TRD-R066-2.jpg', 'Restaurant service tray', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Restaurant Service demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Restaurant service tray design for hospitality industry. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Restaurant Service needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Restaurant Service was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Restaurant Service represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/trd-restaurant-service/TRD-R066-2.jpg', 'TRD R066 2') },
          { media: img('/media/work/old/trd-restaurant-service/TRD-R067-2 - Copy.jpg', 'TRD R067 2   Copy') },
          { media: img('/media/work/old/trd-restaurant-service/TRD-R067-2.jpg', 'TRD R067 2') },
          { media: img('/media/work/old/trd-restaurant-service/TRD-R068-2 - Copy.jpg', 'TRD R068 2   Copy') },
          { media: img('/media/work/old/trd-restaurant-service/TRD-R068-2.jpg', 'TRD R068 2') },
        
        ],
      },
    ],
    seo: {
      title: 'Restaurant Service — Product Design & Engineering | 123.design',
      description:
        'Restaurant service tray design for hospitality industry.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-fitness-vending',
    slug: FITNESS_VENDING_SLUG,
    title: 'Fitness Vending',
    summary: 'Fitness center vending machine with touchscreen interface.',
    heroMedia: img('/media/work/old/try-fitness-vending/TRY-R026.jpg', 'Fitness vending machine', 1600, 900),
    industries: ['Fitness'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Fitness Vending is designed for athletes and enthusiasts who demand performance without compromise. Fitness center vending machine with touchscreen interface. The product was developed with direct input from users who understand the demands of competitive and recreational sport — where equipment failure is not an option.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Sports equipment must perform under extreme conditions: impact, moisture, temperature variation, and repeated high-force use. Fitness Vending needed to maintain structural integrity and functional precision while remaining lightweight and comfortable during extended use.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Performance sports design starts with biomechanics — understanding how the body moves and where equipment interfaces with anatomy. Fitness Vending was shaped by motion analysis, grip pressure mapping, and fatigue studies. Materials were selected for their strength-to-weight ratio and environmental resilience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Fitness Vending delivers measurable performance advantages through engineering-led design. The product reduces fatigue, improves control, and maintains consistency across conditions. Athletes report immediate comfort and confidence from first use.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/try-fitness-vending/TRY-R026.jpg', 'TRY R026') },
          { media: img('/media/work/old/try-fitness-vending/TRY-R032.jpg', 'TRY R032') },
          { media: img('/media/work/old/try-fitness-vending/TRY-R033.JPG', 'TRY R033') },
          { media: img('/media/work/old/try-fitness-vending/TRY-R038.jpg', 'TRY R038') },
          { media: img('/media/work/old/try-fitness-vending/TRY-R042-2.jpg', 'TRY R042 2') },
        
        ],
      },
    ],
    seo: {
      title: 'Fitness Vending — Product Design & Engineering | 123.design',
      description:
        'Fitness center vending machine with touchscreen interface.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-vending-machine',
    slug: VENDING_MACHINE_SLUG,
    title: 'Vending Machine',
    summary: 'Vending machine renderings for gym and fitness environments.',
    heroMedia: img('/media/work/old/ven-vending-machine/VEN-rendering.jpg', 'Vending machine renderings', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Vending Machine demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Vending machine renderings for gym and fitness environments. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Vending Machine needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Vending Machine was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Vending Machine represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/ven-vending-machine/VEN-r10-logo.jpg', 'VEN r10 logo') },
          { media: img('/media/work/old/ven-vending-machine/VEN-rendering.jpg', 'VEN rendering') },
          { media: img('/media/work/old/ven-vending-machine/VEN-rendering2.jpg', 'VEN rendering2') },
          { media: img('/media/work/old/ven-vending-machine/VEN-rendering9.jpg', 'VEN rendering9') },
        
        ],
      },
    ],
    seo: {
      title: 'Vending Machine — Product Design & Engineering | 123.design',
      description:
        'Vending machine renderings for gym and fitness environments.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-travel-pillow',
    slug: TRAVEL_PILLOW_SLUG,
    title: 'Travel Pillow',
    summary: 'Orange travel pillow with zipper and structural frame for sports and fitness.',
    heroMedia: img('/media/work/old/ail-travel-pillow/AIL-R020.jpg', 'Travel pillow', 1600, 900),
    industries: ['Sports & Fitness'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Travel Pillow is designed for athletes and enthusiasts who demand performance without compromise. Orange travel pillow with zipper and structural frame for sports and fitness. The product was developed with direct input from users who understand the demands of competitive and recreational sport — where equipment failure is not an option.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Sports equipment must perform under extreme conditions: impact, moisture, temperature variation, and repeated high-force use. Travel Pillow needed to maintain structural integrity and functional precision while remaining lightweight and comfortable during extended use.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Performance sports design starts with biomechanics — understanding how the body moves and where equipment interfaces with anatomy. Travel Pillow was shaped by motion analysis, grip pressure mapping, and fatigue studies. Materials were selected for their strength-to-weight ratio and environmental resilience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Travel Pillow delivers measurable performance advantages through engineering-led design. The product reduces fatigue, improves control, and maintains consistency across conditions. Athletes report immediate comfort and confidence from first use.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/ail-travel-pillow/AIL-R020 - Copy - Copy.jpg', 'AIL R020   Copy   Copy') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R020 - Copy.jpg', 'AIL R020   Copy') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R020.jpg', 'AIL R020') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R022.JPG', 'AIL R022') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R028.JPG', 'AIL R028') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R029 - Copy - Copy.JPG', 'AIL R029   Copy   Copy') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R029 - Copy.JPG', 'AIL R029   Copy') },
          { media: img('/media/work/old/ail-travel-pillow/AIL-R029.JPG', 'AIL R029') },
        
        ],
      },
    ],
    seo: {
      title: 'Travel Pillow — Product Design & Engineering | 123.design',
      description:
        'Orange travel pillow with zipper and structural frame for sports and fitness.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-sunglasses',
    slug: SUNGLASSES_SLUG,
    title: 'Sunglasses',
    summary: 'Ray-Ban sunglasses with American flag emblem on temple.',
    heroMedia: img('/media/work/old/aim-sunglasses/AIM-003.JPG', 'Sunglasses with flag emblem', 1600, 900),
    industries: ['Consumer Products'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Sunglasses brings considered industrial design to everyday consumer use. Ray-Ban sunglasses with American flag emblem on temple. The product combines functional innovation with a refined aesthetic that appeals to discerning consumers. Every detail — from material selection to surface finish — was designed to elevate the user experience beyond commodity alternatives.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Consumer products compete on first impression and daily usability. Sunglasses needed to stand out on shelf and in hand — offering a tangible quality difference that justifies its position in the market. The design challenge was to balance manufacturing cost with perceived value, ensuring the product feels premium without pricing out its target audience.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Material and finish choices drive perceived quality as much as form. Sunglasses uses a combination of textures, colors, and proportions that signal quality at every touchpoint. The grip, the weight distribution, the sound of a mechanism engaging — each was tuned to create a cohesive sensory experience. Packaging and unboxing were considered as extensions of the product experience.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Sunglasses achieves a distinctive presence in a crowded consumer market. The design differentiates through considered details that users notice immediately — the satisfying mechanical action, the balanced weight, the premium finish. Production tooling was optimized for consistent quality at scale, and the design translates effectively across colorways and material variants.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/aim-sunglasses/AIM-003.JPG', 'AIM 003') },
          { media: img('/media/work/old/aim-sunglasses/AIM-R034.JPG', 'AIM R034') },
          { media: img('/media/work/old/aim-sunglasses/AIM-R037.jpg', 'AIM R037') },
        
        ],
      },
    ],
    seo: {
      title: 'Sunglasses — Product Design & Engineering | 123.design',
      description:
        'Ray-Ban sunglasses with American flag emblem on temple.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-edible-gold',
    slug: EDIBLE_GOLD_SLUG,
    title: 'Edible Gold',
    summary: 'Delicorum by Cornucopia edible gold and silver leaf culinary kit in luxury display box.',
    heroMedia: img('/media/work/old/aup-edible-gold/AUP-R005-002.jpg', 'Edible gold leaf kit', 1600, 900),
    industries: ['Food & Beverage'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Edible Gold demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Delicorum by Cornucopia edible gold and silver leaf culinary kit in luxury display box. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Edible Gold needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Edible Gold was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Edible Gold represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/aup-edible-gold/AUP-R005-002.jpg', 'AUP R005 002') },
          { media: img('/media/work/old/aup-edible-gold/AUP-R005-005.jpg', 'AUP R005 005') },
        
        ],
      },
    ],
    seo: {
      title: 'Edible Gold — Product Design & Engineering | 123.design',
      description:
        'Delicorum by Cornucopia edible gold and silver leaf culinary kit in luxury display box.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-outdoor-lamp',
    slug: OUTDOOR_LAMP_SLUG,
    title: 'Outdoor Lamp',
    summary: 'Decorative outdoor lamp with black metal frame, finial, and base.',
    heroMedia: img('/media/work/old/bea-outdoor-lamp/BEA-8-002.jpg', 'Outdoor lamp', 1600, 900),
    industries: ['Architectural'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Outdoor Lamp represents a design solution at the intersection of architecture and product design. Decorative outdoor lamp with black metal frame, finial, and base. The project required understanding spatial relationships, material behavior at scale, and how people move through and interact with built environments.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Architectural-scale design introduces constraints that product design rarely encounters: structural loads, weather exposure, building code compliance, and long-term maintenance. Outdoor Lamp needed to satisfy all of these while maintaining a refined aesthetic that complements its environment.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design approach treated the product as both object and environment — considering how it looks from every angle, how it ages over time, and how it integrates with surrounding architecture. Material selections prioritize longevity and low maintenance while delivering visual quality.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Outdoor Lamp performs reliably in its architectural context while contributing to the visual character of the space. Installation is straightforward, maintenance requirements are minimal, and the design ages gracefully under real-world conditions.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/bea-outdoor-lamp/BEA-8-002.jpg', 'BEA 8 002') },
          { media: img('/media/work/old/bea-outdoor-lamp/BEA-8-003.jpg', 'BEA 8 003') },
        
        ],
      },
    ],
    seo: {
      title: 'Outdoor Lamp — Product Design & Engineering | 123.design',
      description:
        'Decorative outdoor lamp with black metal frame, finial, and base.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-balance-belt',
    slug: BALANCE_BELT_SLUG,
    title: 'Balance Belt',
    summary: 'Balance Sense wearable belt device with USB hub, data unit, and blue LED indicator.',
    heroMedia: img('/media/work/old/bir-balance-belt/BIR-BELT-R006.jpg', 'Balance belt device', 1600, 900),
    industries: ['Medical'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Balance Belt is a purpose-built medical device engineered for clinical environments where precision, hygiene, and reliability are non-negotiable. Balance Sense wearable belt device with USB hub, data unit, and blue LED indicator. The design prioritizes ergonomic handling for healthcare professionals, intuitive operation under time pressure, and compliance with medical device standards. Every surface, interface, and mechanical interaction was evaluated for its impact on patient safety and workflow efficiency.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Medical device design demands a balance between clinical functionality and human-centered ergonomics. Balance Belt needed to perform reliably in sterile environments while remaining intuitive for staff under pressure. The challenge was to minimize cognitive load during use, ensure cleanability between patients, and maintain mechanical precision across thousands of cycles — all within a form factor that feels confident in a clinician\'s hand.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design process began with clinical workflow observation — mapping every touchpoint between the device, the practitioner, and the patient. Materials were selected for chemical resistance and tactile clarity. Interfaces were simplified to reduce training time and eliminate ambiguity during critical moments. The form language communicates cleanliness and precision through smooth transitions, minimal seams, and a considered color palette that supports quick identification in a busy clinical setting.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Balance Belt delivers clinical-grade performance in a form that integrates seamlessly into modern healthcare environments. The device reduces procedural steps, minimizes cross-contamination risk, and provides consistent results across users. Manufacturing tolerances ensure every unit meets the same performance standard, and the design scales efficiently from prototype to production volume.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/bir-balance-belt/BIR-BELT-R006.jpg', 'BIR BELT R006') },
          { media: img('/media/work/old/bir-balance-belt/BIR-BELT-R037.JPG', 'BIR BELT R037') },
          { media: img('/media/work/old/bir-balance-belt/BIR-BELT-R038 - Copy.JPG', 'BIR BELT R038   Copy') },
          { media: img('/media/work/old/bir-balance-belt/BIR-BELT-R038.JPG', 'BIR BELT R038') },
          { media: img('/media/work/old/bir-balance-belt/BIR-ORTHO - Copy.jpg', 'BIR ORTHO   Copy') },
          { media: img('/media/work/old/bir-balance-belt/BIR-ORTHO.jpg', 'BIR ORTHO') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R009 - Copy.jpg', 'BIR R009   Copy') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R009.jpg', 'BIR R009') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R087-2.jpg', 'BIR R087 2') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R096 - Copy.JPG', 'BIR R096   Copy') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R096.JPG', 'BIR R096') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R108 - Copy.JPG', 'BIR R108   Copy') },
          { media: img('/media/work/old/bir-balance-belt/BIR-R108.JPG', 'BIR R108') },
        
        ],
      },
    ],
    seo: {
      title: 'Balance Belt — Product Design & Engineering | 123.design',
      description:
        'Balance Sense wearable belt device with USB hub, data unit, and blue LED indicator.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-hospitality-kiosk',
    slug: HOSPITALITY_KIOSK_SLUG,
    title: 'Hospitality Kiosk',
    summary: 'Rooftop pool hospitality kiosk with wooden curved panel and control interface.',
    heroMedia: img('/media/work/old/blo-hospitality-kiosk/BLO-R035.jpg', 'Hospitality kiosk', 1600, 900),
    industries: ['Commercial'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Hospitality Kiosk demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Rooftop pool hospitality kiosk with wooden curved panel and control interface. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Hospitality Kiosk needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Hospitality Kiosk was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Hospitality Kiosk represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-ORTHO.jpg', 'BLO ORTHO') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R027.jpg', 'BLO R027') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R029.jpg', 'BLO R029') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R032.jpg', 'BLO R032') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R035.jpg', 'BLO R035') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R037.jpg', 'BLO R037') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R039-2.jpg', 'BLO R039 2') },
          { media: img('/media/work/old/blo-hospitality-kiosk/BLO-R041-2.jpg', 'BLO R041 2') },
        
        ],
      },
    ],
    seo: {
      title: 'Hospitality Kiosk — Product Design & Engineering | 123.design',
      description:
        'Rooftop pool hospitality kiosk with wooden curved panel and control interface.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-protein-bottle',
    slug: PROTEIN_BOTTLE_SLUG,
    title: 'Protein Bottle',
    summary: 'Perform protein shake bottle with blue body, teal accent, and black cap.',
    heroMedia: img('/media/work/old/bmy-protein-bottle/BMY-R001-5.jpg', 'Protein bottle', 1600, 900),
    industries: ['Food & Beverage'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2014,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Protein Bottle demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Perform protein shake bottle with blue body, teal accent, and black cap. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Protein Bottle needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Protein Bottle was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Protein Bottle represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/bmy-protein-bottle/BMY-R001-5.jpg', 'BMY R001 5') },
          { media: img('/media/work/old/bmy-protein-bottle/BMY-R001-6.jpg', 'BMY R001 6') },
          { media: img('/media/work/old/bmy-protein-bottle/BMY-R001-7.jpg', 'BMY R001 7') },
          { media: img('/media/work/old/bmy-protein-bottle/BMY-R001-8.jpg', 'BMY R001 8') },
        
        ],
      },
    ],
    seo: {
      title: 'Protein Bottle — Product Design & Engineering | 123.design',
      description:
        'Perform protein shake bottle with blue body, teal accent, and black cap.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-baby-food-pouch',
    slug: BABY_FOOD_POUCH_SLUG,
    title: 'Baby Food Pouch',
    summary: 'Nebie baby food pouch with green Easy Pop Feed cap and nutritional labeling.',
    heroMedia: img('/media/work/old/bot-baby-food-pouch/BOT-005.jpg', 'Baby food pouch', 1600, 900),
    industries: ['Food & Beverage'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2013,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'Baby Food Pouch demonstrates how industrial design thinking transforms functional requirements into objects people want to interact with. Nebie baby food pouch with green Easy Pop Feed cap and nutritional labeling. The project spans concept development through production-ready engineering, with every decision informed by user context, manufacturing constraints, and brand positioning.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'The brief required translating abstract functional requirements into a physical product that performs reliably and communicates quality. Baby Food Pouch needed to balance competing priorities: form vs. function, cost vs. perceived value, innovation vs. manufacturability. The design process navigated these tensions through iterative prototyping and user feedback.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'Great industrial design emerges from understanding the full context of use — not just the product in isolation. Baby Food Pouch was shaped by studying how people interact with similar products, where frustrations occur, and what moments of delight are possible. The form language, material palette, and mechanical details all serve the user experience while remaining production-viable.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'Baby Food Pouch represents a complete design-to-production journey. The final product meets all functional requirements while exceeding expectations for aesthetic quality and user experience. Tooling documentation, assembly instructions, and quality control specifications ensure consistent manufacturing output.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/bot-baby-food-pouch/BOT-005.jpg', 'BOT 005') },
        
        ],
      },
    ],
    seo: {
      title: 'Baby Food Pouch — Product Design & Engineering | 123.design',
      description:
        'Nebie baby food pouch with green Easy Pop Feed cap and nutritional labeling.',
    },
    relatedProjects: [],
  },
  {
    id: 'static-ipad-car-mount',
    slug: IPAD_CAR_MOUNT_SLUG,
    title: 'iPad Car Mount',
    summary: 'iPad mounted on car headrest with white and silver frame for rear-seat entertainment.',
    heroMedia: img('/media/work/old/ipm-ipad-car-mount/IPM-1_LR.jpg', 'iPad car mount', 1600, 900),
    industries: ['Automotive'],
    capabilities: ['Industrial Design'],
    lifecycleStages: ['PRODUCTION'],
    year: 2012,
    modules: [
      {
        kind: 'narrative',
        sectionType: 'overview',
        heading: 'Overview',
        body: 'iPad Car Mount brings automotive-grade design thinking to its category. iPad mounted on car headrest with white and silver frame for rear-seat entertainment. The product applies the same attention to ergonomics, material quality, and manufacturing precision that defines premium automotive interiors and components.',
      },
      {
        kind: 'narrative',
        sectionType: 'challenge',
        heading: 'The Challenge',
        body: 'Automotive design standards demand excellence in fit, finish, and durability. iPad Car Mount needed to meet these expectations while adapting to a different product category — maintaining the sensory quality of automotive design without the automotive cost structure.',
      },
      {
        kind: 'narrative',
        sectionType: 'insight',
        heading: 'Design Approach',
        body: 'The design borrowed automotive principles: soft-touch surfaces where hands rest, precise mechanical feedback from controls, and a visual hierarchy that guides attention to important functions. Materials were selected for their tactile quality and resistance to UV, heat, and abrasion.',
      },
      {
        kind: 'narrative',
        sectionType: 'result',
        heading: 'Outcome',
        body: 'iPad Car Mount delivers an automotive-quality experience in its category. Users immediately notice the difference in material quality, mechanical precision, and overall refinement. The design sets a new standard for what users should expect.',
      },
      {
        kind: 'gallery',
        items: [
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-001_BTD.jpg', 'IPM 001 BTD') },
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-009_LR.JPG', 'IPM 009 LR') },
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-010_LR.JPG', 'IPM 010 LR') },
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-013.JPG', 'IPM 013') },
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-1_LR.jpg', 'IPM 1 LR') },
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-2_LR.jpg', 'IPM 2 LR') },
          { media: img('/media/work/old/ipm-ipad-car-mount/IPM-3_LR.JPG', 'IPM 3 LR') },
        
        ],
      },
    ],
    seo: {
      title: 'iPad Car Mount — Product Design & Engineering | 123.design',
      description:
        'iPad mounted on car headrest with white and silver frame for rear-seat entertainment.',
    },
    relatedProjects: [],
  },

];

export function getStaticProjectPage(slug: string): ProjectPageModel | null {
  return STATIC_PROJECT_PAGES.find((p) => p.slug === slug) ?? null;
}

export function getStaticRelatedProjects(currentSlug: string): ProjectPageModel[] {
  const current = STATIC_PROJECT_PAGES.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const currentIndustries = new Set(current.industries.map((i) => i.toLowerCase()));
  const currentCapabilities = new Set(current.capabilities.map((c) => c.toLowerCase()));

  const scored = STATIC_PROJECT_PAGES.filter((p) => p.slug !== currentSlug).map((p) => {
    let score = 0;
    for (const ind of p.industries) {
      if (currentIndustries.has(ind.toLowerCase())) score += 2;
    }
    for (const cap of p.capabilities) {
      if (currentCapabilities.has(cap.toLowerCase())) score += 1;
    }
    return { project: p, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 4).map((s) => s.project);
}
