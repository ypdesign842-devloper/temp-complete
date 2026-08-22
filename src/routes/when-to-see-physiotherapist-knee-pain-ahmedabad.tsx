import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/when-to-see-physiotherapist-knee-pain-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "when-to-see-physiotherapist-knee-pain-ahmedabad")!;

export const Route = createFileRoute("/when-to-see-physiotherapist-knee-pain-ahmedabad")({
  head: () => ({
    meta: [
      { title: "When to See Physiotherapist Knee Pain Ahmedabad | Complete Care" },
      { name: "description", content: "When to See Physiotherapist Knee Pain Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "When to See Physiotherapist Knee Pain Ahmedabad | Complete Care" },
      { property: "og:description", content: "When to See Physiotherapist Knee Pain Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapist-for-Knee-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapist-for-Knee-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
