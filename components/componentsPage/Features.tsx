"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Compatibilidade Avançada",
    desc: "Um sistema holográfico que entende sua energia e essência.",
  },
  {
    title: "Perfil Holográfico",
    desc: "Expresse seu universo: vibe, estilo de vida e psicometria.",
  },
  {
    title: "Localização Inteligente",
    desc: "Conexões alinhadas na sua cidade — ou além do horizonte.",
  },
];

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 relative z-10"
    >
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10
                     backdrop-blur-xl shadow-[0_0_25px_rgba(159,69,255,0.15)]
                     hover:shadow-[0_0_35px_rgba(255,79,216,0.25)]
                     duration-300"
        >
          <h3 className="text-2xl font-bold mb-3 text-[#9f45ff]">{f.title}</h3>
          <p className="text-gray-300 leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
