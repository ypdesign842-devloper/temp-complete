import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/stroke-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/stroke-in-treatment-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
