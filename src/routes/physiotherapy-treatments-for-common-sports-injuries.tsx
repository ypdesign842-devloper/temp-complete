import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/physiotherapy-treatments-for-common-sports-injuries";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "physiotherapy-treatments-for-common-sports-injuries")!;

export const Route = createFileRoute("/physiotherapy-treatments-for-common-sports-injuries")({
  head: () => ({
    meta: [
      { title: "Physiotherapy Treatments for Common Sports Injuries | Complete Care" },
      { name: "description", content: "Physiotherapy Treatments for Common Sports Injuries — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Physiotherapy Treatments for Common Sports Injuries | Complete Care" },
      { property: "og:description", content: "Physiotherapy Treatments for Common Sports Injuries — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Treatments-for-Common-Sports-Injuries.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-Treatments-for-Common-Sports-Injuries.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
