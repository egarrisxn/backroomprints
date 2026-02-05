"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  THREE_FEATURED_CATEGORIES,
  THREE_FEATURED_PROJECTS,
} from "@/lib/data/three";

export function Featured() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? THREE_FEATURED_PROJECTS
      : THREE_FEATURED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-primary-foreground/5 py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            FEATURED WORK
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            Recent Prints
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {THREE_FEATURED_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-6 py-2 text-sm font-bold tracking-wide uppercase transition-all ${
                activeFilter === category
                  ? "scale-105 bg-primary text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                  : "border border-primary-foreground/50 bg-white/5 text-gray-300 hover:border-primary/50 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-primary-foreground/50 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-60 transition-opacity group-hover:opacity-80`}
              />

              <div className="halftone absolute inset-0 opacity-40 transition-opacity group-hover:opacity-50" />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

              <div className="relative flex h-full transform flex-col justify-between p-6 transition-transform group-hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <Badge
                    variant="secondary"
                    className="border-white/30 bg-black/60 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                  <div className="rounded-lg border border-primary-foreground/50 bg-black/30 px-3 py-2 text-right backdrop-blur-sm">
                    <div className="mb-1 text-xs font-bold text-primary">
                      {project.inkColors}
                    </div>
                    <div className="text-xs font-medium text-gray-400">
                      {project.garment}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-primary-foreground/50 bg-black/30 p-4 backdrop-blur-sm transition-colors group-hover:border-primary/50">
                  <h3 className="font-display text-3xl tracking-wider text-white transition-colors group-hover:text-primary">
                    {project.name}
                  </h3>
                  <div className="mt-2 text-xs font-bold tracking-wide text-gray-400 uppercase">
                    View Project
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 border-2 border-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute top-0 right-0 size-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
