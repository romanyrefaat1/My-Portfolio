import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missiono — Mission & Expense Management",
  description:
    "Missiono is a mission and expense management app that brings planning, tasks, budgets, and spending together in one place.",

  keywords: [
    "Missiono",
    "mission management",
    "expense management",
    "task management",
    "budget tracking",
    "mission planning",
    "project planning",
  ],

  openGraph: {
    title: "Missiono — Mission & Expense Management",
    description:
      "Plan missions, manage tasks, track spending, and monitor progress — all in one place.",
    type: "website",
    url: "https://missiono.vercel.app",
    siteName: "Romany",
    images: [
      {
        url: "https://missiono.vercel.app/missiono.png",
        width: 1200,
        height: 630,
        alt: "Missiono — Mission and expense management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Missiono — Mission & Expense Management",
    description:
      "Plan missions, manage tasks, track spending, and monitor progress — all in one place.",
    images: ["https://missiono.vercel.app/missiono.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function MissionoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}