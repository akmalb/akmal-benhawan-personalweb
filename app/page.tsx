import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Research } from "./components/Research";
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
        <About />
        <Research />
        <Projects />
        <Training />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
