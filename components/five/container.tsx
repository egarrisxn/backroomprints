"use client";

import { useMemo, useState } from "react";
import { Navigation } from "./navigation";
import { Hero } from "./hero";
import { Services } from "./services";
import { Work } from "./work";
import { Packages } from "./packages";
import { Process } from "./process";
import { Quote } from "./quote";
import { Faq } from "./faq";
import { Footer } from "./footer";
import type { WorkProject, PackageTier } from "@/lib/five/types";

const LOGO_ACCENT_SRC = "/transparent-background-0.png";

export default function Container() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuoteSubmit = () => {
    setFormSubmitted(true);
    window.setTimeout(() => setFormSubmitted(false), 5000);
  };

  const workProjects: WorkProject[] = useMemo(
    () => [
      { name: "Band Tour Tees", tags: ["2-color", "T-shirt", "Front+Back"] },
      { name: "Local Brewery", tags: ["1-color", "Hoodie", "Chest"] },
      { name: "Festival 2024", tags: ["3-color", "T-shirt", "All-over"] },
      { name: "Coffee Shop Crew", tags: ["1-color", "T-shirt", "Front"] },
      { name: "Punk Show Series", tags: ["2-color", "Hoodie", "Back"] },
      { name: "Skateboard Co.", tags: ["2-color", "T-shirt", "Front+Back"] },
    ],
    []
  );

  const packages: PackageTier[] = useMemo(
    () => [
      {
        title: "Starter Run",
        items: [
          "25-50 pieces minimum",
          "1-2 color prints",
          "Digital proof included",
          "Standard turnaround",
          "Local pickup or shipping",
        ],
        variant: "outline",
      },
      {
        title: "Drop Ready",
        items: [
          "50-150 pieces",
          "Up to 4 colors",
          "Multiple locations",
          "Priority turnaround",
          "Artwork assistance",
          "Free shipping options",
        ],
        featured: true,
        variant: "default",
      },
      {
        title: "Tour Pack",
        items: [
          "150+ pieces",
          "Unlimited colors",
          "Multiple garment types",
          "Rush available",
          "Full design support",
          "Bulk pricing",
        ],
        variant: "outline",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNav={scrollToSection} />

      <Hero logoAccentSrc={LOGO_ACCENT_SRC} onCta={scrollToSection} />

      <Services />

      <Work projects={workProjects} />

      <Packages packages={packages} />

      <Process />

      <Quote formSubmitted={formSubmitted} onSubmit={handleQuoteSubmit} />

      <Faq />

      <Footer />
    </div>
  );
}
