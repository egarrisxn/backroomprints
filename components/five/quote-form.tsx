"use client";

import type React from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PRODUCT_TYPES, PRINT_LOCATIONS } from "@/lib/data/five";

export function QuoteForm({ onSubmit }: { onSubmit: () => void }) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit();
  };

  return (
    <Card className="border-border bg-card p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" required placeholder="Your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="organization">Band / Brand / Organization</Label>
            <Input id="organization" placeholder="Organization name" />
          </div>

          {/* Product Type Select - Mapped from Data */}
          <div className="space-y-2">
            <Label htmlFor="product">Product Type *</Label>
            <select
              id="product"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              defaultValue=""
            >
              <option value="" disabled>
                Select product
              </option>
              {PRODUCT_TYPES.map((product) => (
                <option key={product.value} value={product.value}>
                  {product.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity *</Label>
            <Input id="quantity" type="number" required placeholder="50" />
          </div>

          {/* Print Locations Checkboxes - Mapped from Data */}
          <div className="space-y-2 md:col-span-2">
            <Label>Print Locations</Label>
            <div className="flex flex-wrap gap-4">
              {Object.entries(PRINT_LOCATIONS).map(([id, label]) => (
                <div key={id} className="flex items-center gap-2">
                  <Checkbox id={id} />
                  <Label htmlFor={id} className="font-normal">
                    {String(label)}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline</Label>
            <Input id="deadline" type="date" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Tell us about your project, color preferences, design ideas, etc."
              rows={4}
            />
          </div>

          {/* File Upload Section */}
          <div className="space-y-2 md:col-span-2">
            <Label>Artwork Upload</Label>
            <div className="flex h-24 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-input bg-muted/50 transition-colors hover:bg-muted">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Upload className="size-5" />
                <span className="text-sm">
                  Click to upload or drag and drop
                </span>
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-8 w-full bg-foreground text-background hover:bg-foreground/90"
        >
          Submit Quote Request
        </Button>
      </form>
    </Card>
  );
}
