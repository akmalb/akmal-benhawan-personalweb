import type { Profile } from "@/src/data/profile";
import { BilingualValue } from "./Locale";

interface FooterProps {
  profile: Profile;
}

const icons: Record<string, React.ReactNode> = {
  github: (
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3 .405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  ),
  email: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
};

export function Footer({ profile }: FooterProps) {
  const { th, en, socialLinks } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card">
      <div className="container-width section-padding !py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <BilingualValue th={th.name} en={en.name} />
            <BilingualValue
              th={th.institution}
              en={en.institution}
              className="mt-2"
            />
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                aria-label={link.name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-background text-muted transition-all hover:border-accent hover:text-accent"
              >
                {link.icon === "email" ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icons.email}
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    {icons[link.icon]}
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-card-border pt-8 text-center">
          <p className="font-thai text-sm text-muted">
            &copy; {year} {th.name} — {th.footer.rights}
          </p>
          <p className="mt-1 text-xs text-muted">
            &copy; {year} {en.name} — {en.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
