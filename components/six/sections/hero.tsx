import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollDownButton } from "@/components/six/buttons/scroll-down-button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full overflow-hidden bg-black"
    >
      <Image
        className="absolute inset-0 hidden size-full object-cover opacity-50 lg:block"
        src="/transparent-background-0.png"
        alt=""
        aria-hidden="true"
        role="presentation"
        fill
        priority
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute z-10 flex size-full flex-col items-center justify-center gap-8 px-4 pb-20 text-center">
        <h1 className="text-4xl leading-none font-black -tracking-wider text-white uppercase text-shadow-md text-shadow-primary/50 sm:text-5xl lg:text-6xl 2xl:text-8xl dark:text-shadow-background/80">
          Fresh Prints Daily.
        </h1>
        <Button size="lg" variant="outline" className="h-14 text-xl uppercase">
          Get a Quote
        </Button>
      </div>
      <ScrollDownButton targetId="about-container" />
    </section>
  );
}
