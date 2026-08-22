"use client";

import { useEffect, useState, useRef, MouseEvent } from "react";
import { SiteNav } from "@/components/site-nav";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  MarqueeSection,
  NowSection,
  ProcessSection,
  ServicesSection,
  WorkSection,
} from "@/components/portfolio-sections";
import { SiteFooter } from "@/components/site-footer";
import { useTheme } from "next-themes";

export default function Home() {
  // const [theme, setTheme] = useState<"dark" | "light">("dark");
  const {resolvedTheme: theme, setTheme} = useTheme()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [processProgress, setProcessProgress] = useState(0);

  const processListRef = useRef<HTMLDivElement>(null);
  const magicFrameRef = useRef<HTMLDivElement>(null);

  // Theme initialization (matching system preference if available)
  // useEffect(() => {
  //   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   setTheme(prefersDark ? "dark" : "light");
  // }, []);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // General scroll and section reveal logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Process line fill logic
      if (processListRef.current) {
        const rect = processListRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.35;
        const total = rect.height;
        let progress = (start - rect.top) / (start - end + total);
        progress = Math.max(0, Math.min(1, progress));
        setProcessProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    // Intersection Observer for .reveal classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const activeStepIndex = Math.min(3, Math.floor(processProgress * 4));

  const handleMagicMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magicFrameRef.current) return;
    const rect = magicFrameRef.current.getBoundingClientRect();
    magicFrameRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    magicFrameRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
      <>
        <SiteNav isScrolled={isScrolled} theme={theme} onThemeToggle={toggleTheme} isMobileMenuOpen={isMobileMenuOpen} onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} onMobileMenuClose={() => setIsMobileMenuOpen(false)} />
        <main id="top">
          <HeroSection />
          <MarqueeSection />
          <WorkSection theme={theme} magicFrameRef={magicFrameRef} onMagicMouseMove={handleMagicMouseMove} />
          <ServicesSection />
          <ProcessSection processListRef={processListRef} processProgress={processProgress} activeStepIndex={activeStepIndex} />
          <AboutSection />
          <NowSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </>
    );
}