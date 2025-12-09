"use client";

import { useTranslation } from "react-i18next";

export default function FeedFreeComponent({ user }: any) {
  const { t } = useTranslation();
  const profile = user.profile || {};

  const freeKeys = [
    "bio",
    "birthday",
    "gender",
    "orientation",
    "city",
    "state",
    "country",
    "pronoun",
    "intention",
    "relationshipType",
    "languages",
  ];

  const labels: Record<string, string> = {
    bio: t("feedFree.bio"),
    birthday: t("feedFree.birthday"),
    gender: t("feedFree.gender"),
    orientation: t("feedFree.orientation"),
    city: t("feedFree.city"),
    state: t("feedFree.state"),
    country: t("feedFree.country"),
    pronoun: t("feedFree.pronoun"),
    intention: t("feedFree.intention"),
    relationshipType: t("feedFree.relationshipType"),
    languages: t("feedFree.languages"),
  };

  const getAge = (date: string) => {
    if (!date) return null;
    const d = new Date(date);
    const now = new Date();
    let age = now.getFullYear() - d.getFullYear();

    if (
      now.getMonth() < d.getMonth() ||
      (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())
    ) {
      age--;
    }

    return age;
  };

  const normalizeValue = (key: string, value: any) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return "—";
    }

    if (key === "birthday") {
      return `${getAge(value)} ${t("feedFree.years")}`;
    }

    if (Array.isArray(value)) return value.join(", ");

    return value.toString();
  };

  return (
    <section className="mt-6">
      {/* TÍTULO */}
      <h2 className="text-2xl font-bold mb-4">
        {t("feedFree.about")}
      </h2>

      {/* LISTAGEM */}
      <div className="space-y-2">
        {freeKeys.map((key) => (
          <p key={key} className="text-base text-gray-700">
            <span className="font-semibold">{labels[key] || key}:</span>{" "}
            {normalizeValue(key, profile[key])}
          </p>
        ))}
      </div>
    </section>
  );
}
