"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QUOTE_CHECKLIST } from "@/lib/five/data";

export function Hero({
  logoAccentSrc,
  onCta,
}: {
  logoAccentSrc: string;
  onCta: (id: string) => void;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background Accent Image */}
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-[0.03]">
        <Image
          src={logoAccentSrc || "/placeholder.svg"}
          alt=""
          fill
          className="object-contain object-right"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Hero Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl leading-tight font-bold tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
                Premium screen printing for bands & brands.
              </h1>
              <p className="text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
                Oklahoma City pickup + nationwide shipping. Durable prints,
                clean detail, quick communication.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 sm:w-auto"
                onClick={() => onCta("quote")}
              >
                Get a Quote
              </Button>
              <Button
                variant="link"
                size="lg"
                className="group w-full text-foreground sm:w-auto"
                onClick={() => onCta("work")}
              >
                View Work
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Affiliated with Backroom Productions OKC
            </p>
          </div>

          {/* Side Card with Checklist */}
          <div className="flex items-center justify-center lg:justify-end">
            <Card className="w-full max-w-md border-border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Fast Quote Checklist
              </h3>
              <ul className="space-y-4">
                {QUOTE_CHECKLIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full border border-accent">
                      <Check className="size-3 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
