import type { Contact } from "@/src/data/contact";
import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import {
  BilingualLabel,
  BilingualText,
  BilingualTitle,
  BilingualValue,
  SectionHeading,
} from "./Locale";

interface ContactSectionProps {
  contact: Contact;
  profile: Profile;
}

export function Contact({ contact, profile }: ContactSectionProps) {
  const { th, en } = contact;
  const { email, cvUrl } = profile;

  return (
    <section id="contact" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="h-full rounded-2xl border border-card-border bg-card p-8 sm:p-10">
              <BilingualTitle
                th={th.infoHeading}
                en={en.infoHeading}
                as="h3"
                size="small"
              />
              <dl className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <BilingualLabel th={th.labels.email} en={en.labels.email} />
                    <a
                      href={`mailto:${email}`}
                      className="mt-1 block font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <BilingualLabel th={th.labels.institution} en={en.labels.institution} />
                    <BilingualValue
                      th={profile.th.institution}
                      en={profile.en.institution}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <BilingualLabel th={th.labels.location} en={en.labels.location} />
                    <BilingualValue
                      th={profile.th.location}
                      en={profile.en.location}
                      className="mt-1"
                    />
                  </div>
                </div>
              </dl>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-accent/20 bg-accent p-8 text-white sm:p-10">
              <BilingualTitle
                th={th.purposesHeading}
                en={en.purposesHeading}
                as="h3"
                size="card"
                inverted
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {th.purposes.map((purpose, index) => (
                  <span
                    key={purpose.en}
                    className="inline-flex flex-col rounded-lg border border-white/20 bg-white/10 px-3 py-2"
                  >
                    <span className="font-thai text-sm font-medium text-white">{purpose.th}</span>
                    <span className="text-[0.6875rem] text-blue-100/90">{purpose.en}</span>
                  </span>
                ))}
              </div>

              <BilingualText
                th={th.collaborateText}
                en={en.collaborateText}
                inverted
                className="mt-6"
              />

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex flex-col items-start rounded-lg bg-white px-5 py-3 text-accent transition-all hover:bg-blue-50"
                >
                  <span className="font-thai text-sm font-semibold">{th.sendEmail}</span>
                  <span className="text-[0.6875rem] font-normal text-accent/70">{en.sendEmail}</span>
                </a>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-start rounded-lg border border-white/30 px-5 py-3 transition-all hover:bg-white/10"
                >
                  <span className="font-thai text-sm font-semibold">{th.downloadCv}</span>
                  <span className="text-[0.6875rem] font-normal text-blue-100/90">{en.downloadCv}</span>
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
