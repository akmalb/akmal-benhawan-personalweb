import type { CommunityWork } from "@/src/data/community";
import type { Bilingual } from "@/src/data/types";
import { BilingualBody, BilingualHeading } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

interface CommunityProps {
  section: {
    label: Bilingual;
    title: Bilingual;
    description: Bilingual;
  };
  work: CommunityWork;
}

export function Community({ section, work }: CommunityProps) {
  return (
    <section id="community" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </AnimateIn>

        <AnimateIn delay={100}>
          <article className="rounded-2xl border border-card-border bg-card p-8 sm:p-10">
            <BilingualHeading text={work.organization} as="h3" size="card" />
            <BilingualBody text={work.role} className="mt-2 text-accent" />
            <BilingualBody text={work.description} className="mt-6 max-w-3xl" />

            <div className="mt-8 border-t border-card-border pt-8">
              <BilingualHeading
                text={work.contributionsHeading}
                as="h4"
                size="small"
                className="mb-5"
              />
              <ul className="grid gap-3 sm:grid-cols-2">
                {work.highlights.map((item) => (
                  <li
                    key={item.en}
                    className="flex items-start gap-3 rounded-lg border border-card-border bg-background px-4 py-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <BilingualBody text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </AnimateIn>
      </div>
    </section>
  );
}
