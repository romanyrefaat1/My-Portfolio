import { CaseStudySectionIntro } from "./case-study-section-intro";
import { CaseStudyTechCard } from "./case-study-tech-card";
import type { CaseStudySectionIntro as IntroData, CaseStudyTechCard as TechCardData } from "./case-study-types";

export function CaseStudyTechSection({
  intro,
  cards,
}: {
  intro: IntroData;
  cards: TechCardData[];
}) {
  return (
    <>
      <CaseStudySectionIntro {...intro} />

      <div className="case-study-tech-grid reveal">
        {cards.map((card) => (
          <CaseStudyTechCard
            key={card.number}
            number={card.number}
            title={card.title}
          >
            {card.description}
          </CaseStudyTechCard>
        ))}
      </div>
    </>
  );
}
