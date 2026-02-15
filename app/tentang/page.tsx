import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Tentang - InvoiceKirim",
  description: "Kenali lebih dekat InvoiceKirim, invoice generator untuk freelancer Indonesia.",
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        <p className="mb-4 text-sm tracking-widest text-accent uppercase">Tentang Kami</p>
        <h1 className="font-display mb-10 text-4xl md:text-5xl">
          Dibuat oleh freelancer, untuk{" "}
          <span className="italic">freelancer</span>
        </h1>

        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>
            InvoiceKirim lahir dari frustrasi yang sama: bikin invoice pake Excel, format
            berantakan, kirim manual lewat email, terus lupa follow up. Sebagai freelancer,
            waktu kita seharusnya dipakai buat kerja — bukan ngurusin administrasi.
          </p>

          <p>
            Kami percaya bahwa freelancer Indonesia layak punya tools yang simpel, cepat,
            dan profesional. Nggak perlu software mahal, nggak perlu belajar accounting.
            Cukup isi form, klik kirim, selesai.
          </p>

          <h2 className="font-display pt-4 text-2xl text-foreground md:text-3xl">Misi Kami</h2>

          <p>
            Membantu freelancer Indonesia mengelola invoice dan pembayaran dengan cara yang
            paling sederhana. Kami ingin setiap freelancer bisa fokus ke pekerjaan yang
            mereka cintai, tanpa pusing soal penagihan.
          </p>

          <h2 className="font-display pt-4 text-2xl text-foreground md:text-3xl">Kenapa InvoiceKirim?</h2>

          <ul className="list-inside list-disc space-y-2">
            <li>
              <span className="text-foreground font-medium">Cepat</span> — Invoice jadi dalam 30 detik, bukan 30 menit.
            </li>
            <li>
              <span className="text-foreground font-medium">Profesional</span> — Tampilan bersih yang bikin client yakin.
            </li>
            <li>
              <span className="text-foreground font-medium">Gratis</span> — Mulai tanpa biaya, upgrade kalau butuh.
            </li>
            <li>
              <span className="text-foreground font-medium">Lokal</span> — Dibuat untuk kebutuhan freelancer Indonesia, pakai Rupiah.
            </li>
          </ul>

          <div className="rounded-lg border border-border bg-surface p-6">
            <p className="text-foreground">
              &ldquo;Kami membangun InvoiceKirim karena kami sendiri butuh. Setiap fitur
              yang ada di sini lahir dari pengalaman nyata sebagai freelancer.&rdquo;
            </p>
            <p className="mt-3 text-sm">— Tim InvoiceKirim</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
