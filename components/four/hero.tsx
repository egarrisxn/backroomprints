"use client";

import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HeroBgVariant } from "@/lib/types/four";
import { HERO_BG_VARIANTS, HERO_ITEMS } from "@/lib/data/four";

type HeroProps = {
  heroBgVariant: HeroBgVariant;
  onCta: (id: string) => void;
};

export function Hero({ heroBgVariant, onCta }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-slate-50 bg-cover bg-center opacity-100 blur-none dark:bg-background dark:opacity-75 dark:blur-xs"
          style={{
            backgroundImage: `url(${HERO_BG_VARIANTS[heroBgVariant]})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 dark:bg-linear-to-b dark:from-background/95 dark:via-background/70 dark:to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge variant="secondary" className="mb-6">
            Affiliated with Backroom Productions OKC
          </Badge>

          <h1 className="mb-6 text-5xl leading-tight font-bold text-balance text-shadow-lg md:text-7xl">
            Premium merch printing for bands & brands.
          </h1>

          <p className="mb-8 text-xl text-pretty text-muted-foreground text-shadow-lg">
            Quality, durable prints with clear communication. OKC pickup +
            nationwide shipping.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => onCta("quote")}>
              Get a Quote <ArrowRight className="ml-2 size-4" />
            </Button>

            <Button size="lg" variant="outline" onClick={() => onCta("work")}>
              View Work
            </Button>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {HERO_ITEMS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="size-4 text-primary" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
