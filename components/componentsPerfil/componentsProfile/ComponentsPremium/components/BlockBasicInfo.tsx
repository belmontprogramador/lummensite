"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Textarea } from "@/components/ui/textarea";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import PreferenceBlock from "@/components/componentsPerfil/componentsProfile/ComponentsPremium/components/PreferenceBlock";

export default function BlockBasicInfo({
  enums = {},
  form = {},
  onChange = () => {},
  onToggle = () => {},
}: any) {
  const { t } = useTranslation();

  const [openBirthday, setOpenBirthday] = useState(false);

  return (
    <div className="space-y-8">

      {/* =========================== */}
      {/* BIO */}
      {/* =========================== */}
     <PreferenceBlock title={t("profile.bio")}>
  <Textarea
    rows={4}
    value={form.bio || ""}
    onChange={(e) => onChange("bio", e.target.value)}
    className="min-h-[90px]"
  />
</PreferenceBlock>


      {/* =========================== */}
      {/* BIRTHDAY */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.birthday")}>
        <Popover open={openBirthday} onOpenChange={setOpenBirthday}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              {form.birthday
                ? form.birthday
                : t("profile.selectBirthday")}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={form.birthday ? new Date(form.birthday) : undefined}
              onSelect={(date: any) => {
                if (!date) return;
                const iso = date.toISOString().split("T")[0];
                onChange("birthday", iso);
                setOpenBirthday(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </PreferenceBlock>

      {/* =========================== */}
      {/* GENDER */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.gender")}>
        <div className="flex flex-wrap gap-2">
          {(enums.Gender || []).map((o: any) => (
            <Badge
              key={o.value}
              onClick={() => onToggle("gender", o.value)}
              className={cn(
                "cursor-pointer px-4 py-2 text-sm",
                (form.gender || []).includes(o.value)
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              )}
            >
              {o.label}
            </Badge>
          ))}
        </div>
      </PreferenceBlock>

      {/* =========================== */}
      {/* ORIENTATION */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.orientation")}>
        <div className="flex flex-wrap gap-2">
          {(enums.SexualOrientation || []).map((o: any) => (
            <Badge
              key={o.value}
              onClick={() => onToggle("orientation", o.value)}
              className={cn(
                "cursor-pointer px-4 py-2 text-sm",
                (form.orientation || []).includes(o.value)
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              )}
            >
              {o.label}
            </Badge>
          ))}
        </div>
      </PreferenceBlock>

      {/* =========================== */}
      {/* PRONOUN */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.pronoun")}>
        <div className="flex flex-wrap gap-2">
          {(enums.Pronoun || []).map((o: any) => (
            <Badge
              key={o.value}
              onClick={() => onToggle("pronoun", o.value)}
              className={cn(
                "cursor-pointer px-4 py-2",
                (form.pronoun || []).includes(o.value)
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              )}
            >
              {o.label}
            </Badge>
          ))}
        </div>
      </PreferenceBlock>

      {/* =========================== */}
      {/* HEIGHT */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.height")}>
        <Select
          value={form.heightCm ? String(form.heightCm) : ""}
          onValueChange={(v) => onChange("heightCm", Number(v))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t("profile.selectHeight")} />
          </SelectTrigger>

          <SelectContent className="max-h-60">
            {Array.from({ length: 121 }, (_, i) => i + 100).map((h) => (
              <SelectItem key={h} value={String(h)}>
                {h} cm
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PreferenceBlock>

      {/* =========================== */}
      {/* INTENTION */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.intention")}>
        <div className="flex flex-wrap gap-2">
          {(enums.Intention || []).map((o: any) => (
            <Badge
              key={o.value}
              onClick={() => onToggle("intention", o.value)}
              className={cn(
                "cursor-pointer px-4 py-2",
                (form.intention || []).includes(o.value)
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              )}
            >
              {o.label}
            </Badge>
          ))}
        </div>
      </PreferenceBlock>

      {/* =========================== */}
      {/* RELATIONSHIP TYPE */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.relationshipType")}>
        <div className="flex flex-wrap gap-2">
          {(enums.RelationshipType || []).map((o: any) => (
            <Badge
              key={o.value}
              onClick={() => onToggle("relationshipType", o.value)}
              className={cn(
                "cursor-pointer px-4 py-2",
                (form.relationshipType || []).includes(o.value)
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              )}
            >
              {o.label}
            </Badge>
          ))}
        </div>
      </PreferenceBlock>

      {/* =========================== */}
      {/* ZODIAC */}
      {/* =========================== */}
      <PreferenceBlock title={t("profile.zodiac")}>
        <div className="flex flex-wrap gap-2">
          {(enums.ZodiacSign || []).map((o: any) => (
            <Badge
              key={o.value}
              onClick={() => onToggle("zodiac", o.value)}
              className={cn(
                "cursor-pointer px-4 py-2",
                (form.zodiac || []).includes(o.value)
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground"
              )}
            >
              {o.label}
            </Badge>
          ))}
        </div>
      </PreferenceBlock>
    </div>
  );
}
