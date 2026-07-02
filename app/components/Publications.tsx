import type { PublicationItem, Publications } from "@/src/data/publications";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, SectionHeading } from "./Locale";

interface PublicationsProps {
  publications: Publications;
}

const VIEW_PAPER_LABEL = "View Paper";

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
            <ol className="divide-y divide-card-border rounded-xl border border-card-border bg-card">
              {sortedItems.map((item) => (
                <li
                  key={`${item.year}-${item.title}`}
                  className="flex flex-col gap-4 p-5 sm:p-6 lg:flex-row lg:gap-8"
                >
                  <div className="flex shrink-0 flex-wrap items-center gap-2 lg:w-32 lg:flex-col lg:items-start lg:gap-2">
                    <span className="font-mono text-sm font-semibold tabular-nums text-accent">
                      {item.year}
                    </span>
                    <span className="rounded-md border border-card-border bg-background px-2 py-0.5 text-[0.6875rem] font-medium leading-snug text-muted">
                      {item.type}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.authors}</p>

                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.venue}</p>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center rounded-md border border-card-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                      >
                        {VIEW_PAPER_LABEL}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
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
