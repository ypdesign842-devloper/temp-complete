import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/effective-traction-treatment-in-ahmedabad";

export const Route = createFileRoute("/effective-traction-treatment-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Effective Traction Treatment in Ahmedabad | Complete Care" },
      { name: "description", content: "Cervical and lumbar traction therapy in Ahmedabad for nerve compression, disc pain and spinal stiffness." },
      { property: "og:title", content: "Effective Traction Treatment in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Cervical and lumbar traction therapy in Ahmedabad for nerve compression, disc pain and spinal stiffness." },
    ],
  }),
  component: () => <ContentTemplate data={page("effective-traction-treatment-in-ahmedabad")} content={content} />,
});
