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

import {
  personalInfo,
  primaryRoles,
  socialLinks,
  navLinks,
  aboutSection,
  aboutContent,
  skills,
  contactSection,
  contactContent,
  footerContent,
} from "@/src/data/profile";
import {
  featuredResearchSection,
  featuredResearch,
  researchSection,
  researchInterests,
} from "@/src/data/research";
import { projectsSection, projects } from "@/src/data/projects";
import { trainingSection, trainingTopics } from "@/src/data/training";
import { communitySection, communityWork } from "@/src/data/community";

export default function Home() {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <main>
        <Hero personalInfo={personalInfo} />
        <Roles roles={primaryRoles} />
        <About
          section={aboutSection}
          content={aboutContent}
          personalInfo={personalInfo}
          skills={skills}
        />
        <FeaturedResearch section={featuredResearchSection} items={featuredResearch} />
        <Research section={researchSection} interests={researchInterests} />
        <Projects section={projectsSection} projects={projects} />
        <Training section={trainingSection} topics={trainingTopics} />
        <Community section={communitySection} work={communityWork} />
        <Contact
          section={contactSection}
          content={contactContent}
          personalInfo={personalInfo}
        />
      </main>
      <Footer
        personalInfo={personalInfo}
        socialLinks={socialLinks}
        rights={footerContent.rights}
      />
    </>
  );
}
