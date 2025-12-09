"use client";

import AboutHeader from "@/components/componentsPage/about/AboutHeader";
import SectionWhy from "@/components/componentsPage/about/SectionWhy";
import SectionInterests from "@/components/componentsPage/about/SectionInterests";
import SectionStart from "@/components/componentsPage/about/SectionStart.tsx";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white relative overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9f45ff] blur-[180px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4cc9ff] blur-[160px] opacity-20" />
      </div>

      {/* 🔥 Sessão hero do About */}
      <AboutHeader />

      {/* 🔥 Conteúdo abaixo */}
      <SectionWhy />
      <SectionInterests />
      <SectionStart />

      <footer className="py-12 text-center text-gray-500 text-sm opacity-70 relative z-10">
        © {new Date().getFullYear()} Lummen — Conexões que iluminam.
      </footer>
    </main>
  );
}
