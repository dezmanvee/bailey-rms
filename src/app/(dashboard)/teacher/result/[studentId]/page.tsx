"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { SubjectScoreInput } from "~/components/result/SubjectScoreInput";
import { AttendanceSection } from "~/components/result/AttendanceSection";
import { PsychomotorSection } from "~/components/result/PsychomotorSection";
import { AffectiveDomainSection } from "~/components/result/AffectiveDomainSection";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";
import { Loader2, Save, FileText, ArrowLeft, AlertCircle } from "lucide-react";
import { useToast } from "~/hooks/use-toast";
import { formatStudentName } from "~/lib/utils/formatters";
import { generateReportCard } from "~/lib/pdf/generator";

interface SubjectScore {
  subject: string;
  caScore: number;
  examScore: number;
}

export default function ResultEntryPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const studentId = Number(params?.studentId as string);

  // State
  const [subjects, setSubjects] = useState<SubjectScore[]>([]);
  const [timesSchoolOpened, setTimesSchoolOpened] = useState(110);
  const [timesPresent, setTimesPresent] = useState(110);
  const [teacherComment, setTeacherComment] = useState("");
  const [psychomotorRatings, setPsychomotorRatings] = useState<
    Record<string, number>
  >({});
  const [affectiveDomain, setAffectiveDomain] = useState<
    Record<string, string>
  >({});

  // Queries
  const { data: student, isLoading: loadingStudent } =
    api.student.getById.useQuery({ id: studentId }, { enabled: !!studentId });

  const { data: user } = api.auth.getCurrentUser.useQuery();

  // Check if result already exists
  const classroomTerm = student?.classroom?.currentTerm;
  const classroomSession = student?.classroom?.session;
  const { data: existingResult, refetch: refetchExistingResult } =
    api.result.getByStudentAndTerm.useQuery(
      {
        studentId,
        term: classroomTerm!,
        session: classroomSession!,
      },
      { enabled: !!studentId && !!classroomTerm && !!classroomSession },
    );

  // Load existing result data
  useEffect(() => {
    if (!student) return;
    const registered = (student.subjects ?? []).map((ss) => ss.subject.name);
    if (existingResult) {
      setTimesSchoolOpened(existingResult.timesSchoolOpened);
      setTimesPresent(existingResult.timesPresent);
      setTeacherComment(existingResult.teacherComment || "");
      setPsychomotorRatings((existingResult.psychomotorRatings as any) || {});
      setAffectiveDomain((existingResult.affectiveDomain as any) || {});
      const existingMap = new Map(
        (existingResult.subjects ?? []).map((s) => [
          s.subject,
          { subject: s.subject, caScore: s.caScore, examScore: s.examScore },
        ]),
      );
      const merged: SubjectScore[] = [];
      registered.forEach((name) => {
        const ex = existingMap.get(name);
        merged.push(ex ?? { subject: name, caScore: 0, examScore: 0 });
      });
      (existingResult.subjects ?? []).forEach((s) => {
        if (!registered.includes(s.subject)) {
          merged.push({
            subject: s.subject,
            caScore: s.caScore,
            examScore: s.examScore,
          });
        }
      });
      setSubjects(merged);
    } else {
      setSubjects(
        registered.map((name) => ({ subject: name, caScore: 0, examScore: 0 })),
      );
    }
  }, [student, existingResult]);

  // Mutations
  const createResult = api.result.create.useMutation();

  const updateResult = api.result.update.useMutation();

  // Handlers
  const handleSubjectChange = (
    subject: string,
    caScore: number,
    examScore: number,
  ) => {
    setSubjects((prev) =>
      prev.map((s) =>
        s.subject === subject ? { ...s, caScore, examScore } : s,
      ),
    );
  };

  const handleAttendanceChange = (
    field: "timesSchoolOpened" | "timesPresent",
    value: number,
  ) => {
    if (field === "timesSchoolOpened") {
      setTimesSchoolOpened(value);
    } else {
      setTimesPresent(value);
    }
  };

  const handleSave = async () => {
    const validSubjects = subjects.filter(
      (s) => s.caScore > 0 || s.examScore > 0,
    );

    if (validSubjects.length === 0) {
      toast({
        title: "Error",
        description: "Please enter scores for at least one subject",
        variant: "destructive",
      });
      return;
    }

    const resultData = {
      studentId,
      term: classroomTerm!,
      session: classroomSession!,
      timesSchoolOpened,
      timesPresent,
      timesAbsent: timesSchoolOpened - timesPresent,
      subjects: validSubjects,
      teacherComment: teacherComment || undefined,
      psychomotorRatings,
      affectiveDomain,
    };

    try {
      if (existingResult) {
        await updateResult.mutateAsync({
          id: existingResult.id,
          ...resultData,
        });
        toast({
          title: "Success!",
          description: "Result updated successfully",
        });
      } else {
        await createResult.mutateAsync(resultData);
        toast({ title: "Success!", description: "Result saved successfully" });
      }
      router.push("/teacher/classroom");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message ?? "Failed to save result",
        variant: "destructive",
      });
    }
  };

  const handleSaveAndGeneratePdf = async () => {
    const validSubjects = subjects.filter(
      (s) => s.caScore > 0 || s.examScore > 0,
    );

    if (validSubjects.length === 0) {
      toast({
        title: "Error",
        description: "Please enter scores for at least one subject",
        variant: "destructive",
      });
      return;
    }

    const resultData = {
      studentId,
      term: classroomTerm!,
      session: classroomSession!,
      timesSchoolOpened,
      timesPresent,
      timesAbsent: timesSchoolOpened - timesPresent,
      subjects: validSubjects,
      teacherComment: teacherComment || undefined,
      psychomotorRatings,
      affectiveDomain,
    };

    try {
      if (existingResult) {
        await updateResult.mutateAsync({
          id: existingResult.id,
          ...resultData,
        });
      } else {
        await createResult.mutateAsync(resultData);
      }
      const { data: latest } = await refetchExistingResult();
      const full = latest ?? existingResult;
      if (!full || !student) {
        throw new Error("Failed to load result for PDF generation");
      }
      await generateReportCard({
        student: {
          firstName: student.firstName,
          lastName: student.lastName,
          otherNames: student.otherNames ?? null,
          admissionNo: student.admissionNo,
          gender: student.gender,
          image: student.image ?? null,
        },
        classroom: {
          name: student.classroom.name,
          section: student.classroom.section ?? null,
        },
        term: full.term,
        session: full.session,
        timesSchoolOpened: full.timesSchoolOpened,
        timesPresent: full.timesPresent,
        timesAbsent: full.timesAbsent,
        subjects: (full.subjects ?? []).map((s) => ({
          subject: s.subject,
          caScore: s.caScore,
          examScore: s.examScore,
          totalScore: s.totalScore,
          grade: s.grade ?? "",
          remark: s.remark ?? "",
        })),
        teacherComment: full.teacherComment ?? "",
        principalComment: full.principalComment ?? "",
        averageScore: full.averageScore,
        classPosition: full.classPosition ?? null,
        totalStudents: full.totalStudents ?? null,
        psychomotorRatings: (full.psychomotorRatings as any) ?? undefined,
        affectiveDomain: (full.affectiveDomain as any) ?? undefined,
      });
      toast({
        title: "PDF Generated",
        description: "Result saved and PDF downloaded",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message ?? "Failed to save and generate PDF",
        variant: "destructive",
      });
    }
  };

  // Calculate stats
  const totalScores = subjects
    .filter((s) => s.caScore > 0 || s.examScore > 0)
    .map((s) => s.caScore + s.examScore);
  const averageScore =
    totalScores.length > 0
      ? (totalScores.reduce((a, b) => a + b, 0) / totalScores.length).toFixed(1)
      : "0.0";
  const completedSubjects = subjects.filter(
    (s) => s.caScore > 0 || s.examScore > 0,
  ).length;

  if (loadingStudent) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <Loader2 className="text-oxblood-900 mx-auto mb-4 h-8 w-8 animate-spin" />
          <p className="text-gray-600">Loading student...</p>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <AlertCircle className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Student Not Found
          </h3>
          <p className="mb-6 text-gray-600">
            The student you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.push("/teacher/classroom")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Classroom
          </Button>
        </div>
      </div>
    );
  }

  const studentName = formatStudentName(
    student.firstName,
    student.lastName,
    student.otherNames,
  );

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Main Form - 2 columns */}
      <div className="space-y-6 lg:col-span-2">
        {/* Attendance */}
        <AttendanceSection
          timesSchoolOpened={timesSchoolOpened}
          timesPresent={timesPresent}
          onChange={handleAttendanceChange}
        />

        {/* Subject Scores */}
        <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Subject Scores
          </h3>
          <div className="max-h-[600px] space-y-3 overflow-y-auto pr-2">
            {subjects.map((subject) => (
              <SubjectScoreInput
                key={subject.subject}
                subject={subject.subject}
                caScore={subject.caScore}
                examScore={subject.examScore}
                onChange={handleSubjectChange}
              />
            ))}
          </div>
        </div>

        {/* Psychomotor */}
        <PsychomotorSection
          ratings={psychomotorRatings}
          onChange={setPsychomotorRatings}
        />

        {/* Affective Domain */}
        <AffectiveDomainSection
          traits={affectiveDomain}
          onChange={setAffectiveDomain}
        />

        {/* Teacher Comment */}
        <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
          <Label htmlFor="comment" className="mb-4 block text-lg font-semibold">
            Teacher's Comment
          </Label>
          <Textarea
            id="comment"
            rows={4}
            value={teacherComment}
            onChange={(e) => setTeacherComment(e.target.value)}
            placeholder="Enter your comment about the student's performance..."
            className="resize-none border-2"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleSave}
            disabled={createResult.isPending || updateResult.isPending}
            className="bg-gradient-oxblood shadow-oxblood h-14 flex-1 text-lg font-semibold text-white hover:opacity-90"
          >
            {createResult.isPending || updateResult.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-5 w-5" />
                Save Result
              </>
            )}
          </Button>
          <Button
            onClick={handleSaveAndGeneratePdf}
            disabled={createResult.isPending || updateResult.isPending}
            className="h-14 flex-1 bg-green-600 text-lg font-semibold text-white hover:bg-green-700"
          >
            <FileText className="mr-2 h-5 w-5" />
            Save & Generate PDF
          </Button>
        </div>
      </div>

      {/* Sidebar - Summary */}
      <div className="space-y-6">
        {/* Student Info */}
        <div className="sticky top-8 rounded-xl border-2 border-gray-200 bg-white p-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900 text-xl font-bold text-white">
              {student.firstName[0]}
              {student.lastName[0]}
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{studentName}</h3>
              <p className="text-sm text-gray-600">{student.admissionNo}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4">
              <p className="mb-1 text-sm text-gray-600">Current Average</p>
              <p className="text-3xl font-bold text-red-900">{averageScore}%</p>
            </div>

            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
              <p className="mb-1 text-sm text-gray-600">Subjects Entered</p>
              <p className="text-3xl font-bold text-blue-900">
                {completedSubjects}/{subjects.length}
              </p>
            </div>

            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4">
              <p className="mb-1 text-sm text-gray-600">Attendance</p>
              <p className="text-3xl font-bold text-green-900">
                {timesPresent}/{timesSchoolOpened}
              </p>
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-6 rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-600">
              💡 <strong>Tip:</strong> Scores are auto-saved as you type. Click
              "Save Result" when done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
