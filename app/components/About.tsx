import { personalInfo, skills } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-section-alt section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading
            label="About Me"
            title="Academic & Technical Profile"
            description="Dedicated to advancing data-driven research and digital innovation at Yala Rajabhat University."
          />
        </AnimateIn>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <AnimateIn delay={100}>
            <div className="prose-academic space-y-6">
              <p>
                I am <strong>{personalInfo.name}</strong>, serving as a{" "}
                <strong>{personalInfo.title}</strong> at{" "}
                <strong>{personalInfo.institution}</strong>. My work sits at the
                intersection of information technology, academic research support, and
                institutional digital transformation.
              </p>
              <p>
                With expertise spanning data analytics, artificial intelligence, and database
                systems, I collaborate with faculty and researchers to design technology solutions
                that strengthen evidence-based decision-making and improve university services.
              </p>
              <p>
                I am passionate about applying advanced analytics — including machine learning,
                spatial analysis, and poverty analytics — to address real-world challenges in
                Southern Thailand and the broader academic community.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div>
              <h3 className="mb-5 font-serif text-xl font-semibold text-foreground">
                Technical Skills
              </h3>
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
                <h3 className="mb-5 font-serif text-xl font-semibold text-foreground">
                  Current Position
                </h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-card-border pb-4">
                    <dt className="text-muted">Role</dt>
                    <dd className="font-medium text-foreground">{personalInfo.title}</dd>
                  </div>
                  <div className="flex justify-between border-b border-card-border pb-4">
                    <dt className="text-muted">Institution</dt>
                    <dd className="max-w-[60%] text-right font-medium text-foreground">
                      {personalInfo.institution}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Location</dt>
                    <dd className="font-medium text-foreground">{personalInfo.location}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
