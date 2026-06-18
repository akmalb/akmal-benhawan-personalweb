import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { FeaturedResearch } from "./components/FeaturedResearch";
import { Research } from "./components/Research";
import { Publications } from "./components/Publications";
import { Projects } from "./components/Projects";
import { Training } from "./components/Training";
import { Community } from "./components/Community";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <FeaturedResearch />
        <Research />
        <Publications />
        <Projects />
        <Training />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
