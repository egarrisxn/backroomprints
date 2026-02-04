import { Banner } from "@/components/three/banner";
import { Navigation } from "@/components/three/navigation";
import { Hero } from "@/components/three/hero";
import { Services } from "@/components/three/services";
import { Featured } from "@/components/three/featured";
import { Process } from "@/components/three/process";
import { Pricing } from "@/components/three/pricing";
import { Testimonials } from "@/components/three/testimonials";
import { Contact } from "@/components/three/contact";
import { FAQ } from "@/components/three/faq";
import { Footer } from "@/components/three/footer";
import { FloatingQuoteButton } from "@/components/three/floating-quote-button";

export default function ThreePage() {
  return (
    <div>
      <Banner />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Featured />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
