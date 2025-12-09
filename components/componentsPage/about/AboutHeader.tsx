"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-24 px-6 relative z-10"
    >
      {/* TÍTULO */}
      <h1
        className="text-5xl md:text-6xl font-extrabold mb-6
        bg-gradient-to-r from-[#9f45ff] via-[#ff4fd8] to-[#4cc9ff]
        text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,80,230,0.45)]
        flex items-center justify-center gap-3"
      >
        Sobre o Lummen
        <Sparkles className="w-10 h-10 text-[#ff77ff]" />
      </h1>

      {/* SUBTÍTULO */}
      <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
        Descubra a visão, a energia e o propósito por trás do Lummen — 
        uma plataforma criada para iluminar conexões reais.
      </p>
    </motion.section>
  );
}
