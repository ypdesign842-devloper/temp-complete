import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/best-ift-treatment-center-in-ahmedabad";

export const Route = createFileRoute("/best-ift-treatment-center-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Best IFT Treatment Center in Ahmedabad | Complete Care" },
      { name: "description", content: "Interferential therapy (IFT) in Ahmedabad for deep-seated pain, swelling and muscle spasm." },
      { property: "og:title", content: "Best IFT Treatment Center in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Interferential therapy (IFT) in Ahmedabad for deep-seated pain, swelling and muscle spasm." },
    ],
  }),
  component: () => <ContentTemplate data={page("best-ift-treatment-center-in-ahmedabad")} content={content} />,
});
