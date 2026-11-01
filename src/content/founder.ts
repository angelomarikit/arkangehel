import { SITE_NAME } from '../lib/brand';

export const founder = {
  name: 'Ancelin Advincula Arcangel',
  role: 'Founder & Spiritual Ministry Leader',
  organization: SITE_NAME,
  photoSrc: '/people/ancelin-advincula-arcangel.png',
  photoAlt:
    'Portrait of Ancelin Advincula Arcangel, founder and spiritual ministry leader of Centro Tinig ng Arkanghel Inc.',
  paragraphs: [
    'Ancelin began her spiritual ministry journey at the age of 10 in 1996. For 30 years, she has continuously developed and practiced her spiritual gifts, dedicating her experiences and abilities to helping others and serving God.',
    `As the founder of ${SITE_NAME}, she leads the ministry in spiritual healing, traditional wellness, prayer, charity, and evangelization, recognizing God as the true source of healing.`,
    'She is also a businesswoman and a graduate of Practical Nursing. Her greatest purpose is to use her knowledge, experiences, and spiritual gifts as instruments of God\'s love and service to humanity.',
  ],
  quote: 'All gifts come from God, and all glory belongs to Him.',
} as const;
