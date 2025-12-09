"use client";

import { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";

import { AuthContext } from "@/context/AuthContext";
import { userProfilesService } from "@/service/userProfilesService";
import { checkAccess } from "@/utils/checkAccess";
import { useAuthGuard } from "@/hooks/useAuthGuard";

// shadcn
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

// componentes internos já convertidos para web
import StatusModal from "@/components/modals/StatusModal";
import ProfileBasic from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/profileBasic";
import ProfilePremium from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/profilePremium";

export default function PerfilCompleto() {
  useAuthGuard();

  const { t } = useTranslation();
  const { user: authUser, refreshUser } = useContext(AuthContext);

  const [form, setForm] = useState<any>({});
  const [enums, setEnums] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Modal
  const [statusVisible, setStatusVisible] = useState(false);
  const [statusTitle, setStatusTitle] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const allowed = authUser?.plan?.allowedRoutes || [];
  const canEditFree = allowed.includes("profile_update_free");
  const canEditPremium = allowed.includes("profile_update_premium");

  useEffect(() => {
    (async () => {
      try {
        await refreshUser();

        const [{ data: enumsRes }, { data: profileRes }] = await Promise.all([
          userProfilesService.getProfileEnums(),
          userProfilesService.getMyProfile(),
        ]);

        setEnums(enumsRes || {});
        setForm(profileRes || {});
      } catch (e) {
        console.log("❌ Erro ao carregar dados:", e);
        setStatusTitle(t("common.error"));
        setStatusMessage(t("profile.loadError"));
        setStatusVisible(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleToggle = (field: string, value: string) => {
    setForm((prev: any) => {
      const list: string[] = prev[field] || [];
      return list.includes(value)
        ? { ...prev, [field]: list.filter((v) => v !== value) }
        : { ...prev, [field]: [...list, value] };
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      if (canEditPremium) {
        await userProfilesService.updateProfilePremium(form);
      } else if (canEditFree) {
        await userProfilesService.updateProfileFree(form);
      } else {
        setStatusTitle(t("common.accessDenied"));
        setStatusMessage(t("profile.accessDenied"));
        setStatusVisible(true);
        return;
      }

      setStatusTitle(t("common.success"));
      setStatusMessage(t("profile.savedSuccess"));
      setStatusVisible(true);
    } catch (e) {
      console.log("❌ Erro ao salvar perfil:", e);
      setStatusTitle(t("common.error"));
      setStatusMessage(t("profile.saveError"));
      setStatusVisible(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
        <p className="mt-4 text-muted-foreground">{t("common.loading")}</p>
      </div>
    );
  }

  const blocked =
    !canEditFree && !canEditPremium
      ? checkAccess(authUser, "profile_update_free")
      : null;

  if (blocked) return blocked;

  return (
    <div className="w-full relative pb-24">

      {/* Conteúdo scrolável */}
      <ScrollArea className="h-[calc(100vh-80px)] px-4">
        
        {canEditFree && (
          <ProfileBasic
            enums={enums}
            form={form}
            onChange={handleChange}
            onToggle={handleToggle}
          />
        )}

        {canEditPremium && (
          <ProfilePremium
            enums={enums}
            form={form}
            onChange={handleChange}
            onToggle={handleToggle}
          />
        )}

      </ScrollArea>

      {/* Botão fixo de salvar */}
      {(canEditFree || canEditPremium) && (
        <div className="fixed bottom-4 left-4 right-4">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-4 text-lg font-semibold"
          >
            {saving ? t("common.saving") : t("common.saveAll")}
          </Button>
        </div>
      )}

      <StatusModal
        visible={statusVisible}
        title={statusTitle}
        message={statusMessage}
        onClose={() => setStatusVisible(false)}
      />
    </div>
  );
}
