import { Card } from "@/components/ui/card";

export default function Featured() {
  return (
    <section id="work" className="py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Recent Projects
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {
              "Check out some of our recent work for local artists, musicians, and creative brands."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Band Merch Collection",
              category: "Custom Apparel",
              description:
                "Complete merchandise line for local band including t-shirts, hoodies, and limited edition prints.",
            },
            {
              title: "Album Release Campaign",
              category: "Promotional Materials",
              description:
                "Posters, flyers, and promotional materials for a successful album launch event.",
            },
            {
              title: "Artist Collaboration",
              category: "Art Prints",
              description:
                "Limited edition art prints series featuring work from OKC-based visual artists.",
            },
            {
              title: "Festival Merchandise",
              category: "Event Merch",
              description:
                "Full merchandise suite for multi-day music festival including apparel and accessories.",
            },
          ].map((project, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="relative aspect-4/3 overflow-hidden bg-secondary/50">
                <div className="absolute inset-0 flex items-center justify-center bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <span className="text-4xl font-bold text-muted-foreground/20">
                    {project.category.split(" ")[0].toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs tracking-wider text-muted-foreground uppercase">
                  {project.category}
                </div>
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
