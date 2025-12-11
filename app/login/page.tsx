"use client";

import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();

  const { signIn, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorKey, setErrorKey] = useState<string | null>(null);

 async function handleLogin() {
  console.log("🚀 handleLogin FOI CHAMADO");
  try {
    setErrorKey(null);
    await signIn(email, password);
  } catch (err) {
    console.log("❌ ERRO NO LOGIN:", err);
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050509] px-4">
      <Card className="w-full max-w-md bg-black/40 backdrop-blur-xl border-white/10 text-white shadow-[0_0_30px_rgba(159,69,255,0.15)]">
        
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-[#9f45ff] to-[#4cc9ff] text-transparent bg-clip-text">
            {t("login.title")}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">{t("login.email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t("login.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <Label htmlFor="password">{t("login.password")}</Label>
            <Input
              id="password"
              type="password"
              placeholder={t("login.password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          {/* Mensagem de erro */}
          {errorKey && (
            <p className="text-red-400 text-sm">{t(errorKey)}</p>
          )}

          {/* Botão login */}
          <Button
            onClick={handleLogin}
            className="w-full py-5 text-lg bg-gradient-to-r from-[#9f45ff] to-[#ff4fd8] hover:opacity-90"
          >
            {loading ? t("login.loading") : t("login.submit")}
          </Button>

          {/* Links extras */}
          <div className="flex flex-col gap-2 text-sm text-center mt-4">
            <button
              onClick={() => router.push("/forgot-password")}
              className="text-[#4cc9ff] hover:text-white transition"
            >
              {t("login.forgotPassword")}
            </button>

            <button
              onClick={() => router.push("/register")}
              className="text-[#ff4fd8] hover:text-white transition"
            >
              {t("login.register")}
            </button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
