import { CaseStudySectionIntro } from "./case-study-section-intro";
import { CaseStudyEngineeringCard } from "./case-study-engineering-card";
import type {
  CaseStudyEngineeringCard as EngineeringCardData,
  CaseStudySectionIntro as IntroData,
} from "./case-study-types";

export function CaseStudyEngineering({
  intro,
  cards,
}: {
  intro: IntroData;
  cards: EngineeringCardData[];
}) {
  return (
    <>
      <CaseStudySectionIntro {...intro} />

      <div className="case-study-engineering-grid reveal">
        {cards.map((card) => (
          <CaseStudyEngineeringCard
            key={card.title}
            title={card.title}
            code={card.code}
          >
            {card.description}
          </CaseStudyEngineeringCard>
        ))}
      </div>
    </>
  );
}
