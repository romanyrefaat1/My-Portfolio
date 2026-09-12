import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://romani.vercel.app";
const appDirectory = path.join(process.cwd(), "app");

function getStaticRoutes(
  directory: string,
  routePrefix = ""
): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  if (!fs.existsSync(directory)) {
    return routes;
  }

  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Ignore Next.js special/dynamic route folders.
    if (
      entry.name.startsWith("[") ||
      entry.name.startsWith("(") ||
      entry.name.startsWith("_")
    ) {
      continue;
    }

    const routeDirectory = path.join(directory, entry.name);
    const route = `${routePrefix}/${entry.name}`;

    const hasPage = fs.existsSync(path.join(routeDirectory, "page.tsx"));

    if (hasPage) {
      routes.push({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority:
          route === "/guides"
            ? 0.9
            : route === "/guides/free"
              ? 0.85
              : 0.8,
      });
    }

    routes.push(...getStaticRoutes(routeDirectory, route));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guideUrls = getStaticRoutes(
    path.join(appDirectory, "guides"),
    "/guides"
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/missiono`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/floopr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
    ...guideUrls,
  ];
}