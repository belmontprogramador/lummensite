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
  const { user: authUser } = useContext(AuthContext);

  const [matchVisible, setMatchVisible] = useState(false);
  const [matchedUser, setMatchedUser] = useState<any>(null);

  async function handleMatch(targetUser: any) {
    if (!targetUser?.id) return;

    try {
      const res = await UsersAPI.getOne(targetUser.id);
      setMatchedUser(res.data);
      setMatchVisible(true);
    } catch (err) {
      console.log("Erro ao buscar user do MATCH", err);
    }
  }

  const allowed = authUser?.plan?.allowedRoutes || [];
  const isPremium = allowed.includes("feed_list_premium");
  const isSuperPremium = allowed.includes("feed_list_super_premium");

  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-hidden">

      {/* FOTO / SWIPE CARD */}
      <div className="w-full flex justify-center">
        <SwipeUserCard
          user={user}
          onSkip={() => onSkip?.(user.id)}
        />
      </div>

      {/* BOTÕES */}
      <div className="w-full flex justify-center mt-4">
        <LikeDislikeButtons
          user={user}
          onLike={onLike}
          onDislike={onDislike}
          onSuperLike={onSuperLike}
          onMatch={handleMatch}
        />
      </div>

      {/* DETALHES */}
      <div className="w-full max-w-xl px-4 mt-6 overflow-y-auto">

        {!isPremium && !isSuperPremium && (
          <FeedFreeComponent user={user} />
        )}

        {(isPremium || isSuperPremium) && (
          <FeedPremiumComponent user={user} />
        )}

        {isSuperPremium && (
          <UserPreferencesView preference={user.preference} />
        )}

        <div className="h-20" /> {/* espaçamento final */}
      </div>

      {/* MATCH MODAL */}
      <MatchModal
        visible={matchVisible}
        user1={authUser}
        user2={matchedUser}
        onClose={() => setMatchVisible(false)}
      />
    </div>
  );
}
