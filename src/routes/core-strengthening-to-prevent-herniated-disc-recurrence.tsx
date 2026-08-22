import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/core-strengthening-to-prevent-herniated-disc-recurrence";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "core-strengthening-to-prevent-herniated-disc-recurrence")!;

export const Route = createFileRoute("/core-strengthening-to-prevent-herniated-disc-recurrence")({
  head: () => ({
    meta: [
      { title: "Core Strengthening to Prevent Herniated Disc Recurrence | Complete Care" },
      { name: "description", content: "Core Strengthening to Prevent Herniated Disc Recurrence — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Core Strengthening to Prevent Herniated Disc Recurrence | Complete Care" },
      { property: "og:description", content: "Core Strengthening to Prevent Herniated Disc Recurrence — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Herniated-Disc-Recurrence.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Herniated-Disc-Recurrence.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
