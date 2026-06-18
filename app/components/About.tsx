import { personalInfo, skills } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Academic & Technical Profile"
          description="Dedicated to advancing data-driven research and digital innovation at Yala Rajabhat University."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              I am <strong className="text-foreground">{personalInfo.name}</strong>, serving as a{" "}
              <strong className="text-foreground">{personalInfo.title}</strong> at{" "}
              <strong className="text-foreground">{personalInfo.institution}</strong>. My work
              sits at the intersection of information technology, academic research support, and
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

          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-card-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-card-border bg-background p-6">
              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                Current Position
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-card-border pb-3">
                  <dt className="text-muted">Role</dt>
                  <dd className="font-medium text-foreground">{personalInfo.title}</dd>
                </div>
                <div className="flex justify-between border-b border-card-border pb-3">
                  <dt className="text-muted">Institution</dt>
                  <dd className="font-medium text-foreground text-right">
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
        </div>
      </div>
    </section>
  );
}
