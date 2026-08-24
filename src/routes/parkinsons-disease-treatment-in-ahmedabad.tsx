import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/parkinsons-disease-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/parkinson-disease-treatment-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
