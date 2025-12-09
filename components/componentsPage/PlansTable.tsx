"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    color: "text-gray-300",
    features: [
      true,  // matches
      false, // compatibilidade energética completa
      false, // ver quem curtiu
      false, // msg antes do match
      false, // boost energético
      false, // voltar deslize
      false, // psicometria avançada
      false, // filtros avançados
      false, // perfil holográfico
    ],
  },
  {
    name: "LUMMEN PREMIUM",
    color: "text-[#9f45ff]",
    features: [
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
    ],
  },
  {
    name: "LUMMEN ULTRA",
    color: "text-[#ff4fd8]",
    features: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
  },
];

const featureLabels = [
  "Matches e Conversas",
  "Compatibilidade energética completa",
  "Veja quem curtiu você",
  "Mensagem antes do match",
  "Boost energético semanal",
  "Reverter deslizes",
  "Insights psicométricos avançados",
  "Filtros premium avançados",
  "Perfil holográfico",
];

export default function PlansTable() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto text-white">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-4"
      >
        Categorias de Assinatura Lummen
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Eleve sua vibração, desbloqueie mais visibilidade e conecte-se com quem realmente
        está alinhado à sua energia.
      </p>

      {/* Cards dos planos */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl 
                       shadow-[0_0_25px_rgba(159,69,255,0.25)] text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${p.color}`}>{p.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Tabela comparativa */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-white/10">
              <th className="text-left py-4 px-4">Recurso</th>
              {plans.map((p, i) => (
                <th key={i} className={`py-4 px-4 text-center ${p.color}`}>
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {featureLabels.map((label, rowIndex) => (
              <tr key={rowIndex} className="border-t border-white/10">
                <td className="py-3 px-4 text-gray-300">{label}</td>

                {plans.map((plan, colIndex) => (
                  <td key={colIndex} className="py-3 px-4 text-center">
                    {plan.features[rowIndex] ? (
                      <Check className="text-[#4cc9ff] mx-auto" />
                    ) : (
                      <X className="text-gray-600 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
