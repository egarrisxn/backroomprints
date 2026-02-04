import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram } from "lucide-react";

export default function OneMBody() {
  return (
    <section id="contact" className="bg-muted/30 py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-5xl">
              {"Let's Work Together"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {
                "Ready to bring your project to life? Get in touch for a quote or to discuss your ideas."
              }
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Project Type
                </label>
                <Input
                  id="project"
                  placeholder="e.g., Band merch, posters, custom order"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={5}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Submit Request
              </Button>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-muted-foreground">
              {"Or reach out to us directly on Instagram"}
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.instagram.com/backroomprints"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="size-4" />
                @backroomprints
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
