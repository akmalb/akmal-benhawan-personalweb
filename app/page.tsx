import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Roles } from "./components/Roles";
import { About } from "./components/About";
import { ResearchSection } from "./components/ResearchSection";
import { Publications } from "./components/Publications";
import { Projects } from "./components/Projects";
import { Training } from "./components/Training";
import { Community } from "./components/Community";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { profile } from "@/src/data/profile";
import { research } from "@/src/data/research";
import { publications } from "@/src/data/publications";
import { projects } from "@/src/data/projects";
import { training } from "@/src/data/training";
import { community } from "@/src/data/community";
import { contact } from "@/src/data/contact";

export default function Home() {
  return (
    <>
      <Navbar navLinks={profile.navLinks} siteName={profile.en.name} />
      <main>
        <Hero profile={profile} />
        <Roles th={profile.th} en={profile.en} />
        <About th={profile.th} en={profile.en} skills={profile.skills} />
        <ResearchSection research={research} />
        <Publications publications={publications} />
        <Projects projects={projects} />
        <Training training={training} />
        <Community community={community} />
        <Contact contact={contact} profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
