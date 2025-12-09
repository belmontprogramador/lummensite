"use client";

import { useState, useContext, useEffect } from "react";
import { UsersAPI } from "@/service/users";
import { AuthContext } from "@/context/AuthContext";

// shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PerfilEditar() {
  const { user, updateUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPreview(`https://botgrupo.lummen-app.com${user.photo}`);
    }
  }, [user]);

  // =====================
  // SELECT IMAGE — WEB
  // =====================
  function selectImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setPhotoFile(file);
    setPreview(URL.createObjectURL(file));
  }

  // =====================
  // SAVE PROFILE
  // =====================
  async function handleSave() {
    if (!user) return;

    try {
      setSaving(true);

      const form = new FormData();
      form.append("name", name);

      if (photoFile) {
        form.append("photo", photoFile);
      }

      const res = await UsersAPI.update(user.id, form);

      await updateUser(res.data);

      alert("Perfil atualizado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar perfil!");
    } finally {
      setSaving(false);
    }
  }

  if (!user) {
    return <p className="text-center py-10">Carregando...</p>;
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Editar Perfil</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* FOTO */}
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="foto do usuário"
              className="w-32 h-32 rounded-full object-cover shadow-md border"
            />

            <label className="mt-4 text-blue-600 cursor-pointer font-medium">
              Trocar foto
              <input
                type="file"
                accept="image/*"
                onChange={selectImage}
                className="hidden"
              />
            </label>
          </div>

          {/* NOME */}
          <div>
            <label className="font-semibold">Nome</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2"
            />
          </div>

          {/* BOTÃO SALVAR */}
          <Button
            className="w-full py-4 mt-6 text-lg"
            disabled={saving}
            onClick={handleSave}
          >
            {saving ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
