import type { Metadata } from "next";
import BlogNav from "@/components/blogs/BlogNav";

export const metadata: Metadata = {
  title: "Blog | Romani",
  description:
    "Thoughts, tutorials, and practical lessons on building SaaS products and web applications.",
  alternates: {
    canonical: "https://romani.vercel.app/blogs",
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogNav />
      {children}
    </>
  );
}