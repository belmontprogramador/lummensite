"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LummenMask from "./LummenMask";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="pt-28 pb-32 text-center relative z-10"
    >
      <LanguageSwitcher />

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <LummenMask />
      </motion.div>

      <motion.h1
        className="text-6xl font-extrabold mt-8 mb-6 
                   bg-gradient-to-r from-[#9f45ff] via-[#ff4fd8] to-[#4cc9ff]
                   text-transparent bg-clip-text"
        animate={{
          textShadow: [
            "0 0 10px #9f45ff",
            "0 0 20px #ff4fd8",
            "0 0 10px #4cc9ff",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        A energia da conexão iluminada pela Lummen.
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300 text-lg mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Conexões profundas guiadas por afinidade, energia, psicometria 
        e estilo de vida — em um ambiente elegante e futurista.
      </motion.p>

      <motion.div
        className="flex justify-center gap-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Button className="px-10 py-6 text-lg bg-gradient-to-r from-[#9f45ff] to-[#ff4fd8] shadow-[0_0_20px_#ff4fd8]">
          Entrar na Lummen
        </Button>

        <Button className="px-10 py-6 text-lg bg-white/10 backdrop-blur-md border border-white/20">
          Baixar App
        </Button>
      </motion.div>
    </motion.section>
  );
}
