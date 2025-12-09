"use client";

import Hero from "@/components/componentsPage/Hero";
import Features from "@/components/componentsPage/Features";
import Premium from "@/components/componentsPage/Premium";
import AppDownload from "@/components/componentsPage/AppDownload";
import Footer from "@/components/componentsPage/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050509] text-white relative overflow-hidden">

      {/* 🔥 VÍDEO DE FUNDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/lummen-bg.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Conteúdo */}
      <Hero />
      <Features />
      <Premium />
      <AppDownload />
      <Footer />
    </main>
  );
}
