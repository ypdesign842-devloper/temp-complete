import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/jaw-shoulder-neck-pain-physiotherapy-approach";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "jaw-shoulder-neck-pain-physiotherapy-approach")!;

export const Route = createFileRoute("/jaw-shoulder-neck-pain-physiotherapy-approach")({
  head: () => ({
    meta: [
      { title: "Jaw Shoulder Neck Pain Physiotherapy Approach | Complete Care" },
      { name: "description", content: "Jaw Shoulder Neck Pain Physiotherapy Approach — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Jaw Shoulder Neck Pain Physiotherapy Approach | Complete Care" },
      { property: "og:description", content: "Jaw Shoulder Neck Pain Physiotherapy Approach — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Jaw-Shoulder-and-Neck-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Jaw-Shoulder-and-Neck-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
