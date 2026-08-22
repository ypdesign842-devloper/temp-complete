import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/diabetic-neuropathy-treatment-doctor-in-ahmedabad";

export const Route = createFileRoute("/diabetic-neuropathy-treatment-doctor-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Diabetic Neuropathy Treatment Doctor in Ahmedabad | Complete Care" },
      { name: "description", content: "Physiotherapy for diabetic peripheral neuropathy in Ahmedabad — balance training, foot care, circulation support and sensory retraining." },
      { property: "og:title", content: "Diabetic Neuropathy Treatment Doctor in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Physiotherapy for diabetic peripheral neuropathy in Ahmedabad — balance training, foot care, circulation support and sensory retraining." },
    ],
  }),
  component: () => <ContentTemplate data={page("diabetic-neuropathy-treatment-doctor-in-ahmedabad")} content={content} />,
});
