import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/how-physiotherapy-eases-slipped-disc-pain-without-surgery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "how-physiotherapy-eases-slipped-disc-pain-without-surgery")!;

export const Route = createFileRoute("/how-physiotherapy-eases-slipped-disc-pain-without-surgery")({
  head: () => ({
    meta: [
      { title: "How Physiotherapy Eases Slipped Disc Pain without Surgery | Complete Care" },
      { name: "description", content: "How Physiotherapy Eases Slipped Disc Pain without Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "How Physiotherapy Eases Slipped Disc Pain without Surgery | Complete Care" },
      { property: "og:description", content: "How Physiotherapy Eases Slipped Disc Pain without Surgery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Eases-Slipped-Disc-Pain-Without-Surgery-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/How-Physiotherapy-Eases-Slipped-Disc-Pain-Without-Surgery-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
