import type { Bilingual } from "@/src/data/types";

interface SectionHeadingProps {
  label: Bilingual;
  title: Bilingual;
  description?: Bilingual;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="mb-4 font-thai text-sm font-bold tracking-wide text-accent-muted">
        {label.th}{" "}
        <span className="font-normal text-muted">({label.en})</span>
      </p>
      <div>
        <h2 className="font-thai font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title.th}
        </h2>
        <p className="mt-1.5 text-sm font-normal text-muted sm:text-base">({title.en})</p>
      </div>
      {description && (
        <div className="mt-5 max-w-2xl space-y-2.5">
          <p className="font-thai text-[1.0625rem] leading-[1.85] text-foreground">{description.th}</p>
          <p className="text-[0.875rem] leading-[1.75] text-muted">{description.en}</p>
        </div>
      )}
      <div className="mt-7 h-0.5 w-20 rounded-full bg-accent" />
    </div>
  );
}
