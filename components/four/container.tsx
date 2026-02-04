"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Navigation } from "./navigation";
import { HeroBgToggle } from "./hero-bg-toggle";
import { Hero } from "./hero";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Packages } from "./packages";
import { ProcessTimeline } from "./process";
import { QuoteForm } from "./quote-form";
import { Faq } from "./faq";
import { SiteFooter } from "./footer";
import type { HeroBgVariant } from "@/lib/four/types";
import { gallery as galleryData } from "@/lib/four/data";

export function Container() {
  const [heroBgVariant, setHeroBgVariant] = useState<HeroBgVariant>("wire");
  const [activeFilter, setActiveFilter] = useState<
    "all" | "bands" | "brands" | "events" | "accessories"
  >("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredGallery = useMemo(() => {
    if (activeFilter === "all") return galleryData;
    return galleryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleFormSubmit = () => {
    setFormSubmitted(true);

    toast.success("Quote Request Received!", {
      description: "We'll get back to you at BackroomPrintsOKC@gmail.com",
    });
  };

  return (
    <>
      <Navigation onNav={scrollToSection} />

      <HeroBgToggle value={heroBgVariant} onChange={setHeroBgVariant} />

      <Hero heroBgVariant={heroBgVariant} onCta={scrollToSection} />

      <Services />

      <Gallery
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        items={filteredGallery}
      />

      <Packages onCta={scrollToSection} />

      <ProcessTimeline />

      <QuoteForm formSubmitted={formSubmitted} onSubmit={handleFormSubmit} />

      <Faq />

      <SiteFooter />
    </>
  );
}
