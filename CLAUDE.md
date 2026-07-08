# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: Next.js version

This project runs **Next.js 16.2.7 with React 19**. The App Router APIs and conventions differ from older versions. As `AGENTS.md` states, read the relevant guide in `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`) before writing framework code — do not rely on remembered Next.js APIs.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config, `eslint-config-next` core-web-vitals + typescript)

There is no test suite configured.

## Architecture

A single-page personal portfolio ("Aurora Minimalist" design), App Router. The entire site is one route composed of stacked sections.

- **`src/lib/data.ts`** — the single source of truth for all content: `profile`, `stats`, `timeline`, `projects`, `skillGroups`, `navItems`, and `siteUrl`. Edit content here; components render from it. Update `siteUrl` if the domain changes.
- `src/app/layout.tsx` — root layout. Loads three fonts into CSS variables (`Sora` = display/headings, `Geist` = body, `Geist_Mono` = mono accents), sets full SEO `metadata`/`viewport`, and wraps every page with global `Navbar`, `Footer`, and `CustomCursor`.
- `src/app/page.tsx` — the home route. Renders sections in order: `Hero → About → Experience → Projects → Skills → Contact`. To add a section, create a component and slot it here.
- `src/app/api/contact/route.ts` — POST handler for the contact form. Sends email via **Resend** (REST, no SDK dependency) when `RESEND_API_KEY` is set; returns a clear 503 otherwise. Has a honeypot (`company` field) and validation. Env vars: `RESEND_API_KEY`, optional `CONTACT_TO` / `CONTACT_FROM`.
- SEO files: `src/app/sitemap.ts`, `src/app/robots.ts`, and `src/app/opengraph-image.tsx` (dynamic OG card via `next/og`). `favicon.ico` lives in `src/app/`.
- `src/components/*` — one component per section, each paired with a co-located CSS Module. Shared helpers: `AuroraBackground` (pure-CSS animated backdrop, no WebGL), `Reveal` (framer-motion fade-in-on-scroll wrapper).

### Conventions

- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- Styling is **CSS Modules** per component + a design-system layer in `globals.css`: CSS custom properties (colors, spacing, fluid type scale, radii) and global utility classes (`.container`, `.section`, `.eyebrow`, `.section-head`, `.glass`, `.btn`/`.btn-primary`/`.btn-ghost`, `.chip`, `.gradient-text`, `.rule`). No Tailwind or CSS-in-JS.
- Components using hooks, browser APIs, or animation start with `"use client"`. Most sections are client components (framer-motion + `lucide-react`/`react-icons`). `AuroraBackground` is a server component (no JS).
- **Accessibility/perf is intentional**: `prefers-reduced-motion` is honored in `globals.css` and per-component; the `CustomCursor` is hidden on coarse pointers via CSS; there's a skip-to-content link. Keep these when editing.
- The old `three` / `@react-three/fiber` / `maath` dependencies (from the removed `ParticleBackground`) and `src/types.d.ts` have been removed — the backdrop is the pure-CSS `AuroraBackground`.

## Deployment

Target host is **Vercel**, custom domain **bhavyaverdia.me** (registered at Namecheap). See `DEPLOY.md` for the full first-time deploy + DNS steps and how to enable the contact form with a Resend key.
