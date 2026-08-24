import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/rheumatoid-arthritis-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/top-rheumatoid-arthritis-specialist-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
