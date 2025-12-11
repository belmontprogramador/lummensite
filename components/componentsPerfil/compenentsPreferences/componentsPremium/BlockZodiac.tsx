// src/components/premiumPreferences/BlockZodiac.tsx

import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

interface ZodiacOption {
  value: string;
  label: string;
}

interface Props {
  options?: ZodiacOption[] | Record<string, string>;
  prefs?: string[];
  onToggle: (value: string) => void;
}

export default function BlockZodiac({
  options = [],
  prefs = [],
  onToggle,
}: Props) {
  // Normaliza opções para array [{ value, label }]
  const list: ZodiacOption[] = Array.isArray(options)
    ? options
    : Object.entries(options || {}).map(([value, label]) => ({
        value,
        label,
      }));

  return (
    <PreferenceBlock title="Zodiac Signs">
      <div className="flex flex-wrap gap-2">
        {list.map((o) => (
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
