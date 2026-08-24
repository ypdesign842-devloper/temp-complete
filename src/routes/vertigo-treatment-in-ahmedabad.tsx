import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/vertigo-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/top-vertigo-specialist-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
