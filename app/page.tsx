import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="dimension-bg" aria-hidden />
      <div className="dimension-grid" aria-hidden />
      <main id="main">
        <Hero />
        <Work />
        <Approach />
        <Experience />
        <Skills />
        <Achievements />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
