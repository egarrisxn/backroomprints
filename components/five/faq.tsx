import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/five/data";

export function Faq() {
  return (
    <section id="faq" className="border-b border-border bg-muted/30 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`item-${i}`}
              className="rounded-sm border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-muted/50 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <a
          href="mailto:BackroomPrintsOKC@gmail.com"
          className="inline-block text-2xl font-bold text-foreground transition-colors hover:text-accent md:text-3xl"
        >
          BackroomPrintsOKC@gmail.com
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Affiliated with Backroom Productions OKC
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Backroom Prints. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
