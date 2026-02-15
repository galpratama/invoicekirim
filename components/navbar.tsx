import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-2xl tracking-tight">
          Invoice<span className="text-accent">Kirim</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="/#fitur" className="transition-colors hover:text-foreground">
            Fitur
          </Link>
          <Link href="/#harga" className="transition-colors hover:text-foreground">
            Harga
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Login
          </Link>
        </div>
        <Link
          href="#"
          className="rounded-md border border-foreground bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:border-accent hover:bg-accent"
        >
          Mulai Gratis
        </Link>
      </nav>
    </header>
  );
}
