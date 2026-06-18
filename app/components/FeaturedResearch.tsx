import type { Research } from "@/src/data/research";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, BilingualTitle, SectionHeading } from "./Locale";

interface FeaturedResearchProps {
  research: Research;
}

export function FeaturedResearch({ research }: FeaturedResearchProps) {
  const { th, en } = research;

  return (
    <section id="featured-research" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.featuredSection} en={en.featuredSection} />
        </AnimateIn>

        <div className="space-y-6">
          {th.featured.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 120}>
              <article className="rounded-2xl border border-card-border bg-card p-8 sm:p-10">
                <div className="mb-4 font-mono text-sm font-semibold text-accent-muted">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <BilingualTitle th={item.title} en={en.featured[index].title} as="h3" size="card" />
                <BilingualText
                  th={item.summary}
                  en={en.featured[index].summary}
                  className="mt-4 max-w-3xl"
                />
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
