import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Best print quality we've had. Backroom handled our entire tour run with zero issues. Communication was fast and the prints held up through 30+ shows.",
    author: "Jake Morrison",
    role: "Vocalist, Dead End Youth",
  },
  {
    quote:
      "Needed 200 hoodies for a pop-up in 10 days. They made it happen. Quality was perfect and the team kept us updated the whole time.",
    author: "Sarah Chen",
    role: "Creative Director, OKC Collective",
  },
  {
    quote:
      "We run all our label merch through Backroom. Consistent quality, fast replies, and they actually understand what bands need.",
    author: "Marcus Wright",
    role: "Owner, Concrete Records",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            WHAT THEY SAY
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            All Over the World
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-primary/15 bg-primary/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-primary/30"
            >
              <div className="absolute top-6 left-6 opacity-20 transition-opacity group-hover:opacity-30">
                <Quote className="size-12 text-primary" />
              </div>

              <div className="relative">
                <p className="mb-6 leading-relaxed text-foreground/85 italic group-hover:text-foreground">
                  &apos;{testimonial.quote}&apos;
                </p>

                <div className="border-t border-primary-foreground/50 pt-6">
                  <div className="mb-1 font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground/90">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <div className="absolute right-0 bottom-0 size-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg border border-primary/50 bg-primary/70 p-6 backdrop-blur-sm">
            <p className="mb-4 text-lg font-semibold text-foreground">
              <span className="text-normal text-primary-foreground">
                Join 100+ bands, brands, and events
              </span>{" "}
              who trust Backroom Prints
            </p>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary" />
                <span>Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary" />
                <span>Quality prints</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-primary" />
                <span>Real communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
