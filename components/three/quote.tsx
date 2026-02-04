"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Instagram, Mail } from "lucide-react";

export function Quote() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    printType: "",
    quantity: "",
    printLocations: "",
    deadline: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      organization: "",
      printType: "",
      quantity: "",
      printLocations: "",
      deadline: "",
      notes: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-lg border border-primary/50 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-primary/20 p-4">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
        </div>

        <h3 className="mb-4 font-display text-4xl tracking-wider text-white">
          WE GOT IT
        </h3>

        <p className="mb-8 text-xl">
          We&apos;ll reply ASAP with a mockup and quote.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:prints@backroomokc.com"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
            <span>prints@backroomokc.com</span>
          </a>
          <span className="hidden text-gray-600 sm:block">|</span>
          <a
            href="https://instagram.com/backroomprints"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            <span>@backroomprints</span>
          </a>
        </div>

        <Button
          onClick={handleReset}
          variant="outline"
          className="border-white/20 hover:border-primary hover:text-primary"
        >
          Submit Another Quote
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="rounded-lg border border-foreground/5 bg-primary-foreground/95 p-8 backdrop-blur-sm md:p-12">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Name
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="focus:border-primary"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="organization" className="mb-2 block">
              Band / Brand / Organization
            </Label>
            <Input
              id="organization"
              required
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
              className="focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="printType" className="mb-2 block">
                What are you printing?
              </Label>
              <Select
                value={formData.printType}
                onValueChange={(value) =>
                  setFormData({ ...formData, printType: value })
                }
              >
                <SelectTrigger className="focus:border-primary">
                  <SelectValue placeholder="Select garment type" />
                </SelectTrigger>
                <SelectContent className="border-white/20 bg-black">
                  <SelectItem value="tees">Tees</SelectItem>
                  <SelectItem value="hoodies">Hoodies</SelectItem>
                  <SelectItem value="longsleeves">Long Sleeves</SelectItem>
                  <SelectItem value="tanks">Tanks</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="quantity" className="mb-2 block">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                required
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
                className="focus:border-primary"
                placeholder="e.g., 50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="printLocations" className="mb-2 block">
                Print Locations
              </Label>
              <Select
                value={formData.printLocations}
                onValueChange={(value) =>
                  setFormData({ ...formData, printLocations: value })
                }
              >
                <SelectTrigger className="focus:border-primary">
                  <SelectValue placeholder="Select locations" />
                </SelectTrigger>
                <SelectContent className="border-white/20 bg-black">
                  <SelectItem value="front">Front only</SelectItem>
                  <SelectItem value="back">Back only</SelectItem>
                  <SelectItem value="front-back">Front + Back</SelectItem>
                  <SelectItem value="sleeve">Sleeve</SelectItem>
                  <SelectItem value="multiple">Multiple locations</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="deadline" className="mb-2 block">
                Deadline
              </Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="focus:border-primary"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="notes" className="mb-2 block">
              Notes / Details
            </Label>
            <Textarea
              id="notes"
              rows={4}
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="resize-none focus:border-primary"
              placeholder="Tell us about your project. Include ink colors, art status, garment preferences, etc."
            />
          </div>

          <div className="pt-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Have artwork ready? Email it to{" "}
                <a
                  href="mailto:prints@backroomokc.com"
                  className="text-primary hover:underline"
                >
                  prints@backroomokc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary/90 py-6 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary hover:shadow-xl dark:text-white"
      >
        Submit Quote Request
      </Button>
    </form>
  );
}
