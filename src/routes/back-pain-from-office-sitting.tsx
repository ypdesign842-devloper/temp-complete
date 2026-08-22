import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/back-pain-from-office-sitting";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "back-pain-from-office-sitting")!;

export const Route = createFileRoute("/back-pain-from-office-sitting")({
  head: () => ({
    meta: [
      { title: "Back Pain from Office Sitting | Complete Care" },
      { name: "description", content: "Back Pain from Office Sitting — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Back Pain from Office Sitting | Complete Care" },
      { property: "og:description", content: "Back Pain from Office Sitting — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Back-Pain-from-Sitting-Too-Much.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Back-Pain-from-Sitting-Too-Much.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
