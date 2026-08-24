import type { ReactNode } from "react";
import { CaseStudyShot } from "./case-study-shot";

export function CaseStudyStory({
  kicker,
  title,
  paragraphs,
  image,
}: {
  kicker: string;
  title: ReactNode;
  paragraphs: ReactNode[];
  image: Parameters<typeof CaseStudyShot>[0]["image"];
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
        <CaseStudyShot image={image} />
      </div>
    </div>
  );
}
