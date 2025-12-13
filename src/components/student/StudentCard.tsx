"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Download, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { formatPosition } from "~/lib/utils/formatters";

interface StudentCardProps {
  student: {
    id: number;
    admissionNo: string;
    firstName: string;
    lastName: string;
    otherNames?: string | null;
    gender: string;
    image?: string | null;
    results?: Array<{
      id: number;
      averageScore: number;
      classPosition: number | null;
    }>;
  };
  classroomId: number;
}

export function StudentCard({ student, classroomId }: StudentCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const fullName =
    `${student.firstName} ${student.lastName} ${student.otherNames || ""}`.trim();
  const initials = `${student.firstName[0]}${student.lastName[0]}`;
  const latestResult = student.results?.[0];
  const hasResult = !!latestResult;

  const avatarColors = [
    "bg-red-900",
    "bg-purple-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-orange-600",
  ];

  const avatarColor = avatarColors[student.id % avatarColors.length];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "rounded-2xl border-2 border-gray-100 bg-white transition-all duration-300",
        isHovered && "-translate-y-1 border-red-200 shadow-xl",
      )}
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-start gap-4">
          {/* Avatar */}
          <div
            className={cn(
              "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-md",
              avatarColor,
            )}
          >
            {student.image ? (
              <img
                src={student.image}
                alt={fullName}
                className="h-full w-full rounded-2xl object-cover"
              />
            ) : (
              initials
            )}
          </div>

          {/* Student Info */}
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 truncate text-lg font-bold text-gray-900">
              {fullName}
            </h3>
            <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
              <span>{student.admissionNo}</span>
              <span>•</span>
              <span>{student.gender}</span>
            </div>
            <Badge
              variant={hasResult ? "default" : "secondary"}
              className={cn(
                hasResult
                  ? "border-green-200 bg-green-100 text-green-700"
                  : "border-orange-200 bg-orange-100 text-orange-700",
              )}
            >
              {hasResult ? "✓ Result Complete" : "⏳ Pending Entry"}
            </Badge>
          </div>
        </div>

        {/* Performance Summary (if result exists) */}
        {hasResult && latestResult && (
          <div className="mb-4 rounded-xl border-2 border-red-100 bg-linear-to-r from-red-50 to-purple-50 p-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="mb-1 text-xs text-gray-600">Average</p>
                <p className="text-2xl font-bold text-red-900">
                  {latestResult.averageScore.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs text-gray-600">Position</p>
                <p className="text-2xl font-bold text-green-700">
                  {latestResult.classPosition
                    ? formatPosition(latestResult.classPosition)
                    : "--"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {hasResult ? (
            <>
              <Link href={`/teacher/result/${student.id}`} className="flex-1">
                <Button className="hover:bg-oxblood-950 w-full bg-red-900 text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  View/Edit
                </Button>
              </Link>
              <Button
                variant="outline"
                size="icon"
                className="border-oxblood-900 hover:bg-oxblood-50 border-2 text-red-900"
              >
                <Download className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Link href={`/teacher/result/${student.id}`} className="flex-1">
              <Button className="bg-gradient-oxblood shadow-oxblood w-full text-white hover:opacity-90">
                <FileText className="mr-2 h-4 w-4" />
                Enter Result
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Hover Indicator */}
      {isHovered && <div className="bg-gradient-oxblood h-1.5 rounded-b-2xl" />}
    </div>
  );
}
