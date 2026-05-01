export type Issue = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  pdfHref: string;
  comment?: string;
  featured?: boolean;
};

const rawIssues: Issue[] = [
  {
    slug: 'april-2026',
    title: 'April 2026 - Made with Love',
    description: 'Handmade gifts for people I love. This issue includes linocut printing, amigurumi crochet, beaded embroidery, and more!',
    image: '/images/APRIL-2026-Lid_making_prints.jpg',
    imageAlt: 'Colorful handmade prints and craft tools',
    date: '2026-04-01',
    pdfHref: '/newsletter/April-2026.pdf',
    featured: true,
  },
  {
    slug: 'march-2026',
    title: 'March 2026 - Denim Upcycling',
    description: 'I transformed a pair of old jeans into a statement piece using a classic quilt block motif. Plus an upcycled denim patchwork pouch.',
    image: '/images/MARCH-2026-Hanna_showing_off_quilt_panel.jpg',
    imageAlt: 'Hanna showing off a denim quilt panel',
    date: '2026-03-01',
    pdfHref: '/newsletter/March-2026.pdf',
  },
  {
    slug: 'february-2026',
    title: 'February 2026 - Fermentation Lab Notes',
    description: 'This food-focused issue includes notes and suggestions from my winter fermentation experiments.',
    image: '/images/FEB-2026-ferment_collection_selfie.jpg',
    imageAlt: 'Fermentation jars and a selfie',
    date: '2026-02-01',
    pdfHref: '/newsletter/February-2026.pdf',
  },
  {
    slug: 'january-2026',
    title: 'January 2026 - Nature Notes Issue',
    description: 'A bit of natural science, a sprinkle of art, and a number of things I have learned from and about the natural world.',
    image: '/images/JAN-2026-Hanna_in_forest.jpg',
    imageAlt: 'Hanna in the forest with nature notes',
    date: '2026-01-01',
    pdfHref: '/newsletter/January-2026.pdf',
  },
  {
    slug: 'december-2025',
    title: 'December 2025 - Reading Recap',
    description: 'Facts, figures, and reflections from my 2025 reading list.',
    image: '/images/DEC-2025-reading-with-Purple.jpg',
    imageAlt: 'A stack of books and a cozy reading scene',
    date: '2025-12-01',
    pdfHref: '/newsletter/December-2025.pdf',
  },
  {
    slug: 'november-2025',
    title: 'November 2025 - Fall Food Issue',
    description: 'Some food content I’ve been cooking up plus two original recipes: Seedy Date Granola and Hanna’s Signature Chili Crisp!',
    image: '/images/NOV-2025-chili-crisp-process-chaos.jpg',
    imageAlt: 'Chili crisp ingredients arranged on a table',
    date: '2025-11-01',
    pdfHref: '/newsletter/November-2025.pdf',
  },
  {
    slug: 'october-2025',
    title: 'October 2025 - Fall Fiber Arts Issue',
    description: 'The inaugural issue of Hanna’s Happenings, featuring a collection of fiber arts projects.',
    image: '/images/OCT-2025-weaving-hat.jpg',
    imageAlt: 'A woven hat in warm fall colors',
    date: '2025-10-01',
    pdfHref: '/newsletter/October-2025.pdf',
  },
];

export const issues = rawIssues
  .slice()
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const recentIssues = issues.slice(0, 3);

export const issuePageUrl = (issue: Issue) => `/issues/${issue.slug}`;

export const getIssueBySlug = (slug: string) => issues.find((issue) => issue.slug === slug);

export const getIssuePaths = () =>
  issues.map((issue) => ({ params: { slug: issue.slug } }));
