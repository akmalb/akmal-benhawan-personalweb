import Image from "next/image";
import { projects } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label="Projects"
            title="Digital Systems & Platforms"
            description="Technology initiatives developed to support Yala Rajabhat University's digital ecosystem."
          />
        </AnimateIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <AnimateIn key={project.name} delay={index * 100}>
              <article className="group overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:border-accent-muted hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-card-border bg-background">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-bold text-foreground">{project.name}</h3>
                    <span className="shrink-0 font-mono text-sm font-semibold text-accent/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="prose-academic mt-3 text-[0.9375rem]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
