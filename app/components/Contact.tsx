import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import {
  BilingualLabel,
  BilingualText,
  BilingualTitle,
  BilingualValue,
  SectionHeading,
} from "./Locale";

interface ContactProps {
  profile: Profile;
}

function ContactInfoCard({
  contentTh,
  contentEn,
  email,
  institutionTh,
  institutionEn,
  locationTh,
  locationEn,
}: {
  contentTh: Profile["th"]["contact"];
  contentEn: Profile["en"]["contact"];
  email: string;
  institutionTh: string;
  institutionEn: string;
  locationTh: string;
  locationEn: string;
}) {
  return (
    <div className="h-full rounded-2xl border border-card-border bg-card p-8 sm:p-10">
      <BilingualTitle
        th={contentTh.infoHeading}
        en={contentEn.infoHeading}
        as="h3"
        size="small"
      />
      <dl className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <BilingualLabel th={contentTh.labels.email} en={contentEn.labels.email} />
            <div className="mt-1">
              <a
                href={`mailto:${email}`}
                className="font-medium text-foreground transition-colors hover:text-accent"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <BilingualLabel th={contentTh.labels.institution} en={contentEn.labels.institution} />
            <BilingualValue
              th={institutionTh}
              en={institutionEn}
              className="mt-1"
            />
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
            <BilingualLabel th={contentTh.labels.location} en={contentEn.labels.location} />
            <BilingualValue th={locationTh} en={locationEn} className="mt-1" />
          </div>
        </div>
      </dl>
    </div>
  );
}

function CollaborateCard({
  contentTh,
  contentEn,
  email,
  cvUrl,
}: {
  contentTh: Profile["th"]["contact"];
  contentEn: Profile["en"]["contact"];
  email: string;
  cvUrl: string;
}) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-accent/20 bg-accent p-8 text-white sm:p-10">
      <BilingualTitle
        th={contentTh.collaborateHeading}
        en={contentEn.collaborateHeading}
        as="h3"
        size="card"
        inverted
      />
      <BilingualText
        th={contentTh.collaborateText}
        en={contentEn.collaborateText}
        inverted
        className="mt-5"
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex flex-col items-start rounded-lg bg-white px-5 py-3 text-accent transition-all hover:bg-blue-50"
        >
          <span className="font-thai text-sm font-semibold">{contentTh.sendEmail}</span>
          <span className="text-[0.6875rem] font-normal text-accent/70">{contentEn.sendEmail}</span>
        </a>
        <a
          href={cvUrl}
          download
          className="inline-flex flex-col items-start rounded-lg border border-white/30 px-5 py-3 transition-all hover:bg-white/10"
        >
          <span className="font-thai text-sm font-semibold">{contentTh.downloadCv}</span>
          <span className="text-[0.6875rem] font-normal text-blue-100/90">{contentEn.downloadCv}</span>
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
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactInfoCard
              contentTh={th.contact}
              contentEn={en.contact}
              email={email}
              institutionTh={th.institution}
              institutionEn={en.institution}
              locationTh={th.location}
              locationEn={en.location}
            />
            <CollaborateCard
              contentTh={th.contact}
              contentEn={en.contact}
              email={email}
              cvUrl={cvUrl}
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
