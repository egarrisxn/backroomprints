import { Card } from "@/components/ui/card";
import { SERVICE_ITEMS } from "@/lib/five/data";

export function Services() {
  return (
    <section id="services" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICE_ITEMS.map((item) => (
            <Card
              key={item.title}
              className="border-border bg-card p-8 transition-all hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
