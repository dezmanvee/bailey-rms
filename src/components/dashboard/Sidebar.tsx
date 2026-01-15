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
  Menu,
  X,
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
        className="bg-crimson fixed top-4 left-4 z-50 rounded-xl p-3 text-white shadow-lg lg:hidden"
        aria-label="Toggle menu"
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
          "bg-crimson sticky top-0 z-40 flex h-screen flex-col text-white transition-all duration-300",
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
                  <h2 className="text-sm font-bold">Hampton Preparatory</h2>
                  <p className="text-xs text-white/70">School RMS</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden rounded-lg p-2 transition-colors hover:bg-white/10 lg:block"
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
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
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
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href + "/"));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all",
                  isActive
                    ? "text-crimson bg-accent shadow-sm"
                    : "text-white/90 hover:bg-white/10 hover:text-white",
                  collapsed && "justify-center overflow-x-hidden px-0",
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 shrink-0",
                    isActive ? "text-crimson" : "text-white/90",
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
            <LogOut className="h-5 w-5 shrink-0" />
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

    //second
    // <>
    //   {/* Mobile Menu Button */}
    //   <button
    //     onClick={() => setMobileOpen(!mobileOpen)}
    //     className="bg-crimson hover:bg-crimson-dark fixed top-4 left-4 z-50 rounded-lg p-3 text-white shadow-lg transition-all lg:hidden"
    //     aria-label="Toggle menu"
    //   >
    //     {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //   </button>

    //   {/* Mobile Overlay */}
    //   {mobileOpen && (
    //     <div
    //       className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
    //       onClick={() => setMobileOpen(false)}
    //     />
    //   )}

    //   {/* Sidebar */}
    //   <aside
    //     className={cn(
    //       "sticky top-0 z-40 flex h-screen flex-col border-r border-neutral-200 bg-white shadow-sm transition-all duration-300",
    //       // Desktop
    //       "hidden lg:flex",
    //       collapsed ? "lg:w-20" : "lg:w-72",
    //       // Mobile
    //       mobileOpen && "fixed inset-y-0 left-0 flex w-72",
    //     )}
    //   >
    //     {/* Header */}
    //     <div className="flex items-center justify-between border-b border-neutral-200 p-6">
    //       {!collapsed && (
    //         <div className="flex items-center gap-3">
    //           <div className="from-crimson to-crimson-dark flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br shadow-sm">
    //             <GraduationCap className="h-7 w-7 text-white" />
    //           </div>
    //           <div>
    //             <h2 className="text-base font-bold text-neutral-900">
    //               Bailey's Bowen
    //             </h2>
    //             <p className="text-xs text-neutral-500">Result Management</p>
    //           </div>
    //         </div>
    //       )}
    //       {collapsed && (
    //         <div className="from-crimson to-crimson-dark flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br shadow-sm">
    //           <GraduationCap className="h-7 w-7 text-white" />
    //         </div>
    //       )}
    //       <button
    //         onClick={() => setCollapsed(!collapsed)}
    //         className="hidden rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 lg:block"
    //         aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
    //       >
    //         {collapsed ? (
    //           <ChevronRight className="h-5 w-5" />
    //         ) : (
    //           <ChevronLeft className="h-5 w-5" />
    //         )}
    //       </button>
    //     </div>

    //     {/* User Info */}
    //     <div className="border-b border-neutral-200 p-6">
    //       <div className="flex items-center gap-3">
    //         <div className="from-crimson/20 to-crimson-dark/20 text-crimson ring-crimson/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br ring-2">
    //           <span className="text-lg font-bold">
    //             {userName.charAt(0).toUpperCase()}
    //           </span>
    //         </div>
    //         {!collapsed && (
    //           <div className="min-w-0 flex-1">
    //             <p className="truncate text-sm font-semibold text-neutral-900">
    //               {userName}
    //             </p>
    //             <p className="truncate text-xs text-neutral-500 capitalize">
    //               {role.toLowerCase()}
    //             </p>
    //           </div>
    //         )}
    //       </div>
    //     </div>

    //     {/* Navigation */}
    //     <nav className="flex-1 space-y-1 overflow-y-auto p-4">
    //       {navItems.map((item) => {
    //         const Icon = item.icon;
    //         const isActive =
    //           pathname === item.href || pathname.startsWith(item.href + "/");

    //         return (
    //           <Link
    //             key={item.href}
    //             href={item.href}
    //             onClick={() => setMobileOpen(false)}
    //             className={cn(
    //               "group relative flex items-center gap-3 rounded-lg px-4 py-3 transition-all",
    //               isActive
    //                 ? "from-crimson to-crimson-dark bg-linear-to-r text-white shadow-md"
    //                 : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
    //             )}
    //           >
    //             <Icon className="h-5 w-5 shrink-0" />
    //             {!collapsed && (
    //               <span className="text-sm font-medium">{item.title}</span>
    //             )}
    //             {/* Tooltip for collapsed state - Fixed positioning */}
    //             {collapsed && (
    //               <div className="pointer-events-none absolute top-1/2 left-full z-100 ml-4 -translate-y-1/2 rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
    //                 {item.title}
    //                 <div className="absolute top-1/2 right-full -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
    //               </div>
    //             )}
    //           </Link>
    //         );
    //       })}
    //     </nav>

    //     {/* Sign Out */}
    //     <div className="border-t border-neutral-200 p-4">
    //       <button
    //         onClick={handleSignOut}
    //         className="group hover:text-crimson relative flex w-full items-center gap-3 rounded-lg px-4 py-3 text-neutral-600 transition-all hover:bg-red-50"
    //       >
    //         <LogOut className="h-5 w-5 shrink-0" />
    //         {!collapsed && (
    //           <span className="text-sm font-medium">Sign Out</span>
    //         )}
    //         {/* Tooltip for collapsed state - Fixed positioning */}
    //         {collapsed && (
    //           <div className="pointer-events-none absolute top-1/2 left-full z-100 ml-4 -translate-y-1/2 rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
    //             Sign Out
    //             <div className="absolute top-1/2 right-full -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
    //           </div>
    //         )}
    //       </button>
    //     </div>
    //   </aside>
    // </>

    //Third
    // <>
    //   <button
    //     onClick={() => setMobileOpen(!mobileOpen)}
    //     className="bg-crimson hover:bg-crimson-dark fixed top-4 left-4 z-60 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-all lg:hidden"
    //     aria-label="Toggle menu"
    //   >
    //     {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    //   </button>

    //   {mobileOpen && (
    //     <div
    //       className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
    //       onClick={() => setMobileOpen(false)}
    //     />
    //   )}

    //   <aside
    //     className={cn(
    //       "bg-accent flex h-screen shrink-0 flex-col transition-all duration-300 ease-in-out",
    //       // Desktop styles
    //       "hidden lg:flex",
    //       collapsed ? "w-20 overflow-x-hidden" : "w-72",
    //       // Mobile styles - fixed positioning with proper z-index
    //       mobileOpen &&
    //         "fixed inset-y-0 left-0 z-55 flex w-72 shadow-2xl lg:relative",
    //     )}
    //   >
    //     <div className="flex h-20 items-center justify-between border-b border-neutral-100 px-6">
    //       {!collapsed ? (
    //         <>
    //           <div className="flex items-center gap-3">
    //             <div className="bg-crimson flex h-11 w-11 items-center justify-center rounded-xl shadow-sm">
    //               <GraduationCap className="h-6 w-6 text-white" />
    //             </div>
    //             <div className="flex flex-col">
    //               <span className="text-sm font-bold text-neutral-900">
    //                 Bailey's Bowen
    //               </span>
    //               <span className="text-xs text-neutral-500">RMS</span>
    //             </div>
    //           </div>
    //           <button
    //             onClick={() => setCollapsed(true)}
    //             className="hidden rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-50 hover:text-neutral-900 lg:block"
    //             aria-label="Collapse sidebar"
    //           >
    //             <ChevronRight className="h-5 w-5 rotate-180" />
    //           </button>
    //         </>
    //       ) : (
    //         <button
    //           onClick={() => setCollapsed(false)}
    //           className="mx-auto rounded-lg p-2 text-neutral-400 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
    //           aria-label="Expand sidebar"
    //         >
    //           <ChevronRight className="h-5 w-5" />
    //         </button>
    //       )}
    //     </div>

    //     {!collapsed && (
    //       <div className="border-b border-neutral-100 px-6 py-5">
    //         <div className="flex items-center gap-3">
    //           <div className="from-crimson/20 to-crimson/10 text-crimson ring-crimson/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br ring-2">
    //             <span className="text-base font-bold">
    //               {userName.charAt(0).toUpperCase()}
    //             </span>
    //           </div>
    //           <div className="min-w-0 flex-1">
    //             <p className="truncate text-sm font-semibold text-neutral-900">
    //               {userName}
    //             </p>
    //             <p className="text-xs text-neutral-500 capitalize">
    //               {role.toLowerCase()}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
    //       {navItems.map((item) => {
    //         const Icon = item.icon;
    //         const isActive =
    //           pathname === item.href ||
    //           (item.href !== "/admin" && pathname.startsWith(item.href + "/"));

    //         return (
    //           <Link
    //             key={item.href}
    //             href={item.href}
    //             onClick={() => setMobileOpen(false)}
    //             className={cn(
    //               "group relative flex items-center gap-3 rounded-xl px-4 py-3.5 font-medium transition-all",
    //               isActive
    //                 ? "bg-crimson text-white shadow-sm"
    //                 : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
    //               collapsed && "justify-center px-0",
    //             )}
    //           >
    //             <Icon
    //               className={cn("h-5 w-5 shrink-0", isActive && "text-white")}
    //             />
    //             {!collapsed && <span className="text-sm">{item.title}</span>}

    //             {collapsed && (
    //               <div className="pointer-events-none absolute top-1/2 left-full z-100 ml-6 -translate-y-1/2 rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
    //                 {item.title}
    //                 <div className="absolute top-1/2 right-full -mr-1 -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
    //               </div>
    //             )}
    //           </Link>
    //         );
    //       })}
    //     </nav>

    //     <div className="border-t border-neutral-100 p-3">
    //       <button
    //         onClick={handleSignOut}
    //         className={cn(
    //           "group hover:text-crimson relative flex w-full items-center gap-3 rounded-xl px-4 py-3.5 font-medium text-neutral-600 transition-all hover:bg-red-50",
    //           collapsed && "justify-center px-0",
    //         )}
    //       >
    //         <LogOut className="h-5 w-5 shrink-0" />
    //         {!collapsed && <span className="text-sm">Sign Out</span>}

    //         {/* Tooltip for collapsed state */}
    //         {collapsed && (
    //           <div className="pointer-events-none absolute top-1/2 left-full z-100 ml-6 -translate-y-1/2 rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
    //             Sign Out
    //             <div className="absolute top-1/2 right-full -mr-1 -translate-y-1/2 border-4 border-transparent border-r-neutral-900" />
    //           </div>
    //         )}
    //       </button>
    //     </div>
    //   </aside>
    // </>
  );
}
