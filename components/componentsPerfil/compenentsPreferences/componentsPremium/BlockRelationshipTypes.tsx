import PreferenceBlock from "./PreferenceBlock";
import PreferenceChip from "./PreferenceChip";

interface RelationshipTypeOption {
  value: string;
  label: string;
}

interface Props {
  options?: RelationshipTypeOption[];
  prefs?: string[];
  onToggle: (value: string) => void;
}

export default function BlockRelationshipTypes({
  options = [],
  prefs = [],
  onToggle,
}: Props) {
  return (
    <PreferenceBlock title="Relationship Types">
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
