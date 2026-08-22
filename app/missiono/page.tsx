"use client";

import { useEffect, useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes"; {/*[cite: 3] */}
import { SiteNav, ArrowIcon } from "@/components/site-nav"; {/*[cite: 6] */}
import { SiteFooter } from "@/components/site-footer";import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
 {/*[cite: 5] */}

export default function MissionoCaseStudy() {
  const { resolvedTheme: theme, setTheme } = useTheme(); {/*[cite: 3] */}
  const [isScrolled, setIsScrolled] = useState(false); {/*[cite: 3] */}
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); {/*[cite: 3] */}
  const magicFrameRef = useRef<HTMLDivElement>(null); {/*[cite: 3] */}

  // Apply Theme[cite: 3]
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // General scroll and section reveal logic[cite: 3]
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Intersection Observer for .reveal classes[cite: 3]
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
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark"); {/*[cite: 3] */}

  const handleMagicMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magicFrameRef.current) return;
    const rect = magicFrameRef.current.getBoundingClientRect();
    magicFrameRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    magicFrameRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }; {/*[cite: 3] */}

  return (
    <>
      <SiteNav 
        isScrolled={isScrolled} 
        theme={theme as "dark" | "light"} 
        onThemeToggle={toggleTheme} 
        isMobileMenuOpen={isMobileMenuOpen} 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        onMobileMenuClose={() => setIsMobileMenuOpen(false)} 
      /> {/*[cite: 3] */}

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero container pt-[160px] pb-[80px]">
          <div className="hero-inner flex-col items-start gap-8">
            <div className="hero-content w-full max-w-[800px]">
              <div className="eyebrow">CASE STUDY — 01</div>
              <h1 className="mb-6">MISSIONO</h1> {/*[cite: 1] */}
              <h3 className="project-hero-title">Missions are easy to plan.<br/>Keeping track of them isn't.</h3> {/*[cite: 1] */}
              <p className="project-desc mt-6 text-lg">
                Missiono is a mission and expense management application I built to keep the whole process in one place — planning the work, managing tasks, tracking spending, and keeping up with progress. {/*[cite: 1] */}
              </p>
              
              <div className="project-stack mono mt-8">Next.js · TypeScript · Supabase · PostgreSQL</div> {/*[cite: 1] */}
              
              <div className="project-ctas mt-10">
                <Link href="#" className="btn-primary">Live product ↗</Link> {/*[cite: 1] */}
                <Link href="#" className="link-secondary">View all screens ↗</Link> {/*[cite: 1] */}
              </div>
            </div>

            {/* MAGIC FRAME HERO IMAGE */}
              <div className="relative w-full mt-12 reveal">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
           
          </div>
        </section>

        {/* CASE STUDY CONTENT */}
        <article className="container pb-[120px]">
          
          {/* THE IDEA */}
          <section className="reveal py-16">
            <div className="max-w-[640px] mx-auto">
              <div className="section-label">THE IDEA</div> {/*[cite: 1] */}
              <p className="project-desc font-medium text-fg">A mission usually starts simple.</p> {/*[cite: 1] */}
              <p className="project-desc">You know what needs to happen. You have a rough idea of the costs. You make a list and start.</p> {/*[cite: 1] */}
              <p className="project-desc">Then the list grows.</p> {/*[cite: 1] */}
              <p className="project-desc">Tasks change. Things get completed. Prices change. Some expenses are paid while others are still estimates. Eventually, the information becomes difficult to keep track of.</p> {/*[cite: 1] */}
              <p className="project-desc">I wanted Missiono to treat all of that as <strong>one system</strong>, rather than a collection of separate lists.</p> {/*[cite: 1] */}
              <ul className="project-desc list-disc pl-5 space-y-2 mt-6">
                <li>A mission owns its tasks.</li> {/*[cite: 1] */}
                <li>Tasks contribute to progress and spending.</li> {/*[cite: 1] */}
                <li>And the interface should make those relationships easy to understand.</li> {/*[cite: 1] */}
              </ul>
            </div>
            <div className="shot-frame mt-16 max-w-[900px] mx-auto aspect-[16/9] bg-muted flex flex-col items-center justify-center">
              <p className="mono text-muted-fg text-sm">Image: Strong mission overview showing several missions and realistic data.</p> {/*[cite: 1] */}
            </div>
          </section>

          {/* ONE PLACE FOR THE WHOLE MISSION */}
          <section className="reveal py-16">
            <div className="max-w-[640px] mx-auto">
              <div className="section-label">ONE PLACE FOR THE WHOLE MISSION</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-3xl mb-6">From planning to execution.</h2> {/*[cite: 1] */}
              <p className="project-desc">The main idea behind Missiono is simple: once you open a mission, everything important about it should be close at hand.</p> {/*[cite: 1] */}
              <p className="project-desc">Tasks, prices, completion state, progress, and mission information live together instead of being spread across different tools.</p> {/*[cite: 1] */}
              <p className="project-desc">The product grew around that idea.</p> {/*[cite: 1] */}
              <p className="project-desc">I started with the core mission and task workflow, then kept adding the things that were necessary to make it useful in practice — editing, deleting, payment tracking, filtering, better loading states, responsive interactions, and an experience for using it while a mission is actually happening.</p> {/*[cite: 1] */}
            </div>
            <div className="shot-frame mt-16 max-w-[1000px] mx-auto aspect-video bg-muted flex items-center justify-center">
              <p className="mono text-muted-fg text-sm">Image: Large dashboard / mission overview.</p> {/*[cite: 1] */}
            </div>
          </section>

          {/* THE CORE WORKFLOW */}
          <section className="reveal py-16 border-t border-border">
            <div className="max-w-[640px] mx-auto">
              <div className="section-label">THE CORE WORKFLOW</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-3xl mb-6">A mission becomes a set of things you can actually act on.</h2> {/*[cite: 1] */}
              <p className="project-desc">Missions are broken down into individual tasks.</p> {/*[cite: 1] */}
              <p className="project-desc">A task can have information such as its expected price, paid price, quantity, state, and completion status.</p> {/*[cite: 1] */}
              <p className="project-desc font-medium text-fg">But the interesting part isn't storing those fields. It's what happens when they interact.</p> {/*[cite: 1] */}
              <ul className="project-desc list-none space-y-3 mt-6 border-l-2 border-border pl-4">
                <li>A completed task contributes to the mission's progress.</li> {/*[cite: 1] */}
                <li>A paid amount contributes to the mission's spending.</li> {/*[cite: 1] */}
                <li>Changing a task changes the information around it.</li> {/*[cite: 1] */}
              </ul>
              <p className="project-desc mt-6">That meant I had to think about Missiono less as a collection of screens and more as a connected data model.</p> {/*[cite: 1] */}
            </div>
            <div className="shot-frame mt-16 max-w-[900px] mx-auto aspect-video bg-muted flex items-center justify-center">
               <p className="mono text-muted-fg text-sm">Image: Mission detail page with tasks, states, prices, and progress.</p> {/*[cite: 1] */}
            </div>
          </section>

          {/* EXPECTED VS ACTUAL */}
          <section className="reveal py-16">
            <div className="max-w-[640px] mx-auto">
              <div className="section-label">EXPECTED VS. ACTUAL SPENDING</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-3xl mb-6">A budget isn't useful if it only exists before the mission starts.</h2> {/*[cite: 1] */}
              <p className="project-desc">One of the important distinctions in Missiono is between what you <strong>expect to spend</strong> and what you have <strong>actually paid</strong>.</p> {/*[cite: 1] */}
              <p className="project-desc">That makes it possible to use the budget while the mission is happening, rather than simply planning it beforehand.</p> {/*[cite: 1] */}
              <p className="project-desc">I also added dedicated interactions for recording paid prices and validation around payment values, so changing the financial information isn't just another text field buried in the task UI.</p> {/*[cite: 1] */}
            </div>
            <div className="shot-frame mt-16 max-w-[700px] mx-auto aspect-[4/3] bg-muted flex items-center justify-center">
               <p className="mono text-muted-fg text-sm">Image: Close crop showing expected and paid prices.</p> {/*[cite: 1] */}
            </div>
          </section>

          {/* ITERATING ON DETAILS */}
          <section className="reveal py-16 border-t border-border">
            <div className="max-w-[640px] mx-auto">
              <div className="section-label">BUILDING THE PRODUCT MEANT ITERATING ON THE DETAILS</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-3xl mb-6">The first version wasn't the finished version.</h2> {/*[cite: 1] */}
              <p className="project-desc">A large part of building Missiono was noticing where the product felt incomplete and fixing those places.</p> {/*[cite: 1] */}
              <ul className="project-desc list-disc pl-5 space-y-2">
                <li>I added the ability to edit and delete missions. Then the same for tasks.</li> {/*[cite: 1] */}
                <li>I improved task searching and filtering.</li> {/*[cite: 1] */}
                <li>I added loading and error states instead of leaving the user staring at an unfinished screen.</li> {/*[cite: 1] */}
                <li>I refined empty states so that an empty mission or empty task list actually tells the user what to do next.</li> {/*[cite: 1] */}
              </ul>
              <p className="project-desc mt-6">Authentication and routing also went through several iterations, including handling what happens when someone is already signed in and making the sign-up and login flows behave correctly.</p> {/*[cite: 1] */}
              <p className="project-desc">These weren't separate "extra features." They were the things that gradually turned Missiono from an application that worked into an application that felt usable.</p> {/*[cite: 1] */}
            </div>
            <div className="shot-frame mt-16 w-full max-w-[1000px] mx-auto grid grid-cols-2 gap-4 bg-transparent border-none">
                <div className="aspect-[4/3] bg-muted rounded-xl border border-border flex items-center justify-center"><p className="mono text-xs">Task Editing</p></div> {/*[cite: 1] */}
                <div className="aspect-[4/3] bg-muted rounded-xl border border-border flex items-center justify-center"><p className="mono text-xs">Empty State</p></div> {/*[cite: 1] */}
                <div className="aspect-[4/3] bg-muted rounded-xl border border-border flex items-center justify-center"><p className="mono text-xs">Loading State</p></div> {/*[cite: 1] */}
                <div className="aspect-[4/3] bg-muted rounded-xl border border-border flex items-center justify-center"><p className="mono text-xs">Error State</p></div> {/*[cite: 1] */}
            </div>
          </section>

          {/* TWO-COLUMN FEATURE SPLIT */}
          <section className="reveal py-16 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">FINDING THE RIGHT TASK</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-3xl mb-6">More data means better ways to navigate it.</h2> {/*[cite: 1] */}
              <p className="project-desc">As missions became more detailed, simply showing every task wasn't enough. Missiono supports filtering tasks by things such as date, completion, and state.</p> {/*[cite: 1] */}
              <p className="project-desc">I also made the selected filter persist locally, so the interface doesn't forget the user's preference every time they move around the application.</p> {/*[cite: 1] */}
              <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
                <p className="mono text-sm font-semibold mb-0">The goal was small, but important: don't make the user fight the interface to find the information they're already looking for.</p> {/*[cite: 1] */}
              </div>
            </div>
            <div className="shot-frame aspect-square bg-muted flex items-center justify-center">
              <p className="mono text-muted-fg text-sm">Image: Task list with an active filter.</p> {/*[cite: 1] */}
            </div>
          </section>

          <section className="reveal py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 shot-frame aspect-square bg-muted flex items-center justify-center">
              <p className="mono text-muted-fg text-sm text-center">Image: Desktop + mobile On-the-go screens side by side.</p> {/*[cite: 1] */}
            </div>
            <div className="order-1 md:order-2">
              <div className="section-label">DESIGNED FOR WHEN THE MISSION IS ACTUALLY HAPPENING</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-3xl mb-6">Planning and doing are different contexts.</h2> {/*[cite: 1] */}
              <p className="project-desc">A desktop dashboard makes sense when you're sitting down and organizing a mission. It isn't necessarily the interface you want when you're actually carrying it out.</p> {/*[cite: 1] */}
              <p className="project-desc">That's why I added an <strong>On-the-go</strong> experience focused on accessing tasks and mission information in a more practical context.</p> {/*[cite: 1] */}
              <p className="project-desc">Mobile wasn't simply a smaller version of desktop. The navigation, mission information, drawers, task interactions, and spacing all had to adapt to the available space while keeping the same underlying workflow.</p> {/*[cite: 1] */}
            </div>
          </section>

          {/* REAL INTERACTIONS & SYSTEM (The Developer Philosophy) */}
          <section className="reveal py-24 border-t border-border">
            <div className="max-w-[640px] mx-auto text-center mb-16">
              <div className="section-label">THE PRODUCT HAD TO SURVIVE REAL INTERACTIONS</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-4xl mx-auto mb-6">Not just the happy path.</h2> {/*[cite: 1] */}
              <p className="project-desc text-left">One of the biggest lessons from Missiono was how many things happen outside the ideal flow. Users can have no missions. A mission can have no tasks. A page can still be loading. Something can fail. A user can already be authenticated. A task can be edited or deleted. A payment can need validation.</p> {/*[cite: 1] */}
              <p className="project-desc text-left">Those details aren't the most visually impressive parts of the application. They're what make the application feel complete.</p> {/*[cite: 1] */}
              
              {/* Sequential States Visual */}
              <div className="flex items-center justify-center gap-4 mt-12 font-mono text-xs text-muted-fg overflow-x-auto pb-4">
                <div className="p-4 border border-border rounded-lg bg-card">EMPTY</div> {/*[cite: 1] */}
                <ArrowIcon size={12} /> {/*[cite: 6] */}
                <div className="p-4 border border-border rounded-lg bg-card">LOADING</div> {/*[cite: 1] */}
                <ArrowIcon size={12} /> {/*[cite: 6] */}
                <div className="p-4 border border-accent text-accent rounded-lg bg-card shadow-sm">CONTENT</div> {/*[cite: 1] */}
                <ArrowIcon size={12} /> {/*[cite: 6] */}
                <div className="p-4 border border-border rounded-lg bg-card text-red-500">ERROR</div> {/*[cite: 1] */}
              </div>
            </div>

            {/* Architecture Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto mt-24">
              <div>
                <div className="section-label">THE SYSTEM BEHIND THE INTERFACE</div> {/*[cite: 1] */}
                <h3 className="text-xl font-semibold mb-4">The UI is only one layer.</h3> {/*[cite: 1] */}
                <p className="project-desc text-sm">The application handles authentication, database operations, application state, task and mission relationships, validation, and synchronization between different parts of the interface.</p> {/*[cite: 1] */}
                <p className="project-desc text-sm">A task update shouldn't only update the task. The rest of the application needs to understand what changed too.</p> {/*[cite: 1] */}
              </div>
              
              <div className="bg-muted p-8 rounded-xl border border-border font-mono text-xs flex flex-col gap-4 text-center">
                <div className="bg-card p-3 rounded border border-border">MISSION</div> {/*[cite: 1] */}
                <div className="text-muted-fg">↓</div> {/*[cite: 1] */}
                <div className="bg-card p-3 rounded border border-border">TASKS</div> {/*[cite: 1] */}
                <div className="text-muted-fg">↓</div> {/*[cite: 1] */}
                <div className="bg-card p-3 rounded border border-border">COMPLETION · EXPECTED PRICE · PAID PRICE</div> {/*[cite: 1] */}
                <div className="text-muted-fg">↓</div> {/*[cite: 1] */}
                <div className="bg-card p-3 rounded border border-border">PROGRESS · SPENDING</div> {/*[cite: 1] */}
                <div className="text-muted-fg text-[10px] mt-2 border-t border-border pt-4">DATABASE UNDERNEATH</div> {/*[cite: 1] */}
              </div>
            </div>
          </section>

          {/* REALTIME & LOGIC */}
          <section className="reveal py-16 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="section-label">REALTIME DATA</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-2xl mb-4">Changes shouldn't need a refresh.</h2> {/*[cite: 1] */}
              <p className="project-desc text-sm">Missiono uses Supabase realtime functionality to keep relevant application state synchronized as data changes. This matters because the product is built around connected information. When the data changes, the UI should know.</p> {/*[cite: 1] */}
            </div>
            <div>
              <div className="section-label">DATABASE LOGIC</div> {/*[cite: 1] */}
              <h2 className="section-heading !text-2xl mb-4">Some rules belong closer to the data.</h2> {/*[cite: 1] */}
              <p className="project-desc text-sm">Not every piece of application logic needs to live inside a React component. Missiono uses database-level logic to maintain important relationships between the data... Good architecture isn't about adding complexity. It's about putting responsibility in the right place.</p> {/*[cite: 1] */}
            </div>
          </section>

          {/* BUILT WITH BENTO GRID */}
          <section className="reveal py-24 border-t border-border">
            <div className="text-center mb-12">
              <div className="section-label">TECH STACK</div>
              <h2 className="section-heading mx-auto">Built With</h2> {/*[cite: 1] */}
            </div>
            <div className="bento max-w-[1000px] mx-auto"> {/*[cite: 2, 4] */}
              <div className="bento-card">
                <div className="bento-num">01</div> {/*[cite: 2] */}
                <div className="bento-title">Frontend</div> {/*[cite: 1] */}
                <div className="bento-desc mt-4 flex flex-col gap-2 font-mono text-xs">
                  <span>Next.js</span><span>React</span><span>TypeScript</span><span>Tailwind CSS</span> {/*[cite: 1] */}
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-num">02</div> {/*[cite: 2] */}
                <div className="bento-title">Backend</div> {/*[cite: 1] */}
                <div className="bento-desc mt-4 flex flex-col gap-2 font-mono text-xs">
                  <span>Supabase</span><span>PostgreSQL</span> {/*[cite: 1] */}
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-num">03</div> {/*[cite: 2] */}
                <div className="bento-title">Application</div> {/*[cite: 1] */}
                <div className="bento-desc mt-4 flex flex-col gap-2 font-mono text-xs">
                  <span>Authentication</span><span>Realtime synchronization</span><span>State management</span><span>Validation</span><span>Responsive UI</span><span>CRUD workflows</span> {/*[cite: 1] */}
                </div>
              </div>
              <div className="bento-card">
                <div className="bento-num">04</div> {/*[cite: 2] */}
                <div className="bento-title">Deployment</div> {/*[cite: 1] */}
                <div className="bento-desc mt-4 flex flex-col gap-2 font-mono text-xs">
                  <span>Vercel</span> {/*[cite: 1] */}
                </div>
              </div>
            </div>
          </section>

          {/* THE RESULT / CONCLUSION */}
          <section className="reveal py-32 border-t border-border text-center">
            <div className="max-w-[700px] mx-auto">
              <div className="section-label">THE RESULT</div> {/*[cite: 1] */}
              <h2 className="contact-heading mb-8">What I Learned</h2> {/*[cite: 1, 2] */}
              <p className="project-desc text-lg">
                Building a product is different from building a collection of features. Missiono taught me that the difficult part of a full-stack application isn't necessarily any individual technology. It's the relationships between them. {/*[cite: 1] */}
              </p>
              <p className="project-desc text-lg">
                The database structure influences the application logic. The application logic influences the UI. The UI influences how the user understands the data. {/*[cite: 1] */}
              </p>
              <div className="mt-12 p-8 bg-card border border-border rounded-xl">
                <p className="text-xl font-semibold text-fg">It's not just a collection of screens.<br/>It's a product I built from the database up.</p> {/*[cite: 1] */}
              </div>
              
              <div className="contact-cta flex justify-center gap-6"> {/*[cite: 2, 4] */}
                <Link href="#" className="btn-primary">Open Missiono <ArrowIcon /></Link> {/*[cite: 1] */}
                <Link href="/#work" className="link-secondary flex items-center">Back to work</Link> {/*[cite: 1] */}
              </div>
            </div>
          </section>

        </article>
      </main>

      <SiteFooter /> {/*[cite: 5] */}
    </>
  );
}