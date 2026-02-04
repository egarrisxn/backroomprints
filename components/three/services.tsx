import {
  Shirt,
  Music,
  Briefcase,
  Calendar,
  Sticker,
  Circle,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Screen Printing",
    description: "Tees, hoodies, long sleeves. All garments.",
  },
  {
    icon: Music,
    title: "Band / Tour Merch",
    description: "Built for the road. Durable ink. Fast turnaround.",
  },
  {
    icon: Briefcase,
    title: "Business / Brand Apparel",
    description: "Professional quality. Your brand, done right.",
  },
  {
    icon: Calendar,
    title: "Event Merch + Collabs",
    description: "Limited drops. Festival gear. Special releases.",
  },
  {
    icon: Sticker,
    title: "Stickers",
    description: "Die-cut stickers. Small runs available.",
  },
  {
    icon: Circle,
    title: "Buttons",
    description: "1-inch buttons. Perfect add-ons for any run.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-foreground/40 py-32"
    >
      <div className="absolute top-0 right-0 left-0 z-10 h-32 bg-linear-to-b from-foreground/15 via-foreground/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            SERVICES
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            What We Offer
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative transform rounded-lg border border-primary-foreground/50 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <div className="relative rounded-lg bg-primary/10 p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon className="size-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 size-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
