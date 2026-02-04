import { Banner } from "@/components/two/banner";
import { Navigation } from "@/components/two/navigation";
import { Hero } from "@/components/two/hero";
import { Services } from "@/components/two/services";
import { Gallery } from "@/components/two/gallery";
import { Process } from "@/components/two/process";
import { Pricing } from "@/components/two/pricing";
import { Quote } from "@/components/two/quote";
import { FAQ } from "@/components/two/faq";
import { Footer } from "@/components/two/footer";

export default function TwoPage() {
  return (
    <div>
      <Banner />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <Pricing />
        <Quote />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
