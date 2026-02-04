import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div>
            <h3 className="mb-2 text-2xl font-bold">Backroom Prints</h3>
            <p className="text-muted-foreground">
              Affiliated with Backroom Productions OKC
            </p>
          </div>

          <div className="space-y-2">
            <a
              href="mailto:BackroomPrintsOKC@gmail.com"
              className="inline-block text-primary hover:underline"
            >
              BackroomPrintsOKC@gmail.com
            </a>
            <div className="flex justify-center">
              <Button variant="ghost" size="icon">
                <Instagram className="size-5" />
              </Button>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              Oklahoma City • Local pickup + nationwide shipping
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
