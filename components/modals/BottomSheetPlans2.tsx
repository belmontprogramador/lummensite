"use client";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function BottomSheetPlans2({ visible, onClose }: Props) {
  const router = useRouter();

  return (
    <Dialog open={visible} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <DialogContent
        forceMount
        className="fixed bottom-0 left-0 right-0 border-none p-0 bg-white rounded-t-2xl shadow-xl"
      >
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="p-6"
            >
              {/* Botão de fechar */}
              <div className="flex justify-end mb-2">
                <button
                  onClick={onClose}
                  className="text-2xl leading-none px-2 hover:opacity-70"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2">
                Upgrade to Premium
              </h2>

              <p className="text-center text-gray-600 mb-6">
                Unlock all premium preferences & boost your profile!
              </p>

              <Button
                className="w-full text-lg py-6"
                onClick={() => {
                  onClose();
                  router.push("/plans");
                }}
              >
                See Plans
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
