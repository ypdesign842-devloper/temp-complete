import { createFileRoute } from "@tanstack/react-router";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { page } from "@/data";
import { content } from "@/content/pages/sports-physiotherapist-in-ahmedabad";

export const Route = createFileRoute("/sports-physiotherapist-in-ahmedabad")({
  head: () => ({
    meta: [
      { title: "Sports Physiotherapist in Ahmedabad | Complete Care" },
      { name: "description", content: "Sports injury assessment, rehabilitation and return-to-play programmes in Ahmedabad with kinesio taping, manual therapy and strength conditioning." },
      { property: "og:title", content: "Sports Physiotherapist in Ahmedabad | Complete Care" },
      { property: "og:description", content: "Sports injury assessment, rehabilitation and return-to-play programmes in Ahmedabad with kinesio taping, manual therapy and strength conditioning." },
    ],
  }),
  component: () => <ContentTemplate data={page("sports-physiotherapist-in-ahmedabad")} content={content} />,
});
