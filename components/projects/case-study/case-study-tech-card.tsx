import type { ReactNode } from "react";
import { MagicCard } from "@/components/ui/magic-card";

export function CaseStudyTechCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <MagicCard className="case-study-tech-card">
      <div className="case-study-tech-number">{number}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </MagicCard>
  );
}
