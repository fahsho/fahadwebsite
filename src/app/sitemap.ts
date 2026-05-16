import { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const baseUrl = "https://fahadshoukat.com";

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...postEntries,
  ];
}
