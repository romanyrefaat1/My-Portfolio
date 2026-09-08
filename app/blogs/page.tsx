import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Romani",
  description: "Thoughts, tutorials, and updates from Romani.",
  alternates: { canonical: "https://romani.vercel.app/blogs" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blogs/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <p className="mt-2 text-gray-700">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}