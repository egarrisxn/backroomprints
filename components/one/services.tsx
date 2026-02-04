import { Card } from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="bg-muted/30 py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-5xl">
            What We Print
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {
              "Specialized in bringing your creative projects to life with premium quality materials and attention to detail."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Custom Merch",
              description:
                "T-shirts, hoodies, hats, and more. Perfect for bands, artists, and brands looking to create quality merchandise.",
            },
            {
              title: "Posters & Prints",
              description:
                "Concert posters, art prints, promotional materials. High-quality printing on premium paper stock.",
            },
            {
              title: "Album Artwork",
              description:
                "Vinyl covers, CD packaging, digital artwork printing. We understand the music industry's unique needs.",
            },
            {
              title: "Promotional Materials",
              description:
                "Flyers, business cards, stickers, and banners. Make your brand stand out with professional printing.",
            },
            {
              title: "Custom Projects",
              description:
                "Have something unique in mind? We love working on special projects and bringing creative ideas to life.",
            },
            {
              title: "Bulk Orders",
              description:
                "Volume discounts available for large orders. Perfect for tours, events, and product launches.",
            },
          ].map((service, index) => (
            <Card key={index} className="p-6 transition-shadow hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
