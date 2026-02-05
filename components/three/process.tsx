import { THREE_PROCESS_STEPS } from "@/lib/data/three";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            THE PROCESS
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            Four Simple Steps
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {THREE_PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl" />
                    <div className="relative flex size-20 items-center justify-center rounded-full border-2 border-primary/50 bg-linear-to-br from-primary/20 to-primary/10">
                      <Icon className="size-8 text-primary" />
                    </div>
                  </div>

                  <div className="mb-2 font-display text-5xl text-primary/30">
                    {step.number}
                  </div>

                  <h3 className="mb-3 font-display text-2xl tracking-wider text-muted-foreground">
                    {step.title}
                  </h3>

                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground/90">
                    {step.description}
                  </p>
                </div>

                {index < THREE_PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-10 left-[60%] hidden h-0.5 w-[80%] bg-linear-to-r from-primary/50 to-transparent lg:block" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-lg border border-primary/30 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground/80">
              Not sure where to start?{" "}
              <span className="font-semibold text-primary">
                Send the idea - we&apos;ll guide you.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
