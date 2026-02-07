import Link from "next/link";
import { Instagram, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const NAV_ITEMS = [
  { label: "About", href: "/eight/#about" },
  { label: "Services", href: "/eight/#services" },
  { label: "Our Work", href: "/eight/#work" },
  { label: "FAQ", href: "/eight/#faq" },
  { label: "Contact", href: "/eight/#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex size-9 items-center justify-center rounded-xl border bg-muted/20 text-sm font-semibold">
            BP
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Backroom Prints
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            Get a Quote
          </Link>
          {/* <a
            href="https://www.instagram.com/backroomprints/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-lg border transition hover:bg-muted/40"
            aria-label="Backroom Prints on Instagram"
            title="Instagram"
          >
            <Instagram className="size-4" />
          </a> */}
          <ThemeToggle />
        </nav>

        {/* Mobile nav (simple) */}
        <details className="relative md:hidden">
          <summary className="inline-flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border transition hover:bg-muted/40">
            <Menu className="size-4" />
          </summary>

          <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border bg-background shadow-sm">
            <div className="p-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/40 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/eight/contact"
                className="mt-2 block rounded-lg bg-foreground px-3 py-2 text-center text-sm font-medium text-background transition hover:opacity-90"
              >
                Get a Quote
              </Link>
              <a
                href="https://www.instagram.com/backroomprints/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted/40 hover:text-foreground"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
