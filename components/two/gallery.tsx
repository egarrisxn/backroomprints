"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TWO_GALLERY_FILTERS, TWO_GALLERY_PROJECTS } from "@/lib/data/two";

type ProjectType = (typeof TWO_GALLERY_FILTERS)[number]["value"];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects =
    activeFilter === "all"
      ? TWO_GALLERY_PROJECTS
      : TWO_GALLERY_PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <section id="work" className="relative bg-muted/30 py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              Recent Prints
            </h2>
            <p className="text-lg text-muted-foreground">
              Quality work for bands, brands, and events.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {TWO_GALLERY_FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="relative aspect-square overflow-hidden bg-linear-to-br from-muted via-muted/50 to-background">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 text-center">
                      <div className="text-6xl font-black tracking-tighter text-muted-foreground/20">
                        {project.name.split(" ")[0]}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvc3ZnPg==')] opacity-50" />
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      {project.inkColors}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.garment}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
