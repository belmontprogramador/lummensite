"use client";

export function AereaShowHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-4 border-b border-gray-300 bg-white">
      <img
        src="/logo2.png" 
        alt="Comunidade Logo"
        className="w-10 h-10 object-contain"
      />

      <p className="mt-1 text-base font-semibold">
        Comunidade
      </p>
    </div>
  );
}
