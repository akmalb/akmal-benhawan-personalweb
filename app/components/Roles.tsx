import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import { EnglishBlock, LocaleDivider, ThaiBlock } from "./Locale";

interface RolesProps {
  th: Profile["th"];
  en: Profile["en"];
}

export function Roles({ th, en }: RolesProps) {
  return (
    <section className="border-y border-card-border bg-section-alt">
      <div className="container-width section-padding !py-12 sm:!py-14">
        <AnimateIn>
          <ThaiBlock>
            <p className="mb-8 text-center text-sm font-bold text-accent-muted">{th.rolesHeading}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {th.primaryRoles.map((role) => (
                <div
                  key={role}
                  className="rounded-xl border border-card-border bg-card px-5 py-4 text-center transition-colors hover:border-accent-muted"
                >
                  <p className="text-[0.9375rem] font-semibold leading-snug text-foreground">{role}</p>
                </div>
              ))}
            </div>
          </ThaiBlock>
        </AnimateIn>

        <LocaleDivider />

        <AnimateIn delay={100}>
          <EnglishBlock>
            <p className="mb-8 text-center text-sm font-bold text-accent-muted">{en.rolesHeading}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {en.primaryRoles.map((role) => (
                <div
                  key={role}
                  className="rounded-xl border border-card-border bg-card px-5 py-4 text-center transition-colors hover:border-accent-muted"
                >
                  <p className="text-[0.9375rem] font-semibold leading-snug text-foreground">{role}</p>
                </div>
              ))}
            </div>
          </EnglishBlock>
        </AnimateIn>
      </div>
    </section>
  );
}
