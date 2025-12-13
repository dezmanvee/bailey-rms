// "use client";

// import { useState, useMemo } from "react";
// import { DashboardLayout } from "~/components/dashboard/DashboardLayout";
// import { Header } from "~/components/dashboard/Header";
// import { AddStudentDialog } from "~/components/admin/AddStudentDialog";
// import { api } from "~/trpc/react";
// import { Loader2, Users, Search } from "lucide-react";
// import { Input } from "~/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "~/components/ui/select";

// export default function StudentsPage() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [classroomFilter, setClassroomFilter] = useState<number | "all">("all");

//   const { data: user } = api.auth.getCurrentUser.useQuery();
//   const { data: students, isLoading } = api.student.list.useQuery({});

//   // Get unique classrooms from students
//   const classrooms = useMemo(() => {
//     if (!students) return [];
//     const uniqueClassrooms = new Map();
//     students.forEach((student) => {
//       if (!uniqueClassrooms.has(student.classroom.id)) {
//         uniqueClassrooms.set(student.classroom.id, student.classroom);
//       }
//     });
//     return Array.from(uniqueClassrooms.values());
//   }, [students]);

//   // Filter students
//   const filteredStudents = useMemo(() => {
//     if (!students) return [];

//     let filtered = students;

//     // Filter by classroom
//     if (classroomFilter !== "all") {
//       filtered = filtered.filter((s) => s.classroom.id === classroomFilter);
//     }

//     // Filter by search query
//     if (searchQuery) {
//       const query = searchQuery.toLowerCase();
//       filtered = filtered.filter(
//         (s) =>
//           s.firstName.toLowerCase().includes(query) ||
//           s.lastName.toLowerCase().includes(query) ||
//           s.otherNames?.toLowerCase().includes(query) ||
//           s.admissionNo.toLowerCase().includes(query),
//       );
//     }

//     return filtered;
//   }, [students, searchQuery, classroomFilter]);

//   return (
//     <DashboardLayout role="ADMIN">
//       <Header
//         title="Student Management"
//         description={`Manage all students • ${students?.length || 0} total`}
//         action={<AddStudentDialog classrooms={classrooms} />}
//       />

//       {/* Search and Filter */}
//       <div className="mb-6 rounded-2xl border-2 border-gray-200 bg-white p-6">
//         <div className="flex flex-col gap-4 md:flex-row">
//           <div className="relative flex-1">
//             <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
//             <Input
//               type="search"
//               placeholder="Search by name or admission number..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="h-12 pl-12"
//             />
//           </div>
//           <Select
//             value={classroomFilter.toString()}
//             onValueChange={(value) =>
//               setClassroomFilter(value === "all" ? "all" : Number(value))
//             }
//           >
//             <SelectTrigger className="h-12 w-full md:w-64">
//               <SelectValue placeholder="All Classrooms" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Classrooms</SelectItem>
//               {classrooms.map((classroom) => (
//                 <SelectItem key={classroom.id} value={classroom.id.toString()}>
//                   {classroom.name}{" "}
//                   {classroom.section && `- ${classroom.section}`}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {/* Students Table */}
//       {isLoading ? (
//         <div className="flex items-center justify-center py-20">
//           <div className="text-center">
//             <Loader2 className="text-oxblood-900 mx-auto mb-4 h-8 w-8 animate-spin" />
//             <p className="text-gray-600">Loading students...</p>
//           </div>
//         </div>
//       ) : filteredStudents.length === 0 ? (
//         <div className="rounded-2xl border-2 border-gray-200 bg-white p-12 text-center">
//           <Users className="mx-auto mb-4 h-16 w-16 text-gray-400" />
//           <h3 className="mb-2 text-xl font-semibold text-gray-900">
//             {students?.length === 0 ? "No students yet" : "No students found"}
//           </h3>
//           <p className="mb-6 text-gray-600">
//             {students?.length === 0
//               ? "Add your first student to get started"
//               : "Try adjusting your search or filter"}
//           </p>
//         </div>
//       ) : (
//         <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="border-b-2 border-gray-200 bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-4 text-left font-semibold text-gray-700">
//                     Admission No
//                   </th>
//                   <th className="px-6 py-4 text-left font-semibold text-gray-700">
//                     Name
//                   </th>
//                   <th className="px-6 py-4 text-left font-semibold text-gray-700">
//                     Gender
//                   </th>
//                   <th className="px-6 py-4 text-left font-semibold text-gray-700">
//                     Classroom
//                   </th>
//                   <th className="px-6 py-4 text-left font-semibold text-gray-700">
//                     Guardian
//                   </th>
//                   <th className="px-6 py-4 text-left font-semibold text-gray-700">
//                     Results
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {filteredStudents.map((student) => (
//                   <tr key={student.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 font-medium text-gray-900">
//                       {student.admissionNo}
//                     </td>
//                     <td className="px-6 py-4">
//                       <div>
//                         <p className="font-medium text-gray-900">
//                           {student.firstName} {student.lastName}
//                         </p>
//                         {student.otherNames && (
//                           <p className="text-sm text-gray-600">
//                             {student.otherNames}
//                           </p>
//                         )}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">
//                       {student.gender}
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="bg-oxblood-50 text-oxblood-900 rounded-full px-3 py-1 text-sm font-medium">
//                         {student.classroom.name}{" "}
//                         {student.classroom.section &&
//                           `- ${student.classroom.section}`}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       {student.guardianName && (
//                         <div className="text-sm">
//                           <p className="text-gray-900">
//                             {student.guardianName}
//                           </p>
//                           <p className="text-gray-600">
//                             {student.guardianPhone}
//                           </p>
//                         </div>
//                       )}
//                     </td>
//                     <td className="px-6 py-4">
//                       <span className="text-sm text-gray-600">
//                         {student._count?.results || 0} results
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// }

"use client";

import { Header } from "~/components/dashboard/Header";
import { StatsCard } from "~/components/dashboard/StatsCard";
import { Users, UserCircle, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";
export default function AdminDashboardPage() {
  return (
    <>
      <Header
        title="Admin Dashboard"
        description="System overview and management"
      />

      {/* Stats Grid */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-4 lg:gap-6">
        <StatsCard
          title="Total Students"
          value="156"
          subtitle="Across all classrooms"
          icon={Users}
          variant="default"
        />
        <StatsCard
          title="Teachers"
          value="12"
          subtitle="Active teachers"
          icon={UserCircle}
          variant="primary"
        />
        <StatsCard
          title="Results Published"
          value="142"
          subtitle="This term"
          icon={FileText}
          variant="success"
        />
        <StatsCard
          title="Overall Average"
          value="72.5%"
          subtitle="School performance"
          icon={TrendingUp}
          variant="default"
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-6 rounded-2xl border-2 border-gray-200 bg-white p-6 lg:mb-8 lg:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 lg:mb-6 lg:text-2xl">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-4">
          <Link href="/admin/teachers">
            <div className="hover:border-oxblood-900 hover:bg-oxblood-50 cursor-pointer rounded-xl border-2 border-gray-200 p-6 transition-all">
              <UserCircle className="text-oxblood-900 mb-3 h-8 w-8" />
              <h3 className="mb-1 font-semibold text-gray-900">
                Manage Teachers
              </h3>
              <p className="text-sm text-gray-600">
                Add, edit, or remove teachers
              </p>
            </div>
          </Link>

          <Link href="/admin/students">
            <div className="hover:border-oxblood-900 hover:bg-oxblood-50 cursor-pointer rounded-xl border-2 border-gray-200 p-6 transition-all">
              <Users className="text-oxblood-900 mb-3 h-8 w-8" />
              <h3 className="mb-1 font-semibold text-gray-900">
                Manage Students
              </h3>
              <p className="text-sm text-gray-600">
                Add, edit, or remove students
              </p>
            </div>
          </Link>

          <Link href="/admin/results">
            <div className="hover:border-oxblood-900 hover:bg-oxblood-50 cursor-pointer rounded-xl border-2 border-gray-200 p-6 transition-all">
              <FileText className="text-oxblood-900 mb-3 h-8 w-8" />
              <h3 className="mb-1 font-semibold text-gray-900">
                View All Results
              </h3>
              <p className="text-sm text-gray-600">
                Review and approve results
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* System Info */}
      <div className="from-oxblood-900 to-oxblood-950 rounded-2xl bg-linear-to-br p-6 text-white lg:p-8">
        <h2 className="mb-4 text-xl font-bold lg:text-2xl">
          System Information
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          <div>
            <p className="mb-1 text-sm text-white/70">Current Session</p>
            <p className="text-lg font-semibold lg:text-xl">2024/2025</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-white/70">Current Term</p>
            <p className="text-lg font-semibold lg:text-xl">First Term</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-white/70">Next Term Begins</p>
            <p className="text-lg font-semibold lg:text-xl">January 20, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
