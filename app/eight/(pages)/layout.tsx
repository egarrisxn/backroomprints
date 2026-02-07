import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 flex items-center justify-start gap-4">
        <Link
          href="/eight"
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-muted/40"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>

      <div className="prose max-w-none prose-zinc dark:prose-invert">
        {children}
      </div>
    </main>
  );
}
