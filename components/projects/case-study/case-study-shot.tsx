import Image from "next/image";
import type { CaseStudyImage } from "./case-study-types";
import { CaseStudyVisual } from "./case-study-visuals";
import "./case-study-visuals.css";

export function CaseStudyShot({
  image,
  className = "",
}: {
  image: CaseStudyImage;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="case-study-screen">
        {image.visual ? (
          <div className="case-study-visual-frame" role="img" aria-label={image.alt}>
            <CaseStudyVisual visual={image.visual} />
          </div>
        ) : image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1000}
            priority={image.priority}
            className="block h-auto w-full"
          />
        ) : null}
      </div>

      {image.caption && (
        <p className="case-study-screen-caption">{image.caption}</p>
      )}
    </div>
  );
}
