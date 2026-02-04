export default function Process() {
  return (
    <section id="process" className="bg-muted/30 py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground">
            {
              "Simple, straightforward, and focused on bringing your vision to life."
            }
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              number: "1",
              title: "Consultation",
              description:
                "Share your vision with us. We'll discuss your project, timeline, and budget to ensure we're aligned.",
            },
            {
              number: "2",
              title: "Design & Proof",
              description:
                "We'll prepare mockups and samples for your approval. Revisions included to get it perfect.",
            },
            {
              number: "3",
              title: "Production",
              description:
                "Your project goes into production with quality checks at every step. Fast turnaround guaranteed.",
            },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
