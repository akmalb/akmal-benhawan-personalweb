import { personalInfo } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Open to research collaboration, institutional partnerships, and community initiatives."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-card-border bg-card p-8">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Contact Information
            </h3>
            <dl className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <dt className="text-sm text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {personalInfo.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <dt className="text-sm text-muted">Institution</dt>
                  <dd className="font-medium text-foreground">{personalInfo.institution}</dd>
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
                  <dt className="text-sm text-muted">Location</dt>
                  <dd className="font-medium text-foreground">{personalInfo.location}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-card-border bg-accent p-8 text-white">
            <h3 className="font-serif text-2xl font-bold">Let&apos;s Collaborate</h3>
            <p className="mt-4 leading-relaxed text-blue-100">
              Whether you are a researcher, institution, or community organization, I welcome
              opportunities to collaborate on data-driven projects, AI applications, and digital
              transformation initiatives.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-blue-50"
            >
              Send an Email
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
