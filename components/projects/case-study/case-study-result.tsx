import type { ReactNode } from "react";
import { CaseStudyLabel } from "./case-study-label";

export function CaseStudyResult({
  eyebrow,
  title,
  paragraphs,
  question,
  takeaway,
}: {
  eyebrow: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  question?: ReactNode;
  takeaway?: {
    label: string;
    title: ReactNode;
  };
}) {
  return (
    <div className="case-study-result-content reveal">
      <CaseStudyLabel>{eyebrow}</CaseStudyLabel>

      <h2>{title}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {question && (
        <p className="text-xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
          {question}
        </p>
      )}

      {takeaway && (
        <div className="case-study-callout text-left">
          <div className="case-study-callout-label">
            {takeaway.label}
          </div>

          <h3>{takeaway.title}</h3>
        </div>
      )}
    </div>
  );
}
