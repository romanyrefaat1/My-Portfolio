import { CaseStudyHero } from "./case-study-hero";
import { CaseStudySectionIntro } from "./case-study-section-intro";
import { CaseStudyTechSection } from "./case-study-tech-section";
import { CaseStudyArchitecture } from "./case-study-architecture";
import { CaseStudyFeature } from "./case-study-feature";
import { CaseStudyStory } from "./case-study-story";
import { CaseStudyTwoScreens } from "./case-study-two-screens";
import { CaseStudyCallout } from "./case-study-callout";
import { CaseStudyEngineering } from "./case-study-engineering";
import { CaseStudySystemFlow } from "./case-study-system-flow";
import { CaseStudyScreensSection } from "./case-study-screens-section";
import { CaseStudyResult } from "./case-study-result";
import { CaseStudyFinalCta } from "./case-study-final-cta";
import type { CaseStudyProject, CaseStudySection } from "./case-study-types";

function renderSection(section: CaseStudySection, index: number) {
  switch (section.type) {
    case "intro":
      return <CaseStudySectionIntro key={index} {...section.intro} />;

    case "tech":
      return (
        <CaseStudyTechSection
          key={index}
          intro={section.intro}
          cards={section.cards}
        />
      );

    case "architecture":
      return (
        <div key={index}>
          <CaseStudySectionIntro {...section.intro} />
          <CaseStudyArchitecture />
        </div>
      );

    case "feature":
      return (
        <CaseStudyFeature
          key={index}
          kicker={section.kicker}
          title={section.title}
          paragraphs={section.paragraphs}
          image={section.image}
          reverse={section.reverse}
          points={section.points}
        />
      );

    case "story":
      return (
        <CaseStudyStory
          key={index}
          kicker={section.kicker}
          title={section.title}
          paragraphs={section.paragraphs}
          image={section.image}
        />
      );

    case "two-screens":
      return (
        <CaseStudyTwoScreens
          key={index}
          kicker={section.kicker}
          title={section.title}
          paragraphs={section.paragraphs}
          images={section.images}
        />
      );

    case "callout":
      return (
        <CaseStudyCallout
          key={index}
          intro={section.intro}
          label={section.label}
          title={section.title}
          description={section.description}
        />
      );

    case "engineering":
      return (
        <CaseStudyEngineering
          key={index}
          intro={section.intro}
          cards={section.cards}
        />
      );

    case "system-flow":
      return (
        <CaseStudySystemFlow
          key={index}
          kicker={section.kicker}
          title={section.title}
          paragraphs={section.paragraphs}
          steps={section.steps}
          caption={section.caption}
        />
      );

    case "screens":
      return (
        <CaseStudyScreensSection
          key={index}
          intro={section.intro}
          images={section.images}
        />
      );
  }
}

export function CaseStudy({
  project,
}: {
  project: CaseStudyProject;
}) {
  return (
    <div className="case-study-page">
      <main id="top">
        <CaseStudyHero
          projectNumber={project.number}
          name={project.name}
          {...project.hero}
        />

        {project.sections.map((section, index) => (
          <section
            key={index}
            id={index === 0 ? "technical" : undefined}
            className={`case-study-section ${
              section.type === "tech" ? "case-study-tech" : ""
            }`}
          >
            <div className="case-study-container">
              {renderSection(section, index)}
            </div>
          </section>
        ))}

        {project.result && (
          <section className="case-study-result">
            <div className="case-study-container">
              <CaseStudyResult {...project.result} />
            </div>
          </section>
        )}

        {project.finalCta && <CaseStudyFinalCta {...project.finalCta} />}
      </main>
    </div>
  );
}

export type { CaseStudyProject, CaseStudySection } from "./case-study-types";
