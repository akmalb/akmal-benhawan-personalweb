interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-muted">
        {label}
      </p>
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="prose-academic mt-5 max-w-2xl text-lg">{description}</p>
      )}
      <div className="mt-7 h-0.5 w-20 rounded-full bg-accent" />
    </div>
  );
}
