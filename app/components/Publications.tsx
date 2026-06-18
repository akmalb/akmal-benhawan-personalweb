import type { Publications } from "@/src/data/publications";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, BilingualTitle, SectionHeading } from "./Locale";

interface PublicationsProps {
  publications: Publications;
}

export function Publications({ publications }: PublicationsProps) {
  const { th, en } = publications;
  const hasItems = th.items.length > 0;

  return (
    <section id="publications" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <AnimateIn delay={100}>
          {hasItems ? (
            <div className="space-y-4">
              {th.items.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="rounded-xl border border-card-border bg-card p-6"
                >
                  <BilingualTitle
                    th={item.title}
                    en={en.items[index]?.title ?? item.title}
                    as="h3"
                    size="small"
                  />
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-card-border bg-card/50 px-6 py-10 text-center">
              <BilingualText th={th.placeholder} en={en.placeholder} />
            </div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
