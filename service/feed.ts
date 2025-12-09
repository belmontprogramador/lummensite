// src/service/feed.ts
import api from "./api";

// Detecta o idioma do navegador no Next.js (client-side)
let deviceLocaleRaw = "en";

if (typeof window !== "undefined") {
  const navLang = navigator.language || navigator.languages?.[0] || "en";
  deviceLocaleRaw = navLang.split("-")[0]; // transforma "pt-BR" em "pt"
}

const deviceLocale =
  deviceLocaleRaw === "pt"
    ? "pt"
    : deviceLocaleRaw === "es"
    ? "es"
    : "en";

export const FeedAPI = {
  /**
   * Busca o feed com cursor
   * cursor = null → primeira página
   * cursor = number → próxima página
   */
  list: async (cursor: number | null = null, limit = 20, userIsPaid = false) => {
    return api.get(userIsPaid ? "/feed/premium" : "/feed/free", {
      params: {
        cursor: cursor ?? undefined,
        limit,
      },
      headers: {
        "x-locale": deviceLocale,
      },
    });
  },

  /**
   * Busca 1 usuário do feed
   */
  getOne: async (id: string, userIsPaid = false) => {
    return api.get(
      userIsPaid ? `/feed/premium/${id}` : `/feed/free/${id}`,
      {
        headers: {
          "x-locale": deviceLocale,
        },
      }
    );
  },
};
