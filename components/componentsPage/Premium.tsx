"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Premium() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto text-center px-6 py-28 relative z-10"
    >
      <motion.h2
        className="text-5xl font-semibold mb-6 bg-gradient-to-r from-[#ff4fd8] to-[#4cc9ff] text-transparent bg-clip-text"
        animate={{
          textShadow: [
            "0 0 15px #ff4fd8",
            "0 0 25px #4cc9ff",
            "0 0 15px #ff4fd8",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Lummen Premium — Neon Mode
      </motion.h2>

      <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        Desbloqueie filtros holográficos, compatibilidade energética completa,
        super visibilidade e experiência visual exclusiva.
      </p>

      <Button className="px-12 py-6 text-xl bg-gradient-to-r from-[#ff4fd8] to-[#4cc9ff] shadow-[0_0_35px_rgba(255,79,216,0.4)]">
        Conhecer Planos
      </Button>
    </motion.section>
  );
}
