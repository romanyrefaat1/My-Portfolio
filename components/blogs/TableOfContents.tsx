"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";

export default function TableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const [activeId, setActiveId] = useState("");

  const visibleHeadings = headings.filter(
    (heading) => heading.level === 2
  );

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
    <div className="flex justify-center mb-10">
      <nav
        className="toc w-full max-w-2xl rounded-xl border p-6 md:p-8"
        aria-label="Table of contents"
      >
        <p className="toc-label mb-5 text-lg font-semibold">
          On this page
        </p>

        <ul className="toc-list space-y-3">
          {visibleHeadings.map((heading) => (
            <li key={heading.id} className="toc-item">
              <a
                href={`#${heading.id}`}
                onClick={(event) => handleClick(event, heading.id)}
                className={`block text-base leading-7 transition-colors md:text-lg ${
                  activeId === heading.id
                    ? "toc-active font-semibold"
                    : ""
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}