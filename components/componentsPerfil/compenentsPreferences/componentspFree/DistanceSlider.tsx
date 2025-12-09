"use client";

import { Slider } from "@/components/ui/slider";

type Props = {
  value: number;
  onChange: (v: number) => void;
};

export default function DistanceSlider({ value, onChange }: Props) {
  return (
    <div className="mb-6 w-full">
      {/* Label */}
      <p className="text-sm font-medium mb-2">
        Maximum Distance: <span className="font-semibold">{value} km</span>
      </p>

      {/* Slider SHADCN */}
      <Slider
        defaultValue={[value]}
        value={[value]}
        max={300}
        min={1}
        step={1}
        onValueChange={(v) => onChange(v[0])}
        className="w-full"
      />

      {/* Valor abaixo do slider */}
      <p className="text-xs text-muted-foreground mt-2">
        {value} km
      </p>
    </div>
  );
}
