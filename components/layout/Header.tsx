"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-[#0a0a0f] border-b border-white/10 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-lummen.png"
            width={34}
            height={34}
            alt="LUMMEN Logo"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#9f45ff] to-[#ff4fd8] text-transparent bg-clip-text">
            LUMMEN
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
          <Link href="/plans" className="hover:text-white transition">
            Produtos
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Saiba mais
          </Link>
          <Link href="/safety" className="hover:text-white transition">
            Segurança
          </Link>
          <Link href="/download" className="hover:text-white transition">
            Download
          </Link>
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="px-6 py-2 rounded-full font-semibold text-black bg-gradient-to-r from-[#9f45ff] to-[#ff4fd8] hover:opacity-90 transition"
          >
            Registrar
          </Link>
        </div>
      </div>
    </header>
  );
}
