"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags?: string | string[];
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function normalizeTags(tags?: string | string[]) {
  if (!tags) return [];

  if (Array.isArray(tags)) {
    return tags.map((tag) => tag.trim()).filter(Boolean);
  }

  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export default function BlogList({
  posts,
}: {
  posts: BlogPost[];
}) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return posts;

    return posts.filter((post) => {
      const tags = normalizeTags(post.tags).join(" ");

      return [
        post.title,
        post.description,
        tags,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);
    });
  }, [posts, query]);

  return (
    <section className="blog-index-list-section">
      <div className="container">
        <div className="blog-index-toolbar">
          <div className="blog-index-header">
            <span className="blog-index-count">
              {String(filteredPosts.length).padStart(2, "0")}{" "}
              {filteredPosts.length === 1 ? "ARTICLE" : "ARTICLES"}
            </span>

            <span className="blog-index-header-line" />
          </div>

          <div className="blog-search">
            <Search
              size={15}
              strokeWidth={1.7}
              className="blog-search-icon"
            />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="blog-search-clear"
                aria-label="Clear search"
              >
                <X size={14} strokeWidth={1.7} />
              </button>
            )}
          </div>
        </div>

        <div className="blog-index-list">
          {filteredPosts.map((post, index) => {
            const tags = normalizeTags(post.tags);

            return (
              <article
                key={post.slug}
                className="blog-index-post"
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="blog-index-post-link"
                >
                  <div className="blog-index-post-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="blog-index-post-main">
                    <div className="blog-index-post-meta">
                      <span>{formatDate(post.date)}</span>
                      <span className="blog-meta-dot">·</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="blog-index-post-title">
                      {post.title}
                    </h2>

                    <p className="blog-index-post-description">
                      {post.description}
                    </p>

                    {tags.length > 0 && (
                      <div className="blog-index-post-tags">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="blog-index-tag"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="blog-index-post-arrow">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="blog-index-empty">
            <span className="blog-index-empty-label">
              NO RESULTS
            </span>

            <p>
              Nothing matched{" "}
              <strong>“{query}”</strong>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}