import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/learn-new-trends-in-sci-physiotherapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "learn-new-trends-in-sci-physiotherapy")!;

export const Route = createFileRoute("/learn-new-trends-in-sci-physiotherapy")({
  head: () => ({
    meta: [
      { title: "Learn New Trends in SCI Physiotherapy | Complete Care" },
      { name: "description", content: "Learn New Trends in SCI Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Learn New Trends in SCI Physiotherapy | Complete Care" },
      { property: "og:description", content: "Learn New Trends in SCI Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/New-Trends-in-SCI-Physiotherapy-From-FES-to-Rehab-Therapy-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/New-Trends-in-SCI-Physiotherapy-From-FES-to-Rehab-Therapy-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
