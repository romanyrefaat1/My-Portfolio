"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 96, behavior: "smooth" });
    }
  };

  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc-label">On this page</p>
      <ul className="toc-list">
        {headings.map((h) => (
          <li
            key={h.id}
            className={`toc-item toc-level-${h.level} ${
              activeId === h.id ? "toc-active" : ""
            }`}
          >
            <a href={`#${h.id}`} onClick={(e) => handleClick(e, h.id)}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}