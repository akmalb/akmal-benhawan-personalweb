import { footerContent, personalInfo, socialLinks } from "../data/portfolio";
import { BilingualInline } from "./Bilingual";

const icons: Record<string, React.ReactNode> = {
  github: (
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  researchgate: (
    <path d="M19.586 0c-.818 0-1.508.358-1.999.875C17.096.358 16.405 0 15.586 0H8.414c-.819 0-1.51.358-2.001.875C5.922.358 5.231 0 4.414 0H0v24h4.414c.817 0 1.508-.358 1.999-.875.491.517 1.182.875 2.001.875h7.172c.819 0 1.51-.358 2.001-.875.491.517 1.182.875 1.999.875H24V0h-4.414zM8.5 17.5h-2v-7h2v7zm4 0h-2v-7h2v7zm4 0h-2v-7h2v7z" />
  ),
  orcid: (
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.166H6.647V7.416zm3.562 0h3.9c3.712 0 5.372 2.653 5.372 5.075 0 2.578-2.016 5.091-5.325 5.091h-3.947V7.416zm1.444 1.303v7.534h2.453c2.578 0 3.822-1.769 3.822-3.753 0-2.156-1.254-3.781-3.791-3.781h-2.484z" />
  ),
  email: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card">
      <div className="container-width section-padding !py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-thai text-lg font-bold text-foreground">{personalInfo.name}</p>
            <p className="text-sm text-muted">({personalInfo.nameEn})</p>
            <BilingualInline
              text={personalInfo.institution}
              primaryClassName="font-thai mt-1 text-sm text-muted"
              secondaryClassName="text-xs text-muted"
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
            &copy; {year} {personalInfo.name} — {footerContent.rights.th}
          </p>
          <p className="mt-0.5 text-xs text-muted">
            {footerContent.rights.en}
          </p>
        </div>
      </div>
    </footer>
  );
}
