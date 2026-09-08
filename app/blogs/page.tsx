import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/blogs/BlogList";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="blog-index-hero">
        <div className="container">
          <div className="blog-index-hero-content">
            <p className="section-label">WRITING / ARTICLES</p>

            <h1 className="blog-index-title">
              Thoughts on building
              <br />
              products that work.
            </h1>

            <p className="blog-index-sub">
              Practical notes on SaaS, full-stack development, product
              engineering, and turning ideas into working software.
            </p>
          </div>
        </div>
      </section>

      <BlogList posts={posts} />
    </>
  );
}