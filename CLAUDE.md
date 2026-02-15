# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

InvoiceKirim — a micro-SaaS invoice generator for freelancers. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (flat config, core-web-vitals + typescript)

## Architecture

- **App Router** — No `src/` directory. All routes live under `app/`.
- **Path alias** — `@/*` maps to project root (e.g., `@/app/page` or `@/lib/utils`).
- **Tailwind CSS 4** — Uses `@theme inline` in `app/globals.css` for design tokens (no `tailwind.config.js`). Custom colors: `accent` (brown), `accent-dark`, `accent-light`, `muted`, `border`, `surface`. Custom fonts: `sans` (Geist), `mono` (Geist Mono), `display` (Instrument Serif).
- **Server Components by default** — Only add `"use client"` when client interactivity is needed.
- **Fonts** — Geist Sans, Geist Mono, and Instrument Serif loaded via `next/font/google` in `app/layout.tsx`. Serif is used for display/headlines via `font-display` utility.
- **Design language** — Monochrome palette with warm brown accents. Editorial aesthetic with serif headlines.
