import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/why-small-shoulder-muscles-are-key-to-pain-free-movement";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "why-small-shoulder-muscles-are-key-to-pain-free-movement")!;

export const Route = createFileRoute("/why-small-shoulder-muscles-are-key-to-pain-free-movement")({
  head: () => ({
    meta: [
      { title: "Why Small Shoulder Muscles are Key to Pain Free Movement | Complete Care" },
      { name: "description", content: "Why Small Shoulder Muscles are Key to Pain Free Movement — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Why Small Shoulder Muscles are Key to Pain Free Movement | Complete Care" },
      { property: "og:description", content: "Why Small Shoulder Muscles are Key to Pain Free Movement — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Why-Small-Shoulder-Muscles-Are-Key-to-Pain-Free-Movement-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Why-Small-Shoulder-Muscles-Are-Key-to-Pain-Free-Movement-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
