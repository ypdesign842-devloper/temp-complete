import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/sciatica-recovery-take-with-physiotherapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "sciatica-recovery-take-with-physiotherapy")!;

export const Route = createFileRoute("/sciatica-recovery-take-with-physiotherapy")({
  head: () => ({
    meta: [
      { title: "SCIatica Recovery Take with Physiotherapy | Complete Care" },
      { name: "description", content: "SCIatica Recovery Take with Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "SCIatica Recovery Take with Physiotherapy | Complete Care" },
      { property: "og:description", content: "SCIatica Recovery Take with Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Sciatica-Recovery.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Sciatica-Recovery.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
