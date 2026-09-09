"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";

export default function TableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const [activeId, setActiveId] = useState("");

  const visibleHeadings = headings.filter((heading) => heading.level === 2);

  useEffect(() => {
    if (!visibleHeadings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -70% 0px",
      }
    );

    visibleHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [visibleHeadings]);

  if (!visibleHeadings.length) return null;

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 96,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="toc mb-8 border-b pb-8"
      aria-label="Table of contents"
    >
      <p className="toc-label">On this page</p>

      <ul className="toc-list">
        {visibleHeadings.map((heading) => (
          <li
            key={heading.id}
            className={`toc-item ${
              activeId === heading.id ? "toc-active" : ""
            }`}
          >
            <a
              href={`#${heading.id}`}
              onClick={(event) => handleClick(event, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}