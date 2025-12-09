"use client";

import { motion } from "framer-motion";
import PlansCards from "@/components/componentsPage/PlansCards";
import PlansTable from "@/components/componentsPage/PlansTable";
import PlansAbout from "@/components/componentsPage/PlansInfo";

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white relative overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9f45ff] blur-[180px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4cc9ff] blur-[160px] opacity-20" />
      </div>

      {/* 🔥 TÍTULO PRINCIPAL */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl font-extrabold pt-20 mb-10
                   bg-gradient-to-r from-[#9f45ff] via-[#ff4fd8] to-[#4cc9ff] 
                   text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      >
        Planos Lummen ✨
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mb-20 px-6"
      >
        Escolha o plano que combina com a sua vibração e desbloqueie todo 
        o potencial energético das suas conexões.
      </motion.p>

      {/* 🔥 CARDS DE PLANOS */}
      <PlansCards />

      {/* 🔥 TABELA COMPARATIVA */}
      <PlansTable />

      {/* 🔥 SEÇÃO “O QUE É O LUMMEN?” */}
      <PlansAbout />

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 text-sm relative z-10 opacity-70">
        © {new Date().getFullYear()} Lummen — Conexões que iluminam.
      </footer>
    </main>
  );
}
