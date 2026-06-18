import type { Bilingual } from "../data/portfolio";
import { BilingualBody, BilingualLabel, BilingualHeading } from "./Bilingual";

interface SectionHeadingProps {
  label: Bilingual;
  title: Bilingual;
  description?: Bilingual;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <BilingualLabel text={label} className="mb-4" />
      <BilingualHeading text={title} as="h2" size="section" />
      {description && <BilingualBody text={description} className="mt-5 max-w-2xl" />}
      <div className="mt-7 h-0.5 w-20 rounded-full bg-accent" />
    </div>
  );
}
