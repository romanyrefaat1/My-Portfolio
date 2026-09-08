"use client";

import { useState } from "react";

export default function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      className="copy-code-btn"
      onClick={handleCopy}
      type="button"
      aria-label="Copy code"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}