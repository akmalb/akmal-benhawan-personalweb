import Image from "next/image";
import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, BilingualTitle } from "./Locale";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const { th, en, cvUrl, profileImage } = profile;

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
                  src={profileImage}
                  alt={`${th.name} — รูปประจำตัว`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div>
              <p className="font-thai text-sm font-bold tracking-wide text-accent-muted">{th.portfolioBadge}</p>
              <p className="text-xs font-medium text-muted">{en.portfolioBadge}</p>

              <BilingualTitle th={th.name} en={en.name} as="h1" size="hero" className="mt-4" />

              <div className="mt-4">
                <p className="font-thai text-xl font-semibold text-accent sm:text-2xl">{th.title}</p>
                <p className="mt-1 text-base font-medium text-muted sm:text-lg">{en.title}</p>
              </div>

              <div className="mt-3">
                <p className="font-thai text-lg font-medium text-foreground">{th.institution}</p>
                <p className="mt-1 text-base text-muted">{en.institution}</p>
              </div>

              <BilingualText th={th.tagline} en={en.tagline} className="mt-6 max-w-2xl" />

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#featured-research"
                  className="inline-flex flex-col items-start rounded-lg bg-accent px-5 py-3 text-white shadow-md transition-all hover:bg-accent-hover hover:shadow-lg"
                >
                  <span className="font-thai text-sm font-semibold">{th.buttons.viewResearch}</span>
                  <span className="text-[0.6875rem] font-normal text-blue-100/90">{en.buttons.viewResearch}</span>
                </a>
                <a
                  href={cvUrl}
                  download
                  className="inline-flex flex-col items-start rounded-lg border border-card-border bg-card px-5 py-3 text-foreground transition-all hover:border-accent hover:text-accent"
                >
                  <span className="font-thai text-sm font-semibold">{th.buttons.downloadCv}</span>
                  <span className="text-[0.6875rem] font-normal text-muted">{en.buttons.downloadCv}</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex flex-col items-start rounded-lg border border-transparent px-5 py-3 transition-all hover:text-accent"
                >
                  <span className="font-thai text-sm font-semibold text-foreground">{th.buttons.contact}</span>
                  <span className="text-[0.6875rem] font-normal text-muted">{en.buttons.contact}</span>
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
