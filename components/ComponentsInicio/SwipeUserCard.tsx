"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://botgrupo.lummen-app.com";

export default function SwipeUserCard({ user, onSkip }: any) {
  const { t } = useTranslation();

  // -------------------------------------
  // Fotos do usuário
  // -------------------------------------
  const allPhotos = useMemo(() => {
    const arr: string[] = [];

    if (user.photo) arr.push(`${BASE_URL}${user.photo}`);

    if (user.photos?.length > 0) {
      arr.push(...user.photos.map((p: any) => `${BASE_URL}${p.url}`));
    }

    return arr.length > 0
      ? arr
      : ["https://via.placeholder.com/400x400.png?text=No+Photo"];
  }, [user]);

  const [photoIndex, setPhotoIndex] = useState(0);

  function nextPhoto() {
    setPhotoIndex((prev) => (prev + 1) % allPhotos.length);
  }

  // -------------------------------------
  // Swipe usando Framer Motion
  // -------------------------------------
  const x = useMotionValue(0);
  const controls = useAnimation();

  async function handleDragEnd(_: any, info: any) {
    const offsetX = info.offset.x;

    // SWIPE LEFT → skip
    if (offsetX < -120) {
      console.log("⏭ SKIP pelo swipe →", user.id);
      onSkip?.(user.id);

      await controls.start({ x: -500, opacity: 0, transition: { duration: 0.2 } });

      // Reset para próxima animação
      controls.set({ x: 0, opacity: 1 });
      return;
    }

    // Volta para posição original
    controls.start({ x: 0, transition: { type: "spring", stiffness: 300 } });
  }

  // -------------------------------------
  // Idade + cidade
  // -------------------------------------
  const age = useMemo(() => {
    if (!user.profile?.birthday) return "";
    const birth = new Date(user.profile.birthday);
    const now = new Date();
    let a = now.getFullYear() - birth.getFullYear();

    if (
      now.getMonth() < birth.getMonth() ||
      (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())
    ) {
      a--;
    }
    return a;
  }, [user]);

  const city = user.profile?.city || "";

  return (
    <motion.div
      drag="x"
      style={{ x }}
      onDragEnd={handleDragEnd}
      animate={controls}
      className="flex flex-col items-center"
    >
      {/* FOTO */}
      <div className="w-[330px] h-[330px] mb-4 relative rounded-2xl overflow-hidden cursor-pointer shadow-xl bg-gray-300">
        <div onClick={nextPhoto} className="absolute inset-0">
          <Image
            src={allPhotos[photoIndex]}
            alt="user-photo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* NOME + IDADE */}
      <p className="text-3xl font-bold text-center">
        {user.name}
        {age ? `, ${age} ${t("swipeUserCard.years")}` : ""}
      </p>

      {city !== "" && (
        <p className="text-lg text-gray-600 mt-1">{city}</p>
      )}
    </motion.div>
  );
}
