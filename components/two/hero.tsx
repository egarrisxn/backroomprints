"use client";

import { Shirt, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/*  texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h1 className="text-5xl leading-[0.95] font-black tracking-tighter text-balance md:text-7xl lg:text-8xl">
            Merch that hits.
            <br />
            <span className="text-accent">Prints that last.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            Premium screen printing for bands, labels, and brands. Quality ink.
            Fast turnaround. Clear communication every step.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-accent px-8 py-6 text-base font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_25px_rgba(255,100,50,0.4)]"
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              size="lg"
              variant="outline"
              className="border-2 px-8 py-6 text-base font-bold"
            >
              See Recent Prints
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <Shirt className="h-4 w-4" />
              Band / tour merch
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <Zap className="h-4 w-4" />
              Small & bulk runs
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              Fast communication
            </Badge>
          </div>
        </div>
      </div>

      {/* Distressed accent line */}
      <div className="absolute right-0 bottom-0 left-0 h-1 bg-accent/20" />
    </section>
  );
}
