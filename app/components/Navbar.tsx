"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";
import { BilingualNav } from "./Bilingual";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border bg-card/95 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width flex items-center justify-between py-4">
        <a
          href="#home"
          className="font-thai text-base font-bold text-foreground transition-colors hover:text-accent sm:text-lg"
        >
          อักมาล เบนหวัน
          <span className="ml-1.5 text-xs font-normal text-muted">(Akmal Benhawan)</span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-2 transition-colors hover:text-accent"
            >
              <BilingualNav text={link.label} />
            </a>
          ))}
          <div className="ml-2 border-l border-card-border pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-card-border bg-card"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-card-border bg-card px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 transition-colors hover:bg-accent-light"
              >
                <BilingualNav text={link.label} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
