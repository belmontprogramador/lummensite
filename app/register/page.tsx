"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import RegisterLocationPicker from "@/components/register/RegisterLocationPicker";

import { UsersAPI } from "@/service/users";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const [photo, setPhoto] = useState<File | null>(null);

  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLocationChange(field: string, value: any) {
    setLocation((prev) => ({ ...prev, [field]: value }));
  }

  function normalizeBirthday(date: string) {
    if (!date) return undefined;

    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(date)) {
      setError("Formato de data inválido. Use YYYY-MM-DD.");
      return null;
    }

    try {
      return new Date(date + "T00:00:00.000Z").toISOString();
    } catch {
      setError("Data inválida.");
      return null;
    }
  }

  async function handlePhotoUpload(e: any) {
    const file = e.target.files?.[0];
    if (file) setPhoto(file);
  }

  async function handleRegister() {
    setError("");

    if (!name || !email || !password || !photo) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    if (!location.city || !location.state || !location.country) {
      setError("Selecione sua cidade.");
      return;
    }

    const isoBirthday = normalizeBirthday(birthday);
    if (isoBirthday === null) return;

    setLoading(true);

    try {
      await UsersAPI.create({
        name,
        email,
        password,
        birthday: isoBirthday,
        city: location.city,
        state: location.state,
        country: location.country,
        photo, // agora é File
      });

      router.replace("/");
    } catch (err: any) {
      setError("Erro ao criar conta. Verifique os dados.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#050509] text-white">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9f45ff] to-[#4cc9ff] text-transparent bg-clip-text">
          Criar Conta
        </h1>

        <div className="space-y-4">
          {/* NAME */}
          <div>
            <Label>Nome</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          {/* EMAIL */}
          <div>
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemplo.com"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <Label>Senha</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          {/* LOCATION */}
          <RegisterLocationPicker form={location} onChange={handleLocationChange} />

          {/* BIRTHDAY */}
          <div>
            <Label>Data de nascimento</Label>
            <Input
              placeholder="YYYY-MM-DD"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>

          {/* PHOTO */}
          <div>
            <Label>Foto de perfil</Label>
            <Input type="file" accept="image/*" onChange={handlePhotoUpload} className="cursor-pointer" />

            {photo && (
              <Image
                src={URL.createObjectURL(photo)}
                alt="preview"
                width={100}
                height={100}
                className="rounded-full mt-4 mx-auto"
              />
            )}
          </div>

          {/* ERROR */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#9f45ff] to-[#ff4fd8] text-white mt-4"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Criar Conta"}
          </Button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Já possui conta?{" "}
            <span onClick={() => router.push("/login")} className="text-[#9f45ff] cursor-pointer">
              Entrar
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
