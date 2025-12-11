"use client";

import { useEffect, useState } from "react";
import { LikesAPI } from "@/service/likes";
import LikeCard from "@/components/componentsCurtidas/LikeCard";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

export default function LikesEnviados() {
  const router = useRouter();
  const { t } = useTranslation();

  const [likes, setLikes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setErrorKey(null);

      const res = await LikesAPI.getSent();
      setLikes(res || []);
    } catch (err) {
      console.log(t("likesSent.logs.loadError"), err);
      setErrorKey("likesSent.errors.load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // LOADING
  if (loading) {
    return (
      <div className="flex flex-col items-center pt-10 space-y-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <p className="text-sm text-muted-foreground">{t("likesSent.loading")}</p>
      </div>
    );
  }

  // ERRO
  if (errorKey) {
    return (
      <div className="text-center p-5">
        <p className="text-red-500">{t(errorKey)}</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <p className="text-2xl font-bold mb-5">{t("likesSent.title")}</p>

      {likes.length === 0 ? (
        <p className="text-base text-muted-foreground">
          {t("likesSent.empty")}
        </p>
      ) : (
        <div className="space-y-4">
          {likes.map((like: any) => (
            <LikeCard
              key={like.id}
              type="sent"
              user={like.liked}
              onClick={() => router.push(`/perfilUsuario/${like.liked.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
