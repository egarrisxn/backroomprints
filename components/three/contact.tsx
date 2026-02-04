import { Quote } from "./quote";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            GET A QUOTE
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            We&apos;ll Respond as Soon as Possible
          </p>
        </div>

        <Quote />
      </div>
    </section>
  );
}
