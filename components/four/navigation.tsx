"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { NAV_ITEMS } from "@/lib/data/four";

export function Navigation({ onNav }: { onNav: (id: string) => void }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Backroom Prints
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => onNav(item.id)}
              >
                {item.label}
              </button>
            ))}

            <Button size="sm" onClick={() => onNav("quote")}>
              Get a Quote
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
