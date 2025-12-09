"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://botgrupo.lummen-app.com";

export default function UserCard({ user }: any) {
  const { t } = useTranslation();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  /** ------------------------------------------
   * Fotos (foto principal + galeria)
   * -----------------------------------------*/
  const photos = [
    user.photo ? `${BASE_URL}${user.photo}` : null,
    ...(user.photos?.length
      ? user.photos.map((p: any) => `${BASE_URL}${p.url}`)
      : []),
  ].filter(Boolean) as string[];

  const [index, setIndex] = useState(0);

  const hasPhotos = photos.length > 0;

  function nextPhoto() {
    if (hasPhotos) {
      setIndex((prev) => (prev + 1) % photos.length);
    }
  }

  const photoUrl = hasPhotos
    ? photos[index]
    : "https://via.placeholder.com/400x400.png?text=No+Photo";

  /** ------------------------------------------
   * Nome, idade e cidade
   * -----------------------------------------*/
  const name = user.name || t("userCard.unknownName");

  let age = "";
  if (user.profile?.birthday) {
    const birth = new Date(user.profile.birthday);
    const diff = Date.now() - birth.getTime();
    age = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000)).toString();
  }

  const city = user.profile?.city || t("userCard.unknownCity");

  return (
    <div
      className="px-5"
      style={{ width: screenWidth || "100%" }}
    >
      {/* FOTO */}
      <div
        onClick={nextPhoto}
        className="w-full h-[380px] relative rounded-2xl overflow-hidden bg-gray-200 cursor-pointer shadow-lg"
      >
        <Image
          src={photoUrl}
          alt="user-photo"
          fill
          className="object-cover"
        />
      </div>

      {/* NOME / IDADE / CIDADE */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {name}
          {age ? `, ${age} ${t("userCard.years")}` : ""}
        </h2>

        <p className="text-lg text-gray-600 mt-1">{city}</p>
      </div>
    </div>
  );
}
