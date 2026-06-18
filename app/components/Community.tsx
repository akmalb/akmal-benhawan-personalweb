import type { Community } from "@/src/data/community";
import { AnimateIn } from "./AnimateIn";
import { BilingualText, BilingualTitle, SectionHeading } from "./Locale";

interface CommunityProps {
  community: Community;
}

export function Community({ community }: CommunityProps) {
  const { th, en } = community;

  return (
    <section id="community" className="scroll-mt-28 section-padding">
      <div className="container-width">
        <AnimateIn>
          <SectionHeading th={th.section} en={en.section} />
        </AnimateIn>

        <AnimateIn delay={100}>
          <article className="rounded-2xl border border-card-border bg-card p-8 sm:p-10">
            <BilingualTitle th={th.work.organization} en={en.work.organization} as="h3" size="card" />
            <div className="mt-2">
              <p className="font-thai text-lg font-semibold text-accent">{th.work.role}</p>
              <p className="text-sm font-medium text-muted">{en.work.role}</p>
            </div>
            <BilingualText
              th={th.work.description}
              en={en.work.description}
              className="mt-6 max-w-3xl"
            />

            <div className="mt-8 border-t border-card-border pt-8">
              <BilingualTitle
                th={th.work.contributionsHeading}
                en={en.work.contributionsHeading}
                as="h4"
                size="small"
                className="mb-5"
              />
              <ul className="grid gap-3 sm:grid-cols-2">
                {th.work.highlights.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-card-border bg-background px-4 py-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <BilingualText th={item} en={en.work.highlights[index]} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </AnimateIn>
      </div>
    </section>
  );
}
