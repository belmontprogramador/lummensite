"use client";

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";

import SwipeUserCard from "./SwipeUserCard";
import LikeDislikeButtons from "./LikeDislikeButtons";

import FeedFreeComponent from "./FeedFreeComponent";
import FeedPremiumComponent from "./FeedPremiumComponent";
import UserPreferencesView from "./UserPreferencesView";

import MatchModal from "./MatchModal";
import { UsersAPI } from "@/service/users";

export default function FullUserView({
  user,
  onLike,
  onDislike,
  onSuperLike,
  onSkip,
}: any) {
  // ====== SCREEN WIDTH (RN → Next) ======
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handler = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const { user: authUser } = useContext(AuthContext);

  // ==========================
  // MATCH MODAL STATE
  // ==========================
  const [matchVisible, setMatchVisible] = useState(false);
  const [matchedUser, setMatchedUser] = useState<any>(null);

  async function handleMatch(targetUser: any) {
    if (!targetUser?.id) {
      console.log("⚠️ MATCH sem user válido. Cancelado.");
      return;
    }

    try {
      const res = await UsersAPI.getOne(targetUser.id);
      setMatchedUser(res.data);
      setMatchVisible(true);
    } catch (err) {
      console.log("Erro ao buscar user do MATCH", err);
    }
  }

  // ==========================
  // PREMIUM LEVELS
  // ==========================
  const allowed = authUser?.plan?.allowedRoutes || [];
  const isPremium = allowed.includes("feed_list_premium");
  const isSuperPremium = allowed.includes("feed_list_super_premium");

  return (
    <div
      className="overflow-y-auto p-5 w-full"
      style={{ maxWidth: screenWidth ?? "100%" }}
    >
      {/* Foto + Carousel */}
      <SwipeUserCard
        user={user}
        onSkip={() => {
          console.log("⏭️ FullUserView: onSkip recebido para user:", user.id);
          onSkip?.(user.id);
        }}
      />

      {/* Buttons Like / Dislike / SuperLike */}
      <LikeDislikeButtons
        user={user}
        onLike={onLike}
        onDislike={onDislike}
        onSuperLike={onSuperLike}
        onMatch={handleMatch}
      />

      {/* ========= FREE ========= */}
      {!isPremium && !isSuperPremium && (
        <FeedFreeComponent user={user} />
      )}

      {/* ========= PREMIUM ========= */}
      {(isPremium || isSuperPremium) && (
        <FeedPremiumComponent user={user} />
      )}

      {/* ========= SUPER PREMIUM ========= */}
      {isSuperPremium && (
        <UserPreferencesView preference={user.preference} />
      )}

      <div className="h-24" />

      {/* MATCH MODAL (shadcn-ready) */}
      <MatchModal
        visible={matchVisible}
        user1={authUser}
        user2={matchedUser}
        onClose={() => setMatchVisible(false)}
      />
    </div>
  );
}
