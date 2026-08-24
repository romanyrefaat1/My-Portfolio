import { CaseStudySectionIntro } from "./case-study-section-intro";
import { CaseStudyShot } from "./case-study-shot";
import type {
  CaseStudyImage,
  CaseStudySectionIntro as IntroData,
} from "./case-study-types";

export function CaseStudyScreensSection({
  intro,
  images,
}: {
  intro: IntroData;
  images: CaseStudyImage[];
}) {
  return (
    <>
      <CaseStudySectionIntro {...intro} />

      <div className="case-study-screens-grid reveal">
        {images.map((image, index) => (
          <CaseStudyShot image={image} key={`${image.src}-${index}`} />
        ))}
      </div>
    </>
  );
}
