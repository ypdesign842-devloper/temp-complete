import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/neuromuscular-re-education-for-neck-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "neuromuscular-re-education-for-neck-pain")!;

export const Route = createFileRoute("/neuromuscular-re-education-for-neck-pain")({
  head: () => ({
    meta: [
      { title: "Neuromuscular Re Education for Neck Pain | Complete Care" },
      { name: "description", content: "Neuromuscular Re Education for Neck Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Neuromuscular Re Education for Neck Pain | Complete Care" },
      { property: "og:description", content: "Neuromuscular Re Education for Neck Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-for-Neck-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-for-Neck-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
