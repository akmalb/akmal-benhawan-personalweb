import { sectionHeadings, trainingTopics } from "../data/portfolio";
import { BilingualBody, BilingualHeading } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Training() {
  return (
    <section id="training" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label={sectionHeadings.training.label}
            title={sectionHeadings.training.title}
            description={sectionHeadings.training.description}
          />
        </AnimateIn>

        <div className="space-y-4">
          {trainingTopics.map((item, index) => (
            <AnimateIn key={item.title.en} delay={index * 80}>
              <article className="rounded-2xl border border-card-border bg-card p-7 transition-all duration-300 hover:border-accent-muted hover:shadow-md sm:p-8">
                <BilingualHeading text={item.title} as="h3" size="small" />
                <BilingualBody text={item.description} className="mt-3" />
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
