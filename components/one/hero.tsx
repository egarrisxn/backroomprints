import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Premium Printing for Artists & Creatives
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-pretty text-muted-foreground md:text-xl">
            {
              "From custom merch to bold posters, we transform your creative vision into tangible reality. Quality printing backed by years of experience in the music and creative industries."
            }
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="text-base" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-base"
              asChild
            >
              <a href="#work">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
