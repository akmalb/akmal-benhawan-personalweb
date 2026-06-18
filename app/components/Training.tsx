import type { TrainingTopic } from "@/src/data/training";
import type { Bilingual } from "@/src/data/types";
import { BilingualBody, BilingualHeading } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

interface TrainingProps {
  section: {
    label: Bilingual;
    title: Bilingual;
    description: Bilingual;
  };
  topics: TrainingTopic[];
}

export function Training({ section, topics }: TrainingProps) {
  return (
    <section id="training" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <AnimateIn key={topic.title.en} delay={index * 80}>
              <article className="group h-full rounded-2xl border border-card-border bg-card p-7 transition-all duration-300 hover:border-accent-muted hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light font-mono text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <BilingualHeading text={topic.title} as="h3" size="small" />
                <BilingualBody text={topic.description} className="mt-4" />
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
