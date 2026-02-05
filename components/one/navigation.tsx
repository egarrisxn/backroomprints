import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Backroom Prints Logo"
              width={40}
              height={40}
            />
            <div className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
              BACKROOM PRINTS
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#services"
              className="text-foreground transition-colors hover:text-accent"
            >
              Services
            </a>
            <a
              href="#work"
              className="text-foreground transition-colors hover:text-accent"
            >
              Our Work
            </a>
            <a
              href="#process"
              className="text-foreground transition-colors hover:text-accent"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-foreground transition-colors hover:text-accent"
            >
              Contact
            </a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
