import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

interface SmokingOption {
  value: string;
  label: string;
}

interface Props {
  options?: SmokingOption[];
  prefs?: string[];
  onToggle: (value: string) => void;
}

export default function BlockSmoking({
  options = [],
  prefs = [],
  onToggle,
}: Props) {
  return (
    <PreferenceBlock title="Smoking">
      {options.map((o) => (
        <PreferenceChip
          key={o.value}
          label={o.label}
          active={prefs.includes(o.value)}
          onPress={() => onToggle(o.value)}
        />
      ))}
    </PreferenceBlock>
  );
}
