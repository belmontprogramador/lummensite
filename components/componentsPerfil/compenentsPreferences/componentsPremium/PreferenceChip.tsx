// src/components/premiumPreferences/PreferenceChip.tsx

interface PreferenceChipProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

export default function PreferenceChip({ label, active, onPress }: PreferenceChipProps) {
  return (
    <button
      onClick={onPress}
      className={`
        px-4 py-2 rounded-full text-sm font-medium m-1
        transition-colors
        ${active ? "bg-primary text-white" : "bg-gray-300 text-black"}
      `}
    >
      {label}
    </button>
  );
}
