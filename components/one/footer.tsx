import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-1 text-lg font-bold">BACKROOM PRINTS</div>
            <p className="text-sm text-muted-foreground">
              {"Premium printing for creatives"}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/backroomprints"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026 Backroom Prints. Affiliated with Backroom Productions OKC.
          </p>
        </div>
      </div>
    </footer>
  );
}
