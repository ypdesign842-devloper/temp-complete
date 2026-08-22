import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/top-health-benefits-of-pemf-therapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "top-health-benefits-of-pemf-therapy")!;

export const Route = createFileRoute("/top-health-benefits-of-pemf-therapy")({
  head: () => ({
    meta: [
      { title: "Top Health Benefits of PEMF Therapy | Complete Care" },
      { name: "description", content: "Top Health Benefits of PEMF Therapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Top Health Benefits of PEMF Therapy | Complete Care" },
      { property: "og:description", content: "Top Health Benefits of PEMF Therapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Top-5-Health-Benefits-of-PEMF-Therapy-Who-Should-Consider-It-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Top-5-Health-Benefits-of-PEMF-Therapy-Who-Should-Consider-It-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
