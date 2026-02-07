import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Backroom Prints",
  description:
    "Privacy Policy for Backroom Prints (Oklahoma City). Learn what we collect and how we use it.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
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
          We keep this simple: we only collect information you choose to share
          with us so we can respond to your request and help you get merch made.
        </p>

        <h2>1. What we collect</h2>
        <p>
          When you contact us (through our form, email, phone, or Instagram),
          you may give us:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company/organization name (optional)</li>
          <li>
            Project details (quantities, sizes, deadlines, garment preferences,
            artwork notes, etc.)
          </li>
        </ul>
        <p>
          We do <strong>not</strong> intentionally collect sensitive personal
          information.
        </p>

        <h2>2. How we use your info</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Reply to your message and answer questions</li>
          <li>Provide estimates/quotes and coordinate order details</li>
          <li>Send proofs or request clarifications (artwork, sizing, etc.)</li>
          <li>Provide support before/after a job</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information.
        </p>

        <h2>3. Who we share it with</h2>
        <p>
          We only share information when it is necessary to run the business,
          for example:
        </p>
        <ul>
          <li>Email/SMS providers used to communicate with you</li>
          <li>
            Vendors or fulfillment partners (only if needed for your order, like
            shipping)
          </li>
        </ul>
        <p>We do not share your information with third-party marketers.</p>

        <h2>4. Cookies & analytics</h2>
        <p>
          Our site does not use advertising trackers or analytics cookies by
          default. If we ever add analytics or ad tracking in the future, we
          will update this policy and (if required) show a cookie consent
          prompt.
        </p>
        <p>
          Your browser may store strictly functional data (for example, basic
          site preferences). These do not identify you personally.
        </p>

        <h2>5. Data retention</h2>
        <p>
          We keep inquiry information as long as it is reasonably needed to
          respond, provide quotes, and maintain business records. If you want us
          to delete your inquiry details, contact us (see below) and we will do
          our best to honor the request unless we need to keep something for
          legal/accounting reasons.
        </p>

        <h2>6. Security</h2>
        <p>
          We take reasonable steps to protect the information you send us.
          However, no website or transmission method is 100% secure.
        </p>

        <h2>7. Your choices</h2>
        <p>You can ask us to:</p>
        <ul>
          <li>Share what information we have from you</li>
          <li>Correct your information</li>
          <li>Delete your information (where feasible)</li>
          <li>Stop contacting you</li>
        </ul>

        <h2>8. Underage privacy</h2>
        <p>
          Our website is not directed to children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2>9. Updates to this policy</h2>
        <p>
          If we change this Privacy Policy, we will update the “Last Updated”
          date at the top.
        </p>

        <h2>10. Contact us</h2>
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
          <strong>Heads up:</strong> This template is general info, not legal
          advice. If you want maximum protection, have a local attorney review
          it for Oklahoma.
        </p>
      </section>
    </main>
  );
}
