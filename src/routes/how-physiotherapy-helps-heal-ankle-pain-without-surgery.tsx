import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-physiotherapy-helps-heal-ankle-pain-without-surgery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-physiotherapy-helps-heal-ankle-pain-without-surgery")!;

export const Route = createFileRoute("/how-physiotherapy-helps-heal-ankle-pain-without-surgery")({
  head: () => ({
    meta: [
      { title: "How Physiotherapy Helps Heal Ankle Pain without Surgery | Complete Care" },
      { name: "description", content: "How Physiotherapy Helps Heal Ankle Pain without Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Physiotherapy Helps Heal Ankle Pain without Surgery | Complete Care" },
      { property: "og:description", content: "How Physiotherapy Helps Heal Ankle Pain without Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Heal-Ankle-Pain-Without-Surgery-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Helps-Heal-Ankle-Pain-Without-Surgery-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
