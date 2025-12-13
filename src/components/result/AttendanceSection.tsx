"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface AttendanceSectionProps {
  timesSchoolOpened: number;
  timesPresent: number;
  onChange: (
    field: "timesSchoolOpened" | "timesPresent",
    value: number,
  ) => void;
}

export function AttendanceSection({
  timesSchoolOpened,
  timesPresent,
  onChange,
}: AttendanceSectionProps) {
  const timesAbsent = timesSchoolOpened - timesPresent;

  return (
    <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">Attendance</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="schoolOpened" className="mb-2 text-gray-700">
            School Opened
          </Label>
          <Input
            id="schoolOpened"
            type="number"
            min="0"
            value={timesSchoolOpened}
            onChange={(e) =>
              onChange("timesSchoolOpened", Number(e.target.value))
            }
            className="h-12 text-center font-semibold"
          />
        </div>
        <div>
          <Label htmlFor="timesPresent" className="mb-2 text-gray-700">
            Times Present
          </Label>
          <Input
            id="timesPresent"
            type="number"
            min="0"
            max={timesSchoolOpened}
            value={timesPresent}
            onChange={(e) => onChange("timesPresent", Number(e.target.value))}
            className="h-12 text-center font-semibold"
          />
        </div>
        <div>
          <Label className="mb-2 text-gray-700">Times Absent</Label>
          <div className="flex h-12 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-100 font-bold text-gray-900">
            {timesAbsent >= 0 ? timesAbsent : 0}
          </div>
        </div>
      </div>
    </div>
  );
}
