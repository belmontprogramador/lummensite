"use client";

import { motion } from "framer-motion";

export default function AppDownload() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="px-6 py-20 text-center relative z-10"
    >
      <h2 className="text-4xl font-bold mb-6">Disponível em breve</h2>
      <p className="text-gray-400 mb-10">
        Lummen estará disponível para iOS e Android com experiência total em Neon.
      </p>

      <div className="flex justify-center">
<img
  src="/icons-store.png"
  alt="Download badges"
  className="w-72 opacity-80 hover:opacity-100 transition"
/>

      </div>
    </motion.section>
  );
}
