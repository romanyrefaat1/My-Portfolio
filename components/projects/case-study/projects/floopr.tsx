import type { CaseStudyProject } from "../case-study-types";

export const flooprCaseStudy: CaseStudyProject = {
  number: "02",
  name: "FLOOPR",

  hero: {
    eyebrow: "CASE STUDY - 02",
    title: (
      <>
        Collect feedback.
        <br />
        Understand it. Build from it.
      </>
    ),
    description:
      "Floopr is a feedback management platform that brings collection, analysis, prioritization, and product decisions into one workflow.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "AI"],
    image: {
      src: "/projects/floopr/dashboard.png",
      alt: "Floopr feedback dashboard",
      priority: true,
      caption: "FEEDBACK DASHBOARD",
    },
    secondaryLabel: "Explore the system ->",
    secondaryHref: "#technical",
  },

  sections: [
    {
      type: "intro",
      intro: {
        label: "THE IDEA",
        title: (
          <>
            Feedback is easy to collect.
            <br />
            Knowing what to do with it is not.
          </>
        ),
        children: (
          <>
            <p>
              A product can receive feedback from widgets, forms, and direct
              messages, all with different wording for the same underlying issue.
            </p>
            <p className="mt-4">
              Floopr started with a simple question: what if the entire feedback
              loop lived inside one product?
            </p>
          </>
        ),
      },
    },

    {
      type: "tech",
      intro: {
        label: "THE PRODUCT",
        title: (
          <>
            Collect.
            <br />
            Analyze. Build.
          </>
        ),
        children: (
          <p>
            Floopr connects customizable feedback components, a hosted feedback
            page, dashboards, analytics, duplicate detection, and Prey, its
            AI-powered insight layer.
          </p>
        ),
      },
      cards: [
        {
          number: "01",
          title: "Collect",
          description: "Give users multiple ways to submit feedback.",
        },
        {
          number: "02",
          title: "Analyze",
          description: "Turn responses into structured information, trends, and insights.",
        },
        {
          number: "03",
          title: "Build",
          description: "Help product teams understand what matters and decide what to work on.",
        },
        {
          number: "04",
          title: "Next.js + React",
          description: "A structured application for the product experience and integrations.",
        },
        {
          number: "05",
          title: "Supabase + PostgreSQL",
          description: "Authentication, relational data, and the foundation for processing feedback.",
        },
        {
          number: "06",
          title: "AI and embeddings",
          description: "Semantic similarity, summaries, and recommendations through Prey.",
        },
      ],
    },

    {
      type: "screens",
      intro: {
        label: "THE WALKTHROUGH",
        title: (
          <>
            Every screen has a job.
            <br />
            Together, they form the loop.
          </>
        ),
        children: (
          <p>
            From the first product setup to the final AI recommendation, Floopr
            was designed as a connected set of workflows for product teams and
            the people giving them feedback.
          </p>
        ),
      },
      images: [
        {
          src: "/projects/floopr/dashboard.png",
          alt: "Floopr landing page and onboarding experience",
          caption: "LANDING PAGE / ONBOARDING",
        },
        {
          src: "/projects/floopr/dashboard-darkmode.png",
          alt: "Floopr products summary screen",
          caption: "PRODUCTS SUMMARY",
        },
        {
          src: "/projects/floopr/dashboard.png",
          alt: "Floopr new product creation flow",
          caption: "NEW PRODUCT",
        },
        {
          src: "/projects/floopr/dashboard-darkmode.png",
          alt: "Floopr product feedback dashboard",
          caption: "PRODUCT DASHBOARD",
        },
        {
          src: "/projects/floopr/dashboard.png",
          alt: "Floopr analytics screen showing feedback trends",
          caption: "ANALYTICS",
        },
        {
          src: "/projects/floopr/dashboard-darkmode.png",
          alt: "Floopr component gallery and builder",
          caption: "COMPONENT BUILDER",
        },
        {
          src: "/projects/floopr/dashboard.png",
          alt: "Floopr integration and code export screen",
          caption: "INTEGRATION / CODE EXPORT",
        },
        {
          src: "/projects/floopr/dashboard-darkmode.png",
          alt: "Floopr hosted feedback page and Prey AI chat drawer",
          caption: "HOSTED PAGE / PREY 1.0",
        },
      ],
    },

    {
      type: "feature",
      kicker: "01 - GETTING STARTED",
      title: (
        <>
          A product should be
          <br />
          easy to set up.
        </>
      ),
      paragraphs: [
        "Users can quickly create a product container and start building their feedback workflow without a complicated configuration process.",
        "The product overview becomes the starting point for managing feedback and configuring collection.",
      ],
      points: [
        { title: "Overview", description: "See products under the account at a glance." },
        { title: "Access", description: "Open individual products quickly." },
        { title: "Foundation", description: "Configure feedback collection from one place." },
      ],
      image: {
        src: "/projects/floopr/dashboard.png",
        alt: "Floopr product dashboard",
        caption: "PRODUCT OVERVIEW",
      },
    },

    {
      type: "story",
      kicker: "02 - THE FEEDBACK DASHBOARD",
      title: (
        <>
          Everything collected,
          <br />
          in one place.
        </>
      ),
      paragraphs: [
        "Once feedback starts arriving, it becomes the central dataset for the product.",
        "The dashboard turns individual responses into a larger picture instead of treating each collection channel as a separate inbox.",
      ],
      image: {
        src: "/projects/floopr/dashboard-darkmode.png",
        alt: "Floopr feedback dashboard with submissions",
        caption: "FEEDBACK DATASET",
      },
    },

    {
      type: "feature",
      reverse: true,
      kicker: "03 - SEEING THE TREND",
      title: (
        <>
          Feedback becomes more useful
          <br />
          when you can see it change.
        </>
      ),
      paragraphs: [
        "A list tells you what people said. A trend can tell you whether something is happening more often.",
        "Floopr turns incoming feedback into time-series data so teams can monitor daily submission activity over time.",
      ],
      image: {
        src: "/projects/floopr/dashboard.png",
        alt: "Floopr analytics dashboard",
        caption: "ANALYTICS - FEEDBACK OVER TIME",
      },
    },

    {
      type: "callout",
      intro: {
        label: "04 - BUILD YOUR OWN FEEDBACK EXPERIENCE",
        title: (
          <>
            Feedback should not
            <br />
            look the same everywhere.
          </>
        ),
        children: (
          <p>
            The component builder lets users configure content, preview the
            experience, and deploy it without manually rebuilding the widget.
          </p>
        ),
      },
      label: "CONFIGURE -> PREVIEW -> DEPLOY",
      title: "Customization becomes part of the product experience.",
      description:
        "A live preview gives immediate visual feedback while editing, so users can change a component and adjust it before shipping.",
    },

    {
      type: "two-screens",
      kicker: "05 - LIVE PREVIEW",
      title: (
        <>
          Configuration should
          <br />
          feel visual.
        </>
      ),
      paragraphs: [
        "The builder replaces the slow loop of changing code, deploying, inspecting, and changing again with a faster change, preview, adjust workflow.",
      ],
      images: [
        {
          src: "/projects/floopr/dashboard.png",
          alt: "Floopr component configuration view",
          caption: "COMPONENT BUILDER",
        },
        {
          src: "/projects/floopr/dashboard-darkmode.png",
          alt: "Floopr component preview view",
          caption: "LIVE PREVIEW",
        },
      ],
    },

    {
      type: "system-flow",
      kicker: "09 - THE FEEDBACK PIPELINE",
      title: (
        <>
          Different collection methods.
          <br />
          One feedback dataset.
        </>
      ),
      paragraphs: [
        "Embedded widgets and hosted feedback pages feed into the same product rather than creating separate datasets.",
        "That shared foundation makes analytics, duplicate handling, and AI insights useful across every collection experience.",
      ],
      steps: ["EMBEDDED WIDGET", "HOSTED FEEDBACK PAGE", "FLOOPR PRODUCT", "FEEDBACK DATASET", "TRENDS / AI INSIGHTS / SIMILARITY"],
      caption: "COLLECT -> ORGANIZE -> UNDERSTAND",
    },

    {
      type: "feature",
      kicker: "10 - KEEPING THE DATA CLEAN",
      title: (
        <>
          More feedback can also
          <br />
          mean more noise.
        </>
      ),
      paragraphs: [
        "Floopr explored identical duplicate removal, improved duplicate UX, similar-feedback handling, and refetching after cleanup.",
        "A feedback system should not only collect more data. It should help keep that data useful for analytics and AI.",
      ],
      image: {
        src: "/projects/floopr/dashboard-darkmode.png",
        alt: "Floopr dashboard for managing feedback data",
        caption: "DATA QUALITY",
      },
    },

    {
      type: "engineering",
      intro: {
        label: "11 - SEMANTIC UNDERSTANDING",
        title: (
          <>
            Similar feedback does not
            <br />
            always use similar words.
          </>
        ),
        children: (
          <p>
            Embeddings make it possible to compare the meaning of submissions,
            not only their exact text, so differently worded reports can belong
            to the same underlying problem.
          </p>
        ),
      },
      cards: [
        {
          title: "Identical duplicates",
          description: "Remove submissions that repeat the same message.",
        },
        {
          title: "Semantic similarity",
          code: "feedback -> embedding -> related feedback",
          description: "Represent feedback by meaning so similar issues can be identified across different wording.",
        },
        {
          title: "Prey context",
          description: "Keep the AI layer connected to the feedback dataset belonging to a specific product.",
        },
        {
          title: "Useful data",
          description: "Improve the quality of the trends, summaries, and recommendations built on top of submissions.",
        },
      ],
    },

    {
      type: "feature",
      reverse: true,
      kicker: "12 - PREY 1.0",
      title: (
        <>
          What if you could ask
          <br />
          your feedback what matters?
        </>
      ),
      paragraphs: [
        "Prey is Floopr's AI assistant, presented as a floating chat interface inside the product.",
        "Its purpose is not to be a generic chatbot. It gives a specific feedback dataset a conversational interface.",
      ],
      image: {
        src: "/projects/floopr/dashboard.png",
        alt: "Floopr dashboard with AI feedback insights",
        caption: "PREY - AI INSIGHTS",
      },
    },

    {
      type: "tech",
      intro: {
        label: "15 - THE TECHNICAL SYSTEM",
        title: (
          <>
            Several systems.
            <br />
            One application.
          </>
        ),
        children: (
          <p>
            Floopr combines product management, collection, configuration,
            developer integration, analytics, data processing, and AI into one
            feedback workflow.
          </p>
        ),
      },
      cards: [
        { number: "01", title: "Product management", description: "Products, feedback, and configuration are managed centrally." },
        { number: "02", title: "Collection", description: "Feedback arrives through embeddable components or hosted pages." },
        { number: "03", title: "Developer integration", description: "Generated scripts, wrappers, and user metadata connect external products." },
        { number: "04", title: "Analytics", description: "Submissions become visual trends and daily counts." },
        { number: "05", title: "Data processing", description: "Duplicate and similar feedback are handled before analysis." },
        { number: "06", title: "AI", description: "Embeddings, summaries, and Prey provide an intelligence layer." },
      ],
    },

    {
      type: "system-flow",
      kicker: "16 - THE ARCHITECTURE",
      title: (
        <>
          From customer product
          <br />
          to product decisions.
        </>
      ),
      paragraphs: [
        "The customer product and its feedback experience connect to a collection layer, then to PostgreSQL data, analytics, and AI.",
        "The interesting part is not any individual technology. It is connecting every layer into one workflow.",
      ],
      steps: ["CUSTOMER PRODUCT", "WIDGET / HOSTED PAGE", "SUBMISSIONS + USER METADATA", "POSTGRESQL + VECTORS", "ANALYTICS + AI / PREY", "PRODUCT DECISIONS"],
      caption: "COLLECTION -> DATA -> DECISIONS",
    },

    {
      type: "intro",
      intro: {
        label: "18 - THE CHALLENGES",
        title: (
          <>
            The better collection works,
            <br />
            the harder understanding becomes.
          </>
        ),
        children: (
          <>
            <p>
              Floopr had to keep collection lightweight, customization accessible,
              multiple collection methods unified, noisy data under control, and
              AI focused on the actual problem of understanding feedback.
            </p>
            <p className="mt-4">
              Onboarding, loading states, navigation, validation, responsive
              behavior, and integration were part of making the system feel like a
              complete product.
            </p>
          </>
        ),
      },
    },

    {
      type: "intro",
      intro: {
        label: "17 - BUILDING THE PRODUCT",
        title: (
          <>
            A product evolves
            <br />
            through small decisions.
          </>
        ),
        children: (
          <>
            <p>
              Floopr grew from the application foundation into onboarding, a
              persistent account flow, dashboard navigation, loading states, and
              product-level pages.
            </p>
            <p className="mt-4">
              Component customization, live previews, Supabase embedding,
              developer integrations, duplicate handling, and AI infrastructure
              were added progressively around the feedback workflow.
            </p>
          </>
        ),
      },
    },

    {
      type: "intro",
      intro: {
        label: "19 - WHAT I LEARNED",
        title: (
          <>
            The feature is not
            <br />
            the whole product.
          </>
        ),
        children: (
          <>
            <p>
              A widget, dashboard, or AI summary is useful on its own. The real
              product comes from connecting collect, organize, understand, and
              act into one workflow.
            </p>
            <p className="mt-4">
              Floopr also reinforced that developer experience, data quality,
              context-rich AI, onboarding, loading states, error handling, and
              responsive behavior are all part of product design.
            </p>
          </>
        ),
      },
    },
  ],

  result: {
    eyebrow: "20 - THE RESULT",
    title: (
      <>
        From a feedback form
        <br />
        to a complete workflow.
      </>
    ),
    paragraphs: [
      "Floopr became a full feedback workflow rather than simply a feedback form.",
      "A customer could create a product, build and embed a component or share a hosted link, collect feedback, track trends, clean the data, and use Prey to surface priorities.",
    ],
    question: "How can software help product teams understand everything users are telling them?",
    takeaway: {
      label: "THE TAKEAWAY",
      title: (
        <>
          Collect feedback.
          <br />
          Analyze it. Build from it.
        </>
      ),
    },
  },

  finalCta: {
    image: {
      src: "/projects/floopr/dashboard-darkmode.png",
      alt: "Floopr feedback dashboard",
    },
    eyebrow: "FLOOPR",
    title: (
      <>
        The project is paused.
        <br />
        The idea is not.
      </>
    ),
    secondary: {
      label: "Back to work",
      href: "/#work",
    },
  },
};