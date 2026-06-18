import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Roles } from "./components/Roles";
import { About } from "./components/About";
import { FeaturedResearch } from "./components/FeaturedResearch";
import { Research } from "./components/Research";
import { Projects } from "./components/Projects";
import { Training } from "./components/Training";
import { Community } from "./components/Community";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { profile } from "@/src/data/profile";
import { research } from "@/src/data/research";
import { projects } from "@/src/data/projects";
import { training } from "@/src/data/training";
import { community } from "@/src/data/community";

export default function Home() {
  return (
    <>
      <Navbar navLinks={profile.navLinks} siteName={profile.en.name} />
      <main>
        <Hero profile={profile} />
        <Roles th={profile.th} en={profile.en} />
        <About th={profile.th} en={profile.en} skills={profile.skills} />
        <FeaturedResearch research={research} />
        <Research research={research} />
        <Projects projects={projects} />
        <Training training={training} />
        <Community community={community} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
