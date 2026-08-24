import type { CaseStudyProject } from "../case-study-types";

export const missionoCaseStudy: CaseStudyProject = {
  number: "01",
  name: "MISSIONO",

  hero: {
    eyebrow: "CASE STUDY — 01",
    title: (
      <>
        Missions are easy to plan.
        <br />
        Keeping track of them isn&apos;t.
      </>
    ),
    description:
      "Missiono is a mission and expense management application that keeps planning, tasks, spending, and progress connected in one place.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    video: "/projects/missiono/missiono-demo.mp4",
    demoUrl: "https://missiono.vercel.app",
    primaryLabel: "Live product",
    secondaryLabel: "Explore the system ↘",
    secondaryHref: "#technical",
  },

  sections: [
    {
      type: "tech",
      intro: {
        label: "TECHNICAL FOUNDATION",
        title: (
          <>
            The screens are only
            <br />
            the surface.
          </>
        ),
        children: (
          <>
            <p>
              Missiono is a full-stack application built around a
              relational data model. The interface is only one
              layer of the system.
            </p>
            <p className="mt-4">
              Next.js and TypeScript handle the application.
              Supabase provides authentication, database access,
              and realtime capabilities. PostgreSQL stores the
              relationships that make the product work.
            </p>
            <p className="mt-4 font-medium text-fg">
              The important part is how those pieces work
              together.
            </p>
          </>
        ),
      },
      cards: [
        {
          number: "01",
          title: "Next.js + TypeScript",
          description:
            "A structured application with typed components, application logic, routing, and server-side capabilities.",
        },
        {
          number: "02",
          title: "Supabase + PostgreSQL",
          description:
            "Authentication and relational application data backed by PostgreSQL.",
        },
        {
          number: "03",
          title: "Realtime data",
          description:
            "Relevant changes can propagate through the application without relying on manual refreshes.",
        },
        {
          number: "04",
          title: "Database logic",
          description:
            "Important relationships and derived information are kept close to the data.",
        },
        {
          number: "05",
          title: "Application state",
          description:
            "Missions, tasks, filters, authentication, and UI state work together as one application.",
        },
        {
          number: "06",
          title: "Responsive by default",
          description:
            "The same underlying workflow remains usable across different screen sizes.",
        },
      ],
    },

    {
      type: "architecture",
      intro: {
        label: "THE DATA MODEL",
        title: (
          <>
            A mission is more than
            <br />
            a screen.
          </>
        ),
        children: (
          <>
            <p>
              The application is built around relationships
              between missions, tasks, completion state, and
              spending.
            </p>
            <p className="mt-4">
              Those relationships determine what the user sees
              at the mission level.
            </p>
          </>
        ),
      },
    },

    {
      type: "feature",
      kicker: "THE PRODUCT",
      title: (
        <>
          One mission.
          <br />
          One source of truth.
        </>
      ),
      paragraphs: [
        "A mission might start as a list. Missiono turns that list into a structured workspace where the work, progress, and spending stay connected.",
        "Instead of jumping between notes, task lists, and separate budget tracking, the information lives together.",
      ],
      image: {
        src: "/projects/missiono/hero-section.png",
        alt: "Missiono mission overview",
        priority: true,
        caption: "THE MISSION — AT A GLANCE",
      },
    },

    {
      type: "story",
      kicker: "FROM PLAN TO EXECUTION",
      title: (
        <>
          A mission starts
          <br />
          with a plan.
        </>
      ),
      paragraphs: [
        "Before anything gets completed, the mission needs structure.",
        "Missiono starts with the mission itself: its name, description, and the context around the work.",
      ],
      image: {
        src: "/projects/missiono/new-mission.png",
        alt: "Missiono create mission form",
        caption: "CREATE MISSION",
      },
    },

    {
      type: "feature",
      kicker: "THE WORKING LAYER",
      title: (
        <>
          Turn the plan into
          <br />
          things you can act on.
        </>
      ),
      paragraphs: [
        "Tasks are where the mission becomes actionable. Each task carries the information needed to understand what needs to happen and what it means for the mission.",
      ],
      points: [
        {
          title: "State",
          description: "Track where the task currently stands.",
        },
        {
          title: "Completion",
          description: "Reflect whether the work has been completed.",
        },
        {
          title: "Cost",
          description:
            "Keep expected and actual spending attached to the task.",
        },
      ],
      image: {
        src: "/projects/missiono/tasks.png",
        alt: "Missiono tasks interface",
        caption: "TASKS — THE WORKING LAYER",
      },
    },

    {
      type: "feature",
      reverse: true,
      kicker: "DETAIL WITHOUT FRICTION",
      title: (
        <>
          The interface should
          <br />
          stay out of the way.
        </>
      ),
      paragraphs: [
        "Editing a task shouldn&apos;t mean leaving the workflow. The important information stays close to the action.",
        "This is where the task&apos;s state, quantity, expected price, and paid price can be updated.",
      ],
      image: {
        src: "/projects/missiono/edit-task.png",
        alt: "Missiono edit task interface",
        caption: "TASK DETAILS — EXPECTED VS. ACTUAL",
      },
    },

    {
      type: "callout",
      intro: {
        label: "ONE PRODUCT DECISION",
        title: (
          <>
            A budget has
            <br />
            two realities.
          </>
        ),
        children: (
          <>
            <p>
              Expected spending tells you what you planned. Actual
              spending tells you what happened.
            </p>
            <p className="mt-4">
              Missiono keeps both because a useful budget
              shouldn&apos;t stop being useful once the mission
              begins.
            </p>
          </>
        ),
      },
      label: "EXPECTED VS. ACTUAL",
      title:
        "Planning and reality belong in the same system.",
      description:
        "A task can have an expected price before the work happens and a paid price once the expense is real. Those values can then contribute to the mission&apos;s overall spending state.",
    },

    {
      type: "engineering",
      intro: {
        label: "ENGINEERING",
        title: (
          <>
            The interesting part
            <br />
            happens underneath.
          </>
        ),
        children: (
          <p>
            The UI is only useful when the data behind it stays
            consistent. Missiono uses application and database
            logic to keep related values synchronized.
          </p>
        ),
      },
      cards: [
        {
          title: "Realtime synchronization",
          description:
            "Relevant changes can propagate through the application so different parts of the interface stay aligned with current data.",
        },
        {
          title: "Derived mission state",
          code: "mission.current_paid ← completed task paid_price",
          description:
            "Mission-level spending can be derived from the underlying task data rather than manually maintaining duplicate values.",
        },
        {
          title: "Task state",
          description:
            "Completion is connected to task state so the application doesn&apos;t need multiple independent sources of truth for the same concept.",
        },
        {
          title: "Filtering",
          description:
            "Tasks can be filtered by properties such as date, completion, and state without changing the underlying data model.",
        },
      ],
    },

    {
      type: "system-flow",
      kicker: "APPLICATION ARCHITECTURE",
      title: (
        <>
          From database state
          <br />
          to interface.
        </>
      ),
      paragraphs: [
        "The application has several layers between a database row and what the user sees.",
        "Authentication determines access. Application state determines what the current interface needs. Database relationships provide the underlying data.",
        "Keeping those responsibilities separated makes the application easier to reason about as it grows.",
      ],
      steps: [
        "USER",
        "NEXT.JS APPLICATION",
        "SUPABASE",
        "POSTGRESQL",
      ],
      caption: "APPLICATION → DATA → INTERFACE",
    },

    {
      type: "two-screens",
      kicker: "THE PRODUCT AROUND THE PRODUCT",
      title: (
        <>
          A real application
          <br />
          starts before
          <br />
          the dashboard.
        </>
      ),
      paragraphs: [
        "Missiono also includes the surrounding flows required for a complete product: authentication, account creation, and access to the main workspace.",
      ],
      images: [
        {
          src: "/projects/missiono/login.png",
          alt: "Missiono login screen",
          caption: "LOGIN",
        },
        {
          src: "/projects/missiono/sign-up.png",
          alt: "Missiono sign up screen",
          caption: "SIGN UP",
        },
      ],
    },

    {
      type: "screens",
      intro: {
        label: "SELECTED SCREENS",
        title: (
          <>
            The interface is where
            <br />
            the system becomes visible.
          </>
        ),
        children: (
          <p>
            A few screens from the product show how the
            underlying structure turns into an actual working
            experience.
          </p>
        ),
      },
      images: [
        {
          src: "/projects/missiono/dashboard.png",
          alt: "Missiono dashboard",
          caption: "DASHBOARD — LIGHT MODE",
        },
        {
          src: "/projects/missiono/dashboard-darkmode.png",
          alt: "Missiono dark mode dashboard",
          caption: "DASHBOARD — DARK MODE",
        },
        {
          src: "/projects/missiono/add-task.png",
          alt: "Missiono add task interface",
          caption: "ADD TASK",
        },
      ],
    },
  ],

  result: {
    eyebrow: "THE RESULT",
    title: (
      <>
        From a simple idea
        <br />
        to a complete
        <br />
        product system.
      </>
    ),
    paragraphs: [
      "Missiono started with a straightforward question:",
      "The answer became more than a task list. It became a full-stack application connecting missions, tasks, progress, spending, authentication, application state, realtime data, and the interface that ties everything together.",
    ],
    question:
      "How do you keep a mission organized once the plan starts changing?",
    takeaway: {
      label: "THE TAKEAWAY",
      title: (
        <>
          Not just screens.
          <br />
          A product that works underneath them.
        </>
      ),
    },
  },

  finalCta: {
    image: {
      src: "/projects/missiono/dashboard.png",
      alt: "Missiono dashboard",
    },
    eyebrow: "MISSIONO",
    title: (
      <>
        Built from the
        <br />
        database up.
      </>
    ),
    primary: {
      label: "Open Missiono",
      href: "https://missiono.vercel.app",
    },
    secondary: {
      label: "Back to work",
      href: "/#work",
    },
  },
};
