
import type { CaseStudyProject } from "../case-study-types";

export const lvryCaseStudy: CaseStudyProject = {
  number: "03",
  name: "LVRY",

  hero: {
    eyebrow: "CASE STUDY — 03",
    title: (
      <>
        An entire brand.
        <br />
        Built from an idea.
      </>
    ),
    demoUrl: "https://lvry.vercel.app",
    description:
      "LVRY is a fictional clothing label and e-commerce experience built from scratch. From the brand identity and product direction to the interactive shopping experience, I took the project from concept to implementation.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: {
      src: "/projects/lvry/hero.png",
      alt: "LVRY clothing brand homepage",
      priority: true,
      caption: "LVRY — THE EVERYDAY UNIFORM",
    },
    secondaryLabel: "Explore the experience ↘",
    secondaryHref: "#experience",
  },

  sections: [
    {
      type: "intro",
      intro: {
        label: "THE IDEA",
        title: (
          <>
            A clothing brand
            <br />
            is more than clothes.
          </>
        ),
        children: (
          <>
            <p>
              LVRY started with a simple idea: create a clothing label built
              around a small collection of everyday pieces that work together.
            </p>
            <p className="mt-4">
              But I didn't want to build another conventional clothing store.
              I wanted to create an entire brand with its own identity, visual
              language, product philosophy, and digital experience.
            </p>
            <p className="mt-4 font-medium text-fg">
              There was no existing brand, design system, or website to
              implement. I created the foundation myself.
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
          Before writing code,
          <br />
          I had a product to define.
        </>
      ),
      paragraphs: [
        "I approached LVRY as both a product and a brand. That meant defining what it should stand for, who it should appeal to, and what kind of experience would make sense for it.",
        "The central idea became a uniform made of pieces: a small, repeatable wardrobe where individual garments can be combined into different outfits.",
        "That idea influenced the product structure, the collections, the shopping flows, and eventually the website's signature feature.",
      ],
      image: {
        visual: "lvry-product-direction",
        alt: "LVRY editorial product direction board showing its everyday uniform concept and collection palette",
        caption: "THE PRODUCT CONCEPT",
      },
    },

    {
      type: "feature",
      kicker: "02 — BUILDING THE BRAND",
      title: (
        <>
          No brand guidelines.
          <br />
          I made them.
        </>
      ),
      paragraphs: [
        "I developed LVRY's identity from the ground up, including its name, positioning, tagline, personality, color palette, typography, and art direction.",
        "The visual direction combines a restrained clothing aesthetic with handmade paper and fabric elements. Cut-out garments, layered textures, and handwritten annotations give the brand a recognizable visual language.",
        "The copy follows the same philosophy: short, direct, and quietly confident. The visuals can be playful without making the brand feel loud.",
      ],
      points: [
        {
          title: "Identity",
          description: "Name, positioning, tagline, and brand personality.",
        },
        {
          title: "Visual system",
          description: "Colors, typography, textures, and art direction.",
        },
        {
          title: "Brand voice",
          description: "A consistent tone across product descriptions and website copy.",
        },
      ],
      image: {
        visual: "lvry-brand-identity",
        alt: "LVRY brand identity presentation showing its wordmark, typography, colors, and art direction",
        caption: "THE LVRY VISUAL IDENTITY",
      },
    },

    {
      type: "two-screens",
      kicker: "03 — THE DESIGN LANGUAGE",
      title: (
        <>
          A consistent identity
          <br />
          across every detail.
        </>
      ),
      paragraphs: [
        "The identity wasn't designed to live in a brand presentation. It had to work across an actual digital product.",
        "From the homepage and product cards to navigation, buttons, and shopping interfaces, every element follows the same visual direction without sacrificing usability.",
      ],
      images: [
        {
          src: "/projects/lvry/homepage.png",
          alt: "LVRY homepage design",
          caption: "HOMEPAGE",
        },
        {
          visual: "lvry-design-system",
          alt: "LVRY interface design system showing color tokens, typography, buttons, product cards, and controls",
          caption: "VISUAL SYSTEM",
        },
      ],
    },

    {
      type: "tech",
      intro: {
        label: "04 — THE E-COMMERCE EXPERIENCE",
        title: (
          <>
            Not just a storefront.
            <br />
            A connected experience.
          </>
        ),
        children: (
          <>
            <p>
              I translated the product direction into a complete e-commerce
              experience, with each part serving a specific purpose in the
              customer journey.
            </p>
            <p className="mt-4">
              Visitors can discover the collections, explore individual
              garments, combine pieces, and manage their selections through
              a consistent interface.
            </p>
          </>
        ),
      },
      cards: [
        {
          number: "01",
          title: "Homepage",
          description:
            "Introduce the brand through editorial layouts, campaign imagery, and clear paths into the collections.",
        },
        {
          number: "02",
          title: "Product discovery",
          description:
            "Browse collections with filtering, sorting, and product-focused layouts.",
        },
        {
          number: "03",
          title: "Product pages",
          description:
            "Explore individual garments through product imagery, details, and selection interfaces.",
        },
        {
          number: "04",
          title: "Uniform Builder",
          description:
            "Turn the clothing catalog into an interactive space for assembling outfits.",
        },
        {
          number: "05",
          title: "Lookbook",
          description:
            "Present outfit combinations through an editorial experience connected to the products.",
        },
        {
          number: "06",
          title: "Shopping bag",
          description:
            "Keep selected pieces together in a consistent shopping workflow.",
        },
      ],
    },

    {
      type: "feature",
      kicker: "05 — THE SIGNATURE FEATURE",
      title: (
        <>
          What if shopping
          <br />
          became creating?
        </>
      ),
      paragraphs: [
        "The Uniform Builder is the centerpiece of LVRY. Instead of treating garments as isolated products, it lets visitors bring different pieces together and experiment with their own combinations.",
        "It turns the brand's central idea into something people can actually interact with.",
        "Building this experience meant thinking beyond static layouts: the interface needs to respond to selections, maintain outfit state, and keep the different pieces working together.",
      ],
      points: [
        {
          title: "Product selection",
          description: "Choose garments from the available collection.",
        },
        {
          title: "Interactive canvas",
          description: "Arrange and experiment with pieces in one workspace.",
        },
        {
          title: "Connected state",
          description: "Keep selections and outfit information synchronized.",
        },
      ],
      image: {
        src: "/projects/lvry/uniform-builder.png",
        alt: "LVRY interactive uniform builder",
        caption: "THE UNIFORM BUILDER",
      },
    },

    {
      type: "two-screens",
      kicker: "06 — INTERACTION DESIGN",
      title: (
        <>
          The details make
          <br />
          the experience.
        </>
      ),
      paragraphs: [
        "A good interface isn't defined by how it looks in a screenshot. It's defined by how it responds when someone uses it.",
        "I designed the shopping experience around connected interactions, from product selection and filtering to outfit building and bag management.",
      ],
      images: [
        {
          src: "/projects/lvry/shop.png",
          alt: "LVRY product catalog and shopping interface",
          caption: "PRODUCT DISCOVERY",
        },
        {
          src: "/projects/lvry/product-detail.png",
          alt: "LVRY product detail page",
          caption: "PRODUCT EXPERIENCE",
        },
      ],
    },

    {
      type: "engineering",
      intro: {
        label: "07 — FRONTEND ENGINEERING",
        title: (
          <>
            A visual experience
            <br />
            needs a solid system.
          </>
        ),
        children: (
          <p>
            Behind the visual direction, LVRY is a structured React
            application. I built reusable interface components and separated
            catalog data from the state that drives the shopping experience.
            The goal was to make complex interactions manageable without
            sacrificing consistency.
          </p>
        ),
      },
      cards: [
        {
          title: "Component architecture",
          description:
            "Reusable components keep the interface consistent and make individual parts easier to maintain.",
        },
        {
          title: "Catalog state",
          code: "catalog → search → filters → products",
          description:
            "Product data and discovery logic are organized around the clothing catalog.",
        },
        {
          title: "Interactive state",
          code: "selection → builder → shopping bag",
          description:
            "Separate state responsibilities keep the builder and shopping experience connected without coupling everything together.",
        },
        {
          title: "Responsive interfaces",
          description:
            "Layouts and interactions adapt to different screen sizes rather than treating mobile as a smaller desktop.",
        },
        {
          title: "Interaction feedback",
          description:
            "Selections, actions, and interface states communicate what is happening instead of leaving users guessing.",
        },
        {
          title: "Accessibility",
          description:
            "Keyboard interaction, semantic structure, and reduced-motion considerations are part of the experience.",
        },
      ],
    },

    {
      type: "system-flow",
      kicker: "APPLICATION STRUCTURE",
      title: (
        <>
          From a product catalog
          <br />
          to a complete experience.
        </>
      ),
      paragraphs: [
        "The different parts of LVRY are connected rather than functioning as isolated pages.",
        "Catalog data feeds the shopping experience. Product selections become part of the uniform builder and shopping bag. Shared interface components keep the experience consistent across the application.",
      ],
      steps: [
        "PRODUCT CATALOG",
        "SHOPPING EXPERIENCE",
        "UNIFORM BUILDER",
        "APPLICATION STATE",
        "SHOPPING BAG",
      ],
      caption: "DATA → INTERACTION → EXPERIENCE",
    },

    {
      type: "screens",
      intro: {
        label: "08 — THE COMPLETE EXPERIENCE",
        title: (
          <>
            One brand.
            <br />
            Several connected experiences.
          </>
        ),
        children: (
          <p>
            LVRY brings the visual identity, product discovery, editorial
            content, and interactive shopping features together in one
            consistent website.
          </p>
        ),
      },
      images: [
        {
          src: "/projects/lvry/homepage.png",
          alt: "LVRY homepage",
          caption: "THE HOMEPAGE",
        },
        {
          src: "/projects/lvry/shop.png",
          alt: "LVRY clothing catalog",
          caption: "THE SHOP",
        },
        {
          src: "/projects/lvry/product-detail.png",
          alt: "LVRY garment product page",
          caption: "PRODUCT DETAILS",
        },
        {
          src: "/projects/lvry/uniform-builder.png",
          alt: "LVRY uniform builder",
          caption: "UNIFORM BUILDER",
        },
        {
          src: "/projects/lvry/lookbook.png",
          alt: "LVRY editorial lookbook",
          caption: "THE LOOKBOOK",
        },
        {
          src: "/projects/lvry/shopping-bag.png",
          alt: "LVRY shopping bag interface",
          caption: "THE SHOPPING BAG",
        },
      ],
    },
  ],

  result: {
    eyebrow: "THE RESULT",
    title: (
      <>
        From an idea
        <br />
        to an entire
        <br />
        digital brand.
      </>
    ),
    paragraphs: [
      "LVRY became more than an exercise in building an e-commerce website. It became an end-to-end product project, starting with an idea and developing into a brand identity, product direction, and interactive digital experience.",
      "I made the product decisions, established the visual direction, and built the frontend that brings everything together. Each part was designed to support the same central idea: a wardrobe made of pieces that work together.",
    ],
    question:
      "What would an online clothing store look like if the shopping experience was part of the brand itself?",
    takeaway: {
      label: "THE TAKEAWAY",
      title: (
        <>
          I don't just build
          <br />
          what a product looks like.
          <br />
          I help define what it becomes.
        </>
      ),
    },
  },

  finalCta: {
    image: {
      src: "/projects/lvry/homepage.png",
      alt: "LVRY clothing brand homepage",
    },
    eyebrow: "LVRY — THE EVERYDAY UNIFORM",
    title: (
      <>
        An idea,
        <br />
        made tangible.
      </>
    ),
    secondary: {
      label: "Back to work",
      href: "/#work",
    },
  },
};
