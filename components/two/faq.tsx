import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's your minimum order?",
    answer:
      "Minimums vary based on print complexity and garment type. Typically we can work with runs as small as 12-24 pieces. Contact us with your project details for specific minimums.",
  },
  {
    question: "What's the turnaround time?",
    answer:
      "Standard turnaround is 10-14 business days from approved artwork. Rush options available depending on our schedule and print complexity. Tour deadlines? Let us know upfront.",
  },
  {
    question: "Can you help clean up artwork?",
    answer:
      "Yes. We can make basic adjustments, convert artwork to print-ready files, and suggest improvements. Complex design work may require additional fees, but we'll always let you know upfront.",
  },
  {
    question: "What garments do you recommend?",
    answer:
      "We work with quality blanks from brands like Gildan Heavy Cotton, Comfort Colors, Independent Trading Co., and premium options. We'll recommend the best fit for your budget and aesthetic.",
  },
  {
    question: "Local pickup vs shipping?",
    answer:
      "Based in Oklahoma City - local pickup is free. We also ship nationwide. Shipping costs depend on quantity and destination. We'll include shipping estimates in your quote.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-[0.015]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions answered.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-md border border-border bg-card px-6 transition-colors data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="py-5 text-left font-bold text-foreground transition-colors hover:text-accent hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
