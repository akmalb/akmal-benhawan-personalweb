import type { Training } from "@/src/data/training";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, BilingualTitle, SectionHeading } from "./Locale";

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
                <BilingualTitle
                  th={topic.title}
                  en={en.topics[index].title}
                  as="h3"
                  size="small"
                />
                <BilingualText
                  th={topic.description}
                  en={en.topics[index].description}
                  className="mt-4"
                />
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
