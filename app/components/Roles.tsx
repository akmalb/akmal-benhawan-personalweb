import type { Profile } from "@/src/data/profile";
import { AnimateIn } from "./AnimateIn";
import { BilingualTitle } from "./Locale";

interface RolesProps {
  th: Profile["th"];
  en: Profile["en"];
}

export function Roles({ th, en }: RolesProps) {
  return (
    <section className="border-y border-card-border bg-section-alt">
      <div className="container-width section-padding !py-12 sm:!py-14">
        <AnimateIn>
          <BilingualTitle
            th={th.rolesHeading}
            en={en.rolesHeading}
            as="h2"
            size="small"
            className="mb-8 text-center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {th.primaryRoles.map((role, index) => (
              <div
                key={role}
                className="rounded-xl border border-card-border bg-card px-5 py-4 text-center transition-colors hover:border-accent-muted"
              >
                <p className="font-thai text-[0.9375rem] font-semibold leading-snug text-foreground">{role}</p>
                <p className="mt-2 text-xs leading-snug text-muted">{en.primaryRoles[index]}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
