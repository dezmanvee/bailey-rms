"use client";

import { useState, useMemo } from "react";
import { StatsCard } from "~/components/dashboard/StatsCard";
import { StudentCard } from "~/components/student/StudentCard";
import { StudentSearch } from "~/components/student/StudentSearch";
import { api } from "~/trpc/react";
import { Users, CheckCircle, Clock, FileText } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ClassroomPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  // Get current user to find their classroom
  const { data: user } = api.auth.getCurrentUser.useQuery();
  const classroom = user?.classrooms?.[0];

  // Get students in the classroom
  const { data: students, isLoading } = api.student.getByClassroom.useQuery(
    { classroomId: classroom?.id || 0 },
    { enabled: !!classroom?.id },
  );

  // Filter students based on search and filter
  const filteredStudents = useMemo(() => {
    if (!students) return [];

    let filtered = students;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (student) =>
          student.firstName.toLowerCase().includes(query) ||
          student.lastName.toLowerCase().includes(query) ||
          student.otherNames?.toLowerCase().includes(query) ||
          student.admissionNo.toLowerCase().includes(query),
      );
    }

    // Apply status filter
    if (filter === "completed") {
      filtered = filtered.filter(
        (student) => student.results && student.results.length > 0,
      );
    } else if (filter === "pending") {
      filtered = filtered.filter(
        (student) => !student.results || student.results.length === 0,
      );
    }

    return filtered;
  }, [students, searchQuery, filter]);

  // Calculate stats
  const totalStudents = students?.length || 0;
  const completedResults =
    students?.filter((s) => s.results && s.results.length > 0).length || 0;
  const pendingResults = totalStudents - completedResults;
  const completionRate =
    totalStudents > 0
      ? ((completedResults / totalStudents) * 100).toFixed(1)
      : "0";

  if (!classroom) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <Users className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            No Classroom Assigned
          </h3>
          <p className="text-gray-600">
            Please contact the administrator to assign you a classroom.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
        <StatsCard
          title="Total Students"
          value={totalStudents}
          subtitle="In this classroom"
          icon={Users}
          variant="default"
        />
        <StatsCard
          title="Results Entered"
          value={completedResults}
          subtitle="Completed"
          icon={CheckCircle}
          variant="success"
        />
        <StatsCard
          title="Pending"
          value={pendingResults}
          subtitle="Awaiting entry"
          icon={Clock}
          variant="warning"
        />
        <div className="from-oxblood-900 to-oxblood-950 rounded-2xl bg-linear-to-br p-6 text-white">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <FileText className="h-6 w-6" />
            </div>
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-white/70">
              Completion Rate
            </p>
            <p className="mb-1 text-4xl font-bold">{completionRate}%</p>
            <p className="text-sm text-white/70">Overall progress</p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <StudentSearch onSearch={setSearchQuery} onFilterChange={setFilter} />

      {/* Student Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-red-900" />
            <p className="text-gray-600">Loading students...</p>
          </div>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-12 text-center">
          <Users className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            {searchQuery || filter !== "all"
              ? "No students found"
              : "No students yet"}
          </h3>
          <p className="mb-6 text-gray-600">
            {searchQuery || filter !== "all"
              ? "Try adjusting your search or filter"
              : "Students will appear here once they are added to your classroom."}
          </p>
          {(searchQuery || filter !== "all") && (
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setFilter("all");
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredStudents.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {totalStudents}
              </span>{" "}
              students
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                classroomId={classroom.id}
              />
            ))}
          </div>
        </>
      )}

      {/* Help Text */}
      {!isLoading && filteredStudents.length > 0 && (
        <div className="mt-8 rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            💡 <strong>Pro Tip:</strong> Click on a student card to enter or
            edit their results. Use the search bar to quickly find students by
            name or admission number.
          </p>
        </div>
      )}
    </>
  );
}
