import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export function QuoteSuccess() {
  return (
    <Card className="border-accent bg-card p-12 text-center">
      <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-accent/10">
        <Check className="size-8 text-accent" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-foreground">
        We got it - we will reply ASAP.
      </h3>
      <p className="text-muted-foreground">
        Contact:{" "}
        <a
          href="mailto:BackroomPrintsOKC@gmail.com"
          className="text-accent hover:underline"
        >
          BackroomPrintsOKC@gmail.com
        </a>
      </p>
    </Card>
  );
}
