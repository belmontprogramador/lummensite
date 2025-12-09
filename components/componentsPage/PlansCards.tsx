"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react"; // opcional

export default function PlansCards() {
  const plans = [
    {
      name: "LUMMEN PLUS",
      gradient: "from-[#9f45ff] to-[#ff4fd8]",
      features: [
        "Curtidas ilimitadas",
        "Voltar perfis quantas vezes quiser",
        "Passaporte — conecte-se em qualquer lugar",
        "Remoção de anúncios",
        "Modo Anônimo"
      ]
    },
    {
      name: "LUMMEN GOLD",
      gradient: "from-[#ff4fd8] to-[#4cc9ff]",
      features: [
        "Veja quem curtiu você",
        "Novos destaques todos os dias",
        "Super Likes semanais",
        "1 Boost gratuito por mês*",
        "Tudo do LUMMEN PLUS"
      ]
    },
    {
      name: "LUMMEN PLATINUM",
      gradient: "from-[#4cc9ff] to-[#9f45ff]",
      features: [
        "Envie mensagem antes do match",
        "Curtidas priorizadas",
        "Veja curtidas enviadas nos últimos 7 dias",
        "Tudo do LUMMEN GOLD"
      ]
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10 relative z-10">
      {plans.map((plan, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl 
                     shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]
                     transition"
        >
          <h3
            className={`text-2xl font-bold mb-5 bg-gradient-to-r ${plan.gradient} text-transparent bg-clip-text`}
          >
            {plan.name}
          </h3>

          <ul className="space-y-3 text-gray-300">
            {plan.features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#9f45ff]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {plan.name === "LUMMEN GOLD" && (
            <p className="mt-4 text-xs text-gray-400">
              *Boost mensal disponível apenas em assinaturas mensais ou maiores.
            </p>
          )}
        </motion.div>
      ))}
    </section>
  );
}
