import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/what-to-expect-during-your-first-physiotherapy-session-for-neck-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "what-to-expect-during-your-first-physiotherapy-session-for-neck-pain")!;

export const Route = createFileRoute("/what-to-expect-during-your-first-physiotherapy-session-for-neck-pain")({
  head: () => ({
    meta: [
      { title: "What to Expect during your First Physiotherapy Session for Neck Pain | Complete Care" },
      { name: "description", content: "What to Expect during your First Physiotherapy Session for Neck Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "What to Expect during your First Physiotherapy Session for Neck Pain | Complete Care" },
      { property: "og:description", content: "What to Expect during your First Physiotherapy Session for Neck Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/What-to-Expect-During-Your-First-Physiotherapy-Session-for-Neck-Pain-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/What-to-Expect-During-Your-First-Physiotherapy-Session-for-Neck-Pain-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
