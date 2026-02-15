import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Kontak - InvoiceKirim",
  description: "Hubungi tim InvoiceKirim. Kami siap membantu pertanyaan dan masukan kamu.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm tracking-widest text-accent uppercase">Kontak</p>
          <h1 className="font-display mb-10 text-4xl md:text-5xl">
            Ada pertanyaan? <span className="italic">Hubungi kami</span>
          </h1>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Contact form */}
          <div className="md:col-span-2">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="mb-2 block text-sm font-medium">
                    Nama
                  </label>
                  <input
                    id="nama"
                    type="text"
                    placeholder="Nama lengkap"
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@contoh.com"
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subjek" className="mb-2 block text-sm font-medium">
                  Subjek
                </label>
                <input
                  id="subjek"
                  type="text"
                  placeholder="Tentang apa?"
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pesan" className="mb-2 block text-sm font-medium">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  rows={5}
                  placeholder="Tulis pesan kamu di sini..."
                  className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-sm font-medium tracking-wider uppercase">Email</h3>
              <a
                href="mailto:halo@invoicekirim.com"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                halo@invoicekirim.com
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium tracking-wider uppercase">Sosial Media</h3>
              <div className="space-y-2 text-sm text-muted">
                <p>
                  <a href="#" className="transition-colors hover:text-foreground">Twitter / X</a>
                </p>
                <p>
                  <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium tracking-wider uppercase">Jam Operasional</h3>
              <p className="text-sm text-muted">
                Senin — Jumat<br />
                09.00 — 17.00 WIB
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
