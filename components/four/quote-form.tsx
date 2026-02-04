"use client";

import type React from "react";
import { Check, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function QuoteForm({
  formSubmitted,
  onSubmit,
}: {
  formSubmitted: boolean;
  onSubmit: () => void; // <-- no longer passing the raw event up
}) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit();
  };
  return (
    <section id="quote" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Get a Quote</h2>
            <p className="text-muted-foreground">
              Fill out the form and we will get back to you soon
            </p>
          </div>

          {formSubmitted ? (
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-8 text-primary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Request Received!</h3>
                <p className="mb-4 text-muted-foreground">
                  Thank you for your quote request. We will reach out to you
                  shortly.
                </p>
                <p className="text-sm">
                  Questions? Email us at{" "}
                  <a
                    href="mailto:BackroomPrintsOKC@gmail.com"
                    className="text-primary hover:underline"
                  >
                    BackroomPrintsOKC@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">
                      Band / Brand / Organization *
                    </Label>
                    <Input id="organization" required />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="product">Product *</Label>
                      <Select required>
                        <SelectTrigger id="product">
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tee">T-Shirts</SelectItem>
                          <SelectItem value="hoodie">Hoodies</SelectItem>
                          <SelectItem value="longsleeve">
                            Long Sleeves
                          </SelectItem>
                          <SelectItem value="stickers">Stickers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity *</Label>
                      <Input id="quantity" type="number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Print Locations *</Label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="front" />
                        <label htmlFor="front" className="text-sm">
                          Front
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="back" />
                        <label htmlFor="back" className="text-sm">
                          Back
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sleeve" />
                        <label htmlFor="sleeve" className="text-sm">
                          Sleeve
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input id="deadline" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      rows={4}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Artwork Files (optional)</Label>
                    <div className="cursor-pointer rounded-lg border-2 border-dashed border-border p-8 text-center transition-colors hover:border-primary/50">
                      <Upload className="mx-auto mb-2 size-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag files here or click to upload
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        AI, PDF, PNG, or JPG
                      </p>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
