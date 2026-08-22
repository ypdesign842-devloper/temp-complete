import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-for-neck-pain-relief-techniques";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-for-neck-pain-relief-techniques")!;

export const Route = createFileRoute("/physiotherapy-for-neck-pain-relief-techniques")({
  head: () => ({
    meta: [
      { title: "Physiotherapy for Neck Pain Relief Techniques | Complete Care" },
      { name: "description", content: "Physiotherapy for Neck Pain Relief Techniques — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy for Neck Pain Relief Techniques | Complete Care" },
      { property: "og:description", content: "Physiotherapy for Neck Pain Relief Techniques — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Relieves-Neck-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Relieves-Neck-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
