"use client";

import { useEffect, useState } from "react";
import { LikesAPI } from "@/service/likes";
import LikeCard from "@/components/componentsCurtidas/LikeCard";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

export default function LikesRecebidos() {
  const { t } = useTranslation();
  const router = useRouter();

  const [likes, setLikes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setErrorKey(null);

      const res = await LikesAPI.received();
      setLikes(res || []);
    } catch (err) {
      console.log(t("likesReceived.logs.loadError"), err);
      setErrorKey("likesReceived.errors.load");
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
        <p className="text-sm text-muted-foreground">
          {t("likesReceived.loading")}
        </p>
      </div>
    );
  }

  // ERROR
  if (errorKey) {
    return (
      <div className="text-center p-5">
        <p className="text-red-500">{t(errorKey)}</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <p className="text-2xl font-bold mb-5">{t("likesReceived.title")}</p>

      {likes.length === 0 ? (
        <p className="text-base text-muted-foreground">
          {t("likesReceived.empty")}
        </p>
      ) : (
        <div className="space-y-4">
          {likes.map((like: any) => (
            <LikeCard
              key={like.id}
              type="received"
              user={like.liker}
              onClick={() => router.push(`/perfilUsuario/${like.liker.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
