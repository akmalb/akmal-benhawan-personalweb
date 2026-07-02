import type { Profile } from "@/src/data/profile";

interface FooterProps {
  profile: Profile;
}

type SocialIconName = Profile["socialLinks"][number]["icon"];

const filledIcons: Partial<Record<SocialIconName, React.ReactNode>> = {
  facebook: (
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  ),
  youtube: (
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
};

const strokeIcons: Partial<Record<SocialIconName, React.ReactNode>> = {
  email: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  "google-scholar": (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 008.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z"
      />
    </>
  ),
};

const externalLinkIcon = (
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
  />
);

function SocialLinkIcon({ icon }: { icon: SocialIconName }) {
  const strokePath = strokeIcons[icon];
  if (strokePath) {
    return (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {strokePath}
      </svg>
    );
  }

  const filledPath = filledIcons[icon];
  if (filledPath) {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        {filledPath}
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {externalLinkIcon}
    </svg>
  );
}

export function Footer({ profile }: FooterProps) {
  const { en, socialLinks } = profile;
  const year = new Date().getFullYear();
  const activeSocialLinks = socialLinks.filter((link) => link.href);

  return (
    <footer className="border-t border-card-border bg-card">
      <div className="container-width section-padding !py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-foreground">{en.footer.line1}</p>
            <p className="mt-1 text-sm text-muted">{en.footer.line2}</p>
            <p className="mt-3 text-xs text-muted">
              &copy; {year} {en.footer.line1}. {en.footer.copyright}
            </p>
          </div>

          {activeSocialLinks.length > 0 && (
            <div className="flex items-center gap-3">
              {activeSocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href!}
                  target={link.icon === "email" ? undefined : "_blank"}
                  rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                  aria-label={link.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-background text-muted transition-all hover:border-accent hover:text-accent"
                >
                  <SocialLinkIcon icon={link.icon} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
