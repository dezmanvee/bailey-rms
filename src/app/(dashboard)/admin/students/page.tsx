"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { Users, UserPlus, BookOpen } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/hooks/use-toast";
import { Gender } from "../../../../../generated/prisma/enums";

export default function StudentsPage() {
  const { toast } = useToast();
  const { data: classrooms } = api.classroom.list.useQuery();
  const { data: subjects } = api.subject.list.useQuery();
  const createStudent = api.student.create.useMutation();

  const [admissionNo, setAdmissionNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  const [classroomId, setClassroomId] = useState<number | undefined>(undefined);
  const [subjectIds, setSubjectIds] = useState<number[]>([]);

  const handleCreate = async () => {
    if (!classroomId) {
      toast({
        title: "Classroom required",
        description: "Select a classroom",
        variant: "destructive",
      });
      return;
    }
    try {
      await createStudent.mutateAsync({
        admissionNo,
        firstName,
        lastName,
        otherNames: otherNames || undefined,
        gender,
        classroomId,
        subjectIds,
      });
      toast({
        title: "Student created",
        description: "Student assigned to classroom",
      });
      setAdmissionNo("");
      setFirstName("");
      setLastName("");
      setOtherNames("");
      setSubjectIds([]);
    } catch (e: any) {
      toast({
        title: "Error",
        description: e?.message ?? "Failed to create student",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center gap-3">
          <UserPlus className="h-6 w-6 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-900">
            Create Student
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="adno">Admission No</Label>
            <Input
              id="adno"
              value={admissionNo}
              onChange={(e) => setAdmissionNo(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fname">First Name</Label>
              <Input
                id="fname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="lname">Last Name</Label>
              <Input
                id="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="onames">Other Names</Label>
            <Input
              id="onames"
              value={otherNames}
              onChange={(e) => setOtherNames(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Gender</Label>
              <Select
                value={gender}
                onValueChange={(v) => setGender(v as Gender)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Gender.MALE}>MALE</SelectItem>
                  <SelectItem value={Gender.FEMALE}>FEMALE</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Classroom</Label>
              <Select
                value={classroomId?.toString() ?? ""}
                onValueChange={(v) => setClassroomId(Number(v))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select classroom" />
                </SelectTrigger>
                <SelectContent>
                  {(classrooms ?? []).map((c) => (
                    <SelectItem key={c.id} value={c.id.toString()}>
                      {c.name} {c.section ? `(${c.section})` : ""} • {c.session}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gray-500" />
              <Label>Assign Subjects</Label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {(subjects ?? []).map((s) => {
                const checked = subjectIds.includes(s.id);
                return (
                  <label key={s.id} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        setSubjectIds((prev) =>
                          e.target.checked
                            ? [...prev, s.id]
                            : prev.filter((id) => id !== s.id),
                        );
                      }}
                    />
                    {s.name}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between rounded-2xl border-2 border-gray-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-gray-500" />
          <p className="text-sm text-gray-600">
            Available Classrooms: {classrooms?.length ?? 0}
          </p>
        </div>
        <Button
          onClick={handleCreate}
          className="bg-gradient-oxblood text-white"
        >
          Create Student
        </Button>
      </div>
    </div>
  );
}
