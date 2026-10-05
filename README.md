# MG Gold Mart — Next.js

A responsive static-export website for MG Gold Mart, built with the Next.js App Router, Tailwind CSS, GSAP/ScrollTrigger and Lenis. The visual direction uses an editorial, award-site-inspired layout with a restrained gold, cream and charcoal palette, using the original MG Gold Mart image library.

## Run locally

The project was scaffolded with `npx create-next-app@latest`. Its dependencies are recorded in `package.json` and `package-lock.json`.

```bash
# Run this from the legacy PHP project directory.
cd next-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and export

```bash
npm run lint
npm run typecheck
npm run build
```

`next.config.ts` enables `output: "export"` and unoptimized images. A production build generates the deployable static site in `out/`.
Internal page links use normal document navigation so they work on static hosts without Next.js server-side RSC rewrites.

## Routes

- `/` — Home and gold-buying services
- `/about-us/` — About MG Gold Mart and its evaluation process
- `/sell-used-gold/` — Spot cash for old gold
- `/instant-cash/` — Instant cash service
- `/relese-pledged-gold/` — Release pledged gold assistance
- `/gallery/` — Photo gallery
- `/contact-us/` — Contact information, map and enquiry form

Original image assets are served from `public/assets/`. The contact form uses a `mailto:` link because a static export has no form-processing backend; messages are not collected by the website.
