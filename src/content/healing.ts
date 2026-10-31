export const healingPageIntro = {
  heading: 'Healing modalities of CTNA',
  organization: 'Centro Tinig ng Arkanghel Inc.',
  ministryLine:
    'Spiritual Healing, Traditional Wellness, Prayer, and Evangelization Ministry',
  servicesSection: 'A. Healing Services',
  faithNote:
    'Holistic and spiritual care offered in faith — all healing is recognized as a gift from God alone.',
} as const;

export type HealingModality = {
  n: number;
  title: string;
  term?: string;
  description: string;
  credit?: string;
};

export const healingModalities: readonly HealingModality[] = [
  {
    n: 1,
    title: 'Cleansing Aura',
    term: 'Magnetismo',
    description:
      'A spiritual practice intended to promote positive energy, inner peace, and spiritual balance.',
  },
  {
    n: 2,
    title: 'Banner Energy Transfusion',
    description:
      'A spiritual energy practice intended to promote vitality, relaxation, and overall well-being.',
  },
  {
    n: 3,
    title: 'Candle X-Ray or Tawas',
    description:
      'A traditional spiritual practice used to interpret candle or tawas patterns for spiritual reflection and guidance.',
  },
  {
    n: 4,
    title: 'Spiritual Cleansing for Exorcism',
    term: 'Suob ng Insenso at Kamangyan',
    description:
      'A religious practice using incense, kamangyan, and prayers for spiritual deliverance and protection from evil influences.',
    credit: 'Ancelin Advincula Arcangel',
  },
  {
    n: 5,
    title: 'Cupping or Ventosa',
    description:
      'A traditional therapy using suction cups to help relieve muscle tension and promote relaxation.',
  },
  {
    n: 6,
    title: 'Spiritual Injection',
    term: 'Energy Transfer',
    description: 'The transfer of spiritual energy from one person to another.',
  },
  {
    n: 7,
    title: 'Inner Body Cleansing',
    term: 'Spiritual Energy Phenomenon',
    description:
      'A spiritual practice involving an unseen energy phenomenon intended to address perceived internal spiritual wounds or disturbances.',
  },
  {
    n: 8,
    title: 'Abdominal Alignment',
    term: 'Ayos Sikmura',
    description:
      'A traditional practice intended to address perceived abdominal misalignment and promote comfort.',
  },
  {
    n: 9,
    title: 'Uterine Alignment',
    term: 'Ayos Matris',
    description:
      "A traditional practice intended to address perceived uterine misalignment and promote women's well-being.",
    credit: 'Ancelin Advincula Arcangel',
  },
  {
    n: 10,
    title: 'Bladder Alignment',
    term: 'Taas Pantog',
    description:
      'A traditional practice intended to address perceived bladder misalignment and promote comfort.',
  },
  {
    n: 11,
    title: 'Therapeutic Massage',
    description:
      'A hands-on therapy intended to relieve muscle tension, reduce stress, and promote relaxation.',
  },
  {
    n: 12,
    title: 'Bantil or Kolebra',
    term: 'Traditional Blood Cleansing Practice',
    description:
      'A traditional healing practice believed to remove impurities or unwanted blood and used by some practitioners for people experiencing allergies.',
    credit: 'Ancelin Advincula Arcangel',
  },
  {
    n: 14,
    title: 'Herbal Steam or Suob',
    term: 'Sour Leaves',
    description:
      'A traditional herbal steaming practice believed to relieve body chills, provide warmth, and ease body discomfort and muscle aches.',
  },
  {
    n: 15,
    title: 'Natural Herbal Inhalation',
    description:
      'A traditional herbal aromatherapy practice intended to provide a soothing sensation and promote breathing comfort for people experiencing nasal or sinus congestion.',
  },
  {
    n: 16,
    title: 'Distant Healing',
    term: 'Remote Spiritual Healing',
    description:
      'A spiritual healing practice performed through prayer and intention for a person in another location.',
  },
];

export const otherServicesBrief = [
  'House blessing',
  'Baptism of baby',
  'Matrimony',
  'Crowning of the Holy Spirit',
  'Blessing of people and other things',
  'Blessing of cars',
  'Mobile healing',
] as const;

export const spiritualServices = [
  {
    title: 'House Blessing',
    description:
      'A prayer asking God for protection, peace, and blessings upon the home.',
  },
  {
    title: 'Baby Baptism',
    description: 'A spiritual ceremony welcoming and blessing a baby.',
  },
  {
    title: 'Holy Matrimony',
    description: "A spiritual ceremony celebrating the union of two people under God's blessing.",
  },
  {
    title: 'Crowning of the Holy Spirit',
    description:
      'A symbolic spiritual ceremony recognizing faith, devotion, and the guidance of the Holy Spirit.',
  },
  {
    title: 'Blessing of People and Personal Belongings',
    description: "Prayers asking for God's guidance, protection, and blessings.",
  },
  {
    title: 'Car Blessing',
    description: 'A prayer asking for safety and protection for drivers and passengers.',
  },
  {
    title: 'Mobile Healing Ministry',
    description:
      'Bringing spiritual prayers, blessings, and traditional wellness services to people in their homes and communities.',
  },
] as const;
