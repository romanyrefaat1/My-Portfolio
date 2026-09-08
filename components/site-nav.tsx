"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

type Theme = "dark" | "light";
type SiteNavType = "landing" | "blog";

type SiteNavProps = {
  isScrolled: boolean;
  theme: Theme;
  onThemeToggle: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  onMobileMenuClose: () => void;
  type?: SiteNavType;
};

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === "dark" ? (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ) : (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l1.41-1.41" />
    </svg>
  );
}

export function SiteNav({
  isScrolled,
  theme,
  onThemeToggle,
  isMobileMenuOpen,
  onMobileMenuToggle,
  onMobileMenuClose,
  type = "landing",
}: SiteNavProps) {
  const isBlog = type === "blog";

  const links = isBlog
    ? {
        logo: "/",
        work: "/#work",
        about: "/#about",
        blog: "/blogs",
        contact: "/#contact",
      }
    : {
        logo: "#top",
        work: "#work",
        about: "#about",
        blog: "/blogs",
        contact: "#contact",
      };

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`} id="nav">
        <Link href={links.logo} className="nav-logo">
          Romani
        </Link>

        <div className="nav-links">
          <Link href={links.work}>{isBlog && "My"} Work</Link>
          <Link href={links.about}>About {isBlog && "me"}</Link>

          <Link href={links.blog} className={isBlog ? "active" : ""}>
            Blog{isBlog && "s"}
          </Link>

          <Link href={links.contact} className="cta">
            Let's talk <ArrowIcon size={12} />
          </Link>

          {/* <ThemeButton theme={theme} onClick={onThemeToggle} /> */}
        </div>

        <div className="nav-mobile-toggle">
          <button onClick={onMobileMenuToggle} aria-label="Open menu">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        id="mobileMenu"
      >
        <Link
          href={links.work}
          className="mobile-link"
          onClick={onMobileMenuClose}
        >
          Work
        </Link>

        <Link
          href={links.about}
          className="mobile-link"
          onClick={onMobileMenuClose}
        >
          About
        </Link>

        <Link
          href={links.blog}
          className={`mobile-link ${isBlog ? "active" : ""}`}
          onClick={onMobileMenuClose}
        >
          Blog
        </Link>

        <Link
          href={links.contact}
          className="mobile-link"
          onClick={onMobileMenuClose}
        >
          Contact
        </Link>
      </div>
    </>
  );
}

function ThemeButton({
  theme,
  onClick,
  style,
}: {
  theme: Theme;
  onClick: () => void;
  style?: CSSProperties;
}) {
  return (
    <button
      className="theme-toggle"
      onClick={onClick}
      aria-label="Toggle dark mode"
      style={style}
    >
      <ThemeIcon theme={theme} />
    </button>
  );
}

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}