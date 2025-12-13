"use client";

import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";

const affectiveTraits = [
  { key: "drawingPainting", label: "Drawing & Painting" },
  { key: "craftPractice", label: "Craft Practice" },
  { key: "musicalSkills", label: "Musical Skills" },
  { key: "sportGames", label: "Sports & Games" },
  { key: "speechFluency", label: "Speech Fluency" },
  { key: "attentiveness", label: "Attentiveness in Class" },
];

interface AffectiveDomainSectionProps {
  traits: Record<string, string>;
  onChange: (traits: Record<string, string>) => void;
}

export function AffectiveDomainSection({
  traits,
  onChange,
}: AffectiveDomainSectionProps) {
  const handleTraitToggle = (key: string, checked: boolean) => {
    onChange({ ...traits, [key]: checked ? "tick" : "" });
  };

  return (
    <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Affective Domain
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {affectiveTraits.map((trait) => (
          <div key={trait.key} className="flex items-center gap-3">
            <Checkbox
              id={trait.key}
              checked={traits[trait.key] === "tick"}
              onCheckedChange={(checked) =>
                handleTraitToggle(trait.key, checked as boolean)
              }
              className="border-2 border-red-900 data-[state=checked]:bg-red-900"
            />
            <Label htmlFor={trait.key} className="cursor-pointer text-gray-700">
              {trait.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
