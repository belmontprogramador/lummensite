"use client";

import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

export default function BlockDrinking({ options = [], prefs = [], onToggle }: any) {
  return (
    <PreferenceBlock title="Drinking">
      <div className="flex flex-wrap gap-2">
        {options.map((o: any) => (
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
