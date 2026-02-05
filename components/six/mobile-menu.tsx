"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { HamburgerIcon } from "./icons/hamburger";
import { SocialButtons } from "./buttons/social-buttons";
import { ThemeButton } from "./buttons/theme-button";
import { navLinks } from "@/lib/data";

export function MobileMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--primary)" };
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="group text-text-foreground inline-flex size-7 cursor-pointer items-center justify-center transition-all">
          <HamburgerIcon />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="top"
        className="inset-0 mt-3.5 h-screen w-screen max-w-none rounded-none border-none bg-foreground p-6 text-background"
      >
        <div className="flex flex-col gap-4">
          <div className="pb-1">
            <SocialButtons />
          </div>
          {navLinks.map((link, index) => (
            <div key={index} className="w-full text-2xl font-semibold">
              {link.external ? (
                <a
                  href={link.href}
                  style={pathname === link.href ? activeStyle : {}}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block w-full transition-all hover:text-primary data-[active=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  style={pathname === link.href ? activeStyle : {}}
                  className="block w-full transition-all hover:text-primary data-[active=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-0.5">
            <ThemeButton />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
