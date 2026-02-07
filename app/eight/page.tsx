import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Shirt,
  Package,
  Music,
  Sparkles,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/eight/navbar";
import { Footer } from "@/components/eight/footer";
import ContactSectionForm from "@/components/eight/contact-section-form";

export const metadata: Metadata = {
  title: "Backroom Prints | Screen Printing & Merch in Oklahoma City",
  description:
    "Backroom Prints is a local screen printing shop in Oklahoma City specializing in custom apparel, promotional goods, and artist merch.",
};

const SERVICES = [
  {
    title: "Custom Apparel",
    icon: Shirt,
    bullets: [
      "Tees, hoodies, crews, long sleeves",
      "Front / back / sleeve prints",
      "Small runs to bulk orders",
    ],
  },
  {
    title: "Promotional Goods",
    icon: Package,
    bullets: [
      "Workwear & team gear",
      "Event merch & giveaways",
      "Labels, tags, and add-ons",
    ],
  },
  {
    title: "Artist Merch",
    icon: Music,
    bullets: [
      "Tour drops & limited releases",
      "Merch bundles and variants",
      "Fast reprints when needed",
    ],
  },
];

const WORK = [
  {
    title: "Band Merch Drop",
    description: "Bold 2-color print on black tees + hoodies.",
    tag: "Merch",
  },
  {
    title: "Local Business Uniforms",
    description: "Clean chest logo + back print, durable blanks.",
    tag: "Apparel",
  },
  {
    title: "Event Staff Shirts",
    description: "High visibility print with quick turnaround.",
    tag: "Event",
  },
  {
    title: "Limited Run Streetwear",
    description: "Premium blanks, oversized back graphic, tags.",
    tag: "Premium",
  },
];

const FAQ = [
  {
    q: "Do you have a minimum order quantity?",
    a: "We can handle small runs and bulk orders. Tell us what you need and we will guide you to the best option for price and print quality.",
  },
  {
    q: "What do you need from me to start a quote?",
    a: "Quantity, sizes, print locations (front/back/sleeve), number of ink colors, your deadline, and any artwork you have (even a rough mockup helps).",
  },
  {
    q: "Can you help with design or cleanup?",
    a: "Yes — we can often clean up artwork, prep files for print, or point you in the right direction depending on what you have.",
  },
  {
    q: "How long does production take?",
    a: "Turnaround depends on the job and current schedule. We will always give you a clear estimate once we know your details and deadline.",
  },
];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="w-full">
        {/* HERO */}
        <section className="border-b">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1 text-sm text-muted-foreground">
                <Sparkles className="size-4" />
                Screen printing + merch in Oklahoma City
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Merch that looks{" "}
                <span className="underline decoration-muted-foreground/30 underline-offset-8">
                  as good as it feels
                </span>
                .
              </h1>

              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Backroom Prints helps bands, brands, and local businesses print
                apparel and merch people actually want to wear. Clean prints,
                solid blanks, and a smooth process.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 font-medium text-background transition hover:opacity-90"
                >
                  Get a Quote <ArrowRight className="ml-2 size-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-medium transition hover:bg-muted/40"
                >
                  Contact Page
                </Link>
              </div>

              <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4" />
                  <span>Small runs to bulk orders</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4" />
                  <span>Artist merch & drops</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4" />
                  <span>Quality blanks + inks</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4" />
                  <span>Clear communication</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border bg-muted/40">
                {/* Swap this out for a real shop / product image later */}
                <Image
                  src="/placeholder.svg"
                  alt="Backroom Prints - sample print work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Apparel",
                  "Promotional",
                  "Artist Merch",
                  "Fast Reprints",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border bg-muted/30 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Local shop. Big energy.
                </h2>
                <p className="text-muted-foreground">
                  We are based in Oklahoma City and built for people who care
                  about how their merch turns out. Whether you are launching a
                  drop, gearing up for a tour, or outfitting a team, we help you
                  pick the right blanks, prep artwork, and land the final print.
                </p>
                <p className="text-muted-foreground">
                  Our goal is simple: make the process easy and deliver merch
                  you are proud to hand out and wear.
                </p>
              </div>

              <div className="rounded-2xl border bg-muted/20 p-6">
                <h3 className="text-lg font-medium">What we are about</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4" />
                    Thoughtful guidance on blanks, sizing, and print placement
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4" />
                    Print-ready file help when you need it
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4" />
                    Clear timelines and quick communication
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4" />
                    Quality checks so your run stays consistent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-y bg-muted/10 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                Services
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                Pick a lane or mix and match. We will recommend what is best for
                your timeline, budget, and final look.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {SERVICES.map(({ title, icon: Icon, bullets }) => (
                <div
                  key={title}
                  className="rounded-2xl border bg-background p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-muted/20">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-medium">{title}</h3>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border bg-background p-6 md:flex-row md:items-center">
              <div>
                <p className="text-lg font-medium">Not sure what you need?</p>
                <p className="text-sm text-muted-foreground">
                  Send your idea! We wil help you dial in the details.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 font-medium text-background transition hover:opacity-90"
              >
                Talk to us <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="work" className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                Our Work
              </h2>
              <p className="max-w-2xl text-muted-foreground">
                A few examples of the kinds of projects we love. Swap these
                cards for real projects, photos, or an Instagram grid.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {WORK.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border bg-background p-6 transition hover:bg-muted/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <span className="rounded-full border bg-muted/20 px-3 py-1 text-xs text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-xl border bg-muted/30">
                    {/* Replace with real images later */}
                    <div className="aspect-video w-full" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://www.instagram.com/backroomprints/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-muted/40"
              >
                <Instagram className="size-4" />
                See more on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y bg-muted/10 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
              <p className="max-w-2xl text-muted-foreground">
                Quick answers to the usual questions. If you do not see yours,
                hit us up.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {FAQ.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border bg-background p-6"
                >
                  <h3 className="text-base font-medium">{item.q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border bg-background p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-medium">Ready to start?</p>
                  <p className="text-sm text-muted-foreground">
                    Send details and we will reply with next steps.
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-3 font-medium text-background transition hover:opacity-90"
                >
                  Get a Quote <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
              <p className="max-w-2xl text-muted-foreground">
                Tell us what you are making and your deadline. Even a rough idea
                is enough to start.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Info */}
              <div className="space-y-6">
                <div className="rounded-2xl border bg-muted/10 p-6">
                  <h3 className="text-lg font-medium">Reach us directly</h3>

                  <div className="mt-4 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 size-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:hello@backroomprints.com"
                          className="text-muted-foreground hover:underline"
                        >
                          hello@backroomprints.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 size-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Phone / Text</p>
                        <a
                          href="tel:+14055550123"
                          className="text-muted-foreground hover:underline"
                        >
                          (405) 555-0123
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">
                          Oklahoma City, Oklahoma
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Instagram className="mt-0.5 size-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a
                          href="https://www.instagram.com/backroomprints/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:underline"
                        >
                          @backroomprints
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border bg-background p-6">
                  <h3 className="text-lg font-medium">What to include</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {[
                      "Quantity and sizes",
                      "Garment type (tee/hoodie/etc.)",
                      "Print locations (front/back/sleeve)",
                      "Number of colors (or reference image)",
                      "Deadline (if any)",
                      "Artwork files or mockups (if available)",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form UI (not wired) */}
              <div className="rounded-2xl border bg-background p-6">
                <h3 className="text-lg font-medium">Send a message</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  This form is UI-only for now.
                </p>

                <ContactSectionForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
