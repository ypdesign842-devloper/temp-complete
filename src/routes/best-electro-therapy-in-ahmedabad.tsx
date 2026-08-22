import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-electro-therapy-in-ahmedabad";

export const Route = createFileRoute("/best-electro-therapy-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best Electrotherapy in Ahmedabad | Complete Care Physiotherapy" },
      { name: "description", content: "Full electrotherapy range in Ahmedabad — TENS, IFT, ultrasound, short wave diathermy and electrical muscle stimulation." },
      { property: "og:title", content: "Best Electrotherapy in Ahmedabad | Complete Care Physiotherapy" },
      { property: "og:description", content: "Full electrotherapy range in Ahmedabad — TENS, IFT, ultrasound, short wave diathermy and electrical muscle stimulation." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-electro-therapy-in-ahmedabad")} content={content} />,
});
