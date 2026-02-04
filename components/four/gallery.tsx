"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { GalleryItem } from "@/lib/four/types";

type Filter = "all" | "bands" | "brands" | "events" | "accessories";

export function Gallery({
  items,
  activeFilter,
  onFilterChange,
}: {
  items: GalleryItem[];
  activeFilter: Filter;
  onFilterChange: (f: Filter) => void;
}) {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Recent Prints</h2>
          <p className="mb-8 text-muted-foreground">Browse our latest work</p>

          <div className="flex flex-wrap justify-center gap-2">
            {(["all", "bands", "brands", "events", "accessories"] as const).map(
              (filter) => (
                <Button
                  key={filter}
                  size="sm"
                  variant={activeFilter === filter ? "default" : "outline"}
                  className="capitalize"
                  onClick={() => onFilterChange(filter)}
                >
                  {filter}
                </Button>
              )
            )}
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden transition-all duration-300 hover:border-primary/50">
                <div className="relative aspect-4/3 overflow-hidden bg-linear-to-br from-muted to-muted/50">
                  <div className="absolute inset-0 bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                    {item.title}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
