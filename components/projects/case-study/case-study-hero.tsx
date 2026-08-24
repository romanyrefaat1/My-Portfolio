import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowIcon } from "@/components/site-nav";
import { CaseStudyLabel } from "./case-study-label";

export function CaseStudyHero({
  projectNumber,
  name,
  eyebrow,
  title,
  description,
  stack,
  video,
  image,
  demoUrl,
  primaryLabel = "Live product",
  secondaryLabel = "Explore the system ↘",
  secondaryHref = "#technical",
}: {
  projectNumber: string;
  name: string;
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  stack: string[];
  video?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    priority?: boolean;
  };
  demoUrl?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="case-study-hero">
      <div className="case-study-container">
        <div className="case-study-hero-content reveal">
          <CaseStudyLabel>
            {eyebrow ?? `CASE STUDY — ${projectNumber}`}
          </CaseStudyLabel>

          <h1>{name}</h1>

          <p className="case-study-hero-sub">{title}</p>

          <p className="case-study-hero-sub">{description}</p>

          <div className="case-study-meta">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="case-study-hero-actions">
            {demoUrl ? (
              <Link href={demoUrl} className="btn-primary">
                {primaryLabel}
                <ArrowIcon />
              </Link>
            ) : (
              <span className="btn-primary pointer-events-none opacity-50">
                {primaryLabel}
                <ArrowIcon />
              </span>
            )}

            <Link href={secondaryHref} className="link-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>

        {(video || image) && (
          <div className="case-study-hero-media reveal">
            <div className="case-study-image">
              {video ? (
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="block h-auto w-full"
                />
              ) : image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  priority={image.priority}
                  className="block h-auto w-full"
                />
              ) : null}

              <BorderBeam
                size={120}
                duration={8}
                borderWidth={1}
                className="from-transparent via-foreground/30 to-transparent"
              />
            </div>

            {(image?.caption || video) && (
              <p className="case-study-screen-caption">
                {image?.caption ?? "PRODUCT DEMO"}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
