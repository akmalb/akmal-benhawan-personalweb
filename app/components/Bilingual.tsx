import type { Bilingual } from "@/src/data/types";

interface BilingualLabelProps {
  text: Bilingual;
  className?: string;
}

/** Section label: Thai primary, English in parentheses */
export function BilingualLabel({ text, className = "" }: BilingualLabelProps) {
  return (
    <p className={`font-thai text-sm font-bold tracking-wide text-accent-muted ${className}`}>
      {text.th}{" "}
      <span className="font-normal text-muted">({text.en})</span>
    </p>
  );
}

interface BilingualHeadingProps {
  text: Bilingual;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "hero" | "section" | "card" | "small";
  tone?: "default" | "inverted";
  className?: string;
}

const headingSizes = {
  hero: {
    th: "font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]",
    en: "mt-1.5 text-base font-normal sm:text-lg",
  },
  section: {
    th: "font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight",
    en: "mt-1.5 text-sm font-normal sm:text-base",
  },
  card: {
    th: "font-serif text-xl font-bold leading-snug sm:text-2xl",
    en: "mt-1 text-xs font-normal sm:text-sm",
  },
  small: {
    th: "font-serif text-lg font-semibold leading-snug sm:text-xl",
    en: "mt-0.5 text-xs font-normal sm:text-sm",
  },
};

const headingTones = {
  default: { th: "text-foreground", en: "text-muted" },
  inverted: { th: "text-white", en: "text-blue-100/90" },
};

export function BilingualHeading({
  text,
  as: Tag = "h2",
  size = "section",
  tone = "default",
  className = "",
}: BilingualHeadingProps) {
  const sizes = headingSizes[size];
  const tones = headingTones[tone];
  return (
    <div className={className}>
      <Tag className={`font-thai ${sizes.th} ${tones.th}`}>{text.th}</Tag>
      <p className={`${sizes.en} ${tones.en}`}>({text.en})</p>
    </div>
  );
}

interface BilingualBodyProps {
  text: Bilingual;
  tone?: "default" | "inverted";
  className?: string;
}

/** Thai paragraph with smaller English below */
export function BilingualBody({ text, tone = "default", className = "" }: BilingualBodyProps) {
  const thClass = tone === "inverted" ? "text-blue-50" : "text-foreground";
  const enClass = tone === "inverted" ? "text-blue-100/85" : "text-muted";

  return (
    <div className={`space-y-2.5 ${className}`}>
      <p className={`font-thai text-[1.0625rem] leading-[1.85] ${thClass}`}>{text.th}</p>
      <p className={`text-[0.875rem] leading-[1.75] ${enClass}`}>{text.en}</p>
    </div>
  );
}

interface BilingualNavProps {
  text: Bilingual;
  className?: string;
}

export function BilingualNav({ text, className = "" }: BilingualNavProps) {
  return (
    <span className={`font-thai text-[0.8125rem] font-semibold leading-tight ${className}`}>
      {text.th}
      <span className="ml-1 text-[0.625rem] font-normal text-muted">({text.en})</span>
    </span>
  );
}

interface BilingualButtonProps {
  text: Bilingual;
  className?: string;
}

export function BilingualButton({ text, className = "" }: BilingualButtonProps) {
  return (
    <span className={`inline-flex flex-col items-start leading-tight ${className}`}>
      <span className="font-thai text-sm font-semibold">{text.th}</span>
      <span className="text-[0.6875rem] font-normal opacity-75">({text.en})</span>
    </span>
  );
}

interface BilingualInlineProps {
  text: Bilingual;
  primaryClassName?: string;
  secondaryClassName?: string;
  inline?: boolean;
}

export function BilingualInline({
  text,
  primaryClassName = "font-thai font-semibold text-foreground",
  secondaryClassName = "text-sm font-normal text-muted",
  inline = false,
}: BilingualInlineProps) {
  if (inline) {
    return (
      <p className={primaryClassName}>
        {text.th}{" "}
        <span className={secondaryClassName}>({text.en})</span>
      </p>
    );
  }

  return (
    <div className="space-y-0.5">
      <p className={primaryClassName}>{text.th}</p>
      <p className={secondaryClassName}>({text.en})</p>
    </div>
  );
}
