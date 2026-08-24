import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CaseStudyLabel } from "./case-study-label";

export function CaseStudyFinalCta({
  image,
  eyebrow,
  title,
  primary,
  secondary,
}: {
  image?: {
    src: string;
    alt: string;
  };
  eyebrow: string;
  title: React.ReactNode;
  primary?: {
    label: string;
    href: string;
  };
  secondary?: {
    label: string;
    href: string;
  };
}) {
  return (
    <section className="case-study-section">
      <div className="case-study-container">
        {image && (
          <div className="reveal mb-[5rem]">
            <div className="case-study-image">
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1000}
                className="block h-auto w-full"
              />

              <BorderBeam
                size={100}
                duration={8}
                borderWidth={1}
                className="from-transparent via-foreground/20 to-transparent"
              />
            </div>
          </div>
        )}

        <div className="case-study-result-content mt-[3rem] reveal">
          <CaseStudyLabel>{eyebrow}</CaseStudyLabel>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            {title}
          </h2>

          <div className="case-study-hero-actions justify-center">
            {primary && (
              <Link href={primary.href}>
                <ShimmerButton className="h-11 px-6 shadow-none">
                  <span className="text-sm font-medium">
                    {primary.label} <span className="ml-1">↗</span>
                  </span>
                </ShimmerButton>
              </Link>
            )}

            {secondary && (
              <Link href={secondary.href} className="link-secondary">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
