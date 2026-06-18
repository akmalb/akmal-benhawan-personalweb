import { primaryRoles } from "../data/portfolio";
import { AnimateIn } from "./AnimateIn";

export function Roles() {
  return (
    <section className="border-y border-card-border bg-section-alt">
      <div className="container-width section-padding !py-12 sm:!py-14">
        <AnimateIn>
          <p className="mb-8 text-center font-thai text-sm font-bold text-accent-muted">
            บทบาทและความรับผิดชอบหลัก{" "}
            <span className="font-normal text-muted">(Primary Roles)</span>
          </p>
        </AnimateIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primaryRoles.map((role, index) => (
            <AnimateIn key={role.th} delay={index * 80}>
              <div className="rounded-xl border border-card-border bg-card px-5 py-4 text-center transition-colors hover:border-accent-muted">
                <p className="font-thai text-[0.9375rem] font-semibold leading-snug text-foreground">
                  {role.th}
                </p>
                <p className="mt-1.5 text-xs leading-snug text-muted">({role.en})</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
