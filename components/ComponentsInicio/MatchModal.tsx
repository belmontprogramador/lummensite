"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MatchModal({ visible, user1, user2, onClose }: any) {
  const { t } = useTranslation();
  const router = useRouter();

  const user1Photo = user1?.photo
    ? `https://botgrupo.lummen-app.com${user1.photo}`
    : "/placeholder.png";

  const user2Photo = user2?.photo
    ? `https://botgrupo.lummen-app.com${user2.photo}`
    : "/placeholder.png";

  return (
    <Dialog open={visible} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/70 text-white backdrop-blur-xl shadow-2xl">

        {/* 🔥 CÍRCULOS NEON */}
        <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl" />

        <DialogHeader className="relative z-10 text-center">
          <DialogTitle className="text-4xl font-bold drop-shadow-lg text-cyan-300">
            {t("matchModal.title")}
          </DialogTitle>
        </DialogHeader>

        {/* FOTOS */}
        <div className="relative z-10 mt-6 flex items-center justify-center gap-6">
          <div className="rounded-full border-4 border-fuchsia-500 overflow-hidden shadow-xl shadow-fuchsia-500/50">
            <Image
              src={user1Photo}
              alt={t("matchModal.user1Photo") as string}
              width={110}
              height={110}
              className="object-cover"
            />
          </div>

          <div className="rounded-full border-4 border-cyan-400 overflow-hidden shadow-xl shadow-cyan-400/50">
            <Image
              src={user2Photo}
              alt={t("matchModal.user2Photo") as string}
              width={110}
              height={110}
              className="object-cover"
            />
          </div>
        </div>

        {/* TEXTO */}
        <p className="relative z-10 mt-6 text-center text-lg text-white/90">
          {t("matchModal.couple", {
            user1: user1?.name,
            user2: user2?.name,
          })}
        </p>

        {/* BOTÕES */}
        <DialogFooter className="relative z-10 mt-6 flex flex-col items-center gap-3">

          {/* Ir para o Chat */}
          <Button
            className="w-48 rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/40 hover:bg-pink-600"
            onClick={() => {
              onClose();
              router.push("/chat");
            }}
          >
            {t("matchModal.goToChat")}
          </Button>

          {/* Continuar navegando */}
          <button
            onClick={onClose}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            {t("matchModal.continue")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
