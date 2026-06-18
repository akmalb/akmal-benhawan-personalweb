import { communityWork } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function Community() {
  return (
    <section id="community" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label="Foundation & Community Service"
            title="Community Engagement"
            description="Contributing to social development beyond the university through foundation leadership and outreach."
          />
        </AnimateIn>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <AnimateIn delay={100} className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-card-border bg-card p-8 sm:p-10">
              <div className="mb-7 flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                    {communityWork.organization}
                  </h3>
                  <p className="mt-1.5 font-medium text-accent">{communityWork.role}</p>
                </div>
              </div>
              <p className="prose-academic">{communityWork.description}</p>
            </div>
          </AnimateIn>

          <AnimateIn delay={200} className="lg:col-span-2">
            <h3 className="mb-5 font-serif text-lg font-semibold text-foreground">
              Key Contributions
            </h3>
            <ul className="space-y-3">
              {communityWork.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-card-border bg-card p-4 text-sm text-muted"
                >
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
