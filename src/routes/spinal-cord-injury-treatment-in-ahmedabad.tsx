import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/spinal-cord-injury-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/spinal-cord-specialist-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
