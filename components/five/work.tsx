import { Card } from "@/components/ui/card";

export function Work({
  projects,
}: {
  projects: { name: string; tags: string[] }[];
}) {
  return (
    <section id="work" className="border-b border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Work
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card
              key={`${project.name}-${i}`}
              className="group cursor-pointer border-border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="mb-4 aspect-square w-full rounded bg-muted" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
                View details →
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
