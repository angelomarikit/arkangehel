import { SITE_NAME } from '../lib/brand';

export const founder = {
  name: 'Ancelin Advincula Arcangel',
  role: 'Founder & owner',
  organization: SITE_NAME,
  photoSrc: '/people/ancelin-advincula-arcangel.jpg',
  photoAlt: 'Portrait of Ancelin Advincula Arcangel, founder and owner of Centro Tinig ng Arkanghel Inc.',
  paragraphs: [
    `${SITE_NAME} was founded and is led by Ancelin Advincula Arcangel, who serves as owner and guiding minister of the community.`,
    'Under her leadership, CTNA offers spiritual healing, traditional wellness, prayer, and evangelization — always recognizing God as the true source of healing.',
    'Several CTNA healing practices, including spiritual cleansing for deliverance, uterine alignment, and traditional blood cleansing (Bantil or Kolebra), are taught and shared through her ministry.',
  ],
} as const;
