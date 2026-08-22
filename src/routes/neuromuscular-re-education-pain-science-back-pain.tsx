import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/neuromuscular-re-education-pain-science-back-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "neuromuscular-re-education-pain-science-back-pain")!;

export const Route = createFileRoute("/neuromuscular-re-education-pain-science-back-pain")({
  head: () => ({
    meta: [
      { title: "Neuromuscular Re Education Pain SCIence Back Pain | Complete Care" },
      { name: "description", content: "Neuromuscular Re Education Pain SCIence Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Neuromuscular Re Education Pain SCIence Back Pain | Complete Care" },
      { property: "og:description", content: "Neuromuscular Re Education Pain SCIence Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Pain-Science-for-Back-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Pain-Science-for-Back-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
