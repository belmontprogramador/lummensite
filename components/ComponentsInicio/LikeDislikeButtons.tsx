"use client";

import { Button } from "@/components/ui/button";
import { X, Star, Heart } from "lucide-react";
import { LikesAPI } from "@/service/likes";
import { useTranslation } from "react-i18next";

export default function LikeDislikeButtons({
  user,
  onLike,
  onDislike,
  onSuperLike,
  onMatch
}: any) {
  const { t } = useTranslation();

  const handleLike = async () => {
    try {
      const res = await LikesAPI.create(user.id);

      if (res?.matched) {
        console.log(t("likeButtons.logs.matchDetected"));

        const matchedData =
          res?.otherUser ||
          res?.targetUser ||
          res?.matchedUser ||
          res?.user ||
          user;

        if (onMatch) onMatch(matchedData);

        return;
      }

      if (onLike) onLike();
    } catch (err) {
      console.log(t("likeButtons.logs.likeError"), err);
    }
  };

  const handleSuperLike = async () => {
    try {
      console.log(t("likeButtons.logs.superLikeClick"), user?.id);

      if (!user?.id) {
        console.log(t("likeButtons.logs.superLikeInvalidUser"));
        return;
      }

      const res = await LikesAPI.create(user.id, true);

      if (res?.matched) {
        if (onMatch) onMatch(user);
      }

      if (onSuperLike) onSuperLike();
    } catch (err) {
      console.log(t("likeButtons.logs.superLikeError"), err);
    }
  };

  const handleDislike = async () => {
    try {
      if (!user?.id) {
        console.log("❌ Usuário inválido no dislike");
        return;
      }

      const res = await LikesAPI.dislike(user.id);

      if (onDislike) onDislike();
    } catch (err) {
      console.log(t("likeButtons.logs.dislikeError"), err);
    }
  };

  return (
    <div
      className="flex justify-evenly items-center mt-6 py-4"
      aria-label={t("likeButtons.container") as string}
    >
      {/* ❌ DISLIKE */}
      <Button
        onClick={handleDislike}
        aria-label={t("likeButtons.dislike") as string}
        className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center"
        variant="outline"
      >
        <X className="w-10 h-10 text-red-500" />
      </Button>

      {/* ⭐ SUPER LIKE */}
      <Button
        onClick={handleSuperLike}
        aria-label={t("likeButtons.superLike") as string}
        className="w-14 h-14 rounded-full bg-blue-100 shadow-md flex items-center justify-center"
        variant="outline"
      >
        <Star className="w-8 h-8 text-blue-500" />
      </Button>

      {/* ❤️ LIKE */}
      <Button
        onClick={handleLike}
        aria-label={t("likeButtons.like") as string}
        className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center"
        variant="outline"
      >
        <Heart className="w-10 h-10 text-green-500" />
      </Button>
    </div>
  );
}
