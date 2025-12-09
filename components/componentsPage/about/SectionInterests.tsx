"use client";

import { motion } from "framer-motion";

export default function SectionInterests() {
    const items = [
        {
            title: "Explore seus interesses",
            text: "Inicie conversas com facilidade encontrando pessoas que vibram na mesma sintonia que você. No LUMMEN, interesses moldam conexões reais, guiando você a perfis cuja energia, vivências e afinidades ressoam com a sua.Quanto mais você se expressa, mais o universo de possibilidades se alinha — cada interesse é uma luz que aproxima quem combina com a sua vibração.",
            img: "/about1.jpg",
        },
        {
            title: "Possibilidades infinitas",
            text: "O universo de conexões é ilimitado — e no LUMMEN, isso se torna ainda mais verdadeiro. Com milhões de energias, perfis e combinações possíveis, sempre existe alguém cuja vibração conversa com a sua. Cada deslize abre uma nova possibilidade, cada interesse compartilhado aproxima você de alguém especial. No LUMMEN, suas chances não apenas aumentam — elas se expandem."
        },
        {
            title: "Leve a gente com você para qualquer lugar",
            text: "Não importa onde você esteja — sua energia viaja com você. Em São Paulo, Nova York, Londres ou Tóquio, o LUMMEN acompanha cada movimento, permitindo que você se conecte com pessoas do mundo todo. Onde houver uma vibração compatível, a conexão acontece. Basta levar sua luz e deixar que o LUMMEN cuide do resto.", img: "/about2.jpg",
        },
        {
            title: "Conecte-se com pessoas em qualquer lugar",
            text: "Com o Passaporte Energético, suas conexões ultrapassam fronteiras físicas e geográficas. Descubra pessoas que vibram na mesma frequência que você, mesmo que estejam a milhares de quilômetros de distância. No LUMMEN, o mundo inteiro se torna uma possibilidade — e sua próxima conexão pode estar em qualquer continente."
        },
        {
            title: "Verifique seu perfil no Lummen",
            text: "A Verificação Luminosa existe para garantir autenticidade e segurança. Quando você ativa esse recurso, seu perfil ganha mais credibilidade e destaque, transmitindo confiança imediata. Perfis verificados brilham mais intensamente na plataforma, mostrando que você é exatamente quem diz ser — pronto para conexões reais e transparentes."
        },
        {
            title: "Matches pertinho de você",
            text: "A energia certa pode estar muito mais perto do que você imagina. Descubra pessoas próximas que compartilham do seu estilo de vida, das suas intenções e da sua frequência energética. O LUMMEN identifica compatibilidades locais que fazem sentido para você — facilitando encontros reais, presença, proximidade e conexões que fluem naturalmente."
        },
        {
            title: "Veja quem curtiu você",
            text: "No LUMMEN, você poupa tempo e ganha clareza sobre quem já demonstrou interesse pela sua vibração. Ao saber quem curtiu você antes mesmo do match, fica mais fácil priorizar, focar e se conectar com quem realmente está aberto para a troca. Deixe o universo agir — e veja quem já percebeu sua luz."
        },
        {
            title: "Tudo incluído, o tempo todo",
            text: "No LUMMEN, você tem todas as possibilidades à sua disposição. Sem bloqueios, sem filtros escondidos — apenas caminhos que se iluminam conforme suas escolhas. Aqui, você decide com quem quer conversar, quem quer conhecer e para onde quer levar cada conexão. É liberdade energética total, 24 horas por dia."
        },
        {
            title: "Faça cada curtida valer a pena",
            text: "Com curtidas priorizadas, sua energia chega primeiro a perfis altamente compatíveis. Sua presença ganha destaque, sua vibração se intensifica e suas chances aumentam significativamente. Cada curtida se torna mais poderosa, mais estratégica e mais luminosa — perfeita para encontrar conexões com real potencial.", img: "/about3.jpg",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-28 relative z-10">
            <div className="space-y-24">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* TEXTO */}
                        <div>
                            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#ff4fd8] to-[#4cc9ff] text-transparent bg-clip-text">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 text-lg leading-relaxed">
                                {item.text}
                            </p>
                        </div>

                        {/* IMAGEM */}
                        {item.img && (
                            <motion.div
                                className="w-full flex justify-center"
                                whileHover={{ scale: 1.03 }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="
                    max-w-md w-full rounded-2xl
                    shadow-[0_0_25px_rgba(255,79,216,0.25)]
                    hover:shadow-[0_0_40px_rgba(79,200,255,0.35)]
                    transition-all duration-300
                  "
                                />
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
