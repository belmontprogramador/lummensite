// src/utils/checkAccess.tsx

"use client";

import { useRouter } from "next/navigation";

export function checkAccess(user: any, requiredTag: string) {
  const router = useRouter();

  const allowed = user?.plan?.allowedRoutes?.includes(requiredTag);

  // Se o usuário tem acesso, não renderiza bloqueio
  if (allowed) return null;

  // Tela de bloqueio (versão React Web)
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        padding: 20,
        minHeight: "70vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        Função Bloqueada
      </h1>

      <p style={{ fontSize: 16, color: "#666", marginBottom: 20 }}>
        Seu plano atual não permite acessar esta função.
      </p>

      <button
        onClick={() => router.push("/plans")}
        style={{
          backgroundColor: "#7b2cff",
          padding: "14px 25px",
          borderRadius: 10,
          color: "#fff",
          fontSize: 17,
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
      >
        Ver Planos
      </button>
    </div>
  );
}
