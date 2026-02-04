import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

export default function Affiliation() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="border-0 bg-secondary/30 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance md:text-4xl">
              Affiliated with Backroom Productions OKC
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              {
                "Born from our roots in music production, we understand the creative process and the importance of quality representation for your art."
              }
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.instagram.com/backroomproductionsokc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="size-4" />
                Follow Backroom Productions
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
