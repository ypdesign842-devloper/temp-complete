import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/why-ankle-pain-returns-and-how-physiotherapy-fixes-it";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "why-ankle-pain-returns-and-how-physiotherapy-fixes-it")!;

export const Route = createFileRoute("/why-ankle-pain-returns-and-how-physiotherapy-fixes-it")({
  head: () => ({
    meta: [
      { title: "Why Ankle Pain Returns and how Physiotherapy Fixes it | Complete Care" },
      { name: "description", content: "Why Ankle Pain Returns and how Physiotherapy Fixes it — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Why Ankle Pain Returns and how Physiotherapy Fixes it | Complete Care" },
      { property: "og:description", content: "Why Ankle Pain Returns and how Physiotherapy Fixes it — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Ankle-Pain-Returns.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Ankle-Pain-Returns.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
