"use client";

import { useEffect, useState, useCallback, useContext } from "react";
import { LikesAPI } from "@/service/likes";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { FeedAPI } from "@/service/feed";
import { AuthContext } from "@/context/AuthContext";

import BottomSheetPlans from "@/components/modals/BottomSheetPlans";
import FullUserView from "@/components/ComponentsInicio/FullUserView";

import { checkAccess } from "@/utils/checkAccess";
import { useTranslation } from "react-i18next";

// shadcn / lucide
import { Loader2 } from "lucide-react";

export default function Inicio() {
  useAuthGuard();

  const { t } = useTranslation();
  const { user, refreshUser } = useContext(AuthContext);

  // ESTADOS DO FEED
  const [users, setUsers] = useState<any[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [showPlansModal, setShowPlansModal] = useState(false);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  // Atualiza o usuário ao focar
  useEffect(() => {
    refreshUser();
  }, []);

  // 🔥 Carrega primeira página
  useEffect(() => {
    if (!user) return;

    const blockScreen = checkAccess(user, "feed_list_free");
    if (blockScreen) {
      setLoading(false);
      return;
    }

    loadInitialUsers();
  }, [user]);

  // ================================================================
  // 🔥 CARREGAR PRIMEIRA PÁGINA
  // ================================================================
  async function loadInitialUsers() {
    try {
      setLoading(true);
      setErrorKey(null);
      setCursor(null);
      setHasMore(true);

      const isPremiumRoute = user?.plan?.allowedRoutes?.includes("feed_list_premium");

      const res = await FeedAPI.list(null, 20, isPremiumRoute);
      const items = res?.data?.items || [];
      const nextCursor = res?.data?.nextCursor ?? null;

      setUsers(items);
      setCursor(nextCursor);
      setHasMore(!!nextCursor);

    } catch (e) {
      console.log("❌ Erro ao carregar feed:", e);
      setErrorKey("inicio.errors.loadFeed");
    } finally {
      setLoading(false);
    }
  }

  // ================================================================
  // 🔥 CARREGAR MAIS
  // ================================================================
  async function loadMoreUsers() {
    if (loadingMore || !hasMore) return;
    if (!cursor) return;

    console.log("🔄 Carregando mais usuários… cursor:", cursor);

    try {
      setLoadingMore(true);

      const isPremiumRoute = user?.plan?.allowedRoutes?.includes("feed_list_premium");

      const res = await FeedAPI.list(cursor, 20, isPremiumRoute);
      const newUsers = res?.data?.items || [];
      const nextCursor = res?.data?.nextCursor ?? null;

      if (newUsers.length === 0) {
        setHasMore(false);
        return;
      }

      setUsers((prev: any[]) => {
        const ids = new Set(prev.map((u: any) => u.id));
        const filtered = newUsers.filter((u: any) => !ids.has(u.id));
        return [...prev, ...filtered];
      });

      setCursor(nextCursor);
      setHasMore(!!nextCursor);

    } catch (err) {
      console.log("❌ Erro ao carregar mais usuários:", err);
    } finally {
      setLoadingMore(false);
    }
  }

  // ================================================================
  // 🔥 PRELOAD AO CHEGAR EM 70%
  // ================================================================
  function onScroll(e: any) {
    const element = e.target;
    const scrollLeft = element.scrollLeft;
    const width = element.clientWidth;
    const scrollWidth = element.scrollWidth;

    const progress = (scrollLeft + width) / scrollWidth;

    if (progress >= 0.7) {
      loadMoreUsers();
    }
  }

  // ================================================================
  // 🔥 SKIP
  // ================================================================
  const handleSkip = async (skippedUserId: string) => {
    console.log("➡️ SKIP acionado:", skippedUserId);

    try {
      await LikesAPI.skip(skippedUserId);
    } catch (err) {
      console.log("❌ Erro skip:", err);
    }

    setUsers((prev) => prev.slice(1));
  };

  // ================================================================
  // 🔥 LOADING
  // ================================================================
  if (loading) {
    return (
      <div className="flex flex-col items-center mt-10 text-white">
        <Loader2 className="h-10 w-10 animate-spin" />
        <p className="mt-2">{t("inicio.loading")}</p>
      </div>
    );
  }

  // ================================================================
  // 🔥 ERRO
  // ================================================================
  if (errorKey) {
    return (
      <div className="mt-10 text-center text-red-500 px-6">
        {t(errorKey)}
      </div>
    );
  }

  // ================================================================
  // 🔥 BLOQUEIO
  // ================================================================
  const blockScreen = checkAccess(user, "feed_list_free");
  if (blockScreen) {
    return (
      <>
        {blockScreen}
        <BottomSheetPlans
          visible={showPlansModal}
          onClose={() => setShowPlansModal(false)}
        />
      </>
    );
  }

  // ================================================================
  // 🔥 FEED VAZIO
  // ================================================================
  if (!users.length) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-white">
        {t("inicio.emptyFeed")}
      </div>
    );
  }

  // ================================================================
  // 🔥 FEED (SCROLL HORIZONTAL IGUAL AO MOBILE)
  // ================================================================
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex overflow-x-auto snap-x snap-mandatory w-full h-full"
        onScroll={onScroll}
      >
        {users.map((u) => (
          <div key={u.id} className="snap-center min-w-full flex justify-center">
            <FullUserView
              user={u}
              onLike={() => setUsers((prev) => prev.slice(1))}
              onDislike={() => setUsers((prev) => prev.slice(1))}
              onSkip={() => handleSkip(u.id)}
              onSuperLike={() => console.log("⭐ SUPERLIKE:", u.id)}
            />
          </div>
        ))}
      </div>

      {loadingMore && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-white" />
        </div>
      )}
    </div>
  );
}
