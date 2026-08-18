import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Team from "@/sections/Team";
import Process from "@/sections/Process";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Team />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}