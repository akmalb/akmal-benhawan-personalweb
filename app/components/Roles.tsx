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
      <div className="container-width section-padding !py-8 sm:!py-10">
        <AnimateIn>
          <BilingualTitle
            th={th.rolesHeading}
            en={en.rolesHeading}
            as="h2"
            size="small"
            className="mb-6 text-center"
          />
          <ul className="mx-auto grid max-w-4xl gap-2 sm:grid-cols-2">
            {th.primaryRoles.map((role, index) => (
              <li
                key={role}
                className="flex items-start gap-3 rounded-lg border border-card-border/60 bg-card/50 px-4 py-3"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div className="min-w-0">
                  <p className="font-thai text-sm font-semibold leading-snug text-foreground">{role}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{en.primaryRoles[index]}</p>
                </div>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
}
