// src/components/componentsPerfil/componentsProfile/ComponentsPremium/perfil-editar-profile.tsx

"use client";

import ProfileFull from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/profileFull";

// Se você quiser usar breadcrumbs ou header ShadCN, podemos adicionar depois.

export default function PerfilEditarProfile() {
  return (
    <div className="w-full h-full p-4">
      {/* Título da página */}
      <h1 className="text-2xl font-bold mb-6">
        Profile — Preferred
      </h1>

      {/* Componente principal do perfil */}
      <ProfileFull />
    </div>
  );
}
