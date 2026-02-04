"use client";

import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      className={`fixed right-6 bottom-6 z-40 border-2 border-primary/80 bg-primary/90 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary lg:hidden dark:text-white ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-20 scale-95 opacity-0"
      } hover:scale-105 hover:shadow-xl active:scale-95`}
      size="lg"
    >
      <MessageSquare className="mr-1 size-4.5 text-primary-foreground dark:text-white" />
      Quick Quote
    </Button>
  );
}
