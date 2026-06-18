import { featuredResearch, sectionHeadings } from "../data/portfolio";
import { BilingualBody, BilingualHeading } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function FeaturedResearch() {
  return (
    <section id="featured-research" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label={sectionHeadings.featuredResearch.label}
            title={sectionHeadings.featuredResearch.title}
            description={sectionHeadings.featuredResearch.description}
          />
        </AnimateIn>

        <div className="space-y-6">
          {featuredResearch.map((item, index) => (
            <AnimateIn key={item.title.en} delay={index * 120}>
              <article className="group rounded-2xl border border-card-border bg-card p-8 transition-all duration-300 hover:border-accent-muted hover:shadow-lg sm:p-10">
                <div className="mb-4 font-mono text-sm font-semibold text-accent-muted">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <BilingualHeading text={item.title} as="h3" size="card" />
                <BilingualBody text={item.summary} className="mt-4 max-w-3xl" />
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
