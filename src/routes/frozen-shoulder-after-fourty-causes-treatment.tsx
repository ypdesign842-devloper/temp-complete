import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/frozen-shoulder-after-fourty-causes-treatment";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "frozen-shoulder-after-fourty-causes-treatment")!;

export const Route = createFileRoute("/frozen-shoulder-after-fourty-causes-treatment")({
  head: () => ({
    meta: [
      { title: "Frozen Shoulder after Forty Causes Treatment | Complete Care" },
      { name: "description", content: "Frozen Shoulder after Forty Causes Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Frozen Shoulder after Forty Causes Treatment | Complete Care" },
      { property: "og:description", content: "Frozen Shoulder after Forty Causes Treatment — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Frozen-Shoulder-Pain.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Frozen-Shoulder-Pain.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
