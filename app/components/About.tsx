import type { AboutContent, PersonalInfo } from "@/src/data/profile";
import type { Bilingual } from "@/src/data/types";
import { BilingualBody, BilingualHeading, BilingualInline } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

interface AboutProps {
  section: {
    label: Bilingual;
    title: Bilingual;
    description: Bilingual;
  };
  content: AboutContent;
  personalInfo: PersonalInfo;
  skills: string[];
}

export function About({ section, content, personalInfo, skills }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </AnimateIn>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <AnimateIn delay={100}>
            <div className="space-y-6">
              {content.paragraphs.map((paragraph) => (
                <BilingualBody key={paragraph.en} text={paragraph} />
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div>
              <BilingualHeading
                text={content.skillsHeading}
                as="h3"
                size="small"
                className="mb-5"
              />
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-card-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-muted hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-card-border bg-card p-7">
                <BilingualHeading
                  text={content.positionHeading}
                  as="h3"
                  size="small"
                  className="mb-5"
                />
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-card-border pb-4">
                    <BilingualInline
                      text={content.positionLabels.role}
                      primaryClassName="font-thai text-muted"
                      secondaryClassName="text-xs text-muted"
                    />
                    <BilingualInline
                      text={personalInfo.title}
                      primaryClassName="font-thai text-right font-medium text-foreground"
                      secondaryClassName="text-right text-xs text-muted"
                    />
                  </div>
                  <div className="flex justify-between border-b border-card-border pb-4">
                    <BilingualInline
                      text={content.positionLabels.institution}
                      primaryClassName="font-thai text-muted"
                      secondaryClassName="text-xs text-muted"
                    />
                    <BilingualInline
                      text={personalInfo.institution}
                      primaryClassName="font-thai max-w-[55%] text-right font-medium text-foreground"
                      secondaryClassName="text-right text-xs text-muted"
                    />
                  </div>
                  <div className="flex justify-between">
                    <BilingualInline
                      text={content.positionLabels.location}
                      primaryClassName="font-thai text-muted"
                      secondaryClassName="text-xs text-muted"
                    />
                    <BilingualInline
                      text={personalInfo.location}
                      primaryClassName="font-thai text-right font-medium text-foreground"
                      secondaryClassName="text-right text-xs text-muted"
                    />
                  </div>
                </dl>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
