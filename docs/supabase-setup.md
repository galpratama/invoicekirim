# Supabase Setup

Project URL: `https://eskrvkycotpeoicgmkvn.supabase.co`

## Status

- [x] Packages installed (`@supabase/supabase-js`, `@supabase/ssr`)
- [x] `.env.local` configured
- [x] Client utilities created (`utils/supabase/`)
- [x] Root middleware set up
- [x] Auth confirm route created
- [x] Login/signup page created
- [ ] Email confirmation template updated in Supabase dashboard

---

## Pending: Update Email Confirmation Template

This must be done once in the Supabase dashboard so email confirmation links work with the server-side auth flow.

1. Go to [Authentication → Email Templates](https://supabase.com/dashboard/project/eskrvkycotpeoicgmkvn/auth/templates)
2. Select **Confirm signup**
3. Find `{{ .ConfirmationURL }}` and replace it with:

```
{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email
```

4. Save changes

> **Why:** The default confirmation URL uses a client-side redirect flow. The replacement uses `token_hash` + `type` which allows the server-side Route Handler at `/auth/confirm` to exchange the OTP for a real session cookie — required for SSR auth to work correctly.

---

## Architecture Overview

```
utils/supabase/
  client.ts      — createBrowserClient() for use in "use client" components
  server.ts      — createServerClient() for Server Components, Server Actions, Route Handlers
  middleware.ts  — updateSession() refreshes the auth token on every request

middleware.ts    — runs on all routes; keeps session cookies fresh

app/
  login/
    page.tsx     — login + signup form (email/password)
    actions.ts   — Server Actions: login(), signup()
  auth/
    confirm/
      route.ts   — GET handler: exchanges OTP token_hash → session cookie
  error/
    page.tsx     — shown when auth confirm fails
```

## Usage Patterns

### Protect a page (Server Component)

```ts
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) redirect("/login");

  return <p>Hello {data.user.email}</p>;
}
```

> Always use `getUser()`, never `getSession()` in server code. `getUser()` revalidates with the Supabase auth server; `getSession()` only reads from the cookie and can be spoofed.

### Use Supabase in a Client Component

```ts
"use client";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
```

### Use Supabase in a Server Action

```ts
"use server";
import { createClient } from "@/utils/supabase/server";

export async function myAction() {
  const supabase = await createClient();
  // ...
}
```
