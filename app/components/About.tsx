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
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              {th.about.paragraphs.map((paragraph, index) => (
                <BilingualText
                  key={paragraph}
                  th={paragraph}
                  en={en.about.paragraphs[index]}
                />
              ))}
            </div>

            <div>
              <BilingualTitle
                th={th.about.skillsHeading}
                en={en.about.skillsHeading}
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
                <BilingualTitle
                  th={th.about.positionHeading}
                  en={en.about.positionHeading}
                  as="h3"
                  size="small"
                  className="mb-5"
                />
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-card-border pb-4">
                    <BilingualLabel
                      th={th.about.positionLabels.role}
                      en={en.about.positionLabels.role}
                    />
                    <BilingualValue
                      th={th.title}
                      en={en.title}
                      className="max-w-[55%] text-right"
                    />
                  </div>
                  <div className="flex justify-between border-b border-card-border pb-4">
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
                  <div className="flex justify-between">
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
