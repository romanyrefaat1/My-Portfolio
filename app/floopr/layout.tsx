import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floopr — Feedback Management for Products",
  description:
    "Floopr is a feedback management platform that helps teams collect, analyze, and turn user feedback into product improvements with AI-powered insights.",

  keywords: [
    "Floopr",
    "feedback management",
    "user feedback",
    "product feedback",
    "customer feedback",
    "feedback analytics",
    "AI feedback analysis",
    "product management",
  ],

  openGraph: {
    title: "Floopr — Feedback Management for Products",
    description:
      "Collect feedback, understand what users are saying, and turn insights into better products with Floopr.",
    type: "website",
    url: "https://floopr.vercel.app/floopr",
    siteName: "Romany",
    images: [
      {
        url: "https://floopr.vercel.app/floopr.png",
        width: 1200,
        height: 630,
        alt: "Floopr — Feedback management for products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Floopr — Feedback Management for Products",
    description:
      "Collect feedback, understand what users are saying, and turn insights into better products with Floopr.",
    images: ["https://floopr.vercel.app/floopr.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FlooprLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}