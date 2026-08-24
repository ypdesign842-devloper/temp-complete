import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/muscular-dystrophy-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/muscular-dystrophy-doctor-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
