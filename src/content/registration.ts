import { contact } from './contact';

export const registrationDocument = {
  href: '/CTNA-LICENSE.pdf',
  fileLabel: 'CTNA license & registration (PDF)',
} as const;

export const registrationSection = {
  eyebrow: 'Official registration',
  title: 'SEC-registered organization',
  summary: `${contact.legalName} is duly registered with the Securities and Exchange Commission (SEC) of the Philippines. Our CTNA license and registration documents are available for review.`,
  bullets: [
    'Securities and Exchange Commission (SEC) registration',
    'Centro Tinig ng Arkanghel Inc — registered legal name',
    'CTNA license on file',
  ],
} as const;
