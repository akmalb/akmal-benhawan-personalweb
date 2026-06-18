import type { Research } from "@/src/data/research";
import { AnimateIn } from "./AnimateIn";
import { BodyText, CardHeading, EnglishBlock, LocaleDivider, SectionHeading, ThaiBlock } from "./Locale";

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
                <ThaiBlock>
                  <div className="mb-4 font-mono text-sm font-semibold text-accent-muted">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <CardHeading thai as="h3">
                    {item.title}
                  </CardHeading>
                  <BodyText thai className="mt-4 max-w-3xl">
                    {item.summary}
                  </BodyText>
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
                </ThaiBlock>

                <LocaleDivider className="my-8" />

                <EnglishBlock>
                  <CardHeading as="h3">{en.featured[index].title}</CardHeading>
                  <BodyText muted className="mt-4 max-w-3xl">
                    {en.featured[index].summary}
                  </BodyText>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-card-border pt-6">
                    {en.featured[index].methods.map((method) => (
                      <span
                        key={method}
                        className="rounded-md border border-card-border bg-background px-3 py-1 text-xs font-medium text-muted"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </EnglishBlock>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
