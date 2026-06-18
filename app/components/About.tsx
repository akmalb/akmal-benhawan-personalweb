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

/** Paragraph indices shown in About: intro (0) and foundation (2). Index 1 (research interests) lives in Research only. */
const ABOUT_PARAGRAPH_INDICES = [0, 2] as const;

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
              {ABOUT_PARAGRAPH_INDICES.map((index) => (
                <BilingualText
                  key={th.about.paragraphs[index]}
                  th={th.about.paragraphs[index]}
                  en={en.about.paragraphs[index]}
                />
              ))}

              <div className="rounded-2xl border border-card-border bg-card p-6">
                <BilingualTitle
                  th={th.rolesHeading}
                  en={en.rolesHeading}
                  as="h3"
                  size="small"
                  className="mb-4"
                />
                <ul className="space-y-2">
                  {th.primaryRoles.map((role, index) => (
                    <li
                      key={role}
                      className="flex items-start gap-3 rounded-lg border border-card-border/60 bg-background px-4 py-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <div className="min-w-0">
                        <p className="font-thai text-sm font-semibold leading-snug text-foreground">
                          {role}
                        </p>
                        <p className="mt-1 text-xs leading-snug text-muted">
                          {en.primaryRoles[index]}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
