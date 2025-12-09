"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

type Props = {
  visible: boolean;
  title?: string;
  message?: string;
  buttonText?: string;
  onClose: () => void;
};

export default function StatusModal({
  visible,
  title,
  message,
  buttonText,
  onClose,
}: Props) {
  const { t } = useTranslation();

  return (
    <Dialog open={visible} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            {title || t("modal.successTitle")}
          </DialogTitle>

          <DialogDescription className="text-center text-base text-gray-600 mt-2">
            {message || t("modal.successMessage")}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center mt-6">
          <Button className="px-8 py-2" onClick={onClose}>
            {buttonText || t("modal.ok")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
