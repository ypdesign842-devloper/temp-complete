import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tennis-elbow-treatment-doctor-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/best-doctor-for-tennis-elbow-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
