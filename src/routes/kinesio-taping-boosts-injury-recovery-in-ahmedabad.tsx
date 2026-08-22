import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/kinesio-taping-boosts-injury-recovery-in-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "kinesio-taping-boosts-injury-recovery-in-ahmedabad")!;

export const Route = createFileRoute("/kinesio-taping-boosts-injury-recovery-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Kinesio Taping Boosts Injury Recovery in Ahmedabad | Complete Care" },
      { name: "description", content: "Kinesio Taping Boosts Injury Recovery in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Kinesio Taping Boosts Injury Recovery in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Kinesio Taping Boosts Injury Recovery in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Kinesio-Taping-Boosts-Injury-Recovery-in-Ahmedabad-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Kinesio-Taping-Boosts-Injury-Recovery-in-Ahmedabad-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
