import Link from "next/link";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";
import { SocialButtons } from "./buttons/social-buttons";
import { ThemeButton } from "./buttons/theme-button";

export default function Navbar() {
  return (
    <div className="z-50 mx-auto flex w-full max-w-screen bg-foreground text-background">
      <nav className="mx-auto flex w-full max-w-screen-2xl flex-row items-center justify-between p-4">
        <section className="flex flex-1 items-center justify-start">
          <Link
            href="/"
            className="leading-none font-black -tracking-wider text-primary-foreground uppercase text-shadow-md text-shadow-primary/50 sm:text-lg lg:text-xl xl:text-2xl dark:text-shadow-background/80"
          >
            Backroom Prints
          </Link>
        </section>
        <section className="hidden flex-1 items-center justify-center lg:flex">
          <DesktopMenu />
        </section>
        <section className="flex flex-1 flex-row items-center justify-end">
          <div className="hidden flex-row items-center justify-center gap-4 lg:flex">
            <SocialButtons />
            <ThemeButton />
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <MobileMenu />
          </div>
        </section>
      </nav>
    </div>
  );
}
