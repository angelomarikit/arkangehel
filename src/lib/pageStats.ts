import { collections } from './collections';

export function siteStats() {
  const albums = collections.length;
  const photos = collections.reduce((n, c) => n + c.count, 0);
  const missions = collections.filter((c) =>
    ['mission', 'banner', 'patos', 'inhoc', 'holyweek', 'gampanin'].some((k) => c.slug.includes(k)),
  ).length;
  const outreach = collections.filter((c) =>
    ['herbal', 'kabataan', 'mediums'].some((k) => c.slug.includes(k)),
  ).length;

  return { albums, photos, missions, outreach };
}
