import type { Research } from "@/src/data/research";
import { AnimateIn } from "./AnimateIn";
import { BilingualChip, BilingualText, BilingualTitle, SectionHeading } from "./Locale";

interface ResearchSectionProps {
  research: Research;
}

export function ResearchSection({ research }: ResearchSectionProps) {
  const { th, en } = research;

  return (
    <section id="research" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.featuredSection} en={en.featuredSection} />
        </AnimateIn>

        <div className="space-y-5">
          {th.featured.map((item, index) => (
            <AnimateIn key={item.title} delay={index * 100}>
              <article className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
                <div className="mb-3 font-mono text-xs font-semibold text-accent-muted">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <BilingualTitle th={item.title} en={en.featured[index].title} as="h3" size="card" />
                <BilingualText
                  th={item.summary}
                  en={en.featured[index].summary}
                  className="mt-3 max-w-3xl"
                />
                <div className="mt-5 flex flex-wrap gap-2 border-t border-card-border pt-5">
                  {item.methods.map((method) => (
                    <span
                      key={method}
                      className="rounded-md border border-card-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200}>
          <div className="mt-12 rounded-2xl border border-card-border bg-section-alt p-6 sm:p-8">
            <BilingualTitle
              th={th.interestsSection.title}
              en={en.interestsSection.title}
              as="h3"
              size="small"
              className="mb-1"
            />
            <p className="font-thai text-sm text-muted">{th.interestsSection.description}</p>
            <p className="mt-1 text-xs text-muted">{en.interestsSection.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {th.interests.map((item, index) => (
                <BilingualChip
                  key={item.title}
                  th={item.title}
                  en={en.interests[index].title}
                />
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
