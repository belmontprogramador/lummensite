"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Facebook, Music4 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-gray-300 pt-16 pb-10 mt-20 border-t border-white/10">
      
      {/* GRID SUPERIOR */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Jurídico */}
        <div>
          <h3 className="text-white font-bold mb-4">Jurídico</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacidade" className="hover:text-white">Privacidade</Link></li>
            <li><Link href="/privacidade-saude" className="hover:text-white">Privacidade de Dados de Saúde</Link></li>
            <li><Link href="/termos" className="hover:text-white">Termos</Link></li>
            <li><Link href="/cookies" className="hover:text-white">Política de Cookies</Link></li>
            <li><Link href="/propriedade" className="hover:text-white">Propriedade intelectual</Link></li>
            <li><Link href="/acessibilidade" className="hover:text-white">Acessibilidade</Link></li>
          </ul>
        </div>

        {/* Empregos */}
        <div>
          <h3 className="text-white font-bold mb-4">Empregos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/jobs" className="hover:text-white">Portal de empregos</Link></li>
            <li><Link href="/tech-blog" className="hover:text-white">Blog de tecnologia</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-bold mb-4">Redes sociais</h3>

          <div className="flex items-center gap-4">
            <Link href="#"><Instagram className="w-6 h-6 hover:text-white" /></Link>
            <Link href="#"><Music4 className="w-6 h-6 hover:text-white" /></Link>
            <Link href="#"><Youtube className="w-6 h-6 hover:text-white" /></Link>
            <Link href="#"><Twitter className="w-6 h-6 hover:text-white" /></Link>
            <Link href="#"><Facebook className="w-6 h-6 hover:text-white" /></Link>
          </div>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="text-white font-bold mb-4">Suporte</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-white">Perguntas frequentes</Link></li>
            <li><Link href="/destinos" className="hover:text-white">Destinos</Link></li>
            <li><Link href="/imprensa" className="hover:text-white">Assessoria de Imprensa</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            <li><Link href="/codigo" className="hover:text-white">Código promocional</Link></li>
          </ul>
        </div>

      </div>

      {/* Download section — AGORA APENAS UMA IMAGEM */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h3 className="font-bold mb-4">Baixe o aplicativo!</h3>

        <div className="flex items-center gap-6">
          <Image 
            src="/icons-store.png"
            alt="App Store e Google Play"
            width={260}
            height={80}
            className="opacity-90 hover:opacity-100 transition"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between text-gray-400">
        
        <div className="flex gap-4 flex-wrap mb-4 md:mb-0">
          <Link href="/faq" className="hover:text-white">Perguntas frequentes</Link>
          <span>|</span>
          <Link href="/seguranca" className="hover:text-white">Dicas de segurança</Link>
          <span>|</span>
          <Link href="/termos" className="hover:text-white">Termos</Link>
          <span>|</span>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
          <span>|</span>
          <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
        </div>

        <p className="text-gray-500">
          © {new Date().getFullYear()} LUMMEN, Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
}
