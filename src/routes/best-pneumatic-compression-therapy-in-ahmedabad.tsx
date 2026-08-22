import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-pneumatic-compression-therapy-in-ahmedabad";

export const Route = createFileRoute("/best-pneumatic-compression-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Pneumatic Compression Therapy in Ahmedabad | Complete Care" },
      { name: "description", content: "Intermittent pneumatic compression therapy in Ahmedabad for swelling, lymphoedema and circulation support." },
      { property: "og:title", content: "Best Pneumatic Compression Therapy in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Intermittent pneumatic compression therapy in Ahmedabad for swelling, lymphoedema and circulation support." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-pneumatic-compression-therapy-in-ahmedabad")} content={content} />,
});
