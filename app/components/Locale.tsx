import type { SectionContent } from "@/src/data/types";

interface LocaleDividerProps {
  className?: string;
}

export function LocaleDivider({ className = "" }: LocaleDividerProps) {
  return (
    <div
      className={`my-10 flex items-center gap-4 ${className}`}
      role="separator"
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-card-border" />
      <div className="h-1.5 w-1.5 rounded-full bg-accent-muted" />
      <div className="h-px flex-1 bg-card-border" />
    </div>
  );
}

interface ThaiBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function ThaiBlock({ children, className = "" }: ThaiBlockProps) {
  return <div className={`font-thai ${className}`}>{children}</div>;
}

interface EnglishBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function EnglishBlock({ children, className = "" }: EnglishBlockProps) {
  return <div className={className}>{children}</div>;
}

interface SectionHeadingProps {
  th: SectionContent;
  en: SectionContent;
}

export function SectionHeading({ th, en }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <ThaiBlock>
        <p className="mb-4 text-sm font-bold tracking-wide text-accent-muted">{th.label}</p>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {th.title}
        </h2>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.85] text-foreground">
          {th.description}
        </p>
      </ThaiBlock>

      <LocaleDivider className="my-8" />

      <EnglishBlock>
        <p className="mb-4 text-sm font-bold tracking-wide text-accent-muted">{en.label}</p>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {en.title}
        </h2>
        <p className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.75] text-muted">
          {en.description}
        </p>
      </EnglishBlock>

      <div className="mt-7 h-0.5 w-20 rounded-full bg-accent" />
    </div>
  );
}

interface CardHeadingProps {
  children: React.ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
  thai?: boolean;
}

export function CardHeading({
  children,
  as: Tag = "h3",
  className = "",
  thai = false,
}: CardHeadingProps) {
  return (
    <Tag
      className={`font-serif text-xl font-bold leading-snug text-foreground sm:text-2xl ${
        thai ? "font-thai" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  thai?: boolean;
  muted?: boolean;
}

export function BodyText({
  children,
  className = "",
  thai = false,
  muted = false,
}: BodyTextProps) {
  return (
    <p
      className={`leading-[1.85] ${thai ? "font-thai text-[1.0625rem]" : "text-[0.9375rem]"} ${
        muted ? "text-muted" : "text-foreground"
      } ${className}`}
    >
      {children}
    </p>
  );
}
