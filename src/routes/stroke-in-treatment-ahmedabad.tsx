import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/stroke-in-treatment-ahmedabad";

export const Route = createFileRoute("/stroke-in-treatment-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Stroke Treatment & Rehabilitation in Ahmedabad | Complete Care" },
      { name: "description", content: "Post-stroke physiotherapy in Ahmedabad — gait retraining, balance recovery, upper limb function and spasticity management, in clinic or at home." },
      { property: "og:title", content: "Stroke Treatment & Rehabilitation in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Post-stroke physiotherapy in Ahmedabad — gait retraining, balance recovery, upper limb function and spasticity management, in clinic or at home." },
    ],
  }),
  component: () => <ContentTemplate data={page("stroke-in-treatment-ahmedabad")} content={content} />,
});
