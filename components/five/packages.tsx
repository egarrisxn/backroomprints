import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Packages({
  packages,
}: {
  packages: {
    title: string;
    items: string[];
    featured?: boolean;
    variant?: "outline" | "default";
  }[];
}) {
  return (
    <section id="packages" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Packages
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={
                pkg.featured
                  ? "border-2 border-accent bg-card p-8 shadow-lg"
                  : "border-border bg-card p-8"
              }
            >
              <h3 className="mb-6 text-2xl font-bold text-foreground">
                {pkg.title}
              </h3>

              <ul className="space-y-3">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#quote">
                <Button
                  variant={pkg.variant === "outline" ? "outline" : "default"}
                  className={
                    pkg.variant === "outline"
                      ? "mt-8 w-full bg-transparent"
                      : "mt-8 w-full bg-foreground text-background hover:bg-foreground/90"
                  }
                >
                  Request Quote
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
