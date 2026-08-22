import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/do-you-really-need-knee-surgery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "do-you-really-need-knee-surgery")!;

export const Route = createFileRoute("/do-you-really-need-knee-surgery")({
  head: () => ({
    meta: [
      { title: "Do you really need Knee Surgery | Complete Care" },
      { name: "description", content: "Do you really need Knee Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Do you really need Knee Surgery | Complete Care" },
      { property: "og:description", content: "Do you really need Knee Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Knee-Surgery.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Knee-Surgery.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
