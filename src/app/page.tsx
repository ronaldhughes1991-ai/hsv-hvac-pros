import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Emergency from "@/components/Emergency";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RocketAnimation from "@/components/RocketAnimation";
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
        <Contact />
      </main>
      <HuntsvilleSkyline />
      <Footer />
      <RocketAnimation />
    </>
  );
}
