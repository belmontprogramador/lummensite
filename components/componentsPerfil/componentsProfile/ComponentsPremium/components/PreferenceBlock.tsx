// src/components/premiumPreferences/PreferenceBlock.tsx
"use client";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PreferenceBlock({ title, children }: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
