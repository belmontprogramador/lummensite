"use client";

import { Button } from "@/components/ui/button";

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  selected: string[];
  onChange: (values: string[]) => void;
};

export default function GenderSelector({ options, selected, onChange }: Props) {
  const toggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="mb-6">
      <p className="text-base font-semibold mb-2">Gender Preference</p>

      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = selected.includes(o.value);

          return (
            <Button
              key={o.value}
              variant={active ? "default" : "outline"}
              onClick={() => toggle(o.value)}
              className={
                active
                  ? "bg-primary text-white rounded-full"
                  : "rounded-full"
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
