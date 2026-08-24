import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sports-rehabilitation-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/sports-physiotherapist-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
