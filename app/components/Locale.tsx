import type { SectionContent } from "@/src/data/types";

interface BilingualTitleProps {
  th: string;
  en: string;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "hero" | "section" | "card" | "small";
  className?: string;
  inverted?: boolean;
}

const titleSizes = {
  hero: {
    th: "font-thai text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]",
    en: "mt-1.5 text-lg font-medium",
  },
  section: {
    th: "font-thai font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
    en: "mt-1.5 text-sm font-medium sm:text-base",
  },
  card: {
    th: "font-thai font-serif text-xl font-bold leading-snug sm:text-2xl",
    en: "mt-1 text-sm font-medium",
  },
  small: {
    th: "font-thai font-serif text-lg font-semibold leading-snug sm:text-xl",
    en: "mt-0.5 text-xs font-medium sm:text-sm",
  },
};

export function BilingualTitle({
  th,
  en,
  as: Tag = "h3",
  size = "card",
  className = "",
  inverted = false,
}: BilingualTitleProps) {
  const sizes = titleSizes[size];
  const enClass = inverted ? "text-blue-100/90" : "text-muted";

  return (
    <div className={className}>
      <Tag className={`${sizes.th} text-foreground`}>{th}</Tag>
      <p className={`${sizes.en} ${enClass}`}>{en}</p>
    </div>
  );
}

interface BilingualTextProps {
  th: string;
  en: string;
  className?: string;
  inverted?: boolean;
}

export function BilingualText({ th, en, className = "", inverted = false }: BilingualTextProps) {
  const enClass = inverted ? "text-blue-100/85" : "text-muted";

  return (
    <div className={`space-y-2 ${className}`}>
      <p className="font-thai text-[1.0625rem] leading-[1.85] text-foreground">{th}</p>
      <p className={`text-[0.875rem] leading-[1.75] ${enClass}`}>{en}</p>
    </div>
  );
}

interface SectionHeadingProps {
  th: SectionContent;
  en: SectionContent;
}

export function SectionHeading({ th, en }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="mb-1 font-thai text-sm font-bold tracking-wide text-accent-muted">{th.label}</p>
      <p className="mb-4 text-xs font-medium tracking-wide text-muted">{en.label}</p>

      <BilingualTitle th={th.title} en={en.title} as="h2" size="section" />

      <BilingualText th={th.description} en={en.description} className="mt-5 max-w-2xl" />

      <div className="mt-7 h-0.5 w-20 rounded-full bg-accent" />
    </div>
  );
}

interface BilingualLabelProps {
  th: string;
  en: string;
  className?: string;
}

export function BilingualLabel({ th, en, className = "" }: BilingualLabelProps) {
  return (
    <div className={className}>
      <p className="font-thai text-sm text-muted">{th}</p>
      <p className="text-xs text-muted">{en}</p>
    </div>
  );
}

interface BilingualValueProps {
  th: string;
  en: string;
  className?: string;
}

export function BilingualValue({ th, en, className = "" }: BilingualValueProps) {
  return (
    <div className={className}>
      <p className="font-thai font-medium text-foreground">{th}</p>
      <p className="text-sm text-muted">{en}</p>
    </div>
  );
}
