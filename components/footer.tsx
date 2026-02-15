import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="font-display text-xl tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </Link>
          <div className="flex gap-8 text-sm text-muted">
            <Link href="/tentang" className="transition-colors hover:text-foreground">
              Tentang
            </Link>
            <Link href="/kontak" className="transition-colors hover:text-foreground">
              Kontak
            </Link>
            <Link href="/privacy-policy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm text-muted">&copy; 2026 InvoiceKirim</div>
        </div>
      </div>
    </footer>
  );
}
