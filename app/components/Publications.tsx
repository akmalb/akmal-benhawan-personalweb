import { publications } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Publications() {
  return (
    <section id="publications" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label="Publications"
            title="Scholarly Output"
            description="Selected publications, conference papers, and technical reports reflecting ongoing research contributions."
          />
        </AnimateIn>

        <div className="space-y-5">
          {publications.map((pub, index) => (
            <AnimateIn key={pub.title} delay={index * 80}>
              <article className="group rounded-xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent-muted hover:shadow-md sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md bg-accent-light px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    {pub.type}
                  </span>
                  <span className="font-mono text-sm text-muted">{pub.year}</span>
                </div>

                <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent sm:text-xl">
                  {pub.title}
                </h3>

                <p className="mt-2 text-sm text-muted">
                  <span className="font-medium text-foreground">{pub.authors}</span>
                  {" · "}
                  <em>{pub.venue}</em>
                </p>

                {pub.doi && (
                  <p className="mt-3 font-mono text-xs text-accent-muted">
                    DOI: {pub.doi}
                  </p>
                )}
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
