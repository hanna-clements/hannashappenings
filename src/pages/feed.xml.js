import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Since you don't have a content collection yet, we'll manually define items
  // In the future, you can replace this with actual content
  const items = [
    {
      title: 'March 2026 Issue',
      description: 'This month I went off-script from my editorial calendar to share a recent denim upcycling project.',
      link: '/newsletter/March-2026.pdf',
      pubDate: new Date('2026-03-01'),
    },
    {
      title: 'February 2026 Issue',
      description: 'February 2026 newsletter issue.',
      link: '/newsletter/February-2026.pdf',
      pubDate: new Date('2026-02-01'),
    },
    {
      title: 'January 2026 Issue',
      description: 'January 2026 newsletter issue.',
      link: '/newsletter/January-2026.pdf',
      pubDate: new Date('2026-01-01'),
    },
    // Add more as you publish
  ];

  return rss({
    title: 'Hanna\'s Happenings',
    description: 'Monthly newsletter sharing art, creative pursuits, and musings by Hanna D. Clements',
    site: context.site,
    items: items,
    customData: `<language>en-us</language>`,
  });
}