"use client";

import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options?: Option[];
  prefs?: string[];
  onToggle: (value: string) => void;
}

export default function BlockCommunication({
  options = [],
  prefs = [],
  onToggle,
}: Props) {
  return (
    <PreferenceBlock title="Communication Style">
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
