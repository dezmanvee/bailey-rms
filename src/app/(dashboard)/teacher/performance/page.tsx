"use client";

import { api } from "~/trpc/react";
import { Loader2, TrendingUp, Award, AlertCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const GRADE_COLORS = {
  A: "#16A34A", // Green
  B: "#3B82F6", // Blue
  C: "#F59E0B", // Orange
  D: "#EF4444", // Red
  E: "#DC2626", // Dark Red
  F: "#991B1B", // Darker Red
};

export default function PerformancePage() {
  const { data: user } = api.auth.getCurrentUser.useQuery();
  const classroom = user?.classrooms?.[0];

  const { data: analytics, isLoading } = api.result.getClassAnalytics.useQuery(
    {
      classroomId: classroom?.id || 0,
      term: "FIRST",
      session: "2024/2025",
    },
    { enabled: !!classroom?.id },
  );

  if (!classroom) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <AlertCircle className="mx-auto mb-4 h-16 w-16 text-gray-400" />
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

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <Loader2 className="text-oxblood-900 mx-auto mb-4 h-8 w-8 animate-spin" />
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!analytics || analytics.totalStudents === 0) {
    return (
      <div className="rounded-2xl border-2 border-gray-200 bg-white p-12 text-center">
        <TrendingUp className="mx-auto mb-4 h-16 w-16 text-gray-400" />
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          No Data Yet
        </h3>
        <p className="text-gray-600">
          Analytics will appear once results are entered.
        </p>
      </div>
    );
  }

  // Prepare data for charts
  const gradeDistributionData = Object.entries(analytics.gradeDistribution).map(
    ([grade, count]) => ({
      grade,
      count: count as number,
      percentage: (((count as number) / analytics.totalStudents) * 100).toFixed(
        1,
      ),
    }),
  );

  const subjectAnalysisData = analytics.subjectAnalysis.map((subject) => ({
    name:
      subject.subject.length > 15
        ? subject.subject.substring(0, 15) + "..."
        : subject.subject,
    average: subject.average,
    passRate: subject.passRate,
  }));

  return (
    <>
      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="from-oxblood-50 to-oxblood-100 border-oxblood-200 rounded-2xl border-2 bg-gradient-to-br p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="bg-oxblood-900 flex h-12 w-12 items-center justify-center rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="mb-1 text-sm text-gray-600">Class Average</p>
          <p className="text-oxblood-900 text-4xl font-bold">
            {analytics.classAverage.toFixed(1)}%
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {analytics.totalStudents} students
          </p>
        </div>

        <div className="rounded-2xl border-2 border-green-200 bg-linear-to-br from-green-50 to-green-100 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="mb-1 text-sm text-gray-600">Top Performer</p>
          {analytics.topPerformers[0] && (
            <>
              <p className="text-lg font-bold text-green-900">
                {analytics.topPerformers[0].student.firstName}{" "}
                {analytics.topPerformers[0].student.lastName}
              </p>
              <p className="text-2xl font-bold text-green-900">
                {analytics.topPerformers[0].averageScore.toFixed(1)}%
              </p>
            </>
          )}
        </div>

        <div className="rounded-2xl border-2 border-blue-200 bg-linear-to-br from-blue-50 to-blue-100 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="mb-1 text-sm text-gray-600">Pass Rate</p>
          <p className="text-4xl font-bold text-blue-900">
            {(
              (gradeDistributionData
                .filter((g) => ["A", "B", "C"].includes(g.grade))
                .reduce((sum, g) => sum + g.count, 0) /
                analytics.totalStudents) *
              100
            ).toFixed(1)}
            %
          </p>
          <p className="mt-2 text-sm text-gray-600">50% and above</p>
        </div>
      </div>

      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        {/* Grade Distribution */}
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            Grade Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={gradeDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) =>
                  `${name}: ${((value / analytics.totalStudents) * 100).toFixed(1)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
              >
                {gradeDistributionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      GRADE_COLORS[entry.grade as keyof typeof GRADE_COLORS]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {gradeDistributionData.map((item) => (
              <div
                key={item.grade}
                className="rounded-lg bg-gray-50 p-3 text-center"
              >
                <p
                  className="text-2xl font-bold"
                  style={{
                    color:
                      GRADE_COLORS[item.grade as keyof typeof GRADE_COLORS],
                  }}
                >
                  {item.count}
                </p>
                <p className="text-sm text-gray-600">Grade {item.grade}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Performance */}
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            Subject Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectAnalysisData.slice(0, 8)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={100}
                fontSize={10}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="average" fill="#800020" name="Average Score" />
              <Bar dataKey="passRate" fill="#16A34A" name="Pass Rate %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performers */}
      <div className="mb-8 rounded-2xl border-2 border-gray-200 bg-white p-6">
        <h3 className="mb-6 text-xl font-bold text-gray-900">
          Top 5 Performers
        </h3>
        <div className="space-y-4">
          {analytics.topPerformers.map((performer, index) => (
            <div
              key={performer.student.id}
              className="hover:bg-oxblood-50 flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-oxblood flex h-12 w-12 items-center justify-center rounded-full font-bold text-white">
                  #{index + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {performer.student.firstName} {performer.student.lastName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {performer.student.admissionNo}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-oxblood-900 text-2xl font-bold">
                  {performer.averageScore.toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600">
                  Position: {performer.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Analysis Table */}
      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
        <h3 className="mb-6 text-xl font-bold text-gray-900">
          Detailed Subject Analysis
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Subject
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">
                  Average
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">
                  Highest
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">
                  Lowest
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">
                  Pass Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {analytics.subjectAnalysis.map((subject) => (
                <tr
                  key={subject.subject}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {subject.subject}
                  </td>
                  <td className="text-oxblood-900 px-4 py-3 text-center font-semibold">
                    {subject.average.toFixed(1)}%
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-green-700">
                    {subject.highest.toFixed(1)}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-red-700">
                    {subject.lowest.toFixed(1)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        subject.passRate >= 70
                          ? "bg-green-100 text-green-700"
                          : subject.passRate >= 50
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {subject.passRate.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
