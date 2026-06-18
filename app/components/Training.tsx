import type { Training } from "@/src/data/training";
import { AnimateIn } from "./AnimateIn";
import { BodyText, CardHeading, EnglishBlock, LocaleDivider, SectionHeading, ThaiBlock } from "./Locale";

interface TrainingProps {
  training: Training;
}

export function Training({ training }: TrainingProps) {
  const { th, en } = training;

  return (
    <section id="training" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {th.topics.map((topic, index) => (
            <AnimateIn key={topic.title} delay={index * 80}>
              <article className="group h-full rounded-2xl border border-card-border bg-card p-7 transition-all duration-300 hover:border-accent-muted hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light font-mono text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <ThaiBlock>
                  <CardHeading thai as="h3" className="text-lg sm:text-xl">
                    {topic.title}
                  </CardHeading>
                  <BodyText thai className="mt-4">
                    {topic.description}
                  </BodyText>
                </ThaiBlock>

                <LocaleDivider className="my-6" />

                <EnglishBlock>
                  <CardHeading as="h3" className="text-lg sm:text-xl">
                    {en.topics[index].title}
                  </CardHeading>
                  <BodyText muted className="mt-4">
                    {en.topics[index].description}
                  </BodyText>
                </EnglishBlock>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
