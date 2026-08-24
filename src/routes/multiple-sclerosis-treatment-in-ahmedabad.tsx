import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/multiple-sclerosis-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/multiple-sclerosis-treatment-doctor-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
