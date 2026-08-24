import type { ReactNode } from "react";
import { CaseStudyShot } from "./case-study-shot";

export function CaseStudyFeature({
  kicker,
  title,
  paragraphs,
  image,
  reverse = false,
  points,
}: {
  kicker: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  image: Parameters<typeof CaseStudyShot>[0]["image"];
  reverse?: boolean;
  points?: Array<{ title: string; description: ReactNode }>;
}) {
  return (
    <div className={`case-study-feature ${reverse ? "reverse" : ""}`}>
      <div className="case-study-feature-copy reveal">
        <div className="case-study-feature-kicker">{kicker}</div>

        <h2>{title}</h2>

        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {points && (
          <div className="case-study-feature-points">
            {points.map((point) => (
              <div className="case-study-feature-point" key={point.title}>
                <strong>{point.title}.</strong>{" "}
                {point.description}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="case-study-feature-image reveal">
        <CaseStudyShot image={image} />
      </div>
    </div>
  );
}
