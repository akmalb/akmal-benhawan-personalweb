interface SectionHeadingProps {
  id?: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
      )}
      <div className="mt-6 h-1 w-16 rounded-full bg-accent" />
    </div>
  );
}
