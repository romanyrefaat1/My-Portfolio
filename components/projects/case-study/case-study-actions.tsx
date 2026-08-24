"use client";

import { ChevronDown, Copy, MessageCircle } from "lucide-react";
import { useState } from "react";

function pageAsMarkdown() {
  const main = document.querySelector("main");
  if (!main) return "";

  return Array.from(main.querySelectorAll("h1, h2, h3, p, li, pre"))
    .map((element) => {
      const text = element.textContent?.replace(/\s+/g, " ").trim();
      if (!text) return "";
      if (element.matches("h1")) return `# ${text}`;
      if (element.matches("h2")) return `## ${text}`;
      if (element.matches("h3")) return `### ${text}`;
      if (element.matches("li")) return `- ${text}`;
      if (element.matches("pre")) return `\`\`\`\n${text}\n\`\`\``;
      return text;
    })
    .filter(Boolean)
    .join("\n\n");
}

export function CaseStudyActions() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  async function copyPage() {
    const markdown = pageAsMarkdown();
    if (!markdown) return;

    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function chatWith(provider: "claude" | "gemini" | "chatgpt") {
    const prompt = `Read and discuss this case study page: ${window.location.href}`;
    const urls = {
      claude: `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
      gemini: `https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`,
      chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
    };

    window.open(urls[provider], "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="case-study-actions" aria-label="Case study actions">
      <button type="button" className="case-study-action" onClick={copyPage}>
        <Copy size={15} aria-hidden="true" />
        {copied ? "Copied Markdown" : "Copy page"}
      </button>

      <div className="case-study-chat">
        <button
          type="button"
          className="case-study-action"
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((current) => !current)}
        >
          <MessageCircle size={15} aria-hidden="true" />
          Chat with page
          <ChevronDown size={14} aria-hidden="true" />
        </button>

        {open && (
          <div className="case-study-chat-menu" role="menu">
            <button type="button" role="menuitem" onClick={() => chatWith("claude")}>
              Claude
            </button>
            <button type="button" role="menuitem" onClick={() => chatWith("gemini")}>
              Gemini
            </button>
            <button type="button" role="menuitem" onClick={() => chatWith("chatgpt")}>
              ChatGPT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}