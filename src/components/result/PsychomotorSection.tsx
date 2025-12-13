"use client";

import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

const psychomotorSkills = [
  { key: "handWriting", label: "Hand Writing" },
  { key: "fluency", label: "Fluency" },
  { key: "games", label: "Games/Sports" },
  { key: "attentiveness", label: "Attentiveness" },
  { key: "punctuality", label: "Punctuality" },
  { key: "neatness", label: "Neatness" },
  { key: "politeness", label: "Politeness" },
  { key: "honesty", label: "Honesty" },
  { key: "relationshipWithOthers", label: "Relationship with Others" },
];

interface PsychomotorSectionProps {
  ratings: Record<string, number>;
  onChange: (ratings: Record<string, number>) => void;
}

export function PsychomotorSection({
  ratings,
  onChange,
}: PsychomotorSectionProps) {
  const handleRatingChange = (key: string, value: number) => {
    onChange({ ...ratings, [key]: value });
  };

  return (
    <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Psychomotor Domain (Rate 1-5)
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {psychomotorSkills.map((skill) => (
          <div key={skill.key}>
            <Label className="mb-2 text-gray-700">{skill.label}</Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleRatingChange(skill.key, rating)}
                  className={cn(
                    "h-10 flex-1 rounded-lg border-2 font-semibold transition-all",
                    ratings[skill.key] === rating
                      ? "scale-110 border-red-900 bg-red-900 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-red-900",
                  )}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
