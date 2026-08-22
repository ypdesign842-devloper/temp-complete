import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-electrical-stimulation-therapy-in-ahmedabad";

export const Route = createFileRoute("/best-electrical-stimulation-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Electrical Stimulation Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "Neuromuscular electrical stimulation in Ahmedabad for weak, inhibited or denervated muscles after injury, surgery or neurological conditions." },
      { property: "og:title", content: "Best Electrical Stimulation Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Neuromuscular electrical stimulation in Ahmedabad for weak, inhibited or denervated muscles after injury, surgery or neurological conditions." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-electrical-stimulation-therapy-in-ahmedabad")} content={content} />,
});
