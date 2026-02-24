import { login, signup } from "./actions";

export const metadata = {
  title: "Sign In — InvoiceKirim",
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl text-foreground mb-1">
            InvoiceKirim
          </h1>
          <p className="text-muted text-sm">Sign in to your account</p>
        </div>

        <MessageBanner searchParams={searchParams} />

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              formAction={login}
              className="w-full py-2.5 px-4 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm font-medium transition-colors"
            >
              Sign in
            </button>
            <button
              formAction={signup}
              className="w-full py-2.5 px-4 rounded-lg border border-border hover:bg-surface text-foreground text-sm font-medium transition-colors"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

async function MessageBanner({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  if (params.error) {
    return (
      <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
        {params.error}
      </div>
    );
  }

  if (params.message) {
    return (
      <div className="mb-4 px-4 py-3 rounded-lg bg-accent-light border border-border text-foreground text-sm">
        {params.message}
      </div>
    );
  }

  return null;
}
