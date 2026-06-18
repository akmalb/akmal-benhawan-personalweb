import type { Community } from "@/src/data/community";
import { AnimateIn } from "./AnimateIn";
import { BodyText, CardHeading, EnglishBlock, LocaleDivider, SectionHeading, ThaiBlock } from "./Locale";

interface CommunityProps {
  community: Community;
}

export function Community({ community }: CommunityProps) {
  const { th, en } = community;

  return (
    <section id="community" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <AnimateIn delay={100}>
          <article className="rounded-2xl border border-card-border bg-card p-8 sm:p-10">
            <ThaiBlock>
              <CardHeading thai as="h3">
                {th.work.organization}
              </CardHeading>
              <p className="mt-2 font-thai text-lg font-semibold text-accent">{th.work.role}</p>
              <BodyText thai className="mt-6 max-w-3xl">
                {th.work.description}
              </BodyText>

              <div className="mt-8 border-t border-card-border pt-8">
                <CardHeading thai as="h4" className="mb-5 text-lg sm:text-xl">
                  {th.work.contributionsHeading}
                </CardHeading>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {th.work.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-card-border bg-background px-4 py-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <BodyText thai>{item}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>
            </ThaiBlock>

            <LocaleDivider />

            <EnglishBlock>
              <CardHeading as="h3">{en.work.organization}</CardHeading>
              <p className="mt-2 text-lg font-semibold text-accent">{en.work.role}</p>
              <BodyText muted className="mt-6 max-w-3xl">
                {en.work.description}
              </BodyText>

              <div className="mt-8 border-t border-card-border pt-8">
                <CardHeading as="h4" className="mb-5 text-lg sm:text-xl">
                  {en.work.contributionsHeading}
                </CardHeading>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {en.work.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-card-border bg-background px-4 py-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <BodyText muted>{item}</BodyText>
                    </li>
                  ))}
                </ul>
              </div>
            </EnglishBlock>
          </article>
        </AnimateIn>
      </div>
    </section>
  );
}
