# Prompt: Supabase Setup for Next.js App Router

Use this prompt to reproduce the Supabase auth setup from scratch in a Next.js 16 App Router project.

---

## Prompt

```
Set up Supabase in this Next.js App Router project following the official Supabase SSR docs pattern.

Project details:
- Next.js 16 App Router (no src/ directory, routes under app/)
- TypeScript
- Tailwind CSS 4 with custom design tokens
- Path alias: @/* maps to project root

Supabase project URL: https://eskrvkycotpeoicgmkvn.supabase.co
Auth method: email + password only

Steps to implement:
1. Install @supabase/supabase-js and @supabase/ssr
2. Create .env.local with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
3. Create utils/supabase/client.ts — browser client using createBrowserClient from @supabase/ssr
4. Create utils/supabase/server.ts — server client using createServerClient with next/headers cookie adapter
5. Create utils/supabase/middleware.ts — updateSession() function that refreshes the auth token
6. Create middleware.ts at project root — calls updateSession, with matcher that excludes static files
7. Create app/auth/confirm/route.ts — GET route handler that exchanges token_hash OTP for a session, redirects to /dashboard on success or /error on failure
8. Create app/login/page.tsx — login and signup form styled to match the project design language (monochrome palette, warm brown accent color, serif display font). Use searchParams to show error/success banners. Use Server Action formAction pattern (no client JS).
9. Create app/login/actions.ts — Server Actions: login() and signup() using the server Supabase client. On error, redirect to /login?error=..., on success redirect to /dashboard
10. Create app/error/page.tsx — simple auth error page with a "Back to sign in" link

Design tokens to use in the login page:
- bg-background, text-foreground, text-muted
- border-border, bg-surface, bg-accent-light
- bg-accent, hover:bg-accent-dark (brown accent buttons)
- focus:ring-accent/30, focus:border-accent
- font-display (Instrument Serif) for headlines

After implementation, document the one remaining manual step (Supabase dashboard email template change) and usage patterns in docs/supabase-setup.md.
```

---

## What gets generated

| File | Description |
|---|---|
| `utils/supabase/client.ts` | Browser client |
| `utils/supabase/server.ts` | Server client with cookie adapter |
| `utils/supabase/middleware.ts` | Session refresh helper |
| `middleware.ts` | Root middleware |
| `app/auth/confirm/route.ts` | Email OTP confirmation handler |
| `app/login/page.tsx` | Login/signup page |
| `app/login/actions.ts` | Server Actions for auth |
| `app/error/page.tsx` | Auth error fallback |
| `docs/supabase-setup.md` | Setup docs + manual steps |
