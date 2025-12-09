"use client";

import { motion } from "framer-motion";

export default function PlansAbout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 py-20 text-white text-center relative z-10"
    >
      {/* OBSERVAÇÃO */}
      <p className="text-gray-400 text-sm leading-relaxed mb-10">
        * Os recursos energéticos como Super Likes e Boosts do LUMMEN expiram se não forem usados dentro do período do plano. 
        Benefícios podem variar conforme testes e melhorias contínuas da plataforma. 
        Consulte sempre os detalhes da sua assinatura para ver o que está incluso.
      </p>

      {/* O QUE É O LUMMEN? */}
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#9f45ff] to-[#4cc9ff] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
        O que é o LUMMEN?
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        O LUMMEN é uma plataforma de conexão iluminada criada para quem busca algo além do superficial.  
        Uma experiência onde energia, compatibilidade, psicometria e estilo de vida se combinam para conectar pessoas
        com mais profundidade e significado.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Aqui, você pode expandir sua vibração social, conhecer pessoas alinhadas com sua frequência — seja na sua cidade,
        em viagens, ou ao redor do mundo — sempre guiado por afinidades reais e conexão energética.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        No LUMMEN, basta iluminar quem te atrai. Se houver reciprocidade, a energia flui e nasce a conexão.  
        Simples, intuitivo e vibrante — exatamente como deve ser.
      </p>
    </motion.section>
  );
}
