import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ONE_NAV_LINKS } from "@/lib/data/one";

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
            {ONE_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
