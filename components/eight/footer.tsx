import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-flex size-9 items-center justify-center rounded-xl border bg-muted/20 text-sm font-semibold">
              BP
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Backroom Prints
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Screen printing & merch in Oklahoma City. Apparel, promotional
            goods, and artist drops.
          </p>
        </div>

        <div className="flex flex-row justify-evenly space-x-3">
          <div className="space-y-3">
            <p className="text-sm font-medium">Links</p>
            <div className="grid gap-2 text-sm">
              <Link
                href="/eight/#about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/#services"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/#work"
                className="text-muted-foreground hover:text-foreground"
              >
                Our Work
              </Link>
              <Link
                href="/#faq"
                className="text-muted-foreground hover:text-foreground"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Pages</p>
            <div className="grid gap-2 text-sm">
              <Link
                href="/eight/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <Link
                href="/eight/terms"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="/eight/privacy"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Contact</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4" />
              <span>Oklahoma City, Oklahoma</span>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4" />
              <a
                href="mailto:hello@backroomprints.com"
                className="hover:text-foreground hover:underline"
              >
                hello@backroomprints.com
              </a>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4" />
              <a
                href="tel:+14055550123"
                className="hover:text-foreground hover:underline"
              >
                (405) 555-0123
              </a>
            </div>

            <a
              href="https://www.instagram.com/backroomprints/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-foreground transition hover:bg-muted/40"
            >
              <Instagram className="size-4" />
              @backroomprints
            </a>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Backroom Prints. All rights reserved.
          </p>
          <p className="text-xs">Built in Oklahoma City. Printed with care.</p>
        </div>
      </div>
    </footer>
  );
}
