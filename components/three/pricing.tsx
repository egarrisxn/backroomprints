import { Check } from "lucide-react";
import { THREE_PRICING_POINTS } from "@/lib/data/three";

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            PRICING
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            Simple and Transparent
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-foreground/5 bg-primary-foreground/95 p-8 backdrop-blur-sm md:p-12">
            <div className="space-y-6">
              {THREE_PRICING_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary p-1">
                    <Check className="size-4.5 text-primary-foreground" />
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-primary-foreground/50 pt-10">
              <div className="text-center">
                <p className="mb-3 font-display text-2xl tracking-wider text-foreground">
                  EVERY PROJECT IS UNIQUE
                </p>
                <p className="text-muted-foreground/90">
                  Quote requests get a response within 24 hours.
                  <br />
                  We&apos;ll walk you through options and pricing.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-foreground/5 bg-primary-foreground/95 p-6 text-center">
              <div className="mb-2 font-display text-3xl text-primary">12+</div>
              <div className="text-sm text-muted-foreground">
                Typical Minimum
              </div>
            </div>
            <div className="rounded-lg border border-foreground/5 bg-primary-foreground/95 p-6 text-center">
              <div className="mb-2 font-display text-3xl text-primary">
                7-10
              </div>
              <div className="text-sm text-muted-foreground">
                Days Standard Turnaround
              </div>
            </div>
            <div className="rounded-lg border border-foreground/5 bg-primary-foreground/95 p-6 text-center">
              <div className="mb-2 font-display text-3xl text-primary">
                24hr
              </div>
              <div className="text-sm text-muted-foreground">
                Quote Response Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
