import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-for-multiple-sclerosis-fatigue";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-for-multiple-sclerosis-fatigue")!;

export const Route = createFileRoute("/physiotherapy-for-multiple-sclerosis-fatigue")({
  head: () => ({
    meta: [
      { title: "Physiotherapy for Multiple Sclerosis Fatigue | Complete Care" },
      { name: "description", content: "Physiotherapy for Multiple Sclerosis Fatigue — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy for Multiple Sclerosis Fatigue | Complete Care" },
      { property: "og:description", content: "Physiotherapy for Multiple Sclerosis Fatigue — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Manage-Fatigue-in-Multiple-Sclerosis.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Manage-Fatigue-in-Multiple-Sclerosis.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
