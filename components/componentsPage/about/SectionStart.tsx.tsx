"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SectionStart() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center px-6 py-24 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">Vamos começar</h2>

      <p className="text-gray-300 max-w-xl mx-auto mb-10">
        Comece hoje mesmo a iluminar suas conexões e descobrir pessoas alinhadas à sua energia.
      </p>

      <Button className="px-10 py-5 text-lg bg-gradient-to-r from-[#ff4fd8] to-[#4cc9ff] shadow-xl">
        Criar minha conta
      </Button>
    </motion.section>
  );
}
