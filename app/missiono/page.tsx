"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { SiteNav, ArrowIcon } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

/* =========================================================
   SMALL COMPONENTS
   ========================================================= */

function MonoLabel({ children }: { children: ReactNode }) {
  return <div className="missiono-label">{children}</div>;
}

function Shot({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="missiono-screen">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>

      {caption && (
        <p className="missiono-screen-caption">{caption}</p>
      )}
    </div>
  );
}

function SectionIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="missiono-section-intro reveal">
      <MonoLabel>{label}</MonoLabel>

      <h2 className="missiono-section-title">{title}</h2>

      {children && (
        <div className="missiono-section-copy">
          {children}
        </div>
      )}
    </div>
  );
}

function TechCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <MagicCard className="missiono-tech-card">
      <div className="missiono-tech-number">{number}</div>

      <h3>{title}</h3>

      <p>{children}</p>
    </MagicCard>
  );
}

function EngineeringCard({
  title,
  children,
  code,
}: {
  title: string;
  children: ReactNode;
  code?: string;
}) {
  return (
    <div className="missiono-engineering-card">
      <h3>{title}</h3>

      <p>{children}</p>

      {code && <code>{code}</code>}
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function MissionoCaseStudy() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ---------------------------------------------------------
     Theme
     --------------------------------------------------------- */

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  /* ---------------------------------------------------------
     Scroll + reveal
     --------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="missiono-page">
      <SiteNav
        isScrolled={isScrolled}
        theme={theme as "dark" | "light"}
        onThemeToggle={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() =>
          setIsMobileMenuOpen(!isMobileMenuOpen)
        }
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
      />

      <main id="top">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="missiono-hero">
          <div className="missiono-container">

            <div className="missiono-hero-content reveal">
              <MonoLabel>CASE STUDY — 01</MonoLabel>

              <h1>MISSIONO</h1>

              <p className="missiono-hero-sub">
                Missions are easy to plan.
                <br />
                Keeping track of them isn&apos;t.
              </p>

              <p className="missiono-hero-sub">
                Missiono is a mission and expense management
                application that keeps planning, tasks, spending,
                and progress connected in one place.
              </p>

              <div className="missiono-meta">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
              </div>

              <div className="missiono-hero-actions">
                <Link href="#" className="btn-primary">
                  Live product
                  <ArrowIcon />
                </Link>

                <Link
                  href="#technical"
                  className="link-secondary"
                >
                  Explore the system ↘
                </Link>
              </div>
            </div>

            <div className="missiono-hero-media reveal">
              <div className="missiono-image">
                <video
                  src="/projects/missiono/missiono-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="block h-auto w-full"
                />

                <BorderBeam
                  size={120}
                  duration={8}
                  borderWidth={1}
                  className="from-transparent via-foreground/30 to-transparent"
                />
              </div>

              <p className="missiono-screen-caption">
                MISSIONO — PRODUCT DEMO
              </p>
            </div>

          </div>
        </section>


        {/* =====================================================
            TECHNICAL FOUNDATION
        ====================================================== */}

        <section
          id="technical"
          className="missiono-section missiono-tech"
        >
          <div className="missiono-container">

            <SectionIntro
              label="TECHNICAL FOUNDATION"
              title={
                <>
                  The screens are only
                  <br />
                  the surface.
                </>
              }
            >
              <p>
                Missiono is a full-stack application built around
                a relational data model. The interface is only one
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
            </SectionIntro>

            <div className="missiono-tech-grid reveal">

              <TechCard
                number="01"
                title="Next.js + TypeScript"
              >
                A structured application with typed components,
                application logic, routing, and server-side
                capabilities.
              </TechCard>

              <TechCard
                number="02"
                title="Supabase + PostgreSQL"
              >
                Authentication and relational application data
                backed by PostgreSQL.
              </TechCard>

              <TechCard
                number="03"
                title="Realtime data"
              >
                Relevant changes can propagate through the
                application without relying on manual refreshes.
              </TechCard>

              <TechCard
                number="04"
                title="Database logic"
              >
                Important relationships and derived information
                are kept close to the data.
              </TechCard>

              <TechCard
                number="05"
                title="Application state"
              >
                Missions, tasks, filters, authentication, and UI
                state work together as one application.
              </TechCard>

              <TechCard
                number="06"
                title="Responsive by default"
              >
                The same underlying workflow remains usable
                across different screen sizes.
              </TechCard>

            </div>

          </div>
        </section>


        {/* =====================================================
            DATA MODEL
        ====================================================== */}

        <section className="missiono-section missiono-architecture">
          <div className="missiono-container">

            <SectionIntro
              label="THE DATA MODEL"
              title={
                <>
                  A mission is more than
                  <br />
                  a screen.
                </>
              }
            >
              <p>
                The application is built around relationships
                between missions, tasks, completion state, and
                spending.
              </p>

              <p className="mt-4">
                Those relationships determine what the user sees
                at the mission level.
              </p>
            </SectionIntro>

            <div className="missiono-architecture-diagram reveal">

              <MonoLabel>
                01 — RELATIONSHIPS
              </MonoLabel>

              <div className="mx-auto mt-10 flex max-w-[620px] flex-col items-center gap-3">

                <div className="w-full max-w-[300px] rounded-lg border border-border bg-bg px-5 py-4 text-center font-mono text-xs">
                  MISSION
                </div>

                <span className="font-mono text-xs text-muted-fg">
                  ↓
                </span>

                <div className="w-full max-w-[300px] rounded-lg border border-border bg-bg px-5 py-4 text-center font-mono text-xs">
                  TASKS
                </div>

                <span className="font-mono text-xs text-muted-fg">
                  ↓
                </span>

                <div className="grid w-full max-w-[500px] grid-cols-2 gap-3">

                  <div className="rounded-lg border border-border bg-bg px-4 py-4 text-center font-mono text-[10px]">
                    COMPLETION
                  </div>

                  <div className="rounded-lg border border-border bg-bg px-4 py-4 text-center font-mono text-[10px]">
                    PAID PRICE
                  </div>

                </div>

                <span className="font-mono text-xs text-muted-fg">
                  ↓
                </span>

                <div className="grid w-full max-w-[500px] grid-cols-2 gap-3">

                  <div className="rounded-lg border border-border bg-bg p-4">
                    <MonoLabel>OUTPUT</MonoLabel>
                    <p className="mt-2 text-sm font-medium">
                      Progress
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-bg p-4">
                    <MonoLabel>OUTPUT</MonoLabel>
                    <p className="mt-2 text-sm font-medium">
                      Spending
                    </p>
                  </div>

                </div>

                <span className="font-mono text-xs text-muted-fg">
                  ↓
                </span>

                <div className="w-full max-w-[300px] rounded-lg border border-border bg-bg px-5 py-4 text-center font-mono text-xs">
                  POSTGRESQL
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* =====================================================
            PRODUCT
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="missiono-feature">

              <div className="missiono-feature-copy reveal">

                <div className="missiono-feature-kicker">
                  THE PRODUCT
                </div>

                <h2>
                  One mission.
                  <br />
                  One source of truth.
                </h2>

                <p>
                  A mission might start as a list. Missiono turns
                  that list into a structured workspace where the
                  work, progress, and spending stay connected.
                </p>

                <p>
                  Instead of jumping between notes, task lists,
                  and separate budget tracking, the information
                  lives together.
                </p>

              </div>

              <div className="missiono-feature-image reveal">
                <Shot
                  src="/projects/missiono/hero-section.png"
                  alt="Missiono mission overview"
                  priority
                  caption="THE MISSION — AT A GLANCE"
                />
              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PLANNING
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="missiono-story">

              <div className="missiono-story-copy reveal">

                <div className="missiono-feature-kicker">
                  FROM PLAN TO EXECUTION
                </div>

                <h2>
                  A mission starts
                  <br />
                  with a plan.
                </h2>

                <p>
                  Before anything gets completed, the mission
                  needs structure.
                </p>

                <p>
                  Missiono starts with the mission itself: its
                  name, description, and the context around the
                  work.
                </p>

              </div>

              <div className="missiono-story-media reveal">

                <Shot
                  src="/projects/missiono/new-mission.png"
                  alt="Missiono create mission form"
                  caption="CREATE MISSION"
                />

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            TASKS
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="missiono-feature">

              <div className="missiono-feature-copy reveal">

                <div className="missiono-feature-kicker">
                  THE WORKING LAYER
                </div>

                <h2>
                  Turn the plan into
                  <br />
                  things you can act on.
                </h2>

                <p>
                  Tasks are where the mission becomes actionable.
                  Each task carries the information needed to
                  understand what needs to happen and what it
                  means for the mission.
                </p>

                <div className="missiono-feature-points">

                  <div className="missiono-feature-point">
                    <strong>State.</strong>{" "}
                    Track where the task currently stands.
                  </div>

                  <div className="missiono-feature-point">
                    <strong>Completion.</strong>{" "}
                    Reflect whether the work has been completed.
                  </div>

                  <div className="missiono-feature-point">
                    <strong>Cost.</strong>{" "}
                    Keep expected and actual spending attached to
                    the task.
                  </div>

                </div>

              </div>

              <div className="missiono-feature-image reveal">

                <Shot
                  src="/projects/missiono/tasks.png"
                  alt="Missiono tasks interface"
                  caption="TASKS — THE WORKING LAYER"
                />

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            TASK DETAILS
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="missiono-feature reverse">

              <div className="missiono-feature-copy reveal">

                <div className="missiono-feature-kicker">
                  DETAIL WITHOUT FRICTION
                </div>

                <h2>
                  The interface should
                  <br />
                  stay out of the way.
                </h2>

                <p>
                  Editing a task shouldn't mean leaving the
                  workflow. The important information stays close
                  to the action.
                </p>

                <p>
                  This is where the task's state, quantity,
                  expected price, and paid price can be updated.
                </p>

              </div>

              <div className="missiono-feature-image reveal">

                <Shot
                  src="/projects/missiono/edit-task.png"
                  alt="Missiono edit task interface"
                  caption="TASK DETAILS — EXPECTED VS. ACTUAL"
                />

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SPENDING
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <SectionIntro
              label="ONE PRODUCT DECISION"
              title={
                <>
                  A budget has
                  <br />
                  two realities.
                </>
              }
            >
              <p>
                Expected spending tells you what you planned.
                Actual spending tells you what happened.
              </p>

              <p className="mt-4">
                Missiono keeps both because a useful budget
                shouldn't stop being useful once the mission
                begins.
              </p>
            </SectionIntro>

            <div className="missiono-callout reveal">

              <div className="missiono-callout-label">
                EXPECTED VS. ACTUAL
              </div>

              <h3>
                Planning and reality belong in the same system.
              </h3>

              <p>
                A task can have an expected price before the work
                happens and a paid price once the expense is real.
                Those values can then contribute to the mission's
                overall spending state.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            ENGINEERING
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <SectionIntro
              label="ENGINEERING"
              title={
                <>
                  The interesting part
                  <br />
                  happens underneath.
                </>
              }
            >
              <p>
                The UI is only useful when the data behind it stays
                consistent. Missiono uses application and database
                logic to keep related values synchronized.
              </p>
            </SectionIntro>

            <div className="missiono-engineering-grid reveal">

              <EngineeringCard
                title="Realtime synchronization"
              >
                Relevant changes can propagate through the
                application so different parts of the interface
                stay aligned with current data.
              </EngineeringCard>

              <EngineeringCard
                title="Derived mission state"
                code="mission.current_paid ← completed task paid_price"
              >
                Mission-level spending can be derived from the
                underlying task data rather than manually
                maintaining duplicate values.
              </EngineeringCard>

              <EngineeringCard
                title="Task state"
              >
                Completion is connected to task state so the
                application doesn't need multiple independent
                sources of truth for the same concept.
              </EngineeringCard>

              <EngineeringCard
                title="Filtering"
              >
                Tasks can be filtered by properties such as date,
                completion, and state without changing the
                underlying data model.
              </EngineeringCard>

            </div>

          </div>
        </section>


        {/* =====================================================
            APPLICATION ARCHITECTURE
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="missiono-feature">

              <div className="missiono-feature-copy reveal">

                <div className="missiono-feature-kicker">
                  APPLICATION ARCHITECTURE
                </div>

                <h2>
                  From database state
                  <br />
                  to interface.
                </h2>

                <p>
                  The application has several layers between a
                  database row and what the user sees.
                </p>

                <p>
                  Authentication determines access. Application
                  state determines what the current interface
                  needs. Database relationships provide the
                  underlying data.
                </p>

                <p>
                  Keeping those responsibilities separated makes
                  the application easier to reason about as it
                  grows.
                </p>

              </div>

              <div className="missiono-feature-image reveal">

                <div className="missiono-screen">
                  <div className="p-6 md:p-8">

                    <MonoLabel>
                      SYSTEM FLOW
                    </MonoLabel>

                    <div className="mt-8 space-y-3">

                      <div className="rounded-lg border border-border bg-bg p-4 font-mono text-xs">
                        USER
                      </div>

                      <div className="text-center font-mono text-xs text-muted-fg">
                        ↓
                      </div>

                      <div className="rounded-lg border border-border bg-bg p-4 font-mono text-xs">
                        NEXT.JS APPLICATION
                      </div>

                      <div className="text-center font-mono text-xs text-muted-fg">
                        ↓
                      </div>

                      <div className="rounded-lg border border-border bg-bg p-4 font-mono text-xs">
                        SUPABASE
                      </div>

                      <div className="text-center font-mono text-xs text-muted-fg">
                        ↓
                      </div>

                      <div className="rounded-lg border border-border bg-bg p-4 font-mono text-xs">
                        POSTGRESQL
                      </div>

                    </div>

                  </div>
                </div>

                <p className="missiono-screen-caption">
                  APPLICATION → DATA → INTERFACE
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            AUTHENTICATION
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="missiono-story">

              <div className="missiono-story-copy reveal">

                <div className="missiono-feature-kicker">
                  THE PRODUCT AROUND THE PRODUCT
                </div>

                <h2>
                  A real application
                  <br />
                  starts before
                  <br />
                  the dashboard.
                </h2>

                <p>
                  Missiono also includes the surrounding flows
                  required for a complete product: authentication,
                  account creation, and access to the main
                  workspace.
                </p>

              </div>

              <div className="missiono-story-media reveal">

                <div className="missiono-screens-grid">
                  <Shot
                    src="/projects/missiono/login.png"
                    alt="Missiono login screen"
                    caption="LOGIN"
                  />

                  <Shot
                    src="/projects/missiono/sign-up.png"
                    alt="Missiono sign up screen"
                    caption="SIGN UP"
                  />
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            SELECTED SCREENS
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <SectionIntro
              label="SELECTED SCREENS"
              title={
                <>
                  The interface is where
                  <br />
                  the system becomes visible.
                </>
              }
            >
              <p>
                A few screens from the product show how the
                underlying structure turns into an actual working
                experience.
              </p>
            </SectionIntro>

            <div className="missiono-screens-grid reveal">

              <Shot
                src="/projects/missiono/dashboard.png"
                alt="Missiono dashboard"
                caption="DASHBOARD — LIGHT MODE"
              />

              <Shot
                src="/projects/missiono/dashboard-darkmode.png"
                alt="Missiono dark mode dashboard"
                caption="DASHBOARD — DARK MODE"
              />

              <Shot
                src="/projects/missiono/add-task.png"
                alt="Missiono add task interface"
                caption="ADD TASK"
              />

            </div>

          </div>
        </section>


        {/* =====================================================
            RESULT
        ====================================================== */}

        <section className="missiono-result">
          <div className="missiono-container">

            <div className="missiono-result-content reveal">

              <MonoLabel>THE RESULT</MonoLabel>

              <h2>
                From a simple idea
                <br />
                to a complete
                <br />
                product system.
              </h2>

              <p>
                Missiono started with a straightforward question:
              </p>

              <p className="text-xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                How do you keep a mission organized once the plan
                starts changing?
              </p>

              <p>
                The answer became more than a task list. It became
                a full-stack application connecting missions,
                tasks, progress, spending, authentication,
                application state, realtime data, and the
                interface that ties everything together.
              </p>

              <div className="missiono-callout text-left">

                <div className="missiono-callout-label">
                  THE TAKEAWAY
                </div>

                <h3>
                  Not just screens.
                  <br />
                  A product that works underneath them.
                </h3>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="missiono-section">
          <div className="missiono-container">

            <div className="reveal mb-[5rem]">

              <div className="missiono-image">
                <Image
                  src="/projects/missiono/dashboard.png"
                  alt="Missiono dashboard"
                  width={1600}
                  height={1000}
                  className="block h-auto w-full"
                />

                <BorderBeam
                  size={100}
                  duration={8}
                  borderWidth={1}
                  className="from-transparent via-foreground/20 to-transparent"
                />
              </div>

            </div>

            <div className="missiono-result-content mt-[3rem] reveal">

              <MonoLabel>MISSIONO</MonoLabel>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Built from the
                <br />
                database up.
              </h2>

              <div className="missiono-hero-actions justify-center">

                <Link href="https://missiono.vercel.app">
                  <ShimmerButton className="h-11 px-6 shadow-none">
                    <span className="text-sm font-medium">
                      Open Missiono <span className="ml-1">↗</span>
                    </span>
                  </ShimmerButton>
                </Link>

                <Link
                  href="/#work"
                  className="link-secondary"
                >
                  Back to work
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}