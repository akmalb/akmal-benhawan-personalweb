import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import {
  BodyText,
  CardHeading,
  EnglishBlock,
  LocaleDivider,
  SectionHeading,
  ThaiBlock,
} from "./Locale";

interface AboutProps {
  th: Profile["th"];
  en: Profile["en"];
  skills: Profile["skills"];
}

function PositionDetails({
  labels,
  title,
  institution,
  location,
  thai,
}: {
  labels: Profile["th"]["about"]["positionLabels"];
  title: string;
  institution: string;
  location: string;
  thai: boolean;
}) {
  return (
    <dl className="space-y-4 text-sm">
      <div className="flex justify-between border-b border-card-border pb-4">
        <dt className={thai ? "font-thai text-muted" : "text-muted"}>{labels.role}</dt>
        <dd className={`max-w-[55%] text-right font-medium text-foreground ${thai ? "font-thai" : ""}`}>
          {title}
        </dd>
      </div>
      <div className="flex justify-between border-b border-card-border pb-4">
        <dt className={thai ? "font-thai text-muted" : "text-muted"}>{labels.institution}</dt>
        <dd className={`max-w-[55%] text-right font-medium text-foreground ${thai ? "font-thai" : ""}`}>
          {institution}
        </dd>
      </div>
      <div className="flex justify-between">
        <dt className={thai ? "font-thai text-muted" : "text-muted"}>{labels.location}</dt>
        <dd className={`text-right font-medium text-foreground ${thai ? "font-thai" : ""}`}>{location}</dd>
      </div>
    </dl>
  );
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
            <ThaiBlock className="space-y-6">
              {th.about.paragraphs.map((paragraph) => (
                <BodyText key={paragraph} thai>
                  {paragraph}
                </BodyText>
              ))}
            </ThaiBlock>

            <ThaiBlock>
              <CardHeading thai className="mb-5" as="h3">
                {th.about.skillsHeading}
              </CardHeading>
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
                <CardHeading thai className="mb-5" as="h3">
                  {th.about.positionHeading}
                </CardHeading>
                <PositionDetails
                  labels={th.about.positionLabels}
                  title={th.title}
                  institution={th.institution}
                  location={th.location}
                  thai
                />
              </div>
            </ThaiBlock>
          </div>
        </AnimateIn>

        <LocaleDivider />

        <AnimateIn delay={150}>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <EnglishBlock className="space-y-6">
              {en.about.paragraphs.map((paragraph) => (
                <BodyText key={paragraph} muted>
                  {paragraph}
                </BodyText>
              ))}
            </EnglishBlock>

            <EnglishBlock>
              <CardHeading className="mb-5" as="h3">
                {en.about.skillsHeading}
              </CardHeading>
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
                <CardHeading className="mb-5" as="h3">
                  {en.about.positionHeading}
                </CardHeading>
                <PositionDetails
                  labels={en.about.positionLabels}
                  title={en.title}
                  institution={en.institution}
                  location={en.location}
                  thai={false}
                />
              </div>
            </EnglishBlock>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
