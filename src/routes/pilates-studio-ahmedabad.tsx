import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/pilates-studio-ahmedabad";

export const Route = createFileRoute("/pilates-studio-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Pilates Studio in Ahmedabad | Complete Care" },
      { name: "description", content: "Clinical Pilates in Ahmedabad for core control, spinal stability, posture and rehabilitation after back pain." },
      { property: "og:title", content: "Pilates Studio in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Clinical Pilates in Ahmedabad for core control, spinal stability, posture and rehabilitation after back pain." },
    ],
  }),
  component: () => <ContentTemplate data={page("pilates-studio-ahmedabad")} content={content} />,
});
