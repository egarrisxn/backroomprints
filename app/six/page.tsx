import Navbar from "@/components/six/navbar";
import Hero from "@/components/six/sections/hero";
import Intro from "@/components/six/sections/intro";
import Social from "@/components/six/sections/social";
import Footer from "@/components/six/footer";

export default function SixPage() {
  return (
    <div className="grid min-h-screen max-w-[100vw] grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
