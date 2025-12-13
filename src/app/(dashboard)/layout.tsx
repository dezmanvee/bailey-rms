"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "~/server/better-auth/client";
import { Sidebar } from "~/components/dashboard/Sidebar";
import { Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const { data: me } = api.auth.getCurrentUser.useQuery(undefined, {
    enabled: !!session?.user,
  });

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      if (pathname !== "/login") router.replace("/login");
      return;
    }

    const role = me?.role;
    const isAdminRoute = pathname.startsWith("/admin");
    const isTeacherRoute = pathname.startsWith("/teacher");

    if (role === "ADMIN" && isTeacherRoute && pathname !== "/admin") {
      router.replace("/admin");
      return;
    }
    if (role === "TEACHER" && isAdminRoute && pathname !== "/teacher") {
      router.replace("/teacher");
      return;
    }
  }, [me?.role, session, isPending, pathname, router]);

  // Loading state
  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="text-oxblood-900 mx-auto mb-4 h-8 w-8 animate-spin" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!session) {
    return null;
  }

  const role = me?.role;
  console.log(role);

  // Invalid role
  if (!role || (role !== "ADMIN" && role !== "TEACHER")) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="max-w-md rounded-2xl border-2 border-gray-200 bg-white p-8 text-center shadow-xl">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Access Denied
          </h2>
          <p className="mb-6 text-gray-600">
            You don't have permission to access this page.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="bg-gradient-oxblood rounded-xl px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <main className="w-full flex-1 overflow-auto lg:w-auto">
        <div className="p-4 pt-20 lg:p-8 lg:pt-8">{children}</div>
      </main>
    </div>
  );
}
