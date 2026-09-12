"use client";

export default function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-[9999] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border bg-background shadow-lg transition-transform hover:scale-105"
    >
      <svg
        className="pointer-events-none"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </a>
  );
}