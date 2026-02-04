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
      "Minimums depend on the complexity of your print and garment type. Most runs start at 12-24 pieces. Rush orders or specialty prints may have different minimums. Send us your project details for an exact quote.",
  },
  {
    question: "What's the turnaround time?",
    answer:
      "Standard turnaround is 7-10 business days from proof approval. Rush options are available when our schedule allows. Tour or event deadlines? Let us know ASAP and we'll do everything we can to make it work.",
  },
  {
    question: "Can you help clean up artwork?",
    answer:
      "Yes. We can convert low-res images to print-ready files, rebuild logos, and make adjustments. Complex design work may have an art fee. We'll let you know upfront if any cleanup is needed.",
  },
  {
    question: "What garments do you recommend?",
    answer:
      "We work with quality blanks from Gildan, Comfort Colors, Bella+Canvas, and more. We'll recommend garments based on your budget, style, and print. Need something specific? We can source it.",
  },
  {
    question: "Local pickup vs shipping?",
    answer:
      "Local pickup is free in Oklahoma City. We ship nationwide via USPS or UPS. Shipping costs depend on order size and destination. We'll include shipping estimates in your quote.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "We focus on printing, but we can recommend local designers and artists who specialize in merch graphics. Have an idea but no art? Let us know and we'll point you in the right direction.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl">
            FAQ
          </h2>
          <p className="text-xl font-medium text-muted-foreground/90">
            Common Questions
          </p>
        </div>

        <div className="rounded-lg border border-primary-foreground/50 bg-white/5 backdrop-blur-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-primary-foreground/50 last:border-0"
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:text-primary hover:no-underline">
                  <span className="text-lg font-semibold text-foreground/90">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-text-muted-foreground/90 px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 rounded-lg border border-primary-foreground/50 bg-white/5 p-6 text-center backdrop-blur-sm">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:prints@backroomokc.com"
              className="font-semibold text-primary hover:underline"
            >
              Email us
            </a>{" "}
            or{" "}
            <a
              href="https://instagram.com/backroomprints"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              DM on Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
