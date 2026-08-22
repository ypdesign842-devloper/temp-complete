import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/role-of-paraffin-wax-bath-in-hand-and-foot-recovery";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "role-of-paraffin-wax-bath-in-hand-and-foot-recovery")!;

export const Route = createFileRoute("/role-of-paraffin-wax-bath-in-hand-and-foot-recovery")({
  head: () => ({
    meta: [
      { title: "Role of Paraffin Wax Bath in Hand and Foot Recovery | Complete Care" },
      { name: "description", content: "Role of Paraffin Wax Bath in Hand and Foot Recovery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Role of Paraffin Wax Bath in Hand and Foot Recovery | Complete Care" },
      { property: "og:description", content: "Role of Paraffin Wax Bath in Hand and Foot Recovery — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Foot-Recovery.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Foot-Recovery.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
