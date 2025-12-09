"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function MessageBubble({ msg, userId }: any) {
  const { t } = useTranslation();

  const isMe = msg.fromId !== userId;
  const baseURL = "https://botgrupo.lummen-app.com";

  const finalUrl =
    msg.imageUrl && msg.imageUrl.startsWith("/uploads")
      ? baseURL + msg.imageUrl
      : msg.imageUrl;

  return (
    <div
      className={cn(
        "my-1 max-w-[80%] rounded-xl px-3 py-2 text-sm",
        isMe
          ? "self-end bg-primary text-primary-foreground"
          : "self-start bg-muted text-foreground"
      )}
      aria-label={isMe ? t("chat.myMessage") : t("chat.otherMessage")}
    >
      {/* Texto */}
      {msg.text && (
        <p
          className="text-base"
          aria-label={t("chat.messageText")}
        >
          {msg.text}
        </p>
      )}

      {/* Mensagem vazia */}
      {!msg.text && !msg.imageUrl && (
        <p className="opacity-70 text-base">
          {t("chat.emptyMessage")}
        </p>
      )}

      {/* Imagem */}
      {msg.imageUrl && (
        <img
          src={finalUrl}
          alt={t("chat.imageMessage") || "Image"}
          className={cn(
            "w-48 h-48 rounded-lg object-cover mt-2",
            msg.text ? "mt-2" : "mt-0"
          )}
        />
      )}
    </div>
  );
}
