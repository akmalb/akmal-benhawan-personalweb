import { contactContent, personalInfo, sectionHeadings } from "../data/portfolio";
import { BilingualBody, BilingualButton, BilingualHeading, BilingualInline } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label={sectionHeadings.contact.label}
            title={sectionHeadings.contact.title}
            description={sectionHeadings.contact.description}
          />
        </AnimateIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimateIn delay={100}>
            <div className="h-full rounded-2xl border border-card-border bg-card p-8 sm:p-10">
              <BilingualHeading
                text={contactContent.infoHeading}
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
                    <BilingualInline
                      text={contactContent.labels.email}
                      primaryClassName="font-thai text-sm text-muted"
                      secondaryClassName="text-xs text-muted"
                    />
                    <div className="mt-1">
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {personalInfo.email}
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
                    <BilingualInline
                      text={contactContent.labels.institution}
                      primaryClassName="font-thai text-sm text-muted"
                      secondaryClassName="text-xs text-muted"
                    />
                    <div className="mt-1">
                      <BilingualInline
                        text={personalInfo.institution}
                        primaryClassName="font-thai font-medium text-foreground"
                        secondaryClassName="text-sm text-muted"
                      />
                    </div>
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
                    <BilingualInline
                      text={contactContent.labels.location}
                      primaryClassName="font-thai text-sm text-muted"
                      secondaryClassName="text-xs text-muted"
                    />
                    <div className="mt-1">
                      <BilingualInline
                        text={personalInfo.location}
                        primaryClassName="font-thai font-medium text-foreground"
                        secondaryClassName="text-sm text-muted"
                      />
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-accent/20 bg-accent p-8 text-white sm:p-10">
              <BilingualHeading
                text={contactContent.collaborateHeading}
                as="h3"
                size="card"
                tone="inverted"
              />
              <BilingualBody text={contactContent.collaborateText} tone="inverted" className="mt-5" />
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-accent transition-all hover:bg-blue-50"
                >
                  <BilingualButton text={contactContent.sendEmail} />
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 transition-all hover:bg-white/10"
                >
                  <BilingualButton text={contactContent.downloadCv} />
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
