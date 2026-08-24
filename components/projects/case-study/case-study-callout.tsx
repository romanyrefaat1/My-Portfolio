import type { ReactNode } from "react";
import { CaseStudySectionIntro } from "./case-study-section-intro";
import type { CaseStudySectionIntro as IntroData } from "./case-study-types";

export function CaseStudyCallout({
  intro,
  label,
  title,
  description,
}: {
  intro: IntroData;
  label: string;
  title: ReactNode;
  description: ReactNode;
}) {
  return (
    <>
      <CaseStudySectionIntro {...intro} />

      <div className="case-study-callout reveal">
        <div className="case-study-callout-label">{label}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
