import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/benefits-of-paraffin-wax-treatment-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "benefits-of-paraffin-wax-treatment-ahmedabad")!;

export const Route = createFileRoute("/benefits-of-paraffin-wax-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Benefits of Paraffin Wax Treatment Ahmedabad | Complete Care" },
      { name: "description", content: "Benefits of Paraffin Wax Treatment Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Benefits of Paraffin Wax Treatment Ahmedabad | Complete Care" },
      { property: "og:description", content: "Benefits of Paraffin Wax Treatment Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Complete-Care-Blog-Images.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Complete-Care-Blog-Images.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
