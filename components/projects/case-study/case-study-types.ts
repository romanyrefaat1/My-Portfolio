import type { ReactNode } from "react";

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

export type CaseStudyTechCard = {
  number: string;
  title: string;
  description: ReactNode;
};

export type CaseStudyEngineeringCard = {
  title: string;
  description: ReactNode;
  code?: string;
};

export type CaseStudySectionIntro = {
  label: string;
  title: ReactNode;
  children?: ReactNode;
};

export type CaseStudySection =
  | {
      type: "feature";
      kicker: string;
      title: ReactNode;
      paragraphs: ReactNode[];
      image: CaseStudyImage;
      reverse?: boolean;
      points?: Array<{
        title: string;
        description: ReactNode;
      }>;
    }
  | {
      type: "story";
      kicker: string;
      title: ReactNode;
      paragraphs: ReactNode[];
      image: CaseStudyImage;
    }
  | {
      type: "two-screens";
      kicker: string;
      title: ReactNode;
      paragraphs: ReactNode[];
      images: [CaseStudyImage, CaseStudyImage];
    }
  | {
      type: "intro";
      intro: CaseStudySectionIntro;
    }
  | {
      type: "tech";
      intro: CaseStudySectionIntro;
      cards: CaseStudyTechCard[];
    }
  | {
      type: "architecture";
      intro: CaseStudySectionIntro;
    }
  | {
      type: "callout";
      intro: CaseStudySectionIntro;
      label: string;
      title: ReactNode;
      description: ReactNode;
    }
  | {
      type: "engineering";
      intro: CaseStudySectionIntro;
      cards: CaseStudyEngineeringCard[];
    }
  | {
      type: "system-flow";
      kicker: string;
      title: ReactNode;
      paragraphs: ReactNode[];
      steps: string[];
      caption?: string;
    }
  | {
      type: "screens";
      intro: CaseStudySectionIntro;
      images: CaseStudyImage[];
    };

export type CaseStudyProject = {
  number: string;
  name: string;

  hero: {
    eyebrow?: string;
    title: ReactNode;
    description: ReactNode;
    stack: string[];
    video?: string;
    image?: CaseStudyImage;
    demoUrl?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };

  sections: CaseStudySection[];

  result?: {
    eyebrow: string;
    title: ReactNode;
    paragraphs: ReactNode[];
    question?: ReactNode;
    takeaway?: {
      label: string;
      title: ReactNode;
    };
  };

  finalCta?: {
    image?: CaseStudyImage;
    eyebrow: string;
    title: ReactNode;
    primary?: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
};
