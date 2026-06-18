import { personalInfo } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted">{personalInfo.institution}</p>
      </div>
    </footer>
  );
}
