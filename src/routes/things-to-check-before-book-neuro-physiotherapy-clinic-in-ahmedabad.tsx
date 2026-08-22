import { createFileRoute } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/templates/ArticleTemplate";
import { content } from "@/content/posts/things-to-check-before-book-neuro-physiotherapy-clinic-in-ahmedabad";
import { posts } from "@/data/posts";

const post = posts.find((p) => p.slug === "things-to-check-before-book-neuro-physiotherapy-clinic-in-ahmedabad")!;

export const Route = createFileRoute("/things-to-check-before-book-neuro-physiotherapy-clinic-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Things to Check before Book Neuro Physiotherapy Clinic in Ahmedabad | Complete Care" },
      { name: "description", content: "Things to Check before Book Neuro Physiotherapy Clinic in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:title", content: "Things to Check before Book Neuro Physiotherapy Clinic in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Things to Check before Book Neuro Physiotherapy Clinic in Ahmedabad — physiotherapy guidance from the licensed clinical team at Complete Care, Ahmedabad." },
      { property: "og:image", content: "https://completecare.in/assets/blogs/Top-7-Things-to-Check-Before-Booking-a-Neuro-Physiotherapy-Clinic-in-Ahmedabad-Banner.webp" },
      { name: "twitter:image", content: "https://completecare.in/assets/blogs/Top-7-Things-to-Check-Before-Booking-a-Neuro-Physiotherapy-Clinic-in-Ahmedabad-Banner.webp" },
    ],
  }),
  component: () => <ArticleTemplate post={post} content={content} />,
});
