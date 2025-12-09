// src/service/userProfilesService.ts
import api from "./api";

// Detecta idioma do navegador (Next.js Client Side)
let deviceLocaleRaw = "en";

if (typeof window !== "undefined") {
  const lang = navigator.language || navigator.languages?.[0] || "en";
  deviceLocaleRaw = lang.split("-")[0]; // pt-BR → pt
}

const deviceLocale =
  deviceLocaleRaw === "pt"
    ? "pt"
    : deviceLocaleRaw === "es"
    ? "es"
    : "en";

export const userProfilesService = {
  // ✅ GET PROFILE COM LOCALE
  getMyProfile: () =>
    api.get("/user-profiles/me", {
      headers: { "x-locale": deviceLocale },
    }),

  // ✅ UPDATE FREE COM LOCALE
  updateProfileFree: async (data: any) => {
    try {
      const res = await api.put("/user-profiles/free", data, {
        headers: { "x-locale": deviceLocale },
      });
      return { ok: true, data: res.data };
    } catch (err: any) {
      if (err.response?.status === 403) {
        return { ok: false, error: "unauthorized" };
      }
      return { ok: false, error: "unknown" };
    }
  },

  // ✅ UPDATE PREMIUM COM LOCALE
  updateProfilePremium: async (data: any) => {
    try {
      const res = await api.put("/user-profiles/premium", data, {
        headers: { "x-locale": deviceLocale },
      });
      return { ok: true, data: res.data };
    } catch (err: any) {
      if (err.response?.status === 403) {
        return { ok: false, error: "unauthorized" };
      }
      return { ok: false, error: "unknown" };
    }
  },

  // ✅ ENUMS TRADUZIDOS PELO LOCALE
  getProfileEnums: () =>
    api.get("/user-profiles/enums", {
      headers: { "x-locale": deviceLocale },
    }),
};
