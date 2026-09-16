# Personal Portfolio

This is a static Astro portfolio site. Project cards are generated from Markdown entries, so a project can be added without using a CMS or GraphQL.

## Add a project

Create one `.md` file per project in `src/content/projects/`. The filename becomes an internal slug only.

```md
---
title: Project name
description: A short summary of what the project does and your contribution.
publishedAt: 2026-09-16
category: web_development
link: https://example.com
thumbnail: /projects/project-name.jpg
role: Frontend Development
technologies:
  - Astro
  - TypeScript
  - Tailwind CSS
---
```

Put each thumbnail in `public/projects/`. Projects are sorted by `publishedAt`, newest first. Commit and push the Markdown file and its image; the connected Cloudflare deployment will publish the update after its next build.

## Commands

| Command           | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the local development server.       |
| `npm run build`   | Type-check and build the production site. |
| `npm run preview` | Preview the production build locally.     |
