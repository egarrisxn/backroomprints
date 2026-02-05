import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <section
      id="intro"
      className="flex min-h-120 flex-col items-center justify-center gap-12 bg-background px-4 py-12 text-center text-foreground"
    >
      <h2 className="text-lg xl:text-2xl">
        From concert posters and ﬁne art prints to custom t-shirts and apparel,
        <br />
        Industry stays true to the hand pressed aesthetic of screen printing.
      </h2>
      <hr className="h-0.5 w-80 bg-foreground" />
      <Button size="lg" variant="outline" className="h-14 text-xl uppercase">
        Get to know us
      </Button>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />
    </section>
  );
}
