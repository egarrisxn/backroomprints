"use client";

import type { HeroBgVariant } from "@/lib/types/four";

export function HeroBgToggle({
  value,
  onChange,
}: {
  value: HeroBgVariant;
  onChange: (v: HeroBgVariant) => void;
}) {
  const opts: { key: HeroBgVariant; label: string }[] = [
    { key: "wire", label: "Wire" },
    { key: "block", label: "Block" },
    { key: "script", label: "Script" },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 rounded-lg border border-border bg-card p-3 shadow-lg">
      <div className="mb-2 text-xs text-muted-foreground">Hero Background</div>
      <div className="flex gap-2">
        {opts.map((o) => (
          <button
            key={o.key}
            onClick={() => onChange(o.key)}
            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              value === o.key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
