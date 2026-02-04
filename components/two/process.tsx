import { FileImage, CheckCircle2, Printer, Truck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileImage,
    title: "Send Details",
    description: "Art, garment type, quantity, and any deadlines.",
  },
  {
    number: "2",
    icon: CheckCircle2,
    title: "Approve Mockup",
    description: "Review the proof and get your quote.",
  },
  {
    number: "3",
    icon: Printer,
    title: "Print + QC",
    description: "We print and quality-check every piece.",
  },
  {
    number: "4",
    icon: Truck,
    title: "Pickup/Ship",
    description: "Local pickup in OKC or nationwide shipping.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple process. Fast turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-black text-accent-foreground">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
