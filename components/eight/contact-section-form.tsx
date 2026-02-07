"use client";

export default function ContactSectionForm() {
  return (
    <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium">Name</label>
          <input
            className="w-full rounded-lg border px-3 py-2"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full rounded-lg border px-3 py-2"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Phone (optional)</label>
        <input
          className="w-full rounded-lg border px-3 py-2"
          placeholder="(405) 555-0123"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Message</label>
        <textarea
          className="min-h-37.5 w-full rounded-lg border px-3 py-2"
          placeholder="Tell us what you are making…"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-foreground px-4 py-2.5 font-medium text-background transition hover:opacity-90"
      >
        Send Message
      </button>

      <p className="text-xs text-muted-foreground">
        Tip: You can also reach us via{" "}
        <a
          className="underline underline-offset-4 hover:opacity-80"
          href="https://www.instagram.com/backroomprints/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        .
      </p>
    </form>
  );
}
