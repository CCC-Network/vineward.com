# Vineward — Landing Page

Production landing site for **Vineward**, the discipleship operating system for
Shelter of Praise Assembly of God. Built with Vite, React, TypeScript, and
React Router.

## Stack

- Vite
- React 18 + TypeScript
- React Router v6
- Plain CSS with a design-token system (`src/styles/tokens.css`) — no UI
  framework, so the visual identity stays specific to this brand

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/   Reusable UI: nav, footer, diagrams, download buttons, icons
  pages/        One file per route (Home, HowItWorks, Materials, Church,
                Contact, Download, NotFound)
  lib/config.ts Single source of truth for emails, church link, and
                app-store / direct-download links
  styles/       Design tokens + global styles
```

## Updating contact info and links

Everything editable without touching component code lives in
`src/lib/config.ts`:

- `contacts` — the four contact entries shown in the footer and Contact page
- `church` — church name, URL, email
- `downloadTargets` — Play Store / App Store / Amazon / Samsung / APKPure.
  Each starts with `href: null`, which renders as an "in review" pill
  instead of a dead link. Set the `href` once a listing goes live and the
  button becomes a real link automatically.
- `directDownload` — the direct APK download button. Set `href` to the
  hosted `.apk` file's URL once a release build exists.
- `webAccess` — link to a hosted web build of the app, if one exists.

## Deploying

The build output in `dist/` is static and can be deployed to any static
host (Vercel, Netlify, Render static site, GitHub Pages, etc.). Because
this uses client-side routing, configure your host to rewrite all paths
to `/index.html` (a "SPA fallback" / "history fallback" rule).

## Notes on scope

This is the marketing/landing site only. It does not talk to the Vineward
app's backend (Supabase, auth, tracking data, etc.) — by design, the site
only describes what the app does for a ministry leader, not how it's
built.
