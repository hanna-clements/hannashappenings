import rss from '@astrojs/rss';
import { issues, issuePageUrl } from '../data/issues';

export async function GET(context) {
  const items = issues.map((issue) => ({
    title: issue.title,
    description: issue.description,
    link: issuePageUrl(issue),
    pubDate: new Date(issue.date),
  }));

  return rss({
    title: 'Hanna\'s Happenings',
    description: 'Monthly newsletter sharing art, creative pursuits, and musings by Hanna D. Clements',
    site: context.site,
    items: items,
    customData: `<language>en-us</language>`,
  });
}