import type { ReactNode } from "react";

export function CaseStudyEngineeringCard({
  title,
  children,
  code,
}: {
  title: string;
  children: ReactNode;
  code?: string;
}) {
  return (
    <div className="case-study-engineering-card">
      <h3>{title}</h3>
      <p>{children}</p>
      {code && <code>{code}</code>}
    </div>
  );
}
