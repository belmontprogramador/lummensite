"use client";

import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

interface Props {
  options: any[];
  prefs: string[];
  onToggle: (value: string) => void;
}

export default function BlockInterestsLifestyle({
  options = [],
  prefs = [],
  onToggle,
}: Props) {
  return (
    <PreferenceBlock title="Interests — Lifestyle">
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <PreferenceChip
            key={o.value}
            label={o.label}
            active={prefs.includes(o.value)}
            onClick={() => onToggle(o.value)}
          />
        ))}
      </div>
    </PreferenceBlock>
  );
}
