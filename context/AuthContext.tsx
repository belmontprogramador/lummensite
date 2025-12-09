"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UsersAPI } from "@/service/users";
import { User } from "@/types/user";
import { LoginResponse } from "@/types/auth";

export interface AuthContextType {
  user: User | null;
  loading: boolean;

  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;

  refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ---------------------------
  // RESTORE SESSION
  // ---------------------------
  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    const token = localStorage.getItem("@token");
    const userData = localStorage.getItem("@user");

    if (token && userData) {
      setUser(JSON.parse(userData));
      router.replace("/aereashow"); // mesma rota que você usava
    }

    setLoading(false);
  }

  // ---------------------------
  // ⭐ REFRESH USER (importante)
  // ---------------------------
  async function refreshUser() {
    try {
      const res = await UsersAPI.me(); // GET /users/me
      const fresh = res.data;

      setUser(fresh);
      localStorage.setItem("@user", JSON.stringify(fresh));

      console.log("🔄 Usuário atualizado:", fresh.plan?.name);
    } catch (err) {
      console.log("Erro ao atualizar usuário:", err);
    }
  }

  // ---------------------------
  // LOGIN
  // ---------------------------
  async function signIn(email: string, password: string) {
    try {
      setLoading(true);

      const res = await UsersAPI.login(email, password);
      const data: LoginResponse = res.data;

      localStorage.setItem("@token", data.token);
      localStorage.setItem("@user", JSON.stringify(data.user));

      setUser(data.user);

      router.replace("/aereashow");
    } catch {
      throw new Error("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  }

  // ---------------------------
  // LOGOUT
  // ---------------------------
  async function signOut() {
    localStorage.removeItem("@token");
    localStorage.removeItem("@user");
    setUser(null);
    router.replace("/");
  }

  // ---------------------------
  // UPDATE LOCAL USER
  // ---------------------------
  async function updateUser(data: Partial<User>) {
    if (!user) return;

    let updated = { ...user, ...data };

    if (data.photo) {
      updated.photo = data.photo + "?t=" + Date.now();
    }

    setUser(updated);
    localStorage.setItem("@user", JSON.stringify(updated));
  }

  // ---------------------------
  // RETURN
  // ---------------------------
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        updateUser,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
