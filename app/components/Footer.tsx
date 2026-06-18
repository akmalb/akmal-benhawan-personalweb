import type { Profile } from "@/src/data/profile";

interface FooterProps {
  profile: Profile;
}

const icons: Record<Profile["socialLinks"][number]["icon"], React.ReactNode> = {
  facebook: (
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  ),
  youtube: (
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  email: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
};

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
          )}
        </div>
      </div>
    </footer>
  );
}
