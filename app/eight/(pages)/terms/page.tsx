import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Backroom Prints",
  description:
    "Terms & Conditions for Backroom Prints (Oklahoma City). Site use, quotes, artwork, and policies.",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Terms & Conditions
        </h1>
        <p className="text-sm text-muted-foreground">
          Backroom Prints Oklahoma City, Oklahoma
          <br />
          <span className="font-medium">Last Updated:</span>{" "}
          <span className="italic">February 7, 2026</span>
        </p>
      </header>

      <section className="prose mt-10 max-w-none prose-zinc dark:prose-invert">
        <p>
          Thanks for stopping by Backroom Prints. By using this website, you
          agree to the terms below. If you do not agree, please do not use the
          site.
        </p>

        <h2>1. About this website</h2>
        <p>
          This site is here to share info about our screen printing and merch
          services and to help you reach us for quotes and questions. Content is
          provided “as is” and may change.
        </p>

        <h2>2. Acceptable use</h2>
        <ul>
          <li>Do not try to break, exploit, or overload the site.</li>
          <li>Do not scrape content or misuse contact forms.</li>
          <li>Do not upload or send harmful files or malware.</li>
        </ul>

        <h2>3. Quotes, pricing, and availability</h2>
        <p>
          Any pricing examples shown on the site are <strong>estimates</strong>{" "}
          for convenience and are not a binding offer. Final pricing depends on
          factors like garment type, print locations, ink colors, quantities,
          artwork readiness, and deadlines.
        </p>
        <p>
          We will confirm details and pricing in writing (email/message) before
          moving forward.
        </p>

        <h2>4. Artwork, rights, and responsibility</h2>
        <ul>
          <li>
            You must own the artwork you send us or have permission to use it.
          </li>
          <li>
            You agree not to submit copyrighted/trademarked content without
            authorization.
          </li>
          <li>
            If a third party claims your design violates their rights, you agree
            to handle that issue and hold Backroom Prints harmless.
          </li>
        </ul>

        <h2>5. Proofs & color expectations</h2>
        <p>
          We may provide digital proofs for approval. You are responsible for
          reviewing proofs carefully (spelling, placement, sizing, etc.).
        </p>
        <p>
          Colors can vary between screens and final prints due to garment
          material, ink, and process. We will do our best, but exact color
          matches are not guaranteed unless explicitly agreed in writing.
        </p>

        <h2>6. Turnaround times</h2>
        <p>
          We will always give you our best estimated turnaround. Unless we
          explicitly promise a deadline in writing, turnaround times are
          estimatesnot guarantees. Delays can happen due to:
        </p>
        <ul>
          <li>Garment/supply availability</li>
          <li>Artwork revisions or late approvals</li>
          <li>Shipping carrier delays</li>
          <li>Equipment issues or events outside our control</li>
        </ul>

        <h2>7. Cancellations & changes</h2>
        <p>
          If an order has started production (or materials have been purchased),
          cancellation may not be possible and may still be billable for work
          completed and costs incurred. Changes to an order (quantities, sizes,
          artwork) can affect pricing and timelines.
        </p>

        <h2>8. External links</h2>
        <p>
          We may link to third-party sites (like Instagram). We do not control
          those sites and are not responsible for their content or policies.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent allowed by law, Backroom Prints is not liable
          for indirect, incidental, special, or consequential damages related to
          your use of this site or our services. Our total liability for any
          claim related to an order will not exceed the amount paid for that
          order.
        </p>

        <h2>10. Oklahoma law</h2>
        <p>
          These Terms are governed by the laws of the State of Oklahoma, without
          regard to conflict-of-law principles. Any disputes will be handled in
          the appropriate state or federal courts located in or serving Oklahoma
          County, Oklahoma (unless we both agree otherwise).
        </p>

        <h2>11. Updates to these terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the site
          means you accept the updated terms.
        </p>

        <h2>12. Contact us</h2>
        <p>
          Backroom Prints (Oklahoma City)
          <br />
          Email:{" "}
          <a href="mailto:hello@backroomprints.com">hello@backroomprints.com</a>
          <br />
          Phone: <a href="tel:+14055550123">(405) 555-0123</a>
          <br />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/backroomprints/"
            target="_blank"
            rel="noreferrer"
          >
            @backroomprints
          </a>
        </p>

        <hr />

        <p className="text-sm">
          <strong>Replace these placeholders:</strong> update the email/phone
          above to the shops real contact info.
        </p>
      </section>
    </main>
  );
}
