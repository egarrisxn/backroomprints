import { QuoteSuccess } from "./quote-success";
import { QuoteForm } from "./quote-form";

export function Quote({
  formSubmitted,
  onSubmit,
}: {
  formSubmitted: boolean;
  onSubmit: () => void;
}) {
  return (
    <section id="quote" className="border-b border-border py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Get a Quote
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Fill out the form below and we will get back to you ASAP.
        </p>

        {formSubmitted ? <QuoteSuccess /> : <QuoteForm onSubmit={onSubmit} />}
      </div>
    </section>
  );
}
