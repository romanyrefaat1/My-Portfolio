import type { CaseStudyProject } from "../case-study-types";

export const san3yCaseStudy: CaseStudyProject = {
  number: "04",
  name: "San3y",

  hero: {
    eyebrow: "CASE STUDY — 02",
    title: (
      <>
        The work comes first.
        <br />
        The right person follows.
      </>
    ),
    demoUrl: "https://san3y.vercel.app",
    description:
  "San3y is a local services marketplace connecting people who need work done at home with craftsmen who can do it. I built the product across three connected experiences: a customer marketplace, a craftsman workspace, and an administrative operations system. From job requests and geographical matching to application management, communication, and operational oversight, the entire workflow is built around getting work done.",  stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Telegram Bot API",
    ],
    image: {
      src: "/projects/San3y/hero.png",
      alt: "San3y homepage showing its Arabic local services marketplace experience",
      priority: true,
      caption: "San3y — A LOCAL SERVICES MARKETPLACE",
    },
    secondaryLabel: "Explore the product ↘",
    secondaryHref: "#experience",
  },

  sections: [
    {
      type: "intro",
      intro: {
        label: "THE IDEA",
        title: (
          <>
            Finding the right person
            <br />
            starts with understanding
            <br />
            the work.
          </>
        ),
        children: (
          <>
            <p>
              San3y started with a simple premise: when something needs
              fixing at home, the person experiencing the problem does not
              necessarily know which specialist to contact or where to find
              someone suitable.
            </p>

            <p className="mt-4">
              Instead of building another directory of service providers,
              I wanted to create a marketplace where people could describe
              the work, receive applications from craftsmen, and decide
              who they wanted to work with.
            </p>

            <p className="mt-4 font-medium text-fg">
              The job became the center of the product. Everything else
              was designed around it.
            </p>
          </>
        ),
      },
    },

    {
      type: "story",
      kicker: "01 — PRODUCT DIRECTION",
      title: (
        <>
          Not another directory.
          <br />
          A marketplace built
          <br />
          around the job.
        </>
      ),
      paragraphs: [
        "A traditional service directory starts by asking people to find a professional. That assumes they already know what kind of specialist they need and how to identify the right person.",
        "I approached the problem differently. Customers start by describing the work. They provide the relevant service type and area, then interested craftsmen can apply to that specific job.",
        "This changes the central interaction from browsing people to publishing work. The customer receives applications rather than having to independently contact every potential craftsman.",
        "The initial scope was deliberately focused on Faisal, Giza, with plumbing and electrical work as the first service categories. A focused starting point made more sense than presenting the product as a nationwide marketplace before it had the coverage to support that claim.",
      ],
      image: {
        src: "/projects/San3y/marketplace-flow.png",
        alt: "Diagram showing a customer job request moving through applications and craftsman selection",
        caption: "FROM A JOB REQUEST TO A DECISION",
      },
    },

    {
      type: "feature",
      kicker: "02 — THE CUSTOMER AND CRAFTSMAN EXPERIENCE",
      title: (
        <>
          Two different users.
          <br />
          One shared job.
        </>
      ),
      paragraphs: [
        "San3y has two distinct sides, and each needs a different experience.",
        "Customers need to explain their requirements, understand who has applied, compare the available information, and choose someone. Craftsmen need to discover relevant work, understand what is required, and communicate their proposed price.",
        "I built the workflow around these different responsibilities while keeping both experiences connected to the same job record.",
      ],
      points: [
        {
          title: "For customers",
          description:
            "Create a job, receive applications, compare proposed prices and messages, select a craftsman, and continue the conversation.",
        },
        {
          title: "For craftsmen",
          description:
            "Discover available work, review its requirements, submit an application, and follow the customer's decision.",
        },
        {
          title: "For both",
          description:
            "Keep communication and job progress associated with the same request instead of scattering them across unrelated interactions.",
        },
      ],
      image: {
        src: "/projects/San3y/applications.png",
        alt: "Customer interface displaying applications submitted for a job",
        caption: "THE CUSTOMER'S APPLICATION REVIEW",
      },
    },

    {
      type: "two-screens",
      kicker: "03 — EXPERIENCE DESIGN",
      title: (
        <>
          Different entry points.
          <br />
          The same marketplace.
        </>
      ),
      paragraphs: [
        "The customer and craftsman should not be forced through the same interface. They have different goals, different information needs, and different reasons for returning to the product.",
        "The customer-facing experience is centered around describing and managing work. The craftsman-facing experience is centered around discovering suitable jobs and responding to them.",
        "Both sides use the same product language and underlying workflow, without pretending their experiences are identical.",
      ],
      images: [
        {
          src: "/projects/San3y/job-posting.png",
          alt: "San3y customer job creation interface",
          caption: "POSTING A JOB",
        },
        {
          src: "/projects/San3y/craftsman-feed.png",
          alt: "San3y craftsman interface showing available jobs",
          caption: "DISCOVERING AVAILABLE WORK",
        },
      ],
    },

    {
      type: "feature",
      kicker: "04 — APPLICATIONS AND DECISION MAKING",
      title: (
        <>
          An application
          <br />
          should mean more
          <br />
          than just interest.
        </>
      ),
      paragraphs: [
        "I wanted customers to have something useful to evaluate, rather than simply receiving a list of craftsmen who expressed interest.",
        "Applications include a proposed price and a message from the craftsman. The price also has a type, distinguishing a fixed proposed price from an initial estimate.",
        "The customer can review the incoming applications and make a decision. Each application has its own status, so accepting one does not require treating every other application as the same kind of interaction.",
        "This makes the application a meaningful part of the marketplace rather than a generic contact button.",
      ],
      points: [
        {
          title: "Proposed price",
          description:
            "Understand what the craftsman is proposing before making a decision.",
        },
        {
          title: "Application message",
          description:
            "Give the craftsman a way to respond to the specific requirements of the job.",
        },
        {
          title: "Application status",
          description:
            "Track pending, accepted, rejected, and withdrawn applications independently.",
        },
      ],
      image: {
        src: "/projects/San3y/applications.png",
        alt: "San3y application details with proposed prices and craftsman messages",
        caption: "PRICE, MESSAGE, AND A CLEAR DECISION",
      },
    },

    {
  type: "feature",
  kicker: "05 — ADMINISTRATIVE OPERATIONS",
  title: (
    <>
      A marketplace needs
      <br />
      someone to run it, too.
    </>
  ),
  paragraphs: [
    "Building the customer and craftsman experiences was only part of the problem. A marketplace also needs an operational layer to monitor activity, manage participants, oversee applications, and help connect available craftsmen with the right jobs.",

    "I built a dedicated administrative dashboard that provides visibility into the marketplace and gives administrators tools to manage its day-to-day operations.",

    "Rather than treating administration as a separate collection of generic CRUD screens, I designed it around the actual workflows happening inside San3y."
  ],
  points: [
    {
      title: "Marketplace overview",
      description:
        "Monitor total jobs and their current lifecycle, including open, in-progress, and completed work."
    },
    {
      title: "Matching oversight",
      description:
        "Inspect recommended craftsmen for each job, including their distance, availability, account status, verification, and application activity. Refresh recommendations when necessary."
    },
    {
      title: "Application decisions",
      description:
        "Review proposed prices and messages, inspect the associated customer and craftsman, and manage application decisions directly."
    },
    {
      title: "Craftsman onboarding",
      description:
        "Provision craftsman accounts with their professional information, service areas, profile details, and geographical coordinates."
    },
    {
      title: "Operational follow-up",
      description:
        "Track manual phone calls, inspect Telegram connection and notification status, and record administrative activity."
    }
  ],
  image: {
    src: "/projects/San3y/admin-dashboard.png",
    alt: "San3y administrative dashboard showing marketplace operations",
    caption: "THE ADMINISTRATIVE WORKSPACE"
  }
},

    {
      type: "feature",
      kicker: "05 — TELEGRAM INTEGRATION",
      title: (
        <>
          The marketplace
          <br />
          shouldn't stop
          <br />
          when the website closes.
        </>
      ),
      paragraphs: [
        "One problem with a marketplace that depends on applications and conversations is that important updates can be missed when users are away from the website.",
        "I integrated Telegram notifications so customers and craftsmen can receive relevant updates through Telegram instead of having to repeatedly open the platform to check for changes.",
        "The integration uses separate client and craftsman bots, with notification events routed according to the user and the action that occurred.",
        "A new application, an accepted application, a new message, or an update to job completion can trigger a notification. Telegram becomes an extension of the product's communication experience, not a replacement for the application itself.",
      ],
      points: [
        {
          title: "New job",
          description:
            "Notify connected craftsmen when relevant work becomes available.",
        },
        {
          title: "New application",
          description:
            "Let the customer know when a craftsman responds to their job.",
        },
        {
          title: "Application accepted",
          description:
            "Inform the selected craftsman that the customer has chosen them.",
        },
        {
          title: "New message",
          description:
            "Keep the other participant informed when a new message arrives.",
        },
        {
          title: "Job completion",
          description:
            "Notify the other participant when one side reports that the work is finished.",
        },
      ],
      image: {
        src: "/projects/San3y/telegram-notifications.png",
        alt: "San3y Telegram bots displaying marketplace notifications",
        caption: "IMPORTANT UPDATES, OUTSIDE THE WEBSITE",
      },
    },

    {
      type: "tech",
      intro: {
        label: "06 — THE TECHNICAL FOUNDATION",
        title: (
          <>
            The job is the
            <br />
            shared source
            <br />
            of truth.
          </>
        ),
        children: (
          <>
            <p>
              The product's different experiences need to stay connected.
              A customer creates a job, craftsmen apply to it, one application
              can be accepted, and the conversation continues around that
              same piece of work.
            </p>

            <p className="mt-4">
              I structured the application around relational data in
              Supabase and PostgreSQL, using Next.js and TypeScript for
              the application and its user experiences.
            </p>
          </>
        ),
      },
      cards: [
        {
          number: "01",
          title: "Jobs",
          description:
            "The central record stores the customer, job description, service type, budget, area, selected craftsman, and lifecycle information.",
        },
        {
          number: "02",
          title: "Applications",
          description:
            "Each application connects a craftsman to a specific job, with a proposed price, message, price type, and independent application status.",
        },
        {
          number: "03",
          title: "Conversations",
          description:
            "A job-specific chat connects the customer and craftsman. Messages belong to that conversation, preserving their relationship with the original work.",
        },
        {
          number: "04",
          title: "Notifications",
          description:
            "A Supabase Edge Function handles Telegram notification events and routes updates through the appropriate client or craftsman bot.",
        },
      ],
    },

    {
      type: "engineering",
      intro: {
        label: "07 — APPLICATION LOGIC",
        title: (
          <>
            A marketplace has
            <br />
            more than one
            <br />
            kind of state.
          </>
        ),
        children: (
          <p>
            One of the important engineering considerations was separating
            the lifecycle of a job from the lifecycle of an application.
            They are related, but they represent different decisions and
            should not be treated as one generic status.
          </p>
        ),
      },
      cards: [
        {
          title: "Job lifecycle",
          code: "open → in_progress → completion_requested → completed",
          description:
            "A job moves through its own lifecycle, with cancellation represented as a separate possible state.",
        },
        {
          title: "Application lifecycle",
          code: "pending → accepted / rejected / withdrawn",
          description:
            "Applications have independent states, allowing multiple craftsmen to respond while the customer makes a selection.",
        },
        {
          title: "Two-sided completion",
          code: "client_finished_at + craftsman_finished_at",
          description:
            "The product records completion from both participants separately, rather than assuming that one person's confirmation automatically represents both sides.",
        },
        {
          title: "Job-specific communication",
          code: "job → chat → messages",
          description:
            "The conversation is connected to the job and its participants, keeping the communication model aligned with the marketplace workflow.",
        },
        {
          title: "Event-driven notifications",
          code: "database event → Edge Function → Telegram",
          description:
            "Important application events can trigger external notifications without requiring users to remain on the website.",
        },
        {
          title: "Role-specific experiences",
          description:
            "Customers and craftsmen receive different information and notifications based on their relationship to the job and the event.",
        },
      ],
    },

    {
      type: "system-flow",
      kicker: "THE COMPLETE MARKETPLACE WORKFLOW",
      title: (
        <>
          From a household problem
          <br />
          to a connected job.
        </>
      ),
      paragraphs: [
        "The marketplace is not a collection of disconnected screens. Its value comes from the transitions between them.",
        "A customer creates a job, relevant craftsmen can apply, the customer chooses an applicant, and both participants continue through a job-specific conversation and completion workflow.",
        "Telegram notifications extend this process beyond the website, keeping both sides informed about important events.",
      ],
      steps: [
        "CUSTOMER POSTS A JOB",
        "SERVICE AND AREA",
        "CRAFTSMEN APPLY",
        "CUSTOMER SELECTS",
        "JOB-SPECIFIC CHAT",
        "COMPLETION AND FEEDBACK",
      ],
      caption: "ONE JOB CONNECTS THE ENTIRE EXPERIENCE",
    },

    {
  type: "feature",
  kicker: "08 — TRUST AND REPUTATION",
  title: (
    <>
      The relationship
      <br />
      doesn't end
      <br />
      when the job does.
    </>
  ),
  paragraphs: [
    "A marketplace needs more than a way to connect people. It needs a way to help them make better decisions about whom to work with.",

    "After a job is completed, both participants can leave feedback. Customers evaluate work quality and the craftsman's treatment, while craftsmen can report how the customer relationship went and identify specific issues.",

    "These reviews become part of the public profile experience, alongside professional information and operational metrics such as response time, response rate, and completion rate."
  ],
  points: [
    {
      title: "Work quality",
      description:
        "Customers rate the quality of the completed work on a five-point scale."
    },
    {
      title: "Professional treatment",
      description:
        "Customers separately evaluate the craftsman's respect and treatment."
    },
    {
      title: "Two-sided feedback",
      description:
        "Craftsmen can report positive or problematic customer experiences, with categorized issues and optional comments."
    },
    {
      title: "Public reputation",
      description:
        "Reviews and professional performance information help future customers evaluate craftsmen."
    }
  ],
  image: {
    src: "/projects/San3y/reviews.png",
    alt: "San3y two-sided review experience",
    caption: "FEEDBACK THAT BUILDS TRUST"
  }
},

    {
      type: "screens",
      intro: {
        label: "08 — THE FINISHED EXPERIENCE",
        title: (
          <>
            More than a job form.
            <br />
            A connected product.
          </>
        ),
        children: (
          <>
            <p>
              San3y brings the customer experience, craftsman experience,
              applications, conversations, and external notifications
              together around a single marketplace workflow.
            </p>

            <p className="mt-4">
              The initial product is focused on a specific local market
              rather than presenting an unproven nationwide service directory.
            </p>
          </>
        ),
      },
      images: [
        {
          src: "/projects/San3y/job-chat.png",
          alt: "San3y conversation between a customer and a selected craftsman",
          caption: "JOB-SPECIFIC CONVERSATION",
        },
        {
          src: "/projects/San3y/job-lifecycle.png",
          alt: "San3y job details and completion status interface",
          caption: "TRACKING THE JOB",
        },
      ],
    },
  ],

  result: {
    eyebrow: "THE RESULT",
    title: (
      <>
        From finding
        <br />
        a craftsman
        <br />
        to managing the work.
      </>
    ),
    paragraphs: [
      "San3y became a connected marketplace experience built around a simple idea: start with the job, bring relevant craftsmen into the process, and give the customer a way to evaluate and select an applicant.",
      "I worked across the product direction, customer and craftsman workflows, relational data model, application lifecycle, job-specific communication, and Telegram notification integration.",
      "The result is a deployed product foundation focused initially on Faisal, Giza, and plumbing and electrical work. It is a starting point for a local marketplace, not a claim of nationwide coverage or proven commercial traction.",
    ],
    question:
      "What if finding the right craftsman started with describing the work instead of searching through a directory?",
    takeaway: {
      label: "THE TAKEAWAY",
      title: (
        <>
          I didn't just build
          <br />
          a place to find people.
          <br />
          I built the workflow
          <br />
          that brings them together.
        </>
      ),
    },
  },

  finalCta: {
    image: {
      src: "/projects/San3y/hero.png",
      alt: "San3y local services marketplace homepage",
    },
    eyebrow: "San3y — THE WORK COMES FIRST",
    title: (
      <>
        A local problem.
        <br />
        A connected product.
      </>
    ),
    secondary: {
      label: "Back to work",
      href: "/#work",
    },
  },
};