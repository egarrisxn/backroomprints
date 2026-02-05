"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/data";

export function DesktopMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--primary)" };

  return (
    <NavigationMenu className="flex" viewport={false}>
      <NavigationMenuList className="gap-2.5 uppercase xl:gap-5">
        {navLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            {link.external ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href={link.href} target="_blank" rel="noreferrer noopener">
                  {link.label}
                </a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href={link.href}
                  style={pathname === link.href ? activeStyle : {}}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
