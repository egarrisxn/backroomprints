import { PROCESS_STEPS } from "@/lib/data/five";

export function Process() {
  return (
    <section className="border-b border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Process
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {PROCESS_STEPS.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-sm border-2 border-accent bg-background text-2xl font-bold text-accent">
                {s.n}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
