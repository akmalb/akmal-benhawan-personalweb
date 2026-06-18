import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Institutional & Research Projects"
          description="Technology initiatives developed to support Yala Rajabhat University's digital ecosystem."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-xl border border-card-border bg-background p-8 transition-all hover:border-accent hover:shadow-lg"
            >
              <div className="absolute right-6 top-6 font-mono text-4xl font-bold text-accent/10 transition-colors group-hover:text-accent/20">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
