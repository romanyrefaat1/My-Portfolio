"use client";

import { useEffect, useState } from "react";
import { SiteNav } from "@/components/site-nav";

export default function BlogNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SiteNav
      type="blog"
      isScrolled={isScrolled}
      theme="dark"
      onThemeToggle={() => {}}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuToggle={() =>
        setIsMobileMenuOpen((value) => !value)
      }
      onMobileMenuClose={() => setIsMobileMenuOpen(false)}
    />
  );
}