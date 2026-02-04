import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <h3 className="mb-3 text-xl font-black tracking-tight text-foreground">
                BACKROOM PRINTS
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Affiliated with Backroom Productions OKC
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-foreground">Location</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Based in Oklahoma City
                <br />
                Local pickup + nationwide shipping
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-foreground">Contact</h4>
              <div className="space-y-2">
                <a
                  href="mailto:prints@backroomokc.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="size-4" />
                  prints@backroomokc.com
                </a>
                <a
                  href="https://instagram.com/backroomprints"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Instagram className="size-4" />
                  @backroomprints
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Backroom Prints. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
