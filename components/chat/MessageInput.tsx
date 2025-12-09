"use client";

import { useState, ChangeEvent } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Image as ImageIcon, SendHorizonal } from "lucide-react";

const API_URL = "https://botgrupo.lummen-app.com";

export default function MessageInput({ onSend }: any) {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  async function handleImageSelect(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem("@token");

    const form = new FormData();
    form.append("file", file);

    try {
      const upload = await axios.post(`${API_URL}/messages/upload`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": "Ofuturoeosucessoenosso",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(t("chatInput.logs.uploadSuccess"), upload.data);

      // Envia mensagem com URL da imagem
      onSend("", upload.data.url);
    } catch (err: any) {
      console.log(t("chatInput.logs.uploadError"), err.response?.data || err);
    }
  }

  function send() {
    if (!text.trim()) return;
    onSend(text, null);
    setText("");
  }

  return (
    <div className="flex items-center gap-3 border-t bg-background p-3">
      {/* Upload de imagem */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <label className="cursor-pointer text-muted-foreground hover:text-primary transition">
              <ImageIcon size={24} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
            </label>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("chatInput.pickImage")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Campo de texto */}
      <Input
        className="flex-1 rounded-xl bg-muted px-4 py-2"
        placeholder={t("chatInput.placeholder") as string}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Botão enviar */}
      <Button
        onClick={send}
        size="icon"
        className="rounded-full"
        aria-label={t("chatInput.send") as string}
      >
        <SendHorizonal size={18} />
      </Button>
    </div>
  );
}
