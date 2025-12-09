"use client";

import { useEffect, useState } from "react";
import { LikesAPI } from "@/service/likes";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function MatchList() {
  const router = useRouter();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState<any[]>([]);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setErrorKey(null);

      const res = await LikesAPI.matches();
      setMatches(res || []);
    } catch (e) {
      console.log(t("matches.errors.load"), e);
      setErrorKey("matches.errors.load");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // ============================
  // LOADING (Tailwind + Skeleton)
  // ============================
  if (loading) {
    return (
      <div className="flex flex-col items-center pt-10 space-y-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <p className="text-sm text-muted-foreground">{t("matches.loading")}</p>
      </div>
    );
  }

  // ============================
  // ERRO
  // ============================
  if (errorKey) {
    return (
      <div className="text-center p-5">
        <p className="text-red-500">{t(errorKey)}</p>
      </div>
    );
  }

  // ============================
  // LISTA VAZIA
  // ============================
  if (matches.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-muted-foreground">{t("matches.empty")}</p>
      </div>
    );
  }

  // ============================
  // LISTA DE MATCHES
  // ============================
  return (
    <div className="p-5 space-y-4">
      {matches.map((m) => (
        <Card
          key={m.id}
          className="flex items-center p-4 cursor-pointer transition hover:shadow-md"
          onClick={() => router.push(`/chatRoom/${m.id}`)}
        >
          <Avatar className="h-14 w-14 mr-4">
            <AvatarImage src={`https://botgrupo.lummen-app.com${m.photo}`} />
            <AvatarFallback>{m.name?.charAt(0) ?? "U"}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-lg font-semibold">{m.name}</p>
            <p className="text-sm text-muted-foreground">{t("matches.tapToChat")}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
