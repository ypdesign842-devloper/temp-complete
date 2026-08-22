import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/best-physiotherapy-techniques-for-senior-back-pain";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "best-physiotherapy-techniques-for-senior-back-pain")!;

export const Route = createFileRoute("/best-physiotherapy-techniques-for-senior-back-pain")({
  head: () => ({
    meta: [
      { title: "Best Physiotherapy Techniques for Senior Back Pain | Complete Care" },
      { name: "description", content: "Best Physiotherapy Techniques for Senior Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Best Physiotherapy Techniques for Senior Back Pain | Complete Care" },
      { property: "og:description", content: "Best Physiotherapy Techniques for Senior Back Pain — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Managing-Age-Related-Back-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Managing-Age-Related-Back-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
