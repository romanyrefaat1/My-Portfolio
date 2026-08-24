import type { ReactNode } from "react";
import { CaseStudyLabel } from "./case-study-label";

export function CaseStudySectionIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="case-study-section-intro reveal">
      <CaseStudyLabel>{label}</CaseStudyLabel>

      <h2 className="case-study-section-title">{title}</h2>

      {children && (
        <div className="case-study-section-copy">{children}</div>
      )}
    </div>
  );
}
