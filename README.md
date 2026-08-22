# My Portfolio Website Template for Nuxt 3 and Tailwind CSS

This is a [Nuxt](https://nuxt.com) portfolio website template by [Ulsyairil](https://github.com/ulsyairil).

## Setup
```bash
npm install
npm run dev
```

## Where to edit content
- `data/site.ts` (name, links, experience, skills, projects, certificates)
- `assets/css/main.css` (palette colors)

## Replace photo
Put your image in `public/avatar.jpg` (or update `site.avatar` in `data/site.ts`).

## Add projects
Edit `site.projects` in `data/site.ts`.
(Optional) Add images under `public/projects/` and reference them like `/projects/my-project.png`.

## Add certificates
Edit `site.certificates` in `data/site.ts`.
(Optional) Add images under `public/certificates/` and reference them like `/certificates/my-certificate.png`.

## Export portfolio PDF on Vercel

The **Export Portfolio PDF** action generates a desktop-ratio PDF through
`/api/portfolio-pdf`. The export follows the active website locale and resolved
light/dark theme. The endpoint streams the generated document so image-heavy
exports are not held in one response buffer. Pages use a fixed 1440 x 900 layout,
and each major portfolio section starts on a new page to prevent oversized blank
areas and unstable browser pagination.

The Vercel deployment uses `puppeteer-core` with `@sparticuz/chromium` on the
Node.js 22 runtime. For a custom production domain, set:

```bash
NUXT_PORTFOLIO_PDF_SITE_URL=https://your-domain.example
```

Preview deployments protected by Vercel Authentication can set either
`VERCEL_AUTOMATION_BYPASS_SECRET` or
`NUXT_PORTFOLIO_PDF_VERCEL_BYPASS_SECRET`.

Local development automatically detects Google Chrome, Chromium, or Microsoft
Edge from their standard installation paths. To use a different browser, set:

```bash
PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm run dev
```
