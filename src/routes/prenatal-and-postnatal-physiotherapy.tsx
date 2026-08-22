import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/prenatal-and-postnatal-physiotherapy";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "prenatal-and-postnatal-physiotherapy")!;

export const Route = createFileRoute("/prenatal-and-postnatal-physiotherapy")({
  head: () => ({
    meta: [
      { title: "Prenatal and Postnatal Physiotherapy | Complete Care" },
      { name: "description", content: "Prenatal and Postnatal Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Prenatal and Postnatal Physiotherapy | Complete Care" },
      { property: "og:description", content: "Prenatal and Postnatal Physiotherapy — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/About-Prenatal-and-Postnatal-Physiotherapy.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/About-Prenatal-and-Postnatal-Physiotherapy.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
