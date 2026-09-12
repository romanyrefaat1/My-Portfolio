import type { Metadata } from "next";
import { GuideForm } from "./GuideForm";
import "./guide-page-additions.css"

const TITLE =
  "7 Website Problems That Quietly Cost Businesses Customers — Free Guide";
const DESCRIPTION =
  "A free, no-fluff guide for business owners: the 8 website problems that lose you customers before they ever contact you — homepage clarity, speed, mobile, trust signals, conversion friction, FAQs, measurement, and upkeep. Written by a web developer, not a marketer.";
const CANONICAL_PATH =
  "/guides/free/7-website-problems-that-quietly-cost-businesses-customers";
const SITE_URL = "https://romani.vercel.app"; // update if the production domain differs
const OG_IMAGE = `${SITE_URL}/guides/og-7-website-problems.png`; // 1200x630 recommended

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL_PATH,
  },
  keywords: [
    "website problems",
    "website losing customers",
    "small business website mistakes",
    "website conversion optimization",
    "website audit checklist",
    "web developer guide",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${CANONICAL_PATH}`,
    siteName: "Romany — Web Developer",
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "7 Website Problems That Quietly Cost Businesses Customers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SECTIONS = [
  {
    n: "01",
    title: "Your homepage has one job",
    desc: "Most businesses make the same mistake here. The first few seconds matter more than you think.",
  },
  {
    n: "02",
    title: "Speed is a feature",
    desc: "A few things quietly make a site feel slow, even when the page looks perfectly fine.",
  },
  {
    n: "03",
    title: "Mobile is the main event",
    desc: "There’s a reason your desktop version can look great while something still feels wrong.",
  },
  {
    n: "04",
    title: "Trust signals do the convincing",
    desc: "People decide whether to trust a business faster than most owners realize. The clues are surprisingly simple.",
  },
  {
    n: "05",
    title: "Make it easy to say yes",
    desc: "There’s usually a moment where interested visitors disappear. Most sites make that moment harder than it needs to be.",
  },
  {
    n: "06",
    title: "Answer the questions people actually ask",
    desc: "Your visitors are already looking for answers. The interesting part is what happens when they don’t find them.",
  },
  {
    n: "07",
    title: "If you can’t measure it, you’re guessing",
    desc: "A surprising number of websites have no clear idea what happens after someone lands on the page.",
  },
  {
    n: "08",
    title: "Nobody updates their website",
    desc: "Most businesses leave this untouched for far too long. That creates a very easy opportunity for someone paying attention.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Website Problems That Quietly Cost Businesses Customers",
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Romany",
    jobTitle: "Web Developer",
  },
  publisher: {
    "@type": "Person",
    name: "Romany",
  },
  mainEntityOfPage: `${SITE_URL}${CANONICAL_PATH}`,
};

export default function GuidePage() {
  return (
    <main className="guide-page">

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="case-study-hero-content">
            <p className="case-study-eyebrow">Free guide · 10 min read</p>
            <h1>
              7 website problems that quietly cost businesses customers.
            </h1>
            <p className="case-study-hero-sub">
              Not another “10 tips” listicle. This is the exact list I run
              through when I open a business's website for the first time,
              written for owners, not developers, and free to download.
            </p>

            <div className="guide-hero-form">
              <GuideForm />
            </div>

            <div className="case-study-meta">
              <span>No email spam</span>
              <span>Instant download</span>
              <span>~12 pages</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHAT'S INSIDE ---------- */}
      <section className="case-study-section">
        <div className="case-study-container">
          <div className="case-study-section-intro">
            <p className="case-study-label">What's inside</p>
            <h2 className="case-study-section-title">
              Eight problems. Zero fluff.
            </h2>
            <p className="case-study-section-copy">
              Each one is something I look for in the first minute of opening
              a site — described plainly, with what to actually check on your
              own site.
            </p>
          </div>

          <div className="guide-toc-grid">
            {SECTIONS.map((s) => (
              <div className="guide-toc-item" key={s.n}>
                <span className="guide-toc-num">{s.n}</span>
                <div>
                  <h3 className="guide-toc-title blur-sm">{s.title}</h3>
                  <p className="guide-toc-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY FREE ---------- */}
      <section className="case-study-section">
        <div className="case-study-container">
          <div className="case-study-callout">
            <p className="case-study-callout-label">Why I'm giving this away</p>
            <h3>
              Because most businesses lose customers to problems nobody ever
              pointed out to them.
            </h3>
            <p>
              I wrote this after opening the same handful of mistakes on
              dozens of small business sites. If you read it and recognize
              your own site in a couple of these points — that's normal, and
              it's fixable. If you'd like a second pair of eyes on your
              specific site afterward, I'm happy to take a look.
            </p>
          </div>
        </div>
      </section>

      <section className="case-study-section guide-author-section">
  <div className="guide-author-blob" aria-hidden="true" />

  <div className="case-study-container">
    <div className="case-study-section-intro">
      <p className="case-study-label">Want me to take a look?</p>

      <h2 className="case-study-section-title">
        Your website might have more than one problem.
      </h2>

      <p className="case-study-section-copy">
        I’m Romany, a full-stack web developer. I build and redesign
        websites with a focus on clarity, speed, trust, and conversion.
        See my work and how I approach building for the web.
      </p>

      <a href="/" className="btn-primary guide-author-link">
        See my work
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 11L11 3M11 3H4M11 3V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

      {/* ---------- SECOND CTA ---------- */}
      <section className="case-study-result">
        <div className="case-study-container">
          <div className="case-study-result-content">
            <h2>Get your copy.</h2>
            <p>
              Takes ten seconds. Delivered straight to your downloads folder —
              no account, no funnel, no follow-up call required.
            </p>
            <div className="guide-bottom-form">
              <GuideForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
