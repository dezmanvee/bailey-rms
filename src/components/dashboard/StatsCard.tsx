"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "primary" | "success" | "warning" | "default";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
  trend,
}: StatsCardProps) {
  const variants = {
    primary: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
    success: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
    warning: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
    default: "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200",
  };

  const iconColors = {
    primary: "bg-red-900 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-orange-600 text-white",
    default: "bg-gray-700 text-white",
  };

  const valueColors = {
    primary: "text-red-900",
    success: "text-green-900",
    warning: "text-orange-900",
    default: "text-gray-900",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border-2 p-6 transition-all hover:shadow-lg",
        variants[variant],
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl shadow-md",
            iconColors[variant],
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        {trend && (
          <div
            className={cn(
              "rounded-full px-2 py-1 text-xs font-medium",
              trend.isPositive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700",
            )}
          >
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
          </div>
        )}
      </div>

      <div>
        <p className="mb-1 text-sm font-medium text-gray-600">{title}</p>
        <p className={cn("mb-1 text-4xl font-bold", valueColors[variant])}>
          {value}
        </p>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
    </div>
  );
}
export default StatsCard;
