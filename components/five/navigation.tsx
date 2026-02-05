"use client";

import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/data/five";

export function Navigation({ onNav }: { onNav: (id: string) => void }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-tight text-foreground">
          Backroom Prints
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="text-sm font-medium text-foreground transition-colors hover:text-accent"
              onClick={() => onNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="mailto:BackroomPrintsOKC@gmail.com">
            <Button
              size="sm"
              variant="outline"
              className="hidden bg-transparent md:inline-flex"
            >
              Email
            </Button>
          </a>

          <Button
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90"
            onClick={() => onNav("quote")}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
}
