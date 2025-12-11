"use client";

import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const BASE_URL = "https://botgrupo.lummen-app.com";

interface LikeCardProps {
  user: any;
  type: "received" | "sent" | string;
  onClick?: () => void;
}

export default function LikeCard({ user, type, onClick }: LikeCardProps) {
  const { t } = useTranslation();

  const photoUrl = user?.photo
    ? `${BASE_URL}${user.photo}`
    : (t("likeCard.placeholderImage") as string);

  const label =
    type === "received"
      ? t("likeCard.received")
      : type === "sent"
      ? t("likeCard.sent")
      : t("likeCard.unknown");

  return (
    <Card
      onClick={onClick}
      className="
        w-full flex items-center p-4 cursor-pointer
        transition hover:shadow-md
      "
      aria-label={t("likeCard.openProfile") as string}
    >
      <Avatar className="h-14 w-14 mr-4">
        <AvatarImage src={photoUrl} alt={user?.name ?? "User"} />
        <AvatarFallback>{user?.name?.charAt(0) ?? "U"}</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-lg font-semibold">{user.name}</p>

        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </Card>
  );
}
