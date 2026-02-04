"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary-foreground/40"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-32 text-center sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold tracking-wider text-primary uppercase backdrop-blur-sm">
            <p>Backroom Prints | 2026</p>
          </div>

          <h1 className="font-display text-6xl leading-none tracking-wider sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              MERCH THAT HITS.
            </span>
            <span className="text-glow-strong block text-primary drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              PRINTS THAT LAST.
            </span>
          </h1>

          <div className="from-primary/transparent mx-auto h-1 w-24 bg-linear-to-r via-primary to-transparent" />

          <p className="mx-auto max-w-3xl text-xl leading-relaxed font-medium text-foreground/95 sm:text-2xl">
            Quality screen printing. Fast communication. No compromises.
            <br />
            <span className="text-foreground/85">
              Built for bands, brands, and events that demand the best.
            </span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="group relative overflow-hidden bg-primary/90 px-9 py-7 text-lg font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary hover:shadow-xl dark:text-white"
            >
              <span className="relative z-10 flex items-center">
                Get a Quote
                <ArrowRight className="ml-1.5 size-5" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 px-9 py-7 text-lg font-medium text-primary/90 backdrop-blur-sm transition-all hover:border-primary hover:bg-transparent hover:text-primary"
            >
              See Recent Work
            </Button>
          </div>

          <div className="pt-16">
            <div className="inline-flex items-center gap-2 text-sm text-foreground">
              <div className="size-2 animate-pulse rounded-full bg-green-500" />
              <span className="font-medium">
                Based in Oklahoma City | Local pickup + Nationwide shipping
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 h-32 bg-linear-to-t from-foreground/5 via-foreground/5 to-transparent" />
    </section>
  );
}
