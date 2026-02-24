import Link from "next/link";

export const metadata = {
  title: "Error — InvoiceKirim",
};

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <p className="text-muted text-sm mb-2">Something went wrong</p>
        <h1 className="font-display text-3xl text-foreground mb-4">
          Auth failed
        </h1>
        <p className="text-muted text-sm mb-6">
          The confirmation link may have expired or is invalid.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm font-medium transition-colors"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
