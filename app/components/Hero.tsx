import { personalInfo } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-20 pt-32 sm:pt-40"
      style={{
        background: `linear-gradient(135deg, var(--hero-gradient-from) 0%, var(--hero-gradient-to) 60%, var(--background) 100%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Academic Portfolio
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-1 text-lg text-muted">{personalInfo.institution}</p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {personalInfo.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg"
            >
              View Research
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative h-72 w-72 rounded-2xl border border-card-border bg-card p-8 shadow-xl">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Focus Areas
                </p>
                <ul className="mt-4 space-y-3">
                  {["AI & Machine Learning", "Data Analytics", "Digital Transformation"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="border-t border-card-border pt-4">
                <p className="text-xs text-muted">Location</p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
