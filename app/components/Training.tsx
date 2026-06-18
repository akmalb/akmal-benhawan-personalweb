import { trainings } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Training() {
  return (
    <section id="training" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Training & Workshops"
          title="Knowledge Sharing & Capacity Building"
          description="Delivering workshops and training programs to empower faculty, staff, and researchers with modern data and AI skills."
        />

        <div className="space-y-4">
          {trainings.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-4 rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent hover:shadow-sm sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="shrink-0">
                <span className="inline-block rounded-lg bg-accent-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {item.type}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
