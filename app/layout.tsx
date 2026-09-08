import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romani — Full-Stack Developer",
  description:
    "Portfolio of Romani Refaat, a full-stack developer building thoughtful web products with React, Next.js, TypeScript, and Supabase.",
  openGraph: {
    title: "Romani — Full-Stack Developer",
    description:
      "Portfolio of Romani Refaat, a full-stack developer building thoughtful web products with React, Next.js, TypeScript, and Supabase.",
    images: [
      {
        url: "/portfolio-demo-files/Screenshot (74).png",
        width: 1200,
        height: 630,
        alt: "Romani Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romani — Full-Stack Developer",
    description:
      "Portfolio of Romani Refaat, a full-stack developer building thoughtful web products with React, Next.js, TypeScript, and Supabase.",
    images: ["/portfolio-demo-files/Screenshot (74).png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider themes={["dark"]}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}