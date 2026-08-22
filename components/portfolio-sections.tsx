"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent, RefObject } from "react";
import { ArrowIcon } from "@/components/site-nav";
import Dither from "@/components/Dither"
import { useTheme } from "next-themes";

type Theme = "dark" | "light" | "system";

export function HeroSection() {
    const {theme} = useTheme()
    
  return <section className="hero container">
<div className="absolute top-0 left-0 w-screen h-full">
 <Dither
  waveColor={[0.25, 0.1, 0.85]}   // slightly deeper blue-purple, less neon-saturated
  disableAnimation={false}
  enableMouseInteraction
  mouseRadius={0.6}                // tighter interaction radius, feels more precise than diffuse
  colorNum={4}                     // good as-is — keeps the blocky/limited palette feel
  pixelSize={6}                    // slightly larger tiles = more graphic/intentional, less noisy
  waveAmplitude={0.25}             // pull back a touch so it doesn't fight the headline text
  waveFrequency={2.2}              // fewer, calmer wave bands = less visual chaos
  waveSpeed={0.04}                 // marginally slower, feels deliberate rather than jittery
/>
</div>
<div className="hero-inner">
    <div className="hero-content">
    <div className="absolute top-0 left-0 w-screen h-screen">
</div>
    <div className="status-pill"><span className="status-dot"></span>Open to opportunities</div>
    <h1>I build things.<br />Mostly for the web.</h1>
    <p className="hero-sub">Web apps, SaaS products, and digital experiences — from the first idea to something people can actually use.</p>
    <div className="hero-ctas"><Link href="#work" className="btn-primary">See what I've built <ArrowIcon /></Link><Link href="#contact" className="link-secondary">Have something in mind?</Link></div>
  </div></div></section>;
}

const technologies = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "SUPABASE",
  "Firebase",
  "POSTGRESQL",
  "TAILWIND CSS",
  "SERVER ACTIONS",
  "GIT",
  "GITHUB",
  "VERCEL",
];

export function MarqueeSection() {
  return (
    <section className="marquee-section mb-[70px]">
      <div className="marquee-track">
        {[0, 1, 2].map((group) => (
          <div
            className="marquee-group"
            aria-hidden={group !== 0 || undefined}
            key={group}
          >
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
                <span className="dot">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
type WorkSectionProps = { theme: Theme; magicFrameRef: RefObject<HTMLDivElement | null>; onMagicMouseMove: (event: MouseEvent<HTMLDivElement>) => void };

export function WorkSection({ theme, magicFrameRef, onMagicMouseMove }: WorkSectionProps) {
  return <section id="work" className="container">
    <div className="work-intro reveal"><div className="section-label">A FEW THINGS I'VE MADE</div><h2 className="section-heading">Not just projects.</h2><p className="section-sub">We're not dumping a tech stack on you. Each one exists for a reason.</p></div>
    <div className="project-hero reveal"><div className="project-hero-head"><div className="project-category">MISSIONO — 01</div><h3 className="project-hero-title">Missions are easy to plan.<br />Keeping track of them isn't.</h3><p className="project-desc">Missiono brings missions, tasks, budgets, and spending together — in one place, instead of scattered across notes and spreadsheets.</p></div>
      <div className="magic-frame" id="missionoFrame" ref={magicFrameRef} onMouseMove={onMagicMouseMove}><div className="magic-spotlight" id="missionoSpotlight"></div><div className="shot-frame shot-frame-lg"><Image src={theme === "dark" ? "/projects/missiono/dashboard-darkmode.png" : "/projects/missiono/dashboard.png"} alt="Missiono dashboard showing missions, tasks, and budget overview" width={1200} height={700} priority className="project-image" /></div></div>
      <div className="project-hero-foot"><div className="project-stack mono">Next.js · TypeScript · Supabase · PostgreSQL</div><div className="project-ctas"><Link href="#" className="project-link">Live product ↗</Link><Link href="/missiono" className="project-link secondary">Case study ↗</Link></div></div>
      <div className="what-shows"><div className="what-label">WHAT THIS SHOWS</div><div className="what-grid">{[["Product thinking", "Designing workflows around missions, tasks, and spending."], ["Full-stack development", "Frontend, backend, authentication, database, and application logic."], ["Realtime systems", "Keeping application state synchronized as data changes."], ["Production thinking", "Responsive interfaces, state management, validation, deployment, edge cases."]].map(([title, description]) => <div className="what-item" key={title}><div className="what-title">{title}</div><div className="what-desc">{description}</div></div>)}</div></div>
    </div>
    <div className="project reveal"><div className="project-info"><div className="project-category">02 — FLOOPR</div><h3 className="project-title">Feedback is easy.<br />Knowing what to do with it isn't.</h3><p className="project-desc">Floopr explored what happens when feedback isn't just collected, but actually understood — embeddable components, sentiment analysis, and an AI-powered conversational layer.<br /><br />The project is paused. The idea isn't.</p><div className="project-stack mono">Next.js · React · Supabase · AI</div><div className="project-ctas"><Link href="#" className="project-link">Explore Floopr <ArrowIcon /></Link></div></div><div className="project-visual"><div className="shot-frame rounded-"><Image src={theme === "dark" ? "/projects/floopr/dashboard-darkmode.png" : "/projects/floopr/dashboard.png"} alt="Floopr feedback dashboard with sentiment analysis" width={640} height={420} className="project-image" /></div></div></div>
    <div className="more-work reveal"><div className="more-work-inner"><div><div className="section-label">OTHER THINGS</div><h3 className="section-heading" style={{ fontSize: "clamp(26px,3vw,34px)" }}>Not everything needs to be a startup.</h3><p className="section-sub" style={{ fontSize: "16px" }}>Small experiments. Half-finished ideas. Things built because I wanted to know if I could.</p></div></div></div>
  </section>;
}

export function ServicesSection() {
  const services = [["Web apps", "Dashboards, internal tools, management systems, marketplaces, and applications that need more than a landing page."], ["SaaS products", "Authentication, databases, application logic, realtime data, and the interface connecting everything together."], ["Landing pages", "Fast, responsive marketing sites designed around the product they're selling."], ["MVPs and experiments", "Have an idea? Let's turn it into something tangible enough to test."]];
  return <section className="container bridge reveal"><h2 className="bridge-heading">Maybe you're building something too.</h2><div className="bento">{services.map(([title, description], index) => <div className="bento-card" key={title}><div className="bento-num">0{index + 1}</div><div className="bento-title">{title}</div><div className="bento-desc">{description}</div></div>)}</div></section>;
}

const processSteps = [["Figure it out", "We talk about what you're trying to build, who it's for, and what actually needs to exist."], ["Make the first version", "Turn the idea into something tangible rather than planning forever."], ["Build the real thing", "Frontend, backend, database, authentication, integrations — whatever the product actually needs."], ["Polish", "Refine UI details, smooth out interactions, handle edge cases, and make sure everything feels sharp."], ["Ship it", "Deploy it, test it, fix the rough edges, and get it into your hands."]];

export function ProcessSection({ processListRef, processProgress, activeStepIndex }: { processListRef: RefObject<HTMLDivElement | null>; processProgress: number; activeStepIndex: number }) {
  return <section className="container process reveal"><div className="section-label">HOW IT WORKS</div><h2 className="section-heading">How it usually works.</h2><div className="process-list" ref={processListRef}><div className="process-line"><div className="process-line-fill" style={{ height: `${processProgress * 100}%` }}></div></div>{processSteps.map(([title, description], index) => <div key={title} className={`process-step ${index <= activeStepIndex && processProgress > 0.02 ? "active" : ""}`}><div className="process-index">0{index + 1}</div><div><div className="process-step-title">{title}</div><div className="process-step-desc">{description}</div></div></div>)}</div></section>;
}

export function AboutSection() {
  const facts = [["BUILDING", "Web products"], ["FOCUS", "Product + engineering"], ["CURRENTLY", "Missiono"], ["INTERESTED IN", "Interfaces, products, and ideas worth building"]];
  const philosophy = [["BUILD", "Ideas are cheap. Making one real is the interesting part."], ["LEARN", "Most useful lessons arrive after something ships."], ["IMPROVE", "The first version isn't supposed to be perfect. It's supposed to teach you something."]];
  return <section id="about" className="container about reveal"><div><div className="section-label">A LITTLE ABOUT ME</div><h2 className="section-heading">I like making ideas real.</h2><p className="about-body">I like working on the whole thing — figuring out what should exist, designing how it should feel, and building what happens underneath.</p><p className="about-body">That usually means designing interfaces, writing the application, figuring out the data underneath it, breaking things, fixing them, and eventually shipping.</p><div className="philosophy">{philosophy.map(([label, text]) => <div className="philosophy-item" key={label}><div className="philosophy-label">{label}</div><div className="philosophy-text">{text}</div></div>)}</div></div><div className="fact-grid">{facts.map(([label, value]) => <div className="fact-card" key={label}><div className="fact-label">{label}</div><div className="fact-value">{value}</div></div>)}</div></section>;
}

export function NowSection() {
  const items = [["BUILDING", "Missiono"], ["LEARNING", "How to build better systems behind simple interfaces."], ["EXPLORING", "Product design, interaction, and the little details people don't consciously notice."], ["THINKING ABOUT", "What makes a product worth coming back to."]];
  return <section id="now" className="container now reveal"><div className="section-label">RIGHT NOW</div><h2 className="section-heading">What's taking up my brain.</h2><div className="now-grid">{items.map(([label, title]) => <div className="now-card" key={label}><div className="now-label">{label}</div><div className="now-title">{title}</div></div>)}</div></section>;
}

export function ContactSection() {
  return <section id="contact" className="container contact reveal"><div className="section-label">THAT'S ENOUGH ABOUT ME.</div><h2 className="contact-heading">What are you building?</h2><p className="contact-sub">Have an idea, a project, an opportunity, or something you think I'd enjoy?</p><div className="contact-cta"><Link href="mailto:hello@romany.dev" className="btn-primary" style={{ display: "inline-flex" }}>Say hello <ArrowIcon /></Link></div></section>;
}
