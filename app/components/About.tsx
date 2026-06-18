import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import {
  BilingualLabel,
  BilingualText,
  BilingualTitle,
  BilingualValue,
  SectionHeading,
} from "./Locale";

interface AboutProps {
  th: Profile["th"];
  en: Profile["en"];
  skills: Profile["skills"];
}

export function About({ th, en, skills }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.aboutSection} en={en.aboutSection} />
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="max-w-prose space-y-5">
              {th.about.paragraphs.map((paragraph, index) => (
                <BilingualText
                  key={paragraph}
                  th={paragraph}
                  en={en.about.paragraphs[index]}
                />
              ))}
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-card-border bg-card p-6">
                <BilingualTitle
                  th={th.about.skillsHeading}
                  en={en.about.skillsHeading}
                  as="h3"
                  size="small"
                  className="mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-card-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-card-border bg-card p-6">
                <BilingualTitle
                  th={th.about.positionHeading}
                  en={en.about.positionHeading}
                  as="h3"
                  size="small"
                  className="mb-4"
                />
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-card-border pb-3">
                    <BilingualLabel
                      th={th.about.positionLabels.role}
                      en={en.about.positionLabels.role}
                    />
                    <BilingualValue
                      th={th.title}
                      en={en.title}
                      className="text-right"
                    />
                  </div>
                  <div className="flex justify-between gap-4 border-b border-card-border pb-3">
                    <BilingualLabel
                      th={th.about.positionLabels.institution}
                      en={en.about.positionLabels.institution}
                    />
                    <BilingualValue
                      th={th.institution}
                      en={en.institution}
                      className="max-w-[55%] text-right"
                    />
                  </div>
                  <div className="flex justify-between gap-4">
                    <BilingualLabel
                      th={th.about.positionLabels.location}
                      en={en.about.positionLabels.location}
                    />
                    <BilingualValue
                      th={th.location}
                      en={en.location}
                      className="text-right"
                    />
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
