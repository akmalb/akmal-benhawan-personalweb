import type { Metadata } from "next";
import Link from "next/link";
import { cv } from "@/src/data/cv";
import { CvPrintButton } from "./CvPrintButton";

export const metadata: Metadata = {
  title: "Academic CV | Akmal Benhawan",
  description:
    "Academic curriculum vitae of Akmal Benhawan, Computer Technical Officer, Professional Level at Yala Rajabhat University.",
  robots: {
    index: true,
    follow: true,
  },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-neutral-800 pb-1 text-[13pt] font-bold tracking-wide text-neutral-900 uppercase">
      {children}
    </h2>
  );
}

export default function CvPage() {
  const { header, labels } = cv;

  return (
    <div className="cv-page min-h-screen bg-neutral-100 text-neutral-900">
      <div className="cv-no-print border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-[210mm] items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
          >
            {labels.backToPortfolio}
          </Link>
          <CvPrintButton label={labels.printButton} />
        </div>
      </div>

      <main className="cv-sheet mx-auto max-w-[210mm] bg-white px-8 py-10 shadow-sm sm:px-12 sm:py-12 print:max-w-none print:px-0 print:py-0 print:shadow-none">
        <header className="cv-section border-b-2 border-neutral-900 pb-5">
          <h1 className="text-[22pt] font-bold leading-tight tracking-tight text-neutral-900">
            {header.nameEn}
          </h1>
          <p className="mt-1 font-thai text-[14pt] text-neutral-800">{header.nameTh}</p>
          <p className="mt-3 text-[12pt] font-semibold text-neutral-900">
            {header.positionEn}
          </p>
          <p className="font-thai text-[11pt] text-neutral-700">{header.positionTh}</p>
          <p className="mt-1 text-[11pt] text-neutral-800">{header.affiliation}</p>
          <p className="font-thai text-[10pt] text-neutral-600">{header.affiliationTh}</p>

          <div className="mt-4 space-y-1 text-[10pt] text-neutral-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${header.email}`} className="underline-offset-2 hover:underline">
                {header.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">Location:</span> {header.location}
            </p>
            <p>
              <span className="font-semibold">Google Scholar:</span>{" "}
              <a
                href={header.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline-offset-2 hover:underline"
              >
                {header.googleScholar}
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href={header.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline-offset-2 hover:underline"
              >
                {header.linkedIn}
              </a>
            </p>
            <p>
              <span className="font-semibold">Portfolio:</span>{" "}
              <a
                href={header.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all underline-offset-2 hover:underline"
              >
                {header.portfolio}
              </a>
            </p>
          </div>
        </header>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionProfile}</SectionHeading>
          <p className="text-[10.5pt] leading-relaxed text-neutral-800">{cv.profile}</p>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionAppointment}</SectionHeading>
          <p className="text-[11pt] font-semibold text-neutral-900">{cv.appointment.title}</p>
          <p className="font-thai text-[10pt] text-neutral-700">{cv.appointment.titleTh}</p>
          <p className="mt-1 text-[10.5pt] text-neutral-800">{cv.appointment.institution}</p>
          <p className="font-thai text-[10pt] text-neutral-600">{cv.appointment.institutionTh}</p>
          <p className="mt-2 text-[10pt] text-neutral-800">
            <span className="font-semibold">Department/Unit:</span> {cv.appointment.unit}
          </p>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionEducation}</SectionHeading>
          <ul className="space-y-4">
            {cv.education.map((item) => (
              <li key={item.degreeEn} className="text-[10.5pt]">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <p className="font-semibold text-neutral-900">{item.degreeEn}</p>
                    <p className="font-thai text-[10pt] text-neutral-700">{item.degreeTh}</p>
                    <p className="mt-1 text-neutral-800">{item.institutionEn}</p>
                    <p className="font-thai text-[9.5pt] text-neutral-600">{item.institutionTh}</p>
                    {"researchFocus" in item && item.researchFocus && (
                      <p className="mt-1 text-[10pt] text-neutral-700">
                        <span className="font-semibold">{labels.researchFocusLabel}:</span>{" "}
                        {item.researchFocus}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="font-semibold text-neutral-900">{item.yearEn}</p>
                    <p className="font-thai text-[9.5pt] text-neutral-600">{item.yearTh}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionInterests}</SectionHeading>
          <p className="text-[10.5pt] leading-relaxed text-neutral-800">
            {cv.researchInterests.join(" · ")}
          </p>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionPublications}</SectionHeading>
          <ol className="list-decimal space-y-4 pl-5">
            {cv.publications.map((pub) => (
              <li key={pub.title} className="text-[10.5pt] text-neutral-800">
                <p className="font-semibold text-neutral-900">{pub.title}</p>
                <p className="mt-0.5">{pub.authors}</p>
                <p className="mt-0.5 italic">
                  {pub.venue}, {pub.year}
                </p>
                <p className="mt-0.5 text-neutral-700">
                  {pub.type}
                  {pub.url && (
                    <>
                      {" · "}
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all underline-offset-2 hover:underline"
                      >
                        {pub.url}
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionProjects}</SectionHeading>
          <ul className="space-y-4">
            {cv.projects.map((project) => (
              <li key={project.name} className="text-[10.5pt]">
                <p className="font-semibold text-neutral-900">{project.name}</p>
                <p className="mt-0.5 text-neutral-800">{project.description}</p>
                <p className="font-thai text-[9.5pt] text-neutral-600">{project.descriptionTh}</p>
                <p className="mt-1 text-neutral-700">
                  <span className="font-semibold">{labels.roleLabel}:</span> {project.role}
                </p>
                <p className="text-neutral-700">
                  <span className="font-semibold">{labels.technologiesLabel}:</span>{" "}
                  {project.technologies.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionTraining}</SectionHeading>
          <p className="text-[10.5pt] leading-relaxed text-neutral-800">
            {cv.trainingTopics.join(" · ")}
          </p>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionCommunity}</SectionHeading>
          <p className="text-[11pt] font-semibold text-neutral-900">{cv.community.role}</p>
          <p className="font-thai text-[10pt] text-neutral-700">{cv.community.roleTh}</p>
          <p className="mt-1 text-[10.5pt] text-neutral-800">{cv.community.description}</p>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionSkills}</SectionHeading>
          <ul className="space-y-2 text-[10.5pt]">
            {cv.skills.map((group) => (
              <li key={group.category}>
                <span className="font-semibold text-neutral-900">{group.category}:</span>{" "}
                <span className="text-neutral-800">{group.items.join(", ")}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section mt-6">
          <SectionHeading>{labels.sectionLanguages}</SectionHeading>
          <ul className="space-y-1 text-[10.5pt] text-neutral-800">
            {cv.languages.map((item) => (
              <li key={item.language}>
                <span className="font-semibold text-neutral-900">{item.language}:</span>{" "}
                {item.level}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
