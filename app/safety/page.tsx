"use client";

import { motion } from "framer-motion";

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white relative overflow-hidden">
      
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-20 w-[600px] h-[600px] bg-[#9f45ff] blur-[180px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4cc9ff] blur-[160px] opacity-20" />
      </div>

      {/* Header Section */}
      <section className="px-6 py-24 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-[#9f45ff] via-[#ff4fd8] to-[#4cc9ff] text-transparent bg-clip-text mb-6"
        >
          Dicas de Segurança no LUMMEN
        </motion.h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Conectar-se é mágico — mas segurança vem sempre em primeiro lugar.
          Aqui estão orientações essenciais para garantir experiências positivas,
          protegidas e conscientes.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 relative z-10 space-y-20 pb-32">

        {/* ----- SEGURANÇA ONLINE ----- */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#9f45ff]">Segurança online</h2>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <div>
              <h3 className="text-xl font-semibold mb-2">Nunca envie dinheiro ou informações financeiras</h3>
              <p>
                Nunca envie dinheiro — especialmente via transferência — mesmo que a pessoa alegue estar em uma emergência.
                Desconfie de pedidos de ajuda financeira. Se alguém solicitar dinheiro, denuncie imediatamente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Proteja suas informações pessoais</h3>
              <p>
                Não compartilhe documentos, endereço, rotina ou informações sobre seus filhos com desconhecidos.
                Mantenha seus dados privados protegidos até conhecer alguém profundamente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Fique na plataforma</h3>
              <p>
                Conversas dentro do LUMMEN são mais seguras.
                Golpistas tentam mover conversas para WhatsApp, SMS ou e-mail rapidamente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Cuidado com relacionamentos à distância</h3>
              <p>
                Desconfie de pessoas que nunca aparecem em videochamada, evitam perguntas ou
                pedem ajuda financeira para “voltar ao país”.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Denuncie comportamentos suspeitos</h3>
              <p className="mb-3">
                Bloqueie e denuncie perfis que:
              </p>

              <ul className="space-y-2 ml-4 list-disc">
                <li>pedem dinheiro</li>
                <li>parecem menores de idade</li>
                <li>enviam mensagens ofensivas ou ameaçadoras</li>
                <li>se comportam de forma imprópria durante encontros</li>
                <li>criam perfis falsos ou enviam spam</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Proteja sua conta</h3>
              <p>
                Use uma senha forte. Nunca compartilhe códigos de login.
                O LUMMEN jamais pedirá sua senha por e-mail.
              </p>
            </div>

          </div>
        </div>

        {/* ----- ENCONTROS PESSOALMENTE ----- */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#ff4fd8]">Conhecendo alguém pessoalmente</h2>

          <div className="space-y-10 text-gray-300">

            <div>
              <h3 className="text-xl font-semibold mb-2">Não tenha pressa</h3>
              <p>
                Conheça a outra pessoa com calma. Use videochamadas antes de um encontro presencial.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Encontrem-se em público</h3>
              <p>
                Escolha locais movimentados. Nunca vá direto para casas ou locais privados no primeiro encontro.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Avise alguém de confiança</h3>
              <p>
                Informe amigos sobre onde estará e deixe seu celular carregado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Controle seu transporte</h3>
              <p>
                Chegue e saia por conta própria para poder ir embora quando quiser.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Conheça seus limites</h3>
              <p>
                Drogas e álcool podem prejudicar sua percepção. Se sentir pressão para beber ou usar algo, encerre o encontro.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Não deixe seus itens pessoais sozinhos</h3>
              <p>
                Nunca perca sua bebida de vista. Substâncias usadas para abusos podem ser indetectáveis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Se sentir desconforto, vá embora</h3>
              <p>
                Sua segurança vem primeiro. Se algo parecer errado, confie em sua intuição.
              </p>
            </div>

          </div>
        </div>

        {/* ----- LGBTQ+ VIAGENS ----- */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#4cc9ff]">Viagem LGBTQ+</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Em alguns países, identidades LGBTQ+ podem não ter proteção legal.
            Viaje com atenção, pesquise leis locais e considere desativar informações sensíveis do perfil.
          </p>

          <p className="text-gray-400 text-sm">
            Alguns governos usam apps de encontros como armadilhas.  
            Proteja sua identidade e avalie riscos antes de se conectar localmente.
          </p>
        </div>

        {/* ----- SAÚDE SEXUAL ----- */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[#9f45ff]">Saúde sexual e consentimento</h2>

          <div className="space-y-10 text-gray-300">

            <div>
              <h3 className="text-xl font-semibold mb-2">Proteja-se</h3>
              <p>
                Preservativos reduzem riscos, mas nem todas as DSTs são visíveis. Testes regulares são essenciais.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Converse abertamente</h3>
              <p>
                Fale sobre saúde sexual antes de qualquer envolvimento físico.  
                Comunicação clara = segurança para ambos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Consentimento sempre</h3>
              <p>
                Consentimento deve ser contínuo, claro e pode ser retirado a qualquer momento.  
                Nunca avance se a outra pessoa estiver desconfortável ou alterada.
              </p>
            </div>

          </div>
        </div>

        {/* FINAL */}
        <div className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-10">
          <p>
            Mesmo seguindo estas dicas, nenhum método é perfeito.  
            Se algo negativo acontecer, não é sua culpa — e ajuda está disponível.  
            Em emergências, contate autoridades locais imediatamente.
          </p>
        </div>
      </section>
    </main>
  );
}
