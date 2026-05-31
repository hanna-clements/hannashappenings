# Hanna's Happenings

Personal newsletter website for Hanna Clements, showcasing monthly issues about art, creative practice, seasonal projects, and field notes from coastal BC.

## Project Overview

- Home page lists the latest issues and includes a subscription form.
- Archive page organizes past issues by year.
- Each issue has its own page with a summary, hero image, and PDF link.
- An RSS feed is generated at `/feed.xml`.

## Development

```sh
npm install
npm run dev
```

Open `http://localhost:4173` after starting the local dev server.

## Build

```sh
npm run build
npm run preview
```

Built output is written to `dist/`.

## Notes

- The site uses Astro with `@astrojs/sitemap` and `@astrojs/rss`.
- Content is authored in `src/data/issues.ts`.
- Layouts and components live under `src/layouts` and `src/components`.
