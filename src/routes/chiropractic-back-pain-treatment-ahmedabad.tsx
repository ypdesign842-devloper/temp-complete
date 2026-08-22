import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/chiropractic-back-pain-treatment-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "chiropractic-back-pain-treatment-ahmedabad")!;

export const Route = createFileRoute("/chiropractic-back-pain-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Chiropractic Back Pain Treatment Ahmedabad | Complete Care" },
      { name: "description", content: "Chiropractic Back Pain Treatment Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Chiropractic Back Pain Treatment Ahmedabad | Complete Care" },
      { property: "og:description", content: "Chiropractic Back Pain Treatment Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Chiropractic-Care-for-Back-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Chiropractic-Care-for-Back-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
