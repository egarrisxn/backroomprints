import Navigation from "@/components/one/navigation";
import Hero from "@/components/one/hero";
import Services from "@/components/one/services";
import Featured from "@/components/one/featured";
import Process from "@/components/one/process";
import Affiliation from "@/components/one/affiliation";
import Contact from "@/components/one/contact";
import Footer from "@/components/one/footer";

export default function OnePage() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Featured />
        <Process />
        <Affiliation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
