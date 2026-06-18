import type { Research } from "@/src/data/research";
import { AnimateIn } from "./AnimateIn";
import { BodyText, CardHeading, EnglishBlock, LocaleDivider, SectionHeading, ThaiBlock } from "./Locale";

const icons: Record<string, React.ReactNode> = {
  brain: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  ),
  chart: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  ),
  network: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  ),
  database: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  ),
  community: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  map: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  ),
  transform: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  ),
};

interface ResearchProps {
  research: Research;
}

export function Research({ research }: ResearchProps) {
  const { th, en, interestIcons } = research;

  return (
    <section id="research" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {th.interests.map((item, index) => (
              <article
                key={item.title}
                className="group h-full rounded-2xl border border-card-border bg-card p-7 transition-all duration-300 hover:border-accent-muted hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {icons[interestIcons[index]]}
                  </svg>
                </div>
                <ThaiBlock>
                  <CardHeading thai as="h3" className="text-lg sm:text-xl">
                    {item.title}
                  </CardHeading>
                  <BodyText thai className="mt-4">
                    {item.description}
                  </BodyText>
                </ThaiBlock>
              </article>
            ))}
          </div>
        </AnimateIn>

        <LocaleDivider />

        <AnimateIn delay={150}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {en.interests.map((item, index) => (
              <article
                key={item.title}
                className="group h-full rounded-2xl border border-card-border bg-card p-7 transition-all duration-300 hover:border-accent-muted hover:shadow-lg"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {icons[interestIcons[index]]}
                  </svg>
                </div>
                <EnglishBlock>
                  <CardHeading as="h3" className="text-lg sm:text-xl">
                    {item.title}
                  </CardHeading>
                  <BodyText muted className="mt-4">
                    {item.description}
                  </BodyText>
                </EnglishBlock>
              </article>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
