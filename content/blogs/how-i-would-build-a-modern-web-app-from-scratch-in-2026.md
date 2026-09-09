---

title: "How I Would Build a Modern Web App From Scratch in 2026"
date: "2026-09-09"
description: "My practical process for building a modern web app in 2026, from product scope and architecture to development, testing, deployment, and launch."
tags: [
"web-development",
"nextjs",
"typescript",
"saas",
"startups",
"full-stack"
]
---

Building a modern web application isn't mainly a coding problem.

The difficult part is deciding **what to build, how much to build, and which technical decisions actually matter**.

I've found that a web app can have a great-looking interface and solid code and still fail because the core workflow is confusing, the scope is too large, or the product takes too long to reach real users.

When I build a web application, I generally think about the process like this:

**Understand the problem → define the MVP → map the workflow → choose the stack → build the foundation → build the core feature → test → launch → improve.**

This approach works for SaaS products, internal tools, dashboards, client portals, marketplaces, and other custom web applications.

It also keeps one important principle at the center:

> **The architecture should support the product, not become the product.**

## Before Writing Code, Define the Product

The first thing I want to know is not which framework we're using.

I want to know who the application is for and what they are trying to accomplish.

I'd ask:

* Who is the user?
* What problem are they trying to solve?
* What do they do today?
* What is the most important action in the application?
* What result should the user get?
* What would make the first version successful?

A consumer SaaS, an internal operations tool, and a customer portal can all be "web apps," but they can have completely different technical requirements.

That difference affects everything that follows.

### Start with the user journey

Instead of beginning with a list of pages, I prefer to map the main workflow.

For example:

```text
Landing page
    ↓
Sign up
    ↓
Onboarding
    ↓
Dashboard
    ↓
Create something
    ↓
Use the core feature
    ↓
Get the result
```

That workflow tells you far more about the application than a list like:

```text
Home
Dashboard
Settings
Admin
Analytics
Profile
```

Pages are implementation details.

The workflow is the product.

---

## Define the MVP Before Defining the Architecture

A common mistake is designing the architecture around the entire future roadmap.

Imagine the long-term product includes:

* teams
* projects
* billing
* analytics
* notifications
* AI
* integrations
* mobile apps
* advanced permissions

You don't necessarily need all of that in version one.

The MVP might be:

```text
Sign up
   ↓
Create project
   ↓
Create task
   ↓
Track progress
```

That's much easier to build, test, launch, and learn from.

I wrote more about this in [how much of a SaaS you should build before launching](https://romani.vercel.app/blogs/how-much-of-my-saas-should-i-build-before-launching).

The important distinction is:

> **Build the smallest complete workflow, not the fewest possible features.**

A feature is justified when the user needs it to get the promised result.

---

## Choose the Stack Based on the Product

Once I understand the requirements, I can make technology decisions.

For many web applications, a stack like this is a practical starting point:

| Layer            | Technology       |
| ---------------- | ---------------- |
| Framework        | Next.js          |
| Language         | TypeScript       |
| Database         | PostgreSQL       |
| Backend services | Supabase         |
| Authentication   | Supabase Auth    |
| Storage          | Supabase Storage |
| Styling          | Tailwind CSS     |
| Deployment       | Vercel           |

This isn't a universal stack.

A real-time collaboration product, a data-heavy analytics application, or a system processing large files might need additional infrastructure.

The principle is simple:

> **Choose the simplest architecture that solves the current problem properly.**

Don't introduce infrastructure because you expect to need it someday.

---

## Why I Like Next.js for Full-Stack Web Apps

For many products, Next.js lets me keep the application and server-side functionality relatively close together.

A simplified architecture can look like:

```text
Browser
   ↓
Next.js
   ↓
Server Actions / API Routes
   ↓
PostgreSQL
```

With supporting services:

```text
                    ┌──────────────┐
                    │    Browser   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Next.js   │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         PostgreSQL     Storage      External APIs
              │
              ▼
       Background jobs
```

The benefit isn't that Next.js magically makes complex applications simple.

It gives you a productive foundation for building them.

For a deeper look at this approach, see [how to build a SaaS MVP with Next.js and Supabase](https://romani.vercel.app/blogs/how-to-build-a-saas-mvp-with-nextjs-and-supabase).

---

## Design the Database Around Real Requirements

I prefer to identify the main entities before building application features.

For a simple project-management application, that could be:

```text
users
projects
tasks
```

Then:

```text
User
 └── Projects
      └── Tasks
```

As the product grows, you might need:

```text
organizations
memberships
roles
subscriptions
notifications
activity_logs
```

But I'd rather add those because the product needs them than create a huge schema for hypothetical future requirements.

### Keep the data model understandable

For an MVP, simple is usually valuable.

For example:

```text
projects
---------
id
name
description
owner_id
created_at
updated_at
```

A straightforward schema is easier to query, test, explain, and change.

You can make the system more sophisticated when the real application gives you a reason to.

---

## Authentication Is Not Authorization

Authentication answers:

> **Who is this user?**

Authorization answers:

> **What is this user allowed to access?**

Those are different.

A SaaS might have:

```text
Admin
 ├── Manage users
 ├── Manage billing
 └── Manage projects

Member
 ├── View projects
 └── Edit assigned tasks
```

These rules should not exist only in the UI.

Hiding a button doesn't secure the underlying data.

The server—and where appropriate the database—needs to enforce access rules.

This is one reason I pay attention to authorization early rather than treating it as a final polish task.

---

## Build the Core Function Before Secondary Features

Once the foundation works, I want the main workflow working end to end.

Not the settings page.

Not the analytics dashboard.

Not a complicated admin panel.

The thing the user came to the application to accomplish.

A useful loop is:

```text
Build
  ↓
Test
  ↓
Use it yourself
  ↓
Fix
  ↓
Repeat
```

Using your own application is particularly useful here.

When you're the person moving through the workflow, confusing steps become much easier to notice.

---

## Keep Business Logic Out of the UI

A component shouldn't gradually become the place where you keep:

* database queries
* permissions
* validation
* business rules
* API calls
* UI state
* error handling

A cleaner separation is often closer to:

```text
UI
 ↓
Application logic
 ↓
Data access
 ↓
Database
```

The exact implementation can change from project to project.

The goal is maintainability.

When the same business rule exists in five components, changing that rule later becomes unnecessarily painful.

---

## Treat Loading, Errors, and Empty States as Real Product Features

A successful request is only one possible outcome.

Users will also encounter:

* slow requests
* empty data
* invalid input
* permission errors
* failed payments
* unavailable external services
* missing records
* expired sessions

A blank dashboard is not a good empty state.

Instead:

> You haven't created a project yet.

with:

> Create your first project

That small difference makes the product much easier to understand.

The same applies to errors.

"Something went wrong" is rarely the most useful thing you can tell a user.

---

## Build Responsive Workflows, Not Just Responsive Pages

I don't wait until the end to see whether a web app works on mobile.

Important workflows should be checked at:

```text
Desktop
Tablet
Mobile
```

Some interfaces can simply shrink.

Others need a different layout entirely.

Tables, navigation, forms, dialogs, and dashboards often require different decisions at smaller widths.

The goal isn't to make every viewport identical.

The goal is to keep the important workflow usable.

---

## Add Integrations Only When They Create Value

Modern applications might eventually use:

* Stripe
* Resend
* OpenAI or another AI provider
* Google APIs
* GitHub
* Slack
* analytics tools
* CRMs

But every integration adds another dependency.

A good rule is:

> **An integration should solve a real product problem, not just make the architecture look more complete.**

For an MVP, one important integration can be much more valuable than ten hypothetical ones.

---

## Use Background Processing When a Task Needs It

Some operations don't belong inside a normal request.

For example:

```text
User
  ↓
Create processing job
  ↓
Background worker
  ↓
Process task
  ↓
Save result
  ↓
Notify user
```

This can make sense for:

* AI processing
* browser automation
* large imports
* report generation
* file processing
* email batches

I've seen this become particularly relevant in products that move beyond simple CRUD.

But I still wouldn't add a worker just because "scaling" sounds impressive.

Introduce the complexity when the workload actually needs it.

---

## Payments Need More Than a Checkout Page

For a SaaS, the simplified billing architecture often looks like:

```text
User
  ↓
Checkout
  ↓
Payment provider
  ↓
Webhook
  ↓
Backend
  ↓
Database
```

The webhook is important because your application needs a reliable source for subscription events.

For an MVP, I'd keep the pricing model simple.

For example:

```text
Free
  ↓
Pro
```

is much easier to launch and validate than five plans with dozens of individual limits.

---

## Test the Boundaries

Testing shouldn't focus only on the happy path.

I'd pay particular attention to questions like:

```text
What if the user isn't authenticated?

What if the resource doesn't exist?

What if the user doesn't own it?

What if the database request fails?

What if the payment provider fails?

What if an external API times out?

What if the user submits invalid data?
```

Those are the conditions that reveal whether the application is actually production-ready.

---

## Deploy Earlier Than You Think

A working local environment can hide production problems.

A simple setup might be:

```text
GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
Supabase
```

Deploying early helps expose things like:

* environment variable mistakes
* production authentication issues
* incorrect URLs
* database permissions
* webhook configuration
* build errors

I would rather discover those issues during development than during a launch announcement.

---

## Use Real Projects to Guide Technical Decisions

Building my own products has reinforced how much scope changes the architecture.

For example, [Floopr](https://romani.vercel.app/floopr) required thinking about collecting user feedback as a product feature rather than simply building another CRUD dashboard. That kind of product naturally raises different questions around feedback flows, AI-assisted processing, and how the output becomes useful to the person receiving it.

A different product, [Missiono](https://missiono.vercel.app), is a useful example of how a more focused application can be built around a straightforward workflow and data model.

These projects are also why I try not to separate "product decisions" from "technical decisions."

They affect each other constantly.

You can also see more of the work and projects I've built on [my portfolio](https://romani.vercel.app/#work).

---

## What I Wouldn't Do

I wouldn't:

* build the complete six-month roadmap before launch
* introduce microservices because they sound scalable
* build authentication from scratch when a reliable service works
* create infrastructure for users you don't have yet
* spend months polishing secondary features
* add integrations without a clear use case

The most sophisticated architecture isn't necessarily the best architecture.

The best architecture is the one that solves the current problem cleanly and leaves room to evolve.

---

## A Practical Build Order

For a typical SaaS or business application, I'd usually work through something close to:

```text
Problem
   ↓
Requirements
   ↓
Core workflow
   ↓
MVP scope
   ↓
Architecture
   ↓
Database
   ↓
Authentication
   ↓
Core feature
   ↓
Validation + authorization
   ↓
Testing
   ↓
Deployment
   ↓
Real users
   ↓
Iteration
```

That order keeps the work tied to the actual product.

---

## How Long Does It Take to Build a Modern Web App?

There isn't one universal timeline.

A focused application can potentially be built in weeks.

A SaaS involving multiple roles, billing, AI, integrations, real-time functionality, or background processing can take substantially longer.

The most useful way to estimate time is to define:

* the core workflows
* user roles
* integrations
* business rules
* authentication requirements
* payment requirements
* AI requirements
* testing requirements

That's why I wrote a separate breakdown of [how long it takes to build a SaaS product](https://romani.vercel.app/blogs/how-long-does-it-really-take-to-build-a-saas-product).

---

## Final Thoughts

Building a modern web application in 2026 isn't about using every modern technology.

It's about making good decisions about **what to build, what not to build, what to outsource to existing services, and when to introduce additional complexity**.

My preferred process is simple:

**Understand the problem. Define the smallest useful product. Build the core workflow. Launch. Learn. Improve.**

The code matters.

The architecture matters.

But knowing what **not** to build yet can save more time than almost any framework decision.

---

## Need Someone to Build Your Web App?

I build full-stack web applications and SaaS products with **Next.js, TypeScript, PostgreSQL, and Supabase**.

If you already have an idea, design, or product specification, [let's talk](https://romani.vercel.app/#contact) or explore [my work](https://romani.vercel.app/#work).