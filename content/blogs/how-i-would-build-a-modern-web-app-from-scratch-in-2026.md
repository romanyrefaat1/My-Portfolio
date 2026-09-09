---

title: "How I Would Build a Modern Web App From Scratch in 2026"
date: "2026-09-09"
description: "A practical architecture roadmap for building modern web applications in 2026 using Next.js, Supabase, TypeScript, and a scope-first approach."
tags: [
"architecture",
"nextjs",
"web-development",
"typescript"
]
---

Building a modern web application in 2026 isn't mainly about choosing the newest framework.

It's about choosing an architecture that lets you move quickly without creating unnecessary complexity.

When I build a web application, I want the stack to support the product, keep the core workflows understandable, and leave enough room to evolve when real users reveal what actually needs to change.

My process usually looks like this:

**Understand the product → define the MVP → choose the stack → design the architecture → build the data layer → secure access → build the core workflow → test → deploy → learn → improve.**

The exact technologies can change.

The process matters more.

## Start With the Product, Not the Code

Before writing database migrations or choosing UI packages, I want to understand the user and the workflow.

I'd ask:

* Who is this application for?
* What problem are they trying to solve?
* What do they do today?
* What is the most important action?
* What result should the user get?
* What does a successful first version look like?

A dashboard with ten screens can still be a badly designed product if the main workflow is confusing.

That's why I prefer to map the workflow first.

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

That tells me more about the application than a page list like:

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

## Define the MVP

One of the easiest ways to make a web application harder than necessary is to design the first architecture around the entire future roadmap.

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

I wouldn't automatically build all of that in version one.

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

That's enough to create a complete workflow that a real user can try.

The goal isn't to build the fewest possible features.

It's to build the **smallest complete workflow**.

For more on deciding what belongs in an MVP, see [how much of a SaaS you should build before launching](https://romani.vercel.app/blogs/how-much-of-my-saas-should-i-build-before-launching).

---

## Choose the Stack Based on the Product

Once I understand the workflow, I can make technical decisions.

For many full-stack applications, I like a relatively simple stack:

| Layer            | Technology       |
| ---------------- | ---------------- |
| Framework        | Next.js          |
| Language         | TypeScript       |
| Database         | PostgreSQL       |
| Backend services | Supabase         |
| Authentication   | Supabase Auth    |
| Storage          | Supabase Storage |
| Styling          | Tailwind CSS     |
| UI components    | shadcn/ui        |
| Deployment       | Vercel           |
| Payments         | Stripe           |

This isn't a universal stack.

A data-heavy analytics product, a real-time collaboration system, a browser automation platform, or an application with specialized infrastructure needs may require additional services.

My general rule is:

> **Choose the simplest architecture that solves the current problem properly.**

I don't want to introduce infrastructure because I think I might need it six months from now.

---

## My Recommended Stack in 2026

For the kinds of SaaS and web applications I usually build, Next.js and TypeScript provide the application layer, while Supabase gives me a practical foundation around PostgreSQL, authentication, and storage.

A simplified setup can look like:

```text
Browser
   ↓
Next.js
   ↓
Server-side application logic
   ↓
Supabase
   ├── PostgreSQL
   ├── Auth
   └── Storage
```

For payments and transactional email, I can add services such as Stripe and Resend when the product actually requires them.

I like this approach because it lets me spend more time on the product instead of implementing infrastructure that established services already provide.

For a deeper implementation walkthrough, see [how to build a SaaS MVP with Next.js and Supabase](https://romani.vercel.app/blogs/how-to-build-a-saas-mvp-with-nextjs-and-supabase).

---

## Design the Architecture

Once the stack is chosen, I want the application boundaries to be obvious.

A typical flow might be:

```text
User
  ↓
UI
  ↓
Server-side application logic
  ↓
Validation + authorization
  ↓
Database / external services
```

For Next.js applications, I generally keep server-side work on the server when practical and use Client Components when browser-side interactivity or client state is actually required.

That usually means:

* Server Components for server-rendered UI, data access, and layouts where appropriate
* Client Components for interactive interfaces that need browser state or event handling
* Server Actions where they provide a clean boundary for mutations
* Route Handlers or other HTTP endpoints when an explicit API boundary makes more sense

I don't try to force every operation through one mechanism.

The goal is to keep the architecture understandable.

---

## Design the Database Around Real Requirements

I prefer to model the important entities before building large parts of the application.

For a simple project-management application:

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

As the product grows, I may introduce:

```text
organizations
memberships
roles
subscriptions
notifications
activity_logs
```

But I don't want a huge schema full of hypothetical tables.

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

A straightforward schema is easier to query, test, secure, and change.

I can make it more sophisticated when the application gives me a reason to.

### Index the Queries That Matter

As data grows, database performance becomes more dependent on how the application actually queries the data.

So I pay attention to:

* foreign keys
* frequently filtered columns
* sorting and pagination patterns
* unique constraints
* indexes for common lookup paths

I don't add indexes blindly.

I add them based on the queries the application actually needs.

---

## Build Authentication and Authorization

Authentication and authorization are different problems.

Authentication answers:

> **Who is this user?**

Authorization answers:

> **What is this user allowed to access?**

For a Next.js application using Supabase, I'd use Supabase's current SSR approach with the `@supabase/ssr` package rather than the older Auth Helpers package.

A typical application might support:

* sign up
* sign in
* sign out
* password reset
* email verification
* protected routes

Then authorization determines which data and actions that user can actually access.

For example:

```text
Admin
 ├── Manage users
 ├── Manage billing
 └── Manage projects

Member
 ├── View projects
 └── Edit assigned tasks
```

Those rules shouldn't exist only in the interface.

Hiding a button is not a security boundary.

The application and, where appropriate, the database should enforce the actual access rules.

---

## Use Row Level Security When the Data Model Requires It

One of the reasons I like Supabase for many SaaS applications is that PostgreSQL gives me a strong foundation for data access rules.

With Row Level Security, I can enforce rules such as:

```text
User A
   ↓
Can access User A's records

User A
   X
Cannot access User B's records
```

That is especially useful for applications where users share the same database but should only be able to access the records they are authorized to see.

The exact policies depend on the product.

The important principle is:

> **Don't assume the UI is enough to protect data.**

---

## Build the Core Workflow First

Once the foundation works, I want the main product workflow working end to end.

Not the settings page.

Not the analytics dashboard.

Not a complex admin panel.

The thing the user actually came to accomplish.

For example:

```text
Sign up
   ↓
Create project
   ↓
Configure project
   ↓
Run core feature
   ↓
View result
   ↓
Save result
```

Then I test the workflow repeatedly.

A useful development loop is:

```text
Build
  ↓
Test
  ↓
Use it yourself
  ↓
Find friction
  ↓
Fix
  ↓
Repeat
```

That approach usually reveals product problems much earlier than building every screen first.

---

## Keep Business Logic Out of the UI

I don't want a React component gradually becoming responsible for:

* database queries
* authorization
* validation
* business rules
* API requests
* error handling
* UI state

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

The exact implementation depends on the application.

The principle is simply to keep responsibilities understandable.

When the same business rule appears in several UI components, changing it later becomes unnecessarily difficult.

---

## Treat Loading, Errors, and Empty States as Product Features

A product isn't complete just because the success case works.

Users will encounter:

* loading states
* empty states
* invalid input
* unauthorized access
* missing records
* failed requests
* expired sessions
* third-party failures

A blank dashboard isn't a useful empty state.

Something like:

> You haven't created a project yet.

with:

> Create your first project

helps the user understand what to do next.

The same principle applies to errors.

"Something went wrong" isn't always enough information.

When possible, the application should explain what happened and what the user can do next.

---

## Build Responsive Workflows, Not Just Responsive Pages

I don't wait until the end to discover that the application only works comfortably on desktop.

I check important workflows across:

```text
Desktop
Tablet
Mobile
```

Some layouts can shrink.

Others need different interaction patterns.

Tables, navigation, forms, dialogs, and dashboards can require different decisions at smaller widths.

The goal isn't to make every viewport identical.

The goal is to keep the important workflow usable.

---

## Add Integrations Only When They Create Value

A modern application may eventually use:

* Stripe
* Resend
* AI providers
* Google APIs
* GitHub
* Slack
* CRMs
* analytics platforms

But every external service creates another dependency.

A simple integration can be easy to add.

A more complex one may require:

```text
Authentication
   ↓
API requests
   ↓
Validation
   ↓
Webhooks
   ↓
Retries
   ↓
Error handling
   ↓
Application state
```

So I don't add integrations because they make the architecture look more complete.

I add them because the product actually needs them.

---

## Use Background Processing When the Workload Needs It

Some tasks don't belong inside a normal user request.

For example:

* AI processing
* browser automation
* large imports
* report generation
* file processing
* batch email

can benefit from background processing.

A simplified architecture might be:

```text
User
  ↓
Create job
  ↓
Queue / database
  ↓
Background worker
  ↓
Process
  ↓
Save result
  ↓
Notify user
```

I wouldn't add a worker just because I expect the product to become huge.

I'd add one when the workload or reliability requirements justify the extra architecture.

---

## Keep Payments Simple in the First Version

If a SaaS needs payments, I want the billing flow to be understandable.

A simplified architecture might look like:

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
  ↓
Feature access
```

For an MVP, a simple pricing model can be easier to implement and validate.

For example:

```text
Free
  ↓
Pro
```

is usually easier to reason about than a system with many plans, complicated entitlements, discounts, trials, and enterprise exceptions.

The billing model should fit the business stage.

---

## Test the Boundaries

Testing shouldn't focus only on the happy path.

I'd ask:

```text
What if the user isn't authenticated?

What if the record doesn't exist?

What if the user doesn't own it?

What if validation fails?

What if the database request fails?

What if the payment provider fails?

What if an external API times out?

What if a background job fails?
```

Those cases often reveal whether an application is actually ready for real users.

For important products, I'd also test the security boundaries directly rather than assuming they work because the UI behaves correctly.

---

## Deploy Early

A local environment can hide problems that appear immediately in production.

A simple deployment flow might be:

```text
GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
Supabase
```

Before launch, I'd verify things like:

* environment variables
* authentication
* database permissions
* RLS policies
* payment webhooks
* file uploads
* production URLs
* build behavior
* responsive workflows

Deploying earlier gives you more opportunities to discover those problems before the actual launch.

---

## What I Would Not Build Yet

For an early-stage product, I generally wouldn't start with:

* microservices
* Kubernetes
* multiple databases
* custom authentication
* a huge admin platform
* dozens of integrations
* advanced analytics infrastructure
* complex event-driven architecture

None of those technologies are inherently bad.

The point is that infrastructure should follow the workload.

If a product is still validating its core workflow, I'd rather have a clean application that is easy to understand and change.

As the workload grows, the architecture can evolve with it.

---

## What Building My Own Products Taught Me

Building products has made me much more careful about the difference between a feature and the system behind it.

[Floopr](https://floopr.vercel.app), for example, started around a focused feedback workflow.

At first glance, the product can sound simple:

```text
Embed widget
   ↓
Collect feedback
```

But the application also needs to think about how feedback is stored, processed, analyzed, and presented back to the people making product decisions.

[Missiono](https://missiono.vercel.app) is a different type of application, centered around missions, tasks, and related budget tracking.

That taught me something similar:

**the visible interface doesn't tell you the complete engineering complexity.**

Two applications can look similarly simple while having very different requirements behind the scenes.

That's one reason I try to design architecture around actual workflows rather than screen counts.

You can see more of the products and development work on [my portfolio](https://romani.vercel.app/#work).

---

## How I'd Approach a New Project

If I were starting a new web application today, my process would look roughly like this:

```text
Problem
   ↓
Target user
   ↓
Desired outcome
   ↓
Core workflow
   ↓
MVP scope
   ↓
Technology choices
   ↓
Database
   ↓
Authentication + authorization
   ↓
Core functionality
   ↓
Testing
   ↓
Deployment
   ↓
Real users
   ↓
Iteration
```

That order keeps technical decisions connected to the actual product.

It also makes it easier to recognize when something belongs in version one and when it should wait.

---

## Frequently Asked Questions

### Why choose a monolithic architecture for an MVP?

For many early-stage applications, a monolithic architecture can be easier to understand, deploy, and change because the application has fewer independently managed services.

That doesn't mean monoliths are always better.

As requirements and workloads change, separating parts of the system can make sense.

I'd start with the simpler architecture unless the product already has a reason to require something more distributed.

### Is Supabase suitable for production applications?

Supabase is built around PostgreSQL and provides services including authentication and storage in addition to the database.

It can be a practical production foundation for many web applications.

Whether it is the right choice for a particular enterprise workload depends on requirements such as scale, security, compliance, data architecture, and operational needs.

I'd evaluate those requirements before treating any database platform as a universal answer.

### Should every Next.js application use Server Actions?

No.

Server Actions can be useful for server-side mutations, but they aren't a replacement for every type of API.

For example, webhooks, independently consumed APIs, and some external integrations can still benefit from explicit HTTP endpoints.

I prefer choosing the mechanism that gives the application the clearest boundary.

### Should I use microservices for my first version?

Usually, I wouldn't unless the product already has a requirement that justifies them.

A simpler application is often easier to develop, deploy, debug, and change while the product is still being validated.

The architecture can become more distributed when the workload or organizational requirements make that useful.

---

## Final Thoughts

Building a modern web application in 2026 isn't about using every modern technology.

It's about choosing tools and architecture that fit the product you actually have today.

My preferred approach is:

**Define the problem.**

**Build the smallest complete workflow.**

**Choose a simple stack.**

**Secure the data properly.**

**Keep business logic understandable.**

**Deploy early.**

**Learn from real users.**

**Add complexity when the product gives you a reason to.**

The framework matters.

The database matters.

The architecture matters.

But knowing **what not to build yet** can save more time than almost any technology decision.

---

## Need Someone to Build Your Web App?

I build full-stack web applications and SaaS products using **Next.js, TypeScript, PostgreSQL, and Supabase**.

Have an idea, design, or specification? [Let's talk](https://romani.vercel.app/#contact) or explore [my work](https://romani.vercel.app/#work).