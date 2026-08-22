import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/osteoporosis-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/osteoporosis-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Osteoporosis Treatment Doctor in Ahmedabad | Complete Care" },
      { name: "description", content: "Safe, supervised bone-loading exercise, posture correction and fall prevention for osteoporosis in Ahmedabad." },
      { property: "og:title", content: "Osteoporosis Treatment Doctor in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Safe, supervised bone-loading exercise, posture correction and fall prevention for osteoporosis in Ahmedabad." },
    ],
  }),
  component: () => <ContentTemplate data={page("osteoporosis-treatment-doctor-in-ahmedabad")} content={content} />,
});
