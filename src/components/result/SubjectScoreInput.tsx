"use client";

import { useState, useEffect } from "react";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import {
  calculateGrade,
  CA_MAX_SCORE,
  EXAM_MAX_SCORE,
} from "~/lib/utils/grading";
import { cn } from "~/lib/utils";

interface SubjectScoreInputProps {
  subject: string;
  caScore: number;
  examScore: number;
  onChange: (subject: string, caScore: number, examScore: number) => void;
}

export function SubjectScoreInput({
  subject,
  caScore,
  examScore,
  onChange,
}: SubjectScoreInputProps) {
  const [ca, setCa] = useState(caScore.toString());
  const [exam, setExam] = useState(examScore.toString());
  const [errors, setErrors] = useState({ ca: "", exam: "" });

  const total = Number(ca) + Number(exam);
  const { grade, remark } = calculateGrade(total);

  const validateAndUpdate = (value: string, type: "ca" | "exam") => {
    const num = Number(value);
    const max = type === "ca" ? CA_MAX_SCORE : EXAM_MAX_SCORE;

    if (value === "" || (num >= 0 && num <= max)) {
      if (type === "ca") {
        setCa(value);
        setErrors({ ...errors, ca: "" });
      } else {
        setExam(value);
        setErrors({ ...errors, exam: "" });
      }

      // Update parent
      const caVal = type === "ca" ? num : Number(ca);
      const examVal = type === "exam" ? num : Number(exam);
      onChange(subject, caVal, examVal);
    } else {
      setErrors({
        ...errors,
        [type]: `Max ${max}`,
      });
    }
  };

  const getGradeColor = (grade: string) => {
    const colors: Record<string, string> = {
      A: "bg-green-100 text-green-700 border-green-200",
      B: "bg-blue-100 text-blue-700 border-blue-200",
      C: "bg-yellow-100 text-yellow-700 border-yellow-200",
      D: "bg-orange-100 text-orange-700 border-orange-200",
      E: "bg-red-100 text-red-700 border-red-200",
      F: "bg-gray-100 text-gray-700 border-gray-200",
    };
    return colors[grade] || colors.F;
  };

  return (
    <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4 transition-colors hover:border-red-900">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">{subject}</h4>
        {total > 0 && (
          <Badge
            className={cn("border-2 hover:bg-inherit", getGradeColor(grade))}
          >
            {grade} - {remark}
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {/* CA Score */}
        <div>
          <label className="mb-1 block text-xs text-gray-600">
            CA ({CA_MAX_SCORE})
          </label>
          <Input
            type="number"
            min="0"
            max={CA_MAX_SCORE}
            value={ca}
            onChange={(e) => validateAndUpdate(e.target.value, "ca")}
            className={cn(
              "h-10 text-center font-semibold",
              errors.ca && "border-red-500",
            )}
            placeholder="0"
          />
          {errors.ca && (
            <p className="mt-1 text-xs text-red-600">{errors.ca}</p>
          )}
        </div>

        {/* Exam Score */}
        <div>
          <label className="mb-1 block text-xs text-gray-600">
            Exam ({EXAM_MAX_SCORE})
          </label>
          <Input
            type="number"
            min="0"
            max={EXAM_MAX_SCORE}
            value={exam}
            onChange={(e) => validateAndUpdate(e.target.value, "exam")}
            className={cn(
              "h-10 text-center font-semibold",
              errors.exam && "border-red-500",
            )}
            placeholder="0"
          />
          {errors.exam && (
            <p className="mt-1 text-xs text-red-600">{errors.exam}</p>
          )}
        </div>

        {/* Total */}
        <div>
          <label className="mb-1 block text-xs text-gray-600">Total</label>
          <div className="flex h-10 items-center justify-center rounded-lg border-2 border-gray-300 bg-white font-bold text-gray-900">
            {total.toFixed(1)}
          </div>
        </div>

        {/* Grade */}
        <div>
          <label className="mb-1 block text-xs text-gray-600">Grade</label>
          <div className="text-oxblood-900 flex h-10 items-center justify-center rounded-lg border-2 border-gray-300 bg-white font-bold">
            {total > 0 ? grade : "—"}
          </div>
        </div>
      </div>
    </div>
  );
}
