import type { ReactNode } from "react";
import { CaseStudyShot } from "./case-study-shot";

export function CaseStudySystemFlow({
  kicker,
  title,
  paragraphs,
  steps,
  caption,
}: {
  kicker: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  steps: string[];
  caption?: string;
}) {
  return (
    <div className="case-study-feature">
      <div className="case-study-feature-copy reveal">
        <div className="case-study-feature-kicker">{kicker}</div>
        <h2>{title}</h2>

        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="case-study-feature-image reveal">
        <div className="case-study-screen">
          <div className="p-6 md:p-8">
            <div className="case-study-label">SYSTEM FLOW</div>

            <div className="mt-8 space-y-3">
              {steps.map((step, index) => (
                <div key={`${step}-${index}`}>
                  <div className="rounded-lg border border-border bg-bg p-4 font-mono text-xs">
                    {step}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="py-2 text-center font-mono text-xs text-muted-fg">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {caption && (
          <p className="case-study-screen-caption">{caption}</p>
        )}
      </div>
    </div>
  );
}
