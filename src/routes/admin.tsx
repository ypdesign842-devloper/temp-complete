import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminWorkspace } from "@/components/admin/AdminWorkspace";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Complete Care Admin CMS Workspace" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUsername, setCurrentUsername] = useState<string>("admin@completecare.in");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check existing session
    const token =
      localStorage.getItem("cc_admin_token") ||
      sessionStorage.getItem("cc_admin_token");
    const user =
      localStorage.getItem("cc_admin_user") ||
      sessionStorage.getItem("cc_admin_user");

    if (token && user) {
      setIsAuthenticated(true);
      setCurrentUsername(user);
    }
    setIsLoading(false);
  }, []);

  function handleLoginSuccess(_token: string, user: string) {
    setIsAuthenticated(true);
    setCurrentUsername(user);
  }

  function handleLogout() {
    localStorage.removeItem("cc_admin_token");
    localStorage.removeItem("cc_admin_user");
    sessionStorage.removeItem("cc_admin_token");
    sessionStorage.removeItem("cc_admin_user");
    setIsAuthenticated(false);
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-3 border-accent border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminWorkspace username={currentUsername} onLogout={handleLogout} />;
}
