import type { Collection } from '../types/gallery';
import { collections } from './collections';

const missionKeys = [
  'mission',
  'banner',
  'patos',
  'inhoc',
  'holyweek',
  'gampanin',
  'good-friday',
  '7-last',
  'thanks-giving',
  'power-of-christ',
  'christmas',
  'templong',
];

const ministryKeys = ['herbal', 'kabataan', 'mediums'];

export function missionCollections(): Collection[] {
  return collections.filter((c) => missionKeys.some((k) => c.slug.includes(k)));
}

export function outreachCollections(): Collection[] {
  return collections.filter((c) => ministryKeys.some((k) => c.slug.includes(k)));
}

export function liturgicalCollections(): Collection[] {
  const keys = ['holyweek', 'good-friday', '7-last', 'christmas', 'gampanin'];
  return collections.filter((c) => keys.some((k) => c.slug.includes(k)));
}
