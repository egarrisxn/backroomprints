"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavigationWithBanner() {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [bannerHidden, setBannerHidden] = useState(false);

  useEffect(() => {
    if (!bannerRef.current) return;

    const el = bannerRef.current;

    const io = new IntersectionObserver(
      ([entry]) => {
        setBannerHidden(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.01,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="h-10 w-full border-b bg-background/80 backdrop-blur"
      >
        <div className="mx-auto flex h-full max-w-6xl items-center px-4 text-sm">
          Update: Simpler pricing with 6 new templates…
        </div>
      </div>

      <header
        className={[
          "sticky z-50 w-full scroll-smooth border-b bg-background/80 backdrop-blur transition-[top] duration-300",
          bannerHidden ? "top-0" : "top-10",
        ].join(" ")}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <div className="flex items-center gap-2">
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
    </>
  );
}
