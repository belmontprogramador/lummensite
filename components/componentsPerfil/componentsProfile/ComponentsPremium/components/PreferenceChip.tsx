// src/components/premiumPreferences/PreferenceChip.tsx
"use client";

interface Props {
  label: string;
  active: boolean;
  onPress: () => void;
}

export default function PreferenceChip({ label, active, onPress }: Props) {
  return (
    <button
      onClick={onPress}
      className={`
        px-4 py-2 rounded-full text-sm font-medium m-1 transition
        ${active ? "bg-primary text-white" : "bg-gray-200 text-black"}
      `}
    >
      {label}
    </button>
  );
}
