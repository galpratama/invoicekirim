import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - InvoiceKirim",
  description: "Kebijakan privasi InvoiceKirim. Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:pt-40 md:pb-28">
        <p className="mb-4 text-sm tracking-widest text-accent uppercase">Legal</p>
        <h1 className="font-display mb-4 text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-muted">Terakhir diperbarui: 15 Februari 2026</p>

        <div className="space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">1. Pendahuluan</h2>
            <p>
              InvoiceKirim (&ldquo;kami&rdquo;, &ldquo;milik kami&rdquo;) berkomitmen untuk melindungi
              privasi pengguna (&ldquo;Anda&rdquo;). Kebijakan privasi ini menjelaskan bagaimana kami
              mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda saat menggunakan
              layanan InvoiceKirim.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">2. Data yang Kami Kumpulkan</h2>
            <p className="mb-3">Kami mengumpulkan informasi berikut saat Anda menggunakan layanan kami:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span className="text-foreground font-medium">Informasi akun</span> — nama, alamat email,
                dan kata sandi saat Anda mendaftar.
              </li>
              <li>
                <span className="text-foreground font-medium">Data invoice</span> — informasi yang Anda masukkan
                ke dalam invoice seperti nama klien, deskripsi layanan, dan jumlah tagihan.
              </li>
              <li>
                <span className="text-foreground font-medium">Data penggunaan</span> — informasi tentang bagaimana
                Anda berinteraksi dengan layanan kami, termasuk halaman yang dikunjungi dan fitur yang digunakan.
              </li>
              <li>
                <span className="text-foreground font-medium">Informasi perangkat</span> — jenis browser, sistem
                operasi, dan alamat IP.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">3. Penggunaan Data</h2>
            <p className="mb-3">Data Anda digunakan untuk:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Menyediakan dan mengelola layanan InvoiceKirim.</li>
              <li>Mengirimkan invoice dan notifikasi sesuai permintaan Anda.</li>
              <li>Meningkatkan kualitas layanan dan pengalaman pengguna.</li>
              <li>Berkomunikasi dengan Anda terkait akun dan pembaruan layanan.</li>
              <li>Memenuhi kewajiban hukum yang berlaku.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">4. Keamanan Data</h2>
            <p>
              Kami menggunakan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi
              data pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran.
              Ini termasuk enkripsi data saat transit dan penyimpanan data di server yang aman.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">5. Cookies</h2>
            <p>
              Kami menggunakan cookies dan teknologi serupa untuk menjaga sesi login Anda, mengingat
              preferensi Anda, dan memahami bagaimana layanan kami digunakan. Anda dapat mengatur browser
              Anda untuk menolak cookies, namun beberapa fitur layanan mungkin tidak berfungsi dengan baik.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">6. Pihak Ketiga</h2>
            <p>
              Kami tidak menjual data pribadi Anda kepada pihak ketiga. Kami mungkin membagikan data
              dengan penyedia layanan terpercaya yang membantu kami menjalankan layanan (seperti penyedia
              hosting dan layanan email), dan mereka terikat untuk menjaga kerahasiaan data Anda.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">7. Hak Pengguna</h2>
            <p className="mb-3">Anda memiliki hak untuk:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Mengakses data pribadi yang kami simpan tentang Anda.</li>
              <li>Meminta koreksi atas data yang tidak akurat.</li>
              <li>Meminta penghapusan akun dan data Anda.</li>
              <li>Menarik persetujuan penggunaan data kapan saja.</li>
            </ul>
            <p className="mt-3">
              Untuk menggunakan hak-hak ini, silakan hubungi kami melalui{" "}
              <a href="mailto:halo@invoicekirim.com" className="text-foreground underline underline-offset-4">
                halo@invoicekirim.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">8. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan
              diinformasikan melalui email atau pemberitahuan di layanan kami. Penggunaan berkelanjutan
              setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
            </p>
          </section>

          <section>
            <h2 className="font-display mb-3 text-xl text-foreground md:text-2xl">9. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di{" "}
              <a href="mailto:halo@invoicekirim.com" className="text-foreground underline underline-offset-4">
                halo@invoicekirim.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
