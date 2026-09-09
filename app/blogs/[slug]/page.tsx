import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import ReadingProgress from "@/components/blogs/ReadingProgress";
import TableOfContents from "@/components/blogs/TableOfContents";
import BackToToc from "@/components/blogs/BackToTOC";
import { useMDXComponents } from "@/mdx-components";

const SITE_URL = "https://romani.vercel.app";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  const url = `${SITE_URL}/blogs/${post.slug}`;

  return {
    title: post.title,
    description: post.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage
        ? [{ url: `${SITE_URL}${post.coverImage}` }]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage
        ? [`${SITE_URL}${post.coverImage}`]
        : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const url = `${SITE_URL}/blogs/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.coverImage
      ? `${SITE_URL}${post.coverImage}`
      : undefined,
    url,
    author: {
      "@type": "Person",
      name: "Romani",
    },
  };

  const formattedDate = new Date(post.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="post-page">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <ReadingProgress />

      {/* Hero */}
      <header className="post-hero">
        <div className="case-study-container">
          <p className="case-study-eyebrow">Writing</p>

          <h1 className="post-title">{post.title}</h1>

          {post.description && (
            <p className="post-dek">{post.description}</p>
          )}

          <div className="case-study-meta post-meta">
            <span>{formattedDate}</span>

            <span>{post.readingTime}</span>

            {post.tags && post.tags.length > 0 && (
              <span>{post.tags.join(", ")}</span>
            )}
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="case-study-container post-layout">
        {/* Table of contents */}
        <div id="table-of-contents my-10">
          <TableOfContents headings={post.headings} />
        </div>

        {/* Post content */}
        <article className="post-body-section">
          <div className="post-body">
            <MDXRemote
              source={post.content}
              components={useMDXComponents({})}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {/* Footer */}
          <footer className="post-footer">
            <Link
              href="/blogs"
              className="project-link secondary post-back"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>

              All writing
            </Link>
          </footer>
        </article>
      </main>

      {/* Fixed back-to-contents button */}
      <BackToToc />
    </div>
  );
}