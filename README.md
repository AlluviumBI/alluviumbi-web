# Alluvium marketing site

Static site for Alluvium — strategic Power BI and practical AI advisory.

Canonical origin in metadata: `https://www.alluviumbi.com`. Homepage canonical is `https://www.alluviumbi.com/`.

**WARNING: Do not attach a custom domain without explicit approval.** Do not change production DNS.

## Stack

- Astro 5, `output: 'static'`, TypeScript
- Content Collections: Markdown in `src/content/blog/`
- `@astrojs/sitemap`, `@astrojs/rss`

## Local development

Requires Node 20 (see `.nvmrc`).

Install dependencies with the Node package manager in this folder, then start the Astro dev server using the `dev` script in package.json.

Create a production export using the `build` script. Files land in `dist/`. Use the `preview` script to serve that folder locally.

## Add a blog post

1. Create a new file in `src/content/blog/`, e.g. `src/content/blog/my-post.md`.
2. Add frontmatter:

```
---
title: "Your title"
description: "One or two sentences for SEO and the listing."
pubDate: 2026-08-31
tags:
  - Power BI
draft: false
---

Markdown body. Use one h1 on the page template; start body headings at ##.
```

3. The slug is the filename without `.md`. A post named `my-post.md` is `/blog/my-post`.
4. Set `draft: true` to keep it out of `/blog`, RSS, and the listing.
5. Start the dev server and open `/blog`.

Schema lives in `src/content/config.ts`. After Content (or any author) drops a new `.md` file with valid frontmatter into that folder, it appears on `/blog` on the next build.

## Netlify

1. Connect this repository.
2. Command is defined in `netlify.toml` (`[build] command`, publish = `dist`).
3. Node: 20 via `NODE_VERSION`.

**WARNING:** Do not attach the custom domain alluviumbi.com (or any domain) without explicit approval.

## Contact form

The `/contact` form is a client-side stub (validation + success state only). It does not send email, call APIs, or use host form notifications.

## Commands

Local package install and the dev/build scripts are the standard Astro ones in package.json (install, then the dev script, then the build script).
