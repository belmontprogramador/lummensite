"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type Props = {
  minAge: number;
  maxAge: number;
  onChange: (min: number, max: number) => void;
};

export default function AgeRange({ minAge, maxAge, onChange }: Props) {
  const [min, setMin] = useState(minAge);
  const [max, setMax] = useState(maxAge);

  function handleMinChange(v: number[]) {
    const newMin = v[0];
    setMin(newMin);
    onChange(newMin, max);
  }

  function handleMaxChange(v: number[]) {
    const newMax = v[0];
    setMax(newMax);
    onChange(min, newMax);
  }

  return (
    <div className="mb-6">
      {/* Título */}
      <p className="text-lg font-semibold mb-3">
        Age Range: {min} - {max}
      </p>

      {/* Minimum Age */}
      <p className="text-sm mb-1">Minimum Age</p>
      <Slider
        defaultValue={[min]}
        min={18}
        max={99}
        step={1}
        className="w-full"
        onValueChange={handleMinChange}
      />

      {/* Maximum Age */}
      <p className="text-sm mt-4 mb-1">Maximum Age</p>
      <Slider
        defaultValue={[max]}
        min={18}
        max={99}
        step={1}
        className="w-full"
        onValueChange={handleMaxChange}
      />
    </div>
  );
}
