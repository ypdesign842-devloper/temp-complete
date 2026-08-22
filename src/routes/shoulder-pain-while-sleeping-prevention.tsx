import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/shoulder-pain-while-sleeping-prevention";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "shoulder-pain-while-sleeping-prevention")!;

export const Route = createFileRoute("/shoulder-pain-while-sleeping-prevention")({
  head: () => ({
    meta: [
      { title: "Shoulder Pain While Sleeping Prevention | Complete Care" },
      { name: "description", content: "Shoulder Pain While Sleeping Prevention — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Shoulder Pain While Sleeping Prevention | Complete Care" },
      { property: "og:description", content: "Shoulder Pain While Sleeping Prevention — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Shoulder-Pain-While-Sleeping.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Shoulder-Pain-While-Sleeping.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
