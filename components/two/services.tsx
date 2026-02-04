import { Shirt, Music, Building2, Calendar, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Shirt,
    title: "Screen Printing",
    description: "Tees, hoodies, long sleeves. Clean prints on quality blanks.",
  },
  {
    icon: Music,
    title: "Band / Tour Merch",
    description: "Drops, tours, releases. We get the deadlines.",
  },
  {
    icon: Building2,
    title: "Business / Brand Apparel",
    description: "Team gear, branded apparel. Small or bulk.",
  },
  {
    icon: Calendar,
    title: "Event Merch + Collabs",
    description: "One-off events, limited runs, special projects.",
  },
  {
    icon: Package,
    title: "Extras Available",
    description: "Stickers, buttons, small run accessories.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              What We Print
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From tour drops to brand apparel. We handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-accent/10 p-3 transition-colors group-hover:bg-accent/20">
                    <service.icon className="size-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
