"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(locale: string) {
    router.push(`/${locale}${pathname}`);
  }

  return (
    <div className="fixed top-5 right-5 flex gap-3">
      {["pt", "en", "es"].map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className="text-white bg-white/10 px-3 py-1 rounded-md hover:bg-white/20"
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
