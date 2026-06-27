import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Jobs from "@/components/Jobs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <Jobs />
      <WhyUs />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
