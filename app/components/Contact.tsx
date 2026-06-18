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

interface ContactProps {
  profile: Profile;
}

function ContactInfoCard({
  content,
  email,
  institution,
  location,
  thai,
}: {
  content: Profile["th"]["contact"];
  email: string;
  institution: string;
  location: string;
  thai: boolean;
}) {
  const labelClass = thai ? "font-thai text-sm text-muted" : "text-sm text-muted";
  const valueClass = thai
    ? "font-thai font-medium text-foreground"
    : "font-medium text-foreground";

  return (
    <div className="h-full rounded-2xl border border-card-border bg-card p-8 sm:p-10">
      <CardHeading thai={thai} as="h3" className="text-lg sm:text-xl">
        {content.infoHeading}
      </CardHeading>
      <dl className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <dt className={labelClass}>{content.labels.email}</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${email}`}
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                {email}
              </a>
            </dd>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <dt className={labelClass}>{content.labels.institution}</dt>
            <dd className={`mt-1 ${valueClass}`}>{institution}</dd>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <dt className={labelClass}>{content.labels.location}</dt>
            <dd className={`mt-1 ${valueClass}`}>{location}</dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

function CollaborateCard({
  content,
  email,
  cvUrl,
  thai,
}: {
  content: Profile["th"]["contact"];
  email: string;
  cvUrl: string;
  thai: boolean;
}) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-accent/20 bg-accent p-8 text-white sm:p-10">
      <CardHeading thai={thai} as="h3" className="text-white">
        {content.collaborateHeading}
      </CardHeading>
      <BodyText thai={thai} className={`mt-5 ${thai ? "text-blue-50" : "text-blue-100/90"}`}>
        {content.collaborateText}
      </BodyText>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-accent transition-all hover:bg-blue-50"
        >
          {content.sendEmail}
          <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href={cvUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold transition-all hover:bg-white/10"
        >
          {content.downloadCv}
        </a>
      </div>
    </div>
  );
}

export function Contact({ profile }: ContactProps) {
  const { th, en, email, cvUrl } = profile;

  return (
    <section id="contact" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.contactSection} en={en.contactSection} />
        </AnimateIn>

        <AnimateIn delay={100}>
          <ThaiBlock>
            <div className="grid gap-8 lg:grid-cols-2">
              <ContactInfoCard
                content={th.contact}
                email={email}
                institution={th.institution}
                location={th.location}
                thai
              />
              <CollaborateCard content={th.contact} email={email} cvUrl={cvUrl} thai />
            </div>
          </ThaiBlock>
        </AnimateIn>

        <LocaleDivider />

        <AnimateIn delay={150}>
          <EnglishBlock>
            <div className="grid gap-8 lg:grid-cols-2">
              <ContactInfoCard
                content={en.contact}
                email={email}
                institution={en.institution}
                location={en.location}
                thai={false}
              />
              <CollaborateCard content={en.contact} email={email} cvUrl={cvUrl} thai={false} />
            </div>
          </EnglishBlock>
        </AnimateIn>
      </div>
    </section>
  );
}
