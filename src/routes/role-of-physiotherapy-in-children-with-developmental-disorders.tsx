import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/role-of-physiotherapy-in-children-with-developmental-disorders";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "role-of-physiotherapy-in-children-with-developmental-disorders")!;

export const Route = createFileRoute("/role-of-physiotherapy-in-children-with-developmental-disorders")({
  head: () => ({
    meta: [
      { title: "Role of Physiotherapy in Children with Developmental Disorders | Complete Care" },
      { name: "description", content: "Role of Physiotherapy in Children with Developmental Disorders — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Role of Physiotherapy in Children with Developmental Disorders | Complete Care" },
      { property: "og:description", content: "Role of Physiotherapy in Children with Developmental Disorders — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Physiotherapy-in-Children.png" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Physiotherapy-in-Children.png" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
