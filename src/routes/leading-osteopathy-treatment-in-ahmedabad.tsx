import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/leading-osteopathy-treatment-in-ahmedabad";

export const Route = createFileRoute("/leading-osteopathy-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Leading Osteopathy Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Osteopathic manual treatment in Ahmedabad for spinal, pelvic and whole-body movement restrictions." },
      { property: "og:title", content: "Leading Osteopathy Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Osteopathic manual treatment in Ahmedabad for spinal, pelvic and whole-body movement restrictions." },
    ],
  }),
  component: () => <ContentTemplate data={page("leading-osteopathy-treatment-in-ahmedabad")} content={content} />,
});
