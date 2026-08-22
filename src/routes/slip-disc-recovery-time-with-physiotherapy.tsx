import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/slip-disc-recovery-time-with-physiotherapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "slip-disc-recovery-time-with-physiotherapy")!;

export const Route = createFileRoute("/slip-disc-recovery-time-with-physiotherapy")({
  head: () => ({
    meta: [
      { title: "Slip Disc Recovery Time with Physiotherapy | Complete Care" },
      { name: "description", content: "Slip Disc Recovery Time with Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Slip Disc Recovery Time with Physiotherapy | Complete Care" },
      { property: "og:description", content: "Slip Disc Recovery Time with Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Slip-Disc-Recovery-Take-with-Physiotherapy.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Slip-Disc-Recovery-Take-with-Physiotherapy.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
