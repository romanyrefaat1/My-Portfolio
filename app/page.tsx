"use client";

import { useEffect, useState, useRef, MouseEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [processProgress, setProcessProgress] = useState(0);

  const processListRef = useRef<HTMLDivElement>(null);
  const magicFrameRef = useRef<HTMLDivElement>(null);

  // Theme initialization (matching system preference if available)
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // General scroll and section reveal logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Process line fill logic
      if (processListRef.current) {
        const rect = processListRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.35;
        const total = rect.height;
        let progress = (start - rect.top) / (start - end + total);
        progress = Math.max(0, Math.min(1, progress));
        setProcessProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    // Intersection Observer for .reveal classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const activeStepIndex = Math.min(3, Math.floor(processProgress * 4));

  // Magic frame spotlight effect
  const handleMagicMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magicFrameRef.current) return;
    const rect = magicFrameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    magicFrameRef.current.style.setProperty("--mx", `${x}px`);
    magicFrameRef.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`} id="nav">
        <Link href="#top" className="nav-logo">
          ROMANY
        </Link>
        <div className="nav-links">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact" className="cta">
            Let's talk
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <div className="nav-mobile-toggle">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" style={{ marginRight: "4px" }}>
             {theme === "dark" ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`} id="mobileMenu">
        <Link href="#work" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
        <Link href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </div>

      <main id="top">
        <section className="hero container">
          <div className="status-pill">
            <span className="status-dot"></span> Open to opportunities
          </div>
          <h1>
            I build things.<br />
            Mostly for the web.
          </h1>
          <p className="hero-sub">
            Web apps, SaaS products, and digital experiences — from the first idea to something people can actually use.
          </p>
          <div className="hero-ctas">
            <Link href="#work" className="btn-primary">
              See what I've built
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="#contact" className="link-secondary">
              Have something in mind?
            </Link>
          </div>
        </section>

        <section className="marquee-section">
          <div className="marquee-track" id="marqueeTrack">
            <div className="marquee-group">
              <span>REACT</span><span className="dot">·</span>
              <span>NEXT.JS</span><span className="dot">·</span>
              <span>TYPESCRIPT</span><span className="dot">·</span>
              <span>SUPABASE</span><span className="dot">·</span>
              <span>POSTGRESQL</span><span className="dot">·</span>
              <span>TAILWIND CSS</span><span className="dot">·</span>
            </div>
            <div className="marquee-group" aria-hidden="true">
              <span>REACT</span><span className="dot">·</span>
              <span>NEXT.JS</span><span className="dot">·</span>
              <span>TYPESCRIPT</span><span className="dot">·</span>
              <span>SUPABASE</span><span className="dot">·</span>
              <span>POSTGRESQL</span><span className="dot">·</span>
              <span>TAILWIND CSS</span><span className="dot">·</span>
            </div>
          </div>
        </section>

        <section id="work" className="container">
          <div className="work-intro reveal">
            <div className="section-label">A FEW THINGS I'VE MADE</div>
            <h2 className="section-heading">Not just projects.</h2>
            <p className="section-sub">We're not dumping a tech stack on you. Each one exists for a reason.</p>
          </div>

          {/* PROJECT 01 — MISSIONO */}
          <div className="project-hero reveal">
            <div className="project-hero-head">
              <div className="project-category">MISSIONO — 01</div>
              <h3 className="project-hero-title">
                Missions are easy to plan.<br />
                Keeping track of them isn't.
              </h3>
              <p className="project-desc">
                Missiono brings missions, tasks, budgets, and spending together — in one place, instead of scattered across notes and spreadsheets.
              </p>
            </div>
            
            <div className="magic-frame" id="missionoFrame" ref={magicFrameRef} onMouseMove={handleMagicMouseMove}>
              <div className="magic-spotlight" id="missionoSpotlight"></div>
              <div className="shot-frame shot-frame-lg">
                <svg viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Missiono dashboard showing missions, tasks, and budget overview">
                  <rect width="1200" height="700" fill="var(--muted)"/>
                  <rect x="0" y="0" width="1200" height="72" fill="var(--card)"/>
                  <circle cx="44" cy="36" r="6" fill="var(--accent)"/>
                  <rect x="66" y="29" width="100" height="14" rx="3" fill="var(--fg)" opacity="0.7"/>
                  <rect x="900" y="22" width="120" height="28" rx="8" fill="var(--accent)" opacity="0.85"/>
                  <rect x="50" y="112" width="280" height="22" rx="3" fill="var(--fg)" opacity="0.75"/>
                  <rect x="50" y="150" width="380" height="13" rx="3" fill="var(--muted-fg)" opacity="0.5"/>
                  <rect x="50" y="210" width="330" height="160" rx="14" fill="var(--card)" stroke="var(--border)"/>
                  <rect x="405" y="210" width="330" height="160" rx="14" fill="var(--card)" stroke="var(--border)"/>
                  <rect x="760" y="210" width="390" height="160" rx="14" fill="var(--card)" stroke="var(--border)"/>
                  <rect x="78" y="238" width="110" height="12" rx="3" fill="var(--muted-fg)" opacity="0.6"/>
                  <rect x="78" y="278" width="160" height="26" rx="4" fill="var(--fg)" opacity="0.8"/>
                  <rect x="433" y="238" width="110" height="12" rx="3" fill="var(--muted-fg)" opacity="0.6"/>
                  <rect x="433" y="278" width="160" height="26" rx="4" fill="var(--accent)" opacity="0.9"/>
                  <rect x="788" y="238" width="140" height="12" rx="3" fill="var(--muted-fg)" opacity="0.6"/>
                  <rect x="788" y="278" width="220" height="26" rx="4" fill="var(--fg)" opacity="0.8"/>
                  <rect x="50" y="392" width="1100" height="1" fill="var(--border)"/>
                  <rect x="50" y="422" width="1100" height="64" rx="10" fill="var(--card)" stroke="var(--border)"/>
                  <rect x="78" y="446" width="18" height="18" rx="5" fill="var(--accent)" opacity="0.2" stroke="var(--accent)"/>
                  <rect x="118" y="446" width="340" height="14" rx="3" fill="var(--fg)" opacity="0.7"/>
                  <rect x="980" y="442" width="90" height="20" rx="10" fill="var(--muted)"/>
                  <rect x="50" y="498" width="1100" height="64" rx="10" fill="var(--card)" stroke="var(--border)"/>
                  <rect x="78" y="522" width="18" height="18" rx="5" fill="var(--muted-fg)" opacity="0.15" stroke="var(--border)"/>
                  <rect x="118" y="522" width="240" height="14" rx="3" fill="var(--fg)" opacity="0.5"/>
                </svg>
              </div>
            </div>

            <div className="project-hero-foot">
              <div className="project-stack mono">Next.js · TypeScript · Supabase · PostgreSQL</div>
              <div className="project-ctas">
                <Link href="#" className="project-link">
                  Live product ↗
                </Link>
                <Link href="#" className="project-link secondary">
                  Case study ↗
                </Link>
              </div>
            </div>
            
            <div className="what-shows">
              <div className="what-label">WHAT THIS SHOWS</div>
              <div className="what-grid">
                <div className="what-item">
                  <div className="what-title">Product thinking</div>
                  <div className="what-desc">Designing workflows around missions, tasks, and spending.</div>
                </div>
                <div className="what-item">
                  <div className="what-title">Full-stack development</div>
                  <div className="what-desc">Frontend, backend, authentication, database, and application logic.</div>
                </div>
                <div className="what-item">
                  <div className="what-title">Realtime systems</div>
                  <div className="what-desc">Keeping application state synchronized as data changes.</div>
                </div>
                <div className="what-item">
                  <div className="what-title">Production thinking</div>
                  <div className="what-desc">Responsive interfaces, state management, validation, deployment, edge cases.</div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 02 — HOOKLIFY */}
          <div className="project reveal">
            <div className="project-visual">
              <div className="shot-frame">
                <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hooklify landing page with a toast notification widget">
                  <rect width="640" height="420" fill="var(--muted)"/>
                  <rect x="0" y="0" width="640" height="420" fill="var(--card)" opacity="0.4"/>
                  <rect x="60" y="60" width="280" height="24" rx="2" fill="var(--fg)" opacity="0.75"/>
                  <rect x="60" y="98" width="220" height="12" rx="2" fill="var(--muted-fg)" opacity="0.55"/>
                  <rect x="60" y="140" width="130" height="40" rx="8" fill="var(--accent)" opacity="0.9"/>
                  <rect x="380" y="60" width="200" height="220" rx="12" fill="var(--muted)" stroke="var(--border)"/>
                  <rect x="360" y="300" width="260" height="64" rx="10" fill="var(--card)" stroke="var(--accent)" opacity="0.95"/>
                  <circle cx="384" cy="332" r="10" fill="var(--accent)" opacity="0.25"/>
                  <rect x="404" y="320" width="150" height="9" rx="2" fill="var(--fg)" opacity="0.7"/>
                  <rect x="404" y="338" width="110" height="8" rx="2" fill="var(--muted-fg)" opacity="0.55"/>
                </svg>
              </div>
            </div>
            <div className="project-info">
              <div className="project-category">02 — HOOKLIFY</div>
              <h3 className="project-title">What makes someone<br />look twice?</h3>
              <p className="project-desc">
                Hooklify is an experiment around attention. It started with a toast notification and turned into a question about timing, context, and how much interruption is too much.
              </p>
              <div className="project-stack mono">Next.js · TypeScript · React</div>
              <div className="project-ctas">
                <Link href="#" className="project-link">
                  Explore Hooklify
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* PROJECT 03 — FLOOPR */}
          <div className="project reveal">
            <div className="project-info">
              <div className="project-category">03 — FLOOPR</div>
              <h3 className="project-title">
                Feedback is easy.<br />
                Knowing what to do with it isn't.
              </h3>
              <p className="project-desc">
                Floopr explored what happens when feedback isn't just collected, but actually understood — embeddable components, sentiment analysis, and an AI-powered conversational layer.
                <br />
                <br />
                The project is paused. The idea isn't.
              </p>
              <div className="project-stack mono">Next.js · React · Supabase · AI</div>
              <div className="project-ctas">
                <Link href="#" className="project-link">
                  Explore Floopr
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="project-visual">
              <div className="shot-frame">
                <svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Floopr feedback dashboard with sentiment analysis">
                  <rect width="640" height="420" fill="var(--muted)" />
                  <rect x="32" y="32" width="576" height="60" rx="10" fill="var(--card)" stroke="var(--border)" />
                  <rect x="52" y="52" width="200" height="10" rx="2" fill="var(--fg)" opacity="0.7" />
                  <rect x="52" y="70" width="140" height="8" rx="2" fill="var(--muted-fg)" opacity="0.5" />
                  <rect x="470" y="48" width="110" height="26" rx="13" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" />
                  <rect x="32" y="112" width="576" height="1" fill="var(--border)" />
                  <rect x="32" y="132" width="280" height="130" rx="10" fill="var(--card)" stroke="var(--border)" />
                  <rect x="50" y="150" width="120" height="9" rx="2" fill="var(--muted-fg)" opacity="0.6" />
                  <path d="M52 230 L92 200 L132 214 L172 176 L212 196 L252 160" stroke="var(--accent)" strokeWidth="2.5" fill="none" opacity="0.85" />
                  <rect x="328" y="132" width="280" height="130" rx="10" fill="var(--card)" stroke="var(--border)" />
                  <rect x="346" y="150" width="120" height="9" rx="2" fill="var(--muted-fg)" opacity="0.6" />
                  <rect x="346" y="180" width="60" height="60" rx="6" fill="var(--accent)" opacity="0.75" />
                  <rect x="416" y="200" width="60" height="40" rx="6" fill="var(--muted-fg)" opacity="0.35" />
                  <rect x="486" y="170" width="60" height="70" rx="6" fill="var(--accent)" opacity="0.4" />
                  <rect x="32" y="280" width="576" height="70" rx="10" fill="var(--card)" stroke="var(--border)" />
                  <rect x="52" y="298" width="16" height="16" rx="8" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" />
                  <rect x="80" y="300" width="300" height="10" rx="2" fill="var(--fg)" opacity="0.6" />
                  <rect x="80" y="318" width="200" height="8" rx="2" fill="var(--muted-fg)" opacity="0.45" />
                </svg>
              </div>
            </div>
          </div>

          <div className="more-work reveal">
            <div className="more-work-inner">
              <div>
                <div className="section-label">OTHER THINGS</div>
                <h3 className="section-heading" style={{ fontSize: "clamp(26px,3vw,34px)" }}>
                  Not everything needs to be a startup.
                </h3>
                <p className="section-sub" style={{ fontSize: "16px" }}>
                  Small experiments. Half-finished ideas. Things built because I wanted to know if I could.
                </p>
              </div>
              {/* <Link href="#" className="project-link">
                Browse the archive
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link> */}
            </div>
          </div>
        </section>

        <section className="container bridge reveal">
          <h2 className="bridge-heading">Maybe you're building something too.</h2>
          <div className="bento">
            <div className="bento-card">
              <div className="bento-num">01</div>
              <div className="bento-title">Web apps</div>
              <div className="bento-desc">
                Dashboards, internal tools, management systems, marketplaces, and applications that need more than a landing page.
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-num">02</div>
              <div className="bento-title">SaaS products</div>
              <div className="bento-desc">
                Authentication, databases, application logic, realtime data, and the interface connecting everything together.
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-num">03</div>
              <div className="bento-title">Landing pages</div>
              <div className="bento-desc">
                Fast, responsive marketing sites designed around the product they're selling.
              </div>
            </div>
            <div className="bento-card">
              <div className="bento-num">04</div>
              <div className="bento-title">MVPs and experiments</div>
              <div className="bento-desc">Have an idea? Let's turn it into something tangible enough to test.</div>
            </div>
          </div>
        </section>

        <section className="container process reveal">
          <div className="section-label">HOW IT WORKS</div>
          <h2 className="section-heading">How it usually works.</h2>
          <div className="process-list" ref={processListRef}>
            <div className="process-line">
              <div className="process-line-fill" style={{ height: `${processProgress * 100}%` }}></div>
            </div>
            
            {[
              { title: "Figure it out", desc: "We talk about what you're trying to build, who it's for, and what actually needs to exist." },
              { title: "Make the first version", desc: "Turn the idea into something tangible rather than planning forever." },
              { title: "Build the real thing", desc: "Frontend, backend, database, authentication, integrations — whatever the product actually needs." },
              { title: "Polish", desc: "Refine UI details, smooth out interactions, handle edge cases, and make sure everything feels sharp." },
              { title: "Ship it", desc: "Deploy it, test it, fix the rough edges, and get it into your hands." }
            ].map((step, idx) => (
              <div key={idx} className={`process-step ${idx <= activeStepIndex && processProgress > 0.02 ? "active" : ""}`}>
                <div className="process-index">0{idx + 1}</div>
                <div>
                  <div className="process-step-title">{step.title}</div>
                  <div className="process-step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="container about reveal">
          <div>
            <div className="section-label">A LITTLE ABOUT ME</div>
            <h2 className="section-heading">I like making ideas real.</h2>
            <p className="about-body">
              I like working on the whole thing — figuring out what should exist, designing how it should feel, and building what happens underneath.
            </p>
            <p className="about-body">
              That usually means designing interfaces, writing the application, figuring out the data underneath it, breaking things, fixing them, and eventually shipping.
            </p>
            <div className="philosophy">
              <div className="philosophy-item">
                <div className="philosophy-label">BUILD</div>
                <div className="philosophy-text">Ideas are cheap. Making one real is the interesting part.</div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-label">LEARN</div>
                <div className="philosophy-text">Most useful lessons arrive after something ships.</div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-label">IMPROVE</div>
                <div className="philosophy-text">The first version isn't supposed to be perfect. It's supposed to teach you something.</div>
              </div>
            </div>
          </div>
          <div className="fact-grid">
            <div className="fact-card">
              <div className="fact-label">BUILDING</div>
              <div className="fact-value">Web products</div>
            </div>
            <div className="fact-card">
              <div className="fact-label">FOCUS</div>
              <div className="fact-value">Product + engineering</div>
            </div>
            <div className="fact-card">
              <div className="fact-label">CURRENTLY</div>
              <div className="fact-value">Missiono</div>
            </div>
            <div className="fact-card">
              <div className="fact-label">INTERESTED IN</div>
              <div className="fact-value">Interfaces, products, and ideas worth building</div>
            </div>
          </div>
        </section>

        <section id="now" className="container now reveal">
          <div className="section-label">RIGHT NOW</div>
          <h2 className="section-heading">What's taking up my brain.</h2>
          <div className="now-grid">
            <div className="now-card">
              <div className="now-label">BUILDING</div>
              <div className="now-title">Missiono</div>
            </div>
            <div className="now-card">
              <div className="now-label">LEARNING</div>
              <div className="now-title">How to build better systems behind simple interfaces.</div>
            </div>
            <div className="now-card">
              <div className="now-label">EXPLORING</div>
              <div className="now-title">Product design, interaction, and the little details people don't consciously notice.</div>
            </div>
            <div className="now-card">
              <div className="now-label">THINKING ABOUT</div>
              <div className="now-title">What makes a product worth coming back to.</div>
            </div>
          </div>
        </section>

        <section id="contact" className="container contact reveal">
          <div className="section-label">THAT'S ENOUGH ABOUT ME.</div>
          <h2 className="contact-heading">What are you building?</h2>
          <p className="contact-sub">Have an idea, a project, an opportunity, or something you think I'd enjoy?</p>
          <div className="contact-cta">
            <Link href="mailto:hello@romany.dev" className="btn-primary" style={{ display: "inline-flex" }}>
              Say hello
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>ROMANY — © 2026</span>
          <div className="footer-links">
            <Link href="#">GitHub</Link>
            <Link href="#">X</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </>
  );
}