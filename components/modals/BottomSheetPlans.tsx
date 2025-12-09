"use client";

import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function BottomSheetPlans({ visible, onClose }: Props) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Dialog open={visible} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <DialogContent
        className="
          fixed bottom-0 left-0 right-0
          bg-white rounded-t-2xl
          p-6
          max-h-[90vh]
          animate-in slide-in-from-bottom duration-300
        "
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">
          {t("plans.upgradeTitle")}
        </h2>

        <p className="text-center text-gray-600 mb-6">
          {t("plans.upgradeSubtitle")}
        </p>

        <Button
          className="w-full py-6 text-lg font-semibold bg-purple-600 hover:bg-purple-700"
          onClick={() => {
            onClose();
            router.push("/plans");
          }}
        >
          {t("plans.seePlans")}
        </Button>

        <div className="h-4" />
      </DialogContent>
    </Dialog>
  );
}
