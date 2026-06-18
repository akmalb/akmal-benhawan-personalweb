import { featuredResearch } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function FeaturedResearch() {
  return (
    <section id="featured-research" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label="Featured Research"
            title="Selected Research Focus"
            description="Core research initiatives at the intersection of data science, spatial analytics, and institutional digital transformation."
          />
        </AnimateIn>

        <div className="space-y-6">
          {featuredResearch.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 120}>
              <article className="group rounded-2xl border border-card-border bg-card p-8 transition-all duration-300 hover:border-accent-muted hover:shadow-lg sm:p-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold text-accent-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full bg-accent-light px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="prose-academic mt-4 max-w-3xl">{item.summary}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-card-border pt-6">
                  {item.methods.map((method) => (
                    <span
                      key={method}
                      className="rounded-md border border-card-border bg-background px-3 py-1 text-xs font-medium text-muted"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
