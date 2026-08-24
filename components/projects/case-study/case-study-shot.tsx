import Image from "next/image";
import type { CaseStudyImage } from "./case-study-types";

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
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1000}
          priority={image.priority}
          className="block h-auto w-full"
        />
      </div>

      {image.caption && (
        <p className="case-study-screen-caption">{image.caption}</p>
      )}
    </div>
  );
}
