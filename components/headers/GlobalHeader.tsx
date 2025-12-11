"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/inicio");
    }
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
      
      {/* Botão de voltar */}
      <button onClick={goBack} className="p-2 hover:bg-gray-100 rounded-full">
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Centro: duas imagens */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo2.png"
          alt="Logo 2"
          width={32}
          height={32}
          className="object-contain"
        />
        <Image
          src="/logo1.png"
          alt="Logo 1"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>

      {/* Espaço vazio para equilibrar */}
      <div className="w-6" />
    </div>
  );
}
