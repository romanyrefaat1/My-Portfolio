import type { ReactNode } from "react";
import { CaseStudyShot } from "./case-study-shot";

export function CaseStudyTwoScreens({
  kicker,
  title,
  paragraphs,
  images,
}: {
  kicker: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  images: [
    Parameters<typeof CaseStudyShot>[0]["image"],
    Parameters<typeof CaseStudyShot>[0]["image"],
  ];
}) {
  return (
    <div className="case-study-story">
      <div className="case-study-story-copy reveal">
        <div className="case-study-feature-kicker">{kicker}</div>
        <h2>{title}</h2>

        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="case-study-story-media reveal">
        <div className="case-study-screens-grid">
          <CaseStudyShot image={images[0]} />
          <CaseStudyShot image={images[1]} />
        </div>
      </div>
    </div>
  );
}
