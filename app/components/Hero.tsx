import Image from "next/image";
import { personalInfo } from "../data/portfolio";
import { BilingualBody, BilingualButton, BilingualInline } from "./Bilingual";
import { AnimateIn } from "./AnimateIn";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-28 overflow-hidden section-padding !pb-16 !pt-32 sm:!pt-40"
      style={{
        background: `linear-gradient(160deg, var(--hero-gradient-from) 0%, var(--hero-gradient-to) 55%, var(--background) 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent-muted/10 blur-3xl" />
      </div>

      <div className="container-width relative">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <AnimateIn className="mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-muted/20 blur-sm" />
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-card-border bg-card shadow-xl sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} — รูปประจำตัว`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          </AnimateIn>

          <div>
            <AnimateIn delay={100}>
              <BilingualInline
                text={personalInfo.portfolioBadge}
                primaryClassName="font-thai text-sm font-bold tracking-wide text-accent-muted"
                secondaryClassName="text-xs font-normal text-muted"
                inline
              />
            </AnimateIn>

            <AnimateIn delay={150}>
              <h1 className="mt-4 font-thai text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                {personalInfo.name}
              </h1>
              <p className="mt-1.5 text-lg font-medium text-muted">
                ({personalInfo.nameEn})
              </p>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="mt-4 space-y-3">
                <BilingualInline
                  text={personalInfo.title}
                  primaryClassName="font-thai text-xl font-semibold text-accent sm:text-2xl"
                  secondaryClassName="text-base font-normal text-accent-muted sm:text-lg"
                />
                <BilingualInline
                  text={personalInfo.institution}
                  primaryClassName="font-thai text-lg font-medium text-foreground"
                  secondaryClassName="text-base font-normal text-muted"
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={250}>
              <BilingualBody text={personalInfo.tagline} className="mt-6 max-w-2xl" />
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#featured-research"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg"
                >
                  <BilingualButton text={personalInfo.buttons.viewResearch} />
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-3 text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <BilingualButton text={personalInfo.buttons.downloadCv} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg border border-transparent px-5 py-3 text-muted transition-all hover:text-accent"
                >
                  <BilingualButton text={personalInfo.buttons.contact} />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
