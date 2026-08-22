import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/frozen-shoulder-physio-stages-treatment";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "frozen-shoulder-physio-stages-treatment")!;

export const Route = createFileRoute("/frozen-shoulder-physio-stages-treatment")({
  head: () => ({
    meta: [
      { title: "Frozen Shoulder Physio Stages Treatment | Complete Care" },
      { name: "description", content: "Frozen Shoulder Physio Stages Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Frozen Shoulder Physio Stages Treatment | Complete Care" },
      { property: "og:description", content: "Frozen Shoulder Physio Stages Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Frozen-Shoulder-Physio.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Frozen-Shoulder-Physio.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
