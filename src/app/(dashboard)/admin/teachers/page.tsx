"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { Users, UserPlus, School } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/hooks/use-toast";
import { Term } from "../../../../../generated/prisma/enums";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "~/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";

export default function TeachersPage() {
  const { toast } = useToast();
  const createTeacher = api.auth.createTeacher.useMutation();
  const createClassroom = api.classroom.create.useMutation();
  const { data: classrooms } = api.classroom.list.useQuery();
  const { data: teachers, refetch: refetchTeachers } =
    api.auth.listTeachers.useQuery();
  const updateTeacher = api.auth.updateTeacher.useMutation({
    onSuccess: () => {
      toast({ title: "Updated", description: "Teacher updated" });
      refetchTeachers();
    },
  });
  const deleteTeacher = api.auth.deleteTeacher.useMutation({
    onSuccess: () => {
      toast({ title: "Deleted", description: "Teacher deactivated" });
      refetchTeachers();
    },
  });

  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  const [className, setClassName] = useState("");
  const [classSection, setClassSection] = useState("");
  const [classSession, setClassSession] = useState("2024/2025");
  const [classTerm, setClassTerm] = useState<Term>(Term.FIRST);

  const [creating, setCreating] = useState(false);

  const handleCreate = async () => {
    try {
      setCreating(true);
      const teacher = await createTeacher.mutateAsync({
        name: teacherName,
        email: teacherEmail,
        password: teacherPassword,
        role: "TEACHER",
      });

      await createClassroom.mutateAsync({
        name: className,
        section: classSection || undefined,
        session: classSession,
        currentTerm: classTerm,
        teacherId: teacher.id,
      });

      toast({
        title: "Created",
        description: "Teacher and classroom created successfully",
      });
      setTeacherName("");
      setTeacherEmail("");
      setTeacherPassword("");
      setClassName("");
      setClassSection("");
    } catch (e: any) {
      toast({
        title: "Error",
        description: e?.message ?? "Failed to create teacher and classroom",
        variant: "destructive",
      });
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="grid gap-8">
      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center gap-3">
          <UserPlus className="h-6 w-6 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-900">
            Create Teacher
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="tname">Name</Label>
            <Input
              id="tname"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="temail">Email</Label>
            <Input
              id="temail"
              type="email"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="tpass">Password</Label>
            <Input
              id="tpass"
              type="password"
              value={teacherPassword}
              onChange={(e) => setTeacherPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center gap-3">
          <School className="h-6 w-6 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-900">
            Assign Classroom
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="cname">Class Name</Label>
            <Input
              id="cname"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="e.g. S.S. 2"
            />
          </div>
          <div>
            <Label htmlFor="csection">Section</Label>
            <Input
              id="csection"
              value={classSection}
              onChange={(e) => setClassSection(e.target.value)}
              placeholder="e.g. A"
            />
          </div>
          <div>
            <Label htmlFor="csession">Session</Label>
            <Input
              id="csession"
              value={classSession}
              onChange={(e) => setClassSession(e.target.value)}
              placeholder="e.g. 2024/2025"
            />
          </div>
          <div>
            <Label>Current Term</Label>
            <Select
              value={classTerm}
              onValueChange={(v) => setClassTerm(v as Term)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={Term.FIRST}>FIRST</SelectItem>
                <SelectItem value={Term.SECOND}>SECOND</SelectItem>
                <SelectItem value={Term.THIRD}>THIRD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border-2 border-gray-200 bg-white p-6 lg:col-span-2">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-gray-500" />
          <p className="text-sm text-gray-600">
            Existing Classrooms: {classrooms?.length ?? 0}
          </p>
        </div>
        <Button
          onClick={handleCreate}
          disabled={creating}
          className="bg-gradient-oxblood text-white"
        >
          Create Teacher & Classroom
        </Button>
      </div>

      <div className="rounded-2xl border-2 border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-center gap-3">
          <Users className="h-6 w-6 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-900">Teachers</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(teachers ?? []).map((t) => {
              const mainClass =
                t.classrooms && t.classrooms.length > 0
                  ? `${t.classrooms[0]?.name}${t.classrooms[0]?.section ? ` (${t.classrooms[0].section})` : ""} • ${t.classrooms[0]?.session}`
                  : "—";
              return (
                <TableRow key={t.id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={t.image ?? undefined} />
                      <AvatarFallback>
                        {t.name?.slice(0, 2).toUpperCase() ?? "TT"}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{t.name}</TableCell>
                  <TableCell>{t.email}</TableCell>
                  <TableCell>{mainClass}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="mr-2">
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Teacher</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label>Name</Label>
                            <Input
                              defaultValue={t.name ?? ""}
                              onChange={(e) =>
                                ((t as any).__editName = e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              defaultValue={t.email ?? ""}
                              onChange={(e) =>
                                ((t as any).__editEmail = e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>Phone</Label>
                            <Input
                              defaultValue={t.phoneNumber ?? ""}
                              onChange={(e) =>
                                ((t as any).__editPhone = e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>Image URL</Label>
                            <Input
                              defaultValue={t.image ?? ""}
                              onChange={(e) =>
                                ((t as any).__editImage = e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            onClick={async () => {
                              await updateTeacher.mutateAsync({
                                id: t.id,
                                name:
                                  (t as any).__editName !== undefined
                                    ? (t as any).__editName
                                    : t.name,
                                email:
                                  (t as any).__editEmail !== undefined
                                    ? (t as any).__editEmail
                                    : t.email,
                                phoneNumber:
                                  (t as any).__editPhone !== undefined
                                    ? (t as any).__editPhone
                                    : t.phoneNumber,
                                image:
                                  (t as any).__editImage !== undefined
                                    ? (t as any).__editImage
                                    : (t.image ?? undefined),
                              });
                            }}
                            className="bg-gradient-oxblood text-white"
                          >
                            Save
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="destructive"
                      onClick={async () => {
                        await deleteTeacher.mutateAsync({ id: t.id });
                      }}
                      className="ml-2"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
