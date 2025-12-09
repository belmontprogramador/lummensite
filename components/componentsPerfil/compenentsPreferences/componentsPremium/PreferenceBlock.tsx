// src/components/premiumPreferences/PreferenceBlock.tsx

interface PreferenceBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function PreferenceBlock({ title, children }: PreferenceBlockProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
