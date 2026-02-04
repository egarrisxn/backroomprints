import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/15 pt-16 pb-8">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div>
            <h3 className="mb-2 font-display text-4xl tracking-wider text-foreground">
              BACKROOM PRINTS
            </h3>
            <p className="ont-medium text-sm text-muted-foreground/90">
              Affiliated with Backroom Productions OKC
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:prints@backroomokc.com"
              className="group flex items-center gap-2 text-muted-foreground/70 transition-colors hover:text-primary"
            >
              <div className="rounded-full bg-white/5 p-2 transition-colors group-hover:bg-primary/20">
                <Mail className="size-5" />
              </div>
              <span className="hidden sm:inline">prints@backroomokc.com</span>
            </a>

            <a
              href="https://instagram.com/backroomprints"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground/70 transition-colors hover:text-primary"
            >
              <div className="rounded-full bg-white/5 p-2 transition-colors group-hover:bg-primary/20">
                <Instagram className="size-5" />
              </div>
              <span className="hidden sm:inline">@backroomprints</span>
            </a>
          </div>

          <div className="text-sm text-gray-500">
            Oklahoma City • Pickup + Shipping
          </div>

          <div className="w-full border-t border-foreground/15 pt-8 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Backroom Prints. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
