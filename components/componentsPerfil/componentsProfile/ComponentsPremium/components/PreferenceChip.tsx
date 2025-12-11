// src/components/premiumPreferences/PreferenceChip.tsx
"use client";

interface Props {
  label: string;
  active: boolean;
  onClick: () => void;   // ✔️ CORRETO PARA WEB
}

export default function PreferenceChip({ label, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}     // ✔️ CORRETO
      className={`
        px-4 py-2 rounded-full text-sm font-medium m-1 transition
        ${active ? "bg-primary text-white" : "bg-gray-200 text-black"}
      `}
    >
      {label}
    </button>
  );
}
