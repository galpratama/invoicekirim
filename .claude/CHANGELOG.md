# InvoiceKirim Changelog

## 2026-02-15

### Initial Project Setup
- Initialized Next.js 16.1.6 project with TypeScript, Tailwind CSS 4, ESLint 9, App Router, Turbopack
- React 19.2.3, Geist font family pre-configured

### Landing Page
- Updated `app/layout.tsx` — metadata for InvoiceKirim (title, description)
- Updated `app/globals.css` — custom theme tokens (primary indigo color palette) using Tailwind CSS 4 `@theme inline`
- Replaced `app/page.tsx` — full landing page with:
  - Fixed header/nav with logo, nav links, CTA
  - Hero section with headline, sub-copy, dual CTAs, and an invoice mockup preview
  - Features section (4 cards: Invoice Builder, One-Click Send, Payment Tracking, PDF Export)
  - How It Works section (3-step flow)
  - Pricing section (Free + Pro tiers)
  - CTA banner
  - Footer
- Dark mode support throughout via `dark:` variants
- Responsive design (mobile-first) via Tailwind breakpoints

### Landing Page Redesign — "Ink & Parchment"
- Redesigned to monochrome + subtle brown accent palette
- `app/layout.tsx` — Added Instrument Serif display font (`--font-display`)
- `app/globals.css` — New theme tokens: `accent` (#8b7355), `accent-dark`, `accent-light`, `muted`, `border`, `surface` with warm off-white background (#f8f6f3)
- `app/page.tsx` — Full visual redesign:
  - Serif display font for all headlines (editorial feel)
  - Hero headline uses italic serif for "get paid"
  - Invoice mockup redesigned with mono font for amounts, uppercase labels, warmer paper feel
  - Feature cards use top-border accent pattern instead of boxed icons
  - Step numbers as large faded serif numerals (01, 02, 03)
  - Pricing: Pro card inverts to dark (foreground bg), Free card has outlined CTA
  - CTA section in full dark monochrome (foreground color block)
  - Decorative diamond divider between hero and features
  - Brown accent used sparingly: section labels, feature icons, hover states, check icons

### Landing Page v3 — Indonesian Copy & New Structure
- Full rewrite of `app/page.tsx` with Indonesian copy
- Hero: two-column layout (copy left, invoice mockup right) with "30 Detik" italic serif
- Fitur: 3 cards (Invoice Instan, Share Link, Track Status) with new icons (bolt, link, eye)
- Social Proof: new section with stats (500+ invoice, Rp 2M+ tertagih) and 3 testimonials
- Pricing: IDR pricing (Gratis Rp 0, Pro Rp 49.000/bulan) with "Paling Populer" badge
- CTA: "Mulai Bikin Invoice Sekarang" dark section with "Daftar Gratis" button
- Footer: Tentang, Kontak, Privacy Policy links
- Removed "How It Works" section per new spec
- New components: TestimonialCard, BoltIcon, LinkIcon, EyeIcon
