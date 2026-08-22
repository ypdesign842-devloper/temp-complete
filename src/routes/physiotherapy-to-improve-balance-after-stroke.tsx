import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-to-improve-balance-after-stroke";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-to-improve-balance-after-stroke")!;

export const Route = createFileRoute("/physiotherapy-to-improve-balance-after-stroke")({
  head: () => ({
    meta: [
      { title: "Physiotherapy to Improve Balance after Stroke | Complete Care" },
      { name: "description", content: "Physiotherapy to Improve Balance after Stroke — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy to Improve Balance after Stroke | Complete Care" },
      { property: "og:description", content: "Physiotherapy to Improve Balance after Stroke — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Improve-Balance-After-a-Stroke.jpeg" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Improve-Balance-After-a-Stroke.jpeg" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
