import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Emergency from "@/components/Emergency";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import HuntsvilleSkyline from "@/components/HuntsvilleSkyline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Emergency />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <HuntsvilleSkyline />
      <Footer />
    </>
  );
}
