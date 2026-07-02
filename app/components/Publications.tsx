import type { PublicationItem, Publications } from "@/src/data/publications";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, SectionHeading } from "./Locale";

interface PublicationsProps {
  publications: Publications;
}

const VIEW_LINK_LABEL = {
  th: "ดูบทความ",
  en: "View paper",
} as const;

function sortByYearDesc(items: PublicationItem[]) {
  return [...items].sort((a, b) => Number(b.year) - Number(a.year));
}

export function Publications({ publications }: PublicationsProps) {
  const { th, en } = publications;
  const hasItems = th.items.length > 0;
  const thSection = { label: th.label, title: th.title, description: th.description };
  const enSection = { label: en.label, title: en.title, description: en.description };
  const sortedItems = sortByYearDesc(th.items);

  return (
    <section id="publications" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={thSection} en={enSection} />
        </AnimateIn>

        <AnimateIn delay={100}>
          {hasItems ? (
            <div className="space-y-4">
              {sortedItems.map((item) => (
                  <article
                    key={`${item.year}-${item.title}`}
                    className="rounded-xl border border-card-border bg-card p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm font-semibold tabular-nums text-accent">
                        {item.year}
                      </span>
                      <span className="rounded-md border border-card-border bg-background px-2.5 py-1 text-xs font-medium text-muted">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.authors}</p>

                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.venue}</p>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex flex-col rounded-lg border border-card-border bg-background px-4 py-2.5 transition-all hover:border-accent hover:text-accent"
                      >
                        <span className="font-thai text-sm font-semibold text-foreground">
                          {VIEW_LINK_LABEL.th}
                        </span>
                        <span className="text-[0.6875rem] text-muted">{VIEW_LINK_LABEL.en}</span>
                      </a>
                    )}
                  </article>
                ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-card-border bg-card/50 px-6 py-10 text-center">
              <BilingualText th={th.emptyText} en={en.emptyText} />
            </div>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
