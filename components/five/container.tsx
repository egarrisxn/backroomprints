"use client";

import { useState } from "react";
import { Navigation } from "./navigation";
import { Hero } from "./hero";
import { Services } from "./services";
import { Work } from "./work";
import { Packages } from "./packages";
import { Process } from "./process";
import { Quote } from "./quote";
import { Faq } from "./faq";
import { Footer } from "./footer";
import { PACKAGE_TIERS, WORK_PROJECTS } from "@/lib/data/five";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNav={scrollToSection} />

      <Hero logoAccentSrc={LOGO_ACCENT_SRC} onCta={scrollToSection} />

      <Services />

      <Work projects={WORK_PROJECTS} />

      <Packages packages={PACKAGE_TIERS} />

      <Process />

      <Quote formSubmitted={formSubmitted} onSubmit={handleQuoteSubmit} />

      <Faq />

      <Footer />
    </div>
  );
}
