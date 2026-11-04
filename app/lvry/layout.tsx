import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LVRY — The Everyday Uniform",
  description:
    "A small, considered wardrobe of everyday garments designed to work together. Explore the collection and build your own uniform.",

  keywords: [
    "LVRY",
    "The Everyday Uniform",
    "everyday clothing",
    "minimal clothing",
    "wardrobe essentials",
    "everyday wardrobe",
    "clothing brand",
    "uniform builder",
  ],

  openGraph: {
    title: "LVRY — The Everyday Uniform",
    description:
      "A uniform made of pieces. Explore everyday garments designed to work together and build your own combination.",
    type: "website",
    url: "https://lvry.vercel.app",
    siteName: "LVRY",
    images: [
      {
        url: "https://lvry.vercel.app/lvry.png",
        width: 1200,
        height: 630,
        alt: "LVRY — The Everyday Uniform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LVRY — The Everyday Uniform",
    description:
      "A small, repeatable wardrobe of everyday garments that work together.",
    images: ["https://lvry.vercel.app/lvry.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LVRYLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}