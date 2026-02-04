import { Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-muted/30 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              Pricing & Minimums
            </h2>
            <p className="text-lg text-muted-foreground">
              Transparent pricing. No hidden fees.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border bg-card p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    General Guidelines
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-accent">•</span>
                      <span>
                        Minimums depend on print complexity and garment type
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-accent">•</span>
                      <span>Bulk discounts available for larger runs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-accent">•</span>
                      <span>Rush options when possible (ask us)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-accent/30 bg-accent/10 p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-accent/20 p-3">
                  <Lightbulb className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    Not sure? Send the idea.
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {
                      "We'll guide you through options, recommend garments, and help clean up artwork if needed."
                    }
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
