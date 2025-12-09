"use client";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";

import { PreferencesAPI } from "@/service/preferences";
import { AuthContext } from "@/context/AuthContext";
import { checkAccess } from "@/utils/checkAccess";

// Components (corrigidos)
import AgeRange from "@/components/componentsPerfil/compenentsPreferences/componentspFree/AgeRange";
import DistanceSlider from "@/components/componentsPerfil/compenentsPreferences/componentspFree/DistanceSlider";
import GenderSelector from "@/components/componentsPerfil/compenentsPreferences/componentspFree/GenderSelector";
import OrientationSelector from "@/components/componentsPerfil/compenentsPreferences/componentspFree/OrientationSelector";

import BlockRelationshipTypes from "@/components/componentsPerfil/compenentsPreferences/componentsPremium/BlockRelationshipTypes";
import BlockIntentions from "@/components/componentsPerfil/compenentsPreferences/componentsPremium/BlockIntentions";

// Shadcn Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

/* -------------------------------------------------------
   🚀 TIPAGEM CORRETA DO ESTADO DE PREFERÊNCIAS
-------------------------------------------------------- */
type PreferencesType = {
  maxDistanceKm: number;
  ageMin: number;
  ageMax: number;
  preferredGenders: string[];
  preferredOrientations: string[];
  preferredRelationshipTypes: string[];
  preferredIntentions: string[];
};

export default function PreferencesFreeScreen() {
  const router = useRouter();
  const { user, refreshUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<any>(null);

  const [showConfirm, setShowConfirm] = useState(false);

  /* -------------------------------------------------------
     🔥 ESTADO TIPADO CORRETAMENTE
  -------------------------------------------------------- */
  const [prefs, setPrefs] = useState<PreferencesType>({
    maxDistanceKm: 50,
    ageMin: 18,
    ageMax: 99,
    preferredGenders: [],
    preferredOrientations: [],
    preferredRelationshipTypes: [],
    preferredIntentions: [],
  });

  /* -------------------------------------------------------
     🔄 CARREGAR USUÁRIO AO ENTRAR
  -------------------------------------------------------- */
  useEffect(() => {
    refreshUser();
  }, []);

  /* -------------------------------------------------------
     📡 CARREGAR OPÇÕES + PREFERÊNCIAS
  -------------------------------------------------------- */
  useEffect(() => {
    (async () => {
      try {
        const [optRes, prefRes] = await Promise.all([
          PreferencesAPI.getOptions(),
          PreferencesAPI.get(),
        ]);

        setOptions(optRes.data);
        setPrefs({
          ...prefs,
          ...prefRes.data,
        });
      } catch (err) {
        console.error("Erro ao carregar preferências:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* -------------------------------------------------------
     💾 SALVAR PREFERÊNCIAS
  -------------------------------------------------------- */
  async function save() {
    const result = await PreferencesAPI.update({
      mode: "free",
      ...prefs,
    });

    if (!result.ok) {
      if (result.error === "premium_required") {
        alert("Recurso exclusivo para assinantes Premium.");
        return;
      }

      alert("Erro ao salvar preferências.");
      return;
    }

    alert("Preferências salvas com sucesso!");
  }

  /* -------------------------------------------------------
     LOADING
  -------------------------------------------------------- */
  if (loading) {
    return <div className="text-center py-10">Carregando...</div>;
  }

  /* -------------------------------------------------------
     🔐 BLOQUEIO POR PLANO
  -------------------------------------------------------- */
  const blockScreen = checkAccess(user, "preferences_update_free");
  if (blockScreen) return blockScreen;

  /* -------------------------------------------------------
     🎨 TELA FINAL
  -------------------------------------------------------- */
  return (
    <div className="w-full max-w-3xl mx-auto p-6 pb-32">

      {/* MODAL SHADCN */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Salvar Preferências?</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja salvar suas configurações?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirm(false)}>
              Cancelar
            </Button>

            <Button
              onClick={() => {
                setShowConfirm(false);
                save();
              }}
            >
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* TÍTULO */}
      <h2 className="text-3xl font-bold mb-6">Basic Preferences</h2>

      {/* DISTÂNCIA */}
      <DistanceSlider
        value={prefs.maxDistanceKm}
        onChange={(v) => setPrefs({ ...prefs, maxDistanceKm: v })}
      />

      {/* RANGE DE IDADE */}
      <AgeRange
        minAge={prefs.ageMin}
        maxAge={prefs.ageMax}
        onChange={(min, max) =>
          setPrefs({ ...prefs, ageMin: min, ageMax: max })
        }
      />

      {/* GÊNERO */}
      {options?.Gender && (
        <GenderSelector
          options={options.Gender}
          selected={prefs.preferredGenders}
          onChange={(values) =>
            setPrefs({ ...prefs, preferredGenders: values })
          }
        />
      )}

      {/* ORIENTAÇÃO */}
      {options?.SexualOrientation && (
        <OrientationSelector
          options={options.SexualOrientation}
          selected={prefs.preferredOrientations}
          onChange={(values) =>
            setPrefs({ ...prefs, preferredOrientations: values })
          }
        />
      )}

      {/* INTENÇÕES */}
      {options?.Intention && (
        <BlockIntentions
          options={options.Intention}
          prefs={prefs.preferredIntentions}
          onToggle={(value: string) => {
            const updated = prefs.preferredIntentions.includes(value)
              ? prefs.preferredIntentions.filter((v) => v !== value)
              : [...prefs.preferredIntentions, value];

            setPrefs({ ...prefs, preferredIntentions: updated });
          }}
        />
      )}

      {/* RELACIONAMENTO */}
      {options?.RelationshipType && (
        <BlockRelationshipTypes
          options={options.RelationshipType}
          prefs={prefs.preferredRelationshipTypes}
          onToggle={(value: string) => {
            const updated = prefs.preferredRelationshipTypes.includes(value)
              ? prefs.preferredRelationshipTypes.filter((v) => v !== value)
              : [...prefs.preferredRelationshipTypes, value];

            setPrefs({ ...prefs, preferredRelationshipTypes: updated });
          }}
        />
      )}

      {/* BOTÃO SALVAR */}
      <Button
        className="w-full mt-10 py-6 text-lg font-semibold"
        onClick={() => setShowConfirm(true)}
      >
        Save Preferences
      </Button>
    </div>
  );
}
