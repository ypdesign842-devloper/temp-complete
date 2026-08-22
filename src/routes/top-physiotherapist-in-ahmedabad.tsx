import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/top-physiotherapist-in-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "top-physiotherapist-in-ahmedabad")!;

export const Route = createFileRoute("/top-physiotherapist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Top Physiotherapist in Ahmedabad | Complete Care" },
      { name: "description", content: "Top Physiotherapist in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Top Physiotherapist in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Top Physiotherapist in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Top-Physiotherapist-in-Ahmedabad-2.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Top-Physiotherapist-in-Ahmedabad-2.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
