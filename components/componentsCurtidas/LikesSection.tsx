"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { checkAccess } from "@/utils/checkAccess";

import LikesRecebidos from "./LikesRecebidos";
import LikesEnviados from "./LikesEnviados";
import { useTranslation } from "react-i18next";

export default function LikesSection() {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);

  // Verifica permissão básica
  const blocked = checkAccess(user, "like_received");

  useEffect(() => {
    console.log(t("likesSection.logs.userPlan"), user?.plan);
  }, [user]);

  // Se bloqueado → retorna tela de bloqueio
  if (blocked) {
    console.log(t("likesSection.logs.blocked"));
    return blocked;
  }

  // Pode ver curtidas enviadas?
  const canSeeSent =
    user?.isPaid === true ||
    user?.plan?.allowedRoutes?.includes("like_sent");

  useEffect(() => {
    console.log(t("likesSection.logs.canSeeSent"), canSeeSent);
  }, [canSeeSent]);

  return (
    <div
      className="flex flex-col space-y-8"
      aria-label={t("likesSection.container") as string}
    >
      {/* Curtidas recebidas */}
      <LikesRecebidos />

      {/* Curtidas enviadas */}
      {canSeeSent && <LikesEnviados />}
    </div>
  );
}
