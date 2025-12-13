"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import {
  GraduationCap,
  Users,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  UserCircle,
} from "lucide-react";
import { signOut, useSession } from "~/server/better-auth/client";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  role?: "ADMIN" | "TEACHER";
}

const teacherNavItems: NavItem[] = [
  {
    title: "My Classroom",
    href: "/teacher/classroom",
    icon: Users,
  },
  {
    title: "Performance",
    href: "/teacher/performance",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/teacher/settings",
    icon: Settings,
  },
];

const adminNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    title: "Teachers",
    href: "/admin/teachers",
    icon: UserCircle,
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: Users,
  },
  {
    title: "Results",
    href: "/admin/results",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  role: "ADMIN" | "TEACHER";
}

export function Sidebar({ role }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItems = role === "ADMIN" ? adminNavItems : teacherNavItems;

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/login";
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="bg-gradient-oxblood fixed top-4 left-4 z-50 rounded-xl p-3 text-white shadow-lg lg:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-gradient-oxblood sticky top-0 z-40 flex h-screen flex-col text-white transition-all duration-300",
          // Desktop
          "hidden lg:flex",
          collapsed ? "lg:w-20" : "lg:w-72",
          // Mobile
          mobileOpen && "fixed inset-y-0 left-0 flex w-72",
        )}
      >
        {/* Header */}
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <GraduationCap className="h-6 w-6 text-red-900" />
                </div>
                <div>
                  <h2 className="text-sm font-bold">Bailey's Bowen</h2>
                  <p className="text-xs text-white/70">RMS</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
            >
              {collapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-lg font-bold">
                {session?.user?.name?.charAt(0) || "U"}
              </span>
            </div>
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">
                  {session?.user?.name || "User"}
                </p>
                <p className="text-xs text-white/70 capitalize">
                  {role.toLowerCase()}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all",
                  isActive
                    ? "bg-white text-red-900 shadow-lg"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive ? "text-red-900" : "text-white/90",
                  )}
                />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.title}</span>
                )}
                {collapsed && (
                  <div className="pointer-events-none absolute left-full z-50 ml-2 rounded-lg bg-gray-900 px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 shadow-lg group-hover:opacity-100">
                    {item.title}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div className="border-t border-white/10 p-4">
          <button
            onClick={handleSignOut}
            className="group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/90 transition-all hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium">Sign Out</span>
            )}
            {collapsed && (
              <div className="pointer-events-none absolute left-full z-50 ml-2 rounded-lg bg-gray-900 px-3 py-2 text-sm whitespace-nowrap text-white opacity-0 shadow-lg group-hover:opacity-100">
                Sign Out
              </div>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
