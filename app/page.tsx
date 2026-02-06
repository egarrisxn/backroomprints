import Link from "next/link";
import { prototypes } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-5xl px-6 py-14">
        <header className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            Backroom Prints - Prototype Gallery
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
            Choose a prototype to preview
          </h1>
          <p className="max-w-2xl text-base text-pretty text-muted-foreground">
            Three different visual directions for the same single-page print
            shop site. Each prototype lives at{" "}
            <span className="font-mono">/one</span>,{" "}
            <span className="font-mono">/two</span>,{" "}
            <span className="font-mono">/three</span>,{" "}
            <span className="font-mono">/four</span>,{" "}
            <span className="font-mono">/five</span>,{" "}
            <span className="font-mono">/six</span>, <span>and</span>{" "}
            <span className="font-mono">/seven</span>,{" "}
          </p>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {prototypes.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold tracking-tight">
                      {p.title}
                    </h2>
                    <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {p.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.subtitle}
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background transition group-hover:opacity-90">
                  Open →
                </span>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-md bg-muted px-2 py-1 font-mono">
                  {p.href}
                </span>
                <span>•</span>
                <span>Single page</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
