"use client";

import Header from "~/components/dashboard/Header";
import StatsCard from "~/components/dashboard/StatsCard";
import { Users, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function TeacherDashboardPage() {
  const { data: user } = api.auth.getCurrentUser.useQuery();
  const classroom = user?.classrooms?.[0];

  return (
    <>
      <Header
        title={`Welcome back, ${user?.name?.split(" ")[0] || "Teacher"}!`}
        description="Here's an overview of your classroom performance"
      />

      {!classroom ? (
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-12 text-center">
          <Users className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            No Classroom Assigned
          </h3>
          <p className="mb-6 text-gray-600">
            You don't have a classroom assigned yet. Please contact the
            administrator.
          </p>
          <Button variant="outline">Contact Admin</Button>
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-4 lg:gap-6">
            <StatsCard
              title="Total Students"
              value={classroom._count?.students || 0}
              subtitle="In your classroom"
              icon={Users}
              variant="default"
            />
            <StatsCard
              title="Results Entered"
              value="0"
              subtitle="This term"
              icon={CheckCircle}
              variant="success"
            />
            <StatsCard
              title="Pending"
              value={classroom._count?.students || 0}
              subtitle="Awaiting entry"
              icon={Clock}
              variant="warning"
            />
            <StatsCard
              title="Class Average"
              value="--"
              subtitle="Overall performance"
              icon={TrendingUp}
              variant="primary"
            />
          </div>

          {/* Quick Actions */}
          <div className="mb-6 rounded-2xl border-2 border-gray-200 bg-white p-6 lg:mb-8 lg:p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900 lg:mb-6 lg:text-2xl">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-4">
              <Link href="/teacher/classroom">
                <div className="hover:border-oxblood-900 hover:bg-oxblood-50 group cursor-pointer rounded-xl border-2 border-gray-200 p-6 transition-all">
                  <Users className="text-oxblood-900 mb-3 h-8 w-8" />
                  <h3 className="mb-1 font-semibold text-gray-900">
                    View Classroom
                  </h3>
                  <p className="text-sm text-gray-600">
                    See all students in {classroom.name}
                  </p>
                </div>
              </Link>

              <div className="hover:border-oxblood-900 hover:bg-oxblood-50 group cursor-pointer rounded-xl border-2 border-gray-200 p-6 transition-all">
                <CheckCircle className="mb-3 h-8 w-8 text-green-600" />
                <h3 className="mb-1 font-semibold text-gray-900">
                  Enter Results
                </h3>
                <p className="text-sm text-gray-600">
                  Start entering student results
                </p>
              </div>

              <Link href="/teacher/performance">
                <div className="hover:border-oxblood-900 hover:bg-oxblood-50 group cursor-pointer rounded-xl border-2 border-gray-200 p-6 transition-all">
                  <TrendingUp className="mb-3 h-8 w-8 text-blue-600" />
                  <h3 className="mb-1 font-semibold text-gray-900">
                    View Analytics
                  </h3>
                  <p className="text-sm text-gray-600">
                    Check class performance trends
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Classroom Info */}
          <div className="from-oxblood-900 to-oxblood-950 rounded-2xl bg-gradient-to-br p-6 text-white lg:p-8">
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <p className="mb-2 text-sm text-white/70">Your Classroom</p>
                <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
                  {classroom.name}{" "}
                  {classroom.section && `- ${classroom.section}`}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm lg:gap-6">
                  <div>
                    <p className="mb-1 text-white/70">Session</p>
                    <p className="font-semibold">{classroom.session}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-white/70">Current Term</p>
                    <p className="font-semibold capitalize">
                      {classroom.currentTerm.toLowerCase()}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-white/70">Students</p>
                    <p className="font-semibold">
                      {classroom._count?.students || 0}
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/teacher/classroom">
                <Button className="text-oxblood-900 w-full bg-white hover:bg-white/90 lg:w-auto">
                  View Details →
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
