import Link from "next/link";
import { NewsletterForm } from "./forms/newsletter-form";
// import { EmailButton } from "./buttons/email-button";
import { InstaButton } from "./buttons/insta-button";

export default function Footer() {
  return (
    <div className="z-50 mx-auto flex min-h-60 w-full max-w-screen bg-foreground text-background">
      <footer className="mx-auto flex w-full max-w-screen-2xl flex-row items-center justify-between p-4">
        <section className="flex flex-1 flex-col items-start justify-center gap-0.5">
          <p className="text-xs uppercase">Join our Mailing List</p>
          <NewsletterForm />
          {/* <EmailButton /> */}
        </section>
        <section className="flex flex-1 flex-col items-center justify-center gap-1.5 pt-1">
          <Link
            href="/"
            className="leading-none font-black -tracking-wider text-primary-foreground uppercase text-shadow-md text-shadow-primary/50 sm:text-lg lg:text-xl xl:text-2xl dark:text-shadow-background/80"
          >
            Backroom Prints
          </Link>
          <p className="pb-1.5 text-center text-sm font-semibold">
            Oklahoma Forever.
          </p>
          <p className="pt-1.5 text-center text-xs">
            © 2026 Backroom Prints
            <br />
            All Rights Reserved.
          </p>
        </section>
        <section className="flex flex-1 flex-col items-end justify-center">
          <InstaButton />
        </section>
      </footer>
    </div>
  );
}
