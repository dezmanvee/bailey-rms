"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Plus, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";
import { useToast } from "~/hooks/use-toast";

interface AddStudentDialogProps {
  classrooms: Array<{ id: number; name: string; section?: string | null }>;
}

export function AddStudentDialog({ classrooms }: AddStudentDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const utils = api.useUtils();

  const [formData, setFormData] = useState({
    admissionNo: "",
    firstName: "",
    lastName: "",
    otherNames: "",
    gender: "MALE" as "MALE" | "FEMALE",
    dateOfBirth: "",
    classroomId: 0,
    guardianName: "",
    guardianPhone: "",
    address: "",
  });

  const createStudent = api.student.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Student added successfully",
        variant: "success",
      });
      setOpen(false);
      setFormData({
        admissionNo: "",
        firstName: "",
        lastName: "",
        otherNames: "",
        gender: "MALE",
        dateOfBirth: "",
        classroomId: 0,
        guardianName: "",
        guardianPhone: "",
        address: "",
      });
      utils.student.list.invalidate();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.classroomId) {
      toast({
        title: "Error",
        description: "Please select a classroom",
        variant: "destructive",
      });
      return;
    }

    createStudent.mutate({
      ...formData,
      dateOfBirth: formData.dateOfBirth
        ? new Date(formData.dateOfBirth)
        : undefined,
      otherNames: formData.otherNames || undefined,
      guardianName: formData.guardianName || undefined,
      guardianPhone: formData.guardianPhone || undefined,
      address: formData.address || undefined,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-oxblood shadow-oxblood text-white hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>
            Enter the student's information below
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Admission Number */}
            <div>
              <Label htmlFor="admissionNo">Admission Number *</Label>
              <Input
                id="admissionNo"
                value={formData.admissionNo}
                onChange={(e) =>
                  setFormData({ ...formData, admissionNo: e.target.value })
                }
                required
                placeholder="e.g., GS1645"
              />
            </div>

            {/* Classroom */}
            <div>
              <Label htmlFor="classroom">Classroom *</Label>
              <Select
                value={formData.classroomId.toString()}
                onValueChange={(value) =>
                  setFormData({ ...formData, classroomId: Number(value) })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select classroom" />
                </SelectTrigger>
                <SelectContent>
                  {classrooms.map((classroom) => (
                    <SelectItem
                      key={classroom.id}
                      value={classroom.id.toString()}
                    >
                      {classroom.name}{" "}
                      {classroom.section && `- ${classroom.section}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* First Name */}
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>

            {/* Other Names */}
            <div>
              <Label htmlFor="otherNames">Other Names</Label>
              <Input
                id="otherNames"
                value={formData.otherNames}
                onChange={(e) =>
                  setFormData({ ...formData, otherNames: e.target.value })
                }
              />
            </div>

            {/* Gender */}
            <div>
              <Label htmlFor="gender">Gender *</Label>
              <Select
                value={formData.gender}
                onValueChange={(value: "MALE" | "FEMALE") =>
                  setFormData({ ...formData, gender: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MALE">Male</SelectItem>
                  <SelectItem value="FEMALE">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  setFormData({ ...formData, dateOfBirth: e.target.value })
                }
              />
            </div>

            {/* Guardian Name */}
            <div>
              <Label htmlFor="guardianName">Guardian Name</Label>
              <Input
                id="guardianName"
                value={formData.guardianName}
                onChange={(e) =>
                  setFormData({ ...formData, guardianName: e.target.value })
                }
              />
            </div>

            {/* Guardian Phone */}
            <div className="col-span-2">
              <Label htmlFor="guardianPhone">Guardian Phone</Label>
              <Input
                id="guardianPhone"
                type="tel"
                value={formData.guardianPhone}
                onChange={(e) =>
                  setFormData({ ...formData, guardianPhone: e.target.value })
                }
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createStudent.isPending}
              className="bg-gradient-oxblood flex-1 text-white hover:opacity-90"
            >
              {createStudent.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                "Add Student"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
