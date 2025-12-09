"use client";

import { motion } from "framer-motion";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white">

      {/* HERO SECTION */}
      <section
        className="w-full relative z-10 py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #ff4fd8 0%, #9f45ff 50%, #4cc9ff 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
              LUMMEN  
              <br />
              <span className="text-white/90 text-3xl font-medium">
                Conecte-se com novas energias hoje
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-md leading-relaxed">
              Descubra conexões profundas e alinhe-se com pessoas que vibram na
              mesma sintonia. O futuro dos encontros energéticos começa aqui.
            </p>

            <button
              className="mt-8 bg-white text-black font-semibold px-7 py-3 rounded-full shadow-lg
                         hover:bg-black hover:text-white transition-all border border-transparent
                         hover:border-white"
            >
              Baixar o LUMMEN
            </button>
          </motion.div>

          {/* PHONE MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/mock-lummen.png" // troque pelo mockup do app
              alt="LUMMEN App"
              className="w-[310px] drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] rounded-3xl"
            />
          </motion.div>

        </div>
      </section>

      {/* COMPATIBILITY SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#9f45ff] to-[#4cc9ff] text-transparent bg-clip-text">
          Plataformas e dispositivos compatíveis
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
          O LUMMEN está disponível para iOS, Android e também pode ser acessado 
          em navegadores modernos como Chrome, Safari, Firefox e Edge.  
          Além disso, estamos expandindo compatibilidade com novos sistemas a cada atualização.
        </p>

        <p className="text-gray-400 max-w-3xl leading-relaxed">
          Para dispositivos iOS, o LUMMEN é compatível com versões acima de 15.0.  
          No Android, funciona a partir da versão 8.0 ou superior.  
          No desktop, você pode acessar via navegador em qualquer plataforma moderna.
        </p>
      </section>

    </main>
  );
}
