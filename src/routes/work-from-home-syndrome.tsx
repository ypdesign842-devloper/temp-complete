import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/work-from-home-syndrome";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "work-from-home-syndrome")!;

export const Route = createFileRoute("/work-from-home-syndrome")({
  head: () => ({
    meta: [
      { title: "Work from Home Syndrome | Complete Care" },
      { name: "description", content: "Work from Home Syndrome — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Work from Home Syndrome | Complete Care" },
      { property: "og:description", content: "Work from Home Syndrome — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Solutions-for-Work-From-Home.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Solutions-for-Work-From-Home.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
