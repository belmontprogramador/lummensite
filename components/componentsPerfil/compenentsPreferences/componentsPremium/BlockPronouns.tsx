"use client";

import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

type Props = {
  options?: any[];
  prefs?: string[];
  onToggle: (value: string) => void;
};

export default function BlockPronouns({
  options = [],
  prefs = [],
  onToggle,
}: Props) {
  return (
    <PreferenceBlock title="Preferred Pronouns">
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
