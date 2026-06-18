import { trainings } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Training() {
  return (
    <section id="training" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label="Training & Workshops"
            title="Knowledge Sharing & Capacity Building"
            description="Delivering workshops and training programs to empower faculty, staff, and researchers with modern data and AI skills."
          />
        </AnimateIn>

        <div className="space-y-4">
          {trainings.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 80}>
              <article className="flex flex-col gap-4 rounded-2xl border border-card-border bg-card p-7 transition-all duration-300 hover:border-accent-muted hover:shadow-md sm:flex-row sm:items-start sm:gap-8 sm:p-8">
                <div className="shrink-0">
                  <span className="inline-block rounded-lg bg-accent-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                    {item.type}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="prose-academic mt-2.5 text-[0.9375rem]">{item.description}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
