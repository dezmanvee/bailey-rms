"use client";

import { Sidebar } from "./Sidebar";
import { useSession } from "~/server/better-auth/client";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "ADMIN" | "TEACHER";
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const { data: me } = api.auth.getCurrentUser.useQuery(undefined, {
    enabled: !!session,
  });

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Loader2 className="text-oxblood-900 mx-auto mb-4 h-8 w-8 animate-spin" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  // Check if user has correct role
  if (me && me.role !== role) {
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
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
