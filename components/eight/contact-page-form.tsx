"use client";

export default function ContactPageForm() {
  return (
    <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
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
        <label className="text-sm font-medium">Subject</label>
        <input
          className="w-full rounded-lg border px-3 py-2"
          placeholder="What are you looking to make?"
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Message</label>
        <textarea
          className="min-h-35 w-full rounded-lg border px-3 py-2"
          placeholder="Tell us about your project…"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-foreground px-4 py-2.5 font-medium text-background transition hover:opacity-90"
      >
        Send Message
      </button>

      <p className="text-xs text-muted-foreground">
        This form is not wired up yet. It is just the UI for now.
      </p>
    </form>
  );
}
