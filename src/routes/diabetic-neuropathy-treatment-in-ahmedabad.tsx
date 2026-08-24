import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/diabetic-neuropathy-treatment-in-ahmedabad")({
  beforeLoad: () => {
    throw redirect({ to: "/diabetic-neuropathy-treatment-doctor-in-ahmedabad", statusCode: 301 });
  },
  component: () => null,
});
