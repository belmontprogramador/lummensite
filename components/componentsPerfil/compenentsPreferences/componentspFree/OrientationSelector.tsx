"use client";

import { Button } from "@/components/ui/button";

type Option = { value: string; label: string };
type Props = {
  options: Option[];
  selected: string[];
  onChange: (v: string[]) => void;
};

export default function OrientationSelector({
  options,
  selected,
  onChange,
}: Props) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">Sexual Orientation</p>

      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = selected.includes(o.value);

          return (
            <Button
              key={o.value}
              type="button"
              onClick={() => toggle(o.value)}
              variant={active ? "default" : "outline"}
              className={
                "rounded-full px-4 py-2 text-sm transition-all " +
                (active
                  ? "bg-primary text-white shadow-md"
                  : "border border-gray-300 text-gray-700")
              }
            >
              {o.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
