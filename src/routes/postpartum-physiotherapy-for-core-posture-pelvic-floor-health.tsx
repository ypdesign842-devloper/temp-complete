import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/postpartum-physiotherapy-for-core-posture-pelvic-floor-health";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "postpartum-physiotherapy-for-core-posture-pelvic-floor-health")!;

export const Route = createFileRoute("/postpartum-physiotherapy-for-core-posture-pelvic-floor-health")({
  head: () => ({
    meta: [
      { title: "Postpartum Physiotherapy for Core Posture Pelvic Floor Health | Complete Care" },
      { name: "description", content: "Postpartum Physiotherapy for Core Posture Pelvic Floor Health — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Postpartum Physiotherapy for Core Posture Pelvic Floor Health | Complete Care" },
      { property: "og:description", content: "Postpartum Physiotherapy for Core Posture Pelvic Floor Health — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Postpartum-Physiotherapy.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Postpartum-Physiotherapy.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
