"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SectionWhy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-3xl mx-auto text-center px-6 py-20 text-white"
    >
      <h2 className="text-4xl font-bold mb-6">
        Então, por que escolher um app de conexão como o LUMMEN?
      </h2>

      <p className="text-gray-300 leading-relaxed mb-6">
        Quando o assunto é se conectar com pessoas reais, você tem diversas opções por aí.
        Mas o LUMMEN vai além: ele une energia, afinidade, psicometria e estilo de vida
        para criar conexões mais profundas e significativas.
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        Nada de encontros aleatórios — aqui você encontra pessoas alinhadas com a sua vibração.
        Com recursos exclusivos, fica mais fácil conhecer alguém especial.
      </p>

      <Button className="px-10 py-5 text-lg bg-gradient-to-r from-[#9f45ff] to-[#4cc9ff] shadow-lg">
        Participar agora
      </Button>
    </motion.section>
  );
}
