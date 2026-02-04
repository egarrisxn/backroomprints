"use client";

import { useState } from "react";
import { Instagram, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

        <div className="relative z-10 container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-accent/30 bg-accent/10 p-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              We got it.
            </h3>
            <p className="mb-8 text-lg text-muted-foreground">
              {"We'll reply ASAP with next steps and pricing."}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:prints@backroomokc.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5" />
                <span>prints@backroomokc.com</span>
              </a>
              <a
                href="https://instagram.com/backroomprints"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
                <span>@backroomprints</span>
              </a>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              Get a Quote
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project. {"We'll"} get back to you fast.
            </p>
          </div>

          <Card className="border-border bg-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input id="name" required className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="org" className="text-foreground">
                  Band / Brand / Organization
                </Label>
                <Input id="org" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="printType" className="text-foreground">
                  What are you printing?
                </Label>
                <Select>
                  <SelectTrigger id="printType" className="bg-background">
                    <SelectValue placeholder="Select garment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tees">Tees</SelectItem>
                    <SelectItem value="hoodies">Hoodies</SelectItem>
                    <SelectItem value="longsleeves">Long sleeves</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-foreground">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="e.g., 50"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="locations" className="text-foreground">
                    Print locations
                  </Label>
                  <Select>
                    <SelectTrigger id="locations" className="bg-background">
                      <SelectValue placeholder="Front / Back / Sleeve" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="front">Front only</SelectItem>
                      <SelectItem value="back">Back only</SelectItem>
                      <SelectItem value="front-back">Front + Back</SelectItem>
                      <SelectItem value="front-back-sleeve">
                        Front + Back + Sleeve
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className="text-foreground">
                  Deadline (if any)
                </Label>
                <Input id="deadline" type="date" className="bg-background" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground">
                  Notes / Details
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about your project, artwork status, color preferences, etc."
                  rows={5}
                  className="resize-none bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file" className="text-foreground">
                  Artwork (optional)
                </Label>
                <div className="cursor-pointer rounded-md border-2 border-dashed border-border bg-background p-8 text-center transition-colors hover:border-accent/50">
                  <Input id="file" type="file" className="hidden" />
                  <label htmlFor="file" className="cursor-pointer">
                    <p className="text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      PDF, PNG, AI, PSD (max 10MB)
                    </p>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent py-6 text-base font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_25px_rgba(255,100,50,0.4)]"
              >
                Submit Quote Request
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Questions? Email us at{" "}
                <a
                  href="mailto:prints@backroomokc.com"
                  className="text-accent hover:underline"
                >
                  prints@backroomokc.com
                </a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
