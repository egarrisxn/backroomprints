import type { Metadata } from "next";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import ContactPageForm from "@/components/eight/contact-page-form";

export const metadata: Metadata = {
  title: "Contact Us | Backroom Prints",
  description:
    "Get in touch with Backroom Prints in Oklahoma City for screen printing, merch, and custom apparel quotes.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
        <p className="max-w-2xl text-muted-foreground">
          Have a project in mind? Need a quote or just want to talk through
          ideas? Hit us up and we will get back to you as soon as we can.
        </p>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {/* Left Column – Contact Info */}
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Ways to Reach Us</h2>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:hello@backroomprints.com"
                  className="text-foreground hover:underline"
                >
                  hello@backroomprints.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-1 size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Phone / Text</p>
                <a
                  href="tel:+14055550123"
                  className="text-foreground hover:underline"
                >
                  (405) 555-0123
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Instagram className="mt-1 size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Instagram</p>
                <a
                  href="https://www.instagram.com/backroomprints/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  @backroomprints
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">Oklahoma City, Oklahoma</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-muted/30 p-5">
            <h3 className="font-medium">What helps us quote faster</h3>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Approx quantity & sizes</li>
              <li>Number of print locations</li>
              <li>Deadline (if any)</li>
              <li>Garment type or vibe</li>
              <li>Artwork files or mockups</li>
            </ul>
          </div>
        </section>

        {/* Right Column – Simple Static Form UI */}
        <section className="rounded-xl border p-6">
          <h2 className="text-xl font-medium">Send a Message</h2>

          <ContactPageForm />
        </section>
      </div>
    </main>
  );
}
