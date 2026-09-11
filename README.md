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
  components/   Reusable UI: nav, footer, diagrams, download buttons, icons,
                Reveal (scroll animation), ImageCarousel, SocialIcons,
                UsedBy, Testimonials
  pages/        One file per route (Home, HowItWorks, Materials, Church,
                Contact, Download, Docs, ReleaseLogs, PrivacyPolicy, NotFound)
  lib/config.ts Single source of truth for emails, church link, socials,
                testimonials, used-by orgs, materials, screenshots, and
                app-store / direct-download links
  lib/useParallax.ts  Scroll-linked parallax offset hook (hero visual)
  styles/       Design tokens + global styles
```

## Scroll animation

`components/Reveal.tsx` fades/slides content in the first time it scrolls
into view (IntersectionObserver-based), and `lib/useParallax.ts` drives a
subtle parallax drift on the hero's tree motif. Both fully respect
`prefers-reduced-motion` — reveals show instantly and parallax is disabled
outright for anyone with that preference set.

## Updating contact info and links

Everything editable without touching component code lives in
`src/lib/config.ts`:

- `contacts` — the four contact entries shown in the footer and Contact page
- `church` — church name, URL, email
- `socials` — footer social icon links (Facebook, TikTok, YouTube, Instagram)
- `usedBy` — organizations shown in the "used and trusted by" row; add an
  entry with a `logo` path and `url` as more churches come on board
- `testimonials` — quotes shown under "Stories from the field"; the grid
  fills any remaining slots with an empty-state placeholder
- `materials` — the discipleship materials list and its order
- `screenshots` — the home page carousel; each entry starts with
  `src: null` (renders as a placeholder) until a real GitHub-hosted image
  URL is added
- `pastorMinistry` — the "Visit" link at the end of the Materials page
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
