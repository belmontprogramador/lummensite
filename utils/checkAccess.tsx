// src/utils/checkAccess.tsx

// ❌ Remova "use client" DAQUI — este arquivo precisa ser híbrido
// NÃO coloque hooks aqui no topo

import { useRouter } from "next/navigation";

// -----------------------------------------------------
// 🚀 Componente interno que usa hook normalmente
// -----------------------------------------------------
export function CheckAccessBlockScreen() {
  "use client"; // ← aqui sim pode usar hook

  const router = useRouter();

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

// -----------------------------------------------------
// 🚀 Função checkAccess (mantida exatamente como NO RN)
// Agora sem hook — 100% segura para Next.js
// -----------------------------------------------------
export function checkAccess(user: any, requiredTag: string) {
  const allowed = user?.plan?.allowedRoutes?.includes(requiredTag);

  if (allowed) return null;

  // retorna JSX normalmente, igual RN
  return <CheckAccessBlockScreen />;
}
