import Image from "next/image";
import type { Projects } from "@/src/data/projects";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, SectionHeading } from "./Locale";

interface ProjectsProps {
  projects: Projects;
}

export function Projects({ projects }: ProjectsProps) {
  const { th, en, shared } = projects;

  return (
    <section id="projects" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {shared.map((project, index) => (
            <AnimateIn key={project.name} delay={index * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:border-accent-muted hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden bg-section-alt">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                  <BilingualText
                    th={th.items[index].description}
                    en={en.items[index].description}
                    className="mt-4 flex-1"
                  />
                  {(th.items[index].tags.length > 0 || en.items[index].tags.length > 0) && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-card-border pt-6">
                      {th.items[index].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-card-border bg-background px-3 py-1 text-xs font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                      {en.items[index].tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-card-border bg-background px-3 py-1 text-xs font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
