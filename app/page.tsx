import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-5 text-sm tracking-widest text-accent uppercase">
              Invoice generator untuk freelancer
            </p>
            <h1 className="font-display mb-6 text-4xl leading-tight md:text-5xl md:leading-[1.15]">
              Bikin Invoice Profesional dalam{" "}
              <span className="italic">30 Detik</span>
            </h1>
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted">
              Nggak perlu Excel, nggak perlu template ribet.
              Isi form, klik kirim, selesai.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Mulai Gratis — Tanpa Kartu Kredit
            </a>
          </div>

          {/* Invoice mockup */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-surface" />
            <div className="rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="font-display text-xl">Invoice</div>
                  <div className="mt-1 font-mono text-xs text-muted">#INV-2026-042</div>
                </div>
                <div className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium">
                  Lunas
                </div>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="mb-1 text-xs tracking-wider text-muted uppercase">Dari</div>
                  <div className="font-medium">Studio Anda</div>
                </div>
                <div>
                  <div className="mb-1 text-xs tracking-wider text-muted uppercase">Untuk</div>
                  <div className="font-medium">PT Klien Hebat</div>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <div className="mb-2 flex justify-between text-xs tracking-wider text-muted uppercase">
                  <span>Deskripsi</span>
                  <span>Jumlah</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Desain Website</span>
                    <span className="font-mono">Rp 5.000.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pengembangan Frontend</span>
                    <span className="font-mono">Rp 8.000.000</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-between border-t border-border pt-3">
                  <span className="font-medium">Total</span>
                  <span className="font-mono font-medium">Rp 13.000.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6">
        <div className="h-px flex-1 bg-border" />
        <div className="h-1.5 w-1.5 rotate-45 border border-accent" />
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Fitur */}
      <section id="fitur" className="py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-4 text-sm tracking-widest text-accent uppercase">Fitur</p>
            <h2 className="font-display text-3xl md:text-5xl">
              Simpel, cepat, langsung jadi
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<BoltIcon />}
              title="Invoice Instan"
              description="Isi form sederhana, invoice langsung jadi. Nggak perlu desain, nggak perlu ribet."
            />
            <FeatureCard
              icon={<LinkIcon />}
              title="Share Link"
              description="Kirim invoice lewat link. Client tinggal buka di browser, langsung lihat detail tagihan."
            />
            <FeatureCard
              icon={<EyeIcon />}
              title="Track Status"
              description="Tau mana yang udah dibayar, mana yang belum. Semua terlihat jelas di dashboard."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border bg-surface py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-4 text-sm tracking-widest text-accent uppercase">Testimoni</p>
            <h2 className="font-display text-3xl md:text-5xl">
              Dipercaya freelancer Indonesia
            </h2>
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6 text-center">
              <div className="font-display text-3xl md:text-4xl">500+</div>
              <div className="mt-1 text-sm text-muted">invoice dibuat</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-6 text-center">
              <div className="font-display text-3xl md:text-4xl">Rp 2M+</div>
              <div className="mt-1 text-sm text-muted">tertagih</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Dulu bikin invoice pake spreadsheet, sekarang 30 detik udah kelar. Client juga bilang tampilannya profesional."
              name="Rina Susanti"
              role="UI/UX Designer"
            />
            <TestimonialCard
              quote="Fitur share link-nya game changer. Tinggal kirim link ke WhatsApp, client langsung bisa lihat invoice-nya."
              name="Andi Prasetyo"
              role="Web Developer"
            />
            <TestimonialCard
              quote="Akhirnya bisa track semua invoice di satu tempat. Nggak ada lagi yang kelewat nggak ditagih."
              name="Maya Putri"
              role="Content Writer"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" className="py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="mb-4 text-sm tracking-widest text-accent uppercase">Harga</p>
            <h2 className="font-display text-3xl md:text-5xl">
              Mulai gratis, upgrade kapan aja
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            <PricingCard
              name="Gratis"
              price="Rp 0"
              period="selamanya"
              features={[
                "5 invoice per bulan",
                "1 template invoice",
                "Share via link",
                "Dashboard basic",
              ]}
              cta="Mulai Gratis"
              highlighted={false}
            />
            <PricingCard
              name="Pro"
              price="Rp 49.000"
              period="/bulan"
              features={[
                "Unlimited invoice",
                "Custom branding & logo",
                "Template premium",
                "Reminder otomatis",
                "Priority support",
              ]}
              cta="Coba Pro 14 Hari"
              highlighted={true}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-foreground py-24 text-background md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display mx-auto max-w-lg text-3xl md:text-5xl">
            Mulai Bikin Invoice Sekarang
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed opacity-60">
            Gratis, tanpa kartu kredit. Langsung bisa bikin invoice pertama kamu dalam hitungan detik.
          </p>
          <a
            href="#"
            className="mt-10 inline-block rounded-md border border-background bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-transparent hover:text-background"
          >
            Daftar Gratis
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-lg border border-border bg-background p-6 transition-colors hover:border-accent">
      <div className="mb-4 text-accent">{icon}</div>
      <h3 className="mb-2 font-medium">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-6">
      <p className="mb-6 text-sm leading-relaxed text-muted">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted">{role}</div>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  features,
  cta,
  highlighted,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-8 ${
        highlighted
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background"
      }`}
    >
      {highlighted && (
        <div className="mb-4 inline-block rounded-full bg-background/10 px-3 py-1 text-xs font-medium">
          Paling Populer
        </div>
      )}
      <div className="text-sm font-medium tracking-wider uppercase">{name}</div>
      <div className="mt-2">
        <span className="font-display text-3xl">{price}</span>
        <span className={highlighted ? "opacity-50" : "text-muted"}>{period}</span>
      </div>
      <a
        href="#"
        className={`mt-6 block rounded-md py-2.5 text-center text-sm font-medium transition-colors ${
          highlighted
            ? "bg-background text-foreground hover:bg-background/90"
            : "border border-foreground bg-foreground text-background hover:bg-accent hover:border-accent"
        }`}
      >
        {cta}
      </a>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <CheckIcon highlighted={highlighted} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BoltIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  );
}

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 ${highlighted ? "opacity-60" : "text-accent"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}
