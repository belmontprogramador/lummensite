"use client";

import { useEffect, useState, useContext } from "react";
import { PreferencesAPI } from "@/service/preferences";
import { AuthContext } from "@/context/AuthContext";
import { checkAccess } from "@/utils/checkAccess";

import BlocksAllPremium from "@/components/componentsPerfil/compenentsPreferences/componentsPremium/BlocksAllPremium";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function PreferencesPremiumScreen() {
  const { user, refreshUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>(null);
  const [prefs, setPrefs] = useState<any>({});
  const [modalOpen, setModalOpen] = useState(false);

  // Atualiza user ao entrar
  useEffect(() => {
    refreshUser();
  }, []);

  // Carregar opções + prefs
  useEffect(() => {
    (async () => {
      try {
        const [optsRes, prefRes] = await Promise.all([
          PreferencesAPI.getOptions(),
          PreferencesAPI.get(),
        ]);

        setOptions(optsRes.data);
        setPrefs(prefRes.data);
      } catch (err) {
        console.error("Erro ao carregar premium prefs:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Bloqueio por plano
  if (loading) return <div className="text-center py-10">Carregando...</div>;

  const blocked = checkAccess(user, "preferences_update_premium");
  if (blocked) return blocked;

  // Toggle para arrays
  const toggle = (field: string, value: string) => {
    setPrefs((prev: any) => {
      const list = prev[field] || [];
      const updated = list.includes(value)
        ? list.filter((v: string) => v !== value)
        : [...list, value];

      return { ...prev, [field]: updated };
    });
  };

  // Salvar
  const save = async () => {
    const result = await PreferencesAPI.update({
      mode: "premium",
      ...prefs,
    });

    if (!result.ok) {
      alert("Erro ao salvar preferências premium.");
      return;
    }

    setModalOpen(true);
  };

  return (
    <>
      {/* MODAL SHADCN */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Preferências salvas!</DialogTitle>
            <DialogDescription>
              Suas preferências premium foram atualizadas com sucesso.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => setModalOpen(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* CONTEÚDO */}
      <div className="w-full max-w-3xl mx-auto p-6 pb-32">
        <h2 className="text-3xl font-bold mb-6">Premium Preferences</h2>

        {/* Todos os blocos premium */}
        <BlocksAllPremium options={options} prefs={prefs} toggle={toggle} />

        {/* Botão salvar */}
        <Button
          className="w-full mt-10 py-6 text-lg font-semibold"
          onClick={save}
        >
          Save Premium Preferences
        </Button>
      </div>
    </>
  );
}
