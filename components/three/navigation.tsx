"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) => link.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/10 bg-background/80 backdrop-blur-md dark:border-primary-foreground/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="font-display text-2xl tracking-wider">
            BACKROOM PRINTS
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`group relative text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-foreground/90 hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary transition-transform ${
                    activeSection === link.href.slice(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary/90 font-semibold text-primary-foreground transition-all hover:bg-primary hover:shadow-xl dark:text-white"
            >
              Get a Quote
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="border-black/10 bg-background dark:border-primary-foreground/50"
            >
              <div className="sr-only">
                <SheetTitle>Mobile navigation</SheetTitle>
                <SheetDescription>
                  Links to sections on this page.
                </SheetDescription>
              </div>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`py-0.5 pl-2 text-left text-lg font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "text-primary"
                        : "text-foreground/90 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full rounded-none bg-primary font-bold text-primary-foreground hover:bg-primary/90"
                >
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
